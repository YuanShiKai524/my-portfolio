import { useEffect, useState, Suspense, useMemo } from "react"
import Brief from "./Brief"
import Advantages from "./Advantages"
import FetchData, { MyResponse } from "../helpers/FetchData"
import SkeletonAdvantages from "../skeletons/SkeletonAdvantages"
import SkeletonBrief from "../skeletons/SkeletonBrief"

interface CssProp {
  minHeight: string
}

interface Result {
  result: {
    read: () => MyResponse;
  }
}

const LeftColumn = () => {

  const [winWidth, setWinWidth] = useState<number>(window.innerWidth > 1400 ? 1400 : window.innerWidth)

  const styleProp: CssProp = { minHeight: winWidth < 641 ? `${winWidth * 0.75 - 8}px` : `${winWidth * 0.3333 * 0.75 - 8}px` };

  // 請求數據後的結果
  const [resource] = useState<Result>( useMemo(() => FetchData('/data/leftData.json'), []) )

  // 此函數用於更新winWidth的值(若innerWidth有變動)
  const updateWinWidth = (): void => {
    if (window.innerWidth > 1400) {
      setWinWidth(1400);
    } else {
      setWinWidth(window.innerWidth);
    }
  }

  useEffect(() => {
    // 加上resize監聽事件，監聽innerWidth是否變動，有變動則改變winWidth的值
    window.addEventListener("resize", updateWinWidth)

    return () => {
      window.removeEventListener('resize', updateWinWidth)
    }
  }, [])

  return (
    <div className='col-4 col left-col shadow'>
      <div className="portrait-container" style={styleProp}>
        <img src='/images/portrait.jpg' alt="portrait" />
        <span className="my-name">Jeff Chen</span>
      </div>
      <div className="container">
        <div className="brief-container">
          {<SkeletonBrief />}
          {/* <Suspense fallback={<SkeletonBrief />}>
            <Brief resource={resource} />
          </Suspense> */}
        </div>
        {<SkeletonAdvantages />}
        {/* <Suspense fallback={<SkeletonAdvantages />}>
          <Advantages resource={resource} />
        </Suspense> */}
      </div>
    </div>
  )
}

export default LeftColumn
