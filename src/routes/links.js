const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
  res.render('links/add');
});

router.post('/add', async (req, res) => {
  // console.log(req.body)
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description
  };
  // console.log(newLink)
  await pool.query("INSERT INTO links set ?", [newLink])
  req.flash('success', 'Link guardo correctamente');
  res.redirect('/links')
})

router.get('/', async (req, res) => {
  const links = await pool.query('SELECT * FROM links')
  // console.log(links)
  res.render('links/list', { links: links })
})

router.get('/delete/:id', async (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params
  await pool.query('DELETE FROM links WHERE ID = ?', [id])
  req.flash('success', 'Link eliminado')
  res.redirect('/links')
})

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params
  // console.log(id)
  links = await pool.query('SELECT * FROM links WHERE id =?', [id])
  // console.log(links[0])
  res.render('links/edit', { link: links[0] })

})
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params
  const { title, description, url } = req.body
  const editLink = {
    title,
    description,
    url
  }
  // console.log(editLink)
  await pool.query('UPDATE links set ? WHERE id =?', [editLink, id])
  req.flash('success', 'link editado')
  res.redirect('/links')
})

module.exports = router;