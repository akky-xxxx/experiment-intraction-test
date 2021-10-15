import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Checkbox1 } from "."

it("Check をクリックしたら checkbox が checked になる", () => {
  render(<Checkbox1 />)

  userEvent.click(screen.getByText("Check"))
  expect(screen.getByLabelText("Check")).toBeChecked()
})
