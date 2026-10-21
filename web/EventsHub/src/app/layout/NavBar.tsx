import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem, MenuList } from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Activities
              </Typography>
            </Box>
            
            <MenuList disablePadding sx={{ display: "flex" }}>
              <MenuItem sx={{ fontSize: "1.2rem", textTransform: "uppercase" }}>Activities</MenuItem>
              <MenuItem sx={{ fontSize: "1.2rem", textTransform: "uppercase" }}>About</MenuItem>
              <MenuItem sx={{ fontSize: "1.2rem", textTransform: "uppercase" }}>Contact</MenuItem>
            </MenuList>

            <Button onClick={openForm} size="large" variant="contained" color="warning">
              Create activity
            </Button>
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}