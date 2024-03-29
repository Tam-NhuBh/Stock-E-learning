import RegistrationPage from "../pages/Registration"
import Login from "../pages/Login"
import Contact from "../pages/Contact"
import Newsfeed from "../pages/Newsfeed"
import NewsfeedDetail from "../component/NewsfeedDetail"
import Courses from "../pages/Courses"
import CourseDetail from "../pages/CourseDetail"
import guestHome from "../pages/guest/guestHome"
//import React, { lazy } from "react";
import UserHompage from "../pages/user/UserHome"
import LearningPage from "../pages/LearningPage"
import ShoppingMap from "../pages/ShoppingMap"
import VideoPlayer from "../pages/VideoPlayer"
import Payment from "../pages/Payment"
import Profile from "../pages/Profile"

// const LazyStudentLogin = lazy(
//   () => import("../component/student-login-page/student-login-page")
// );
const publicRoutes = [
  {
    path: '/',
    component: guestHome
  },

  {
    path: '/news',
    component:  Newsfeed
  },

  {
    path: "/news/:id",
    component: NewsfeedDetail
  },

  {
    path: '/contact',
    component:  Contact
  },
  
  {
    path: '/courses',
    component:  Courses
  },

  {
    path: '/courses/:id',
    component:  CourseDetail
  },
  {
    path: "/login",
    component: Login
  },

  {
    path: "/register",
    component: RegistrationPage
  },

  
  {
    path: "/userhomepage",
    component: UserHompage
  },
    
  {
    path: "/myCourse/learning/",
    component: LearningPage
  },
    
  {
    path: "/cart",
    component: ShoppingMap
  },

  {
    path: "/payment",
    component: Payment
  },

  {
    path: "/video-player",
    component: VideoPlayer
  },

  {
    path: "/profile",
    component: Profile
  },

]



export { publicRoutes }
