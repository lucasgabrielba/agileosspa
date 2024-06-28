import { OrderDTO } from '@/types/dtos/order-dto';
import type { Row } from '@tanstack/react-table';
import { Grip,  Eye, Bell, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface ActionsDropDownProps {
  row: Row<OrderDTO>;
}

export function ActionsDropDown({row}: ActionsDropDownProps) {
  const order = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center h-8 w-8 p-0">
          <span className="sr-only">Abrir Menu</span>
          <Grip className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-popover shadow-lg rounded-sm py-1 z-10 gap-1 p-1 w-full"
        sideOffset={5}
      >
        <DropdownMenuLabel className="px-4 py-2 text-sm">
          Ações
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-muted h-px my-1" />
        <div className="space-y-2 w-full">
          <div className="flex justify-center w-full">
            <Button className="bg-primary text-primary-foreground flex items-center gap-2 w-full">
              <Eye className="h-4 w-4" />
              Ver Cliente
            </Button>
          </div>
          <div className="flex justify-center w-full">
            <Button className="bg-primary text-primary-foreground flex items-center gap-2 w-full">
              <Bell className="h-4 w-4" />
              Notificar Cliente do Status
            </Button>
          </div>
          <div className="flex justify-center w-full">
            <Button className="bg-primary text-primary-foreground flex items-center gap-2 w-full">
              <Printer className="h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
