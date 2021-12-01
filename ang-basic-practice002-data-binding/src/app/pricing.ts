import {IPriceItem} from './pricing-page/pricing-page.component';

const prices : IPriceItem[] = [
    {
      name: "Free",
      price: 0,
      options: [
        '10 tanuló',
        '2 GB tárhely',
        'Email támogatás',
        'Dokumentáció'
      ], 
      btnText:"Ingyenes regisztráció",
    },
    {
      name: "Pro",
      price: 15,
      options: [
        '20 tanuló',
        '10 GB tárhely',
        'Kiemelt email támogatás',
        'Dokumentáció'
      ], 
      btnText:"Kezdő lépések",
    },{
      name: "Enterprise",
      price: 29,
      options: [
        '100 tanuló',
        '100 GB tárhely',
        'Telefonos és wmail támogatás',
        'Dokumentáció'
      ], 
      btnText:"Kontakt",
    },
    
    ];
    export default prices;