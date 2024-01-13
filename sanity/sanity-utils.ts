import { createClient, groq } from "next-sanity";
import clientConfig from "./lib/client";
import { Post } from "@/types/Post";

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

export async function getCategoryByID(_id: string): Promise<Category> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && _id == $_id][0]{
      _id,
      _createdAt,
      title,
      description
    }`,
    {_id}
  )
}