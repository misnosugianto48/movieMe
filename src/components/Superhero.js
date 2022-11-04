import { Container, Row, Col, Card, Image } from "react-bootstrap";
import antMan from "../asset/superhero/ant-man.jpg";
import antWasp from "../asset/superhero/ant-man and wasp.jpg";
import blackWidow from "../asset/superhero/black-widow-full-poster.jpg";
import captainMarvel from "../asset/superhero/Captain marvel.jpg";
import guardian from "../asset/superhero/guardian galaxy.jpg";
import infinityWar from "../asset/superhero/infinity war.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-center text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image src={antMan} alt="Ant-Man" className="trendingImage" />
              <Card.Title className="text-center">The Ant Man</Card.Title>
              <Card.Text className="text-left">
                Ant-Man is a 2015 American superhero film based on the Marvel
                Comics characters of the same name: Scott Lang and Hank Pym.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={antWasp}
                alt="Ant-Man-Wasp"
                className="trendingImage"
              />
              <Card.Title className="text-center">
                Ant Man and The Wasp
              </Card.Title>
              <Card.Text className="text-left">
                Ant-Man and the Wasp is a 2018 American superhero film based on
                Marvel Comics featuring the characters Scott Lang / Ant-Man and
                Hope Pym / Wasp.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={blackWidow}
                alt="Black-Widow"
                className="trendingImage"
              />
              <Card.Title className="text-center">Black Widow</Card.Title>
              <Card.Text className="text-left">
                Black Widow is a 2021 American superhero film based on Marvel
                Comics featuring the character of the same name.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={captainMarvel}
                alt="Captain-Marvel"
                className="trendingImage"
              />
              <Card.Title className="text-center">Captain Marvel</Card.Title>
              <Card.Text className="text-left">
                Captain Marvel is a 2019 American superhero film based on Marvel
                Comics featuring the character Carol Danvers / Captain Marvel.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image src={guardian} alt="guardian" className="trendingImage" />
              <Card.Title className="text-center">
                The Guardian of Galaxy
              </Card.Title>
              <Card.Text className="text-left">
                Captain Marvel is a 2019 American superhero film based on Marvel
                Comics featuring the character Carol Danvers / Captain Marvel.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={infinityWar}
                alt="Infinity-War"
                className="trendingImage"
              />
              <Card.Title className="text-center">
                Avanger : Infinity War
              </Card.Title>
              <Card.Text className="text-left">
                Avengers: Infinity War is a 2018 American superhero film based
                on the Marvel Comics superhero team the Avengers.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
