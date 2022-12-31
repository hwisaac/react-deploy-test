import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState, categories } from "../atoms";

interface ICategory {
  category: string;
}

function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const setCategoryList = useSetRecoilState(categories);
  const handleValid = ({ category }: ICategory) => {
    setCategoryList((prev) => [...prev, category]);
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder='Write a category' />
      <button>add category</button>
    </form>
  );
}

export default CreateToDo;
