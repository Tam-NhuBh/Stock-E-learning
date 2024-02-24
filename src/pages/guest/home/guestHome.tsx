import CourseComponent from '../../../component/guest/home/CourseComponent';
import BannerComponent from '../../../component/guest/home/BannerComponent';
import PostComponent from '../../../component/guest/home/PostComponent';

import { Grid } from '@mui/material';

export default function guestHome() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <BannerComponent />
            </Grid>
            <Grid item xs={12}>
                <CourseComponent />
            </Grid>
            <Grid item xs={12}>
                <PostComponent />
            </Grid>
        </Grid>
    )
}
