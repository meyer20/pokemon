import { SpritePathItem } from '../../domain';

export class Utils {
  static readonly POKEMON_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{{pokemon.id}}.png';

  static getPokemonIdFromURL(url): string {
    return url.split('pokemon/')[1].replace('/', '');
  }

  static getSpritesPathFromPokemon(sprites): Array<SpritePathItem> {
    const pokemonSprites: Array<SpritePathItem> = [];
    if (sprites.other?.home) {
      sprites = sprites.other.home;
    }
    Object.keys(sprites).forEach(key => {
      if (sprites[key] && typeof sprites[key] === 'string') {
        pokemonSprites.push({ path: sprites[key]});
      }
    });

    return pokemonSprites.reverse();
  }

  static getPokemonSpriteURL(pokemonId: string): string {
    return this.POKEMON_SPRITE_URL.replace('{{pokemon.id}}', pokemonId);
  }
}
