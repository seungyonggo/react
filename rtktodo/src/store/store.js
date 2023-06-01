import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "reducer";

import logger from "redux-logger";

// .env(환경 변수)
// 환경변수는 언제 사용해야할까?
// 시스템 환경을 변수에 담아서 사용, 경로 생략
// 특정 값을 변수에 담아 숨기기 위해 사용 ex)백엔드 url, 암호화 키(로그인 토큰, 세션 키...)
// dotenv, 기본값 -> node_modules에서 이미 설치 되어있음

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development", //조건식 활용헤서 boolean
  middleware: (defaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return [...defaultMiddleware(), logger];
      // defaultMiddleware를 받지 않으면 기본 설치되어 있는 미들웨어를 전부 무시하고 덮어 씌웁니다
      // 현재상태에서 defaultMiddleware가 없다면 logger만 적용, rtk에서 지원하는 기본 미들웨어를 전부삭제
    }
    return defaultMiddleware();
  },
});
