import { Quiz } from "./quiz.types";
export const questionBank: Quiz = {
  quizName: "How much you know about India?",
  category: [
    //Food
    {
      categoryName: "food",
      question: [
        {
          questionNo: 1,
          text: "Name the Indian food that is made from betel leaf filled with chopped betel nut and slaked lime.",
          answer: [
            {
              value: "Paan",
              isRight: true
            },
            {
              value: "Murabba",
              isRight: false
            },
            {
              value: "Falooda",
              isRight: false
            },
            {
              value: "Mukhwas",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        
        {
          questionNo: 2,
          text: "Which is the national vegetable of India?",
          answer: [
            {
              value: "Potato",
              isRight: false
            },
            {
              value: "Pumpkin",
              isRight: true
            },
            {
              value: "Lady-finger",
              isRight: false
            },
            {
              value: "Brinjal",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: "Vada Pav famous in",
          answer: [
            {
              value: "Karnataka",
              isRight: false
            },
            {
              value: "Bihar",
              isRight: false
            },
            {
              value: "Delhi",
              isRight: false
            },
            {
              value: "Maharastra",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "Which of these was called 'food of the gods' in ancient India?",
          answer: [
            {
              value: "Cheese",
              isRight: false
            },
            {
              value: "Bread",
              isRight: false
            },
            {
              value: "Potato",
              isRight: false
            },
            {
              value: "Yogurt",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "Goan cuisine is famous for its seafood dishes with the most popular being fish curry and rice. Which product is most commonly used for flavouring in Goan food?",
          answer: [
            {
              value: "Chilies",
              isRight: false
            },
            {
              value: "Garlic",
              isRight: false
            },
            {
              value: "Coconut",
              isRight: true
            },
            {
              value: "Ginger",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    },
    //Heritage
    {
      categoryName: "heritage",
      question: [
        {
          questionNo: 1,
          text: "Which of the following statement is not true about the Red Fort of Agra?",
          answer: [
            {
              value: "It is situated on the bank of river Yamuna.",
              isRight: false
            },
            {
              value: "This fort was built in 1565",
              isRight: false
            },
            {
              value: " It was constructed by the Mughal emperor Akbar in 1565.",
              isRight: false
            },
            {
              value: "It is tagged as a world heritage site by UNESCO in 1989",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        
        {
          questionNo: 2,
          text: " Where is the largest concentration of stupas in India?",
          answer: [
            {
              value: "Himachal Pradesh",
              isRight: false
            },
            {
              value: "Madhya Pradesh",
              isRight: true
            },
            {
              value: "Arunachal Pradesh",
              isRight: false
            },
            {
              value: "Maharastra",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: "The paintings in the Ajanta and Ellora caves are indicative of the development of art under the",
          answer: [
            {
              value: "Pallavas",
              isRight: false
            },
            {
              value: "Chalukyas",
              isRight: true
            },
            {
              value: "Rashtrakutas",
              isRight: false
            },
            {
              value: "Pandyas",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "Which of the following animal has been depicted on the Ashokan pillar capital at Sarnath?",
          answer: [
            {
              value: "Horse",
              isRight: false
            },
            {
              value: "Deer",
              isRight: false
            },
            {
              value: "Lion",
              isRight: true
            },
            {
              value: "Bull",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "Which of the following is the World’s First Granite Temple?",
          answer: [
            {
              value: "Puri Jagannath temple",
              isRight: false
            },
            {
              value: "Govindajee Temple",
              isRight: false
            },
            {
              value: "Brihadeswara temple",
              isRight: true
            },
            {
              value: "Meenakshi Amman Temple",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    },
    //Literature
    {
      categoryName: "literature",
      question: [
        {
          questionNo: 1,
          text: "Wings of Fire is an autobiography of",
          answer: [
            {
              value: "A. P. J. Abdul Kalam",
              isRight: true
            },
            {
              value: "Rabindranath Tagore",
              isRight: false
            },
            {
              value: "Pranab Mukherjee",
              isRight: false
            },
            {
              value: "Mahatama Gandhi",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 2,
          text: "Who wrote the “Panchatantra”?",
          answer: [
            {
              value: "Chanakya",
              isRight: false
            },
            {
              value: "Vishnu Sharma",
              isRight: true
            },
            {
              value: "Kālidāsa",
              isRight: false
            },
            {
              value: "Narayan Pandit",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: "Who is author of the novel of ‘A suitable boy’?",
          answer: [
            {
              value: "Salman Rushdie",
              isRight: false
            },
            {
              value: "Vikram Seth",
              isRight: true
            },
            {
              value: "Mulk Raj Anand",
              isRight: false
            },
            {
              value: "Rohinton Mistry",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "Who wrote Ramayana?",
          answer: [
            {
              value: "Tulsidas",
              isRight: false
            },
            {
              value: "Kālidāsa",
              isRight: false
            },
            {
              value: "None of these",
              isRight: false
            },
            {
              value: "Valmiki",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "For Which book Rabindra Nath Tagore received the Noble Prize?",
          answer: [
            {
              value: "Ghar Aur Bahar",
              isRight: false
            },
            {
              value: "Gora",
              isRight: false
            },
            {
              value: "Gitanjali",
              isRight: true
            },
            {
              value: "None of these",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    },
    //History
    {
      categoryName: "history",
      question: [
        {
          questionNo: 1,
          text: "Who put up the most stiff resistance against the British in India?",
          answer: [
            {
              value: "The Rajputs",
              isRight: false
            },
            {
              value: "The Sikhs",
              isRight: false
            },
            {
              value: "The Marathas",
              isRight: true
            },
            {
              value: "The Moghals",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 2,
          text: "'Chauth' was",
          answer: [
            {
              value: "Toll tax imposed by Shivaji",
              isRight: false
            },
            {
              value: "Land tax levied by Shivaji on neighboring states",
              isRight: true
            },
            {
              value: " Irrigation tax charged by Akbar",
              isRight: false
            },
            {
              value: "A religious tax imposed by Aurangzeb",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: "Which city was the summer capital of India during British Rule?",
          answer: [
            {
              value: "Ooty",
              isRight: false
            },
            {
              value: "Simla",
              isRight: true
            },
            {
              value: "Pachmarhi",
              isRight: false
            },
            {
              value: "Matheran",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "Which among the following was sent by the Greek sovereigns as ambassadors o pataliputra ?",
          answer: [
            {
              value: "Plato",
              isRight: false
            },
            {
              value: "None of these",
              isRight: false
            },
            {
              value: "Aristotle",
              isRight: false
            },
            {
              value: "Magasthenes",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "When was Indian National song sung for the first time?",
          answer: [
            {
              value: "1857 revolt",
              isRight: false
            },
            {
              value: "1919 - Jallianwala Bagh Massacre",
              isRight: false
            },
            {
              value: "1896 session of the Indian National Congress",
              isRight: true
            },
            {
              value: "None of these",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    },
    //Dance
    {
      categoryName: "dance",
      question: [
        {
          questionNo: 1,
          text: "Which classical dance of the following is named after the village it was born from ?",
          answer: [
            {
              value: "Kuchipudi",
              isRight: true
            },
            {
              value: "Kathakali",
              isRight: false
            },
            {
              value: "Bharatanatyam",
              isRight: false
            },
            {
              value: "Mohiniattam",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 2,
          text: "Dollu Kunitha is a folk dance from",
          answer: [
            {
              value: "Tamil Naidu",
              isRight: false
            },
            {
              value: "Karnataka",
              isRight: true
            },
            {
              value: "Kerala",
              isRight: false
            },
            {
              value: "Bihar",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: " Garwali is the dance form of which state?",
          answer: [
            {
              value: "Gujarat",
              isRight: false
            },
            {
              value: "Uttaranchal",
              isRight: true
            },
            {
              value: "Karnataka",
              isRight: false
            },
            {
              value: "Himachal Pradesh",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "Which among the following is a martial dance?",
          answer: [
            {
              value: "Chhau of Mayurbhanj",
              isRight: true
            },
            {
              value: "Bhangra of Punjab",
              isRight: false
            },
            {
              value: "Kathakali",
              isRight: false
            },
            {
              value: "Bamboo dance in Meghalaya",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "Gidda is a popular folk dance from which state of India?",
          answer: [
            {
              value: "Haryana",
              isRight: false
            },
            {
              value: "Uttar Pradesh",
              isRight: false
            },
            {
              value: "Punjab",
              isRight: true
            },
            {
              value: "Uttarakhand",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    },
    //Geography
    {
      categoryName: "geography",
      question: [
        {
          questionNo: 1,
          text: "Which river of India is called Vridha Ganga?",
          answer: [
            {
              value: "Godavari",
              isRight: true
            },
            {
              value: "Kaveri",
              isRight: false
            },
            {
              value: "Krishna",
              isRight: false
            },
            {
              value: "Narmada",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 2,
          text: "The smallest Union Territory of India is ",
          answer: [
            {
              value: "Pondicherry",
              isRight: false
            },
            {
              value: "Lakshadweep",
              isRight: true
            },
            {
              value: "Dadar and Nagar Haveli",
              isRight: false
            },
            {
              value: "Daman and Diu",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 3,
          text: "Guwahati is situated on the bank of the river",
          answer: [
            {
              value: "Sone",
              isRight: false
            },
            {
              value: "Brahmaputra ",
              isRight: true
            },
            {
              value: "Hooghly",
              isRight: false
            },
            {
              value: "Teesta",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 4,
          text: "The state having largest area under waste land is",
          answer: [
            {
              value: "Gujarat",
              isRight: false
            },
            {
              value: "Bihar",
              isRight: false
            },
            {
              value: "Madhya Pradesh",
              isRight: false
            },
            {
              value: "Rajasthan",
              isRight: true
            }
          ],
          points: 5,
          negativePoints: 2
        },
        {
          questionNo: 5,
          text: "Which latitude passes through the middle of India?",
          answer: [
            {
              value: "Equator",
              isRight: false
            },
            {
              value: "Arctic Circle",
              isRight: false
            },
            {
              value: "Tropic of Cancer",
              isRight: true
            },
            {
              value: "Tropic of Capricorn",
              isRight: false
            }
          ],
          points: 5,
          negativePoints: 2
        }
      ]
    }    
  ]
};

