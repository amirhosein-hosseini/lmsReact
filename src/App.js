import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/About/AboutPage';
import BlogPage from './Components/Blog/BlogPage';
import SingleBlog from './Components/Blog/SingleBlog';
import CartPage from './Components/Cart/CartPage';
import ContactPage from './Components/Contact/ContactPage';
import CoursePage from './Components/Course/CoursePage';
import SinglePage from './Components/Single/SinglePage';
import LoginPage from './Components/SignIn/LoginPage';
import SigninPage from './Components/SignIn/SigninPage';
import MyCourses from './Components/myCourses';
import PaymentPage from './Components/Payment/PaymentPage';
import Viewer from './Components/Viewer';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/blog" element={ <BlogPage/> } />
          <Route path="/blog/:slug" element={ <SingleBlog/> } />
          <Route path="/cart" element={ <CartPage/> } />
          <Route path="/contact" element={ <ContactPage/> } />
          <Route path="/course" element={ <CoursePage/> } />
          <Route path="/course/:slug" element={ <CoursePage/> } />
          <Route path="/courses/:slug" element={ <SinglePage/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/signin" element={ <SigninPage/> } />
          <Route path="/my-courses" element={ <MyCourses/> } />
          <Route path="/payment" element={ <PaymentPage/> } />
          <Route path="/viewer/:slug/:type/:number/:code" element={ <Viewer/> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
