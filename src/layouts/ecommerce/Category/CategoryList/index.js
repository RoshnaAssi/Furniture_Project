// react-router-dom components
import { Link, Navigate, useParams } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import Checkbox from "@mui/material/Checkbox";

// Data
import PropTypes from 'prop-types'; // Import PropTypes

// ProductsList page components
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../config/firebase";

// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

import ArgonBadge from "components/ArgonBadge";
import { useNavigate } from "react-router-dom";
import React, { forwardRef } from 'react';
// Badges
const outOfStock = (
  <ArgonBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
  <ArgonBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);

const CategoryList = () => {

  const [categoryList, setCategoryList] = useState([]);
  const categoriesCollectionRef = collection(db, "Category");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(categoriesCollectionRef);
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
        setCategoryList(list);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(categoryList);


  const handelDelete = async (id) => {
    console.log("Deleting document with ID:", id);
    try {
      await deleteDoc(doc(db, "Category", id));
      setCategoryList(prevCategoryList => prevCategoryList.filter((item) => item.id !== id));
      console.log("Document deleted successfully!");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const renderAction = () => {
    return (
      <>
        {categoryList.map((category, index) => (
          <ArgonBox key={category.id} display="flex" alignItems="center">
            {index === 0 && ( // Render the icon only for the first category
              <>
                <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                  <Tooltip title="Preview product" placement="top">
                    <Icon>visibility</Icon>
                  </Tooltip>
                </ArgonTypography>
                <ArgonBox mx={2}>
                  <ArgonTypography
                    variant="body1"
                    color="secondary"
                    sx={{ cursor: "pointer", lineHeight: 0 }}
                  >
                    <Tooltip title="Edit product" placement="top" onClick={() => navigate(`/ecommerce/Category/add-Category/${category.id}`)}>
                      <Icon>edit</Icon>
                    </Tooltip>
                  </ArgonTypography>
                </ArgonBox>
                <ArgonTypography variant="body1" color="secondary" sx={{ cursor: "pointer", lineHeight: 0 }}>
                  <Tooltip title="Delete product" placement="left" onClick={() => handelDelete(category.id)}>
                    <Icon>delete</Icon>
                  </Tooltip>
                </ArgonTypography>
              </>
            )}
          </ArgonBox>
        ))}
      </>
    );
  }

  const renderimage = () => {
    return (
      <>
        {categoryList.map((category, index) => (
          <ArgonBox key={category.id} display="flex" alignItems="center">
            {index === 0 && ( // Render the icon only for the first category
              <>
                <Checkbox defaultChecked={category.checked} />
                <ArgonBox mx={2} width="3.75rem">
                  <ArgonBox component="img" src={category.img} alt={category.name} width="100%" />
                </ArgonBox>
                <ArgonTypography variant="button" fontWeight="medium">
                  {category.name}
                </ArgonTypography>
              </>
            )}
          </ArgonBox>
        ))}
      </>
    );
  }

  const actionColumn = [
    {
      Header: "Action",
      accessor: "actions", // Change the accessor to match your data structure
      Cell: renderAction
    }
  ];
  const userColumn = [
    {
      Header: "Categories",
      accessor: "category",
      Cell: renderimage
    },
    { Header: "TotalProducts", accessor: "TotalProduct" },
    { Header: "TotalEarning", accessor: "TotalEarning" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }) => (value === "in stock" ? inStock : outOfStock),
    },
  ];

  const columns = userColumn.concat(actionColumn); // Concatenate the arrays here

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <ArgonBox lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                All Categories
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </ArgonTypography>
            </ArgonBox>
            <Stack spacing={1} direction="row">
              <Link to="/ecommerce/Category/add-Category">
                <ArgonButton variant="gradient" color="info" size="small">
                  + New Category
                </ArgonButton>
              </Link>
              <ArgonButton variant="outlined" color="info" size="small">
                Import
              </ArgonButton>
              <ArgonButton variant="outlined" color="info" size="small">
                Export
              </ArgonButton>
            </Stack>
          </ArgonBox>
          <DataTable
            table={{
              rows: categoryList,
              columns: columns
            }}
            entriesPerPage={{
              defaultValue: 7,
              entries: [5, 7, 10, 15, 20, 25],
            }}
            canSearch
          />
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  )
}

CategoryList.propTypes = {
  value: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired, // Move id outside the value object
    img: PropTypes.string, // Add validation for the img property
  }).isRequired,
};



export default CategoryList;
