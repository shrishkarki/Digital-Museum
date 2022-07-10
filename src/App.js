import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/NavBar-Category/Home/Home';
import Blog from './Components/NavBar-Category/Blog/Blog';
import Gallery from './Components/NavBar-Category/Gallery/Gallery';
import Contact from './Components/NavBar-Category/Contact/Contact';
import About from './Components/NavBar-Category/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageContainer from "./Components/NavBar-Category/Gallery/ImageContainer";
import FilterBlogPost from "./Components/NavBar-Category/Blog/FilterBlogPost";
import EachBlogPost from "./Components/NavBar-Category/Blog/EachBlogPost";
import CreateBlogs from './Components/CreateBlogs/CreateBlogs';
import Footer from "./Components/Footer/Footer";
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import OtpHandle from './Components/Authentication/OtpHandle';
import Error10 from './Components/ErrorPage/ErrorPage';
import ResetPassword from './Components/Authentication/ResetPassword';
import SetNewPassword from './Components/Authentication/SetNewPassword';
import { Helmet } from 'react-helmet';

// import { usePosts } from "./Components/FetchDatas/DummyJson";



function App() {
  // const data = usePosts();
  // console.log(data)
  return (
    <div className='font-custom'>
      
      <Router>
      {/* <Helmet>
  <title>New page</title>
</Helmet> */}
        <Navbar />
        <Routes>
          

          <Route index element={<Home />} />

          <Route path="gallery" element={<Gallery />} >
           

            <Route path="All" element={<ImageContainer type="All" />} />
            <Route path="Personal" element={<ImageContainer type="Personal" />} />
            <Route path="Eco-Museum" element={<ImageContainer type="Eco-Museum" />} />
            <Route path="History" element={<ImageContainer type="History" />} />
            <Route path="Nature" element={<ImageContainer type="Nature" />} />
            <Route path="Archelogy" element={<ImageContainer type="Archelogy" />} />
            <Route path="Science" element={<ImageContainer type="Science" />} />
            <Route path="Art & Craft" element={<ImageContainer type="Art & Craft" />} />
            <Route path="Aviation" element={<ImageContainer type="Aviation" />} />
            <Route path="Agriculture" element={<ImageContainer type="Agriculture" />} />
            <Route path="Biography" element={<ImageContainer type="Biography" />} />
            <Route path="Zoology" element={<ImageContainer type="Zoology" />} />
            <Route path="Botanicals" element={<ImageContainer type="Botanical" />} />

          </Route>

          


          <Route path='blog' element={<Blog />} >
            <Route path="All" element={<FilterBlogPost type="All" />} />
            <Route path="Personal" element={<FilterBlogPost type="Personal" />} />
            <Route path="Eco-Museum" element={<FilterBlogPost type="Eco-Museum" />} />
            <Route path="History" element={<FilterBlogPost type="History" />} />
            <Route path="Nature" element={<FilterBlogPost type="Nature" />} />
            <Route path="Archelogy" element={<FilterBlogPost type="Archelogy" />} />
            <Route path="Science" element={<FilterBlogPost type="Science" />} />
            <Route path="Art & Craft" element={<FilterBlogPost type="Art & Craft" />} />
            <Route path="Aviation" element={<FilterBlogPost type="Aviation" />} />
            <Route path="Agriculture" element={<FilterBlogPost type="Agriculture" />} />
            <Route path="Biography" element={<FilterBlogPost type="Biography" />} />
            <Route path="Botanical" element={<FilterBlogPost type="Botanical" />} />
            <Route path="Zoology" element={<FilterBlogPost type="Zoology" />} />
          </Route>
          <Route path='contactUs' element={<Contact />} />
          <Route path='aboutUs' element={<About />} />
          <Route path='createnewblog' element={<CreateBlogs/>}/>

          <Route path='blog/:category/:slug' element={<EachBlogPost />} />
          <Route path='Login' element={<Login/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='SignUp/Verify-OTP'  element={<OtpHandle/>}/>
          <Route path='resetpassword' element={<ResetPassword/>}/>
          <Route path='resetpassword/setnewpassword' element={<SetNewPassword/>}/>
          <Route path='*' element={<Error10/>}/>

        </Routes>
        <Footer/>
      </Router>
      {/* {data.map(dummy => <p>{dummy.discription} <img src={dummy.image} alt="hello"/></p>)} */}
    </div>
  );
}

export default App;
