const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions: "Take Highway 20 north to Island Park...",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to one of the largest volcanic tuff cones in the world...",
    directions: "Take Highway 33 West out of Rexburg...",
    trailhead: [43.78555, -111.98996]
  }
];

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Activity 1: Simple sort
const simpleSort = simpleList.sort();
console.log("Default sort:", simpleSort);

function compareFn(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const customSort = [...simpleList].sort(compareFn);
console.log("Custom ascending sort:", customSort);

const reverseSort = [...simpleList].sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log("Descending sort:", reverseSort);

// Activity 2: Filtering strings
function searchList(list, query) {
  function searchCallback(item) {
    return item.toLowerCase().includes(query.toLowerCase());
  }
  return list.filter(searchCallback);
}
console.log("Search for 'b':", searchList(simpleList, "b"));
console.log("Search for 'an':", searchList(simpleList, "an"));

// Activity 3: Filtering and sorting hike objects
function searchHikes(list, query) {
  function searchCallback(hike) {
    return (
      hike.name.toLowerCase().includes(query.toLowerCase()) ||
      hike.description.toLowerCase().includes(query.toLowerCase()) ||
      hike.tags.find(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }

  const filtered = list.filter(searchCallback);

  // Convert distance to float for correct sorting
  const sorted = filtered.sort((a, b) => {
    const aDist = parseFloat(a.distance);
    const bDist = parseFloat(b.distance);
    return aDist - bDist;
  });

  return sorted;
}

console.log("Search hikes for 'yellowstone':", searchHikes(hikes, "yellowstone"));
console.log("Search hikes for 'moderate':", searchHikes(hikes, "moderate"));
console.log("Search hikes for 'al':", searchHikes(hikes, "al"));