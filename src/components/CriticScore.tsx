import { Badge } from '@chakra-ui/react';

interface Props {
  criticScore: number;
}
const CriticScore = ({ criticScore }: Props) => {
  const color = criticScore > 75 ? 'green' : criticScore > 50 ? 'yellow' : '';
  return (
    <Badge
      colorScheme={color}
      fontSize={'14px'}
      borderRadius={'20%'}
      paddingX={2}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
