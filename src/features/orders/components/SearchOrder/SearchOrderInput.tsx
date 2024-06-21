import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface OrderInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function SearchOrderInput({ searchTerm, setSearchTerm }: OrderInputProps) {

  const [placeholder, setPlaceholder] = React.useState('Nome do Cliente');
  const placeholders = ['Nome do Cliente', 'Número da Ordem de Serviço', 'Equipamento', 'Telefone do Cliente'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Label htmlFor="searchTerm" className="text-sx text-foreground">
        Busque por
      </Label>
      <Input
        id="orderSearchTerm"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-12 text-lg p-4 border rounded-sm peer"
      />
    </div>
  )
}