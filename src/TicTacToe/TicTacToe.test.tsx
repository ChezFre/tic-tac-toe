import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TicTacToe } from "./TicTacToe";

describe("<TicTacToe />", () => {
  it("should render", () => {
    render(<TicTacToe />);
  });

  it("should show a board", () => {
    const size = 4;
    render(<TicTacToe size={size} />);
    expect(screen.getAllByRole("button")).toHaveLength(size * size);
  });

  it("should update the board when clicked", async () => {
    const user = userEvent.setup();

    const size = 4;
    render(<TicTacToe size={size} />);

    let button = screen.getAllByRole("button")[0];
    await user.click(button);
    expect(screen.getAllByText("x")).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(size * size - 1);

    button = screen.getAllByRole("button")[1];
    await user.click(button);
    expect(screen.getAllByText("o")).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(size * size - 2);
  });

  it("should declare a winner at the end", async () => {
    const user = userEvent.setup();

    const size = 3;
    render(<TicTacToe size={size} />);

    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[2]);
    await user.click(screen.getAllByRole("button")[0]);
    await user.click(screen.getAllByRole("button")[2]);
    await user.click(screen.getAllByRole("button")[0]);

    expect(screen.getAllByText("x")).toHaveLength(3);
    expect(screen.getByText(/x has won/i)).toBeInTheDocument();
  });

  it("should show the user when the game ends in a draw", async () => {
    const user = userEvent.setup();

    const size = 3;
    render(<TicTacToe size={size} />);

    await user.click(screen.getAllByRole("button")[8]); //x
    await user.click(screen.getAllByRole("button")[7]); //o
    await user.click(screen.getAllByRole("button")[6]); //x

    await user.click(screen.getAllByRole("button")[3]); //o
    await user.click(screen.getAllByRole("button")[3]); //x
    await user.click(screen.getAllByRole("button")[0]); //o

    await user.click(screen.getAllByRole("button")[2]); //x
    await user.click(screen.getAllByRole("button")[1]); //o
    await user.click(screen.getAllByRole("button")[0]); //x

    expect(screen.getByText("Game ended in a draw")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Restart" })).toBeInTheDocument();
  });

  it("should allow the user to restart the game", async () => {
    const user = userEvent.setup();

    const size = 3;
    render(<TicTacToe size={size} />);

    await user.click(screen.getAllByRole("button")[8]); //x
    await user.click(screen.getAllByRole("button")[7]); //o
    await user.click(screen.getAllByRole("button")[6]); //x

    await user.click(screen.getAllByRole("button")[3]); //o
    await user.click(screen.getAllByRole("button")[3]); //x
    await user.click(screen.getAllByRole("button")[0]); //o

    await user.click(screen.getAllByRole("button")[2]); //x
    await user.click(screen.getAllByRole("button")[1]); //o
    await user.click(screen.getAllByRole("button")[0]); //x

    await user.click(screen.getByRole("button", { name: "Restart" }));

    expect(screen.getByText("x is at play")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(size * size);
  });
});
