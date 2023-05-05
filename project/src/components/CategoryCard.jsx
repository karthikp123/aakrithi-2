const CategoryCard = ({img, name}) => {
  return (                      
    <div className="category-card">
      <img src={img} alt="Category" />
      <button className="gradiant-down">{name}</button>
    </div>
  )
}

export default CategoryCard