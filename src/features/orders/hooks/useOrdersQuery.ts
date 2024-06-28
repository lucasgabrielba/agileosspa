import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { api } from '@/config/api';
import { Page } from '@/types/utils/page';
import { OrderDTO } from '@/types/dtos/order-dto';
import { OrganizationDTO } from '@/types/dtos/organization-dto';

interface OrderQueryProps {
  queryKey: string;
  organization: OrganizationDTO;
  search?: string;
  page: number;
  sorting?: {
    desc: boolean;
  }[];
  perPage?: number;
}

export const useOrdersQuery = ({
  queryKey,
  organization,
  search = null,
  page = 1,
  sorting = null,
  perPage = 5,
}: OrderQueryProps) => {
  const fetchOrders = async (): Promise<Page<OrderDTO>> => {
    const params = {
      per_page: perPage,
      page,
      include: 'client,client.phones',
    };

    if (search) {
      params['search'] = search;
      page = 1;
    }

    if (sorting) {
      params['order'] = sorting[0].desc ? '-' : '' + 'created_at'
    }

    const response = await api.get(`/organizations/${organization.id}/orders`, { params });

    return response.data;
  };

  return useQuery({
    queryKey: [queryKey, page],
    queryFn: fetchOrders,
    placeholderData: keepPreviousData,
  });
};
