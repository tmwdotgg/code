// app/routes/api.hello.ts
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

type HelloResponse = {
 message: string;
};

export const loader: LoaderFunction = async () => {
 return json<HelloResponse>({ message: "Hello World" });
};
