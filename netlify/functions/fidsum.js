const fidlerPhrases = [
  "",
  "It's not a great start to the day lemme tell ya.",
  "Aw man.",
  "Where's my two minute guitar solo?",
  "uhhhhhh uhhhhhh.",
  "There's a wizard that sits outside Hammersmith Station.",
  "Authority is the real weapon of mass destruction.",
  "You could do some real damage with that badge.",
  "In fact grab whatevr you can I'll meet you outside with a van.",
  "Aw, I thought I was being all Sherlock.",
  "Hi I'm Matt and I typed my Steam 2FA key into the wrong place.",
  "Maybe it works like a reverse card in Uno.",
  "I could tell you, but I'd have to know the answer first.",
  'Alex "Rat-King" M*****.',
  "Now I'm picturing pouring beans all over Alex.",
  "I don't have any soap but we've got like 30 bottles of beer here.",
  "I have a suspicion that this is a completely obvious in retrospect side-effect of some work blue had.",
  "So I'm hoping you broke it and we don't have to fix it.",
  "I think the clear solution is to convert the bar area into a Thunderdome.",
  "Tattooed Guy and Smoothskin Guy.",
  "Always good to know that when I'm hungry I can come to work for a quality roast.",
  "So far my efforts have yielded nothing of value.",
  "Is it possible that something we haven't changed is loading in something that has changed.",
  "We found the problem! pub time.",
  "Don't leaaaavvve meeeeee.",
  "Find a friend with a shower.",
  "What did I do to deserve this aggression from you?",
  "If you are alone when you crack open a peanut shell and eat the peanut inside, you are the only person in the world to have ever seen that peanut.",
  "Both concrete and glass are mostly made of sand which makes skyscrapers just really tall sandcastles.",
  "The first person who inhaled helium must have been so relieved when the effects wore off.",
  "Hold on, I got confused while writing the cons.",
  "Good morning all! I'd like to start off with a joke: Luke E******.",
  "Interdasting.",
  "Mm, sounds risky.",
  "No no, java is the most popular language so we have to use that one.",
  "The first time eslint yelled at me about writing things wrong was so confusing.",
  "Marco has absolutely run out of fucks to give here.",
  "Lizard people confirmed.",
  "Don't make me burn you out of that hedge.",
  "OH BOY IT'S A WALL OF TEXT!",
  "The cost of failure is too high.",
  "One day humanity will solve the problem of typing on a computer.",
  "Clearly the problem is other people.",
  "Or example, the base of a tree and not a small side table.",
  "Shoulda splashed out on #premium-james.",
  "So instead of making it better, I made it worse!",
  "Also there are lots of bees in here.",
  "I'm so proud of our coordination.",
  "Hedgevengers, dissassemble!",
  "I feel we should end this conversation.",
  "Can you take paternity leave if your baby is an intangible concept?",
  "Does someone need to describe the 127 forms of srcset somewhere?",
  "To be fair there's probably more people in the middle of the atlantic than in antarctica.",
  "My favourite thing about noise cancelling headphones is that I'm oblivious to the pain I inflict on my laptop.",
  "It has a cool spinny 3D globe too.",
  "I love theoretical boxes.",
  "The build is pining for the fjords.",
  "It looks a bit like a contender for something the Ghost Busters would drive.",
  'Aiming for "highest mouth to body ratio" but best supporting actor would be good too.',
  "I am amp man.",
  "Suhweet.",
  "And if we then find it's not our fault we start spamming slam dunk gifs and throw it back in thundercats faces.",
  "There shouldn't be a need to assign responsibility like we're children.",
  "I dunno but this weird clown guy keeps turning up.",
  "Oh so we're just meant to look at our own code and see if it works?",
  '@William for "most damage done with fewest lines of code" award.',
  "I found a bad.",
  "Slowly but surely we defeat communism.",
  "Be the chaos monkey you want to see in the world.",
  "That'd Brighton his day.",
  "I blame Elementor for most things.",
  "I am both amazed and suspicious.",
  "Smell ya later nerds.",
  "Fingles cringled then.",
  "Hold on to your hats everyone.",
  "The failures go marching two by two, hurrah, hurrah.",
  "It's a rollercoaster of emotions today.",
  "If the peanut gallery could get back to work please.",
  "You can't see blind people?",
  "Im thuper therial you guyths!",
  'I call it "live-thinking".',
  "Ecapsawhat now?",
  "You're off the hook this time M***** but I'll be watching you.",
  "Spinning the wheel of fortune again.",
  "Just so we're clear I was maybe 5% of the solution.",
  "AWS is like a wild animal, you have to establish dominance.",
  "Like a bad taxidermy.",
  "This has been far too civil, we should have a fist fight over who’s rss reader is better.",
  "Ooo, could slip in a bitcoin miner.",
  "Be cool if it just went shloooooorp.",
  "I'm a responsive-last kinda guy.",
  "Morning all, I have a gift of dubious quality for everyone.",
  "Got some decent friction burns last time.",
  "We have unfairly emprisoned Roo for too long.",
  "Make your own fursuit.",
  "He snuck out for crisps and they caught him.",
  "Plz to fix?",
  "I've been reliably informed by the internet that everyone else is a bot.",
  "Why waste time say lot word when few do trick.",
  "OOOOH YEAHHHHH.",
  "Like a dad watching their child make a mistake, but knowing they need to learn on their own.",
  "EVERYONE gets a heimlich.",
  "What happens if you clap at the end of a presentation?",
  "He seeks the forbidden knowledge.",
  "I mean I've never tried it with animals but I've stuffed cushions before.",
  "I'm gonna do things, hold my beard.",
  "That man's core strength is incredible.",
  "If it's got big robots I want it.",
  "I see things I don't understand, I panic.",
  "I can't just wear one flamingo earring.",
  "I'm a hotfix machine, I'll hotfix anything, I'm gonna hotfix my kettle.",
  "If your face isn't covered in scars, are you _really_ a programmer?",
  "Blame it all on lorem ipsum then.",
  "Yes! what if your mouth could be an extra hand?",
  "No teeth? rotary teeth? it's all coming.",
  "brb, making myself look better.",
  "Just rerun over night, stop when the score’s good enough.",
  "I hate all of these problems.",
  "Slower, but functional.",
  "No they make an ass out of u and mptions.",
  "I thought I was cool once, but it was actually back ache.",
  "Remember kids, never trust the media.",
  "I can't believe that wizard sold me a faulty sombrero.",
  "The question isn't is cron running, the question is are you running?",
  "There we go, I'm now as faulty as everyone else.",
  "It's like those shops that are gone when you try to return the cursed goblet you bought there.",
  "Just in time for elevenses.",
  "Ugh, so boring.",
  "But if you were really clever with your builds, you could probably use Jenkins to draw a pirate ship.",
  "Am I the only one that seems to have an invisible flakiness indicator?",
  "Bruh I live for the drop.",
  "I am nought but Icarus, and Browserstack is my sun.",
  "This place is terrible.",
  "I'd go to a different casino.",
  "oh, it's not a jacket in a can?",
  "A wizard taught me an incantation.",
  "The wheel weaves as the wheel wills.",
  "I hear a single ship's peanut costs three deciduous forests.",
  "That's not what the test says, I just really like you.",
  "Grooby.",
  "Yeah but I prefer blaming things I don't have commits in.",
  "I'm starting to think we're using elementor wrong and it's actually an error message generator.",
  "I think whoever made that was smokin' some erb.",
  "Am harassing colleagues as we speak.",
  "The gif isn't related, I just thought everyone would like it.",
  'Dibs on "release leper".',
  "Always buy your mattresses free range.",
  "Hokay that's a deuce I'mma punch it.",
  "I'm really not comfortable yoloing my work in.",
  "You'd be amazed the places you can fit a bendy bus.",
  "@keir this ticket is not my son, but I will raise it.",
  "It's actually just a bunch of squid tied into a vest.",
  "Buddy I get paid either way.",
  '"But James this seems like a hack." Yes.',
  "How do you delete other people's emoji? Asking for a friend.",
  "Anyone that links you a PR claiming otherwise is a Russian spy.",
  "Well I never make mistakes so it couldn’t possibly have backfired.",
  "Let's get tattoos.",
  "I can't believe I got murdered at work.",
  "Ugh, and I'm all out of pigeons.",
  "The Startled Vegetarian would be a great pub name.",
  'Oh yeah by the way, my "What is this meat?" stall will be doing a popup in the hub next week.',
  "Someone bring me a pigeon and a knife.",
  "Sorry I have to focus on nerfing the Pope.",
  "Oh god, performance anxiety.",
];

/**
 * How many words are there in the string?
 * @param  {String} phrase
 *  The phrase
 * @return {Number}
 *  The word count
 */
const howManyWords = (phrase) => phrase.split(" ").length;

/**
 * Pick a random phrase from the list
 * @param  {Array} phrases
 *  Array of Fidler Phrases
 * @param  {Number} count
 *  The index of the chosen item
 * @return {String}
 *  The random phrase
 */
const pickRandomPhrase = (phrases, count) =>
  phrases[Math.floor(Math.random() * count) + 1];

/**
 * Generate the lorem Fidsum text
 * @param  {Array} phrases
 *  Array of Fidler Phrases
 * @param  {Number} count
 *  How many paragraphs to generate
 * @return {Array}
 *  Array of lorem fidsum paragraphs
 */
const generateLoremFidsum = (phrases, count) => {
  let phrasesData = phrases; // the phrases to choose from
  const maxParagraphs = count; // number of paragraphs to generate
  const maxWords = 100; // max word length of the paragraphs
  let phrasesCount = phrasesData.length - 1; // length of the phrases array
  const paragraph = []; // array to push paragraphs to
  let newPhrase = ""; // concatonated string of phrases
  let phraseBank = []; // array of picked phrases

  for (let x = 0; x < maxParagraphs; x += 1) {
    // paragraph object
    paragraph[x] = {
      id: x,
      p: [],
    };

    let wordCount = 0; // keep count of the paragraph words
    for (let y = 0; y <= phrasesCount; y += 1) {
      // make sure wordcount doesn't exceed the max
      if (wordCount <= maxWords) {
        // if the phrases are depleted then reset
        if (phrasesData.length === 1) {
          phrasesData = phraseBank;
          phraseBank = [];
          phrasesCount = phrasesData.length - 1;
        }
        // the next random phrase
        const randomPhrase = pickRandomPhrase(phrasesData, phrasesCount);
        // push phrase to the bank
        phraseBank.push(randomPhrase);
        newPhrase = randomPhrase;
        // remove phrase for original list
        phrasesData = phrasesData.filter((item) => item !== randomPhrase);
        // reduce array count
        phrasesCount -= 1;
        // if it's the first phrase add a prefix
        if (x === 0 && y === 0) {
          newPhrase = `Lorem Fidsum, ${
            newPhrase.charAt(0).toLowerCase() + newPhrase.slice(1)
          }`;
        }
        // push phrase to the current  paragraph
        paragraph[x].p.push(newPhrase);
        // increase the word count
        wordCount += howManyWords(newPhrase);
      } else {
        // word count exceeded
        wordCount = 0;
        // push completed paragraph to array
        paragraph[x].p = paragraph[x].p.join(" ");
        break;
      }
    }
  }
  return paragraph;
};

const generateFidlarText = (text) => {
  let formattedText = "";
  text.forEach((para) => {
    formattedText += `${para.p}\n\n`;
  });
  return formattedText;
};

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: generateFidlarText(generateLoremFidsum(fidlerPhrases, 3)),
    }),
  };
};
