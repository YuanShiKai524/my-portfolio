import SkeletonBar from "./SkeletonBar"
import SkeletonBarWithIcon from "./SkeletonBarWithIcon"
import SkeletonElement from "./SkeletonElement"

type Exp = [
  string[],
  string[]
]

const SkeletonExperiences = () => {

  const experiences: Exp = [
    ["university", "high_school"],
    ["root2", "hnw", "kura"]
  ]

  const elementStyle = {display: "block", marginTop: "7px", marginBottom: "7px"}

  return (
    <>
      {
        experiences.map((array) => {
          return (
            array[0] === 'university' ?
            <div className="section-container m-16" key={array[0]}>
              <SkeletonBarWithIcon size="lg" classString="title-section" />
              {
                array.map((value, index) => {
                  return (
                    index === array.length-1 ?
                    <div className="content-section" key={value}>
                      <div className="content-container">
                        <div className="skeleton-container" style={{margin: "auto 10px"}}>
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <SkeletonBarWithIcon size="sm" style={{margin: "auto 10px"}} />
                        <SkeletonBar size="sm" style={{margin: "auto 10px"}} elementStyle={{width: "60%"}} />
                      </div>
                    </div>
                    :
                    <div className="content-section" key={value}>
                      <div className="content-container">
                        <div className="skeleton-container" style={{margin: "auto 10px"}}>
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <SkeletonBarWithIcon size="sm" style={{margin: "auto 10px"}} />
                        <SkeletonBar size="sm" style={{margin: "10px", marginTop: "auto"}} elementStyle={{width: "60%"}} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
            :
            <div className="section-container" key={array[0]}>
              <SkeletonBarWithIcon size="lg" classString="title-section" />
              {
                array.map((value, index) => {
                  return (
                    index === array.length-1 ?
                    <div className="content-section" key={value}>
                      <div className="content-container">
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <SkeletonBarWithIcon size="sm" />
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          {
                            [1,2,3].map((number) => (
                              <div className="skeleton-container" key={number} style={{paddingBottom: "0"}}>
                                <SkeletonElement type="circle-sm" />
                                <SkeletonElement type="bar-sm" style={{width: "82%"}} />
                                <SkeletonElement type="bar-sm" style={{width: "55%", marginLeft: "33px"}} />
                              </div>
                            ))  
                          }
                        </div>
                      </div>
                    </div>
                    :
                    <div className="content-section" key={value} style={{marginTop: "0"}}>
                      <div className="content-container">
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <SkeletonBarWithIcon size="sm" />
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                        </div>
                        <div className="skeleton-container">
                          <SkeletonElement type="bar-sm" style={elementStyle} />
                          {
                            [1,2,3].map((number) => (
                              <div className="skeleton-container" key={number}>
                                <SkeletonElement type="circle-sm" />
                                <SkeletonElement type="bar-sm" style={{width: "82%"}} />
                                <SkeletonElement type="bar-sm" style={{width: "55%", marginLeft: "33px"}} />
                              </div>
                            ))
                          }
                        </div>
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
