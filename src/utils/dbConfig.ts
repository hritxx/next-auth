import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MONGO_URI!);
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log(`Successfully connected to database: ${connection.host}`);
  });
  connection.on("error", (err: Error) => {
    console.log(`Error while connecting to the database: ${err.message}`);
    process.exit();
  });
} catch (error) {
  console.log(`Error connecting to the database.`);
}
