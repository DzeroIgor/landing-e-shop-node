import postgres from "postgres";

let connection = null;

const dbConnect = () => {
    if (connection === null) {
        connection = postgres({
          host: "localhost",
          port: 6032,
          database: "node_landing_db",
          username: "postgres",
          password: "qazwsx",
        });
    }
    return connection
}

 export { dbConnect } 