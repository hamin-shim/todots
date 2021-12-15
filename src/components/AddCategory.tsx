import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CategoryList } from "../atoms";
interface IForm {
  newCategory: string;
}
const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 20px 0;
  bottom: 0px;
  border: 1px solid black;
  h1 {
    margin: 0 5px;
  }
  .each {
    border: 1px solid black;
    padding: 0 2px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
function AddCategory() {
  const [categoryList, setCategoryList] = useRecoilState(CategoryList);
  const onValid = ({ newCategory }: IForm) => {
    setCategoryList((oldCategories) => [
      { label: newCategory, id: Date.now() },
      ...oldCategories,
    ]);
    setValue("newCategory", "");
  };
  const { register, handleSubmit, setValue } = useForm<IForm>({});
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("newCategory", {
              required: "Please write a new category",
            })}
            placeholder="Add new Category"
          />
          <button>add</button>
        </form>
        <h1>Category you have: </h1>
        {categoryList.map((each) => {
          if (each.label !== "") {
            return <span className="each">{each.label}</span>;
          }
        })}
      </Container>
      <hr />
    </>
  );
}
export default AddCategory;
