import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/testing-react"

import * as stories from "./index.stories"

const {
  ClickIdLabel,
  ClickPasswordLabel,
  Empty,
  InputInvalidForm1,
  InputInvalidForm2,
  InputInvalidForm3,
  InputValidForm,
  LoggedIn,
} = composeStories(stories) as any // TODO: 型エラー解決できず。 beta 版だから一旦 any で回避

describe("Form", () => {
  describe("focus", () => {
    it.each([
      { Story: ClickIdLabel, target: "id" },
      { Story: ClickPasswordLabel, target: "password" },
    ] as const)("$target label をクリックしたら $target input に focus があたる", async ({ Story , target}) => {
      render(<Story />)

      await Story.play()
      expect(screen.getByPlaceholderText(target)).toHaveFocus()
    })
  })

  describe("ログインボタンの非活性パターン", () => {
    it("id, password が空の場合", async () => {
      render(<Empty />)

      expect(screen.getByText("ログイン")).toBeDisabled()
    })

    it.each([
      ["id", InputInvalidForm1],
      ["pw", InputInvalidForm2],
      ["id, password", InputInvalidForm3],
    ] as const)("%s の入力値が正しくない場合", async (_, Story) => {
      render(<Story />)

      await Story.play()
      expect(screen.getByText("ログイン")).toBeDisabled()
    })
  })

  it("id, password の入力値が正しい場合、ログインボタンは活性", async () => {
    render(<InputValidForm />)

    await InputValidForm.play()
    expect(screen.getByText("ログイン")).toBeEnabled()
  })

  it("form が invalid 時、露軍ボタンを押すとログイン済みになる", async () => {
    const mounted = render(<LoggedIn />)

    await LoggedIn.play()
    expect(mounted.container).toHaveTextContent("ログイン済み")
  })
})
