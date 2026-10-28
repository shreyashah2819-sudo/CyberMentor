
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContentManagement.css";

function ContentManagement() {
  const navigate = useNavigate();

  const [contents, setContents] = useState([
    { id: 1, title: "Phishing Awareness", category: "Phishing", type: "Article", status: "Published" },
    { id: 2, title: "Password Safety Guide", category: "Password Security", type: "Guide", status: "Published" },
    { id: 3, title: "Understanding Malware", category: "Malware", type: "Article", status: "Draft" },
    { id: 4, title: "Network Security Basics", category: "Network Security", type: "Lesson", status: "Published" },
    { id: 5, title: "Social Engineering Attacks", category: "Cyber Safety", type: "Quiz", status: "Draft" },
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    title: "",
    category: "Cyber Safety",
    type: "Article",
    status: "Draft",
    description: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const categories = [
    "Cyber Safety",
    "Phishing",
    "Password Security",
    "Malware",
    "Network Security",
    "Privacy",
  ];

  const filteredContents = contents.filter((content) => {
    const matchesSearch =
      `${content.title} ${content.category} ${content.type}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || content.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" || content.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const publishedCount = contents.filter(
    (content) => content.status === "Published"
  ).length;

  const draftCount = contents.filter(
    (content) => content.status === "Draft"
  ).length;

  const openAddForm = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setShowForm(true);
  };

  const openEditForm = (content) => {
    setEditingId(content.id);
    setFormData({
      title: content.title,
      category: content.category,
      type: content.type,
      status: content.status,
      description: content.description || "",
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    if (editingId !== null) {
      setContents((previous) =>
        previous.map((content) =>
          content.id === editingId
            ? {
                ...content,
                ...formData,
                title: formData.title.trim(),
              }
            : content
        )
      );
    } else {
      setContents((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...formData,
          title: formData.title.trim(),
        },
      ]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const deleteContent = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this demo content?"
    );

    if (confirmed) {
      setContents((previous) =>
        previous.filter((content) => content.id !== id)
      );
    }
  };

  const togglePublish = (id) => {
    setContents((previous) =>
      previous.map((content) =>
        content.id === id
          ? {
              ...content,
              status:
                content.status === "Published" ? "Draft" : "Published",
            }
          : content
      )
    );
  };

  return (
    <div className="cm-page">
      <header className="cm-header">
        <div className="cm-brand">
          <div className="cm-logo">🛡️</div>
          <div>
            <h2>CyberMentor</h2>
            <span>CONTENT MANAGEMENT</span>
          </div>
        </div>

        <button
          className="cm-back-button"
          onClick={() => navigate("/admin")}
        >
          ← Admin Dashboard
        </button>
      </header>

      <main className="cm-main">
        <section className="cm-page-heading">
          <div>
            <p className="cm-breadcrumb">Admin / Content Management</p>
            <h1>Content Management</h1>
            <p className="cm-description">
              Create and manage cybersecurity learning materials.
            </p>
          </div>

          <button className="cm-primary-button" onClick={openAddForm}>
            + Add Content
          </button>
        </section>

        <section className="cm-welcome">
          <div>
            <span className="cm-eyebrow">LEARNING RESOURCE CENTER</span>
            <h2>Knowledge is your best defense. 🔐</h2>
            <p>
              Keep your cybersecurity lessons, guides and quizzes organized.
            </p>
          </div>
          <div className="cm-welcome-icon">📚</div>
        </section>

        <section className="cm-stats">
          <div className="cm-stat-card">
            <div className="cm-stat-icon purple">▤</div>
            <p>Total Content</p>
            <h2>{contents.length}</h2>
          </div>

          <div className="cm-stat-card">
            <div className="cm-stat-icon green">✓</div>
            <p>Published</p>
            <h2>{publishedCount}</h2>
          </div>

          <div className="cm-stat-card">
            <div className="cm-stat-icon orange">✎</div>
            <p>Drafts</p>
            <h2>{draftCount}</h2>
          </div>

          <div className="cm-stat-card">
            <div className="cm-stat-icon pink">◈</div>
            <p>Categories</p>
            <h2>{new Set(contents.map((item) => item.category)).size}</h2>
          </div>
        </section>

        {showForm && (
          <section className="cm-form-panel">
            <div className="cm-form-heading">
              <div>
                <h3>{editingId !== null ? "Edit Content" : "Add New Content"}</h3>
                <p>Enter the learning resource details below.</p>
              </div>
              <button
                className="cm-close-button"
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="cm-form-grid">
                <label>
                  Content Title
                  <input
                    type="text"
                    placeholder="Enter content title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </label>

                <label>
                  Category
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Content Type
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option>Article</option>
                    <option>Guide</option>
                    <option>Lesson</option>
                    <option>Quiz</option>
                    <option>Video</option>
                  </select>
                </label>

                <label>
                  Status
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </label>
              </div>

              <label className="cm-description-field">
                Short Description
                <textarea
                  rows="3"
                  placeholder="Write a short description (optional)"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </label>

              <div className="cm-form-actions">
                <button
                  type="button"
                  className="cm-cancel-button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="cm-primary-button">
                  {editingId !== null ? "Save Changes" : "Create Content"}
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="cm-content-panel">
          <div className="cm-panel-heading">
            <div>
              <h3>Learning Resources</h3>
              <p>Manage your cybersecurity educational content.</p>
            </div>
            <span className="cm-count-badge">
              {filteredContents.length} items
            </span>
          </div>

          <div className="cm-toolbar">
            <input
              className="cm-search"
              type="search"
              placeholder="🔍 Search content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="cm-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="cm-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div className="cm-table-wrapper">
            <table className="cm-table">
              <thead>
                <tr>
                  <th>Content</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredContents.map((content) => (
                  <tr key={content.id}>
                    <td>
                      <div className="cm-title-cell">
                        <div className="cm-content-icon">
                          {content.type === "Quiz"
                            ? "❓"
                            : content.type === "Video"
                            ? "▶"
                            : "📘"}
                        </div>
                        <div>
                          <strong>{content.title}</strong>
                          <span>
                            {content.description || "Cybersecurity learning resource"}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="cm-category">
                        {content.category}
                      </span>
                    </td>

                    <td>{content.type}</td>

                    <td>
                      <span
                        className={`cm-status ${content.status.toLowerCase()}`}
                      >
                        {content.status}
                      </span>
                    </td>

                    <td>
                      <div className="cm-actions">
                        <button
                          className="cm-edit-button"
                          onClick={() => openEditForm(content)}
                        >
                          Edit
                        </button>
                        <button
                          className="cm-publish-button"
                          onClick={() => togglePublish(content.id)}
                        >
                          {content.status === "Published" ? "Unpublish" : "Publish"}
                        </button>
                        <button
                          className="cm-delete-button"
                          onClick={() => deleteContent(content.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredContents.length === 0 && (
                  <tr>
                    <td colSpan="5" className="cm-empty">
                      No content found. Try a different search or add content.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="cm-footer">
          © 2026 CyberMentor · Stay safe. Stay cyber smart. 💜
        </footer>
      </main>
    </div>
  );
}

export default ContentManagement;
