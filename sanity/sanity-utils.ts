import { createClient, groq } from "next-sanity";
import clientConfig from "./lib/client";
import { Post } from "@/types/Post";
import { Book } from "@/types/Book";
import { Video } from "@/types/Video";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _type,
      title,
      slug {
        _type,
        current,
      },
      mainImage{
        asset->{
          url,
        },
      },
      body[]{
        _type,
        style,
        children[]{
          _type,
          text,
          marks
        },
        markDefs[]{
          _type,
          _key,
          href
        }
      },
      categories[]-> {
        title
      }
    }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _type,
      title,
      slug {
        _type,
        current,
      },
      mainImage{
        asset->{
          url,
        },
      },
      body[]{
        _type,
        style,
        children[]{
          _type,
          text,
          marks
        },
        markDefs[]{
          _type,
          _key,
          href
        }
      },
      categories[]-> {
        title
      }
    }`,
    { slug }
  );
}

export async function getBooks(): Promise<Book[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "book"]{
      _id,
      _type,
      name,
      "fileURL": file.asset->url,
      mainImage{
        asset->{
          url,
        },
      },
      categories[]-> {
        title
      },
      body[]{
        _type,
        style,
        children[]{
          _type,
          text,
          marks
        },
        markDefs[]{
          _type,
          _key,
          href
        }
      },
    }`
  );
}

export async function getVideos(): Promise<Video[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "video"]{
      _id,
      _type,
      name,
      videoLink,
      body[]{
        _type,
        style,
        children[]{
          _type,
          text,
          marks
        },
        markDefs[]{
          _type,
          _key,
          href
        }
      },
    }`
  );
}