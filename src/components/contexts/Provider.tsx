"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function Provider({ children, session }: Props) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </ReduxProvider>
  );
}
