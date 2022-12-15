import { Suspense } from "react";
import FetchData from "../helpers/FetchData";
import SkeletonExperiences from "../skeletons/SkeletonExperiences";
import Experiences from "./Experiences"

const RightColumn = () => {

  const resource = FetchData("/data/rightData.json");

  return (
    <div className="col-8 col">
      {<SkeletonExperiences />}
      {/* <Suspense fallback={<SkeletonExperiences />}>
        <Experiences resource={resource} />
      </Suspense> */}
    </div>
  )
}

export default RightColumn
