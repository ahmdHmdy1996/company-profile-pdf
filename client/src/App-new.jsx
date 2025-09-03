import React, { useEffect, useState } from "react";
import Modern from "./templates/Modern.jsx";
import Classic from "./templates/Classic.jsx";
import Premium from "./templates/Premium.jsx";
import Business from "./templates/Business.jsx";
import Toolbar from "./components/Toolbar.jsx";
import {
  FormSection,
  InputField,
  ColorPicker,
  FileUpload,
} from "./components/FormComponents.jsx";
import sample from "./sample-data.json";

const SERVER = "http://localhost:4000";

const templates = {
  modern: { name: "Modern", component: Modern },
  classic: { name: "Classic", component: Classic },
  premium: { name: "Premium", component: Premium },
  business: { name: "Business", component: Business },
};

export default function App() {
  const [data, setData] = useState(sample);
  const [templateId, setTemplateId] = useState("premium");
  const [html, setHtml] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  const Comp = templates[templateId].component;

  useEffect(() => {
    fetch(SERVER + "/render", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ templateId, data }),
    })
      .then((r) => r.text())
      .then(setHtml)
      .catch(() => setHtml(""));
  }, [templateId, data]);

  const update = (path, value) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let ref = next;
      while (keys.length > 1) ref = ref[keys.shift()];
      ref[keys[0]] = value;
      return next;
    });
  };

  const exportPdf = async () => {
    setIsExporting(true);
    try {
      const r = await fetch(SERVER + "/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId, data, options: { format: "A4" } }),
      });
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `company-profile-${templateId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Error exporting PDF: " + error.message);
    } finally {
      setIsExporting(false);
    }
  };

  const saveData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `company-profile-data-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const loadData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const loadedData = JSON.parse(e.target.result);
          setData(loadedData);
        } catch (error) {
          alert("Error loading data: Invalid JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  const resetData = () => {
    if (
      confirm(
        data.rtl
          ? "هل أنت متأكد من إعادة تعيين جميع البيانات؟"
          : "Are you sure you want to reset all data?"
      )
    ) {
      setData(sample);
    }
  };

  const addProject = () => {
    const newProject = { name: "", year: new Date().getFullYear().toString() };
    update("projects", [...data.projects, newProject]);
  };

  const removeProject = (index) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    update("projects", newProjects);
  };

  const addTeamMember = () => {
    const newMember = { name: "", title: "", bio: "" };
    update("team", [...data.team, newMember]);
  };

  const removeTeamMember = (index) => {
    const newTeam = data.team.filter((_, i) => i !== index);
    update("team", newTeam);
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 ${data.rtl ? "rtl" : ""}`}
      dir={data.rtl ? "rtl" : "ltr"}
    >
      <Toolbar
        onExportPdf={exportPdf}
        onSaveData={saveData}
        onLoadData={loadData}
        onReset={resetData}
        isExporting={isExporting}
        rtl={data.rtl}
      />

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Control Panel */}
          <div className="space-y-6">
            <div className="card">
              <FormSection
                title={data.rtl ? "إعدادات القالب" : "Template Settings"}
              >
                <InputField
                  label={data.rtl ? "القالب" : "Template"}
                  type="select"
                  value={templateId}
                  onChange={(e) => setTemplateId(e.target.value)}
                  options={[
                    {
                      value: "premium",
                      label: data.rtl ? "المتميز (حديث)" : "Premium (Modern)",
                    },
                    {
                      value: "business",
                      label: data.rtl
                        ? "الأعمال (مهني)"
                        : "Business (Professional)",
                    },
                    {
                      value: "modern",
                      label: data.rtl ? "عصري (نظيف)" : "Modern (Clean)",
                    },
                    {
                      value: "classic",
                      label: data.rtl ? "كلاسيكي (أزرق)" : "Classic (Blue)",
                    },
                  ]}
                  rtl={data.rtl}
                />

                <InputField
                  label={
                    data.rtl ? "اللغة العربية (RTL)" : "Arabic Language (RTL)"
                  }
                  type="checkbox"
                  value={data.rtl}
                  onChange={(e) => update("rtl", e.target.checked)}
                  rtl={data.rtl}
                />
              </FormSection>

              <FormSection
                title={data.rtl ? "ألوان العلامة التجارية" : "Brand Colors"}
              >
                <ColorPicker
                  label={data.rtl ? "اللون الأساسي" : "Primary Color"}
                  value={data.brand?.color || "#3b82f6"}
                  onChange={(e) => update("brand.color", e.target.value)}
                  rtl={data.rtl}
                />

                <ColorPicker
                  label={data.rtl ? "اللون الثانوي" : "Accent Color"}
                  value={data.brand?.accent || "#10b981"}
                  onChange={(e) => update("brand.accent", e.target.value)}
                  rtl={data.rtl}
                />
              </FormSection>

              <FormSection title={data.rtl ? "الشعار" : "Logo"}>
                <FileUpload
                  label={data.rtl ? "رفع الشعار" : "Upload Logo"}
                  onFileSelect={(base64) => update("logo", base64)}
                  rtl={data.rtl}
                />
              </FormSection>
            </div>

            <div className="card">
              <FormSection
                title={data.rtl ? "معلومات الشركة" : "Company Information"}
              >
                <InputField
                  label={data.rtl ? "اسم الشركة" : "Company Name"}
                  value={data.company?.name || ""}
                  onChange={(e) => update("company.name", e.target.value)}
                  placeholder={data.rtl ? "اسم شركتك" : "Your Company Name"}
                  rtl={data.rtl}
                />

                <InputField
                  label={data.rtl ? "الشعار التجاري" : "Tagline"}
                  value={data.company?.tagline || ""}
                  onChange={(e) => update("company.tagline", e.target.value)}
                  placeholder={data.rtl ? "شعار شركتك" : "Your Company Tagline"}
                  rtl={data.rtl}
                />

                <InputField
                  label={data.rtl ? "الموقع" : "Location"}
                  value={data.company?.location || ""}
                  onChange={(e) => update("company.location", e.target.value)}
                  placeholder={data.rtl ? "موقع شركتك" : "Your Location"}
                  rtl={data.rtl}
                />

                <InputField
                  label={data.rtl ? "نبذة عن الشركة" : "About Company"}
                  type="textarea"
                  value={data.about || ""}
                  onChange={(e) => update("about", e.target.value)}
                  placeholder={
                    data.rtl ? "وصف شركتك..." : "Describe your company..."
                  }
                  rows={4}
                  rtl={data.rtl}
                />
              </FormSection>
            </div>

            <div className="card">
              <FormSection
                title={data.rtl ? "معلومات التواصل" : "Contact Information"}
              >
                <InputField
                  label={data.rtl ? "الهاتف" : "Phone"}
                  value={data.contacts?.phone || ""}
                  onChange={(e) => update("contacts.phone", e.target.value)}
                  placeholder={data.rtl ? "رقم الهاتف" : "Phone Number"}
                  rtl={data.rtl}
                />

                <InputField
                  label={data.rtl ? "البريد الإلكتروني" : "Email"}
                  type="email"
                  value={data.contacts?.email || ""}
                  onChange={(e) => update("contacts.email", e.target.value)}
                  placeholder={data.rtl ? "البريد الإلكتروني" : "Email Address"}
                  rtl={data.rtl}
                />

                <InputField
                  label={data.rtl ? "الموقع الإلكتروني" : "Website"}
                  value={data.contacts?.website || ""}
                  onChange={(e) => update("contacts.website", e.target.value)}
                  placeholder={data.rtl ? "www.example.com" : "www.example.com"}
                  rtl={data.rtl}
                />
              </FormSection>
            </div>

            <div className="card">
              <FormSection title={data.rtl ? "الخدمات" : "Services"}>
                <InputField
                  label={
                    data.rtl
                      ? "الخدمات (مفصولة بفواصل)"
                      : "Services (comma-separated)"
                  }
                  value={data.services?.join(", ") || ""}
                  onChange={(e) =>
                    update(
                      "services",
                      e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean)
                    )
                  }
                  placeholder={
                    data.rtl
                      ? "الخدمة الأولى, الخدمة الثانية..."
                      : "Service 1, Service 2..."
                  }
                  rtl={data.rtl}
                />
              </FormSection>
            </div>

            <div className="card">
              <FormSection title={data.rtl ? "العملاء" : "Clients"}>
                <InputField
                  label={
                    data.rtl
                      ? "العملاء (مفصولين بفواصل)"
                      : "Clients (comma-separated)"
                  }
                  value={data.clients?.join(", ") || ""}
                  onChange={(e) =>
                    update(
                      "clients",
                      e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean)
                    )
                  }
                  placeholder={
                    data.rtl
                      ? "العميل الأول, العميل الثاني..."
                      : "Client 1, Client 2..."
                  }
                  rtl={data.rtl}
                />
              </FormSection>
            </div>

            {/* Projects Section */}
            <div className="card">
              <FormSection title={data.rtl ? "المشاريع" : "Projects"}>
                {data.projects?.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-700">
                        {data.rtl
                          ? `المشروع ${index + 1}`
                          : `Project ${index + 1}`}
                      </h4>
                      <button
                        onClick={() => removeProject(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        {data.rtl ? "حذف" : "Remove"}
                      </button>
                    </div>
                    <InputField
                      label={data.rtl ? "اسم المشروع" : "Project Name"}
                      value={project.name}
                      onChange={(e) =>
                        update(`projects.${index}.name`, e.target.value)
                      }
                      rtl={data.rtl}
                    />
                    <InputField
                      label={data.rtl ? "السنة" : "Year"}
                      value={project.year}
                      onChange={(e) =>
                        update(`projects.${index}.year`, e.target.value)
                      }
                      rtl={data.rtl}
                    />
                  </div>
                ))}
                <button onClick={addProject} className="w-full btn-secondary">
                  {data.rtl ? "إضافة مشروع" : "Add Project"}
                </button>
              </FormSection>
            </div>

            {/* Team Section */}
            <div className="card">
              <FormSection title={data.rtl ? "الفريق" : "Team"}>
                {data.team?.map((member, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-700">
                        {data.rtl
                          ? `عضو الفريق ${index + 1}`
                          : `Team Member ${index + 1}`}
                      </h4>
                      <button
                        onClick={() => removeTeamMember(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        {data.rtl ? "حذف" : "Remove"}
                      </button>
                    </div>
                    <InputField
                      label={data.rtl ? "الاسم" : "Name"}
                      value={member.name}
                      onChange={(e) =>
                        update(`team.${index}.name`, e.target.value)
                      }
                      rtl={data.rtl}
                    />
                    <InputField
                      label={data.rtl ? "المنصب" : "Title"}
                      value={member.title}
                      onChange={(e) =>
                        update(`team.${index}.title`, e.target.value)
                      }
                      rtl={data.rtl}
                    />
                    <InputField
                      label={data.rtl ? "النبذة" : "Bio"}
                      type="textarea"
                      value={member.bio}
                      onChange={(e) =>
                        update(`team.${index}.bio`, e.target.value)
                      }
                      rows={2}
                      rtl={data.rtl}
                    />
                  </div>
                ))}
                <button
                  onClick={addTeamMember}
                  className="w-full btn-secondary"
                >
                  {data.rtl ? "إضافة عضو فريق" : "Add Team Member"}
                </button>
              </FormSection>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="card p-2">
              <div className="preview-container">
                {html ? (
                  <iframe
                    title="server-preview"
                    style={{
                      width: "100%",
                      height: "600px",
                      border: "0",
                      borderRadius: "8px",
                    }}
                    srcDoc={html}
                  />
                ) : (
                  <div
                    style={{
                      transform: "scale(0.6)",
                      transformOrigin: "top center",
                      width: "100%",
                    }}
                  >
                    <Comp data={data} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
