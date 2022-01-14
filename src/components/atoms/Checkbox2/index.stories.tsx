import { ComponentStoryObj } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"

import { Checkbox2 } from "."

export default {
  component: Checkbox2,
}

export const Default: ComponentStoryObj<typeof Checkbox2> = {}

export const Checked: ComponentStoryObj<typeof Checkbox2> = {
  play: async ({ canvasElement}) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText("Check"))
  }
}
