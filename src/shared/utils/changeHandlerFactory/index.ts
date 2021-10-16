import { ChangeEventHandler } from "react"

type Setter = (value: string) => void
type ChangeHandlerFactory = (setter: Setter) => ChangeEventHandler<HTMLInputElement>

export const changeHandlerFactory: ChangeHandlerFactory = (setter) => {
  return (event) => {
    const {
      target: { value },
    } = event
    setter(value)
  }
}
