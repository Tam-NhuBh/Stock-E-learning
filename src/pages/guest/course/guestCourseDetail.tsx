import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import course1 from '../../../assets/img/banner.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GuestCourseDetail = () => {
  const courses = [
    { 
      id: 1, 
      title: "Introduction to Stock Market", 
      price: 5500, 
      oldPrice: 6500, 
      image: course1,
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
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
      description: ["This course provides an introduction to the stock market", "Students will learn about basic concepts, terminology, and how the stock market works"],
      outcomes: ["Understanding of real estate investing principles", "Knowledge of property types", "Financial analysis skills"],
      courses: ["Real Estate Investment Basics", "Property Analysis Techniques", "Financial Modeling for Real Estate"],
      testimonials: [
        { name: "Jacob Thompson", comment: "Excellent course on real estate investing. Really helped me understand the market." },
        { name: "Chloe Davis", comment: "Highly recommended. Provided valuable insights into real estate investment." }
      ]
    },
    // Add data for other courses
  ];
  

  const { id } = useParams<{ id?: string }>();
  const [currentTab, setCurrentTab] = useState('about');
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});

  if (!id) {
    return <Typography>No course ID provided</Typography>;
  }

  const courseId = parseInt(id);

  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <Typography>No course found</Typography>;
  }

  const handleTabChange = (event:any, newValue:any) => {
    setCurrentTab(newValue);
  };

  
  const toggleSection = (index:number) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='guest-course-detail' style={{ backgroundColor: '#d3f2ff', padding: '20px' }}>
      <Typography variant="h3">{course.title}</Typography>
      <img src={course.image} alt={course.title} style={{ maxWidth: '100%', height: 'auto' }} />

      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="course tabs"
        sx={{ backgroundColor: '#fff' }} // Thay đổi màu nền của Tabs
      >
        <Tab value="about" label="About" />
        <Tab value="courses" label="Course" />
        <Tab value="testimonials" label="Testimonials"/>
      </Tabs>

      {currentTab === 'about' && (
      <div style={{ paddingLeft: '20px', display: 'flex', alignItems: 'flex-start', textAlign: 'left', marginTop: '10px', backgroundColor: '#fff' }}>
        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography variant="h5" style={{ marginBottom: '10px' }}>What you'll learn</Typography>
          <div style={{ paddingLeft: '10px' }}>
            {course.description.map((description, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <Typography variant="h5" style={{ marginRight: '5px' }}>&#10003;</Typography>
                <Typography variant="body1">{description}</Typography>
              </div>
            ))}
          </div>

            <Typography variant="h5" style={{ marginBottom: '10px', marginTop:'40px'}}>Skills you'll gain</Typography>      
            <div style={{ paddingLeft: '32px' }}>
              {course.outcomes.map((outcome, index) => (
                <Typography key={index} variant="body1">{outcome}</Typography>
              ))}
            </div>
          </div>

          {/* Khung chứa cho bình luận và lượt vote */}
          <div style={{  marginRight: '50px', width: '500px' }}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>Comments</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Hiển thị nút vote */}
              <button style={{ marginRight: '10px', padding:'2px', width:'70px' }}>Vote</button>
              <Typography variant="body1">Total Votes: 0</Typography>
            </div>

            {/* Hiển thị khung bình luận */}
            <div style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px' }}>
              {/* Hiển thị các bình luận */}
              <div>
                <Typography variant="body1">This course is very informative!</Typography>
                <Typography variant="subtitle2">- John Doe -</Typography>
              </div>
              <div>
                <Typography variant="body1"  style={{marginTop:'8px'}}>I highly recommend this course!</Typography>
                <Typography variant="subtitle2">- Jane Smith -</Typography>
              </div>
            </div>
          </div>
        </div>
      )}


      {currentTab === 'courses' && (
        <div style={{ paddingLeft: '10px', display: 'flex', alignItems: 'flex-start', textAlign: 'left', marginTop: '10px', backgroundColor: '#fff' }}>
          <div style={{ paddingLeft: '5px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="h5" style={{marginBottom: '10px'}}>Curriculum</Typography>
              {course.courses.map((courseItem, courseIndex) => (
              <Accordion key={courseIndex} expanded={expandedSections[courseIndex]} onChange={() => toggleSection(courseIndex)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{courseItem}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {/* Đây là nơi bạn có thể lặp qua các video trong mỗi phần */}
                    {Array.from({ length: 3 }).map((_, videoIndex) => (
                      <ul key={videoIndex}>Video {videoIndex + 1}</ul>
                    ))}
                  </ul>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            )}

      {/* {currentTab === 'testimonials' && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5">Testimonials:</Typography>
          {course.testimonials.map((item, index) => (
            <div key={index} style={{ marginTop: '10px' }}>
              <Typography variant="body1">{item.comment}</Typography>
              <Typography variant="subtitle2">- {item.name}</Typography>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};


export default GuestCourseDetail;
