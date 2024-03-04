import React, { useState } from 'react';
import { Grid, Card, Typography, Checkbox, FormControlLabel, Pagination, TextField, CardContent, Button, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import adsBanner from '../../../assets/img/stock.jpg';
import '../../../assets/styles/Course.css'; // Import the CSS file
import course1 from '../../../assets/img/banner.png';
import { useNavigate } from 'react-router-dom';

const GuestCourse = () => { 
//   const courses = [
//     { id: 1, title: "Introduction to Stock Market", price: 5500, oldPrice: 6500, image: course1 },
//     { id: 2, title: "Technical Analysis Masterclass", price: 6500, oldPrice: 7500, image: course1 },
//     { id: 3, title: "Options Trading Basics", price: 6000, oldPrice: 7000, image: course1 },
//     { id: 4, title: "Fundamental Analysis Fundamentals", price: 7000, oldPrice: 8000, image:  course1 },
//     { id: 5, title: "Day Trading Strategies", price: 7500, oldPrice: 8500, image:  course1  },
//     { id: 6, title: "Risk Management in Stock Trading", price: 6000, oldPrice: 7000, image: course1  },
//     { id: 7, title: "Swing Trading Essentials", price: 6500, oldPrice: 7500, image: course1 },
//     { id: 8, title: "Candlestick Patterns and Their Meanings", price: 7000, oldPrice: 8000, image:  course1  },
//     { id: 9, title: "Cryptocurrency Investment Strategies", price: 8000, oldPrice: 9000, image: course1 },
//     { id: 10, title: "Forex Trading for Beginners", price: 6000, oldPrice: 7000, image: course1 },
//     { id: 11, title: "Algorithmic Trading Fundamentals", price: 7500, oldPrice: 8500, image: course1 },
//     { id: 12, title: "Investing in Real Estate", price: 8500, oldPrice: 9500, image: course1 },
//     // Thêm các khóa học khác tại đây
// ];
    const courses = [
      { 
        id: 1, 
        title: "Introduction to Stock Market", 
        price: 5500, 
        oldPrice: 6500, 
        image: course1,
        description: "This course provides an introduction to the stock market. Students will learn about basic concepts, terminology, and how the stock market works.",
        outcomes: ["Understanding of stock market basics", "Knowledge of terminology", "Understanding of how stock market functions"],
        courses: ["Stock Market 101", "Introduction to Trading", "Investing Strategies"],
        testimonials: [
          { name: "John Doe", comment: "Great course! Really helped me understand the stock market." },
          { name: "Jane Smith", comment: "Highly recommend this course to anyone new to investing." }
        ]
      },
      { 
        id: 2, 
        title: "Technical Analysis Masterclass", 
        price: 6500, 
        oldPrice: 7500, 
        image: course1,
        description: "This masterclass covers advanced technical analysis techniques used in trading. Students will learn about chart patterns, indicators, and advanced trading strategies.",
        outcomes: ["In-depth understanding of technical analysis", "Ability to analyze charts and patterns", "Advanced trading strategies"],
        courses: ["Advanced Technical Analysis", "Pattern Recognition", "Algorithmic Trading"],
        testimonials: [
          { name: "Alice Johnson", comment: "Excellent course! Really helped me improve my trading strategies." },
          { name: "Bob Williams", comment: "Very informative masterclass. Highly recommended for serious traders." }
        ]
      },
      { 
        id: 3, 
        title: "Options Trading Basics", 
        price: 6000, 
        oldPrice: 7000, 
        image: course1,
        description: "This course provides an introduction to options trading. Students will learn about different types of options, strategies, and risk management.",
        outcomes: ["Understanding of options trading basics", "Knowledge of options strategies", "Risk management techniques"],
        courses: ["Introduction to Options", "Options Strategies", "Advanced Options Trading"],
        testimonials: [
          { name: "Michael Brown", comment: "Great course on options trading. Really helped me understand the concepts." },
          { name: "Sarah Clark", comment: "Highly recommend this course to anyone interested in options trading." }
        ]
      },
      { 
        id: 4, 
        title: "Fundamental Analysis Fundamentals", 
        price: 7000, 
        oldPrice: 8000, 
        image: course1,
        description: "This course covers the fundamentals of fundamental analysis. Students will learn how to analyze financial statements, evaluate company performance, and make investment decisions.",
        outcomes: ["Understanding of fundamental analysis principles", "Ability to analyze financial statements", "Evaluation of company performance"],
        courses: ["Fundamental Analysis Basics", "Financial Statement Analysis", "Valuation Methods"],
        testimonials: [
          { name: "David Wilson", comment: "Excellent course! Provided a solid foundation in fundamental analysis." },
          { name: "Emma Taylor", comment: "Very informative. Helped me improve my investment analysis skills." }
        ]
      },
      { 
        id: 5, 
        title: "Day Trading Strategies", 
        price: 7500, 
        oldPrice: 8500, 
        image: course1,
        description: "This course focuses on day trading strategies. Students will learn about intraday trading techniques, risk management, and technical analysis.",
        outcomes: ["Understanding of day trading strategies", "Ability to implement intraday trading techniques", "Effective risk management strategies"],
        courses: ["Intraday Trading Basics", "Advanced Day Trading", "Risk Management for Traders"],
        testimonials: [
          { name: "Olivia White", comment: "Great course for day traders. Learned a lot of useful strategies." },
          { name: "James Miller", comment: "Highly recommended for anyone interested in day trading." }
        ]
      },
      { 
        id: 6, 
        title: "Risk Management in Stock Trading", 
        price: 6000, 
        oldPrice: 7000, 
        image: course1,
        description: "This course covers risk management techniques in stock trading. Students will learn how to identify, assess, and mitigate risks in their trading activities.",
        outcomes: ["Understanding of risk management principles", "Ability to identify and assess risks", "Effective risk mitigation strategies"],
        courses: ["Risk Assessment in Trading", "Portfolio Diversification", "Contingency Planning"],
        testimonials: [
          { name: "Sophia Adams", comment: "Excellent course on risk management. Really helped me minimize losses in trading." },
          { name: "Daniel Brown", comment: "Very informative. Essential for any serious trader." }
        ]
      },
      { 
        id: 7, 
        title: "Swing Trading Essentials", 
        price: 6500, 
        oldPrice: 7500, 
        image: course1,
        description: "This course covers the essentials of swing trading. Students will learn about swing trading strategies, technical analysis, and risk management.",
        outcomes: ["Understanding of swing trading principles", "Ability to implement swing trading strategies", "Effective risk management techniques"],
        courses: ["Swing Trading Basics", "Advanced Swing Trading", "Position Sizing Strategies"],
        testimonials: [
          { name: "Isabella Martinez", comment: "Great course for swing traders. Provided valuable insights and strategies." },
          { name: "William Johnson", comment: "Highly recommended. Helped me improve my swing trading skills." }
        ]
      },
      { 
        id: 8, 
        title: "Candlestick Patterns and Their Meanings", 
        price: 7000, 
        oldPrice: 8000, 
        image: course1,
        description: "This course provides an in-depth study of candlestick patterns and their meanings. Students will learn how to interpret candlestick charts and identify trading opportunities.",
        outcomes: ["Understanding of candlestick patterns", "Ability to interpret candlestick charts", "Identification of trading opportunities"],
        courses: ["Basic Candlestick Patterns", "Advanced Candlestick Analysis", "Trading Strategies Using Candlestick Patterns"],
        testimonials: [
          { name: "Noah Clark", comment: "Excellent course on candlestick patterns. Really helped me improve my trading decisions." },
          { name: "Ella Thompson", comment: "Very informative. Essential for anyone interested in technical analysis." }
        ]
      },
      { 
        id: 9, 
        title: "Cryptocurrency Investment Strategies", 
        price: 8000, 
        oldPrice: 9000, 
        image: course1,
        description: "This course covers investment strategies for cryptocurrencies. Students will learn about different types of cryptocurrencies, investment approaches, and risk management.",
        outcomes: ["Understanding of cryptocurrency investment principles", "Knowledge of different cryptocurrencies", "Effective investment strategies"],
        courses: ["Introduction to Cryptocurrencies", "Cryptocurrency Trading Strategies", "Long-Term Investment Approaches"],
        testimonials: [
          { name: "Lucas Wilson", comment: "Great course on cryptocurrency investment. Provided valuable insights." },
          { name: "Ava Robinson", comment: "Highly recommended for anyone interested in investing in cryptocurrencies." }
        ]
      },
      { 
        id: 10, 
        title: "Forex Trading for Beginners", 
        price: 6000, 
        oldPrice: 7000, 
        image: course1,
        description: "This course provides an introduction to forex trading for beginners. Students will learn about currency pairs, trading strategies, and risk management.",
        outcomes: ["Understanding of forex trading basics", "Knowledge of currency pairs", "Basic trading strategies"],
        courses: ["Forex Basics", "Currency Pair Analysis", "Risk Management in Forex Trading"],
        testimonials: [
          { name: "Nathan Harris", comment: "Excellent course for forex beginners. Really helped me understand the basics." },
          { name: "Emily King", comment: "Highly recommended. Great introduction to forex trading." }
        ]
      },
      { 
        id: 11, 
        title: "Algorithmic Trading Fundamentals", 
        price: 7500, 
        oldPrice: 8500, 
        image: course1,
        description: "This course covers the fundamentals of algorithmic trading. Students will learn about automated trading systems, algorithm development, and backtesting strategies.",
        outcomes: ["Understanding of algorithmic trading principles", "Ability to develop trading algorithms", "Effective backtesting techniques"],
        courses: ["Automated Trading Basics", "Algorithm Development", "Backtesting Strategies"],
        testimonials: [
          { name: "Henry Lee", comment: "Great course on algorithmic trading. Provided practical insights and techniques." },
          { name: "Sophie Brown", comment: "Highly recommended. Essential for anyone interested in automated trading." }
        ]
      },
      { 
        id: 12, 
        title: "Investing in Real Estate", 
        price: 8500, 
        oldPrice: 9500, 
        image: course1,
        description: "This course provides insights into real estate investing. Students will learn about property types, investment strategies, and financial analysis.",
        outcomes: ["Understanding of real estate investing principles", "Knowledge of property types", "Financial analysis skills"],
        courses: ["Real Estate Investment Basics", "Property Analysis Techniques", "Financial Modeling for Real Estate"],
        testimonials: [
          { name: "Jacob Thompson", comment: "Excellent course on real estate investing. Really helped me understand the market." },
          { name: "Chloe Davis", comment: "Highly recommended. Provided valuable insights into real estate investment." }
        ]
      },
      // Add data for other courses
    ];

    
  const [checked, setChecked] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const tuitionPerPage = 8; // 3 khóa học trên mỗi trang
  const navigate = useNavigate();

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
    const enrolledCourse = courses.find(course => course.id === courseId);
    if (enrolledCourse) {
      navigate(`/course/${courseId}`);
    }
  };


  // Tính toán phạm vi của các khóa học cần hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * tuitionPerPage;
  const endIndex = Math.min(startIndex + tuitionPerPage, courses.length);

  // Lấy các khóa học cần hiển thị dựa trên phạm vi tính toán được
  const displayedCourses = courses.slice(startIndex, endIndex);

  return (
      <div className ="course-page" style={{ backgroundColor: '#d3f2ff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <div style={{ position: 'relative', backgroundColor: 'white', overflow: 'hidden', marginBottom: '10px', maxWidth: '100%', height: '300px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: '24px' }}>Your Advertisement Text Here</span>
          </div>
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
