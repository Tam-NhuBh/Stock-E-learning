import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import course1 from '../assets/img/banner.png';
import '../assets/styles/Course.css'; // Import the CSS file

const SalesCourse = () => {
  const courses = [
    { id: 1, title: "Introduction to Stock Market", price: 5500, oldPrice: 6500, image: course1 },
    { id: 2, title: "Technical Analysis Masterclass", price: 6500, oldPrice: 7500, image: course1 },
    { id: 3, title: "Options Trading Basics", price: 6000, oldPrice: 7000, image: course1 },
    { id: 4, title: "Fundamental Analysis Fundamentals", price: 7000, oldPrice: 8000, image: course1 },
    { id: 5, title: "Day Trading Strategies", price: 7500, oldPrice: 8500, image: course1 },
    { id: 6, title: "Risk Management in Stock Trading", price: 6000, oldPrice: 7000, image: course1 },
    { id: 7, title: "Swing Trading Essentials", price: 6500, oldPrice: 7500, image: course1 },
    { id: 8, title: "Candlestick Patterns and Their Meanings", price: 7000, oldPrice: 8000, image: course1 },
    // Thêm các khóa học khác tại đây
  ];

  // Dẫn đến trang học 
  const handleEnroll= (event:any) => {

  }
  return (
    <div className="course-background-container">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl text-text font-bold mb-8">Our Stock Market Courses</h2>
        <p className="text-text text-lg text-center mt-6">Enhance your understanding of the stock market with our comprehensive courses</p>
      </div>

      <div className="container mx-auto mb-8">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h4" className="text-4xl font-bold text-text leading-tight">
              Sales
            </Typography>
          </Grid>
          <Grid item>
            <Link
              className="bg-blue-700 px-3 py-2 text-center font-semibold text-lg text-white rounded"
              to="/courses"
            >
              View All
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={"3px"} className="courses-grid">
          {courses.map(course => (
            <Grid item key={course.id} xs={12} sm={6} md={6} lg={3}>
              <Card
                className="course-item"
                sx={{
                  borderRadius: '10px',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  maxHeight: '450px', // Tăng chiều cao của khung chứa nội dung
                  overflow: 'hidden' // Không cho phép nội dung bị che khi phóng to hoặc thu nhỏ
                }}
              >
                <div className="course-content" style={{ position: 'relative', maxHeight: '430px', overflow: 'hidden' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={course.image} alt="course-img" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                  </div>

                  <div style={{ padding: '20px' }}>
                    <Typography variant="h5" component="div" className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {course.title}
                    </Typography>
                    <div className="price-container">
                      <Typography variant="body1" style={{ marginBottom: '8px', color: '#666' }}>
                        Price: Rs.{course.price}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        <del>Rs.{course.oldPrice}</del>
                      </Typography>
                    </div>
                  </div>

                  <div className="enroll-button bg-blue-700 px-3 py-2 text-center font-semibold text-lg text-white rounded cursor-pointer"
                    style={{ margin: '10px auto 15px', display: 'block', overflow: 'hidden' }}>
                    Enroll Now
                  </div>
                  
                </div>

              </Card>
            </Grid>
          ))}
        </Grid>

      </div>
    </div>
  );
};

export default SalesCourse;
