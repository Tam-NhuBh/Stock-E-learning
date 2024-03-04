import CourseComponent from '../../../component/guest/home/CourseComponent';
import BannerComponent from '../../../component/guest/home/BannerComponent';
import PostComponent from '../../../component/guest/home/PostComponent';

import { Grid } from '@mui/material';

export default function GuestHome() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
                <BannerComponent />
            </div>
            <div style={{ flex: 1 }}>
                <CourseComponent />
            </div>
            <div style={{ flex: 1 }}>
                <PostComponent />
            </div>
        </div>
    )
}
