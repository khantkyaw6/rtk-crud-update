import { useQuery } from "react-query";
import { BASE_URL } from "./httpservice";
import { useDispatch } from "react-redux";
import { setDetailData } from "../redux/features/detailSlice";

export const GetUsersData =() => {
    const dispatch =useDispatch();
    const {data,isLoading,error} = useQuery(["users"],async()=>{
         const { data } = await BASE_URL.get(`/todo-user`);
          dispatch(setDetailData(data));
         return data;
  
    })
    return {data,isLoading,error};
}