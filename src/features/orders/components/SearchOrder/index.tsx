import { Button } from '@/components/ui/button';
import * as React from 'react';
import { useOrdersQuery } from '../../hooks/useOrdersQuery';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useDebouncedSearch } from '@/components/common/DebounceSearch';
import { SearchOrderInput } from './SearchOrderInput';
import { api } from '@/config/api';

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

  React.useEffect(() => {
    const u = async () => {
      await api.get(`/organizations/${organization.id}/orders`)
    }
    u()
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <form className="w-full flex flex-wrap gap-4 items-end">
        <div className="flex-1 space-y-3">
          <h1 className="lg:text-3xl text-xl text-foreground font-semibold">Encontre uma Ordem de Serviço</h1>
          <SearchOrderInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <Button className="h-12 text-lg bg-primary text-primary-foreground rounded-sm">
          Criar Nova
        </Button>
      </form>
    </div>
  );
}
