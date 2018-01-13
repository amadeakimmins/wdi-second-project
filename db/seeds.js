const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Book = require('../models/book');
const Film = require('../models/film');
const Podcast = require('../models/podcast');
const Restaurant = require('../models/restaurant');

User.collection.drop();
Book.collection.drop();
Film.collection.drop();
Podcast.collection.drop();
Restaurant.collection.drop();

Book
  .create([{
    title: 'A Little Life',
    image: 'https://images.gr-assets.com/books/1446469353l/22822858.jpg',
    author: 'Hanya Yanagihara',
    synopsis: 'When four classmates from a small Massachusetts college move to New York to make their way, they\'re broke, adrift, and buoyed only by their friendship and ambition. '
  },{
    title: 'Swing Time',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51UjBS-J4eL._SX323_BO1,204,203,200_.jpg',
    author: 'Zadie Smith',
    synopsis: 'The novel tells the story of two girls growing up on the wrong side of town. Residents of neighbouring housing estates in London, the pair meet at a community dance class, one (the unnamed narrator) clever and self-doubting, the other (Tracey) confident and self-destructive.'
  },{
    title: 'The Party',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51MfzRkxLvL._SX309_BO1,204,203,200_.jpg',
    author: 'Elizabeth Day',
    synopsis: 'A gripping story of betrayal, privilege and hypocrisy, set in the unassailable heart of the British establishment.'
  },{
    title: 'The Invention of Wings',
    image: 'https://www.heartsandmindsbooks.com/images/old/The%20Invention%20of%20Wings.jpg',
    author: 'Sue Monk Kidd',
    synopsis:'Hetty "Handful" Grimke, an urban slave in early nineteenth century Charleston, yearns for life beyond the suffocating walls that enclose her within the wealthy Grimke household. The Grimke\'s daughter, Sarah, has known from an early age she is meant to do something large in the world, but she is hemmed in by the limits imposed on women.'
  },{
    title: 'Bay of Secrets',
    image: 'https://images-na.ssl-images-amazon.com/images/I/516wor683vL._SX323_BO1,204,203,200_.jpg',
    author: 'Rosanna Ley',
    synopsis: 'Following the wishes of her parents to keep her safe during the war, a young girl, Julia, enters a convent in Barcelona. Looking for a way to maintain her links to the outside world, she volunteers to help in a maternity clinic. But worrying adoption practices in the clinic force Sister Julia to decide how far she will go to help those placed in her care.'
  },{
    title: 'The Goldfinch',
    image: 'https://images-na.ssl-images-amazon.com/images/I/5137tWq8ZzL._SX316_BO1,204,203,200_.jpg',
    author: 'Donna Tartt',
    synopsis: 'It begins with a boy. Theo Decker, a thirteen-year-old New Yorker, miraculously survives an accident that kills his mother. Abandoned by his father, Theo is taken in by the family of a wealthy friend. Bewildered by his strange new home on Park Avenue, disturbed by schoolmates who don\'t know how to talk to him, and tormented above all by his unbearable longing for his mother, he clings to one thing that reminds him of her: a small, mysteriously captivating painting that ultimately draws Theo into the underworld of art.'
  },{
    title: 'Shantaram',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41znYsYk8SL._SX319_BO1,204,203,200_.jpg',
    author: 'Gregory David Roberts',
    synopsis: 'So begins this epic, mesmerizing first novel set in the underworld of contemporary Bombay. Shantaram is narrated by Lin, an escaped convict with a false passport who flees maximum security prison in Australia for the teeming streets of a city where he can disappear.'
  },{
    title: 'Purple Hibiscus',
    image: 'https://images.gr-assets.com/books/1329431038l/126381.jpg',
    author: 'Chimamanda Ngozi Adichie',
    synopsis: 'Fifteen-year-old Kambili’s world is circumscribed by the high walls and frangipani trees of her family compound. Her wealthy Catholic father, under whose shadow Kambili lives, while generous and politically active in the community, is repressive and fanatically religious at home.'
  },{
    title: 'Florence Grace',
    image: 'https://images.gr-assets.com/books/1461755960l/28074327.jpg',
    author: 'Tracy Rees',
    synopsis: 'Florrie Buckley is an orphan, living on the wind-blasted moors of Cornwall. It\'s a hard existence but Florrie is content; she runs wild in the mysterious landscape. She thinks her destiny is set in stone. But when Florrie is fourteen, she inherits a never-imagined secret.'
  },{
    title: 'A Quiet Life',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51s95EzyceL._SX342_BO1,204,203,200_.jpg',
    author: 'Natasha Walter',
    synopsis: 'Since the disappearance of her husband in 1951, Laura Leverett has been living in limbo with her daughter in Geneva. All others see is her conventional, charming exterior; nobody guesses the secret she is carrying.'
  }])
