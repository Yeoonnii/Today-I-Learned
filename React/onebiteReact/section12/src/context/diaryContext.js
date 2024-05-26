import { createContext } from "react";

// 일기 데이터 전달 Context
export const DiaryStateContext = createContext();

// 일기 추가, 수정, 삭제 함수 전달 Context
export const DiaryDispatchContext = createContext();