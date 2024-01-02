import { ApplicationListenEvent } from "oak/application.ts";

export function listeningHandler(
  { hostname, port, secure }: ApplicationListenEvent,
) {
  // TODO: use a logger
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`,
  );
}
