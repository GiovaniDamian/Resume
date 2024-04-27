import { Inter } from "next/font/google";
import { AppProvider } from "../data/context/AppContext";
import Layout from "../components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <AppProvider>
          <Layout />
      </AppProvider>
  );
}
