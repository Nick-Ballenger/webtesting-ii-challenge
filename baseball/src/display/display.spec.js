import React from "react";
import { render, getByTestID } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./display";

 describe("<Display/>", () => {
  it("renders display", () => {
    const testState = {
      player: "Jibbler",
      balls: 0,
      strikes: 0
    };
    const { getByTestID } = render(<Display atBat={testState} />);
    const player = getByTestID(/player/i);
    const balls = getByTestID(/balls/i);
    const strikes = getByTestID(/strikes/i);
    expect(player).toHaveTextContent(/Jibbler/i);
    expect(balls).toHaveTextContent(/0/i);
    expect(strikes).toHaveTextContent(/Strikes/i);
  });
});