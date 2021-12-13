describe("this is text ,manager", () => {
  let textManager;

  beforeEach(() => {
    textManager = new TextManager();
  });

  it("pass the text value", () => {
    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });

  it("modify the text value", () => {
    const newText = { data: "Hello Zebra" };
    textManager.setValue(newText);

    expect(textManager.getValue()).toBe(newText.data);
  });
});
