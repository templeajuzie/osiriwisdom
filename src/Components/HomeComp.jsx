import styled from "styled-components";
import Typewriter from "typewriter-effect";
import homebg from "../Resources/Images/secbg.png";
import homeImg from "../Resources/Images/headerImg.jpg";
import { CalendarToday } from "@material-ui/icons";
import { useState } from "react";
import { BsYoutube } from "react-icons/bs";

const HomeComp = () => {
  const Main = styled.div`
    .Homesec {
      background-image: url(${homebg});
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 80px;
      margin-bottom: 90px;
      width: 100%;
      gap: 150px;

      .hsec1 {
        background-image: url(${homeImg});
        background-size: 300px;
        background-position: center;
        height: 340px;
        width: 340px;
        border-radius: 50%;
        border: 20px solid #433f3f;
        -webkit-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
        -moz-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
        box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);

        :hover {
          background-position-y: 2px;
          transition: all 2s ease;
        }
      }

      .hsec2 {
        font-family: "Poppins";

        h4 {
          font-weight: normal;
          margin-bottom: 10px;
          font-size: 24px;
          color: #000;
          display: flex;
          flex-direction: row;
          gap: 20px;
          font-family: "Poppins";
        }

        h2 {
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 20px;
          font-family: "Poppins";
          color: #000;
          display: flex;
          flex-direction: row;
        }

        p {
          font-family: "Poppins", Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 0;
          width: 490px;
          font-style: normal;
          line-height: 1.75em;
          color: #000;
        }

        ul {
          display: flex;
          margin-top: 20px;
          align-items: center;

          .booknow {
            .btna {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
              font-size: 13px;

              .icon {
                font-size: 16px;
              }
            }
          }

          li {
            list-style: none;
            padding-right: 15px;

            button {
              padding: 13px 25px;
              font-size: 12px;
              font-weight: bold;
              background: #000;
              cursor: pointer;
              color: gold;
              border-radius: 25px;
              transition: all 1s ease-in;
            }

            .btna {
              padding: 14px 25px;
              font-size: 14px;
              font-weight: bold;
              border: 3px solid gold;
              background: gold;
              color: black;
              border-radius: 5px;
              transition: all 1s ease-in;
            }

            .btna:hover {
              background-color: #000;
              color: gold;
              transform: scale(1.1);
            }

            i {
              border-radius: 4px;
              padding: 5px;
              background: transparent;
              color: #000;

              :hover {
                color: gold;
                transition: all 1s ease-in-out;
                background: transparent;
                cursor: pointer;
              }
            }

            .fa-facebook-f {
              padding: 5px 8px;
            }

            .fa-linkedin {
              padding: 5px 7px;
            }
          }
        }
      }
    }

    @media (max-width: 1100px) {
      padding: 0 40px;

      .Homesec {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;
        gap: 20px;

        .hsec1 {
          background-image: url(${homeImg});
          background-size: 260px;
          background-position: center;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 20px solid #444444;
          -webkit-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
          -moz-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
          box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);

          :hover {
            background-position-y: -5px;
            transition: all 2s ease;
          }
        }

        .hsec2 {
          font-family: "Poppins";
          width: auto;

          h4 {
            font-weight: normal;
            margin-bottom: 10px;
            font-size: 16px;
            color: #000;
            font-family: "Poppins";
          }

          h2 {
            font-size: 48px;
            line-height: 56px;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 20px;
            font-family: "Poppins";
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 12px;
            font-weight: 0;
            text-align: start;
            width: 345px;
            font-style: normal;
            line-height: 1.75em;
            color: #000;
          }

          ul {
            display: flex;
            margin-top: 20px;
            align-items: center;

            li {
              list-style: none;
              padding-right: 15px;

              button {
                padding: 13px 25px;
                font-size: 14px;
                font-weight: bold;
                background: gold;
                cursor: pointer;
                color: black;
                border-radius: 5px;
                transition: all 1s ease-in;
              }

              .btna {
                padding: 10px 35px;
                font-size: 14px;
                font-weight: bold;
                border: 3px solid gold;
                background: #444444;
                color: #ccd6f6;
                border-radius: 8px;
                transition: all 1s ease-in;
              }

              .btna:hover {
                background-color: gold;
                color: #000;
                transform: scale(1.1);
              }

              i {
                border-radius: 4px;
                padding: 5px;
                background: #f5f5f5;
                color: #000;

                :hover {
                  color: gold;
                  transition: all 1s ease-in-out;
                  background: transparent;
                  cursor: pointer;
                }
              }

              .fa-facebook-f {
                padding: 5px 8px;
              }

              .fa-linkedin {
                padding: 5px 7px;
              }
            }
          }
        }
      }
    }

    @media (max-width: 600px) {
      padding: 0 20px;
      .Homesec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;

        .hsec1 {
          background-image: url(${homeImg});
          background-size: 260px;
          background-position: center;
          height: 300px;
          border-radius: 50%;
          border: 20px solid #444444;
          -webkit-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
          -moz-box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);
          box-shadow: -1px 1px 5px 9px rgba(117, 119, 115, 0.626);

          :hover {
            background-position-y: 5px;
            transition: all 2s ease;
          }
        }

        .hsec2 {
          font-family: "Poppins";
          display: flex;
          flex-direction: column;
          align-items: center;

          h4 {
            font-weight: normal;
            margin-bottom: 1px;
            text-align: center;
            font-size: 14px;
            color: #000;
            font-family: "Poppins";
          }

          h2 {
            font-size: 30px;
            line-height: 56px;
            font-weight: 600;
            text-align: center;
            margin-top: 0;
            margin-bottom: 10px;
            font-family: "Poppins";
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 12px;
            font-weight: 0;
            text-align: center;
            width: 320px;
            font-style: normal;
            line-height: 1.75em;
            color: #000;
          }

          ul {
            display: flex;
            margin-top: 20px;
            align-items: center;
            justify-content: center;

            li {
              list-style: none;
              padding-right: 15px;
              overflow-x: button {
                padding: 13px 20px;
                font-size: 14px;
                font-weight: bold;
                background: gold;
                cursor: pointer;
                color: black;
                border-radius: 25px;
                transition: all 1s ease-in;
              }

              .btna {
                padding: 16px 20px;
                font-size: 14px;
                font-weight: bold;
                border: 3px solid gold;
                background: #000;
                color: gold;
                border-radius: 8px;
                transition: all 1s ease-in;
              }

              .btna:hover {
                background-color: gold;
                color: #000;
                transform: scale(1.1);
              }

              i {
                border-radius: 4px;
                padding: 5px;
                background: #f5f5f5;
                color: #000;

                :hover {
                  color: gold;
                  transition: all 1s ease-in-out;
                  background: transparent;
                  cursor: pointer;
                }
              }

              .fa-facebook-f {
                padding: 5px 8px;
              }

              .fa-linkedin {
                padding: 5px 7px;
              }

              .fa-youtube {
                display: none;
                padding: 5px 7px;
              }
            }
          }
        }
      }
    }
  `;

  const [item1, setItem1] = useState("Osiri Wisdom");

  let speed = 50;
  for (let i = 0; i <= item1.length; i++) {
    item1.charAt(i);
    setTimeout(speed);
  }

  // var i = 0;
  // item1 = "Osiri Wisdom";
  // var speed = 50;

  // function typeWriter() {
  //   if (i < item1.length) {
  //     item1 += item1.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }

  return (
    <Main>
      <div className="Homesec">
        <div className="hsec2">
          <h4>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Hello`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Bonjour`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Guten tag`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Salve`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Nǐn hǎo`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Olá`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Asalaam alaikum.`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1800)
                  .typeString(`Konnichiwa.`)
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString(`Hello.`)
                  .pauseFor(1000)
                  .start();
              }}
            />
            <span>👋, I am </span>
          </h4>
          <h2> Osiri Wisdom </h2>

          <p>
            A Life Coach, Pastor, Financial and Leadership Consultant. I provide
            wisdom for excellence in Leadership, Business & Relationship.
            Convener: #TheManThing.
          </p>

          <ul>
            <li className="booknow">
              <button className="btna">
                {" "}
                <CalendarToday className="icon" /> Speaking Engagement{" "}
              </button>
            </li>
            <li>
              <a href="https://web.facebook.com/OsiriWisdom">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/OsiriWisdom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/osiri-wisdom-72a36032/?originalSubdomain=ng">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/OsiriWisdom">
                <i className="fa-brands fa-youtube"></i>{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="hsec1"></div>
      </div>
    </Main>
  );
};

export default HomeComp;
