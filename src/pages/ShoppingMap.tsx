import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SidemapShopping from '../component/SidemapShopping';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import { useLocation } from 'react-router-dom';

const ShoppingMap = () => {
    const location = useLocation(); // Lấy vị trí hiện tại của trang

    return (
        <div className='shopping-map'>
           <SidemapShopping/>
           <AnimatePresence exitBeforeEnter>
               {/* Sử dụng motion.div để áp dụng hiệu ứng chuyển động */}
               <motion.div 
                   initial={{ opacity: 0 }} // Trạng thái ban đầu
                   animate={{ opacity: 1 }} // Hiển thị khi chuyển động
                   exit={{ opacity: 0 }} // Ẩn đi khi thoát
               >
                   <Cart/>
                   <Payment/>

               </motion.div>
           </AnimatePresence>
        </div>
    );
};

export default ShoppingMap;
