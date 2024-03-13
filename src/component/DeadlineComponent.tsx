import { useState, useEffect } from "react";
import { Typography, IconButton, Button, Paper } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import crs from "../assets/img/hoc-chung-khoan-hcm-tot-nhat-18-2.jpeg"
// interface User {
//   _id: string;
//   // Define other user properties here
// }

// interface Video {
//   title: string;
//   thumbnail: string;
//   // Define other video properties here
// }

const DeadlineComponent: React.FC = () => {
  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  // const [videoData, setVideoData] = useState<Video[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userData = JSON.parse(localStorage.getItem("user") || "{}");
  //       if (!userData._id) {
  //         throw new Error("User data not found in localStorage.");
  //       }
  //       // Assume findUser is an API call to fetch user data
  //       const res = await findUser(userData._id);
  //       setCurrentUser(res.data);
  //     } catch (error) {
  //       setError((error as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  // useEffect(() => {
  //   if (currentUser) {
  //     const fetchVideoData = async () => {
  //       try {
  //         // Assume getVideoDataByUserId is an API call to fetch video data by user ID
  //         const data = await getVideoDataByUserId(currentUser._id);
  //         setVideoData(data);
  //       } catch (error) {
  //         setError((error as Error).message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchVideoData();
  //   }
  // }, [currentUser]);

  // if (loading) {
  //   return <div className="flex justify-center items-center h-screen">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  // }

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
  
  const displayVideos = videoMockData.slice(startIndex, startIndex + 2);

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 2, videoMockData.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 2, 0));
  };

  const handleMyLearningClick = () => {
    navigate("/myCourse/learning/");
  };

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`); 
  };

  return (
    <div className="page-container">
      <div className="deadline-container flex">
        <div className="left-column flex-grow">
          <div className="flex flex-col items-start pl-4">
            <Typography variant="h4" className="mb-5 text-left">
              Let's start learning,{" "}
              <span className="text-blue-500 font-bold">{user}</span>
            </Typography>
            <Button
              className="font-semibold text-blue-500 hover:text-blue-700 flex items-center"
              onClick={handleMyLearningClick}
              style={{ textDecoration: 'underline', fontSize: "20px", textTransform: 'capitalize' }}
            >
              <span className="mr-1">My learning</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.061 16.37c.211.472.789.472 1 0l5.66-12.68c.21-.473-.053-1.034-.532-1.147L4.473.201C3.993.088 3.516.55 3.728 1.022l5.333 12.08z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="right-column flex-grow flex">
          <div className="deadline-component flex items-center flex-grow">
            {startIndex > 0 && (
              <IconButton
                className="text-blue-500 hover:text-blue-700"
                onClick={handlePrev}
              >
                <ArrowBackIosIcon />
              </IconButton>
            )}
            <div className="flex justify-between w-full space-x-6">
              {displayVideos.map((video, index) => (
                <div
                  key={index}
                  className="video-card flex-shrink-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
                >
                  <Paper
                    elevation={3}
                    className="video-info-wrapper border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 mb-4 cursor-pointer"
                    style={{ minHeight: '400px'}}
                    onClick={() => handleVideoClick(`${video.id}`)}
                  >
                    <div className="video-thumbnail mb-2">
                      <div className="wrapper p-4">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded-t-lg" />
                      </div>
                      <div className="p-4">
                        <Typography variant="h5" className="text-blue-500 mb-2">
                          {video.course}
                        </Typography>
                        <Typography variant="body1" className="text-gray-800 mb-2">
                          {video.title}
                        </Typography>
                        <Typography variant="body1" className="text-gray-500 ">
                          {video.time}
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </div>
              ))}
            </div>
            {startIndex < videoMockData.length - 4 && (
              <div style={{ marginLeft: '20px' }}>
                <IconButton
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadlineComponent;

