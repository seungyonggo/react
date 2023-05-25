import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import MenuStoreProvider from "./store/1_reducer";
import { ModalProvider } from "./store/2_context";
import { AppContextProvider } from "./store/3_context";

function App() {
  return (
    <>
      <MenuStoreProvider>
        <ModalProvider>
          <AppContextProvider>
            <RouterProvider router={router} />
          </AppContextProvider>
        </ModalProvider>
      </MenuStoreProvider>
    </>
  );
}
// 모달프로바이더를 여러개 쓰는 방법을 모르겠다.
// 뭐지... 에러뜬다...
// 그냥 묶으니깐 에러가 해결됨.....
export default App;
