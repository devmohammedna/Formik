import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DataFormItem from './DataFormItem';
import { fetchAlldataform } from "../../redux/DataForm/actions";



export default function DataFormSlice() {
      const dispatch = useDispatch();
        const { DataFormReduser } = useSelector((state) => state)
         useEffect(() => {
    dispatch(fetchAlldataform());
  }, [dispatch]);

    return (
        <div className="dataform">
             {/* {DataFormReduser?.isLoading && (
        <div className="loading">Loading ...</div>
      )} */}
        {/* {DataFormReduser?.error && ( */}
         {/* <div className="error">  {DataFormReduser.error} </div> */}
    {/* //   )} */}

         {/* {!DataFormReduser?.error &&
        !DataFormReduser?.isLoading &&
        DataFormReduser?.workExperiances.length === 0 && (
          <div className="slice">Empty</div>
        )} */}
      {/* {DataFormReduser?.dataform.map((item) => (
        <DataFormItem itemDetails={item} key={item._id} />
      ))} */}
        </div>
    )
}
