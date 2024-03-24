import { useState, useEffect } from "react";
import { Typography, IconButton, Button, Paper, Grid } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import crs from "../assets/img/hoc-chung-khoan-hcm-tot-nhat-18-2.jpeg"

const StudyReminder: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [user, setUser] = useState<string | null>("John Doe"); // Set tĩnh tên user
  const navigate = useNavigate();

  const videoMockData = [
    { id: 1, course: "Course 1", title: "First Video Title", thumbnail: crs, time: "2 minutes" },
    { id: 2, course: "Course 2", title: "Second Video Title", thumbnail: crs, time: "2 minutes" },
    { id: 3, course: "Course 3", title: "Third Video Title", thumbnail: crs, time: "2 minutes" },
    { id: 4, course: "Course 4", title: "Fourth Video Title", thumbnail: crs, time: "2 minutes" },
    { id: 5, course: "Course 5", title: "Fifth Video Title", thumbnail: crs, time: "2 minutes" },
    { id: 6, course: "Course 6", title: "Sixth Video Title", thumbnail: crs, time: "6 minutes" },
    { id: 7, course: "Course 7", title: "Seventh Video Title", thumbnail: crs, time: "8 minutes" },
    { id: 8, course: "Course 8", title: "Eighth Video Title", thumbnail: crs, time: "2 hours" },
    { id: 9, course: "Course 9", title: "Ninth Video Title", thumbnail: crs, time: "10 minutes" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số của khung chứa hiện tại đang được hiển thị

  const handleNext = () => {
    if (currentIndex < videoMockData.length - 1) {
      setCurrentIndex(currentIndex + 1); // Tăng chỉ số lên một
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Giảm chỉ số đi một
    }
  };

  const handleMyLearningClick = () => {
    navigate("/myCourse/learning/");
  };

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="remind-component" style={{background:'#f9f9f9'}}>
        <div className="left-column flex-grow">
          <div className="flex flex-col items-start pl-4">
            <h4 className="mb-3 text-left text-2xl font-bold" style={{ marginTop:'15px'}}>
              Let's start learning,{" "}
              <span className="text-blue-500 font-bold">{user}</span>
            </h4>

            <h5
              className="font-semibold text-blue-500 mb-4 hover:text-blue-700 flex items-center"
              onClick={handleMyLearningClick}
              style={{ textDecoration: 'underline', fontSize: "20px", textTransform: 'capitalize', cursor:'pointer' }}
            >
              <span className="mr-1">My learning</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.061 16.37c.211.472.789.472 1 0l5.66-12.68c.21-.473-.053-1.034-.532-1.147L4.473.201C3.993.088 3.516.55 3.728 1.022l5.333 12.08z" clipRule="evenodd" />
              </svg>
            </h5>
            
            <Grid container style={{ height: "15vh", padding: "4px", flex: 1}}>
              <Grid item xs={12} style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <div className="video-thumbnail mb-3 relative overflow-hidden border border-gray-300 rounded-lg shadow-md" style={{ flex: "1 1 auto" }}>
                  <div className="flex">
                    <div className="wrapper p-4 flex-shrink-0">
                      <img src={videoMockData[currentIndex].thumbnail} alt={videoMockData[currentIndex].title} className="w-40 h-auto rounded-t-lg" />
                    </div>
                    <div className="p-4 flex-grow text-center">
                      <h5 className="text-blue-500 mb-2 text-lg font-semibold">
                        {videoMockData[currentIndex].course}
                      </h5>
                      <p className="text-gray-800 mb-2">
                        {videoMockData[currentIndex].title}
                      </p>
                      <p className="text-gray-800 mb-2">
                        {videoMockData[currentIndex].time}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", top: "35%", transform: "translateY(-50%)", left: "1px" }}>
                  <IconButton onClick={handlePrev} disabled={currentIndex === 0}style={{ position: "fixed", left: 0 }}>
                    <ArrowBackIosIcon />
                  </IconButton>
                </div>
                <div style={{ position: "absolute", top: "35%", transform: "translateY(-50%)", right: "1px" }}>
                  <IconButton onClick={handleNext} disabled={currentIndex === videoMockData.length - 1} style={{ position: "fixed", right: 0 }}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
    </div>

  );
};

export default StudyReminder;
