import React, { useState } from "react";
import { Grid, Card, Button , CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from "@mui/material";
import trend from "../../../assets/img/trend.jpg";
import { Scrollbars } from 'react-custom-scrollbars';

const GuestBlog = () => {
  const newsPosts = [
    { id: 1, title: "Bài post 1", content: "Nội dung bài post 1", image: "path/to/image1.jpg", type: "Tin tức", time: "10:00 AM, 24/02/2024" },
    { id: 2, title: "Bài post 2", content: "Nội dung bài post 2", image: "path/to/image2.jpg", type: "Tin tức", time: "11:00 AM, 24/02/2024" },
    { id: 3, title: "Bài post 3", content: "Nội dung bài post 3", image: "path/to/image3.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 4, title: "Bài post 4", content: "Nội dung bài post 4", image: "path/to/image4.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 5, title: "Bài post 5", content: "Nội dung bài post 5", image: "path/to/image5.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 6, title: "Bài post 6", content: "Nội dung bài post 6", image: "path/to/image6.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 7, title: "Bài post 7", content: "Nội dung bài post 7", image: "path/to/image7.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 8, title: "Bài post 8", content: "Nội dung bài post 8", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 9, title: "Bài post 9", content: "Nội dung bài post 8", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 10, title: "Bài post 10", content: "Nội dung bài post 10", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 11, title: "Bài post 11", content: "Nội dung bài post 11", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 12, title: "Bài post 12", content: "Nội dung bài post 12", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 13, title: "Bài post 13", content: "Nội dung bài post 13", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 14, title: "Bài post 14", content: "Nội dung bài post 14", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 15, title: "Bài post 15", content: "Nội dung bài post 15", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },

  ];

  const [page, setPage] = useState(1);
  const postsPerPage = 9;
  const totalPosts = newsPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleChangePage = (event:any, value:any) => {
    setPage(value);
  };

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = newsPosts.slice(startIndex, endIndex);

  // Chia 4 bài post thành 2 cột và 2 hàng
  const slicedPosts = [
    newsPosts.slice(0, 2),
    newsPosts.slice(2, 4),

  ];

  return (
    <div className="guest-blog">
      <Grid container spacing={4} style={{ marginTop: '2px', backgroundColor: '#d3f2ff', padding: '20px' }}>
        <Grid item xs={12} lg={8}>
          {currentPosts.map(post => (
            <Card key={post.id} style={{ marginBottom: '20px' }}>
              <CardContent style={{ display: 'flex' }}>
                <div style={{ width: '30%', marginRight: '20px' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column",  textAlign: "left"  }}>
                  <div style={{ marginBottom: "10px" }}>
                    <Typography variant="subtitle1" style={{ fontWeight: "bold", color: "#333" }}>{post.type}</Typography>
                    <Typography variant="body2" color="textSecondary">{post.time}</Typography>
                  </div>
                  <Typography variant="h5" component="h2" style={{ marginBottom: "10px", color: "#333" }}>{post.title}</Typography>
                  <Typography style={{ color: "#555" }}>{post.content}</Typography>
                </div>
              </CardContent>
            </Card>
          ))}
          <Pagination count={totalPages} page={page} onChange={handleChangePage} />
        </Grid>

        <Grid item xs={12} lg={4} style={{ position: 'sticky', top: '20px'}}>
          <Card style={{ marginBottom: '20px', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                Trending
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Index</TableCell>
                      <TableCell align="right">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Thêm nội dung cho bảng */}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Ảnh mới */}
              <img src={trend} alt="Trending" style={{ width: '100%', height: 'auto' }} />
            </CardContent>
          </Card>

          {/* Khung Latest posts */}
          <Card style={{ flex: '1 1 auto', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                Latest posts
              </Typography>
              {slicedPosts.map((row, rowIndex) => (
                <Grid container key={rowIndex} spacing={2}>
                  {row.map(post => (
                    <Grid item xs={12} key={post.id}>
                      <CardContent style={{ display: 'flex' }}>
                        <div style={{ width: '30%', marginRight: '20px' }}>
                          <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", flexGrow: 1 }}>
                          <Typography variant="subtitle1" style={{ fontWeight: "bold", color: "#333" }}>{post.time}</Typography>
                          <Typography variant="h6" style={{ marginBottom: "10px", color: "#333" }}>{post.title}</Typography>
                          <Typography style={{ color: "#555", marginBottom: "10px" }}>{post.content}</Typography>
                          <Button variant="contained" color="primary">Đọc nhanh</Button>
                        </div>
                      </CardContent>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default GuestBlog;
