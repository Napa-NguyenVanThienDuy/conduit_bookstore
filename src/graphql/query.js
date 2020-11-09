export const GET_DATA = `
    query getAllData( $offset: Int!, $size: Int!, $orderBy: String){
        books: allBooks(skip : $offset,first: $size, orderBy: $orderBy ) {
            id,
            name,
            author{
              name
            }
            category{
              name
            }
            image{
              publicUrlTransformed(transformation: {width: "180", height: "230", crop: "pad"})
            }
          }
        authors: allAuthors{
            id,
            name
        }
        categories: allCategories{
            id,
            name
        }
        _allBooksMeta{
            count
        }
    }
`;

export const GET_BOOK = `
    query GetBook($id: ID!) {
        Book(where: {id: $id}) {
            id
            name
            pageNumber
            numberInStore
            publishDate
            describe
            category {
                name
            }
            author {
                name
            }
            image {
                publicUrlTransformed(transformation: {width: "300", height: "300", crop: "limit"})
            }
        }
    }
`;

export const GET_AUTHOR_CATEGORY = `
query{
  authors: allAuthors{
    id,
    name
  }
  categories: allCategories{
    id,
    name
  }
}
`;

export const GET_FILTER_BOOK = `
query filterBook(
  $author: AuthorWhereInput
  $category: CategoryWhereInput
  $offset: Int!
  $size: Int!
) {
  books: allBooks(
      where: {
          OR: [{ author: $author, category_some: $category }]
      },
      sortBy: id_ASC,
      skip: $offset,
      first: $size
  ) {
      id
      name
      author {
          id
          name
      }
      image {
          publicUrlTransformed(transformation: {width: "180", height: "230", crop: "pad"})
      }
  }
  _allBooksMeta(
      where: {
          AND: [{ author: $author, category_some: $category }]
      }
  ) {
      count
  }
}
`;
