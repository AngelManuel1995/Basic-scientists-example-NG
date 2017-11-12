import { Injectable } from "@angular/core";

@Injectable()

export class QuotesService{

    private quotes:Quotes[] = [
        {
            texto:"The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.",
            author:"Albert Einstein"
        },
        {
            texto:"Not only is the Universe stranger than we think, it is stranger than we can think.",
            author:"Werner Heisenberg"
        },
        {
            texto:"Those who are not shocked when they first come across quantum theory cannot possibly have understood it.",
            author:"Niels Bohr"
        },
        {
            texto:"The first principle of value that we need to rediscover is this: that all reality hinges on moral foundations. In other words, that this is a moral universe, and that there are moral laws of the universe just as abiding as the physical laws.",
            author:" Martin Luther King Jr"
        },
        {
            texto:"Consciousness cannot be accounted for in physical terms. For consciousness is absolutely fundamental. It cannot be accounted for in terms of anything else.",
            author:"Erwin Schrödinger"
        },
        {
            texto:"How wonderful that we have met with a paradox. Now we have some hope of making progress.",
            author:"Niels Bohr"
        },
        {
            texto:"I remember discussions with Bohr which went through many hours till very late at night and ended almost in despair; and when at the end of the discussion I went alone for a walk in the neighbouring park I repeated to myself again and again the question: Can nature possibly be so absurd as it seemed to us in these atomic experiments?",
            author:"Werner Heisenberg"
        },
        {
            texto:"What I have done is to show that it is possible for the way the universe began to be determined by the laws of science. In that case, it would not be necessary to appeal to God to decide how the universe began. This doesn't prove that there is no God, only that God is not necessary.",
            author:"Stephen Hawking"
        },
        {
            texto:"While the Copernican principle comes with no guarantees that it will forever guide us to cosmic truths, it's worked quite well so far: not only is Earth not in the center of the solar system, but the solar system is not in the center of the Milky Way galaxy, the Milky Way galaxy is not in the center of the universe, and it may come to pass that our universe is just one of many that comprise a multiverse. And in case you're one of those people who thinks that the edge may be a special place, we are not at the edge of anything either.",
            author:"Neil deGrasse Tyson"
        },
        {
            texto:"Mathematics is the cheapest science. Unlike physics or chemistry, it does not require any expensive equipment. All one needs for mathematics is a pencil and paper.",
            author:"George Pólya"
        },
        {
            texto:"No, this trick won't work... How on earth are you ever going to explain in terms of chemistry and physics so important a biological phenomenon as first love? ",
            author:"Albert Einstein"
        },
        {
            texto:"The people who actually make the advances in theoretical physics don't think in these categories that the philosophers and the historians of science subsequently invent for them",
            author:"Stephen Hawking"
        },
        {
            texto:"The very nature of the quantum theory ... forces us to regard the space-time coordination and the claim of causality, the union of which characterizes the classical theories, as complementary but exclusive features of the description, symbolizing the idealization of observation and description, respectively.",
            author:"Niels Bohr"
        },
        {
            texto:"The highest court is in the end one’s own conscience and conviction—that goes for you and for Einstein and every other physicist—and before any science there is first of all belief.",
            author:"Max Planck"
        },
        {
            texto:"Time and space are finite in extent, but they don't have any boundary or edge. They would be like the surface of the earth, but with two more dimensions.",
            author:"Stephen Hawking"
        },
        {
            texto:"Physics is mathematical not because we know so much about the physical world, but because we know so little; it is only its mathematical properties that we can discover.",
            author:"Bertrand Russell"
        },
        {
            texto:"In mathematics, in physics, people are concerned with what you say, not with your certification. But in order to speak about social reality, you must have the proper credentials, particularly if you depart from the accepted framework of thinking. Generally speaking, it seems fair to say that the richer the intellectual substance of a field, the less there is a concern for credentials, and the greater is concern for content.",
            author:"Noam Chomsky"
        }
    ];

    constructor(){
        console.log("Servicio ready");
    }

    getQuotes():Quotes[]{
        return this.quotes;
    }

}

export interface Quotes{
    texto:string;
    author:string;
}