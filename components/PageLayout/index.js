import Footer from "./Footer";
import Header from "./Header";

export function PageLayout({
  children,
  ...rest
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
