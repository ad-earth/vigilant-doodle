import React, { useState } from "react";
import WishCard from "../../components/myPage/WishCard";
import styled from "styled-components";

const Wish = () => {
  const [state, setState] = useState(null);
  return (
    <Section>
      <OrderListBox>
        <Title>
          위시리스트 <span>5</span>
        </Title>
        <CardContent>
          {state === null && <DataNull>위시리스트가 없습니다.</DataNull>}
          {["1", "2", "3", "4", "5"].map((data, i: number) => (
            <List key={i}>
              <WishCard />
            </List>
          ))}
        </CardContent>
      </OrderListBox>
    </Section>
  );
};

export default Wish;

const Section = styled.div``;
const OrderListBox = styled.div``;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 10px 0;
  & span {
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fc11};
    line-height: 20px;
    color: ${({ theme }) => theme.fc01};
    background-color: #${({ theme }) => theme.bg11};
    border-radius: 100%;
    border-color: ${({ theme }) => theme.ls11};
    display: inline-block;
    margin-left: 10px;
    padding: 0;
  }
`;
const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const List = styled.div`
  max-width: 25%;
  @media (max-width: 990px) {
    max-width: 50%;
  }
`;
const DataNull = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
`;
