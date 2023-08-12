import Calendar from "../src/components/users/pages/Calendar";
import Dashboard from "../src/components/users/pages/Dashboard";
import Leave from "../src/components/users/pages/Leave";
import Resignation from "../src/components/users/pages/Resignation";


const EmployeeRoutes = [
    {path: '/employee/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/employee/leave', exact: true, name: "Leave", component: Leave},
    {path: '/employee/resign', exact: true, name: "Resign", component: Resignation},
    {path: '/employee/calendar', exact: true, name: "Calendar", component: Calendar},
];

export default EmployeeRoutes;
