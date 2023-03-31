import { List, ListItem, ListItemText } from "@mui/material";

export default function Tokenomics() {
  return (
    <>
      <h1>Tokenomics</h1>
      <List
        sx={{
          maxWidth: 600,
        }}
      >
        <ListItem>
          <ListItemText
            primary="20% Founders and Team"
            secondary="This portion is reserved for the founders and team members responsible for developing and managing the project."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="10% Partners and Advisors"
            secondary="This portion is reserved for strategic partners and advisors who bring value to the project."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="30% Development Reserve"
            secondary="This portion is reserved for future project development, including research and development costs, technical upgrades, and ecosystem expansion."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="10% Private Sale"
            secondary="This portion is reserved for a private sale for institutional investors and large investors who wish to invest larger amounts in the project."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="20% Public Sale"
            secondary="This portion is reserved for a public sale for individual investors and small investors who wish to participate in the project with smaller amounts."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="10% Marketing Campaign"
            secondary="This portion is reserved for marketing and promotion campaigns aimed at raising awareness of the project and attracting new investors."
          />
        </ListItem>
      </List>
    </>
  );
}
