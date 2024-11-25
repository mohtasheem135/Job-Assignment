// import fs from "fs"
// import path from "path"
// import { faker } from "@faker-js/faker"

// import { citys, labels, localities, locationType, priorities, states, statuses } from "./data"

// // const tasks = Array.from({ length: 100 }, () => ({
// //   id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
// //   title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
// //   status: faker.helpers.arrayElement(statuses).value,
// //   label: faker.helpers.arrayElement(labels).value,
// //   priority: faker.helpers.arrayElement(priorities).value,
// // }))
// const tasks = Array.from({ length: 100 }, () => ({
//   sr_no: faker.number.int({ min: 1000, max: 9999 }),
//   // state: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
//   state: faker.helpers.arrayElement(states).value,
//   city: faker.helpers.arrayElement(citys).value,
//   // locality: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
//   landDimensions: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
//   locationType: faker.helpers.arrayElement(locationType).value,
//   notes: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
//   status: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
// }))

// fs.writeFileSync(
//   path.join(__dirname, "tasks.json"),
//   JSON.stringify(tasks, null, 2)
// )

