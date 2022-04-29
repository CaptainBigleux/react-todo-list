import React from "react";

const Paginate = ({ maxCountPerPage, tasks, pageNumber, setPageNumber }) => {
  return (
    <div className="paginate">
      <span
        className={
          tasks.length / maxCountPerPage <= 1
            ? "paginate-link display-none"
            : pageNumber === 1
            ? "paginate-link active"
            : "paginate-link"
        }
        onClick={() => {
          setPageNumber(1);
        }}
      >
        1
      </span>
      {tasks.length > maxCountPerPage
        ? tasks.map((task, index) => {
            return index % maxCountPerPage === 0 && index !== 0 ? (
              <span
                className={
                  pageNumber === index / maxCountPerPage + 1
                    ? "paginate-link active"
                    : "paginate-link"
                }
                key={index}
                onClick={() => {
                  setPageNumber(index / maxCountPerPage + 1);
                }}
              >
                {index / maxCountPerPage + 1}
              </span>
            ) : null;
          })
        : null}
    </div>
  );
};

export default Paginate;
