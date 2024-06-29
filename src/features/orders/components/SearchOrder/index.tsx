import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { OrdersTable } from '../OrdersTable';
import { PlusIcon } from 'lucide-react';

export function SearchOrder() {
  const { value, setValue, debouncedValue } = useDebouncedSearch();

  const searchAnOptionsProps = {
      value,
      setValue,
      inputProps: {
        id: 'search',
        placeholder: 'Digite o Nome, Telefone ou Número da Ordem de Serviço',
      },
      button: {
        url: '/orderm-de-servico/nova',
        text: 'Nova Ordem de Serviço',
        icon: <PlusIcon className='h-5 w-5'/>,
      },
  }

  return (
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full mt-4">
          <OrdersTable
            searchAnOptions
            searchAnOptionsProps={searchAnOptionsProps}

            debouncedValue={debouncedValue}
          />
        </div>
      </div>
  );
}
