import guestHome from "../pages/guest/home/guestHome"
import guestCourse from "../pages/guest/course/guestCourse"
import guestBlog from "../pages/guest/blog/guestBlog"
import guestContact from "../pages/guest/contact/guestContact"
import GuestCourseDetail from "../pages/guest/course/guestCourseDetail"

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
  }
]



export { publicRoutes }
