import SkeletonElement from "./SkeletonElement"

type Props = {
  size: string
  classString?: string
  style?: {
    [key: string]: string
  }
}

const SkeletonBarWithIcon = ({ size, classString, style }: Props) => {

  return (
    <div className={classString === undefined ? "skeleton-container" : `skeleton-container ${classString}`} style={style}>
      <SkeletonElement type={`circle-${size}`} />
      <SkeletonElement type={`bar-${size}`} />
    </div>
  )
}

export default SkeletonBarWithIcon
