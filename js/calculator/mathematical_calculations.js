import { AddCommand } from "./commands/AddCommand";
import { answer_input } from "../inserts";
import { Calculator } from "./calculator";
import { MulCommand } from "./commands/MulCommand";
import { SubCommand } from "./commands/SubCommand";
import { DivCommand } from "./commands/DivCommand";
import { RootCommand } from "./commands/RootCommand";
import { FactorialCommand } from "./commands/FactorialCommand";
import { PowCommand } from "./commands/PowCommand";
import { PercentCommand } from "./commands/PercentCommand";
import { LogCommand } from "./commands/LogCommand";

export function mathematical_calculations(array, command) {
  const calculator = new Calculator();
  switch (command) {
    case "*": {
      calculator.execute(new MulCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "+": {
      calculator.execute(new AddCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "-": {
      calculator.execute(new SubCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "/": {
      calculator.execute(new DivCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "**0.5": {
      calculator.execute(new RootCommand(array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "!": {
      calculator.execute(new FactorialCommand(array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "**": {
      calculator.execute(new PowCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "/100*": {
      calculator.execute(new PercentCommand(array.pop(), array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "s": {
      calculator.execute(new LogCommand(array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
    case "n": {
      calculator.execute(new LnCommand(array.pop()));
      array.push(calculator.getCurrentValue());
      break;
    }
  }
  if (array.length === 0 && !command)
    answer_input.textContent = calculator.getCurrentValue();
}
