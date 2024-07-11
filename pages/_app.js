import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const headerTitles = {
    "/analytics": "Analytics",
  };

  const headerTitle = headerTitles[router.pathname] || "Analytics";
  return (
    <Layout headerTitle={headerTitle}>
      <Component {...pageProps} />
    </Layout>
  );
}
