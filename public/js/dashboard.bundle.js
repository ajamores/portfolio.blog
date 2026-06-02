// public/js/api.js
var getAllBlogPosts = async () => {
  const res = await fetch(`/api/blog/admin/all`, {
    method: "GET",
    credentials: "include"
  });
  if (!res.ok) {
    throw new Error("Error fetching all blog posts");
  }
  const data = await res.json();
  return data;
};
var logout = async () => {
  try {
    const res = await fetch(`/auth/logout`, {
      method: "POST",
      credentials: "include"
    });
    if (!res.ok) {
      throw new Error("Error when logging out");
    }
    window.location.href = "/blog";
    ;
  } catch (error) {
    console.log(error);
  }
};

// public/js/dashboard.js
var postData = await getAllBlogPosts();
console.log(postData);
var posts = postData.data.posts;
var container = document.getElementById("posts");
posts.forEach((elem) => {
  let post = document.createElement("article");
  post.className = "post";
  let postTitle = document.createElement("h2");
  postTitle.className = "postTitle";
  postTitle.textContent = elem.title;
  let postDate = document.createElement("span");
  postDate.className = "postDate";
  const date = new Date(elem.createdAt).toISOString().split("T")[0];
  postDate.textContent = date;
  let postExcerpt = document.createElement("p");
  postExcerpt.className = "postExcerpt";
  postExcerpt.textContent = elem.excerpt;
  let postCategories = document.createElement("div");
  postCategories.className = "postCategories";
  elem.categories.forEach((tag) => {
    let t = document.createElement("div");
    t.className = "tag";
    t.textContent = tag.name;
    postCategories.append(t);
  });
  const edit = document.createElement("a");
  edit.className = "middle";
  edit.textContent = "Edit";
  edit.href = `/admin/edit/${elem.slug}`;
  post.append(postDate, postTitle, postExcerpt, postCategories, edit);
  container.append(post);
});
var logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", async () => {
  await logout();
});
//# sourceMappingURL=dashboard.bundle.js.map
