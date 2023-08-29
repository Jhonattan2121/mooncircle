import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 59%;
  height: 73%;
  top: -12rem;
  left: -31rem;
  gap: 8px;

  img {
    width: 600px;
    height: 500px;
    display: flex;
    position: relative;
    top: -4rem;
    left: 10rem;
  }

  .Content {
    display: flex;
    position: relative;
    top: -37rem;
    left: -5rem;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 712px;
    height: 542px;
    gap: 2rem;
  }

  .Frame {
    width: 100%;
    max-width: 800px;
    padding: 0px;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: -49rem;

    h1 {
      font-size: 29px;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      display: flex;
      position: relative;
      top: 2rem;
      left: 32rem;
    }

    .Content {
      top: 3rem;
      left: -15rem;
      width: 318px;
      height: 542px;
    }

    .Frame {
      margin-right: -47rem;

      h1 {
        font-size: 24px;
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: 426px) and (max-width: 1440px) {
    /* Estilos específicos para dispositivos com largura entre 426px e 1440px */

    width: 80%;
    top: -10rem;
    left: -16rem;

    img {
      width: 400px;
      height: 350px;
      top: 0;
      left: 0;
    }

    .Content {
      top: -20rem;
      left: -2rem;
      width: 500px;
    }

    .Frame {
      margin-right: -40rem;

      h1 {
        font-size: 26px;
      }
    }
  }
`
