import "./App.css";
import BoshSahifa from "./pages/Home/BoshSahifa";
import { AdabiyotlarAll } from "./pages/adabiyotlar/adabiyotlarAll";
import { MalumotProvider } from "./pages/profil/components/contexts/editMalumotlarContext";
import { PortfolioProvider } from "./pages/profil/components/contexts/editPortfolioContext";
import { Profil } from "./pages/profil/profil";
import { RegMalumotlar } from "./pages/regMalumotlar/regMalumotlar";
import { RegPortfolio } from "./pages/regPortfolio/regPortfolio";
import { RegTeacherFiles } from "./pages/regTeacherFiles/regTeacherFiles";
import { RegTeacherTitle } from "./pages/regTeacherTitle/regTeacherTitle";

function App() {
  return (
    <>
      {/* <RegMalumotlar/> */}
      {/* <RegPortfolio/> */}
      {/* <RegTeacherTitle/> */}
      {/* <RegTeacherFiles/> */}
      {/* <PortfolioProvider>
        <MalumotProvider>
          <Profil />
        </MalumotProvider>
      </PortfolioProvider> */}
      {/* <AdabiyotlarAll /> */}
      <BoshSahifa />
    </>
  );
}

export default App;
