type Props = {
  classString?: string
}

const Error = ({ classString }: Props) => {
  return (
    <div className={classString !== undefined ? `error-wrapper ${classString}` : "error-wrapper"}>
      <h2 className="error">發生錯誤，請稍後重試</h2>
    </div>
  )
}

export default Error
