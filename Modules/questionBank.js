import { getRandomName } from "../Modules/names.js"
let readingPassage1 = `In recent years, many schools have started replacing traditional textbooks with digital devices such as tablets and laptops. Supporters argue that digital learning tools make education more interactive and accessible. Students can watch educational videos, participate in online discussions, and access updated information instantly. In addition, digital materials reduce the need for printed books, which may help the environment.

  However, critics believe that excessive screen time can negatively affect students’ concentration and health. Some research suggests that reading from screens may reduce comprehension compared to reading printed texts. Furthermore, not all students have equal access to reliable internet connections or personal devices, which can widen the gap between privileged and underprivileged learners.

  Although digital education offers many advantages, experts suggest that a balanced approach—combining traditional and digital methods—may be the most effective solution.`
let readingPassage2 = `In recent years, more teenagers have chosen to spend their free time indoors rather than outside. Many prefer playing online games, watching streaming platforms, or scrolling through social media. Technology allows them to connect with friends easily without leaving their homes. As a result, outdoor activities such as cycling, playing sports, or simply walking in the park have become less common.<br><br>

Some experts worry that this change in lifestyle may affect teenagers’ physical and mental health. A lack of physical activity can lead to health problems, while too much screen time may reduce face-to-face social skills. However, others argue that online activities also offer benefits. Teenagers can develop problem-solving skills through games, learn new information, and even build global friendships.<br><br>

Instead of completely limiting technology, many educators suggest encouraging balance. By managing screen time wisely and making space for outdoor activities, teenagers can enjoy the advantages of both worlds.`
let readingPassage3 = `
While eating at a restaurant is an enjoyable and convenient occasional treat, most individuals and families prepare their meals at home. To make breakfast, lunch, and dinner daily, these persons must have the required foods and ingredients on hand and ready to go; foods and ingredients are typically purchased from a grocery store, or an establishment that distributes foods, drinks, household products, and other items that're used by the typical consumer.

Produce, or the term used to describe fresh fruits and vegetables, is commonly purchased by grocery store shoppers. In terms of fruit, most grocery stores offer bananas, apples, oranges, blackberries, raspberries, grapes, pineapples, cantaloupes, watermelons, and more; other grocery stores with larger produce selections might offer the listed fruits in addition to less common fruits, including mangoes, honeydews, starfruits, coconuts, and more.

Depending on the grocery store, customers can purchase fruits in a few different ways. Some stores will charge a set amount per pound of fruit, and will weigh customers' fruit purchases and bill them accordingly; other stores will charge customers for each piece of fruit they buy, or for bundles of fruit (a bag of bananas, a bag of apples, etc.); other stores yet will simply charge by the container.

Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, and more are also sold at many grocery stores, and are purchased similarly to the way that fruits are. Grocery stores typically stock more vegetables than fruit at any given time, as vegetables remain fresh longer than fruits do, generally speaking.

It'd take quite a while to list everything else that today's massive grocery stores sell, but most customers take the opportunity to shop for staples, or foods that play a prominent role in the average diet, at the establishments. Staples include pasta, rice, flour, sugar, milk, meat, and eggs, and bread. All the listed staples are available in prepackaged containers, but can be purchased "fresh" in some grocery stores, wherein employees will measure and weigh fresh products and then provide them to customers.`
let readingPassage4 = `

The deadliest virus in modern history, perhaps of all time, was the 1918 Spanish Flu. It killed about 20 to 50 million people worldwide, perhaps more. The total death toll is unknown because medical records were not kept in many areas.

The pandemic hit during World War I and devastated military troops. In the United States, for instance, more servicemen were killed from the flu than from the war itself. The Spanish flu was fatal to a higher proportion of young adults than most flu viruses.

The pandemic started mildly, in the spring of 1918, but was followed by a much more severe wave in the fall of 1918. The war likely contributed to the devastating mortality numbers, as large outbreaks occurred in military forces living in close quarters. Poor nutrition and the unsanitary conditions of war camps had an effect.

A third wave occurred in the winter and spring of 1919, and a fourth, smaller wave occurred in a few areas in spring 1920. Initial symptoms of the flu were typical: sore throat, headache, and fever. The flu often progressed rapidly to cause severe pneumonia and sometimes hemorrhage in the lungs and mucus membranes. A characteristic feature of severe cases of the Spanish Flu was heliotrope cyanosis, where the patient’s face turned blue from lack of oxygen in the cells. Death usually followed within hours or days.

Modern medicine such as vaccines, antivirals, and antibiotics for secondary infections were not available at that time, so medical personnel couldn’t do much more than try to relieve symptoms.

The flu ended when it had infected enough people that those who were susceptible had either died or developed immunity.`

let readingPassage5 = `
In our modern world, there are many factors that place the wellbeing of the planet in jeopardy. While some people have the opinion that environmental problems are just a natural occurrence, others believe that human beings have a huge impact on the environment. Regardless of your viewpoint, take into consideration the following factors that place our environment as well as the planet Earth in danger.

Global warming or climate change is a major contributing factor to environmental damage. Because of global warming, we have seen an increase in melting ice caps, a rise in sea levels, and the formation of new weather patterns. These weather patterns have caused stronger storms, droughts, and flooding in places that they formerly did not occur.

Air pollution is primarily caused as a result of excessive and unregulated emissions of carbon dioxide into the air. Pollutants mostly emerge from the burning of fossil fuels in addition to chemicals, toxic substances, and improper waste disposal. Air pollutants are absorbed into the atmosphere, and they can cause smog, a combination of smoke and fog, in valleys as well as produce acidic precipitation in areas far away from the pollution source.

In many areas, people and local governments do not sustainably use their natural resources. Mining for natural gases, deforestation, and even improper use of water resources can have tremendous effects on the environment. While these strategies often attempt to boost local economies, their effects can lead to oil spills, interrupted animal habitats, and droughts.

Ultimately, the effects of the modern world on the environment can lead to many problems. Human beings need to consider the repercussions of their actions, trying to reduce, reuse, and recycle materials while establishing environmentally sustainable habits. If measures are not taken to protect the environment, we can potentially witness the extinction of more endangered species, worldwide pollution, and a completely uninhabitable planet.

`
const possibleQuestions = {
  ez: [{
    question: "John __ very good at his job",
    a: "is",
    b: "are",
    c: "were",
    d: "none of the above",
    correct: "a",
    explanation: "'Is' itu buat satu subjek. Walau 'are' itu buat dua atau lebih subjek. Kalau 'was' dan 'were' itu sama seperti 'is' dan 'are' tetapi buat masa lalu atau 'Past tense'",
  },
  {
    question: "She ___ fired at her job just a minute ago",
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "d",
    explanation: "Ini adalah kalimat 'Past tense' jadi kita pakai 'was'. Ini past tense karena kita dapat konteks kalau ini terjadi di masa lalu",
  },
  {
    question: `Falco and Travies ___ the smart kids at school`,
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "b",
    explanation: "'Is' itu buat satu subjek. Walau 'Are' itu buat dua atau lebih subjek. Kalau 'was' dan 'were' itu sama seperti 'is' dan 'are' tetapi buat masa lalu atau 'Past tense'",
  },
  {
    question: `They ____ eliminated in the laser tag game 3 minutes ago`,
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "c",
    explanation: "Ini adalah kalimat 'Past tense' jadi kita pakai 'was'. Ini past tense karena kita dapat konteks kalau ini terjadi di masa lalu",
  },
  {
    question: "I ___ just about to take out the trash",
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "d",
    explanation: "...",
  },



  {
    question: `He ____ to the gym every morning.`,
    a: "Go",
    b: "Goes",
    c: "Gone",
    d: "Going",
    correct: "b",
    explanation: `Kata kerja "go" berubah menjadi "goes" jika digunakan dengan subjek orang ketiga (he, she, it).`,
  },
  {
    question: `Erika ____ to the store.`,
    a: "going",
    b: "go",
    c: "goes",
    d: "gone",
    correct: "c",
    explanation: `Dalam present simple tense, untuk subjek orang ketiga tunggal (he, she, it, *nama orang*), kita menambahkan "s" atau "es" pada kata kerja. Bentuk yang benar adalah "goes" untuk "Erika" (nama orang).`,
  },
  {
    question: `Choose the correct sentence:`,
    a: "Sylvi study English every day.",
    b: "Caetlin studies English every day.",
    c: "Nikki studying English every day.",
    d: "Cassie will studying English every day.",
    correct: "b",
    explanation: `Kata kerja "study" berubah menjadi "studies" jika digunakan dengan nama orang`,
  },
  {
    question: `Rayden ______ to the office by bus.`,
    a: "Travel",
    b: "Traveling",
    c: "Traveled",
    d: "Travels",
    correct: "d",
    explanation: `Untuk subjek orang ketiga (he, she, it), kita menambahkan "s" pada kata kerja. Bentuk yang benar adalah travels.`,
  },
  {
    question: "Which of the following sentences is in the negative form?",
    a: `${getRandomName(0)} does not write emails every day.`,
    b: `${getRandomName(0)} reads emails every day.`,
    c: `${getRandomName(0)} is writing emails every day.`,
    d: "Brandon write emails every day.",
    correct: "a",
    explanation: `Kata "does not" merupakan kata negatif karena "not" adalah bahasa inggris dari "tidak"`,
  },
  {
    question: "They always ______ home at 6 PM every day.",
    a: "arrive",
    b: "arrives",
    c: "arriving",
    d: "arrived",
    correct: "a",
    explanation: `Untuk subjek lebih dari satu (they), kata kerja tidak perlu ditambah "s". Bentuk yang benar adalah arrive.`,
  },
  {
    question: "Which of the following sentences is correct?",
    a: "Budi is wrote a book",
    b: `${getRandomName(0)} has reading the book.`,
    c: "Nova reads books every day",
    d: "Merton will reading a book tomorrow.",
    correct: "c",
    explanation: "Penggunaan kata kerja yang baik dan benar adalah di pilihan c",
  },
  {
    question: "She always _____ a cup of tea in the morning.",
    a: "drink",
    b: "drinked",
    c: "drank",
    d: "drinks",
    correct: "d",
    explanation: `Untuk subjek orang ketiga (she), kita menambahkan "s" pada kata kerja. Bentuk yang benar adalah drinks.`,
  },
  {
    question: `Which of these correct negative form of this sentence: "Harper plays soccer on Sundays"`,
    a: "Harper doesn't play soccer on Sundays.",
    b: "Harper don't plays soccer on Sundays.",
    c: "Harper don't play soccer on Sundays.",
    d: "Harper not play soccer on Sundays.",
    correct: "a",
    explanation: `Kita mengunakan kata "doesn't" jika digunakan dengan nama orang`,
  },
  {
    question: "She _______ work on Saturdays.",
    a: "don't",
    b: "doesn't",
    c: "isn't",
    d: "aren't",
    correct: "b",
    explanation: `Bentuk negatif untuk subjek orang ketiga tunggal (she, he, it) adalah "doesn't," yang merupakan singkatan dari "does not."`,
  },
  {
    question: "Which of these sentences is the correct simple PAST tense? (go)",
    a: "Carina is going to the beach",
    b: "Carina are go to the beach",
    c: "Carina went to the beach",
    d: "Carina go to the beach",
    correct: "c",
    explanation: `Bentuk past tense (masa lalu) dari kata "go" adalah "went"`,
  },
  {
    question: "The post man ___ very busy delivering ",
    a: "was",
    b: "were",
    c: "is",
    d: "are",
    correct: "a",
    explanation: ``,
  },
  {
    question: "Which of these sentences is the correct simple PAST tense? (wake up)",
    a: "Carmen wake up at 7 AM",
    b: "Carmen woke up at 7 AM",
    c: "Carmen going to wake up at 7 AM",
    d: "Carmen waking up at 7 AM",
    correct: "b",
    explanation: `kata "wake up" di past tense (masa lalu) adalah "woke up"`,
  },
  {
    question: "I know! He's the one who was _____(play) the drums last night.",
    a: "playing",
    b: "player",
    c: "play",
    d: "played",
    correct: "a",
    explanation: ``,
  },
  {
    question: "Yesterday, I _______(go) to the park.",
    a: "go",
    b: "goes",
    c: "going",
    d: "went",
    correct: "d",
    explanation: `"Yesterday" menunjukkan waktu lampau, sehingga kata kerja harus menggunakan bentuk lampau (past tense). Kata kerja lampau dari "go" adalah "went".`,
  },
  {
    question: "They ___ (play) soccer last weekend.",
    a: "play",
    b: "were playing",
    c: "are playing",
    d: "played",
    correct: "d",
    explanation: `"Play" berubah menjadi "played" karena menunjukkan aksi yang selesai minggu lalu.`,
  },
  {
    question: "I ___ (eat) an apple this morning.",
    a: "eaten",
    b: "eat",
    c: "ate",
    d: "aten",
    correct: "c",
    explanation: `"Eat" berubah menjadi "ate" dalam bentuk past tense untuk kegiatan yang sudah selesai pagi ini.`,
  },
  {
    question: "We ___ (visit) the museum last year.",
    a: "visit",
    b: "visiting",
    c: "visited",
    d: "are visiting",
    correct: "c",
    explanation: `Bentuk lampau dari "visit" adalah "visited" karena menunjukkan aksi tahun lalu.`,
  },
  {
    question: "She ___ (study) hard for the test last night.",
    a: "studied",
    b: "study",
    c: "studying",
    d: "studing",
    correct: "a",
    explanation: `Kata kerja "study" ditambahkan "-ed" menjadi "studied" karena aksi selesai semalam.`,
  },
  {
    question: "I ___ (see) her at the mall two days ago.",
    a: "see",
    b: "saw",
    c: "seen",
    d: "seeing",
    correct: "b",
    explanation: `"See" berubah menjadi "saw" dalam bentuk verb 2.`,

  },
  {
    question: `Sylvi: "May I borrow your pen?" Manakah kalimat yang paling tepat untuk menjawab Sylvi?`,
    a: "Goodbye!",
    b: "Sure! here you go.",
    c: "No, here you go!",
    d: "Yes, I can't",
    correct: "b",
    explanation: "Pilihan tersebut salah karena pilihan tersebut merupakan grammar yang salah atau kurang tepat.",
  },
  {
    question: `Bennett: "How's the weather outside?" Manakah kalimat yang paling tepat untuk menjawab Bennett?`,
    a: "Its sunny.",
    b: "Sure! My name is Adam",
    c: "What?",
    d: "Sure! here you go",
    correct: "a",
    explanation: "Kalimat tersebut tidak tepat untuk menjawab pertanyaan tersebut.",
  },
  {
    question: `Adam bertanya kepada Kenneth untuk meminjam pena: "May I borrow your pen?" Kalimat apa yang paling tepat untuk menjawab Adam?`,
    a: "Goodbye!",
    b: "Sure! here you go",
    c: "No, here you go!",
    d: "Yes, I can't",
    correct: "b",
    explanation: "",
  },
  {
    question: `Jason bertanya kepada anda untuk ke Supermarket: "Hey, when are we going to the supermarket" Kalimat apa yang paling tepat untuk menjawab Jason?`,
    a: "I dont know",
    b: "Yesn't",
    c: "No, here you go!",
    d: `at ${Math.floor(Math.random() * 5) + 1} PM we'll go to the supermarket`,
    correct: "d",
    explanation: "",
  },
  {
    question: `Bruan bertanya kepada anda untuk cemilan apa dia mau beli: "Hey, what snacks do you wanna buy?" Apakah kalimat yang paling tepat untuk menjawab Bruan?`,
    a: "I would like some chips please",
    b: "Fine Chips",
    c: "Who is that?",
    d: "I cant see him.",
    correct: "a",
    explanation: "",
  },
  {
    question: `Jordan bertanya kepada anda untuk menjawab pertanyaan dia tersebut: "What will you do in chinese new year?" Kalimat apa yang paling formal dan tepat untuk menjawab Jordan?`,
    a: "Me and my friends are going to the mall",
    b: "We gonna do this rn",
    c: "I am going to the mall",
    d: "What are you doing?",
    correct: "c",
    explanation: "Jawaban benar tersebut itu paling tepat dan formal untuk menjawab pertanyaan Jordan tersebut",
  },
  {
    question: `Mana kalimat di bawah ini yang salah?`,
    a: "I went to Entrepreneur Week yesterday",
    b: "The sun is shining",
    c: "We visited the museum today",
    d: "John play the drum yesterday",
    correct: "d",
    explanation: "",
  },
  {
    question: `Mana kalimat di bawah ini yang menunjukkan future tense yang benar?`,
    a: "I was going to go to the museum",
    b: "I will go to the museum",
    c: "I went to the museum",
    d: "I am in the museum",
    correct: "b",
    explanation: "Kata 'will' merupakan kata kunci untuk future tense"
  },
  {
    question: `Mana kalimat di bawah ini yang menunjukkan past tense yang benar?`,
    a: "The sun rose 3 hours ago",
    b: "Alvaro has gone to university to study economics",
    c: `${getRandomName(0)} is going to the supermarket tomorrow`,
    d: `${getRandomName(0)} will call ${getRandomName(1)} to check on her`,
    correct: "a",
    explanation: "Kata 'rose' merupakan verb 2 kepada kata 'rise', Verb 2 adalah verb past tense"
  },
  {
    question: `Mana kalimat di bawah ini yang menunjukkan present tense yang benar?`,
    a: "I was going to go to the festival",
    b: "I will go to the festival",
    c: "I went to the festival",
    d: "I am in the festival",
    correct: "d",
    explanation: "Kata 'am' merupakan kata kunci untuk present tense"
  },
  {
    question: `Mana kalimat di bawah ini yang menunjukkan present tense yang benar?`,
    a: `${getRandomName(0)} will work at home`,
    b: `${getRandomName(0)} works at home`,
    c: `${getRandomName(0)} was called by the manager`,
    d: `${getRandomName(0)} is going to work at the office`,
    correct: "b",
    explanation: "Kata 'works' merupakan kata kunci untuk present tense"
  },
  ],
  med: [


    {
      question: "Last night, I ____ a strange noise outside my house while everyone else was asleep.",
      a: "hear",
      b: "have heard",
      c: "was hearing",
      d: "heard",
      correct: "d",
      explanation: `"Last night" menunjukkan masa lampau, jadi harus menggunakan past tense yaitu "heard".`,
    },

    {
      question: "She ____ her homework before she went to bed, so she could relax.",
      a: "has finished",
      b: "had finished",
      c: "finished",
      d: "was finishing",
      correct: "b",
      explanation: `Dua kejadian di masa lalu, dan satu terjadi lebih dulu, sehingga menggunakan past perfect yaitu "had finished".`,
    },

    {
      question: "They ____ to the zoo during the school holiday and took many pictures.",
      a: "have gone",
      b: "go",
      c: "went",
      d: "were going",
      correct: "c",
      explanation: `Kegiatan terjadi di masa lalu (during the school holiday), jadi gunakan past tense "went".`,
    },

    {
      question: "We ____ very tired after we had played three basketball matches yesterday.",
      a: "are",
      b: "were",
      c: "have been",
      d: "be",
      correct: "b",
      explanation: `Karena seluruh kejadian terjadi di masa lalu, bentuk yang tepat adalah "were".`,
    },

    {
      question: "My parents ____ me a birthday gift after I had finished my exams last week.",
      a: "have given",
      b: "give",
      c: "gave",
      d: "had given",
      correct: "c",
      explanation: `Kejadian utama terjadi di masa lalu (last week), sehingga menggunakan past tense "gave".`,
    },

    {
      question: "The teacher ____ the lesson clearly, so all the students understood it.",
      a: "explains",
      b: "has explained",
      c: "explained",
      d: "was explaining",
      correct: "c",
      explanation: `Kalimat menceritakan kejadian di masa lalu, jadi bentuk yang benar adalah "explained".`,
    },

    {
      question: "I did not ____ the movie because I had already seen it before.",
      a: "watched",
      b: "watch",
      c: "watching",
      d: "watches",
      correct: "b",
      explanation: `Setelah "did not", kata kerja harus kembali ke bentuk dasar (V1), yaitu "watch".`,
    },

    {
      question: "____ you call me last night, or was it someone else?",
      a: "Do",
      b: "Does",
      c: "Are",
      d: "Did",
      correct: "d",
      explanation: `Karena ada "last night", pertanyaan harus menggunakan auxiliary past tense yaitu "Did".`,
    },

    {
      question: "She ____ breakfast at 6 a.m. yesterday before leaving for school.",
      a: "has eaten",
      b: "eats",
      c: "ate",
      d: "had eaten",
      correct: "c",
      explanation: `"Yesterday" menunjukkan masa lampau, sehingga bentuk yang tepat adalah "ate".`,
    },

    {
      question: "The children ____ happily at the park yesterday afternoon until it started to rain.",
      a: "have played",
      b: "played",
      c: "were playing",
      d: "play",
      correct: "b",
      explanation: `Kegiatan terjadi dan selesai di masa lalu, jadi gunakan past tense "played".`,
    },
    {
      question: "She ____ a book when I entered the room.",
      a: "reads",
      b: "read",
      c: "is reading",
      d: "was reading",
      correct: "d",
      explanation: `Kalimat menunjukkan dua kejadian lampau, sehingga digunakan past continuous yaitu "was reading".`,
    },

    {
      question: "They ____ football since 4 p.m.",
      a: "play",
      b: "are playing",
      c: "have been playing",
      d: "played",
      correct: "c",
      explanation: `"Since 4 p.m." menunjukkan kegiatan yang dimulai di masa lalu dan masih berlangsung, jadi gunakan present perfect continuous.`,
    },

    {
      question: "I ____ to music when my phone suddenly rang.",
      a: "listen",
      b: "am listening",
      c: "was listening",
      d: "have listened",
      correct: "c",
      explanation: `Kejadian sedang berlangsung di masa lalu lalu terganggu, sehingga menggunakan past continuous.`,
    },

    {
      question: "We ____ dinner when the lights went out.",
      a: "have",
      b: "are having",
      c: "had",
      d: "were having",
      correct: "d",
      explanation: `Aktivitas sedang terjadi di masa lalu dan terganggu kejadian lain, jadi gunakan "were having".`,
    },

    {
      question: "My brother ____ TV for two hours before I came home.",
      a: "was watching",
      b: "has watched",
      c: "had been watching",
      d: "watched",
      correct: "c",
      explanation: `Kegiatan berlangsung sebelum kejadian lain di masa lalu, sehingga menggunakan past perfect continuous.`,
    },

    {
      question: "Look! The baby ____ because it is hungry.",
      a: "cries",
      b: "is crying",
      c: "cried",
      d: "has cried",
      correct: "b",
      explanation: `Kata "Look!" menunjukkan kejadian sedang berlangsung sekarang, jadi gunakan present continuous.`,
    },

    {
      question: "____ you been studying all night?",
      a: "Do",
      b: "Did",
      c: "Have",
      d: "Are",
      correct: "c",
      explanation: `Kalimat tanya present perfect continuous menggunakan "Have" di awal kalimat.`,
    },

    {
      question: "The students ____ in the classroom when the principal arrived.",
      a: "are sitting",
      b: "sit",
      c: "were sitting",
      d: "have sat",
      correct: "c",
      explanation: `Kegiatan sedang berlangsung di masa lalu saat kejadian lain terjadi, jadi gunakan past continuous.`,
    },

    {
      question: "She ____ not been sleeping well lately.",
      a: "is",
      b: "has",
      c: "was",
      d: "does",
      correct: "b",
      explanation: `Bentuk negatif present perfect continuous menggunakan "has not been".`,
    },

    {
      question: "Why ____ he been running so fast since morning?",
      a: "do",
      b: "did",
      c: "has",
      d: "is",
      correct: "c",
      explanation: `"Since morning" menunjukkan kegiatan yang dimulai di masa lalu dan masih berlangsung, jadi gunakan "has been".`,
    },
    {
      question: "The classroom ____ cleaned every day.",
      a: "cleans",
      b: "is cleaned",
      c: "cleaned",
      d: "cleaning",
      correct: "b",
      explanation: `"Every day" menunjukkan kebiasaan dan kalimat berbentuk pasif, jadi menggunakan "is cleaned".`,
    },

    {
      question: "The homework ____ by the teacher yesterday.",
      a: "checks",
      b: "is checked",
      c: "was checked",
      d: "checked",
      correct: "c",
      explanation: `"Yesterday" menunjukkan masa lalu dan bentuknya pasif, jadi jawabannya "was checked".`,
    },

    {
      question: "English ____ in many countries.",
      a: "speaks",
      b: "is spoken",
      c: "spoke",
      d: "speaking",
      correct: "b",
      explanation: `Kalimat ini berbentuk pasif dan menyatakan fakta umum, sehingga menggunakan "is spoken".`,
    },

    {
      question: "The cake ____ by my mother last night.",
      a: "makes",
      b: "is made",
      c: "was made",
      d: "made",
      correct: "c",
      explanation: `"Last night" menunjukkan masa lampau dan bentuk pasif, jadi menggunakan "was made".`,
    },

    {
      question: "The letters ____ every morning.",
      a: "deliver",
      b: "delivered",
      c: "are delivered",
      d: "are delivering",
      correct: "c",
      explanation: `Kalimat menyatakan kebiasaan dan berbentuk pasif, sehingga memakai "are delivered".`,
    },

    {
      question: "The window ____ by the boy yesterday.",
      a: "breaks",
      b: "is broken",
      c: "was broken",
      d: "broken",
      correct: "c",
      explanation: `"Yesterday" menunjukkan past tense dan kalimat pasif, jadi jawabannya "was broken".`,
    },

    {
      question: "This book ____ by many students every year.",
      a: "reads",
      b: "is read",
      c: "was read",
      d: "reading",
      correct: "b",
      explanation: `"Every year" menunjukkan fakta umum dalam bentuk pasif, jadi menggunakan "is read".`,
    },

    {
      question: "The match ____ because of the heavy rain last week.",
      a: "cancels",
      b: "is canceled",
      c: "was canceled",
      d: "cancel",
      correct: "c",
      explanation: `"Last week" menunjukkan masa lalu dan kalimat pasif, jadi jawabannya "was canceled".`,
    },

    {
      question: "Rice ____ in many Asian countries.",
      a: "grows",
      b: "is grown",
      c: "grew",
      d: "growing",
      correct: "b",
      explanation: `Kalimat ini berbentuk pasif dan menyatakan fakta umum, sehingga menggunakan "is grown".`,
    },

    {
      question: "The announcement ____ by the principal this morning.",
      a: "makes",
      b: "is made",
      c: "was made",
      d: "making",
      correct: "c",
      explanation: `"This morning" menunjukkan waktu lampau dan bentuk pasif, jadi jawabannya "was made".`,
    }
  ],
  hard: [
    {
      reading: readingPassage2,
      question: "What is the main idea of the passage?",
      a: "Teenagers should stop using technology completely.",
      b: "Online games are harmful to teenagers.",
      c: "Teenagers’ free-time activities are changing, and balance is important.",
      d: "Outdoor sports are no longer popular.",
      correct: "c",
      explanation: `Teks membahas perubahan aktivitas remaja ke arah digital serta menekankan pentingnya menjaga keseimbangan antara teknologi dan kegiatan luar ruangan.`,
    },

    {
      reading: readingPassage2,

      question: "Why are outdoor activities becoming less common?",
      a: "Parks are closing.",
      b: "Teenagers prefer indoor digital activities.",
      c: "Parents do not allow teenagers outside.",
      d: "Schools give too much homework.",
      correct: "b",
      explanation: `Pada paragraf pertama dijelaskan bahwa remaja lebih memilih bermain game, streaming, dan media sosial di dalam rumah sehingga kegiatan luar ruangan berkurang.`,
    },

    {
      reading: readingPassage2,

      question: "What concern do experts have about too much screen time?",
      a: "It makes teenagers smarter.",
      b: "It improves communication skills.",
      c: "It may reduce social skills and physical health.",
      d: "It increases outdoor activities.",
      correct: "c",
      explanation: `Paragraf kedua menyebutkan kurangnya aktivitas fisik dapat berdampak pada kesehatan, dan terlalu banyak layar dapat mengurangi kemampuan sosial tatap muka.`,
    },

    {
      reading: readingPassage2,

      question: "Which of the following is mentioned as a benefit of online activities?",
      a: "Improving physical strength",
      b: "Building international friendships",
      c: "Reducing homework",
      d: "Saving money",
      correct: "b",
      explanation: `Teks menyebutkan bahwa remaja dapat membangun pertemanan global melalui aktivitas online.`,
    },

    {
      reading: readingPassage2,

      question: "What does the writer suggest teenagers should do?",
      a: "Avoid technology completely",
      b: "Spend all their time outdoors",
      c: "Use technology without limits",
      d: "Balance screen time and outdoor activities",
      correct: "d",
      explanation: `Di paragraf terakhir, penulis menyarankan pengelolaan waktu layar secara bijak dan tetap menyediakan waktu untuk aktivitas luar ruangan.`,
    },
    {
      reading: readingPassage1,
      question: "Based on the passage, which statement best describes the writer’s primary objective?",
      a: "To argue that schools should completely eliminate printed textbooks",
      d: "To present both the strengths and weaknesses of digital learning in education",
      c: "To describe in detail how tablets and e-readers function",
      b: "To blame students for depending too much on technology",
      correct: "d",
      explanation: `Teks membahas kelebihan seperti akses informasi cepat dan ramah lingkungan, serta kekurangan seperti gangguan konsentrasi dan kesenjangan akses.`,
    },

    {
      reading: readingPassage1,

      question: "According to the passage, how do digital materials contribute positively to environmental sustainability?",
      a: "They automatically improve students’ academic performance",
      b: "They minimize the consumption of paper resources",
      c: "They significantly reduce the use of electricity in schools",
      d: "They lower the overall cost of education systems",
      correct: "b",
      explanation: `Dalam paragraf pertama disebutkan bahwa materi digital mengurangi kebutuhan buku cetak, sehingga dapat membantu lingkungan.`,
    },

    {
      reading: readingPassage1,

      question: "In the context of the passage, the phrase “widen the gap” is closest in meaning to ____.",
      a: "increase the difference between groups",
      b: "encourage stronger academic competition",
      c: "promote collaboration among students",
      d: "create equal opportunities for everyone",
      correct: "a",
      explanation: `Teks menjelaskan bahwa tidak semua siswa memiliki akses internet atau perangkat, sehingga perbedaan antara siswa mampu dan kurang mampu menjadi lebih besar.`,
    },

    {
      reading: readingPassage1,

      question: "Which of the following challenges related to digital learning is highlighted in the passage?",
      a: "Students become less socially interactive in classrooms",
      b: "Teachers struggle to maintain discipline during lessons",
      d: "Students may have lower comprehension when reading from screens",
      c: "Schools are forced to dramatically increase tuition fees",
      correct: "d",
      explanation: `Paragraf kedua menyebutkan penelitian yang menunjukkan bahwa membaca dari layar dapat mengurangi pemahaman dibandingkan teks cetak.`,
    },

    {
      reading: readingPassage1,

      question: "Why does the author recommend combining traditional and digital learning methods?",
      a: "Because digital learning represents modern educational trends",
      b: "Because printed books are considered outdated",
      c: "Because each method offers its own distinct advantages",
      d: "Because most students prefer printed textbooks",
      correct: "c",
      explanation: `Di akhir teks dijelaskan bahwa meskipun digital punya banyak keuntungan, pendekatan seimbang dianggap paling efektif karena memanfaatkan kelebihan keduanya.`,
    },
    {
      reading: readingPassage3,
      question: "What is the main purpose of the passage?",
      a: "To explain how restaurants prepare food",
      b: "To describe what grocery stores sell and how items are purchased",
      c: "To compare fruits and vegetables",
      d: "To explain why eating at home is unhealthy",
      correct: "b",
      explanation: `Teks menjelaskan tentang toko bahan makanan, jenis barang yang dijual, serta cara pembeli membayar seperti berdasarkan berat atau jumlah.`,
    },



    {
      reading: readingPassage3,
      question: "According to the passage, how might customers be charged for fruit?",
      a: "Only by weight",
      b: "Only by container",
      c: "By weight, per piece, per bundle, or by container",
      d: "By size only",
      correct: "c",
      explanation: `Teks menjelaskan bahwa buah bisa dijual berdasarkan berat, per buah, per ikat, atau dalam wadah tertentu.`,
    },

    {
      reading: readingPassage3,
      question: "Why do grocery stores typically stock more vegetables than fruits?",
      a: "Vegetables are cheaper",
      b: "Vegetables are more popular",
      c: "Vegetables remain fresh longer",
      d: "Vegetables are easier to grow",
      correct: "c",
      explanation: `Disebutkan bahwa sayuran biasanya lebih tahan lama dibandingkan buah, sehingga stoknya lebih banyak.`,
    },

    {
      reading: readingPassage3,
      question: "What are “staples” as described in the passage?",
      a: "Expensive luxury foods",
      b: "Foods that are rarely eaten",
      d: "Foods that are important in the average diet",
      c: "Fruits and vegetables only",
      correct: "d",
      explanation: `"Staples" dijelaskan sebagai makanan pokok yang penting dan sering dikonsumsi dalam pola makan sehari-hari.`,
    },

    {
      reading: readingPassage3,
      question: "Which of the following is listed as a staple food in the passage?",
      c: "Mangoes",
      b: "Blackberries",
      a: "Rice",
      d: "Cantaloupes",
      correct: "a",
      explanation: `Teks menyebutkan bahwa beras termasuk makanan pokok (staple food) yang penting dalam diet rata-rata.`,
    },
    

  ],
  expert:[
    {    
      reading: readingPassage4,
      question: "Why is the exact death toll of the 1918 Spanish Flu uncertain?",    
      a: "Governments intentionally hid the data",    
      b: "Many regions did not maintain accurate medical records",    
      c: "The war destroyed all hospital documents",    
      d: "The virus was confused with other diseases",    
      correct: "b",    
      explanation: `Dalam teks disebutkan bahwa jumlah korban tidak diketahui secara pasti karena di banyak daerah catatan medis tidak disimpan dengan baik.`,    
    },

    {    
      reading: readingPassage4,
      question: "In what way did World War I contribute to the severity of the pandemic?",    
      c: "It caused mutations in the virus",    
      b: "It limited communication between countries",    
      a: "Crowded military conditions increased transmission and mortality",    
      d: "It prevented the development of vaccines",    
      correct: "a",    
      explanation: `Teks menjelaskan bahwa pasukan militer tinggal berdesakan dalam kondisi tidak higienis dan kurang gizi, sehingga wabah menyebar luas dan angka kematian meningkat.`,    
    },

    {    
      reading: readingPassage4,
      question: "What made the Spanish Flu unusual compared to most other flu viruses?",    
      a: "It primarily affected elderly populations",    
      b: "It spread only in Europe",    
      d: "It was more lethal among young adults",    
      c: "It lasted for more than ten years",    
      correct: "d",    
      explanation: `Disebutkan bahwa flu Spanyol mematikan bagi proporsi tinggi orang dewasa muda, berbeda dengan flu biasa yang lebih berbahaya bagi lansia.`,    
    },

    {    
      reading: readingPassage4,
      question: "The second wave of the pandemic was more devastating mainly because:",    
      a: "The virus had completely disappeared before returning",    
      b: "It became significantly more severe after the initial mild outbreak",    
      c: "Medical supplies had improved",    
      d: "Immunity had already developed worldwide",    
      correct: "b",    
      explanation: `Teks menyatakan bahwa pandemi awalnya ringan pada musim semi 1918, tetapi gelombang kedua pada musim gugur jauh lebih parah dan mematikan.`,    
    },

    {    
      reading: readingPassage4,
      question: "What does the description of “heliotrope cyanosis” suggest about severe cases?",    
      a: "Patients recovered quickly after turning blue",    
      b: "The virus caused mild respiratory discomfort",    
      c: "Oxygen deprivation was a critical factor leading to death",    
      d: "The disease mainly affected the digestive system",    
      correct: "c",    
      explanation: `Teks menjelaskan bahwa wajah pasien berubah biru karena kekurangan oksigen dalam sel, menunjukkan gangguan pernapasan parah yang sering berujung pada kematian dalam hitungan jam atau hari.`,    
    },

    {    
      reading: readingPassage4,
      question: "According to the passage, why did the pandemic eventually end?",    
      a: "A vaccine was successfully distributed worldwide",    
      b: "The virus naturally weakened over time",    
      c: "Enough people either died or developed immunity",    
      d: "War conditions improved sanitation globally",    
      correct: "c",    
      explanation: `Pada bagian akhir teks dijelaskan bahwa pandemi berakhir setelah cukup banyak orang terinfeksi sehingga mereka yang rentan telah meninggal atau mengembangkan kekebalan.`,    
    },
    {    
      reading: readingPassage5,
      question: "What is the main purpose of the passage?",    
      a: "To explain several environmental problems and encourage people to protect the planet",    
      b: "To describe how mining improves local economies",    
      c: "To argue that environmental problems are purely natural events",    
      d: "To compare modern and ancient environmental conditions",    
      correct: "a",    
      explanation: `Teks membahas berbagai masalah lingkungan seperti pemanasan global, polusi udara, dan eksploitasi sumber daya, lalu menutup dengan ajakan untuk reduce, reuse, dan recycle.`,    
    },

    {    
      reading: readingPassage5,
      question: "According to the passage, what is one effect of global warming?",    
      a: "Decreased sea levels worldwide",    
      b: "Fewer storms and natural disasters",    
      c: "Melting ice caps and rising sea levels",    
      d: "Cleaner air in urban areas",    
      correct: "b",    
      explanation: `Pada paragraf kedua dijelaskan bahwa pemanasan global menyebabkan mencairnya es kutub dan kenaikan permukaan laut, bukan berkurangnya badai.`,    
    },

    {    
      reading: readingPassage5,
      question: "What is the primary cause of air pollution mentioned in the text?",    
      a: "Natural forest fires",    
      b: "Ocean evaporation",    
      c: "Excessive and unregulated carbon dioxide emissions",    
      d: "Plant respiration",    
      correct: "c",    
      explanation: `Teks menyebutkan bahwa polusi udara terutama disebabkan oleh emisi karbon dioksida berlebihan dari pembakaran bahan bakar fosil dan zat kimia.`,    
    },

    {    
      reading: readingPassage5,
      question: "What can result from unsustainable use of natural resources?",    
      a: "Improved wildlife habitats",    
      b: "Stronger environmental protection laws",    
      c: "Increased rainfall in dry areas",    
      d: "Oil spills and disrupted animal habitats",    
      correct: "d",    
      explanation: `Paragraf keempat menjelaskan bahwa kegiatan seperti penambangan dan deforestasi dapat menyebabkan tumpahan minyak dan terganggunya habitat hewan.`,    
    },

    {    
      reading: readingPassage5,
      question: "What might happen if people do not take action to protect the environment?",    
      a: "Natural resources will automatically recover",    
      d: "Economic growth will completely stop",    
      c: "Extinction of endangered species and an uninhabitable planet",    
      b: "Weather patterns will return to normal quickly",    
      correct: "b",    
      explanation: `Pada paragraf terakhir disebutkan bahwa tanpa tindakan, kita bisa menyaksikan kepunahan spesies, polusi global, dan bumi yang tidak layak huni.`,    
    },

    {    
      reading: readingPassage5,
      question: "Which action best reflects the solution suggested by the writer?",    
      a: "Increasing the use of renewable energy only",    
      b: "Limiting international trade activities",    
      c: "Practicing reduce, reuse, and recycle habits in daily life",    
      d: "Closing factories in urban areas permanently",    
      correct: "c",    
      explanation: `Teks secara jelas menyarankan kebiasaan reduce, reuse, dan recycle sebagai langkah nyata untuk mengurangi kerusakan lingkungan.`,    
    }
  ]

}


export { possibleQuestions }