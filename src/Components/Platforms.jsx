import styled from "styled-components";
import soundcloud from "../Resources/Images/soundcloud.png";
import spotify from "../Resources/Images/spotify.png";
import applepodcast from "../Resources/Images/applepodcast.png";
import google from "../Resources/Images/googlepodcast.png";
import audiomark from "../Resources/Images/audiomark.png";
import deezer from "../Resources/Images/deezer.png";

const Platforms = () => {
  const Container = styled.div`
    #container2 {
      margin-right: auto;
      margin-bottom: 35px;
      text-align: center;

      p {
        text-align: center;
        word-spacing: 1px;
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 450;
        color: #3f3c3c;
      }

      #partner {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap: 20px;

        p {
          margin-top: auto;
          margin-bottom: auto;
        }

        .div6 {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }

      }

      img {
        height: 80px;
        width: auto;
        border-radius: 10px;
        -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
      }
    }

    @media (max-width: 1100px) {
      #container2 {
      margin-right: auto;
      margin-bottom: 35px;
      text-align: center;

      p {
        text-align: center;
        word-spacing: 1px;
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 450;
        padding: 0 20px;
        color: #3f3c3c;
      }

      #partner {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
        align-items: center;
        justify-content: center;
        gap: 5px;

        p {
          margin-top: auto;
          margin-bottom: auto;
        }

        
      }

      img {
        height: 70px;
        width: auto;
        border-radius: 10px;
        -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
      }
    }
    }

    @media (max-width: 600px) {
      #container2 {
      margin-right: auto;
      text-align: center;

      p {
        text-align: center;
        word-spacing: 1px;
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 450;
        padding: 0 20px;
        color: #3f3c3c;
      }

      #partner {
        margin-top: 10px;
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        justify-content: center;
        gap: 10px;


        p {
          margin-top: auto;
          margin-bottom: auto;
        }

        
      }

      img {
        height: 80px;
        width: auto;
        border-radius: 10px;
        -webkit-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        -moz-box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
        box-shadow: 2px 11px 24px -14px rgba(66, 68, 90, 1);
      }
    }
    }
  `;


  return (
    <Container>
      <div id="container2">
        <p>
          Join over 20,00+ Audience and organizations accross the globe,
          following me.
        </p>

        <div id="partner">
          <div className="1">
            <a href="https://on.soundcloud.com/p2Tzc">
              <img src={soundcloud} alt="" />
            </a>
          </div>
          <div className="2">
            <a href="">
              <img src={spotify} alt="" />
            </a>
          </div>
          <div className="3">
            <a href="">
              <img src={applepodcast} alt="" />
            </a>
          </div>
          <div className="4">
            <a href="">
              <img src={google} alt="" />
            </a>
          </div>
          <div className="5">
            <a href="https://audiomack.com/osiriwisdom">
              <img src={audiomark} alt="" />
            </a>
          </div>
          <div className="div6">
            <a href="">
              <img src={deezer} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Platforms;
