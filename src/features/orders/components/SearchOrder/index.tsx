import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { OrdersTable } from '../OrdersTable';

export function SearchOrder() {
  const { value, setValue, debouncedValue } = useDebouncedSearch();

  return (
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full mt-4">
          <OrdersTable
            searchAnOptions
            searchAnOptionsProps={
              {
                value,
                setValue,
                inputProps: {
                  id: 'search',
                  placeholder: 'Digite o Nome, Telefone ou Número da Ordem de Serviço',
                },
              }
            }
            debouncedValue={debouncedValue}
          />
        </div>
      </div>
  );
}
