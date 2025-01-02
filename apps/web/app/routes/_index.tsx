import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getCount, setCount } from "./api.count-updates";
import { Card } from "@repo/ui/card";

export async function loader() {
  return json({ count: getCount() });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const action = formData.get("action");
  
  if (action === "increment") {
    setCount(getCount() + 1);
  } else if (action === "decrement") {
    setCount(getCount() - 1);
  }

  return json({ count: getCount() });
}

export default function Index() {
  const { count: initialCount } = useLoaderData<typeof loader>();
  const [count, setCount] = useState(initialCount);
  const submit = useSubmit();

  useEffect(() => {
    const eventSource = new EventSource("/api/count-updates");
    
    eventSource.onmessage = (event) => {
      setCount(Number(event.data));
    };

    return () => eventSource.close();
  }, []);

  const handleClick = (action: "increment" | "decrement") => {
    const formData = new FormData();
    formData.append("action", action);
    submit(formData, { method: "post" });
  };

  return (
      <div className="flex h-screen items-center justify-center">
        <Card>asdad </Card>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl font-bold">Remix Counter</h1>
            <div className="flex flex-col items-center gap-4">
          <p className="text-4xl font-bold">{count}</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleClick("increment")}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => handleClick("decrement")}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
