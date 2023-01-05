import { useQuery } from "react-query";
import { BASE_URL } from "./httpservice";
import { useDispatch } from "react-redux";
import { setDetailData } from "../redux/features/detailSlice";

export const GetUserDetail = (id) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery(["detail,id"], async () => {
    const { data } = await BASE_URL.get(`/todo-user/${id}`);
    dispatch(setDetailData(data));
    return data;
  });
  return { data, isLoading, error };
};
