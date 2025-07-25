import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../css/LessonFree.css';

const LessonFree = () => {
  const [activeTab, setActiveTab] = useState('free');

  // Sample video data
  const videoLessons = [
    {
      id: 1,
      title: 'Үнэгүй хичээл',
      category: '1 хичээл',
      instructor: 'Он багшаас',
      date: 'Өчүү нар хойно 09:05:2023 20:00',
      thumbnail: '/api/placeholder/240/135',
      duration: '45:30',
      isLive: false
    },
    {
      id: 2,
      title: 'Үнэгүй хичээл',
      category: '2 хичээл',
      instructor: 'Он багшаас',
      date: 'Бүтээл хоёрдугаар 01:06:2023 20:00',
      thumbnail: '/api/placeholder/240/135',
      duration: '32:15',
      isLive: false
    },
    {
      id: 3,
      title: 'Үнэгүй хичээл',
      category: '3 хичээл',
      instructor: 'Он багшаас',
      date: 'Бүтээл хоёрдугаар 15:05:2023 20:00',
      thumbnail: '/api/placeholder/240/135',
      duration: '28:45',
      isLive: true
    }
  ];

  const tabs = [
    { id: 'free', label: 'Үнэгүй хичээл' },
    { id: 'paid', label: 'Худалдаж авсан' }
  ];

  const handleVideoClick = (video) => {
    console.log('Playing video:', video.title);
    // Add video player logic here
  };

  return (
    <div className="lesson-free-page">
      <Sidebar />
      
      <div className="main-content">
        <div className="content-header">
          <div className="header-top">
            <div className="page-title">
              <span className="title-icon">📚</span>
              <span>хичээл</span>
            </div>
            <div className="notification-icon">
              <span>🔔</span>
            </div>
          </div>
          
          <div className="tabs-container">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="content-body">
          {activeTab === 'free' && (
            <div className="video-grid">
              {videoLessons.map(video => (
                <div 
                  key={video.id} 
                  className="video-card"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="video-thumbnail">
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                    {video.isLive && (
                      <div className="live-badge">LIVE</div>
                    )}
                    <div className="video-duration">{video.duration}</div>
                  </div>
                  
                  <div className="video-info">
                    <div className="video-category">{video.category}</div>
                    <h3 className="video-title">{video.title}</h3>
                    <div className="video-meta">
                      <p className="video-instructor">{video.instructor}</p>
                      <p className="video-date">{video.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'paid' && (
            <div className="empty-state">
              <div className="empty-icon">📹</div>
              <h3>Худалдаж авсан хичээл байхгүй</h3>
              <p>Та одоогоор ямар нэгэн хичээл худалдаж аваагүй байна.</p>
              <button className="browse-button">Хичээл үзэх</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonFree;