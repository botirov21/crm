import styled from "styled-components";
import cardImage from "../../../../../../assets/office-pngs/officeCard.png";
export const CoursesWrapper = styled.div`
  max-width: 70%;
  display: grid;
  grid-template-areas: "a a a";
  gap: 26px;

`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--Color-7, #FFF);
  padding: 5px 5px 16px 5px;
`;
export const CardImage = styled.image`
  background-image: url(${cardImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 170px;
  border-radius: 16px;
`;
export const CardTitle = styled.p`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin: 0px;
  padding-top: 10px;
`;
export const CardPeriod = styled.p`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0px;
  padding-top: 10px;
`;
export const CardPrice = styled.p`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  color: var(--Color-7, #fff);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin: 0px;
  width: 30%;
  margin-top: 20px;
`;
