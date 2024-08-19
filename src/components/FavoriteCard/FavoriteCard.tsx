import {Coffee} from '@domain';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface FavoriteCardProps {
  coffee: Coffee;
}

export function FavoriteCard({coffee}: FavoriteCardProps) {
  return (
    <Box backgroundColor="GRAY_800" borderWidth={1} borderColor="GRAY_700">
      <Text textAlign="center" bold color="GRAY_200" preset="headingMedium">
        {coffee?.name}
      </Text>
      <Text
        textAlign="center"
        preset="paragraphExtraSmall"
        color="GRAY_400"
        marginBottom="s16">
        {coffee?.description}
      </Text>
      <Text textAlign="center" color="YELLOW_DARK" preset="headingLarge" bold>
        {coffee?.price}
      </Text>
    </Box>
  );
}
