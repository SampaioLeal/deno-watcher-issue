export function gracefulShutdown() {
  console.log("I have to go! bye bye");
  Deno.exit(0);

  /**
   * TODO: close gRPC server
   * TODO: close database connections
   * TODO: close third party services connections
   */
}
