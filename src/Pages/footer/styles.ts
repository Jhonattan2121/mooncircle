import { styled } from 'styled-components'
const mobileBreakpoint = '428px'

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  color: white;

  top: 16rem;

  p {
    color: white;
  }

  .FooterSectionOne {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ContainerIMG {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .FooterTitleTwo,
  .FooterTitleTree,
  .FooterTitleFour {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .FooterLink {
    color: white;
    text-decoration: none;
    display: flex;
    margin-bottom: 5px;
  }

  .email,
  .number {
    margin-top: 10px;
  }

  .FooterImage {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    top: 80rem;
    left: 2rem;

    p {
      color: white;
    }

    .FooterSectionOne {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: initial;
      position: relative;
      left: 1rem;

      .Footer-Imagem {
        display: flex;
        position: relative;
        left: -8rem;
        top: -1rem;
      }

      .ContainerIMG {
        display: flex;
        position: relative;
        width: 104px;
        height: 24px;
        top: -1rem;
        left: -8.5rem;
        gap: 16px;
        color: white;
        .img {
          width: 24px;
          height: 24px;
          padding: 1.5px;
        }
      }
      p {
        width: 370px;
        height: 31px;
      }
    }

    .FooterSectionTwo {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: initial;
      position: relative;
      left: -22rem;
      top: 8.5rem;

      .Home-FooterLink {
        color: white;
        text-decoration: none;
        display: flex;
        position: relative;
        left: -5rem;
        top: 1.5rem;
      }
      .SaibaMais-FooterLink {
        width: 8rem;
        color: white;
        text-decoration: none;
        display: flex;
        position: relative;
        left: -1.5rem;
        top: 2rem;
      }
      .Parcerias-FooterLink {
        color: white;
        text-decoration: none;
        display: flex;
        position: relative;
        left: -0.4rem;
        top: 3rem;
      }
      .Blog-FooterLink {
        color: white;
        text-decoration: none;
        display: flex;
        position: relative;
        left: -5.5rem;
        top: 5rem;
      }
    }
    .FooterTitleTwo {
      color: white;
    }

    .FooterSectionTree {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 1rem;
      flex-direction: initial;
      position: relative;
      left: -31.5rem;
      top: 21.5rem;

      .email {
        display: flex;
        position: relative;
        top: -0.5rem;
        left: 2rem;
      }

      .number {
        display: flex;
        position: relative;
        top: -0.5rem;
        left: 1.2rem;
      }
    }

    .FooterTitleTree {
      color: white;
    }

    .FooterSectionFour {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 1rem;
      flex-direction: initial;
      position: relative;
      left: -55.5rem;
      top: 37.5rem;
    }
    .FooterTitleFour {
      color: white;
      font-size: 19px;
      width: 238px;
      display: flex;
      position: relative;
      top: -6rem;
      left: 17.5rem;
    }
    .FooterImage {
      display: grid;
      grid-gap: 5px;
      position: relative;
      top: -6rem;
      left: 18rem;
    }
  }
`
