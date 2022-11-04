import { Container, Row, Col, Card, Image } from "react-bootstrap";
import backFuture from "../asset/trending/back-to-the-future.jpg";
import freeGuy from "../asset/trending/Free-Guy.jpg";
import hotPursuit from "../asset/trending/hot-pursuit.jpg";
import johnyEng from "../asset/trending/jogny-english.jpg";
import joker from "../asset/trending/joker.jpg";
import tenet from "../asset/trending/Tenet.jpeg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-center text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={backFuture}
                alt="Back-Future"
                className="trendingImage"
              />
              <Card.Title className="text-center">
                Back To The Future
              </Card.Title>
              <Card.Text className="text-left">
                Back to the Futureis a 1985 American science fiction
                filmdirected by Robert Zemeckisand written by Zemeckis and Bob
                Gale.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image src={freeGuy} alt="Free-Guy" className="trendingImage" />
              <Card.Title className="text-center">Free Guy</Card.Title>
              <Card.Text className="text-left">
                Free Guy is a 2021 American action-comedy film directed and
                produced by Shawn Levy from a screenplay by Matt Lieberman and
                Zak Penn, and a story by Lieberman.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={hotPursuit}
                alt="Hot-Pursuit"
                className="trendingImage"
              />
              <Card.Title className="text-center">Hot Pursuit</Card.Title>
              <Card.Text className="text-left">
                Hot Pursuit is a 2015 American action comedy film directed by
                Anne Fletcher and distributed by Warner Bros. Pictures.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image
                src={johnyEng}
                alt="Johny-English"
                className="trendingImage"
              />
              <Card.Title className="text-center">Johny English</Card.Title>
              <Card.Text className="text-left">
                Johnny English is a 2003 spy comedy film directed by Peter
                Howitt and written by Neal Purvis, Robert Wade and William
                Davies.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image src={joker} alt="Joker" className="trendingImage" />
              <Card.Title className="text-center">Joker</Card.Title>
              <Card.Text className="text-left">
                Joker is a 2019 American psychological thriller film directed by
                Todd Phillips, who also co-wrote the screenplay with Scott
                Silver.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white bg-dark text-center movieImage">
              <Image src={tenet} alt="Tenet" className="trendingImage" />
              <Card.Title className="text-center">Tenet</Card.Title>
              <Card.Text className="text-left">
                Tenet is a 2020 science fiction action thriller spy film
                directed, written, and co-produced by Christopher Nolan with his
                wife Emma Thomas.
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

export default Trending;
