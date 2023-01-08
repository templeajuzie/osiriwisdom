import styled from "styled-components";
import abt from "../Resources/Images/aboutImg.jpg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";

const Body = styled.div`
  background-color: #f1f6fe;
  padding: 20px 90px;
  margin-bottom: 30px;

  .head {
    display: flex;
    margin-right: 10px;
    padding: 10px 12px;
    align-items: center;

    h4 {
      font-size: 20px;
        padding: 10px 12px;
        color: #000;
        margin-top: 40px;
        margin-bottom: 30px;
        width: fit-content;
        border: 1px solid black;
        justify-content: center;

      span {
        color: gold;
        font-size: 20px;
      }
    }

    p {
      color: #000;
    }
  }

  .cardgen {
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 20px;

    .card1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
      color: #000;
      line-height: 1.8rem;
      font-size: 14px;
      width: 520px;
      font-family: "Manrope";
      font-weight: normal;
    }
  }

    .card2 {
      img {
        height: 450px;
        width: 300px;
        border-radius: 5px;
        position: relative;
      }

      /* .card2b:hover {
        height: 500px;
        width: 150px;
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
        border: 3px solid gold;
        transform: scale(1.1);
        background-color: transparent;
      } */

      .card2b {
        height: 450px;
        width: 350px;
        border-radius: 5px;
        position: absolute;
        margin-top: 30px;
        margin-left: 30px;
        border: 3px solid gold;
        background-color: transparent;
        transition: all 1s;
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .head {
      display: flex;
      margin-right: 10px;
      padding: 10px 12px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #000;
        justify-content: center;

        span {
          color: gold;
          font-size: 20px;
        }
      }

      p {
        color: #000;
      }
    }

    .cardgen {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      gap: 20px;
      padding: 0 0px;

      .card1 p {
        color: #000;
        line-height: 1.8rem;
        font-size: 12px;
        width: 300px;
        font-family: "Manrope";
        font-weight: normal;
      }

      .card2 {
        img {
          height: 500px;
          width: auto;
          border-radius: 5px;
          position: relative;
        }

        .card2b:hover {
          height: 150px;
          width: 150px;
          position: absolute;
          margin-top: 20px;
          margin-left: 20px;
          border: 3px solid gold;
          transform: scale(1.1);
          background-color: transparent;
        }

        .card2b {
          height: 500px;
          width: 320px;
          border-radius: 5px;
          position: absolute;
          border: 3px solid gold;
          background-color: transparent;
          transition: all 1s;
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
      align-items: center;

      h4 {
        font-size: 25px;
        color: #000;

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
      padding: 0 30px;
      gap: 40px;

      .card1 p {
        color: #000;
        line-height: 1.8rem;
        font-size: 13px;
        width: 350px;
        font-family: "Manrope";
        font-weight: normal;
      }

      .card2 {
        mar
        img {
          height: 500px;
          width: auto;
          border-radius: 5px;
          position: relative;
        }

        /* .card2b:hover {
          height: 150px;
          width: 150px;
          position: absolute;
          margin-top: 20px;
          margin-left: 20px;
          border: 3px solid gold;
          transform: scale(1.1);
          background-color: transparent;
        } */

        .card2b {
          height: 500px;
          width: 340px;
          border-radius: 5px;
          position: absolute;
          border: 3px solid gold;
          background-color: transparent;
          transition: all 1s;
        }
      }
    }
  }
`;



const Aboutme = () => {
  return (
    <>
      <Navbar />
      <Body>
        <div className="conatiner">
          <div className="head">
            <h4> About Me </h4>
          </div>

          <div className="cardgen">
          <div className="card2">
              <div className="card2b"></div>

              <img src={abt} alt="" />
            </div>

            <div className="card1">
              <p>
                Osiri Wisdom has a strong blend of academic, professional and
                ministerial backgrounds which are instrumental to his multi-task
                orientation. <br /> <br /> As a John Maxwell trained and
                certified Leadership Consultant, he is a sought-after
                motivational speaker, leadership consultant, life coach, author
                and a dynamic teacher, with solid competence in leadership,
                finance and relationships.
                <br /> <br />
                Osiri Wisdom has a strong blend of academic, professional and
                ministerial backgrounds which are instrumental to his multi-task
                orientation. As a John Maxwell trained and certified Leadership
                Consultant, he is a sought-after motivational speaker,
                leadership consultant, life coach, author and a dynamic teacher,
                with solid competence in leadership, finance and relationships.
              </p>
            </div>

            
          </div>
        </div>
      </Body>

      <Footer />
    </>
  );
};

export default Aboutme;
