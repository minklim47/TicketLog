import { Box } from "@mui/material";
import React from "react";
import SearchMovie from "../components/SearchMovie";
import YearCollection from "../components/YearCollection";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Collection() {
  const instance = axios.create({
    withCredentials: true,
  });
  const userToken = Cookies.get("user");
  const userId = localStorage.getItem("userId");

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchCollection();
  },[]);

  const fetchCollection = async () => {
    await instance
      .get(`http://localhost:4000/ticket/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        console.log(res);
        setTickets(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const collectionTickets = tickets.reduce((groups, ticket) => {
    const year = new Date(ticket.date).getFullYear();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(ticket);
    return groups;
  }, {});

  const collectionComponents = Object.entries(collectionTickets).map(([year, tickets]) => (
    <YearCollection key={year} year={year} tickets={tickets} />
  ));


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Collection</h1>

      <Box className="flex-container" sx={totalStyle}>
        <h3>You own a total of</h3>
        <h2 style={{ margin: "0 20px" }}>55</h2>
        <h3>movie tickets </h3>
      </Box>
      <Box>
      {collectionComponents}
      </Box>
    </Box>
  );
}

const totalStyle = {
  flexDirection: { xs: "column", sm: "row" },
  backgroundColor: "black.main",
  color: "white.main",
  padding: "30px",
};

export default Collection;
