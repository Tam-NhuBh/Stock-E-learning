import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from "@mui/material";

const PostComponent= () => {
  // Dữ liệu tĩnh cho danh sách bài post tin tức
  const newsPosts = [
    { id: 1, title: "Bài post 1", content: "Nội dung bài post 1", image: "path/to/image1.jpg", type: "Tin tức", time: "10:00 AM, 24/02/2024" },
    { id: 2, title: "Bài post 2", content: "Nội dung bài post 2", image: "path/to/image2.jpg", type: "Tin tức", time: "11:00 AM, 24/02/2024" },
    { id: 3, title: "Bài post 3", content: "Nội dung bài post 3", image: "path/to/image3.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 4, title: "Bài post 4", content: "Nội dung bài post 4", image: "path/to/image4.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 5, title: "Bài post 5", content: "Nội dung bài post 5", image: "path/to/image5.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 6, title: "Bài post 6", content: "Nội dung bài post 6", image: "path/to/image6.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 7, title: "Bài post 7", content: "Nội dung bài post 7", image: "path/to/image7.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },
    { id: 8, title: "Bài post 8", content: "Nội dung bài post 8", image: "path/to/image8.jpg", type: "Tin tức", time: "12:00 PM, 24/02/2024" },

    // Thêm các bài post khác ở đây nếu cần
  ];

    // Dữ liệu tĩnh cho danh sách chỉ số chứng khoán
    const initialTrends = [
      { id: 1, name: "VN-Index", value: 1200 },
      { id: 2, name: "S&P 500", value: 4000 },
      { id: 3, name: "KOSPI", value: 3000 },
      // Thêm các chỉ số khác ở đây nếu cần
    ]; 

  const [trends, setTrends] = useState(initialTrends);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;
  const totalPosts = newsPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  
  // Lấy chỉ số của các bài post cho trang hiện tại
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = newsPosts.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTrends = trends.map((trend) => ({
        ...trend,
        value: Math.floor(Math.random() * 10000), // Giả lập dữ liệu mới
      }));
      setTrends(updatedTrends);
    }, 3000); // Cập nhật dữ liệu sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [trends]);

  return(
    <div className="post-component">
      <Grid container spacing={4} style={{ marginTop: '3px', backgroundColor: '#d3f2ff', padding: '20px' }}>
        <Grid item xs={12} lg={8}>
            <Typography variant="h5" component="h4" style={{marginLeft: '10px', marginBottom: '5px', textAlign: "left" }}>
                New feeds
            </Typography>
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
        
        <Grid item xs={12} lg={4}>
          <Card style={{ height: '60%', marginTop: '36px' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                Bảng chỉ số chứng khoán
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Chỉ số</TableCell>
                      <TableCell align="right">Giá trị</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Thêm nội dung cho bảng */}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostComponent;
