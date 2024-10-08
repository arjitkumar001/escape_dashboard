"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { PiAirplaneTiltLight } from "react-icons/pi";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import MobileNav from "./DrawerNav";

interface linksData {
  name: string;
  link: string;
}

const links: linksData[] = [
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

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen); // Directly update the state
  };

  return (
    <Grid
      className="transbox"
      container
      sx={{
        p: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "56px",
      }}
    >
      <Grid
        item
        xs={6}
      >
        <Typography
          sx={{
            color: "#FF5D00",
            fontSize: "24px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            lineHeight:"100%"
          }}
        >
          <PiAirplaneTiltLight style={{ marginRight: 8 }} />
          AfricanEscapes
        </Typography>
      </Grid>
      <Grid item xs={6} px={2}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Show links only on medium and larger screens
            justifyContent: "end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {links.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              style={{ textDecoration: "none",lineHeight:"100%" }}
            >
              <Typography
                sx={{
                  ":hover": { color: "#FF5D00" },
                  color: "#000",
                  fontWeight: 600,
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            textAlign: "right",
          }}
        >
          {" "}
          {/* Show menu icon only on small screens */}
          <IconButton
            size="small"
            sx={{ color: "#000" }}
            onClick={() => toggleDrawer(true)}
          >
            <IoMdMenu size={24} />
          </IconButton>
        </Box>
        <MobileNav open={open} toggleDrawer={toggleDrawer} />
      </Grid>
    </Grid>
  );
};

export default Header;
