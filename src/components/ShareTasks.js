import React from "react";
import { useState } from "react";

import encBase64 from "crypto-js/enc-base64";
import encUtf8 from "crypto-js/enc-utf8";

const ShareTasks = ({ tasks, darkMode, encoding }) => {
  const [textCopied, setTextCopied] = useState(false);
  const handleShare = () => {
    let str = "";
    for (let i = 0; i < tasks.length; i++) {
      str += `${tasks[i].text}${encoding}${tasks[i].isChecked}${encoding}${tasks[i].created}${encoding}`;
    }
    const saveID = encBase64.stringify(encUtf8.parse(str));
    navigator.clipboard.writeText(saveID);
    setTimeout(() => setTextCopied(false), 2000);

    setTextCopied(true);
  };

  return (
    <>
      <div className={darkMode ? "share-tasks-dark" : "share-tasks"}>
        <button className="share-tasks-btn" onClick={handleShare}>
          Share / Save
        </button>
        {textCopied ? (
          <p className="share-tasks-temp-msg">Copied to clipboard!</p>
        ) : null}
      </div>
    </>
  );
};

export default ShareTasks;
