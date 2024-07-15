import React from "react";
import {
  CardImage,
  CardPeriod,
  CardPrice,
  CardTitle,
  CourseCard,
  CoursesWrapper,
} from "./coursesStyle";
import { mockCourse } from "../../../../../mock/setting-office/courses";

const Courses = () => {
  const allData = mockCourse.courseInfo;
  return (
    <CoursesWrapper>
      {allData.map((value, key) => (
        <CourseCard key={key}>
          <CardImage />
          <CardTitle>{value.course.name}</CardTitle>
          <CardPeriod>{value.course.period}</CardPeriod>
          <CardPrice>{value.course.price}</CardPrice>
        </CourseCard>
      ))}
    </CoursesWrapper>
  );
};

export default Courses;
