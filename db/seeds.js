const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Book = require('../models/book');
const Film = require('../models/film');
const Podcast = require('../models/podcast');
const Restaurant = require('../models/restaurant');
const TvSeries = require('../models/tvSeries');

User.collection.drop();
Book.collection.drop();
Film.collection.drop();
Podcast.collection.drop();
Restaurant.collection.drop();
TvSeries.collection.drop();

User
  .create([{
    firstName: 'Amadea',
    lastName: 'Kimmins',
    username: 'amadeakimmins',
    email: 'amadea@ga.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
return Book
  .create([{
    title: 'A Little Life',
    createdBy: users[0],
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
    synopsis: 'Hetty "Handful" Grimke, an urban slave in early nineteenth century Charleston, yearns for life beyond the suffocating walls that enclose her within the wealthy Grimke household. The Grimke\'s daughter, Sarah, has known from an early age she is meant to do something large in the world, but she is hemmed in by the limits imposed on women.'
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
  .then((book) => {
    console.log(`${book.length} books created!`);

    return Film.create([{
      title: 'Dunkirk',
      image: 'http://static.tvtropes.org/pmwiki/pub/images/dunkirk_5.jpg',
      year: '2017',
      averageRating: 8.1,
      director: 'Christopher Nolan',
      synopsis: 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.',
      trailer: 'https://www.youtube.com/watch?v=F-eMt3SrfFU'
    },{
      title: 'Baby Driver',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      year: '2017',
      averageRating: 7.7,
      director: 'Edgar Wright',
      synopsis: 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
      trailer: 'https://www.youtube.com/watch?v=z2z857RSfhk'
    },{
      title: 'It',
      image: 'http://www.indiewire.com/wp-content/uploads/2017/03/it.png?w=675',
      year: '2017',
      averageRating: '7.6',
      director: 'Andy Muschietti',
      synopsis: 'A group of bullied kids band together when a shapeshifting monster, taking the appearance of a clown, begins hunting children.',
      trailer: 'https://www.youtube.com/watch?v=FnCdOQsX5kc'
    },{
      title: 'Darkest Hour',
      image: 'https://cdn.empireonline.com/jpg/70/0/0/1280/960/aspectfit/0/0/0/0/0/0/c/articles/59679959d3ce91b053350689/darkest-hour-poster.jpg',
      year: '2017',
      averageRating: 7.3,
      director: 'Joe Wright',
      synopsis: 'During the early days of World War II, the fate of Western Europe hangs on the newly-appointed British Prime Minister Winston Churchill, who must decide whether to negotiate with Hitler, or fight on against incredible odds.',
      trailer: 'https://www.youtube.com/watch?v=LtJ60u7SUSw'
    },{
      title: 'Molly\'s Game',
      image: 'https://www.cineworld.co.uk/xmedia-cw/repo/feats/posters/HO00004957.jpg',
      year: '2017',
      averageRating: 7.7,
      director: 'Aaron Sorkin',
      synopsis: 'The true story of Molly Bloom, an Olympic-class skier who ran the world\'s most exclusive high-stakes poker game and became an FBI target.',
      trailer: 'https://www.youtube.com/watch?v=Mb2hMVDD8fs'
    },{
      title: 'T2 Trainspotting',
      image: 'https://www.sonypictures.com/movies/t2trainspotting/assets/images/onesheet.jpg',
      year: '2017',
      averageRating: 7.3,
      director: 'Danny Boyle',
      synopsis: 'After 20 years abroad, Mark Renton returns to Scotland and reunites with his old friends Sick Boy, Spud, and Begbie.',
      trailer: 'https://www.youtube.com/watch?v=EsozpEE543w'
    },{
      title: 'Manchester by the Sea',
      image: 'https://i5.walmartimages.ca/images/Large/785/158/6000196785158.jpg?odnBound=460',
      year: '2016',
      averageRating: 7.9,
      director: 'Kenneth Lonergan',
      synopsis: 'A depressed uncle is asked to take care of his teenage nephew after the boy\'s father dies.',
      trailer: 'https://www.youtube.com/watch?v=gsVoD0pTge0'
    },{
      title: 'Hacksaw Ridge',
      image: 'http://www.hacksawridge.movie/img/posters/poster01.jpg',
      year: '2016',
      averageRating: 8.2,
      director: 'Mel Gibson',
      synopsis: 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.',
      trailer: 'https://www.youtube.com/watch?v=s2-1hz1juBI'
    },{
      title: 'Jackie',
      image: 'https://static.rogerebert.com/uploads/movie/movie_poster/jackie-2016/large_jackie.jpg',
      year: '2016',
      averageRating: 6.7,
      director: 'Pablo Larraín',
      synopsis: 'Following the assassination of President John F. Kennedy, First Lady Jacqueline Kennedy fights through grief and trauma to regain her faith, console her children, and define her husband\'s historic legacy.',
      trailer: 'https://www.youtube.com/watch?v=g9pW3B8Ycc4'
    },{
      title: 'The Light Between Oceans',
      image: 'https://www.cineworld.co.uk/xmedia-cw/repo/feats/posters/HO00002989.jpg',
      year: '2016',
      averageRating: 7.2,
      director: 'Derek Cianfrance',
      synopsis: 'A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from a drifting rowing boat.',
      trailer: 'https://www.youtube.com/watch?v=lk7yw00a4fs'
    }]);
  })
  .then((film) => {
    console.log(`${film.length} films created!`);

    return Podcast.create([{
      title: 'Dirty John',
      image: 'http://is4.mzstatic.com/image/thumb/Music128/v4/d0/77/5b/d0775b67-f973-85ce-7596-fcb2cb87245c/source/1200x630bb.jpg',
      creator: 'Wondery',
      synopsis: 'A true story about seduction, deception, forgiveness, denial, and ultimately, survival. Episode one of Dirty John begins with an official from Orange County, California, describing the multiple stab wounds inflicted on the victim of a homicide in summer 2016. The podcast then rewinds two years to 2014, when wealthy interior designer Debra Newell, a single mother in her 50s from southern California, meets the perfect man online. John Meehan is handsome, charming and attentive, a “freelance anaesthetist” who wears his surgical scrubs at home, as if they might offer proof of his professional credentials. Her grown-up children smell a rat, but Newell is smitten. Within two months the couple move in together and marry. It’s only then that Newell gets her first glimpses of John’s darker side.',
      link: 'https://itunes.apple.com/gb/podcast/dirty-john/id1272970334?mt=2'
    },{
      title: 'Untold: The Daniel Morgan Murder',
      image: 'https://acastprod.blob.core.windows.net/media/v1/2b54ab03-f336-4fee-8b05-ae18d1cc271a/untold-red-5550-ip6sdm7z.jpg',
      creator: 'Peter Jukes',
      synopsis: 'A single murder committed in a south London car park 30 years ago has now generated two series of Untold, a podcast created by writer Peter Jukes with Alastair Morgan, the brother of Daniel Morgan. Morgan was a private investigator whose killing in 1987 has never been satisfactorily solved, yet prompted several inquiries that reached into the dark heart of the Met Police and the Murdoch media empire.',
      link: 'https://itunes.apple.com/gb/podcast/untold-the-daniel-morgan-murder/id1114802610?mt=2'
    },{
      title: 'Ear Hustle',
      image: 'https://static1.squarespace.com/static/591a00ae197aea4b603d2762/t/5939a5b49de4bb971fceffe5/1496950206949/',
      creator: 'Radiotopia',
      synopsis: 'Ear Hustle is a podcast about people convicted of crimes, produced by two inmates and a volunteer at California’s San Quentin state prison. Co-host Earlonne Woods is serving a 31-year sentence for attempted robbery; sound designer Antwan Williams, 15 years for armed robbery.',
      link: 'https://itunes.apple.com/gb/podcast/ear-hustle/id1240841298?mt=2'
    },{
      title: 'Criminal',
      image: 'https://f.prxu.org/criminal/images/b55dde21-f999-4508-ae76-34fe3597eacd/criminalZAG.png',
      creator: 'Radiotopia',
      synopsis: 'Perhaps the most straightforward and successful of all crime podcasts, Criminal’s back catalogue is a spectacular array of “stories of people who’ve done wrong, been wronged, or gotten caught somewhere in the middle”, from the charming to the chilling.',
      link: 'https://itunes.apple.com/gb/podcast/criminal/id809264944?mt=2'
    },{
      title: 'The Guilty Feminist',
      image: 'http://static.libsyn.com/p/assets/3/8/4/e/384efd0532bc89ac/itunes_3.jpg',
      creator: 'Independent',
      synopsis: 'Every episode of the Guilty Feminist podcast starts with a confession: “I’m a feminist, but I also really, really want to look good sitting down naked.” Inspired by a chat over brunch between comedians Deborah Frances-White and Sofie Hagen, the podcast acknowledges that it’s difficult to always behave in accordance with the tenets of feminism.',
      link: 'https://itunes.apple.com/gb/podcast/the-guilty-feminist/id1068940771?mt=2'
    },{
      title: 'Desert Island Discs',
      image: 'http://ichef.bbci.co.uk/corporate2/images/width/live/p0/2h/zf/p02hzf66.jpg/624',
      creator: 'BBC Radio 4',
      synopsis: 'The vintage Radio 4 programme sees “castaways” select eight recordings (only one of which they can “save from the waves”) plus a book and a luxury item, with the podcast incarnation reducing music choices to around 30 seconds (often more than long enough).',
      link: 'https://itunes.apple.com/gb/podcast/desert-island-discs/id342735925?mt=2'
    },{
      title: 'Women’s Hour',
      image: 'http://is5.mzstatic.com/image/thumb/Music71/v4/c2/df/a0/c2dfa03e-a69f-4db3-51bc-b2c20c2e4dfd/source/1200x630bb.jpg',
      creator: 'BBC Radio 4',
      synopsis: 'Just 45 minutes on the podcast, but packed full of female perspectives on a wide variety of topics including politics, health, culture and education – with its Late Night spinoff broaching more risqué points of discussion.',
      link: 'https://itunes.apple.com/gb/podcast/womans-hour/id130950322?mt=2'
    },{
      title: 'TED Radio Hour',
      image: 'https://media.npr.org/assets/img/2015/03/18/ted_sq-3426270a541795b78233a698dd7965d407545cf3-s300-c85.jpg',
      creator: 'NPR',
      synopsis: 'Discussions with some of the world\'s most remarkable minds provide a journey through fascinating ideas, astonishing inventions and new ways to think and create.',
      link: 'https://itunes.apple.com/gb/podcast/ted-radio-hour/id523121474?mt=2'
    },{
      title: 'How I Built This',
      image: 'http://is5.mzstatic.com/image/thumb/Music118/v4/80/b8/01/80b80190-0ccc-d12c-e08b-92363a036e46/source/600x600bb.jpg',
      creator: 'NPR',
      synopsis: 'How I Built This is an American podcast about "innovators, entrepreneurs, idealists, and the stories behind the movements they built" produced by NPR',
      link: 'https://itunes.apple.com/gb/podcast/how-i-built-this-with-guy-raz/id1150510297?mt=2'
    },{
      title: 'Oprah’s SuperSoul Conversations',
      image: 'http://is4.mzstatic.com/image/thumb/Music128/v4/86/5b/66/865b6609-6eed-453b-486d-67a3c0cb5f5b/source/1200x630bb.jpg',
      creator: 'Oprah',
      synopsis: 'Awaken, discover and connect to the deeper meaning of the world around you with SuperSoul. Hear Oprah’s personal selection of her interviews with thought-leaders, best-selling authors, spiritual luminaries, as well as health and wellness experts. All designed to light you up, guide you through life’s big questions and help bring you one step closer to your best self.',
      link: 'https://itunes.apple.com/gb/podcast/oprahs-supersoul-conversations/id1264843400?mt=2'
    }]);
  })
  .then((podcast) => {
    console.log(`${podcast.length} podcasts created!`);

    return TvSeries.create([{
      name: 'The Sinner',
      image: 'http://jessica-biel.com/wp-content/uploads/2017/07/jessica-biel-sinner-book-cover.jpg',
      year: 2017,
      averageRating: 8.3,
      synopsis: 'A young mother tries to find out what\'s causing her to have violent tendencies'
    }]);
  })
  .then((tvSeries) => {
    console.log(`${tvSeries.length} TV Series created!`);

    return Restaurant.create([{
      name: 'Barafina',
      image: 'https://3.bp.blogspot.com/-PZzyLqmfW9Q/VsxChNwmSUI/AAAAAAAAfPw/XsmOiEsSLak/s1600/3G6A1667.JPG',
      cuisine: 'Tapas',
      address: {
        line1: '26-27 Dean Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1D 3LL',
        country: 'United Kingdom'
      }
    },{
      name: 'Chotto Matte',
      image: 'https://static1.squarespace.com/static/52bf4158e4b0092ee5f6333b/t/53f50719e4b0f6c3497713fd/1408567095776/chotto+matte+interior',
      cuisine: 'Japanese',
      address: {
        line1: '11-13 Frith Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1D 4RD',
        country: 'United Kingdom'
      }
    },{
      name: 'Bocca di Lupo',
      image: 'http://cdn.ltstatic.com/2008/December/HG581083_942long.jpg',
      cuisine: 'Italian',
      address: {
        line1: '12 Archer Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1D 7BB',
        country: 'United Kingdom'
      }
    },{
      name: 'Chicama',
      image: 'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2016/11/Chicama-Bar-Dining-1600x1066-1000x600.jpg',
      cuisine: 'Peruvian',
      address: {
        line1: '383 King\'s Road',
        line2: 'Chelsea',
        city: 'London',
        postcode: 'SW10 0LP',
        country: 'United Kingdom'
      }
    },{
      name: 'The Palomar',
      image: 'https://media-cdn.tripadvisor.com/media/photo-o/0d/60/db/f3/palomar.jpg',
      cuisine: 'Israeli',
      address: {
        line1: '34 Rupert Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1D 6DN',
        country: 'United Kingdom'
      }
    },{
      name: 'Dishoom',
      image: 'http://www.dishoom.com/wp-content/uploads/2014/10/Covent-Garden-2-1400x788.jpg',
      cuisine: 'Indian',
      address: {
        line1: '12 Upper Street',
        line2: 'Martin\'s Lane',
        city: 'London',
        postcode: 'WC2H 9FB',
        country: 'United Kingdom'
      }
    },{
      name: 'The Shed',
      image: 'http://thingstodo.org.uk/wp-content/uploads/2016/05/the-shed-img-1.jpg',
      cuisine: 'European',
      address: {
        line1: '122 Palace Gardens Terrace',
        line2: 'Kensington',
        city: 'London',
        postcode: 'W8 4RT',
        country: 'United Kingdom'
      }
    },{
      name: 'Clos Maggiore',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/5d/8f/cd/clos-maggiore.jpg',
      cuisine: 'French',
      address: {
        line1: '33 King Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'WC2E 8JD',
        country: 'United Kingdom'
      }
    },{
      name: 'Flavour Bastard',
      image: 'http://www.moorizzla.com/wp-content/uploads/2016/03/park-chinois-4.jpg',
      cuisine: 'International',
      address: {
        line1: '63-64 Frith Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1D 3JW',
        country: 'United Kingdom'
      }
    },{
      name: 'Ember Yard',
      image: 'http://trythisfor.com/upload/venue/Ember%20Yard%201_14760.jpg',
      cuisine: 'Spanish',
      address: {
        line1: '60 Berwick Street',
        line2: 'Soho',
        city: 'London',
        postcode: 'W1F 8SU',
        country: 'United Kingdom'
      }
    }]);
  })
  .then((restaurant) => {
    console.log(`${restaurant.length} restaurants created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
