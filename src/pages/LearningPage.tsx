import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button, Tabs, Tab, Paper } from "@mui/material";
import course1 from '../assets/img/stock.jpg';
import RegisteredCoursesList from "../component/RegisteredCoursesList";

const LearningPage = () => {
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Số khóa học mỗi trang

    const courses = [
        { id: 1, title: "Introduction to Stock Market", price: 5500, oldPrice: 6500, image: course1 },
        { id: 2, title: "Technical Analysis Masterclass", price: 6500, oldPrice: 7500, image: course1 },
        { id: 3, title: "Options Trading Basics", price: 6000, oldPrice: 7000, image: course1 },
        { id: 4, title: "Fundamental Analysis Fundamentals", price: 7000, oldPrice: 8000, image: course1 },
        { id: 5, title: "Day Trading Strategies", price: 7500, oldPrice: 8500, image: course1 },
        { id: 6, title: "Risk Management in Stock Trading", price: 6000, oldPrice: 7000, image: course1 },
        { id: 7, title: "Swing Trading Essentials", price: 6500, oldPrice: 7500, image: course1 },
        { id: 8, title: "Candlestick Patterns and Their Meanings", price: 7000, oldPrice: 8000, image: course1 },
        // Add more courses here
    ];

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };

    return (
        <div className="learning-page" style={{ minHeight: '25vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div className="tabs-container" style={{ zIndex: 1, backgroundColor: '#f0f0f0', padding: '20px'}}>
                <Typography variant="h4" style={{ margin: 0, padding: 0, fontFamily: 'Arial', fontSize: '55px', marginTop: '27px', marginBottom:'25px', fontWeight: 'bold', color: '#2196F3', textAlign:'left' }}>My Learning</Typography>

                <Tabs value={value} onChange={handleChange} style={{ zIndex: 2 }}>
                    <Tab label="All Courses" style={{ textTransform: "none" }} />
                    <Tab label="My Lists" style={{ textTransform: "none" }} />
                    <Tab label="Certification" style={{ textTransform: "none" }} />
                </Tabs>
            </div>
            <div style={{ flexGrow: 1, position: 'relative' }}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {value === 0 && (
                            <div>
                                {/* Content for All Courses tab */}
                                <RegisteredCoursesList/>
                                
                            </div>
                        )}
                        {value === 1 && (
                            <div>
                                {/* Content for My Lists tab */}
                            </div>
                        )}
                        {value === 2 && (
                            <div>
                                {/* Content for Certification tab */}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default LearningPage;
