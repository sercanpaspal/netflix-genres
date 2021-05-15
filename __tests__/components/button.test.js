import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "../../components/button";

describe("<Button />", () => {
  afterEach(cleanup);

  it("should call onClick prop when click event occurs", async () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button onClick={onClick} />);

    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
