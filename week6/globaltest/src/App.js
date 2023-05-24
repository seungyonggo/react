import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import MenuStoreProvider from "./store/1_reducer";
import { ModalProvider } from "./store/2_context";
import { AppContextProvider } from "./store/3_context";

function App() {
  return (
    <>
      {
        <MenuStoreProvider>
          {/* <RouterProvider router={router} /> */}
          <ModalProvider>
            {
              <AppContextProvider>
                <RouterProvider router={router} />
                {/* <RouterProvider router={router} /> */}
              </AppContextProvider>
            }
          </ModalProvider>
        </MenuStoreProvider>
      }
    </>
  );
}
// 모달프로바이더를 여러개 쓰는 방법을 모르겠다.
// 뭐지... 에러뜬다...
export default App;
