import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField, Input, Hidden } from "@mui/material";
import { Search } from "@mui/icons-material";



function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isSearchInputVisible, setIsSearchInputVisible] = useState(true)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        width: {xs: "40%",sm: "35%", md: "40%", lg: "50%"},
        backgroundColor: "#292929",
        borderRadius: 20,
        px: 2,
        boxShadow: "none",
      }}
    >


      <Input 
      fullWidth
      sx={{ color: "white", px: "5px"}}  
      placeholder="Search DevHub....."  
      value={searchTerm} 
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }} 
      label="Standard warning"
      variant="standard"
      color="warning"
      />



      <IconButton type="submit" sx={{ p: "10px", color: "white" }}  >
        <Search />
      </IconButton>


    </Paper>
  );
}

export default SearchBar;
