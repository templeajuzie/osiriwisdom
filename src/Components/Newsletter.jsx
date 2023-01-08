import styled from "styled-components";

const Newsletter = () => {
  const Container = styled.div`
    .testgen {
      background: #000;
      text-align: center;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 35px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-family: "Manrope";
        font-size: 40px;
        font-weight: bold;
        color: aliceblue;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      p {
        padding-top: 10px;
        margin-top: 0;
        font-size: 14px;
        color: #fff;
        width: 500px;
        font-weight: 500;
      }

      .emailformgenral {
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
        background-color: aliceblue;
        padding-left: 10px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 25px;
        text-align: center;

        .emailform [type="email"] {
          border: none;
          outline: none;
          padding-left: 10px;
          size: 45;
          color: #1b1c31;
          background: aliceblue;
        }

        .emailform [type="submit"] {
          border-radius: 25px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 30px;
          padding-right: 30px;
          margin-left: 4px;
          background-color: gold;
          color: #000;
          box-shadow: 3px 3px 2px gray;
          border: none;
        }
      }
    }

    @media (max-width: 600px) {
      .testgen {
      background: #000;
      text-align: center;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 35px;
      padding-bottom: 50px;

      h3 {
        font-family: "Manrope";
        font-size: 25px;
        font-weight: bold;
        color: aliceblue;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      p {
        padding-top: 10px;
        margin-top: 0;
        font-size: 14px;
        margin-left: auto;
        margin-right: auto;
        width: 360px;
        justify-content: center;
        color: #fff;
        font-weight: 500;
      }

      .emailformgenral {
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
        background-color: aliceblue;
        padding-left: 10px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 25px;
        text-align: center;

        .emailform [type="email"] {
          border: none;
          outline: none;
          padding-left: 10px;
          size: 20;
          color: #1b1c31;
          background: aliceblue;
        }

        .emailform [type="submit"] {
          border-radius: 25px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 30px;
          padding-right: 30px;
          margin-left: 4px;
          background-color: gold;
          color: #000;
          box-shadow: 3px 3px 2px gray;
          border: none;
        }
      }
    }
    }
  `;

  return (
    <Container>
      <div className="testgen">
        <h3> Join Our Newsletters </h3>
        <p>
          Subscribe and get access to our email masterclass , best course discount and tips.
          enter your email below.
        </p>

        <div className="emailformgenral">
          <form action="" className="emailform">
            <input
              type="email"
              name=""
              id=".email"
              placeholder="Enter Address"
              size={30}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
