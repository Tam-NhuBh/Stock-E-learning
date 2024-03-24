import SalesCourse from '../../component/SalesCourse';
import Banner from '../../component/Banner';
import Newsfeed from '../Newsfeed';

import { Grid } from '@mui/material';

export default function GuestHome() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
                <Banner />
            </div>
            <div style={{ flex: 1 }}>
                <SalesCourse />
            </div>
            <div style={{ flex: 1 }}>
                <Newsfeed />
            </div>
        </div>
    )
}
