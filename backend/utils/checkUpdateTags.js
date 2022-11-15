const Tag = require("../models/Tag");
const slugify = require("slugify");

const checkUpdateTags = async (tags) => {
  const tagsArray = tags.split(",");
  const tagsArrayTrimmed = tagsArray.map((item) => item.trim());
  const tagsArrayTrimmedLowerCase = tagsArrayTrimmed.map((item) =>
    item.toLowerCase()
  );

  const tagsArrayIds = [];

  for (let i = 0; i < tagsArrayTrimmedLowerCase.length; i++) {
    const tag = await Tag.findOne({ name: tagsArrayTrimmedLowerCase[i] });

    if (tag) {
      tagsArrayIds.push(tag._id);
    } else {
      const newTag = await Tag.create({
        name: tagsArrayTrimmedLowerCase[i],
        slug: slugify(tagsArrayTrimmedLowerCase[i], { lower: true }),
      });

      tagsArrayIds.push(newTag._id);
    }
  }

  return tagsArrayIds;
};

module.exports = checkUpdateTags;
