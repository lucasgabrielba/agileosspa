import * as React from 'react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { OrderDTO } from "@/types/dtos/order-dto";
import { OrderCard } from './OrderCard';
import { OrderCardSkeleton } from './OrderCardSkeleton';

interface ListOrdersProps {
  orders?: OrderDTO[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
}

export function ListOrders({
  orders = [],
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
}: ListOrdersProps) {
  const observer = React.useRef<IntersectionObserver>();
  const lastOrderRef = React.useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading) {
    return (
      <div className="space-y-4 justify-center w-2/4">
        <OrderCardSkeleton />
        <OrderCardSkeleton />
        <OrderCardSkeleton />
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div>
        <p className='text-lg font-semibold'>Nenhuma ordem de serviço encontrada.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className='space-y-4 justify-center w-2/4'>
        {orders.map((order, index) => {
          if (orders.length === index + 1) {
            return (
              <div ref={lastOrderRef} key={order.id}>
                <OrderCard order={order} />
              </div>
            );
          } else {
            return (
              <OrderCard key={order.id} order={order} />
            );
          }
        })}
        {isFetchingNextPage && (
          <>
            <OrderCardSkeleton />
            <OrderCardSkeleton />
            <OrderCardSkeleton />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}
