import React, { useState } from 'react';
import { Grid, Card, Typography, Checkbox, FormControlLabel, Pagination } from '@mui/material';
import adsBanner from '../../../assets/img/banner.png';
import '../../../assets/styles/Course.css'; // Import the CSS file

const GuestCourseDetail = () => {
  const [checked, setChecked] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState(false);
  const [price, setPrice] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState(1);
  const tuitionPerPage = 10;
  
  const handleCheckboxChange = (event:any) => {
    setChecked(event.target.checked);
  };

  const handleCheckboxChangeFilter = (event:any) => {
    setChecked(event.target.checked);
  };


  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };

  const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

  return (
    <div style={{ backgroundColor: '#d3f2ff' }}>
      <div className="container mx-auto" style={{ height: 'auto' }}>
        {/* ads */}
        <div className="ads py-8">
          <img className="rounded-xl" src={adsBanner} alt="ads" style={{ borderRadius: '10px' }} />
        </div>

        {/* courses page Layouts */}
        <main className="relative">
          <div className="flex flex-col bg-white p-4 mr-6 rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <Typography variant="h5" component="h2" className="text-lg font-medium">
                Sort By
              </Typography>
              <div className="flex flex-col mt-2 space-y-2">
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                  label="New"
                />
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                  label="Old"
                />
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                  label="Upcoming"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <Typography variant="h5" component="h2" className="text-lg font-medium">
                Filtered By
              </Typography>
              <div className="flex flex-col mt-2 space-y-2">
                <FormControlLabel
                  control={<Checkbox checked={checkedFilter} onChange={handleCheckboxChangeFilter} />}
                  label="All"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkedFilter} onChange={handleCheckboxChangeFilter} />}
                  label="Sales"
                />

              </div>
            </div>

            
            <div className="flex flex-col mb-4">
              <Typography variant="h5" component="h2" className="text-lg font-medium">
                Filtered By Price
              </Typography>
                <div className="flex flex-col mt-2 space-y-2">
                    <div className="flex justify-between text-xs text-gray-600">
                        <span>Rs.0</span>
                        <span>Rs.{price}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="12000"
                        value={price}
                        className="w-full border-none outline-none"
                        onChange={handlePriceChange}
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 gap-5 my-6 mt-10">
                <div className="tuitionBanner h-[250px] bg-gray-600  w-full">
                    <h2 className="text-white font-semibold text-2xl pt-10 text-center">Available Tutions</h2>
                </div>
                           

                           
                        </div>
                        
                            {/* <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(50 / tuitionPerPage)}
                            onPageChange={handlePageChange}
                                /> */}

                        
        </div>
        </main>
      </div>
    </div>
  );
};

export default GuestCourseDetail;
