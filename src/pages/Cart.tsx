import React, { useState } from 'react';

const Cart = () => {
    const mockData = [
        {
            id: 1,
            name: "Product 1",
            price: 19.99,
            quantity: 1,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Product 2",
            price: 29.99,
            quantity: 1,
            image: "https://via.placeholder.com/150"
        },
        // Thêm các sản phẩm khác nếu cần
    ];


    const [cartItems, setCartItems] = useState(mockData);

    // Hàm xử lý thay đổi số lượng sản phẩm
    const handleQuantityChange = (itemId: number, newQuantity: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    // Hàm tính tổng tiền
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };

    return (
        <div className='user-cart'>
            <div className=" h-screen py-4">
                <div className="container mx-auto px-4">               
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold sm:w-1/3">Product</th>
                                            <th className="text-left font-semibold sm:w-1/6">Price</th>
                                            <th className="text-left font-semibold sm:w-1/6">Quantity</th>
                                            <th className="text-left font-semibold sm:w-1/6">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.id}>
                                                <td className="py-4 sm:w-1/3">
                                                    <div className="flex items-center">
                                                        <img className="h-16 w-16 mr-4" src={item.image} alt="Product image" />
                                                        <span className="font-semibold">{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 sm:w-1/6">${item.price.toFixed(2)}</td>
                                                <td className="py-4 sm:w-1/6">
                                                    <div className="flex items-center">
                                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="border rounded-md py-2 px-4 mr-2">-</button>
                                                        <span className="text-center w-8">{item.quantity}</span>
                                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="border rounded-md py-2 px-4 ml-2">+</button>
                                                    </div>
                                                </td>
                                                <td className="py-4 sm:w-1/6">${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                                <div className="bg-blue-700 px-7 py-2 text-center font-semibold text-lg text-white rounded">Checkout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
