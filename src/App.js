import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const isauth = useSelector((state) => state.authRed.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isauth && <Auth />}
      {isauth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
