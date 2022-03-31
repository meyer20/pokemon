import { ISpritePathItem, Pokemon, PokemonColorEnum } from '../../domain';

export class Utils {
  static readonly POKEMON_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{{pokemon.id}}.png';

  static getPokemonIdFromURL(url): string {
    return url.split('pokemon/')[1].replace('/', '');
  }

  static getSpritesPathFromPokemon(sprites): Array<ISpritePathItem> {
    const pokemonSprites: Array<ISpritePathItem> = [];
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

  static getPokemonBackgroundColorByType(pokemon: Pokemon): string {
    let gradientString = 'linear-gradient(' + this.generateRandomNumberBetweenRange(1, 360) + 'deg, ';

    const pokemonTypes = pokemon.pokemonTypes;

    if (pokemonTypes.length === 1) {
      return gradientString += 'white, ' + PokemonColorEnum[pokemonTypes[0].toUpperCase()] + ' 100%)';
    } else {
      pokemonTypes.forEach((type: string, index: number) => {
        if (index > 0) {
          gradientString += ',';
          gradientString += PokemonColorEnum[pokemonTypes[index].toUpperCase()] + ' ' + ((index / pokemonTypes.length) * 100).toFixed(0) + '%';
        } else {
          gradientString += PokemonColorEnum[pokemonTypes[index].toUpperCase()] + ' 0%';
        }
      });
      return gradientString += ')';
    }
  }

  static generateRandomNumberBetweenRange(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}
