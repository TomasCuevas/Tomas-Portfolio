import { useContext } from "react";
import Head from "next/head";

//* components *//
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

//* context *//
import { UIContext } from "@/context";

//* interface *//
interface Props {
  children: React.ReactNode;
  description: string;
  title: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  description,
  title,
}) => {
  const { isSidebarOpen } = useContext(UIContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {isSidebarOpen ? <Sidebar /> : null}
      <Header />
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-dark">
        {children}
      </main>
    </>
  );
};
