import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Bookblok() {
  const [newArr, setNewArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  let bookArr = [];

  useEffect(() => {
    fetch(
      "https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/AllAdabiyotlar.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("nimadir xato");
        return res.json();
      })
      .then((data) => {
        bookArr = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
          };
        });
        setNewArr(bookArr);
      })
      .catch((err) => console.log(err));
  }, []);

  function choppedBookItem(books) {
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;

    return books.slice(firstIndex, lastIndex);
  }

  let pages = [];
  for (let i = 1; i <= Math.ceil(newArr.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="booksContent">
      <div className="booksBlok">
        {choppedBookItem(newArr).map((item) => (
          <div key={item.id} className="cards">
            <div className="bookTitle">
              <div className="title">
                <p className="bookName">{item.bookName}</p>
                <p className="bookAutor">{item.author}</p>
              </div>
              <Link to={`/${item.id}`} className="batafsil">
                Batafsil
              </Link>
            </div>
            <div className="bookImg">
              <img src={item.file} alt="" />
            </div>
          </div>
        ))}
      </div>
      <ul className="pagenation">
        {pages.map((page, index) => {
          return (
            <li key={index} className="page_item">
              <button
                className={page == currentPage ? "pageBtn active" : "pageBtn"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
