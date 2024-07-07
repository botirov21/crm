import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { Blog, BlogWrapper, MainWrapper, Title } from './notificationsStyle';
import { mockNotification } from '../../mock/notifications';
import NotificationsDetail from './notificationsDetail';

const Notifications = () => {
    const allData = mockNotification.notificationInfo;

    return (
        <MainWrapper>
            <BlogWrapper>
                {allData.map((value) => (
                    <Link to={`/notifications/${value._id}`} key={value._id}>
                        <Blog>
                            <Title>{value.notification.title}</Title>
                        </Blog>
                    </Link>
                ))}
            </BlogWrapper>
            <Routes>
                <Route path="/notifications/:id" element={<NotificationsDetail allData={allData} />} />
            </Routes>
        </MainWrapper>
    );
};

export default Notifications;
