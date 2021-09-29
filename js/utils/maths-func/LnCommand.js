import { Command } from "../../calculator/calculator";

function ln(x) {
  return Math.log(x);
}
export class LnCommand extends Command {
  constructor(x) {
    super();
    this.x = x;
  }
  execute() {
    return ln(this.x);
  }
}
