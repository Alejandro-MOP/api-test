const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Routes for the API
app.use("/users", require("./routes/users.routes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
