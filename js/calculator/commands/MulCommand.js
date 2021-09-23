import { Command } from "../calculator";

function mul(x, y) {
  return x * y;
}
export class MulCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return mul(this.x, this.y);
  }
}
