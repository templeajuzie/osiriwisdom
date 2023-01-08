import styled from "styled-components";
import {
  BsDribbble,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Main = styled.div`
  margin-top: 120px;
  background-color: #F1F6FE;
  .groupfooter4 {
    background-color: #F1F6FE;
    color: #000;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: #000;

            :hover {
              color: gold;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: #0ff;

            :hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }

  @media (max-width: 900px) {
    .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: gold;

            :hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }

  @media (max-width: 600px) {
    .groupfooter4 {
    background-color: #020c1b;
    color: aliceblue;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: space-between;
    border-top: 1px solid gray;
    justify-items: center;
    padding: 30px 35px;

    .a {
      p {
        font-size: 12px;
        font-weight: "Mnrope";
        text-align: center;

        i {
          margin-right: 2px;
        }
      }
    }

    .b {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;

        li {
          list-style: none;

          .icon {
            color: gold;

            :hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  }
`;

const Footer = () => {
  return (
    <Main>
      <div className="groupfooter4">
        <div className="a">
          <p>
            <i className="fa-solid fa-copyright"></i>2022 Osiri Wisdom. All
            rights reserved. -- Privacy Policy - Terms of Services
          </p>
        </div>

        <div className="b">
          <ul>
            <li>
              {" "}
              <a href="https://web.facebook.com/OsiriWisdom">
                <BsFacebook className="icon" />{" "}
              </a>
            </li>

            <li>
              {" "}
              <a href="https://twitter.com/OsiriWisdom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <BsTwitter className="icon" />{" "}
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.linkedin.com/in/osiri-wisdom-72a36032/?originalSubdomain=ng">
                <BsLinkedin className="icon" />{" "}
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.youtube.com/c/OsiriWisdom">
                <BsYoutube className="icon" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default Footer;
