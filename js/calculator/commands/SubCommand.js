import { Command } from "../calculator";

function sub(x, y) {
  return +y - +x;
}
export class SubCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return sub(this.x, this.y);
  }
}
