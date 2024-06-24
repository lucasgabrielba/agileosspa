import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { OrderDTO } from '@/types/dtos/order-dto';

interface OrderCardProps {
  order: OrderDTO
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Card className="border border-card w-full h-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Ordem de Serviço #{order.number}
        </CardTitle>
        <p className={`text-sm font-semibold ${order.status === 'open' ? 'text-green-500' : 'text-red-500'}`}>
          Status: {order.status}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-semibold">Cliente:</p>
            <p>{order.client.name}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Descrição do Problema:</p>
            <p>{order.problem_description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Prioridade:</p>
            <p className={`${order.priority === 'high' ? 'text-red-500' : 'text-yellow-500'}`}>
              {order.priority}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Aparelho(s):</p>
            {order.items.map(item => (
              <div key={item?.id}>
                <Card className="p-2">
                  <p>Modelo: {item.model}</p>
                  <p>Serial: {item.serial}</p>
                  <p>Marca: {item.brand}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
