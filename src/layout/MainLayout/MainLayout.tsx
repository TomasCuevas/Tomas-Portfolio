import Head from "next/head";

//* COMPONENTS *//
import { BottomWave, Header, MobileSidebar } from "@/components";

//* INTERFACE *//
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

      <main className="flex min-h-screen relative snap-y snap-mandatory flex-col items-center overflow-x-hidden dark:bg-dark bg-slate-100">
        {children}
        <BottomWave />
      </main>
    </>
  );
};
