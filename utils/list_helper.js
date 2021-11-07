const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let totalLikes = 0

  for (const blog of blogs) {
    totalLikes += blog.likes
  }

  return totalLikes
}

const favoriteBlog = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null
  }

  const favoriteBlog = blogs.reduce((a, b) => a.likes > b.likes ? a : b)

  return favoriteBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
