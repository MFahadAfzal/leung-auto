// lib/reviews.ts
// Real 5-star Google reviews, kept in one place so a review is only written once.
// Long reviews are shortened to a similar length (about 20-45 words) so the cards match;
// "…" marks where words were left out. The wording itself is the customer's own.
// Pages pick the ones they show with reviewsBy().
import type { Review } from "@/components/Reviews"

export const reviews: Review[] = [
  {
    name: "Leni Nievera",
    rating: 5,
    text: "Excellent service and very reasonable price. I finally found an honest and dependable repair shop. I will highly recommend this shop 👍",
  },
  {
    name: "DL Duffy",
    rating: 5,
    text: "Excellent experience with Leung’s Auto. They assessed my car quickly, explained the problem clearly, and had it repaired the next day. … Honest, reliable, efficient, and very easy to deal with.",
  },
  {
    name: "Mac Rey",
    rating: 5,
    text: "Bought an old impala for work, wobbly and all that. Came out of his shop working and all that for just 600bucks.. Meanwhile I brought my Van in dealership and all they did was x-oil and I paid almost 600bucks.",
  },
  {
    name: "Sumanta Pal",
    rating: 5,
    text: "I like this place as the person, Alen, speaks less and works more, very much legitimate in pricing, knowledgeable too to find the problem. I replaced brake fluid, transmission fluid, coolant, and other maintenance too.",
  },
  {
    name: "Jiayi Yu",
    rating: 5,
    text: "Strongly recommended, really good job and fixed the problem professionally with saving your money as well. I have 2 cars do all the maintenance job here. … I will call him Dr. Leung (because he can fix all the car's problems).",
  },
  {
    // The fluid part of the same review, for the System Flushes page
    key: "Jiayi Yu (fluids)",
    name: "Jiayi Yu",
    rating: 5,
    text: "Strongly recommended, really good job and fixed the problem professionally with saving your money as well. … So right now I sent all my cars for all maintenance job only to him, like changing Transmission fluid, … engine oil change and other things else.",
  },
  {
    name: "Ace",
    rating: 5,
    text: "Quality work for Spectacular Value. Had my brakes and rotors replaced by the team, expecting it to take several days (they are very busy). But I got a phone call in two days that my vehicle was ready.",
  },
  {
    name: "Ed",
    rating: 5,
    text: "Excellent service and people. Will always go there for car service and maintenance.",
  },
  {
    name: "Evan Traverse",
    rating: 5,
    text: "Honest shop. They did an out of province inspection for a reasonable price and were able to get my car up to spec for a very fair price. I will be returning to this shop for future maintenance.",
  },
  {
    name: "stephen fan",
    rating: 5,
    text: "Take out of province checking, good service",
  },
  {
    name: "J P",
    rating: 5,
    text: "Had my engine light go on recently, called and was able to get it checked out the next day. … I've had great, honest service so far.",
  },
  {
    // The fluids part of a long review, for the System Flushes page
    name: "Mariana Chan",
    rating: 5,
    text: "Leung’s only uses and sells premium, name-brand fluids. I even bought all the correct fluids for my son’s vehicle here—after several parts departments couldn’t help. I left with expert advice and top-notch products for less than I expected.",
  },
]

// Returns the named reviews (by key, or by name when a review has no key), in the order given
export function reviewsBy(...keys: string[]): Review[] {
  return keys.map((key) => reviews.find((review) => (review.key ?? review.name) === key)!)
}
