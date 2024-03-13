import React from "react";
import BannerComponent from '../../../component/BannerComponent';
import DeadlineComponent from "../../../component/DeadlineComponent";
import RecommendComponent from "../../../component/RecommendComponent";
import CourseComponent from "../../../component/CourseComponent";
import PostComponent from "../../../component/PostComponent";

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
                <div style={{ flex: 1 }}>
                    <BannerComponent />
                </div>

                {/* Khung hiển thị khóa học */}
                <div style={{ flex: 1 }}>
                    <DeadlineComponent />
                </div>

                <div style={{ flex: 1 }}>
                    <RecommendComponent />
                </div>

                <div style={{ flex: 1 }}>
                    <CourseComponent />
                </div>

                <div style={{ flex: 1 }}>
                    <PostComponent />
                </div>
            </div>
        </div>
    );
};

export default UserHome;
