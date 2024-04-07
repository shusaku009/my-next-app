import prisma from "./prisma";

export function createBook(book) {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : '/vercel.svg',
  };
}

export async function getAllReviews() {
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc'
    }
  });
}
