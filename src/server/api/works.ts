import client from "./client";
import { Work } from "../../types/works";

export default defineEventHandler(async (event) => {
  const data = await client.get<Work>({
    endpoint: "works",
    queries: {
      orders: "-publishDate",
      limit: 6,
    },
  });
  return data;
});
