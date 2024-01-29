import PostList from "@/components/section/PostList";
import { Separator } from "@/components/ui/separator";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Head>
        <link rel="canonical" href="https://hoyosmash.com/posts" />
      </Head>
      <div className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="mb-8 text-center text-4xl font-bold text-primary">
            All Posts
          </h1>
          <Separator className="mb-8" />
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
}
