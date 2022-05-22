// ** Import from react dom
import { Route, Routes, Redirect } from 'react-router-dom'

// ** Import core SCSS styles
import 'assets/scss/theme.scss'
import Landing from 'components/marketing/landings/test/Landing'

// ** Import Layouts
// import DashboardIndex from 'layouts/dashboard/DashboardIndex'
import AuthLayout from 'layouts/dashboard/AuthLayout'
// import HelpCenterLayout from 'layouts/marketing/HelpCenterLayout' // ( added in v1.3.0 )
// import DashboardIndexCompact from 'layouts/dashboard/DashboardIndexCompact' // ( added in v1.3.0 )
// import DashboardIndexTop from 'layouts/dashboard/DashboardIndexTop' // ( added in v1.3.0 )

// ** Import Dahbaord Menu Pages
// import Overview from 'components/dashboard/overview/Overview'
// import Analytics from 'components/dashboard/analytics/Analytics'

// ** Import Courses Pages
// import AllCourses from 'components/dashboard/courses/all-courses/AllCourses'
// import CoursesCategory from 'components/dashboard/courses/CoursesCategory'
// import CategorySingle from 'components/dashboard/courses/CategorySingle'

// ** Import Users Pages
// import Instructor from 'components/dashboard/user/Instructor'
// import Students from 'components/dashboard/user/Students'

// ** Import CMS Pages
// import CMSDashboard from 'components/dashboard/cms/CMSDashboard'
// import AllPosts from 'components/dashboard/cms/all-posts/AllPosts'
// import AddNewPost from 'components/dashboard/cms/AddNewPost'
// import Category from 'components/dashboard/cms/Category'

// ** Import Authentication components
import SignIn from 'components/dashboard/authentication/SignIn'
import SignUp from 'components/dashboard/authentication/SignUp'
// import ForgetPassword from 'components/dashboard/authentication/ForgetPassword'
// import Notifications from 'components/dashboard/authentication/Notifications'

// ** Import Settings components
// import General from 'components/dashboard/settings/General'
// import Google from 'components/dashboard/settings/Google'
// import Social from 'components/dashboard/settings/Social'
// import SocialLogin from 'components/dashboard/settings/SocialLogin'
// import Payment from 'components/dashboard/settings/Payment'
// import SMTPServer from 'components/dashboard/settings/SMTPServer'

// Dashboard Projects ( new v1.2.0 )
// import ProjectGrid from 'components/dashboard/projects/grid/ProjectGrid'
// import ProjectList from 'components/dashboard/projects/list/ProjectList'
// import CreateProject from 'components/dashboard/projects/create-project/CreateProject'
// import ProjectBudget from 'components/dashboard/projects/single/budget/ProjectBudget'
// import ProjectFiles from 'components/dashboard/projects/single/files/ProjectFiles'
// import ProjectOverview from 'components/dashboard/projects/single/overview/ProjectOverview'
// import ProjectSummary from 'components/dashboard/projects/single/summary/ProjectSummary'
// import ProjectTask from 'components/dashboard/projects/single/task/ProjectTask'
// import ProjectTeam from 'components/dashboard/projects/single/team/ProjectTeam'

// Dashboard Apps -> Mail ( new v1.3.0 )
// import Mail from 'components/dashboard/mail-app/mail/Mail'
// import MailDraft from 'components/dashboard/mail-app/mail-draft/MailDraft'
// import MailDetails from 'components/dashboard/mail-app/mail-details/MailDetails'
// import MailProvider from 'context/providers/MailProvider'

// ** Boostrap Forms components
// import ChecksRadios from 'components/elements/bootstrap/forms/ChecksRadios'
// import FloatingLabels from 'components/elements/bootstrap/forms/FloatingLabels'
// import FormControls from 'components/elements/bootstrap/forms/FormControls'
// import FormText from 'components/elements/bootstrap/forms/FormText'
// import BSInputGroup from 'components/elements/bootstrap/forms/BSInputGroup'
// import Layouts from 'components/elements/bootstrap/forms/Layouts'
// import Range from 'components/elements/bootstrap/forms/Range'
// import BSSelect from 'components/elements/bootstrap/forms/BSSelect'
// import Validation from 'components/elements/bootstrap/forms/Validation'

// ** Boostrap components
// import Accordions from 'components/elements/bootstrap/Accordions'
// import Alerts from 'components/elements/bootstrap/Alerts'
// import AvatarStyles from 'components/elements/bootstrap/AvatarStyles'
// import Badges from 'components/elements/bootstrap/Badges'
// import Breadcrumbs from 'components/elements/bootstrap/Breadcrumbs'
// import Buttons from 'components/elements/bootstrap/Buttons'
// import ButtonGroup from 'components/elements/bootstrap/ButtonGroup'
// import Cards from 'components/elements/bootstrap/Cards'
// import Carousels from 'components/elements/bootstrap/Carousels'
// import CloseButtons from 'components/elements/bootstrap/CloseButtons'
// import Collapses from 'components/elements/bootstrap/Collapses'
// import Dropdowns from 'components/elements/bootstrap/Dropdowns'
// import Listgroups from 'components/elements/bootstrap/Listgroups'
// import Navbars from 'components/elements/bootstrap/Navbars'
// import Navs from 'components/elements/bootstrap/Navs'
// import BSOffcanvas from 'components/elements/bootstrap/BSOffcanvas'
// import Overlays from 'components/elements/bootstrap/Overlays'
// import Paginations from 'components/elements/bootstrap/Paginations'
// import Popovers from 'components/elements/bootstrap/Popovers'
// import Progress from 'components/elements/bootstrap/Progress'
// import Spinners from 'components/elements/bootstrap/Spinners'
// import Modals from 'components/elements/bootstrap/Modals'
// import Tables from 'components/elements/bootstrap/Tables'
// import Toasts from 'components/elements/bootstrap/Toasts'
// import Tooltips from 'components/elements/bootstrap/Tooltips'

// ** Import docs and change log pages
// import Documentation from 'components/dashboard/documentation/Documentation'
// import ChangeLog from 'components/dashboard/changelog/ChangeLog'

/* ----------------------------------- */
/* IMPORTS FOR MARKETING PAGES - START */
import DefaultLayout from 'layouts/marketing/DefaultLayout'
// import LayoutFooterLinks from 'layouts/marketing/LayoutFooterLinks'
// import BlankLayout from 'layouts/marketing/BlankLayout'
// import NotFound from 'layouts/marketing/NotFound'

import CourseIndex from 'components/marketing/pages/courses/course-index/CourseIndex'
// import CourseCategory from 'components/marketing/pages/courses/course-category/CourseCategory'

/* IMPORTS FOR FRONT SIDE PAGES MENU */
// import CourseSingle from 'components/marketing/pages/courses/course-single/CourseSingle'
// import CourseSingle2 from 'components/marketing/pages/courses/course-single2/CourseSingle2'
// import CourseResume from 'components/marketing/pages/courses/course-resume/CourseResume'
// import CourseCheckout from 'components/marketing/pages/courses/course-checkout/CourseCheckout'
// import CourseFilterPage from 'components/marketing/pages/courses/course-filter-page/CourseFilterPage'
// import AddNewCourse from 'components/marketing/pages/courses/add-new-course/AddNewCourse'
// import CoursePath from 'components/marketing/pages/courses/course-path/CoursePath'
// import CoursePathSingle from 'components/marketing/pages/courses/course-path-single/CoursePathSingle'
// import About from 'components/marketing/pages/about/About'
// import Pricing from 'components/marketing/pages/pricing/Pricing'
// import ComparePlan from 'components/marketing/pages/compare-plan/ComparePlan' // new v1.1.0
// import Contact from 'components/marketing/pages/contact/Contact' // new v1.1.0

// IMPORTS FOR HELP CENTER PAGES ( v1.3.0 )
// import HelpCenter from 'components/marketing/pages/help-center/help-center/HelpCenter'
// import HelpCenterFAQ from 'components/marketing/pages/help-center/help-center-faq/HelpCenterFAQ'
// import HelpCenterGuide from 'components/marketing/pages/help-center/help-center-guide/HelpCenterGuide'
// import HelpCenterGuideSingle from 'components/marketing/pages/help-center/help-center-guide-single/HelpCenterGuideSingle'
// import HelpCenterSupport from 'components/marketing/pages/help-center/help-center-support/HelpCenterSupport'

/* IMPORTS FOR FRONT BLOG SUBMENU  ROUTERS */
// import BlogListing from 'components/marketing/blog/BlogListing'
// import BlogArticleSingle from 'components/marketing/blog/BlogArticleSingle'
// import BlogCategory from 'components/marketing/blog/BlogCategory'
// import BlogSidebar from 'components/marketing/blog/BlogSidebar'

/* IMPORTS FOR FRONT CAREER SUBMENU  ROUTERS */
// import Career from 'components/marketing/pages/career/career/Career' // new v1.1.0
// import CareerList from 'components/marketing/pages/career/career-list/CareerList' // new v1.1.0
// import CareerSingle from 'components/marketing/pages/career/career-single/CareerSingle' // new v1.1.0

/* IMPORTS FOR FRONT SPECIALTY SUBMENU  ROUTERS */
// import ComingSoon from 'components/marketing/pages/specialty/ComingSoon'
import Error404 from 'components/marketing/pages/specialty/Error404'
// import MaintenanceMode from 'components/marketing/pages/specialty/MaintenanceMode'
// import TermsAndConditions from 'components/marketing/pages/specialty/TermsAndConditions'

// Landing menu item pages
import LandingCourses from 'components/marketing/landings/landing-courses/LandingCourses'
// import CourseLead from 'components/marketing/landings/course-lead/CourseLead'
// import RequestAccess from 'components/marketing/landings/request-access/RequestAccess'
// import LandingSass from 'components/marketing/landings/landing-sass/LandingSass' // new v1.1.0

// Instructor Dashboard Pages
import InstructorDashboard from 'components/marketing/instructor/Dashboard'
import ProtectedRoute from 'components/marketing/pages/ProtectedRoute'
// import InstructorMyCourses from 'components/marketing/instructor/MyCourses'
// import InstructorReviews from 'components/marketing/instructor/Reviews'
// import Earnings from 'components/marketing/instructor/Earnings'
// import InstructorOrders from 'components/marketing/instructor/Orders'
// import InstructorStudents from 'components/marketing/instructor/Students'
// import ViewProfile from 'components/marketing/instructor/ViewProfile'

// Student Dashboard Pages
// import StudentDashboard from 'components/marketing/student/Dashboard'
// import DeleteProfile from 'components/marketing/account-settings/DeleteProfile'
// import EditProfile from 'components/marketing/account-settings/EditProfile'
// import LinkedAccounts from 'components/marketing/account-settings/LinkedAccounts'
// import AccountNotifications from 'components/marketing/account-settings/Notifications'
// import StudentPayment from 'components/marketing/account-settings/Payment'
// import ProfilePrivacy from 'components/marketing/account-settings/ProfilePrivacy'
// import Security from 'components/marketing/account-settings/Security'
// import SocialProfiles from 'components/marketing/account-settings/SocialProfiles'
// import Subscriptions from 'components/marketing/account-settings/Subscriptions'

// Account Settings
// import BillingInfo from 'components/marketing/account-settings/BillingInfo'
// import Payouts from 'components/marketing/account-settings/Payouts'
// import Invoice from 'components/marketing/account-settings/Invoice'
// import InvoiceDetails from 'components/marketing/account-settings/InvoiceDetails'

/* IMPORTS FOR MARKETING PAGES - END */
/* --------------------------------- */

function AllRoutes() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path='landing' element={<LandingCourses />} />

      {/* 登入、註冊 */}
      <Route path='/auth' element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>

      {/* 導師、講師 */}
      <Route
        path='/instructor'
        element={
          <ProtectedRoute>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<InstructorDashboard />} />
        <Route path='dashboard' element={<InstructorDashboard />} />
      </Route>

      {/* Page Not Found */}
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default AllRoutes
