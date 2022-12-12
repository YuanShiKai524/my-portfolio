import { memo } from 'react'
import { MyResponse } from '../helpers/FetchData'

export type Resource = {
  resource: {
    result: {
      read: () => MyResponse
    }
  }
}

const Brief = ({ resource }: Resource) => {

  const allData = resource.result.read();

  return (
    <ul>
      {
        allData.name === "AxiosError" ? <h1 style={{ color: "red" }}>{allData.message}</h1> :
        Object.keys(allData.brief).map((category) => {
          const cateObj = allData.brief[category];
          let fillRule: "inherit" | "nonzero" | "evenodd" | undefined = undefined;
          return (
            <li key={category}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={cateObj.svgClass} viewBox="0 0 16 16">
                {
                  Object.keys(cateObj.path).map((key) => {
                    if (key !== 'fillRule') {
                      return (
                        fillRule === undefined ? 
                        <path d={cateObj.path[key]} key={key} /> : 
                        <path fillRule={fillRule} d={cateObj.path[key]} key={key} />
                      )
                    } else {
                      fillRule = cateObj.path.fillRule as "inherit" | "nonzero" | "evenodd" | undefined;
                      return "";
                    }
                  })
                }
              </svg>
              <span>{cateObj.content}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default memo(Brief)
