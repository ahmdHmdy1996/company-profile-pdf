import React from "react";

const Toolbar = ({
  onExportPdf,
  onSaveData,
  onLoadData,
  onReset,
  isExporting = false,
  rtl = false,
}) => {
  const direction = rtl ? "rtl" : "ltr";

  return (
    <div
      className={`bg-white border-b border-gray-200 p-4 sticky top-0 z-10`}
      dir={direction}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <h1 className="text-2xl font-bold text-gray-900">
            {rtl ? "منشئ الملف التعريفي للشركة" : "Company Profile Builder"}
          </h1>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {rtl ? "نسخة محسنة" : "Enhanced Version"}
          </span>
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button onClick={onSaveData} className="btn-secondary text-sm">
            {rtl ? "حفظ البيانات" : "Save Data"}
          </button>

          <label className="btn-secondary text-sm cursor-pointer">
            {rtl ? "تحميل البيانات" : "Load Data"}
            <input
              type="file"
              accept=".json"
              onChange={onLoadData}
              className="hidden"
            />
          </label>

          <button
            onClick={onReset}
            className="btn-secondary text-sm text-red-600 hover:bg-red-50"
          >
            {rtl ? "إعادة تعيين" : "Reset"}
          </button>

          <button
            onClick={onExportPdf}
            disabled={isExporting}
            className={`btn-primary text-sm ${
              isExporting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isExporting
              ? rtl
                ? "جاري التصدير..."
                : "Exporting..."
              : rtl
              ? "تصدير PDF"
              : "Export PDF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
