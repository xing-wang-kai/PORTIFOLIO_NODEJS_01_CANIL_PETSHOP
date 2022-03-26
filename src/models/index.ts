
type activeBanner = ''| 'all' | 'dogs'| 'cats' | 'fishes';

export function activeBanner( categoria: activeBanner ) {
    let valores = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }

   if( categoria !== ''){

       valores[categoria] = true
   }

    return valores;
}