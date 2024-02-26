import guestHome from "../pages/guest/home/guestHome"
import guestCourseDetail from "../pages/guest/courseDetail/guestCourseDetail"


const publicRoutes = [
  {
    path: '/',
    component: guestHome
  },
  
  {
    path: '/courseDetail',
    component:  guestCourseDetail
  }
]



export { publicRoutes }
