import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});
// 삭제
// export const deleteTodo = async (todoId) => {
//   try {
//     const response = await axios.delete(`/todos/${todoId}`);
//     return response.data;
//   } catch (error) {
//     // 오류 처리
//     throw error;
//   }
// };
// 이게 아닌 것 같다 잘못 생각을 한 듯
// // 수정
// export const updateData = async (url, data, config) => {
//   try {
//     const response = await axiosInstance.put(url, data, config);
//     return response.data;
//   } catch (error) {
//     // 오류 처리
//     throw error;
//   }
// };
/*
Bearer -> jwt 토큰임을 알려주는 것 (json web token)
Authorization 로컬스토리지의 핻장 key값으로 accessToken
*/
