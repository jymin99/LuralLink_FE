import React from "react";
import styled from "styled-components";
import Header from "../layout/header";
import Ad from "../assets/advertisement.png";
import Cartoon from "../assets/cartoon.png";
import Poster from "../assets/poster.png";
import Footer from "../layout/footer";
import PromptIcon from "../assets/prompt.png";

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const BodyContainer = styled.div`
  padding: 22px;
`;
const MyTicket = styled.text`
  display: flex;
  justify-content: end;
  color: #000;
  text-align: right;
  /* font-family: NanumGothic; */
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 19px;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 23px;
`;
const AdImage = styled.img`
  width: 94px;
  height: 97px;
`;
const PosterImage = styled.img`
  width: 94px;
  height: 97px;
`;
const CartoonImage = styled.img`
  width: 94px;
  height: 97px;
`;
const RatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
`;
const RatioText = styled.text`
  color: #000;
  font-family: NanumGothic;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  text-align: start;
`;
const Ratio = styled.div`
  width: 173px;
  height: 29px;
  border-radius: 10px;
  border: 1px solid #8a8a8a;
`;

const ImageContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 268px;
  background-color: #f3f3f3;
  margin-bottom: 18px;
`;
const PromptContainer = styled.div`
padding: 19px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 99px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5.7px 3px rgba(0, 0, 0, 0.1);
`;
const PromptName = styled.text`
display: flex;
color: #8A8A8A;
text-align: center;
font-family: NanumGothic;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;
`;
const TextContainer = styled.div`
`;
const PromptText = styled.input`
  border: none;
  width: 256px;
  height: 34px;
  max-width: 256px;
`;
const PromptButton = styled.img`
  width: 39px;
  height: 39px;
`;

const CreatePage: React.FC = () => {
  return (
    <CreatePageContainer>
      <Header></Header>
      <BodyContainer>
        <MyTicket>나의 이용권 3</MyTicket>
        <CategoryContainer>
          <AdImage src={Ad} alt="advertise_button" />
          <PosterImage src={Poster} alt="poster_button" />
          <CartoonImage src={Cartoon} alt="cartoon_button" />
        </CategoryContainer>
        <RatioContainer>
          <RatioText>가로세로비율</RatioText>
          <Ratio></Ratio>
        </RatioContainer>
        <ImageContainer></ImageContainer>
        <PromptContainer>
          <TextContainer>
            <PromptName>프롬프트</PromptName>
            <PromptText placeholder="요청사항을 입력하세요"></PromptText>
          </TextContainer>
          <PromptButton src={PromptIcon} />
        </PromptContainer>
      </BodyContainer>
      <Footer></Footer>
    </CreatePageContainer>
  );
};
export default CreatePage;
