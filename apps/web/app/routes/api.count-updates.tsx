import type { LoaderFunction } from "@remix-run/node";

// Share the count variable between routes
let count = 0;

export const getCount = () => count;
export const setCount = (newCount: number) => {
  count = newCount;
  return count;
};

export const loader: LoaderFunction = () => {
  // Create SSE response
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      
      // Send initial count
      controller.enqueue(encoder.encode(`data: ${count}\n\n`));
      
      // Keep connection alive
      const interval = setInterval(() => {
        controller.enqueue(encoder.encode(`data: ${count}\n\n`));
      }, 1000);
      
      // Cleanup on close
      return () => {
        clearInterval(interval);
      };
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
};
