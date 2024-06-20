import { Layout } from "@/components/common/Layout";
import { SearchOrder } from "@/features/orders/components/SearchOrder";

export function Orders() {

  return (
    <Layout>
      <Layout.Header>
        <h1>
          <SearchOrder />
        </h1>
      </Layout.Header>

      <Layout.Aside>
        <h1>Menu</h1>
      </Layout.Aside>

      <Layout.Main withSidebar={true}>
        <h1>Conteúdo</h1>
      </Layout.Main>

      <Layout.Footer>
        <h1>Footer</h1>
      </Layout.Footer>
    </Layout>
  );
}
