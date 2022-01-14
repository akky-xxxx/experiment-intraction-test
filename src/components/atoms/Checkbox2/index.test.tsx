import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as stories from "./index.stories"

const { Checked } = composeStories(stories)
it("Check をクリックしたら checkbox が checked になる", async () => {
  const { container } = render(<Checked />)

  await Checked.play({ canvasElement: container })
  expect(screen.getByLabelText("Check")).toBeChecked()
})
