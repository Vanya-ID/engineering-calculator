import { Command } from "../../calculator/calculator";

function percent(x, y) {
  return (x / 100) * y;
}
export class PercentCommand extends Command {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  execute() {
    return percent(this.x, this.y);
  }
}
