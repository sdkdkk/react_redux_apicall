import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchData2 } from "./action";
import { deleteData } from "./action";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";

function Component() {
  const [pageNumber, setPageNumber] = useState(0);
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.data2);
  console.log(data2);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchData2());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleDelet = (id) => {
    dispatch(deleteData(id));
  };

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = data.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <h4 className="mt-4 ">Api call with react-redux in table format:</h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Delet</th>
          </tr>
        </thead>
        {displayUsers.map((item) => (
          <tbody>
            <tr key={item.id}>
              <th scope="row">{item.name}</th>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              <td>
                <button
                  onClick={() => handleDelet(item.id)}
                  className="btn btn-primary">
                  Delet
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <ReactPaginate
        className="pagination justify-content-end "
        style={{ display: "flex", ListStyle: "none", justifyContent: "center" }}
        previousLabel={<button className="btn btn-primary">prev</button>}
        nextLabel={<button className="btn btn-primary">Next</button>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {data2.map((item2) => (
        <>
        <hr/>
        <p>{item2.title}</p>
        <img src={item2.thumbnailUrl} alt=''/>
        </>
      ))}
    </div>
  );
}

export default Component;
