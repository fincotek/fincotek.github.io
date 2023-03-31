import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Wallet Analytics",
    description: `${new Date("2023-03-01").toLocaleDateString()}`,
  },
  {
    label: "Launchpad",
    description: `${new Date("2023-03-01").toLocaleDateString()}`,
  },
  {
    label: "Product authenticity",
    description: `${new Date("2023-09-01").toLocaleDateString()}`,
  },
  {
    label: "Crowdfunding",
    description: `${new Date("2024-01-01").toLocaleDateString()}`,
  },
];
export default () => {
  const [activeStep] = useState(2);
  return (
    <>
      <h1>Roadmap</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>
              <Box
                sx={{
                  ml: 1,
                }}
              >
                <Typography
                  sx={{
                    mt: 1,
                  }}
                  variant="h6"
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};
