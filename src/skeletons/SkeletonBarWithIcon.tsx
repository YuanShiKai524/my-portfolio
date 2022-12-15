import SkeletonElement from "./SkeletonElement"

type Props = {
  size: string
}

const SkeletonBarWithIcon = ({ size }: Props) => {

  return (
    <div className="skeleton-container">
      <SkeletonElement type={`circle-${size}`} />
      <SkeletonElement type={`bar-${size}`} />
    </div>
  )
}

export default SkeletonBarWithIcon
