import { Fragment } from "react"
import SkeletonBarWithIcon from "./SkeletonBarWithIcon"
import SkeletonBar from "./SkeletonBar"

type IAdv = [
  string[],
  string[]
]

const SkeletonAdvantages = () => {

  const advantages: IAdv = [
    ["react","js","sass","ts","node"], ["cn","jp","en"]
  ]

  return (
    <>
      {
        advantages.map((array, index) => {
          return (
            <div style={{marginTop: "30px"}} key={index}>
              <SkeletonBarWithIcon size="sm" />
              {
                array.map((value) => (
                  <Fragment key={value}>
                    <SkeletonBar size="sm" />
                    <SkeletonBar size="lg" />
                  </Fragment>
                ))
              }
            </div>
          )
        })
      }
    </>
  )
}

export default SkeletonAdvantages
