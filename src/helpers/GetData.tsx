import { useEffect, useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'

interface Props {
  dataUrl: string
}

interface Title<S = string> {
  name: S
  svgClass: S
  path: {[key: string]: S}
}

interface Work<S = string> {
  company: S
  position: S
  year: S
  location: S
  industry: S
  descriptions: {[key: string]: S}
}

interface Education<S = string> {
  school_en: S
  school_cn: S
  year: S
  status: S
}

type Data = {[key: string]: Title | Education | Work}

interface DataStatus {
  isLoading: boolean,
  errorMsg: string,
  data: Data
}

const GetData = ({dataUrl}: Props): JSX.Element => {

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
      axios(dataUrl)
        .then(
          (res: AxiosResponse<Data>) => {
            setDataStatus({ ...dataStatus, isLoading: false, data: res.data})
          }
        )
        .catch((err: AxiosError) => {
          setDataStatus({ ...dataStatus, isLoading: false, errorMsg: err.message })
        })
    }
  }, [])

  const { isLoading, errorMsg, data } = dataStatus
  const { name, svgClass, path } = data.title as Title

  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> :
        errorMsg ? <h1 style={{ color: "red" }}>{errorMsg}</h1> :
        <>
          <h1 className="title-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={svgClass} viewBox="0 0 16 16">
              <path d={path["1"]} />
              <path d={path["2"]} />
            </svg>
            {name}
          </h1>
          <div className="content-section">
            {
              Object.keys(data).map((key) => {
                if (key !== 'title') {
                  const { company, position, year, location, industry, descriptions } = data[key] as Work
                  return (
                    <div className="content-container" key={key}>
                      <h3>{company}</h3>
                      <h3>{position}</h3>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        {year}
                      </span>
                      <div className="sub-content">
                        地點：{location}<br />
                        產業：{industry}<br /><br />
                        工作內容：<br />
                        <ul>
                          {
                            Object.keys(descriptions).map((key) => {
                              return <li key={key}>{descriptions[key]}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </>
      }
    </>
  )
}

export default GetData
