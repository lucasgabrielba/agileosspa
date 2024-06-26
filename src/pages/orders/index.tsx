import { Layout } from "@/components/common/Layout";
import { SearchOrder } from "@/features/orders/components/SearchOrder";

export function Orders() {
  return (
    <Layout>

      <Layout.Main withSidebar={false}>
        <SearchOrder />
      </Layout.Main>

    </Layout>
  );
}
