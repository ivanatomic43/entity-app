import { useDeleteProductMutation, useFetchProductsQuery } from "../store/apis/productsApi";

import Table from "../common/Table";

function ProductList() {
  const { data: productsData, error } = useFetchProductsQuery();
  const [ deleteProduct ] = useDeleteProductMutation();

  let content;
  let tableConfig;
  let keyFn;

  if(error) {
    content = <div>Error loading products.</div>
  } else if(productsData) {
    if (productsData){
      tableConfig =  [
        {
          label: "Name",
          render: (product) => product.name
        },
        {
          label: "Description",
          render: (product) => product.description
        },
        {
          label: "Quantity",
          render: (product) => product.quantity
        }
      ]

      keyFn = (product) => {
        return product.id;
      }
    }
  }

  const handleDelete = (id) => {
    deleteProduct(id);
  }

  return (
    <div>
     {(productsData && tableConfig) && <Table data={productsData} config={tableConfig} keyFn={keyFn} onDelete={handleDelete} /> }
     { error && content }
    </div>
  )
}

export default ProductList
