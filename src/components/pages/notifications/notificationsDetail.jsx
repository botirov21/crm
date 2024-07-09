import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogDetailWrap, Title } from './notificationsStyle';

const NotificationsDetail = ({ allData }) => {
    const { id } = useParams();
    const selectedNotification = allData.find((item) => item._id === id);

    if (!selectedNotification) {
        return (
            <BlogDetailWrap>
                <Title>Select a notification to view its details.</Title>
            </BlogDetailWrap>
        );
    }

    return (
        <BlogDetailWrap>
            <Title>{selectedNotification.notification.title}</Title>
            <p>{selectedNotification.notification.content}</p>
        </BlogDetailWrap>
    );
};

export default NotificationsDetail;
