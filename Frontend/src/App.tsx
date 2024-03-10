import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/SocialLanding/Landing";
import LoginPage from "./Pages/Login/LoginPage";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Error from "./Pages/Error/Error";
import { contactUs, error, home, login, signUp } from "./config/config";


// build an authChecker

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Landing />} />
          <Route path={login} element={<LoginPage />} />
          <Route path={signUp} element={<SignUp />} />
          <Route path={contactUs} element={<ContactUs />} />
          <Route path={error} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
