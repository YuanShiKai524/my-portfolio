import { useEffect, useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'

interface Props {
  dataUrl: string
}

interface Title<S = string> {
  name: S
  svgClass: S
  path: {
    1: S
    2: S
  }
}

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

interface Data {
  title: Title
  college?: Education
  high_school?: Education
  root2?: Work
  hnw?: Work
  kura?: Work
}

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
  const { name, svgClass, path } = data.title

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
              
            }
            <div className="content-container">
              <h3>株式会社ROOT2</h3>
              <h3>飯店櫃檯人員</h3>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                Apr&nbsp;2019&nbsp;-&nbsp;Nov&nbsp;2021
              </span>
              <div className="sub-content">
                地點：日本京都。<br />產業：飯店經營業。<br /><br />
                工作內容：<br />
                <ul>
                  <li>處理入住及退房、接洽預約、後台系統管理訂單及安排房間、處理及應對客人入住期間所遇到的問題。</li>
                  <li>備品的庫存管理、與預約平台業者或飯店房間內之用品廠商的接洽、英日中三語翻譯、客戶資料建檔及管理。</li>
                  <li>處理客訴、分配工讀生工作項目及監管其業務效率、培訓新人、協助打掃人員飯店內各處環境衛生處理、製作及販賣餐點及飲品等所有飯店之相關業務。</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default GetData
