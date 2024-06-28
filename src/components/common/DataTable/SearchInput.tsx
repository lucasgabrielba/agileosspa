import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  inputProps: {
    id: string;
    label: string;
    placeholder: string;
  }
}

export function SearchInput({ value, setValue, inputProps }: InputProps) {

  return (
    <div className="w-full">
      <Label htmlFor={inputProps.id} className="text-sx text-foreground">
        {inputProps.label}
      </Label>
      <Input
        id={inputProps.id}
        placeholder={inputProps.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-12 text-lg p-4 border rounded-sm peer"
      />
    </div>
  )
}
