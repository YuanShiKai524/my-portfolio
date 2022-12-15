type Props = {
  type: string
  style?: {
    [key: string]: string
  }
}

const SkeletonElement = ({ type, style }: Props) => {

  const styleClasses: string = `skeleton ${type}`

  return (
    <div className={styleClasses} style={style}></div>
  )
}

export default SkeletonElement
