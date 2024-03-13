import guestHome from "../pages/guest/home/guestHome"
import guestCourse from "../pages/guest/course/guestCourse"
import guestBlog from "../pages/guest/blog/guestBlog"
import guestContact from "../pages/guest/contact/guestContact"
import GuestCourseDetail from "../pages/guest/course/guestCourseDetail"
import RegistrationPage from "../component/registration-page"
import Login from "../component/LoginComponent"
import GuestBlogDetail from "../pages/guest/blog/guestBlogDetail"
//import React, { lazy } from "react";
import UserHompage from "../pages/user/home/UserHome"
// const LazyStudentLogin = lazy(
//   () => import("../component/student-login-page/student-login-page")
// );
const publicRoutes = [
  {
    path: '/',
    component: guestHome
  },
  
  {
    path: '/course',
    component:  guestCourse
  },

  {
    path: '/blog',
    component:  guestBlog
  },

  {
    path: '/contact',
    component:  guestContact
  },

  {
    path: '/course/:id',
    component:  GuestCourseDetail
  },
  {
    path: "/login",
    component: Login
  },

  {
    path: "/post/:id",
    component: GuestBlogDetail
  },

  {
    path: "/register",
    component: RegistrationPage
  },

  
  {
    path: "/userhomepage",
    component: UserHompage
  },
]



export { publicRoutes }
