import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { Layout } from '@/components/common/Layout';
import { OrdersTable } from '../OrdersTable';
import { SearchOrderInput } from './SearchOrderInput';

export function SearchOrder() {
  const { value, setValue, debouncedValue } = useDebouncedSearch();

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <SearchOrderInput
          value={value}
          setValue={setValue}
        />
        <div className="flex flex-col items-center w-full mt-4">
          <OrdersTable
            debouncedValue={debouncedValue}
          />
        </div>
      </div>
    </Layout>
  );
}
