import Head from "next/head";

//* components *//
import { Header, MobileSidebar } from "@/components/layout";

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <MobileSidebar />
      <Header />
      <main className="flex min-h-screen snap-y snap-mandatory flex-col items-center overflow-x-hidden bg-dark">
        {children}
      </main>
    </>
  );
};
