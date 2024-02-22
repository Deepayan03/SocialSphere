import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/SocialLanding/Landing";
import LoginPage from "./Pages/Login/LoginPage";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Error from "./Pages/Error/Error";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
