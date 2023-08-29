import styled from 'styled-components'
const mobileBreakpoint = '428px'
const desktopBreakpoint = '1440px'

export const Container = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 5rem;
    left: -8rem;
    width: 100%;
    gap: 51px;

    .Logo-Home {
      display: flex;
      position: relative;
      width: 400px;
      height: 400px;
      top: -45rem;
      left: 25rem;
      padding: 0;
    }

    .Math {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        position: relative;
        left: -8rem;
        width: 269px;
        height: 35px;

        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #ffffff;
      }
      h4 {
        position: relative;
        left: -7.5rem;
        width: 321px;
        height: 105px;
        font-size: 45px;
        font-weight: 600;
        line-height: 46px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
      p {
        position: relative;
        left: -0.9rem;
        width: 531px;
        height: 54px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
      .partiparP {
        position: relative;
        left: -13.5rem;
        width: 126px;
        height: 24px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
      .filap {
        position: relative;
        left: -11.3rem;
        width: 197px;
        height: 147px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
    }
    .Input {
      display: grid;
      position: relative;
      gap: 8px;
      left: -8rem;
      top: -10rem;
    }
    .Confirm {
      width: 226.55px;
      height: 83.19px;
      .ContainerButton {
        display: flex;
        position: relative;
        top: -13rem;
        left: -8.2rem;
      }
    }
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10rem;
    left: -5rem;
    .Logo-Home {
      display: flex;
      position: relative;
      width: 250px;
      height: 250px;
      top: -57.5rem;
      left: 7rem;
      padding: 0;
    }

    .Math {
      gap: 32px;
      h1 {
        width: 274px;
        height: 23px;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #ffffff;
        position: relative;
        display: flex;
        top: 6.5rem;
        left: 4.5rem;
      }
      h4 {
        width: 235px;
        height: 73px;
        font-size: 33px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
        position: relative;
        display: flex;
        top: 7rem;
        left: 3.2rem;
      }
      p {
        width: 290px;
        height: 85px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
        display: flex;
        position: relative;
        left: 5rem;
        top: 7rem;
      }
      .partiparP {
        width: 131px;
        height: 28px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
        display: flex;
        position: relative;
        left: 0rem;
        top: 7rem;
      }
      .filap {
        width: 196px;
        height: 17px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
        display: flex;
        position: relative;
        left: 2rem;
        top: 7rem;
      }
    }
    .Input {
      display: grid;
      position: relative;
      left: 5rem;
      top: 8rem;
    }
    .Confirm {
      width: 407.55px;
      height: 354.19px;

      .ContainerButton {
        display: flex;
        position: relative;
        top: 9rem;
        left: 5rem;
      }
    }
  }
`
