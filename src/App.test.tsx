import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    render(<App />);
  });

  it("updates the board when the size is changed", async () => {
    const user = userEvent.setup({ document });
    const size = 6;

    render(<App />);

    await user.selectOptions(screen.getByRole("combobox"), [size.toString()]);

    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: size.toString() })
        .selected
    ).toBe(true);
    expect(
      screen.getByRole<HTMLOptionElement>("option", { name: "3" }).selected
    ).toBe(false);

    expect(screen.getAllByRole("button", { name: "" })).toHaveLength(
      size * size
    );
  });
});
