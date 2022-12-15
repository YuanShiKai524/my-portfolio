import SkeletonBarWithIcon from "./SkeletonBarWithIcon"

const SkeletonBrief = () => (
  <>
    {
      [1,2,3,4].map((number) => (<SkeletonBarWithIcon key={number} size="sm" />))
    }
  </>
)

export default SkeletonBrief
