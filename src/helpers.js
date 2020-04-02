export const getContentForBook = (content=[], bookId) => (
    console.log(content),
    (!bookId)
        ? content
        : content.filter(con => con.book_id === bookId)
)