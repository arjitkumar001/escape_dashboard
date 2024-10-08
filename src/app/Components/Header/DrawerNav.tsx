'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { PiAirplaneTiltLight } from "react-icons/pi";
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FaChevronRight } from "react-icons/fa";

interface LinksData {
  name: string;
  link: string;
}

const links: LinksData[] = [
  {
    name: "Deals",
    link: "#",
  },
  {
    name: "Features",
    link: "#",
  },
  {
    name: "Testimonials",
    link: "#",
  },
  {
    name: "Pricing",
    link: "#",
  },
];

interface NavProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

export default function MobileNav({ open, toggleDrawer }: NavProps) {
  const router = useRouter(); // Use Next.js router for navigation

  const handleNavigation = (link: string) => {
    toggleDrawer(false); // Close drawer before navigating
    router.push(link);   // Navigate to the clicked link
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <Typography
        sx={{
          color: "#FF5D00",
          fontSize: "24px",
          fontWeight: 600,
          display:"flex",
          alignItems:"center",
          px: 2,
          py: 4,
        }}
      >
        <PiAirplaneTiltLight style={{ marginRight: 8 }} />
        AfricanEscapes
      </Typography>
      <Divider />
      <List>
        {links.map((linkItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{":hover": { color: "#FF5D00" }}} onClick={() => handleNavigation(linkItem.link)}>
              <ListItemText primary={linkItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
