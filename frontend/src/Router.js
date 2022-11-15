import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PasswordReset from "./pages/auth/PasswordReset";
import Protected from "./pages/Protected";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import EmailVerificationConfirmation from "./pages/auth/EmailVerificationConfirmation";
import PersistAuth from "./features/Auth/PersistLogin";
import RequireAuth from "./features/Auth/RequireAuth";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Posts";
import CreatePost from "./pages/Posts/CreatePost";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/Blog/Single";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route
          path="verify-email/:id/:token"
          element={<EmailVerificationConfirmation />}
        />
        <Route path="reset-password/:id/:token" element={<PasswordReset />} />

        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route element={<PersistAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="posts" element={<Post />}>
              <Route path=":id" element={<Post />} />
              <Route path="create" element={<CreatePost />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path="protected" element={<Protected />} />
          </Route>

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogSingle />} />
        </Route>

        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
