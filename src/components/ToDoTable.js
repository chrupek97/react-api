import React from 'react';
import ReactPaginate from "react-paginate";

const ToDoTable = (props) => {
    const {postData, pageClick, pageCount} = props;
    
    return (
        <div>
            <table id="dataTable">
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {
                    postData
                }
            </table>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(e) => pageClick(e)}
                containerClassName={"pagination"}
                subContainerClassName={"pagesPagination"}
                activeClassName={"active"} />
        </div>
    );
};

export default ToDoTable;