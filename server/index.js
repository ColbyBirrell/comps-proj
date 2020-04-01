// middleware comp
const middleComp = (req, res, next) => {
  if (req) {
    res.status(200).send(console.log("this is the middleware"));
  } else {
    next();
  }
};

// middleware comp
app.post(`/api/bogus`, middleComp, bogusCont.bogus);

//server queries
//Front end (would be in a component)
axios.get(`/api/customer?name=${this.state.name}`);

//server queries
//back end
app.get("/api/customer", bogusCont.getCustomer);

//Server Queries
cosnt getCustomer: async (req, res) => {
    const db = req.app.get("db");
    const name = req.query;

    let customer = await db.get_customer(name);
    if (Customer !== []) {
      res.status(200).send(customer);
    } else {
      res.status(404).send("customer not found");
    }
}

//server queries
//DB end
SELECT *
FROM customers
WHERE name = $1;