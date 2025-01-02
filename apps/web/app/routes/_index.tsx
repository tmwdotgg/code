import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { db } from "@repo/db";
import { posts } from "@repo/db/schema";

export async function loader() {
  const allPosts = await db.select().from(posts).orderBy(posts.createdAt);
  return json({ posts: allPosts });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;

  if (name) {
    await db.insert(posts).values({ name });
  }

  return json({ success: true });
}

export default function Index() {
  const { posts: allPosts } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submit(formData, { method: "post" });
    e.currentTarget.reset();
  };

  return (
    <main className="container mx-auto p-8">
      <div className="flex flex-col gap-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Posts
        </h1>

        <form 
          onSubmit={handleSubmit} 
          className="flex gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter post name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Create Post
          </button>
        </form>
        <h1 className="font-light">Weight 300</h1>
<h1 className="font-normal">Weight 400</h1>
<h1 className="font-medium">Weight 500</h1>
<h1 className="font-semibold">Weight 600</h1>
<h1 className="font-bold">Weight 700</h1>
<h1 className="font-extrabold">Weight 800</h1>
        <section className="grid gap-4">
          {allPosts.map((post) => (
            <div 
              key={post.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {post.name}
                </h2>
                <time 
                  className="text-sm text-muted-foreground"
                  dateTime={post.createdAt.toString()}
                >
                  {new Date(post.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
