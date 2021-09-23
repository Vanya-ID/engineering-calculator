import { Command } from "../calculator";

function log(x) {
  return Math.log10(x);
}
export class LogCommand extends Command {
  constructor(x) {
    super();
    this.x = x;
  }
  execute() {
    return log(this.x);
  }
}
