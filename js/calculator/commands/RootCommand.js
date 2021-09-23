import { Command } from "../calculator";

function root(x) {
  return x ** 0.5;
}
export class RootCommand extends Command {
  constructor(x) {
    super();
    this.x = x;
  }
  execute() {
    return root(this.x);
  }
}
