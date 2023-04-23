// import { writeFileSync } from "fs";

let writeFileSync;

if (process.browser) {
  writeFileSync = () => {}; // A dummy function to use on client-side
} else {
  const { writeFileSync: writeFileSyncServer } = require('fs');
  writeFileSync = writeFileSyncServer;
}

export default async function submit(req, res) {
    if (req.method !== "POST") {
      return res.status(405);
    }

    const uuid = Math.random().toString(26).slice(2);
    await writeFileSync(`./public/db/${uuid}.json`, JSON.stringify(req.body));
    res.status(201).json({ uuid });
}
