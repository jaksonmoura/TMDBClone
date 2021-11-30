import styled from "styled-components";

export const HeaderSection = styled.header`
    width: 100%;
`

export const HeaderBox = styled.div`
    height: 80px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    .logo{
      width: 150px;
    }

    @media screen and (max-width: 620px){
      height: 100px;
      padding: 15px 0;
      flex-direction: column;
      margin-bottom: 40px;
    }
`

export const Form = styled.form`
  display: inline-flex;
  position: relative;
  @media screen and (max-width: 620px){
    width: 100%;
  }
`;

export const Input = styled.input`
  border: 1px solid var(--grey);
  width: clamp(200px, 400px, 500px);
  @media screen and (max-width: 620px){
    width: 100%;
  }
`;

export const Button = styled.button`
  background: var(--mainColor);
  color: #fff;
  width: 50px;
  border-radius: var(--defaultRadius);
  position: absolute;
  right: 0;
`;