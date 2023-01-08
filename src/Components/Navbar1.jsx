import styled from "styled-components";
import {
  BsDribbble,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Navbar1 = () => {
  const Container = styled.div`
    padding: 5px 110px;
    .navbar1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .a {
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

      .b {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;

        form {
          border: 1px solid gray;
          padding: 3px 10px;
          padding-right: 2px;
          border-radius: 4px;

          input {
            outline: none;
            border: none;
            background: transparent;
          }
          button {
            outline: none;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: #000;
            color: #fff;
            border: none;
          }
        }
      }
    }

    @media (max-width: 1100px) {
      .navbar1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        .a {
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

        .b {
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;

          form {
            border: 1px solid gray;
            padding: 3px 10px;
            padding-right: 2px;
            border-radius: 4px;

            input {
              outline: none;
              border: none;
              background: transparent;
            }
            button {
              outline: none;
              padding: 4px 8px;
              border-radius: 4px;
              background-color: #000;
              color: #fff;
              border: none;
            }
          }
        }
      }
    }

    @media (max-width: 600px) {
      .navbar1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        display: none;
        .a {
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

        .b {
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;

          form {
            border: 1px solid gray;
            padding: 3px 10px;
            border-radius: 4px;

            input {
              outline: none;
              border: none;
              background: transparent;
            }
            button {
              outline: none;
              padding: 4px 8px;
              border-radius: 4px;
              background-color: #000;
              color: #fff;
              border: none;
            }
          }
        }
      }
    }
  `;
  return (
    <Container>
      <div className="navbar1">
        <div className="a">
          <ul>
            <li>
              {" "}
              <BsFacebook className="icon" />{" "}
            </li>

            <li>
              {" "}
              <BsTwitter className="icon" />{" "}
            </li>

            <li>
              {" "}
              <BsLinkedin className="icon" />{" "}
            </li>

            <li>
              {" "}
              <BsYoutube className="icon" />{" "}
            </li>
          </ul>
        </div>

        <div className="b">
          <form action="">
            <input type="email" name="" id="" placeholder="Enter your email" />
            <button> Subscribe </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Navbar1;
