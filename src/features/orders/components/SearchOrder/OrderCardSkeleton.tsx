import { Skeleton } from "@/components/ui/skeleton";

export function OrderCardSkeleton() {
  return (
    <div className="border border-card w-full h-full p-5 space-y-4 rounded-xl bg-card">
      <Skeleton className="h-6 w-1/2 rounded" />
      <Skeleton className="h-4 w-1/4 rounded" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
    </div>
  );
}
