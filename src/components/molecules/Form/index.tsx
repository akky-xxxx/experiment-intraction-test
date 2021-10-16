import { VFC } from "react"

import { useForm } from "./modules/useForm"

export const Form: VFC = () => {
  const {
    id,
    password,
    isLoggedIn,
    isValidForm,
    handleChangeId,
    handleChangePassword,
    handleSubmit,
  } = useForm()

  if (isLoggedIn) return (
    <div>ログイン済み</div>
  )

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formId">ID:</label>
        <input id="formId" placeholder="id" type="text" value={id} onChange={handleChangeId} />
      </div>
      <div>
        <label htmlFor="formPassword">PW:</label>
        <input id="formPassword" placeholder="password" type="password" value={password} onChange={handleChangePassword} />
      </div>
      <div>
        <button type="submit" disabled={!isValidForm}>ログイン</button>
      </div>
    </form>
  )
}