import guestHome from "../pages/guest/home/guestHome"
import guestCourse from "../pages/guest/course/guestCourse"
import guestBlog from "../pages/guest/blog/guestBlog"
import guestContact from "../pages/guest/contact/guestContact"


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
  }
]



export { publicRoutes }
