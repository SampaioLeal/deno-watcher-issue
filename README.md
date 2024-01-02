## Reproducing the issue

- Run `deno task prisma:generate`
- Run `deno task dev`
- Save some files and the watcher will work as expected
- Hit `CTRL+C` on the terminal and save some files
- See deno process still running and watcher clearing the terminal
