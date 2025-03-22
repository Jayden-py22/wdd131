import recipes from "./recipes.mjs";

// 生成一个介于 0（含）到 num（不含）之间的随机整数
function getRandomIndex(num) {
  return Math.floor(Math.random() * num);
}

// 从 recipes 数组中返回一个随机食谱
function getRandomRecipe() {
  const index = getRandomIndex(recipes.length);
  return recipes[index];
}

// 模板函数：生成标签的 HTML，接收一个标签数组作为参数
function generateTagsHTML(tags) {
  return tags.map(tag => `<p>${tag}</p>`).join("");
}

// 模板函数：生成评分星级的 HTML，接收一个数字（1-5星），保留 aria-label 与相应的类
function generateRatingHTML(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
    ${stars}
  </span>`;
}

// 模板函数：生成完整的食谱 HTML，结构参考 index.html
function generateRecipeHTML(recipe) {
  return `
  <article class="recipe">
    <img class="recipe-image" src="${recipe.image}" alt="Recipe Image" width="100" />
    <div class="recipe-info">
      <div class="recipe-tags">
        ${generateTagsHTML(recipe.tags)}
      </div>
      <a class="recipe-name" href="#"><h2>${recipe.name}</h2></a>
      ${generateRatingHTML(recipe.rating)}
      <p class="recipe-description">${recipe.description}</p>
    </div>
  </article>
  `;
}

// 根据传入的食谱数组动态显示食谱列表
function displayRecipes(recipesArray) {
  const recipeDisplay = document.querySelector(".recipe-display");
  recipeDisplay.innerHTML = "";
  recipesArray.forEach(recipe => {
    recipeDisplay.innerHTML += generateRecipeHTML(recipe);
  });
}

// 初始化函数：页面加载时显示一个随机食谱，同时设置搜索过滤功能
function init() {
  // 页面初始状态显示一个随机食谱
  displayRecipes([getRandomRecipe()]);

  // 搜索过滤功能
  const searchInput = document.getElementById("search-string");
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // 筛选出食谱名称中包含搜索词的食谱
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
    // 若搜索框为空，则显示所有食谱；否则显示过滤结果
    if (searchTerm === "") {
      displayRecipes(recipes);
    } else {
      displayRecipes(filteredRecipes);
    }
  });
}

// 当 DOM 内容加载完成后执行 init 函数
document.addEventListener("DOMContentLoaded", init);