import Layout from "../components/template/Layout";
import { AppProvider } from "../data/context/AppContext";



export default function Home() {
  return (
      <AppProvider>
          <Layout/>
      </AppProvider>
  );
}
