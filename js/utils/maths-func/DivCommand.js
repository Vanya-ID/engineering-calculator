import { Command } from "../../calculator/calculator";

function div(x, y) {
  return y / x;
}
export class DivCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return div(this.x, this.y);
  }
}
