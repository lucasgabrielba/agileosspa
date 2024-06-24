import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/config/api';
import { Page } from '@/types/utils/page';
import { OrderDTO } from '@/types/dtos/order-dto';
import { OrganizationDTO } from '@/types/dtos/organization-dto';

interface OrderQueryProps {
  queryKey: string;
  organization: OrganizationDTO;
  search?: string;
}

export const useOrdersQuery = ({
  queryKey,
  organization,
  search = null,
}: OrderQueryProps) => {
  const fetchOrders = async ({ pageParam = 1 }): Promise<Page<OrderDTO>> => {
    const params = {
      per_page: 15,
      page: pageParam,
      include: 'client,client.phones',
    };

    if (search) {
      params['search'] = search;
    }

    const response = await api.get(`/organizations/${organization.id}/orders`, { params });

    return response.data;
  };

  return useInfiniteQuery({
    queryKey: [queryKey, organization.id, search],
    queryFn: fetchOrders,
    getNextPageParam: (lastPageLoaded: Page<OrderDTO>) => {
      return lastPageLoaded.meta?.next_page_url ? lastPageLoaded.meta.current_page + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
