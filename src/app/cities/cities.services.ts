import { Injectable } from '@angular/core';
import { City } from './cities.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: City[] = [
    {
      id: 1,
      description: 'Paris, France',
      placesToSee: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
      rating: 3.8,
      image: 'https://th.bing.com/th/id/OIP.0NrHIsvBSAoMwOFKZauUXgHaEK?pid=ImgDetMain',
      category: 'Cultural',
      cost: 150000,
    },
    {
            id: 2,
            description: 'New York, USA',
            placesToSee: ['Statue of Liberty', 'Central Park', 'Times Square'],
            rating: 2.9,
            image: 'https://wallup.net/wp-content/uploads/2017/03/28/447930-cityscape-sunset-Empire_State_Building-New_York_City-sky.jpg',
            category: 'Family',
            cost: 200000, // Cost in rupees
          },
          {
            id: 3,
            description: 'Tokyo, Japan',
            placesToSee: ['Shinjuku Gyoen', 'Senso-ji Temple', 'Tokyo Tower'],
            rating: 4.9,
            image: 'https://loving-tokyo.com/en/wp-content/uploads/2019/05/tokyo-attractions-190521134419001-1600x800.jpg',
            category: 'Cultural',
            cost: 180000, // Cost in rupees
          },
          {
            id: 4,
            description: 'Sydney, Australia',
            placesToSee: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge'],
            rating: 4.6,
            image: 'https://s3-ap-southeast-2.amazonaws.com/cdn.wayfarer.travel/wp-content/uploads/2017/10/03103434/Sydney-category-lead.jpg',
            category: 'Adventure',
            cost: 170000, // Cost in rupees
          },
          {
            id: 5,
            description: 'Rome, Italy',
            placesToSee: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
            rating: 3.5,
            image: 'https://www.worldatlas.com/upload/7d/45/7e/shutterstock-98484677.jpg',
            category: 'Cultural',
            cost: 160000, // Cost in rupees
          },
          {
            id: 6,
            description: 'Barcelona, Spain',
            placesToSee: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
            rating: 4.7,
            image: 'https://th.bing.com/th/id/R.cb166bc7094acbae570d59c08bead336?rik=CubN9a4u7Pr6Lg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2f3%2f4%2f1088397-popular-barcelona-city-wallpapers-2048x1388.jpg&ehk=BBnhi%2bWTNxRYcY%2fVqJNML86pMn4Li8bQL1nD%2bW93HzI%3d&risl=&pid=ImgRaw&r=0',
            category: 'Cultural',
            cost: 155000, // Cost in rupees
          },
          {
            id: 7,
            description: 'Istanbul, Turkey',
            placesToSee: ['Hagia Sophia', 'Topkapi Palace', 'Grand Bazaar'],
            rating: 1.9,
            image: 'https://www.starholidays.ro/wp-content/uploads/2019/02/istanbul.jpg',
            category: 'Heritage',
            cost: 140000, // Cost in rupees
          },
          {
            id: 8,
            description: 'Dubai, UAE',
            placesToSee: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah'],
            rating: 4.1,
            image: 'https://th.bing.com/th/id/R.3e0f00763307e90aeb372cf2d2a4e520?rik=HecTVFGKZ4NVgQ&riu=http%3a%2f%2fuaecentral.com%2fwp-content%2fuploads%2f2020%2f02%2fDubai-Fountain.jpg&ehk=Wz0zJbKV0TsAxGDcldI9L43ESIbSRpn1g41geDvl7gI%3d&risl=&pid=ImgRaw&r=0',
            category: 'Adventure',
            cost: 210000, // Cost in rupees
          },
          {
            id: 9,
            description: 'Cairo, Egypt',
            placesToSee: ['Pyramids of Giza', 'Sphinx', 'Egyptian Museum'],
            rating: 3.8,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cairo_From_Tower_(cropped).jpg/640px-Cairo_From_Tower_(cropped).jpg',
            category: 'Heritage',
            cost: 130000, // Cost in rupees
          }
  ];

  getCities(): City[] {
    return this.cities;
  }

  getCityById(id: number): City | undefined {
    return this.cities.find((city) => city.id === id);
  }

  updateCity(city:City){
    const cityidx = this.cities.findIndex(x=> x.id === city.id);

    if(cityidx != null && cityidx != undefined)
    {
      this.cities[cityidx] = city;
    } 
  }

  addCity(city: City): void {
    this.cities.push(city);
  }


  deleteCity(id: number): void {
    this.cities = this.cities.filter(city => city.id !== id);
  }
 
} 
 


