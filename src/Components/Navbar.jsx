import {
  Cancel,
  FormatListNumberedSharp,
  LightMode,
  Shop,
  ShoppingCart,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdKeyboardArrowDown,
  MdModeNight,
  MdOutlineCancel,
  MdOutlineKeyboardArrowDown,
  MdOutlineLightMode,
} from "react-icons/md";

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import App from "../App";
import HomeComp from "../Components/HomeComp";
import { useState } from "react";

const Navbar = ({ type }) => {
  const Navcontainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;

    .container {
      background: #f1f6fe;
      width: 100%;
      background-size: cover;
      background-position: center;
    }

    nav {
      padding: 20px 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 35px;

      .a {
        h2 a {
          text-decoration: none;
          color: #000;
          font-size: 35px;
          font-weight: 20px;
          letter-spacing: 1px;
          font-family: "Satisfy", cursive;

          span {
            color: gold;
            font-family: "Satisfy", cursive;
          }
        }
      }

      .open {
        display: none;
      }

      .navbig {
        .btnnav {
          display: none;
        }

        ul {
          display: flex;
          flex-direction: row;
          align-items: center;

          .cart a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
          }

          li {
            display: inline-block;
            list-style: none;
            margin-left: 35px;
            text-align: center;
            justify-content: center;
            align-items: center;
            position: relative;

            .active {
              color: gold;
            }

            .iconnav {
              color: #000;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: bold;
              color: #000;

              :hover {
                color: gold;
              }
            }

            .dropdown-content1 {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              min-width: 150px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              z-index: 1;
              left: -15px;
              text-align: start;

              a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                font-weight: 500;
                font-size: 13px;

                :hover {
                  background-color: #ddd;
                }
              }

              .mybrand {
                display: flex;
                flex-direction: row;
                gap: 10px;
              }
            }

            .dropdown-content2 {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              min-width: 150px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
              z-index: 1;
              border-radius: 4px;
              left: -15px;
              color: #000;
              text-align: start;

              a {
                color: black;
                padding: 12px 16px;
                font-weight: 500;
                font-size: 13px;
                text-decoration: none;

                :hover {
                  background-color: #ddd;
                }
              }
            }
          }

          .about {
            :hover .dropdown-content1 {
              display: block;
            }

            a {
              display: flex;
              flex-direction: row;
              color: #000;
              gap: 10px;
            }
          }

          .cart {
            :hover .dropdown-content2 {
              display: block;
            }

            a {
              display: flex;
              flex-direction: row;
              color: #000;
              gap: 10px;
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid gold;
            background: #000;
            color: gold;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: gold;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;

                :hover {
                  color: gold;
                }
              }
            }
          }
        }
      }

      .navsmall {
        display: none;

        .btnnav {
          display: none;
        }

        ul {
          display: flex;
          flex-direction: row;
          align-items: center;

          .cart a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
          }

          li {
            display: inline-block;
            list-style: none;
            margin-left: 35px;
            text-align: center;
            justify-content: center;
            align-items: center;
            position: relative;

            .active {
              color: gold;
            }

            .iconnav {
              color: #000;
              font-size: 25px;
              text-align: center;
              align-items: center;
              margin-top: auto;
              margin-bottom: auto;
            }

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: bold;
              color: #000;

              :hover {
                color: gold;
              }
            }

            .dropdown-content1 {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              min-width: 150px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              z-index: 1;
              left: -15px;
              text-align: start;

              a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                font-weight: 500;
                font-size: 13px;

                :hover {
                  background-color: #ddd;
                }
              }

              .mybrand {
                display: flex;
                flex-direction: row;
                gap: 10px;
              }
            }

            .dropdown-content2 {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              min-width: 150px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
              z-index: 1;
              border-radius: 4px;
              left: -15px;
              color: #000;
              text-align: start;

              a {
                color: black;
                padding: 12px 16px;
                font-weight: 500;
                font-size: 13px;
                text-decoration: none;

                :hover {
                  background-color: #ddd;
                }
              }
            }
          }

          .about {
            :hover .dropdown-content1 {
              display: block;
            }

            a {
              display: flex;
              flex-direction: row;
              color: #000;
              gap: 10px;
            }
          }

          .cart {
            :hover .dropdown-content2 {
              display: block;
            }

            a {
              display: flex;
              flex-direction: row;
              color: #000;
              gap: 10px;
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid gold;
            background: #000;
            color: gold;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: gold;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;

                :hover {
                  color: gold;
                }
              }
            }
          }
        }
      }
    }

    @media (max-width: 1100px) {
      .container {
        background: #020c1b;
        width: 100%;
        background-size: cover;
        background-position: center;
      }

      nav {
        padding: 20px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 35px;

        .a {
          h2 a {
            text-decoration: none;
            color: #ffff;
            font-size: 35px;
            font-weight: 20px;
            letter-spacing: 1px;
            font-family: "Satisfy", cursive;

            span {
              color: gold;
              font-family: "Satisfy", cursive;
            }
          }
        }

        .open {
          display: block;
        }

        .navbig {
          display: none;
          ul {
            li {
              display: inline-block;
              list-style: none;
              margin-left: 35px;
              align-self: flex-start;

              .active {
                color: gold;
              }

              .iconnav {
                color: aliceblue;
                font-size: 25px;
                text-align: center;
                align-items: center;
                margin-top: auto;
                margin-bottom: auto;
              }

              a {
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
                color: #ccd6f6;

                :hover {
                  color: gold;
                }
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid gold;
            background: #444444;
            color: #000;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: gold;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }

        .navsmall {
          width: 60vw;
          height: 100vh;
          top: 0;
          right: -2%;
          display: block;
          position: absolute;
          background: #000;
          padding: 20px 20px;
          box-shadow: 4px 2px 0px 0 rgba(0, 0, 0, 0.2);

          .btnnav {
            display: flex;
            text-align: end;
            margin-bottom: 20px;
            justify-content: end;

            .open {
              display: none;
            }
          }

          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 30px;

            li {
              display: inline-block;
              list-style: none;
              margin-left: 35px;
              align-self: flex-start;

              .active {
                color: gold;
              }

              .iconnav {
                color: #000;
                font-size: 25px;
                text-align: center;
                align-items: center;
                margin-top: auto;
                margin-bottom: auto;
              }

              a {
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
                color: #ccd6f6;

                :hover {
                  color: gold;
                }
              }
            }

            .about {
              :hover .dropdown-content1 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }

            .cart {
              :hover .dropdown-content2 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #000;
            background: gold;
            color: #000;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }
      }
    }

    @media (max-width: 1000px) {
      .container {
        background: #020c1b;
        width: 100%;
        background-size: cover;
        background-position: center;
      }

      nav {
        padding: 20px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin: 0;

        .a {
          h2 a {
            text-decoration: none;
            color: #ffff;
            font-size: 35px;
            font-weight: 20px;
            letter-spacing: 1px;
            font-family: "Satisfy", cursive;

            span {
              color: gold;
              font-family: "Satisfy", cursive;
            }
          }
        }

        .navbig {
          display: none;
        }

        .navsmall {
          width: 60vw;
          height: 100vh;
          top: 0;
          right: -2%;
          display: block;
          position: absolute;
          background: #000;
          padding: 20px 20px;
          box-shadow: 4px 2px 0px 0 rgba(0, 0, 0, 0.2);

          .btnnav {
            display: flex;
            text-align: end;
            margin-bottom: 20px;
            justify-content: end;

            .open {
              display: none;
            }
          }

          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 30px;

            li {
              display: inline-block;
              list-style: none;
              margin-left: 35px;
              align-self: flex-start;

              .active {
                color: gold;
              }

              .iconnav {
                color: #000;
                font-size: 25px;
                text-align: center;
                align-items: center;
                margin-top: auto;
                margin-bottom: auto;
              }

              a {
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
                color: #ccd6f6;

                :hover {
                  color: gold;
                }
              }
            }

            .about {
              :hover .dropdown-content1 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }

            .cart {
              :hover .dropdown-content2 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #000;
            background: gold;
            color: #000;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }
      }
    }

    @media (max-width: 600px) {
      .container {
        background: #020c1b;
        width: 100%;
        background-size: cover;
        background-position: center;
      }

      nav {
        padding: 20px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .a {
          display: flex;
          flex-direction: row;
          margin-left: auto;
          margin-right: auto;

          h2 a {
            text-decoration: none;
            color: #ffff;
            font-size: 35px;
            font-weight: 20px;
            letter-spacing: 1px;
            font-family: "Satisfy", cursive;

            span {
              color: gold;
              font-family: "Satisfy", cursive;
            }
          }
        }

        .navbig {
          display: none;
        }

        .navsmall {
          width: 60vw;
          height: 100vh;
          top: 0;
          right: -2%;
          display: block;
          position: absolute;
          background: #000;
          padding: 20px 20px;
          box-shadow: 4px 2px 0px 0 rgba(0, 0, 0, 0.2);

          .btnnav {
            display: flex;
            text-align: end;
            margin-bottom: 20px;
            justify-content: end;

            .open {
              display: none;
            }
          }

          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 30px;

            li {
              display: inline-block;
              list-style: none;
              margin-left: 35px;
              align-self: flex-start;

              .active {
                color: gold;
              }

              .iconnav {
                color: #000;
                font-size: 25px;
                text-align: center;
                align-items: center;
                margin-top: auto;
                margin-bottom: auto;
              }

              a {
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
                color: #ccd6f6;

                :hover {
                  color: gold;
                }
              }
            }

            .about {
              :hover .dropdown-content1 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }

            .cart {
              :hover .dropdown-content2 {
                display: block;
              }

              a {
                display: flex;
                flex-direction: row;
                color: #ccd6f6;
                gap: 10px;
              }
            }
          }

          button {
            padding: 10px 35px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            border: 3px solid #000;
            background: gold;
            color: #000;
            border-radius: 25px;
            transition: all 1s ease-in;

            :hover {
              background-color: #d5d5d5;
              color: #000;
              transform: scale(1.1);

              a {
                color: #000;
              }
            }
          }
        }
      }
    }
  `;

  const navy = document.getElementById("navy");
  console.log(navy);

  const [opennav, setOpennav] = useState(false);

  const HandleOpen = () => {
    setOpennav(true);
    navy.className = "bshow";
  };

  const HandleClose = () => {
    setOpennav(false);
  };

  return (
    <>
      <Navcontainer>
        <div className="container">
          <nav>
            <div className="a">
              <h2>
                <NavLink to="/">
                  {" "}
                  Osiri<span>-Wisdom</span>{" "}
                </NavLink>
              </h2>
            </div>

            <RiIcons.RiMenu3Fill
              color="#fff"
              size={34}
              className="open"
              onClick={HandleOpen}
            />

            <div className="navbig" id="navy">
              <div className="btnnav">
                <AiIcons.AiOutlineClose
                  color="#fff"
                  size={34}
                  className="close"
                  onClick={HandleClose}
                />
              </div>

              <ul>
                <li className="about">
                  <NavLink to="">
                    {" "}
                    About <MdOutlineKeyboardArrowDown size={20} />
                  </NavLink>
                  <div className="dropdown-content1">
                    <NavLink to="/aboutme">About Me</NavLink>
                    <NavLink to="">My Itenary Event</NavLink>
                    <NavLink to="">Media Gallery</NavLink>
                    <NavLink to="" className="mybrand">
                      My Brand <MdOutlineKeyboardArrowDown size={20} />
                    </NavLink>
                  </div>
                </li>

                <li>
                  <NavLink to="/services"> Invite/Consult </NavLink>
                </li>
                <li>
                  <a href="https://medium.com/@osiriwisdom" type="blogs">
                    {" "}
                    Blogs{" "}
                  </a>
                </li>

                <li className="cart">
                  <NavLink to="">
                    {" "}
                    Resources <MdOutlineKeyboardArrowDown size={20} />
                  </NavLink>

                  <div className="dropdown-content2">
                    <NavLink to="">Shop</NavLink>
                    <NavLink to="">Freebies</NavLink>
                  </div>
                </li>

                {/* <li>
                  <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                    {" "}
                    Tutorials{" "}
                  </a>
                </li> */}

                <li>
                  {" "}
                  <NavLink to="/contact">
                    <button> Contact </button>
                  </NavLink>{" "}
                </li>

                <li>
                  <MdModeNight fontSize={20} />
                </li>
              </ul>
            </div>

            {opennav && (
              <div className="navsmall" id="navy">
                <div className="btnnav">
                  <AiIcons.AiOutlineClose
                    color="#fff"
                    size={34}
                    className="close"
                    onClick={HandleClose}
                  />
                </div>

                <ul>
                  <li className="about">
                    <NavLink to="">
                      {" "}
                      About <MdOutlineKeyboardArrowDown size={20} />
                    </NavLink>
                    <div className="dropdown-content1">
                      <NavLink to="/aboutme">About Me</NavLink>
                      <NavLink to="">My Itenary Event</NavLink>
                      <NavLink to="">Media Gallery</NavLink>
                      <NavLink to="" className="mybrand">
                        My Brands <MdOutlineKeyboardArrowDown size={20} />
                      </NavLink>
                    </div>
                  </li>

                  <li>
                    <NavLink to="/services"> Invite/Consult </NavLink>
                  </li>
                  <li>
                    <a href="https://medium.com/@osiriwisdom" type="blogs">
                      {" "}
                      Blogs{" "}
                    </a>
                  </li>

                  <li className="cart">
                    <NavLink to="">
                      {" "}
                      Resources <MdOutlineKeyboardArrowDown size={20} />
                    </NavLink>

                    <div className="dropdown-content2">
                      <NavLink to="">Shop</NavLink>
                      <NavLink to="">Freebies</NavLink>
                    </div>
                  </li>

                  {/* <li>
                  <a href="https://www.youtube.com/channel/UCGZ1LWLK82VwJuQSrIvkd5A">
                    {" "}
                    Tutorials{" "}
                  </a>
                </li> */}

                  <li>
                    {" "}
                    <NavLink to="/contact">
                      <button> Contact </button>
                    </NavLink>{" "}
                  </li>

                  <li>
                    <MdModeNight fontSize={20} />
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </Navcontainer>
    </>
  );
};

export default Navbar;
