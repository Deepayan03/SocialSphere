/* eslint-disable no-unused-vars */

import { Contact, LoginPage, Landing , SignUp } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;