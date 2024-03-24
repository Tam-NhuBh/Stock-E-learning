import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Pagination, Snackbar, Menu, MenuItem, Box, Modal, TextField } from "@mui/material";
import course1 from '../assets/img/stock.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const RegisteredCoursesListComponent: React.FC = () => {

  const courses = [
    { id: 1, title: "Introduction to Stock Market", author: "John Doe", image: course1 },
    { id: 2, title: "Technical Analysis Masterclass", author: "Jane Smith", image: course1 },
    { id: 3, title: "Options Trading Basics", author: "Alice Johnson", image: course1 },
    { id: 4, title: "Fundamental Analysis Fundamentals", author: "Bob Brown", image: course1 },
    { id: 5, title: "Day Trading Strategies", author: "Charlie Lee", image: course1 },
    { id: 6, title: "Risk Management in Stock Trading", author: "Charlie Lee", image: course1 },
    { id: 7, title: "Swing Trading Essentials", author: "Charlie Lee", image: course1 },
    { id: 8, title: "Candlestick Patterns and Their Meanings", author: "Charlie Lee", image: course1 },
    { id: 9, title: "Advanced Technical Analysis", author: "Charlie Lee", image: course1 },
    { id: 10, title: "Introduction to Forex Trading", author: "Charlie Lee", image: course1 },
    { id: 11, title: "Cryptocurrency Investment Strategies", author: "Charlie Lee", image: course1 },
    { id: 12, title: "Portfolio Management Techniques", author: "Charlie Lee", image: course1 },
    { id: 13, title: "Commodity Trading Fundamentals", author: "Charlie Lee", image: course1 },
    { id: 14, title: "Advanced Options Trading", author: "Charlie Lee", image: course1 },
    { id: 15, title: "Algorithmic Trading Strategies", author: "Charlie Lee", image: course1 }
  ]

  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Số khóa học mỗi trang
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shareLink, setShareLink] = useState<string>(""); // State lưu trữ link bài post
  const [modalOpen, setModalOpen] = useState<boolean>(false); // State cho việc mở/closed modal

  // Tính toán số trang và các khóa học hiện tại
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Hàm xử lý khi bấm nút Share
  const handleShare = (courseTitle: string) => {
    // Ở đây, bạn cần cung cấp link của bài post tương ứng với khóa học
    // Ví dụ, trong trường hợp này, tôi đang cung cấp một chuỗi cố định để minh họa
    const postLink = "https://example.com/" + courseTitle.replace(/\s+/g, '-').toLowerCase();
    setShareLink(postLink);
    setModalOpen(true);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Hàm xử lý chia sẻ lên Facebook
  const shareOnFacebook = () => {
    // Mở trang chia sẻ của Facebook với đường dẫn là shareLink
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareLink), '_blank');
  };

  // // Hàm xử lý chia sẻ lên Youtube
  // const shareOnYouTube = () => {
  //   window.open('https://www.youtube.com/share?url=' + encodeURIComponent(shareLink), '_blank');
  // };

  const handleShareOnGmail = () => {
    // Địa chỉ email cần gửi
    const to = "example@gmail.com";
    // Tiêu đề email
    const subject = "Subject of the email";
    // Nội dung email
    const body = "Content of the email";

    // Tạo URL mailto
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Mở URL mailto trong một cửa sổ mới
    window.open(mailtoUrl, "_blank");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setSnackbarMessage("Copied to clipboard!");
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
        setSnackbarMessage("Failed to copy to clipboard!");
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="container mx-auto mb-8">
      <div className='registered-courses-list-component'>
        <Grid container spacing={3} mt={"3px"} className="courses-grid">
          {currentItems.map(course => (
            <Grid item key={course.id} xs={12} sm={6} md={6} lg={3}>
              <Card
                className="course-item"
                sx={{
                  borderRadius: '10px',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  maxHeight: '350px', // Tăng chiều cao của khung chứa nội dung
                  overflow: 'hidden' // Không cho phép nội dung bị che khi phóng to hoặc thu nhỏ
                }}
              >
                <CardContent className="course-content" style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={course.image} alt="course-img" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleMenuOpen}
                      style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleShare(course.title)}> {/* Gọi hàm handleShare khi bấm nút Share */}
                        <ShareIcon fontSize="small" style={{ marginRight: '5px' }} />
                        Share
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        <PlaylistAddIcon fontSize="small" style={{ marginRight: '5px' }} />
                        Create New List
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        <FavoriteIcon fontSize="small" style={{ marginRight: '5px' }} />
                        Favourite
                      </MenuItem>
                    </Menu>
                  </div>
                  <Box sx={{ padding: '20px' }}>
                    <Typography variant="h5" component="div" className="mt-2" style={{ fontWeight: 'bold', textAlign: 'left', maxHeight: '6rem', overflow: 'hidden' }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'left', marginTop: '8px' }}>
                      {course.author}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ margin: '35px auto', width: 'fit-content' }}>
          <Pagination count={totalPages} page={page} onChange={handleChangePage} />
        </div>
      </div>

      {/* Modal hiển thị link bài post */}
      <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="share-modal-title" aria-describedby="share-modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', p: 3, borderRadius: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography id="share-modal-title" variant="h6" component="h2" gutterBottom>
            Share this post
          </Typography>

          <Grid container alignItems="center">
            <Grid item xs={11}>
              <TextField id="share-modal-description" value={shareLink} variant="outlined" fullWidth disabled />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleCopyToClipboard} aria-label="Copy to clipboard">
                <FileCopyIcon />

              </IconButton>
              
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000} // Thời gian hiển thị của snackbar (milisecond)
                onClose={handleSnackbarClose}
                message={snackbarMessage}
              />
            </Grid>
          </Grid>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {/* Facebook Icon */}
            <IconButton onClick={shareOnFacebook} style={{ backgroundColor: '#1877F2', marginRight: '20px', padding: '7px' }}>
              <FacebookIcon style={{ color: 'white', fontSize: '30px' }} />
            </IconButton>
            {/* Gmail Icon */}
            <IconButton onClick={handleShareOnGmail} style={{ backgroundColor: '#DB4437', padding: '7px' }}>
              <EmailIcon style={{ color: 'white', fontSize: '30px' }} />
            </IconButton>
          </div>

          <Button variant="contained" color="primary" onClick={handleCloseModal} style={{ marginTop: '20px' }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisteredCoursesListComponent;
