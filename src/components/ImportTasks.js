import React from "react";
import encBase64 from "crypto-js/enc-base64";
import encUtf8 from "crypto-js/enc-utf8";

const ImportTasks = ({
  darkMode,
  importTasks,
  setImportTasks,
  encoding,
  setTasks,
}) => {
  const handleImport = () => {
    try {
      //decode the string and split the elements into an array
      const arr = encBase64
        .parse(importTasks)
        .toString(encUtf8)
        .split(encoding);

      //last entry is empty
      arr.pop();
      const newTasks = [];

      if (arr !== undefined) {
        for (let i = 0; i < arr.length; i = i + 3) {
          const newObj = {};
          newObj.text = arr[i];
          newObj.isChecked = arr[i + 1] === "true";
          newObj.created = arr[i + 2];
          newTasks.push(newObj);
        }
        console.log(newTasks);
        //sort by time since creation to get newer tasks first
        newTasks.sort((a, b) => b.created - a.created);
        //transform to number to sort non checked tasks first
        newTasks.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
        setTasks(newTasks);
      }
      setImportTasks("");
    } catch {
      console.log("string is invalid");
    }
  };
  return (
    <>
      <div className={darkMode ? "import-tasks-dark" : "import-tasks"}>
        <input
          className="import-tasks-input"
          placeholder="Paste to import"
          type="text"
          value={importTasks}
          onChange={(event) => {
            setImportTasks(event.target.value);
          }}
        />
        <button className="import-tasks-btn" onClick={handleImport}>
          ✓
        </button>
      </div>
    </>
  );
};

export default ImportTasks;
