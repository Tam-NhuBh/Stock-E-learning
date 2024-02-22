import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/img/logo.png";
import "./header.css";

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
            <Typography className="text"> Trang chủ</Typography>
            <Typography className="text">Tin Tức</Typography>
            <Typography className="text">Khóa Học</Typography>
            <Typography className="text">Tuyển sinh</Typography>
            <Typography className="text">Đào tạo</Typography>
            <Typography className="text">Người học</Typography>
            <Typography className="text">Liên Hệ</Typography>
          </Box>
      </div>
     
      {/* Button đăng nhập / đăng xuất */}
      {/* {!user?.username ? ( */}
        <Button size="small" href="/login">
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <PersonIcon sx={{ color: "white" }} />
              <Typography color={"white"} fontSize={12} fontWeight={"bold"}>
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
