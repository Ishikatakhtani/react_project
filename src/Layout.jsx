import { Outlet } from "react-router-dom"
import Header from "./components/Header"
// import Footer from "./components/Footer"

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;

