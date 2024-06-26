import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface OrderInputProps {
  value: string;
  setValue: (value: string) => void;
}

export function SearchOrderInput({ value, setValue }: OrderInputProps) {


  return (
    <div className="w-full">
      <Label htmlFor="orderSearchValue" className="text-sx text-foreground">
        Busque por
      </Label>
      <Input
        id="orderSearchValue"
        placeholder="Buscar por ordem de serviço"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-12 text-lg p-4 border rounded-sm peer"
      />
    </div>
  )
}
