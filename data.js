// ===================== DATABASE KAMUS =====================
// Format: word (Inggris), meaning (Indonesia), example (kalimat contoh Inggris)
const dictionaryData = [
    {
        word: "about",
        meaning: "tentang",
        example: "Tell me about your family."
    },
    {
        word: "above",
        meaning: "di atas",
        example: "The sun is above the clouds."
    },
    {
        word: "accept",
        meaning: "menerima",
        example: "She accepted the gift."
    },
    {
        word: "across",
        meaning: "di seberang",
        example: "He walked across the street."
    },
    {
        word: "act",
        meaning: "bertindak",
        example: "You must act quickly."
    },
    {
        word: "add",
        meaning: "menambahkan",
        example: "Please add sugar to my coffee."
    },
    {
        word: "address",
        meaning: "alamat",
        example: "What is your address?"
    },
    {
        word: "afternoon",
        meaning: "siang",
        example: "We had lunch in the afternoon."
    },
    {
        word: "again",
        meaning: "lagi",
        example: "Please say it again."
    },
    {
        word: "age",
        meaning: "usia",
        example: "What is your age?"
    },
    {
        word: "agree",
        meaning: "setuju",
        example: "I agree with you."
    },
    {
        word: "air",
        meaning: "udara",
        example: "The air is fresh."
    },
    {
        word: "airport",
        meaning: "bandara",
        example: "We arrived at the airport early."
    },
    {
        word: "all",
        meaning: "semua",
        example: "All students passed the exam."
    },
    {
        word: "almost",
        meaning: "hampir",
        example: "It is almost midnight."
    },
    {
        word: "alone",
        meaning: "sendirian",
        example: "He lives alone."
    },
    {
        word: "already",
        meaning: "sudah",
        example: "I have already eaten."
    },
    {
        word: "also",
        meaning: "juga",
        example: "She also wants to come."
    },
    {
        word: "always",
        meaning: "selalu",
        example: "He always arrives on time."
    },
    {
        word: "angry",
        meaning: "marah",
        example: "She was angry at him."
    },
    {
        word: "animal",
        meaning: "hewan",
        example: "Lions are wild animals."
    },
    {
        word: "answer",
        meaning: "jawaban",
        example: "I know the answer."
    },
    {
        word: "apple",
        meaning: "apel",
        example: "I eat an apple every day."
    },
    {
        word: "area",
        meaning: "daerah",
        example: "This is a quiet area."
    },
    {
        word: "arm",
        meaning: "lengan",
        example: "He hurt his arm."
    },
    {
        word: "arrive",
        meaning: "tiba",
        example: "We arrived at noon."
    },
    {
        word: "art",
        meaning: "seni",
        example: "She loves art."
    },
    {
        word: "ask",
        meaning: "bertanya",
        example: "May I ask you a question?"
    },
    {
        word: "baby",
        meaning: "bayi",
        example: "The baby is sleeping."
    },
    {
        word: "back",
        meaning: "kembali",
        example: "Come back soon."
    },
    {
        word: "bad",
        meaning: "buruk",
        example: "That is bad news."
    },
    {
        word: "bag",
        meaning: "tas",
        example: "I carry a bag."
    },
    {
        word: "ball",
        meaning: "bola",
        example: "We play ball."
    },
    {
        word: "bank",
        meaning: "bank",
        example: "I have an account at the bank."
    },
    {
        word: "beach",
        meaning: "pantai",
        example: "We spent the day at the beach."
    },
    {
        word: "beautiful",
        meaning: "cantik",
        example: "She is beautiful."
    },
    {
        word: "because",
        meaning: "karena",
        example: "I came because you called."
    },
    {
        word: "become",
        meaning: "menjadi",
        example: "He became a doctor."
    },
    {
        word: "bed",
        meaning: "tempat tidur",
        example: "I go to bed early."
    },
    {
        word: "before",
        meaning: "sebelum",
        example: "Wash your hands before eating."
    },
    {
        word: "begin",
        meaning: "memulai",
        example: "Let's begin the lesson."
    },
    {
        word: "behind",
        meaning: "di belakang",
        example: "The sun is behind the clouds."
    },
    {
        word: "believe",
        meaning: "percaya",
        example: "I believe you."
    },
    {
        word: "big",
        meaning: "besar",
        example: "This is a big house."
    },
    {
        word: "bird",
        meaning: "burung",
        example: "Birds fly in the sky."
    },
    {
        word: "black",
        meaning: "hitam",
        example: "She has black hair."
    },
    {
        word: "blue",
        meaning: "biru",
        example: "The sky is blue."
    },
    {
        word: "boat",
        meaning: "perahu",
        example: "We cross the river by boat."
    },
    {
        word: "body",
        meaning: "tubuh",
        example: "The human body is amazing."
    },
    {
        word: "book",
        meaning: "buku",
        example: "She is reading a book."
    },
    {
        word: "bottle",
        meaning: "botol",
        example: "He drinks from a bottle."
    },
    {
        word: "box",
        meaning: "kotak",
        example: "I have a box of chocolates."
    },
    {
        word: "boy",
        meaning: "anak laki-laki",
        example: "The boy is playing."
    },
    {
        word: "bread",
        meaning: "roti",
        example: "She bought fresh bread this morning."
    },
    {
        word: "break",
        meaning: "istirahat",
        example: "We take a break at noon."
    },
    {
        word: "bridge",
        meaning: "jembatan",
        example: "They built a bridge."
    },
    {
        word: "bright",
        meaning: "cerah",
        example: "The sun is bright today."
    },
    {
        word: "bring",
        meaning: "membawa",
        example: "Bring your book."
    },
    {
        word: "brother",
        meaning: "saudara laki-laki",
        example: "He is my brother."
    },
    {
        word: "build",
        meaning: "membangun",
        example: "They build a house."
    },
    {
        word: "busy",
        meaning: "sibuk",
        example: "I am very busy today."
    },
    {
        word: "buy",
        meaning: "membeli",
        example: "I want to buy a car."
    },
    {
        word: "call",
        meaning: "memanggil",
        example: "Please call me later."
    },
    {
        word: "calm",
        meaning: "tenang",
        example: "Stay calm."
    },
    {
        word: "camera",
        meaning: "kamera",
        example: "I take photos with my camera."
    },
    {
        word: "car",
        meaning: "mobil",
        example: "He drives a car."
    },
    {
        word: "card",
        meaning: "kartu",
        example: "I have a card."
    },
    {
        word: "care",
        meaning: "peduli",
        example: "I care about you."
    },
    {
        word: "carry",
        meaning: "membawa",
        example: "I carry my bag."
    },
    {
        word: "cat",
        meaning: "kucing",
        example: "The cat is sleeping."
    },
    {
        word: "chair",
        meaning: "kursi",
        example: "Please sit on this chair."
    },
    {
        word: "chance",
        meaning: "kesempatan",
        example: "I have a chance to win."
    },
    {
        word: "change",
        meaning: "berubah",
        example: "Change is necessary."
    },
    {
        word: "cheap",
        meaning: "murah",
        example: "This is cheap."
    },
    {
        word: "check",
        meaning: "memeriksa",
        example: "Check your email."
    },
    {
        word: "child",
        meaning: "anak",
        example: "Every child loves toys."
    },
    {
        word: "choose",
        meaning: "memilih",
        example: "Choose one of these."
    },
    {
        word: "city",
        meaning: "kota",
        example: "I live in a big city."
    },
    {
        word: "class",
        meaning: "kelas",
        example: "We have class at 8 AM."
    },
    {
        word: "clean",
        meaning: "bersih",
        example: "Keep your room clean."
    },
    {
        word: "clear",
        meaning: "jelas",
        example: "It is clear to me."
    },
    {
        word: "climb",
        meaning: "memanjat",
        example: "We climb the mountain."
    },
    {
        word: "clock",
        meaning: "jam",
        example: "Look at the clock."
    },
    {
        word: "close",
        meaning: "tutup",
        example: "Close the door."
    },
    {
        word: "cloud",
        meaning: "awan",
        example: "The sky is full of clouds."
    },
    {
        word: "coffee",
        meaning: "kopi",
        example: "I drink coffee in the morning."
    },
    {
        word: "cold",
        meaning: "dingin",
        example: "It is cold outside."
    },
    {
        word: "color",
        meaning: "warna",
        example: "Red is my favorite color."
    },
    {
        word: "come",
        meaning: "datang",
        example: "Come here."
    },
    {
        word: "company",
        meaning: "perusahaan",
        example: "He works for a company."
    },
    {
        word: "computer",
        meaning: "komputer",
        example: "I use a computer for work."
    },
    {
        word: "cook",
        meaning: "memasak",
        example: "She can cook well."
    },
    {
        word: "cost",
        meaning: "biaya",
        example: "The cost is high."
    },
    {
        word: "country",
        meaning: "negara",
        example: "Indonesia is a beautiful country."
    },
    {
        word: "cry",
        meaning: "menangis",
        example: "The baby started to cry."
    },
    {
        word: "cut",
        meaning: "memotong",
        example: "Cut the paper."
    },
    {
        word: "dance",
        meaning: "menari",
        example: "She loves to dance."
    },
    {
        word: "dark",
        meaning: "gelap",
        example: "It is dark outside."
    },
    {
        word: "day",
        meaning: "hari",
        example: "I work every day."
    },
    {
        word: "dead",
        meaning: "mati",
        example: "The plant is dead."
    },
    {
        word: "decide",
        meaning: "memutuskan",
        example: "I decided to go."
    },
    {
        word: "deep",
        meaning: "dalam",
        example: "The water is deep."
    },
    {
        word: "difficult",
        meaning: "sulit",
        example: "This is difficult."
    },
    {
        word: "dinner",
        meaning: "makan malam",
        example: "We have dinner at 7."
    },
    {
        word: "dirty",
        meaning: "kotor",
        example: "The shirt is dirty."
    },
    {
        word: "dog",
        meaning: "anjing",
        example: "My dog is friendly."
    },
    {
        word: "door",
        meaning: "pintu",
        example: "Close the door."
    },
    {
        word: "down",
        meaning: "turun",
        example: "He fell down."
    },
    {
        word: "draw",
        meaning: "menggambar",
        example: "I draw pictures."
    },
    {
        word: "dream",
        meaning: "mimpi",
        example: "I had a dream."
    },
    {
        word: "drink",
        meaning: "minum",
        example: "I drink water."
    },
    {
        word: "drive",
        meaning: "mengemudi",
        example: "She can drive."
    },
    {
        word: "dry",
        meaning: "kering",
        example: "The clothes are dry."
    },
    {
        word: "early",
        meaning: "awal",
        example: "I wake up early."
    },
    {
        word: "earth",
        meaning: "bumi",
        example: "The earth is round."
    },
    {
        word: "easy",
        meaning: "mudah",
        example: "This is easy."
    },
    {
        word: "eat",
        meaning: "makan",
        example: "I eat breakfast."
    },
    {
        word: "egg",
        meaning: "telur",
        example: "I have an egg."
    },
    {
        word: "empty",
        meaning: "kosong",
        example: "The bottle is empty."
    },
    {
        word: "end",
        meaning: "akhir",
        example: "The end of the story."
    },
    {
        word: "enjoy",
        meaning: "menikmati",
        example: "I enjoy music."
    },
    {
        word: "enter",
        meaning: "masuk",
        example: "Please enter the room."
    },
    {
        word: "evening",
        meaning: "sore/malam",
        example: "I work in the evening."
    },
    {
        word: "every",
        meaning: "setiap",
        example: "Every day is a new day."
    },
    {
        word: "example",
        meaning: "contoh",
        example: "Give me an example."
    },
    {
        word: "expensive",
        meaning: "mahal",
        example: "This phone is expensive."
    },
    {
        word: "eye",
        meaning: "mata",
        example: "She has beautiful eyes."
    },
    {
        word: "face",
        meaning: "wajah",
        example: "She has a pretty face."
    },
    {
        word: "fall",
        meaning: "jatuh",
        example: "Be careful not to fall."
    },
    {
        word: "family",
        meaning: "keluarga",
        example: "My family is large."
    },
    {
        word: "far",
        meaning: "jauh",
        example: "It is far from here."
    },
    {
        word: "fast",
        meaning: "cepat",
        example: "He runs fast."
    },
    {
        word: "father",
        meaning: "ayah",
        example: "My father is kind."
    },
    {
        word: "feel",
        meaning: "merasa",
        example: "I feel happy."
    },
    {
        word: "few",
        meaning: "sedikit",
        example: "Only a few came."
    },
    {
        word: "fight",
        meaning: "berkelahi",
        example: "They fight for freedom."
    },
    {
        word: "find",
        meaning: "menemukan",
        example: "I find it."
    },
    {
        word: "finish",
        meaning: "selesai",
        example: "I finish work."
    },
    {
        word: "fire",
        meaning: "api",
        example: "The fire is bright."
    },
    {
        word: "fish",
        meaning: "ikan",
        example: "I eat fish."
    },
    {
        word: "floor",
        meaning: "lantai",
        example: "It is on the floor."
    },
    {
        word: "flower",
        meaning: "bunga",
        example: "She loves flowers."
    },
    {
        word: "fly",
        meaning: "terbang",
        example: "Birds fly."
    },
    {
        word: "food",
        meaning: "makanan",
        example: "I need food."
    },
    {
        word: "foot",
        meaning: "kaki",
        example: "I hurt my foot."
    },
    {
        word: "forest",
        meaning: "hutan",
        example: "We walk in the forest."
    },
    {
        word: "forget",
        meaning: "lupa",
        example: "Don't forget."
    },
    {
        word: "free",
        meaning: "gratis",
        example: "It is free."
    },
    {
        word: "friend",
        meaning: "teman",
        example: "He is my friend."
    },
    {
        word: "fruit",
        meaning: "buah",
        example: "I eat fruit."
    },
    {
        word: "full",
        meaning: "penuh",
        example: "The glass is full."
    },
    {
        word: "fun",
        meaning: "menyenangkan",
        example: "It is fun."
    },
    {
        word: "game",
        meaning: "permainan",
        example: "We play a game."
    },
    {
        word: "garden",
        meaning: "kebun",
        example: "She works in the garden."
    },
    {
        word: "gift",
        meaning: "hadiah",
        example: "This is a gift."
    },
    {
        word: "girl",
        meaning: "perempuan",
        example: "The girl is tall."
    },
    {
        word: "give",
        meaning: "memberi",
        example: "Give me a chance."
    },
    {
        word: "glass",
        meaning: "gelas",
        example: "I have a glass."
    },
    {
        word: "go",
        meaning: "pergi",
        example: "I go to school."
    },
    {
        word: "good",
        meaning: "baik",
        example: "This is good."
    },
    {
        word: "grass",
        meaning: "rumput",
        example: "The grass is green."
    },
    {
        word: "great",
        meaning: "hebat",
        example: "It is great."
    },
    {
        word: "green",
        meaning: "hijau",
        example: "The leaves are green."
    },
    {
        word: "ground",
        meaning: "tanah",
        example: "Sit on the ground."
    },
    {
        word: "group",
        meaning: "kelompok",
        example: "We are a group."
    },
    {
        word: "grow",
        meaning: "tumbuh",
        example: "Plants grow."
    },
    {
        word: "hair",
        meaning: "rambut",
        example: "She has long hair."
    },
    {
        word: "hand",
        meaning: "tangan",
        example: "I raise my hand."
    },
    {
        word: "happy",
        meaning: "bahagia",
        example: "I am happy."
    },
    {
        word: "hard",
        meaning: "keras",
        example: "This is hard."
    },
    {
        word: "hate",
        meaning: "benci",
        example: "I hate lying."
    },
    {
        word: "head",
        meaning: "kepala",
        example: "My head hurts."
    },
    {
        word: "health",
        meaning: "kesehatan",
        example: "Health is wealth."
    },
    {
        word: "hear",
        meaning: "mendengar",
        example: "I hear music."
    },
    {
        word: "heart",
        meaning: "hati",
        example: "My heart beats."
    },
    {
        word: "heavy",
        meaning: "berat",
        example: "This is heavy."
    },
    {
        word: "hello",
        meaning: "halo",
        example: "Hello, how are you?"
    },
    {
        word: "help",
        meaning: "membantu",
        example: "Please help me."
    },
    {
        word: "here",
        meaning: "di sini",
        example: "I am here."
    },
    {
        word: "hide",
        meaning: "bersembunyi",
        example: "The cat likes to hide."
    },
    {
        word: "history",
        meaning: "sejarah",
        example: "History repeats."
    },
    {
        word: "hold",
        meaning: "memegang",
        example: "Hold my hand."
    },
    {
        word: "home",
        meaning: "rumah",
        example: "I go home."
    },
    {
        word: "hope",
        meaning: "harapan",
        example: "I have hope."
    },
    {
        word: "hospital",
        meaning: "rumah sakit",
        example: "She is in hospital."
    },
    {
        word: "hot",
        meaning: "panas",
        example: "It is hot today."
    },
    {
        word: "hotel",
        meaning: "hotel",
        example: "We stay at a hotel."
    },
    {
        word: "hour",
        meaning: "jam",
        example: "I wait for an hour."
    },
    {
        word: "house",
        meaning: "rumah",
        example: "This is my house."
    },
    {
        word: "hungry",
        meaning: "lapar",
        example: "I am hungry."
    },
    {
        word: "idea",
        meaning: "ide",
        example: "I have an idea."
    },
    {
        word: "important",
        meaning: "penting",
        example: "It is important."
    },
    {
        word: "inside",
        meaning: "di dalam",
        example: "Go inside."
    },
    {
        word: "island",
        meaning: "pulau",
        example: "Bali is an island."
    },
    {
        word: "job",
        meaning: "pekerjaan",
        example: "I have a job."
    },
    {
        word: "join",
        meaning: "bergabung",
        example: "Join us."
    },
    {
        word: "joy",
        meaning: "kegembiraan",
        example: "She is full of joy."
    },
    {
        word: "jump",
        meaning: "melompat",
        example: "She can jump high."
    },
    {
        word: "keep",
        meaning: "menjaga",
        example: "Keep it safe."
    },
    {
        word: "key",
        meaning: "kunci",
        example: "I lost my key."
    },
    {
        word: "kill",
        meaning: "membunuh",
        example: "Don't kill animals."
    },
    {
        word: "kind",
        meaning: "baik",
        example: "She is kind."
    },
    {
        word: "king",
        meaning: "raja",
        example: "He is the king."
    },
    {
        word: "kitchen",
        meaning: "dapur",
        example: "I cook in the kitchen."
    },
    {
        word: "knee",
        meaning: "lutut",
        example: "I hurt my knee."
    },
    {
        word: "knife",
        meaning: "pisau",
        example: "Use the knife."
    },
    {
        word: "know",
        meaning: "tahu",
        example: "I know him."
    },
    {
        word: "lady",
        meaning: "nyonya",
        example: "She is a lady."
    },
    {
        word: "lake",
        meaning: "danau",
        example: "We swim in the lake."
    },
    {
        word: "land",
        meaning: "tanah",
        example: "This is our land."
    },
    {
        word: "language",
        meaning: "bahasa",
        example: "What language do you speak?"
    },
    {
        word: "large",
        meaning: "besar",
        example: "It is large."
    },
    {
        word: "last",
        meaning: "terakhir",
        example: "I saw him last week."
    },
    {
        word: "late",
        meaning: "terlambat",
        example: "I am late."
    },
    {
        word: "laugh",
        meaning: "tertawa",
        example: "I laugh often."
    },
    {
        word: "lazy",
        meaning: "malas",
        example: "He is lazy."
    },
    {
        word: "learn",
        meaning: "belajar",
        example: "I learn English."
    },
    {
        word: "leave",
        meaning: "meninggalkan",
        example: "I leave at 5."
    },
    {
        word: "left",
        meaning: "kiri",
        example: "Turn left."
    },
    {
        word: "leg",
        meaning: "kaki",
        example: "My leg hurts."
    },
    {
        word: "letter",
        meaning: "surat",
        example: "I send a letter."
    },
    {
        word: "library",
        meaning: "perpustakaan",
        example: "I go to the library."
    },
    {
        word: "life",
        meaning: "kehidupan",
        example: "Life is beautiful."
    },
    {
        word: "light",
        meaning: "cahaya",
        example: "Turn on the light."
    },
    {
        word: "like",
        meaning: "suka",
        example: "I like coffee."
    },
    {
        word: "listen",
        meaning: "mendengarkan",
        example: "Listen to me."
    },
    {
        word: "little",
        meaning: "kecil",
        example: "It is little."
    },
    {
        word: "live",
        meaning: "hidup",
        example: "I live in Jakarta."
    },
    {
        word: "long",
        meaning: "panjang",
        example: "It is long."
    },
    {
        word: "look",
        meaning: "melihat",
        example: "Look at me."
    },
    {
        word: "love",
        meaning: "cinta",
        example: "I love you."
    },
    {
        word: "lucky",
        meaning: "beruntung",
        example: "I feel lucky today."
    },
    {
        word: "lunch",
        meaning: "makan siang",
        example: "I have lunch at noon."
    },
    {
        word: "machine",
        meaning: "mesin",
        example: "This machine is old."
    },
    {
        word: "man",
        meaning: "pria",
        example: "He is a man."
    },
    {
        word: "many",
        meaning: "banyak",
        example: "Many people."
    },
    {
        word: "map",
        meaning: "peta",
        example: "Look at the map."
    },
    {
        word: "market",
        meaning: "pasar",
        example: "I go to market."
    },
    {
        word: "meat",
        meaning: "daging",
        example: "I eat meat."
    },
    {
        word: "meet",
        meaning: "bertemu",
        example: "I meet friends."
    },
    {
        word: "milk",
        meaning: "susu",
        example: "I drink milk."
    },
    {
        word: "mind",
        meaning: "pikiran",
        example: "I change my mind."
    },
    {
        word: "minute",
        meaning: "menit",
        example: "Wait a minute."
    },
    {
        word: "miss",
        meaning: "merindukan",
        example: "I miss you."
    },
    {
        word: "mistake",
        meaning: "kesalahan",
        example: "I made a mistake."
    },
    {
        word: "money",
        meaning: "uang",
        example: "I need money."
    },
    {
        word: "month",
        meaning: "bulan",
        example: "This month is June."
    },
    {
        word: "moon",
        meaning: "bulan",
        example: "The moon is bright."
    },
    {
        word: "morning",
        meaning: "pagi",
        example: "Good morning."
    },
    {
        word: "mother",
        meaning: "ibu",
        example: "My mother is kind."
    },
    {
        word: "mountain",
        meaning: "gunung",
        example: "We climb a mountain."
    },
    {
        word: "mouth",
        meaning: "mulut",
        example: "Open your mouth."
    },
    {
        word: "move",
        meaning: "bergerak",
        example: "Move forward."
    },
    {
        word: "movie",
        meaning: "film",
        example: "I watch a movie."
    },
    {
        word: "music",
        meaning: "musik",
        example: "I love music."
    },
    {
        word: "name",
        meaning: "nama",
        example: "My name is Rere."
    },
    {
        word: "near",
        meaning: "dekat",
        example: "It is near."
    },
    {
        word: "neck",
        meaning: "leher",
        example: "My neck hurts."
    },
    {
        word: "need",
        meaning: "membutuhkan",
        example: "I need help."
    },
    {
        word: "new",
        meaning: "baru",
        example: "This is new."
    },
    {
        word: "news",
        meaning: "berita",
        example: "Listen to the news."
    },
    {
        word: "next",
        meaning: "berikutnya",
        example: "See you next week."
    },
    {
        word: "night",
        meaning: "malam",
        example: "Good night."
    },
    {
        word: "noise",
        meaning: "kebisingan",
        example: "I hate noise."
    },
    {
        word: "nose",
        meaning: "hidung",
        example: "My nose is red."
    },
    {
        word: "now",
        meaning: "sekarang",
        example: "I go now."
    },
    {
        word: "number",
        meaning: "nomor",
        example: "What is your number?"
    },
    {
        word: "nurse",
        meaning: "perawat",
        example: "She is a nurse."
    },
    {
        word: "ocean",
        meaning: "samudra",
        example: "The ocean is vast."
    },
    {
        word: "office",
        meaning: "kantor",
        example: "I go to office."
    },
    {
        word: "often",
        meaning: "sering",
        example: "I often read."
    },
    {
        word: "oil",
        meaning: "minyak",
        example: "Cook with oil."
    },
    {
        word: "old",
        meaning: "tua",
        example: "He is old."
    },
    {
        word: "open",
        meaning: "buka",
        example: "Open the door."
    },
    {
        word: "orange",
        meaning: "oranye",
        example: "The sunset was orange and pink."
    },
    {
        word: "page",
        meaning: "halaman",
        example: "Turn the page."
    },
    {
        word: "pain",
        meaning: "rasa sakit",
        example: "I feel pain."
    },
    {
        word: "paper",
        meaning: "kertas",
        example: "I write on paper."
    },
    {
        word: "parent",
        meaning: "orang tua",
        example: "My parents are kind."
    },
    {
        word: "park",
        meaning: "taman",
        example: "We walk in the park."
    },
    {
        word: "party",
        meaning: "pesta",
        example: "We have a party."
    },
    {
        word: "pay",
        meaning: "membayar",
        example: "I pay the bill."
    },
    {
        word: "peace",
        meaning: "perdamaian",
        example: "We want peace."
    },
    {
        word: "pen",
        meaning: "pena",
        example: "Can I borrow your pen?"
    },
    {
        word: "people",
        meaning: "orang-orang",
        example: "Many people."
    },
    {
        word: "phone",
        meaning: "telepon",
        example: "I use the phone."
    },
    {
        word: "photo",
        meaning: "foto",
        example: "Take a photo."
    },
    {
        word: "place",
        meaning: "tempat",
        example: "This is a nice place."
    },
    {
        word: "plan",
        meaning: "rencana",
        example: "I have a plan."
    },
    {
        word: "play",
        meaning: "bermain",
        example: "I play games."
    },
    {
        word: "please",
        meaning: "tolong",
        example: "Please help me."
    },
    {
        word: "police",
        meaning: "polisi",
        example: "Call the police."
    },
    {
        word: "poor",
        meaning: "miskin",
        example: "He is poor."
    },
    {
        word: "price",
        meaning: "harga",
        example: "The price is high."
    },
    {
        word: "problem",
        meaning: "masalah",
        example: "Solve the problem."
    },
    {
        word: "question",
        meaning: "pertanyaan",
        example: "I have a question."
    },
    {
        word: "quick",
        meaning: "cepat",
        example: "Be quick."
    },
    {
        word: "quiet",
        meaning: "tenang",
        example: "Be quiet."
    },
    {
        word: "rain",
        meaning: "hujan",
        example: "It is raining outside."
    },
    {
        word: "read",
        meaning: "membaca",
        example: "I read books."
    },
    {
        word: "ready",
        meaning: "siap",
        example: "I am ready."
    },
    {
        word: "red",
        meaning: "merah",
        example: "She wore a red dress."
    },
    {
        word: "rest",
        meaning: "istirahat",
        example: "Take a rest."
    },
    {
        word: "restaurant",
        meaning: "restoran",
        example: "We had dinner at a restaurant."
    },
    {
        word: "rice",
        meaning: "nasi/beras",
        example: "We eat rice every day."
    },
    {
        word: "rich",
        meaning: "kaya",
        example: "He is rich."
    },
    {
        word: "right",
        meaning: "kanan",
        example: "Turn right."
    },
    {
        word: "river",
        meaning: "sungai",
        example: "Swim in the river."
    },
    {
        word: "road",
        meaning: "jalan",
        example: "Drive on the road."
    },
    {
        word: "room",
        meaning: "ruangan",
        example: "This is my room."
    },
    {
        word: "run",
        meaning: "berlari",
        example: "I run every day."
    },
    {
        word: "sad",
        meaning: "sedih",
        example: "I feel sad."
    },
    {
        word: "safe",
        meaning: "aman",
        example: "Stay safe."
    },
    {
        word: "salt",
        meaning: "garam",
        example: "Add salt."
    },
    {
        word: "school",
        meaning: "sekolah",
        example: "I go to school."
    },
    {
        word: "sea",
        meaning: "laut",
        example: "The sea is blue."
    },
    {
        word: "season",
        meaning: "musim",
        example: "Rainy season."
    },
    {
        word: "see",
        meaning: "melihat",
        example: "I see you."
    },
    {
        word: "sell",
        meaning: "menjual",
        example: "I sell books."
    },
    {
        word: "send",
        meaning: "mengirim",
        example: "Send a letter."
    },
    {
        word: "shirt",
        meaning: "kemeja",
        example: "I wear a shirt."
    },
    {
        word: "shoe",
        meaning: "sepatu",
        example: "I buy shoes."
    },
    {
        word: "shop",
        meaning: "toko",
        example: "I go to the shop."
    },
    {
        word: "short",
        meaning: "pendek",
        example: "It is short."
    },
    {
        word: "sick",
        meaning: "sakit",
        example: "I feel sick."
    },
    {
        word: "sing",
        meaning: "bernyanyi",
        example: "I sing songs."
    },
    {
        word: "sister",
        meaning: "saudara perempuan",
        example: "My sister is kind."
    },
    {
        word: "sit",
        meaning: "duduk",
        example: "Sit down."
    },
    {
        word: "sky",
        meaning: "langit",
        example: "The sky is blue."
    },
    {
        word: "sleep",
        meaning: "tidur",
        example: "I need sleep."
    },
    {
        word: "slow",
        meaning: "lambat",
        example: "Drive slow."
    },
    {
        word: "small",
        meaning: "kecil",
        example: "It is small."
    },
    {
        word: "smile",
        meaning: "senyum",
        example: "She has a nice smile."
    },
    {
        word: "snow",
        meaning: "salju",
        example: "Snow falls."
    },
    {
        word: "song",
        meaning: "lagu",
        example: "I sing a song."
    },
    {
        word: "soon",
        meaning: "segera",
        example: "See you soon."
    },
    {
        word: "sorry",
        meaning: "maaf",
        example: "I am sorry."
    },
    {
        word: "sound",
        meaning: "suara",
        example: "I hear a sound."
    },
    {
        word: "speak",
        meaning: "berbicara",
        example: "I speak English."
    },
    {
        word: "stand",
        meaning: "berdiri",
        example: "Stand up."
    },
    {
        word: "star",
        meaning: "bintang",
        example: "Look at the stars."
    },
    {
        word: "start",
        meaning: "memulai",
        example: "Start now."
    },
    {
        word: "stay",
        meaning: "tinggal",
        example: "I stay here."
    },
    {
        word: "stop",
        meaning: "berhenti",
        example: "Stop here."
    },
    {
        word: "store",
        meaning: "toko",
        example: "I go to the store."
    },
    {
        word: "story",
        meaning: "cerita",
        example: "Tell me a story."
    },
    {
        word: "street",
        meaning: "jalan",
        example: "Cross the street."
    },
    {
        word: "strong",
        meaning: "kuat",
        example: "He is strong."
    },
    {
        word: "student",
        meaning: "murid",
        example: "I am a student."
    },
    {
        word: "study",
        meaning: "belajar",
        example: "I study every night."
    },
    {
        word: "sun",
        meaning: "matahari",
        example: "The sun is bright."
    },
    {
        word: "sweet",
        meaning: "manis",
        example: "This cake is sweet."
    },
    {
        word: "swim",
        meaning: "berenang",
        example: "I swim every morning."
    },
    {
        word: "table",
        meaning: "meja",
        example: "Put it on the table."
    },
    {
        word: "take",
        meaning: "mengambil",
        example: "Take this book."
    },
    {
        word: "talk",
        meaning: "berbicara",
        example: "Let's talk."
    },
    {
        word: "tall",
        meaning: "tinggi",
        example: "He is tall."
    },
    {
        word: "teach",
        meaning: "mengajar",
        example: "She teaches English."
    },
    {
        word: "teacher",
        meaning: "guru",
        example: "My teacher is kind."
    },
    {
        word: "tell",
        meaning: "memberitahu",
        example: "Tell me the truth."
    },
    {
        word: "thank",
        meaning: "berterima kasih",
        example: "Thank you."
    },
    {
        word: "think",
        meaning: "berpikir",
        example: "I think so."
    },
    {
        word: "thirsty",
        meaning: "haus",
        example: "I am thirsty."
    },
    {
        word: "time",
        meaning: "waktu",
        example: "What time is it?"
    },
    {
        word: "tired",
        meaning: "lelah",
        example: "I am tired."
    },
    {
        word: "today",
        meaning: "hari ini",
        example: "Today is Monday."
    },
    {
        word: "together",
        meaning: "bersama",
        example: "We work together."
    },
    {
        word: "tomorrow",
        meaning: "besok",
        example: "See you tomorrow."
    },
    {
        word: "tooth",
        meaning: "gigi",
        example: "My tooth hurts."
    },
    {
        word: "town",
        meaning: "kota kecil",
        example: "I live in a small town."
    },
    {
        word: "travel",
        meaning: "bepergian",
        example: "I love to travel."
    },
    {
        word: "tree",
        meaning: "pohon",
        example: "The tree is tall."
    },
    {
        word: "true",
        meaning: "benar",
        example: "This is true."
    },
    {
        word: "try",
        meaning: "mencoba",
        example: "I will try."
    },
    {
        word: "understand",
        meaning: "mengerti",
        example: "I understand you."
    },
    {
        word: "up",
        meaning: "ke atas",
        example: "Look up."
    },
    {
        word: "use",
        meaning: "menggunakan",
        example: "I use a computer."
    },
    {
        word: "village",
        meaning: "desa",
        example: "We live in a village."
    },
    {
        word: "visit",
        meaning: "mengunjungi",
        example: "I visit my grandmother."
    },
    {
        word: "voice",
        meaning: "suara",
        example: "She has a nice voice."
    },
    {
        word: "wait",
        meaning: "menunggu",
        example: "Please wait."
    },
    {
        word: "wake",
        meaning: "bangun",
        example: "I wake up early."
    },
    {
        word: "walk",
        meaning: "berjalan",
        example: "I walk to school."
    },
    {
        word: "wall",
        meaning: "dinding",
        example: "The wall is white."
    },
    {
        word: "want",
        meaning: "ingin",
        example: "I want water."
    },
    {
        word: "warm",
        meaning: "hangat",
        example: "The soup is warm."
    },
    {
        word: "wash",
        meaning: "mencuci",
        example: "Wash your hands."
    },
    {
        word: "water",
        meaning: "air",
        example: "I drink water."
    },
    {
        word: "weak",
        meaning: "lemah",
        example: "He feels weak."
    },
    {
        word: "wear",
        meaning: "memakai",
        example: "I wear a jacket."
    },
    {
        word: "weather",
        meaning: "cuaca",
        example: "The weather is nice."
    },
    {
        word: "week",
        meaning: "minggu",
        example: "See you next week."
    },
    {
        word: "welcome",
        meaning: "selamat datang",
        example: "Welcome to my house."
    },
    {
        word: "wet",
        meaning: "basah",
        example: "The road is wet."
    },
    {
        word: "white",
        meaning: "putih",
        example: "The wall is white."
    },
    {
        word: "window",
        meaning: "jendela",
        example: "Open the window."
    },
    {
        word: "winter",
        meaning: "musim dingin",
        example: "Winter is cold."
    },
    {
        word: "wish",
        meaning: "harapan",
        example: "Make a wish."
    },
    {
        word: "woman",
        meaning: "wanita",
        example: "She is a kind woman."
    },
    {
        word: "word",
        meaning: "kata",
        example: "What does this word mean?"
    },
    {
        word: "work",
        meaning: "bekerja",
        example: "I work every day."
    },
    {
        word: "world",
        meaning: "dunia",
        example: "The world is big."
    },
    {
        word: "write",
        meaning: "menulis",
        example: "I write a letter."
    },
    {
        word: "wrong",
        meaning: "salah",
        example: "That answer is wrong."
    },
    {
        word: "year",
        meaning: "tahun",
        example: "This year is good."
    },
    {
        word: "yellow",
        meaning: "kuning",
        example: "The banana is yellow."
    },
    {
        word: "yesterday",
        meaning: "kemarin",
        example: "I saw him yesterday."
    },
    {
        word: "young",
        meaning: "muda",
        example: "She is young."
    },
    {
        word: "zero",
        meaning: "nol",
        example: "The score is zero."
    },
    {
        word: "zoo",
        meaning: "kebun binatang",
        example: "We visited the zoo."
    },
    {
        word: "one",
        meaning: "satu",
        example: "I have one apple."
    },
    {
        word: "two",
        meaning: "dua",
        example: "I have two dogs."
    },
    {
        word: "three",
        meaning: "tiga",
        example: "She has three books."
    },
    {
        word: "four",
        meaning: "empat",
        example: "There are four chairs."
    },
    {
        word: "five",
        meaning: "lima",
        example: "I have five fingers."
    },
    {
        word: "six",
        meaning: "enam",
        example: "He has six pencils."
    },
    {
        word: "seven",
        meaning: "tujuh",
        example: "There are seven days in a week."
    },
    {
        word: "eight",
        meaning: "delapan",
        example: "We have eight players."
    },
    {
        word: "nine",
        meaning: "sembilan",
        example: "She is nine years old."
    },
    {
        word: "ten",
        meaning: "sepuluh",
        example: "I have ten fingers."
    },
    {
        word: "eleven",
        meaning: "sebelas",
        example: "It is eleven o'clock."
    },
    {
        word: "twelve",
        meaning: "dua belas",
        example: "There are twelve months."
    },
    {
        word: "twenty",
        meaning: "dua puluh",
        example: "She is twenty years old."
    },
    {
        word: "thirty",
        meaning: "tiga puluh",
        example: "He turned thirty last week."
    },
    {
        word: "hundred",
        meaning: "seratus",
        example: "I have a hundred dollars."
    },
    {
        word: "thousand",
        meaning: "ribu",
        example: "The city has a thousand people."
    },
    {
        word: "million",
        meaning: "juta",
        example: "The company earns a million dollars."
    },
    {
        word: "first",
        meaning: "pertama",
        example: "This is my first time."
    },
    {
        word: "second",
        meaning: "kedua",
        example: "She came in second place."
    },
    {
        word: "third",
        meaning: "ketiga",
        example: "This is the third chapter."
    },
    {
        word: "sunday",
        meaning: "minggu",
        example: "We rest on Sunday."
    },
    {
        word: "monday",
        meaning: "senin",
        example: "School starts on Monday."
    },
    {
        word: "tuesday",
        meaning: "selasa",
        example: "I have a meeting on Tuesday."
    },
    {
        word: "wednesday",
        meaning: "rabu",
        example: "We meet every Wednesday."
    },
    {
        word: "thursday",
        meaning: "kamis",
        example: "The event is on Thursday."
    },
    {
        word: "friday",
        meaning: "jumat",
        example: "Friday prayers start at noon."
    },
    {
        word: "saturday",
        meaning: "sabtu",
        example: "We usually shop on Saturday."
    },
    {
        word: "january",
        meaning: "januari",
        example: "The new year starts in January."
    },
    {
        word: "february",
        meaning: "februari",
        example: "February is a short month."
    },
    {
        word: "march",
        meaning: "maret",
        example: "Spring begins in March."
    },
    {
        word: "april",
        meaning: "april",
        example: "It often rains in April."
    },
    {
        word: "may",
        meaning: "mei",
        example: "We travel in May."
    },
    {
        word: "june",
        meaning: "juni",
        example: "School ends in June."
    },
    {
        word: "july",
        meaning: "juli",
        example: "It is very hot in July."
    },
    {
        word: "august",
        meaning: "agustus",
        example: "Independence Day is in August."
    },
    {
        word: "september",
        meaning: "september",
        example: "Classes start in September."
    },
    {
        word: "october",
        meaning: "oktober",
        example: "Leaves fall in October."
    },
    {
        word: "november",
        meaning: "november",
        example: "November is getting cold."
    },
    {
        word: "december",
        meaning: "desember",
        example: "We celebrate in December."
    },
    {
        word: "uncle",
        meaning: "paman",
        example: "My uncle is a doctor."
    },
    {
        word: "aunt",
        meaning: "bibi",
        example: "My aunt lives nearby."
    },
    {
        word: "nephew",
        meaning: "keponakan laki-laki",
        example: "My nephew is playful."
    },
    {
        word: "niece",
        meaning: "keponakan perempuan",
        example: "My niece loves drawing."
    },
    {
        word: "grandparent",
        meaning: "kakek/nenek",
        example: "I visit my grandparents often."
    },
    {
        word: "grandfather",
        meaning: "kakek",
        example: "My grandfather is eighty years old."
    },
    {
        word: "grandmother",
        meaning: "nenek",
        example: "My grandmother tells great stories."
    },
    {
        word: "grandchild",
        meaning: "cucu",
        example: "She has three grandchildren."
    },
    {
        word: "husband",
        meaning: "suami",
        example: "He is her husband."
    },
    {
        word: "wife",
        meaning: "istri",
        example: "She is his wife."
    },
    {
        word: "relative",
        meaning: "kerabat",
        example: "We invited all our relatives."
    },
    {
        word: "twin",
        meaning: "kembar",
        example: "They are twins."
    },
    {
        word: "baby sitter",
        meaning: "pengasuh bayi",
        example: "We hired a baby sitter."
    },
    {
        word: "shoulder",
        meaning: "bahu",
        example: "Tap my shoulder."
    },
    {
        word: "elbow",
        meaning: "siku",
        example: "I hurt my elbow."
    },
    {
        word: "wrist",
        meaning: "pergelangan tangan",
        example: "She wears a bracelet on her wrist."
    },
    {
        word: "finger",
        meaning: "jari",
        example: "She has long fingers."
    },
    {
        word: "thumb",
        meaning: "ibu jari",
        example: "He hurt his thumb."
    },
    {
        word: "ankle",
        meaning: "pergelangan kaki",
        example: "I twisted my ankle."
    },
    {
        word: "chest",
        meaning: "dada",
        example: "He felt pain in his chest."
    },
    {
        word: "stomach",
        meaning: "perut",
        example: "My stomach hurts."
    },
    {
        word: "skin",
        meaning: "kulit",
        example: "My skin is dry."
    },
    {
        word: "bone",
        meaning: "tulang",
        example: "The bone is broken."
    },
    {
        word: "blood",
        meaning: "darah",
        example: "Blood is red."
    },
    {
        word: "brain",
        meaning: "otak",
        example: "The brain is complex."
    },
    {
        word: "lung",
        meaning: "paru-paru",
        example: "Smoking damages the lungs."
    },
    {
        word: "muscle",
        meaning: "otot",
        example: "He has strong muscles."
    },
    {
        word: "tongue",
        meaning: "lidah",
        example: "She burned her tongue."
    },
    {
        word: "lip",
        meaning: "bibir",
        example: "Her lips are red."
    },
    {
        word: "eyebrow",
        meaning: "alis",
        example: "She has thin eyebrows."
    },
    {
        word: "eyelash",
        meaning: "bulu mata",
        example: "Her eyelashes are long."
    },
    {
        word: "chin",
        meaning: "dagu",
        example: "He has a small chin."
    },
    {
        word: "cheek",
        meaning: "pipi",
        example: "She kissed his cheek."
    },
    {
        word: "beard",
        meaning: "jenggot",
        example: "He has a long beard."
    },
    {
        word: "noodle",
        meaning: "mie",
        example: "I love eating noodles."
    },
    {
        word: "soup",
        meaning: "sup",
        example: "The soup is hot."
    },
    {
        word: "cake",
        meaning: "kue",
        example: "We baked a chocolate cake."
    },
    {
        word: "sugar",
        meaning: "gula",
        example: "Add some sugar to the tea."
    },
    {
        word: "chicken",
        meaning: "ayam",
        example: "I bought fresh chicken."
    },
    {
        word: "beef",
        meaning: "daging sapi",
        example: "We cooked beef for dinner."
    },
    {
        word: "vegetable",
        meaning: "sayuran",
        example: "Eat more vegetables."
    },
    {
        word: "banana",
        meaning: "pisang",
        example: "The banana is yellow."
    },
    {
        word: "mango",
        meaning: "mangga",
        example: "This mango is sweet."
    },
    {
        word: "tea",
        meaning: "teh",
        example: "I drink tea every morning."
    },
    {
        word: "juice",
        meaning: "jus",
        example: "I like fresh orange juice."
    },
    {
        word: "butter",
        meaning: "mentega",
        example: "Spread butter on the bread."
    },
    {
        word: "cheese",
        meaning: "keju",
        example: "I like cheese on my pizza."
    },
    {
        word: "spicy",
        meaning: "pedas",
        example: "This food is very spicy."
    },
    {
        word: "delicious",
        meaning: "enak",
        example: "The food is delicious."
    },
    {
        word: "fried",
        meaning: "goreng",
        example: "I love fried chicken."
    },
    {
        word: "boiled",
        meaning: "rebus",
        example: "She made boiled eggs."
    },
    {
        word: "fresh",
        meaning: "segar",
        example: "The fish is fresh."
    },
    {
        word: "snack",
        meaning: "cemilan",
        example: "I want a snack."
    },
    {
        word: "doctor",
        meaning: "dokter",
        example: "The doctor examined me."
    },
    {
        word: "engineer",
        meaning: "insinyur",
        example: "He is a civil engineer."
    },
    {
        word: "lawyer",
        meaning: "pengacara",
        example: "She is a lawyer."
    },
    {
        word: "driver",
        meaning: "sopir",
        example: "The driver is careful."
    },
    {
        word: "farmer",
        meaning: "petani",
        example: "The farmer grows rice."
    },
    {
        word: "chef",
        meaning: "koki",
        example: "The chef cooked a great meal."
    },
    {
        word: "pilot",
        meaning: "pilot",
        example: "The pilot landed safely."
    },
    {
        word: "soldier",
        meaning: "tentara",
        example: "He is a soldier."
    },
    {
        word: "artist",
        meaning: "seniman",
        example: "She is a talented artist."
    },
    {
        word: "writer",
        meaning: "penulis",
        example: "He is a famous writer."
    },
    {
        word: "singer",
        meaning: "penyanyi",
        example: "She is a great singer."
    },
    {
        word: "actor",
        meaning: "aktor",
        example: "He is a popular actor."
    },
    {
        word: "scientist",
        meaning: "ilmuwan",
        example: "The scientist made a discovery."
    },
    {
        word: "worker",
        meaning: "pekerja",
        example: "The worker is tired."
    },
    {
        word: "manager",
        meaning: "manajer",
        example: "She is the store manager."
    },
    {
        word: "employee",
        meaning: "karyawan",
        example: "He is a loyal employee."
    },
    {
        word: "employer",
        meaning: "majikan",
        example: "My employer is fair."
    },
    {
        word: "salary",
        meaning: "gaji",
        example: "My salary increased this year."
    },
    {
        word: "interview",
        meaning: "wawancara",
        example: "I have a job interview."
    },
    {
        word: "resume",
        meaning: "riwayat hidup",
        example: "Send me your resume."
    },
    {
        word: "meeting",
        meaning: "rapat",
        example: "We have a meeting today."
    },
    {
        word: "colleague",
        meaning: "rekan kerja",
        example: "My colleague is helpful."
    },
    {
        word: "boss",
        meaning: "bos",
        example: "My boss is strict."
    },
    {
        word: "factory",
        meaning: "pabrik",
        example: "He works at a factory."
    },
    {
        word: "hospital worker",
        meaning: "tenaga medis",
        example: "Hospital workers save lives."
    },
    {
        word: "internet",
        meaning: "internet",
        example: "I use the internet daily."
    },
    {
        word: "website",
        meaning: "situs web",
        example: "This is a good website."
    },
    {
        word: "password",
        meaning: "kata sandi",
        example: "Never share your password."
    },
    {
        word: "keyboard",
        meaning: "papan ketik",
        example: "The keyboard is not working."
    },
    {
        word: "mouse",
        meaning: "mouse",
        example: "The mouse is not responding."
    },
    {
        word: "screen",
        meaning: "layar",
        example: "The screen cracked after it fell."
    },
    {
        word: "battery",
        meaning: "baterai",
        example: "My phone battery is low."
    },
    {
        word: "charger",
        meaning: "pengisi daya",
        example: "I need a charger."
    },
    {
        word: "application",
        meaning: "aplikasi",
        example: "I built a dictionary application."
    },
    {
        word: "download",
        meaning: "unduh",
        example: "Please download the file first."
    },
    {
        word: "upload",
        meaning: "unggah",
        example: "Upload the document here."
    },
    {
        word: "email",
        meaning: "surel",
        example: "Send me an email."
    },
    {
        word: "message",
        meaning: "pesan",
        example: "I got a new message."
    },
    {
        word: "network",
        meaning: "jaringan",
        example: "The network is slow."
    },
    {
        word: "signal",
        meaning: "sinyal",
        example: "There is no signal here."
    },
    {
        word: "software",
        meaning: "perangkat lunak",
        example: "This software is useful."
    },
    {
        word: "update",
        meaning: "pembaruan",
        example: "Install the latest update."
    },
    {
        word: "account",
        meaning: "akun",
        example: "I forgot my account password."
    },
    {
        word: "data",
        meaning: "data",
        example: "We need more data."
    },
    {
        word: "file",
        meaning: "berkas",
        example: "Save it in a file."
    },
    {
        word: "sunny",
        meaning: "cerah",
        example: "It is sunny today."
    },
    {
        word: "cloudy",
        meaning: "berawan",
        example: "The sky is cloudy."
    },
    {
        word: "windy",
        meaning: "berangin",
        example: "It is windy outside."
    },
    {
        word: "storm",
        meaning: "badai",
        example: "A storm is coming."
    },
    {
        word: "thunder",
        meaning: "petir",
        example: "I heard thunder last night."
    },
    {
        word: "lightning",
        meaning: "kilat",
        example: "Lightning flashed in the sky."
    },
    {
        word: "fog",
        meaning: "kabut",
        example: "The fog made driving hard."
    },
    {
        word: "humid",
        meaning: "lembap",
        example: "It feels humid today."
    },
    {
        word: "temperature",
        meaning: "suhu",
        example: "The temperature is rising."
    },
    {
        word: "degree",
        meaning: "derajat",
        example: "It's 30 degrees today."
    },
    {
        word: "climate",
        meaning: "iklim",
        example: "The climate is changing."
    },
    {
        word: "football",
        meaning: "sepak bola",
        example: "We play football on weekends."
    },
    {
        word: "basketball",
        meaning: "bola basket",
        example: "He is good at basketball."
    },
    {
        word: "volleyball",
        meaning: "bola voli",
        example: "We play volleyball at the beach."
    },
    {
        word: "badminton",
        meaning: "bulu tangkis",
        example: "Badminton is popular in Indonesia."
    },
    {
        word: "tennis",
        meaning: "tenis",
        example: "She plays tennis every Sunday."
    },
    {
        word: "swimming",
        meaning: "berenang",
        example: "Swimming is good exercise."
    },
    {
        word: "running",
        meaning: "berlari",
        example: "Running keeps me healthy."
    },
    {
        word: "exercise",
        meaning: "olahraga",
        example: "I exercise every morning."
    },
    {
        word: "gym",
        meaning: "tempat gym",
        example: "I go to the gym after work."
    },
    {
        word: "coach",
        meaning: "pelatih",
        example: "The coach trains the team."
    },
    {
        word: "player",
        meaning: "pemain",
        example: "He is the best player."
    },
    {
        word: "team",
        meaning: "tim",
        example: "Our team won the match."
    },
    {
        word: "championship",
        meaning: "kejuaraan",
        example: "They won the championship."
    },
    {
        word: "stadium",
        meaning: "stadion",
        example: "The stadium was full."
    },
    {
        word: "referee",
        meaning: "wasit",
        example: "The referee blew the whistle."
    },
    {
        word: "nervous",
        meaning: "gugup",
        example: "I feel nervous before the exam."
    },
    {
        word: "excited",
        meaning: "bersemangat",
        example: "I am excited for the trip."
    },
    {
        word: "proud",
        meaning: "bangga",
        example: "She is proud of her son."
    },
    {
        word: "jealous",
        meaning: "cemburu",
        example: "He felt jealous of his brother."
    },
    {
        word: "bored",
        meaning: "bosan",
        example: "I am bored at home."
    },
    {
        word: "confused",
        meaning: "bingung",
        example: "I feel confused about this."
    },
    {
        word: "worried",
        meaning: "khawatir",
        example: "She is worried about the results."
    },
    {
        word: "surprised",
        meaning: "terkejut",
        example: "I was surprised by the news."
    },
    {
        word: "scared",
        meaning: "takut",
        example: "The child is scared of the dark."
    },
    {
        word: "embarrassed",
        meaning: "malu",
        example: "He felt embarrassed after the mistake."
    },
    {
        word: "comfortable",
        meaning: "nyaman",
        example: "This chair is comfortable."
    },
    {
        word: "uncomfortable",
        meaning: "tidak nyaman",
        example: "The seat is uncomfortable."
    },
    {
        word: "grateful",
        meaning: "bersyukur",
        example: "I am grateful for your help."
    },
    {
        word: "disappointed",
        meaning: "kecewa",
        example: "She was disappointed with the result."
    },
    {
        word: "confident",
        meaning: "percaya diri",
        example: "He is confident in his skills."
    },
    {
        word: "purple",
        meaning: "ungu",
        example: "I bought a purple bag."
    },
    {
        word: "pink",
        meaning: "merah muda",
        example: "She wore a pink dress."
    },
    {
        word: "gray",
        meaning: "abu-abu",
        example: "The sky turned gray before the storm."
    },
    {
        word: "brown",
        meaning: "coklat",
        example: "She likes brown shoes."
    },
    {
        word: "gold",
        meaning: "emas",
        example: "She wears gold jewelry."
    },
    {
        word: "silver",
        meaning: "perak",
        example: "He has a silver watch."
    },
    {
        word: "kitchen tool",
        meaning: "peralatan dapur",
        example: "She bought new kitchen tools."
    },
    {
        word: "furniture",
        meaning: "perabotan",
        example: "We bought new furniture."
    },
    {
        word: "blanket",
        meaning: "selimut",
        example: "I need a warm blanket."
    },
    {
        word: "pillow",
        meaning: "bantal",
        example: "The pillow is soft."
    },
    {
        word: "mirror",
        meaning: "cermin",
        example: "Look in the mirror."
    },
    {
        word: "curtain",
        meaning: "tirai",
        example: "Close the curtain."
    },
    {
        word: "carpet",
        meaning: "karpet",
        example: "The carpet is clean."
    },
    {
        word: "lamp",
        meaning: "lampu",
        example: "Turn on the lamp."
    },
    {
        word: "shelf",
        meaning: "rak",
        example: "Put the books on the shelf."
    },
    {
        word: "drawer",
        meaning: "laci",
        example: "Open the drawer."
    },
    {
        word: "broom",
        meaning: "sapu",
        example: "Use the broom to clean the floor."
    },
    {
        word: "bucket",
        meaning: "ember",
        example: "Fill the bucket with water."
    },
    {
        word: "towel",
        meaning: "handuk",
        example: "Dry yourself with a towel."
    },
    {
        word: "soap",
        meaning: "sabun",
        example: "Wash your hands with soap."
    },
    {
        word: "toothbrush",
        meaning: "sikat gigi",
        example: "I need a new toothbrush."
    },
    {
        word: "homework",
        meaning: "pekerjaan rumah",
        example: "I finished my homework."
    },
    {
        word: "exam",
        meaning: "ujian",
        example: "The exam is tomorrow."
    },
    {
        word: "grade",
        meaning: "nilai",
        example: "I got a good grade."
    },
    {
        word: "lesson",
        meaning: "pelajaran",
        example: "I learned a new lesson."
    },
    {
        word: "subject",
        meaning: "mata pelajaran",
        example: "Math is my favorite subject."
    },
    {
        word: "classroom",
        meaning: "ruang kelas",
        example: "The classroom is clean."
    },
    {
        word: "textbook",
        meaning: "buku pelajaran",
        example: "Bring your textbook."
    },
    {
        word: "notebook",
        meaning: "buku catatan",
        example: "Write it in your notebook."
    },
    {
        word: "pencil",
        meaning: "pensil",
        example: "I need a sharp pencil."
    },
    {
        word: "eraser",
        meaning: "penghapus",
        example: "May I borrow your eraser?"
    },
    {
        word: "ruler",
        meaning: "penggaris",
        example: "Use a ruler to draw a line."
    },
    {
        word: "blackboard",
        meaning: "papan tulis",
        example: "The teacher wrote on the blackboard."
    },
    {
        word: "university",
        meaning: "universitas",
        example: "She studies at a university."
    },
    {
        word: "graduate",
        meaning: "lulus",
        example: "He will graduate next year."
    },
    {
        word: "bus",
        meaning: "bus",
        example: "I take the bus to work."
    },
    {
        word: "train",
        meaning: "kereta",
        example: "The train arrived on time."
    },
    {
        word: "airplane",
        meaning: "pesawat",
        example: "The airplane took off."
    },
    {
        word: "motorcycle",
        meaning: "sepeda motor",
        example: "He rides a motorcycle."
    },
    {
        word: "bicycle",
        meaning: "sepeda",
        example: "I ride my bicycle to campus."
    },
    {
        word: "taxi",
        meaning: "taksi",
        example: "I called a taxi."
    },
    {
        word: "ship",
        meaning: "kapal",
        example: "We travel by ship."
    },
    {
        word: "traffic",
        meaning: "lalu lintas",
        example: "The traffic is heavy today."
    },
    {
        word: "ticket",
        meaning: "tiket",
        example: "I bought a train ticket."
    },
    {
        word: "passenger",
        meaning: "penumpang",
        example: "The bus is full of passengers."
    },
    {
        word: "station",
        meaning: "stasiun",
        example: "Train station."
    },
    {
        word: "highway",
        meaning: "jalan tol",
        example: "We drove on the highway."
    },
    {
        word: "parking",
        meaning: "parkir",
        example: "Where is the parking area?"
    },
    {
        word: "license",
        meaning: "surat izin",
        example: "He has a driving license."
    },
    {
        word: "continue",
        meaning: "melanjutkan",
        example: "Continue your story."
    },
    {
        word: "prepare",
        meaning: "mempersiapkan",
        example: "I prepare dinner."
    },
    {
        word: "improve",
        meaning: "memperbaiki",
        example: "I want to improve."
    },
    {
        word: "increase",
        meaning: "meningkatkan",
        example: "Increase the speed."
    },
    {
        word: "decrease",
        meaning: "menurunkan",
        example: "Decrease the volume."
    },
    {
        word: "succeed",
        meaning: "berhasil",
        example: "She succeeded in her exam."
    },
    {
        word: "fail",
        meaning: "gagal",
        example: "I might fail."
    },
    {
        word: "compare",
        meaning: "membandingkan",
        example: "Compare these two."
    },
    {
        word: "explain",
        meaning: "menjelaskan",
        example: "Explain it to me."
    },
    {
        word: "describe",
        meaning: "menggambarkan",
        example: "Describe the scene."
    },
    {
        word: "suggest",
        meaning: "menyarankan",
        example: "I suggest you rest."
    },
    {
        word: "recommend",
        meaning: "merekomendasikan",
        example: "I recommend this book."
    },
    {
        word: "borrow",
        meaning: "meminjam",
        example: "Can I borrow your pen?"
    },
    {
        word: "lend",
        meaning: "meminjamkan",
        example: "I will lend you money."
    },
    {
        word: "return",
        meaning: "mengembalikan",
        example: "Please return the book."
    },
    {
        word: "promise",
        meaning: "berjanji",
        example: "I promise to help you."
    },
    {
        word: "apologize",
        meaning: "meminta maaf",
        example: "He apologized for being late."
    },
    {
        word: "forgive",
        meaning: "memaafkan",
        example: "Please forgive me."
    },
    {
        word: "celebrate",
        meaning: "merayakan",
        example: "We celebrate birthdays."
    },
    {
        word: "invite",
        meaning: "mengundang",
        example: "Invite them."
    },
    {
        word: "refuse",
        meaning: "menolak",
        example: "He refused the offer."
    },
    {
        word: "argue",
        meaning: "berdebat",
        example: "They argued about money."
    },
    {
        word: "complain",
        meaning: "mengeluh",
        example: "She complained about the noise."
    },
    {
        word: "blame",
        meaning: "menyalahkan",
        example: "Don't blame me."
    },
    {
        word: "trust",
        meaning: "mempercayai",
        example: "I trust you."
    },
    {
        word: "doubt",
        meaning: "meragukan",
        example: "I doubt his story."
    },
    {
        word: "guess",
        meaning: "menebak",
        example: "Guess the answer."
    },
    {
        word: "imagine",
        meaning: "membayangkan",
        example: "Imagine a world without war."
    },
    {
        word: "organize",
        meaning: "mengatur",
        example: "Organize your files."
    },
    {
        word: "solve",
        meaning: "memecahkan",
        example: "Solve the problem."
    },
    {
        word: "create",
        meaning: "menciptakan",
        example: "God created the world."
    },
    {
        word: "destroy",
        meaning: "menghancurkan",
        example: "The fire destroyed the forest."
    },
    {
        word: "protect",
        meaning: "melindungi",
        example: "Protect nature."
    },
    {
        word: "attack",
        meaning: "menyerang",
        example: "The enemy attacked at dawn."
    },
    {
        word: "defend",
        meaning: "mempertahankan",
        example: "We must defend our country."
    },
    {
        word: "escape",
        meaning: "melarikan diri",
        example: "He escaped from prison."
    },
    {
        word: "search",
        meaning: "mencari",
        example: "I search for it."
    },
    {
        word: "discover",
        meaning: "menemukan",
        example: "Columbus discovered America."
    },
    {
        word: "invent",
        meaning: "menciptakan",
        example: "He invented a new machine."
    },
    {
        word: "repair",
        meaning: "memperbaiki",
        example: "Repair the car."
    },
    {
        word: "iron",
        meaning: "menyetrika",
        example: "She irons the clothes."
    },
    {
        word: "fold",
        meaning: "melipat",
        example: "Fold the clothes."
    },
    {
        word: "hang",
        meaning: "menggantung",
        example: "Hang your jacket there."
    },
    {
        word: "push",
        meaning: "mendorong",
        example: "Push the button."
    },
    {
        word: "pull",
        meaning: "menarik",
        example: "Pull the door."
    },
    {
        word: "lift",
        meaning: "mengangkat",
        example: "Lift the box carefully."
    },
    {
        word: "drop",
        meaning: "menjatuhkan",
        example: "Don't drop the plate."
    },
    {
        word: "throw",
        meaning: "melempar",
        example: "Throw the ball."
    },
    {
        word: "catch",
        meaning: "menangkap",
        example: "I catch the ball."
    },
    {
        word: "kick",
        meaning: "menendang",
        example: "He kicked the ball."
    },
    {
        word: "hit",
        meaning: "memukul",
        example: "Don't hit your brother."
    },
    {
        word: "touch",
        meaning: "menyentuh",
        example: "Don't touch the wet paint."
    },
    {
        word: "point",
        meaning: "menunjuk",
        example: "Don't point at people."
    },
    {
        word: "wave",
        meaning: "melambai",
        example: "She waved at me."
    },
    {
        word: "nod",
        meaning: "mengangguk",
        example: "He nodded in agreement."
    },
    {
        word: "shake",
        meaning: "menggoyangkan",
        example: "Shake the bottle first."
    },
    {
        word: "stretch",
        meaning: "meregangkan",
        example: "Stretch before exercise."
    },
    {
        word: "bend",
        meaning: "membungkuk",
        example: "Bend your knees."
    },
    {
        word: "kneel",
        meaning: "berlutut",
        example: "He knelt to pray."
    },
    {
        word: "crawl",
        meaning: "merangkak",
        example: "The baby is learning to crawl."
    },
    {
        word: "slip",
        meaning: "tergelincir",
        example: "Be careful, the floor is slippery."
    },
    {
        word: "trip",
        meaning: "tersandung",
        example: "He tripped over a rock."
    },
    {
        word: "bleed",
        meaning: "berdarah",
        example: "His hand is bleeding."
    },
    {
        word: "heal",
        meaning: "sembuh",
        example: "The wound is healing."
    },
    {
        word: "recover",
        meaning: "pulih",
        example: "She is recovering from illness."
    },
    {
        word: "faint",
        meaning: "pingsan",
        example: "She fainted in the heat."
    },
    {
        word: "cough",
        meaning: "batuk",
        example: "He has a bad cough."
    },
    {
        word: "sneeze",
        meaning: "bersin",
        example: "She sneezed loudly."
    },
    {
        word: "yawn",
        meaning: "menguap",
        example: "He yawned during the meeting."
    },
    {
        word: "breathe",
        meaning: "bernapas",
        example: "Breathe deeply."
    },
    {
        word: "swallow",
        meaning: "menelan",
        example: "Swallow your medicine."
    },
    {
        word: "chew",
        meaning: "mengunyah",
        example: "Chew your food well."
    },
    {
        word: "taste",
        meaning: "mencicipi",
        example: "Taste this soup."
    },
    {
        word: "smell",
        meaning: "mencium",
        example: "I smell roses."
    },
    {
        word: "stare",
        meaning: "menatap",
        example: "Don't stare at strangers."
    },
    {
        word: "glance",
        meaning: "melirik",
        example: "She glanced at the clock."
    },
    {
        word: "blink",
        meaning: "berkedip",
        example: "He blinked in surprise."
    },
    {
        word: "whisper",
        meaning: "berbisik",
        example: "She whispered a secret."
    },
    {
        word: "shout",
        meaning: "berteriak",
        example: "Shout for help."
    },
    {
        word: "scream",
        meaning: "menjerit",
        example: "She screamed in fear."
    },
    {
        word: "mutter",
        meaning: "bergumam",
        example: "He muttered under his breath."
    },
    {
        word: "giggle",
        meaning: "terkikik",
        example: "The kids giggled at the joke."
    },
    {
        word: "sob",
        meaning: "terisak",
        example: "She sobbed quietly."
    },
    {
        word: "shrug",
        meaning: "mengangkat bahu",
        example: "He shrugged and walked away."
    },
    {
        word: "brave",
        meaning: "berani",
        example: "The soldier is brave."
    },
    {
        word: "shy",
        meaning: "pemalu",
        example: "She is shy around strangers."
    },
    {
        word: "honest",
        meaning: "jujur",
        example: "Be honest."
    },
    {
        word: "dishonest",
        meaning: "tidak jujur",
        example: "He is dishonest."
    },
    {
        word: "generous",
        meaning: "dermawan",
        example: "She is very generous."
    },
    {
        word: "selfish",
        meaning: "egois",
        example: "He is selfish."
    },
    {
        word: "polite",
        meaning: "sopan",
        example: "Be polite."
    },
    {
        word: "rude",
        meaning: "kasar",
        example: "Don't be rude."
    },
    {
        word: "patient",
        meaning: "sabar",
        example: "Be patient."
    },
    {
        word: "impatient",
        meaning: "tidak sabar",
        example: "He is impatient."
    },
    {
        word: "friendly",
        meaning: "ramah",
        example: "My neighbor is friendly."
    },
    {
        word: "unfriendly",
        meaning: "tidak ramah",
        example: "The staff was unfriendly."
    },
    {
        word: "smart",
        meaning: "pintar",
        example: "She is very smart."
    },
    {
        word: "stupid",
        meaning: "bodoh",
        example: "That was a stupid mistake."
    },
    {
        word: "wise",
        meaning: "bijaksana",
        example: "The old man is wise."
    },
    {
        word: "foolish",
        meaning: "bodoh",
        example: "It was a foolish decision."
    },
    {
        word: "careful",
        meaning: "hati-hati",
        example: "Be careful."
    },
    {
        word: "careless",
        meaning: "ceroboh",
        example: "He is careless with money."
    },
    {
        word: "responsible",
        meaning: "bertanggung jawab",
        example: "She is a responsible worker."
    },
    {
        word: "hardworking",
        meaning: "rajin",
        example: "She is a hardworking student."
    },
    {
        word: "creative",
        meaning: "kreatif",
        example: "He is a creative designer."
    },
    {
        word: "curious",
        meaning: "penasaran",
        example: "The child is curious about everything."
    },
    {
        word: "humble",
        meaning: "rendah hati",
        example: "She is humble despite her success."
    },
    {
        word: "arrogant",
        meaning: "sombong",
        example: "He is arrogant."
    },
    {
        word: "loyal",
        meaning: "setia",
        example: "He is loyal."
    },
    {
        word: "stubborn",
        meaning: "keras kepala",
        example: "She is stubborn."
    },
    {
        word: "flexible",
        meaning: "fleksibel",
        example: "My schedule is flexible."
    },
    {
        word: "strict",
        meaning: "tegas/ketat",
        example: "The teacher is strict."
    },
    {
        word: "gentle",
        meaning: "lembut",
        example: "She is gentle."
    },
    {
        word: "cruel",
        meaning: "kejam",
        example: "He was cruel to animals."
    },
    {
        word: "mean",
        meaning: "jahat",
        example: "Don't be mean to your sister."
    },
    {
        word: "funny",
        meaning: "lucu",
        example: "He is a funny person."
    },
    {
        word: "serious",
        meaning: "serius",
        example: "I am serious."
    },
    {
        word: "boring",
        meaning: "membosankan",
        example: "The movie was boring."
    },
    {
        word: "interesting",
        meaning: "menarik",
        example: "This book is interesting."
    },
    {
        word: "exciting",
        meaning: "mengasyikkan",
        example: "The game was exciting."
    },
    {
        word: "dangerous",
        meaning: "berbahaya",
        example: "This road is dangerous."
    },
    {
        word: "modern",
        meaning: "modern",
        example: "This is modern."
    },
    {
        word: "ancient",
        meaning: "kuno",
        example: "This is an ancient temple."
    },
    {
        word: "traditional",
        meaning: "tradisional",
        example: "We wear traditional clothes."
    },
    {
        word: "simple",
        meaning: "sederhana",
        example: "It is simple."
    },
    {
        word: "complex",
        meaning: "rumit",
        example: "This problem is complex."
    },
    {
        word: "normal",
        meaning: "normal",
        example: "Everything looks normal."
    },
    {
        word: "strange",
        meaning: "aneh",
        example: "That is a strange sound."
    },
    {
        word: "common",
        meaning: "umum",
        example: "It is common knowledge."
    },
    {
        word: "rare",
        meaning: "langka",
        example: "This flower is rare."
    },
    {
        word: "famous",
        meaning: "terkenal",
        example: "He is famous."
    },
    {
        word: "popular",
        meaning: "populer",
        example: "This is popular."
    },
    {
        word: "crowded",
        meaning: "ramai",
        example: "The market is crowded."
    },
    {
        word: "noisy",
        meaning: "berisik",
        example: "The street is noisy."
    },
    {
        word: "silent",
        meaning: "diam",
        example: "Be silent."
    },
    {
        word: "peaceful",
        meaning: "damai",
        example: "The village is peaceful."
    },
    {
        word: "wild",
        meaning: "liar",
        example: "Lions are wild animals."
    },
    {
        word: "gentle breeze",
        meaning: "angin sepoi-sepoi",
        example: "A gentle breeze blew through the trees."
    },
    {
        word: "mountain range",
        meaning: "pegunungan",
        example: "The mountain range stretches for miles."
    },
    {
        word: "valley",
        meaning: "lembah",
        example: "The valley is green and fertile."
    },
    {
        word: "desert",
        meaning: "gurun",
        example: "The desert is very dry."
    },
    {
        word: "jungle",
        meaning: "rimba",
        example: "Tigers live in the jungle."
    },
    {
        word: "waterfall",
        meaning: "air terjun",
        example: "We visited a beautiful waterfall."
    },
    {
        word: "volcano",
        meaning: "gunung berapi",
        example: "The volcano erupted last year."
    },
    {
        word: "cave",
        meaning: "gua",
        example: "They explored a dark cave."
    },
    {
        word: "cliff",
        meaning: "tebing",
        example: "Don't stand near the cliff."
    },
    {
        word: "hill",
        meaning: "bukit",
        example: "We hiked up the hill."
    },
    {
        word: "field",
        meaning: "ladang",
        example: "The farmer plows the field."
    },
    {
        word: "soil",
        meaning: "tanah",
        example: "The soil is fertile."
    },
    {
        word: "stone",
        meaning: "batu",
        example: "He threw a stone into the lake."
    },
    {
        word: "rock",
        meaning: "batu karang",
        example: "The boat hit a rock."
    },
    {
        word: "sand",
        meaning: "pasir",
        example: "Play in the sand."
    },
    {
        word: "tide",
        meaning: "pasang surut",
        example: "The tide is coming in."
    },
    {
        word: "continent",
        meaning: "benua",
        example: "Asia is the largest continent."
    },
    {
        word: "planet",
        meaning: "planet",
        example: "Earth is our planet."
    },
    {
        word: "universe",
        meaning: "alam semesta",
        example: "The universe is vast."
    },
    {
        word: "galaxy",
        meaning: "galaksi",
        example: "Our galaxy is the Milky Way."
    },
    {
        word: "horizon",
        meaning: "cakrawala",
        example: "The sun set below the horizon."
    },
    {
        word: "elephant",
        meaning: "gajah",
        example: "The elephant is huge."
    },
    {
        word: "lion",
        meaning: "singa",
        example: "The lion is the king of the jungle."
    },
    {
        word: "tiger",
        meaning: "harimau",
        example: "The tiger is dangerous."
    },
    {
        word: "monkey",
        meaning: "monyet",
        example: "The monkey climbs trees."
    },
    {
        word: "snake",
        meaning: "ular",
        example: "Be careful of the snake."
    },
    {
        word: "spider",
        meaning: "laba-laba",
        example: "I am afraid of spiders."
    },
    {
        word: "butterfly",
        meaning: "kupu-kupu",
        example: "The butterfly is colorful."
    },
    {
        word: "bee",
        meaning: "lebah",
        example: "The bee makes honey."
    },
    {
        word: "ant",
        meaning: "semut",
        example: "Ants work together."
    },
    {
        word: "mosquito",
        meaning: "nyamuk",
        example: "The mosquito bit me."
    },
    {
        word: "frog",
        meaning: "katak",
        example: "The frog jumps into the pond."
    },
    {
        word: "turtle",
        meaning: "kura-kura",
        example: "The turtle is slow."
    },
    {
        word: "rabbit",
        meaning: "kelinci",
        example: "The rabbit hopped away."
    },
    {
        word: "horse",
        meaning: "kuda",
        example: "He rides a horse."
    },
    {
        word: "goat",
        meaning: "kambing",
        example: "The goat eats grass."
    },
    {
        word: "sheep",
        meaning: "domba",
        example: "The sheep gives wool."
    },
    {
        word: "pig",
        meaning: "babi",
        example: "The pig lives on the farm."
    },
    {
        word: "duck",
        meaning: "bebek",
        example: "The duck swims in the pond."
    },
    {
        word: "rooster",
        meaning: "ayam jantan",
        example: "The rooster crows at dawn."
    },
    {
        word: "owl",
        meaning: "burung hantu",
        example: "The owl hunts at night."
    },
    {
        word: "eagle",
        meaning: "elang",
        example: "The eagle soars high."
    },
    {
        word: "shark",
        meaning: "hiu",
        example: "The shark swims in the ocean."
    },
    {
        word: "whale",
        meaning: "paus",
        example: "The whale is the largest animal."
    },
    {
        word: "dolphin",
        meaning: "lumba-lumba",
        example: "Dolphins are intelligent."
    },
    {
        word: "crab",
        meaning: "kepiting",
        example: "The crab walks sideways."
    },
    {
        word: "shrimp",
        meaning: "udang",
        example: "I love eating shrimp."
    },
    {
        word: "insect",
        meaning: "serangga",
        example: "Insects are small creatures."
    },
    {
        word: "wing",
        meaning: "sayap",
        example: "The bird has strong wings."
    },
    {
        word: "tail",
        meaning: "ekor",
        example: "The dog wagged its tail."
    },
    {
        word: "fur",
        meaning: "bulu",
        example: "The cat has soft fur."
    },
    {
        word: "claw",
        meaning: "cakar",
        example: "The eagle has sharp claws."
    },
    {
        word: "nest",
        meaning: "sarang",
        example: "The bird built a nest."
    },
    {
        word: "cash",
        meaning: "uang tunai",
        example: "I paid with cash."
    },
    {
        word: "credit card",
        meaning: "kartu kredit",
        example: "She paid with a credit card."
    },
    {
        word: "discount",
        meaning: "diskon",
        example: "This shirt has a discount."
    },
    {
        word: "receipt",
        meaning: "struk",
        example: "Keep your receipt."
    },
    {
        word: "bill",
        meaning: "tagihan",
        example: "I need to pay the bill."
    },
    {
        word: "wallet",
        meaning: "dompet",
        example: "I lost my wallet."
    },
    {
        word: "coin",
        meaning: "koin",
        example: "He collects old coins."
    },
    {
        word: "afford",
        meaning: "mampu membeli",
        example: "I can't afford that car."
    },
    {
        word: "budget",
        meaning: "anggaran",
        example: "We have a limited budget."
    },
    {
        word: "save money",
        meaning: "menabung",
        example: "I save money every month."
    },
    {
        word: "spend",
        meaning: "menghabiskan",
        example: "I spend money on books."
    },
    {
        word: "borrow money",
        meaning: "meminjam uang",
        example: "He borrowed money from the bank."
    },
    {
        word: "debt",
        meaning: "utang",
        example: "She is paying off her debt."
    },
    {
        word: "loan",
        meaning: "pinjaman",
        example: "He took out a loan."
    },
    {
        word: "invest",
        meaning: "berinvestasi",
        example: "I invest in stocks."
    },
    {
        word: "income",
        meaning: "penghasilan",
        example: "His income increased this year."
    },
    {
        word: "expense",
        meaning: "pengeluaran",
        example: "Track your monthly expenses."
    },
    {
        word: "profit",
        meaning: "keuntungan",
        example: "The company made a big profit."
    },
    {
        word: "loss",
        meaning: "kerugian",
        example: "The business suffered a loss."
    },
    {
        word: "tax",
        meaning: "pajak",
        example: "We pay tax every year."
    },
    {
        word: "shopping",
        meaning: "belanja",
        example: "We went shopping yesterday."
    },
    {
        word: "customer",
        meaning: "pelanggan",
        example: "The customer is satisfied."
    },
    {
        word: "cashier",
        meaning: "kasir",
        example: "The cashier counted the money."
    },
    {
        word: "medicine",
        meaning: "obat",
        example: "Take your medicine on time."
    },
    {
        word: "pill",
        meaning: "pil",
        example: "Swallow the pill with water."
    },
    {
        word: "injection",
        meaning: "suntikan",
        example: "The nurse gave an injection."
    },
    {
        word: "surgery",
        meaning: "operasi",
        example: "He had surgery yesterday."
    },
    {
        word: "wound",
        meaning: "luka",
        example: "Clean the wound carefully."
    },
    {
        word: "bandage",
        meaning: "perban",
        example: "Wrap the wound with a bandage."
    },
    {
        word: "fever",
        meaning: "demam",
        example: "I have a fever."
    },
    {
        word: "headache",
        meaning: "sakit kepala",
        example: "I have a headache."
    },
    {
        word: "toothache",
        meaning: "sakit gigi",
        example: "She has a toothache."
    },
    {
        word: "flu",
        meaning: "flu",
        example: "He caught the flu."
    },
    {
        word: "allergy",
        meaning: "alergi",
        example: "She has a food allergy."
    },
    {
        word: "diet",
        meaning: "diet",
        example: "He is on a strict diet."
    },
    {
        word: "vitamin",
        meaning: "vitamin",
        example: "Take your vitamins daily."
    },
    {
        word: "virus",
        meaning: "virus",
        example: "The virus spread quickly."
    },
    {
        word: "infection",
        meaning: "infeksi",
        example: "The wound got infected."
    },
    {
        word: "pain relief",
        meaning: "pereda nyeri",
        example: "This medicine gives pain relief."
    },
    {
        word: "checkup",
        meaning: "pemeriksaan",
        example: "I have a checkup tomorrow."
    },
    {
        word: "pregnant",
        meaning: "hamil",
        example: "She is pregnant."
    },
    {
        word: "disabled",
        meaning: "difabel",
        example: "The building is accessible for disabled people."
    },
    {
        word: "blind",
        meaning: "buta",
        example: "He has been blind since birth."
    },
    {
        word: "deaf",
        meaning: "tuli",
        example: "She is deaf in one ear."
    },
    {
        word: "law",
        meaning: "hukum",
        example: "Obey the law."
    },
    {
        word: "court",
        meaning: "pengadilan",
        example: "The case went to court."
    },
    {
        word: "judge",
        meaning: "hakim",
        example: "The judge is fair."
    },
    {
        word: "jury",
        meaning: "juri",
        example: "The jury reached a verdict."
    },
    {
        word: "crime",
        meaning: "kejahatan",
        example: "Crime rates are decreasing."
    },
    {
        word: "criminal",
        meaning: "penjahat",
        example: "The criminal was arrested."
    },
    {
        word: "prison",
        meaning: "penjara",
        example: "He was sent to prison."
    },
    {
        word: "arrest",
        meaning: "menangkap",
        example: "The police arrested the suspect."
    },
    {
        word: "witness",
        meaning: "saksi",
        example: "She was a witness to the accident."
    },
    {
        word: "evidence",
        meaning: "bukti",
        example: "There is no evidence."
    },
    {
        word: "guilty",
        meaning: "bersalah",
        example: "He was found guilty."
    },
    {
        word: "innocent",
        meaning: "tidak bersalah",
        example: "She is innocent."
    },
    {
        word: "government",
        meaning: "pemerintah",
        example: "The government acts."
    },
    {
        word: "election",
        meaning: "pemilihan",
        example: "The election is next month."
    },
    {
        word: "vote",
        meaning: "memilih",
        example: "Everyone should vote."
    },
    {
        word: "president",
        meaning: "presiden",
        example: "The president speaks."
    },
    {
        word: "minister",
        meaning: "menteri",
        example: "The minister speaks."
    },
    {
        word: "citizen",
        meaning: "warga negara",
        example: "Every citizen has rights."
    },
    {
        word: "nation",
        meaning: "bangsa",
        example: "We are one nation."
    },
    {
        word: "constitution",
        meaning: "konstitusi",
        example: "The constitution protects our rights."
    },
    {
        word: "policy",
        meaning: "kebijakan",
        example: "The policy changes."
    },
    {
        word: "tax office",
        meaning: "kantor pajak",
        example: "I went to the tax office."
    },
    {
        word: "conversation",
        meaning: "percakapan",
        example: "We had a nice conversation."
    },
    {
        word: "discussion",
        meaning: "diskusi",
        example: "We had a long discussion."
    },
    {
        word: "argument",
        meaning: "perdebatan",
        example: "They had an argument."
    },
    {
        word: "agreement",
        meaning: "kesepakatan",
        example: "We reached an agreement."
    },
    {
        word: "announcement",
        meaning: "pengumuman",
        example: "There is an important announcement."
    },
    {
        word: "rumor",
        meaning: "gosip",
        example: "Don't spread rumors."
    },
    {
        word: "gossip",
        meaning: "gosip",
        example: "She loves to gossip."
    },
    {
        word: "advice",
        meaning: "nasihat",
        example: "Let me give you some advice."
    },
    {
        word: "opinion",
        meaning: "pendapat",
        example: "What is your opinion?"
    },
    {
        word: "comment",
        meaning: "komentar",
        example: "Leave a comment below."
    },
    {
        word: "reply",
        meaning: "balasan",
        example: "I am waiting for your reply."
    },
    {
        word: "statement",
        meaning: "pernyataan",
        example: "He made a statement."
    },
    {
        word: "speech",
        meaning: "pidato",
        example: "He gave a great speech."
    },
    {
        word: "presentation",
        meaning: "presentasi",
        example: "I have a presentation tomorrow."
    },
    {
        word: "translation",
        meaning: "terjemahan",
        example: "This is a translation of the book."
    },
    {
        word: "interpreter",
        meaning: "penerjemah",
        example: "We hired an interpreter."
    },
    {
        word: "dictionary",
        meaning: "kamus",
        example: "I use a dictionary to learn words."
    },
    {
        word: "grammar",
        meaning: "tata bahasa",
        example: "English grammar can be tricky."
    },
    {
        word: "vocabulary",
        meaning: "kosakata",
        example: "I am learning new vocabulary."
    },
    {
        word: "pronunciation",
        meaning: "pengucapan",
        example: "Her pronunciation is clear."
    },
    {
        word: "accent",
        meaning: "logat",
        example: "He has a strong accent."
    },
    {
        word: "fluent",
        meaning: "fasih",
        example: "She is fluent in English."
    },
    {
        word: "century",
        meaning: "abad",
        example: "This building is a century old."
    },
    {
        word: "decade",
        meaning: "dekade",
        example: "A decade is ten years."
    },
    {
        word: "moment",
        meaning: "saat",
        example: "Wait for a moment."
    },
    {
        word: "instant",
        meaning: "saat itu juga",
        example: "He fell in love at that instant."
    },
    {
        word: "period",
        meaning: "periode",
        example: "A long period."
    },
    {
        word: "schedule",
        meaning: "jadwal",
        example: "Check the schedule."
    },
    {
        word: "deadline",
        meaning: "tenggat waktu",
        example: "The deadline is tomorrow."
    },
    {
        word: "appointment",
        meaning: "janji temu",
        example: "I have an appointment at 3."
    },
    {
        word: "calendar",
        meaning: "kalender",
        example: "Mark it on the calendar."
    },
    {
        word: "weekday",
        meaning: "hari kerja",
        example: "I work on weekdays."
    },
    {
        word: "weekend",
        meaning: "akhir pekan",
        example: "We relax on weekends."
    },
    {
        word: "holiday",
        meaning: "hari libur",
        example: "Tomorrow is a holiday."
    },
    {
        word: "vacation",
        meaning: "liburan",
        example: "We are on vacation."
    },
    {
        word: "anniversary",
        meaning: "hari jadi",
        example: "Happy anniversary!"
    },
    {
        word: "birthday",
        meaning: "hari ulang tahun",
        example: "Today is my birthday."
    },
    {
        word: "noon",
        meaning: "tengah hari",
        example: "We meet at noon."
    },
    {
        word: "midnight",
        meaning: "tengah malam",
        example: "It happened at midnight."
    },
    {
        word: "dawn",
        meaning: "fajar",
        example: "We woke up at dawn."
    },
    {
        word: "dusk",
        meaning: "senja",
        example: "The birds return at dusk."
    },
    {
        word: "relationship",
        meaning: "hubungan",
        example: "They have a good relationship."
    },
    {
        word: "friendship",
        meaning: "persahabatan",
        example: "Our friendship is strong."
    },
    {
        word: "marriage",
        meaning: "pernikahan",
        example: "Their marriage is happy."
    },
    {
        word: "divorce",
        meaning: "perceraian",
        example: "They went through a divorce."
    },
    {
        word: "engagement",
        meaning: "pertunangan",
        example: "They announced their engagement."
    },
    {
        word: "romance",
        meaning: "percintaan",
        example: "It's a beautiful romance."
    },
    {
        word: "crush",
        meaning: "naksir",
        example: "He has a crush on her."
    },
    {
        word: "breakup",
        meaning: "putus",
        example: "They had a breakup last month."
    },
    {
        word: "jealousy",
        meaning: "kecemburuan",
        example: "Jealousy can ruin a relationship."
    },
    {
        word: "betrayal",
        meaning: "pengkhianatan",
        example: "She felt betrayal."
    },
    {
        word: "loyalty",
        meaning: "kesetiaan",
        example: "Loyalty matters most."
    },
    {
        word: "support",
        meaning: "mendukung",
        example: "I support your decision."
    },
    {
        word: "comfort",
        meaning: "menghibur",
        example: "She tried to comfort him."
    },
    {
        word: "encourage",
        meaning: "mendorong semangat",
        example: "She encouraged me to try again."
    },
    {
        word: "motivate",
        meaning: "memotivasi",
        example: "This song motivates me."
    },
    {
        word: "inspire",
        meaning: "menginspirasi",
        example: "Her story inspired me."
    },
    {
        word: "apartment",
        meaning: "apartemen",
        example: "She rents an apartment."
    },
    {
        word: "neighborhood",
        meaning: "lingkungan sekitar",
        example: "We live in a quiet neighborhood."
    },
    {
        word: "landlord",
        meaning: "pemilik rumah",
        example: "I pay rent to my landlord."
    },
    {
        word: "tenant",
        meaning: "penyewa",
        example: "The tenant pays monthly rent."
    },
    {
        word: "rent",
        meaning: "sewa",
        example: "The rent is expensive."
    },
    {
        word: "mortgage",
        meaning: "kredit rumah",
        example: "We are paying off our mortgage."
    },
    {
        word: "garage",
        meaning: "garasi",
        example: "The car is in the garage."
    },
    {
        word: "balcony",
        meaning: "balkon",
        example: "We drink coffee on the balcony."
    },
    {
        word: "roof",
        meaning: "atap",
        example: "The roof leaks when it rains."
    },
    {
        word: "basement",
        meaning: "ruang bawah tanah",
        example: "We store things in the basement."
    },
    {
        word: "fence",
        meaning: "pagar",
        example: "The fence surrounds the yard."
    },
    {
        word: "yard",
        meaning: "halaman",
        example: "The kids play in the yard."
    },
    {
        word: "elevator",
        meaning: "lift",
        example: "Take the elevator to the third floor."
    },
    {
        word: "stairs",
        meaning: "tangga",
        example: "Walk up the stairs."
    },
    {
        word: "gravity",
        meaning: "gravitasi",
        example: "Gravity pulls objects down."
    },
    {
        word: "energy",
        meaning: "energi",
        example: "I have no energy."
    },
    {
        word: "electricity",
        meaning: "listrik",
        example: "We need electricity to run the machine."
    },
    {
        word: "magnet",
        meaning: "magnet",
        example: "The magnet attracts iron."
    },
    {
        word: "chemical",
        meaning: "bahan kimia",
        example: "This chemical is dangerous."
    },
    {
        word: "experiment",
        meaning: "eksperimen",
        example: "We did a science experiment."
    },
    {
        word: "laboratory",
        meaning: "laboratorium",
        example: "The scientist works in a laboratory."
    },
    {
        word: "theory",
        meaning: "teori",
        example: "This is just a theory."
    },
    {
        word: "evolution",
        meaning: "evolusi",
        example: "Evolution takes millions of years."
    },
    {
        word: "species",
        meaning: "spesies",
        example: "This species is endangered."
    },
    {
        word: "ecosystem",
        meaning: "ekosistem",
        example: "The forest has a rich ecosystem."
    },
    {
        word: "pollution",
        meaning: "polusi",
        example: "Air pollution."
    },
    {
        word: "recycle",
        meaning: "mendaur ulang",
        example: "We should recycle plastic."
    },
    {
        word: "environment",
        meaning: "lingkungan",
        example: "Protect the environment."
    },
    {
        word: "climate change",
        meaning: "perubahan iklim",
        example: "Climate change affects everyone."
    },
    {
        word: "renewable energy",
        meaning: "energi terbarukan",
        example: "Solar power is renewable energy."
    },
    {
        word: "efficient",
        meaning: "efisien",
        example: "This method is efficient."
    },
    {
        word: "effective",
        meaning: "efektif",
        example: "The treatment was effective."
    },
    {
        word: "accurate",
        meaning: "akurat",
        example: "The data is accurate."
    },
    {
        word: "precise",
        meaning: "tepat",
        example: "Give a precise answer."
    },
    {
        word: "reliable",
        meaning: "dapat diandalkan",
        example: "He is a reliable friend."
    },
    {
        word: "consistent",
        meaning: "konsisten",
        example: "Her work is consistent."
    },
    {
        word: "stable",
        meaning: "stabil",
        example: "The price is stable."
    },
    {
        word: "unstable",
        meaning: "tidak stabil",
        example: "The situation is unstable."
    },
    {
        word: "temporary",
        meaning: "sementara",
        example: "This is a temporary solution."
    },
    {
        word: "permanent",
        meaning: "permanen",
        example: "He got a permanent job."
    },
    {
        word: "gradual",
        meaning: "bertahap",
        example: "The change was gradual."
    },
    {
        word: "sudden",
        meaning: "tiba-tiba",
        example: "There was a sudden noise."
    },
    {
        word: "obvious",
        meaning: "jelas",
        example: "It is obvious."
    },
    {
        word: "hidden",
        meaning: "tersembunyi",
        example: "The treasure is hidden."
    },
    {
        word: "visible",
        meaning: "terlihat",
        example: "The mountain is visible from here."
    },
    {
        word: "invisible",
        meaning: "tidak terlihat",
        example: "The wind is invisible."
    },
    {
        word: "essential",
        meaning: "penting sekali",
        example: "Water is essential for life."
    },
    {
        word: "optional",
        meaning: "opsional",
        example: "This step is optional."
    },
    {
        word: "mandatory",
        meaning: "wajib",
        example: "Attendance is mandatory."
    },
    {
        word: "voluntary",
        meaning: "sukarela",
        example: "This work is voluntary."
    },
    {
        word: "legal",
        meaning: "legal",
        example: "It is legal."
    },
    {
        word: "illegal",
        meaning: "ilegal",
        example: "That action is illegal."
    },
    {
        word: "formal",
        meaning: "resmi",
        example: "Wear formal clothes to the event."
    },
    {
        word: "informal",
        meaning: "tidak resmi",
        example: "It was an informal meeting."
    },
    {
        word: "private",
        meaning: "pribadi",
        example: "Private property."
    },
    {
        word: "public",
        meaning: "umum",
        example: "Public transport."
    },
    {
        word: "individual",
        meaning: "individu",
        example: "Every individual matters."
    },
    {
        word: "collective",
        meaning: "kolektif",
        example: "We made a collective decision."
    },
    {
        word: "global",
        meaning: "global",
        example: "Climate is a global issue."
    },
    {
        word: "local",
        meaning: "lokal",
        example: "Buy local products."
    },
    {
        word: "domestic",
        meaning: "domestik",
        example: "Domestic flights are cheaper."
    },
    {
        word: "foreign",
        meaning: "asing",
        example: "I speak a foreign language."
    },
    {
        word: "urban",
        meaning: "perkotaan",
        example: "Urban areas are crowded."
    },
    {
        word: "rural",
        meaning: "pedesaan",
        example: "Live in a rural area."
    },

{
    word: "achievement",
    meaning: "pencapaian",
    example: "Winning the award was a great achievement."
},
{
    word: "admire",
    meaning: "mengagumi",
    example: "I admire your courage."
},
{
    word: "adopt",
    meaning: "mengadopsi",
    example: "They decided to adopt a child."
},
{
    word: "adventure",
    meaning: "petualangan",
    example: "Life is an adventure."
},
{
    word: "affection",
    meaning: "kasih sayang",
    example: "She showed affection to her dog."
},
{
    word: "ambition",
    meaning: "ambisi",
    example: "His ambition is to become a doctor."
},
{
    word: "amuse",
    meaning: "menghibur",
    example: "The clown amused the children."
},
{
    word: "ancient",
    meaning: "kuno",
    example: "This is an ancient temple."
},
{
    word: "annoy",
    meaning: "mengganggu",
    example: "Stop annoying your sister."
},
{
    word: "anxiety",
    meaning: "kecemasan",
    example: "She felt anxiety before the exam."
},
{
    word: "appreciate",
    meaning: "menghargai",
    example: "I appreciate your help."
},
{
    word: "approve",
    meaning: "menyetujui",
    example: "The manager approved the proposal."
},
{
    word: "assign",
    meaning: "menugaskan",
    example: "The teacher assigned homework."
},
{
    word: "assume",
    meaning: "menganggap",
    example: "I assume you are right."
},
{
    word: "atmosphere",
    meaning: "suasana",
    example: "The restaurant has a cozy atmosphere."
},
{
    word: "attract",
    meaning: "menarik",
    example: "Magnets attract iron."
},
{
    word: "available",
    meaning: "tersedia",
    example: "Is this seat available?"
},
{
    word: "awkward",
    meaning: "canggung",
    example: "The silence was awkward."
},
{
    word: "bargain",
    meaning: "tawar-menawar",
    example: "We bargained for a better price."
},
{
    word: "behave",
    meaning: "berperilaku",
    example: "Please behave well."
},
{
    word: "benefit",
    meaning: "manfaat",
    example: "Exercise has many benefits."
},
{
    word: "betray",
    meaning: "mengkhianati",
    example: "He betrayed his friend."
},
{
    word: "bizarre",
    meaning: "aneh",
    example: "That was a bizarre story."
},
{
    word: "blame",
    meaning: "menyalahkan",
    example: "Don't blame me."
},
{
    word: "boost",
    meaning: "meningkatkan",
    example: "This will boost your energy."
},
{
    word: "bother",
    meaning: "mengganggu",
    example: "I don't want to bother you."
},
{
    word: "boundary",
    meaning: "batas",
    example: "Respect other people's boundaries."
},
{
    word: "brilliant",
    meaning: "cemerlang",
    example: "She had a brilliant idea."
},
{
    word: "candidate",
    meaning: "kandidat",
    example: "There are three candidates for the job."
},
{
    word: "capable",
    meaning: "mampu",
    example: "He is capable of doing it."
},
{
    word: "capture",
    meaning: "menangkap",
    example: "The photographer captured the moment."
},
{
    word: "celebrate",
    meaning: "merayakan",
    example: "We celebrate our anniversary."
},
{
    word: "challenge",
    meaning: "tantangan",
    example: "This is a big challenge."
},
{
    word: "character",
    meaning: "karakter",
    example: "She has a strong character."
},
{
    word: "circumstance",
    meaning: "keadaan",
    example: "Under these circumstances, we must leave."
},
{
    word: "collapse",
    meaning: "runtuh",
    example: "The building collapsed."
},
{
    word: "combine",
    meaning: "menggabungkan",
    example: "Combine the ingredients."
},
{
    word: "commit",
    meaning: "melakukan (tindakan)",
    example: "He committed a crime."
},
{
    word: "communicate",
    meaning: "berkomunikasi",
    example: "We communicate with each other."
},
{
    word: "companion",
    meaning: "teman",
    example: "He is a good companion."
},
{
    word: "compete",
    meaning: "bersaing",
    example: "They compete for the prize."
},
{
    word: "complaint",
    meaning: "keluhan",
    example: "I have a complaint about the service."
},
{
    word: "complete",
    meaning: "menyelesaikan",
    example: "I need to complete this task."
},
{
    word: "concentrate",
    meaning: "berkonsentrasi",
    example: "Please concentrate on your work."
},
{
    word: "conclude",
    meaning: "menyimpulkan",
    example: "I conclude that it is safe."
},
{
    word: "condition",
    meaning: "kondisi",
    example: "The condition of the room is good."
},
{
    word: "confess",
    meaning: "mengaku",
    example: "He confessed to the crime."
},
{
    word: "confirm",
    meaning: "mengkonfirmasi",
    example: "Please confirm your attendance."
},
{
    word: "conflict",
    meaning: "konflik",
    example: "They have a conflict of interest."
},
{
    word: "consequence",
    meaning: "konsekuensi",
    example: "Think about the consequences."
},
{
    word: "conservation",
    meaning: "konservasi",
    example: "Wildlife conservation is important."
},
{
    word: "consider",
    meaning: "mempertimbangkan",
    example: "Please consider my suggestion."
},
{
    word: "contribute",
    meaning: "berkontribusi",
    example: "Everyone should contribute."
},
{
    word: "convenient",
    meaning: "nyaman",
    example: "This location is convenient."
},
{
    word: "convince",
    meaning: "meyakinkan",
    example: "I convinced him to join."
},
{
    word: "curiosity",
    meaning: "rasa ingin tahu",
    example: "His curiosity led him to explore."
},
{
    word: "decade",
    meaning: "dekade",
    example: "A decade is ten years."
},
{
    word: "declare",
    meaning: "menyatakan",
    example: "The president declared a holiday."
},
{
    word: "defeat",
    meaning: "kekalahan",
    example: "They suffered a defeat."
},
{
    word: "defend",
    meaning: "mempertahankan",
    example: "We must defend our rights."
},
{
    word: "definition",
    meaning: "definisi",
    example: "What is the definition of this word?"
},
{
    word: "delay",
    meaning: "menunda",
    example: "We must delay the meeting."
},
{
    word: "deliver",
    meaning: "mengantarkan",
    example: "The postman delivers mail."
},
{
    word: "demand",
    meaning: "permintaan",
    example: "There is a high demand for this product."
},
{
    word: "demonstrate",
    meaning: "mendemonstrasikan",
    example: "She demonstrated how to use it."
},
{
    word: "depress",
    meaning: "menyedihkan",
    example: "The news depressed him."
},
{
    word: "deserve",
    meaning: "layak",
    example: "You deserve a break."
},
{
    word: "desperate",
    meaning: "putus asa",
    example: "He made a desperate attempt."
},
{
    word: "determine",
    meaning: "menentukan",
    example: "We need to determine the cause."
},
{
    word: "devote",
    meaning: "mengabdikan",
    example: "She devoted her life to teaching."
},
{
    word: "dignity",
    meaning: "martabat",
    example: "Everyone has the right to dignity."
},
{
    word: "discipline",
    meaning: "disiplin",
    example: "He needs more discipline."
},
{
    word: "discount",
    meaning: "diskon",
    example: "This shirt has a discount."
},
{
    word: "disgust",
    meaning: "jijik",
    example: "The smell disgusted me."
},
{
    word: "dispose",
    meaning: "membuang",
    example: "Dispose of the trash properly."
},
{
    word: "distinguish",
    meaning: "membedakan",
    example: "Can you distinguish the colors?"
},
{
    word: "distribute",
    meaning: "mendistribusikan",
    example: "The teacher distributed the papers."
},
{
    word: "diversity",
    meaning: "keberagaman",
    example: "We celebrate diversity."
},
{
    word: "domestic",
    meaning: "domestik",
    example: "Domestic flights are cheaper."
},
{
    word: "dominate",
    meaning: "mendominasi",
    example: "He dominates the conversation."
},
{
    word: "doubt",
    meaning: "keraguan",
    example: "I have some doubts."
},
{
    word: "dramatic",
    meaning: "dramatis",
    example: "The change was dramatic."
},
{
    word: "earnest",
    meaning: "sungguh-sungguh",
    example: "He made an earnest effort."
},
{
    word: "elderly",
    meaning: "lanjut usia",
    example: "We should respect the elderly."
},
{
    word: "eliminate",
    meaning: "menghilangkan",
    example: "We must eliminate this problem."
},
{
    word: "embrace",
    meaning: "merangkul",
    example: "She embraced her mother."
},
{
    word: "emerge",
    meaning: "muncul",
    example: "A new leader emerged."
},
{
    word: "emotion",
    meaning: "emosi",
    example: "He showed strong emotions."
},
{
    word: "emphasis",
    meaning: "penekanan",
    example: "Put emphasis on this point."
},
{
    word: "enable",
    meaning: "memungkinkan",
    example: "The new tool enables us to work faster."
},
{
    word: "encounter",
    meaning: "bertemu",
    example: "I encountered an old friend."
},
{
    word: "enormous",
    meaning: "sangat besar",
    example: "This is an enormous building."
},
{
    word: "enthusiasm",
    meaning: "antusiasme",
    example: "She showed great enthusiasm."
},
{
    word: "establish",
    meaning: "mendirikan",
    example: "They established a new company."
},
{
    word: "evaluate",
    meaning: "mengevaluasi",
    example: "We need to evaluate the results."
},
{
    word: "eventually",
    meaning: "akhirnya",
    example: "Eventually, we arrived."
},
{
    word: "evidence",
    meaning: "bukti",
    example: "There is no evidence."
},
{
    word: "evolve",
    meaning: "berevolusi",
    example: "Species evolve over time."
},
{
    word: "examine",
    meaning: "memeriksa",
    example: "The doctor examined the patient."
},
{
    word: "exceed",
    meaning: "melampaui",
    example: "The cost exceeded our budget."
},
{
    word: "exception",
    meaning: "pengecualian",
    example: "This rule has no exception."
},
{
    word: "exchange",
    meaning: "pertukaran",
    example: "We exchanged gifts."
},
{
    word: "exclude",
    meaning: "mengecualikan",
    example: "Exclude these items from the list."
},
{
    word: "execute",
    meaning: "melaksanakan",
    example: "The plan was executed perfectly."
},
{
    word: "exhaust",
    meaning: "menghabiskan",
    example: "The long trip exhausted us."
},
{
    word: "exhibit",
    meaning: "memamerkan",
    example: "The museum exhibits ancient artifacts."
},
{
    word: "expand",
    meaning: "memperluas",
    example: "We want to expand our business."
},
{
    word: "expose",
    meaning: "memaparkan",
    example: "Don't expose yourself to the sun too long."
},
{
    word: "extend",
    meaning: "memperpanjang",
    example: "We extended the deadline."
},
{
    word: "extraordinary",
    meaning: "luar biasa",
    example: "She has extraordinary talent."
},
{
    word: "fabric",
    meaning: "kain",
    example: "This fabric is soft."
},
{
    word: "fascinate",
    meaning: "memukau",
    example: "The view fascinated us."
},
{
    word: "fatal",
    meaning: "fatal",
    example: "The accident was fatal."
},
{
    word: "flourish",
    meaning: "berkembang",
    example: "The garden flourished."
},
{
    word: "forbid",
    meaning: "melarang",
    example: "I forbid you to go."
},
{
    word: "forecast",
    meaning: "prakiraan",
    example: "The weather forecast says rain."
},
{
    word: "fortune",
    meaning: "keberuntungan",
    example: "He made a fortune."
},
{
    word: "fragile",
    meaning: "rapuh",
    example: "Handle this fragile item carefully."
},
{
    word: "freedom",
    meaning: "kebebasan",
    example: "Everyone wants freedom."
},
{
    word: "frequent",
    meaning: "sering",
    example: "I make frequent trips."
},
{
    word: "frustrate",
    meaning: "mengecewakan",
    example: "The delay frustrated us."
},
{
    word: "generate",
    meaning: "menghasilkan",
    example: "This machine generates electricity."
},
{
    word: "genuine",
    meaning: "asli",
    example: "This is a genuine product."
},
{
    word: "gratitude",
    meaning: "rasa syukur",
    example: "I express my gratitude."
},
{
    word: "guarantee",
    meaning: "jaminan",
    example: "This product has a guarantee."
},
{
    word: "guilty",
    meaning: "bersalah",
    example: "He was found guilty."
},
{
    word: "harmony",
    meaning: "harmoni",
    example: "They live in harmony."
},
{
    word: "harsh",
    meaning: "keras",
    example: "The punishment was harsh."
},
{
    word: "hesitate",
    meaning: "ragu-ragu",
    example: "Don't hesitate to ask."
},
{
    word: "honor",
    meaning: "kehormatan",
    example: "It is an honor to meet you."
},
{
    word: "hostile",
    meaning: "bermusuhan",
    example: "They were hostile to us."
},
{
    word: "humble",
    meaning: "rendah hati",
    example: "She is humble despite her success."
},
{
    word: "identical",
    meaning: "identik",
    example: "These two are identical."
},
{
    word: "ignorant",
    meaning: "bodoh/tidak tahu",
    example: "He is ignorant about this topic."
},
{
    word: "illustrate",
    meaning: "mengilustrasikan",
    example: "The example illustrates the point."
},
{
    word: "immigrate",
    meaning: "berimigrasi",
    example: "They immigrated to another country."
},
{
    word: "impact",
    meaning: "dampak",
    example: "The impact was huge."
},
{
    word: "implement",
    meaning: "mengimplementasikan",
    example: "We need to implement the plan."
},
{
    word: "imply",
    meaning: "menyiratkan",
    example: "What do you imply?"
},
{
    word: "impress",
    meaning: "mengagumkan",
    example: "Her speech impressed everyone."
},
{
    word: "incident",
    meaning: "insiden",
    example: "There was a minor incident."
},
{
    word: "include",
    meaning: "termasuk",
    example: "Does the price include tax?"
},
{
    word: "indicate",
    meaning: "menunjukkan",
    example: "The sign indicates the way."
},
{
    word: "individual",
    meaning: "individu",
    example: "Every individual matters."
},
{
    word: "inevitable",
    meaning: "tidak terhindarkan",
    example: "Change is inevitable."
},
{
    word: "influence",
    meaning: "pengaruh",
    example: "Her influence is strong."
},
{
    word: "innocent",
    meaning: "tidak bersalah",
    example: "She is innocent."
},
{
    word: "innovate",
    meaning: "berinovasi",
    example: "We need to innovate."
},
{
    word: "insist",
    meaning: "bersikeras",
    example: "He insisted on paying."
},
{
    word: "inspect",
    meaning: "memeriksa",
    example: "The officer inspected the documents."
},
{
    word: "inspire",
    meaning: "menginspirasi",
    example: "Her story inspired me."
},
{
    word: "integrate",
    meaning: "mengintegrasikan",
    example: "We need to integrate these systems."
},
{
    word: "intelligent",
    meaning: "cerdas",
    example: "Dolphins are intelligent."
},
{
    word: "intend",
    meaning: "berniat",
    example: "I intend to finish this today."
},
{
    word: "interact",
    meaning: "berinteraksi",
    example: "They interact well."
},
{
    word: "interest",
    meaning: "minat",
    example: "I have an interest in music."
},
{
    word: "interpret",
    meaning: "menafsirkan",
    example: "How do you interpret this?"
},
{
    word: "investigate",
    meaning: "menyelidiki",
    example: "The police investigated the crime."
},
{
    word: "isolate",
    meaning: "mengisolasi",
    example: "They isolated the patient."
},
{
    word: "issue",
    meaning: "isu",
    example: "This is a major issue."
},
{
    word: "justice",
    meaning: "keadilan",
    example: "We seek justice."
},
{
    word: "justify",
    meaning: "membenarkan",
    example: "Can you justify your actions?"
},
{
    word: "landscape",
    meaning: "lanskap",
    example: "The landscape is beautiful."
},
{
    word: "launch",
    meaning: "meluncurkan",
    example: "They launched a new product."
},
{
    word: "liberal",
    meaning: "liberal",
    example: "She has liberal views."
},
{
    word: "limit",
    meaning: "batasan",
    example: "There is a limit."
},
{
    word: "logic",
    meaning: "logika",
    example: "That makes no sense in logic."
},
{
    word: "luxury",
    meaning: "kemewahan",
    example: "They live in luxury."
},
{
    word: "maintain",
    meaning: "mempertahankan",
    example: "We need to maintain this standard."
},
{
    word: "major",
    meaning: "utama",
    example: "This is a major problem."
},
{
    word: "manage",
    meaning: "mengelola",
    example: "She manages the team."
},
{
    word: "mature",
    meaning: "matang",
    example: "He is mature for his age."
},
{
    word: "maximum",
    meaning: "maksimum",
    example: "The maximum speed is 100 km/h."
},
{
    word: "minimum",
    meaning: "minimum",
    example: "The minimum age is 18."
},
{
    word: "minor",
    meaning: "kecil",
    example: "This is a minor issue."
},
{
    word: "misunderstand",
    meaning: "salah paham",
    example: "I misunderstood you."
},
{
    word: "modify",
    meaning: "memodifikasi",
    example: "We need to modify the plan."
},
{
    word: "monitor",
    meaning: "memantau",
    example: "The nurse monitors the patient."
},
{
    word: "moral",
    meaning: "moral",
    example: "That is a moral issue."
},
{
    word: "motivate",
    meaning: "memotivasi",
    example: "He motivated his team."
},
{
    word: "mutual",
    meaning: "saling",
    example: "They have mutual respect."
},
{
    word: "negative",
    meaning: "negatif",
    example: "He has a negative attitude."
},
{
    word: "negotiate",
    meaning: "bernegosiasi",
    example: "We negotiated the price."
},
{
    word: "neutral",
    meaning: "netral",
    example: "Stay neutral."
},
{
    word: "notion",
    meaning: "gagasan",
    example: "I have a notion about this."
},
{
    word: "obstacle",
    meaning: "hambatan",
    example: "We faced many obstacles."
},
{
    word: "obtain",
    meaning: "memperoleh",
    example: "He obtained a degree."
},
{
    word: "occupy",
    meaning: "menempati",
    example: "The workers occupy the building."
},
{
    word: "offend",
    meaning: "menyinggung",
    example: "I didn't mean to offend you."
},
{
    word: "oppose",
    meaning: "menentang",
    example: "Many oppose the plan."
},
{
    word: "optimistic",
    meaning: "optimis",
    example: "I am optimistic about the future."
},
{
    word: "originate",
    meaning: "berasal",
    example: "The idea originated from him."
},
{
    word: "overcome",
    meaning: "mengatasi",
    example: "She overcame her fears."
},
{
    word: "overlook",
    meaning: "mengabaikan",
    example: "Don't overlook this detail."
},
{
    word: "ownership",
    meaning: "kepemilikan",
    example: "The ownership was transferred."
},
{
    word: "participate",
    meaning: "berpartisipasi",
    example: "Everyone should participate."
},
{
    word: "positive",
    meaning: "positif",
    example: "Stay positive."
},
{
    word: "possess",
    meaning: "memiliki",
    example: "He possesses great wealth."
},
{
    word: "potential",
    meaning: "potensi",
    example: "She has great potential."
},
{
    word: "poverty",
    meaning: "kemiskinan",
    example: "Poverty is a global issue."
},
{
    word: "pray",
    meaning: "berdoa",
    example: "They pray every day."
},
{
    word: "predict",
    meaning: "memprediksi",
    example: "I predict rain tomorrow."
},
{
    word: "prefer",
    meaning: "lebih suka",
    example: "I prefer tea to coffee."
},
{
    word: "prejudice",
    meaning: "prasangka",
    example: "Prejudice is harmful."
},
{
    word: "preserve",
    meaning: "melestarikan",
    example: "We must preserve nature."
},
{
    word: "prevent",
    meaning: "mencegah",
    example: "We need to prevent accidents."
},
{
    word: "previous",
    meaning: "sebelumnya",
    example: "I met her the previous day."
},
{
    word: "principle",
    meaning: "prinsip",
    example: "He has strong principles."
},
{
    word: "priority",
    meaning: "prioritas",
    example: "Safety is our priority."
},
{
    word: "privilege",
    meaning: "hak istimewa",
    example: "It is a privilege to be here."
},
{
    word: "process",
    meaning: "proses",
    example: "The process is complicated."
},
{
    word: "produce",
    meaning: "menghasilkan",
    example: "This factory produces cars."
},
{
    word: "profession",
    meaning: "profesi",
    example: "What is your profession?"
},
{
    word: "prohibit",
    meaning: "melarang",
    example: "Smoking is prohibited."
},
{
    word: "promote",
    meaning: "mempromosikan",
    example: "They promote healthy living."
},
{
    word: "propose",
    meaning: "mengusulkan",
    example: "I propose a new plan."
},
{
    word: "prosperity",
    meaning: "kemakmuran",
    example: "We strive for prosperity."
},
{
    word: "protest",
    meaning: "protes",
    example: "They held a protest."
},
{
    word: "provide",
    meaning: "menyediakan",
    example: "Please provide more details."
},
{
    word: "publish",
    meaning: "menerbitkan",
    example: "The book was published in 2020."
},
{
    word: "pursue",
    meaning: "mengejar",
    example: "He pursues his dreams."
},
{
    word: "qualify",
    meaning: "memenuhi syarat",
    example: "Do you qualify for the scholarship?"
},
{
    word: "realize",
    meaning: "menyadari",
    example: "I realize my mistake."
},
{
    word: "reason",
    meaning: "alasan",
    example: "Give me a reason."
},
{
    word: "rebel",
    meaning: "memberontak",
    example: "The people rebelled."
},
{
    word: "recognize",
    meaning: "mengenali",
    example: "I recognized her voice."
},
{
    word: "reduction",
    meaning: "pengurangan",
    example: "There is a reduction in prices."
},
{
    word: "refer",
    meaning: "merujuk",
    example: "Refer to the manual."
},
{
    word: "regret",
    meaning: "menyesal",
    example: "I regret my decision."
},
{
    word: "reject",
    meaning: "menolak",
    example: "They rejected the proposal."
},
{
    word: "release",
    meaning: "melepaskan",
    example: "The prisoner was released."
},
{
    word: "relevant",
    meaning: "relevan",
    example: "This information is relevant."
},
{
    word: "reluctant",
    meaning: "enggan",
    example: "She was reluctant to go."
},
{
    word: "rely",
    meaning: "mengandalkan",
    example: "I rely on you."
},
{
    word: "remind",
    meaning: "mengingatkan",
    example: "Please remind me."
},
{
    word: "remote",
    meaning: "terpencil",
    example: "They live in a remote village."
},
{
    word: "remove",
    meaning: "menghapus",
    example: "Remove the stain."
},
{
    word: "replace",
    meaning: "menggantikan",
    example: "We need to replace the battery."
},
{
    word: "represent",
    meaning: "mewakili",
    example: "He represents the company."
},
{
    word: "reputation",
    meaning: "reputasi",
    example: "His reputation is good."
},
{
    word: "rescue",
    meaning: "menyelamatkan",
    example: "The rescue team saved them."
},
{
    word: "resemble",
    meaning: "menyerupai",
    example: "She resembles her mother."
},
{
    word: "resist",
    meaning: "menolak",
    example: "He could not resist the temptation."
},
{
    word: "resolve",
    meaning: "menyelesaikan",
    example: "We need to resolve this issue."
},
{
    word: "respond",
    meaning: "merespons",
    example: "Please respond to my email."
},
{
    word: "restore",
    meaning: "memulihkan",
    example: "We restored the old building."
},
{
    word: "restrict",
    meaning: "membatasi",
    example: "Restrict your screen time."
},
{
    word: "reveal",
    meaning: "mengungkapkan",
    example: "She revealed the secret."
},
{
    word: "revere",
    meaning: "menghormati",
    example: "They revere the ancestors."
},
{
    word: "reward",
    meaning: "hadiah",
    example: "There is a reward for information."
},
{
    word: "rhythm",
    meaning: "irama",
    example: "The rhythm of the music."
},
{
    word: "sacred",
    meaning: "suci",
    example: "This is a sacred place."
},
{
    word: "sacrifice",
    meaning: "pengorbanan",
    example: "He made a great sacrifice."
},
{
    word: "scatter",
    meaning: "menyebar",
    example: "The leaves scattered."
},
{
    word: "secure",
    meaning: "aman",
    example: "We feel secure here."
},
{
    word: "select",
    meaning: "memilih",
    example: "Select your option."
},
{
    word: "sense",
    meaning: "rasa",
    example: "I have a sense of humor."
},
{
    word: "sensitive",
    meaning: "sensitif",
    example: "She is sensitive to criticism."
},
{
    word: "separate",
    meaning: "memisahkan",
    example: "Separate the eggs."
},
{
    word: "settle",
    meaning: "menetap",
    example: "We settled in a new city."
},
{
    word: "shelter",
    meaning: "tempat berlindung",
    example: "They found shelter from the rain."
},
{
    word: "significant",
    meaning: "signifikan",
    example: "This is a significant improvement."
},
{
    word: "sincere",
    meaning: "tulus",
    example: "I offer my sincere apology."
},
{
    word: "situation",
    meaning: "situasi",
    example: "The situation is under control."
},
{
    word: "slight",
    meaning: "sedikit",
    example: "There is a slight difference."
},
{
    word: "smooth",
    meaning: "halus",
    example: "The surface is smooth."
},
{
    word: "sophisticated",
    meaning: "canggih",
    example: "This is a sophisticated device."
},
{
    word: "source",
    meaning: "sumber",
    example: "What is the source?"
},
{
    word: "spare",
    meaning: "cadangan",
    example: "I have a spare key."
},
{
    word: "spirit",
    meaning: "semangat",
    example: "She has a strong spirit."
},
{
    word: "stable",
    meaning: "stabil",
    example: "The price is stable."
},
{
    word: "standpoint",
    meaning: "sudut pandang",
    example: "From my standpoint, it's a good idea."
},
{
    word: "struggle",
    meaning: "perjuangan",
    example: "Life is a struggle."
},
{
    word: "submit",
    meaning: "menyerahkan",
    example: "Submit your application."
},
{
    word: "substance",
    meaning: "zat",
    example: "This substance is toxic."
},
{
    word: "substitute",
    meaning: "pengganti",
    example: "Use honey as a sugar substitute."
},
{
    word: "succeed",
    meaning: "berhasil",
    example: "She succeeded in her exam."
},
{
    word: "suffer",
    meaning: "menderita",
    example: "He suffers from allergies."
},
{
    word: "sufficient",
    meaning: "cukup",
    example: "We have sufficient food."
},
{
    word: "summary",
    meaning: "ringkasan",
    example: "Write a summary."
},
{
    word: "superior",
    meaning: "unggul",
    example: "This product is superior."
},
{
    word: "supply",
    meaning: "pasokan",
    example: "We need more supplies."
},
{
    word: "support",
    meaning: "mendukung",
    example: "I support your decision."
},
{
    word: "suppose",
    meaning: "mengira",
    example: "I suppose you are right."
},
{
    word: "survive",
    meaning: "bertahan hidup",
    example: "They survived the crash."
},
{
    word: "suspect",
    meaning: "mencurigai",
    example: "I suspect he is lying."
},
{
    word: "suspend",
    meaning: "menangguhkan",
    example: "The service was suspended."
},
{
    word: "sustainable",
    meaning: "berkelanjutan",
    example: "We need sustainable development."
},
{
    word: "symbol",
    meaning: "simbol",
    example: "The dove is a symbol of peace."
},
{
    word: "tackle",
    meaning: "menangani",
    example: "We need to tackle this problem."
},
{
    word: "talent",
    meaning: "bakat",
    example: "She has a talent for singing."
},
{
    word: "temporary",
    meaning: "sementara",
    example: "This is a temporary solution."
},
{
    word: "tend",
    meaning: "cenderung",
    example: "He tends to be late."
},
{
    word: "thorough",
    meaning: "menyeluruh",
    example: "Do a thorough investigation."
},
{
    word: "tolerance",
    meaning: "toleransi",
    example: "We need more tolerance."
},
{
    word: "transform",
    meaning: "mengubah",
    example: "This will transform your life."
},
{
    word: "tremendous",
    meaning: "luar biasa",
    example: "It was a tremendous success."
},
{
    word: "trend",
    meaning: "tren",
    example: "This is the latest trend."
},
{
    word: "triumph",
    meaning: "kemenangan",
    example: "It was a great triumph."
},
{
    word: "ultimate",
    meaning: "tertinggi",
    example: "This is the ultimate goal."
},
{
    word: "unique",
    meaning: "unik",
    example: "This design is unique."
},
{
    word: "universal",
    meaning: "universal",
    example: "It is a universal truth."
},
{
    word: "urge",
    meaning: "mendesak",
    example: "I urge you to act."
},
{
    word: "utilize",
    meaning: "memanfaatkan",
    example: "We need to utilize our resources."
},
{
    word: "vary",
    meaning: "bervariasi",
    example: "Prices vary."
},
{
    word: "venture",
    meaning: "usaha berisiko",
    example: "They started a new venture."
},
{
    word: "violate",
    meaning: "melanggar",
    example: "He violated the rules."
},
{
    word: "vision",
    meaning: "visi",
    example: "She has a clear vision."
},
{
    word: "vulnerable",
    meaning: "rentan",
    example: "Children are vulnerable."
},
{
    word: "welfare",
    meaning: "kesejahteraan",
    example: "We care about animal welfare."
},
{
    word: "widespread",
    meaning: "menyebar luas",
    example: "The disease is widespread."
},
{
    word: "withdraw",
    meaning: "menarik kembali",
    example: "He withdrew his money."
},
{
    word: "witness",
    meaning: "saksi",
    example: "She was a witness to the accident."
},
{
    word: "wonder",
    meaning: "keajaiban",
    example: "The world is full of wonders."
},
{
    word: "youth",
    meaning: "masa muda",
    example: "She spent her youth abroad."
},
{
    word: "zone",
    meaning: "zona",
    example: "This is a restricted zone."
},

{
    word: "abolish",
    meaning: "menghapuskan",
    example: "They abolished the old law."
},
{
    word: "abort",
    meaning: "membatalkan",
    example: "We had to abort the mission."
},
{
    word: "abrupt",
    meaning: "mendadak",
    example: "There was an abrupt change."
},
{
    word: "absent",
    meaning: "tidak hadir",
    example: "He was absent from class."
},
{
    word: "absolute",
    meaning: "mutlak",
    example: "This is absolute truth."
},
{
    word: "absorb",
    meaning: "menyerap",
    example: "The sponge absorbs water."
},
{
    word: "abstract",
    meaning: "abstrak",
    example: "Love is an abstract concept."
},
{
    word: "absurd",
    meaning: "mustahil",
    example: "That idea is absurd."
},
{
    word: "abundant",
    meaning: "berlimpah",
    example: "We have abundant food."
},
{
    word: "abuse",
    meaning: "penyalahgunaan",
    example: "Drug abuse is harmful."
},
{
    word: "academic",
    meaning: "akademis",
    example: "He has an academic background."
},
{
    word: "accelerate",
    meaning: "mempercepat",
    example: "The car accelerated quickly."
},
{
    word: "access",
    meaning: "akses",
    example: "I have access to the file."
},
{
    word: "accommodate",
    meaning: "menampung",
    example: "This room accommodates 20 people."
},
{
    word: "accompany",
    meaning: "menemani",
    example: "She accompanied me to the airport."
},
{
    word: "accomplish",
    meaning: "mencapai",
    example: "We accomplished our goal."
},
{
    word: "accumulate",
    meaning: "mengumpulkan",
    example: "Dust accumulates over time."
},
{
    word: "accuracy",
    meaning: "ketepatan",
    example: "Accuracy is important."
},
{
    word: "accuse",
    meaning: "menuduh",
    example: "They accused him of stealing."
},
{
    word: "achieve",
    meaning: "meraih",
    example: "She achieved her dream."
},
{
    word: "acknowledge",
    meaning: "mengakui",
    example: "I acknowledge your help."
},
{
    word: "acquire",
    meaning: "memperoleh",
    example: "He acquired new skills."
},
{
    word: "adapt",
    meaning: "beradaptasi",
    example: "We must adapt to change."
},
{
    word: "adjust",
    meaning: "menyesuaikan",
    example: "Adjust the temperature."
},
{
    word: "administer",
    meaning: "mengelola",
    example: "She administers the hospital."
},
{
    word: "admire",
    meaning: "mengagumi",
    example: "I admire your talent."
},
{
    word: "admit",
    meaning: "mengakui",
    example: "He admitted his fault."
},
{
    word: "adopt",
    meaning: "mengadopsi",
    example: "They adopted a puppy."
},
{
    word: "advance",
    meaning: "maju",
    example: "Technology advances daily."
},
{
    word: "advantage",
    meaning: "keuntungan",
    example: "This has many advantages."
},
{
    word: "adventure",
    meaning: "petualangan",
    example: "Life is an adventure."
},
{
    word: "advertise",
    meaning: "mengiklankan",
    example: "They advertise their product."
},
{
    word: "advise",
    meaning: "menasihati",
    example: "I advise you to rest."
},
{
    word: "advocate",
    meaning: "menganjurkan",
    example: "He advocates for peace."
},
{
    word: "affair",
    meaning: "urusan",
    example: "That is my affair."
},
{
    word: "affect",
    meaning: "memengaruhi",
    example: "This affects us all."
},
{
    word: "affection",
    meaning: "kasih sayang",
    example: "She shows affection."
},
{
    word: "afford",
    meaning: "mampu",
    example: "I can't afford this."
},
{
    word: "agenda",
    meaning: "agenda",
    example: "What's on the agenda?"
},
{
    word: "aggressive",
    meaning: "agresif",
    example: "He is too aggressive."
},
{
    word: "agitate",
    meaning: "menggerakkan",
    example: "The news agitated him."
},
{
    word: "alarm",
    meaning: "alarm",
    example: "The alarm went off."
},
{
    word: "alien",
    meaning: "asing",
    example: "That is alien to me."
},
{
    word: "allege",
    meaning: "mengklaim",
    example: "He alleged fraud."
},
{
    word: "alleviate",
    meaning: "meringankan",
    example: "This medicine alleviates pain."
},
{
    word: "allocate",
    meaning: "mengalokasikan",
    example: "Allocate funds for education."
},
{
    word: "alter",
    meaning: "mengubah",
    example: "She altered her dress."
},
{
    word: "alternate",
    meaning: "bergantian",
    example: "We alternate turns."
},
{
    word: "amaze",
    meaning: "mengagumkan",
    example: "The view amazed us."
},
{
    word: "ambassador",
    meaning: "duta besar",
    example: "The ambassador spoke."
},
{
    word: "ambition",
    meaning: "ambisi",
    example: "His ambition is to be rich."
},
{
    word: "amend",
    meaning: "memperbaiki",
    example: "They amended the law."
},
{
    word: "ample",
    meaning: "cukup",
    example: "We have ample time."
},
{
    word: "amuse",
    meaning: "menghibur",
    example: "The clown amused the kids."
},
{
    word: "analyze",
    meaning: "menganalisis",
    example: "Analyze the data."
},
{
    word: "ancestor",
    meaning: "nenek moyang",
    example: "Our ancestors were wise."
},
{
    word: "annual",
    meaning: "tahunan",
    example: "We have an annual event."
},
{
    word: "anticipate",
    meaning: "mengantisipasi",
    example: "I anticipate good news."
},
{
    word: "anxiety",
    meaning: "kecemasan",
    example: "She felt anxiety."
},
{
    word: "apparent",
    meaning: "jelas",
    example: "It is apparent."
},
{
    word: "appeal",
    meaning: "daya tarik",
    example: "This has wide appeal."
},
{
    word: "appetite",
    meaning: "nafsu makan",
    example: "I have a big appetite."
},
{
    word: "applaud",
    meaning: "bertepuk tangan",
    example: "Everyone applauded."
},
{
    word: "apply",
    meaning: "melamar",
    example: "I will apply for the job."
},
{
    word: "appoint",
    meaning: "menunjuk",
    example: "They appointed a manager."
},
{
    word: "appreciate",
    meaning: "menghargai",
    example: "I appreciate your help."
},
{
    word: "approach",
    meaning: "pendekatan",
    example: "We need a new approach."
},
{
    word: "appropriate",
    meaning: "tepat",
    example: "This is appropriate."
},
{
    word: "approve",
    meaning: "menyetujui",
    example: "The boss approved."
},
{
    word: "approximately",
    meaning: "kira-kira",
    example: "It costs approximately $100."
},
{
    word: "arise",
    meaning: "timbul",
    example: "Problems arise."
},
{
    word: "arrange",
    meaning: "mengatur",
    example: "Arrange the chairs."
},
{
    word: "arrest",
    meaning: "menangkap",
    example: "The police arrested him."
},
{
    word: "artificial",
    meaning: "buatan",
    example: "Artificial flowers."
},
{
    word: "assemble",
    meaning: "merakit",
    example: "Assemble the furniture."
},
{
    word: "assess",
    meaning: "menilai",
    example: "Assess the situation."
},
{
    word: "assign",
    meaning: "menugaskan",
    example: "She assigned the task."
},
{
    word: "assist",
    meaning: "membantu",
    example: "I will assist you."
},
{
    word: "assume",
    meaning: "menganggap",
    example: "I assume you're right."
},
{
    word: "attach",
    meaning: "melampirkan",
    example: "Attach the file."
},
{
    word: "attain",
    meaning: "mencapai",
    example: "He attained success."
},
{
    word: "attempt",
    meaning: "mencoba",
    example: "She attempted it."
},
{
    word: "attend",
    meaning: "menghadiri",
    example: "I attended the meeting."
},
{
    word: "attitude",
    meaning: "sikap",
    example: "She has a good attitude."
},
{
    word: "attorney",
    meaning: "pengacara",
    example: "The attorney defended him."
},
{
    word: "attract",
    meaning: "menarik",
    example: "Magnets attract iron."
},
{
    word: "audience",
    meaning: "penonton",
    example: "The audience clapped."
},
{
    word: "author",
    meaning: "penulis",
    example: "The author is famous."
},
{
    word: "authority",
    meaning: "otoritas",
    example: "She has authority."
},
{
    word: "automatic",
    meaning: "otomatis",
    example: "It is automatic."
},
{
    word: "available",
    meaning: "tersedia",
    example: "Is it available?"
},
{
    word: "avoid",
    meaning: "menghindari",
    example: "Avoid the traffic."
},
{
    word: "await",
    meaning: "menunggu",
    example: "We await your reply."
},
{
    word: "aware",
    meaning: "sadar",
    example: "I am aware."
},
{
    word: "awkward",
    meaning: "canggung",
    example: "It was awkward."
},
{
    word: "bargain",
    meaning: "tawar-menawar",
    example: "We bargained."
},
{
    word: "barrier",
    meaning: "hambatan",
    example: "Language barrier."
},
{
    word: "behalf",
    meaning: "atas nama",
    example: "On behalf of my team."
},
{
    word: "behavior",
    meaning: "perilaku",
    example: "Good behavior."
},
{
    word: "belong",
    meaning: "milik",
    example: "This belongs to me."
},
{
    word: "beneficial",
    meaning: "bermanfaat",
    example: "Exercise is beneficial."
},
{
    word: "betray",
    meaning: "mengkhianati",
    example: "He betrayed his friend."
},
{
    word: "blame",
    meaning: "menyalahkan",
    example: "Don't blame me."
},
{
    word: "boost",
    meaning: "meningkatkan",
    example: "Boost your energy."
},
{
    word: "bother",
    meaning: "mengganggu",
    example: "Don't bother me."
},
{
    word: "boundary",
    meaning: "batas",
    example: "Respect boundaries."
},
{
    word: "brief",
    meaning: "singkat",
    example: "Give a brief answer."
},
{
    word: "brilliant",
    meaning: "cemerlang",
    example: "Brilliant idea."
},
{
    word: "budget",
    meaning: "anggaran",
    example: "We have a budget."
},
{
    word: "calculate",
    meaning: "menghitung",
    example: "Calculate the total."
},
{
    word: "cancel",
    meaning: "membatalkan",
    example: "Cancel the meeting."
},
{
    word: "capable",
    meaning: "mampu",
    example: "He is capable."
},
{
    word: "capture",
    meaning: "menangkap",
    example: "Capture the moment."
},
{
    word: "celebrate",
    meaning: "merayakan",
    example: "We celebrate."
},
{
    word: "challenge",
    meaning: "tantangan",
    example: "This is a challenge."
},
{
    word: "character",
    meaning: "karakter",
    example: "She has character."
},
{
    word: "circumstance",
    meaning: "keadaan",
    example: "In these circumstances."
},
{
    word: "civil",
    meaning: "sipil",
    example: "Civil rights."
},
{
    word: "collapse",
    meaning: "runtuh",
    example: "The bridge collapsed."
},
{
    word: "combat",
    meaning: "pertempuran",
    example: "They combat crime."
},
{
    word: "combine",
    meaning: "menggabungkan",
    example: "Combine them."
},
{
    word: "comfort",
    meaning: "kenyamanan",
    example: "I need comfort."
},
{
    word: "command",
    meaning: "perintah",
    example: "He gave a command."
},
{
    word: "commit",
    meaning: "melakukan",
    example: "Commit a crime."
},
{
    word: "communicate",
    meaning: "berkomunikasi",
    example: "We communicate."
},
{
    word: "companion",
    meaning: "teman",
    example: "A good companion."
},
{
    word: "compare",
    meaning: "membandingkan",
    example: "Compare prices."
},
{
    word: "compel",
    meaning: "memaksa",
    example: "I feel compelled."
},
{
    word: "compete",
    meaning: "bersaing",
    example: "They compete."
},
{
    word: "complain",
    meaning: "mengeluh",
    example: "She complained."
},
{
    word: "complete",
    meaning: "menyelesaikan",
    example: "Complete the task."
},
{
    word: "complex",
    meaning: "rumit",
    example: "This is complex."
},
{
    word: "complicate",
    meaning: "mempersulit",
    example: "Don't complicate it."
},
{
    word: "comply",
    meaning: "mematuhi",
    example: "Comply with rules."
},
{
    word: "compose",
    meaning: "menyusun",
    example: "Compose a song."
},
{
    word: "comprehension",
    meaning: "pemahaman",
    example: "Reading comprehension."
},
{
    word: "comprise",
    meaning: "terdiri dari",
    example: "It comprises 5 parts."
},
{
    word: "concentrate",
    meaning: "berkonsentrasi",
    example: "Concentrate on work."
},
{
    word: "concept",
    meaning: "konsep",
    example: "New concept."
},
{
    word: "concern",
    meaning: "kekhawatiran",
    example: "I have a concern."
},
{
    word: "conclude",
    meaning: "menyimpulkan",
    example: "I conclude."
},
{
    word: "condition",
    meaning: "kondisi",
    example: "Good condition."
},
{
    word: "conduct",
    meaning: "melakukan",
    example: "Conduct an experiment."
},
{
    word: "conference",
    meaning: "konferensi",
    example: "We attended a conference."
},
{
    word: "confess",
    meaning: "mengaku",
    example: "He confessed."
},
{
    word: "confidence",
    meaning: "kepercayaan diri",
    example: "She has confidence."
},
{
    word: "confirm",
    meaning: "mengkonfirmasi",
    example: "Confirm your attendance."
},
{
    word: "conflict",
    meaning: "konflik",
    example: "They have conflict."
},
{
    word: "confuse",
    meaning: "membingungkan",
    example: "This confuses me."
},
{
    word: "conquer",
    meaning: "menaklukkan",
    example: "They conquered."
},
{
    word: "conscience",
    meaning: "hati nurani",
    example: "Follow your conscience."
},
{
    word: "conscious",
    meaning: "sadar",
    example: "He is conscious."
},
{
    word: "consent",
    meaning: "persetujuan",
    example: "I need your consent."
},
{
    word: "consequence",
    meaning: "konsekuensi",
    example: "Think of consequences."
},
{
    word: "conservation",
    meaning: "konservasi",
    example: "Wildlife conservation."
},
{
    word: "consider",
    meaning: "mempertimbangkan",
    example: "Consider my offer."
},
{
    word: "consistent",
    meaning: "konsisten",
    example: "Be consistent."
},
{
    word: "consult",
    meaning: "berkonsultasi",
    example: "Consult a doctor."
},
{
    word: "consume",
    meaning: "mengonsumsi",
    example: "We consume food."
},
{
    word: "contain",
    meaning: "berisi",
    example: "It contains water."
},
{
    word: "contaminate",
    meaning: "mencemari",
    example: "The water is contaminated."
},
{
    word: "contemplate",
    meaning: "merenungkan",
    example: "He contemplated."
},
{
    word: "contemporary",
    meaning: "kontemporer",
    example: "Contemporary art."
},
{
    word: "contend",
    meaning: "berpendapat",
    example: "He contends."
},
{
    word: "contest",
    meaning: "lomba",
    example: "We joined a contest."
},
{
    word: "continue",
    meaning: "melanjutkan",
    example: "Continue reading."
},
{
    word: "contract",
    meaning: "kontrak",
    example: "Sign the contract."
},
{
    word: "contribute",
    meaning: "berkontribusi",
    example: "Contribute to the project."
},
{
    word: "controversy",
    meaning: "kontroversi",
    example: "This causes controversy."
},
{
    word: "convenient",
    meaning: "nyaman",
    example: "It is convenient."
},
{
    word: "convince",
    meaning: "meyakinkan",
    example: "I convinced him."
},
{
    word: "cooperate",
    meaning: "bekerja sama",
    example: "We cooperate."
},
{
    word: "correspond",
    meaning: "berkorespondensi",
    example: "We correspond by email."
},
{
    word: "corrupt",
    meaning: "korupsi",
    example: "He is corrupt."
},
{
    word: "count",
    meaning: "menghitung",
    example: "Count the money."
},
{
    word: "courage",
    meaning: "keberanian",
    example: "Show courage."
},
{
    word: "courtesy",
    meaning: "kesopanan",
    example: "Courtesy is important."
},
{
    word: "crazy",
    meaning: "gila",
    example: "That is crazy."
},
{
    word: "create",
    meaning: "menciptakan",
    example: "Create something."
},
{
    word: "credible",
    meaning: "kredibel",
    example: "He is credible."
},
{
    word: "crisis",
    meaning: "krisis",
    example: "We face a crisis."
},
{
    word: "criteria",
    meaning: "kriteria",
    example: "Meet the criteria."
},
{
    word: "criticize",
    meaning: "mengkritik",
    example: "Don't criticize."
},
{
    word: "crucial",
    meaning: "penting",
    example: "This is crucial."
},
{
    word: "curious",
    meaning: "ingin tahu",
    example: "I am curious."
},
{
    word: "damage",
    meaning: "kerusakan",
    example: "The storm caused damage."
},
{
    word: "dare",
    meaning: "berani",
    example: "I dare you."
},
{
    word: "deadline",
    meaning: "tenggat",
    example: "The deadline is tomorrow."
},
{
    word: "decline",
    meaning: "menurun",
    example: "Prices declined."
},
{
    word: "decorate",
    meaning: "menghias",
    example: "Decorate the room."
},
{
    word: "decrease",
    meaning: "menurun",
    example: "Decrease the speed."
},
{
    word: "dedicate",
    meaning: "mendedikasikan",
    example: "He dedicated his life."
},
{
    word: "defeat",
    meaning: "kekalahan",
    example: "They suffered defeat."
},
{
    word: "defend",
    meaning: "mempertahankan",
    example: "Defend your country."
},
{
    word: "define",
    meaning: "mendefinisikan",
    example: "Define the word."
},
{
    word: "defy",
    meaning: "menentang",
    example: "He defied the rules."
},
{
    word: "delay",
    meaning: "menunda",
    example: "Delay the meeting."
},
{
    word: "deliberate",
    meaning: "disengaja",
    example: "It was deliberate."
},
{
    word: "deliver",
    meaning: "mengantarkan",
    example: "Deliver the package."
},
{
    word: "demand",
    meaning: "permintaan",
    example: "High demand."
},
{
    word: "demonstrate",
    meaning: "mendemonstrasikan",
    example: "Demonstrate how."
},
{
    word: "deny",
    meaning: "menyangkal",
    example: "He denied it."
},
{
    word: "depend",
    meaning: "bergantung",
    example: "It depends."
},
{
    word: "deprive",
    meaning: "merampas",
    example: "Don't deprive him."
},
{
    word: "derive",
    meaning: "berasal",
    example: "This derives from Latin."
},
{
    word: "describe",
    meaning: "menggambarkan",
    example: "Describe the scene."
},
{
    word: "deserve",
    meaning: "layak",
    example: "You deserve it."
},
{
    word: "desire",
    meaning: "keinginan",
    example: "I have a desire."
},
{
    word: "desperate",
    meaning: "putus asa",
    example: "He is desperate."
},
{
    word: "destroy",
    meaning: "menghancurkan",
    example: "The fire destroyed it."
},
{
    word: "detect",
    meaning: "mendeteksi",
    example: "Detect the problem."
},
{
    word: "determine",
    meaning: "menentukan",
    example: "Determine the cause."
},
{
    word: "devastate",
    meaning: "menghancurkan",
    example: "The earthquake devastated."
},
{
    word: "devote",
    meaning: "mengabdikan",
    example: "She devoted her time."
},
{
    word: "differentiate",
    meaning: "membedakan",
    example: "Differentiate the colors."
},
{
    word: "dignity",
    meaning: "martabat",
    example: "Human dignity."
},
{
    word: "dilemma",
    meaning: "dilema",
    example: "I face a dilemma."
},
{
    word: "dimension",
    meaning: "dimensi",
    example: "Add another dimension."
},
{
    word: "diminish",
    meaning: "berkurang",
    example: "The pain diminished."
},
{
    word: "diplomat",
    meaning: "diplomat",
    example: "He is a diplomat."
},
{
    word: "direct",
    meaning: "langsung",
    example: "Direct instructions."
},
{
    word: "disappear",
    meaning: "menghilang",
    example: "The sun disappeared."
},
{
    word: "disappoint",
    meaning: "mengecewakan",
    example: "Don't disappoint me."
},
{
    word: "discipline",
    meaning: "disiplin",
    example: "He lacks discipline."
},
{
    word: "disclose",
    meaning: "mengungkapkan",
    example: "Disclose the truth."
},
{
    word: "discount",
    meaning: "diskon",
    example: "Get a discount."
},
{
    word: "discourage",
    meaning: "menurunkan semangat",
    example: "Don't discourage him."
},
{
    word: "discover",
    meaning: "menemukan",
    example: "Discover new things."
},
{
    word: "discuss",
    meaning: "mendiskusikan",
    example: "Let's discuss it."
},
{
    word: "disgust",
    meaning: "jijik",
    example: "It disgusts me."
},
{
    word: "dismiss",
    meaning: "memberhentikan",
    example: "He was dismissed."
},
{
    word: "disorder",
    meaning: "gangguan",
    example: "Mental disorder."
},
{
    word: "displace",
    meaning: "memindahkan",
    example: "War displaced many."
},
{
    word: "display",
    meaning: "menampilkan",
    example: "Display the results."
},
{
    word: "dispose",
    meaning: "membuang",
    example: "Dispose of waste."
},
{
    word: "dispute",
    meaning: "sengketa",
    example: "They have a dispute."
},
{
    word: "distance",
    meaning: "jarak",
    example: "Keep your distance."
},
{
    word: "distinguish",
    meaning: "membedakan",
    example: "Distinguish right from wrong."
},
{
    word: "distort",
    meaning: "memutarbalikkan",
    example: "Don't distort the facts."
},
{
    word: "distribute",
    meaning: "mendistribusikan",
    example: "Distribute the flyers."
},
{
    word: "disturb",
    meaning: "mengganggu",
    example: "Don't disturb him."
},
{
    word: "diversity",
    meaning: "keberagaman",
    example: "Celebrate diversity."
},
{
    word: "document",
    meaning: "dokumen",
    example: "Sign the document."
},
{
    word: "domestic",
    meaning: "domestik",
    example: "Domestic issues."
},
{
    word: "dominate",
    meaning: "mendominasi",
    example: "He dominates the game."
},
{
    word: "dose",
    meaning: "dosis",
    example: "Take one dose."
},
{
    word: "double",
    meaning: "ganda",
    example: "Double the amount."
},
{
    word: "doubt",
    meaning: "keraguan",
    example: "I have doubts."
},
{
    word: "dramatic",
    meaning: "dramatis",
    example: "A dramatic change."
},
{
    word: "drawback",
    meaning: "kelemahan",
    example: "Every plan has drawbacks."
},
{
    word: "dread",
    meaning: "ketakutan",
    example: "I dread the exam."
},
{
    word: "drift",
    meaning: "melayang",
    example: "The boat drifted."
},
{
    word: "durable",
    meaning: "tahan lama",
    example: "This is durable."
},
{
    word: "dwell",
    meaning: "tinggal",
    example: "He dwells in the countryside."
},
{
    word: "earnest",
    meaning: "sungguh-sungguh",
    example: "He is earnest."
},
{
    word: "ease",
    meaning: "kemudahan",
    example: "Do it with ease."
},
{
    word: "economy",
    meaning: "ekonomi",
    example: "The economy is growing."
},
{
    word: "educate",
    meaning: "mendidik",
    example: "Educate the youth."
},
{
    word: "efficient",
    meaning: "efisien",
    example: "It is efficient."
},
{
    word: "effort",
    meaning: "usaha",
    example: "Make an effort."
},
{
    word: "elaborate",
    meaning: "memerinci",
    example: "Elaborate your answer."
},
{
    word: "elegant",
    meaning: "elegan",
    example: "She is elegant."
},
{
    word: "eliminate",
    meaning: "menghilangkan",
    example: "Eliminate the problem."
},
{
    word: "embrace",
    meaning: "merangkul",
    example: "Embrace the change."
},
{
    word: "emerge",
    meaning: "muncul",
    example: "New evidence emerged."
},
{
    word: "emotion",
    meaning: "emosi",
    example: "Show emotion."
},
{
    word: "emphasis",
    meaning: "penekanan",
    example: "Put emphasis on safety."
},
{
    word: "empower",
    meaning: "memberdayakan",
    example: "Empower women."
},
{
    word: "enable",
    meaning: "memungkinkan",
    example: "It enables us to work."
},
{
    word: "encounter",
    meaning: "bertemu",
    example: "I encountered a problem."
},
{
    word: "encourage",
    meaning: "mendorong",
    example: "Encourage your friends."
},
{
    word: "endure",
    meaning: "bertahan",
    example: "Endure the pain."
},
{
    word: "energy",
    meaning: "energi",
    example: "Save energy."
},
{
    word: "engage",
    meaning: "melibatkan",
    example: "Engage the audience."
},
{
    word: "enhance",
    meaning: "meningkatkan",
    example: "Enhance your skills."
},
{
    word: "enormous",
    meaning: "sangat besar",
    example: "Enormous amount."
},
{
    word: "ensure",
    meaning: "memastikan",
    example: "Ensure safety."
},
{
    word: "enterprise",
    meaning: "perusahaan",
    example: "A new enterprise."
},
{
    word: "enthusiasm",
    meaning: "antusiasme",
    example: "She showed enthusiasm."
},
{
    word: "entire",
    meaning: "seluruh",
    example: "The entire team."
},
{
    word: "entitle",
    meaning: "berhak",
    example: "You are entitled."
},
{
    word: "environment",
    meaning: "lingkungan",
    example: "Protect the environment."
},
{
    word: "equal",
    meaning: "sama",
    example: "Equal rights."
},
{
    word: "equip",
    meaning: "melengkapi",
    example: "Equip yourself."
},
{
    word: "equivalent",
    meaning: "setara",
    example: "This is equivalent."
},
{
    word: "erode",
    meaning: "mengikis",
    example: "Water erodes rocks."
},
{
    word: "error",
    meaning: "kesalahan",
    example: "There is an error."
},
{
    word: "escape",
    meaning: "melarikan diri",
    example: "He escaped."
},
{
    word: "essential",
    meaning: "penting",
    example: "Water is essential."
},
{
    word: "establish",
    meaning: "mendirikan",
    example: "They established a company."
},
{
    word: "estimate",
    meaning: "perkiraan",
    example: "Give an estimate."
},
{
    word: "evaluate",
    meaning: "mengevaluasi",
    example: "Evaluate the results."
},
{
    word: "eventually",
    meaning: "akhirnya",
    example: "Eventually, we arrived."
},
{
    word: "evidence",
    meaning: "bukti",
    example: "There is evidence."
},
{
    word: "evolve",
    meaning: "berevolusi",
    example: "Species evolve."
},
{
    word: "examine",
    meaning: "memeriksa",
    example: "Examine the patient."
},
{
    word: "exceed",
    meaning: "melampaui",
    example: "It exceeded our budget."
},
{
    word: "exception",
    meaning: "pengecualian",
    example: "No exception."
},
{
    word: "exchange",
    meaning: "pertukaran",
    example: "Exchange gifts."
},
{
    word: "exclude",
    meaning: "mengecualikan",
    example: "Exclude these items."
},
{
    word: "execute",
    meaning: "melaksanakan",
    example: "Execute the plan."
},
{
    word: "exhaust",
    meaning: "menghabiskan",
    example: "It exhausted us."
},
{
    word: "exhibit",
    meaning: "memamerkan",
    example: "Exhibit artifacts."
},
{
    word: "expand",
    meaning: "memperluas",
    example: "Expand the business."
},
{
    word: "expose",
    meaning: "memaparkan",
    example: "Don't expose yourself."
},
{
    word: "extend",
    meaning: "memperpanjang",
    example: "Extend the deadline."
},
{
    word: "extraordinary",
    meaning: "luar biasa",
    example: "Extraordinary talent."
},
{
    word: "fabric",
    meaning: "kain",
    example: "Soft fabric."
},
{
    word: "fascinate",
    meaning: "memukau",
    example: "It fascinated me."
},
{
    word: "fatal",
    meaning: "fatal",
    example: "Fatal accident."
},
{
    word: "flourish",
    meaning: "berkembang",
    example: "The garden flourished."
},
{
    word: "forbid",
    meaning: "melarang",
    example: "I forbid it."
},
{
    word: "forecast",
    meaning: "prakiraan",
    example: "Weather forecast."
},
{
    word: "fortune",
    meaning: "keberuntungan",
    example: "He made a fortune."
},
{
    word: "fragile",
    meaning: "rapuh",
    example: "Fragile item."
},
{
    word: "freedom",
    meaning: "kebebasan",
    example: "We want freedom."
},
{
    word: "frequent",
    meaning: "sering",
    example: "Frequent trips."
},
{
    word: "frustrate",
    meaning: "mengecewakan",
    example: "It frustrated me."
},
{
    word: "generate",
    meaning: "menghasilkan",
    example: "Generate electricity."
},
{
    word: "genuine",
    meaning: "asli",
    example: "Genuine product."
},
{
    word: "gratitude",
    meaning: "rasa syukur",
    example: "Express gratitude."
},
{
    word: "guarantee",
    meaning: "jaminan",
    example: "We guarantee it."
},
{
    word: "guilty",
    meaning: "bersalah",
    example: "He is guilty."
},
{
    word: "harmony",
    meaning: "harmoni",
    example: "Live in harmony."
},
{
    word: "harsh",
    meaning: "keras",
    example: "Harsh punishment."
},
{
    word: "hesitate",
    meaning: "ragu-ragu",
    example: "Don't hesitate."
},
{
    word: "honor",
    meaning: "kehormatan",
    example: "It is an honor."
},
{
    word: "hostile",
    meaning: "bermusuhan",
    example: "They are hostile."
},
{
    word: "humble",
    meaning: "rendah hati",
    example: "She is humble."
},
{
    word: "identical",
    meaning: "identik",
    example: "They are identical."
},
{
    word: "ignorant",
    meaning: "bodoh",
    example: "He is ignorant."
},
{
    word: "illustrate",
    meaning: "mengilustrasikan",
    example: "Illustrate the point."
},
{
    word: "immigrate",
    meaning: "berimigrasi",
    example: "They immigrated."
},
{
    word: "impact",
    meaning: "dampak",
    example: "The impact was huge."
},
{
    word: "implement",
    meaning: "mengimplementasikan",
    example: "Implement the plan."
},
{
    word: "imply",
    meaning: "menyiratkan",
    example: "What do you imply?"
},
{
    word: "impress",
    meaning: "mengagumkan",
    example: "It impressed me."
},
{
    word: "incident",
    meaning: "insiden",
    example: "Minor incident."
},
{
    word: "include",
    meaning: "termasuk",
    example: "Include tax."
},
{
    word: "indicate",
    meaning: "menunjukkan",
    example: "The sign indicates."
},
{
    word: "individual",
    meaning: "individu",
    example: "Every individual."
},
{
    word: "inevitable",
    meaning: "tidak terhindarkan",
    example: "Change is inevitable."
},
{
    word: "influence",
    meaning: "pengaruh",
    example: "Her influence is strong."
},
{
    word: "innocent",
    meaning: "tidak bersalah",
    example: "She is innocent."
},
{
    word: "innovate",
    meaning: "berinovasi",
    example: "We need to innovate."
},
{
    word: "insist",
    meaning: "bersikeras",
    example: "He insisted."
},
{
    word: "inspect",
    meaning: "memeriksa",
    example: "Inspect the goods."
},
{
    word: "inspire",
    meaning: "menginspirasi",
    example: "It inspired me."
},
{
    word: "integrate",
    meaning: "mengintegrasikan",
    example: "Integrate the systems."
},
{
    word: "intelligent",
    meaning: "cerdas",
    example: "Dolphins are intelligent."
},
{
    word: "intend",
    meaning: "berniat",
    example: "I intend to go."
},
{
    word: "interact",
    meaning: "berinteraksi",
    example: "They interact well."
},
{
    word: "interest",
    meaning: "minat",
    example: "I have interest."
},
{
    word: "interpret",
    meaning: "menafsirkan",
    example: "Interpret this."
},
{
    word: "investigate",
    meaning: "menyelidiki",
    example: "Investigate the crime."
},
{
    word: "isolate",
    meaning: "mengisolasi",
    example: "Isolate the patient."
},
{
    word: "issue",
    meaning: "isu",
    example: "Major issue."
},
{
    word: "justice",
    meaning: "keadilan",
    example: "We seek justice."
},
{
    word: "justify",
    meaning: "membenarkan",
    example: "Justify your actions."
},
{
    word: "landscape",
    meaning: "lanskap",
    example: "Beautiful landscape."
},
{
    word: "launch",
    meaning: "meluncurkan",
    example: "Launch a product."
},
{
    word: "liberal",
    meaning: "liberal",
    example: "Liberal views."
},
{
    word: "limit",
    meaning: "batasan",
    example: "There is a limit."
},
{
    word: "logic",
    meaning: "logika",
    example: "That is logical."
},
{
    word: "luxury",
    meaning: "kemewahan",
    example: "Live in luxury."
},
{
    word: "maintain",
    meaning: "mempertahankan",
    example: "Maintain the standard."
},
{
    word: "major",
    meaning: "utama",
    example: "Major problem."
},
{
    word: "manage",
    meaning: "mengelola",
    example: "Manage the team."
},
{
    word: "mature",
    meaning: "matang",
    example: "He is mature."
},
{
    word: "maximum",
    meaning: "maksimum",
    example: "Maximum speed."
},
{
    word: "minimum",
    meaning: "minimum",
    example: "Minimum age."
},
{
    word: "minor",
    meaning: "kecil",
    example: "Minor issue."
},
{
    word: "misunderstand",
    meaning: "salah paham",
    example: "I misunderstood."
},
{
    word: "modify",
    meaning: "memodifikasi",
    example: "Modify the plan."
},
{
    word: "monitor",
    meaning: "memantau",
    example: "Monitor the patient."
},
{
    word: "moral",
    meaning: "moral",
    example: "Moral values."
},
{
    word: "motivate",
    meaning: "memotivasi",
    example: "Motivate the team."
},
{
    word: "mutual",
    meaning: "saling",
    example: "Mutual respect."
},
{
    word: "negative",
    meaning: "negatif",
    example: "Negative attitude."
},
{
    word: "negotiate",
    meaning: "bernegosiasi",
    example: "Negotiate the price."
},
{
    word: "neutral",
    meaning: "netral",
    example: "Stay neutral."
},
{
    word: "notion",
    meaning: "gagasan",
    example: "I have a notion."
},
{
    word: "obstacle",
    meaning: "hambatan",
    example: "We faced obstacles."
},
{
    word: "obtain",
    meaning: "memperoleh",
    example: "Obtain a degree."
},
{
    word: "occupy",
    meaning: "menempati",
    example: "They occupy the building."
},
{
    word: "offend",
    meaning: "menyinggung",
    example: "I didn't mean to offend."
},
{
    word: "oppose",
    meaning: "menentang",
    example: "Many oppose."
},
{
    word: "optimistic",
    meaning: "optimis",
    example: "I am optimistic."
},
{
    word: "originate",
    meaning: "berasal",
    example: "It originated from him."
},
{
    word: "overcome",
    meaning: "mengatasi",
    example: "She overcame her fears."
},
{
    word: "overlook",
    meaning: "mengabaikan",
    example: "Don't overlook it."
},
{
    word: "ownership",
    meaning: "kepemilikan",
    example: "Transfer ownership."
},
{
    word: "participate",
    meaning: "berpartisipasi",
    example: "Participate in the event."
},
{
    word: "positive",
    meaning: "positif",
    example: "Stay positive."
},
{
    word: "possess",
    meaning: "memiliki",
    example: "He possesses wealth."
},
{
    word: "potential",
    meaning: "potensi",
    example: "Great potential."
},
{
    word: "poverty",
    meaning: "kemiskinan",
    example: "Fight poverty."
},
{
    word: "pray",
    meaning: "berdoa",
    example: "They pray."
},
{
    word: "predict",
    meaning: "memprediksi",
    example: "Predict the weather."
},
{
    word: "prefer",
    meaning: "lebih suka",
    example: "I prefer tea."
},
{
    word: "prejudice",
    meaning: "prasangka",
    example: "Prejudice is harmful."
},
{
    word: "preserve",
    meaning: "melestarikan",
    example: "Preserve nature."
},
{
    word: "prevent",
    meaning: "mencegah",
    example: "Prevent accidents."
},
{
    word: "previous",
    meaning: "sebelumnya",
    example: "Previous day."
},
{
    word: "principle",
    meaning: "prinsip",
    example: "Strong principles."
},
{
    word: "priority",
    meaning: "prioritas",
    example: "Safety is priority."
},
{
    word: "privilege",
    meaning: "hak istimewa",
    example: "It is a privilege."
},
{
    word: "process",
    meaning: "proses",
    example: "The process is long."
},
{
    word: "produce",
    meaning: "menghasilkan",
    example: "Produce goods."
},
{
    word: "profession",
    meaning: "profesi",
    example: "What is your profession?"
},
{
    word: "prohibit",
    meaning: "melarang",
    example: "Smoking is prohibited."
},
{
    word: "promote",
    meaning: "mempromosikan",
    example: "Promote health."
},
{
    word: "propose",
    meaning: "mengusulkan",
    example: "I propose a plan."
},
{
    word: "prosperity",
    meaning: "kemakmuran",
    example: "We strive for prosperity."
},
{
    word: "protest",
    meaning: "protes",
    example: "They held a protest."
},
{
    word: "provide",
    meaning: "menyediakan",
    example: "Provide details."
},
{
    word: "publish",
    meaning: "menerbitkan",
    example: "Publish the book."
},
{
    word: "pursue",
    meaning: "mengejar",
    example: "Pursue your dreams."
},
{
    word: "qualify",
    meaning: "memenuhi syarat",
    example: "Do you qualify?"
},
{
    word: "realize",
    meaning: "menyadari",
    example: "I realize my mistake."
},
{
    word: "reason",
    meaning: "alasan",
    example: "Give a reason."
},
{
    word: "rebel",
    meaning: "memberontak",
    example: "The people rebelled."
},
{
    word: "recognize",
    meaning: "mengenali",
    example: "I recognized her."
},
{
    word: "reduction",
    meaning: "pengurangan",
    example: "Price reduction."
},
{
    word: "refer",
    meaning: "merujuk",
    example: "Refer to the manual."
},
{
    word: "regret",
    meaning: "menyesal",
    example: "I regret it."
},
{
    word: "reject",
    meaning: "menolak",
    example: "They rejected it."
},
{
    word: "release",
    meaning: "melepaskan",
    example: "Release the prisoner."
},
{
    word: "relevant",
    meaning: "relevan",
    example: "This is relevant."
},
{
    word: "reluctant",
    meaning: "enggan",
    example: "She was reluctant."
},
{
    word: "rely",
    meaning: "mengandalkan",
    example: "I rely on you."
},
{
    word: "remind",
    meaning: "mengingatkan",
    example: "Remind me."
},
{
    word: "remote",
    meaning: "terpencil",
    example: "Remote village."
},
{
    word: "remove",
    meaning: "menghapus",
    example: "Remove the stain."
},
{
    word: "replace",
    meaning: "menggantikan",
    example: "Replace the battery."
},
{
    word: "represent",
    meaning: "mewakili",
    example: "Represent the company."
},
{
    word: "reputation",
    meaning: "reputasi",
    example: "Good reputation."
},
{
    word: "rescue",
    meaning: "menyelamatkan",
    example: "Rescue the victims."
},
{
    word: "resemble",
    meaning: "menyerupai",
    example: "She resembles her mother."
},
{
    word: "resist",
    meaning: "menolak",
    example: "Resist temptation."
},
{
    word: "resolve",
    meaning: "menyelesaikan",
    example: "Resolve the issue."
},
{
    word: "respond",
    meaning: "merespons",
    example: "Respond to email."
},
{
    word: "restore",
    meaning: "memulihkan",
    example: "Restore the building."
},
{
    word: "restrict",
    meaning: "membatasi",
    example: "Restrict access."
},
{
    word: "reveal",
    meaning: "mengungkapkan",
    example: "Reveal the secret."
},
{
    word: "revere",
    meaning: "menghormati",
    example: "They revere him."
},
{
    word: "reward",
    meaning: "hadiah",
    example: "There is a reward."
},
{
    word: "rhythm",
    meaning: "irama",
    example: "The rhythm is good."
},
{
    word: "sacred",
    meaning: "suci",
    example: "Sacred place."
},
{
    word: "sacrifice",
    meaning: "pengorbanan",
    example: "He made a sacrifice."
},
{
    word: "scatter",
    meaning: "menyebar",
    example: "The leaves scattered."
},
{
    word: "secure",
    meaning: "aman",
    example: "We feel secure."
},
{
    word: "select",
    meaning: "memilih",
    example: "Select your option."
},
{
    word: "sense",
    meaning: "rasa",
    example: "Sense of humor."
},
{
    word: "sensitive",
    meaning: "sensitif",
    example: "She is sensitive."
},
{
    word: "separate",
    meaning: "memisahkan",
    example: "Separate them."
},
{
    word: "settle",
    meaning: "menetap",
    example: "They settled there."
},
{
    word: "shelter",
    meaning: "tempat berlindung",
    example: "Find shelter."
},
{
    word: "significant",
    meaning: "signifikan",
    example: "Significant improvement."
},
{
    word: "sincere",
    meaning: "tulus",
    example: "Sincere apology."
},
{
    word: "situation",
    meaning: "situasi",
    example: "The situation is good."
},
{
    word: "slight",
    meaning: "sedikit",
    example: "Slight difference."
},
{
    word: "smooth",
    meaning: "halus",
    example: "Smooth surface."
},
{
    word: "sophisticated",
    meaning: "canggih",
    example: "Sophisticated device."
},
{
    word: "source",
    meaning: "sumber",
    example: "What is the source?"
},
{
    word: "spare",
    meaning: "cadangan",
    example: "Spare key."
},
{
    word: "spirit",
    meaning: "semangat",
    example: "Strong spirit."
},
{
    word: "stable",
    meaning: "stabil",
    example: "Stable price."
},
{
    word: "standpoint",
    meaning: "sudut pandang",
    example: "From my standpoint."
},
{
    word: "struggle",
    meaning: "perjuangan",
    example: "Life is a struggle."
},
{
    word: "submit",
    meaning: "menyerahkan",
    example: "Submit your application."
},
{
    word: "substance",
    meaning: "zat",
    example: "Toxic substance."
},
{
    word: "substitute",
    meaning: "pengganti",
    example: "Use a substitute."
},
{
    word: "succeed",
    meaning: "berhasil",
    example: "She succeeded."
},
{
    word: "suffer",
    meaning: "menderita",
    example: "He suffers from allergies."
},
{
    word: "sufficient",
    meaning: "cukup",
    example: "Sufficient food."
},
{
    word: "summary",
    meaning: "ringkasan",
    example: "Write a summary."
},
{
    word: "superior",
    meaning: "unggul",
    example: "Superior quality."
},
{
    word: "supply",
    meaning: "pasokan",
    example: "We need supplies."
},
{
    word: "support",
    meaning: "mendukung",
    example: "I support you."
},
{
    word: "suppose",
    meaning: "mengira",
    example: "I suppose so."
},
{
    word: "survive",
    meaning: "bertahan hidup",
    example: "They survived."
},
{
    word: "suspect",
    meaning: "mencurigai",
    example: "I suspect him."
},
{
    word: "suspend",
    meaning: "menangguhkan",
    example: "Suspend service."
},
{
    word: "sustainable",
    meaning: "berkelanjutan",
    example: "Sustainable development."
},
{
    word: "symbol",
    meaning: "simbol",
    example: "Symbol of peace."
},
{
    word: "tackle",
    meaning: "menangani",
    example: "Tackle the problem."
},
{
    word: "talent",
    meaning: "bakat",
    example: "She has talent."
},
{
    word: "temporary",
    meaning: "sementara",
    example: "Temporary solution."
},
{
    word: "tend",
    meaning: "cenderung",
    example: "He tends to be late."
},
{
    word: "thorough",
    meaning: "menyeluruh",
    example: "Thorough investigation."
},
{
    word: "tolerance",
    meaning: "toleransi",
    example: "We need tolerance."
},
{
    word: "transform",
    meaning: "mengubah",
    example: "Transform your life."
},
{
    word: "tremendous",
    meaning: "luar biasa",
    example: "Tremendous success."
},
{
    word: "trend",
    meaning: "tren",
    example: "Latest trend."
},
{
    word: "triumph",
    meaning: "kemenangan",
    example: "Great triumph."
},
{
    word: "ultimate",
    meaning: "tertinggi",
    example: "Ultimate goal."
},
{
    word: "unique",
    meaning: "unik",
    example: "Unique design."
},
{
    word: "universal",
    meaning: "universal",
    example: "Universal truth."
},
{
    word: "urge",
    meaning: "mendesak",
    example: "I urge you."
},
{
    word: "utilize",
    meaning: "memanfaatkan",
    example: "Utilize resources."
},
{
    word: "vary",
    meaning: "bervariasi",
    example: "Prices vary."
},
{
    word: "venture",
    meaning: "usaha berisiko",
    example: "New venture."
},
{
    word: "violate",
    meaning: "melanggar",
    example: "Violate the rules."
},
{
    word: "vision",
    meaning: "visi",
    example: "Clear vision."
},
{
    word: "vulnerable",
    meaning: "rentan",
    example: "Children are vulnerable."
},
{
    word: "welfare",
    meaning: "kesejahteraan",
    example: "Animal welfare."
},
{
    word: "widespread",
    meaning: "menyebar luas",
    example: "Widespread disease."
},
{
    word: "withdraw",
    meaning: "menarik kembali",
    example: "Withdraw money."
},
{
    word: "witness",
    meaning: "saksi",
    example: "She was a witness."
},
{
    word: "wonder",
    meaning: "keajaiban",
    example: "Full of wonders."
},
{
    word: "youth",
    meaning: "masa muda",
    example: "Spent her youth."
},
{
    word: "zone",
    meaning: "zona",
    example: "Restricted zone."
},

      {
        word: "umbrella",
        meaning: "payung",
        example: "Bring an umbrella, it might rain."
    },
    {
        word: "candle",
        meaning: "lilin",
        example: "Light the candle."
    },
    {
        word: "matchstick",
        meaning: "korek api",
        example: "Use a matchstick to light it."
    },
    {
        word: "flashlight",
        meaning: "senter",
        example: "Bring a flashlight for the camp."
    },
    {
        word: "basket",
        meaning: "keranjang",
        example: "Put the fruit in the basket."
    },
    {
        word: "suitcase",
        meaning: "koper",
        example: "Pack your suitcase."
    },
    {
        word: "string",
        meaning: "tali",
        example: "Tie it with string."
    },
    {
        word: "rope",
        meaning: "tali tambang",
        example: "Pull the rope."
    },
    {
        word: "chain",
        meaning: "rantai",
        example: "Lock the gate with a chain."
    },
    {
        word: "hook",
        meaning: "kait",
        example: "Hang the coat on the hook."
    },
    {
        word: "needle",
        meaning: "jarum",
        example: "Thread the needle."
    },
    {
        word: "thread",
        meaning: "benang",
        example: "She sewed with red thread."
    },
    {
        word: "scissors",
        meaning: "gunting",
        example: "Cut the paper with scissors."
    },
    {
        word: "glue",
        meaning: "lem",
        example: "Use glue to stick it."
    },
    {
        word: "tape",
        meaning: "selotip",
        example: "Seal the box with tape."
    },
    {
        word: "envelope",
        meaning: "amplop",
        example: "Put the letter in an envelope."
    },
    {
        word: "stamp",
        meaning: "perangko",
        example: "Buy a stamp for the letter."
    },
    {
        word: "magazine",
        meaning: "majalah",
        example: "I read a magazine."
    },
    {
        word: "newspaper",
        meaning: "koran",
        example: "He reads the newspaper daily."
    },
    {
        word: "calendar",
        meaning: "kalender",
        example: "Mark it on the calendar."
    },
    {
        word: "clock",
        meaning: "jam dinding",
        example: "Look at the clock on the wall."
    },
    {
        word: "wristwatch",
        meaning: "jam tangan",
        example: "He wears a wristwatch."
    },
    {
        word: "umbrella stand",
        meaning: "tempat payung",
        example: "Put your umbrella in the stand."
    },
    {
        word: "trash can",
        meaning: "tempat sampah",
        example: "Throw it in the trash can."
    },
    {
        word: "bin",
        meaning: "tong sampah",
        example: "Put the paper in the bin."
    },
    {
        word: "bag",
        meaning: "tas",
        example: "I carry a bag."
    },
    {
        word: "backpack",
        meaning: "ransel",
        example: "He carries a backpack."
    },
    {
        word: "purse",
        meaning: "dompet wanita",
        example: "She carries a small purse."
    },
    {
        word: "box",
        meaning: "kotak",
        example: "I have a box of chocolates."
    },
    {
        word: "container",
        meaning: "wadah",
        example: "Store the food in a container."
    },
    {
        word: "jar",
        meaning: "toples",
        example: "Keep sugar in a jar."
    },
    {
        word: "can",
        meaning: "kaleng",
        example: "Open the can carefully."
    },
    {
        word: "bottle cap",
        meaning: "tutup botol",
        example: "Twist off the bottle cap."
    },
    {
        word: "lid",
        meaning: "tutup",
        example: "Put the lid on the pot."
    },
    {
        word: "cork",
        meaning: "gabus",
        example: "Pull the cork from the bottle."
    },
    {
        word: "straw",
        meaning: "sedotan",
        example: "Drink with a straw."
    },
    {
        word: "napkin",
        meaning: "serbet",
        example: "Wipe your mouth with a napkin."
    },
    {
        word: "tissue",
        meaning: "tisu",
        example: "Use a tissue to blow your nose."
    },
    {
        word: "candle holder",
        meaning: "tempat lilin",
        example: "Put the candle in the holder."
    },
    {
        word: "vase",
        meaning: "vas bunga",
        example: "Put the flowers in a vase."
    },
    {
        word: "frame",
        meaning: "bingkai",
        example: "Put the photo in a frame."
    },
    {
        word: "clock tower",
        meaning: "menara jam",
        example: "The clock tower is tall."
    },
    {
        word: "skyscraper",
        meaning: "pencakar langit",
        example: "The skyscraper is very tall."
    },
    {
        word: "warehouse",
        meaning: "gudang",
        example: "They store goods in the warehouse."
    },
    {
        word: "workshop",
        meaning: "bengkel",
        example: "He fixed the bike at the workshop."
    },
    {
        word: "laundry",
        meaning: "tempat cuci",
        example: "Take the clothes to the laundry."
    },
    {
        word: "bakery",
        meaning: "toko roti",
        example: "We bought bread at the bakery."
    },
    {
        word: "butcher shop",
        meaning: "toko daging",
        example: "He works at a butcher shop."
    },
    {
        word: "pharmacy",
        meaning: "apotek",
        example: "Buy medicine at the pharmacy."
    },
    {
        word: "clinic",
        meaning: "klinik",
        example: "The clinic is open until 5."
    },
    {
        word: "post office",
        meaning: "kantor pos",
        example: "Send the parcel from the post office."
    },
    {
        word: "bank branch",
        meaning: "cabang bank",
        example: "Visit the nearest bank branch."
    },
    {
        word: "courthouse",
        meaning: "gedung pengadilan",
        example: "The trial is at the courthouse."
    },
    {
        word: "embassy",
        meaning: "kedutaan besar",
        example: "Visit the embassy for a visa."
    },
    {
        word: "palace",
        meaning: "istana",
        example: "The king lives in a palace."
    },
    {
        word: "fortress",
        meaning: "benteng",
        example: "The fortress protected the city."
    },
    {
        word: "monument",
        meaning: "monumen",
        example: "We visited a famous monument."
    },
    {
        word: "statue",
        meaning: "patung",
        example: "The statue stands in the park."
    },
    {
        word: "fountain",
        meaning: "air mancur",
        example: "There is a fountain in the square."
    },
    {
        word: "plaza",
        meaning: "alun-alun",
        example: "People gather in the plaza."
    },
    {
        word: "square",
        meaning: "alun-alun",
        example: "The square is crowded."
    },
    {
        word: "alley",
        meaning: "gang",
        example: "We walked through a narrow alley."
    },
    {
        word: "boulevard",
        meaning: "jalan besar",
        example: "Shops line the boulevard."
    },
    {
        word: "intersection",
        meaning: "persimpangan",
        example: "Turn left at the intersection."
    },
    {
        word: "sidewalk",
        meaning: "trotoar",
        example: "Walk on the sidewalk."
    },
    {
        word: "crosswalk",
        meaning: "zebra cross",
        example: "Cross at the crosswalk."
    },
    {
        word: "bus stop",
        meaning: "halte bus",
        example: "Wait at the bus stop."
    },
    {
        word: "terminal",
        meaning: "terminal",
        example: "The bus terminal is busy."
    },
    {
        word: "dock",
        meaning: "dermaga",
        example: "The ship arrived at the dock."
    },
    {
        word: "harbor",
        meaning: "pelabuhan",
        example: "Ships anchor in the harbor."
    },
    {
        word: "lighthouse",
        meaning: "mercusuar",
        example: "The lighthouse guides ships."
    },
    {
        word: "pier",
        meaning: "dermaga kayu",
        example: "We walked along the pier."
    },
    {
        word: "campsite",
        meaning: "lokasi berkemah",
        example: "We set up at the campsite."
    },
    {
        word: "playground",
        meaning: "taman bermain",
        example: "Kids play at the playground."
    },
    {
        word: "cemetery",
        meaning: "pemakaman",
        example: "We visited the cemetery."
    },
    {
        word: "shrine",
        meaning: "kuil kecil",
        example: "They prayed at the shrine."
    },
    {
        word: "courtyard",
        meaning: "halaman dalam",
        example: "The courtyard is peaceful."
    },
    {
        word: "attic",
        meaning: "loteng",
        example: "We store old items in the attic."
    },
    {
        word: "cellar",
        meaning: "ruang bawah tanah",
        example: "Wine is stored in the cellar."
    },
    {
        word: "porch",
        meaning: "teras",
        example: "We sat on the porch."
    },
    {
        word: "terrace",
        meaning: "teras atas",
        example: "We had dinner on the terrace."
    },
    {
        word: "veranda",
        meaning: "beranda",
        example: "She relaxed on the veranda."
    },
    {
        word: "hallway",
        meaning: "koridor",
        example: "Walk down the hallway."
    },
    {
        word: "corridor",
        meaning: "lorong",
        example: "The corridor is long."
    },
    {
        word: "lobby",
        meaning: "lobi",
        example: "We waited in the lobby."
    },
    {
        word: "reception",
        meaning: "meja resepsionis",
        example: "Check in at the reception."
    },
    {
        word: "wrench",
        meaning: "kunci pas",
        example: "Use a wrench to loosen the bolt."
    },
    {
        word: "drill",
        meaning: "bor",
        example: "He used a drill to make a hole."
    },
    {
        word: "bolt",
        meaning: "baut",
        example: "Tighten the bolt."
    },
    {
        word: "screw",
        meaning: "sekrup",
        example: "Turn the screw."
    },
    {
        word: "nut",
        meaning: "mur",
        example: "Fit the nut on the bolt."
    },
    {
        word: "plank",
        meaning: "papan kayu",
        example: "Nail the plank to the wall."
    },
    {
        word: "board",
        meaning: "papan",
        example: "Cut the board in half."
    },
    {
        word: "tile",
        meaning: "ubin",
        example: "The floor has white tiles."
    },
    {
        word: "paint brush",
        meaning: "kuas cat",
        example: "Use a paint brush."
    },
    {
        word: "bucket",
        meaning: "ember",
        example: "Fill the bucket with paint."
    },
    {
        word: "shovel",
        meaning: "sekop",
        example: "Dig with a shovel."
    },
    {
        word: "rake",
        meaning: "garu",
        example: "Rake the leaves."
    },
    {
        word: "hoe",
        meaning: "cangkul",
        example: "The farmer used a hoe."
    },
    {
        word: "axe",
        meaning: "kapak",
        example: "Chop wood with an axe."
    },
    {
        word: "chainsaw",
        meaning: "gergaji mesin",
        example: "He used a chainsaw."
    },
    {
        word: "wheelbarrow",
        meaning: "gerobak dorong",
        example: "Push the wheelbarrow."
    },
    {
        word: "cart",
        meaning: "gerobak",
        example: "Load the cart with goods."
    },
    {
        word: "crane",
        meaning: "derek",
        example: "The crane lifted the beam."
    },
    {
        word: "bulldozer",
        meaning: "buldoser",
        example: "The bulldozer cleared the land."
    },
    {
        word: "forklift",
        meaning: "forklift",
        example: "The forklift moved the boxes."
    },
    {
        word: "generator",
        meaning: "generator",
        example: "The generator powers the house."
    },
    {
        word: "engine",
        meaning: "mesin",
        example: "The engine is running."
    },
    {
        word: "gear",
        meaning: "gigi mesin",
        example: "Shift into first gear."
    },
    {
        word: "wheel",
        meaning: "roda",
        example: "The wheel is flat."
    },
    {
        word: "brake",
        meaning: "rem",
        example: "Press the brake."
    },
    {
        word: "steering wheel",
        meaning: "setir",
        example: "Hold the steering wheel firmly."
    },
    {
        word: "horn",
        meaning: "klakson",
        example: "He honked the horn."
    },
    {
        word: "headlight",
        meaning: "lampu depan",
        example: "Turn on the headlights."
    },
    {
        word: "windshield",
        meaning: "kaca depan mobil",
        example: "Clean the windshield."
    },
    {
        word: "courage",
        meaning: "keberanian",
        example: "Show courage."
    },
    {
        word: "wisdom",
        meaning: "kebijaksanaan",
        example: "With age comes wisdom."
    },
    {
        word: "knowledge",
        meaning: "pengetahuan",
        example: "Knowledge is power."
    },
    {
        word: "truth",
        meaning: "kebenaran",
        example: "Tell the truth."
    },
    {
        word: "lie",
        meaning: "kebohongan",
        example: "That is a lie."
    },
    {
        word: "fact",
        meaning: "fakta",
        example: "That is a fact."
    },
    {
        word: "fiction",
        meaning: "fiksi",
        example: "This story is fiction."
    },
    {
        word: "myth",
        meaning: "mitos",
        example: "It's just a myth."
    },
    {
        word: "legend",
        meaning: "legenda",
        example: "This is an old legend."
    },
    {
        word: "tradition",
        meaning: "tradisi",
        example: "We follow this tradition."
    },
    {
        word: "custom",
        meaning: "kebiasaan",
        example: "It is a local custom."
    },
    {
        word: "value",
        meaning: "nilai",
        example: "Honesty is a core value."
    },
    {
        word: "belief",
        meaning: "keyakinan",
        example: "Everyone has different beliefs."
    },
    {
        word: "faith",
        meaning: "iman",
        example: "She has strong faith."
    },
    {
        word: "hope",
        meaning: "harapan",
        example: "I have hope."
    },
    {
        word: "fear",
        meaning: "ketakutan",
        example: "I fear snakes."
    },
    {
        word: "pride",
        meaning: "kebanggaan",
        example: "She felt pride in her work."
    },
    {
        word: "shame",
        meaning: "rasa malu",
        example: "He felt shame for lying."
    },
    {
        word: "guilt",
        meaning: "rasa bersalah",
        example: "She felt guilt over the mistake."
    },
    {
        word: "anger",
        meaning: "kemarahan",
        example: "Control your anger."
    },
    {
        word: "sorrow",
        meaning: "kesedihan",
        example: "She felt deep sorrow."
    },
    {
        word: "grief",
        meaning: "duka",
        example: "He is in grief."
    },
    {
        word: "bliss",
        meaning: "kebahagiaan sempurna",
        example: "Their wedding day was bliss."
    },
    {
        word: "misery",
        meaning: "kesengsaraan",
        example: "War brings misery."
    },
    {
        word: "chaos",
        meaning: "kekacauan",
        example: "The room was in chaos."
    },
    {
        word: "order",
        meaning: "ketertiban",
        example: "Keep order in the classroom."
    },
    {
        word: "balance",
        meaning: "keseimbangan",
        example: "Find balance in life."
    },
    {
        word: "harmony",
        meaning: "harmoni",
        example: "They live in harmony."
    },
    {
        word: "conflict",
        meaning: "konflik",
        example: "They have a conflict."
    },
    {
        word: "peace",
        meaning: "perdamaian",
        example: "We want peace."
    },
    {
        word: "war",
        meaning: "perang",
        example: "The war lasted years."
    },
    {
        word: "victory",
        meaning: "kemenangan",
        example: "They celebrated the victory."
    },
    {
        word: "defeat",
        meaning: "kekalahan",
        example: "They accepted the defeat."
    },
    {
        word: "survival",
        meaning: "kelangsungan hidup",
        example: "Survival instinct kicked in."
    },
    {
        word: "growth",
        meaning: "pertumbuhan",
        example: "Economic growth."
    },
    {
        word: "decline",
        meaning: "penurunan",
        example: "There was a decline in sales."
    },
    {
        word: "progress",
        meaning: "kemajuan",
        example: "We made progress."
    },
    {
        word: "achievement",
        meaning: "pencapaian",
        example: "This is a great achievement."
    },
    {
        word: "failure",
        meaning: "kegagalan",
        example: "Failure teaches us lessons."
    },
    {
        word: "success",
        meaning: "kesuksesan",
        example: "She achieved great success."
    },
    {
        word: "meadow",
        meaning: "padang rumput",
        example: "Cows graze in the meadow."
    },
    {
        word: "prairie",
        meaning: "padang rumput luas",
        example: "Bison roam the prairie."
    },
    {
        word: "swamp",
        meaning: "rawa",
        example: "Alligators live in the swamp."
    },
    {
        word: "marsh",
        meaning: "rawa-rawa",
        example: "Birds nest in the marsh."
    },
    {
        word: "delta",
        meaning: "delta sungai",
        example: "The river forms a delta."
    },
    {
        word: "glacier",
        meaning: "gletser",
        example: "The glacier is melting."
    },
    {
        word: "iceberg",
        meaning: "gunung es",
        example: "The iceberg floated in the sea."
    },
    {
        word: "peninsula",
        meaning: "semenanjung",
        example: "Korea is a peninsula."
    },
    {
        word: "archipelago",
        meaning: "kepulauan",
        example: "Indonesia is an archipelago."
    },
    {
        word: "strait",
        meaning: "selat",
        example: "Ships pass through the strait."
    },
    {
        word: "bay",
        meaning: "teluk",
        example: "Boats anchor in the bay."
    },
    {
        word: "lagoon",
        meaning: "laguna",
        example: "The lagoon is calm."
    },
    {
        word: "reef",
        meaning: "terumbu karang",
        example: "Fish live near the reef."
    },
    {
        word: "dune",
        meaning: "bukit pasir",
        example: "Sand dunes stretch for miles."
    },
    {
        word: "canyon",
        meaning: "ngarai",
        example: "The canyon is deep."
    },
    {
        word: "plateau",
        meaning: "dataran tinggi",
        example: "The plateau is flat and high."
    },
    {
        word: "basin",
        meaning: "cekungan",
        example: "The river basin is fertile."
    },
    {
        word: "crater",
        meaning: "kawah",
        example: "The volcano has a large crater."
    },
    {
        word: "summit",
        meaning: "puncak",
        example: "They reached the summit."
    },
    {
        word: "peak",
        meaning: "puncak",
        example: "The mountain peak is snowy."
    },
    {
        word: "slope",
        meaning: "lereng",
        example: "The slope is steep."
    },
    {
        word: "ridge",
        meaning: "punggung bukit",
        example: "We hiked along the ridge."
    },
    {
        word: "meteor",
        meaning: "meteor",
        example: "A meteor streaked across the sky."
    },
    {
        word: "comet",
        meaning: "komet",
        example: "We saw a comet last night."
    },
    {
        word: "asteroid",
        meaning: "asteroid",
        example: "The asteroid missed Earth."
    },
    {
        word: "eclipse",
        meaning: "gerhana",
        example: "We watched the solar eclipse."
    },
    {
        word: "constellation",
        meaning: "rasi bintang",
        example: "Orion is a famous constellation."
    },
    {
        word: "caterpillar",
        meaning: "ulat",
        example: "The caterpillar becomes a butterfly."
    },
    {
        word: "worm",
        meaning: "cacing",
        example: "Birds eat worms."
    },
    {
        word: "snail",
        meaning: "siput",
        example: "The snail moves slowly."
    },
    {
        word: "beetle",
        meaning: "kumbang",
        example: "The beetle has hard wings."
    },
    {
        word: "cricket",
        meaning: "jangkrik",
        example: "Crickets chirp at night."
    },
    {
        word: "grasshopper",
        meaning: "belalang",
        example: "The grasshopper jumped away."
    },
    {
        word: "cockroach",
        meaning: "kecoa",
        example: "I saw a cockroach in the kitchen."
    },
    {
        word: "fly",
        meaning: "lalat",
        example: "A fly landed on the food."
    },
    {
        word: "wasp",
        meaning: "tawon",
        example: "Wasps can sting."
    },
    {
        word: "scorpion",
        meaning: "kalajengking",
        example: "Be careful of scorpions."
    },
    {
        word: "lizard",
        meaning: "kadal",
        example: "A lizard climbed the wall."
    },
    {
        word: "crocodile",
        meaning: "buaya",
        example: "The crocodile lives in the river."
    },
    {
        word: "alligator",
        meaning: "aligator",
        example: "Alligators are dangerous."
    },
    {
        word: "camel",
        meaning: "unta",
        example: "Camels live in the desert."
    },
    {
        word: "deer",
        meaning: "rusa",
        example: "Deer run through the forest."
    },
    {
        word: "fox",
        meaning: "rubah",
        example: "The fox is clever."
    },
    {
        word: "wolf",
        meaning: "serigala",
        example: "Wolves hunt in packs."
    },
    {
        word: "bear",
        meaning: "beruang",
        example: "The bear is strong."
    },
    {
        word: "panda",
        meaning: "panda",
        example: "Pandas eat bamboo."
    },
    {
        word: "kangaroo",
        meaning: "kanguru",
        example: "Kangaroos live in Australia."
    },
    {
        word: "koala",
        meaning: "koala",
        example: "Koalas sleep most of the day."
    },
    {
        word: "giraffe",
        meaning: "jerapah",
        example: "Giraffes have long necks."
    },
    {
        word: "zebra",
        meaning: "zebra",
        example: "Zebras have stripes."
    },
    {
        word: "hippo",
        meaning: "kuda nil",
        example: "The hippo lives near water."
    },
    {
        word: "rhino",
        meaning: "badak",
        example: "The rhino has a horn."
    },
    {
        word: "gorilla",
        meaning: "gorila",
        example: "Gorillas are strong primates."
    },
    {
        word: "chimpanzee",
        meaning: "simpanse",
        example: "Chimpanzees are intelligent."
    },
    {
        word: "squirrel",
        meaning: "tupai",
        example: "The squirrel climbed the tree."
    },
    {
        word: "hedgehog",
        meaning: "landak mini",
        example: "The hedgehog curled into a ball."
    },
    {
        word: "bat",
        meaning: "kelelawar",
        example: "Bats sleep during the day."
    },
    {
        word: "peacock",
        meaning: "merak",
        example: "The peacock has beautiful feathers."
    },
    {
        word: "parrot",
        meaning: "burung beo",
        example: "The parrot can talk."
    },
    {
        word: "swan",
        meaning: "angsa",
        example: "Swans swim gracefully."
    },
    {
        word: "penguin",
        meaning: "pinguin",
        example: "Penguins live in cold places."
    },
    {
        word: "flamingo",
        meaning: "flamingo",
        example: "Flamingos are pink."
    },
    {
        word: "seagull",
        meaning: "burung camar",
        example: "Seagulls fly near the beach."
    },
    {
        word: "octopus",
        meaning: "gurita",
        example: "The octopus has eight arms."
    },
    {
        word: "jellyfish",
        meaning: "ubur-ubur",
        example: "Jellyfish can sting."
    },
    {
        word: "starfish",
        meaning: "bintang laut",
        example: "Starfish live in the sea."
    },
    {
        word: "seahorse",
        meaning: "kuda laut",
        example: "Seahorses swim upright."
    },
    {
        word: "lobster",
        meaning: "lobster",
        example: "We ate lobster for dinner."
    },
    {
        word: "clam",
        meaning: "kerang",
        example: "We collected clams at the beach."
    },
    {
        word: "oyster",
        meaning: "tiram",
        example: "Oysters produce pearls."
    },
    {
        word: "watermelon",
        meaning: "semangka",
        example: "Watermelon is refreshing in summer."
    },
    {
        word: "pineapple",
        meaning: "nanas",
        example: "The pineapple is sweet."
    },
    {
        word: "papaya",
        meaning: "pepaya",
        example: "Papaya is good for digestion."
    },
    {
        word: "grape",
        meaning: "anggur",
        example: "She ate a bunch of grapes."
    },
    {
        word: "strawberry",
        meaning: "stroberi",
        example: "Strawberries are red."
    },
    {
        word: "cherry",
        meaning: "ceri",
        example: "The cherry is small and sweet."
    },
    {
        word: "peach",
        meaning: "persik",
        example: "The peach is juicy."
    },
    {
        word: "pear",
        meaning: "pir",
        example: "She bit into a pear."
    },
    {
        word: "kiwi",
        meaning: "kiwi",
        example: "Kiwi has a fuzzy skin."
    },
    {
        word: "coconut",
        meaning: "kelapa",
        example: "We drank coconut water."
    },
    {
        word: "durian",
        meaning: "durian",
        example: "Durian has a strong smell."
    },
    {
        word: "guava",
        meaning: "jambu biji",
        example: "Guava is rich in vitamin C."
    },
    {
        word: "avocado",
        meaning: "alpukat",
        example: "Avocado is creamy."
    },
    {
        word: "carrot",
        meaning: "wortel",
        example: "Carrots are good for eyesight."
    },
    {
        word: "potato",
        meaning: "kentang",
        example: "We boiled the potatoes."
    },
    {
        word: "tomato",
        meaning: "tomat",
        example: "Add tomato to the salad."
    },
    {
        word: "cucumber",
        meaning: "timun",
        example: "Cucumber is refreshing."
    },
    {
        word: "cabbage",
        meaning: "kubis",
        example: "We cooked cabbage soup."
    },
    {
        word: "spinach",
        meaning: "bayam",
        example: "Spinach is full of iron."
    },
    {
        word: "broccoli",
        meaning: "brokoli",
        example: "Broccoli is healthy."
    },
    {
        word: "onion",
        meaning: "bawang bombay",
        example: "Chop the onion finely."
    },
    {
        word: "garlic",
        meaning: "bawang putih",
        example: "Add garlic to the dish."
    },
    {
        word: "ginger",
        meaning: "jahe",
        example: "Ginger tea is soothing."
    },
    {
        word: "chili",
        meaning: "cabai",
        example: "This chili is very spicy."
    },
    {
        word: "corn",
        meaning: "jagung",
        example: "We grilled corn."
    },
    {
        word: "pumpkin",
        meaning: "labu",
        example: "Pumpkin soup is warm."
    },
    {
        word: "eggplant",
        meaning: "terong",
        example: "Eggplant is purple."
    },
    {
        word: "mushroom",
        meaning: "jamur",
        example: "Mushrooms grow in the forest."
    },
    {
        word: "lettuce",
        meaning: "selada",
        example: "Lettuce is used in salads."
    },
    {
        word: "bean",
        meaning: "kacang",
        example: "We planted beans."
    },
    {
        word: "peanut",
        meaning: "kacang tanah",
        example: "Peanuts are a popular snack."
    },
    {
        word: "almond",
        meaning: "almond",
        example: "Almonds are nutritious."
    },
    {
        word: "cashew",
        meaning: "kacang mete",
        example: "Cashews are delicious."
    },
    {
        word: "architect",
        meaning: "arsitek",
        example: "The architect designed the building."
    },
    {
        word: "plumber",
        meaning: "tukang ledeng",
        example: "The plumber fixed the pipe."
    },
    {
        word: "electrician",
        meaning: "tukang listrik",
        example: "The electrician fixed the wiring."
    },
    {
        word: "carpenter",
        meaning: "tukang kayu",
        example: "The carpenter built the table."
    },
    {
        word: "mechanic",
        meaning: "montir",
        example: "The mechanic repaired the car."
    },
    {
        word: "tailor",
        meaning: "penjahit",
        example: "The tailor made the suit."
    },
    {
        word: "barber",
        meaning: "tukang cukur",
        example: "He got a haircut at the barber."
    },
    {
        word: "hairdresser",
        meaning: "penata rambut",
        example: "She visits the hairdresser monthly."
    },
    {
        word: "photographer",
        meaning: "fotografer",
        example: "The photographer took great pictures."
    },
    {
        word: "journalist",
        meaning: "wartawan",
        example: "The journalist wrote the article."
    },
    {
        word: "editor",
        meaning: "editor",
        example: "The editor reviewed the manuscript."
    },
    {
        word: "publisher",
        meaning: "penerbit",
        example: "The publisher released the book."
    },
    {
        word: "librarian",
        meaning: "pustakawan",
        example: "The librarian helped me find a book."
    },
    {
        word: "receptionist",
        meaning: "resepsionis",
        example: "The receptionist greeted us."
    },
    {
        word: "secretary",
        meaning: "sekretaris",
        example: "The secretary scheduled the meeting."
    },
    {
        word: "accountant",
        meaning: "akuntan",
        example: "The accountant checked the books."
    },
    {
        word: "banker",
        meaning: "bankir",
        example: "The banker approved the loan."
    },
    {
        word: "real estate agent",
        meaning: "agen properti",
        example: "The real estate agent showed the house."
    },
    {
        word: "insurance agent",
        meaning: "agen asuransi",
        example: "The insurance agent explained the policy."
    },
    {
        word: "security guard",
        meaning: "satpam",
        example: "The security guard checked our IDs."
    },
    {
        word: "firefighter",
        meaning: "pemadam kebakaran",
        example: "The firefighters put out the fire."
    },
    {
        word: "paramedic",
        meaning: "paramedis",
        example: "The paramedic treated the patient."
    },
    {
        word: "veterinarian",
        meaning: "dokter hewan",
        example: "The veterinarian examined the dog."
    },
    {
        word: "dentist",
        meaning: "dokter gigi",
        example: "I visited the dentist."
    },
    {
        word: "psychologist",
        meaning: "psikolog",
        example: "The psychologist listened carefully."
    },
    {
        word: "therapist",
        meaning: "terapis",
        example: "She sees a therapist weekly."
    },
    {
        word: "professor",
        meaning: "profesor",
        example: "The professor gave a lecture."
    },
    {
        word: "principal",
        meaning: "kepala sekolah",
        example: "The principal addressed the students."
    },
    {
        word: "coach",
        meaning: "pelatih",
        example: "The coach trains the team."
    },
    {
        word: "athlete",
        meaning: "atlet",
        example: "The athlete trained hard."
    },
    {
        word: "magician",
        meaning: "pesulap",
        example: "The magician amazed the crowd."
    },
    {
        word: "comedian",
        meaning: "komedian",
        example: "The comedian made us laugh."
    },
    {
        word: "director",
        meaning: "sutradara",
        example: "The director filmed the scene."
    },
    {
        word: "producer",
        meaning: "produser",
        example: "The producer funded the movie."
    },
    {
        word: "designer",
        meaning: "desainer",
        example: "The designer created the logo."
    },
    {
        word: "architect designer",
        meaning: "perancang",
        example: "She works as a designer."
    },

      {
        word: "pepper",
        meaning: "lada",
        example: "Add pepper to the soup."
    },
    {
        word: "cinnamon",
        meaning: "kayu manis",
        example: "Cinnamon adds a sweet aroma."
    },
    {
        word: "clove",
        meaning: "cengkeh",
        example: "Cloves are used in cooking."
    },
    {
        word: "nutmeg",
        meaning: "pala",
        example: "Nutmeg gives a warm flavor."
    },
    {
        word: "turmeric",
        meaning: "kunyit",
        example: "Turmeric gives food a yellow color."
    },
    {
        word: "coriander",
        meaning: "ketumbar",
        example: "Coriander seeds are aromatic."
    },
    {
        word: "cumin",
        meaning: "jintan",
        example: "Cumin is common in curry."
    },
    {
        word: "basil",
        meaning: "kemangi",
        example: "Basil leaves smell fresh."
    },
    {
        word: "mint",
        meaning: "daun mint",
        example: "Mint tea is refreshing."
    },
    {
        word: "parsley",
        meaning: "peterseli",
        example: "Garnish with parsley."
    },
    {
        word: "bay leaf",
        meaning: "daun salam",
        example: "Add a bay leaf to the stew."
    },
    {
        word: "vanilla",
        meaning: "vanili",
        example: "Vanilla ice cream is popular."
    },
    {
        word: "soy sauce",
        meaning: "kecap asin",
        example: "Add soy sauce to the noodles."
    },
    {
        word: "vinegar",
        meaning: "cuka",
        example: "Add a splash of vinegar."
    },
    {
        word: "honey",
        meaning: "madu",
        example: "She drinks tea with honey."
    },
    {
        word: "mustard",
        meaning: "mustar",
        example: "Add mustard to the sandwich."
    },
    {
        word: "mayonnaise",
        meaning: "mayones",
        example: "Spread mayonnaise on the bread."
    },
    {
        word: "ketchup",
        meaning: "saus tomat",
        example: "Add ketchup to the fries."
    },
    {
        word: "sauce",
        meaning: "saus",
        example: "This sauce is delicious."
    },
    {
        word: "broth",
        meaning: "kaldu",
        example: "The soup has a rich broth."
    },
    {
        word: "dough",
        meaning: "adonan",
        example: "Knead the dough well."
    },
    {
        word: "batter",
        meaning: "adonan cair",
        example: "Mix the batter for pancakes."
    },
    {
        word: "yeast",
        meaning: "ragi",
        example: "Yeast makes the bread rise."
    },
    {
        word: "flour",
        meaning: "tepung",
        example: "Add flour to the mixture."
    },
    {
        word: "cornstarch",
        meaning: "tepung maizena",
        example: "Thicken the sauce with cornstarch."
    },
    {
        word: "orchestra",
        meaning: "orkestra",
        example: "The orchestra played beautifully."
    },
    {
        word: "choir",
        meaning: "paduan suara",
        example: "The choir sang in the church."
    },
    {
        word: "conductor",
        meaning: "dirigen",
        example: "The conductor led the orchestra."
    },
    {
        word: "composer",
        meaning: "komponis",
        example: "He is a famous composer."
    },
    {
        word: "trumpet",
        meaning: "terompet",
        example: "He plays the trumpet."
    },
    {
        word: "saxophone",
        meaning: "saksofon",
        example: "She plays the saxophone."
    },
    {
        word: "flute",
        meaning: "seruling",
        example: "The flute has a soft sound."
    },
    {
        word: "cello",
        meaning: "cello",
        example: "He learned to play the cello."
    },
    {
        word: "harp",
        meaning: "harpa",
        example: "She plays the harp beautifully."
    },
    {
        word: "accordion",
        meaning: "akordeon",
        example: "He plays the accordion."
    },
    {
        word: "harmonica",
        meaning: "harmonika",
        example: "He plays the harmonica."
    },
    {
        word: "tambourine",
        meaning: "tamborin",
        example: "She shook the tambourine."
    },
    {
        word: "microphone",
        meaning: "mikrofon",
        example: "Speak into the microphone."
    },
    {
        word: "speaker",
        meaning: "pengeras suara",
        example: "Turn up the speaker."
    },
    {
        word: "headphone",
        meaning: "headphone",
        example: "I listen to music with headphones."
    },
    {
        word: "album",
        meaning: "album musik",
        example: "She released a new album."
    },
    {
        word: "genre",
        meaning: "genre",
        example: "What music genre do you like?"
    },
    {
        word: "pop music",
        meaning: "musik pop",
        example: "She listens to pop music."
    },
    {
        word: "jazz",
        meaning: "jazz",
        example: "He loves jazz music."
    },
    {
        word: "classical music",
        meaning: "musik klasik",
        example: "Classical music is relaxing."
    },
    {
        word: "rock music",
        meaning: "musik rok",
        example: "They play rock music."
    },
    {
        word: "folk music",
        meaning: "musik rakyat",
        example: "Folk music tells stories."
    },
    {
        word: "hip hop",
        meaning: "hip hop",
        example: "He raps in hip hop style."
    },
    {
        word: "reggae",
        meaning: "reggae",
        example: "Reggae music is from Jamaica."
    },
    {
        word: "beat",
        meaning: "ketukan",
        example: "Follow the beat."
    },
    {
        word: "tune",
        meaning: "melodi lagu",
        example: "That's a catchy tune."
    },
    {
        word: "chorus",
        meaning: "refrein",
        example: "Sing the chorus loudly."
    },
    {
        word: "verse",
        meaning: "bait lagu",
        example: "Write the first verse."
    },
    {
        word: "circle",
        meaning: "lingkaran",
        example: "Draw a circle."
    },
    {
        word: "square",
        meaning: "persegi",
        example: "The square has four equal sides."
    },
    {
        word: "triangle",
        meaning: "segitiga",
        example: "A triangle has three sides."
    },
    {
        word: "rectangle",
        meaning: "persegi panjang",
        example: "The table is a rectangle."
    },
    {
        word: "oval",
        meaning: "oval",
        example: "The mirror is oval."
    },
    {
        word: "diamond",
        meaning: "belah ketupat",
        example: "The kite is diamond shaped."
    },
    {
        word: "pentagon",
        meaning: "segi lima",
        example: "The building looks like a pentagon."
    },
    {
        word: "hexagon",
        meaning: "segi enam",
        example: "A honeycomb has hexagon cells."
    },
    {
        word: "cube",
        meaning: "kubus",
        example: "A dice is shaped like a cube."
    },
    {
        word: "sphere",
        meaning: "bola",
        example: "The earth is a sphere."
    },
    {
        word: "cylinder",
        meaning: "tabung",
        example: "The can is a cylinder."
    },
    {
        word: "cone",
        meaning: "kerucut",
        example: "The ice cream cone is shaped like a cone."
    },
    {
        word: "pyramid",
        meaning: "piramida",
        example: "The pyramid is ancient."
    },
    {
        word: "angle",
        meaning: "sudut",
        example: "Measure the angle."
    },
    {
        word: "axis",
        meaning: "sumbu",
        example: "The earth rotates on its axis."
    },
    {
        word: "diameter",
        meaning: "diameter",
        example: "Measure the diameter of the circle."
    },
    {
        word: "radius",
        meaning: "jari-jari",
        example: "The radius is half the diameter."
    },
    {
        word: "perimeter",
        meaning: "keliling",
        example: "Calculate the perimeter."
    },
    {
        word: "symmetry",
        meaning: "simetri",
        example: "The design has perfect symmetry."
    },
    {
        word: "earthquake",
        meaning: "gempa bumi",
        example: "The earthquake damaged buildings."
    },
    {
        word: "tsunami",
        meaning: "tsunami",
        example: "A tsunami hit the coast."
    },
    {
        word: "hurricane",
        meaning: "badai topan",
        example: "The hurricane destroyed homes."
    },
    {
        word: "typhoon",
        meaning: "topan",
        example: "A typhoon is approaching."
    },
    {
        word: "tornado",
        meaning: "tornado",
        example: "The tornado destroyed the town."
    },
    {
        word: "drought",
        meaning: "kekeringan",
        example: "The drought affected crops."
    },
    {
        word: "famine",
        meaning: "kelaparan",
        example: "Famine struck the region."
    },
    {
        word: "landslide",
        meaning: "tanah longsor",
        example: "A landslide blocked the road."
    },
    {
        word: "avalanche",
        meaning: "longsoran salju",
        example: "An avalanche buried the village."
    },
    {
        word: "wildfire",
        meaning: "kebakaran hutan",
        example: "The wildfire spread quickly."
    },
    {
        word: "blizzard",
        meaning: "badai salju",
        example: "A blizzard hit the city."
    },
    {
        word: "heatwave",
        meaning: "gelombang panas",
        example: "A heatwave swept the country."
    },
    {
        word: "hailstorm",
        meaning: "hujan es",
        example: "The hailstorm damaged crops."
    },
    {
        word: "monsoon",
        meaning: "musim hujan tropis",
        example: "The monsoon brings heavy rain."
    },
    {
        word: "shampoo",
        meaning: "sampo",
        example: "Wash your hair with shampoo."
    },
    {
        word: "conditioner",
        meaning: "kondisioner",
        example: "Use conditioner after shampoo."
    },
    {
        word: "lotion",
        meaning: "losion",
        example: "Apply lotion to your skin."
    },
    {
        word: "sunscreen",
        meaning: "tabir surya",
        example: "Wear sunscreen at the beach."
    },
    {
        word: "perfume",
        meaning: "parfum",
        example: "She wears sweet perfume."
    },
    {
        word: "deodorant",
        meaning: "deodoran",
        example: "Use deodorant daily."
    },
    {
        word: "razor",
        meaning: "pisau cukur",
        example: "He shaves with a razor."
    },
    {
        word: "nail clipper",
        meaning: "gunting kuku",
        example: "Trim your nails with a nail clipper."
    },
    {
        word: "comb",
        meaning: "sisir",
        example: "Comb your hair."
    },
    {
        word: "hairbrush",
        meaning: "sikat rambut",
        example: "Brush your hair with a hairbrush."
    },
    {
        word: "makeup",
        meaning: "riasan",
        example: "She wears light makeup."
    },
    {
        word: "lipstick",
        meaning: "lipstik",
        example: "She applied red lipstick."
    },
    {
        word: "mascara",
        meaning: "maskara",
        example: "She used mascara on her lashes."
    },
    {
        word: "foundation",
        meaning: "alas bedak",
        example: "Apply foundation evenly."
    },
    {
        word: "nail polish",
        meaning: "cat kuku",
        example: "She painted her nails with nail polish."
    },
    {
        word: "moisturizer",
        meaning: "pelembap",
        example: "Use moisturizer daily."
    },
    {
        word: "cotton swab",
        meaning: "cotton bud",
        example: "Clean your ears with a cotton swab."
    },
    {
        word: "stapler",
        meaning: "stapler",
        example: "Staple the papers together."
    },
    {
        word: "paperclip",
        meaning: "klip kertas",
        example: "Attach the papers with a paperclip."
    },
    {
        word: "highlighter",
        meaning: "stabilo",
        example: "Highlight important text."
    },
    {
        word: "marker",
        meaning: "spidol",
        example: "Write with a marker."
    },
    {
        word: "whiteboard",
        meaning: "papan tulis putih",
        example: "Write on the whiteboard."
    },
    {
        word: "sticky note",
        meaning: "kertas tempel",
        example: "Leave a sticky note."
    },
    {
        word: "folder",
        meaning: "map",
        example: "Put the documents in a folder."
    },
    {
        word: "binder",
        meaning: "binder",
        example: "Organize papers in a binder."
    },
    {
        word: "envelope",
        meaning: "amplop",
        example: "Seal the envelope."
    },
    {
        word: "printer",
        meaning: "printer",
        example: "Print the document."
    },
    {
        word: "scanner",
        meaning: "pemindai",
        example: "Scan the document."
    },
    {
        word: "photocopier",
        meaning: "mesin fotokopi",
        example: "Use the photocopier."
    },
    {
        word: "calculator",
        meaning: "kalkulator",
        example: "Use a calculator for math."
    },
    {
        word: "projector",
        meaning: "proyektor",
        example: "The projector displays the slides."
    },
    {
        word: "ring",
        meaning: "cincin",
        example: "She wears a gold ring."
    },
    {
        word: "brooch",
        meaning: "bros",
        example: "She pinned a brooch on her dress."
    },
    {
        word: "pendant",
        meaning: "liontin",
        example: "The necklace has a pendant."
    },
    {
        word: "anklet",
        meaning: "gelang kaki",
        example: "She wears an anklet."
    },
    {
        word: "cufflink",
        meaning: "kancing manset",
        example: "He wears silver cufflinks."
    },
    {
        word: "tiara",
        meaning: "mahkota kecil",
        example: "The princess wore a tiara."
    },
    {
        word: "crown",
        meaning: "mahkota",
        example: "The king wore a golden crown."
    },
    {
        word: "gemstone",
        meaning: "batu permata",
        example: "This ring has a gemstone."
    },
    {
        word: "pearl",
        meaning: "mutiara",
        example: "She wears a pearl necklace."
    },
    {
        word: "ruby",
        meaning: "batu rubi",
        example: "The ruby is bright red."
    },
    {
        word: "emerald",
        meaning: "zamrud",
        example: "The emerald is deep green."
    },
    {
        word: "sapphire",
        meaning: "safir",
        example: "The sapphire is blue."
    },
    {
        word: "festival",
        meaning: "festival",
        example: "We attend the festival every year."
    },
    {
        word: "parade",
        meaning: "pawai",
        example: "The parade marched through town."
    },
    {
        word: "carnival",
        meaning: "karnaval",
        example: "The carnival was colorful."
    },
    {
        word: "fireworks",
        meaning: "kembang api",
        example: "We watched the fireworks."
    },
    {
        word: "feast",
        meaning: "pesta makan",
        example: "They held a great feast."
    },
    {
        word: "banquet",
        meaning: "jamuan makan",
        example: "The banquet was elegant."
    },
    {
        word: "toast",
        meaning: "bersulang",
        example: "Let's toast to success."
    },
    {
        word: "candle",
        meaning: "lilin ulang tahun",
        example: "Blow out the candles."
    },
    {
        word: "decoration",
        meaning: "dekorasi",
        example: "The room has nice decoration."
    },
    {
        word: "balloon",
        meaning: "balon",
        example: "The room was full of balloons."
    },
    {
        word: "confetti",
        meaning: "confetti",
        example: "They threw confetti in the air."
    },
    {
        word: "ceremony",
        meaning: "upacara",
        example: "The wedding ceremony was beautiful."
    },
    {
        word: "procession",
        meaning: "arak-arakan",
        example: "The procession moved slowly."
    },
    {
        word: "ritual",
        meaning: "ritual",
        example: "This is an ancient ritual."
    },
    {
        word: "army",
        meaning: "tentara",
        example: "The army is strong."
    },
    {
        word: "navy",
        meaning: "angkatan laut",
        example: "He joined the navy."
    },
    {
        word: "air force",
        meaning: "angkatan udara",
        example: "She serves in the air force."
    },
    {
        word: "general",
        meaning: "jenderal",
        example: "The general led the troops."
    },
    {
        word: "colonel",
        meaning: "kolonel",
        example: "The colonel gave the order."
    },
    {
        word: "captain",
        meaning: "kapten",
        example: "The captain commanded the ship."
    },
    {
        word: "sergeant",
        meaning: "sersan",
        example: "The sergeant trained the recruits."
    },
    {
        word: "veteran",
        meaning: "veteran",
        example: "He is a war veteran."
    },
    {
        word: "weapon",
        meaning: "senjata",
        example: "Lay down your weapon."
    },
    {
        word: "ammunition",
        meaning: "amunisi",
        example: "They ran out of ammunition."
    },
    {
        word: "tank",
        meaning: "tank",
        example: "The tank moved across the field."
    },
    {
        word: "missile",
        meaning: "peluru kendali",
        example: "The missile was launched."
    },
    {
        word: "troop",
        meaning: "pasukan",
        example: "Troops were deployed."
    },
    {
        word: "battalion",
        meaning: "batalyon",
        example: "A battalion marched forward."
    },
    {
        word: "parliament",
        meaning: "parlemen",
        example: "The parliament passed the law."
    },
    {
        word: "senate",
        meaning: "senat",
        example: "The senate voted on the bill."
    },
    {
        word: "congress",
        meaning: "kongres",
        example: "Congress debated the issue."
    },
    {
        word: "governor",
        meaning: "gubernur",
        example: "The governor visited the city."
    },
    {
        word: "mayor",
        meaning: "walikota",
        example: "The mayor opened the new park."
    },
    {
        word: "ambassador",
        meaning: "duta besar",
        example: "The ambassador represents his country."
    },
    {
        word: "diplomat",
        meaning: "diplomat",
        example: "He is a skilled diplomat."
    },
    {
        word: "treaty",
        meaning: "perjanjian",
        example: "The two countries signed a treaty."
    },
    {
        word: "alliance",
        meaning: "aliansi",
        example: "They formed an alliance."
    },
    {
        word: "sanction",
        meaning: "sanksi",
        example: "The country faced sanctions."
    },

      {
        word: "astronaut",
        meaning: "astronot",
        example: "The astronaut traveled to space."
    },
    {
        word: "spaceship",
        meaning: "pesawat luar angkasa",
        example: "The spaceship landed safely."
    },
    {
        word: "rocket",
        meaning: "roket",
        example: "The rocket launched into orbit."
    },
    {
        word: "satellite",
        meaning: "satelit",
        example: "The satellite orbits the earth."
    },
    {
        word: "orbit",
        meaning: "orbit",
        example: "The moon is in orbit around the earth."
    },
    {
        word: "telescope",
        meaning: "teleskop",
        example: "We used a telescope to see stars."
    },
    {
        word: "astronomy",
        meaning: "astronomi",
        example: "He studies astronomy."
    },
    {
        word: "Mars",
        meaning: "Mars",
        example: "Scientists study Mars."
    },
    {
        word: "Jupiter",
        meaning: "Jupiter",
        example: "Jupiter is the largest planet."
    },
    {
        word: "Saturn",
        meaning: "Saturnus",
        example: "Saturn has beautiful rings."
    },
    {
        word: "Mercury",
        meaning: "Merkurius",
        example: "Mercury is closest to the sun."
    },
    {
        word: "Venus",
        meaning: "Venus",
        example: "Venus is very hot."
    },
    {
        word: "Neptune",
        meaning: "Neptunus",
        example: "Neptune is far from the sun."
    },
    {
        word: "solar system",
        meaning: "tata surya",
        example: "Our solar system has eight planets."
    },
    {
        word: "black hole",
        meaning: "lubang hitam",
        example: "A black hole absorbs light."
    },
    {
        word: "space station",
        meaning: "stasiun luar angkasa",
        example: "The space station orbits Earth."
    },
    {
        word: "nitrogen",
        meaning: "nitrogen",
        example: "Air is mostly nitrogen."
    },
    {
        word: "helium",
        meaning: "helium",
        example: "Balloons are filled with helium."
    },
    {
        word: "iron",
        meaning: "besi",
        example: "Iron is a strong metal."
    },
    {
        word: "copper",
        meaning: "tembaga",
        example: "Copper conducts electricity well."
    },
    {
        word: "zinc",
        meaning: "seng",
        example: "Zinc is used to coat steel."
    },
    {
        word: "sodium",
        meaning: "natrium",
        example: "Sodium reacts with water."
    },
    {
        word: "calcium",
        meaning: "kalsium",
        example: "Calcium strengthens bones."
    },
    {
        word: "acid",
        meaning: "asam",
        example: "The acid is corrosive."
    },
    {
        word: "base",
        meaning: "basa",
        example: "Soap is a base."
    },
    {
        word: "solution",
        meaning: "larutan",
        example: "Mix the solution carefully."
    },
    {
        word: "compound",
        meaning: "senyawa",
        example: "Water is a compound."
    },
    {
        word: "element",
        meaning: "unsur",
        example: "Oxygen is a chemical element."
    },
    {
        word: "reaction",
        meaning: "reaksi",
        example: "The reaction produced heat."
    },
    {
        word: "kidney",
        meaning: "ginjal",
        example: "The kidney filters blood."
    },
    {
        word: "liver",
        meaning: "hati (organ)",
        example: "The liver processes toxins."
    },
    {
        word: "intestine",
        meaning: "usus",
        example: "Food passes through the intestine."
    },
    {
        word: "spine",
        meaning: "tulang belakang",
        example: "He injured his spine."
    },
    {
        word: "skull",
        meaning: "tengkorak",
        example: "The skull protects the brain."
    },
    {
        word: "rib",
        meaning: "tulang rusuk",
        example: "He broke a rib."
    },
    {
        word: "joint",
        meaning: "sendi",
        example: "My knee joint hurts."
    },
    {
        word: "nerve",
        meaning: "saraf",
        example: "The nerve sends signals to the brain."
    },
    {
        word: "artery",
        meaning: "arteri",
        example: "Blood flows through the artery."
    },
    {
        word: "vein",
        meaning: "pembuluh darah",
        example: "The nurse found the vein."
    },
    {
        word: "pulse",
        meaning: "denyut nadi",
        example: "Check the patient's pulse."
    },
    {
        word: "diabetes",
        meaning: "diabetes",
        example: "He has diabetes."
    },
    {
        word: "cancer",
        meaning: "kanker",
        example: "She is being treated for cancer."
    },
    {
        word: "asthma",
        meaning: "asma",
        example: "He uses an inhaler for his asthma."
    },
    {
        word: "stroke",
        meaning: "stroke",
        example: "He suffered a stroke."
    },
    {
        word: "heart attack",
        meaning: "serangan jantung",
        example: "He had a heart attack."
    },
    {
        word: "symptom",
        meaning: "gejala",
        example: "The doctor asked about her symptoms."
    },
    {
        word: "diagnosis",
        meaning: "diagnosis",
        example: "The diagnosis confirmed the illness."
    },
    {
        word: "treatment",
        meaning: "perawatan",
        example: "The treatment was successful."
    },
    {
        word: "therapy",
        meaning: "terapi",
        example: "She started physical therapy."
    },
    {
        word: "vaccine",
        meaning: "vaksin",
        example: "The vaccine prevents disease."
    },
    {
        word: "immune system",
        meaning: "sistem kekebalan tubuh",
        example: "The immune system fights infection."
    },
    {
        word: "racket",
        meaning: "raket",
        example: "She swung the tennis racket."
    },
    {
        word: "net",
        meaning: "jaring",
        example: "The ball hit the net."
    },
    {
        word: "goal",
        meaning: "gawang",
        example: "He scored a goal."
    },
    {
        word: "helmet",
        meaning: "helm",
        example: "Wear a helmet while cycling."
    },
    {
        word: "jersey",
        meaning: "kaos tim",
        example: "He wore his team's jersey."
    },
    {
        word: "cleats",
        meaning: "sepatu bola",
        example: "He wore cleats for the match."
    },
    {
        word: "whistle",
        meaning: "peluit",
        example: "The referee blew the whistle."
    },
    {
        word: "scoreboard",
        meaning: "papan skor",
        example: "Check the scoreboard."
    },
    {
        word: "treadmill",
        meaning: "mesin lari",
        example: "She runs on the treadmill."
    },
    {
        word: "dumbbell",
        meaning: "dumbel",
        example: "He lifts dumbbells at the gym."
    },
    {
        word: "yoga mat",
        meaning: "matras yoga",
        example: "She practices yoga on a mat."
    },
    {
        word: "surfboard",
        meaning: "papan selancar",
        example: "He rode the waves on a surfboard."
    },
    {
        word: "skateboard",
        meaning: "papan seluncur",
        example: "The boy rode his skateboard."
    },
    {
        word: "bowling ball",
        meaning: "bola bowling",
        example: "He rolled the bowling ball."
    },
    {
        word: "golf club",
        meaning: "tongkat golf",
        example: "He swung his golf club."
    },
    {
        word: "baseball bat",
        meaning: "tongkat baseball",
        example: "He hit the ball with a bat."
    },
    {
        word: "hockey stick",
        meaning: "tongkat hoki",
        example: "She held her hockey stick."
    },
    {
        word: "boxing gloves",
        meaning: "sarung tinju",
        example: "The boxer put on his gloves."
    },
    {
        word: "hobby",
        meaning: "hobi",
        example: "Reading is her hobby."
    },
    {
        word: "knitting",
        meaning: "merajut",
        example: "She enjoys knitting sweaters."
    },
    {
        word: "sewing",
        meaning: "menjahit",
        example: "Sewing takes patience."
    },
    {
        word: "origami",
        meaning: "origami",
        example: "He folds paper into origami."
    },
    {
        word: "pottery",
        meaning: "keramik/tembikar",
        example: "She makes pottery by hand."
    },
    {
        word: "carving",
        meaning: "ukiran",
        example: "He does wood carving."
    },
    {
        word: "collecting",
        meaning: "mengoleksi",
        example: "He enjoys collecting stamps."
    },
    {
        word: "gardening",
        meaning: "berkebun",
        example: "Gardening is relaxing."
    },
    {
        word: "fishing",
        meaning: "memancing",
        example: "We went fishing on the lake."
    },
    {
        word: "hiking",
        meaning: "mendaki",
        example: "Hiking is great exercise."
    },
    {
        word: "photography",
        meaning: "fotografi",
        example: "Photography is his passion."
    },
    {
        word: "chess",
        meaning: "catur",
        example: "They played a game of chess."
    },
    {
        word: "puzzle",
        meaning: "teka-teki",
        example: "She solved the puzzle."
    },
    {
        word: "crossword",
        meaning: "teka-teki silang",
        example: "He does the crossword every morning."
    },
    {
        word: "board game",
        meaning: "permainan papan",
        example: "We played a board game."
    },
    {
        word: "card game",
        meaning: "permainan kartu",
        example: "They played a card game."
    },
    {
        word: "video game",
        meaning: "permainan video",
        example: "He plays video games daily."
    },
    {
        word: "collector",
        meaning: "kolektor",
        example: "He is a stamp collector."
    },
    {
        word: "smartphone",
        meaning: "ponsel pintar",
        example: "She uses her smartphone daily."
    },
    {
        word: "tablet",
        meaning: "tablet",
        example: "He reads books on his tablet."
    },
    {
        word: "laptop",
        meaning: "laptop",
        example: "I work on my laptop."
    },
    {
        word: "earbuds",
        meaning: "earphone kecil",
        example: "She listens to music with earbuds."
    },
    {
        word: "smartwatch",
        meaning: "jam pintar",
        example: "He tracks his steps with a smartwatch."
    },
    {
        word: "router",
        meaning: "router",
        example: "The router provides WiFi."
    },
    {
        word: "wifi",
        meaning: "wifi",
        example: "Connect to the wifi."
    },
    {
        word: "hashtag",
        meaning: "tagar",
        example: "Use a hashtag on social media."
    },
    {
        word: "username",
        meaning: "nama pengguna",
        example: "Enter your username."
    },
    {
        word: "profile",
        meaning: "profil",
        example: "Update your profile."
    },
    {
        word: "follower",
        meaning: "pengikut",
        example: "She has many followers online."
    },
    {
        word: "livestream",
        meaning: "siaran langsung",
        example: "They watched the livestream."
    },
    {
        word: "notification",
        meaning: "notifikasi",
        example: "I got a notification."
    },
    {
        word: "rose",
        meaning: "mawar",
        example: "She received a bouquet of roses."
    },
    {
        word: "tulip",
        meaning: "tulip",
        example: "Tulips bloom in spring."
    },
    {
        word: "sunflower",
        meaning: "bunga matahari",
        example: "The sunflower faces the sun."
    },
    {
        word: "orchid",
        meaning: "anggrek",
        example: "The orchid is delicate."
    },
    {
        word: "jasmine",
        meaning: "melati",
        example: "Jasmine has a sweet smell."
    },
    {
        word: "lily",
        meaning: "bunga lili",
        example: "The lily is white."
    },
    {
        word: "daisy",
        meaning: "bunga aster",
        example: "She picked a daisy."
    },
    {
        word: "cactus",
        meaning: "kaktus",
        example: "The cactus needs little water."
    },
    {
        word: "bamboo",
        meaning: "bambu",
        example: "Bamboo grows quickly."
    },
    {
        word: "palm tree",
        meaning: "pohon palem",
        example: "Palm trees line the beach."
    },
    {
        word: "oak tree",
        meaning: "pohon ek",
        example: "The oak tree is very old."
    },
    {
        word: "pine tree",
        meaning: "pohon pinus",
        example: "Pine trees grow in cold climates."
    },
    {
        word: "bush",
        meaning: "semak",
        example: "Trim the bush."
    },
    {
        word: "vine",
        meaning: "tanaman merambat",
        example: "The vine climbs the wall."
    },
    {
        word: "root",
        meaning: "akar",
        example: "The root absorbs water."
    },
    {
        word: "stem",
        meaning: "batang",
        example: "The stem holds the flower."
    },
    {
        word: "leaf",
        meaning: "daun",
        example: "The leaf turned yellow."
    },
    {
        word: "petal",
        meaning: "kelopak bunga",
        example: "The petal fell off the flower."
    },
    {
        word: "ice cream",
        meaning: "es krim",
        example: "I love chocolate ice cream."
    },
    {
        word: "chocolate",
        meaning: "cokelat",
        example: "She loves chocolate."
    },
    {
        word: "candy",
        meaning: "permen",
        example: "Kids love candy."
    },
    {
        word: "cookie",
        meaning: "kue kering",
        example: "She baked cookies."
    },
    {
        word: "pudding",
        meaning: "puding",
        example: "We had pudding for dessert."
    },
    {
        word: "pie",
        meaning: "pai",
        example: "She baked an apple pie."
    },
    {
        word: "donut",
        meaning: "donat",
        example: "He ate a donut for breakfast."
    },
    {
        word: "pastry",
        meaning: "pastri",
        example: "The bakery sells fresh pastries."
    },
    {
        word: "caramel",
        meaning: "karamel",
        example: "The caramel is sticky and sweet."
    },
    {
        word: "smoothie",
        meaning: "smoothie",
        example: "She made a fruit smoothie."
    },
    {
        word: "milkshake",
        meaning: "milkshake",
        example: "He drank a chocolate milkshake."
    },
    {
        word: "soda",
        meaning: "soda",
        example: "He drank a cold soda."
    },
    {
        word: "lemonade",
        meaning: "limun",
        example: "We made fresh lemonade."
    },
    {
        word: "cocktail",
        meaning: "koktail",
        example: "They ordered cocktails."
    },
    {
        word: "wine",
        meaning: "anggur",
        example: "They drank red wine."
    },
    {
        word: "beer",
        meaning: "bir",
        example: "He ordered a cold beer."
    },
    {
        word: "cutlery",
        meaning: "peralatan makan",
        example: "Set the cutlery on the table."
    },
    {
        word: "chopsticks",
        meaning: "sumpit",
        example: "She eats with chopsticks."
    },
    {
        word: "tablecloth",
        meaning: "taplak meja",
        example: "The tablecloth is white."
    },
    {
        word: "tray",
        meaning: "nampan",
        example: "Carry the food on a tray."
    },
    {
        word: "teapot",
        meaning: "teko teh",
        example: "Pour tea from the teapot."
    },
    {
        word: "kettle",
        meaning: "ketel",
        example: "Boil water in the kettle."
    },
    {
        word: "thermos",
        meaning: "termos",
        example: "Keep the drink warm in a thermos."
    },
    {
        word: "cutting board",
        meaning: "talenan",
        example: "Chop vegetables on the cutting board."
    },
    {
        word: "colander",
        meaning: "saringan",
        example: "Drain the pasta with a colander."
    },
    {
        word: "whisk",
        meaning: "pengocok telur",
        example: "Whisk the eggs."
    },
    {
        word: "grater",
        meaning: "parutan",
        example: "Grate the cheese with a grater."
    },
    {
        word: "ladle",
        meaning: "sendok sup",
        example: "Serve soup with a ladle."
    },
    {
        word: "spatula",
        meaning: "spatula",
        example: "Flip the pancake with a spatula."
    },
    {
        word: "tongs",
        meaning: "penjepit makanan",
        example: "Use tongs to grab the meat."
    },
    {
        word: "west",
        meaning: "barat",
        example: "The sun sets in the west."
    },
    {
        word: "northeast",
        meaning: "timur laut",
        example: "The wind blows from the northeast."
    },
    {
        word: "northwest",
        meaning: "barat laut",
        example: "We drove northwest."
    },
    {
        word: "southeast",
        meaning: "tenggara",
        example: "The island is southeast of here."
    },
    {
        word: "southwest",
        meaning: "barat daya",
        example: "They live in the southwest."
    },
    {
        word: "compass",
        meaning: "kompas",
        example: "Use a compass to find north."
    },
    {
        word: "direction",
        meaning: "arah",
        example: "Which direction should we go?"
    },
    {
        word: "straight",
        meaning: "lurus",
        example: "Go straight ahead."
    },
    {
        word: "turn",
        meaning: "belok",
        example: "Turn left at the corner."
    },

      {
        word: "you",
        meaning: "kamu",
        example: "You are my friend."
    },
    {
        word: "we",
        meaning: "kita",
        example: "We are happy."
    },
    {
        word: "they",
        meaning: "mereka",
        example: "They live nearby."
    },
    {
        word: "us",
        meaning: "kami/kita",
        example: "Come with us."
    },
    {
        word: "them",
        meaning: "mereka",
        example: "I saw them yesterday."
    },
    {
        word: "his",
        meaning: "miliknya (laki-laki)",
        example: "This is his book."
    },
    {
        word: "hers",
        meaning: "miliknya (perempuan)",
        example: "This bag is hers."
    },
    {
        word: "yours",
        meaning: "milikmu",
        example: "Is this pen yours?"
    },
    {
        word: "ours",
        meaning: "milik kita",
        example: "This house is ours."
    },
    {
        word: "theirs",
        meaning: "milik mereka",
        example: "That car is theirs."
    },
    {
        word: "yourself",
        meaning: "dirimu sendiri",
        example: "Take care of yourself."
    },
    {
        word: "yourselves",
        meaning: "diri kalian sendiri",
        example: "Enjoy yourselves at the party."
    },
    {
        word: "themselves",
        meaning: "diri mereka sendiri",
        example: "They did it themselves."
    },
    {
        word: "this",
        meaning: "ini",
        example: "This is my book."
    },
    {
        word: "that",
        meaning: "itu",
        example: "That is her car."
    },
    {
        word: "these",
        meaning: "ini (jamak)",
        example: "These are my shoes."
    },
    {
        word: "those",
        meaning: "itu (jamak)",
        example: "Those are her books."
    },
    {
        word: "someone",
        meaning: "seseorang",
        example: "Someone called you."
    },
    {
        word: "somebody",
        meaning: "seseorang",
        example: "Somebody left this here."
    },
    {
        word: "anyone",
        meaning: "siapa saja",
        example: "Is anyone home?"
    },
    {
        word: "anybody",
        meaning: "siapa saja",
        example: "Anybody can join."
    },
    {
        word: "everyone",
        meaning: "semua orang",
        example: "Everyone loves her."
    },
    {
        word: "everybody",
        meaning: "semua orang",
        example: "Everybody is welcome."
    },
    {
        word: "no one",
        meaning: "tidak ada orang",
        example: "No one answered the phone."
    },
    {
        word: "nobody",
        meaning: "tidak ada orang",
        example: "Nobody knows the answer."
    },
    {
        word: "each other",
        meaning: "satu sama lain",
        example: "They helped each other."
    },
    {
        word: "one another",
        meaning: "satu sama lain",
        example: "They support one another."
    },
    {
        word: "either",
        meaning: "salah satu",
        example: "Either way is fine."
    },
    {
        word: "neither",
        meaning: "tidak keduanya",
        example: "Neither option works."
    },
    {
        word: "both",
        meaning: "keduanya",
        example: "Both of them agreed."
    },
    {
        word: "all",
        meaning: "semua",
        example: "All of us are ready."
    },
    {
        word: "some",
        meaning: "beberapa",
        example: "Some of them left early."
    },
    {
        word: "any",
        meaning: "apapun",
        example: "Do you have any questions?"
    },
    {
        word: "none",
        meaning: "tidak satupun",
        example: "None of them came."
    },
    {
        word: "several",
        meaning: "beberapa",
        example: "Several people arrived late."
    },
    {
        word: "other",
        meaning: "yang lain",
        example: "The other students left."
    },
    {
        word: "another",
        meaning: "yang lain",
        example: "Give me another example."
    },
    {
        word: "such",
        meaning: "seperti itu",
        example: "I've never seen such beauty."
    },

      {
        word: "above",
        meaning: "di atas",
        example: "The picture hangs above the sofa."
    },
    {
        word: "beyond",
        meaning: "di luar/melampaui",
        example: "The village is beyond the hills."
    },
    {
        word: "throughout",
        meaning: "sepanjang",
        example: "It rained throughout the day."
    },
    {
        word: "underneath",
        meaning: "di bawah",
        example: "The cat hid underneath the bed."
    },
    {
        word: "alongside",
        meaning: "di samping",
        example: "He walked alongside his friend."
    },
    {
        word: "amid",
        meaning: "di tengah",
        example: "She stayed calm amid the chaos."
    },
    {
        word: "towards",
        meaning: "menuju",
        example: "We walked towards the beach."
    },
    {
        word: "onto",
        meaning: "ke atas",
        example: "The cat jumped onto the table."
    },
    {
        word: "outside of",
        meaning: "di luar dari",
        example: "It happened outside of school hours."
    },
    {
        word: "regarding",
        meaning: "mengenai",
        example: "I have a question regarding the report."
    },
    {
        word: "concerning",
        meaning: "mengenai",
        example: "This is concerning your application."
    },
    {
        word: "via",
        meaning: "melalui",
        example: "We traveled via train."
    },
    {
        word: "per",
        meaning: "per/setiap",
        example: "We pay $10 per hour."
    },
    {
        word: "versus",
        meaning: "lawan",
        example: "Team A versus Team B."
    },
    {
        word: "nearby",
        meaning: "di dekat sini",
        example: "There is a store nearby."
    },
    {
        word: "elsewhere",
        meaning: "di tempat lain",
        example: "Let's look elsewhere."
    },
    {
        word: "indoors",
        meaning: "di dalam ruangan",
        example: "We stayed indoors during the storm."
    },
    {
        word: "outdoors",
        meaning: "di luar ruangan",
        example: "Kids love playing outdoors."
    },
    {
        word: "upstairs",
        meaning: "di lantai atas",
        example: "She is upstairs."
    },
    {
        word: "downstairs",
        meaning: "di lantai bawah",
        example: "The kitchen is downstairs."
    },
    {
        word: "abroad",
        meaning: "di luar negeri",
        example: "He studies abroad."
    },
    {
        word: "nowhere",
        meaning: "tidak di mana pun",
        example: "The keys are nowhere to be found."
    },
    {
        word: "anywhere",
        meaning: "di mana saja",
        example: "Sit anywhere you like."
    },
    {
        word: "somewhere",
        meaning: "di suatu tempat",
        example: "I left it somewhere in the room."
    },
    {
        word: "everywhere",
        meaning: "di mana-mana",
        example: "She looked everywhere for her phone."
    },
    {
        word: "backward",
        meaning: "mundur",
        example: "Take one step backward."
    },
    {
        word: "forward",
        meaning: "maju",
        example: "Move the chair forward."
    },
    {
        word: "sideways",
        meaning: "ke samping",
        example: "The car skidded sideways."
    },
    {
        word: "clockwise",
        meaning: "searah jarum jam",
        example: "Turn the knob clockwise."
    },
    {
        word: "counterclockwise",
        meaning: "berlawanan arah jarum jam",
        example: "Turn it counterclockwise."
    },
    {
        word: "simultaneously",
        meaning: "secara bersamaan",
        example: "Both events happened simultaneously."
    },
    {
        word: "meanwhile",
        meaning: "sementara itu",
        example: "Meanwhile, the food was getting cold."
    },
    {
        word: "nevertheless",
        meaning: "meskipun demikian",
        example: "It was raining; nevertheless, we went out."
    },
    {
        word: "nonetheless",
        meaning: "namun demikian",
        example: "The task was hard; nonetheless, we finished it."
    },
    {
        word: "otherwise",
        meaning: "jika tidak",
        example: "Study hard, otherwise you will fail."
    },
    {
        word: "thereby",
        meaning: "dengan demikian",
        example: "He worked hard, thereby earning a promotion."
    },
    {
        word: "hence",
        meaning: "oleh karena itu",
        example: "He was sick, hence his absence."
    },
    {
        word: "thus",
        meaning: "dengan demikian",
        example: "Thus, we conclude the meeting."
    },
    {
        word: "Indonesia",
        meaning: "Indonesia",
        example: "Indonesia is a large country."
    },
    {
        word: "Indonesian",
        meaning: "orang Indonesia/bahasa Indonesia",
        example: "She is Indonesian."
    },
    {
        word: "America",
        meaning: "Amerika",
        example: "He is from America."
    },
    {
        word: "American",
        meaning: "orang Amerika",
        example: "She is American."
    },
    {
        word: "England",
        meaning: "Inggris (negara)",
        example: "He lives in England."
    },
    {
        word: "English",
        meaning: "orang Inggris/bahasa Inggris",
        example: "She speaks English."
    },
    {
        word: "China",
        meaning: "Tiongkok",
        example: "He traveled to China."
    },
    {
        word: "Chinese",
        meaning: "orang Tionghoa/bahasa Mandarin",
        example: "She speaks Chinese."
    },
    {
        word: "Japan",
        meaning: "Jepang",
        example: "He visited Japan."
    },
    {
        word: "Japanese",
        meaning: "orang Jepang/bahasa Jepang",
        example: "She learns Japanese."
    },
    {
        word: "Korea",
        meaning: "Korea",
        example: "He is from Korea."
    },
    {
        word: "Korean",
        meaning: "orang Korea/bahasa Korea",
        example: "She loves Korean food."
    },
    {
        word: "India",
        meaning: "India",
        example: "He was born in India."
    },
    {
        word: "Indian",
        meaning: "orang India",
        example: "She is Indian."
    },
    {
        word: "Malaysia",
        meaning: "Malaysia",
        example: "Malaysia is our neighbor."
    },
    {
        word: "Malaysian",
        meaning: "orang Malaysia",
        example: "He is Malaysian."
    },
    {
        word: "Australia",
        meaning: "Australia",
        example: "They live in Australia."
    },
    {
        word: "Australian",
        meaning: "orang Australia",
        example: "She is Australian."
    },
    {
        word: "France",
        meaning: "Prancis",
        example: "He studied in France."
    },
    {
        word: "French",
        meaning: "orang Prancis/bahasa Prancis",
        example: "She speaks French."
    },
    {
        word: "Germany",
        meaning: "Jerman",
        example: "He works in Germany."
    },
    {
        word: "German",
        meaning: "orang Jerman/bahasa Jerman",
        example: "He speaks German."
    },
    {
        word: "Spain",
        meaning: "Spanyol",
        example: "They traveled to Spain."
    },
    {
        word: "Spanish",
        meaning: "orang Spanyol/bahasa Spanyol",
        example: "She speaks Spanish."
    },
    {
        word: "Arab",
        meaning: "orang Arab",
        example: "He is of Arab descent."
    },
    {
        word: "Arabic",
        meaning: "bahasa Arab",
        example: "He reads Arabic."
    },
    {
        word: "rupiah",
        meaning: "rupiah",
        example: "I paid in rupiah."
    },
    {
        word: "dollar",
        meaning: "dolar",
        example: "The price is in dollars."
    },
    {
        word: "euro",
        meaning: "euro",
        example: "They pay with euros."
    },
    {
        word: "yen",
        meaning: "yen",
        example: "Japan uses yen."
    },
    {
        word: "pound",
        meaning: "poundsterling",
        example: "The UK uses pounds."
    },
    {
        word: "ringgit",
        meaning: "ringgit",
        example: "Malaysia uses ringgit."
    },
    {
        word: "baht",
        meaning: "baht",
        example: "Thailand uses baht."
    },
    {
        word: "currency",
        meaning: "mata uang",
        example: "Check the local currency."
    },
    {
        word: "exchange rate",
        meaning: "kurs",
        example: "The exchange rate changed."
    },
    {
        word: "bitter",
        meaning: "pahit",
        example: "This coffee is bitter."
    },
    {
        word: "sour",
        meaning: "asam",
        example: "The lemon is sour."
    },
    {
        word: "salty",
        meaning: "asin",
        example: "The soup is too salty."
    },
    {
        word: "bland",
        meaning: "hambar",
        example: "The food tastes bland."
    },
    {
        word: "crunchy",
        meaning: "renyah",
        example: "The chips are crunchy."
    },
    {
        word: "chewy",
        meaning: "kenyal",
        example: "The candy is chewy."
    },
    {
        word: "sticky",
        meaning: "lengket",
        example: "My hands are sticky."
    },
    {
        word: "greasy",
        meaning: "berminyak",
        example: "The food is greasy."
    },
    {
        word: "moist",
        meaning: "lembap",
        example: "The cake is moist."
    },
    {
        word: "stale",
        meaning: "basi/tidak segar",
        example: "The bread is stale."
    },
    {
        word: "rotten",
        meaning: "busuk",
        example: "The fruit is rotten."
    },
    {
        word: "ripe",
        meaning: "matang (buah)",
        example: "The banana is ripe."
    },
    {
        word: "raw",
        meaning: "mentah",
        example: "She eats raw vegetables."
    },
    {
        word: "tender",
        meaning: "empuk",
        example: "The meat is tender."
    },
    {
        word: "tough",
        meaning: "alot",
        example: "The steak is tough."
    },
    {
        word: "fluffy",
        meaning: "empuk mengembang",
        example: "The pillow is fluffy."
    },
    {
        word: "silky",
        meaning: "selembut sutra",
        example: "Her hair is silky."
    },
    {
        word: "furry",
        meaning: "berbulu",
        example: "The kitten is furry."
    },
    {
        word: "slippery",
        meaning: "licin",
        example: "The floor is slippery."
    },
    {
        word: "sticky note",
        meaning: "catatan tempel",
        example: "Leave a sticky note on the desk."
    },
    {
        word: "switch",
        meaning: "mengganti",
        example: "Switch off the light."
    },
    {
        word: "unplug",
        meaning: "mencabut steker",
        example: "Unplug the charger."
    },
    {
        word: "plug in",
        meaning: "mencolok",
        example: "Plug in the device."
    },
    {
        word: "recharge",
        meaning: "mengisi ulang daya",
        example: "Recharge your phone."
    },
    {
        word: "shut down",
        meaning: "mematikan",
        example: "Shut down the computer."
    },
    {
        word: "restart",
        meaning: "memulai ulang",
        example: "Restart the app."
    },
    {
        word: "scroll",
        meaning: "menggulir",
        example: "Scroll down the page."
    },
    {
        word: "tap",
        meaning: "mengetuk",
        example: "Tap the screen to continue."
    },
    {
        word: "swipe",
        meaning: "menggeser",
        example: "Swipe left to delete."
    },
    {
        word: "zoom in",
        meaning: "memperbesar tampilan",
        example: "Zoom in on the photo."
    },
    {
        word: "zoom out",
        meaning: "memperkecil tampilan",
        example: "Zoom out to see more."
    },
    {
        word: "type",
        meaning: "mengetik",
        example: "Type your password."
    },
    {
        word: "click",
        meaning: "mengklik",
        example: "Click the button."
    },
    {
        word: "drag",
        meaning: "menyeret",
        example: "Drag the file to the folder."
    },
    {
        word: "copy",
        meaning: "menyalin",
        example: "Copy the text."
    },
    {
        word: "paste",
        meaning: "menempel",
        example: "Paste it here."
    },
    {
        word: "delete",
        meaning: "menghapus",
        example: "Delete the old file."
    },
    {
        word: "install",
        meaning: "memasang",
        example: "Install the app."
    },
    {
        word: "uninstall",
        meaning: "menghapus aplikasi",
        example: "Uninstall the unused app."
    },
    {
        word: "connect",
        meaning: "menghubungkan",
        example: "Connect to the internet."
    },
    {
        word: "disconnect",
        meaning: "memutuskan koneksi",
        example: "Disconnect the cable."
    },

      {
        word: "cinema",
        meaning: "bioskop",
        example: "We watched a movie at the cinema."
    },
    {
        word: "screenplay",
        meaning: "skenario",
        example: "He wrote the screenplay."
    },
    {
        word: "scene",
        meaning: "adegan",
        example: "This is a sad scene."
    },
    {
        word: "plot",
        meaning: "alur cerita",
        example: "The plot is interesting."
    },
    {
        word: "character",
        meaning: "tokoh",
        example: "The main character is brave."
    },
    {
        word: "sequel",
        meaning: "sekuel",
        example: "The sequel was better than the first."
    },
    {
        word: "trailer",
        meaning: "cuplikan film",
        example: "We watched the movie trailer."
    },
    {
        word: "subtitle",
        meaning: "subtitle",
        example: "Turn on the subtitles."
    },
    {
        word: "animation",
        meaning: "animasi",
        example: "Kids love animation movies."
    },
    {
        word: "cartoon",
        meaning: "kartun",
        example: "She watches cartoons every morning."
    },
    {
        word: "documentary",
        meaning: "film dokumenter",
        example: "We watched a documentary about nature."
    },
    {
        word: "celebrity",
        meaning: "selebriti",
        example: "She is a famous celebrity."
    },
    {
        word: "fan",
        meaning: "penggemar",
        example: "He is a big fan of the band."
    },
    {
        word: "audience rating",
        meaning: "rating penonton",
        example: "The movie got a high rating."
    },
    {
        word: "box office",
        meaning: "box office",
        example: "The film topped the box office."
    },
    {
        word: "premiere",
        meaning: "pemutaran perdana",
        example: "We attended the movie premiere."
    },
    {
        word: "mathematics",
        meaning: "matematika",
        example: "Mathematics is my favorite subject."
    },
    {
        word: "physics",
        meaning: "fisika",
        example: "He studies physics at university."
    },
    {
        word: "chemistry",
        meaning: "kimia",
        example: "Chemistry class is interesting."
    },
    {
        word: "biology",
        meaning: "biologi",
        example: "She loves biology."
    },
    {
        word: "geography",
        meaning: "geografi",
        example: "We learn geography at school."
    },
    {
        word: "literature",
        meaning: "sastra",
        example: "She studies literature."
    },
    {
        word: "philosophy",
        meaning: "filsafat",
        example: "He is interested in philosophy."
    },
    {
        word: "psychology",
        meaning: "psikologi",
        example: "She majors in psychology."
    },
    {
        word: "economics",
        meaning: "ekonomi",
        example: "He studies economics."
    },
    {
        word: "sociology",
        meaning: "sosiologi",
        example: "Sociology examines society."
    },
    {
        word: "anthropology",
        meaning: "antropologi",
        example: "She studies anthropology."
    },
    {
        word: "linguistics",
        meaning: "linguistik",
        example: "He studies linguistics."
    },
    {
        word: "astronomy",
        meaning: "astronomi",
        example: "He studies astronomy."
    },
    {
        word: "geology",
        meaning: "geologi",
        example: "Geology studies the earth's structure."
    },
    {
        word: "engineering",
        meaning: "teknik",
        example: "He studies engineering."
    },
    {
        word: "medicine",
        meaning: "kedokteran",
        example: "She studies medicine."
    },
    {
        word: "law",
        meaning: "ilmu hukum",
        example: "He studies law."
    },
    {
        word: "karate",
        meaning: "karate",
        example: "He practices karate."
    },
    {
        word: "taekwondo",
        meaning: "taekwondo",
        example: "She learns taekwondo."
    },
    {
        word: "judo",
        meaning: "judo",
        example: "He competes in judo."
    },
    {
        word: "boxing",
        meaning: "tinju",
        example: "He trains in boxing."
    },
    {
        word: "wrestling",
        meaning: "gulat",
        example: "They watched a wrestling match."
    },
    {
        word: "fencing",
        meaning: "anggar",
        example: "She practices fencing."
    },
    {
        word: "archery",
        meaning: "memanah",
        example: "He is skilled in archery."
    },
    {
        word: "gymnastics",
        meaning: "senam",
        example: "She does gymnastics."
    },
    {
        word: "cycling",
        meaning: "bersepeda",
        example: "Cycling is good exercise."
    },
    {
        word: "skiing",
        meaning: "ski",
        example: "They go skiing in winter."
    },
    {
        word: "surfing",
        meaning: "berselancar",
        example: "He loves surfing."
    },
    {
        word: "diving",
        meaning: "menyelam",
        example: "We went diving in the sea."
    },
    {
        word: "rowing",
        meaning: "mendayung",
        example: "They practice rowing."
    },
    {
        word: "marathon",
        meaning: "maraton",
        example: "She ran a marathon."
    },
    {
        word: "triathlon",
        meaning: "triatlon",
        example: "He competed in a triathlon."
    },
    {
        word: "engine hood",
        meaning: "kap mesin",
        example: "Open the engine hood."
    },
    {
        word: "trunk",
        meaning: "bagasi mobil",
        example: "Put the bags in the trunk."
    },
    {
        word: "bumper",
        meaning: "bemper",
        example: "The bumper is damaged."
    },
    {
        word: "exhaust pipe",
        meaning: "knalpot",
        example: "Smoke came from the exhaust pipe."
    },
    {
        word: "gas tank",
        meaning: "tangki bensin",
        example: "Fill the gas tank."
    },
    {
        word: "dashboard",
        meaning: "dasbor",
        example: "The dashboard shows the speed."
    },
    {
        word: "seatbelt",
        meaning: "sabuk pengaman",
        example: "Wear your seatbelt."
    },
    {
        word: "rearview mirror",
        meaning: "kaca spion belakang",
        example: "Check the rearview mirror."
    },
    {
        word: "tire",
        meaning: "ban",
        example: "The tire is flat."
    },
    {
        word: "spare tire",
        meaning: "ban serep",
        example: "We have a spare tire."
    },
    {
        word: "license plate",
        meaning: "plat nomor",
        example: "The license plate is muddy."
    },
    {
        word: "clutch",
        meaning: "kopling",
        example: "Press the clutch."
    },
    {
        word: "accelerator",
        meaning: "pedal gas",
        example: "Press the accelerator."
    },
    {
        word: "interest rate",
        meaning: "suku bunga",
        example: "The interest rate increased."
    },
    {
        word: "deposit",
        meaning: "setoran",
        example: "Make a deposit at the bank."
    },
    {
        word: "withdrawal",
        meaning: "penarikan",
        example: "He made a withdrawal."
    },
    {
        word: "transfer",
        meaning: "transfer",
        example: "She transferred money to her friend."
    },
    {
        word: "balance",
        meaning: "saldo",
        example: "Check your account balance."
    },
    {
        word: "statement",
        meaning: "laporan rekening",
        example: "Review your bank statement."
    },
    {
        word: "ATM",
        meaning: "ATM",
        example: "I withdrew cash from the ATM."
    },
    {
        word: "PIN",
        meaning: "PIN",
        example: "Enter your PIN."
    },
    {
        word: "installment",
        meaning: "cicilan",
        example: "Pay in monthly installments."
    },
    {
        word: "insurance",
        meaning: "asuransi",
        example: "He has health insurance."
    },
    {
        word: "premium",
        meaning: "premi",
        example: "Pay your insurance premium."
    },
    {
        word: "stock",
        meaning: "saham",
        example: "She invests in stocks."
    },
    {
        word: "share",
        meaning: "saham",
        example: "He bought shares in the company."
    },
    {
        word: "dividend",
        meaning: "dividen",
        example: "Investors receive dividends."
    },
    {
        word: "prime minister",
        meaning: "perdana menteri",
        example: "The prime minister gave a speech."
    },
    {
        word: "vice president",
        meaning: "wakil presiden",
        example: "The vice president attended the event."
    },
    {
        word: "cabinet",
        meaning: "kabinet",
        example: "The president formed a new cabinet."
    },
    {
        word: "parliament member",
        meaning: "anggota parlemen",
        example: "She is a parliament member."
    },
    {
        word: "council",
        meaning: "dewan",
        example: "The city council met today."
    },
    {
        word: "committee",
        meaning: "panitia/komite",
        example: "The committee reviewed the plan."
    },
    {
        word: "regulation",
        meaning: "peraturan",
        example: "New regulations were announced."
    },
    {
        word: "legislation",
        meaning: "perundang-undangan",
        example: "The legislation passed."
    },
    {
        word: "bureaucracy",
        meaning: "birokrasi",
        example: "The bureaucracy is slow."
    },
    {
        word: "public service",
        meaning: "layanan publik",
        example: "This is a public service."
    },
    {
        word: "novel",
        meaning: "novel",
        example: "She wrote a bestselling novel."
    },
    {
        word: "poem",
        meaning: "puisi",
        example: "He wrote a beautiful poem."
    },
    {
        word: "poet",
        meaning: "penyair",
        example: "She is a talented poet."
    },
    {
        word: "chapter",
        meaning: "bab",
        example: "Read the first chapter."
    },
    {
        word: "paragraph",
        meaning: "paragraf",
        example: "Write a five-sentence paragraph."
    },
    {
        word: "sentence",
        meaning: "kalimat",
        example: "Write a complete sentence."
    },
    {
        word: "phrase",
        meaning: "frasa",
        example: "This is a common phrase."
    },
    {
        word: "essay",
        meaning: "esai",
        example: "She wrote an essay about climate change."
    },
    {
        word: "biography",
        meaning: "biografi",
        example: "He read a biography of the president."
    },
    {
        word: "autobiography",
        meaning: "autobiografi",
        example: "She wrote her autobiography."
    },
    {
        word: "fiction",
        meaning: "fiksi",
        example: "This story is fiction."
    },
    {
        word: "nonfiction",
        meaning: "nonfiksi",
        example: "He prefers nonfiction books."
    },
    {
        word: "manuscript",
        meaning: "naskah",
        example: "The manuscript was submitted."
    },
    {
        word: "plagiarism",
        meaning: "plagiarisme",
        example: "Plagiarism is not allowed."
    },
    {
        word: "rainbow",
        meaning: "pelangi",
        example: "We saw a rainbow after the rain."
    },
    {
        word: "drizzle",
        meaning: "gerimis",
        example: "It's just a light drizzle."
    },
    {
        word: "downpour",
        meaning: "hujan deras",
        example: "There was a sudden downpour."
    },
    {
        word: "gust",
        meaning: "embusan angin kencang",
        example: "A gust of wind blew the papers away."
    },
    {
        word: "breeze",
        meaning: "angin sepoi-sepoi",
        example: "A cool breeze blew through the window."
    },
    {
        word: "dew",
        meaning: "embun",
        example: "The grass was covered in dew."
    },
    {
        word: "frost",
        meaning: "embun beku",
        example: "There was frost on the window."
    },
    {
        word: "humidity",
        meaning: "kelembapan",
        example: "The humidity is high today."
    },
    {
        word: "forecast",
        meaning: "prakiraan cuaca",
        example: "Check the weather forecast."
    },
    {
        word: "congratulations",
        meaning: "selamat",
        example: "Congratulations on your success!"
    },
    {
        word: "cheers",
        meaning: "bersulang/sorak",
        example: "Cheers to a great year!"
    },
    {
        word: "bless you",
        meaning: "semoga sehat (setelah bersin)",
        example: "Bless you! Did you catch a cold?"
    },
    {
        word: "well done",
        meaning: "kerja bagus",
        example: "Well done on your project!"
    },
    {
        word: "good luck",
        meaning: "semoga beruntung",
        example: "Good luck on your exam!"
    },
    {
        word: "take care",
        meaning: "jaga diri baik-baik",
        example: "Take care and see you soon."
    },
    {
        word: "no problem",
        meaning: "tidak masalah",
        example: "No problem, happy to help."
    },
    {
        word: "never mind",
        meaning: "tidak apa-apa/lupakan",
        example: "Never mind, it's not important."
    },
    {
        word: "of course",
        meaning: "tentu saja",
        example: "Of course, I'll help you."
    },
    {
        word: "by the way",
        meaning: "ngomong-ngomong",
        example: "By the way, have you eaten?"
    },
    {
        word: "as soon as possible",
        meaning: "secepat mungkin",
        example: "Reply as soon as possible."
    },
    {
        word: "in fact",
        meaning: "kenyataannya",
        example: "In fact, he was right all along."
    },
    {
        word: "for example",
        meaning: "sebagai contoh",
        example: "For example, take this case."
    },
    {
        word: "in general",
        meaning: "secara umum",
        example: "In general, the plan works well."
    },

      {
        word: "bathtub",
        meaning: "bak mandi",
        example: "She relaxed in the bathtub."
    },
    {
        word: "shower",
        meaning: "pancuran",
        example: "He takes a shower every morning."
    },
    {
        word: "faucet",
        meaning: "keran",
        example: "Turn off the faucet."
    },
    {
        word: "sink",
        meaning: "wastafel",
        example: "Wash your hands in the sink."
    },
    {
        word: "toilet",
        meaning: "toilet",
        example: "The toilet is clean."
    },
    {
        word: "toilet paper",
        meaning: "tisu toilet",
        example: "Buy more toilet paper."
    },
    {
        word: "bathrobe",
        meaning: "jubah mandi",
        example: "She wore a bathrobe."
    },
    {
        word: "slipper",
        meaning: "sandal rumah",
        example: "Wear your slippers."
    },
    {
        word: "mattress",
        meaning: "kasur",
        example: "The mattress is comfortable."
    },
    {
        word: "bedsheet",
        meaning: "seprai",
        example: "Change the bedsheet weekly."
    },
    {
        word: "nightstand",
        meaning: "meja samping tempat tidur",
        example: "Put the lamp on the nightstand."
    },
    {
        word: "alarm clock",
        meaning: "jam weker",
        example: "Set the alarm clock."
    },
    {
        word: "nap",
        meaning: "tidur siang",
        example: "I took a short nap."
    },
    {
        word: "insomnia",
        meaning: "insomnia",
        example: "He suffers from insomnia."
    },
    {
        word: "snore",
        meaning: "mendengkur",
        example: "He snores loudly."
    },
    {
        word: "dream",
        meaning: "bermimpi",
        example: "I dreamed about flying."
    },
    {
        word: "nightmare",
        meaning: "mimpi buruk",
        example: "She had a nightmare."
    },
    {
        word: "bedtime",
        meaning: "waktu tidur",
        example: "It's bedtime for the kids."
    },
    {
        word: "lullaby",
        meaning: "nina bobo",
        example: "She sang a lullaby."
    },
    {
        word: "phone call",
        meaning: "panggilan telepon",
        example: "I got a phone call."
    },
    {
        word: "missed call",
        meaning: "panggilan tak terjawab",
        example: "You have a missed call."
    },
    {
        word: "voicemail",
        meaning: "pesan suara",
        example: "Leave a voicemail."
    },
    {
        word: "dial",
        meaning: "menekan nomor",
        example: "Dial the number."
    },
    {
        word: "hang up",
        meaning: "menutup telepon",
        example: "Please don't hang up."
    },
    {
        word: "busy signal",
        meaning: "nada sibuk",
        example: "I got a busy signal."
    },
    {
        word: "text message",
        meaning: "pesan teks",
        example: "Send me a text message."
    },
    {
        word: "video call",
        meaning: "panggilan video",
        example: "We had a video call."
    },
    {
        word: "contact",
        meaning: "kontak",
        example: "Save this contact."
    },
    {
        word: "phone number",
        meaning: "nomor telepon",
        example: "What's your phone number?"
    },
    {
        word: "area code",
        meaning: "kode area",
        example: "What's the area code?"
    },
    {
        word: "operator",
        meaning: "operator",
        example: "Speak to the operator."
    },
    {
        word: "landline",
        meaning: "telepon rumah",
        example: "We still have a landline."
    },
    {
        word: "mall",
        meaning: "mal",
        example: "We went shopping at the mall."
    },
    {
        word: "boutique",
        meaning: "butik",
        example: "She bought a dress at the boutique."
    },
    {
        word: "supermarket",
        meaning: "supermarket",
        example: "We buy groceries at the supermarket."
    },
    {
        word: "grocery store",
        meaning: "toko kelontong",
        example: "I need to go to the grocery store."
    },
    {
        word: "checkout",
        meaning: "kasir/tempat bayar",
        example: "Wait in line at the checkout."
    },
    {
        word: "cart",
        meaning: "troli belanja",
        example: "Push the shopping cart."
    },
    {
        word: "basket",
        meaning: "keranjang belanja",
        example: "Put items in the basket."
    },
    {
        word: "price tag",
        meaning: "label harga",
        example: "Check the price tag."
    },
    {
        word: "sale",
        meaning: "obral",
        example: "There is a big sale today."
    },
    {
        word: "clearance",
        meaning: "cuci gudang",
        example: "Everything is on clearance."
    },
    {
        word: "brand name",
        meaning: "merek",
        example: "This is a popular brand name."
    },
    {
        word: "warranty",
        meaning: "garansi",
        example: "This product has a warranty."
    },
    {
        word: "refund",
        meaning: "pengembalian uang",
        example: "I asked for a refund."
    },
    {
        word: "exchange",
        meaning: "penukaran barang",
        example: "I want to exchange this shirt."
    },
    {
        word: "size chart",
        meaning: "tabel ukuran",
        example: "Check the size chart."
    },
    {
        word: "fitting room",
        meaning: "ruang pas",
        example: "Try it on in the fitting room."
    },
    {
        word: "cash register",
        meaning: "mesin kasir",
        example: "The cashier used the cash register."
    },
    {
        word: "barcode",
        meaning: "kode batang",
        example: "Scan the barcode."
    },
    {
        word: "cuisine",
        meaning: "masakan khas",
        example: "Indonesian cuisine is diverse."
    },
    {
        word: "appetizer",
        meaning: "hidangan pembuka",
        example: "We ordered an appetizer."
    },
    {
        word: "main course",
        meaning: "hidangan utama",
        example: "The main course was delicious."
    },
    {
        word: "side dish",
        meaning: "hidangan pendamping",
        example: "Rice is a common side dish."
    },
    {
        word: "buffet",
        meaning: "prasmanan",
        example: "We ate at a buffet."
    },
    {
        word: "takeout",
        meaning: "makanan bungkus",
        example: "We ordered takeout for dinner."
    },
    {
        word: "delivery",
        meaning: "pengantaran makanan",
        example: "We ordered food delivery."
    },
    {
        word: "street food",
        meaning: "jajanan kaki lima",
        example: "We tried street food in Bali."
    },
    {
        word: "barbecue",
        meaning: "panggangan",
        example: "We had a barbecue party."
    },
    {
        word: "stir fry",
        meaning: "tumis",
        example: "She made a chicken stir fry."
    },
    {
        word: "salad",
        meaning: "salad",
        example: "I ordered a fresh salad."
    },
    {
        word: "sandwich",
        meaning: "sandwic",
        example: "He made a sandwich for lunch."
    },
    {
        word: "pizza",
        meaning: "pizza",
        example: "We ordered pizza for dinner."
    },
    {
        word: "pasta",
        meaning: "pasta",
        example: "She cooked pasta with sauce."
    },
    {
        word: "sushi",
        meaning: "sushi",
        example: "We ate sushi at the restaurant."
    },
    {
        word: "curry",
        meaning: "kari",
        example: "I love spicy curry."
    },
    {
        word: "satay",
        meaning: "sate",
        example: "We ate satay with peanut sauce."
    },
    {
        word: "porridge",
        meaning: "bubur",
        example: "She ate porridge for breakfast."
    },
    {
        word: "dumpling",
        meaning: "pangsit",
        example: "We ordered dumplings."
    },
    {
        word: "kilogram",
        meaning: "kilogram",
        example: "The bag weighs two kilograms."
    },
    {
        word: "gram",
        meaning: "gram",
        example: "Add 200 grams of sugar."
    },
    {
        word: "liter",
        meaning: "liter",
        example: "Buy one liter of milk."
    },
    {
        word: "milliliter",
        meaning: "mililiter",
        example: "Add 50 milliliters of water."
    },
    {
        word: "meter",
        meaning: "meter",
        example: "The room is five meters wide."
    },
    {
        word: "centimeter",
        meaning: "sentimeter",
        example: "The paper is 30 centimeters long."
    },
    {
        word: "kilometer",
        meaning: "kilometer",
        example: "The city is 10 kilometers away."
    },
    {
        word: "mile",
        meaning: "mil",
        example: "The race is 5 miles long."
    },
    {
        word: "inch",
        meaning: "inci",
        example: "The screen is 6 inches."
    },
    {
        word: "foot",
        meaning: "kaki (satuan)",
        example: "He is six feet tall."
    },
    {
        word: "ounce",
        meaning: "ons",
        example: "Add 2 ounces of butter."
    },
    {
        word: "pound",
        meaning: "pon",
        example: "The package weighs 5 pounds."
    },
    {
        word: "ton",
        meaning: "ton",
        example: "The truck carries 10 tons."
    },
    {
        word: "dozen",
        meaning: "lusin",
        example: "I need a dozen eggs."
    },
    {
        word: "pair",
        meaning: "pasangan",
        example: "A pair of shoes."
    },
    {
        word: "pack",
        meaning: "bungkus/paket",
        example: "Buy a pack of gum."
    },
    {
        word: "bunch",
        meaning: "seikat",
        example: "A bunch of bananas."
    },
    {
        word: "bundle",
        meaning: "ikatan/bundel",
        example: "A bundle of sticks."
    },

      {
        word: "emergency",
        meaning: "keadaan darurat",
        example: "Call for help in an emergency."
    },
    {
        word: "ambulance",
        meaning: "ambulans",
        example: "The ambulance arrived quickly."
    },
    {
        word: "first aid",
        meaning: "pertolongan pertama",
        example: "She gave first aid to the injured."
    },
    {
        word: "fire extinguisher",
        meaning: "alat pemadam kebakaran",
        example: "Use the fire extinguisher."
    },
    {
        word: "evacuation",
        meaning: "evakuasi",
        example: "They followed the evacuation plan."
    },
    {
        word: "exit",
        meaning: "pintu keluar",
        example: "Find the nearest exit."
    },
    {
        word: "emergency exit",
        meaning: "pintu darurat",
        example: "Use the emergency exit."
    },
    {
        word: "alarm",
        meaning: "alarm",
        example: "The fire alarm went off."
    },
    {
        word: "siren",
        meaning: "sirene",
        example: "We heard the siren."
    },
    {
        word: "rescue team",
        meaning: "tim penyelamat",
        example: "The rescue team arrived."
    },
    {
        word: "survivor",
        meaning: "korban selamat",
        example: "The survivor was found alive."
    },
    {
        word: "victim",
        meaning: "korban",
        example: "The victim was taken to the hospital."
    },
    {
        word: "hazard",
        meaning: "bahaya",
        example: "Watch out for the hazard."
    },
    {
        word: "warning sign",
        meaning: "tanda peringatan",
        example: "Follow the warning sign."
    },
    {
        word: "safety helmet",
        meaning: "helm keselamatan",
        example: "Wear a safety helmet."
    },
    {
        word: "life jacket",
        meaning: "jaket pelampung",
        example: "Put on your life jacket."
    },
    {
        word: "first aid kit",
        meaning: "kotak P3K",
        example: "Bring a first aid kit."
    },
    {
        word: "CPR",
        meaning: "RJP (resusitasi jantung paru)",
        example: "She performed CPR."
    },
    {
        word: "emergency contact",
        meaning: "kontak darurat",
        example: "Save an emergency contact."
    },
    {
        word: "workplace",
        meaning: "tempat kerja",
        example: "The workplace is friendly."
    },
    {
        word: "office building",
        meaning: "gedung kantor",
        example: "The office building is tall."
    },
    {
        word: "cubicle",
        meaning: "bilik kerja",
        example: "He works in a small cubicle."
    },
    {
        word: "desk",
        meaning: "meja kerja",
        example: "Clean your desk."
    },
    {
        word: "workstation",
        meaning: "stasiun kerja",
        example: "Set up your workstation."
    },
    {
        word: "break room",
        meaning: "ruang istirahat",
        example: "We eat lunch in the break room."
    },
    {
        word: "overtime",
        meaning: "lembur",
        example: "He worked overtime yesterday."
    },
    {
        word: "shift",
        meaning: "shift kerja",
        example: "She works the night shift."
    },
    {
        word: "payroll",
        meaning: "penggajian",
        example: "The payroll is processed monthly."
    },
    {
        word: "promotion",
        meaning: "kenaikan jabatan",
        example: "He got a promotion."
    },
    {
        word: "performance review",
        meaning: "penilaian kinerja",
        example: "We have a performance review."
    },
    {
        word: "training",
        meaning: "pelatihan",
        example: "New employees need training."
    },
    {
        word: "onboarding",
        meaning: "orientasi kerja",
        example: "The onboarding process took a week."
    },
    {
        word: "workload",
        meaning: "beban kerja",
        example: "Her workload is heavy."
    },
    {
        word: "deadline",
        meaning: "tenggat waktu",
        example: "We have a tight deadline."
    },
    {
        word: "teamwork",
        meaning: "kerja sama tim",
        example: "Teamwork is important."
    },
    {
        word: "supervisor",
        meaning: "pengawas",
        example: "She reports to her supervisor."
    },
    {
        word: "intern",
        meaning: "magang",
        example: "He is an intern at the company."
    },
    {
        word: "internship",
        meaning: "program magang",
        example: "She completed an internship."
    },
    {
        word: "cotton",
        meaning: "katun",
        example: "This shirt is made of cotton."
    },
    {
        word: "silk",
        meaning: "sutra",
        example: "She wore a silk dress."
    },
    {
        word: "wool",
        meaning: "wol",
        example: "This sweater is made of wool."
    },
    {
        word: "leather",
        meaning: "kulit",
        example: "He wears a leather jacket."
    },
    {
        word: "denim",
        meaning: "denim",
        example: "She wears denim jeans."
    },
    {
        word: "linen",
        meaning: "linen",
        example: "The tablecloth is made of linen."
    },
    {
        word: "polyester",
        meaning: "poliester",
        example: "This fabric is polyester."
    },
    {
        word: "velvet",
        meaning: "beludru",
        example: "The curtain is made of velvet."
    },
    {
        word: "lace",
        meaning: "renda",
        example: "Her dress has lace trim."
    },
    {
        word: "nylon",
        meaning: "nilon",
        example: "The bag is made of nylon."
    },
    {
        word: "suede",
        meaning: "kulit suede",
        example: "He wears suede shoes."
    },
    {
        word: "canvas",
        meaning: "kanvas",
        example: "The bag is made of canvas."
    },
    {
        word: "hen",
        meaning: "ayam betina",
        example: "The hen laid an egg."
    },
    {
        word: "chick",
        meaning: "anak ayam",
        example: "The chick followed its mother."
    },
    {
        word: "calf",
        meaning: "anak sapi",
        example: "The calf stayed near its mother."
    },
    {
        word: "lamb",
        meaning: "anak domba",
        example: "The lamb is white and soft."
    },
    {
        word: "piglet",
        meaning: "anak babi",
        example: "The piglet is small."
    },
    {
        word: "foal",
        meaning: "anak kuda",
        example: "The foal ran in the field."
    },
    {
        word: "kitten",
        meaning: "anak kucing",
        example: "The kitten is playful."
    },
    {
        word: "puppy",
        meaning: "anak anjing",
        example: "The puppy is adorable."
    },
    {
        word: "crow",
        meaning: "gagak",
        example: "The crow perched on the wire."
    },
    {
        word: "sparrow",
        meaning: "burung pipit",
        example: "Sparrows are small birds."
    },
    {
        word: "pigeon",
        meaning: "merpati",
        example: "Pigeons gathered in the park."
    },
    {
        word: "woodpecker",
        meaning: "burung pelatuk",
        example: "The woodpecker pecked the tree."
    },
    {
        word: "stork",
        meaning: "burung bangau",
        example: "The stork flew over the field."
    },
    {
        word: "falcon",
        meaning: "elang alap-alap",
        example: "The falcon hunts small animals."
    },
    {
        word: "hawk",
        meaning: "elang",
        example: "The hawk circled above."
    },
    {
        word: "vulture",
        meaning: "burung bangkai",
        example: "Vultures eat dead animals."
    },
    {
        word: "cuckoo",
        meaning: "burung kukuk",
        example: "The cuckoo sings in the morning."
    },
    {
        word: "nightingale",
        meaning: "burung bulbul",
        example: "The nightingale sings sweetly."
    },
    {
        word: "reservation",
        meaning: "reservasi",
        example: "I made a hotel reservation."
    },
    {
        word: "check-in",
        meaning: "check-in",
        example: "Check-in starts at 2 PM."
    },
    {
        word: "check-out",
        meaning: "check-out",
        example: "Check-out is at 11 AM."
    },
    {
        word: "front desk",
        meaning: "meja depan hotel",
        example: "Ask at the front desk."
    },
    {
        word: "room service",
        meaning: "layanan kamar",
        example: "We ordered room service."
    },
    {
        word: "housekeeping",
        meaning: "layanan kebersihan kamar",
        example: "Housekeeping cleaned the room."
    },
    {
        word: "lobby",
        meaning: "lobi",
        example: "We waited in the hotel lobby."
    },
    {
        word: "suite",
        meaning: "suite (kamar mewah)",
        example: "They stayed in a luxury suite."
    },
    {
        word: "single room",
        meaning: "kamar single",
        example: "He booked a single room."
    },
    {
        word: "double room",
        meaning: "kamar double",
        example: "We booked a double room."
    },
    {
        word: "amenities",
        meaning: "fasilitas",
        example: "The hotel has great amenities."
    },
    {
        word: "concierge",
        meaning: "concierge",
        example: "Ask the concierge for directions."
    },
    {
        word: "guest",
        meaning: "tamu",
        example: "The hotel welcomed the guest."
    },
    {
        word: "hostel",
        meaning: "hostel",
        example: "We stayed at a budget hostel."
    },
    {
        word: "bed and breakfast",
        meaning: "penginapan dengan sarapan",
        example: "We stayed at a bed and breakfast."
    },

      {
        word: "cellphone",
        meaning: "ponsel",
        example: "She lost her cellphone."
    },
    {
        word: "smartphone",
        meaning: "ponsel pintar",
        example: "He uses a smartphone."
    },
    {
        word: "touchscreen",
        meaning: "layar sentuh",
        example: "The touchscreen is responsive."
    },
    {
        word: "home button",
        meaning: "tombol home",
        example: "Press the home button."
    },
    {
        word: "volume button",
        meaning: "tombol volume",
        example: "Press the volume button to adjust sound."
    },
    {
        word: "power button",
        meaning: "tombol daya",
        example: "Press the power button to turn it on."
    },
    {
        word: "sim card",
        meaning: "kartu SIM",
        example: "Insert the SIM card."
    },
    {
        word: "memory card",
        meaning: "kartu memori",
        example: "Add a memory card for more storage."
    },
    {
        word: "phone case",
        meaning: "casing hp",
        example: "She bought a new phone case."
    },
    {
        word: "screen protector",
        meaning: "pelindung layar",
        example: "Put a screen protector on your phone."
    },
    {
        word: "front camera",
        meaning: "kamera depan",
        example: "Use the front camera for selfies."
    },
    {
        word: "rear camera",
        meaning: "kamera belakang",
        example: "The rear camera takes better photos."
    },
    {
        word: "flash",
        meaning: "lampu kilat",
        example: "Turn on the flash in low light."
    },
    {
        word: "selfie",
        meaning: "swafoto",
        example: "She took a selfie."
    },
    {
        word: "ringtone",
        meaning: "nada dering",
        example: "Change your ringtone."
    },
    {
        word: "vibration mode",
        meaning: "mode getar",
        example: "Set your phone to vibration mode."
    },
    {
        word: "airplane mode",
        meaning: "mode pesawat",
        example: "Turn on airplane mode during the flight."
    },
    {
        word: "silent mode",
        meaning: "mode senyap",
        example: "Put your phone on silent mode."
    },
    {
        word: "mobile data",
        meaning: "data seluler",
        example: "Turn on mobile data."
    },
    {
        word: "hotspot",
        meaning: "hotspot",
        example: "Share your hotspot with friends."
    },
    {
        word: "bluetooth",
        meaning: "bluetooth",
        example: "Connect via bluetooth."
    },
    {
        word: "storage",
        meaning: "penyimpanan",
        example: "This phone has 128GB of storage."
    },
    {
        word: "RAM",
        meaning: "RAM",
        example: "This phone has 8GB of RAM."
    },
    {
        word: "processor",
        meaning: "prosesor",
        example: "The processor is very fast."
    },
    {
        word: "resolution",
        meaning: "resolusi layar",
        example: "The screen has high resolution."
    },
    {
        word: "television",
        meaning: "televisi",
        example: "We watch television every evening."
    },
    {
        word: "remote control",
        meaning: "remot",
        example: "Where is the remote control?"
    },
    {
        word: "air conditioner",
        meaning: "AC",
        example: "Turn on the air conditioner."
    },
    {
        word: "fan",
        meaning: "kipas angin",
        example: "Turn on the fan, it's hot."
    },
    {
        word: "heater",
        meaning: "pemanas",
        example: "Turn on the heater in winter."
    },
    {
        word: "washing machine",
        meaning: "mesin cuci",
        example: "She uses the washing machine daily."
    },
    {
        word: "dryer",
        meaning: "pengering",
        example: "Put the clothes in the dryer."
    },
    {
        word: "vacuum cleaner",
        meaning: "penyedot debu",
        example: "He cleans with a vacuum cleaner."
    },
    {
        word: "microwave",
        meaning: "microwave",
        example: "Heat the food in the microwave."
    },
    {
        word: "toaster",
        meaning: "pemanggang roti",
        example: "Toast the bread in the toaster."
    },
    {
        word: "rice cooker",
        meaning: "penanak nasi",
        example: "Cook rice in the rice cooker."
    },
    {
        word: "electric kettle",
        meaning: "teko listrik",
        example: "Boil water with an electric kettle."
    },
    {
        word: "water dispenser",
        meaning: "dispenser air",
        example: "Fill your glass at the water dispenser."
    },
    {
        word: "air purifier",
        meaning: "pembersih udara",
        example: "The air purifier removes dust."
    },
    {
        word: "humidifier",
        meaning: "pelembap udara",
        example: "Use a humidifier in dry weather."
    },
    {
        word: "iron",
        meaning: "setrika",
        example: "Iron your shirt before work."
    },
    {
        word: "hair dryer",
        meaning: "pengering rambut",
        example: "Dry your hair with a hair dryer."
    },
    {
        word: "electric shaver",
        meaning: "alat cukur listrik",
        example: "He uses an electric shaver."
    },
    {
        word: "speaker system",
        meaning: "sistem speaker",
        example: "The speaker system is loud."
    },
    {
        word: "power strip",
        meaning: "stop kontak sambung",
        example: "Plug the devices into the power strip."
    },
    {
        word: "extension cord",
        meaning: "kabel sambungan",
        example: "Use an extension cord for the lamp."
    },
    {
        word: "adapter",
        meaning: "adaptor",
        example: "I need a power adapter."
    },
    {
        word: "power bank",
        meaning: "power bank",
        example: "Charge your phone with a power bank."
    },
    {
        word: "USB cable",
        meaning: "kabel USB",
        example: "Connect the phone with a USB cable."
    },
    {
        word: "plug",
        meaning: "colokan",
        example: "Insert the plug into the socket."
    },
    {
        word: "socket",
        meaning: "stop kontak",
        example: "The socket is broken."
    },
    {
        word: "switch",
        meaning: "saklar",
        example: "Turn on the light switch."
    },
    {
        word: "circuit breaker",
        meaning: "pemutus arus listrik",
        example: "The circuit breaker tripped."
    },
    {
        word: "drone",
        meaning: "drone",
        example: "He flew a drone."
    },
    {
        word: "printer",
        meaning: "printer",
        example: "Print the document."
    },
    {
        word: "scanner",
        meaning: "pemindai",
        example: "Scan the document."
    },
    {
        word: "game console",
        meaning: "konsol game",
        example: "He plays on a game console."
    },
    {
        word: "VR headset",
        meaning: "headset VR",
        example: "She tried a VR headset."
    },
    {
        word: "smart TV",
        meaning: "smart TV",
        example: "We bought a new smart TV."
    },
    {
        word: "streaming device",
        meaning: "perangkat streaming",
        example: "Connect a streaming device to the TV."
    },
    {
        word: "webcam",
        meaning: "webcam",
        example: "Use a webcam for video calls."
    },
    {
        word: "external hard drive",
        meaning: "hard disk eksternal",
        example: "Save files on an external hard drive."
    },
    {
        word: "flash drive",
        meaning: "flashdisk",
        example: "Copy the files to a flash drive."
    },
    {
        word: "monitor",
        meaning: "monitor",
        example: "The monitor has a big screen."
    },
    {
        word: "keyboard",
        meaning: "keyboard",
        example: "Type on the keyboard."
    },
    {
        word: "mouse pad",
        meaning: "alas mouse",
        example: "Put the mouse on the mouse pad."
    },
    {
        word: "cable",
        meaning: "kabel",
        example: "Connect the cable."
    },
    {
        word: "wire",
        meaning: "kabel listrik",
        example: "Don't touch the exposed wire."
    },
    {
        word: "battery",
        meaning: "baterai",
        example: "Replace the battery."
    },
    {
        word: "rechargeable battery",
        meaning: "baterai isi ulang",
        example: "Use rechargeable batteries."
    },
    {
        word: "solar panel",
        meaning: "panel surya",
        example: "Solar panels generate electricity."
    },


];

const seen = new Set();

const uniqueData = dictionaryData.filter(item => {
    const key = item.word.trim().toLowerCase();

    if (seen.has(key)) {
        return false;
    }

    seen.add(key);
    return true;
});

dictionaryData.length = 0;
dictionaryData.push(...uniqueData);