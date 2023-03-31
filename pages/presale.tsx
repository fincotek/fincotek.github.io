import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Presale",
    description: (
      <Button
        sx={{
          mt: 2,
        }}
        component="a"
        href="https://fincotek.com/presale"
        variant="contained"
      >
        Buy FIK Token
      </Button>
    ),
  },
  {
    label: "Public Sale",
  },
  {
    label: "Private Sale",
  },
];

export default function Presale() {
  return (
    <>
      <h1>Presale</h1>
      <Stepper activeStep={0} orientation="vertical">
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
}
