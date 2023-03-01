import { Route, Routes } from "react-router-dom";
import History from "../pages/History";
import Home from "../pages/Home/ index";
import Watch from "../pages/Watch";
import DefaultLayout from "./layout/DefaultLayout";

export const Router = () => (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/history" element={<History />} />
        </Route>

    </Routes>
)