import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { OrdersTable } from '../OrdersTable';
import { SearchOrderInput } from './SearchOrderInput';

export function SearchOrder() {
  const { value, setValue, debouncedValue } = useDebouncedSearch();

  return (
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
  );
}
