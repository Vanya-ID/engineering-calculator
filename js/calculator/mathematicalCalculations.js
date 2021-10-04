import { AddCommand } from "../utils/maths-func/AddCommand";
import { Calculator } from "./calculator";
import { MulCommand } from "../utils/maths-func/MulCommand";
import { SubCommand } from "../utils/maths-func/SubCommand";
import { DivCommand } from "../utils/maths-func/DivCommand";
import { RootCommand } from "../utils/maths-func/RootCommand";
import { FactorialCommand } from "../utils/maths-func/FactorialCommand";
import { PowCommand } from "../utils/maths-func/PowCommand";
import { PercentCommand } from "../utils/maths-func/PercentCommand";
import { LogCommand } from "../utils/maths-func/LogCommand";
import { answer_input } from "../index";
import { LnCommand } from "../utils/maths-func/LnCommand";

export function mathematicalCalculations(array, command) {
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
