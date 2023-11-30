import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import AdminHome from "./Pages/AdminHome";
import AllPackages from "./Components/Packages/AllPackages";
import AllBooking from "./Components/Booking/AllBooking";
import PendingBooking from "./Components/Booking/PendingBooking";
import ConfirmBooking from "./Components/Booking/ConfirmBooking";
import AllServices from './Components/Services/AllServices';
import AddServices from "./Components/Services/AddServices";
import AllBlog from './Components/Blog/AllBlog';
import AddBlog from './Components/Blog/AddBlog';
import AllTestimonial from "./Components/Testimonial.jsx/AllTestimonial";
import AddTestimonial from "./Components/Testimonial.jsx/AddTestimonial";
import AddGuide from './Components/Guides/AddGuide';
import AllGuide from "./Components/Guides/AllGuide";
import AddPackage from "./Components/Packages/AddPackage";
import AllMessages from "./Components/Messages/AllMessages";
import UnreadMessages from "./Components/Messages/UnreadMessages";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AdminHome />} />
          <Route path="/all_packages" element={<AllPackages />} />
          <Route path="/add_package" element={<AddPackage />} />
          <Route path="/all_bookings" element={<AllBooking />} />
          <Route path="/pending_bookings" element={<PendingBooking />} />
          <Route path="/confirm_bookings" element={<ConfirmBooking />} />
          <Route path="/all_services" element={<AllServices />} />
          <Route path="/add_services" element={<AddServices />} />
          <Route path="/all_blogs" element={<AllBlog />} />
          <Route path="/add_blog" element={<AddBlog />} />
          <Route path="/all_testimonial" element={<AllTestimonial />} />
          <Route path="/add_testimonial" element={<AddTestimonial />} />
          <Route path="/all_guides" element={<AllGuide />} />
          <Route path="/add_guide" element={<AddGuide />} />
          <Route path="/all_messages" element={<AllMessages />} />
          <Route path="/unread_messages" element={<UnreadMessages />} />
        </Route>
      </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;
