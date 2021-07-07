

 
// eslint-disable-next-line
import React, { Children } from 'react';
// eslint-disable-next-line
import ReactDom from 'react-dom';
 
const books = [
 {
   id:1,
   img: "https://images-na.ssl-images-amazon.com/images/I/81PlDZAxJDL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg",
   title: "Blockchain",
   author: "Jack"
 },
 {
   id:2,
   img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_AA180_.jpg",
   title: "1984",
   author: "Anthony Lewis"
 },
 {
   id:3,
   img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_AA180_.jpg",
   title: "1984",
   author: "George Orwell"
 }
];
 
// eslint-disable-next-line
function BookList() {
 return (
   <section className='booklist'>
       {books.map((book,index) => {
         return <Book key={book.id} book={book}></Book>; //it will be equal to a book
       })}
   </section>
 );
}
const Book = (props) => {
 console.log(props);
 const { img, title, author} = props.book;
 
 return (
   <article className='book'>
     <img src ={img} alt=''/>
     <h1>{title}</h1>
     <h4>{author}</h4>
    
   </article>
 );
};


