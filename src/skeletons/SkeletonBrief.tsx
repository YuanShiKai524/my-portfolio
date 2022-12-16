import { memo } from 'react'
import SkeletonBarWithIcon from "./SkeletonBarWithIcon"

const SkeletonBrief = () => (
  <>
    {
      [1,2,3,4].map((number) => (<SkeletonBarWithIcon key={number} size="sm" style={{margin: "5px auto"}} />))
    }
  </>
)

export default memo(SkeletonBrief)
