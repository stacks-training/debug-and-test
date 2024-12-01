
import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;
const address2 = accounts.get("wallet_2")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/stacks/clarinet-js-sdk
*/

describe("counter tests", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("get default user counter should be 0", () => {
    let { result } = simnet.callReadOnlyFn(
      "counter",
      "get-user-count",
      [ Cl.standardPrincipal(address2) ],
      address1,
    );
    expect(result).toBeUint(0);
  });

  it("global counter should be start at 0", () => {
    let { result } = simnet.callReadOnlyFn(
      "counter",
      "get-global-count",
      [],
      address1,
    );
    expect(result).toBeInt(0);
  });

  it("global counter increment function", () => {
    let { result } = simnet.callPublicFn(
      "counter",
      "increment",
      [],
      address1,
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it("global counter decrement function", () => {
    let { result } = simnet.callPublicFn(
      "counter",
      "decrement",
      [],
      address1,
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it("validate how increment function works", () => {
    // call increment function
    let { result } = simnet.callPublicFn(
      "counter",
      "increment",
      [],
      address1,
    );
    // check global counter value
    let globalCounter = simnet.getDataVar(
      "counter",
      "global-count",
    )
    // check user counter value
    let userCounter = simnet.getMapEntry(
      "counter",
      "counters",
      Cl.standardPrincipal(address1),
    );
    // validate all results
    expect(result).toBeOk(Cl.bool(true));
    expect(globalCounter).toBeInt(1);
    expect(userCounter).toBeSome(Cl.uint(1));
  });
});
