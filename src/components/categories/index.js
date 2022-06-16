import "./style.scss";
import CategoryItem from "../category-item";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...category }) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
