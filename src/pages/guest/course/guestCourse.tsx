import React, { useState } from 'react';
import { Grid, Card, Typography, Checkbox, FormControlLabel, Pagination, TextField, CardContent, Button, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import adsBanner from '../../../assets/img/stock.jpg';
import '../../../assets/styles/Course.css'; // Import the CSS file
import course1 from '../../../assets/img/banner.png';

const GuestCourse = () => { // Removed the `courses` parameter here
  const courses = [
    { id: 1, title: "Introduction to Stock Market", price: 5500, oldPrice: 6500, image: course1 },
    { id: 2, title: "Technical Analysis Masterclass", price: 6500, oldPrice: 7500, image: course1 },
    { id: 3, title: "Options Trading Basics", price: 6000, oldPrice: 7000, image: course1 },
    { id: 4, title: "Fundamental Analysis Fundamentals", price: 7000, oldPrice: 8000, image:  course1 },
    { id: 5, title: "Day Trading Strategies", price: 7500, oldPrice: 8500, image:  course1  },
    { id: 6, title: "Risk Management in Stock Trading", price: 6000, oldPrice: 7000, image: course1  },
    { id: 7, title: "Swing Trading Essentials", price: 6500, oldPrice: 7500, image: course1 },
    { id: 8, title: "Candlestick Patterns and Their Meanings", price: 7000, oldPrice: 8000, image:  course1  },
    { id: 9, title: "Cryptocurrency Investment Strategies", price: 8000, oldPrice: 9000, image: course1 },
    { id: 10, title: "Forex Trading for Beginners", price: 6000, oldPrice: 7000, image: course1 },
    { id: 11, title: "Algorithmic Trading Fundamentals", price: 7500, oldPrice: 8500, image: course1 },
    { id: 12, title: "Investing in Real Estate", price: 8500, oldPrice: 9500, image: course1 },
    // Thêm các khóa học khác tại đây
];
  
  
  const [checked, setChecked] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const tuitionPerPage = 8; // 3 khóa học trên mỗi trang

  const handleCheckboxChange = (event:any) => {
    setChecked(event.target.checked);
  };

  const handleCheckboxChangeFilter = (event:any) => {
    setCheckedFilter(event.target.checked);
  };

  const handlePriceChange = (event:any) => {
    setPrice(parseInt(event.target.value));
  };

  const handlePageChange = (event:any, page:any) => {
    setCurrentPage(page);
  };

  const handleEnroll = (courseId: number) => {
    // Chuyển đến trang CourseDetail với id của khóa học được truyền
    window.location.href = `/course/${courseId}`;
  };
  

  // Tính toán phạm vi của các khóa học cần hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * tuitionPerPage;
  const endIndex = Math.min(startIndex + tuitionPerPage, courses.length);

  // Lấy các khóa học cần hiển thị dựa trên phạm vi tính toán được
  const displayedCourses = courses.slice(startIndex, endIndex);

  return (
      <div style={{ backgroundColor: '#d3f2ff' }}>
        
        <div style={{ position: 'relative', backgroundColor:'white', objectFit: 'cover' }}>
          <img src={adsBanner} alt="ads" style={{ maxWidth: '100%', borderRadius: '10px', marginTop:'10px' , marginBottom:'10px' }} />
        </div>

        <div className="container mx-auto" style={{ height: 'auto', marginTop:'20px'}}>
          {/* courses page Layouts */}
            <Grid container spacing={3}>
              {/* Khung tìm kiếm */}
              <Grid item xs={12} style={{display:'flex', justifyContent: 'flex-end', marginBottom:'20px'}}>
                <div >
                  <TextField
                    placeholder="Search"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{  backgroundColor: '#C5D7E8', width: '100%' }}
                    />
                </div>
              </Grid>

              {/* Filter và Danh sách khóa học */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {/* Filter */}
                  <Grid item xs={12} md={3}>
                    <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '10px', padding: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                      <div className="flex flex-col mb-4">
                        <Typography variant="h5" component="h2" className="text-lg font-medium">
                          Sort By
                        </Typography>
                        <div className="flex flex-col mt-2 space-y-2">
                          <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                            label="New"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                            label="Old"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                            label="Upcoming"
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '10px', padding: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                      <div className="flex flex-col mb-4">
                        <Typography variant="h5" component="h2" className="text-lg font-medium">
                          Filtered By
                        </Typography>
                        <div className="flex flex-col mt-2 space-y-2">
                          <FormControlLabel
                            control={<Checkbox checked={checkedFilter} onChange={handleCheckboxChangeFilter} />}
                            label="All"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checkedFilter} onChange={handleCheckboxChangeFilter} />}
                            label="Sales"
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '10px', padding: '17px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                      <div className="flex flex-col mb-4">
                        <Typography variant="h5" component="h2" className="text-lg font-medium">
                          Filtered By Price
                        </Typography>
                        <div className="flex flex-col mt-2 space-y-2">
                          <Typography variant="body1" className="text-xs text-gray-600">
                            <span>0</span> 
                            <span> - </span>
                            <span>{price}</span>
                          </Typography>
                          <input
                            type="range"
                            min="0"
                            max="12000"
                            value={price}
                            className="w-full border-none outline-none"
                            onChange={handlePriceChange}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  
                  {/* Danh sách khóa học */}
                  <Grid item xs={12} md={9} marginBottom={'20px'}>
                    <Grid container spacing={3}>
                      {displayedCourses.map(course => (
                        <Grid item key={course.id} xs={12} sm={6} md={6} lg={3}>
                          <Card className="course-item" style={{ borderRadius: '20px'}}>
                            <CardContent className="course-content">
                              {/* Nội dung của card */}
                              <img src={course.image} alt="img" style={{ width: '100%' }} />
                              <Typography variant="h5" component="div" className="mt-2">
                                {course.title}
                              </Typography>
                              <Typography variant="body1">
                                Price: Rs.{course.price}
                              </Typography>
                              <Typography variant="body1" color="textSecondary">
                                <del>Rs.{course.oldPrice}</del>
                              </Typography>
                            </CardContent>
                            <Button
                                variant="contained"
                                color="primary"
                                className="enroll-button"
                                onClick={() => handleEnroll(course.id)}
                              >
                                Enroll Now
                              </Button>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Pagination */}
                    <Pagination
                      count={Math.ceil(courses.length / tuitionPerPage)} // Chia tổng số lượng khóa học cho số lượng khóa học trên mỗi trang (3)
                      page={currentPage}
                      onChange={handlePageChange}
                      style={{ marginTop: '20px'}}

                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </div>
      </div>
 
  );
};

export default GuestCourse;
