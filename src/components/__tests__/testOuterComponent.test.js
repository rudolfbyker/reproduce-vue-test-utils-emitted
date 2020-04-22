import { createLocalVue, mount } from "@vue/test-utils";
import TestOuterComponent from "@/components/TestOuterComponent";
import TestInnerComponent from "@/components/TestInnerComponent";

const localVue = createLocalVue();

describe("TestOuterComponent", () => {
  it("Changes the markup when the child emits an input event", async () => {
    const outer = mount(TestOuterComponent, {
      localVue,
    });
    await localVue.nextTick();

    // Find the inner component:

    // With this method, the test fails.
    // const inner = outer.find(".test-inner-component");

    // With this method, the test passes.
    const inner = outer.find(TestInnerComponent);

    // Emit a new value from the child component.
    inner.vm.$emit("input", "AAAAAAAAARGH");
    await localVue.nextTick();

    // Check emits
    const outerEmitted = outer.emitted("input");
    const innerEmitted = inner.emitted("input");

    expect(outerEmitted).toBeUndefined();
    expect(innerEmitted).toHaveLength(1);
    expect(innerEmitted[0]).toEqual(["AAAAAAAAARGH"]);
  });
});
