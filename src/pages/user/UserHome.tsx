import React from "react";
import Banner from '../../component/Banner';
import StudyReminder from "../../component/StudyReminder";
import CourseRecommendation from "../../component/CourseRecommendation";
import SalesCourse from "../../component/SalesCourse";
import Newsfeed from "../Newsfeed";

const UserHome = () => {
    // Dữ liệu tĩnh cho các khóa học
    const courses = [
        { id: 1, title: "Khóa học 1", description: "Mô tả khóa học 1" },
        { id: 2, title: "Khóa học 2", description: "Mô tả khóa học 2" },
        { id: 3, title: "Khóa học 3", description: "Mô tả khóa học 3" },
    ];

    return (
        <div className="user-homepage">
           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{  flex: 1 }}>
                    <Banner />
                </div>

                {/* Khung hiển thị khóa học */}
                <div style={{ flex: 1 }}>
                    <StudyReminder />
                </div>

                <div style={{ flex: 1 }}>
                    <CourseRecommendation />
                </div>

                <div style={{ flex: 1 }}>
                    <SalesCourse />
                </div>

                <div style={{ flex: 1 }}>
                    <Newsfeed />
                </div>
            </div>
        </div>
    );
};

export default UserHome;
