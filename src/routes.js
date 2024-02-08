
// Argon Dashboard 2 PRO MUI layouts
import Default from "layouts/dashboards/default";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import NewProject from "layouts/pages/projects/new-project";
import RTL from "layouts/pages/rtl";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";
import CategoryList from "../src/layouts/ecommerce/Category/CategoryList";
import AddCategory from "../src/layouts/ecommerce/Category/AddCategory";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import CategoryPage from "layouts/ecommerce/Category/CategoryPage";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-shop" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
        component: <Default />,
      },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-ungroup" />,
    collapse: [
      {
        name: "Customer",
        key: "Customer",
        collapse: [
          {
            name: "Customer List",
            key: "Customer List",
            route: "/pages/Customers/customer-list",
            component: <ProductsList />,
          },
          {
            name: "Customer Detail",
            key: "data-tables",
            route: "/applications/data-tables",
          },
          {
            name: "Add Customer",
            key: "Add Customer",
            route: "/pages/Customers/AddCustomers",
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "Reports",
            key: "reports",
            route: "/pages/users/reports",
            component: <Reports />,
          },
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: <Invoice />,
          },
          {
            name: "Security",
            key: "security",
            route: "/pages/account/security",
            component: <Security />,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "General",
            key: "general",
            route: "/pages/projects/general",
            component: <General />,
          },
          {
            name: "New Project",
            key: "new-project",
            route: "/pages/projects/new-project",
            component: <NewProject />,
          },
        ],
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-ui-04" />,
    collapse: [
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        component: <Analytics />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-archive-2" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
        component: <Overview />,
      },
      {
        name: "Category",
        key: "category",
        collapse: [
          {
            name: "Category List",
            key: "category-list",
            route: "/ecommerce/Category/category-list",
            component: <CategoryList />,
          },
          {
            name: "Add Category",
            key: "add-Category",
            route: "/ecommerce/Category/add-Category",
            component: <AddCategory />,
          },
          {
            name: "Category Page",
            key: "Category-page",
            route: "/ecommerce/Category/CategoryPage/:id",
            component: <CategoryPage />,
          }
        ],
      },
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <NewProduct />,
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: <EditProduct />,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: <ProductPage />,
          },
          {
            name: "Products List",
            key: "products-list",
            route: "/ecommerce/products/products-list",
            component: <ProductsList />,
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <OrderList />,
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: <OrderDetails />,
          },
        ],
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
        component: <Referral />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-single-copy-04" />,
    collapse: [
     
          {
            name: "Sign In",
            key: "sign-in",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
      
      
          {
            name: "Sign Up",
            key: "sign-up",
            route: "/authentication/sign-up/illustration",
            component: <SignUpIllustration />,
          },
       
     
     
          {
            name: "Reset Password",
            key: "reset-password",
            route: "/authentication/reset-password/illustration",
            component: <ResetIllustration />,
          },
       
    
       
          {
            name: "Lock",
            key: "lock",
            route: "/authentication/lock/illustration",
            component: <LockIllustration />,
          },
      
      
          {
            name: "2-Step Verification",
            key: "2-step-verification",
            route: "/authentication/verification/illustration",
            component: <VerificationIllustration />,
          },
     
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  }
];

export default routes;
