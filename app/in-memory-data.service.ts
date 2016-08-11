export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Hancock'},
      {id: 12, name: 'Silver Surfer'},
      {id: 13, name: 'Iron Man'},
      {id: 14, name: 'Goku'},
      {id: 15, name: 'Wolverine'},
      {id: 16, name: 'Shiva'},
      {id: 17, name: 'Djingga'},
      {id: 18, name: 'Dr.Strange'},
      {id: 19, name: 'Deadpool'},
      {id: 20, name: 'Dark Knight'}
    ];
    return {heroes};
  }
}
