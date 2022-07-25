import { Box, Button, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

class AppClassComp extends React.Component {
  state = {
    result: [
      10, 82, 198, 165, 16, 19, 176, 137, 189, 99, 124, 83, 23, 127, 199, 197,
      36, 101, 93, 91, 73, 73, 63, 110, 77, 38, 177, 79, 150, 186, 181, 193,
      147, 101, 37, 171, 127, 154, 157, 55, 162, 76, 105, 198, 185, 169, 195,
      51, 100, 66, 72, 183, 186, 108, 130, 83, 110, 200, 180, 128, 127, 199,
      131, 144, 188, 93, 176, 143, 168, 166, 119, 198, 165, 198, 141, 96, 97,
      156, 101, 101, 120, 168, 185, 187, 126, 198, 155, 158, 146, 130, 103, 111,
      146, 151, 99, 196, 143, 168, 110, 172,
    ],
    ans: [],
    intervalId: 0,
    firstEle: null,
    secondEle: null,
  };
  constructor() {
    super();
    this.arr = [
      10, 82, 198, 165, 16, 19, 176, 137, 189, 99, 124, 83, 23, 127, 199, 197,
      36, 101, 93, 91, 73, 73, 63, 110, 77, 38, 177, 79, 150, 186, 181, 193,
      147, 101, 37, 171, 127, 154, 157, 55, 162, 76, 105, 198, 185, 169, 195,
      51, 100, 66, 72, 183, 186, 108, 130, 83, 110, 200, 180, 128, 127, 199,
      131, 144, 188, 93, 176, 143, 168, 166, 119, 198, 165, 198, 141, 96, 97,
      156, 101, 101, 120, 168, 185, 187, 126, 198, 155, 158, 146, 130, 103, 111,
      146, 151, 99, 196, 143, 168, 110, 172,
    ];
  }

  sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

  bblSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        this.setState({ firstEle: j });
        this.setState({ secondEle: j + 1 });
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          return arr;
        }
      }
    }
  };

  initialBblSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  temp = (arr) => {
    const res = this.bblSort(arr);
    this.setState({ result: res });
    if (JSON.stringify(res) === JSON.stringify(this.initialBblSort(this.arr))) {
      clearInterval(this.state.intervalId);
      return;
    } else {
      console.log(this.state.result);
    }
  };

  temp2 = () => {
    const myInterval = setInterval(() => {
      this.temp(this.state.result);
      console.log("i,j", this.state.firstEle, this.state.secondEle);
    }, 100);
    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: myInterval,
      };
    });
  };

  render() {
    const { result } = this.state;
    return (
      <>
        <Container fixed>
          <Button onClick={() => this.temp2(this.arr)}>Click</Button>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <AnimatePresence>
              {result?.map((item, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: item,
                      margin: 0.09,
                      background: this.state.firstEle === id ? "red" : "white",
                    }}
                  />
                  {/* <Typography variant="body1" color="white" sx={{ margin: 2 }}>
                    {item}
                  </Typography> */}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </>
    );
  }
}

export default AppClassComp;
