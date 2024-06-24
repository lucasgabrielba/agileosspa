import { Loader2 } from 'lucide-react';
import * as React from 'react';

interface SpinnerProps {
  className?: string;

}

const Spinner: React.FC = ({ className }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`w-8 h-8 animate-spin ${className}`} />
    </div>
  );
};

export default Spinner;
