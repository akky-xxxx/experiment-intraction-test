import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"

import { Form } from "."
import { sleep } from "../../../shared/utils/sleep"

export default {
  component: Form,
}

export const Empty = {}

export const ClickIdLabel = {
  play: async () => {
    await userEvent.click(screen.getByText("ID:"))
  }
}

export const InputInvalidId = {
  play: async () => {
    await sleep(500)
    await userEvent.type(screen.getByText("ID:"), "test")
  }
}

export const InputValidId = {
  play: async () => {
    await sleep(500)
    await userEvent.type(screen.getByText("ID:"), "test-test")
  }
}

export const ClickPasswordLabel = {
  play: async () => {
    await sleep(500)
    await userEvent.click(screen.getByText("PW:"))
  }
}

export const InputInvalidPassword = {
  play: async () => {
    await sleep(500)
    await userEvent.type(screen.getByText("PW:"), "1234")
  }
}

export const InputValidPassword = {
  play: async () => {
    await sleep(500)
    await userEvent.type(screen.getByText("PW:"), "test-pass")
  }
}

export const InputInvalidForm1 = {
  play: async () => {
    await InputInvalidId.play()
    await InputInvalidPassword.play()
  }
}

export const InputInvalidForm2 = {
  play: async () => {
    await InputValidId.play()
    await InputInvalidPassword.play()
  }
}

export const InputInvalidForm3 = {
  play: async () => {
    await InputInvalidId.play()
    await InputValidPassword.play()
  }
}

export const InputValidForm = {
  play: async () => {
    await InputValidId.play()
    await InputValidPassword.play()
  }
}

export const LoggedIn = {
  play: async () => {
    await InputValidForm.play()
    await sleep(500)
    await userEvent.click(screen.getByText("ログイン"))
  }
}