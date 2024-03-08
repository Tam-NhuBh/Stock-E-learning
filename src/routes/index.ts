import guestHome from "../pages/guest/home/guestHome"
import guestCourse from "../pages/guest/course/guestCourse"
import guestBlog from "../pages/guest/blog/guestBlog"
import guestContact from "../pages/guest/contact/guestContact"
import GuestCourseDetail from "../pages/guest/course/guestCourseDetail"
import RegistrationPage from "../component/registration/registration-page"
import Login from "../component/Login/login"
import GuestBlogDetail from "../pages/guest/blog/guestBlogDetail"
//import React, { lazy } from "react";

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
  }
]



export { publicRoutes }
