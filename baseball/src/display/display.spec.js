import React from "react";
import { render, getByTestID } from "react-testing-library";
import Display from "./display";
import "jest-dom/extend-expect";


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
describe("<Display/>", () => {
    it("renders display", () => {
      const testState = {
        player: "piddles",
        balls: 3,
        strikes: 1
      };
      const { getByTestID } = render(<Display atBat={testState} />);
      const player = getByTestID(/player/i);
      const balls = getByTestID(/balls/i);
      const strikes = getByTestID(/strikes/i);
      expect(player).toHaveTextContent(/piddles/i);
      expect(balls).toHaveTextContent(/3/i);
      expect(strikes).toHaveTextContent(/1/i);
    });
  });