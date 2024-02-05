import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import LoadingFallback from "./Components/Loading.tsx";
import Routers from "./Routers";
import store, { persistor } from "./Store/Store.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        {
                            Routers.map((router, index) => (
                            <Route  
                                key={index}
                                path={router.path}
                                element={<router.component />}
                            />
                            ))
                        }
                        </Routes>
                    </Suspense>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
