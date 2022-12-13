import { Fragment, memo } from 'react'
import { Resource } from "./Brief"
import { MyResponse, IAdvantages } from '../helpers/FetchData'

const Advantages = ({ resource }: Resource) => {

  const allData: MyResponse = resource.result.read()

  return (
    <>
      {
        allData.name === "AxiosError" ? <h1 style={{ color: "red" }}>{allData.message}</h1> :
        Object.keys(allData.advantages).map((category) => {
          const cateObjs = allData.advantages as IAdvantages
          const {title, items} = cateObjs[category]
          return (
            <div className="section" key={category}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={title.svgClass} viewBox="0 0 16 16">
                  {
                    Object.keys(title.path).map((key) => {
                      return <path d={title.path[key]} key={key} />
                    })
                  }
                </svg>
                <span className="title">{title.content}</span>
              </div>
              {
                items.map((itemObj) => {
                  return (
                    <Fragment key={itemObj.name}>
                      <span className="item-name">{itemObj.name}</span>
                      <div className="outside">
                        <div className={itemObj.insideClass}>{ category === 'skills' ? itemObj.percent : "" }</div>
                      </div>
                    </Fragment>
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

export default memo(Advantages)
