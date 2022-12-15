type Props = {
  type: string
}

const SkeletonElement = ({ type }: Props) => {

  const styleClasses: string = `skeleton ${type}`

  return (
    <div className={styleClasses}></div>
  )
}

export default SkeletonElement
