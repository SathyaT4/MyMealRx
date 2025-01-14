import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/illustrations/reset.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput
            type="email"
            label="Email"
            fullWidth
            sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            type="password"
            label="Password"
            fullWidth
            sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
          />
        </MDBox>
        <MDBox display="flex" alignItems="center" ml={-1}>
          <Switch
            checked={rememberMe}
            onChange={handleSetRememberMe}
            sx={{ '& .MuiSwitch-thumb': { backgroundColor: '#ff9800' }, '& .MuiSwitch-track': { backgroundColor: '#ffcc80' } }}
          />
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1, color: '#ff9800' }}
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            sx={{ background: 'linear-gradient(45deg, #ff9800 30%, #ff5722 90%)', '&:hover': { background: 'linear-gradient(45deg, #ff5722 30%, #ff9800 90%)' } }}
          >
            Sign In
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="orange"
              fontWeight="medium"
              textGradient
            >
              Sign Up
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </IllustrationLayout>
  );
}

export default Illustration;
