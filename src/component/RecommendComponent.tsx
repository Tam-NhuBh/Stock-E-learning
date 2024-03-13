import { useState } from "react";
import { Typography, Paper, Card, CardContent} from "@mui/material";
import crs from "../assets/img/hoc-chung-khoan-hcm-tot-nhat-18-2.jpeg";
import "../assets/styles/Course.css";

const RecommendComponent: React.FC = () => {
    const [paidForCourse, setPaidForCourse] = useState<boolean>(false); // State để kiểm soát việc hiển thị khung chứng khoán

    const courseMockData = [
      { 
        id: 1, 
        course: "Learn to Program with C# from Scratch I C# Immersive", 
        description: "Mastering C# 10 with the modern features, know how it works. Become A Professional C# Developer in no time!", 
        instructor: "By SDE Arts by Ahmed EL Mohandes and others", 
        updated: "Updated October 2022", 
        duration: "4 total hours • 64 lectures • All Levels", 
        rating: "4.1 (588)", 
        price: "d299,000", 
        thumbnail: crs 
      },
      { 
        id: 2, 
        course: "JavaScript Basics for Beginners", 
        description: "Learn JavaScript from scratch and start building your own interactive websites.", 
        instructor: "By John Smith", 
        updated: "Updated November 2022", 
        duration: "3 total hours • 50 lectures • Beginner", 
        rating: "4.5 (789)", 
        price: "d199,000", 
        thumbnail: crs
      },
      { 
        id: 3, 
        course: "JavaScript Basics for Beginners", 
        description: "Learn JavaScript from scratch and start building your own interactive websites.", 
        instructor: "By John Smith", 
        updated: "Updated November 2022", 
        duration: "3 total hours • 50 lectures • Beginner", 
        rating: "4.5 (789)", 
        price: "d199,000", 
        thumbnail: crs
      },      { 
        id: 4, 
        course: "JavaScript Basics for Beginners", 
        description: "Learn JavaScript from scratch and start building your own interactive websites.", 
        instructor: "By John Smith", 
        updated: "Updated November 2022", 
        duration: "3 total hours • 50 lectures • Beginner", 
        rating: "4.5 (789)", 
        price: "d199,000", 
        thumbnail: crs
      },      { 
        id: 5, 
        course: "JavaScript Basics for Beginners", 
        description: "Learn JavaScript from scratch and start building your own interactive websites.", 
        instructor: "By John Smith", 
        updated: "Updated November 2022", 
        duration: "3 total hours • 50 lectures • Beginner", 
        rating: "4.5 (789)", 
        price: "d199,000", 
        thumbnail: crs
      },
      // Add more courses here
    ];
  
    return (
        <div className="recommend-container flex" style={{ background: "#d3f2ff", padding: '20px' }}>
          <div className="left-column flex-grow mr-4" style={{ flex: '70%', maxWidth: '70%' }}>
            <Typography variant="h4" className="mb-5 text-left">
              What to learn next
            </Typography>
            <Typography variant="h5" className="mb-3 text-left">
              Our top picks for you
            </Typography>
            {courseMockData.map((course) => (
              <div key={course.id} className="course-card mb-4">
                <Paper elevation={3} className="course-info-wrapper">
                  <div className="p-4 flex">
                    <div className="course-thumbnail mr-4">
                      <img src={course.thumbnail} alt={course.course} className="w-full h-40 object-cover rounded-lg" />
                    </div>
                    <div>
                      <Typography variant="h5" className="text-blue-500 mb-2 text-left">
                        {course.course}
                      </Typography>
                      <Typography variant="body1" className="text-gray-800 mb-2 text-left">
                        {course.description}
                      </Typography>
                      <Typography variant="body1" className="text-gray-500 text-left">
                        {course.instructor}
                      </Typography>
                      <Typography variant="body1" className="text-gray-500 text-left">
                        {course.updated}
                      </Typography>
                      <Typography variant="body1" className="text-gray-500 text-left">
                        {course.duration}
                      </Typography>
                      <Typography variant="body1" className="text-gray-500 text-left">
                        Rating: {course.rating}
                      </Typography>
                      <Typography variant="body1" className="text-gray-500 text-left">
                        Price: {course.price}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </div>
            ))}
          </div>
          <div className="right-column flex-grow" style={{ flex: '30%', maxWidth: '30%', backgroundColor: "#E5E7EB", padding: '20px' }}>
            <Typography variant="h4" className="mb-5 text-left">
              Advertisement
            </Typography>
            {/* Place your advertisement content here */}
          </div>
        </div>
      );
    };
  
  export default RecommendComponent;
  