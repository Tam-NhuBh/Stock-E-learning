import React from 'react';
import './sitenavStyle.css';
import { FaChalkboardTeacher, FaMailBulk, FaChartLine, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

const Sitenav: React.FC = () => {
  return (
    <div className="instructor-side-nav">
      <div className="side-nav--content">
        <ul>
          <li>
            <a href="/instructor" className="nav-link">
              <IoMdSchool />
              <span className="link-text">Instructor</span>
            </a>
          </li>
          <li>
            <a href="/instructor/courses" className="nav-link">
              <FaChalkboardTeacher />
              <span className="link-text">Courses</span>
            </a>
          </li>
          <li>
            <a href="/instructor/communication/qa/" className="nav-link">
              <FaMailBulk />
              <span className="link-text">Communication</span>
            </a>
          </li>
          <li>
            <a href="/instructor/performance/overview" className="nav-link">
              <FaChartLine />
              <span className="link-text">Performance</span>
            </a>
          </li>
          <li>
            <a href="/instructor/tools" className="nav-link">
              <FaTools />
              <span className="link-text">Tools</span>
            </a>
          </li>
          <li>
            <a href="/instructor/help" className="nav-link">
              <FaQuestionCircle />
              <span className="link-text">Resources</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sitenav;
