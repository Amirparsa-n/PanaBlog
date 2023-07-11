import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

// image
import logo from '../../assets/images/logo.png';

const drawerWidth = 240;

const navItems = [
    {id: 1, name:"home" ,title: 'خانه'},
    {id: 2, name:"blog" ,title: 'مقالات'},
    {id: 3, name:"HotNews" ,title: 'داغ ترین ها'},
    {id: 4, name:"NewNews" ,title: 'تازه ترین ها'},
    {id: 5, name:"Author" ,title: 'نویسنده ها'}
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor: '#e4ecfc', boxShadow: 'none', }}>
        <Container maxWidth="xl">
            <Box>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent:{xs: 'space-between', sm:'start'}, flexDirection: {xs: 'row-reverse', sm:'row'}}}>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon color='primary' />
                    </IconButton>

                    <Link to={"/"} >
                        <Typography
                            component="div"
                            sx={{ flexGrow: 1, margin: {xs: `6px 0 0px 0`, sm:`12px 0 6px 0`}, width:{xs: '100px', md: '120px'} }}
                        >
                                <img src={logo} alt="logo" width={'100%'}/>
                        </Typography>
                    </Link>

                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap:{ md: '48px', sm:'18px' }, margin: 'auto' }}>
                        {navItems.map((item) => (
                        <Box key={item.id} sx={{ color: '#565656', cursor: 'pointer', ":hover":{color: '#2065BB'} }}>
                            <Typography component={'div'}>
                                {item.title}
                            </Typography>
                        </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </Container >
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navbar;