import {Box, FavoriteCard} from '@components';
import {Coffee} from '@domain';

interface FavoritesProps {
  favoriteList: Coffee[];
}

export function Favorites({favoriteList}: FavoritesProps) {
  return (
    <Box>
      <FavoriteCard coffee={favoriteList[0]} />
    </Box>
  );
}
