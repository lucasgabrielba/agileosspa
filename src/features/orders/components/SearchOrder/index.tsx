import { useOrdersQuery } from '../../hooks/useOrdersQuery';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { SearchOrderHeader } from './SearchOrderHeader';
import { Layout } from '@/components/common/Layout';
import { ListOrders } from './ListOrders';

export function SearchOrder() {
  const { organization } = useOrganizationStore();
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebouncedSearch('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useOrdersQuery({
    queryKey: `orders ${debouncedSearchTerm}`,
    organization,
    search: debouncedSearchTerm,
  });

  const orders = data ? data.pages.flatMap(page => page.data) : [];

  return (
    <Layout>
      <Layout.Header>
        <SearchOrderHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Layout.Header>

      <Layout.Main className='justify-center p-3' withSidebar={false} >
        <ListOrders
          orders={orders}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
        />
      </Layout.Main>
    </Layout>
  );
}

