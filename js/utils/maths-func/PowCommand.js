import { Command } from "../../calculator/calculator";

function pow(x, y) {
  return y ** x;
}
export class PowCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return pow(this.x, this.y);
  }
}
