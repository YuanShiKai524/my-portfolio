import SkeletonElement from "./SkeletonElement"

type Props = {
  size: string
  classString?: string
  style?: {
    [key: string]: string
  }
}

const SkeletonBarWithIcon = ({ size, classString, style }: Props) => {

  const className = `skeleton-container ${classString}`

  return (
    <div className={className} style={style}>
      <SkeletonElement type={`circle-${size}`} />
      <SkeletonElement type={`bar-${size}`} />
    </div>
  )
}

export default SkeletonBarWithIcon
