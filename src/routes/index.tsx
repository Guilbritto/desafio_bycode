import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/ index";
import DefaultLayout from "./layout/DefaultLayout";

export const Router = () => (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
        </Route>

    </Routes>
)