import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function App() {
  const [result, setResult] = React.useState([]);

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          return arr;
        }
      }
    }
    // Print the sorted array
  }

  async function temp(arr) {
    const res = bblSort(arr);
    Promise.resolve(setResult(res))
      .then((res) => console.log(res))
      .then(() => {
        console.log("res", res);
        sleep(1000);
        if (
          JSON.stringify(res) ===
          JSON.stringify([5, 6, 43, 55, 63, 234, 235, 547])
        ) {
          return;
        } else {
          temp(res);
        }
      });
  }

  React.useEffect(() => {
    console.log(result);
  }, [result]);

  var arr = [234, 43, 55, 63, 5, 6, 235, 547];
  return (
    <>
      <Container fixed>
        <Button onClick={() => temp(arr)}>Click</Button>
        {result?.map((item) => (
          <Typography variant="h1" color="white">
            {item}
          </Typography>
        ))}
      </Container>
    </>
  );
}
