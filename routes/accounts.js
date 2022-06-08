const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()
module.exports = router

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM account')
    res.send(rows)
  })

router.post('/', async (req, res) => {
    const { name } = req.body
    const { rows } = await db.query('INSERT INTO account(name) VALUES ($1)', [name])
    res.send(rows[0])
  })

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM account WHERE id = $1', [id])
  res.send(rows[0])
  })

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('DELETE FROM account WHERE id = $1', [id])
    res.send(rows[0])
  })