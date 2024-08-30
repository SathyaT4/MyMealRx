import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'mui-image';

// MyExclusions page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import Header from 'layouts/pages/profile/components/Header';

function MyExclusions() {
  const [selectedDiet, setSelectedDiet] = useState('Vegetarian'); // Default value set
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleButtonClick = (diet) => {
    setSelectedDiet(diet); // Set selected diet
  };

  const handleAllergenToggle = (allergen) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  const dietPreferences = ['Exclude Red Meat', 'Exclude Vegetables', 'Exclude Dairy'];

  return (
    <BaseLayout>
      {/* Include Header Component */}
      <Header title="My Exclusions" subtitle="Manage your diet preferences and allergen exclusions here." />

      <Box mt={4} mb={3} px={2}>
        {/* User Diet Preferences */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          display="flex"
          alignItems="center"
          sx={{ backgroundColor: '#fffae5' }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
              Diet Preferences
              <IconButton size="small" sx={{ color: 'grey' }}>
                <InfoIcon />
              </IconButton>
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: 'black' }}>
              List of preset exclusions and preferences by the user.
            </Typography>
            <Box mt={2}>
              {dietPreferences.map((preference) => (
                <Button
                  key={preference}
                  variant="contained"
                  sx={{
                    color: 'white',
                    backgroundColor: 'orange',  // All buttons appear selected
                    marginRight: '8px',
                    marginBottom: '8px',
                    borderColor: 'black',
                    '&:hover': {
                      backgroundColor: 'green', // No hover effect as it's already selected
                    },
                    cursor: 'default',
                    pointerEvents: 'none',  // Disable button interactions
                  }}
                  startIcon={<CheckCircleIcon />}
                >
                  {preference}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Veg or Non-Veg Option */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          display="flex"
          alignItems="center"
          sx={{ backgroundColor: '#fffae5' }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
              Veg or Non-Veg
            </Typography>
            <Typography variant="body1" mt={2} sx={{ color: 'black' }}>
              Choose between vegetarian or non-vegetarian options to customize your meal plans.
            </Typography>
            <ButtonGroup variant="contained" sx={{ mt: 2 }}>
              <Button
                variant={selectedDiet === 'Vegetarian' ? 'outlined' : 'contained'}
                sx={{
                  color: selectedDiet === 'Vegetarian' ? 'white' : 'orange',
                  backgroundColor: selectedDiet === 'Vegetarian' ? 'orange' : 'inherit',
                  borderColor: 'orange',
                  '&:hover': {
                    backgroundColor: selectedDiet === 'Vegetarian' ? 'orange' : 'inherit',
                  },
                }}
                onClick={() => handleButtonClick('Vegetarian')}
              >
                Vegetarian
              </Button>
              <Button
                variant={selectedDiet === 'Non-Vegetarian' ? 'outlined' : 'contained'}
                sx={{
                  color: selectedDiet === 'Non-Vegetarian' ? 'white' : 'orange',
                  backgroundColor: selectedDiet === 'Non-Vegetarian' ? 'orange' : 'inherit',
                  borderColor: 'orange',
                  '&:hover': {
                    backgroundColor: selectedDiet === 'Non-Vegetarian' ? 'orange' : 'inherit',
                  },
                }}
                onClick={() => handleButtonClick('Non-Vegetarian')}
              >
                Non-Vegetarian
              </Button>
            </ButtonGroup>
          </Box>
        </Box>

        {/* Common Allergens and Other Filters */}
        <Box
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          sx={{ backgroundColor: '#fffae5' }}
        >
          <Box display="flex" alignItems="center">
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                Common Allergens & Filters
              </Typography>
              <Typography variant="body1" mt={2} sx={{ color: 'black' }}>
                Select common allergens and other filters to exclude specific ingredients from your meal plans. This helps in avoiding recipes that may cause allergic reactions or that you prefer not to consume.
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography variant="body2" fontWeight="bold" sx={{ color: 'black' }}>
              <strong>Allergens:</strong>
            </Typography>
            <Grid container spacing={2} mt={1}>
              {['Gluten', 'Peanuts', 'Eggs', 'Fish', 'Tree Nuts', 'Dairy', 'Soy', 'Shellfish'].map(allergen => (
                <Grid item xs={6} sm={4} key={allergen}>
                  <Button
                  color='error'
                    variant={selectedAllergens.includes(allergen) ? 'outlined' : 'contained'}
                    sx={{
                      color: selectedAllergens.includes(allergen) ? 'white' : 'orange',
                      backgroundColor: selectedAllergens.includes(allergen) ? 'orange' : 'white',
                      borderColor: selectedAllergens.includes(allergen) ? 'white' : 'white',
                      '&:hover': {
                        backgroundColor: selectedAllergens.includes(allergen) ? 'orange' : 'yellow',
                      },
                    }}
                    onClick={() => handleAllergenToggle(allergen)}
                  >
                    {allergen}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 3, backgroundColor: 'gold', color: 'white', '&:hover': { backgroundColor: 'gold' } }}
          >
            Apply Filters
          </Button>
        </Box>

        {/* Image Section */}
        <Box mt={4} display="flex" justifyContent="center">
          <Image
            src="/path/to/your/image.jpg"
            alt="Healthy Eating"
            width={400}
            height={250}
            fit="cover"
            duration={300}
            easing="ease-in-out"
            showLoading={<CircularProgress />}
            errorIcon={<ErrorIcon />}
            shift="left"
            shiftDuration={300}
          />
        </Box>
      </Box>
    </BaseLayout>
  );
}

export default MyExclusions;
