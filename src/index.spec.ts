import * as jsc from "jsverify";
import { linear } from ".";

it("the slope between two points should be constant", () => {
  const constantSlope = jsc.forall("integer", "integer", (x1: number, x2: number) => {
    if (x1 === x2) {
      return true;
    }
    const y1 = linear(x1);
    const y2 = linear(x2);
    const slope = (y2 - y1) / (x2 - x1);
    console.log({ x1, x2, slope });
    return slope === 0.5;
  });
  jsc.assert(constantSlope);
});
