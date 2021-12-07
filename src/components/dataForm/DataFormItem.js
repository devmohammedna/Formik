import React from 'react'
import { useDispatch } from "react-redux";
import Moment from "react-moment";
// import { initialForm } from "../../redux/From/actions";
export default function DataFormItem({itemDetails }) {
    const dispach = useDispatch();
    return (
        <div className="slice">
      <span>
          {itemDetails.title} @{itemDetails.companyName}
      </span>
      <span>
      {itemDetails.startDate ? (
          <Moment format="MMM/YYYY">{itemDetails.startDate}</Moment>
        ) : (
          <span>No Date</span>
        )}
         {itemDetails.currentlyWork ? (
          "New"
        ) : itemDetails.endDate ? (
          <Moment format="MMM/YYYY">{itemDetails.endDate}</Moment>
        ) : (
          <span>No Date</span>
        )}
        </span>
           <span>
        {/* <button onClick={handleUpdate}>update</button> */}
        {/* <button onClick={() => dispach(deleteWorkExperiance(itemDetails._id))}> */}
          {/* delete */}
        {/* </button> */}
      </span>
        </div>
    )
}
