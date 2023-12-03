const input = await Deno.readTextFile('day[2]/input.txt').then((input) =>
  input.split('\n')
);

const parseGame = (game: string) => {
  const minValues: Record<string, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const splitGame = game.split(':');
  const bagReveals = splitGame[1].split(';');

  bagReveals.forEach((bag) => {
    const individualBags = bag
      .trim()
      .split(',')
      .map((b) => b.trim())
      .map((sb) => sb.split(' '));

    individualBags.forEach((b) => {
      if (Number(b[0]) > minValues[b[1]]) {
        minValues[b[1]] = Number(b[0]);
      }
    });
  });
  console.log(minValues);
  const power = minValues.red * minValues.green * minValues.blue;
  return { power };
};

const games = input.map((game) => parseGame(game));

const totalSum = games.reduce((prev, current) => prev + current.power, 0);
console.log(totalSum);
