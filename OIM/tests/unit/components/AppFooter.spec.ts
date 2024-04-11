import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AppFooter from "../../../components/AppFooter.vue";

describe("AppFooter", () => {
  it("Vue instance mounted", () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.vm).toBeTruthy();
  });
  it("Check footer text has name", () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.text()).toContain("Made by Duc Vi");
  });
});
