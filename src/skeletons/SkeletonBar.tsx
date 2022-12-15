import SkeletonElement from "./SkeletonElement"

type Props = {
  size: string
  style?: {
    [key: string]: string
  }
  elementStyle?: {
    [key: string]: string
  }
}

const SkeletonBar = ({ size, style, elementStyle }: Props) => {
  return (
    <div className="skeleton-container" style={style}>
      <SkeletonElement type={`bar-${size}`} style={elementStyle} />
    </div>
  )
}

export default SkeletonBar
