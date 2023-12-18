import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <GameCardContainer>
    <Card height={"320px"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  </GameCardContainer>
);

export default GameCard;
