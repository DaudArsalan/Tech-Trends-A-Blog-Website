import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactData");
    fs.promises.writeFile(
      `contactData/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
  } else {
    res.status(200).json(["contact"]);
  }
}
