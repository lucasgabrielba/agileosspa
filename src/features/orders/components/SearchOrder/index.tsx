import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { SearchOrderHeader } from './SearchOrderHeader';
import { Layout } from '@/components/common/Layout';
import { OrdersTable } from '../OrdersTable';

export function SearchOrder() {
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebouncedSearch('');


  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <SearchOrderHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="flex flex-col items-center w-full mt-4">
          <OrdersTable
            debouncedSearchTerm={debouncedSearchTerm}
          />
        </div>
      </div>
    </Layout>
  );
}
