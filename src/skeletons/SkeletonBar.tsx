import SkeletonElement from "./SkeletonElement"

type Props = {
  size: string
}

const SkeletonBar = ({ size }: Props) => {
  return (
    <div className="skeleton-container">
      <SkeletonElement type={`bar-${size}`} />
    </div>
  )
}

export default SkeletonBar
