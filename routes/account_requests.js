const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()
module.exports = router

router.post('/:id', async (req, res) => {
    const { id } = req.params
    const { friend_id } = req.body
    const resp = await db.query("INSERT INTO account_request(account1_id, account2_id) VALUES ($1, $2)", [id, friend_id])
    res.send("Request Friend Sent")
  })

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM account_request WHERE account1_id = $1', [id])
    res.send(rows)
    })

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { friend_id } = req.body
    const resp = await db.query('DELETE FROM account_request WHERE account1_id = $1 AND account2_id = $2', [id, friend_id])
    res.send("Succeed")
  })