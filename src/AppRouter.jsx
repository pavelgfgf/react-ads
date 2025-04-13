import { Routes, Route} from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdsPage from "./pages/AdsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/ads" element={<AdsPage />} />
        </Routes>
    );
}

export default AppRouter;