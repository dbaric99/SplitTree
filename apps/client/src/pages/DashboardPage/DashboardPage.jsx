import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DashboardPage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.general.user);
    
    useEffect(() => {
        console.log("DASHBOARD", user);
        navigate(`/${user.data.isAdmin ? 'admin' : 'user'}/dashboard`)
    }, [user]);
  return (
    <div>DashboardPage</div>
  )
}

export {DashboardPage}