import {Coffee} from '@domain';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {useState} from 'react';
import {tagMapProps, TagVariants} from './tagMapProps';

interface TagProps {
  text: Coffee['category'];
  preset: TagVariants;
}

export function Tag({text, preset}: TagProps) {
  return (
    <Box
      paddingHorizontal="s12"
      paddingVertical="s4"
      borderRadius="s100"
      {...tagMapProps[preset]}>
      <Text color="PURPLE" preset="paragraphExtraSmall" normalBold>
        {text?.toUpperCase()}
      </Text>
    </Box>
  );
}
