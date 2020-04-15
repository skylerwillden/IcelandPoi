export const indexPage = (req, res, next) => {
  res.render('layout', { title: 'Courses', content: 'index', header: false })
};

export const aboutPage = (req, res, next) => {
  res.render('layout', { title: 'Courses', content: 'about' })
};