import { expect, test } from "@nuxt/test-utils/playwright";

test("Increment and decrement test", async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page.getByText("GENERATOR")).toHaveText("GENERATOR");
  await page.getByTestId("increment").click();
  await expect(page.getByTitle("Amount of test data")).toHaveText("6");
  await page.getByTestId("decrement").dblclick();
  await expect(page.getByTitle("Amount of test data")).toHaveText("4");
});
