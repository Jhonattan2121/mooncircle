import { styled } from 'styled-components'
const mobileBreakpoint = '428px'
const desktopBreakpoint = '1440px'

export const ButtonComponent = styled.button`
  width: 250px;
  height: 50px;
  padding: 8px 0px 14px 1px;
  border-radius: 100px;
  gap: 10px;
  background: #641978;

  p {
    width: 160px;
    height: 25px;
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 233px;
    height: 65px;
    padding: 8px 0px 8px 24px;
    border-radius: 100px;
    gap: 10px;
    background: #641978;

    p {
      width: 216px;
      height: 32px;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
  }
  @media (min-width: ${desktopBreakpoint}) {
    width: 300px;
    height: 60px;
    padding: 10px 20px;
    border-radius: 150px;
    gap: 15px;
    background: #641978;

    p {
      width: 153px;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
    }
  }
`
