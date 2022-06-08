const accounts = require("./accounts");
const account_friends = require("./account_friends");
const account_requests = require("./account_requests");

const Router = require("express-promise-router");
const db = require("../db");
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const router = new Router({ mergeParams: true });

module.exports = (app) => {
	app.use(
		"",
		router.post(async (req, res) => {
			res.send("Hello");
		})
	);
	app.use("/accounts", accounts);
	app.use("/account_friends", account_friends);
	app.use("/account_requests", account_requests);
	app.use(
		router.post(
			"/account_requests/:id/accept/:friend_id",
			async (req, res) => {
				const { id, friend_id } = req.params;
				const data = { friend_id: friend_id };
				const res1 = await fetch(
					`http://localhost:3000/account_requests/${id}`,
					{
						method: "DELETE", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log("Success:", data);
					})
					.catch((error) => {
						console.error("Error:", error);
					});
				const res2 = await fetch(
					`http://localhost:3000/account_friends/${id}`,
					{
						method: "POST", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log("Success:", data);
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			}
		)
	);
	app.use(
		router.post(
			"/account_requests/:id/reject/:friend_id",
			async (req, res) => {
				const { id, friend_id } = req.params;
				const res1 = await fetch(
					`http://localhost:3000/account_requests/${id}`,
					{
						method: "DELETE", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log("Success:", data);
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			}
		)
	);
};
