import guestHome from "../pages/guest/home/guestHome"
import guestCourse from "../pages/guest/course/guestCourse"
import guestBlog from "../pages/guest/blog/guestBlog"
import guestContact from "../pages/guest/contact/guestContact"
import GuestCourseDetail from "../pages/guest/course/guestCourseDetail"
import StudentLoginPage from "../component/student-login-page/student-login-page"
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
    component: StudentLoginPage
  }
]



export { publicRoutes }
