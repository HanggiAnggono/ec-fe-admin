import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const ProductCreate = () => {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Create</h1>
        <div>
          <button
            onClick={() => {
              list("products");
            }}
          >
            List
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label>
            <div style={{ marginRight: "8px" }}>Name</div>
            <input
              type="text"
              className="rounded-md p-1"
              {...register("name", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.name?.message as string}
            </span>
          </label>

          <label>
            <div style={{ marginRight: "8px" }}>Description</div>
            <textarea
              rows={10}
              className="border-2 rounded-md p-1"
              {...register("description")}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.description?.message as string}
            </span>
          </label>

          <div>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};
