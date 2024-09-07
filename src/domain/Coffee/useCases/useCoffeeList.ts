import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {CoffeeRepository} from '../coffeeRepository/coffeeRepositoryModel';

interface Props {
  getList: CoffeeRepository['getList'];
}

export function useCoffeeList({getList}: Props) {
  const query = useQuery({
    queryKey: [QueryKeys.CoffeeList],
    queryFn: getList,
    staleTime: 1000 * 15,
  });
  return {
    coffeeList: query.data?.slice(5, 10),
    isError: query.isError,
    isLoading: query.isLoading,
  };
}
