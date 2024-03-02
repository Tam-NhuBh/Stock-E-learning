import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

// interface Course {
//   title: string;
//   price: number;
//   oldPrice: number;
//   // Add other properties as needed
//}

const GuestCourseDetail = () => {
  // const { courseId } = useParams<{ courseId: string }>();
  // const [course, setCourse] = useState<Course | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCourseDetails = async () => {
  //     try {
  //       const response = await fetch(`/api/courses/${courseId}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch course details');
  //       }
  //       const data: Course = await response.json();
  //       setCourse(data);
  //       setLoading(false);
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourseDetails();
  // }, [courseId]);

  // if (loading) {
  //   return <Typography>Loading...</Typography>;
  // }

  // if (error) {
  //   return <Typography>Error: {error}</Typography>;
  // }

  // if (!course) {
  //   return <Typography>No course found</Typography>;
  // }

  return (
    <div>
      <Typography variant="h3">title</Typography>
    </div>
  );
};

export default GuestCourseDetail;
