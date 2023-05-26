const { faker } = require("@faker-js/faker");

const randomId = {
  generate() {
    return Math.floor(Math.random() * 100000 + 1);
  },
};

export const catsMock = (number) => {
  Array(number)
    .fill()
    .map(() => ({
      User: {
        id: randomId.generate(),
        userId: faker.person.firstName(),
        content: faker.lorem.paragraph(),
        myContent: false,
        images: Array(Math.floor(Math.random() * 4 + 1))
          .fill()
          .map(() => faker.image.cats()),
      },
      Comments: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => {
          return {
            id: randomId.generate(),
            nickname: faker.person.firstName(),
            myComment: false,
          };
        }),
    }));
};
