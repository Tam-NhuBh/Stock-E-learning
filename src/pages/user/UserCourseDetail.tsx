import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Pagination, Snackbar, Menu, MenuItem, Box, Modal, TextField } from "@mui/material";
import course1 from '../assets/img/stock.jpg';

const UserCourseDetail: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Số video mỗi trang
  const [videos] = useState([
    { id: 1, title: "Video 1" },
    { id: 2, title: "Video 2" },
    { id: 3, title: "Video 3" },
    // Thêm các video khác tại đây
  ]);

  // Tính toán số trang và danh sách video hiện tại
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = videos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="user-course-detail">
      {/* Phần thumbnail video */}
      <div className="video-thumbnail">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* Thêm các thông tin khác về video nếu cần */}
      </div>

      {/* Sidebar chứa danh sách video */}
      <div className="video-sidebar">
        <Typography variant="h5" gutterBottom>
          Next Videos
        </Typography>
        <Grid container spacing={1}>
          {currentVideos.map(video => (
            <Grid item xs={12} key={video.id}>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    {video.title}
                  </Typography>
                  {/* Thêm các thông tin khác về video nếu cần */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Pagination cho danh sách video */}
        <Pagination count={totalPages} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
      </div>
    </div>
  );
};

export default UserCourseDetail;
