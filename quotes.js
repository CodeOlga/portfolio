const button = document.querySelector('#btn');
const par = document.querySelector('#par');
const quotes = [
    "The First Computer Weighed More Than 27 Tons. Her name was ENIAC, and she took up a modest 1800 square feet of space",

"About 90% of the World’s Currency Only Exists on Computers. This means only about 10% of the global currency is actually cash",

"The First Computer Mouse was Made of Wood. Doug Engelbart invented it in 1964",

"About 70% of Virus Engineers Work for Organized Crime Syndicates. This gives new weight to the importance of anti-virus and anti-malware software, and excellent virus removal services",

"The First Known Computer Programmer was a Woman. Her name was Ada Lovelace, and she lived in England, where she worked as a mathematician and writer. She is famous for working on the “Analytical Engine”",

"Some of the Biggest Computer Brands Started in Garages. This is true for Apple, Microsoft, and HP",

"People Blink Less When They Use Computers. While the average person blinks about 20 times a minute under normal circumstances, people on computers only blink about seven times a minute",

"Hackers Write About 6,000 New Viruses Each Month. These viruses are designed to target a wide selection of operating systems, so learning to avoid viruses and malware is essential!",

"More Than 80% of Daily Emails in the U.S. are Spam. To keep your data safe, delete these emails immediately and don’t click any links or attachments they might contain",

"MyDoom is the Most Expensive Computer Virus in History. The virus cost an estimated $38.5 billion in damage and came about in January of 2006. Shortly after that, it earned a name for itself as the fastest-spreading virus ever",

"The Parts for the Modern Computer Were First Invented in 1833. A man named Charles Babbage put them together, but the first modern computer came about 120 years later",

"The First Gigabyte Drive Cost $40,000. It was released in 1980 and weighed 550 lbs. How’s that for a portable drive?",

"The Case of the First Macintosh Computer Includes 47 Signatures. On the inside of the device, Macintosh’s entire 1982 division signed the case",

"The Worst U.S. Security Breach of All Time Happened Because of a USB Stick. Someone found the stick (which a foreign intelligence agency infected) in a parking lot and plugged it into their computer. The computer had links to the U.S. Central Command. The attack happened in 2008 and resulted in the theft of thousands of classified and unclassified documents. The Pentagon spent about 14 months cleaning up the damage from the worm",

"A Single Computer Catches 50% of all Wikipedia Vandalism. This computer has a 90% accuracy rate",

"Computers Sort 95% of Mail. The U.S. Postal Service still hires individual employees to sort through addresses that are too sloppy for computers to make sense of",

"MIT Has Computers That can Detect Fake Smiles. These computers can tell between genuine smiles and frustrated smiles",

"Computers Might Soon be Able to Tell What Dogs Think. These computers are under development by a Scandinavian company. A prototype is purported to be available",

"Disney Fired John Lasseter for Pushing Computer Animation. He’s now the CCO of Pixar"  
]

button.addEventListener('click', ()=> {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = 'block';
    par.textContent = randomQuote;
})

