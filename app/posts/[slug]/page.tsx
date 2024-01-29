import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Fetch posts asynchronously
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug); // Fetch post data asynchronously
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  const datePublished = format(parseISO(post.datePublished), "LLLL d, yyyy");
  const dateModified = format(parseISO(post.dateModified), "LLLL d, yyyy");

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://hoyosmash.com/${params.slug}`} />
      </Head>
      <main className="container mx-auto px-4  bg-background">
        <Card className="mx-auto max-w-4xl rounded-2xl shadow-lg">
          <CardContent className="p-6">
            {/* Cover Image */}
            <div className="mb-6">
              <Image
                src={post.Image}
                alt={`Cover Image for ${post.title}`}
                className="mx-auto object-cover max-h-96 rounded"
                width={1200}
                height={800}
              />
            </div>
            {/* Title and Dates */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              <div className="flex justify-center space-x-4 text-sm text-inherit-foreground">
                <time dateTime={post.datePublished}>
                  Published: {datePublished}
                </time>
                <time dateTime={post.dateModified}>
                  Updated: {dateModified}
                </time>
              </div>
            </div>
            {/* Content */}
            <div
              className="mt-6 prose lg:prose-xl"
              dangerouslySetInnerHTML={{
                __html: content.replace(
                  /<a /g,
                  '<a class="text-blue-500 hover:underline" '
                ),
              }}
            />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
