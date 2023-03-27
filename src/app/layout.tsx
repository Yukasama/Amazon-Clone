import { authOptions } from "@/pages/api/auth/[...nextauth]";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import { getServerSession } from "next-auth";
import Provider from "@/components/contexts/Provider";

export const metadata = {
  title: "Amazon Clone",
  description: "This is an amazon clone",
  icons: "../../images/amazon.png",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="bg-gray-100">
            <Header />
            <main className="max-w-screen-2xl mx-auto">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
