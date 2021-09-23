import { Command } from "../calculator";

function add(x, y) {
  return +x + +y;
}
export class AddCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return add(this.x, this.y);
  }
}
