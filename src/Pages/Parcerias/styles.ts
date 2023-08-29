import styled from 'styled-components'
const mobileBreakpoint = '425px'
export const ContainerParcerias = styled.div`
  display: flex;
  position: relative;
  top: 28rem;
  left: -2rem;
  align-items: center;
  justify-content: center;
  color: white;
  width: 66%;
  height: 100%;
  .ContainerText {
    display: flex;
    position: relative;
  }

  .TextParceiros {
    display: flex;
    position: relative;
    top: -68.5rem;
    left: 120.5rem;
    width: 17pc;
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
  .TextP {
    width: 390px;
    height: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    display: flex;
    position: relative;
    top: -67rem;
    left: 99.5rem;
  }
  .ContainerImages {
    display: flex;
    left: 57.5rem;
    top: -57rem;
    gap: 35px;
    position: relative;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
  }
  .Image1 {
    width: 200px;
    height: 200px;
  }
  .Image2 {
    width: 200px;
    height: 200px;
  }
  .Image3 {
    width: 200px;
    height: 200px;
  }
  .Image4 {
    width: 200px;
    height: 200px;
  }
  .ContainerTexts {
    display: flex;
    position: relative;
    top: -10rem;
    left: -47rem;
    h1 {
      width: 482px;
      font-size: 28px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
      display: flex;
      position: relative;
      top: -36.6rem;
      left: 76rem;
    }
    p {
      width: 431px;
      height: 80px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
      display: flex;
      position: relative;
      top: -30.5rem;
      left: 46rem;
    }
  }
  .ContainerInput {
    display: flex;
    position: relative;
    top: -11rem;
    left: -58rem;
    gap: 16px;
    .PrimeiroInput {
      display: flex;
      position: relative;
      top: -24rem;
      left: 30rem;
    }
    .SegundoInput {
      display: flex;
      position: relative;
      top: -20rem;
      left: 9.8rem;
    }
    button {
      width: 223px;
      height: 50px;
      padding: 8px 0px 8px 43px;
      border-radius: 100px;
      gap: 10px;
      background: #641978;
      box-shadow: 0px 10px 100px 0px #00000040;
      p {
        width: 177px;
        height: 32px;
        font-size: 17px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
      .ImageGrafismo {
        width: 350px;
        height: 350px;
        display: flex;
        position: relative;
        top: -21rem;
        left: -32rem;
      }
    }
    .ButtonForm {
      display: flex;
      position: relative;
      left: -8rem;
      top: -16rem;
    }
    .containerprojetos {
      .Parceiroh3 {
        width: 530px;
        font-size: 41px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
        display: flex;
        position: relative;
        top: -9rem;
        left: -46rem;
      }
    }
    .email {
      width: 44rem;
      height: 38px;
      font-size: 25px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.1em;
      text-align: left;
      color: white;
      display: flex;
      position: relative;
      top: -9rem;
      left: -44rem;
    }
  }
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    position: relative;
    top: 82rem;
    left: 2.5rem;
    align-items: center;
    justify-content: center;
    color: white;

    .ContainerText {
      display: flex;
      position: relative;
      top: 1rem;
      left: 1rem;
    }

    .TextParceiros {
      display: flex;
      position: relative;
      top: -69rem;
      left: 81.7rem;
      width: 21pc;
      font-size: 31px;
      font-weight: 600;
      line-height: 44px;
      letter-spacing: 0em;
      text-align: center;
      color: white;
    }
    .TextP {
      width: 313px;
      height: 24px;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: white;
      display: flex;
      position: relative;
      top: -65.5rem;
      left: 59.3rem;
    }
    .ContainerImages {
      display: flex;
      left: 40.5rem;
      top: -59rem;
      gap: 5px;
      position: relative;
      flex-direction: initial;
      justify-content: center;
      align-items: center;
    }
    .Image1 {
      width: 75px;
      height: 75px;
    }
    .Image2 {
      width: 75px;
      height: 75px;
    }
    .Image3 {
      width: 75px;
      height: 75px;
    }
    .Image4 {
      width: 75px;
      height: 75px;
    }

    .ContainerTexts {
      display: flex;
      position: relative;
      top: -7rem;
      left: -46rem;

      h1 {
        width: 304px;
        height: 77px;
        font-size: 26px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: 0.03em;
        text-align: left;
        color: white;
        display: flex;
        position: relative;
        top: -43rem;
        left: 67.9rem;
      }

      p {
        width: 300px;
        height: 80px;
        font-size: 23px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
        display: flex;
        position: relative;
        top: -27.5rem;
        left: 49.15rem;
      }
    }
    .ContainerInput {
      display: flex;
      position: relative;
      top: -5rem;
      left: -52.1rem;
      gap: 16px;

      .PrimeiroInput {
        display: flex;
        position: relative;
        top: -17rem;
        left: 36.5rem;
      }
      .SegundoInput {
        display: flex;
        position: relative;
        top: -12.5rem;
        left: 16.3rem;
      }
      button {
        width: 223px;
        height: 66px;
        padding: 8px 0px 8px 45px;
        border-radius: 100px;
        gap: 10px;
        background: #641978;
        box-shadow: 0px 10px 100px 0px #00000040;

        p {
          width: 185px;
          height: 32px;
          font-size: 17px;
          font-weight: 600;
          line-height: 32px;
          letter-spacing: 0em;
          text-align: left;
          color: #ffffff;
        }

        .ImageGrafismo {
          display: none;
        }
      }
      .ButtonForm {
        display: flex;
        position: relative;
        left: -1.1rem;
        top: -8.5rem;
      }

      .containerprojetos {
        .Parceiroh3 {
          width: 424px;
          height: 2px;
          font-size: 30px;
          font-weight: 600;
          line-height: 55px;
          letter-spacing: 0em;
          text-align: left;
          color: white;
          display: flex;
          position: relative;
          top: -1rem;
          left: -25rem;
        }

        .email {
          width: 34rem;
          height: 38px;
          font-size: 30px;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: 0em;
          text-align: left;
          color: white;
          display: flex;
          position: relative;
          top: 2rem;
          left: -19rem;
        }
      }
    }
  }
`
