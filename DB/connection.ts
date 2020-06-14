import mongoose from "mongoose";

const uri =
  "mongodb://vdhut:krtipyi7@cluster0-shard-00-01-u7wcw.azure.mongodb.net:27017/?retryWrites=true&w=majority&ssl=true";

const connection = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: "turbo_sniffle",
  });
  console.log("db connected..!");
};

export default connection;
