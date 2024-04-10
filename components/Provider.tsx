import React from "react";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// Create a provider component
interface PostProviderProps {
    children: ReactNode;
    session: any;
}

const Provider = ({ children, session }: PostProviderProps) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
