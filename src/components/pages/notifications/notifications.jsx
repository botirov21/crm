import React, { useState } from "react";
import {
  Blog,
  BlogDetailWrap,
  BlogWrapper,
  Container,
  MainWrapper,
  Title,
} from "./notificationsStyle"; // Adjust import path as needed
import { mockNotification } from "../../mock/notifications"; // Adjust import path as needed

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setSelectedBlogId(notification.id); 
  };

  return (
    <MainWrapper>
      <BlogWrapper>
        <Container>
          {mockNotification.notificationInfo.map((value) => (
            <Blog
              key={value.notification.id} 
              onClick={() => handleNotificationClick(value.notification)}
            >
              <Title>{value.notification.title}</Title>
            </Blog>
          ))}
        </Container>
      </BlogWrapper>
      <BlogDetailWrap>
        {selectedNotification && (
          <div>
            <h2>{selectedNotification.title}</h2>
            <p>{selectedNotification.text}</p>
          </div>
        )}
      </BlogDetailWrap>
    </MainWrapper>
  );
};

export default Notifications;
