import { ChangeEventHandler, FormEventHandler, useState } from "react"
import { changeHandlerFactory } from "../../../../../shared/utils/changeHandlerFactory"

const FormValidValues = {
  Id: "test-test",
  Password: "test-pass",
} as const

export const useForm = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isValidForm = id === FormValidValues.Id && password === FormValidValues.Password
  const handleChangeId: ChangeEventHandler<HTMLInputElement> = changeHandlerFactory(setId)
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = changeHandlerFactory(setPassword)
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    setIsLoggedIn(true)
  }

  return {
    id,
    password,
    isLoggedIn,
    isValidForm,
    handleChangeId,
    handleChangePassword,
    handleSubmit,
  }
}
