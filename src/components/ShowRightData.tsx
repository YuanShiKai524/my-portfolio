import { MyResponse } from "../helpers/FetchData"

type Props = {
  resource: {
    result: {
      read: () => MyResponse
    }
  }
}

const ShowRightData = ({ resource }: Props) => {

  const allData = resource.result.read()

  return (
    <div>
      {
        allData.name === 'AxiosError' ? <h1 style={{ color: "red" }}>{allData.message}</h1> : // 若返回的數據是error的話
          <>
            {
              Object.keys(allData).map((category) => {
                const dataObjs = allData[category]  // Data categories: education or works
                let divClass = ""
                category === 'education' ? divClass = "section-container mb-16" : divClass = "section-container"
                return (
                  <div className={divClass} key={category}>
                    {
                      Object.keys(dataObjs).map((key) => {
                        const dataObj = dataObjs[key]
                        if (key === 'title') {
                          return (
                            <h1 className="title-section" key={key}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={dataObj.svgClass} viewBox="0 0 16 16">
                                <path d={dataObj.path.a} />
                                <path d={dataObj.path.b} />
                              </svg>
                              {dataObj.name}
                            </h1>
                          )
                        } else {
                          return (
                            <div className="content-section" key={key}>
                              <div className="content-container">
                                <h3>{dataObj.subtitle1}</h3>
                                <h3>{dataObj.subtitle2}</h3>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                  </svg>
                                  {dataObj.year}
                                </span>
                                {
                                  category === 'education' ? <p className="sub-content">{dataObj.status}</p> :
                                    <div className="sub-content">
                                      {
                                        <>
                                          地點：{dataObj.location}<br />
                                          產業：{dataObj.industry}<br /><br />
                                          工作內容：<br />
                                          <ul>
                                            {
                                              Object.keys(dataObj.descriptions).map((key) => {
                                                return <li key={key}>{dataObj.descriptions[key]}</li>
                                              })
                                            }
                                          </ul>
                                        </>
                                      }
                                    </div>
                                }
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </>
      }
    </div>
  )
}

export default ShowRightData
