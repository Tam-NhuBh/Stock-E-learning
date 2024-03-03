import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/img/logo.png";
import "./header.css";
import { Link } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getCurrentUser = () => {
      const obj = localStorage.getItem("user");
      if (obj) {
        setUser(JSON.parse(obj));
      }
    };
    getCurrentUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const handleLoginButtonClick = () => {
    navigate("/login"); // Chuyển hướng đến trang login khi nút được nhấp
  };
  return (
    <Box
      width={"100%"}
      bgcolor={"#195691"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      {/* Logo */}
      <div className="logo">
        <img src={LOGO} alt="Logo" />
       
        {/* Menu */}
          <Box className="menu"> {/* Sử dụng class "menu" để căn chỉnh vị trí */}      
          <Link to="/" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>HOME</Link>
            <Link to="/blog" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>NEWS</Link>
            <Link to="/course" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>COURSE</Link>
            <Link to="/enrollment" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>ENROLLMENT</Link>
            <Link to="/training" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>TRAINING</Link>
            <Link to="/contact" className="text" style={{ fontSize: '16px', fontWeight: 'bold' }}>CONTACT</Link>
          </Box>
      </div>
     
      {/* Button đăng nhập / đăng xuất */}
      {/* {!user?.username ? ( */}
        <Button size="small" onClick={handleLoginButtonClick}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <PersonIcon sx={{ color: "white" }} />
              <Typography color={"white"} fontSize={15} fontWeight={"bold"}>
                Đăng nhập
              </Typography>
          </Box>
        </Button>
      {/* ) : (
        <Box display={"flex"} alignItems={"center"}>
          <Typography className="text">({user?.username})</Typography>
          <Button onClick={handleLogout}>
            <Typography fontSize={12} color={"white"} fontWeight={"bold"}>
              Đăng xuất
            </Typography>
          </Button>
        </Box>
      )} */}
    </Box>
  );
}

export default Main;
