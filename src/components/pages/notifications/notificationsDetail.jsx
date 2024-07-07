import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailWrapper, DetailTitle, DetailContent, BlogDetailWrap, Title } from './notificationsStyle'; // Adjust styles as needed

const NotificationsDetail = ({ allData }) => {
    const { id } = useParams();
    const selectedNotification = allData.find((item) => item._id === id);

    if (!selectedNotification) {
        return <BlogDetailWrap>Select a notification to view its details.</BlogDetailWrap>;
    }

    return (
        <BlogDetailWrap>
            <Title>{selectedNotification.notification.title}</Title>
            <Title>{selectedNotification.notification.content}</Title>
        </BlogDetailWrap>
    );
};

export default NotificationsDetail;
