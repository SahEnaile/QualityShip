import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';

// Estilos personalizados
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  listItem: {
    padding: '10px 20px',
  },
}));

function Sidebar() {
  const [open,] = useState(true);
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {/* Home */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Recentes */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><AccessTimeIcon /></ListItemIcon>
          <ListItemText primary="Recentes" />
        </ListItem>

        {/* Configurações */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>

        {/* Favoritos */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><FavoriteIcon /></ListItemIcon>
          <ListItemText primary="Favoritos" />
        </ListItem>

        {/* Pesquisa */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Pesquisa" />
        </ListItem>

        <Divider />

        {/* Login */}
        <ListItem button className={classes.listItem}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
