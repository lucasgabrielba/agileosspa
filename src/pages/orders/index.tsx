import { Layout } from "@/components/common/Layout";
import { SearchOrder } from "@/features/orders/components/SearchOrder";

export function Orders() {

  return (
    <Layout>
      <Layout.Header className="h-48 bg-secondary">
        <h1>
          <SearchOrder />
        </h1>
      </Layout.Header>

      <Layout.Main withSidebar={false}>
        <h1>Conteúdo</h1>
      </Layout.Main>

      <Layout.Footer>
        <h1>Footer</h1>
      </Layout.Footer>
    </Layout>
  );
}
