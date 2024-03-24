import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import SidemapShopping from '../component/SidemapShopping';
import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

const ShoppingMap = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(location.pathname === '/cart' ? 'Shop' : 'Payment');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Mock check if user is logged in
        const userIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (userIsLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setShowModal(true); // Show modal if user is not logged in
        }
    }, []);

    // Mock function to simulate login
    const login = () => {
        setIsLoggedIn(true);
        // Chuyển hướng đến trang ShoppingMap sau khi đăng nhập
        navigate('/cart', { replace: true });
    };

    // Function to handle closing Modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleTabChange = (tab:any) => {
        setSelectedTab(tab);
        navigate(tab === 'Shop' ? '/cart' : '/payment', { replace: true });
    };

    return (
        <div className='shopping-map'>
            <SidemapShopping selectedTab={selectedTab} setSelectedTab={handleTabChange} />

            <motion.div
                className="transition-transform transform"
                initial={{ translateX: selectedTab === 'Shop' ? '-100%' : 0 }}
                animate={{ translateX: selectedTab !== 'Payment' ? 0 : '-100%' }}
                transition={{ duration: 0.2 }}
            >
                {selectedTab !== 'Payment' && isLoggedIn && <Cart />}
            </motion.div>

            <motion.div
                className="transition-transform transform"
                initial={{ translateX: '100%' }}
                animate={{ translateX: selectedTab === 'Payment' ? 0 : '100%' }}
                transition={{ duration: 0.2 }}
            >
                {selectedTab === 'Payment' && isLoggedIn && <Payment />}
            </motion.div>

            {/* Show login modal if user is not logged in */}
            {!isLoggedIn && showModal && (
                <Modal
                    open={showModal}
                    onClose={handleCloseModal}
                    aria-labelledby="login-modal-title"
                    aria-describedby="login-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'white',
                        p: 3,
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div className="px-7 py-2 text-center font-semibold text-lg text-black rounded ">
                            Please log in to see this feature!
                        </div>

                        <div className="bg-blue-700 px-7 py-2 text-center font-semibold text-lg text-white rounded cursor-pointer" onClick={login} style={{ marginTop: '20px' }}>
                            Sign In
                        </div>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default ShoppingMap;
