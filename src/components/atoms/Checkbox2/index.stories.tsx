import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"

import { Checkbox2 } from "."

export default {
  component: Checkbox2,
}

export const Default = {}

export const Checked = {
  play: async () => {
    await userEvent.click(screen.getByText("Check"))
  }
}
