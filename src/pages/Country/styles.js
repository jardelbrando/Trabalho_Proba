import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  background-color:#65c9c1;
  color: white;
  font-size: 20px;
  font-weigth: ligther;
  padding: 20px;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const RigthContent = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex: 3;
  background-color: red;
  flex-direction: column;
`;

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  background-color: blue;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: lighter;
`;

export const LeftCard= styled.div`
  height: 12vh;
  width: 60%;
  display: flex;
  background-color: #65c9c1;
  border-radius: 5px;
  color: white;
  font-size: 24px;
  padding: 20px;
  border: 2px solid gray;
`;

export const BottomContent= styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  width: 100%;
  height: 100%;
  padding: 50px;
  justify-content: space-around;
`;

export const BottomCard= styled.div`
  margin-top: 50px;
  width: 20%;
  height: 60%;
  font-size: 20px;
  
`;

export const BottomInternalCard= styled.div`
  margin-top: 20px;
  border: solid 2px lightgray;
  border-left: solid 2px #65c9c1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: white;
  padding: 30px;
`;

export const BottomCardInfo= styled.div`
  background-color: #65c9c1;
  height: 50%;
  width: 100%;
`;



