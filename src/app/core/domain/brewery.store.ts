import { Store } from 'ngxs';

export interface Brewery {
  id: string;
  slug: string;
  name: string;
}

@Store({
  defaults: {
    breweries: []
  }
})
export class BreweryStore {

}
