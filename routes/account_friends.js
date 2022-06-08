const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()
module.exports = router

router.post('/:id', async (req, res) => {
    const { id } = req.params
    const { friend_id } = req.body
    const { rows1 } = await db.query("INSERT INTO account_friend(account1_id, account2_id) VALUES ($1, $2)", [id, friend_id])
    const { rows2 } = await db.query("INSERT INTO account_friend(account2_id, account1_id) VALUES ($1, $2)", [id, friend_id])
    res.send("Friends Added")
  })

router.get('/:id', async (req, res) => {
    const { id } = req.body
    const { rows } = await db.query('SELECT * FROM account_friend WHERE account1_id = $1', [id])
    res.send(rows[0])
    })

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { friend_id } = req.body
    const { rows1 } = await db.query('DELETE FROM account_friend WHERE account1_id = $1 AND account2_id = $2', [id, friend_id])
    const { rows2 } = await db.query('DELETE FROM account_friend WHERE account2_id = $1 AND account1_id = $2', [id, friend_id])
    res.send("Friends Removed")
  })