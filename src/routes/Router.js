import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import DetailsPage from "../pages/DetailsPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/movie/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}