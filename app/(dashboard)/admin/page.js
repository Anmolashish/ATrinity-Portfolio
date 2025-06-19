"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [projectsRes, blogRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/blogs"),
        ]);

        if (!projectsRes.ok) throw new Error("Failed to fetch projects");
        if (!blogRes.ok) throw new Error("Failed to fetch blog posts");

        const projectsData = await projectsRes.json();
        const blogData = await blogRes.json();

        setProducts(Array.isArray(projectsData) ? projectsData : []);
        setBlogPosts(Array.isArray(blogData) ? blogData : []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setProducts([]);
        setBlogPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value,
      },
    }));
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", files[0]);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { url } = await response.json();

      if (activeTab === "projects") {
        setFormData((prev) => ({
          ...prev,
          images: [...(prev.images || []), url],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          image: url,
        }));
      }
    } catch (error) {
      console.error("Upload error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    if (activeTab === "projects") {
      setFormData((prev) => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        image: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const endpoint =
        activeTab === "projects" ? "/api/projects" : "/api/blogs";
      const method = editingItem ? "PUT" : "POST";

      const payload = { ...formData };
      if (activeTab === "projects") {
        if (typeof payload.technologies === "string") {
          payload.technologies = payload.technologies
            .split(",")
            .map((t) => t.trim());
        }
      }

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${editingItem ? "update" : "create"} item`);
      }

      // Refresh data
      const [projectsRes, blogRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/blogs"),
      ]);

      const projectsData = await projectsRes.json();
      const blogData = await blogRes.json();

      setProducts(Array.isArray(projectsData) ? projectsData : []);
      setBlogPosts(Array.isArray(blogData) ? blogData : []);
      setEditingItem(null);
      setFormData({});
    } catch (err) {
      console.error("Submit error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    const editableData = { ...item };
    if (activeTab === "projects") {
      if (Array.isArray(editableData.technologies)) {
        editableData.technologies = editableData.technologies.join(", ");
      }
    }
    setFormData(editableData);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Failed to logout");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setIsLoading(true);
    try {
      const endpoint =
        activeTab === "projects" ? "/api/projects" : "/api/blogs";
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });

      if (!response.ok) throw new Error("Failed to delete item");

      const [projectsRes, blogRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/blogs"),
      ]);

      const projectsData = await projectsRes.json();
      const blogData = await blogRes.json();

      setProducts(Array.isArray(projectsData) ? projectsData : []);
      setBlogPosts(Array.isArray(blogData) ? blogData : []);
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  const currentData =
    activeTab === "projects"
      ? Array.isArray(products)
        ? products
        : []
      : Array.isArray(blogPosts)
      ? blogPosts
      : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-light.svg"
              alt="CodeCrew Logo"
              className="h-8"
            />
            <span className="ml-3 text-xl font-bold">CodeCrew Admin</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-200 transition-colors"
                >
                  View Site
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-200 transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "projects"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "blog"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("blog")}
          >
            Blog Posts
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {editingItem ? "Edit" : "Add New"}{" "}
            {activeTab === "projects" ? "Project" : "Blog Post"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {activeTab === "projects" ? (
                <>
                  <div>
                    <label className="block text-gray-700 mb-2">Client</label>
                    <input
                      type="text"
                      name="client"
                      value={formData.client || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Type*</label>
                    <select
                      name="type"
                      value={formData.type || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="commercial">Commercial</option>
                      <option value="academic">Academic</option>
                      <option value="personal">Personal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Technologies (comma separated)
                    </label>
                    <input
                      type="text"
                      name="technologies"
                      value={formData.technologies || ""}
                      onChange={handleArrayInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="March 2023"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Demo URL</label>
                    <input
                      type="text"
                      name="demoUrl"
                      value={formData.demoUrl || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      name="githubUrl"
                      value={formData.githubUrl || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Images*</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full px-4 py-2 border rounded-lg mb-2"
                      disabled={isLoading}
                    />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {formData.images?.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={img}
                            alt={`Preview ${index}`}
                            className="h-24 w-full object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      Description*
                    </label>
                    <textarea
                      name="description"
                      value={formData.description || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      Challenges
                    </label>
                    <textarea
                      name="challenges"
                      value={formData.challenges || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="3"
                    ></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Category*
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Slug*</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                      placeholder="why-nextjs-is-the-future"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="May 15, 2023"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Read Time
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="5 min read"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      Upload Image*
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full px-4 py-2 border rounded-lg mb-2"
                      disabled={isLoading}
                    />
                    {formData.image && (
                      <div className="relative group mt-2">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(0)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      Author Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.author?.name || ""}
                      onChange={handleAuthorChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Author Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.author?.role || ""}
                      onChange={handleAuthorChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Author Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            setFormData((prev) => ({
                              ...prev,
                              author: {
                                ...prev.author,
                                image: event.target.result,
                              },
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {formData.author?.image && (
                      <div className="relative group mt-2">
                        <img
                          src={formData.author.image}
                          alt="Author Preview"
                          className="h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              author: {
                                ...prev.author,
                                image: undefined,
                              },
                            }));
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Content*</label>
                    <textarea
                      name="content"
                      value={formData.content || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              {editingItem && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setFormData({});
                  }}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  disabled={isLoading}
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading
                  ? "Processing..."
                  : editingItem
                  ? "Update"
                  : "Create"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === "projects" ? "Project" : "Post"} Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {activeTab === "projects" ? "Client" : "Category"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.length > 0 ? (
                  currentData.map((item) => (
                    <tr key={item._id || item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={
                                activeTab === "projects"
                                  ? Array.isArray(item.images) &&
                                    item.images.length > 0
                                    ? item.images[0]
                                    : "/images/default-project.jpg"
                                  : item.image || "/images/default-blog.jpg"
                              }
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {activeTab === "projects"
                                ? item.type
                                : item.readTime}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {activeTab === "projects"
                            ? item.client
                            : item.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {item.date || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-blue-600 hover:text-blue-900 mr-4 disabled:opacity-50"
                          disabled={isLoading}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id || item.id)}
                          className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          disabled={isLoading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No {activeTab === "projects" ? "projects" : "blog posts"}{" "}
                      found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
