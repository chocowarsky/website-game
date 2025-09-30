const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Awalnya coba-coba, eh malah jadi main tiap hari. Sistem leveling-nya bikin penasaran terus mau naik ke tahap berikutnya.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Keren banget! Musik latarnya bikin suasana makin hidup, rasanya kayak masuk ke dunia game-nya langsung',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Gameplay simpel tapi nagih. Cocok banget buat semua umur, nggak bikin ribet.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Event-event di dalam game selalu fresh. Jadi nggak pernah bosan karena selalu ada hal baru yang bisa dicoba.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Saya suka banget sama karakternya, detail desainnya keren dan punya ciri khas masing-masing.",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Game ringan tapi grafisnya mantap. Jalan di HP kentang pun masih mulus tanpa nge-lag.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Developer-nya responsif, sering update dan dengerin masukan player. Jarang banget ada game yang kayak gini.',
  },
]

let index = 1
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[index]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  index++

  if (index > testimonials.length - 1) {
    index = 0
  }
}

setInterval(updateTestimonial, 1000)
