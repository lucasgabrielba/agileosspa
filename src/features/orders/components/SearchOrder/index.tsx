import { Button } from '@/components/ui/button';
import * as React from 'react';
import { useOrdersQuery } from '../../hooks/useOrdersQuery';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { SearchOrderInput } from './SearchOrderInput';

export function SearchOrder() {
  const { organization } = useOrganizationStore();
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebouncedSearch('');

  const { data } = useOrdersQuery({
    queryKey: `orders ${debouncedSearchTerm}`,
    organization,
    search: debouncedSearchTerm,
  });

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex items-center justify-center w-full">

      <div className='flex flex-col items-start gap-3'>

        <h1 className="lg:text-3xl text-xl text-foreground font-semibold">
          Encontre uma Ordem de Serviço
        </h1>

        <div className="flex flex-row items-end justify-bettwen w-full gap-2">
          <SearchOrderInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Button className="h-12 text-lg bg-primary text-primary-foreground rounded-sm">
            Criar Nova
          </Button>
        </div>
      </div>

    </div>
  );
}
