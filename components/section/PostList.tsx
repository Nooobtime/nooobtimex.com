import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Post {
  slug: string;
  title: string;
  Image: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <Card className="cursor-pointer bg-base-100 shadow-xl">
            <CardContent className="p-0">
              <figure>
                <Image
                  src={post.Image}
                  alt={`Cover image for ${post.title}`}
                  className="rounded-2xl object-cover"
                  width={600}
                  height={200}
                />
              </figure>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-center text-base-content text-lg">
                {post.title}
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
