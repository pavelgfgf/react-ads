import { Routes, Route} from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}

export default AppRouter;