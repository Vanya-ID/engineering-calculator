import { get_factorial } from "../../maths-func/get-factorial";
import { Command } from "../calculator";

export class FactorialCommand extends Command {
  constructor(x) {
    super();
    this.x = x;
  }
  execute() {
    return get_factorial(this.x);
  }
}
