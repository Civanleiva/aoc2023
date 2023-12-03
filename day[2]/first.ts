const input = await Deno.readTextFile('day[2]/input.txt').then((input) =>
  input.split('\n')
);

const maxValues: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

const parseGame = (game: string) => {
  const splitGame = game.split(':');
  const gameId = Number(splitGame[0].split(' ')[1]);
  const bagReveals = splitGame[1].split(';');
  let invalidGame = false;

  bagReveals.forEach((bag) => {
    const individualBags = bag
      .trim()
      .split(',')
      .map((b) => b.trim())
      .map((sb) => sb.split(' '));

    individualBags.forEach((b) => {
      if (Number(b[0]) > maxValues[b[1]]) {
        invalidGame = true;
      }
    });
  });

  return { game, gameId, invalidGame };
};

const validGames = input
  .map((game) => parseGame(game))
  .filter((g) => g.invalidGame === false);

const totalSum = validGames.reduce((prev, current) => prev + current.gameId, 0);

console.log(totalSum);
