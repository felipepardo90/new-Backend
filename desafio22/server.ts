import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
const port = 8080;

interface IPOSTBody {
  name: string;
  lastName: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method == "POST") {
    console.log(req.headers);
    // * application/json
    if (
      req.headers.has("content-type") &&
      req.headers.get("content-type")?.startsWith("application/json")
    ) {
      const body: IPOSTBody = await req.json();
      console.log(body);
      return new Response(JSON.stringify({ data: body }), {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
    }
    return new Response("Error! Espera formato json", { status: 200 });
  } else {
    return new Response(
      `<html><body><h1>Qué tal!!!</h1> <form method="POST"><input type="text" name="name" / ></form></html>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      }
    );
  }
};
await serve(handler, { port });