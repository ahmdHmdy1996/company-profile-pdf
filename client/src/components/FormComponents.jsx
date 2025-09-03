import React from "react";

const FormSection = ({ title, children, className = "" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  rows = null,
  options = null,
  rtl = false,
}) => {
  const direction = rtl ? "rtl" : "ltr";
  const textAlign = rtl ? "text-right" : "text-left";

  if (type === "select") {
    return (
      <div className="space-y-2">
        <label
          className={`block text-sm font-medium text-gray-700 ${textAlign}`}
          dir={direction}
        >
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          className={`input-field ${textAlign}`}
          dir={direction}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="space-y-2">
        <label
          className={`block text-sm font-medium text-gray-700 ${textAlign}`}
          dir={direction}
        >
          {label}
        </label>
        <textarea
          value={value}
          onChange={onChange}
          rows={rows || 4}
          placeholder={placeholder}
          className={`input-field resize-none ${textAlign}`}
          dir={direction}
        />
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          className={`text-sm font-medium text-gray-700 ${textAlign}`}
          dir={direction}
        >
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label
        className={`block text-sm font-medium text-gray-700 ${textAlign}`}
        dir={direction}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${textAlign}`}
        dir={direction}
      />
    </div>
  );
};

const ColorPicker = ({ label, value, onChange, rtl = false }) => {
  const direction = rtl ? "rtl" : "ltr";
  const textAlign = rtl ? "text-right" : "text-left";

  return (
    <div className="space-y-2">
      <label
        className={`block text-sm font-medium text-gray-700 ${textAlign}`}
        dir={direction}
      >
        {label}
      </label>
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="h-10 w-16 border border-gray-300 rounded cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`flex-1 input-field ${textAlign}`}
          dir={direction}
          placeholder="#000000"
        />
      </div>
    </div>
  );
};

const FileUpload = ({
  label,
  onFileSelect,
  accept = "image/*",
  rtl = false,
}) => {
  const direction = rtl ? "rtl" : "ltr";
  const textAlign = rtl ? "text-right" : "text-left";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => onFileSelect(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label
        className={`block text-sm font-medium text-gray-700 ${textAlign}`}
        dir={direction}
      >
        {label}
      </label>
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export { FormSection, InputField, ColorPicker, FileUpload };
