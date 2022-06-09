import { createContext,useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { loginAdmin } from "../services/admin.services";
export const AdminContext = createContext();


export default function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(null);
    const [token, setToken] = useState(null);
    const login = (admin) => {
        loginAdmin(admin)
            .then(res => {
                setToken(res.data.token);
            })
            .catch(err => {
                console.log(err.response.data);
            });
    };
    useEffect(() => {
        if (admin) {
            const decoded = jwtDecode(admin);
            setAdmin(decoded);
            console.log(decoded);
        }
    }, [admin,token]);

    const value = {
        admin,
        token,
        login
    };

    return (
    <AdminContext.Provider value={value}>
        {children}
    </AdminContext.Provider>
  )
}
