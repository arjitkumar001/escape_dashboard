"use client";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/lib/axios";
import { RestUrlsConstants } from "@/app/Constant/rest_url_constant";
import CommonInput from "@/app/Utils/CommonInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import CommonAutocomplete from "../Utils/CommonAutocomplete";
import { cityList, country } from "../Utils/DataList";

interface User {
  origin_city: string;
  destination_city: string;
  start_date: Dayjs | null;
  country_name_origin: string;
  country_name_destination: string;
  end_date: Dayjs | null;
  first_name: string;
  last_name: string;
  user_id: string;
}
interface errorData{
  origin_city: string;
  destination_city: string;
  start_date: string;
  country_name_origin: string;
  country_name_destination: string;
  end_date: string;
  first_name: string;
  last_name: string;
  user_id: string;
}
interface snackBarState {
  open: boolean;
  message: string;
}

const UserDetail = () => {
  const router = useRouter();
  const [snackBar, setSnackBar] = useState<snackBarState>({
    open: false,
    message: "",
  });
  const [error, setError] = useState<errorData>();
  const [userData, setUserData] = useState<User>({
    origin_city: "",
    destination_city: "",
    start_date: null,
    country_name_origin: "",
    country_name_destination: "",
    end_date: null,
    first_name: "",
    last_name: "",
    user_id: "",
  });
 const findCountryByCity = () => {
    let countryName = "Not found";
    country.some((item) => {
      const countryKey = Object.keys(item)[0]; 
      const cities = item[countryKey].cities; 
  
      if (cities.includes(userData.destination_city)) {
        countryName = countryKey;
        return true;
      }
      return false;
    });
  
    setUserData((prev) => ({
      ...prev,
      country_name_destination: countryName,
    }));
  };
  useEffect(()=>{
    findCountryByCity();
  },[userData.destination_city])
  const resetData = () => {
    setUserData({
      origin_city: "",
      destination_city: "",
      start_date: null,
      country_name_origin: "",
      country_name_destination: "",
      end_date: null,
      first_name: "",
      last_name: "",
      user_id: "",
    });
  };
  const validateFields = () => {
    let valid = true;
    const newError: errorData = {
      origin_city: "",
      destination_city: "",
      start_date: "",
      country_name_origin: "",
      country_name_destination: "",
      end_date: "",
      first_name: "",
      last_name: "",
      user_id: "",
    };
    if (!userData.first_name) {
      newError.first_name = "First name is required";
      valid = false;
    }
    if (!userData.last_name) {
      newError.last_name = "Last name is required";
      valid = false;
    }
    if (!userData.origin_city) {
      newError.origin_city = "Origin city is required";
      valid = false;
    }
    if (!userData.destination_city) {
      newError.destination_city = "Destination city is required";
      valid = false;
    }
    if (!userData.country_name_origin) {
      newError.country_name_origin = "Country origin name is required";
      valid = false;
    }
    if (!userData.country_name_destination) {
      newError.country_name_destination =
        "Country destination name is required";
      valid = false;
    }
    if (!userData.start_date) {
      newError.start_date = "Start date is required";
      valid = false;
    }
    if (!userData.start_date) {
      newError.end_date = "End date is required";
      valid = false;
    }
    setError(newError);
    return valid;
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!validateFields()) {
      return;
    }
    const payload = {
      origin_city: userData.origin_city,
      destination_city: userData.destination_city,
      start_date: userData.start_date
        ? dayjs(userData.start_date).format("YYYY-MM-DD")
        : null,
      country_name_origin: userData.country_name_origin,
      country_name_destination: userData.country_name_destination,
      end_date: userData.start_date
        ? dayjs(userData.start_date).format("YYYY-MM-DD")
        : null,
      first_name: userData.first_name,
      last_name: userData.last_name,
      user_id: userData.user_id,
    };
    try {
      const res = await axiosInstance.post(
        RestUrlsConstants.flight_details,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status) {
        setSnackBar({ open: true, message: res?.data?.message });
        resetData();
      }
    } catch (error: any) {
      console.log(error);
      setSnackBar({ open: true, message: error?.response?.data?.message });
    }
  };

  const handleClose = () => {
    setSnackBar({ open: false, message: "" });
  };

  const close = () => {
    resetData();
    router.push("/");
  };
  // console.log(error, "==========");

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 6, md: 10, lg: 20 } }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{
                color: "#000",
                textAlign: "center",
                bgcolor: "gray",
                py: 1,
              }}
            >
              User Detail
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonInput
              label="First Name"
              type="text"
              placeholder="First name"
              value={userData.first_name}
              required={false}
              onChange={(e: any) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              error={!!error?.first_name}
              helperText={error?.first_name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonInput
              label="Last Name"
              type="text"
              placeholder="Last name"
              value={userData.last_name}
              required={false}
              onChange={(e: any) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              error={!!error?.last_name}
              helperText={error?.last_name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonAutocomplete
              label="Origin city"
              placeholder="Origin city"
              options={["Edmonton Albarta"]}
              onChange={(event:any, value:string) =>
                setUserData({ ...userData, origin_city: value })
              }
              multiple={false}
              error={!!error?.origin_city}
              helperText={error?.origin_city}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonAutocomplete
              label="Destination city"
              placeholder="Destination city"
              options={cityList}
              onChange={(event:any, value:string) => {
                setUserData({ ...userData, destination_city: value });
              }}
              multiple={false}
              error={!!error?.destination_city}
              helperText={error?.destination_city}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonAutocomplete
              label="Country name origin"
              placeholder="Country name origin"
              options={["Canada"]}
              onChange={(event:any, value:string) =>
                setUserData({
                  ...userData,
                  country_name_origin:value,
                })
              }
              multiple={false}
              error={!!error?.country_name_origin}
              helperText={error?.country_name_origin}
              disabled={!userData.origin_city}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CommonAutocomplete
              label="Country name destination"
              placeholder="Country name destination"
              options={[userData.country_name_destination]}
              onChange={(event:any, value:string) =>
                setUserData({
                  ...userData,
                  country_name_destination: value,
                })
              }
              multiple={false}
              error={!!error?.country_name_destination}
              helperText={error?.country_name_destination}
              disabled={!userData.destination_city}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputLabel sx={{ fontWeight: "bold", color: "#000" }}>
              Start Date
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                value={userData.start_date ? dayjs(userData.start_date) : null}
                minDate={dayjs()}
                onChange={(newValue: Dayjs | null) =>
                  setUserData({ ...userData, start_date: newValue })
                }
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
              />
            </LocalizationProvider>
            {!userData.start_date && (
              <span style={{ fontSize: "12px", color: "red" }}>
                {error?.start_date}
              </span>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputLabel sx={{ fontWeight: "bold", color: "#000" }}>
              End Date
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                value={userData.end_date ? dayjs(userData.end_date) : null}
                disabled={!userData.start_date}
                minDate={
                  userData.start_date ? dayjs(userData.start_date) : undefined
                }
                onChange={(newValue: Dayjs | null) =>
                  setUserData({ ...userData, end_date: newValue })
                }
                slotProps={{
                  textField: {
                    size: "small",
                  },
                }}
              />
            </LocalizationProvider>
            {!userData.end_date && (
              <span style={{ fontSize: "12px", color: "red" }}>
                {error?.end_date}
              </span>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CommonInput
              label="User id"
              type="text"
              placeholder="user id"
              value={userData.user_id}
              required={false}
              onChange={(e: any) =>
                setUserData({ ...userData, user_id: e.target.value })
              }
              error={!!error?.user_id}
              helperText={error?.user_id}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", md: "end" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  background: "gray",
                  ":hover": { background: "gray" },
                }}
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  background: "linear-gradient(to left,red 0%, yellow 190%)",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar.open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={snackBar.message}
        key={"top" + "center"}
      />
    </Box>
  );
};
export default UserDetail;
