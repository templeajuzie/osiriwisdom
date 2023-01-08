import styled from "styled-components";
import {
  Apartment,
  LocalPostOffice,
  StayCurrentPortraitOutlined,
} from "@material-ui/icons";

import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  MdLeaderboard,
  MdOutlineAttachMoney,
  MdOutlineLocalPostOffice,
} from "react-icons/md";
import { AiFillMoneyCollect } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const Services = () => {
  const Container = styled.div`
    padding: 20px 90px;

    .header {
      h4 {
        font-size: 20px;
        padding: 10px 12px;
        color: #000;
        margin-top: 40px;
        margin-bottom: 30px;
        width: fit-content;
        border: 1px solid black;
      }
    }

    .Section1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      /* row-gap: 20px;
    column-gap: 10px; */

      .card1 {
        display: flex;

        h5 {
          font-family: "Poppins", Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 0;
          font-style: normal;
          margin-bottom: 15px;
          line-height: 1.75em;
          color: #000;
        }

        p {
          font-family: "Poppins", Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 0;
          width: 400px;
          font-style: normal;
          line-height: 1.75em;
          color: #000;
        }

        .icon {
          padding-top: 10px;
          padding-right: 25px;
          font-size: 30px;

          i {
            color: gold;
          }
        }
      }
    }

    @media (max-width: 1100px) {
      padding: 20px 40px;
      .header {
        h4 {
          font-size: 30px;
          padding: 10px 12px;
          color: #000;
        }
      }

      .Section1 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        /* row-gap: 20px;
    column-gap: 10px; */

        .card1 {
          display: flex;

          h5 {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 16px;
            font-weight: 0;
            font-style: normal;
            margin-bottom: 15px;
            line-height: 1.75em;
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 14px;
            font-weight: 0;
            font-style: normal;
            width: 300px;
            line-height: 1.75em;
            color: #000;
          }

          .icon {
            padding-top: 10px;
            padding-right: 25px;
            font-size: 30px;

            i {
              color: #000;
            }
          }
        }
      }
    }

    @media (max-width: 900px) {
      padding: 20px 30px;
      .header {
        h4 {
          font-size: 30px;
          padding: 10px 12px;
          color: #000;
        }
      }

      .Section1 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        /* row-gap: 20px;
    column-gap: 10px; */

        .card1 {
          display: flex;

          h5 {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 16px;
            font-weight: 0;
            font-style: normal;
            margin-bottom: 15px;
            line-height: 1.75em;
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 14px;
            font-weight: 0;
            font-style: normal;
            width: 305px;
            line-height: 1.75em;
            color: #000;
          }

          .icon {
            padding-top: 10px;
            padding-right: 25px;
            font-size: 30px;

            i {
              color: #000;
            }
          }
        }
      }
    }

    @media (max-width: 800px) {
      padding: 20px 30px;
      .header {
        h4 {
          font-size: 30px;
          padding: 10px 12px;
          color: #000;
        }
      }

      .Section1 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        /* row-gap: 20px;
    column-gap: 10px; */

        .card1 {
          display: flex;

          h5 {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 16px;
            font-weight: 0;
            font-style: normal;
            margin-bottom: 15px;
            line-height: 1.75em;
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 14px;
            font-weight: 0;
            font-style: normal;
            width: 270px;
            line-height: 1.75em;
            color: #000;
          }

          .icon {
            padding-top: 10px;
            padding-right: 25px;
            font-size: 30px;

            i {
              color: #000;
            }
          }
        }
      }
    }

    @media (max-width: 600px) {
      padding: 20px 20px;
      .header {
        h4 {
          font-size: 25px;
          padding: 10px 12px;
          color: #000;
        }
      }

      .Section1 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        /* row-gap: 20px;
    column-gap: 10px; */

        .card1 {
          display: flex;

          h5 {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 16px;
            font-weight: 0;
            font-style: normal;
            margin-bottom: 15px;
            line-height: 1.75em;
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 12px;
            font-weight: 0;
            font-style: normal;
            width: 300px;
            line-height: 1.75em;
            color: #000;
          }

          .icon {
            padding-top: 10px;
            padding-right: 25px;
            font-size: 30px;

            i {
              color: #000;
            }
          }
        }
      }
    }

    @media (max-width: 500px) {
      padding: 20px 20px;
      .header {
        h4 {
          font-size: 25px;
          padding: 10px 12px;
          color: #000;
        }
      }

      .Section1 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        /* row-gap: 20px;
    column-gap: 10px; */

        .card1 {
          display: flex;

          h5 {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 16px;
            font-weight: 0;
            font-style: normal;
            margin-bottom: 15px;
            line-height: 1.75em;
            color: #000;
          }

          p {
            font-family: "Poppins", Helvetica, sans-serif;
            font-size: 12px;
            font-weight: 0;
            font-style: normal;
            width: 290px;
            line-height: 1.75em;
            color: #000;
          }

          .icon {
            padding-top: 10px;
            padding-right: 25px;
            font-size: 30px;

            i {
              color: #000;
            }
          }
        }
      }
    }
  `;
  return (
    <Container>
      <div className="header">
        <h4>Invite/Consult</h4>
      </div>

      <div className="Section1">
        <div className="card1 sec1">
          <div className="icon">
            <MdLeaderboard />
          </div>
          <div className="content">
            <h5>Leadership</h5>
            <p>
              I work with certain design tools to create high-fidelity designs
              and prototypes. I design accessible and usable products which aid
              business growth.
            </p>
          </div>
        </div>
        <div className="card1 sec2">
          <div className="icon">
            <AiFillMoneyCollect />
          </div>
          <div className="content">
            <h5>Finance</h5>
            <p>
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
            </p>
          </div>
        </div>
        <div className="card1 sec3">
          <div className="icon">
            <BsFillPeopleFill />
          </div>
          <div className="content">
            <h5>Relationship</h5>
            <p>
              with a 4years of experience, I develop creative, responsive, solid
              and scalable Mobile mobile applications for android and ios, for
              companies and individuals.
            </p>
          </div>
        </div>
        <div className="card1 sec4">
          <div className="icon">
            <Apartment />
          </div>
          <div className="content">
            <h5>Parenting</h5>
            <p>
              I identify and evaluates new digital technologies and use web
              analytics tools to measure site traffic to better optimize
              marketing campaigns.
            </p>
          </div>
        </div>
        <div className="card1 sec3">
          <div className="icon">
            <BsFillPeopleFill />
          </div>
          <div className="content">
            <h5>Church Health</h5>
            <p>
              with a 4years of experience, I develop creative, responsive, solid
              and scalable Mobile mobile applications for android and ios, for
              companies and individuals.
            </p>
          </div>
        </div>
        <div className="card1 sec4">
          <div className="icon">
            <Apartment />
          </div>
          <div className="content">
            <h5>Men Mentoring</h5>
            <p>
              I identify and evaluates new digital technologies and use web
              analytics tools to measure site traffic to better optimize
              marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
