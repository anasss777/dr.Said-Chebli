import { createClient, groq } from "next-sanity";
import clientConfig from "./lib/client";
import { Post } from "@/types/Post";

// export async function getPosts(): Promise<Post[]> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "post"]{
//         _id,
//         _createdAt,
//         title,
//         "slug": slug.current,
//         "body": body[].children[].text
//         }`
//     )
//   }

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