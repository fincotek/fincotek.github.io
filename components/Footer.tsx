import { Box, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: "auto",
      }}
    >
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        @Fincotek
      </Box>
    </Box>
  );
}
