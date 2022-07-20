import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import TopArtists from '../topArtists/TopArtists';
import TopTracks from '../topTracks/TopTracks';
import SearchArtists from '../searchArtists/SearchArtists';
import SearchTracks from '../searchTracks/SearchTracks';

const drawerWidth = 240;

function Navigation({window, topArtists, topTracks}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <List>
        <NavLink 
          to="/"
          className="nav-link"
          activeClassName="nav-link-active"
        >
            <ListItem key={'Top Artists'} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Top Artists" />
                </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink 
          to="/toptracks"
          className="nav-link"
          activeClassName="nav-link-active"
        >
            <ListItem key={'Top Tracks'} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Top Tracks" />
                </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink 
          to="/search-artists"
          className="nav-link"
          activeClassName="nav-link-active"
        >
            <ListItem key={'Search Artists'} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <PersonSearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search Artists" />
                </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink 
          to="/search-tracks"
          className="nav-link"
          activeClassName="nav-link-active"
        >
            <ListItem key={'Search Tracks'} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <PlagiarismIcon />
                </ListItemIcon>
                <ListItemText primary="Search Tracks" />
                </ListItemButton>
            </ListItem>
        </NavLink>
        </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                TITLE HERE
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Switch>
            <Route exact path="/">
              <TopArtists topArtists={topArtists}/>
            </Route>
            <Route path="/toptracks">
              <TopTracks />
            </Route>
            <Route path="/search-artists">
              <SearchArtists />
            </Route>
            <Route path="/search-tracks">
              <SearchTracks />
            </Route>
            </Switch>
        </Box>
      </Box>
    </Router>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;
