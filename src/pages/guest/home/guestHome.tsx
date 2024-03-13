import CourseComponent from '../../../component/CourseComponent';
import BannerComponent from '../../../component/BannerComponent';
import PostComponent from '../../../component/PostComponent';

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
