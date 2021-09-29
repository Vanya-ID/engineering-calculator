import { get_factorial } from "./get-factorial";
import { Command } from "../../calculator/calculator";

export class FactorialCommand extends Command {
  constructor(x) {
    super();
    this.x = x;
  }
  execute() {
    return get_factorial(this.x);
  }
}
