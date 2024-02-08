
// @mui material components
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const bgImageAuth =
  "https://images.unsplash.com/photo-1635944095210-23114a1fb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80";

const pageRoutes = [
  {
    name: "pages",
    columns: 1,
    collapse: [
      {
        name: "dashboards",
        icon: <ArgonBox component="i" color="info" className="ni ni-spaceship" />,
        collapse: [
          {
            name: "default",
            route: "/dashboards/default",
          }
        ],
      },
      {
        name: "users",
        icon: <ArgonBox component="i" color="info" className="ni ni-circle-08" />,
        collapse: [
          {
            name: "reports",
            route: "/pages/users/reports",
          },
          {
            name: "new user",
            route: "/pages/users/new-user",
          },
        ],
      },
      {
        name: "Customer",
        icon: <ArgonBox component="i" color="info" className="ni ni-badge" />,
        collapse: [
          {
            name: "Customer List",
            route:  "/pages/Customers/customer-list",
          },
          {
            name: "Customer Detail",
            route:"/pages/Customers/CustomerDetail",
            icon: <ArgonBox component="i" color="info" className="ni ni-badge" mt={0.125} py={0.625} />,
          },
          {
            name: "Add Customer",
            route:"/pages/Customers/AddCustomers",
            icon: (
              <ArgonBox component="i" color="info" className="ni ni-laptop" mt={0.125} py={0.625} />
            ),
          },
        ],
      },
      {
        name: "projects",
        icon: <ArgonBox component="i" color="info" className="ni ni-app" />,
        collapse: [
          {
            name: "general",
            route: "/pages/projects/general",
          },
          {
            name: "new project",
            route: "/pages/projects/new-project",
          },
        ],
      },
      {
        name: "account",
        icon: <ArgonBox component="i" color="info" className="ni ni-single-02" />,
        collapse: [
          {
            name: "settings",
            route: "/pages/account/setting",
          },
          {
            name: "billing",
            route: "/pages/account/billing",
          },
          {
            name: "invoice",
            route: "/pages/account/invoice",
          },
          {
            name: "security",
            route: "/pages/account/security",
          },
        ],
      },
      {
        name: "extra",
        icon: <ArgonBox component="i" color="info" className="ni ni-folder-17" />,
        collapse: [
          { name: "RTL", route: "/pages/rtl" },
        ],
      },
    ],
  },
  {
    name: "authenticaton",
    image: (
      <ArgonBox
        width="100%"
        height="100%"
        display="flex"
        borderRadius="lg"
        position="relative"
        py={8}
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.info.main, 0.8),
            rgba(gradients.info.state, 0.8)
          )}, url(${bgImageAuth})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        })}
      >
        <ArgonBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          color="white"
          fontWeight="medium"
        >
          <span className="text-lg">
            Explore our
            <br />
            Authentication pages
          </span>
        </ArgonBox>
      </ArgonBox>
    ),
    collapse: [
          {
            name: "sign in",
            route: "/authentication/sign-in/illustration",
          },
      
    
          {
            name: "sign up",
            route: "/authentication/sign-up/illustration",
          },
      
     
          {
            name: "reset password",
            route: "/authentication/reset-password/illustration",
          },
      
     
       
          {
            name: "lock",
            route: "/authentication/lock/illustration",
          },
       
        
          {
            name: "2-Step Verification",
            route: "/authentication/verification/illustration",
          },
      
      {
        name: "error",
        dropdown: true,
        collapse: [
          {
            name: "404",
            route: "/authentication/error/404",
          },
          {
            name: "500",
            route: "/authentication/error/500",
          },
        ],
      },
    ],
  },
  {
    name: "ecommerce",
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "orders",
        icon: <ArgonBox component="i" color="info" className="ni ni-cart" />,
        collapse: [
          {
            name: "order list",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "order details",
            route: "/ecommerce/orders/order-details",
          },
        ],
      },
      {
        name: "general",
        icon: <ArgonBox component="i" color="info" className="ni ni-box-2" />,
        collapse: [
          {
            name: "order list",
            route: "/ecommerce/overview",
          },
          {
            name: "order details",
            route: "/ecommerce/referral",
          },
        ],
      },
      {
        name: "Category",
        icon: <ArgonBox component="i" color="info" className="ni ni-planet" />,
        collapse: [
          {
            name: "Category List",
            route: "/ecommerce/Category/category-list",
          },
          {
            name: "Add Category",
            route: "/ecommerce/Category/add-Category",
          },
          {
            name: "Category Page",
            route: "/ecommerce/Category/CategoryPage/:id",
          }
        ],
      },
      {
        name: "products",
        icon: <ArgonBox component="i" color="info" className="ni ni-planet" />,
        collapse: [
          {
            name: "new product",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "edit product",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "product page",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "products list",
            route: "/ecommerce/products/products-list",
          },
        ],
      },
    ],
  },
];

export default pageRoutes;
