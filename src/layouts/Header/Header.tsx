import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/img/logo.png";
import { Menu, MenuItem, Grid, Typography} from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username?: string }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

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
    // Code xác thực đăng nhập ở đây...
    // Sau khi đăng nhập thành công, cập nhật trạng thái của người dùng:
    setUser({ username: "username" }); // Thay "username" bằng username thực tế
  
    // Chuyển hướng đến trang chính hoặc trang nào đó:
    navigate("/");
  
    // Hoặc bạn có thể reload lại trang để cập nhật giao diện:
    // window.location.reload();
  };

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  const handleCartClick = () => {
    if (!user?.username) {
      // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
      navigate("/login");
    } else {
      // Nếu người dùng đã đăng nhập, chuyển hướng đến trang giỏ hàng
      navigate("/cart");
    }
  };

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-blue-700 text-white py-4 md:py-6 px-4 md:px-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
      </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-semibold hover:underline">
            HOME
          </Link>
          <Link to="/blog" className="text-lg font-semibold hover:underline">
            NEWS
          </Link>
          <Link to="/course" className="text-lg font-semibold hover:underline">
            COURSE
          </Link>
          <Link to="/contact" className="text-lg font-semibold hover:underline">
            CONTACT
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </nav>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Button giỏ hàng */}
          <button
            onClick={handleCartClick}
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-sm font-semibold transition duration-300 ring-2 ring-blue-400"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>CART</span>
          </button>

          {/* Button đăng nhập / đăng xuất */}
          {user?.username ? (
            <div>
              <button
                onClick={handleMenuOpen}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full text-sm font-semibold transition duration-300 ring-2 ring-blue-400"
              >
                <PersonIcon className="h-5 w-5" />
                <span>{user.username}</span>
              </button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <PersonIcon />
                    </Grid>
                    <Grid item>
                      <Typography>{user.username}</Typography>
                    </Grid>
                  </Grid>
                </MenuItem>
                
                <hr className="menu-divider" /> {/* Đường line ngăn cách */}

                <MenuItem onClick={handleMenuClose}>My learning</MenuItem>
                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
                <hr className="my-1 border-gray-200" />
                <MenuItem onClick={handleMenuClose}>Instructor dashboard</MenuItem>
                <hr className="menu-divider" /> {/* Đường line ngăn cách */}
                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
                <hr className="menu-divider" /> {/* Đường line ngăn cách */}

                <hr className="my-1 border-gray-200" />
                <MenuItem onClick={handleMenuClose}>Account settings</MenuItem>
                <hr className="my-1 border-gray-200" />
                <MenuItem onClick={handleMenuClose}>Payment methods</MenuItem>
                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleMenuClose}>Subscriptions</MenuItem>
                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleMenuClose}>Purchase history</MenuItem>
                <hr className="menu-divider" /> {/* Đường line ngăn cách */}

                <hr className="my-1 border-gray-200" />
                <MenuItem onClick={handleMenuClose}>Public profile</MenuItem>
                <hr className="my-1 border-gray-200" />
                <MenuItem onClick={handleMenuClose}>Edit profile</MenuItem>
                <hr className="menu-divider" /> {/* Đường line ngăn cách */}

                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleLogout}>Help</MenuItem>
                <hr className="my-1 border-gray-200" /> 
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>

            </div>
          ) : (
            <button
              onClick={handleLoginButtonClick}
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-sm font-semibold transition duration-300 ring-2 ring-blue-400"
            >
              <PersonIcon className="h-5 w-5" />
              <span>SIGN IN</span>
            </button>
          )}
        </div>

    </header>
  );
}

export default Header;
