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

module.exports = {
  dummy,
  totalLikes
}
