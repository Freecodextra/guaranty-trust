import React from 'react'
import { Route, Navigate } from "react-router-dom"
import { useFirebaseAuth } from "../../firebase/firebase";

function PrivateRoute({children}) {
    const { user } = useFirebaseAuth();
        if (!user) {
            return <Navigate to="/admin/login" />
        }
        return children;
}

export default PrivateRoute