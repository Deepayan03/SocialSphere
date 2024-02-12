/* eslint-disable no-unused-vars */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs, LoginPage, Landing , SignUp , Error } from "./Pages";

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;