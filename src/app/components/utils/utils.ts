import { SpritePathItem } from '../../domain';

export class Utils {
  static getPokemonIdFromURL(url): string {
    return url.split('pokemon/')[1].replace('/', '');
  }

  static getSpritesPathFromPokemon(sprites): Array<SpritePathItem> {
    const pokemonSprites: Array<SpritePathItem> = [];
    Object.keys(sprites).forEach(key => {
      if (sprites[key] && typeof sprites[key] === 'string') {
        pokemonSprites.push({ path: sprites[key]});
      }
    });

    return pokemonSprites.reverse();
  }
}
