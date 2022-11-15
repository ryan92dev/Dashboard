const Category = require("../models/Category");
const slugify = require("slugify");

const checkUpdateCategory = async (category) => {
  const categoryArray = category.split(",");
  const categoryArrayTrimmed = categoryArray.map((item) => item.trim());

  const categoryArrayTrimmedLowerCase = categoryArrayTrimmed.map((item) =>
    item.toLowerCase()
  );

  const categoryArrayIds = [];

  for (let i = 0; i < categoryArrayTrimmedLowerCase.length; i++) {
    const category = await Category.findOne({
      name: categoryArrayTrimmedLowerCase[i],
    });

    if (category) {
      categoryArrayIds.push(category._id);
    } else {
      const newCategory = await Category.create({
        name: categoryArrayTrimmedLowerCase[i],
        slug: slugify(categoryArrayTrimmedLowerCase[i], { lower: true }),
      });

      categoryArrayIds.push(newCategory._id);
    }
  }

  return categoryArrayIds;
};

module.exports = checkUpdateCategory;
