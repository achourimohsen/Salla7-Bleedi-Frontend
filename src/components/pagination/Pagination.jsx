import "./pagination.css";

export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i);
    }

    return (
        <div className="pagination">
            <button 
                onClick={() => setCurrentPage(prev => prev - 1)}
                disabled={currentPage === 1}
                className="page previous"
            >
                Prev
            </button>
            {generatedPages.map(page => (
                <button
                    onClick={() => setCurrentPage(page)}
                    key={page}
                    className={currentPage === page ? "page active" : "page"}
                >
                    {page}
                </button>
            ))}
            <button 
                onClick={() => setCurrentPage(next => next + 1)}
                disabled={currentPage === pages}
                className="page next"
            >
                Next
            </button>
        </div>
    );
};
