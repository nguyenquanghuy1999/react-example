import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import routes from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            let Layout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;

            let element = (
              <Layout>
                <Page />
              </Layout>
            )

            if (route.protected) {
              element = <ProtectedRoute> {element} </ProtectedRoute>
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={element}
              />
            )
          })}
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
