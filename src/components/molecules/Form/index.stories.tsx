import { ComponentStoryObj } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"

import { Form } from "."
import { sleep } from "../../../shared/utils/sleep"

export default {
  component: Form,
}

export const Empty: ComponentStoryObj<typeof Form> = {}

export const ClickIdLabel: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await sleep(500)
    await userEvent.click(screen.getByText("ID:"))
  }
}

export const InputInvalidId: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await userEvent.type(screen.getByText("ID:"), "test", { delay: 100 })
  }
}

export const InputValidId: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await userEvent.type(screen.getByText("ID:"), "test-test", { delay: 100 })
  }
}

export const ClickPasswordLabel: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await userEvent.click(screen.getByText("PW:"))
  }
}

export const InputInvalidPassword: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await userEvent.type(screen.getByText("PW:"), "1234", { delay: 100 })
  }
}

export const InputValidPassword: ComponentStoryObj<typeof Form> = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement)
    await userEvent.type(screen.getByText("PW:"), "test-pass", { delay: 100 })
  }
}

export const InputInvalidForm1: ComponentStoryObj<typeof Form> = {
  play: async (context) => {
    // FIXME: type guard しないで型エラーの解消
    if (typeof InputInvalidId.play === "function" && typeof InputInvalidPassword.play === "function") {
      await InputInvalidId.play(context)
      await InputInvalidPassword.play(context)
    }
  }
}

export const InputInvalidForm2: ComponentStoryObj<typeof Form> = {
  play: async (context) => {
    // FIXME: type guard しないで型エラーの解消
    if (typeof InputValidId.play === "function" && typeof InputInvalidPassword.play === "function") {
      await InputValidId.play(context)
      await InputInvalidPassword.play(context)
    }
  }
}

export const InputInvalidForm3: ComponentStoryObj<typeof Form> = {
  play: async (context) => {
    // FIXME: type guard しないで型エラーの解消
    if (typeof InputInvalidId.play === "function" && typeof InputValidPassword.play === "function") {
      await InputInvalidId.play(context)
      await InputValidPassword.play(context)
    }
  }
}

export const InputValidForm: ComponentStoryObj<typeof Form> = {
  play: async (context) => {
    // FIXME: type guard しないで型エラーの解消
    if (typeof InputValidId.play === "function" && typeof InputValidPassword.play === "function") {
      await InputValidId.play(context)
      await InputValidPassword.play(context)
    }
  }
}

export const LoggedIn: ComponentStoryObj<typeof Form> = {
  play: async (context) => {
    const { canvasElement } = context
    const screen = within(canvasElement)
    // FIXME: type guard しないで型エラーの解消
    if (typeof InputValidForm.play === "function") await InputValidForm.play(context)
    await sleep(500)
    await userEvent.click(screen.getByText("ログイン"))
  }
}