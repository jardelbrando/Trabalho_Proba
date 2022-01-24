import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 42px;

  canvas {
      margin: 0 32px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  background-color:#65c9c1;
  color: white;
  font-size: 20px;
  font-weigth: ligther;
  padding: 20px;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const RigthContent = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h2 {
      font-size: 20px;
      margin-bottom: 8px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LeftCard= styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #65c9c1;
  border-radius: 5px;
  color: white;
  font-size: 24px;
  padding: 20px;

  align-items: center;
  justify-content: center;

  > h2 {
      font-size: 24px;
      margin: 0;
  }
`;

export const BottomContent= styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 48px 0 0 32px;
`;

export const BottomCard= styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 16px;

  h2 {
      font-size: 20px;
  }
`;

export const BottomCardNumber = styled.div`
  border: 1px solid #ccc;
  border-radius: 0 8px 0 0;
  border-left: 3px solid #65c9c1;
  width: 100%;
  padding: 16px;
`;


export const BottomCardDetails = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #65c9c1;
  color: #FFF;
  border-radius: 0 0 8px 8px;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const VaccinationCard = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;

  h1 {
      font-size: 20px;
  }

  > div:first-child {
      width: 50%;
      display: flex;
      flex-direction: column;

      

      > div {
          display: flex;
          flex: 1;
          align-items: center;
          padding: 16px;
          border: 1px solid #ccc;
          border-left: 2px solid #65c9c1;
          border-radius: 0 8px 0 0;

          h1 {
            color: #65c9c1;
          }

          span {
              margin-left: 8px;
          }
      }

      > div:last-child {
        border-top: none;
        
        border-radius: 0 0 8px 0;
      }
  }

  > div:last-child {
    width: 50%;
    display: flex;

    align-items: center;

    > div {
      display: flex;
      background-color: #65c9c1;
      height: 100px;

      color: #FFF;
      align-items: center;
      justify-content: center;

      text-align: center;
      padding: 10px;
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const FinalContent= styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  height: 55vh;
  width: 100%;
  text-align: center;
`;

export const FinalContentCard= styled.div`
  background-color: #65c9c1;
  height: 100%;
  width: 100%;
  border: 3px solid lightgray;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  color: white;
`;

export const FinalCard= styled.div`
  height: 100%;
  width: 50%;
  border: 3px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  font-size: 20px;
`;

export const Comments= styled.div`
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
  border: 3px solid lightgray;
  border-radius: 5px;
`;






