import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isAdmin = true;

    if (!isAdmin) {
        return <Navigate to={"/"} />
    }


    return children;
}

export default ProtectedRoute;