import { mIpsum } from '/dist'

const myLoremIpsum = mIpsum({
  pNum: 1,
  resultType: 'html',
})
console.log(myLoremIpsum)

const beatlesIpsum = "Beatles Ipsum, Ob-la-di Ob-la-da."
const olbaDioblaDa = [
  "Desmond has a barrow in the market place.",
  "Molly is the singer in a band.",
  "Desmond says to Molly girl I like your face.",
  "And Molly says this as she takes him by the hand.",
  "Ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "Ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "Desmond takes a trolley to the jewellers stores.",
  "Buys a twenty carat golden ring (Golden ring?).",
  "Takes it back to Molly waiting at the door.",
  "And as he gives it to her she begins to sing (Sing).",
  "Ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "Ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on, yeah (No).",
  "In a couple of years they have built.",
  "A home sweet home.",
  "With a couple of kids running in the yard.",
  "Of Desmond and Molly Jones.",
  "(Ah ha ha ha ha ha).",
  "Happy ever after in the market place.",
  "Desmond let's the children lend a hand (Arm! Leg!).",
  "Molly stays at home and does her pretty face.",
  "And in the evening she's a singer with the band.",
  "Yes, ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on (Ha ha ha).",
  "Hey, ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "In a couple of years they have built.",
  "A home sweet home.",
  "With a couple of kids running in the yard.",
  "Of Desmond and Molly Jones.",
  "(Ha ha ha ha ha ha ha ha ha ha).",
  "Yeah, happy ever after in the market place.",
  "Molly let's the children lend a hand (Foot!).",
  "Desmond stays at home and does his pretty face.",
  "And in the evening she's a singer with the band.",
  "Yeah, ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "Yeah, ob-la-di ob-la-da life goes on bra.",
  "La-la how the life goes on.",
  "And if you want some fun.",
  "Take ob-la-di ob-la-da"
]

const customIpsum = mIpsum({
  pNum: 10,
  quotes: olbaDioblaDa,
  mainQuote: beatlesIpsum,
  tagBefore: `
    <article class="message is-primary">
      <div class="message-body">
  `,
  tagAfter: `
      </div>
    </article>
  `,
})

document.querySelector('#wrapper').innerHTML = customIpsum

