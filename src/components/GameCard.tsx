
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {

  return (
    <Card maxW="sm" overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
