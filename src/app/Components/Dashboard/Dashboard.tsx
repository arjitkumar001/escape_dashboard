"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { PiBell } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { LuPalmtree } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/lib/axios";
import { RestUrlsConstants } from "@/app/Constant/rest_url_constant";
import { cardData, cardData1, cardData2, data } from "@/app/Utils/DataList";

interface snackBarState {
  open: boolean;
  message: string;
}

export default function Dashboard() {
  const router=useRouter();
  const [email, setEmail] = useState<string>("");
  const [snackBar, setSnackBar] = useState<snackBarState>({
    open: false,
    message: "",
  });
  const handleClose = () => {
    setSnackBar({ open: false,message:"" });
  };

   const handleSendRequest = async () => {
    try {
      const res = await axiosInstance.post(RestUrlsConstants.email_verification,
        {
          email_id: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status) {
        setSnackBar({ open: true,message:res?.data?.message });
        router.push("/UserDetail")
      }
      // return response.data;
    } catch (error:any) {
      console.log(error);
      setSnackBar({ open: true,message:error?.response?.data?.message });
    }
  };
  return (
    <>
      <Box
        sx={{
          p: { xs: 4, sm: 8, md: 10, lg: 10 },
          textAlign: "center",
        }}
      >
        <Chip
          label={"#1 African Travel Deals Platform"}
          sx={{
            bgcolor: "#FFEDD5",
            color: "#9A3412",
            fontWeight: 700,
            fontSize: "16px",
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "48px" },
            fontWeight: 700,
            px: { xs: 0, sm: 4, md: 8 },
          }}
        >
          Discover Africa's Magic{" "}
          <span style={{ color: "#FF5D00" }}>Without Breaking the Bank</span>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            color: "gray",
            px: { xs: 10, sm: 14, md: 20 },
          }}
        >
          Get exclusive alerts for the best African safari, beach, and cultural
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            color: "gray",
            px: { xs: 10, sm: 14, md: 20 },
          }}
        >
          experience deals. Save up to 50% on your next African adventure.
        </Typography>
        <Box
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            size="small"
            placeholder="Enter your email"
            sx={{ bgcolor: "white" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              background: "linear-gradient(to left,red 0%, yellow 190%)",
              fontWeight: "bold",
            }}
            onClick={handleSendRequest}
          >
            Get Alerts
          </Button>
        </Box>
        <Typography
          sx={{ fontSize: "12px", color: "gray", textAlign: "center", mt: 1 }}
        >
          Join 30,000+ African travel enthusiasts. Unsubscribe anytime.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          alignItems="center"
          py={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: "#f7b700" }} />
              ))}
            </Box>
            <Typography variant="body1" sx={{ color: "gray" }}>
              4.9/5 from 2,000+ reviews
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ color: "#f57c00", fontWeight: 900 }}>
              <FiUsers style={{ color: "#f57c00", fontSize: 24 }} /> 30k+
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Happy Travelers
            </Typography>
          </Box>

          {/* Average Savings Section */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ color: "#4caf50", fontWeight: 900 }}>
              <FiDollarSign style={{ color: "#4caf50", fontSize: 24 }} /> 50%
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Average Savings
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#FFE9DA",
          px: { xs: 2, sm: 2, md: 4 },
          py: { xs: 4, sm: 6, md: 10 },
        }}
      >
        <Typography
          sx={{
            color: "#E23A1C",
            fontSize: "50px",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Hot Deals Right Now
        </Typography>
        <Grid mt={2} container spacing={4}>
          {cardData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: "0px 1px 1px gray" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt=""
                  sx={{ bgcolor: "#EAEAEA" }}
                />
                <CardContent>
                  <Chip
                    size="small"
                    label={item.discount}
                    sx={{
                      bgcolor: "#FF5D00",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 700 }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography>{item.amount}</Typography>{" "}
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        color: "#FF5D00",
                        border: "1px solid #FF5D00",
                      }}
                    >
                      View Deal
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  textTransform: "capitalize",
                  background: "linear-gradient(to left,red 0%, yellow 190%)",
                  fontWeight: "bold",
                }}
              >
                View all deals
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#FFF7ED",
          p: { xs: 4, sm: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E23A1C",
            fontSize: "50px",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Why Choose AfricanEscapes
        </Typography>
        <Grid mt={2} container spacing={4} sx={{}}>
          {cardData1.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{ boxShadow: "0px 1px 1px gray", borderRadius: "10px" }}
              >
                <CardContent>
                  <Box>{item.icon}</Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 700 }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  textTransform: "capitalize",
                  background: "linear-gradient(to left,red 0%, yellow 190%)",
                  fontWeight: "bold",
                }}
              >
                View all deals
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to left,#FFF7ED 0%, yellow 700%)",
          p: { xs: 4, sm: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E23A1C",
            fontSize: "50px",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Don't take it from us
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: "16px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          See what over 30,000 satisfied travelers have to say about
          AfricanEscapes.
        </Typography>
        <Grid mt={2} container spacing={4} sx={{}}>
          {cardData2.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: "0px 1px 1px gray",
                  borderRadius: "10px",
                  textAlign: "justify",
                }}
              >
                <CardContent sx={{ height: "150px" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    {`"${item.description}"`}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        height: "45px",
                        width: "45px",
                        bgcolor: "#EDEDED",
                        borderRadius: "50px",
                      }}
                    ></Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#FF5D00",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "gray",
                          fontSize: "14px",
                        }}
                      >
                        {item.email}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  textTransform: "capitalize",
                  background: "linear-gradient(to left,red 0%, yellow 190%)",
                  fontWeight: "bold",
                }}
              >
                View all deals
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          p: { xs: 4, sm: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E23A1C",
            fontSize: "50px",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Start Your African Adventure
        </Typography>
        <Grid mt={2} container spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px",
                textAlign: "justify",
                width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                border: "1px solid lightgray",
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ color: "#000", fontWeight: 700, textAlign: "center" }}
                >
                  FREE Explorer Plan
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Begin your African journey at no cost
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#09090b",
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <MdOutlineLightMode
                      size={18}
                      style={{ color: "#FF5D00" }}
                    />
                    Weekly African deal alerts
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#09090b",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <LuPalmtree size={18} style={{ color: "#FF5D00" }} />
                    Customizable destination preferences
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#09090b",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <IoCameraOutline size={18} style={{ color: "#FF5D00" }} />
                    Access to African travel guides
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      textTransform: "capitalize",
                      background:
                        "linear-gradient(to left,red 0%, yellow 190%)",
                      fontWeight: "bold",
                    }}
                  >
                    Starting Exploring
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#E23A1C",
                fontSize: "50px",
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Frequently Asked Questions
            </Typography>
            {/* accordian */}
            <Box sx={{ px: { xs: 0, sm: 0, md: 10, lg: 20 }, mt: 4 }}>
              {data.map((item, index) => (
                <Accordion
                  key={index}
                  sx={{ bgcolor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "black", fontWeight: "600" }}
                  >
                    {item.heading}
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ textAlign: "justify", color: "gray" }}
                  >
                    {item.detail}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          p: { xs: 4, sm: 8, md: 10, lg: 10 },
          textAlign: "center",
          background:
            "linear-gradient(to bottom right, yellow -50%, red 60%, yellow 120%)",
        }}
      >
        <Typography sx={{ fontSize: "50px", color: "#fff", fontWeight: 800 }}>
          Ready for Your African Adventure ?{" "}
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#fff", fontWeight: 600 }}>
          Join thousands of savvy travelers exploring the wonders of Africa
          without breaking the bank.
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#fff", fontWeight: 600 }}>
          Africa without breaking the bank.
        </Typography>
        <Box
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <TextField
            size="small"
            type="email"
            placeholder="Enter your email"
            sx={{ bgcolor: "white", borderRadius: "5px" }}
          />
          <Button
            variant="contained"
            color="warning"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#fff",
              ":hover": { bgcolor: "#fff" },
              color: "#FF5D00",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar.open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={snackBar.message}
        key={"top" + "center"}
      />
    </>
  );
}
