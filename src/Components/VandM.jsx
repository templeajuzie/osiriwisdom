import styled from "styled-components";
import vandm from "../Resources/Images/vandm.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Body = styled.div`
  background-color: #1e1c1c;
  padding: 20px 90px;

  .head {
    display: flex;
    margin-right: 10px;
    padding: 10px 12px;
    align-items: center;

    h4 {
      font-size: 20px;
      padding: 10px 12px;
      color: #fff;
      margin-top: 40px;
      width: fit-content;
      border: 1px solid gold;

      span {
        color: gold;
        font-size: 20px;
      }
    }

    p {
      color: #fff;
    }
  }

  .cardgen {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 80px;

    .card1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        color: #fff;
        line-height: 1.8rem;
        font-size: 15spx;
        font-family: "Manrope";
        font-weight: normal;
      }
    }

    .card2 {
      img {
        height: 400px;
        width: auto;
        border-radius: 5px;
        position: relative;
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .head {
      display: flex;
      margin-right: 10px;
      padding: 10px 12px;
      padding-bottom: 30px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
      }

      p {
        color: #efefef;
      }
    }

    .cardgen {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      gap: 20px;

      .card1 p {
        color: #efefef;
        line-height: 1.8rem;
        font-size: 13px;
        font-family: "Manrope";
        font-weight: normal;
      }

      .card2 {
        img {
          height: 400px;
          width: auto;
          border-radius: 5px;
          position: relative;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
    .head {
      display: flex;
      margin-right: 10px;
      padding: 10px 12px;
      padding-bottom: 30px;
      align-items: center;

      h4 {
        font-size: 25px;
        color: #fff;

        span {
          color: gold;
          font-size: 20px;
        }
      }

      p {
        color: #f5f5f5;
      }
    }

    .cardgen {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      gap: 20px;

      .card1 p {
        color: #efefef;
        line-height: 1.8rem;
        font-size: 13px;
        font-family: "Manrope";
        font-weight: normal;
      }

      .card2 {
        img {
          height: 350px;
          width: auto;
          border-radius: 5px;
          position: relative;
        }
      }
    }
  }
`;

const VandM = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Body>
        <div className="conatiner">
          <div className="head">
            <h4> Vision And Mission </h4>
          </div>

          <div className="cardgen">
            <div className="card1">
              <p>
                The vision statement focuses on tomorrow and what the
                organization wants to become. The mission statement focuses on
                today and what the organization does. While companies commonly
                use mission and vision statements interchangeably, it’s
                important to have both. <br /> <br />
                The vision statement focuses on tomorrow and what the
                organization wants to become. The mission statement focuses on
                today and what the organization does. While companies commonly
                use mission and vision statements interchangeably, it’s
                important to have both.
              </p>
            </div>

            <div className="card2">
              <div className="card2b"></div>

              <img src={vandm} alt="" />
            </div>
          </div>
        </div>
      </Body>

      {/* <Footer /> */}
    </>
  );
};

export default VandM;
