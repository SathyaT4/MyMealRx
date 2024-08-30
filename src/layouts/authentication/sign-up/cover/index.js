import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Images
import bgImage from "assets/images/illustrations/reset.jpg";

function Cover() {
  return (
    <IllustrationLayout
      title="Join us Today"
      description="Enter your email and password to register"
      illustration={bgImage}
    >
      <Card sx={{ padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                sx={{ '& .MuiCheckbox-root': { color: '#ff9800' } }}
              />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1, color: '#ff9800' }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
                sx={{ color: '#ff9800' }}
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                sx={{ background: 'linear-gradient(45deg, #ff9800 30%, #ff5722 90%)', '&:hover': { background: 'linear-gradient(45deg, #ff5722 30%, #ff9800 90%)' } }}
              >
                Sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  sx={{ color: '#ff9800' }}
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </IllustrationLayout>
  );
}

export default Cover;
