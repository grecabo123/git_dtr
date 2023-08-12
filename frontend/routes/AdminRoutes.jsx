import ComputeDTR from "../src/components/admin/DTR/ComputeDTR";
import Payroll from "../src/components/admin/DTR/Payroll";
import DetailsEmployee from "../src/components/admin/Employee/DetailsEmployee";
import ListEmployee from "../src/components/admin/Employee/ListEmployee";
import Register from "../src/components/admin/Employee/Register";
import TimeCheck from "../src/components/admin/TimeCheck/TimeCheck";
import ActivityLogs from "../src/components/admin/pages/ActivityLogs";
import BackupDb from "../src/components/admin/pages/BackupDb";
import Calendar from "../src/components/admin/pages/Calendar";
import Dashboard from "../src/components/admin/pages/Dashboard"
import MyProfile from "../src/components/admin/pages/MyProfile";
import Philhealthpage from "../src/components/admin/pages/Philhealthpage";
import SSSpage from "../src/components/admin/pages/SSSpage";
import TINpage from "../src/components/admin/pages/TINpage";
import TotalDays from "../src/components/admin/pages/TotalDays";


const AdminRoutes = [
    {path: '/admin/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/register', exact: true, name: "Register", component: Register},
    {path: '/admin/list', exact: true, name: "List", component: ListEmployee},
    {path: '/admin/calendar', exact: true, name: "Calendar", component: Calendar},
    {path: '/admin/payroll', exact: true, name: "Payroll", component: Payroll},
    {path: '/admin/compute', exact: true, name: "Compute", component: ComputeDTR},
    {path: '/admin/backup', exact: true, name: "Backup", component: BackupDb},
    {path: '/admin/logs', exact: true, name: "Logs", component: ActivityLogs},
    {path: '/admin/profile', exact: true, name: "Profile", component: MyProfile},
    {path: '/admin/SSS', exact: true, name: "SSS", component: SSSpage},
    {path: '/admin/TIN', exact: true, name: "Tin", component: TINpage},
    {path: '/admin/PhilHealth', exact: true, name: "Phil", component: Philhealthpage},
    {path: '/admin/total', exact: true, name: "Total", component: TotalDays},
    {path: '/admin/employee/refid=:id', exact: true, name: "Total", component: DetailsEmployee},
    {path: '/admin/employee/time/refid=:id', exact: true, name: "Time", component: TimeCheck},
]

export default AdminRoutes;
