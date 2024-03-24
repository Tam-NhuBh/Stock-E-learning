import { useState } from "react";
import crs from "../assets/img/hoc-chung-khoan-hcm-tot-nhat-18-2.jpeg";
import "../assets/styles/Course.css";
import mapstock from "../assets/img/trend.jpg";

const CourseRecommendation = () => {
  const [paidForCourse, setPaidForCourse] = useState(false); // State để kiểm soát việc hiển thị khung chứng khoán

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
    },
    {
      id: 4,
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
    <div className="recommend-component">
      <div className="recommend-container flex" style={{ background: "#d3f2ff", padding: '20px' }}>
        <div className="left-column flex-grow-2 mr-4" style={{ height: '100%' }}>
          <h4 className="mb-3 text-left text-2xl font-bold">What to learn next</h4>
          <h5 className="mb-3 text-left text-xl font-semibold">Our top 5 picks for you</h5>
          {courseMockData.map((course) => (
            <div key={course.id} className="course-card mb-4">
              <div className="course-info-wrapper p-4 flex border border-gray-300 rounded-lg shadow-md"  style={{background: "#fff"}}>
                <div className="course-thumbnail mr-4">
                  <img src={course.thumbnail} alt={course.course} className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div>
                  <h5 className="text-blue-500 mb-2 text-left text-lg font-semibold">{course.course}</h5>
                  <p className="text-gray-800 mb-2 text-left">{course.description}</p>
                  <p className="text-gray-500 mb-1 text-left">{course.instructor}</p>
                  <p className="text-gray-500 mb-1 text-left">{course.updated}</p>
                  <p className="text-gray-500 mb-1 text-left">{course.duration}</p>
                  <p className="text-gray-500 mb-1 text-left">Rating: {course.rating}</p>
                  <p className="text-gray-500 mb-1 text-left">Price: {course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-column flex-grow" style={{ height: '100%' }}>
          <h4 className="mb-5 text-left text-2xl font-bold">Stock Market Prediction Information</h4>
          {paidForCourse && (
            <div className="stock-predict-container flex-grow p-6" style={{ background: "#f0f0f0", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <img src="{mapstock}" alt="stock-map-prediction" className="grid-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseRecommendation;
