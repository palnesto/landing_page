import * as React from "react";
import Button from "@mui/material/Button";

export default function Buttons({ text }) {
  return (
    <Button
      sx={{
        backgroundColor: "#F83A40",
        color: "white",
        width: "240px",
        height: "48px",
        fontWeight: "700",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#F83A40",
        },
      }}
    >
      {text}
    </Button>
  );
}
