import { Input } from "@/components/ui/input";
interface InputProps {
  value: string;
  setValue: (value: string) => void;
  inputProps: {
    id: string;
    placeholder: string;
  }
}

export function SearchInput({ value, setValue, inputProps }: InputProps) {

  return (
    <div className="w-full">
      <Input
        id={inputProps.id}
        placeholder={inputProps.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-10 text-lg p-4 border rounded-sm peer"
      />
    </div>
  )
}
