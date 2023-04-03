import { Box, Grid, List, ListItem, ListItemText, Paper } from '@mui/material';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';

const data = [
  { name: 'Founders and team', value: 20 },
  { name: 'Partners and Advisors', value: 10 },
  { name: 'Development Reserve', value: 30 },
  { name: 'Private Sale', value: 10 },
  { name: 'Presale', value: 5 },
  { name: 'Public Sale', value: 15 },
];

const dates = [
  {
    month: '2023',
    a: 0,
    b: 0,
    c: 3,
    d: 0,
    e: 5,
    f: 0,
  },
  {
    month: '2024',
    a: 2,
    b: 1,
    c: 7,
    d: 6,
    e: 5,
    f: 6,
  },
  {
    month: '2025',
    a: 5,
    b: 3,
    c: 12,
    d: 11,
    e: 5,
    f: 12,
  },
  {
    month: '2026',
    a: 10,
    b: 5,
    c: 18,
    d: 11,
    e: 5,
    f: 17,
  },
  {
    month: '2027',
    a: 15,
    b: 7,
    c: 24,
    d: 11,
    e: 5,
    f: 17,
  },
  {
    month: '2028',
    a: 20,
    b: 10,
    c: 30,
    d: 11,
    e: 5,
    f: 17,
  },
  {
    month: '2029',
    a: 22,
    b: 11,
    c: 33,
    d: 11,
    e: 5,
    f: 17,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E55812', '#EFE7DA'];

const toPercent = (decimal: number) => `${decimal}%`;

export default function Tokenomics() {
  return (
    <>
      <h1>Tokenomics</h1>
      <Paper sx={{
        py: 2,
        my: 2
      }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{
              height: 240,
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={50}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              ml: {xs: 8, md: 0}
            }}>
              {data.map((value, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    color: COLORS[index % COLORS.length],
                    my: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: 600,
                      textAlign: 'right',
                      width: 40,
                      mr: 2
                    }}
                  >
                    <span>{value.value} %</span>
                  </Box>
                  <div>
                    {value.name}
                  </div>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{
        height: 440,
        py: 2
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={dates}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
            <Area type="monotone" dataKey="e" stackId="1" stroke={COLORS[4]} fill={COLORS[4]} />
            <Area type="monotone" dataKey="c" stackId="1" stroke={COLORS[2]} fill={COLORS[2]} />
            <Area type="monotone" dataKey="f" stackId="1" stroke={COLORS[5]} fill={COLORS[5]} />
            <Area type="monotone" dataKey="a" stackId="1" stroke={COLORS[0]} fill={COLORS[0]} />
            <Area type="monotone" dataKey="b" stackId="1" stroke={COLORS[1]} fill={COLORS[1]} />
            <Area type="monotone" dataKey="d" stackId="1" stroke={COLORS[3]} fill={COLORS[3]} />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
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
