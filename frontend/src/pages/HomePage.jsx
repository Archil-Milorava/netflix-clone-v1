import HomeScreen from "./Home/HomeScreen";
import AuthScreen from "./Home/authScreen";

const HomePage = () => {
  const user = true;

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
