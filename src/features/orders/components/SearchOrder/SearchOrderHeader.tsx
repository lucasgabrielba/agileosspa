import { Button } from "@/components/ui/button";
import { SearchOrderInput } from "./SearchOrderInput";

interface SearchOrderHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function SearchOrderHeader({ searchTerm, setSearchTerm }: SearchOrderHeaderProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className='flex flex-col items-start w-1/2'>
        <h1 className="lg:text-3xl text-xl text-foreground font-semibold">
          Encontre uma Ordem de Serviço
        </h1>
        <div className="flex flex-row items-end justify-between w-full gap-2">
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
  )
}
