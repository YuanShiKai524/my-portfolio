import SkeletonBar from "./SkeletonBar"
import SkeletonBarWithIcon from "./SkeletonBarWithIcon"
import SkeletonElement from "./SkeletonElement"

type Exp = [
  string[],
  string[]
]

const SkeletonExperiences = () => {

  const experiences: Exp = [
    ["university", "high_school"], // education
    ["root2", "hnw", "kura"]  // work experiences
  ]

  const elementStyle = {display: "block", marginTop: "7px", marginBottom: "7px"}

  return (
    <>
      {
        experiences.map((array) => {
          return (
            <div className={array[0] === 'university' ? "section-container m-16" : "section-container"} key={array[0]}>
              <SkeletonBarWithIcon size="lg" classString="title-section" />
              {
                array.map((value, index) => {
                  return (
                    <div className="content-section" key={value} style={array[0] === 'university' ? {} : index === array.length-1 ? {} : {marginTop: "0"}}>
                      <div className="content-container">
                        <div className="skeleton-container" style={array[0] === 'university' ? {margin: "auto 10px"} : {}}>
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <SkeletonBarWithIcon size="sm" style={array[0] === 'university' ? {margin: "auto 10px"} : {}} />
                        {
                          array[0] === 'university' ?
                          <SkeletonBar size="sm" style={index === array.length-1 ? {margin: "auto 10px"} : {margin: "10px", marginTop: "auto"}} elementStyle={{width: "60%"}} /> :
                          <>
                            <div className="skeleton-container">
                            <SkeletonElement type="bar-sm" style={elementStyle} />
                            <SkeletonElement type="bar-sm" style={elementStyle} />
                            </div>
                            <div className="skeleton-container">
                              <SkeletonElement type="bar-sm" style={elementStyle} />
                              {
                                [1,2,3].map((number) => (
                                  <div className="skeleton-container" key={number} style={index === array.length-1 ? {paddingBottom: "0"} : {}}>
                                    <SkeletonElement type="circle-sm" />
                                    <SkeletonElement type="bar-sm" style={{width: "82%"}} />
                                    <SkeletonElement type="bar-sm" style={{width: "55%", marginLeft: "33px"}} />
                                  </div>
                                ))  
                              }
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </>
  )
}

export default SkeletonExperiences
