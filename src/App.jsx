import AsideControl from "./Components/aside/AsideControl";
import AsideUser from "./Components/asideUser/AsideUser";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";

function App() {
  return (
    <>
      <Header />
      <AsideUser />
      <AsideControl />
      <Main />
    </>
  );
}

export default App;
