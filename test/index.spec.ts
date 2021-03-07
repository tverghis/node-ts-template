import { sayHello } from "../src";

describe("index", () => {
  test("it works!", () => {
    expect(sayHello()).toEqual("Hello, world!");
  });
});
