import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashBoardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <DashBoardPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "sale",
        element: <SalePage />,
      },
      {
        path: "voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
