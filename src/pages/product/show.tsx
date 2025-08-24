import { useNavigation, useResource, useShow } from "@refinedev/core";
import { IProduct } from "../../modules/product/dto";

export const ProductShow = () => {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow<IProduct>({});
  const { data } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Show</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("products")}>List</button>
          <button onClick={() => edit("products", id ?? "")}>Edit</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5 className="text-lg font-bold">ID</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5 className="text-lg font-bold">Name</h5>
          <div>{record?.name}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5 className="text-lg font-bold">Description</h5>
          <div>{record?.description ?? "No description"}</div>
        </div>
      </div>
    </div>
  );
};
