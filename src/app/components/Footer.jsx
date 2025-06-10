import React from "react";
import Link from "next/link";
import { Button, TextField, Typography, Box, Stack } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineEnvironment,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineX,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#00264D] mt-10">
      {/* Contact Us */}
      <div className="flex flex-col gap-10 mb-4 w-[90%] m-auto py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="text-white text-xs md:text-sm flex flex-col gap-3 order-1 md:order-none w-full md:w-1/2 mb-4">
            {/* Logo */}
            <div className="mb-2">
              <Link href="/">
              <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              className="text-white"
            >
              FMCC Logo
            </Typography>
              </Link>
            </div>

            {/* <span className="flex items-center gap-4">
              <AiOutlineEnvironment />
              <Link
                href="https://www.google.com/maps/place/D+SQUARE+EVENT+CENTRE/@6.5667163,3.2459785,14z/data=!4m10!1m2!2m1!1s235,+Ariket+Plaza+Alake+B%2Fstop+Ikotun-Idimu+Road,+Lagos!3m6!1s0x103b9180f7b913c9:0x17f9c2fa189f65e7!8m2!3d6.5622673!4d3.2736744"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-xs md:!text-base"
              >
                235, Ariket Plaza Alake B/stop Ikotun-Idimu Road, Lagos
              </Link>
            </span> */}
            <span className="flex items-center gap-4">
              <AiOutlineMail />
              <Link href="mailto:dolaposquare123@gmail.com">
               FMCC123@gmail.com
              </Link>
            </span>
            <span className="flex items-center gap-4">
              <AiOutlinePhone />
              <Link href="tel:+2349165235934">+234 916 523 5934</Link>
            </span>
          </div>

          {/* Subscribe Section */}
          <Box className="order-2 md:order-none w-full md:w-1/2">
            <Typography
              
              fontWeight="bold"
              gutterBottom
              className="text-white !text-sm md:!text-xl"
            >
              Subscribe
            </Typography>
            <Typography variant="body1" mb={3} className="text-white !text-xs md:!text-base">
              Select topics and stay current with our latest insights
            </Typography>

            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={2}
              component="form"
              noValidate
            >
              <TextField
                fullWidth
                placeholder="Email address"
                InputProps={{
                  sx: {
                    height: "46px",
                    fontSize: "12px",
                    backgroundColor: "#fff",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  height: "46px",
                  px: 4,
                  backgroundColor: "#000",
                  textTransform: "none",
                  fontWeight: 600,
             
                  "&:hover": {
                    backgroundColor: "#1b47cc",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </div>

        {/* Social Media */}
        <div className="flex gap-1 md:self-end">
          <Link
            href="https://www.instagram.com/dsquarevents/"
            target="_blank"
            className="p-3 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-150"
          >
            <AiOutlineInstagram />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100090758267591"
            target="_blank"
            className="p-3 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-150"
          >
            <AiFillFacebook />
          </Link>

          <Link
            href="https://x.com/DEventcent23511"
            target="_blank"
            className="p-3 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-150"
          >
            <AiOutlineX />
          </Link>
        </div>
      </div>

      <hr className="border-white" />

      {/* Bottom Copyright */}
      <div className="py-4 w-[90%] m-auto text-white flex flex-col md:flex-row justify-between items-center gap-2">
        <Typography className="!text-xs md:!text-sm text-white text-center">
          Copyright &copy; 2025 FMCC LTD. All rights reserved
        </Typography>

        <div className="flex items-center justify-center md:flex-row gap-1">
          <Typography className="!text-xs text-white text-center">
            Designed by
          </Typography>
          <Typography className="!text-xs underline text-white text-center">
            <Link href="https://www.oxrissolutions.com/" target="_blank">
              Oxris Solutions
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
