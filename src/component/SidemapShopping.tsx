import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const SidemapShopping = () => {
    const [selectedTab, setSelectedTab] = useState('Shop'); // Sử dụng state để lưu trạng thái lựa chọn

    return (
        <div className='sidemap-shopping'>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" className="text-blue-800 flex items-center hover:text-blue-600 transition-colors duration-300">
                    <FaSpinner className="text-5xl animate-spin" />
                </a>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            {/* Sử dụng motion.div cho từng tab để thêm hiệu ứng chuyển động */}
                            <motion.div 
                                className={`flex items-center space-x-3 text-left sm:space-x-4 cursor-pointer`}
                                onClick={() => setSelectedTab('Shop')} // Đặt lựa chọn khi nhấp vào
                                whileHover={{ scale: 1.1 }} // Hiệu ứng khi hover
                                whileTap={{ scale: 0.9 }} // Hiệu ứng khi click
                            >
                                <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white ${selectedTab === 'Shop' ? 'bg-gray-600 ring ring-gray-600 ring-offset-2' : 'bg-gray-400'}`}>1</div>
                                <span className="font-semibold text-gray-900">Shop</span>
                            </motion.div>
                            {/* Tương tự cho các tab khác */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidemapShopping;
