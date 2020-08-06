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
