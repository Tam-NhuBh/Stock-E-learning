import React from 'react';
import Sitenav from '../sitenav';
import './BasicInformation.css'; // Make sure to include the CSS file

const BasicInformation: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <Sitenav />
            <div className="flex-grow bg-white p-6 overflow-auto">
                <div className="bg-white shadow rounded-lg p-6">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" defaultValue="Hùng" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" defaultValue="Phạm Văn Mạnh" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="headline">
                                Headline
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="headline" type="text" defaultValue="Instructor at Udemy" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="biography">
                                Biography
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="biography" defaultValue="" />

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="language">
                                Language
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="language">
                                    <option>English (US)</option>
                                    {/* Other language options */}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0l3.908 3.747 3.908-3.747c.533-.481 1.141-.446 1.576 0 .436.445.408 1.197 0 1.615l-4.695 4.502c-.217.223-.502.335-.787.335s-.57-.112-.788-.335l-4.695-4.502c-.408-.418-.436-1.17 0-1.615z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">

                            {/* Website Input */}
                            <div className='w-full'>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                    Website
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                        http://
                                    </span>
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                        placeholder="www.example.com"
                                    />
                                </div>
                            </div>


                            {/* Twitter Input */}
                            <div className='w-full'>
                                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mt-4">
                                    Twitter
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                        http://twitter.com/
                                    </span>
                                    <input
                                        type="text"
                                        name="twitter"
                                        id="twitter"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                        placeholder="username"
                                    />
                                </div>
                            </div>

                            {/* facebook Input */}
                            <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mt-4">
                                Youtube
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                    http://youtube.com/
                                </span>
                                <input
                                    type="text"
                                    name="youtube"
                                    id="youtube"
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="username"
                                />
                            </div>
                            {/* facebook Input */}
                            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mt-4">
                                Facebook
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                    http://facebook.com/
                                </span>
                                <input
                                    type="text"
                                    name="facebook"
                                    id="facebook"
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="username"
                                />
                            </div>
                            {/* Linkedin Input */}
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mt-4">
                                Linkedin
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                    http://linkedin.com/
                                </span>
                                <input
                                    type="text"
                                    name="linkedin"
                                    id="linkedin"
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="username"
                                />
                            </div>




                        </div>
                        {/* Save Button */}
                        <div className="px-3 text-right w-full">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BasicInformation;
