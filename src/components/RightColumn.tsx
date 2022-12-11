import { Suspense } from "react";
import FetchData from "../helpers/FetchData";
import ShowRightData from "./ShowRightData"

const RightColumn = () => {

  const resource = FetchData("/data/rightData.json");

  return (
    <div className="col-8 col">
      <Suspense fallback={<h1>Loading...</h1>}>
        <ShowRightData resource={resource} />
      </Suspense>
    </div>
  )
}

export default RightColumn
