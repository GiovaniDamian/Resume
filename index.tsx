import Layout from "../Resume/src/components/template/Layout";
import { AppProvider } from "../Resume/src/data/context/AppContext";



export default function Home() {
  return (
      <AppProvider>
          <Layout/>
      </AppProvider>
  );
}
