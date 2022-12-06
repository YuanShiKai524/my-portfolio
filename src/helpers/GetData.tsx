import { useEffect, useState } from 'react'
import axios, {AxiosResponse, AxiosError} from 'axios'

interface Work<S = string> {
  company: S
  position: S
  year: S
  location: S
  industry: S
  descriptions: {
    1: S
    2: S
    3: S
  }
}

interface Education<S = string> {
  school_en: S
  school_cn: S
  year: S
  status: S
}

interface Data<S = string> {
  title: {
    name: S
    svgClass: S
    path: {
      1: S
      2: S
    }
  }
  college?: Education
  high_school?: Education
  root2?: Work
  hnw?: Work
  kura?: Work
}

interface ResponseData {
  education: Data
  works: Data
}

interface DataStatus {
  isLoading: boolean,
  errorMsg: string,
  data: Data
}

const GetData = () => {

  const initDataStatus: DataStatus = {
    isLoading: true,
    errorMsg: "",
    data: {
      title: {
        name: "",
        svgClass: "",
        path: {
          1: "",
          2: ""
        }
      }
    }
  }

  const [dataStatus, setDataStatus] = useState(initDataStatus)

  useEffect(() => {
    if (dataStatus.isLoading) {
      axios('/data/data.json')
      .then(
        (res: AxiosResponse<ResponseData>) => {
          setDataStatus({...dataStatus, isLoading: false, data: res.data.works})
        }
      )
      .catch((err: AxiosError) => {
        setDataStatus({...dataStatus, isLoading: false, errorMsg: err.message})
      })
    }
  }, [])

  const {isLoading, errorMsg, data: {title, root2, hnw, kura}} = dataStatus
  const {name,svgClass, path} = title

  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> :
        errorMsg ? <h1 style={{color: "red"}}>{errorMsg}</h1> :
        <>
          <h1 className="title-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={title.svgClass} viewBox="0 0 16 16">
              <path d={title.path[1]} />
              <path d={title.path[2]} />
            </svg>
            {title.name}
          </h1>
          <div className="content-section">
            <div className="content-container">
              <h3>{}</h3>
              <h3>{}</h3>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                2010&nbsp;-&nbsp;2014
              </span>
              <p className="sub-content">Department of Economics, Bachelor Degree</p>
            </div>
            <div className="content-container">
              <h3>New Taipei Municipal SanChong High School</h3>
              <h3>新北市立三重高中</h3>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                2007&nbsp;-&nbsp;2010
              </span>
              <p className="sub-content">Graduated</p>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default GetData
