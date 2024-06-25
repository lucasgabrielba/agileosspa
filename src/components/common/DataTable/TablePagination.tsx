import { Button } from '@/components/ui/button';
import { Page } from '@/types/utils/page';

interface TablePaginationProps<T> {
  data: Page<T>
  isPlaceholderData: boolean;
  page: number;
  setPage: (page: number) => void;
}

export function TablePagination<T>({
  data,
  isPlaceholderData,
  page,
  setPage,
}: TablePaginationProps<T>) {

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-4">
      <div className="text-sm mb-2 lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-start">
        {`Página ${data?.current_page ?? 0} de ${data?.last_page ?? 0}`}
      </div>
      <div className="text-sm mb-2 lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-start">
        {data?.total ?? 0} {'resultados'}
      </div>
      <div className="flex justify-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="select-none"
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (!isPlaceholderData && data?.hasMore) {
              setPage(page + 1)
            }
          }}
          disabled={isPlaceholderData || !data?.hasMore}
          className="select-none"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
