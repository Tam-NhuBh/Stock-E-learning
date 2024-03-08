import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Divider, Avatar } from "@mui/material";
import trend from "../../../assets/img/trend.jpg";
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import icon like từ Material-UI Icons
import FacebookIcon from '@mui/icons-material/Facebook'; 
import TwitterIcon from '@mui/icons-material/Twitter'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const GuestBlogDetail = () => {
  const newsPosts = [
    {   id: 1, 
        title:"Ngân hàng trầy trật với nợ xấu",
        content:`Trong bối cảnh thị trường bất động sản trầm lắng, nợ xấu có dấu hiệu đi lên, ngân hàng ngày càng gian nan chào bán tài sản thế chấp là nhà, đất.
        Báo cáo mới nhất của Công ty Chứng khoán Ngân hàng Ngoại thương (VCBS) chỉ ra nợ xấu và nợ tiềm ẩn rủi ro tiếp tục tăng. Cụ thể, cuối quý III/2023, tỉ lệ nợ xấu nội bảng toàn hệ thống ngân hàng là 2,2%, tăng mạnh so với mức 1,6% vào cuối năm 2022; tỉ lệ nợ nhóm 2 (nhóm nợ quá hạn thanh toán 10 - 90 ngày) cũng tăng từ 1,8% vào cuối năm 2022 lên 2,3%.
        Thu hồi được vốn nhưng vẫn lỗ
        Trước tình hình trên, hàng loạt ngân hàng ráo riết chào bán tài sản thế chấp nhằm hạn chế nợ xấu gia tăng. Dù ngân hàng đã giảm mạnh giá bán, xóa lãi cho bên vay nợ nhưng kết quả không mấy khả quan.
        Điển hình, Vietcombank đã lần thứ 7 rao bán tài sản bảo đảm là bất động sản với giá khởi điểm 27 tỉ đồng, giảm 14 tỉ đồng so với mức được ngân hàng này định giá vào đầu năm nay là 41 tỉ đồng. Tương tự, để giảm tỉ lệ nợ xấu, BIDV cũng tiếp tục bán đấu giá lô đất 1.130 m2 tại TP HCM với giá khởi điểm hơn 72,8 tỉ đồng. Đáng chú ý, đây là lần thứ 14 tài sản này được rao bán với mức giá giảm dần nhưng vẫn chưa có người mua`, 
        type: "Tin tức", 
        author: "Nguyễn Văn A",
        time: "10:00 AM, 24/02/2024",
        images: ["path/to/image1.jpg", "path/to/image2.jpg", "path/to/image3.jpg"]

    },

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

  const comments = [
    { id: 1, author: "John Doe", avatar: "path/to/avatar1.jpg", content: "Great article!", likes: 10 },
    { id: 2, author: "Jane Smith", avatar: "path/to/avatar2.jpg", content: "I found this very informative.", likes: 5 },
    // Thêm các comment khác ở đây
  ];
  
  const { id } = useParams<{ id?: string }>();

  
  if (!id) {
    return <Typography>No course ID provided</Typography>;
  }

  const postId = parseInt(id);

  const post = newsPosts.find(post => post.id === postId);

  if (!post) {
    return <Typography>No course found</Typography>;
  }


  return (
    <div className="guest-blog-detail" style={{ height: '100vh', margin: 0, padding: 0, backgroundColor: '#d3f2ff' }}>
      <div style={{ padding: '20px',backgroundColor: '#d3f2ff' }}>
        <Grid container spacing={4} style={{ marginTop: '2px'  }}>
          <Grid item xs={12} lg={8}>
            <Card style={{ marginBottom: '20px', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>

                <CardContent style={{textAlign:'left'}}>
                    <Typography variant="h4" component="h2" style={{ marginBottom: '10px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>
                        {post.title}
                    </Typography>
                        
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" color="textSecondary">
                                {post.time}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* Các biểu tượng mạng xã hội */}
                                <FacebookIcon style={{ marginRight: '10px', cursor: 'pointer' }} />
                                <TwitterIcon style={{ marginRight: '10px', cursor: 'pointer' }} />
                                <LinkedInIcon style={{ marginRight: '10px', cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div>
                            {post.images && post.images.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto', marginBottom: '10px'}} />
                            ))}
                        </div>

                        <Typography style={{ color: '#555' }}>
                            {post.content}
                        </Typography>

                        <Divider style={{ margin: '20px 0' }} />
                        
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: '#666' }}>
                            --Tác giả--
                        </Typography>
                        
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: '#666' }}>
                            {post.author}
                        </Typography>

                        <Divider style={{ margin: '20px 0'}} />

                        <Typography variant="h6" style={{ marginBottom: '10px' }}>Comments</Typography>
                        {comments.map(comment => (
                          <div key={comment.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar alt={comment.author} src={comment.avatar} style={{ marginRight: '10px' }} /> {/* Hiển thị avatar */}
                              <div>
                                <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>{comment.author}</Typography>
                                <Typography variant="body2" style={{ marginRight: '10px' }}>{comment.content}</Typography>
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <Typography variant="body2">Likes: {comment.likes}</Typography> {/* Hiển thị số lượt like */}
                              <FavoriteIcon color="secondary" style={{ fontSize: 18, marginLeft: '5px' }} /> {/* Icon like */}
                            </div>
                          </div>
                        ))}

                        {/* Khung comment */}
                        <Typography variant="h6" style={{ marginBottom: '10px' }}>Add a comment</Typography>
                        <TextField
                          label="Your comment"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          style={{ marginBottom: '10px' }}
                          onClick={handleSubmit}

                        />
                        <Button variant="contained" color="primary">
                          Submit
                        </Button>

                </CardContent>
              </Card>
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
         
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GuestBlogDetail;
