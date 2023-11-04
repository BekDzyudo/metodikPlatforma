import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import BoshSahifa from "./pages/Home/BoshSahifa";
import MeyoriySahifa from "./pages/MeyoriyHuquqiyHujjatlar/MeyoriySahifa";
import Yangiliklar from "./pages/News/yangiliklar";
import Hududlar from "./pages/ProfessionalTalimMuassasalari/Hududlar";
import Shahar from "./pages/ProfessionalTalimMuassasalari/Shahar";
import FanOqituvchi from "./pages/TalimStandartlari/FanOqituvchi/FanOqituvchi";
import OquvAmaliyot from "./pages/TalimStandartlari/OquvAmaliyot/OquvAmaliyot";
import OquvMateriallarToplami from "./pages/TalimStandartlari/OquvMateriallarToplami/OquvMateriallarToplami";
import TalimStandartDetail from "./pages/TalimStandartlari/TalimStandartDetail";
import TalimStandartSahifa from "./pages/TalimStandartlari/TalimStandartSahifa";
import UmumKasbiyDetail from "./pages/TalimStandartlari/UmumiyKasbiy/UmumKasbiyDetail";
import UmumiyKasbiy from "./pages/TalimStandartlari/UmumiyKasbiy/UmumiyKasbiy";
import { AdabiyotlarAll } from "./pages/adabiyotlar/adabiyotlarAll";
import { MalumotProvider } from "./pages/profil/components/contexts/editMalumotlarContext";
import { PortfolioProvider } from "./pages/profil/components/contexts/editPortfolioContext";
import { Profil } from "./pages/profil/profil";
import { RegMalumotlar } from "./pages/regMalumotlar/regMalumotlar";
import { RegPortfolio } from "./pages/regPortfolio/regPortfolio";
import { RegTeacherFiles } from "./pages/regTeacherFiles/regTeacherFiles";
import { RegTeacherTitle } from "./pages/regTeacherTitle/regTeacherTitle";
import PrezidentFarmoni from "./pages/MeyoriyHuquqiyHujjatlar/PrezidentFarmoni";
import VazirlarQarori from "./pages/MeyoriyHuquqiyHujjatlar/VazirlarQarori";
import VazirlarBuyrugi from "./pages/MeyoriyHuquqiyHujjatlar/VazirlarBuyrugi";
import Nizomlar from "./pages/MeyoriyHuquqiyHujjatlar/Nizomlar";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <BoshSahifa />,
    },
    {
      path: "MeyoriySahifa",
      element: <MeyoriySahifa />,
      children: [
        {
          index: true,
          element: <PrezidentFarmoni />,
        },
        {
          path: "vazirlarQarori",
          element: <VazirlarQarori />,
        },
        {
          path: "vazirlarBuyrugi",
          element: <VazirlarBuyrugi />,
        },
        {
          path: "nizomlar",
          element: <Nizomlar />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />

    // <>
    //   {/* <RegMalumotlar/> */}
    //   {/* <RegPortfolio/> */}
    //   {/* <RegTeacherTitle/> */}
    //   {/* <RegTeacherFiles/> */}
    //   {/* <PortfolioProvider>
    //     <MalumotProvider>
    //       <Profil />
    //     </MalumotProvider>
    //   </PortfolioProvider> */}
    //   {/* <AdabiyotlarAll /> */}
    //   {/* <BoshSahifa /> */}
    //   {/* <MeyoriySahifa /> */}
    //   {/* <Yangiliklar /> */}
    //   {/* <Hududlar /> */}
    //   {/* <Shahar /> */}
    //   {/* <TalimStandartSahifa /> */}
    //   {/* <TalimStandartDetail /> */}
    //   {/* <FanOqituvchi /> */}
    //   {/* <OquvAmaliyot /> */}
    //   {/* <OquvMateriallarToplami /> */}
    //   {/* <UmumiyKasbiy /> */}
    //   {/* <UmumKasbiyDetail /> */}
    //   {/* <Contact /> */}
    // </>
  );
}

export default App;
