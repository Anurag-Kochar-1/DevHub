import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
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
        justifyContent: "end",
        alignItems: "center",
        width: {xs: "50%" , md: "20%", lg: "20%"},
        backgroundColor: "white",
        borderRadius: 20,
        border: "1px solid #3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { xs: 5 },
      }}
    >
      {/* <input
        // sx={{width: {xs: 20, md:"40%"}, border: "none", outline: "none", backgroundColor:"blue"}}
        fullWidth 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="search-bar"
      /> */}

      <Input 
      fullWidth  
      placeholder="Search..."  
      value={searchTerm} 
      onChange={(e) => {
          setSearchTerm(e.target.value);
      }} 
      label="Standard error"
      variant="standard"
      color="error"
        
        />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
