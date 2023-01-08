import styled from "styled-components";
import { MdLocationOn, MdAlternateEmail, MdOutlineCall } from "react-icons/md";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import contact from "../Resources/Images/contact.jpg";
import Services from "./Services";

const Body = styled.div`
  background-color: #F1F6FE;
  padding: 20px 90px;

  .sec1 {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    padding-top: 60px;
    align-items: center;

    h4 {
      font-size: 30px;
      color: #000;
    }

    p {
      color: #f5f5f5;
    }
  }

  .sec2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;

    .a {
      img {
        width: 390px;
        height: auto;
        border-radius: 8px;
      }
      ul {
        padding-top: 30px;

        li {
          display: flex;
          color: #000;
          align-items: center;
          margin-bottom: 30px;
          font-size: 14px;

          .icon {
            color: #000;
            font-size: 20px;
            margin-right: 20px;
          }
        }
      }
    }

    .b {
      input {
        padding: 10px 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        color: #000;
        outline: none;
        border: 2px solid #000;
        background-color: transparent;
      }

      textarea {
        padding: 20px 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        color: aliceblue;
        outline: none;
        border: 2px solid #000;
        background-color: transparent;
        resize: none;
      }

      .fullname {
        width: 100%;
        padding: 15px;
      }

      .email {
        width: 100%;
        padding: 15px;
      }

      .phonenumber {
        width: 100%;
        padding: 15px;
      }

      .textarea {
        width: 100%;
      }

      #email {
        margin-right: 16px;
      }

      #submit {
        padding: 10px 60px;
        transition: all 1s;
        cursor: pointer;
        margin-left: 10px;
      }

      #submit:hover {
        background-color: #000;
        color: gold;
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 20px 40px;
    .sec1 {
      display: flex;
      justify-content: space-between;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
      }

      p {
        color: #f5f5f5;
      }
    }

    .sec2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;

      .a {
        img {
          width: 300px;
          height: auto;
        }
        ul {
          padding-top: 30px;

          li {
            display: flex;
            color: #a8b2d1;
            align-items: center;
            margin-bottom: 30px;
            font-size: 14px;

            .icon {
              color: #0ff;
              font-size: 20px;
              margin-right: 20px;
            }
          }
        }
      }

      .b {
        input {
          padding: 10px 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          color: aliceblue;
          outline: none;
          border: 2px solid #0ff;
          background-color: transparent;
        }

        textarea {
          padding: 20px 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          color: aliceblue;
          outline: none;
          border: 2px solid #0ff;
          background-color: transparent;
          resize: none;
        }

        .fullname {
          width: 100%;
        }

        .email {
          width: 100%;
        }

        .phonenumber {
          width: 100%;
        }

        .textarea {
          width: 100%;
        }

        #email {
          margin-right: 16px;
        }

        #submit {
          padding: 10px 60px;
          transition: all 1s;
          cursor: pointer;
          margin-left: 10px;
        }

        #submit:hover {
          background-color: #0ff;
          color: #000;
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 20px 20px;
    .sec1 {
      display: flex;
      justify-content: space-between;
      padding: 10px 12px;
      padding-top: 60px;
      align-items: center;

      h4 {
        font-size: 30px;
        color: #f5f5f5;
      }

      p {
        color: #f5f5f5;
      }
    }

    .sec2 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 20px;

      .a {
        img {
          width: 344px;
          height: auto;
        }
        ul {
          padding-top: 30px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;

          li {
            display: flex;
            color: #a8b2d1;
            align-items: center;
            margin-bottom: 30px;
            font-size: 14px;

            .icon {
              color: #0ff;
              font-size: 20px;
              margin-right: 10px;
            }
          }
        }
      }

      .b {
        input {
          padding: 10px 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          color: aliceblue;
          outline: none;
          border: 2px solid #0ff;
          background-color: transparent;
        }

        textarea {
          padding: 20px 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          color: aliceblue;
          outline: none;
          border: 2px solid #0ff;
          background-color: transparent;
          resize: none;
        }

        .fullname {
          width: 100%;
        }

        .email {
          width: 100%;
        }

        .phonenumber {
          width: 100%;
        }

        .textarea {
          width: 100%;
        }

        #email {
          margin-right: 16px;
        }

        #submit {
          padding: 10px 60px;
          transition: all 1s;
          cursor: pointer;
          margin-left: 10px;
        }

        #submit:hover {
          background-color: #0ff;
          color: #000;
          transform: scale(1.1);
        }
      }
    }
  }
`;

const clickme = () => {
  console.log("clicked");
};

<Services title="testing"/>

const Letswork = () => {
  return (
    <>
      <Navbar />

      <Body>
        <div className="sec1">
          <h4>Get In Touch</h4>
          <p> Let's Talk </p>
        </div>

        <div className="sec2">
          <div className="a">
            <img src={contact} alt="" />

            <ul>
              <li>
                {" "}
                <MdAlternateEmail className="icon" /> contact@osiriwisdom.com{" "}
              </li>

              <li>
                {" "}
                <MdOutlineCall className="icon" /> Phone: +234-810-282-8268{" "}
              </li>

              <li>
                {" "}
                <MdLocationOn className="icon" /> Aba Expy, Market Junction 500102, Port Harcourt{" "}
              </li>
            </ul>
          </div>

          <div className="b">
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                required
                className="fullname"
              />{" "}
              <br />
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter your email address"
                required
                className="email"
              />
              <br />
              <textarea
                name=""
                id=""
                placeholder="Enter your message Here"
                required
                className="textarea"
                rows={7}
              ></textarea>{" "}
              <br />
              <input
                type="submit"
                value="Submit"
                id="submit"
                onClick={() => {
                  clickme();
                }}
              />
            </form>
          </div>
        </div>
      </Body>

      <Footer />
    </>
  );
};

export default Letswork;