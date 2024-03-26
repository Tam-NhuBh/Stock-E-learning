import React, { useState } from 'react';
import course1 from '../assets/img/stock.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

// Tách dữ liệu thành biến mock
const mockData = [
    {
        id: 1,
        image: course1,
        name: "Stock Market Course",
        size: "Beginner Level",
        price: "$99.99"
    },
    {
        id: 2,
        image: course1,
        name: "Advanced Stock Trading Techniques",
        size: "Advanced Level",
        price: "$199.99"
    }
];

const Payment = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State để điều khiển hiển thị modal

    // Hàm xử lý đặt hàng
    const handlePlaceOrder = () => {
        // Xử lý logic đặt hàng ở đây
        // Hiển thị modal khi nhấn vào nút "Place Order"
        setShowModal(true);
    };

    const handlePaymentSuccess = () => {
        // Xử lý logic khi thanh toán thành công
        // Đóng modal và điều hướng người dùng đến trang chủ
        setShowModal(false);
        navigate('/userHomepage');
    };

    return (
        <div className="user-payment">
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Check your items</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {mockData.map(item => (
                            <div key={item.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
                                <div className="flex w-full flex-col px-4 py-4 text-left">
                                    <span className="font-semibold">{item.name}</span>
                                    <span className="float-right text-gray-400 ">{item.size}</span>
                                    <p className="text-lg font-bold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your payment details.</p>
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium text-left">Email</label>
                        <div className="relative">
                            <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium text-left">Card Holder</label>
                        <div className="relative">
                            <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium text-left">Card Details</label>
                        <div className="flex">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                            <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium text-left">Billing Address</label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                </div>
                            </div>
                            <select name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option value="State">State</option>
                            </select>

                            <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                        </div>

                        {/* Total */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">$399.00</p>
                            </div>

                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div>
                    </div>
                    <div className="bg-blue-700 px-7 py-2 text-center font-semibold text-lg text-white rounded cursor-pointer mt-6" onClick={handlePlaceOrder}>Place Order</div>
                    {/* Modal hiển thị thông tin nhập liệu tài khoản ngân hàng */}
                    {showModal && (
                        // JSX
                        <Modal
                            open={showModal}
                            onClose={() => setShowModal(false)}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                            className="fixed inset-0 flex items-center justify-center"
                        >
    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <div className="flex justify-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        </div>
        <p className="text-center font-semibold text-lg">Transaction Details</p>
        <div className="mt-4">
            <p className="text-sm font-semibold">Order ID:</p>
            <p className="text-sm">123456789</p>
        </div>
        <div className="mt-2">
            <p className="text-sm font-semibold">Course:</p>
            <p className="text-sm">Stock Market Course</p>
        </div>
        <div className="mt-2">
            <p className="text-sm font-semibold">Quantity:</p>
            <p className="text-sm">1</p> {/* Số lượng khóa học đã mua */}
        </div>
        <div className="mt-2">
            <p className="text-sm font-semibold">Amount:</p>
            <p className="text-sm">$99.99</p>
        </div>
        <div className="flex justify-center mt-6">
            <Button variant="outlined" className="mr-8">Print</Button>
            <Button variant="contained" onClick={handlePaymentSuccess}>OK</Button>
        </div>
    </div>
                        </Modal>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;


