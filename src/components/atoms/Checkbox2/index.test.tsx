import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as stories from "./index.stories"

// @ts-expect-error
const { Checked } = composeStories(stories)
it("Check をクリックしたら checkbox が checked になる", async () => {
  render(<Checked />)

  await Checked.play()
  expect(screen.getByLabelText("Check")).toBeChecked()
})
