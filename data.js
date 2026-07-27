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

      {
        word: "fourth",
        meaning: "keempat",
        example: "This is the fourth chapter."
    },
    {
        word: "fifth",
        meaning: "kelima",
        example: "She finished fifth in the race."
    },
    {
        word: "sixth",
        meaning: "keenam",
        example: "This is the sixth question."
    },
    {
        word: "seventh",
        meaning: "ketujuh",
        example: "Today is the seventh day."
    },
    {
        word: "eighth",
        meaning: "kedelapan",
        example: "He is the eighth child."
    },
    {
        word: "ninth",
        meaning: "kesembilan",
        example: "This is the ninth floor."
    },
    {
        word: "tenth",
        meaning: "kesepuluh",
        example: "This is the tenth time."
    },
    {
        word: "fifty",
        meaning: "lima puluh",
        example: "She is fifty years old."
    },
    {
        word: "sixty",
        meaning: "enam puluh",
        example: "The speed limit is sixty."
    },
    {
        word: "seventy",
        meaning: "tujuh puluh",
        example: "He turned seventy last year."
    },
    {
        word: "eighty",
        meaning: "delapan puluh",
        example: "My grandfather is eighty."
    },
    {
        word: "ninety",
        meaning: "sembilan puluh",
        example: "She scored ninety points."
    },
    {
        word: "fifteen",
        meaning: "lima belas",
        example: "I waited fifteen minutes."
    },
    {
        word: "sixteen",
        meaning: "enam belas",
        example: "She is sixteen years old."
    },
    {
        word: "seventeen",
        meaning: "tujuh belas",
        example: "He turned seventeen today."
    },
    {
        word: "eighteen",
        meaning: "delapan belas",
        example: "You must be eighteen to vote."
    },
    {
        word: "nineteen",
        meaning: "sembilan belas",
        example: "She is nineteen years old."
    },
    {
        word: "billion",
        meaning: "miliar",
        example: "The company is worth a billion dollars."
    },
    {
        word: "half",
        meaning: "setengah",
        example: "Half of the students passed."
    },
    {
        word: "quarter",
        meaning: "seperempat",
        example: "A quarter of the pizza is left."
    },
    {
        word: "double",
        meaning: "dua kali lipat",
        example: "The price doubled."
    },
    {
        word: "triple",
        meaning: "tiga kali lipat",
        example: "Sales tripled this year."
    },
    {
        word: "dozen",
        meaning: "selusin",
        example: "I bought a dozen eggs."
    },
    {
        word: "quarter past",
        meaning: "lewat seperempat",
        example: "It's quarter past three."
    },
    {
        word: "quarter to",
        meaning: "kurang seperempat",
        example: "It's quarter to five."
    },
    {
        word: "half past",
        meaning: "setengah lewat",
        example: "It's half past seven."
    },
    {
        word: "o'clock",
        meaning: "tepat pukul",
        example: "It's five o'clock."
    },
    {
        word: "a.m.",
        meaning: "pagi (sebelum tengah hari)",
        example: "I wake up at 6 a.m."
    },
    {
        word: "p.m.",
        meaning: "sore/malam (setelah tengah hari)",
        example: "We meet at 3 p.m."
    },
    {
        word: "sharp",
        meaning: "tepat waktu",
        example: "Be there at 9 sharp."
    },
    {
        word: "on time",
        meaning: "tepat waktu",
        example: "The train arrived on time."
    },
    {
        word: "in time",
        meaning: "tepat waktu (sebelum batas)",
        example: "We arrived in time for the show."
    },
    {
        word: "ahead of time",
        meaning: "lebih awal",
        example: "She finished ahead of time."
    },
    {
        word: "behind schedule",
        meaning: "terlambat dari jadwal",
        example: "The project is behind schedule."
    },
    {
        word: "noun",
        meaning: "kata benda",
        example: "'Dog' is a noun."
    },
    {
        word: "verb",
        meaning: "kata kerja",
        example: "'Run' is a verb."
    },
    {
        word: "adjective",
        meaning: "kata sifat",
        example: "'Beautiful' is an adjective."
    },
    {
        word: "adverb",
        meaning: "kata keterangan",
        example: "'Quickly' is an adverb."
    },
    {
        word: "preposition",
        meaning: "kata depan",
        example: "'In' is a preposition."
    },
    {
        word: "conjunction",
        meaning: "kata sambung",
        example: "'And' is a conjunction."
    },
    {
        word: "pronoun",
        meaning: "kata ganti",
        example: "'He' is a pronoun."
    },
    {
        word: "article",
        meaning: "kata sandang",
        example: "'The' is an article."
    },
    {
        word: "tense",
        meaning: "kala/bentuk waktu",
        example: "Use the past tense here."
    },
    {
        word: "plural",
        meaning: "jamak",
        example: "Add 's' to make it plural."
    },
    {
        word: "singular",
        meaning: "tunggal",
        example: "This word is singular."
    },
    {
        word: "synonym",
        meaning: "sinonim",
        example: "'Happy' and 'glad' are synonyms."
    },
    {
        word: "antonym",
        meaning: "antonim",
        example: "'Hot' and 'cold' are antonyms."
    },
    {
        word: "punctuation",
        meaning: "tanda baca",
        example: "Use correct punctuation."
    },
    {
        word: "spelling",
        meaning: "ejaan",
        example: "Check your spelling."
    },
    {
        word: "paragraph",
        meaning: "paragraf",
        example: "Write a clear paragraph."
    },
    {
        word: "pet",
        meaning: "hewan peliharaan",
        example: "She has a pet cat."
    },
    {
        word: "leash",
        meaning: "tali kekang",
        example: "Walk the dog on a leash."
    },
    {
        word: "collar",
        meaning: "kalung anjing",
        example: "Put a collar on the dog."
    },
    {
        word: "pet food",
        meaning: "makanan hewan",
        example: "Buy pet food at the store."
    },
    {
        word: "litter box",
        meaning: "kotak pasir kucing",
        example: "Clean the litter box."
    },
    {
        word: "aquarium",
        meaning: "akuarium",
        example: "Fish live in the aquarium."
    },
    {
        word: "cage",
        meaning: "kandang",
        example: "The bird lives in a cage."
    },
    {
        word: "veterinary clinic",
        meaning: "klinik hewan",
        example: "Take the dog to the veterinary clinic."
    },
    {
        word: "diaper",
        meaning: "popok",
        example: "Change the baby's diaper."
    },
    {
        word: "stroller",
        meaning: "kereta bayi",
        example: "Push the stroller."
    },
    {
        word: "crib",
        meaning: "boks bayi",
        example: "The baby sleeps in a crib."
    },
    {
        word: "pacifier",
        meaning: "empeng",
        example: "The baby sucks on a pacifier."
    },
    {
        word: "bottle",
        meaning: "botol susu",
        example: "Feed the baby with a bottle."
    },
    {
        word: "bib",
        meaning: "celemek bayi",
        example: "Put a bib on the baby."
    },
    {
        word: "baby powder",
        meaning: "bedak bayi",
        example: "Apply baby powder gently."
    },
    {
        word: "baby carrier",
        meaning: "gendongan bayi",
        example: "She carries the baby in a carrier."
    },
    {
        word: "toy",
        meaning: "mainan",
        example: "The child plays with toys."
    },
    {
        word: "rattle",
        meaning: "mainan kerincingan",
        example: "The baby shakes the rattle."
    },
    {
        word: "dragon",
        meaning: "naga",
        example: "Legends tell of dragons."
    },
    {
        word: "unicorn",
        meaning: "unicorn",
        example: "The unicorn has a horn."
    },
    {
        word: "fairy",
        meaning: "peri",
        example: "The fairy has wings."
    },
    {
        word: "wizard",
        meaning: "penyihir",
        example: "The wizard cast a spell."
    },
    {
        word: "witch",
        meaning: "penyihir wanita",
        example: "The witch brewed a potion."
    },
    {
        word: "ghost",
        meaning: "hantu",
        example: "They believe the house has a ghost."
    },
    {
        word: "vampire",
        meaning: "vampir",
        example: "The vampire avoids sunlight."
    },
    {
        word: "werewolf",
        meaning: "manusia serigala",
        example: "The werewolf howled at the moon."
    },
    {
        word: "giant",
        meaning: "raksasa",
        example: "The giant was very tall."
    },
    {
        word: "mermaid",
        meaning: "putri duyung",
        example: "The mermaid lives in the sea."
    },
    {
        word: "angel",
        meaning: "malaikat",
        example: "She looked like an angel."
    },
    {
        word: "demon",
        meaning: "iblis",
        example: "The demon appeared in the story."
    },
    {
        word: "monster",
        meaning: "monster",
        example: "The monster scared the children."
    },
    {
        word: "spell",
        meaning: "mantra",
        example: "She cast a magic spell."
    },
    {
        word: "potion",
        meaning: "ramuan",
        example: "He drank a magic potion."
    },
    {
        word: "legend",
        meaning: "legenda",
        example: "This is an old legend."
    },
    {
        word: "myth",
        meaning: "mitos",
        example: "It's just a myth."
    },
    {
        word: "folktale",
        meaning: "cerita rakyat",
        example: "She told a folktale."
    },

      {
        word: "sweep",
        meaning: "menyapu",
        example: "She swept the floor."
    },
    {
        word: "mop",
        meaning: "mengepel",
        example: "He mopped the kitchen."
    },
    {
        word: "dust",
        meaning: "mengelap debu",
        example: "She dusted the shelves."
    },
    {
        word: "vacuum",
        meaning: "menyedot debu",
        example: "He vacuumed the carpet."
    },
    {
        word: "polish",
        meaning: "menggosok mengkilap",
        example: "She polished the shoes."
    },
    {
        word: "scrub",
        meaning: "menggosok bersih",
        example: "Scrub the floor."
    },
    {
        word: "tidy up",
        meaning: "merapikan",
        example: "Tidy up your room."
    },
    {
        word: "declutter",
        meaning: "membereskan barang",
        example: "She decluttered the closet."
    },
    {
        word: "organize",
        meaning: "mengatur/merapikan",
        example: "Organize your desk."
    },
    {
        word: "do the dishes",
        meaning: "mencuci piring",
        example: "He does the dishes every night."
    },
    {
        word: "do the laundry",
        meaning: "mencuci pakaian",
        example: "She does the laundry on weekends."
    },
    {
        word: "make the bed",
        meaning: "merapikan tempat tidur",
        example: "Make your bed every morning."
    },
    {
        word: "take out the trash",
        meaning: "membuang sampah",
        example: "Please take out the trash."
    },
    {
        word: "water the plants",
        meaning: "menyiram tanaman",
        example: "She waters the plants daily."
    },
    {
        word: "feed the pet",
        meaning: "memberi makan hewan peliharaan",
        example: "He feeds the pet every morning."
    },
    {
        word: "chore",
        meaning: "pekerjaan rumah",
        example: "Doing chores builds responsibility."
    },
    {
        word: "household",
        meaning: "rumah tangga",
        example: "She manages the household."
    },
    {
        word: "slim",
        meaning: "langsing",
        example: "She has a slim figure."
    },
    {
        word: "chubby",
        meaning: "gempal/berisi",
        example: "The baby has chubby cheeks."
    },
    {
        word: "muscular",
        meaning: "berotot",
        example: "He has a muscular body."
    },
    {
        word: "skinny",
        meaning: "kurus",
        example: "He looks skinny after being sick."
    },
    {
        word: "plump",
        meaning: "montok/berisi",
        example: "The bird is small and plump."
    },
    {
        word: "bald",
        meaning: "botak",
        example: "He is bald."
    },
    {
        word: "wrinkled",
        meaning: "keriput",
        example: "Her hands are wrinkled with age."
    },
    {
        word: "freckled",
        meaning: "berbintik-bintik",
        example: "She has freckled skin."
    },
    {
        word: "dimple",
        meaning: "lesung pipi",
        example: "She has a cute dimple."
    },
    {
        word: "straight hair",
        meaning: "rambut lurus",
        example: "She has straight hair."
    },
    {
        word: "wavy hair",
        meaning: "rambut bergelombang",
        example: "He has wavy hair."
    },
    {
        word: "blonde",
        meaning: "pirang",
        example: "She has blonde hair."
    },
    {
        word: "dark-skinned",
        meaning: "berkulit gelap",
        example: "He is dark-skinned."
    },
    {
        word: "fair-skinned",
        meaning: "berkulit terang",
        example: "She is fair-skinned."
    },
    {
        word: "middle-aged",
        meaning: "paruh baya",
        example: "He is a middle-aged man."
    },
    {
        word: "teenager",
        meaning: "remaja",
        example: "She is a teenager."
    },
    {
        word: "toddler",
        meaning: "balita",
        example: "The toddler is learning to walk."
    },
    {
        word: "infant",
        meaning: "bayi kecil",
        example: "The infant sleeps most of the day."
    },
    {
        word: "era",
        meaning: "era",
        example: "We live in the digital era."
    },
    {
        word: "age",
        meaning: "zaman",
        example: "This happened in the Stone Age."
    },
    {
        word: "prehistoric",
        meaning: "prasejarah",
        example: "Prehistoric humans used tools."
    },
    {
        word: "medieval",
        meaning: "abad pertengahan",
        example: "Medieval castles are impressive."
    },
    {
        word: "modern era",
        meaning: "era modern",
        example: "We live in the modern era."
    },
    {
        word: "colonial",
        meaning: "kolonial",
        example: "This is a colonial building."
    },
    {
        word: "independence",
        meaning: "kemerdekaan",
        example: "We celebrate independence day."
    },
    {
        word: "empire",
        meaning: "kekaisaran",
        example: "The empire lasted centuries."
    },
    {
        word: "dynasty",
        meaning: "dinasti",
        example: "The dynasty ruled for 300 years."
    },
    {
        word: "civilization",
        meaning: "peradaban",
        example: "Ancient civilizations built pyramids."
    },
    {
        word: "archaeology",
        meaning: "arkeologi",
        example: "Archaeology reveals the past."
    },
    {
        word: "artifact",
        meaning: "artefak",
        example: "They found ancient artifacts."
    },
    {
        word: "heritage",
        meaning: "warisan budaya",
        example: "Preserve our cultural heritage."
    },
    {
        word: "generation",
        meaning: "generasi",
        example: "This generation loves technology."
    },
    {
        word: "decade",
        meaning: "dekade",
        example: "A decade is ten years."
    },
    {
        word: "make sense",
        meaning: "masuk akal",
        example: "Does that make sense to you?"
    },
    {
        word: "take a break",
        meaning: "istirahat sejenak",
        example: "Let's take a break."
    },
    {
        word: "give up",
        meaning: "menyerah",
        example: "Don't give up."
    },
    {
        word: "look forward to",
        meaning: "menantikan",
        example: "I look forward to seeing you."
    },
    {
        word: "get along",
        meaning: "akur/rukun",
        example: "They get along well."
    },
    {
        word: "figure out",
        meaning: "mencari tahu",
        example: "I need to figure this out."
    },
    {
        word: "run out of",
        meaning: "kehabisan",
        example: "We ran out of milk."
    },
    {
        word: "keep up",
        meaning: "mengikuti/tetap sejajar",
        example: "Keep up the good work."
    },
    {
        word: "catch up",
        meaning: "menyusul ketertinggalan",
        example: "Let's catch up soon."
    },
    {
        word: "come up with",
        meaning: "memikirkan/menemukan",
        example: "She came up with a great idea."
    },
    {
        word: "deal with",
        meaning: "menghadapi/mengurus",
        example: "I need to deal with this problem."
    },
    {
        word: "end up",
        meaning: "berakhir",
        example: "We ended up staying home."
    },
    {
        word: "show up",
        meaning: "muncul/datang",
        example: "He didn't show up to the meeting."
    },
    {
        word: "get over",
        meaning: "melupakan/pulih dari",
        example: "It took time to get over the loss."
    },
    {
        word: "hang out",
        meaning: "bersantai bersama",
        example: "We hung out at the cafe."
    },
    {
        word: "look after",
        meaning: "menjaga/merawat",
        example: "She looks after her little brother."
    },
    {
        word: "pick up",
        meaning: "menjemput/mengambil",
        example: "I'll pick you up at six."
    },
    {
        word: "drop off",
        meaning: "mengantar",
        example: "He dropped off the kids at school."
    },
    {
        word: "put off",
        meaning: "menunda",
        example: "Don't put off your homework."
    },
    {
        word: "turn down",
        meaning: "menolak",
        example: "She turned down the offer."
    },
    {
        word: "bring up",
        meaning: "membahas/membesarkan",
        example: "He brought up an important point."
    },
    {
        word: "carry on",
        meaning: "melanjutkan",
        example: "Carry on with your work."
    },

      {
        word: "wake up",
        meaning: "bangun tidur",
        example: "I wake up at six."
    },
    {
        word: "get up",
        meaning: "bangun dari tempat tidur",
        example: "Get up, it's late."
    },
    {
        word: "brush teeth",
        meaning: "menyikat gigi",
        example: "Brush your teeth twice a day."
    },
    {
        word: "wash face",
        meaning: "mencuci muka",
        example: "She washes her face every morning."
    },
    {
        word: "get dressed",
        meaning: "berpakaian",
        example: "He got dressed quickly."
    },
    {
        word: "comb hair",
        meaning: "menyisir rambut",
        example: "She combs her hair."
    },
    {
        word: "have breakfast",
        meaning: "sarapan",
        example: "We have breakfast at seven."
    },
    {
        word: "go to work",
        meaning: "pergi bekerja",
        example: "He goes to work by bus."
    },
    {
        word: "come home",
        meaning: "pulang ke rumah",
        example: "She comes home at five."
    },
    {
        word: "take a shower",
        meaning: "mandi",
        example: "He takes a shower every morning."
    },
    {
        word: "get ready",
        meaning: "bersiap-siap",
        example: "Get ready for school."
    },
    {
        word: "lock the door",
        meaning: "mengunci pintu",
        example: "Lock the door before leaving."
    },
    {
        word: "turn on the light",
        meaning: "menyalakan lampu",
        example: "Turn on the light, please."
    },
    {
        word: "turn off the light",
        meaning: "mematikan lampu",
        example: "Turn off the light before sleeping."
    },
    {
        word: "set the table",
        meaning: "menata meja makan",
        example: "She set the table for dinner."
    },
    {
        word: "clear the table",
        meaning: "membereskan meja makan",
        example: "Clear the table after eating."
    },
    {
        word: "do homework",
        meaning: "mengerjakan PR",
        example: "He does his homework every night."
    },
    {
        word: "watch TV",
        meaning: "menonton TV",
        example: "We watch TV in the evening."
    },
    {
        word: "go to bed",
        meaning: "pergi tidur",
        example: "I go to bed at ten."
    },
    {
        word: "fall asleep",
        meaning: "tertidur",
        example: "She fell asleep quickly."
    },
    {
        word: "wide",
        meaning: "lebar",
        example: "The river is wide."
    },
    {
        word: "narrow",
        meaning: "sempit",
        example: "The road is narrow."
    },
    {
        word: "shallow",
        meaning: "dangkal",
        example: "The pool is shallow."
    },
    {
        word: "thick",
        meaning: "tebal",
        example: "The book is thick."
    },
    {
        word: "thin",
        meaning: "tipis",
        example: "The paper is thin."
    },
    {
        word: "straight",
        meaning: "lurus",
        example: "Draw a straight line."
    },
    {
        word: "curved",
        meaning: "melengkung",
        example: "The road is curved."
    },
    {
        word: "flat",
        meaning: "datar",
        example: "The land is flat."
    },
    {
        word: "steep",
        meaning: "curam",
        example: "The hill is steep."
    },
    {
        word: "loose",
        meaning: "longgar",
        example: "The shirt is loose."
    },
    {
        word: "tight",
        meaning: "ketat",
        example: "These shoes are tight."
    },
    {
        word: "sharp",
        meaning: "tajam",
        example: "The knife is sharp."
    },
    {
        word: "soft",
        meaning: "lembut",
        example: "The pillow is soft."
    },
    {
        word: "firm",
        meaning: "kokoh/tegas",
        example: "The mattress is firm."
    },
    {
        word: "light",
        meaning: "ringan",
        example: "The bag is light."
    },
    {
        word: "heavy",
        meaning: "berat",
        example: "This is heavy."
    },
    {
        word: "young",
        meaning: "muda",
        example: "She is young."
    },
    {
        word: "ancient",
        meaning: "kuno",
        example: "This is an ancient site."
    },
    {
        word: "fresh",
        meaning: "segar",
        example: "The fish is fresh."
    },
    {
        word: "expired",
        meaning: "kedaluwarsa",
        example: "The milk is expired."
    },
    {
        word: "clean",
        meaning: "bersih",
        example: "The room is clean."
    },
    {
        word: "filthy",
        meaning: "sangat kotor",
        example: "The floor is filthy."
    },
    {
        word: "neat",
        meaning: "rapi",
        example: "Keep your desk neat."
    },
    {
        word: "messy",
        meaning: "berantakan",
        example: "His room is messy."
    },
    {
        word: "shiny",
        meaning: "mengilap",
        example: "The car is shiny."
    },
    {
        word: "faded",
        meaning: "pudar",
        example: "The color has faded."
    },
    {
        word: "solid",
        meaning: "padat",
        example: "The ice is solid."
    },
    {
        word: "wet",
        meaning: "basah",
        example: "The road is wet."
    },
    {
        word: "damp",
        meaning: "lembap sedikit basah",
        example: "The towel is damp."
    },
    {
        word: "scorching",
        meaning: "sangat panas",
        example: "It's scorching hot today."
    },
    {
        word: "freezing",
        meaning: "sangat dingin",
        example: "It's freezing outside."
    },
    {
        word: "mild",
        meaning: "sedang/ringan",
        example: "The weather is mild."
    },
    {
        word: "gentle",
        meaning: "lembut",
        example: "She has a gentle voice."
    },
    {
        word: "loud",
        meaning: "keras",
        example: "The music is loud."
    },
    {
        word: "faint",
        meaning: "samar",
        example: "I heard a faint sound."
    },
    {
        word: "crisp",
        meaning: "renyah",
        example: "The air feels crisp."
    },
    {
        word: "stuffy",
        meaning: "pengap",
        example: "The room feels stuffy."
    },
    {
        word: "spacious",
        meaning: "luas",
        example: "The house is spacious."
    },
    {
        word: "cramped",
        meaning: "sempit dan sesak",
        example: "The apartment feels cramped."
    },
    {
        word: "doorbell",
        meaning: "bel pintu",
        example: "Ring the doorbell."
    },
    {
        word: "doormat",
        meaning: "keset",
        example: "Wipe your feet on the doormat."
    },
    {
        word: "windowsill",
        meaning: "ambang jendela",
        example: "She put flowers on the windowsill."
    },
    {
        word: "ceiling",
        meaning: "langit-langit",
        example: "The ceiling is high."
    },
    {
        word: "floor",
        meaning: "lantai",
        example: "Sweep the floor."
    },
    {
        word: "staircase",
        meaning: "tangga rumah",
        example: "Walk down the staircase."
    },
    {
        word: "banister",
        meaning: "pegangan tangga",
        example: "Hold the banister."
    },
    {
        word: "porch light",
        meaning: "lampu teras",
        example: "Turn on the porch light."
    },
    {
        word: "mailbox",
        meaning: "kotak surat",
        example: "Check the mailbox."
    },
    {
        word: "doorknob",
        meaning: "gagang pintu",
        example: "Turn the doorknob."
    },
    {
        word: "hinge",
        meaning: "engsel",
        example: "Oil the door hinge."
    },
    {
        word: "latch",
        meaning: "kait pintu",
        example: "Close the latch."
    },
    {
        word: "skylight",
        meaning: "jendela atap",
        example: "The skylight brings in sunlight."
    },
    {
        word: "chimney",
        meaning: "cerobong asap",
        example: "Smoke rises from the chimney."
    },
    {
        word: "gutter",
        meaning: "talang air",
        example: "Clean the gutter."
    },
    {
        word: "driveway",
        meaning: "jalan masuk rumah",
        example: "Park in the driveway."
    },
    {
        word: "patio",
        meaning: "teras belakang",
        example: "We had dinner on the patio."
    },
    {
        word: "hallway light",
        meaning: "lampu koridor",
        example: "Turn on the hallway light."
    },
    {
        word: "closet",
        meaning: "lemari pakaian",
        example: "Hang your coat in the closet."
    },
    {
        word: "wardrobe",
        meaning: "lemari besar",
        example: "She has a big wardrobe."
    },
    {
        word: "how much is this",
        meaning: "berapa harganya",
        example: "How much is this shirt?"
    },
    {
        word: "what time is it",
        meaning: "jam berapa sekarang",
        example: "What time is it now?"
    },
    {
        word: "where is the bathroom",
        meaning: "di mana kamar mandi",
        example: "Excuse me, where is the bathroom?"
    },
    {
        word: "can you help me",
        meaning: "bisakah kamu membantu saya",
        example: "Can you help me with this?"
    },
    {
        word: "i don't understand",
        meaning: "saya tidak mengerti",
        example: "Sorry, I don't understand."
    },
    {
        word: "could you repeat that",
        meaning: "bisakah kamu ulangi",
        example: "Could you repeat that, please?"
    },
    {
        word: "nice to meet you",
        meaning: "senang bertemu denganmu",
        example: "Nice to meet you!"
    },
    {
        word: "see you later",
        meaning: "sampai jumpa nanti",
        example: "See you later, bye!"
    },
    {
        word: "have a nice day",
        meaning: "semoga harimu menyenangkan",
        example: "Have a nice day!"
    },
    {
        word: "what's wrong",
        meaning: "ada apa",
        example: "What's wrong with you?"
    },
    {
        word: "i'm on my way",
        meaning: "saya sedang dalam perjalanan",
        example: "I'm on my way, wait for me."
    },
    {
        word: "hold on",
        meaning: "tunggu sebentar",
        example: "Hold on, I'll be right there."
    },
    {
        word: "just a moment",
        meaning: "tunggu sebentar",
        example: "Just a moment, please."
    },
    {
        word: "excuse me",
        meaning: "permisi",
        example: "Excuse me, may I pass?"
    },
    {
        word: "i'm sorry",
        meaning: "saya minta maaf",
        example: "I'm sorry for being late."
    },
    {
        word: "thank you very much",
        meaning: "terima kasih banyak",
        example: "Thank you very much for your help."
    },
    {
        word: "you're welcome",
        meaning: "sama-sama",
        example: "You're welcome, happy to help."
    },
    {
        word: "what do you think",
        meaning: "menurutmu bagaimana",
        example: "What do you think about this plan?"
    },
    {
        word: "i agree with you",
        meaning: "saya setuju denganmu",
        example: "I agree with you completely."
    },
    {
        word: "i disagree",
        meaning: "saya tidak setuju",
        example: "I disagree with that idea."
    },
    {
        word: "let's go",
        meaning: "ayo pergi",
        example: "Let's go, we're late."
    },
    {
        word: "wait for me",
        meaning: "tunggu saya",
        example: "Wait for me at the door."
    },
    {
        word: "follow me",
        meaning: "ikuti saya",
        example: "Follow me to the office."
    },
    {
        word: "come in",
        meaning: "silakan masuk",
        example: "Come in, the door is open."
    },
    {
        word: "make yourself at home",
        meaning: "anggap rumah sendiri",
        example: "Please, make yourself at home."
    },
    {
        word: "take your time",
        meaning: "ambil waktumu",
        example: "Take your time, no rush."
    },
    {
        word: "it's up to you",
        meaning: "terserah kamu",
        example: "It's up to you to decide."
    },
    {
        word: "i have no idea",
        meaning: "saya tidak tahu",
        example: "I have no idea what happened."
    },
    {
        word: "that makes sense",
        meaning: "itu masuk akal",
        example: "That makes sense to me."
    },
    {
        word: "i can't believe it",
        meaning: "saya tidak percaya",
        example: "I can't believe it happened."
    },
    {
        word: "bacon",
        meaning: "daging asap",
        example: "She fried bacon for breakfast."
    },
    {
        word: "sausage",
        meaning: "sosis",
        example: "He grilled sausages."
    },
    {
        word: "ham",
        meaning: "daging babi asap",
        example: "The sandwich has ham."
    },
    {
        word: "omelet",
        meaning: "telur dadar",
        example: "She made an omelet."
    },
    {
        word: "cereal",
        meaning: "sereal",
        example: "He eats cereal for breakfast."
    },
    {
        word: "yogurt",
        meaning: "yogurt",
        example: "She eats yogurt with fruit."
    },
    {
        word: "pancake",
        meaning: "panekuk",
        example: "We had pancakes for breakfast."
    },
    {
        word: "waffle",
        meaning: "wafel",
        example: "He ordered a waffle."
    },
    {
        word: "croissant",
        meaning: "kroasan",
        example: "She bought a fresh croissant."
    },
    {
        word: "bagel",
        meaning: "bagel",
        example: "He ate a bagel with cheese."
    },
    {
        word: "muffin",
        meaning: "muffin",
        example: "She baked blueberry muffins."
    },
    {
        word: "cracker",
        meaning: "biskuit asin",
        example: "He ate crackers with cheese."
    },
    {
        word: "popcorn",
        meaning: "popcorn",
        example: "We ate popcorn at the movies."
    },
    {
        word: "chips",
        meaning: "keripik",
        example: "He snacks on chips."
    },
    {
        word: "pretzel",
        meaning: "pretzel",
        example: "She bought a soft pretzel."
    },
    {
        word: "nuts",
        meaning: "kacang-kacangan",
        example: "He snacks on mixed nuts."
    },
    {
        word: "raisin",
        meaning: "kismis",
        example: "She added raisins to the cake."
    },
    {
        word: "jam",
        meaning: "selai",
        example: "Spread jam on the toast."
    },
    {
        word: "syrup",
        meaning: "sirup",
        example: "Pour syrup on the pancakes."
    },
    {
        word: "dressing",
        meaning: "saus salad",
        example: "Add dressing to the salad."
    },
    {
        word: "gravy",
        meaning: "saus kental",
        example: "Pour gravy over the meat."
    },
    {
        word: "stock",
        meaning: "kaldu",
        example: "Use chicken stock for the soup."
    },
    {
        word: "herb",
        meaning: "tanaman herbal",
        example: "Add fresh herbs to the dish."
    },
    {
        word: "seasoning",
        meaning: "bumbu",
        example: "Add seasoning to taste."
    },
    {
        word: "marinade",
        meaning: "bumbu rendaman",
        example: "Marinate the chicken overnight."
    },
    {
        word: "dip",
        meaning: "saus celup",
        example: "Serve chips with dip."
    },
    {
        word: "topping",
        meaning: "taburan",
        example: "Add toppings to your pizza."
    },
    {
        word: "filling",
        meaning: "isian",
        example: "The pie has a sweet filling."
    },
    {
        word: "crust",
        meaning: "kerak roti",
        example: "The pie has a flaky crust."
    },
    {
        word: "frosting",
        meaning: "krim lapisan kue",
        example: "Spread frosting on the cake."
    },
    {
        word: "swimsuit",
        meaning: "baju renang",
        example: "She wore a swimsuit at the beach."
    },
    {
        word: "raincoat",
        meaning: "jas hujan",
        example: "Wear a raincoat, it's raining."
    },
    {
        word: "windbreaker",
        meaning: "jaket anti angin",
        example: "He wore a windbreaker."
    },
    {
        word: "tuxedo",
        meaning: "tuksedo",
        example: "He wore a tuxedo to the wedding."
    },
    {
        word: "gown",
        meaning: "gaun panjang",
        example: "She wore an elegant gown."
    },
    {
        word: "pajamas",
        meaning: "piyama",
        example: "She wears pajamas to sleep."
    },
    {
        word: "underwear",
        meaning: "pakaian dalam",
        example: "Buy new underwear."
    },
    {
        word: "bra",
        meaning: "bra",
        example: "She bought a new bra."
    },
    {
        word: "boxers",
        meaning: "celana dalam pria",
        example: "He wears boxers."
    },
    {
        word: "leggings",
        meaning: "legging",
        example: "She wore leggings to the gym."
    },
    {
        word: "tights",
        meaning: "stoking ketat",
        example: "She wore tights under her skirt."
    },
    {
        word: "vest",
        meaning: "rompi",
        example: "He wore a vest over his shirt."
    },
    {
        word: "cardigan",
        meaning: "kardigan",
        example: "She wore a cardigan."
    },
    {
        word: "hoodie",
        meaning: "jaket hoodie",
        example: "He wore a hoodie."
    },
    {
        word: "blazer",
        meaning: "blazer",
        example: "She wore a blazer to work."
    },
    {
        word: "overalls",
        meaning: "baju kerja terusan",
        example: "The farmer wore overalls."
    },
    {
        word: "apron",
        meaning: "celemek",
        example: "She wore an apron while cooking."
    },
    {
        word: "mittens",
        meaning: "sarung tangan tanpa jari",
        example: "She wore mittens in winter."
    },
    {
        word: "earmuffs",
        meaning: "penutup telinga",
        example: "He wore earmuffs in the cold."
    },
    {
        word: "bandana",
        meaning: "bandana",
        example: "He wore a bandana."
    },
    {
        word: "wink",
        meaning: "mengedipkan sebelah mata",
        example: "He winked at her."
    },
    {
        word: "frown",
        meaning: "cemberut",
        example: "She frowned in confusion."
    },
    {
        word: "smirk",
        meaning: "menyeringai",
        example: "He smirked at the joke."
    },
    {
        word: "pout",
        meaning: "cemberut merengut",
        example: "The child pouted."
    },
    {
        word: "clap",
        meaning: "bertepuk tangan",
        example: "The audience clapped."
    },
    {
        word: "snap fingers",
        meaning: "menjentikkan jari",
        example: "He snapped his fingers."
    },
    {
        word: "cross arms",
        meaning: "melipat tangan",
        example: "She crossed her arms."
    },
    {
        word: "scratch",
        meaning: "menggaruk",
        example: "He scratched his head."
    },
    {
        word: "rub",
        meaning: "menggosok",
        example: "She rubbed her eyes."
    },
    {
        word: "tickle",
        meaning: "menggelitik",
        example: "He tickled the baby."
    },
    {
        word: "pat",
        meaning: "menepuk pelan",
        example: "She patted the dog."
    },
    {
        word: "squeeze",
        meaning: "meremas",
        example: "He squeezed her hand."
    },
    {
        word: "pinch",
        meaning: "mencubit",
        example: "She pinched his arm."
    },
    {
        word: "tap",
        meaning: "mengetuk pelan",
        example: "He tapped his foot."
    },
    {
        word: "stomp",
        meaning: "menghentakkan kaki",
        example: "She stomped in anger."
    },
    {
        word: "tiptoe",
        meaning: "berjalan jinjit",
        example: "He tiptoed quietly."
    },
    {
        word: "skip",
        meaning: "melompat-lompat",
        example: "The kids skipped happily."
    },
    {
        word: "hop",
        meaning: "melompat kecil",
        example: "The rabbit hopped away."
    },
    {
        word: "limp",
        meaning: "pincang",
        example: "He limped after the fall."
    },
    {
        word: "stumble",
        meaning: "tersandung",
        example: "She stumbled on the stairs."
    },
    {
        word: "sway",
        meaning: "bergoyang",
        example: "He swayed to the music."
    },
    {
        word: "stretch",
        meaning: "meregangkan tubuh",
        example: "She stretched before running."
    },
    {
        word: "yawn",
        meaning: "menguap",
        example: "He yawned in class."
    },
    {
        word: "hiccup",
        meaning: "cegukan",
        example: "She had the hiccups."
    },
    {
        word: "sneeze",
        meaning: "bersin",
        example: "He sneezed loudly."
    },
    {
        word: "gather",
        meaning: "berkumpul",
        example: "They gathered in the hall."
    },
    {
        word: "scatter",
        meaning: "berhamburan",
        example: "The papers scattered."
    },
    {
        word: "spread",
        meaning: "menyebar",
        example: "News spreads fast."
    },
    {
        word: "mix",
        meaning: "mencampur",
        example: "Mix the ingredients well."
    },
    {
        word: "shake",
        meaning: "mengocok",
        example: "Shake the bottle."
    },
    {
        word: "pour",
        meaning: "menuang",
        example: "Pour the water carefully."
    },
    {
        word: "fill",
        meaning: "mengisi",
        example: "Fill the glass."
    },
    {
        word: "empty",
        meaning: "mengosongkan",
        example: "Empty the trash can."
    },
    {
        word: "wrap",
        meaning: "membungkus",
        example: "Wrap the gift nicely."
    },
    {
        word: "unwrap",
        meaning: "membuka bungkusan",
        example: "She unwrapped the present."
    },
    {
        word: "seal",
        meaning: "menyegel",
        example: "Seal the envelope."
    },
    {
        word: "unseal",
        meaning: "membuka segel",
        example: "Unseal the package."
    },
    {
        word: "tie",
        meaning: "mengikat",
        example: "Tie your shoelaces."
    },
    {
        word: "untie",
        meaning: "melepas ikatan",
        example: "Untie the knot."
    },
    {
        word: "lock",
        meaning: "mengunci",
        example: "Lock the door."
    },
    {
        word: "unlock",
        meaning: "membuka kunci",
        example: "Unlock the gate."
    },
    {
        word: "open",
        meaning: "membuka",
        example: "Open the window."
    },
    {
        word: "shut",
        meaning: "menutup",
        example: "Shut the door quietly."
    },
    {
        word: "switch on",
        meaning: "menyalakan",
        example: "Switch on the fan."
    },
    {
        word: "switch off",
        meaning: "mematikan",
        example: "Switch off the TV."
    },
    {
        word: "adjust",
        meaning: "menyesuaikan",
        example: "Adjust the mirror."
    },
    {
        word: "arrange",
        meaning: "menyusun",
        example: "Arrange the flowers."
    },
    {
        word: "stack",
        meaning: "menumpuk",
        example: "Stack the plates."
    },
    {
        word: "sort",
        meaning: "menyortir",
        example: "Sort the laundry."
    },
    {
        word: "label",
        meaning: "memberi label",
        example: "Label the boxes."
    },
    {
        word: "mark",
        meaning: "menandai",
        example: "Mark your calendar."
    },
    {
        word: "measure",
        meaning: "mengukur",
        example: "Measure the room."
    },
    {
        word: "weigh",
        meaning: "menimbang",
        example: "Weigh the fruit."
    },
    {
        word: "count",
        meaning: "menghitung",
        example: "Count the money."
    },
    {
        word: "estimate",
        meaning: "memperkirakan",
        example: "Estimate the cost."
    },
    {
        word: "librarian",
        meaning: "pustakawan",
        example: "The librarian helped me."
    },
    {
        word: "translator",
        meaning: "penerjemah",
        example: "She works as a translator."
    },
    {
        word: "tour guide",
        meaning: "pemandu wisata",
        example: "The tour guide explained the history."
    },
    {
        word: "flight attendant",
        meaning: "pramugari/pramugara",
        example: "The flight attendant served drinks."
    },
    {
        word: "baker",
        meaning: "tukang roti",
        example: "The baker makes fresh bread."
    },
    {
        word: "florist",
        meaning: "penjual bunga",
        example: "The florist arranged the flowers."
    },
    {
        word: "tailor",
        meaning: "penjahit",
        example: "The tailor made a suit."
    },
    {
        word: "blacksmith",
        meaning: "pandai besi",
        example: "The blacksmith made a sword."
    },
    {
        word: "locksmith",
        meaning: "tukang kunci",
        example: "Call a locksmith to open the door."
    },
    {
        word: "janitor",
        meaning: "petugas kebersihan",
        example: "The janitor cleaned the hall."
    },
    {
        word: "cleaner",
        meaning: "petugas kebersihan",
        example: "She works as a cleaner."
    },
    {
        word: "gardener",
        meaning: "tukang kebun",
        example: "The gardener trims the hedges."
    },
    {
        word: "fisherman",
        meaning: "nelayan",
        example: "The fisherman caught many fish."
    },
    {
        word: "miner",
        meaning: "penambang",
        example: "The miner works underground."
    },
    {
        word: "sailor",
        meaning: "pelaut",
        example: "The sailor navigated the ship."
    },
    {
        word: "astronaut",
        meaning: "astronot",
        example: "The astronaut explored space."
    },
    {
        word: "surgeon",
        meaning: "ahli bedah",
        example: "The surgeon performed the operation."
    },
    {
        word: "midwife",
        meaning: "bidan",
        example: "The midwife helped deliver the baby."
    },
    {
        word: "pharmacist",
        meaning: "apoteker",
        example: "The pharmacist gave me medicine."
    },
    {
        word: "optician",
        meaning: "ahli kacamata",
        example: "The optician checked my eyes."
    },
    {
        word: "skyline",
        meaning: "siluet gedung kota",
        example: "The city skyline is beautiful at night."
    },
    {
        word: "downtown",
        meaning: "pusat kota",
        example: "We went shopping downtown."
    },
    {
        word: "suburb",
        meaning: "pinggiran kota",
        example: "They live in the suburb."
    },
    {
        word: "metropolitan",
        meaning: "metropolitan",
        example: "This is a metropolitan city."
    },
    {
        word: "billboard",
        meaning: "papan reklame",
        example: "A huge billboard stands downtown."
    },
    {
        word: "streetlight",
        meaning: "lampu jalan",
        example: "The streetlight turned on at dusk."
    },
    {
        word: "pedestrian",
        meaning: "pejalan kaki",
        example: "Pedestrians use the crosswalk."
    },
    {
        word: "commuter",
        meaning: "pekerja yang bepergian",
        example: "Commuters take the train daily."
    },
    {
        word: "rush hour",
        meaning: "jam sibuk",
        example: "Traffic is heavy during rush hour."
    },
    {
        word: "skyscraper",
        meaning: "pencakar langit",
        example: "The skyscraper is very tall."
    },
    {
        word: "apartment complex",
        meaning: "kompleks apartemen",
        example: "They live in an apartment complex."
    },
    {
        word: "public transport",
        meaning: "transportasi umum",
        example: "She uses public transport daily."
    },
    {
        word: "subway",
        meaning: "kereta bawah tanah",
        example: "We took the subway downtown."
    },
    {
        word: "crosswalk",
        meaning: "zebra cross",
        example: "Wait for the signal at the crosswalk."
    },
    {
        word: "traffic light",
        meaning: "lampu lalu lintas",
        example: "Stop at the traffic light."
    },
    {
        word: "roundabout",
        meaning: "bundaran",
        example: "Turn right at the roundabout."
    },
    {
        word: "overpass",
        meaning: "jalan layang",
        example: "We drove under the overpass."
    },
    {
        word: "underpass",
        meaning: "jalan bawah tanah",
        example: "Walk through the underpass."
    },
    {
        word: "curb",
        meaning: "tepi jalan",
        example: "Park near the curb."
    },
    {
        word: "countryside",
        meaning: "pedesaan",
        example: "We spent the weekend in the countryside."
    },
    {
        word: "farmhouse",
        meaning: "rumah pertanian",
        example: "They live in an old farmhouse."
    },
    {
        word: "barn",
        meaning: "gudang pertanian",
        example: "The barn stores the hay."
    },
    {
        word: "pasture",
        meaning: "padang penggembalaan",
        example: "Cows graze in the pasture."
    },
    {
        word: "orchard",
        meaning: "kebun buah",
        example: "We picked apples at the orchard."
    },
    {
        word: "cottage",
        meaning: "pondok",
        example: "They stayed in a small cottage."
    },
    {
        word: "windmill",
        meaning: "kincir angin",
        example: "The windmill spins in the wind."
    },
    {
        word: "well",
        meaning: "sumur",
        example: "They get water from the well."
    },
    {
        word: "haystack",
        meaning: "tumpukan jerami",
        example: "The haystack is in the field."
    },
    {
        word: "scarecrow",
        meaning: "orang-orangan sawah",
        example: "A scarecrow stands in the field."
    },
    {
        word: "plow",
        meaning: "bajak",
        example: "The farmer used a plow."
    },
    {
        word: "livestock",
        meaning: "ternak",
        example: "They raise livestock on the farm."
    },
    {
        word: "crop field",
        meaning: "ladang tanaman",
        example: "The crop field is green."
    },
    {
        word: "village well",
        meaning: "sumur desa",
        example: "People gather at the village well."
    },
    {
        word: "hamlet",
        meaning: "dusun kecil",
        example: "They live in a small hamlet."
    },
    {
        word: "app",
        meaning: "aplikasi",
        example: "Download the new app."
    },
    {
        word: "update",
        meaning: "pembaruan aplikasi",
        example: "Install the app update."
    },
    {
        word: "bug",
        meaning: "bug/kesalahan program",
        example: "The app has a bug."
    },
    {
        word: "crash",
        meaning: "macet/berhenti mendadak",
        example: "The app crashed suddenly."
    },
    {
        word: "cloud storage",
        meaning: "penyimpanan awan",
        example: "Save files in cloud storage."
    },
    {
        word: "firewall",
        meaning: "firewall",
        example: "The firewall blocks threats."
    },
    {
        word: "encryption",
        meaning: "enkripsi",
        example: "Data encryption keeps it safe."
    },
    {
        word: "malware",
        meaning: "perangkat lunak jahat",
        example: "Malware can harm your device."
    },
    {
        word: "spam",
        meaning: "spam",
        example: "Delete the spam emails."
    },
    {
        word: "phishing",
        meaning: "phishing",
        example: "Beware of phishing scams."
    },
    {
        word: "streaming",
        meaning: "streaming",
        example: "We watch movies via streaming."
    },
    {
        word: "subscription",
        meaning: "langganan",
        example: "She has a streaming subscription."
    },
    {
        word: "influencer",
        meaning: "influencer",
        example: "She is a social media influencer."
    },
    {
        word: "viral",
        meaning: "viral",
        example: "The video went viral."
    },
    {
        word: "trending",
        meaning: "sedang tren",
        example: "This topic is trending."
    },
    {
        word: "feed",
        meaning: "umpan media sosial",
        example: "Scroll through your feed."
    },
    {
        word: "story",
        meaning: "story",
        example: "She posted a story."
    },
    {
        word: "emoji",
        meaning: "emoji",
        example: "She used a smiley emoji."
    },
    {
        word: "meme",
        meaning: "meme",
        example: "He shared a funny meme."
    },
    {
        word: "filter",
        meaning: "filter",
        example: "She used a photo filter."
    },
    {
        word: "relieved",
        meaning: "lega",
        example: "She felt relieved after the exam."
    },
    {
        word: "frustrated",
        meaning: "frustrasi",
        example: "He was frustrated with the delay."
    },
    {
        word: "overwhelmed",
        meaning: "kewalahan",
        example: "She felt overwhelmed with work."
    },
    {
        word: "content",
        meaning: "puas/senang",
        example: "He felt content with his life."
    },
    {
        word: "hopeful",
        meaning: "penuh harapan",
        example: "She remained hopeful."
    },
    {
        word: "hopeless",
        meaning: "putus asa",
        example: "He felt hopeless about the situation."
    },
    {
        word: "cheerful",
        meaning: "riang",
        example: "She has a cheerful smile."
    },
    {
        word: "miserable",
        meaning: "sengsara",
        example: "He felt miserable in the rain."
    },
    {
        word: "delighted",
        meaning: "sangat senang",
        example: "She was delighted with the gift."
    },
    {
        word: "thrilled",
        meaning: "sangat gembira",
        example: "He was thrilled about the trip."
    },
    {
        word: "annoyed",
        meaning: "kesal",
        example: "She was annoyed by the noise."
    },
    {
        word: "irritated",
        meaning: "jengkel",
        example: "He was irritated by the delay."
    },
    {
        word: "furious",
        meaning: "sangat marah",
        example: "She was furious about the mistake."
    },
    {
        word: "terrified",
        meaning: "sangat takut",
        example: "He was terrified of the dark."
    },
    {
        word: "anxious",
        meaning: "cemas",
        example: "She felt anxious before the interview."
    },
    {
        word: "calm",
        meaning: "tenang",
        example: "He remained calm during the crisis."
    },
    {
        word: "satisfied",
        meaning: "puas",
        example: "She was satisfied with the results."
    },
    {
        word: "unsatisfied",
        meaning: "tidak puas",
        example: "He was unsatisfied with the service."
    },
    {
        word: "touched",
        meaning: "tersentuh",
        example: "She was touched by his kindness."
    },
    {
        word: "moved",
        meaning: "terharu",
        example: "The audience was moved by the story."
    },
    {
        word: "wow",
        meaning: "wow",
        example: "Wow, that's amazing!"
    },
    {
        word: "oops",
        meaning: "aduh",
        example: "Oops, I made a mistake."
    },
    {
        word: "ouch",
        meaning: "aduh (sakit)",
        example: "Ouch, that hurts!"
    },
    {
        word: "hooray",
        meaning: "hore",
        example: "Hooray, we won!"
    },
    {
        word: "alas",
        meaning: "sayang sekali",
        example: "Alas, it was too late."
    },
    {
        word: "phew",
        meaning: "fiuh",
        example: "Phew, that was close."
    },
    {
        word: "yikes",
        meaning: "waduh",
        example: "Yikes, that looks dangerous."
    },
    {
        word: "hey",
        meaning: "hei",
        example: "Hey, look at this!"
    },
    {
        word: "hush",
        meaning: "diam",
        example: "Hush, the baby is sleeping."
    },
    {
        word: "shh",
        meaning: "ssst",
        example: "Shh, be quiet."
    },
    {
        word: "uh-oh",
        meaning: "aduh",
        example: "Uh-oh, we're in trouble."
    },
    {
        word: "bravo",
        meaning: "bravo",
        example: "Bravo, well performed!"
    },
    {
        word: "ta-da",
        meaning: "tada",
        example: "Ta-da, surprise!"
    },
    {
        word: "oh no",
        meaning: "aduh tidak",
        example: "Oh no, I forgot my keys!"
    },
    {
        word: "gosh",
        meaning: "astaga",
        example: "Gosh, I can't believe it."
    },
    {
        word: "table tennis",
        meaning: "tenis meja",
        example: "They play table tennis after school."
    },
    {
        word: "rugby",
        meaning: "rugbi",
        example: "Rugby is a rough sport."
    },
    {
        word: "cricket",
        meaning: "kriket",
        example: "Cricket is popular in India."
    },
    {
        word: "golf",
        meaning: "golf",
        example: "He plays golf on weekends."
    },
    {
        word: "darts",
        meaning: "panah lempar",
        example: "They played darts at the pub."
    },
    {
        word: "billiards",
        meaning: "biliar",
        example: "He is good at billiards."
    },
    {
        word: "snooker",
        meaning: "snooker",
        example: "They played snooker last night."
    },
    {
        word: "horse racing",
        meaning: "balap kuda",
        example: "We watched horse racing."
    },
    {
        word: "motor racing",
        meaning: "balap motor",
        example: "He loves motor racing."
    },
    {
        word: "weightlifting",
        meaning: "angkat besi",
        example: "He trains in weightlifting."
    },
    {
        word: "sprint",
        meaning: "lari cepat",
        example: "She won the 100m sprint."
    },
    {
        word: "relay race",
        meaning: "lari estafet",
        example: "They won the relay race."
    },
    {
        word: "high jump",
        meaning: "lompat tinggi",
        example: "He practices high jump."
    },
    {
        word: "long jump",
        meaning: "lompat jauh",
        example: "She competes in long jump."
    },
    {
        word: "pole vault",
        meaning: "lompat galah",
        example: "He trains for pole vault."
    },
    {
        word: "purpose",
        meaning: "tujuan",
        example: "What is your purpose here?"
    },
    {
        word: "reason",
        meaning: "alasan",
        example: "Give me a good reason."
    },
    {
        word: "method",
        meaning: "metode",
        example: "This is an effective method."
    },
    {
        word: "technique",
        meaning: "teknik",
        example: "She uses a special technique."
    },
    {
        word: "skill",
        meaning: "keahlian",
        example: "She has great cooking skills."
    },
    {
        word: "ability",
        meaning: "kemampuan",
        example: "He has the ability to lead."
    },
    {
        word: "effort",
        meaning: "usaha",
        example: "Put in more effort."
    },
    {
        word: "attempt",
        meaning: "percobaan",
        example: "This was her second attempt."
    },
    {
        word: "progress",
        meaning: "kemajuan",
        example: "We made good progress."
    },
    {
        word: "result",
        meaning: "hasil",
        example: "The result was positive."
    },
    {
        word: "outcome",
        meaning: "hasil akhir",
        example: "The outcome was unexpected."
    },
    {
        word: "impact",
        meaning: "dampak",
        example: "The impact was significant."
    },
    {
        word: "effect",
        meaning: "efek",
        example: "The effect was immediate."
    },
    {
        word: "cause",
        meaning: "penyebab",
        example: "Find the cause of the problem."
    },
    {
        word: "solution",
        meaning: "solusi",
        example: "We found a good solution."
    },
    {
        word: "option",
        meaning: "pilihan",
        example: "You have two options."
    },
    {
        word: "choice",
        meaning: "pilihan",
        example: "Make your choice."
    },
    {
        word: "decision",
        meaning: "keputusan",
        example: "She made a wise decision."
    },
    {
        word: "opportunity",
        meaning: "peluang",
        example: "This is a great opportunity."
    },
    {
        word: "challenge",
        meaning: "tantangan",
        example: "This project is a challenge."
    },
    {
        word: "pebble",
        meaning: "kerikil",
        example: "She threw a pebble into the pond."
    },
    {
        word: "boulder",
        meaning: "batu besar",
        example: "A large boulder blocked the path."
    },
    {
        word: "cliffside",
        meaning: "tepi tebing",
        example: "The house sits on the cliffside."
    },
    {
        word: "shoreline",
        meaning: "garis pantai",
        example: "We walked along the shoreline."
    },
    {
        word: "current",
        meaning: "arus air",
        example: "The current is strong today."
    },
    {
        word: "ripple",
        meaning: "riak air",
        example: "Ripples spread across the pond."
    },
    {
        word: "puddle",
        meaning: "genangan air",
        example: "The kids jumped in the puddle."
    },
    {
        word: "mud",
        meaning: "lumpur",
        example: "The path was covered in mud."
    },
    {
        word: "dust",
        meaning: "debu",
        example: "Dust covered the shelf."
    },
    {
        word: "ash",
        meaning: "abu",
        example: "Ash fell from the volcano."
    },
    {
        word: "smoke",
        meaning: "asap",
        example: "Smoke rose from the chimney."
    },
    {
        word: "steam",
        meaning: "uap",
        example: "Steam rose from the pot."
    },
    {
        word: "mist",
        meaning: "kabut tipis",
        example: "Mist covered the valley."
    },
    {
        word: "shade",
        meaning: "keteduhan",
        example: "We sat in the shade."
    },
    {
        word: "shadow",
        meaning: "bayangan",
        example: "His shadow followed him."
    },
    {
        word: "reflection",
        meaning: "pantulan",
        example: "She saw her reflection in the water."
    },
    {
        word: "echo",
        meaning: "gema",
        example: "We heard an echo in the cave."
    },
    {
        word: "gravity",
        meaning: "gravitasi",
        example: "Gravity keeps us on the ground."
    },
    {
        word: "magnetic field",
        meaning: "medan magnet",
        example: "The earth has a magnetic field."
    },
    {
        word: "shape",
        meaning: "bentuk",
        example: "What shape is this?"
    },
    {
        word: "pattern",
        meaning: "pola",
        example: "This fabric has a nice pattern."
    },
    {
        word: "texture",
        meaning: "tekstur",
        example: "The fabric has a rough texture."
    },
    {
        word: "surface",
        meaning: "permukaan",
        example: "Clean the surface."
    },
    {
        word: "edge",
        meaning: "tepi",
        example: "Be careful at the edge."
    },
    {
        word: "corner",
        meaning: "sudut/pojok",
        example: "The lamp is in the corner."
    },
    {
        word: "center",
        meaning: "pusat",
        example: "Stand in the center."
    },
    {
        word: "side",
        meaning: "sisi",
        example: "Sit on this side."
    },
    {
        word: "top",
        meaning: "atas",
        example: "Put it on top."
    },
    {
        word: "bottom",
        meaning: "bawah",
        example: "It's at the bottom."
    },
    {
        word: "middle",
        meaning: "tengah",
        example: "She stood in the middle."
    },
    {
        word: "gap",
        meaning: "celah",
        example: "There is a gap in the fence."
    },
    {
        word: "hole",
        meaning: "lubang",
        example: "There is a hole in the wall."
    },
    {
        word: "crack",
        meaning: "retakan",
        example: "There is a crack in the glass."
    },
    {
        word: "dent",
        meaning: "penyok",
        example: "The car has a dent."
    },
    {
        word: "stain",
        meaning: "noda",
        example: "There is a stain on the shirt."
    },
    {
        word: "spot",
        meaning: "bercak",
        example: "There is a spot on the carpet."
    },
    {
        word: "trace",
        meaning: "jejak",
        example: "There was no trace of him."
    },
    {
        word: "melt",
        meaning: "meleleh",
        example: "The ice melted quickly."
    },
    {
        word: "freeze",
        meaning: "membeku",
        example: "Water freezes at zero degrees."
    },
    {
        word: "boil",
        meaning: "mendidih",
        example: "The water is boiling."
    },
    {
        word: "evaporate",
        meaning: "menguap",
        example: "The water evaporated in the sun."
    },
    {
        word: "condense",
        meaning: "mengembun",
        example: "Water vapor condenses into droplets."
    },
    {
        word: "expand",
        meaning: "memuai",
        example: "Metal expands when heated."
    },
    {
        word: "contract",
        meaning: "menyusut",
        example: "Metal contracts when cooled."
    },
    {
        word: "dissolve",
        meaning: "larut",
        example: "Salt dissolves in water."
    },
    {
        word: "separate",
        meaning: "memisahkan",
        example: "Separate the whites and yolks."
    },
    {
        word: "combine",
        meaning: "menggabungkan",
        example: "Combine the two mixtures."
    },
    {
        word: "strain",
        meaning: "menyaring cairan",
        example: "Strain the pasta."
    },
    {
        word: "press",
        meaning: "menekan",
        example: "Press the button firmly."
    },
    {
        word: "crush",
        meaning: "menghancurkan",
        example: "Crush the garlic."
    },
    {
        word: "grind",
        meaning: "menggiling",
        example: "Grind the pepper."
    },
    {
        word: "slice",
        meaning: "mengiris",
        example: "Slice the bread thinly."
    },
    {
        word: "dice",
        meaning: "memotong dadu",
        example: "Dice the onion."
    },
    {
        word: "mince",
        meaning: "mencincang",
        example: "Mince the garlic finely."
    },
    {
        word: "delicate",
        meaning: "halus",
        example: "Handle it with delicate care."
    },
    {
        word: "robust",
        meaning: "kuat/kokoh",
        example: "The design is robust."
    },
    {
        word: "sturdy",
        meaning: "kokoh",
        example: "The table is sturdy."
    },
    {
        word: "fragile",
        meaning: "rapuh",
        example: "The vase is fragile."
    },
    {
        word: "flimsy",
        meaning: "rapuh tidak kokoh",
        example: "The box is flimsy."
    },
    {
        word: "durable",
        meaning: "tahan lama",
        example: "This material is durable."
    },
    {
        word: "worn out",
        meaning: "aus/using",
        example: "His shoes are worn out."
    },
    {
        word: "brand new",
        meaning: "baru sekali",
        example: "She bought a brand new car."
    },
    {
        word: "secondhand",
        meaning: "bekas",
        example: "He bought a secondhand book."
    },
    {
        word: "vintage",
        meaning: "antik/vintage",
        example: "She collects vintage clothes."
    },
    {
        word: "outdated",
        meaning: "ketinggalan zaman",
        example: "This software is outdated."
    },
    {
        word: "cutting-edge",
        meaning: "paling canggih",
        example: "This is cutting-edge technology."
    },
    {
        word: "state-of-the-art",
        meaning: "paling mutakhir",
        example: "The lab has state-of-the-art equipment."
    },
    {
        word: "high-tech",
        meaning: "berteknologi tinggi",
        example: "It's a high-tech gadget."
    },
    {
        word: "low-tech",
        meaning: "berteknologi sederhana",
        example: "This is a low-tech solution."
    },
    {
        word: "handmade",
        meaning: "buatan tangan",
        example: "This bag is handmade."
    },
    {
        word: "homemade",
        meaning: "buatan rumah",
        example: "She made homemade bread."
    },
    {
        word: "store-bought",
        meaning: "beli di toko",
        example: "This cake is store-bought."
    },
    {
        word: "organic",
        meaning: "organik",
        example: "She eats organic food."
    },
    {
        word: "artificial",
        meaning: "buatan/sintetis",
        example: "This flavor is artificial."
    },
    {
        word: "border",
        meaning: "perbatasan",
        example: "They crossed the border."
    },
    {
        word: "territory",
        meaning: "wilayah",
        example: "This is disputed territory."
    },
    {
        word: "region",
        meaning: "wilayah/kawasan",
        example: "This region is fertile."
    },
    {
        word: "province",
        meaning: "provinsi",
        example: "She lives in a different province."
    },
    {
        word: "district",
        meaning: "distrik",
        example: "This is a historic district."
    },
    {
        word: "municipality",
        meaning: "kota madya",
        example: "The municipality manages local affairs."
    },
    {
        word: "capital city",
        meaning: "ibu kota",
        example: "Jakarta is the capital city."
    },
    {
        word: "population",
        meaning: "populasi",
        example: "The population is growing."
    },
    {
        word: "landmark",
        meaning: "tempat bersejarah",
        example: "The tower is a famous landmark."
    },
    {
        word: "map",
        meaning: "peta",
        example: "Check the map for directions."
    },
    {
        word: "atlas",
        meaning: "atlas",
        example: "He studies an atlas."
    },
    {
        word: "globe",
        meaning: "globe",
        example: "The globe shows all countries."
    },
    {
        word: "latitude",
        meaning: "garis lintang",
        example: "The latitude affects climate."
    },
    {
        word: "longitude",
        meaning: "garis bujur",
        example: "Find the longitude on the map."
    },
    {
        word: "equator",
        meaning: "khatulistiwa",
        example: "Indonesia is near the equator."
    },
    {
        word: "hemisphere",
        meaning: "belahan bumi",
        example: "We live in the southern hemisphere."
    },
    {
        word: "time zone",
        meaning: "zona waktu",
        example: "Check the time zone difference."
    },
    {
        word: "altitude",
        meaning: "ketinggian",
        example: "The plane flies at high altitude."
    },
    {
        word: "sea level",
        meaning: "permukaan laut",
        example: "The city is below sea level."
    },
    {
        word: "as well as",
        meaning: "serta",
        example: "She speaks English as well as French."
    },
    {
        word: "as long as",
        meaning: "selama",
        example: "You can stay as long as you like."
    },
    {
        word: "as far as",
        meaning: "sejauh",
        example: "As far as I know, he's coming."
    },
    {
        word: "in case",
        meaning: "kalau-kalau",
        example: "Bring an umbrella in case it rains."
    },
    {
        word: "in order to",
        meaning: "supaya",
        example: "Study hard in order to pass."
    },
    {
        word: "so that",
        meaning: "supaya/agar",
        example: "Speak louder so that everyone hears."
    },
    {
        word: "even though",
        meaning: "meskipun",
        example: "Even though it's late, let's go."
    },
    {
        word: "even if",
        meaning: "meskipun jika",
        example: "Even if it rains, we'll go."
    },
    {
        word: "as if",
        meaning: "seolah-olah",
        example: "She acted as if nothing happened."
    },
    {
        word: "rather than",
        meaning: "daripada",
        example: "I'd walk rather than drive."
    },
    {
        word: "instead of",
        meaning: "daripada",
        example: "Use this instead of that."
    },
    {
        word: "apart from",
        meaning: "selain dari",
        example: "Apart from rain, it was a good day."
    },
    {
        word: "in addition to",
        meaning: "selain itu",
        example: "In addition to this, consider that."
    },
    {
        word: "due to",
        meaning: "karena",
        example: "The delay was due to weather."
    },
    {
        word: "owing to",
        meaning: "karena",
        example: "Owing to the storm, flights were cancelled."
    },
    {
        word: "thanks to",
        meaning: "berkat",
        example: "Thanks to your help, we finished on time."
    },
    {
        word: "in spite of",
        meaning: "meskipun",
        example: "In spite of the rain, we went out."
    },
    {
        word: "on behalf of",
        meaning: "atas nama",
        example: "I speak on behalf of the team."
    },
    {
        word: "with regard to",
        meaning: "sehubungan dengan",
        example: "With regard to your question, yes."
    },
    {
        word: "as a result",
        meaning: "sebagai akibatnya",
        example: "As a result, sales increased."
    },
    {
        word: "umbrella stand",
        meaning: "tempat payung",
        example: "Put the umbrella in the stand."
    },
    {
        word: "keychain",
        meaning: "gantungan kunci",
        example: "She has a cute keychain."
    },
    {
        word: "wallet",
        meaning: "dompet",
        example: "He keeps cash in his wallet."
    },
    {
        word: "badge",
        meaning: "lencana",
        example: "The officer wore a badge."
    },
    {
        word: "ID card",
        meaning: "kartu identitas",
        example: "Show your ID card."
    },
    {
        word: "permit",
        meaning: "izin",
        example: "You need a permit to build here."
    },
    {
        word: "license",
        meaning: "lisensi",
        example: "He has a driving license."
    },
    {
        word: "certificate",
        meaning: "sertifikat",
        example: "She received a certificate."
    },
    {
        word: "Certificate",
        meaning: "ijazah",
        example: "He earned his Certificate."
    },
    {
        word: "degree",
        meaning: "gelar",
        example: "She has a master's degree."
    },
    {
        word: "scholarship",
        meaning: "beasiswa",
        example: "She received a scholarship."
    },
    {
        word: "tuition",
        meaning: "biaya kuliah",
        example: "Tuition fees increased this year."
    },
    {
        word: "curriculum",
        meaning: "kurikulum",
        example: "The school updated its curriculum."
    },
    {
        word: "syllabus",
        meaning: "silabus",
        example: "Check the course syllabus."
    },
    {
        word: "assignment",
        meaning: "tugas",
        example: "Submit your assignment."
    },
    {
        word: "quiz",
        meaning: "kuis",
        example: "We have a quiz tomorrow."
    },
    {
        word: "midterm",
        meaning: "ujian tengah semester",
        example: "The midterm exam is next week."
    },
    {
        word: "final exam",
        meaning: "ujian akhir",
        example: "The final exam is difficult."
    },
    {
        word: "semester",
        meaning: "semester",
        example: "This semester is busy."
    },
    {
        word: "dormitory",
        meaning: "asrama",
        example: "She lives in a dormitory."
    },
    {
        word: "candlelight",
        meaning: "cahaya lilin",
        example: "They had dinner by candlelight."
    },
    {
        word: "firewood",
        meaning: "kayu bakar",
        example: "Collect firewood for the fire."
    },
    {
        word: "bonfire",
        meaning: "api unggun",
        example: "We sat around the bonfire."
    },
    {
        word: "campfire",
        meaning: "api unggun kemah",
        example: "We told stories by the campfire."
    },
    {
        word: "torch",
        meaning: "obor",
        example: "He carried a torch in the cave."
    },
    {
        word: "lantern",
        meaning: "lentera",
        example: "She lit the lantern."
    },
    {
        word: "wick",
        meaning: "sumbu lilin",
        example: "Light the candle's wick."
    },
    {
        word: "spark",
        meaning: "percikan api",
        example: "A spark started the fire."
    },
    {
        word: "flame",
        meaning: "nyala api",
        example: "The flame flickered."
    },
    {
        word: "ember",
        meaning: "bara api",
        example: "The embers glowed in the dark."
    },
    {
        word: "soot",
        meaning: "jelaga",
        example: "Soot covered the chimney."
    },
    {
        word: "charcoal",
        meaning: "arang",
        example: "We grilled meat over charcoal."
    },
    {
        word: "kindling",
        meaning: "kayu penyala api",
        example: "Gather kindling for the fire."
    },
    {
        word: "log",
        meaning: "kayu gelondongan",
        example: "He chopped the log."
    },
    {
        word: "timber",
        meaning: "kayu bangunan",
        example: "The house is made of timber."
    },
    {
        word: "lumber",
        meaning: "kayu olahan",
        example: "They bought lumber for the deck."
    },
    {
        word: "sawdust",
        meaning: "serbuk gergaji",
        example: "Sawdust covered the floor."
    },
    {
        word: "plywood",
        meaning: "triplek",
        example: "The wall is made of plywood."
    },
    {
        word: "nail",
        meaning: "paku",
        example: "Hammer the nail into the wood."
    },
    {
        word: "ladder",
        meaning: "tangga",
        example: "Climb the ladder carefully."
    },
    {
        word: "stepladder",
        meaning: "tangga lipat",
        example: "Use a stepladder to reach the shelf."
    },
    {
        word: "toolbox",
        meaning: "kotak perkakas",
        example: "He keeps tools in a toolbox."
    },
    {
        word: "workbench",
        meaning: "meja kerja",
        example: "He fixed the chair on the workbench."
    },
    {
        word: "vice",
        meaning: "catok",
        example: "Hold the wood with a vice."
    },
    {
        word: "clamp",
        meaning: "penjepit",
        example: "Use a clamp to hold it steady."
    },
    {
        word: "pliers",
        meaning: "tang",
        example: "Use pliers to bend the wire."
    },
    {
        word: "chisel",
        meaning: "pahat",
        example: "He carved wood with a chisel."
    },
    {
        word: "sandpaper",
        meaning: "amplas",
        example: "Smooth the wood with sandpaper."
    },
    {
        word: "varnish",
        meaning: "pernis",
        example: "Apply varnish to the table."
    },
    {
        word: "lacquer",
        meaning: "lak",
        example: "The furniture has a lacquer finish."
    },
    {
        word: "primer",
        meaning: "cat dasar",
        example: "Apply primer before painting."
    },
    {
        word: "roller",
        meaning: "rol cat",
        example: "Use a roller to paint the wall."
    },
    {
        word: "scaffold",
        meaning: "perancah",
        example: "Workers stood on the scaffold."
    },
    {
        word: "crane",
        meaning: "derek",
        example: "The crane lifted heavy materials."
    },
    {
        word: "thread",
        meaning: "benang",
        example: "Sew with strong thread."
    },
    {
        word: "button",
        meaning: "kancing",
        example: "Sew the button back on."
    },
    {
        word: "zipper",
        meaning: "ritsleting",
        example: "The zipper is stuck."
    },
    {
        word: "velcro",
        meaning: "velcro",
        example: "The shoes have velcro straps."
    },
    {
        word: "buckle",
        meaning: "gesper",
        example: "Fasten the buckle."
    },
    {
        word: "strap",
        meaning: "tali/selempang",
        example: "Adjust the bag strap."
    },
    {
        word: "elastic",
        meaning: "karet elastis",
        example: "The waistband is elastic."
    },
    {
        word: "hem",
        meaning: "kelim/tepi kain",
        example: "The hem of the dress is uneven."
    },
    {
        word: "seam",
        meaning: "jahitan",
        example: "The seam came undone."
    },
    {
        word: "patch",
        meaning: "tambalan",
        example: "She sewed a patch on the jeans."
    },
    {
        word: "stitch",
        meaning: "jahitan/setikan",
        example: "He got five stitches."
    },
    {
        word: "knot",
        meaning: "simpul",
        example: "Tie a tight knot."
    },
    {
        word: "loop",
        meaning: "lingkaran/simpai",
        example: "Make a loop with the rope."
    },
    {
        word: "tassel",
        meaning: "rumbai",
        example: "The scarf has tassels."
    },
    {
        word: "fringe",
        meaning: "rumbai pinggiran",
        example: "The rug has a fringe."
    },
    {
        word: "basically",
        meaning: "pada dasarnya",
        example: "Basically, we agree."
    },
    {
        word: "actually",
        meaning: "sebenarnya",
        example: "Actually, I disagree."
    },
    {
        word: "literally",
        meaning: "secara harfiah",
        example: "She literally ran a mile."
    },
    {
        word: "obviously",
        meaning: "jelas sekali",
        example: "Obviously, this is wrong."
    },
    {
        word: "certainly",
        meaning: "tentu saja",
        example: "Certainly, I will help."
    },
    {
        word: "definitely",
        meaning: "pasti",
        example: "I will definitely come."
    },
    {
        word: "probably",
        meaning: "mungkin",
        example: "It will probably rain."
    },
    {
        word: "possibly",
        meaning: "mungkin saja",
        example: "She might possibly agree."
    },
    {
        word: "apparently",
        meaning: "kelihatannya",
        example: "Apparently, he already left."
    },
    {
        word: "surprisingly",
        meaning: "mengejutkan",
        example: "Surprisingly, she won."
    },
    {
        word: "unfortunately",
        meaning: "sayangnya",
        example: "Unfortunately, we missed the bus."
    },
    {
        word: "fortunately",
        meaning: "untungnya",
        example: "Fortunately, no one was hurt."
    },
    {
        word: "hopefully",
        meaning: "semoga",
        example: "Hopefully, it won't rain."
    },
    {
        word: "honestly",
        meaning: "sejujurnya",
        example: "Honestly, I don't know."
    },
    {
        word: "frankly",
        meaning: "terus terang",
        example: "Frankly, I disagree."
    },
    {
        word: "technically",
        meaning: "secara teknis",
        example: "Technically, this is correct."
    },
    {
        word: "essentially",
        meaning: "pada intinya",
        example: "Essentially, they mean the same thing."
    },
    {
        word: "ultimately",
        meaning: "pada akhirnya",
        example: "Ultimately, it's your choice."
    },
    {
        word: "eventually",
        meaning: "akhirnya",
        example: "Eventually, they arrived."
    },
    {
        word: "initially",
        meaning: "awalnya",
        example: "Initially, I was confused."
    },
    {
        word: "checklist",
        meaning: "daftar periksa",
        example: "Follow the checklist carefully."
    },
    {
        word: "outline",
        meaning: "kerangka/garis besar",
        example: "Write an outline first."
    },
    {
        word: "draft",
        meaning: "draf",
        example: "This is the first draft."
    },
    {
        word: "template",
        meaning: "templat",
        example: "Use this template for the report."
    },
    {
        word: "format",
        meaning: "format",
        example: "Follow the correct format."
    },
    {
        word: "layout",
        meaning: "tata letak",
        example: "The page layout looks clean."
    },
    {
        word: "version",
        meaning: "versi",
        example: "This is the latest version."
    },
    {
        word: "edition",
        meaning: "edisi",
        example: "This is the second edition."
    },
    {
        word: "copy",
        meaning: "salinan",
        example: "Keep a copy for yourself."
    },
    {
        word: "original",
        meaning: "asli",
        example: "This is the original document."
    },
    {
        word: "duplicate",
        meaning: "duplikat",
        example: "This is a duplicate copy."
    },
    {
        word: "sample",
        meaning: "contoh/sampel",
        example: "Take a sample of the product."
    },
    {
        word: "prototype",
        meaning: "prototipe",
        example: "They built a prototype."
    },
    {
        word: "model",
        meaning: "model",
        example: "This is a scale model."
    },
    {
        word: "blueprint",
        meaning: "cetak biru",
        example: "Follow the blueprint exactly."
    },
    {
        word: "finalize",
        meaning: "menyelesaikan",
        example: "Finalize the report by Friday."
    },
    {
        word: "approve",
        meaning: "menyetujui",
        example: "The manager approved the plan."
    },
    {
        word: "sign",
        meaning: "menandatangani",
        example: "Sign the contract here."
    },
    {
        word: "stamp",
        meaning: "memberi cap",
        example: "Stamp the document."
    },
    {
        word: "notarize",
        meaning: "mengesahkan notaris",
        example: "The document was notarized."
    },
    {
        word: "archive",
        meaning: "mengarsipkan",
        example: "Archive the old files."
    },
    {
        word: "retrieve",
        meaning: "mengambil kembali",
        example: "Retrieve the saved document."
    },
    {
        word: "backup",
        meaning: "mencadangkan",
        example: "Backup your files regularly."
    },
    {
        word: "restore",
        meaning: "memulihkan",
        example: "Restore the deleted file."
    },
    {
        word: "sync",
        meaning: "menyinkronkan",
        example: "Sync your data across devices."
    },
    {
        word: "upload",
        meaning: "mengunggah",
        example: "Upload the photo."
    },
    {
        word: "download",
        meaning: "mengunduh",
        example: "Download the file."
    },
    {
        word: "attach",
        meaning: "melampirkan",
        example: "Attach the document to the email."
    },
    {
        word: "forward",
        meaning: "meneruskan",
        example: "Forward this email to her."
    },
    {
        word: "cc",
        meaning: "tembusan",
        example: "Please cc me on this email."
    },

        {
        word: "march",
        meaning: "berbaris",
        example: "Soldiers marched down the street."
    },
    {
        word: "stride",
        meaning: "melangkah lebar",
        example: "He strode confidently into the room."
    },
    {
        word: "shuffle",
        meaning: "menyeret kaki",
        example: "He shuffled across the floor."
    },
    {
        word: "stagger",
        meaning: "sempoyongan",
        example: "He staggered after the long run."
    },
    {
        word: "dash",
        meaning: "berlari cepat",
        example: "She dashed to catch the bus."
    },
    {
        word: "sprint",
        meaning: "berlari kencang",
        example: "He sprinted to the finish line."
    },
    {
        word: "stroll",
        meaning: "berjalan santai",
        example: "We strolled through the park."
    },
    {
        word: "wander",
        meaning: "mengembara",
        example: "They wandered through the market."
    },
    {
        word: "creep",
        meaning: "merayap/mengendap",
        example: "The cat crept toward the bird."
    },
    {
        word: "crawl",
        meaning: "merangkak",
        example: "The baby crawled across the floor."
    },
    {
        word: "leap",
        meaning: "melompat jauh",
        example: "The cat leaped onto the shelf."
    },
    {
        word: "bound",
        meaning: "melompat-lompat",
        example: "The dog bounded across the yard."
    },
    {
        word: "dart",
        meaning: "bergerak cepat",
        example: "The fish darted away."
    },
    {
        word: "dive",
        meaning: "menyelam/terjun",
        example: "He dove into the pool."
    },
    {
        word: "plunge",
        meaning: "terjun",
        example: "She plunged into the cold water."
    },
    {
        word: "descend",
        meaning: "turun",
        example: "We descended the stairs."
    },
    {
        word: "ascend",
        meaning: "naik",
        example: "They ascended the mountain."
    },
    {
        word: "hover",
        meaning: "melayang",
        example: "The bee hovered near the flower."
    },
    {
        word: "float",
        meaning: "mengambang",
        example: "The boat floated on the lake."
    },
    {
        word: "sink",
        meaning: "tenggelam",
        example: "The ship began to sink."
    },
    {
        word: "optimistic",
        meaning: "optimis",
        example: "She has an optimistic outlook."
    },
    {
        word: "pessimistic",
        meaning: "pesimis",
        example: "He tends to be pessimistic."
    },
    {
        word: "introverted",
        meaning: "introvert",
        example: "She is quite introverted."
    },
    {
        word: "extroverted",
        meaning: "ekstrovert",
        example: "He is very extroverted."
    },
    {
        word: "assertive",
        meaning: "tegas",
        example: "She is assertive in meetings."
    },
    {
        word: "passive",
        meaning: "pasif",
        example: "He has a passive attitude."
    },
    {
        word: "proactive",
        meaning: "proaktif",
        example: "She is proactive at work."
    },
    {
        word: "spontaneous",
        meaning: "spontan",
        example: "He made a spontaneous decision."
    },
    {
        word: "methodical",
        meaning: "metodis",
        example: "She works in a methodical way."
    },
    {
        word: "meticulous",
        meaning: "teliti",
        example: "He is meticulous with details."
    },
    {
        word: "laid-back",
        meaning: "santai",
        example: "He has a laid-back personality."
    },
    {
        word: "uptight",
        meaning: "tegang/kaku",
        example: "She seems a bit uptight."
    },
    {
        word: "easygoing",
        meaning: "santai/mudah bergaul",
        example: "He has an easygoing nature."
    },
    {
        word: "outspoken",
        meaning: "blak-blakan",
        example: "She is outspoken about her views."
    },
    {
        word: "reserved",
        meaning: "pendiam",
        example: "He is quite reserved."
    },
    {
        word: "sociable",
        meaning: "suka bergaul",
        example: "She is very sociable."
    },
    {
        word: "witty",
        meaning: "cerdas dan lucu",
        example: "He is known for being witty."
    },
    {
        word: "charismatic",
        meaning: "karismatik",
        example: "The leader is charismatic."
    },
    {
        word: "resourceful",
        meaning: "cerdik/banyak akal",
        example: "She is very resourceful."
    },
    {
        word: "versatile",
        meaning: "serba bisa",
        example: "He is a versatile player."
    },
    {
        word: "adaptable",
        meaning: "mudah beradaptasi",
        example: "She is highly adaptable."
    },
    {
        word: "persistent",
        meaning: "gigih",
        example: "He is persistent in his efforts."
    },
    {
        word: "determined",
        meaning: "bertekad",
        example: "She is determined to succeed."
    },
    {
        word: "ambitious",
        meaning: "ambisius",
        example: "He is very ambitious."
    },
    {
        word: "modest",
        meaning: "rendah hati",
        example: "She stayed modest about her success."
    },
    {
        word: "vain",
        meaning: "sombong tentang penampilan",
        example: "He is quite vain."
    },
    {
        word: "shallow",
        meaning: "dangkal",
        example: "His views seem shallow."
    },
    {
        word: "profound",
        meaning: "mendalam",
        example: "She made a profound statement."
    },
    {
        word: "naive",
        meaning: "naif",
        example: "He is naive about business."
    },
    {
        word: "cynical",
        meaning: "sinis",
        example: "She has a cynical view."
    },
    {
        word: "gullible",
        meaning: "mudah percaya",
        example: "He is gullible and easily fooled."
    },
    {
        word: "skeptical",
        meaning: "skeptis",
        example: "She remained skeptical."
    },
    {
        word: "open-minded",
        meaning: "berpikiran terbuka",
        example: "He is open-minded about new ideas."
    },
    {
        word: "narrow-minded",
        meaning: "berpikiran sempit",
        example: "Don't be narrow-minded."
    },
    {
        word: "tactful",
        meaning: "bijaksana dalam bicara",
        example: "She was tactful in her response."
    },
    {
        word: "blunt",
        meaning: "blak-blakan",
        example: "He gave a blunt answer."
    },
    {
        word: "diplomatic",
        meaning: "diplomatis",
        example: "She handled it diplomatically."
    },
    {
        word: "temperamental",
        meaning: "mudah emosi",
        example: "He can be temperamental."
    },
    {
        word: "even-tempered",
        meaning: "tenang emosinya",
        example: "She is even-tempered."
    },
    {
        word: "hot-headed",
        meaning: "gampang marah",
        example: "He is hot-headed."
    },
    {
        word: "lens",
        meaning: "lensa",
        example: "The camera has a wide lens."
    },
    {
        word: "shutter",
        meaning: "rana kamera",
        example: "Press the shutter to take a photo."
    },
    {
        word: "aperture",
        meaning: "bukaan lensa",
        example: "Adjust the aperture for more light."
    },
    {
        word: "exposure",
        meaning: "eksposur/pencahayaan",
        example: "The photo has good exposure."
    },
    {
        word: "focus",
        meaning: "fokus",
        example: "Adjust the focus on the subject."
    },
    {
        word: "zoom",
        meaning: "zum",
        example: "Zoom in on the flower."
    },
    {
        word: "tripod",
        meaning: "tripod",
        example: "Use a tripod for stability."
    },
    {
        word: "filter",
        meaning: "filter foto",
        example: "Apply a black and white filter."
    },
    {
        word: "snapshot",
        meaning: "foto cepat",
        example: "She took a quick snapshot."
    },
    {
        word: "caption",
        meaning: "keterangan foto",
        example: "Write a caption for the photo."
    },
    {
        word: "headline",
        meaning: "judul berita",
        example: "The headline caught my attention."
    },
    {
        word: "article",
        meaning: "artikel",
        example: "She wrote a news article."
    },
    {
        word: "column",
        meaning: "kolom opini",
        example: "He writes a weekly column."
    },
    {
        word: "editorial",
        meaning: "tajuk rencana",
        example: "The editorial discussed politics."
    },
    {
        word: "press conference",
        meaning: "konferensi pers",
        example: "The mayor held a press conference."
    },
    {
        word: "correspondent",
        meaning: "koresponden",
        example: "She is a foreign correspondent."
    },
    {
        word: "broadcast",
        meaning: "siaran",
        example: "The news is broadcast daily."
    },
    {
        word: "anchor",
        meaning: "pembawa berita",
        example: "He is a news anchor."
    },
    {
        word: "reporter",
        meaning: "wartawan",
        example: "The reporter interviewed the mayor."
    },
    {
        word: "scoop",
        meaning: "berita eksklusif",
        example: "The journalist got a big scoop."
    },
    {
        word: "publisher",
        meaning: "penerbit",
        example: "The publisher released the novel."
    },
    {
        word: "edition",
        meaning: "edisi",
        example: "This is the third edition."
    },
    {
        word: "print run",
        meaning: "cetakan",
        example: "The book had a small print run."
    },
    {
        word: "copyright",
        meaning: "hak cipta",
        example: "The book is protected by copyright."
    },
    {
        word: "royalty",
        meaning: "royalti",
        example: "The author receives royalties."
    },
    {
        word: "bestseller",
        meaning: "buku terlaris",
        example: "Her book became a bestseller."
    },
    {
        word: "hardcover",
        meaning: "sampul keras",
        example: "I prefer hardcover books."
    },
    {
        word: "paperback",
        meaning: "sampul lunak",
        example: "She bought the paperback edition."
    },
    {
        word: "bookbinding",
        meaning: "penjilidan buku",
        example: "The bookbinding is high quality."
    },
    {
        word: "index",
        meaning: "indeks",
        example: "Check the index for the topic."
    },
    {
        word: "appendix",
        meaning: "lampiran",
        example: "See the appendix for details."
    },
    {
        word: "footnote",
        meaning: "catatan kaki",
        example: "He added a footnote."
    },
    {
        word: "citation",
        meaning: "kutipan referensi",
        example: "Include a citation for this source."
    },
    {
        word: "bibliography",
        meaning: "daftar pustaka",
        example: "Add a bibliography at the end."
    },
    {
        word: "draft",
        meaning: "naskah kasar",
        example: "She revised the draft."
    },
    {
        word: "real estate",
        meaning: "properti/real estat",
        example: "He works in real estate."
    },
    {
        word: "property",
        meaning: "properti",
        example: "This property is for sale."
    },
    {
        word: "estate agent",
        meaning: "agen properti",
        example: "The estate agent showed us the house."
    },
    {
        word: "listing",
        meaning: "daftar properti",
        example: "Check the new property listing."
    },
    {
        word: "appraisal",
        meaning: "penilaian properti",
        example: "The house appraisal was fair."
    },
    {
        word: "down payment",
        meaning: "uang muka",
        example: "They saved for the down payment."
    },
    {
        word: "closing",
        meaning: "penutupan transaksi",
        example: "The closing is next week."
    },
    {
        word: "lease",
        meaning: "sewa kontrak",
        example: "They signed a one-year lease."
    },
    {
        word: "landlord",
        meaning: "pemilik rumah",
        example: "Pay rent to the landlord."
    },
    {
        word: "tenant",
        meaning: "penyewa",
        example: "The tenant moved in last month."
    },
    {
        word: "eviction",
        meaning: "pengusiran",
        example: "The tenant faced eviction."
    },
    {
        word: "renovation",
        meaning: "renovasi",
        example: "They did a home renovation."
    },
    {
        word: "remodel",
        meaning: "merenovasi ulang",
        example: "They remodeled the kitchen."
    },
    {
        word: "floor plan",
        meaning: "denah lantai",
        example: "Check the floor plan first."
    },
    {
        word: "square footage",
        meaning: "luas dalam kaki persegi",
        example: "The square footage is large."
    },
    {
        word: "runway",
        meaning: "landasan pacu",
        example: "The plane taxied to the runway."
    },
    {
        word: "cockpit",
        meaning: "kokpit",
        example: "The pilot sat in the cockpit."
    },
    {
        word: "cabin crew",
        meaning: "awak kabin",
        example: "The cabin crew served meals."
    },
    {
        word: "boarding gate",
        meaning: "gerbang keberangkatan",
        example: "Go to boarding gate 12."
    },
    {
        word: "layover",
        meaning: "transit",
        example: "We had a layover in Singapore."
    },
    {
        word: "turbulence",
        meaning: "turbulensi",
        example: "We experienced turbulence."
    },
    {
        word: "altitude",
        meaning: "ketinggian",
        example: "The plane cruises at high altitude."
    },
    {
        word: "landing",
        meaning: "pendaratan",
        example: "The landing was smooth."
    },
    {
        word: "takeoff",
        meaning: "lepas landas",
        example: "The takeoff was delayed."
    },
    {
        word: "air traffic control",
        meaning: "pengatur lalu lintas udara",
        example: "Air traffic control guided the plane."
    },
    {
        word: "baggage claim",
        meaning: "pengambilan bagasi",
        example: "Wait at baggage claim."
    },
    {
        word: "carry-on",
        meaning: "bagasi kabin",
        example: "Bring only a carry-on bag."
    },
    {
        word: "terminal",
        meaning: "terminal bandara",
        example: "Go to terminal 2."
    },
    {
        word: "customs",
        meaning: "bea cukai",
        example: "Go through customs."
    },
    {
        word: "immigration",
        meaning: "imigrasi",
        example: "Show your passport at immigration."
    },
    {
        word: "railway",
        meaning: "jalur kereta api",
        example: "The railway connects two cities."
    },
    {
        word: "locomotive",
        meaning: "lokomotif",
        example: "The locomotive pulled many cars."
    },
    {
        word: "platform",
        meaning: "peron",
        example: "Wait on platform 3."
    },
    {
        word: "railway track",
        meaning: "rel kereta",
        example: "The railway track is long."
    },
    {
        word: "conductor",
        meaning: "kondektur",
        example: "The conductor checked tickets."
    },
    {
        word: "compartment",
        meaning: "kompartemen",
        example: "We sat in a private compartment."
    },
    {
        word: "freight train",
        meaning: "kereta barang",
        example: "The freight train carries goods."
    },
    {
        word: "subway",
        meaning: "kereta bawah tanah",
        example: "We took the subway."
    },
    {
        word: "tram",
        meaning: "trem",
        example: "The tram runs through downtown."
    },
    {
        word: "monorail",
        meaning: "monorel",
        example: "The monorail is fast and quiet."
    },
    {
        word: "wedding",
        meaning: "pernikahan",
        example: "We attended their wedding."
    },
    {
        word: "bride",
        meaning: "pengantin wanita",
        example: "The bride wore white."
    },
    {
        word: "groom",
        meaning: "pengantin pria",
        example: "The groom looked nervous."
    },
    {
        word: "bridesmaid",
        meaning: "pendamping pengantin wanita",
        example: "She was a bridesmaid."
    },
    {
        word: "best man",
        meaning: "pendamping pengantin pria",
        example: "He was the best man."
    },
    {
        word: "wedding ring",
        meaning: "cincin kawin",
        example: "They exchanged wedding rings."
    },
    {
        word: "vow",
        meaning: "janji pernikahan",
        example: "They exchanged vows."
    },
    {
        word: "reception",
        meaning: "resepsi pernikahan",
        example: "The reception was elegant."
    },
    {
        word: "honeymoon",
        meaning: "bulan madu",
        example: "They went on a honeymoon."
    },
    {
        word: "bouquet",
        meaning: "buket bunga",
        example: "The bride carried a bouquet."
    },
    {
        word: "proposal",
        meaning: "lamaran",
        example: "He made a romantic proposal."
    },
    {
        word: "engagement ring",
        meaning: "cincin tunangan",
        example: "She wears an engagement ring."
    },
    {
        word: "anniversary",
        meaning: "hari jadi pernikahan",
        example: "Happy wedding anniversary!"
    },
    {
        word: "Christmas",
        meaning: "Natal",
        example: "We celebrate Christmas in December."
    },
    {
        word: "Easter",
        meaning: "Paskah",
        example: "They celebrate Easter in spring."
    },
    {
        word: "Ramadan",
        meaning: "Ramadan",
        example: "Muslims fast during Ramadan."
    },
    {
        word: "Eid",
        meaning: "Idul Fitri",
        example: "We celebrate Eid with family."
    },
    {
        word: "Hanukkah",
        meaning: "Hanukkah",
        example: "They light candles for Hanukkah."
    },
    {
        word: "Diwali",
        meaning: "Diwali",
        example: "Diwali is the festival of lights."
    },
    {
        word: "Thanksgiving",
        meaning: "Thanksgiving",
        example: "We eat turkey on Thanksgiving."
    },
    {
        word: "New Year",
        meaning: "Tahun Baru",
        example: "We celebrate New Year with fireworks."
    },
    {
        word: "pilgrimage",
        meaning: "ziarah",
        example: "They made a religious pilgrimage."
    },
    {
        word: "fasting",
        meaning: "berpuasa",
        example: "Fasting is part of Ramadan."
    },
    {
        word: "squid",
        meaning: "cumi-cumi",
        example: "The squid swims quickly."
    },
    {
        word: "eel",
        meaning: "belut",
        example: "The eel hides in the rocks."
    },
    {
        word: "stingray",
        meaning: "ikan pari",
        example: "The stingray glides along the seabed."
    },
    {
        word: "manta ray",
        meaning: "ikan pari manta",
        example: "The manta ray is huge."
    },
    {
        word: "swordfish",
        meaning: "ikan todak",
        example: "The swordfish has a long bill."
    },
    {
        word: "tuna",
        meaning: "ikan tuna",
        example: "We caught a big tuna."
    },
    {
        word: "salmon",
        meaning: "ikan salmon",
        example: "Salmon swim upstream to breed."
    },
    {
        word: "cod",
        meaning: "ikan kod",
        example: "Cod is used in fish and chips."
    },
    {
        word: "anchovy",
        meaning: "ikan teri",
        example: "Anchovies are small and salty."
    },
    {
        word: "sardine",
        meaning: "ikan sarden",
        example: "We ate canned sardines."
    },
    {
        word: "puffer fish",
        meaning: "ikan buntal",
        example: "The puffer fish inflates when scared."
    },
    {
        word: "seahorse",
        meaning: "kuda laut",
        example: "Seahorses swim upright."
    },
    {
        word: "sea urchin",
        meaning: "bulu babi",
        example: "Be careful of the sea urchin."
    },
    {
        word: "coral",
        meaning: "karang",
        example: "The coral reef is colorful."
    },
    {
        word: "plankton",
        meaning: "plankton",
        example: "Plankton feed many sea creatures."
    },
    {
        word: "kelp",
        meaning: "rumput laut besar",
        example: "Kelp forests grow in the ocean."
    },
    {
        word: "seaweed",
        meaning: "rumput laut",
        example: "We ate seaweed salad."
    },
    {
        word: "barnacle",
        meaning: "teritip",
        example: "Barnacles cling to the rocks."
    },
    {
        word: "anemone",
        meaning: "anemon laut",
        example: "The clownfish hides in the anemone."
    },
    {
        word: "robin",
        meaning: "burung robin",
        example: "The robin sings in spring."
    },
    {
        word: "finch",
        meaning: "burung pipit kecil",
        example: "The finch has colorful feathers."
    },
    {
        word: "wren",
        meaning: "burung kerak",
        example: "The wren built a tiny nest."
    },
    {
        word: "heron",
        meaning: "burung bangau kuntul",
        example: "The heron stood in the water."
    },
    {
        word: "crane",
        meaning: "burung bangau jenjang",
        example: "The crane danced gracefully."
    },
    {
        word: "kingfisher",
        meaning: "burung raja udang",
        example: "The kingfisher dove for fish."
    },
    {
        word: "toucan",
        meaning: "burung tukan",
        example: "The toucan has a colorful beak."
    },
    {
        word: "macaw",
        meaning: "burung nuri besar",
        example: "The macaw is very colorful."
    },
    {
        word: "cockatoo",
        meaning: "kakatua",
        example: "The cockatoo can mimic sounds."
    },
    {
        word: "albatross",
        meaning: "burung layang-layang laut",
        example: "The albatross flies for miles."
    },
    {
        word: "pelican",
        meaning: "burung pelikan",
        example: "The pelican scoops fish with its beak."
    },
    {
        word: "condor",
        meaning: "burung kondor",
        example: "The condor soars over mountains."
    },
    {
        word: "ostrich",
        meaning: "burung unta",
        example: "The ostrich cannot fly."
    },
    {
        word: "emu",
        meaning: "emu",
        example: "The emu runs fast."
    },
    {
        word: "turkey",
        meaning: "kalkun",
        example: "We ate turkey for dinner."
    },
    {
        word: "thyme",
        meaning: "timi",
        example: "Add thyme to the stew."
    },
    {
        word: "rosemary",
        meaning: "rosemary",
        example: "Rosemary smells wonderful."
    },
    {
        word: "oregano",
        meaning: "oregano",
        example: "Sprinkle oregano on the pizza."
    },
    {
        word: "sage",
        meaning: "sage",
        example: "Sage is used in cooking."
    },
    {
        word: "dill",
        meaning: "adas",
        example: "Add dill to the fish."
    },
    {
        word: "chive",
        meaning: "daun bawang kucai",
        example: "Sprinkle chives on the soup."
    },
    {
        word: "lavender",
        meaning: "lavender",
        example: "Lavender has a calming scent."
    },
    {
        word: "aloe vera",
        meaning: "lidah buaya",
        example: "Aloe vera soothes the skin."
    },
    {
        word: "fern",
        meaning: "pakis",
        example: "Ferns grow in shady areas."
    },
    {
        word: "moss",
        meaning: "lumut",
        example: "Moss covers the old wall."
    },
    {
        word: "ivy",
        meaning: "tanaman ivy",
        example: "Ivy climbs up the fence."
    },
    {
        word: "clover",
        meaning: "semanggi",
        example: "She found a four-leaf clover."
    },
    {
        word: "dandelion",
        meaning: "bunga dandelion",
        example: "The kids blew on the dandelion."
    },
    {
        word: "weed",
        meaning: "gulma",
        example: "Pull the weeds from the garden."
    },
    {
        word: "shrub",
        meaning: "semak",
        example: "Trim the shrub."
    },
    {
        word: "saute",
        meaning: "menumis",
        example: "Saute the onions until golden."
    },
    {
        word: "braise",
        meaning: "memasak dengan sedikit cairan",
        example: "Braise the beef slowly."
    },
    {
        word: "roast",
        meaning: "memanggang di oven",
        example: "Roast the chicken for an hour."
    },
    {
        word: "steam",
        meaning: "mengukus",
        example: "Steam the vegetables."
    },
    {
        word: "poach",
        meaning: "merebus perlahan",
        example: "Poach the eggs gently."
    },
    {
        word: "blanch",
        meaning: "merebus sebentar",
        example: "Blanch the broccoli."
    },
    {
        word: "caramelize",
        meaning: "mengaramelkan",
        example: "Caramelize the sugar slowly."
    },
    {
        word: "marinate",
        meaning: "merendam bumbu",
        example: "Marinate the chicken overnight."
    },
    {
        word: "season",
        meaning: "membumbui",
        example: "Season the meat with salt."
    },
    {
        word: "garnish",
        meaning: "menghias makanan",
        example: "Garnish the dish with parsley."
    },
    {
        word: "preheat",
        meaning: "memanaskan awal",
        example: "Preheat the oven to 200 degrees."
    },
    {
        word: "simmer",
        meaning: "memasak perlahan",
        example: "Let the sauce simmer."
    },
    {
        word: "whisk",
        meaning: "mengocok",
        example: "Whisk the eggs until fluffy."
    },
    {
        word: "knead",
        meaning: "menguleni",
        example: "Knead the dough for 10 minutes."
    },
    {
        word: "ferment",
        meaning: "memfermentasi",
        example: "Let the dough ferment overnight."
    },
    {
        word: "pickle",
        meaning: "mengasinkan",
        example: "Pickle the cucumbers."
    },
    {
        word: "cure",
        meaning: "mengawetkan",
        example: "Cure the meat with salt."
    },
    {
        word: "smoke",
        meaning: "mengasapi",
        example: "Smoke the fish for flavor."
    },
    {
        word: "deep fry",
        meaning: "menggoreng dalam minyak banyak",
        example: "Deep fry the chicken."
    },
    {
        word: "stir fry",
        meaning: "menumis cepat",
        example: "Stir fry the vegetables."
    },
    {
        word: "baste",
        meaning: "mengoles cairan",
        example: "Baste the turkey while roasting."
    },
    {
        word: "drizzle",
        meaning: "menyiram tipis",
        example: "Drizzle olive oil on the salad."
    },
    {
        word: "stuff",
        meaning: "mengisi makanan",
        example: "Stuff the turkey with herbs."
    },
    {
        word: "skewer",
        meaning: "menusuk dengan tusukan",
        example: "Skewer the meat for grilling."
    },
    {
        word: "carve",
        meaning: "mengiris daging",
        example: "Carve the roast beef."
    },
    {
        word: "apron",
        meaning: "celemek",
        example: "Wear an apron while cooking."
    },
    {
        word: "oven mitt",
        meaning: "sarung tangan oven",
        example: "Use an oven mitt to hold the pan."
    },
    {
        word: "rolling pin",
        meaning: "penggilas adonan",
        example: "Use a rolling pin for the dough."
    },
    {
        word: "mixing bowl",
        meaning: "mangkuk adonan",
        example: "Mix the batter in a mixing bowl."
    },
    {
        word: "measuring cup",
        meaning: "gelas ukur",
        example: "Use a measuring cup for flour."
    },
    {
        word: "measuring spoon",
        meaning: "sendok ukur",
        example: "Use a measuring spoon for salt."
    },
    {
        word: "timer",
        meaning: "pengatur waktu",
        example: "Set the timer for ten minutes."
    },
    {
        word: "food processor",
        meaning: "food processor",
        example: "Chop vegetables in the food processor."
    },
    {
        word: "blender",
        meaning: "blender",
        example: "Blend the smoothie."
    },
    {
        word: "skillet",
        meaning: "wajan datar",
        example: "Fry the eggs in a skillet."
    },
    {
        word: "saucepan",
        meaning: "panci saus",
        example: "Heat the sauce in a saucepan."
    },
    {
        word: "stockpot",
        meaning: "panci besar",
        example: "Cook the soup in a stockpot."
    },
    {
        word: "baking sheet",
        meaning: "loyang panggang",
        example: "Put the cookies on a baking sheet."
    },
    {
        word: "baking pan",
        meaning: "loyang kue",
        example: "Pour the batter into the baking pan."
    },
    {
        word: "muffin tin",
        meaning: "cetakan muffin",
        example: "Fill the muffin tin with batter."
    },
    {
        word: "cookie cutter",
        meaning: "cetakan kue kering",
        example: "Use a cookie cutter for shapes."
    },
    {
        word: "pastry brush",
        meaning: "kuas pastri",
        example: "Brush the dough with a pastry brush."
    },
    {
        word: "food scale",
        meaning: "timbangan makanan",
        example: "Weigh the flour on a food scale."
    },
    {
        word: "can opener",
        meaning: "pembuka kaleng",
        example: "Open the can with a can opener."
    },
    {
        word: "entrepreneur",
        meaning: "wirausahawan",
        example: "She is a successful entrepreneur."
    },
    {
        word: "startup",
        meaning: "perusahaan rintisan",
        example: "He founded a tech startup."
    },
    {
        word: "stakeholder",
        meaning: "pemangku kepentingan",
        example: "We consulted the stakeholders."
    },
    {
        word: "shareholder",
        meaning: "pemegang saham",
        example: "Shareholders voted on the merger."
    },
    {
        word: "merger",
        meaning: "merger/penggabungan",
        example: "The two companies announced a merger."
    },
    {
        word: "acquisition",
        meaning: "akuisisi",
        example: "The acquisition was completed."
    },
    {
        word: "revenue",
        meaning: "pendapatan",
        example: "The company's revenue grew."
    },
    {
        word: "profit margin",
        meaning: "margin keuntungan",
        example: "The profit margin is small."
    },
    {
        word: "overhead",
        meaning: "biaya operasional",
        example: "Reduce overhead costs."
    },
    {
        word: "asset",
        meaning: "aset",
        example: "The company has many assets."
    },
    {
        word: "liability",
        meaning: "kewajiban/utang",
        example: "This is a financial liability."
    },
    {
        word: "audit",
        meaning: "audit",
        example: "The company underwent an audit."
    },
    {
        word: "forecast",
        meaning: "perkiraan bisnis",
        example: "The sales forecast looks good."
    },
    {
        word: "logistics",
        meaning: "logistik",
        example: "Logistics ensures timely delivery."
    },
    {
        word: "supply chain",
        meaning: "rantai pasokan",
        example: "The supply chain was disrupted."
    },
    {
        word: "inventory",
        meaning: "persediaan barang",
        example: "Check the inventory levels."
    },
    {
        word: "wholesale",
        meaning: "grosir",
        example: "We buy products wholesale."
    },
    {
        word: "retail",
        meaning: "eceran",
        example: "She works in retail."
    },
    {
        word: "franchise",
        meaning: "waralaba",
        example: "He owns a restaurant franchise."
    },
    {
        word: "brand awareness",
        meaning: "kesadaran merek",
        example: "The campaign built brand awareness."
    },
    {
        word: "market share",
        meaning: "pangsa pasar",
        example: "The company increased its market share."
    },
    {
        word: "competitor",
        meaning: "pesaing",
        example: "They studied their competitors."
    },
    {
        word: "client",
        meaning: "klien",
        example: "We met with a new client."
    },
    {
        word: "vendor",
        meaning: "pemasok/vendor",
        example: "We chose a reliable vendor."
    },
    {
        word: "outsource",
        meaning: "mengalihdayakan",
        example: "They outsource customer service."
    },
    {
        word: "algorithm",
        meaning: "algoritma",
        example: "This algorithm sorts numbers."
    },
    {
        word: "variable",
        meaning: "variabel",
        example: "Define a variable in the code."
    },
    {
        word: "function",
        meaning: "fungsi",
        example: "Write a function to calculate."
    },
    {
        word: "loop",
        meaning: "perulangan",
        example: "Use a loop to repeat the task."
    },
    {
        word: "array",
        meaning: "larik/array",
        example: "Store the data in an array."
    },
    {
        word: "string",
        meaning: "string/teks",
        example: "Convert the number to a string."
    },
    {
        word: "boolean",
        meaning: "boolean",
        example: "Boolean values are true or false."
    },
    {
        word: "syntax",
        meaning: "sintaksis",
        example: "Check the code syntax."
    },
    {
        word: "compile",
        meaning: "mengompilasi",
        example: "Compile the program before running."
    },
    {
        word: "debug",
        meaning: "memperbaiki bug",
        example: "Debug the code carefully."
    },
    {
        word: "framework",
        meaning: "kerangka kerja",
        example: "This app uses a popular framework."
    },
    {
        word: "library",
        meaning: "pustaka kode",
        example: "Import the library first."
    },
    {
        word: "interface",
        meaning: "antarmuka",
        example: "Design a user-friendly interface."
    },
    {
        word: "database",
        meaning: "basis data",
        example: "Store the records in a database."
    },
    {
        word: "query",
        meaning: "kueri",
        example: "Write a query to fetch data."
    },
    {
        word: "server",
        meaning: "server",
        example: "The server handles requests."
    },
    {
        word: "protocol",
        meaning: "protokol",
        example: "Follow the network protocol."
    },
    {
        word: "bandwidth",
        meaning: "bandwidth",
        example: "We need more bandwidth."
    },
    {
        word: "latency",
        meaning: "latensi",
        example: "The connection has low latency."
    },
    {
        word: "encryption",
        meaning: "enkripsi",
        example: "Data encryption protects privacy."
    },
    {
        word: "authentication",
        meaning: "autentikasi",
        example: "Two-factor authentication is safer."
    },
    {
        word: "open source",
        meaning: "sumber terbuka",
        example: "This software is open source."
    },
    {
        word: "lawsuit",
        meaning: "gugatan hukum",
        example: "They filed a lawsuit."
    },
    {
        word: "plaintiff",
        meaning: "penggugat",
        example: "The plaintiff presented evidence."
    },
    {
        word: "defendant",
        meaning: "tergugat",
        example: "The defendant denied the charges."
    },
    {
        word: "verdict",
        meaning: "putusan",
        example: "The jury reached a verdict."
    },
    {
        word: "testimony",
        meaning: "kesaksian",
        example: "She gave her testimony in court."
    },
    {
        word: "appeal",
        meaning: "banding",
        example: "He filed an appeal."
    },
    {
        word: "settlement",
        meaning: "penyelesaian hukum",
        example: "They reached a settlement."
    },
    {
        word: "custody",
        meaning: "hak asuh",
        example: "She has custody of the children."
    },
    {
        word: "will",
        meaning: "surat wasiat",
        example: "He left a will."
    },
    {
        word: "inheritance",
        meaning: "warisan",
        example: "She received an inheritance."
    },
    {
        word: "estate",
        meaning: "harta warisan",
        example: "The estate was divided equally."
    },
    {
        word: "notary",
        meaning: "notaris",
        example: "The notary signed the document."
    },
    {
        word: "affidavit",
        meaning: "surat pernyataan sumpah",
        example: "He signed an affidavit."
    },
    {
        word: "subpoena",
        meaning: "panggilan pengadilan",
        example: "She received a subpoena."
    },
    {
        word: "bail",
        meaning: "jaminan hukum",
        example: "He was released on bail."
    },
    {
        word: "felony",
        meaning: "kejahatan berat",
        example: "He was charged with a felony."
    },
    {
        word: "misdemeanor",
        meaning: "pelanggaran ringan",
        example: "It was just a misdemeanor."
    },
    {
        word: "probation",
        meaning: "masa percobaan hukum",
        example: "He was put on probation."
    },
    {
        word: "parole",
        meaning: "pembebasan bersyarat",
        example: "He was released on parole."
    },
    {
        word: "legislation",
        meaning: "perundang-undangan",
        example: "New legislation was passed."
    },
    {
        word: "policyholder",
        meaning: "pemegang polis",
        example: "The policyholder filed a claim."
    },
    {
        word: "claim",
        meaning: "klaim asuransi",
        example: "She filed an insurance claim."
    },
    {
        word: "premium",
        meaning: "premi asuransi",
        example: "Pay your monthly premium."
    },
    {
        word: "coverage",
        meaning: "cakupan asuransi",
        example: "Check your insurance coverage."
    },
    {
        word: "deductible",
        meaning: "potongan sendiri",
        example: "The deductible is $500."
    },
    {
        word: "beneficiary",
        meaning: "penerima manfaat",
        example: "She is the beneficiary of the policy."
    },
    {
        word: "policy",
        meaning: "polis asuransi",
        example: "Read the insurance policy carefully."
    },
    {
        word: "underwriter",
        meaning: "penjamin asuransi",
        example: "The underwriter assessed the risk."
    },
    {
        word: "break down",
        meaning: "rusak/mogok",
        example: "The car broke down."
    },
    {
        word: "break out",
        meaning: "meletus/menyebar",
        example: "A fire broke out."
    },
    {
        word: "break up",
        meaning: "putus hubungan",
        example: "They broke up last month."
    },
    {
        word: "build up",
        meaning: "membangun bertahap",
        example: "Build up your confidence."
    },
    {
        word: "burn out",
        meaning: "kelelahan/jenuh",
        example: "She burned out from overwork."
    },
    {
        word: "call off",
        meaning: "membatalkan",
        example: "They called off the wedding."
    },
    {
        word: "check in",
        meaning: "check-in",
        example: "We checked in at the hotel."
    },
    {
        word: "check out",
        meaning: "check-out",
        example: "Check out is at noon."
    },
    {
        word: "clean up",
        meaning: "membersihkan",
        example: "Clean up the mess."
    },
    {
        word: "cut down",
        meaning: "mengurangi",
        example: "Cut down on sugar."
    },
    {
        word: "cut off",
        meaning: "memutuskan",
        example: "They cut off the power."
    },
    {
        word: "fill in",
        meaning: "mengisi formulir",
        example: "Fill in the form."
    },
    {
        word: "fill out",
        meaning: "mengisi lengkap",
        example: "Fill out the application."
    },
    {
        word: "find out",
        meaning: "mengetahui",
        example: "I need to find out the truth."
    },
    {
        word: "get away",
        meaning: "melarikan diri/liburan",
        example: "They got away for the weekend."
    },
    {
        word: "get back",
        meaning: "kembali",
        example: "I'll get back to you soon."
    },
    {
        word: "get in",
        meaning: "masuk",
        example: "Get in the car."
    },
    {
        word: "get out",
        meaning: "keluar",
        example: "Get out of here."
    },
    {
        word: "get through",
        meaning: "melewati/berhasil",
        example: "We got through the storm."
    },
    {
        word: "give away",
        meaning: "memberikan cuma-cuma",
        example: "She gave away her old clothes."
    },
    {
        word: "go ahead",
        meaning: "silakan lanjutkan",
        example: "Go ahead, I'm listening."
    },
    {
        word: "go on",
        meaning: "lanjutkan",
        example: "Go on with your story."
    },
    {
        word: "go over",
        meaning: "meninjau ulang",
        example: "Let's go over the report."
    },
    {
        word: "hand in",
        meaning: "menyerahkan",
        example: "Hand in your assignment."
    },
    {
        word: "hand out",
        meaning: "membagikan",
        example: "Hand out the papers."
    },
    {
        word: "hold on",
        meaning: "tunggu sebentar",
        example: "Hold on, I'm coming."
    },
    {
        word: "hold up",
        meaning: "menahan/memperlambat",
        example: "The traffic held us up."
    },
    {
        word: "keep on",
        meaning: "terus melakukan",
        example: "Keep on trying."
    },
    {
        word: "leave out",
        meaning: "mengabaikan/melewatkan",
        example: "Don't leave out any details."
    },
    {
        word: "look into",
        meaning: "menyelidiki",
        example: "We will look into the matter."
    },
    {
        word: "look up",
        meaning: "mencari informasi",
        example: "Look up the word in the dictionary."
    },
    {
        word: "make up",
        meaning: "berbaikan/mengarang",
        example: "They made up after the fight."
    },
    {
        word: "pass away",
        meaning: "meninggal dunia",
        example: "Her grandfather passed away."
    },
    {
        word: "point out",
        meaning: "menunjukkan",
        example: "She pointed out the error."
    },
    {
        word: "run into",
        meaning: "bertemu tidak sengaja",
        example: "I ran into an old friend."
    },
    {
        word: "set up",
        meaning: "mendirikan/mengatur",
        example: "They set up a new business."
    },
    {
        word: "sort out",
        meaning: "menyelesaikan",
        example: "We need to sort out this issue."
    },
    {
        word: "stand for",
        meaning: "mewakili/melambangkan",
        example: "The flag stands for freedom."
    },
    {
        word: "stand out",
        meaning: "menonjol",
        example: "Her work stands out."
    },
    {
        word: "take off",
        meaning: "lepas landas/melepas",
        example: "The plane took off."
    },
    {
        word: "take over",
        meaning: "mengambil alih",
        example: "He took over the company."
    },
    {
        word: "think over",
        meaning: "memikirkan matang",
        example: "Think it over carefully."
    },
    {
        word: "throw away",
        meaning: "membuang",
        example: "Throw away the trash."
    },
    {
        word: "turn into",
        meaning: "berubah menjadi",
        example: "The caterpillar turned into a butterfly."
    },
    {
        word: "turn up",
        meaning: "muncul/datang",
        example: "She turned up late."
    },
    {
        word: "wear out",
        meaning: "aus/kelelahan",
        example: "The shoes wore out quickly."
    },
    {
        word: "work out",
        meaning: "berolahraga/berhasil",
        example: "She works out every morning."
    },
    {
        word: "sleeping bag",
        meaning: "kantong tidur",
        example: "He zipped up his sleeping bag."
    },
    {
        word: "hiking boots",
        meaning: "sepatu hiking",
        example: "Wear sturdy hiking boots."
    },
    {
        word: "compass",
        meaning: "kompas",
        example: "Use a compass to navigate."
    },
    {
        word: "map",
        meaning: "peta jalur",
        example: "Bring a trail map."
    },
    {
        word: "flashlight",
        meaning: "senter",
        example: "Pack a flashlight for the night."
    },
    {
        word: "multi-tool",
        meaning: "alat serbaguna",
        example: "A multi-tool is handy for camping."
    },
    {
        word: "water bottle",
        meaning: "botol air minum",
        example: "Fill your water bottle."
    },
    {
        word: "camping stove",
        meaning: "kompor kemah",
        example: "Cook on a camping stove."
    },
    {
        word: "cooler",
        meaning: "boks pendingin",
        example: "Pack drinks in the cooler."
    },
    {
        word: "hammock",
        meaning: "hammock/ayunan",
        example: "He relaxed in a hammock."
    },
    {
        word: "trekking pole",
        meaning: "tongkat trekking",
        example: "Use trekking poles on steep trails."
    },
    {
        word: "binoculars",
        meaning: "teropong",
        example: "Use binoculars to see birds."
    },
    {
        word: "insect repellent",
        meaning: "pengusir serangga",
        example: "Apply insect repellent."
    },
    {
        word: "first aid kit",
        meaning: "kotak P3K",
        example: "Bring a first aid kit."
    },
    {
        word: "campground",
        meaning: "area perkemahan",
        example: "We found a nice campground."
    },
    {
        word: "toolkit",
        meaning: "perlengkapan alat",
        example: "Keep a toolkit at home."
    },
    {
        word: "power drill",
        meaning: "bor listrik",
        example: "Use a power drill for the holes."
    },
    {
        word: "measuring tape",
        meaning: "meteran",
        example: "Use a measuring tape for length."
    },
    {
        word: "level",
        meaning: "waterpas",
        example: "Use a level to check straightness."
    },
    {
        word: "paint roller",
        meaning: "rol cat",
        example: "Use a paint roller for large walls."
    },
    {
        word: "caulk",
        meaning: "dempul/perekat",
        example: "Apply caulk around the sink."
    },
    {
        word: "insulation",
        meaning: "insulasi",
        example: "Add insulation to the attic."
    },
    {
        word: "wiring",
        meaning: "kabel instalasi",
        example: "Check the electrical wiring."
    },
    {
        word: "plumbing",
        meaning: "perpipaan",
        example: "Fix the plumbing leak."
    },
    {
        word: "umbrella",
        meaning: "payung lipat",
        example: "She carries a small umbrella."
    },
    {
        word: "wallet chain",
        meaning: "rantai dompet",
        example: "He has a wallet chain."
    },
    {
        word: "suspenders",
        meaning: "tali celana",
        example: "He wears suspenders."
    },
    {
        word: "cufflink",
        meaning: "kancing manset",
        example: "He wears gold cufflinks."
    },
    {
        word: "monocle",
        meaning: "kacamata satu lensa",
        example: "The old man wore a monocle."
    },
    {
        word: "cane",
        meaning: "tongkat jalan",
        example: "He walks with a cane."
    },
    {
        word: "crutch",
        meaning: "tongkat penyangga",
        example: "She used crutches after the injury."
    },
    {
        word: "wheelchair",
        meaning: "kursi roda",
        example: "He uses a wheelchair."
    },
    {
        word: "walker",
        meaning: "alat bantu jalan",
        example: "She uses a walker."
    },
    {
        word: "hearing aid",
        meaning: "alat bantu dengar",
        example: "He wears a hearing aid."
    },
    {
        word: "eyeglasses",
        meaning: "kacamata",
        example: "She wears eyeglasses."
    },
    {
        word: "contact lens",
        meaning: "lensa kontak",
        example: "She wears contact lenses."
    },
    {
        word: "magnifying glass",
        meaning: "kaca pembesar",
        example: "Use a magnifying glass to read."
    },
    {
        word: "binocular",
        meaning: "teropong",
        example: "He used binoculars to watch birds."
    },
    {
        word: "stopwatch",
        meaning: "stopwatch",
        example: "Use a stopwatch to time the race."
    },
    {
        word: "hourglass",
        meaning: "jam pasir",
        example: "The hourglass measures minutes."
    },
    {
        word: "thermometer",
        meaning: "termometer",
        example: "Check your temperature with a thermometer."
    },
    {
        word: "scale",
        meaning: "timbangan",
        example: "Weigh yourself on the scale."
    },
    {
        word: "ruler",
        meaning: "penggaris",
        example: "Use a ruler to measure."
    },
    {
        word: "protractor",
        meaning: "busur derajat",
        example: "Use a protractor to measure angles."
    },
    {
        word: "vivid",
        meaning: "hidup/jelas",
        example: "She has a vivid imagination."
    },
    {
        word: "dull",
        meaning: "kusam",
        example: "The paint looks dull."
    },
    {
        word: "pale",
        meaning: "pucat",
        example: "She looked pale after the illness."
    },
    {
        word: "vibrant",
        meaning: "hidup penuh warna",
        example: "The city has a vibrant culture."
    },
    {
        word: "dim",
        meaning: "redup",
        example: "The room was dim."
    },
    {
        word: "radiant",
        meaning: "bersinar cerah",
        example: "She looked radiant."
    },
    {
        word: "murky",
        meaning: "keruh",
        example: "The water is murky."
    },
    {
        word: "translucent",
        meaning: "tembus cahaya sebagian",
        example: "The curtain is translucent."
    },
    {
        word: "transparent",
        meaning: "transparan",
        example: "The glass is transparent."
    },
    {
        word: "opaque",
        meaning: "buram/tidak tembus cahaya",
        example: "The window is opaque."
    },
    {
        word: "glossy",
        meaning: "mengilap",
        example: "The magazine has glossy pages."
    },
    {
        word: "matte",
        meaning: "tidak mengilap",
        example: "She prefers a matte finish."
    },
    {
        word: "rough",
        meaning: "kasar",
        example: "The surface is rough."
    },
    {
        word: "bumpy",
        meaning: "tidak rata",
        example: "The road is bumpy."
    },
    {
        word: "even",
        meaning: "rata",
        example: "The floor is even."
    },
    {
        word: "uneven",
        meaning: "tidak rata",
        example: "The ground is uneven."
    },
    {
        word: "symmetrical",
        meaning: "simetris",
        example: "The design is symmetrical."
    },
    {
        word: "asymmetrical",
        meaning: "asimetris",
        example: "The haircut is asymmetrical."
    },
    {
        word: "proportional",
        meaning: "proporsional",
        example: "The design is proportional."
    },
    {
        word: "oversized",
        meaning: "terlalu besar",
        example: "She wore an oversized sweater."
    },
    {
        word: "undersized",
        meaning: "terlalu kecil",
        example: "The shirt is undersized."
    },
    {
        word: "compact",
        meaning: "ringkas/kecil",
        example: "This car is compact."
    },
    {
        word: "bulky",
        meaning: "besar dan berat",
        example: "The package is bulky."
    },
    {
        word: "lightweight",
        meaning: "ringan",
        example: "This laptop is lightweight."
    },
    {
        word: "bulk",
        meaning: "dalam jumlah besar",
        example: "Buy rice in bulk."
    },
    {
        word: "portion",
        meaning: "porsi",
        example: "This is a small portion."
    },
    {
        word: "fraction",
        meaning: "sebagian kecil",
        example: "Only a fraction of them came."
    },
    {
        word: "majority",
        meaning: "mayoritas",
        example: "The majority voted yes."
    },
    {
        word: "minority",
        meaning: "minoritas",
        example: "Only a minority disagreed."
    },
    {
        word: "surplus",
        meaning: "kelebihan",
        example: "There is a surplus of food."
    },
    {
        word: "shortage",
        meaning: "kekurangan",
        example: "There is a water shortage."
    },
    {
        word: "excess",
        meaning: "kelebihan berlebih",
        example: "Remove the excess fat."
    },
    {
        word: "scarcity",
        meaning: "kelangkaan",
        example: "There is a scarcity of resources."
    },
    {
        word: "abundance",
        meaning: "kelimpahan",
        example: "There is an abundance of fruit."
    },
    {
        word: "assume",
        meaning: "mengasumsikan",
        example: "I assume you're coming."
    },
    {
        word: "presume",
        meaning: "menduga",
        example: "I presume he's busy."
    },
    {
        word: "infer",
        meaning: "menyimpulkan",
        example: "We can infer the meaning."
    },
    {
        word: "imply",
        meaning: "menyiratkan",
        example: "She implied she was unhappy."
    },
    {
        word: "hint",
        meaning: "memberi petunjuk",
        example: "He hinted at the surprise."
    },
    {
        word: "clue",
        meaning: "petunjuk",
        example: "Give me a clue."
    },
    {
        word: "suspect",
        meaning: "mencurigai",
        example: "I suspect he's lying."
    },
    {
        word: "doubt",
        meaning: "meragukan",
        example: "I doubt that's true."
    },
    {
        word: "verify",
        meaning: "memverifikasi",
        example: "Verify the information first."
    },
    {
        word: "validate",
        meaning: "memvalidasi",
        example: "Validate your ticket."
    },
    {
        word: "confirm",
        meaning: "mengonfirmasi",
        example: "Please confirm the booking."
    },
    {
        word: "deny",
        meaning: "menyangkal",
        example: "He denied the accusation."
    },
    {
        word: "admit",
        meaning: "mengakui",
        example: "She admitted her mistake."
    },
    {
        word: "acknowledge",
        meaning: "mengakui",
        example: "He acknowledged the problem."
    },
    {
        word: "recognize",
        meaning: "mengenali",
        example: "I recognize this place."
    },
    {
        word: "identify",
        meaning: "mengidentifikasi",
        example: "Identify the correct answer."
    },
    {
        word: "distinguish",
        meaning: "membedakan",
        example: "Distinguish between the two."
    },
    {
        word: "differentiate",
        meaning: "membedakan",
        example: "Differentiate the concepts."
    },
    {
        word: "classify",
        meaning: "mengklasifikasikan",
        example: "Classify the animals by type."
    },
    {
        word: "categorize",
        meaning: "mengkategorikan",
        example: "Categorize the items."
    },
    {
        word: "prioritize",
        meaning: "memprioritaskan",
        example: "Prioritize your tasks."
    },
    {
        word: "optimize",
        meaning: "mengoptimalkan",
        example: "Optimize the process."
    },
    {
        word: "maximize",
        meaning: "memaksimalkan",
        example: "Maximize your potential."
    },
    {
        word: "minimize",
        meaning: "meminimalkan",
        example: "Minimize the risk."
    },
    {
        word: "simplify",
        meaning: "menyederhanakan",
        example: "Simplify the instructions."
    },
    {
        word: "complicate",
        meaning: "mempersulit",
        example: "Don't complicate things."
    },
    {
        word: "streamline",
        meaning: "menyederhanakan proses",
        example: "Streamline the workflow."
    },
    {
        word: "standardize",
        meaning: "menstandarkan",
        example: "Standardize the procedure."
    },
    {
        word: "customize",
        meaning: "menyesuaikan",
        example: "Customize your settings."
    },
    {
        word: "personalize",
        meaning: "mempersonalisasi",
        example: "Personalize your profile."
    },
    {
        word: "indifferent",
        meaning: "acuh tak acuh",
        example: "He seemed indifferent."
    },
    {
        word: "apathetic",
        meaning: "apatis",
        example: "She felt apathetic about the news."
    },
    {
        word: "empathetic",
        meaning: "berempati",
        example: "She is very empathetic."
    },
    {
        word: "sympathetic",
        meaning: "simpatik",
        example: "He was sympathetic to her situation."
    },
    {
        word: "compassionate",
        meaning: "penuh kasih sayang",
        example: "She is a compassionate nurse."
    },
    {
        word: "resentful",
        meaning: "dendam",
        example: "He felt resentful about the decision."
    },
    {
        word: "regretful",
        meaning: "menyesal",
        example: "She felt regretful about her choice."
    },
    {
        word: "remorseful",
        meaning: "menyesal mendalam",
        example: "He was remorseful for his actions."
    },
    {
        word: "content",
        meaning: "puas",
        example: "She felt content with her life."
    },
    {
        word: "fulfilled",
        meaning: "terpenuhi",
        example: "He felt fulfilled in his career."
    },
    {
        word: "empty",
        meaning: "hampa",
        example: "She felt empty inside."
    },
    {
        word: "numb",
        meaning: "mati rasa",
        example: "He felt numb after the news."
    },
    {
        word: "vulnerable",
        meaning: "rentan",
        example: "She felt vulnerable and exposed."
    },
    {
        word: "defensive",
        meaning: "defensif",
        example: "He became defensive when questioned."
    },
    {
        word: "guarded",
        meaning: "berhati-hati/tertutup",
        example: "She remained guarded."
    },
    {
        word: "suspicious",
        meaning: "curiga",
        example: "He looked suspicious."
    },
    {
        word: "paranoid",
        meaning: "paranoid",
        example: "She felt paranoid about being watched."
    },
    {
        word: "obsessed",
        meaning: "terobsesi",
        example: "He is obsessed with football."
    },
    {
        word: "infatuated",
        meaning: "tergila-gila",
        example: "She is infatuated with him."
    },
    {
        word: "smitten",
        meaning: "jatuh cinta",
        example: "He was smitten by her smile."
    },
    {
        word: "prescription",
        meaning: "resep obat",
        example: "The doctor wrote a prescription."
    },
    {
        word: "dosage",
        meaning: "dosis",
        example: "Follow the correct dosage."
    },
    {
        word: "side effect",
        meaning: "efek samping",
        example: "This medicine has side effects."
    },
    {
        word: "chronic",
        meaning: "kronis",
        example: "He has a chronic condition."
    },
    {
        word: "acute",
        meaning: "akut",
        example: "She has an acute infection."
    },
    {
        word: "remission",
        meaning: "masa remisi",
        example: "The cancer is in remission."
    },
    {
        word: "relapse",
        meaning: "kambuh",
        example: "She had a relapse of the illness."
    },
    {
        word: "outbreak",
        meaning: "wabah",
        example: "There was a disease outbreak."
    },
    {
        word: "epidemic",
        meaning: "epidemi",
        example: "The epidemic spread quickly."
    },
    {
        word: "pandemic",
        meaning: "pandemi",
        example: "The pandemic affected the world."
    },
    {
        word: "quarantine",
        meaning: "karantina",
        example: "They were placed in quarantine."
    },
    {
        word: "isolation",
        meaning: "isolasi medis",
        example: "The patient is in isolation."
    },
    {
        word: "contagious",
        meaning: "menular",
        example: "The disease is contagious."
    },
    {
        word: "hygiene",
        meaning: "kebersihan",
        example: "Good hygiene prevents illness."
    },
    {
        word: "thriller",
        meaning: "film thriller",
        example: "We watched a thriller movie."
    },
    {
        word: "horror",
        meaning: "film horor",
        example: "She loves horror movies."
    },
    {
        word: "comedy",
        meaning: "komedi",
        example: "He watched a comedy show."
    },
    {
        word: "drama",
        meaning: "drama",
        example: "This is a family drama."
    },
    {
        word: "romance",
        meaning: "romansa",
        example: "She enjoys romance novels."
    },
    {
        word: "fantasy",
        meaning: "fantasi",
        example: "He reads fantasy books."
    },
    {
        word: "science fiction",
        meaning: "fiksi ilmiah",
        example: "She loves science fiction."
    },
    {
        word: "mystery",
        meaning: "misteri",
        example: "This is a mystery novel."
    },
    {
        word: "adventure",
        meaning: "petualangan",
        example: "This is an adventure film."
    },
    {
        word: "action",
        meaning: "aksi",
        example: "He loves action movies."
    },
    {
        word: "musical",
        meaning: "musikal",
        example: "We watched a musical."
    },
    {
        word: "western",
        meaning: "western",
        example: "He likes western movies."
    },
    {
        word: "biography",
        meaning: "biografi",
        example: "This is a biographical film."
    },
    {
        word: "satire",
        meaning: "satir",
        example: "The show is a political satire."
    },
    {
        word: "tragedy",
        meaning: "tragedi",
        example: "The play is a tragedy."
    },
    {
        word: "realism",
        meaning: "realisme",
        example: "The novel is written in realism style."
    },
    {
        word: "abstract art",
        meaning: "seni abstrak",
        example: "She paints abstract art."
    },
    {
        word: "portrait",
        meaning: "potret",
        example: "He painted a portrait."
    },
    {
        word: "landscape",
        meaning: "lukisan pemandangan",
        example: "She painted a landscape."
    },
    {
        word: "still life",
        meaning: "lukisan benda mati",
        example: "He painted a still life of fruit."
    },
    {
        word: "mural",
        meaning: "mural",
        example: "The wall has a colorful mural."
    },
    {
        word: "graffiti",
        meaning: "grafiti",
        example: "The wall is covered in graffiti."
    },
    {
        word: "sketch",
        meaning: "sketsa",
        example: "He made a quick sketch."
    },
    {
        word: "masterpiece",
        meaning: "mahakarya",
        example: "This painting is a masterpiece."
    },
    {
        word: "exhibition",
        meaning: "pameran",
        example: "We visited an art exhibition."
    },
    {
        word: "blues",
        meaning: "blues",
        example: "He plays blues guitar."
    },
    {
        word: "country music",
        meaning: "musik country",
        example: "She loves country music."
    },
    {
        word: "electronic music",
        meaning: "musik elektronik",
        example: "He produces electronic music."
    },
    {
        word: "opera",
        meaning: "opera",
        example: "We watched an opera performance."
    },
    {
        word: "symphony",
        meaning: "simfoni",
        example: "The orchestra played a symphony."
    },
    {
        word: "ballad",
        meaning: "balada",
        example: "She sang a beautiful ballad."
    },
    {
        word: "anthem",
        meaning: "lagu kebangsaan",
        example: "They sang the national anthem."
    },
    {
        word: "soundtrack",
        meaning: "soundtrack",
        example: "The movie soundtrack is amazing."
    },
    {
        word: "remix",
        meaning: "remix lagu",
        example: "He made a remix of the song."
    },
    {
        word: "acapella",
        meaning: "akapela",
        example: "They sang acapella."
    },
    {
        word: "hypothesis",
        meaning: "hipotesis",
        example: "She tested her hypothesis."
    },
    {
        word: "data analysis",
        meaning: "analisis data",
        example: "He performed data analysis."
    },
    {
        word: "methodology",
        meaning: "metodologi",
        example: "Explain your research methodology."
    },
    {
        word: "thesis",
        meaning: "tesis",
        example: "She wrote her thesis on climate change."
    },
    {
        word: "dissertation",
        meaning: "disertasi",
        example: "He is writing his dissertation."
    },
    {
        word: "peer review",
        meaning: "tinjauan sejawat",
        example: "The paper underwent peer review."
    },
    {
        word: "plagiarism",
        meaning: "plagiarisme",
        example: "Plagiarism is a serious offense."
    },
    {
        word: "scholarship",
        meaning: "beasiswa",
        example: "She received a research scholarship."
    },
    {
        word: "faculty",
        meaning: "fakultas",
        example: "He teaches in the science faculty."
    },
    {
        word: "curriculum",
        meaning: "kurikulum",
        example: "The curriculum was updated."
    },
    {
        word: "lecture",
        meaning: "kuliah/ceramah",
        example: "The professor gave a lecture."
    },
    {
        word: "seminar",
        meaning: "seminar",
        example: "We attended a seminar."
    },
    {
        word: "workshop",
        meaning: "lokakarya",
        example: "She led a writing workshop."
    },
    {
        word: "driving license",
        meaning: "surat izin mengemudi",
        example: "He got his driving license."
    },
    {
        word: "speed limit",
        meaning: "batas kecepatan",
        example: "Follow the speed limit."
    },
    {
        word: "traffic jam",
        meaning: "kemacetan lalu lintas",
        example: "We got stuck in a traffic jam."
    },
    {
        word: "overtake",
        meaning: "menyalip",
        example: "Don't overtake on a curve."
    },
    {
        word: "merge",
        meaning: "bergabung lajur",
        example: "Merge carefully into traffic."
    },
    {
        word: "yield",
        meaning: "memberi jalan",
        example: "Yield to oncoming traffic."
    },
    {
        word: "u-turn",
        meaning: "putar balik",
        example: "Make a U-turn here."
    },
    {
        word: "detour",
        meaning: "jalan memutar",
        example: "We took a detour."
    },
    {
        word: "toll booth",
        meaning: "gerbang tol",
        example: "Pay at the toll booth."
    },
    {
        word: "speed bump",
        meaning: "polisi tidur",
        example: "Slow down for the speed bump."
    },
    {
        word: "pedestrian crossing",
        meaning: "penyeberangan pejalan kaki",
        example: "Stop at the pedestrian crossing."
    },
    {
        word: "traffic violation",
        meaning: "pelanggaran lalu lintas",
        example: "He got a traffic violation."
    },
    {
        word: "fine",
        meaning: "denda",
        example: "He paid a fine for speeding."
    },
    {
        word: "checkpoint",
        meaning: "pos pemeriksaan",
        example: "They passed through a checkpoint."
    },
    {
        word: "carpool",
        meaning: "berbagi tumpangan mobil",
        example: "We carpool to work."
    },
    {
        word: "designated driver",
        meaning: "sopir yang tidak minum",
        example: "She was the designated driver."
    },
    {
        word: "road trip",
        meaning: "perjalanan darat jauh",
        example: "We went on a road trip."
    },
    {
        word: "gas station",
        meaning: "pom bensin",
        example: "Stop at the gas station."
    },
    {
        word: "car wash",
        meaning: "cuci mobil",
        example: "He took the car to a car wash."
    },
    {
        word: "mechanic shop",
        meaning: "bengkel mobil",
        example: "Take the car to the mechanic shop."
    },
    {
        word: "receipt",
        meaning: "struk belanja",
        example: "Keep your receipt."
    },
    {
        word: "voucher",
        meaning: "voucher",
        example: "She used a discount voucher."
    },
    {
        word: "coupon",
        meaning: "kupon",
        example: "He used a coupon at checkout."
    },
    {
        word: "loyalty card",
        meaning: "kartu member",
        example: "Scan your loyalty card."
    },
    {
        word: "membership",
        meaning: "keanggotaan",
        example: "She has a gym membership."
    },
    {
        word: "subscription",
        meaning: "langganan",
        example: "He has a magazine subscription."
    },
    {
        word: "trial period",
        meaning: "masa percobaan",
        example: "Try the free trial period."
    },
    {
        word: "warranty",
        meaning: "garansi",
        example: "This has a two-year warranty."
    },
    {
        word: "guarantee",
        meaning: "jaminan",
        example: "The product comes with a guarantee."
    },
    {
        word: "terms and conditions",
        meaning: "syarat dan ketentuan",
        example: "Read the terms and conditions."
    },
    {
        word: "agreement",
        meaning: "perjanjian",
        example: "Sign the agreement."
    },
    {
        word: "contract",
        meaning: "kontrak",
        example: "Sign the rental contract."
    },
    {
        word: "invoice",
        meaning: "faktur",
        example: "Send the invoice to the client."
    },
    {
        word: "quotation",
        meaning: "penawaran harga",
        example: "Request a price quotation."
    },
    {
        word: "estimate",
        meaning: "perkiraan biaya",
        example: "Get a repair estimate."
    },
    {
        word: "overcast",
        meaning: "mendung",
        example: "The sky is overcast."
    },
    {
        word: "clear sky",
        meaning: "langit cerah",
        example: "We have a clear sky today."
    },
    {
        word: "partly cloudy",
        meaning: "berawan sebagian",
        example: "It's partly cloudy today."
    },
    {
        word: "chance of rain",
        meaning: "kemungkinan hujan",
        example: "There's a chance of rain later."
    },
    {
        word: "heatstroke",
        meaning: "sengatan panas",
        example: "He suffered heatstroke."
    },
    {
        word: "sunburn",
        meaning: "kulit terbakar matahari",
        example: "She got a sunburn at the beach."
    },
    {
        word: "windchill",
        meaning: "efek dingin angin",
        example: "The windchill makes it feel colder."
    },
    {
        word: "dew point",
        meaning: "titik embun",
        example: "The dew point is high today."
    },
    {
        word: "barometric pressure",
        meaning: "tekanan udara",
        example: "Barometric pressure is dropping."
    },
    {
        word: "weather station",
        meaning: "stasiun cuaca",
        example: "The weather station recorded the data."
    },
    {
        word: "penalty kick",
        meaning: "tendangan penalti",
        example: "He scored from a penalty kick."
    },
    {
        word: "free kick",
        meaning: "tendangan bebas",
        example: "She scored a free kick."
    },
    {
        word: "corner kick",
        meaning: "tendangan sudut",
        example: "The corner kick led to a goal."
    },
    {
        word: "offside",
        meaning: "offside",
        example: "The player was offside."
    },
    {
        word: "substitute",
        meaning: "pemain pengganti",
        example: "He came in as a substitute."
    },
    {
        word: "halftime",
        meaning: "jeda babak",
        example: "The score was tied at halftime."
    },
    {
        word: "overtime",
        meaning: "perpanjangan waktu",
        example: "The game went into overtime."
    },
    {
        word: "tournament",
        meaning: "turnamen",
        example: "They won the tournament."
    },
    {
        word: "league",
        meaning: "liga",
        example: "The team plays in the top league."
    },
    {
        word: "standings",
        meaning: "klasemen",
        example: "Check the league standings."
    },
    {
        word: "draw",
        meaning: "seri",
        example: "The match ended in a draw."
    },
    {
        word: "underdog",
        meaning: "tim lemah",
        example: "The underdog won the match."
    },
    {
        word: "champion",
        meaning: "juara",
        example: "She is the reigning champion."
    },
    {
        word: "medal",
        meaning: "medali",
        example: "He won a gold medal."
    },
    {
        word: "trophy",
        meaning: "piala",
        example: "They lifted the trophy."
    },
    {
        word: "record",
        meaning: "rekor",
        example: "He broke the world record."
    },
    {
        word: "training camp",
        meaning: "kamp pelatihan",
        example: "The team held a training camp."
    },
    {
        word: "warm-up",
        meaning: "pemanasan",
        example: "Do a warm-up before running."
    },
    {
        word: "cool down",
        meaning: "pendinginan",
        example: "Cool down after your workout."
    },
    {
        word: "injury",
        meaning: "cedera",
        example: "He suffered a knee injury."
    },
    {
        word: "card trick",
        meaning: "trik kartu",
        example: "He performed a card trick."
    },
    {
        word: "magic trick",
        meaning: "trik sulap",
        example: "She learned a magic trick."
    },
    {
        word: "riddle",
        meaning: "teka-teki",
        example: "Solve this riddle."
    },
    {
        word: "trivia",
        meaning: "trivia",
        example: "He knows a lot of trivia."
    },
    {
        word: "scavenger hunt",
        meaning: "permainan mencari barang",
        example: "The kids enjoyed the scavenger hunt."
    },
    {
        word: "jigsaw puzzle",
        meaning: "teka-teki gambar",
        example: "She completed the jigsaw puzzle."
    },
    {
        word: "dice",
        meaning: "dadu",
        example: "Roll the dice."
    },
    {
        word: "marble",
        meaning: "kelereng",
        example: "The kids played with marbles."
    },
    {
        word: "kite",
        meaning: "layang-layang",
        example: "He flew a kite."
    },
    {
        word: "yo-yo",
        meaning: "yoyo",
        example: "She played with a yo-yo."
    },
    {
        word: "top",
        meaning: "gasing",
        example: "The children spun a top."
    },
    {
        word: "doll",
        meaning: "boneka",
        example: "She plays with her doll."
    },
    {
        word: "action figure",
        meaning: "action figure",
        example: "He collects action figures."
    },
    {
        word: "stuffed animal",
        meaning: "boneka binatang",
        example: "The child hugged the stuffed animal."
    },
    {
        word: "building blocks",
        meaning: "balok mainan",
        example: "The kids play with building blocks."
    },
    {
        word: "kindergarten",
        meaning: "taman kanak-kanak",
        example: "She attends kindergarten."
    },
    {
        word: "elementary school",
        meaning: "sekolah dasar",
        example: "He goes to elementary school."
    },
    {
        word: "middle school",
        meaning: "sekolah menengah pertama",
        example: "She is in middle school."
    },
    {
        word: "high school",
        meaning: "sekolah menengah atas",
        example: "He graduated from high school."
    },
    {
        word: "vocational school",
        meaning: "sekolah kejuruan",
        example: "He studies at a vocational school."
    },
    {
        word: "tutor",
        meaning: "guru les",
        example: "She has a math tutor."
    },
    {
        word: "mentor",
        meaning: "mentor",
        example: "He is my career mentor."
    },
    {
        word: "counselor",
        meaning: "konselor",
        example: "She met with the school counselor."
    },
    {
        word: "principal",
        meaning: "kepala sekolah",
        example: "The principal announced the news."
    },
    {
        word: "classmate",
        meaning: "teman sekelas",
        example: "He is my classmate."
    },
    {
        word: "alumnus",
        meaning: "alumni",
        example: "She is an alumna of the university."
    },
    {
        word: "scholarship fund",
        meaning: "dana beasiswa",
        example: "The scholarship fund helps students."
    },
    {
        word: "report card",
        meaning: "rapor",
        example: "She received her report card."
    },
    {
        word: "attendance",
        meaning: "kehadiran",
        example: "Attendance is checked daily."
    },
    {
        word: "suspension",
        meaning: "skorsing",
        example: "He got a suspension for fighting."
    },
    {
        word: "stepfather",
        meaning: "ayah tiri",
        example: "Her stepfather is kind."
    },
    {
        word: "stepmother",
        meaning: "ibu tiri",
        example: "His stepmother cooks well."
    },
    {
        word: "stepbrother",
        meaning: "saudara tiri laki-laki",
        example: "He has a stepbrother."
    },
    {
        word: "stepsister",
        meaning: "saudara tiri perempuan",
        example: "She has a stepsister."
    },
    {
        word: "half brother",
        meaning: "saudara tiri seayah/seibu",
        example: "He is my half brother."
    },
    {
        word: "half sister",
        meaning: "saudara tiri perempuan seayah/seibu",
        example: "She is my half sister."
    },
    {
        word: "in-law",
        meaning: "ipar",
        example: "My mother-in-law is visiting."
    },
    {
        word: "father-in-law",
        meaning: "mertua laki-laki",
        example: "He respects his father-in-law."
    },
    {
        word: "mother-in-law",
        meaning: "mertua perempuan",
        example: "She loves her mother-in-law."
    },
    {
        word: "son-in-law",
        meaning: "menantu laki-laki",
        example: "He is a good son-in-law."
    },
    {
        word: "daughter-in-law",
        meaning: "menantu perempuan",
        example: "She is a kind daughter-in-law."
    },
    {
        word: "brother-in-law",
        meaning: "ipar laki-laki",
        example: "My brother-in-law works nearby."
    },
    {
        word: "sister-in-law",
        meaning: "ipar perempuan",
        example: "My sister-in-law is friendly."
    },
    {
        word: "great-grandfather",
        meaning: "kakek buyut",
        example: "My great-grandfather was a farmer."
    },
    {
        word: "great-grandmother",
        meaning: "nenek buyut",
        example: "My great-grandmother lived long."
    },
    {
        word: "only child",
        meaning: "anak tunggal",
        example: "She is an only child."
    },
    {
        word: "firstborn",
        meaning: "anak sulung",
        example: "He is the firstborn son."
    },
    {
        word: "youngest child",
        meaning: "anak bungsu",
        example: "She is the youngest child."
    },
    {
        word: "only son",
        meaning: "anak laki-laki satu-satunya",
        example: "He is her only son."
    },
    {
        word: "adopted child",
        meaning: "anak angkat",
        example: "They raised an adopted child."
    },
    {
        word: "foster parent",
        meaning: "orang tua asuh",
        example: "They are foster parents."
    },
    {
        word: "guardian",
        meaning: "wali",
        example: "She is his legal guardian."
    },
    {
        word: "widow",
        meaning: "janda",
        example: "She became a widow last year."
    },
    {
        word: "widower",
        meaning: "duda",
        example: "He is a widower."
    },
    {
        word: "bachelor",
        meaning: "bujangan",
        example: "He is still a bachelor."
    },
    {
        word: "burst into tears",
        meaning: "tiba-tiba menangis",
        example: "She burst into tears."
    },
    {
        word: "burst out laughing",
        meaning: "tertawa terbahak-bahak",
        example: "He burst out laughing."
    },
    {
        word: "hold back tears",
        meaning: "menahan air mata",
        example: "She held back her tears."
    },
    {
        word: "lose temper",
        meaning: "kehilangan kesabaran",
        example: "He lost his temper."
    },
    {
        word: "keep calm",
        meaning: "tetap tenang",
        example: "Keep calm and think clearly."
    },
    {
        word: "cheer up",
        meaning: "menghibur diri",
        example: "Cheer up, things will get better."
    },
    {
        word: "calm down",
        meaning: "menenangkan diri",
        example: "Calm down and relax."
    },
    {
        word: "freak out",
        meaning: "panik",
        example: "Don't freak out over small things."
    },
    {
        word: "chill out",
        meaning: "bersantai",
        example: "Just chill out and relax."
    },
    {
        word: "lighten up",
        meaning: "jangan terlalu serius",
        example: "Lighten up, it's just a joke."
    },
    {
        word: "perk up",
        meaning: "menjadi bersemangat",
        example: "She perked up after the good news."
    },
    {
        word: "souvenir shop",
        meaning: "toko suvenir",
        example: "We bought gifts at the souvenir shop."
    },
    {
        word: "gift shop",
        meaning: "toko hadiah",
        example: "She works at a gift shop."
    },
    {
        word: "antique",
        meaning: "barang antik",
        example: "He collects antiques."
    },
    {
        word: "relic",
        meaning: "peninggalan bersejarah",
        example: "The museum has ancient relics."
    },
    {
        word: "treasure",
        meaning: "harta karun",
        example: "They found buried treasure."
    },
    {
        word: "fortune",
        meaning: "kekayaan",
        example: "He inherited a fortune."
    },
    {
        word: "wealth",
        meaning: "kekayaan",
        example: "She built her wealth over time."
    },
    {
        word: "poverty line",
        meaning: "garis kemiskinan",
        example: "Many families live below the poverty line."
    },
    {
        word: "charity",
        meaning: "amal",
        example: "They donated to charity."
    },
    {
        word: "donation",
        meaning: "donasi",
        example: "She made a generous donation."
    },
    {
        word: "volunteer",
        meaning: "relawan",
        example: "He volunteers at the shelter."
    },
    {
        word: "nonprofit",
        meaning: "organisasi nirlaba",
        example: "She works for a nonprofit."
    },
    {
        word: "boredom",
        meaning: "kebosanan",
        example: "She sighed with boredom."
    },
    {
        word: "excitement",
        meaning: "kegembiraan",
        example: "The kids screamed with excitement."
    },
    {
        word: "anticipation",
        meaning: "antisipasi/penantian",
        example: "We waited with anticipation."
    },
    {
        word: "nostalgia",
        meaning: "nostalgia",
        example: "He felt nostalgia for his hometown."
    },
    {
        word: "longing",
        meaning: "rindu/kerinduan",
        example: "She felt a longing for home."
    },
    {
        word: "yearning",
        meaning: "kerinduan mendalam",
        example: "He had a yearning to travel."
    },
    {
        word: "craving",
        meaning: "keinginan kuat",
        example: "She had a craving for chocolate."
    },
    {
        word: "temptation",
        meaning: "godaan",
        example: "He resisted the temptation."
    },
    {
        word: "urge",
        meaning: "dorongan/keinginan kuat",
        example: "She had an urge to shout."
    },
    {
        word: "impulse",
        meaning: "dorongan hati",
        example: "He acted on impulse."
    },
    {
        word: "instinct",
        meaning: "insting/naluri",
        example: "She trusted her instinct."
    },
    {
        word: "intuition",
        meaning: "intuisi",
        example: "His intuition was correct."
    },
    {
        word: "gut feeling",
        meaning: "firasat",
        example: "I had a gut feeling about it."
    },
    {
        word: "hunch",
        meaning: "dugaan/firasat",
        example: "She had a hunch he was lying."
    },
    {
        word: "premonition",
        meaning: "firasat buruk",
        example: "She had a premonition of danger."
    },
    {
        word: "coincidence",
        meaning: "kebetulan",
        example: "It was just a coincidence."
    },
    {
        word: "fate",
        meaning: "takdir",
        example: "They believed it was fate."
    },
    {
        word: "destiny",
        meaning: "takdir/nasib",
        example: "She believed in her destiny."
    },
    {
        word: "luck",
        meaning: "keberuntungan",
        example: "Good luck on your exam."
    },
    {
        word: "misfortune",
        meaning: "kemalangan",
        example: "He faced a series of misfortunes."
    },
    {
        word: "blessing",
        meaning: "berkah",
        example: "Her health is a blessing."
    },
    {
        word: "curse",
        meaning: "kutukan",
        example: "They believed the house was cursed."
    },
    {
        word: "omen",
        meaning: "pertanda",
        example: "The black cat was seen as a bad omen."
    },
    {
        word: "superstition",
        meaning: "takhayul",
        example: "This is just a superstition."
    },
    {
        word: "ritual",
        meaning: "ritual",
        example: "This is an important family ritual."
    },
    {
        word: "custom",
        meaning: "adat kebiasaan",
        example: "This is a wedding custom."
    },
    {
        word: "etiquette",
        meaning: "tata krama",
        example: "Follow proper dining etiquette."
    },
    {
        word: "manners",
        meaning: "sopan santun",
        example: "He has good manners."
    },
    {
        word: "courtesy",
        meaning: "kesopanan",
        example: "Show courtesy to others."
    },
    {
        word: "respect",
        meaning: "hormat",
        example: "Show respect to your elders."
    },
    {
        word: "dignity",
        meaning: "martabat",
        example: "She handled it with dignity."
    },
    {
        word: "integrity",
        meaning: "integritas",
        example: "He is a man of integrity."
    },
    {
        word: "honesty",
        meaning: "kejujuran",
        example: "Honesty is important."
    },
    {
        word: "loyalty",
        meaning: "kesetiaan",
        example: "Loyalty is valued highly."
    },
    {
        word: "humility",
        meaning: "kerendahan hati",
        example: "She showed great humility."
    },
    {
        word: "gratitude",
        meaning: "rasa syukur",
        example: "She expressed her gratitude."
    },
    {
        word: "forgiveness",
        meaning: "pengampunan",
        example: "He asked for forgiveness."
    },
    {
        word: "compassion",
        meaning: "belas kasihan",
        example: "She showed compassion to others."
    },
    {
        word: "kindness",
        meaning: "kebaikan hati",
        example: "Thank you for your kindness."
    },
    {
        word: "generosity",
        meaning: "kedermawanan",
        example: "His generosity is well known."
    },
    {
        word: "patience",
        meaning: "kesabaran",
        example: "She has great patience."
    },
    {
        word: "wisdom",
        meaning: "kebijaksanaan",
        example: "With age comes wisdom."
    },
    {
        word: "courage",
        meaning: "keberanian",
        example: "It takes courage to speak up."
    },
    {
        word: "resilience",
        meaning: "ketahanan/keuletan",
        example: "She showed great resilience."
    },
    {
        word: "perseverance",
        meaning: "ketekunan",
        example: "His perseverance paid off."
    },
    {
        word: "determination",
        meaning: "tekad",
        example: "Her determination inspired others."
    },
    {
        word: "discipline",
        meaning: "disiplin",
        example: "Discipline is key to success."
    },
    {
        word: "commitment",
        meaning: "komitmen",
        example: "He showed strong commitment."
    },
    {
        word: "dedication",
        meaning: "dedikasi",
        example: "Her dedication is admirable."
    },
    {
        word: "responsibility",
        meaning: "tanggung jawab",
        example: "Take responsibility for your actions."
    },
    {
        word: "accountability",
        meaning: "akuntabilitas",
        example: "We value accountability."
    },
    {
        word: "initiative",
        meaning: "inisiatif",
        example: "She took the initiative."
    },
    {
        word: "teamwork spirit",
        meaning: "semangat kerja sama",
        example: "Their teamwork spirit is strong."
    },
    {
        word: "work ethic",
        meaning: "etos kerja",
        example: "She has a strong work ethic."
    },
    {
        word: "time management",
        meaning: "manajemen waktu",
        example: "Good time management helps productivity."
    },
    {
        word: "multitasking",
        meaning: "multitasking",
        example: "She is good at multitasking."
    },
    {
        word: "brainstorm",
        meaning: "curah pendapat",
        example: "Let's brainstorm some ideas."
    },
    {
        word: "innovation",
        meaning: "inovasi",
        example: "The company values innovation."
    },
    {
        word: "creativity",
        meaning: "kreativitas",
        example: "She has great creativity."
    },
    {
        word: "imagination",
        meaning: "imajinasi",
        example: "Children have vivid imaginations."
    },
    {
        word: "inspiration",
        meaning: "inspirasi",
        example: "Nature is her inspiration."
    },
    {
        word: "motivation",
        meaning: "motivasi",
        example: "She lacks motivation today."
    },
    {
        word: "productivity",
        meaning: "produktivitas",
        example: "Improve your productivity."
    },
    {
        word: "efficiency",
        meaning: "efisiensi",
        example: "We aim for high efficiency."
    },
    {
        word: "consistency",
        meaning: "konsistensi",
        example: "Consistency is key to success."
    },
    {
        word: "flexibility",
        meaning: "fleksibilitas",
        example: "The job offers flexibility."
    },
    {
        word: "adaptability",
        meaning: "kemampuan beradaptasi",
        example: "Adaptability is important today."
    },
    {
        word: "collaboration",
        meaning: "kolaborasi",
        example: "The project needs collaboration."
    },
    {
        word: "communication skills",
        meaning: "keterampilan komunikasi",
        example: "She has strong communication skills."
    },
    {
        word: "leadership skills",
        meaning: "keterampilan kepemimpinan",
        example: "He developed leadership skills."
    },
    {
        word: "problem-solving",
        meaning: "pemecahan masalah",
        example: "Problem-solving is a valuable skill."
    },
    {
        word: "critical thinking",
        meaning: "berpikir kritis",
        example: "Critical thinking helps decision making."
    },
    {
        word: "decision-making",
        meaning: "pengambilan keputusan",
        example: "Good decision-making takes practice."
    },
    {
        word: "negotiation skills",
        meaning: "keterampilan negosiasi",
        example: "She has strong negotiation skills."
    },
    {
        word: "public speaking",
        meaning: "berbicara di depan umum",
        example: "He improved his public speaking."
    },
    {
        word: "networking",
        meaning: "membangun jaringan",
        example: "Networking helps career growth."
    },
    {
        word: "self-confidence",
        meaning: "rasa percaya diri",
        example: "Build your self-confidence."
    },
    {
        word: "self-esteem",
        meaning: "harga diri",
        example: "She has healthy self-esteem."
    },
    {
        word: "self-discipline",
        meaning: "disiplin diri",
        example: "Self-discipline leads to success."
    },
    {
        word: "self-improvement",
        meaning: "pengembangan diri",
        example: "He focuses on self-improvement."
    },
    {
        word: "personal growth",
        meaning: "pertumbuhan pribadi",
        example: "Travel contributes to personal growth."
    },
    {
        word: "work-life balance",
        meaning: "keseimbangan kerja dan hidup",
        example: "She values work-life balance."
    },
    {
        word: "burnout",
        meaning: "kelelahan kerja",
        example: "He experienced burnout at work."
    },
    {
        word: "stress management",
        meaning: "manajemen stres",
        example: "Stress management is important."
    },
    {
        word: "mental health",
        meaning: "kesehatan mental",
        example: "Mental health matters."
    },
    {
        word: "well-being",
        meaning: "kesejahteraan",
        example: "We care about employee well-being."
    },
    {
        word: "mindfulness",
        meaning: "kesadaran penuh",
        example: "She practices mindfulness daily."
    },

      {
        word: "living room",
        meaning: "ruang tamu",
        example: "We watch TV in the living room."
    },
    {
        word: "dining room",
        meaning: "ruang makan",
        example: "We eat in the dining room."
    },
    {
        word: "bedroom",
        meaning: "kamar tidur",
        example: "She cleaned her bedroom."
    },
    {
        word: "study room",
        meaning: "ruang belajar",
        example: "He works in his study room."
    },
    {
        word: "guest room",
        meaning: "kamar tamu",
        example: "We prepared the guest room."
    },
    {
        word: "laundry room",
        meaning: "ruang cuci",
        example: "She does laundry in the laundry room."
    },
    {
        word: "storage room",
        meaning: "ruang penyimpanan",
        example: "Keep boxes in the storage room."
    },
    {
        word: "sofa",
        meaning: "sofa",
        example: "They sat on the sofa."
    },
    {
        word: "couch",
        meaning: "dipan/sofa",
        example: "He napped on the couch."
    },
    {
        word: "armchair",
        meaning: "kursi berlengan",
        example: "She relaxed in the armchair."
    },
    {
        word: "recliner",
        meaning: "kursi rebah",
        example: "He fell asleep in the recliner."
    },
    {
        word: "coffee table",
        meaning: "meja tamu",
        example: "Put the tray on the coffee table."
    },
    {
        word: "dining table",
        meaning: "meja makan",
        example: "We ate at the dining table."
    },
    {
        word: "bookshelf",
        meaning: "rak buku",
        example: "Books are on the bookshelf."
    },
    {
        word: "nightlight",
        meaning: "lampu tidur",
        example: "The nightlight glows softly."
    },
    {
        word: "chandelier",
        meaning: "lampu gantung",
        example: "The chandelier lit up the room."
    },
    {
        word: "ceiling fan",
        meaning: "kipas langit-langit",
        example: "Turn on the ceiling fan."
    },
    {
        word: "rug",
        meaning: "permadani kecil",
        example: "The rug is in the living room."
    },
    {
        word: "footstool",
        meaning: "bangku kaki",
        example: "Rest your feet on the footstool."
    },
    {
        word: "ottoman",
        meaning: "ottoman/bangku empuk",
        example: "She sat on the ottoman."
    },
    {
        word: "cabinet",
        meaning: "lemari kabinet",
        example: "Store dishes in the cabinet."
    },
    {
        word: "chest of drawers",
        meaning: "lemari laci",
        example: "Clothes are in the chest of drawers."
    },
    {
        word: "vanity",
        meaning: "meja rias",
        example: "She sat at the vanity."
    },
    {
        word: "headboard",
        meaning: "kepala tempat tidur",
        example: "The bed has a wooden headboard."
    },
    {
        word: "iguana",
        meaning: "iguana",
        example: "The iguana basked in the sun."
    },
    {
        word: "chameleon",
        meaning: "bunglon",
        example: "The chameleon changed color."
    },
    {
        word: "gecko",
        meaning: "tokek",
        example: "A gecko crawled on the wall."
    },
    {
        word: "komodo dragon",
        meaning: "komodo",
        example: "The komodo dragon is native to Indonesia."
    },
    {
        word: "python",
        meaning: "ular piton",
        example: "The python is a large snake."
    },
    {
        word: "cobra",
        meaning: "ular kobra",
        example: "The cobra can be deadly."
    },
    {
        word: "viper",
        meaning: "ular berbisa",
        example: "Avoid the viper's bite."
    },
    {
        word: "tortoise",
        meaning: "kura-kura darat",
        example: "The tortoise moves slowly."
    },
    {
        word: "salamander",
        meaning: "salamander",
        example: "The salamander lives near water."
    },
    {
        word: "toad",
        meaning: "kodok",
        example: "The toad hopped into the garden."
    },
    {
        word: "newt",
        meaning: "kadal air",
        example: "The newt lives in ponds."
    },
    {
        word: "alligator",
        meaning: "aligator",
        example: "The alligator lurks in the swamp."
    },
    {
        word: "monitor lizard",
        meaning: "biawak",
        example: "The monitor lizard is large."
    },
    {
        word: "skink",
        meaning: "kadal skink",
        example: "A skink darted across the path."
    },
    {
        word: "always",
        meaning: "selalu",
        example: "She always arrives early."
    },
    {
        word: "usually",
        meaning: "biasanya",
        example: "I usually wake up at six."
    },
    {
        word: "frequently",
        meaning: "sering",
        example: "He frequently visits his parents."
    },
    {
        word: "regularly",
        meaning: "secara teratur",
        example: "She exercises regularly."
    },
    {
        word: "occasionally",
        meaning: "kadang-kadang",
        example: "We occasionally eat out."
    },
    {
        word: "rarely",
        meaning: "jarang",
        example: "He rarely gets angry."
    },
    {
        word: "seldom",
        meaning: "jarang sekali",
        example: "She seldom complains."
    },
    {
        word: "hardly ever",
        meaning: "hampir tidak pernah",
        example: "He hardly ever misses class."
    },
    {
        word: "never",
        meaning: "tidak pernah",
        example: "I never lie."
    },
    {
        word: "constantly",
        meaning: "terus-menerus",
        example: "He constantly checks his phone."
    },
    {
        word: "periodically",
        meaning: "secara berkala",
        example: "We periodically review the plan."
    },
    {
        word: "sporadically",
        meaning: "sesekali tak teratur",
        example: "It rains sporadically here."
    },
    {
        word: "continuously",
        meaning: "secara terus-menerus",
        example: "The machine runs continuously."
    },
    {
        word: "repeatedly",
        meaning: "berulang kali",
        example: "He repeatedly asked the same question."
    },
    {
        word: "piece of cake",
        meaning: "sangat mudah",
        example: "This test was a piece of cake."
    },
    {
        word: "break the ice",
        meaning: "mencairkan suasana",
        example: "He told a joke to break the ice."
    },
    {
        word: "hit the road",
        meaning: "berangkat pergi",
        example: "Let's hit the road early."
    },
    {
        word: "under the weather",
        meaning: "kurang sehat",
        example: "She feels under the weather today."
    },
    {
        word: "cost an arm and a leg",
        meaning: "sangat mahal",
        example: "That car costs an arm and a leg."
    },
    {
        word: "once in a blue moon",
        meaning: "sangat jarang",
        example: "We meet once in a blue moon."
    },
    {
        word: "the ball is in your court",
        meaning: "keputusan ada di tanganmu",
        example: "The ball is in your court now."
    },
    {
        word: "spill the beans",
        meaning: "membocorkan rahasia",
        example: "She spilled the beans about the surprise."
    },
    {
        word: "hit the nail on the head",
        meaning: "tepat sasaran",
        example: "You hit the nail on the head."
    },
    {
        word: "when pigs fly",
        meaning: "tidak akan pernah terjadi",
        example: "He'll apologize when pigs fly."
    },
    {
        word: "kill two birds with one stone",
        meaning: "sekali dayung dua pulau terlampaui",
        example: "This plan kills two birds with one stone."
    },
    {
        word: "the last straw",
        meaning: "batas kesabaran",
        example: "That comment was the last straw."
    },
    {
        word: "a blessing in disguise",
        meaning: "hikmah di balik musibah",
        example: "Losing that job was a blessing in disguise."
    },
    {
        word: "actions speak louder than words",
        meaning: "perbuatan lebih penting dari perkataan",
        example: "Actions speak louder than words."
    },
    {
        word: "better late than never",
        meaning: "lebih baik terlambat daripada tidak sama sekali",
        example: "Better late than never, he said."
    },

        {
        word: "hi",
        meaning: "hai",
        example: "Hi! How are you?"
    },
    {
        word: "hey",
        meaning: "hei",
        example: "Hey, what's up?"
    },
    {
        word: "howdy",
        meaning: "halo (informal)",
        example: "Howdy, partner!"
    },
    {
        word: "greetings",
        meaning: "salam",
        example: "Greetings to you all."
    },
    {
        word: "good afternoon",
        meaning: "selamat siang",
        example: "Good afternoon, everyone."
    },
    {
        word: "good evening",
        meaning: "selamat malam (sapaan)",
        example: "Good evening, ladies and gentlemen."
    },
    {
        word: "good day",
        meaning: "selamat siang/hari",
        example: "Good day to you."
    },
    {
        word: "what's up",
        meaning: "apa kabar (informal)",
        example: "Hey, what's up?"
    },
    {
        word: "how's it going",
        meaning: "bagaimana kabarnya",
        example: "Hi, how's it going?"
    },
    {
        word: "long time no see",
        meaning: "lama tidak jumpa",
        example: "Long time no see, my friend!"
    },
    {
        word: "goodbye",
        meaning: "selamat tinggal",
        example: "Goodbye, take care."
    },
    {
        word: "bye",
        meaning: "dah/sampai jumpa",
        example: "Bye, see you tomorrow."
    },
    {
        word: "farewell",
        meaning: "selamat berpisah",
        example: "We said our farewell."
    },
    {
        word: "see you soon",
        meaning: "sampai jumpa lagi",
        example: "See you soon!"
    },
    {
        word: "see you around",
        meaning: "sampai ketemu lagi",
        example: "See you around, buddy."
    },
    {
        word: "catch you later",
        meaning: "sampai nanti",
        example: "Catch you later!"
    },
    {
        word: "take it easy",
        meaning: "santai saja",
        example: "Take it easy, don't worry."
    },
    {
        word: "all the best",
        meaning: "semoga sukses selalu",
        example: "All the best for your future."
    },
    {
        word: "welcome back",
        meaning: "selamat datang kembali",
        example: "Welcome back home!"
    },
    {
        word: "pleased to meet you",
        meaning: "senang berkenalan denganmu",
        example: "Pleased to meet you, sir."
    },
    {
        word: "how have you been",
        meaning: "bagaimana kabarmu selama ini",
        example: "Hey, how have you been?"
    },
    {
        word: "nothing much",
        meaning: "tidak ada apa-apa (jawaban santai)",
        example: "Nothing much, just relaxing."
    },
    {
        word: "not bad",
        meaning: "lumayan/tidak buruk",
        example: "How are you? Not bad, thanks."
    },
    {
        word: "so far so good",
        meaning: "sejauh ini baik-baik saja",
        example: "So far so good with the project."
    },

      {
        word: "table for two",
        meaning: "meja untuk dua orang",
        example: "We'd like a table for two."
    },
    {
        word: "may I take your order",
        meaning: "boleh saya catat pesanan Anda",
        example: "May I take your order, sir?"
    },
    {
        word: "what do you recommend",
        meaning: "apa yang kamu rekomendasikan",
        example: "What do you recommend on the menu?"
    },
    {
        word: "i'd like to order",
        meaning: "saya ingin memesan",
        example: "I'd like to order the pasta."
    },
    {
        word: "is this seat taken",
        meaning: "apakah kursi ini sudah ada yang pakai",
        example: "Excuse me, is this seat taken?"
    },
    {
        word: "check please",
        meaning: "tolong bonnya",
        example: "Check please, we're done."
    },
    {
        word: "keep the change",
        meaning: "kembaliannya buat kamu",
        example: "Keep the change, thank you."
    },
    {
        word: "this is delicious",
        meaning: "ini enak sekali",
        example: "Wow, this is delicious!"
    },
    {
        word: "i'm full",
        meaning: "saya sudah kenyang",
        example: "No more, thanks. I'm full."
    },
    {
        word: "to go",
        meaning: "dibungkus/dibawa pulang",
        example: "Can I get this to go?"
    },
    {
        word: "for here or to go",
        meaning: "makan di sini atau dibawa pulang",
        example: "For here or to go?"
    },
    {
        word: "no ice please",
        meaning: "tanpa es ya",
        example: "No ice please, thank you."
    },
    {
        word: "extra spicy",
        meaning: "ekstra pedas",
        example: "I want it extra spicy."
    },
    {
        word: "without sugar",
        meaning: "tanpa gula",
        example: "Coffee without sugar, please."
    },
    {
        word: "is it spicy",
        meaning: "apakah ini pedas",
        example: "Excuse me, is this dish spicy?"
    },
    {
        word: "can i see the menu",
        meaning: "boleh lihat menunya",
        example: "Can I see the menu, please?"
    },
    {
        word: "we're ready to order",
        meaning: "kami siap memesan",
        example: "Excuse me, we're ready to order."
    },
    {
        word: "bark",
        meaning: "gonggongan anjing",
        example: "The dog gave a loud bark."
    },
    {
        word: "meow",
        meaning: "suara kucing",
        example: "The cat said meow."
    },
    {
        word: "moo",
        meaning: "suara sapi",
        example: "The cow went moo."
    },
    {
        word: "oink",
        meaning: "suara babi",
        example: "The pig made an oink sound."
    },
    {
        word: "baa",
        meaning: "suara domba/kambing",
        example: "The sheep went baa."
    },
    {
        word: "neigh",
        meaning: "suara kuda",
        example: "The horse gave a neigh."
    },
    {
        word: "quack",
        meaning: "suara bebek",
        example: "The duck said quack."
    },
    {
        word: "chirp",
        meaning: "suara burung kecil",
        example: "The bird gave a soft chirp."
    },
    {
        word: "tweet",
        meaning: "kicauan burung",
        example: "The bird went tweet tweet."
    },
    {
        word: "roar",
        meaning: "auman",
        example: "The lion let out a roar."
    },
    {
        word: "growl",
        meaning: "geraman",
        example: "The dog began to growl."
    },
    {
        word: "hiss",
        meaning: "desisan",
        example: "The snake gave a hiss."
    },
    {
        word: "buzz",
        meaning: "dengungan",
        example: "The bee made a buzz."
    },
    {
        word: "croak",
        meaning: "suara katak",
        example: "The frog gave a croak."
    },
    {
        word: "howl",
        meaning: "lolongan",
        example: "The wolf let out a howl."
    },
    {
        word: "squeak",
        meaning: "suara cicit",
        example: "The mouse gave a squeak."
    },
    {
        word: "bang",
        meaning: "suara dentuman",
        example: "We heard a loud bang."
    },
    {
        word: "clatter",
        meaning: "suara berdenting",
        example: "The dishes made a clatter."
    },
    {
        word: "crash",
        meaning: "suara benturan keras",
        example: "There was a loud crash."
    },
    {
        word: "thud",
        meaning: "suara benturan tumpul",
        example: "The book fell with a thud."
    },
    {
        word: "splash",
        meaning: "suara cipratan air",
        example: "The ball hit the water with a splash."
    },
    {
        word: "click",
        meaning: "suara klik",
        example: "The door made a click."
    },
    {
        word: "beep",
        meaning: "suara bip",
        example: "The microwave gave a beep."
    },
    {
        word: "ring",
        meaning: "suara dering",
        example: "The phone began to ring."
    },
    {
        word: "honk",
        meaning: "suara klakson",
        example: "The car gave a honk."
    },
    {
        word: "rustle",
        meaning: "suara gemerisik",
        example: "We heard a rustle in the bushes."
    },
    {
        word: "greet",
        meaning: "menyapa",
        example: "She greeted her neighbor."
    },
    {
        word: "introduce",
        meaning: "memperkenalkan",
        example: "Let me introduce my friend."
    },
    {
        word: "chat",
        meaning: "mengobrol",
        example: "We chatted for hours."
    },
    {
        word: "gossip",
        meaning: "bergosip",
        example: "They love to gossip."
    },
    {
        word: "joke",
        meaning: "bercanda",
        example: "He loves to joke around."
    },
    {
        word: "tease",
        meaning: "menggoda",
        example: "Don't tease your sister."
    },
    {
        word: "compliment",
        meaning: "memuji",
        example: "She complimented his cooking."
    },
    {
        word: "insult",
        meaning: "menghina",
        example: "He insulted her openly."
    },
    {
        word: "flatter",
        meaning: "menyanjung",
        example: "He flattered his boss."
    },
    {
        word: "gossip magazine",
        meaning: "majalah gosip",
        example: "She reads a gossip magazine."
    },
    {
        word: "nickname",
        meaning: "nama panggilan",
        example: "His nickname is Ray."
    },
    {
        word: "acquaintance",
        meaning: "kenalan",
        example: "He is just an acquaintance."
    },
    {
        word: "stranger",
        meaning: "orang asing",
        example: "Don't talk to strangers."
    },
    {
        word: "neighbor",
        meaning: "tetangga",
        example: "My neighbor is kind."
    },
    {
        word: "roommate",
        meaning: "teman sekamar",
        example: "She shares a room with her roommate."
    },
    {
        word: "housemate",
        meaning: "teman serumah",
        example: "We are housemates."
    },
    {
        word: "classmate",
        meaning: "teman sekelas",
        example: "He is my classmate."
    },
    {
        word: "penpal",
        meaning: "sahabat pena",
        example: "She has a penpal from Japan."
    },

  {
        word: "I",
        meaning: "Saya",
        example: "I from Japan."
    },

  {
        word: "I'm",
        meaning: "Aku",
        example: "I'm in here."
    },

    { word: "abandon", meaning: "meninggalkan", example: "He abandoned the old house." },
    { word: "abdomen", meaning: "perut/abdomen", example: "The doctor examined his abdomen." },
    { word: "abbreviate", meaning: "menyingkat", example: "Abbreviate the long title." },
    { word: "abide", meaning: "mematuhi", example: "You must abide by the rules." },
    { word: "abnormal", meaning: "tidak normal", example: "The test showed an abnormal result." },
    { word: "abolition", meaning: "penghapusan", example: "They fought for the abolition of slavery." },
    { word: "abrasive", meaning: "kasar/menggores", example: "The abrasive surface scratched the table." },
    { word: "abridge", meaning: "meringkas", example: "The editor abridged the novel." },
    { word: "abscess", meaning: "abses", example: "The abscess needed treatment." },
    { word: "absentee", meaning: "orang yang absen", example: "There were many absentees today." },
    { word: "accelerator pedal", meaning: "pedal gas", example: "Press the accelerator pedal gently." },
    { word: "accessory", meaning: "aksesori", example: "She bought a new accessory for her phone." },
    { word: "acclaim", meaning: "pujian", example: "The film received critical acclaim." },
    { word: "accomplice", meaning: "kaki tangan", example: "He was arrested as an accomplice." },
    { word: "accord", meaning: "kesepakatan", example: "They reached an accord." },
    { word: "acorn", meaning: "biji pohon ek", example: "The squirrel collected acorns." },
    { word: "acquaint", meaning: "mengenalkan", example: "Let me acquaint you with the process." },
    { word: "acrobat", meaning: "akrobat", example: "The acrobat performed amazing tricks." },
    { word: "adage", meaning: "pepatah", example: "There's an old adage about patience." },
    { word: "adhere", meaning: "melekat/mematuhi", example: "Please adhere to the schedule." },
    { word: "adjacent", meaning: "berdekatan", example: "The park is adjacent to the school." },
    { word: "adjourn", meaning: "menunda sidang", example: "The meeting was adjourned." },
    { word: "adjoining", meaning: "bersebelahan", example: "They stayed in adjoining rooms." },
    { word: "adorn", meaning: "menghias", example: "Flowers adorned the hall." },
    { word: "adrift", meaning: "terapung tanpa arah", example: "The boat was adrift at sea." },
    { word: "adverse", meaning: "merugikan", example: "The drug had adverse effects." },
    { word: "aerial", meaning: "udara/antena", example: "The aerial view was stunning." },
    { word: "aesthetic", meaning: "estetika", example: "She has a good aesthetic sense." },
    { word: "affix", meaning: "melekatkan", example: "Affix the stamp to the envelope." },
    { word: "aftermath", meaning: "akibat/buntut", example: "The aftermath of the storm was severe." },
    { word: "agile", meaning: "gesit", example: "The cat is very agile." },
    { word: "agony", meaning: "penderitaan hebat", example: "He was in agony after the fall." },
    { word: "aisle", meaning: "lorong (toko/gereja)", example: "Walk down the aisle to the exit." },
    { word: "ajar", meaning: "sedikit terbuka", example: "The door was left ajar." },
    { word: "akin", meaning: "serupa", example: "Her situation is akin to mine." },
    { word: "alcove", meaning: "ceruk dinding", example: "There is a small alcove in the wall." },
    { word: "alienate", meaning: "mengasingkan", example: "He alienated his old friends." },
    { word: "align", meaning: "menyelaraskan", example: "Align the pictures on the wall." },
    { word: "allergic", meaning: "alergi", example: "She is allergic to peanuts." },
    { word: "alley cat", meaning: "kucing liar", example: "An alley cat wandered nearby." },
    { word: "allot", meaning: "membagikan jatah", example: "They allotted funds for the project." },
    { word: "aloof", meaning: "acuh/menjauh", example: "He remained aloof from the group." },
    { word: "altar", meaning: "altar", example: "The priest stood at the altar." },
    { word: "amass", meaning: "mengumpulkan banyak", example: "He amassed a fortune." },
    { word: "amber", meaning: "kuning kecoklatan/damar", example: "The traffic light turned amber." },
    { word: "ambush", meaning: "penyergapan", example: "The soldiers set an ambush." },
    { word: "amiable", meaning: "ramah", example: "She has an amiable personality." },
    { word: "amicable", meaning: "bersahabat", example: "They reached an amicable agreement." },
    { word: "amid", meaning: "di tengah", example: "She remained calm amid chaos." },
    { word: "amnesty", meaning: "amnesti", example: "The government granted amnesty." },
    { word: "amputate", meaning: "mengamputasi", example: "The surgeon had to amputate the leg." },
    { word: "anecdote", meaning: "anekdot", example: "He told a funny anecdote." },
    { word: "anguish", meaning: "kesedihan mendalam", example: "She felt anguish over the loss." },
    { word: "animate", meaning: "menghidupkan/menganimasikan", example: "The artist animated the character." },
    { word: "annex", meaning: "mencaplok/bangunan tambahan", example: "The country annexed new land." },
    { word: "anonymous", meaning: "anonim", example: "The donor remained anonymous." },
    { word: "antibiotic", meaning: "antibiotik", example: "The doctor prescribed an antibiotic." },
    { word: "antidote", meaning: "penawar racun", example: "They found an antidote for the poison." },
    { word: "antique shop", meaning: "toko barang antik", example: "We browsed the antique shop." },
    { word: "apex", meaning: "puncak tertinggi", example: "They reached the apex of the mountain." },
    { word: "aptitude", meaning: "bakat", example: "She has an aptitude for music." },
    { word: "arbitrary", meaning: "sewenang-wenang", example: "The decision seemed arbitrary." },
    { word: "arch", meaning: "lengkungan", example: "They walked under the stone arch." },
    { word: "archive", meaning: "arsip", example: "The documents are kept in the archive." },
    { word: "arid", meaning: "gersang", example: "The arid desert has little rain." },
    { word: "armor", meaning: "baju zirah", example: "The knight wore heavy armor." },
    { word: "aroma", meaning: "aroma", example: "The aroma of coffee filled the room." },
    { word: "arsenal", meaning: "gudang senjata", example: "The army stored weapons in the arsenal." },
    { word: "articulate", meaning: "berbicara dengan jelas", example: "She is very articulate." },
    { word: "ascend", meaning: "mendaki", example: "They ascended the steep hill." },
    { word: "ashamed", meaning: "malu", example: "He felt ashamed of his mistake." },
    { word: "ashore", meaning: "ke daratan", example: "The boat came ashore." },
    { word: "aspire", meaning: "bercita-cita", example: "She aspires to be a doctor." },
    { word: "assail", meaning: "menyerang", example: "Doubts assailed his mind." },
    { word: "assort", meaning: "menggolongkan", example: "The shop sells an assorted range of goods." },
    { word: "asylum", meaning: "suaka", example: "He sought political asylum." },
    { word: "atop", meaning: "di puncak", example: "The flag stood atop the tower." },
    { word: "attic room", meaning: "kamar loteng", example: "She sleeps in the attic room." },
    { word: "attire", meaning: "pakaian resmi", example: "Formal attire is required." },
    { word: "auction", meaning: "lelang", example: "The painting was sold at auction." },
    { word: "auditor", meaning: "auditor", example: "The auditor checked the accounts." },
    { word: "auspicious", meaning: "membawa keberuntungan", example: "It was an auspicious start." },
    { word: "avert", meaning: "mencegah/menghindarkan", example: "They averted a disaster." },
    { word: "aviator", meaning: "penerbang", example: "The aviator flew across the ocean." },
    { word: "awe", meaning: "kekaguman", example: "The view filled her with awe." },
    { word: "awning", meaning: "kanopi/tenda toko", example: "The shop has a striped awning." },
    { word: "backdrop", meaning: "latar belakang", example: "The mountains served as a backdrop." },
    { word: "backlash", meaning: "reaksi keras", example: "The policy caused a public backlash." },
    { word: "backyard", meaning: "halaman belakang", example: "The kids played in the backyard." },
    { word: "badge of honor", meaning: "lambang kehormatan", example: "The scar was a badge of honor." },
    { word: "bail out", meaning: "menyelamatkan finansial", example: "The government bailed out the bank." },
    { word: "bait", meaning: "umpan", example: "He put bait on the hook." },
    { word: "baker's dozen", meaning: "tiga belas", example: "She bought a baker's dozen of donuts." },
    { word: "balcony seat", meaning: "kursi balkon", example: "We had balcony seats at the theater." },
    { word: "ballot", meaning: "surat suara", example: "She cast her ballot early." },
    { word: "bamboozle", meaning: "menipu", example: "He tried to bamboozle the buyer." },
    { word: "banish", meaning: "mengusir/membuang", example: "The king banished the traitor." },
    { word: "bankrupt", meaning: "bangkrut", example: "The company went bankrupt." },
    { word: "banter", meaning: "canda ringan", example: "They exchanged friendly banter." },
    { word: "barge", meaning: "tongkang", example: "The barge carried heavy cargo." },
    { word: "barren", meaning: "tandus/gersang", example: "The land is barren and dry." },
    { word: "barrister", meaning: "pengacara (Inggris)", example: "He is a barrister in London." },
    { word: "bask", meaning: "berjemur", example: "The lizard basked in the sun." },
    { word: "bastion", meaning: "benteng pertahanan", example: "The city was a bastion of freedom." },
    { word: "beacon", meaning: "suar/mercusuar", example: "The beacon guided the ship." },
    { word: "beckon", meaning: "memanggil dengan isyarat", example: "She beckoned him to come closer." },
    { word: "beforehand", meaning: "sebelumnya", example: "Prepare the food beforehand." },
    { word: "belligerent", meaning: "suka berperang", example: "He has a belligerent attitude." },
    { word: "bellow", meaning: "berteriak keras", example: "He bellowed in anger." },
    { word: "benevolent", meaning: "murah hati", example: "She is a benevolent leader." },
    { word: "bereave", meaning: "kehilangan (orang terkasih)", example: "The family was bereaved of their father." },
    { word: "beset", meaning: "diliputi masalah", example: "The project was beset with problems." },
    { word: "bewilder", meaning: "membingungkan", example: "The instructions bewildered her." },
    { word: "bicker", meaning: "bertengkar kecil", example: "The siblings bickered over toys." },
    { word: "bide", meaning: "menunggu waktu", example: "He decided to bide his time." },
    { word: "bigot", meaning: "orang yang fanatik", example: "He was labeled a bigot." },
    { word: "billow", meaning: "bergulung (asap/ombak)", example: "Smoke billowed from the chimney." },
    { word: "binge", meaning: "berlebihan (makan/nonton)", example: "They had a movie binge." },
    { word: "biopsy", meaning: "biopsi", example: "The doctor performed a biopsy." },
    { word: "blaze", meaning: "kobaran api", example: "Firefighters fought the blaze." },
    { word: "bleak", meaning: "suram", example: "The future looked bleak." },
    { word: "blemish", meaning: "noda/cacat", example: "There is a blemish on her skin." },
    { word: "blizzard warning", meaning: "peringatan badai salju", example: "A blizzard warning was issued." },
    { word: "bloated", meaning: "kembung", example: "He felt bloated after the meal." },
    { word: "blossom", meaning: "berbunga/mekar", example: "The cherry trees blossomed in spring." },
    { word: "blueprint plan", meaning: "rencana rinci", example: "They followed the blueprint plan." },
    { word: "bluff", meaning: "menggertak", example: "He was just bluffing." },
    { word: "blunder", meaning: "kesalahan besar", example: "It was a costly blunder." },
    { word: "boast", meaning: "membanggakan diri", example: "He boasted about his success." },
    { word: "bode", meaning: "menjadi pertanda", example: "The dark clouds bode a storm." },
    { word: "bog", meaning: "rawa gambut", example: "The truck got stuck in the bog." },
    { word: "boisterous", meaning: "riuh/ribut", example: "The kids were boisterous at the party." },
    { word: "bolster", meaning: "memperkuat/mendukung", example: "The news bolstered our confidence." },
    { word: "bombard", meaning: "membombardir", example: "They bombarded him with questions." },
    { word: "bonanza", meaning: "keberuntungan besar", example: "It was a bonanza for investors." },
    { word: "bondage", meaning: "perbudakan", example: "They escaped from bondage." },
    { word: "bountiful", meaning: "berlimpah", example: "They had a bountiful harvest." },
    { word: "brace", meaning: "menyiapkan diri", example: "Brace yourself for the news." },
    { word: "brag", meaning: "membual", example: "He loves to brag about his car." },
    { word: "braid", meaning: "kepang", example: "She wore her hair in a braid." },
    { word: "brawl", meaning: "perkelahian", example: "A brawl broke out at the bar." },
    { word: "brazen", meaning: "berani/tak tahu malu", example: "It was a brazen act of theft." },
    { word: "breach", meaning: "pelanggaran", example: "This is a breach of contract." },
    { word: "breadwinner", meaning: "pencari nafkah", example: "She is the breadwinner of the family." },
    { word: "brevity", meaning: "keringkasan", example: "The speech was praised for its brevity." },
    { word: "brim", meaning: "penuh sampai tepi", example: "The cup was filled to the brim." },
    { word: "brisk", meaning: "cepat dan segar", example: "We took a brisk walk." },
    { word: "brittle", meaning: "mudah patah", example: "The old paper is brittle." },
    { word: "brood", meaning: "merenung/sekumpulan anak", example: "She sat brooding over the problem." },
    { word: "browse", meaning: "menelusuri", example: "She browsed the internet." },
    { word: "bruise", meaning: "memar", example: "He got a bruise on his arm." },
    { word: "buckle down", meaning: "mulai bekerja keras", example: "It's time to buckle down and study." },
    { word: "buffer", meaning: "penyangga", example: "The wall acts as a noise buffer." },
    { word: "bulge", meaning: "menggembung", example: "His pocket bulged with coins." },
    { word: "bulletin", meaning: "buletin/pengumuman", example: "Check the news bulletin." },
    { word: "bully", meaning: "penindas", example: "He was bullied at school." },
    { word: "bumble", meaning: "bergerak canggung", example: "He bumbled through the speech." },
    { word: "bungle", meaning: "mengacaukan", example: "He bungled the assignment." },
    { word: "buoyant", meaning: "mengapung/ceria", example: "She felt buoyant after the good news." },
    { word: "burden", meaning: "beban", example: "Debt was a heavy burden." },
    { word: "bureaucrat", meaning: "birokrat", example: "The bureaucrat processed the paperwork." },
    { word: "burrow", meaning: "liang/menggali liang", example: "The rabbit dug a burrow." },
    { word: "bustle", meaning: "kesibukan", example: "The city has a lively bustle." },
    { word: "buzzword", meaning: "kata kunci populer", example: "Innovation is a common buzzword." },
    { word: "cackle", meaning: "tawa kikikan", example: "The witch let out a cackle." },
    { word: "calamity", meaning: "malapetaka", example: "The flood was a calamity." },
    { word: "callous", meaning: "tidak berperasaan", example: "His remark was callous." },
    { word: "camouflage", meaning: "kamuflase", example: "The animal used camouflage to hide." },
    { word: "candid", meaning: "jujur terus terang", example: "She gave a candid answer." },
    { word: "canopy", meaning: "kanopi hutan/tenda", example: "The rainforest canopy is dense." },
    { word: "captivate", meaning: "memikat", example: "Her story captivated the audience." },
    { word: "carcass", meaning: "bangkai", example: "Vultures circled the carcass." },
    { word: "carnage", meaning: "pembantaian", example: "The battle left scenes of carnage." },
    { word: "cascade", meaning: "air terjun kecil/berjatuhan", example: "Water cascaded down the rocks." },
    { word: "castaway", meaning: "korban terdampar", example: "The castaway survived on the island." },
    { word: "catapult", meaning: "ketapel/melontarkan", example: "The success catapulted her to fame." },
    { word: "cater", meaning: "menyediakan makanan/melayani", example: "The company caters to young people." },
    { word: "cavity", meaning: "rongga/lubang gigi", example: "The dentist found a cavity." },
    { word: "cease", meaning: "berhenti", example: "The noise finally ceased." },
    { word: "celestial", meaning: "berkaitan dengan langit", example: "The stars are celestial bodies." },
    { word: "census", meaning: "sensus", example: "The government conducted a census." },
    { word: "chagrin", meaning: "kekesalan", example: "To his chagrin, he lost the game." },
    { word: "chant", meaning: "nyanyian berulang", example: "The crowd began to chant." },
    { word: "chaotic", meaning: "kacau balau", example: "The scene was chaotic." },
    { word: "chastise", meaning: "menghukum/memarahi", example: "The teacher chastised the student." },
    { word: "chatter", meaning: "obrolan ringan", example: "The children's chatter filled the room." },
    { word: "chisel away", meaning: "mengikis sedikit-sedikit", example: "He chiseled away at the stone." },
    { word: "chronicle", meaning: "catatan sejarah", example: "The book is a chronicle of the war." },
    { word: "chubby cheeks", meaning: "pipi gembil", example: "The baby has chubby cheeks." },
    { word: "circulate", meaning: "beredar", example: "Rumors began to circulate." },
    { word: "clad", meaning: "berbalut/mengenakan", example: "He was clad in armor." },
    { word: "clamor", meaning: "keributan/tuntutan keras", example: "There was a clamor for reform." },
    { word: "clandestine", meaning: "rahasia/sembunyi-sembunyi", example: "They held a clandestine meeting." },
    { word: "clasp", meaning: "genggaman/kancing", example: "She clasped his hand tightly." },
    { word: "cleanse", meaning: "membersihkan", example: "Cleanse the wound with water." },
    { word: "clench", meaning: "mengepalkan", example: "He clenched his fist." },
    { word: "clientele", meaning: "para pelanggan", example: "The restaurant has a loyal clientele." },
    { word: "clog", meaning: "menyumbat", example: "Hair clogged the drain." },
    { word: "clumsy", meaning: "canggung", example: "He is a bit clumsy." },
    { word: "clutch", meaning: "menggenggam erat", example: "She clutched her bag tightly." },
    { word: "clutter", meaning: "kekacauan barang", example: "Clear the clutter from your desk." },
    { word: "coax", meaning: "membujuk", example: "She coaxed the cat out of the tree." },
    { word: "coincide", meaning: "bertepatan", example: "The events coincide with each other." },
    { word: "commemorate", meaning: "memperingati", example: "The statue commemorates the war heroes." },
    { word: "commence", meaning: "memulai", example: "The ceremony will commence at noon." },
    { word: "commotion", meaning: "kegaduhan", example: "There was a commotion outside." },
    { word: "compassionate leave", meaning: "cuti khusus", example: "He took compassionate leave." },
    { word: "compel", meaning: "memaksa", example: "The law compels people to wear helmets." },
    { word: "compile", meaning: "menyusun/mengumpulkan", example: "She compiled a list of names." },
    { word: "complacent", meaning: "puas diri berlebihan", example: "Don't become complacent with success." },
    { word: "complexion", meaning: "warna kulit wajah", example: "She has a fair complexion." },
    { word: "compliance", meaning: "kepatuhan", example: "The company ensures compliance with laws." },
    { word: "concise", meaning: "ringkas", example: "Keep your answer concise." },
    { word: "concoct", meaning: "membuat ramuan/mengarang", example: "He concocted a wild story." },
    { word: "concur", meaning: "sependapat", example: "I concur with your opinion." },
    { word: "condone", meaning: "membenarkan (perbuatan salah)", example: "We cannot condone violence." },
    { word: "confide", meaning: "mempercayakan rahasia", example: "She confided in her best friend." },
    { word: "confiscate", meaning: "menyita", example: "The teacher confiscated the phone." },
    { word: "conform", meaning: "menyesuaikan diri", example: "He refused to conform to the rules." },
    { word: "congested", meaning: "padat/macet", example: "The roads are congested." },
    { word: "congregate", meaning: "berkumpul", example: "People congregated in the square." },
    { word: "conscript", meaning: "wajib militer", example: "Young men were conscripted into the army." },
    { word: "console", meaning: "menghibur", example: "She tried to console her friend." },
    { word: "conspire", meaning: "bersekongkol", example: "They conspired to rob the bank." },
    { word: "constrain", meaning: "membatasi", example: "Budget constraints limit our plans." },
    { word: "contagion", meaning: "penularan", example: "They tried to stop the contagion." },
    { word: "contemplate", meaning: "merenungkan", example: "She contemplated her next move." },
    { word: "contentious", meaning: "kontroversial", example: "It was a contentious topic." },
    { word: "contort", meaning: "memutar tubuh", example: "The gymnast contorted her body." },
    { word: "contraband", meaning: "barang selundupan", example: "Police seized the contraband." },
    { word: "contradict", meaning: "membantah", example: "He contradicted himself." },
    { word: "convene", meaning: "mengadakan pertemuan", example: "The council convened for a meeting." },
    { word: "converge", meaning: "bertemu di satu titik", example: "The roads converge here." },
    { word: "convert", meaning: "mengubah/berpindah keyakinan", example: "She converted to a new diet." },
    { word: "conveyor", meaning: "ban berjalan", example: "Items move along the conveyor belt." },
    { word: "convict", meaning: "narapidana/menghukum", example: "The convict was released early." },
    { word: "convivial", meaning: "ramah dan meriah", example: "It was a convivial gathering." },
    { word: "cordial", meaning: "ramah tamah", example: "They had a cordial conversation." },
    { word: "cordon", meaning: "garis pembatas polisi", example: "Police set up a cordon." },
    { word: "corrode", meaning: "berkarat", example: "The metal began to corrode." },
    { word: "counsel", meaning: "menasihati/nasihat hukum", example: "She sought legal counsel." },
    { word: "countenance", meaning: "raut wajah", example: "His countenance showed worry." },
    { word: "counterfeit", meaning: "palsu", example: "They sold counterfeit watches." },
    { word: "courier", meaning: "kurir", example: "The courier delivered the package." },
    { word: "covert", meaning: "rahasia", example: "It was a covert operation." },
    { word: "coy", meaning: "malu-malu", example: "She gave a coy smile." },
    { word: "crave", meaning: "sangat menginginkan", example: "He craved attention." },
    { word: "credential", meaning: "kredensial/kualifikasi", example: "Check her academic credentials." },
    { word: "creed", meaning: "keyakinan/kepercayaan", example: "People of every creed live here." },
    { word: "crevice", meaning: "celah sempit", example: "A plant grew in the crevice." },
    { word: "cripple", meaning: "melumpuhkan", example: "The strike crippled the economy." },
    { word: "crooked", meaning: "bengkok/curang", example: "The picture frame is crooked." },
    { word: "crumble", meaning: "hancur berkeping", example: "The cookie crumbled in his hand." },
    { word: "crusade", meaning: "kampanye/perjuangan", example: "She led a crusade for justice." },
    { word: "cubicle wall", meaning: "dinding bilik kerja", example: "He hung a photo on the cubicle wall." },
    { word: "culminate", meaning: "memuncak/berakhir", example: "The event culminated in a big party." },
    { word: "culprit", meaning: "pelaku", example: "The police found the culprit." },
    { word: "cumbersome", meaning: "berat dan sulit dibawa", example: "The bag was cumbersome to carry." },
    { word: "curb impulse", meaning: "mengendalikan dorongan", example: "Try to curb your impulse to shop." },
    { word: "curse word", meaning: "kata umpatan", example: "He apologized for using a curse word." },
    { word: "custodian", meaning: "penjaga/pengurus", example: "He works as a school custodian." },
    { word: "cynicism", meaning: "sikap sinis", example: "His cynicism grew over the years." },
    { word: "dabble", meaning: "coba-coba", example: "She dabbles in painting." },
    { word: "daring", meaning: "berani", example: "It was a daring rescue." },
    { word: "dawdle", meaning: "berlambat-lambat", example: "Stop dawdling and get ready." },
    { word: "daze", meaning: "linglung", example: "He was in a daze after the accident." },
    { word: "dazzle", meaning: "memesona/menyilaukan", example: "The lights dazzled the crowd." },
    { word: "deceive", meaning: "menipu", example: "He deceived his business partner." },
    { word: "decipher", meaning: "memecahkan sandi", example: "She deciphered the code." },
    { word: "decompose", meaning: "membusuk", example: "The leaves decompose over time." },
    { word: "decree", meaning: "dekret/keputusan", example: "The king issued a decree." },
    { word: "deface", meaning: "merusak permukaan", example: "Someone defaced the statue." },
    { word: "defiant", meaning: "menantang/membangkang", example: "He gave a defiant look." },
    { word: "deficient", meaning: "kekurangan", example: "The diet is deficient in vitamins." },
    { word: "deform", meaning: "mengubah bentuk", example: "The heat deformed the plastic." },
    { word: "defy", meaning: "menentang", example: "She defied her parents' wishes." },
    { word: "dejected", meaning: "murung/patah semangat", example: "He looked dejected after losing." },
    { word: "delegate", meaning: "delegasi/mendelegasikan", example: "She delegated the task to her team." },
    { word: "deliberate", meaning: "disengaja/mempertimbangkan", example: "It was a deliberate choice." },
    { word: "delude", meaning: "menipu diri sendiri", example: "Don't delude yourself." },
    { word: "demeanor", meaning: "sikap/perilaku", example: "She has a calm demeanor." },
    { word: "demolish", meaning: "menghancurkan bangunan", example: "They demolished the old building." },
    { word: "demote", meaning: "menurunkan jabatan", example: "He was demoted after the incident." },
    { word: "denounce", meaning: "mengecam", example: "Leaders denounced the attack." },
    { word: "dent", meaning: "penyok", example: "The door has a small dent." },
    { word: "depict", meaning: "menggambarkan", example: "The painting depicts a village scene." },
    { word: "deplete", meaning: "menghabiskan/mengurangi", example: "Resources were depleted quickly." },
    { word: "deploy", meaning: "menempatkan/mengerahkan", example: "Troops were deployed overnight." },
    { word: "deport", meaning: "mendeportasi", example: "He was deported from the country." },
    { word: "depreciate", meaning: "menyusut nilainya", example: "Cars depreciate over time." },
    { word: "deranged", meaning: "gila/kacau", example: "The character seemed deranged." },
    { word: "descend from", meaning: "keturunan dari", example: "She descends from a royal family." },
    { word: "desecrate", meaning: "menajiskan tempat suci", example: "They desecrated the shrine." },
    { word: "deserted", meaning: "terbengkalai/sepi", example: "The street was deserted at night." },
    { word: "designate", meaning: "menunjuk/menetapkan", example: "He was designated as the leader." },
    { word: "despise", meaning: "membenci", example: "She despises dishonesty." },
    { word: "despondent", meaning: "putus asa", example: "He felt despondent after the loss." },
    { word: "destined", meaning: "ditakdirkan", example: "They were destined to meet." },
    { word: "deteriorate", meaning: "memburuk", example: "His health began to deteriorate." },
    { word: "detour route", meaning: "rute alternatif", example: "We took the detour route home." },
    { word: "devastating", meaning: "sangat merusak", example: "The earthquake was devastating." },
    { word: "deviate", meaning: "menyimpang", example: "Don't deviate from the plan." },
    { word: "devour", meaning: "melahap", example: "He devoured the entire meal." },
    { word: "dexterity", meaning: "keterampilan tangan", example: "The surgeon has great dexterity." },
    { word: "diffuse", meaning: "menyebar/meredakan", example: "She tried to diffuse the tension." },
    { word: "digress", meaning: "menyimpang dari topik", example: "Let's not digress from the main point." },
    { word: "dilute", meaning: "mengencerkan", example: "Dilute the juice with water." },
    { word: "diminutive", meaning: "sangat kecil", example: "She has a diminutive frame." },
    { word: "din", meaning: "kebisingan", example: "The din of the crowd was loud." },
    { word: "diplomatic immunity", meaning: "kekebalan diplomatik", example: "He claimed diplomatic immunity." },
    { word: "disband", meaning: "membubarkan", example: "The band disbanded last year." },
    { word: "discard", meaning: "membuang", example: "Discard the broken parts." },
    { word: "discreet", meaning: "hati-hati/rahasia", example: "Please be discreet about this." },
    { word: "discrepancy", meaning: "ketidaksesuaian", example: "There is a discrepancy in the report." },
    { word: "disdain", meaning: "meremehkan", example: "She looked at him with disdain." },
    { word: "disgruntled", meaning: "kesal/tidak puas", example: "The disgruntled customer complained." },
    { word: "disheveled", meaning: "berantakan", example: "His hair looked disheveled." },
    { word: "disintegrate", meaning: "hancur berkeping-keping", example: "The old paper disintegrated." },
    { word: "dismantle", meaning: "membongkar", example: "They dismantled the machine." },
    { word: "dispatch", meaning: "mengirimkan", example: "The package was dispatched today." },
    { word: "disperse", meaning: "membubarkan diri", example: "The crowd began to disperse." },
    { word: "displease", meaning: "membuat tidak senang", example: "His behavior displeased the teacher." },
    { word: "dispose of", meaning: "membuang/menyingkirkan", example: "Dispose of the waste properly." },
    { word: "dissent", meaning: "ketidaksetujuan", example: "There was dissent among the members." },
    { word: "distract", meaning: "mengalihkan perhatian", example: "The noise distracted him." },
    { word: "distraught", meaning: "sangat sedih/gelisah", example: "She was distraught after the news." },
    { word: "diverge", meaning: "bercabang/berbeda arah", example: "Their opinions began to diverge." },
    { word: "divert", meaning: "mengalihkan", example: "The flight was diverted to another airport." },
    { word: "divulge", meaning: "membocorkan", example: "He refused to divulge the secret." },
    { word: "dizzy", meaning: "pusing", example: "She felt dizzy after standing up." },
    { word: "docile", meaning: "penurut/jinak", example: "The horse is very docile." },
    { word: "dodge", meaning: "menghindar", example: "He dodged the incoming ball." },
    { word: "domicile", meaning: "tempat tinggal resmi", example: "State your permanent domicile." },
    { word: "dormant", meaning: "tidak aktif sementara", example: "The volcano has been dormant for years." },
    { word: "drab", meaning: "kusam/suram", example: "The room looked drab and gray." },
    { word: "drastic", meaning: "drastis", example: "They took drastic measures." },
    { word: "dread", meaning: "sangat takut", example: "She dreads going to the dentist." },
    { word: "drench", meaning: "membasahi kuyup", example: "The rain drenched us completely." },
    { word: "drone on", meaning: "bicara membosankan", example: "He droned on about his trip." },
    { word: "drought-stricken", meaning: "dilanda kekeringan", example: "The drought-stricken area needs aid." },
    { word: "dubious", meaning: "meragukan", example: "I'm dubious about his claim." },
    { word: "dwindle", meaning: "berkurang perlahan", example: "The population began to dwindle." },
    { word: "earnestly", meaning: "dengan sungguh-sungguh", example: "He earnestly apologized." },
    { word: "eavesdrop", meaning: "menguping", example: "She was caught eavesdropping." },
    { word: "eccentric", meaning: "nyentrik", example: "He has an eccentric style." },
    { word: "eclectic", meaning: "beragam gaya", example: "Her taste in music is eclectic." },
    { word: "edible", meaning: "bisa dimakan", example: "These mushrooms are edible." },
    { word: "eerie", meaning: "menyeramkan", example: "The old house felt eerie at night." },
    { word: "elicit", meaning: "memancing respons", example: "The question elicited a strong reaction." },
    { word: "elope", meaning: "kawin lari", example: "They decided to elope." },
    { word: "eloquent", meaning: "pandai berbicara", example: "She gave an eloquent speech." },
    { word: "emancipate", meaning: "membebaskan", example: "The law emancipated the slaves." },
    { word: "embark", meaning: "memulai perjalanan/usaha", example: "They embarked on a new journey." },
    { word: "embellish", meaning: "menghias/melebih-lebihkan", example: "He embellished the story a bit." },
    { word: "embezzle", meaning: "menggelapkan uang", example: "He was accused of embezzling funds." },
    { word: "eminent", meaning: "terkemuka", example: "She is an eminent scientist." },
    { word: "encroach", meaning: "melanggar batas", example: "The building encroaches on public land." },
    { word: "endeavor", meaning: "usaha keras", example: "It was a noble endeavor." },
    { word: "endorse", meaning: "mendukung/merekomendasikan", example: "The athlete endorsed the product." },
    { word: "engulf", meaning: "menenggelamkan/melahap", example: "Flames engulfed the building." },
    { word: "enigma", meaning: "misteri", example: "His past remains an enigma." },
    { word: "enlist", meaning: "mendaftar (militer)", example: "He enlisted in the army." },
    { word: "enrage", meaning: "membuat sangat marah", example: "The insult enraged him." },
    { word: "ensue", meaning: "terjadi berikutnya", example: "Chaos ensued after the announcement." },
    { word: "entail", meaning: "melibatkan/mengharuskan", example: "The job entails a lot of travel." },
    { word: "enthrall", meaning: "memikat", example: "The story enthralled the readers." },
    { word: "entice", meaning: "menggoda/memikat", example: "The offer enticed many customers." },
    { word: "envision", meaning: "membayangkan", example: "She envisions a bright future." },
    { word: "epidemic outbreak", meaning: "wabah menular", example: "They contained the epidemic outbreak." },
    { word: "epilogue", meaning: "penutup cerita", example: "The book has a moving epilogue." },
    { word: "epitome", meaning: "perwujudan/contoh sempurna", example: "She is the epitome of kindness." },
    { word: "equilibrium", meaning: "keseimbangan", example: "The market reached equilibrium." },
    { word: "eradicate", meaning: "memberantas", example: "They aim to eradicate the disease." },
    { word: "erratic", meaning: "tidak menentu", example: "His behavior was erratic." },
    { word: "erupt", meaning: "meletus", example: "The volcano erupted suddenly." },
    { word: "escalate", meaning: "meningkat/memuncak", example: "The conflict began to escalate." },
    { word: "espionage", meaning: "spionase", example: "He was charged with espionage." },
    { word: "eternal", meaning: "abadi", example: "They promised eternal love." },
    { word: "evacuate", meaning: "mengevakuasi", example: "Residents were evacuated safely." },
    { word: "evade", meaning: "menghindar", example: "He evaded the question." },
    { word: "exasperate", meaning: "membuat sangat kesal", example: "His excuses exasperated her." },
    { word: "excavate", meaning: "menggali", example: "Archaeologists excavated the site." },
    { word: "excel", meaning: "unggul", example: "She excels in mathematics." },
    { word: "exempt", meaning: "dikecualikan", example: "Students are exempt from the fee." },
    { word: "exile", meaning: "pengasingan", example: "He was sent into exile." },
    { word: "exodus", meaning: "eksodus/perpindahan massal", example: "There was a mass exodus from the city." },
    { word: "exonerate", meaning: "membebaskan dari tuduhan", example: "New evidence exonerated him." },
    { word: "expedite", meaning: "mempercepat", example: "Please expedite the process." },
    { word: "expel", meaning: "mengeluarkan/mengusir", example: "He was expelled from school." },
    { word: "exploit", meaning: "memanfaatkan/mengeksploitasi", example: "They exploited the workers." },
    { word: "expunge", meaning: "menghapus catatan", example: "The record was expunged." },
    { word: "extinguish", meaning: "memadamkan", example: "Firefighters extinguished the blaze." },
    { word: "extradite", meaning: "mengekstradisi", example: "He was extradited to face trial." },
    { word: "fabricate", meaning: "mengarang/memalsukan", example: "He fabricated the entire story." },
    { word: "facade", meaning: "tampak depan/kedok", example: "The building has a beautiful facade." },
    { word: "faction", meaning: "faksi/kelompok", example: "The party split into two factions." },
    { word: "falter", meaning: "goyah/tersendat", example: "Her voice faltered with emotion." },
    { word: "famished", meaning: "sangat lapar", example: "After the hike, we were famished." },
    { word: "fatigue", meaning: "kelelahan", example: "He suffered from severe fatigue." },
    { word: "feasible", meaning: "layak dilakukan", example: "The plan is not feasible." },
    { word: "feign", meaning: "berpura-pura", example: "She feigned illness to skip work." },
    { word: "ferocious", meaning: "buas/ganas", example: "The dog looked ferocious." },
    { word: "fervent", meaning: "penuh semangat", example: "He is a fervent supporter." },
    { word: "fickle", meaning: "berubah-ubah", example: "The weather is fickle this season." },
    { word: "fidget", meaning: "gelisah bergerak-gerak", example: "She fidgeted nervously." },
    { word: "figment", meaning: "khayalan", example: "It was just a figment of imagination." },
    { word: "flabbergasted", meaning: "sangat terkejut", example: "I was flabbergasted by the news." },
    { word: "flair", meaning: "bakat khusus", example: "She has a flair for design." },
    { word: "flee", meaning: "melarikan diri", example: "They fled the burning building." },
    { word: "flimsy excuse", meaning: "alasan lemah", example: "That's a flimsy excuse." },
    { word: "flourish", meaning: "berkembang pesat", example: "The business flourished quickly." },
    { word: "fluctuate", meaning: "naik turun", example: "Prices fluctuate daily." },
    { word: "forfeit", meaning: "kehilangan hak/kalah otomatis", example: "They forfeited the match." },
    { word: "forge", meaning: "memalsukan/menempa", example: "He forged the signature." },
    { word: "formidable", meaning: "tangguh/menakutkan", example: "She is a formidable opponent." },
    { word: "fortify", meaning: "memperkuat", example: "They fortified the city walls." },
    { word: "fraud", meaning: "penipuan", example: "He was convicted of fraud." },
    { word: "frenzy", meaning: "keadaan panik/histeris", example: "The crowd was in a frenzy." },
    { word: "frivolous", meaning: "sembrono/tidak penting", example: "It was a frivolous lawsuit." },
    { word: "fume", meaning: "sangat marah", example: "She fumed over the delay." },
    { word: "furtive", meaning: "sembunyi-sembunyi", example: "He gave a furtive glance." },
    { word: "gape", meaning: "menganga", example: "He gaped in astonishment." },
    { word: "garble", meaning: "mengacaukan pesan", example: "The message got garbled." },
    { word: "gaunt", meaning: "kurus dan pucat", example: "He looked gaunt after the illness." },
    { word: "germinate", meaning: "berkecambah", example: "The seeds began to germinate." },
    { word: "girth", meaning: "lingkar/ukuran keliling", example: "The tree has a huge girth." },
    { word: "glaring error", meaning: "kesalahan mencolok", example: "There is a glaring error in the report." },
    { word: "glisten", meaning: "berkilau", example: "The dew glistened on the grass." },
    { word: "gloat", meaning: "membangga-banggakan diri", example: "He gloated over his win." },
    { word: "gnaw", meaning: "menggerogoti", example: "The mouse gnawed the wire." },
    { word: "goad", meaning: "mendorong/memprovokasi", example: "He goaded his friend into the challenge." },
    { word: "gorge", meaning: "melahap/ngarai", example: "They gorged themselves on food." },
    { word: "graze", meaning: "merumput/melecet", example: "Cows graze in the field." },
    { word: "grief-stricken", meaning: "dilanda kesedihan", example: "She was grief-stricken by the loss." },
    { word: "grievance", meaning: "keluhan resmi", example: "The workers filed a grievance." },
    { word: "grim", meaning: "suram/menakutkan", example: "The news was grim." },
    { word: "grope", meaning: "meraba-raba", example: "He groped for the light switch." },
    { word: "grovel", meaning: "merendahkan diri", example: "He groveled for forgiveness." },
    { word: "gullet", meaning: "kerongkongan", example: "Food passes through the gullet." },
    { word: "gush", meaning: "mengalir deras", example: "Water gushed from the pipe." },
    { word: "hail", meaning: "menyambut/hujan es", example: "They hailed him as a hero." },
    { word: "hamper", meaning: "menghambat", example: "Bad weather hampered the rescue." },
    { word: "haphazard", meaning: "sembarangan", example: "The files were arranged haphazardly." },
    { word: "harass", meaning: "melecehkan/mengganggu", example: "She was harassed at work." },
    { word: "hardship", meaning: "kesulitan hidup", example: "They faced great hardship." },
    { word: "hasty", meaning: "tergesa-gesa", example: "Don't make a hasty decision." },
    { word: "haunt", meaning: "menghantui", example: "The memory still haunts her." },
    { word: "havoc", meaning: "kekacauan besar", example: "The storm wreaked havoc." },
    { word: "heed", meaning: "memperhatikan/menuruti", example: "Heed the warning signs." },
    { word: "heirloom", meaning: "pusaka keluarga", example: "The ring is a family heirloom." },
    { word: "heresy", meaning: "bidah/ajaran sesat", example: "He was accused of heresy." },
    { word: "hinder", meaning: "menghalangi", example: "The rain hindered our progress." },
    { word: "hoard", meaning: "menimbun", example: "They hoarded food during the crisis." },
    { word: "hoax", meaning: "berita bohong/tipuan", example: "The email was a hoax." },
    { word: "hostage", meaning: "sandera", example: "They took a hostage." },
    { word: "hover over", meaning: "melayang di atas", example: "The drone hovered over the field." },
    { word: "humiliate", meaning: "mempermalukan", example: "He was humiliated in public." },
    { word: "hurl", meaning: "melempar keras", example: "She hurled the rock." },
    { word: "hush money", meaning: "uang tutup mulut", example: "He paid hush money to the witness." },
    { word: "hypocrite", meaning: "orang munafik", example: "He called her a hypocrite." },
    { word: "idle", meaning: "menganggur/malas", example: "The machine sat idle for weeks." },
    { word: "ignite", meaning: "menyalakan/memicu", example: "The spark ignited the fire." },
    { word: "illicit", meaning: "terlarang", example: "They were involved in illicit trade." },
    { word: "immerse", meaning: "membenamkan diri", example: "She immersed herself in the book." },
    { word: "immobilize", meaning: "melumpuhkan gerakan", example: "The injury immobilized his leg." },
    { word: "impede", meaning: "menghambat", example: "Debris impeded the traffic." },
    { word: "impersonate", meaning: "menyamar sebagai orang lain", example: "He impersonated a police officer." },
    { word: "impetuous", meaning: "impulsif", example: "His impetuous decision cost him dearly." },
    { word: "implicate", meaning: "melibatkan dalam kejahatan", example: "He was implicated in the scandal." },
    { word: "impose", meaning: "memaksakan", example: "They imposed new taxes." },
    { word: "impoverished", meaning: "sangat miskin", example: "The impoverished village needed aid." },
    { word: "imprison", meaning: "memenjarakan", example: "He was imprisoned for fraud." },
    { word: "improvise", meaning: "berimprovisasi", example: "The actor improvised his lines." },
    { word: "inadvertent", meaning: "tidak disengaja", example: "It was an inadvertent mistake." },
    { word: "incapacitate", meaning: "melumpuhkan kemampuan", example: "The injury incapacitated him." },
    { word: "incarcerate", meaning: "memenjarakan", example: "He was incarcerated for years." },
    { word: "incite", meaning: "menghasut", example: "He incited the crowd to riot." },
    { word: "inclement", meaning: "buruk (cuaca)", example: "The flight was delayed due to inclement weather." },
    { word: "incoherent", meaning: "tidak koheren", example: "His speech was incoherent." },
    { word: "incompetent", meaning: "tidak kompeten", example: "The staff seemed incompetent." },
    { word: "incorporate", meaning: "menggabungkan", example: "Incorporate the feedback into the plan." },
    { word: "indebted", meaning: "berutang budi/terlilit hutang", example: "I am indebted to your kindness." },
    { word: "indignant", meaning: "marah karena tidak adil", example: "She was indignant at the accusation." },
    { word: "indulge", meaning: "memanjakan diri", example: "She indulged in a piece of cake." },
    { word: "infamous", meaning: "terkenal buruk", example: "He is infamous for his crimes." },
    { word: "infest", meaning: "diserang hama", example: "The house was infested with termites." },
    { word: "infiltrate", meaning: "menyusup", example: "Spies infiltrated the organization." },
    { word: "inflict", meaning: "menimbulkan (rasa sakit)", example: "The storm inflicted heavy damage." },
    { word: "infuriate", meaning: "membuat sangat marah", example: "His comment infuriated her." },
    { word: "ingenious", meaning: "cerdik", example: "It was an ingenious solution." },
    { word: "inhabit", meaning: "menghuni", example: "Many species inhabit the forest." },
    { word: "inhibit", meaning: "menghambat", example: "Fear inhibits creativity." },
    { word: "innate", meaning: "bawaan", example: "She has an innate talent for music." },
    { word: "insolent", meaning: "kurang ajar", example: "His insolent reply annoyed the teacher." },
    { word: "instigate", meaning: "menghasut/memulai", example: "He instigated the conflict." },
    { word: "insurgent", meaning: "pemberontak", example: "Insurgents attacked the base." },
    { word: "intercept", meaning: "mencegat", example: "The ball was intercepted." },
    { word: "interrogate", meaning: "menginterogasi", example: "Police interrogated the suspect." },
    { word: "intimidate", meaning: "mengintimidasi", example: "He tried to intimidate the witness." },
    { word: "intricate", meaning: "rumit", example: "The design is very intricate." },
    { word: "intrigue", meaning: "membuat penasaran/intrik", example: "The mystery intrigued her." },
    { word: "invade", meaning: "menyerbu", example: "Enemy troops invaded the country." },
    { word: "invaluable", meaning: "sangat berharga", example: "Her advice was invaluable." },
    { word: "invoke", meaning: "memohon/mengutip aturan", example: "He invoked his right to silence." },
    { word: "irate", meaning: "sangat marah", example: "The irate customer demanded a refund." },
    { word: "irk", meaning: "menjengkelkan", example: "His habits irk her." },
    { word: "jeopardize", meaning: "membahayakan", example: "This could jeopardize the deal." },
    { word: "jest", meaning: "candaan", example: "He said it in jest." },
    { word: "jittery", meaning: "gugup", example: "She felt jittery before the interview." },
    { word: "jubilant", meaning: "sangat gembira", example: "The fans were jubilant after the win." },
    { word: "jumble", meaning: "campur aduk", example: "The papers were in a jumble." },
    { word: "keen", meaning: "sangat berminat", example: "She is keen on learning French." },
    { word: "kindle", meaning: "menyalakan/memicu", example: "The book kindled his imagination." },
    { word: "lament", meaning: "meratapi", example: "She lamented the loss of her friend." },
    { word: "languish", meaning: "merana/terbengkalai", example: "The project languished for years." },
    { word: "lash out", meaning: "meledak marah", example: "He lashed out at his coworker." },
    { word: "latent", meaning: "tersembunyi/laten", example: "The disease was latent for years." },
    { word: "lax", meaning: "longgar/kurang ketat", example: "Security was lax at the venue." },
    { word: "lease agreement", meaning: "perjanjian sewa", example: "Sign the lease agreement." },
    { word: "legitimate", meaning: "sah", example: "It's a legitimate business." },
    { word: "lenient", meaning: "lunak/tidak tegas", example: "The judge was lenient." },
    { word: "lethal", meaning: "mematikan", example: "It was a lethal dose." },
    { word: "linger", meaning: "berlama-lama", example: "The smell lingered in the air." },
    { word: "lofty", meaning: "tinggi/mulia", example: "She has lofty ambitions." },
    { word: "loot", meaning: "menjarah", example: "Rioters looted the shops." },
    { word: "lucid", meaning: "jelas dan mudah dipahami", example: "He gave a lucid explanation." },
    { word: "lull", meaning: "meninabobokkan/masa tenang", example: "There was a lull in the fighting." },
    { word: "lurk", meaning: "mengintai", example: "Danger lurks in the shadows." },
    { word: "luscious", meaning: "lezat/menggoda", example: "The mango tasted luscious." },
    { word: "magnify", meaning: "memperbesar", example: "The lens magnifies the image." },
    { word: "malicious", meaning: "berniat jahat", example: "It was a malicious rumor." },
    { word: "malnutrition", meaning: "gizi buruk", example: "The children suffered from malnutrition." },
    { word: "mandate", meaning: "mandat/perintah", example: "The government issued a new mandate." },
    { word: "maneuver", meaning: "manuver", example: "The pilot performed a difficult maneuver." },
    { word: "mangle", meaning: "merusak parah", example: "The car was mangled in the crash." },
    { word: "manifest", meaning: "menampakkan diri", example: "Her stress manifested as headaches." },
    { word: "manipulate", meaning: "memanipulasi", example: "He manipulated the data." },
    { word: "meager", meaning: "sedikit sekali", example: "They lived on a meager income." },
    { word: "meander", meaning: "berkelok-kelok", example: "The river meanders through the valley." },
    { word: "meddle", meaning: "ikut campur", example: "Don't meddle in others' affairs." },
    { word: "menace", meaning: "ancaman", example: "The storm was a menace to the town." },
    { word: "mend", meaning: "memperbaiki", example: "She mended the torn shirt." },
    { word: "mesmerize", meaning: "memukau", example: "The dance mesmerized everyone." },
    { word: "meticulously", meaning: "dengan sangat teliti", example: "He worked meticulously on the model." },
    { word: "migrate", meaning: "bermigrasi", example: "Birds migrate south in winter." },
    { word: "mimic", meaning: "meniru", example: "The parrot mimics human speech." },
    { word: "minuscule", meaning: "sangat kecil", example: "The chance of winning is minuscule." },
    { word: "mishap", meaning: "kecelakaan kecil", example: "There was a minor mishap." },
    { word: "mock", meaning: "mengejek", example: "They mocked his accent." },
    { word: "molest", meaning: "melecehkan", example: "He was accused of molesting a child." },
    { word: "morbid", meaning: "suram/berkaitan kematian", example: "He has a morbid curiosity." },
    { word: "mourn", meaning: "berduka", example: "The family mourned his death." },
    { word: "muffle", meaning: "meredam suara", example: "She muffled her laughter." },
    { word: "multitude", meaning: "banyak sekali", example: "A multitude of people gathered." },
    { word: "murmur", meaning: "bergumam pelan", example: "He murmured an apology." },
    { word: "mutilate", meaning: "memotong-motong/merusak parah", example: "The statue was mutilated." },
    { word: "mutiny", meaning: "pemberontakan (kapal/militer)", example: "The sailors staged a mutiny." },
    { word: "myriad", meaning: "banyak sekali jenis", example: "There are myriad options available." },
    { word: "nag", meaning: "mengomel terus", example: "She keeps nagging him about chores." },
    { word: "negligent", meaning: "lalai", example: "The driver was negligent." },
    { word: "nimble", meaning: "gesit/lincah", example: "Her fingers are nimble on the piano." },
    { word: "nourish", meaning: "menyuburkan/memberi gizi", example: "This soup will nourish you." },
    { word: "nudge", meaning: "menyenggol pelan", example: "She nudged him awake." },
    { word: "nurture", meaning: "memelihara/membesarkan", example: "Parents nurture their children." },
    { word: "oblige", meaning: "mewajibkan/membantu", example: "The contract obliges him to pay." },
    { word: "obliterate", meaning: "menghancurkan total", example: "The bomb obliterated the building." },
    { word: "obscure", meaning: "tidak jelas/tersembunyi", example: "The meaning is obscure." },
    { word: "obsolete", meaning: "usang", example: "This technology is obsolete." },
    { word: "obstruct", meaning: "menghalangi", example: "The car obstructed the road." },
    { word: "onset", meaning: "awal mula", example: "The onset of the disease was sudden." },
    { word: "onslaught", meaning: "serangan bertubi-tubi", example: "They faced an onslaught of criticism." },
    { word: "opt", meaning: "memilih", example: "She opted to stay home." },
    { word: "orphan", meaning: "anak yatim piatu", example: "The orphan was adopted." },
    { word: "ostracize", meaning: "mengucilkan", example: "He was ostracized by the group." },
    { word: "outburst", meaning: "ledakan emosi", example: "He had an angry outburst." },
    { word: "outcast", meaning: "orang buangan", example: "She felt like an outcast." },
    { word: "outdo", meaning: "mengalahkan/melebihi", example: "He tried to outdo his rival." },
    { word: "outrage", meaning: "kemarahan besar", example: "The decision sparked outrage." },
    { word: "outweigh", meaning: "lebih berat/penting dari", example: "The benefits outweigh the risks." },
    { word: "overhaul", meaning: "perombakan total", example: "The system needs an overhaul." },
    { word: "overrule", meaning: "membatalkan keputusan", example: "The judge overruled the objection." },
    { word: "overturn", meaning: "membalikkan keputusan", example: "The court overturned the verdict." },
    { word: "overwhelm", meaning: "membanjiri/menguasai", example: "She was overwhelmed with joy." },
    { word: "pacify", meaning: "menenangkan", example: "He tried to pacify the crowd." },
    { word: "pang", meaning: "rasa nyeri tiba-tiba", example: "She felt a pang of guilt." },
    { word: "paralyze", meaning: "melumpuhkan", example: "Fear paralyzed him." },
    { word: "parch", meaning: "mengeringkan/kehausan", example: "The sun parched the land." },
    { word: "parole board", meaning: "dewan pembebasan bersyarat", example: "He appeared before the parole board." },
    { word: "patronize", meaning: "merendahkan/melanggani", example: "Don't patronize me." },
    { word: "peculiar", meaning: "aneh", example: "There was a peculiar smell." },
    { word: "penetrate", meaning: "menembus", example: "The bullet penetrated the wall." },
    { word: "perceive", meaning: "memahami/memandang", example: "She perceives the world differently." },
    { word: "perilous", meaning: "berbahaya", example: "It was a perilous journey." },
    { word: "perish", meaning: "binasa/mati", example: "Many soldiers perished in the war." },
    { word: "perpetual", meaning: "abadi/terus-menerus", example: "The machine runs in perpetual motion." },
    { word: "perplex", meaning: "membingungkan", example: "The riddle perplexed him." },
    { word: "persecute", meaning: "menganiaya", example: "They were persecuted for their beliefs." },
    { word: "pertinent", meaning: "relevan", example: "That's a pertinent question." },
    { word: "petition", meaning: "petisi", example: "They signed a petition." },
    { word: "petrify", meaning: "membuat sangat takut", example: "The horror movie petrified her." },
    { word: "philanthropy", meaning: "filantropi", example: "He is known for his philanthropy." },
    { word: "pillage", meaning: "menjarah", example: "The village was pillaged." },
    { word: "pinnacle", meaning: "puncak kesuksesan", example: "She reached the pinnacle of her career." },
    { word: "placate", meaning: "menenangkan/meredakan", example: "He tried to placate the angry customer." },
    { word: "plague", meaning: "wabah/menghantui", example: "Doubts plagued his mind." },
    { word: "plausible", meaning: "masuk akal", example: "That's a plausible explanation." },
    { word: "plea", meaning: "permohonan", example: "She made a desperate plea." },
    { word: "plight", meaning: "keadaan sulit", example: "The plight of refugees is serious." },
    { word: "plunder", meaning: "menjarah harta", example: "Pirates plundered the ship." },
    { word: "poised", meaning: "siap/tenang", example: "She remained poised under pressure." },
    { word: "ponder", meaning: "merenungkan", example: "He pondered the question carefully." },
    { word: "portray", meaning: "menggambarkan/memerankan", example: "The actor portrayed a villain." },
    { word: "precarious", meaning: "tidak stabil/berbahaya", example: "The ladder was in a precarious position." },
    { word: "precede", meaning: "mendahului", example: "A storm preceded the calm." },
    { word: "precipitate", meaning: "mempercepat terjadinya", example: "The scandal precipitated his resignation." },
    { word: "predator", meaning: "pemangsa", example: "Lions are natural predators." },
    { word: "preposterous", meaning: "sangat tidak masuk akal", example: "That idea is preposterous." },
    { word: "prevail", meaning: "menang/berlaku", example: "Justice will prevail." },
    { word: "pristine", meaning: "murni/bersih sempurna", example: "The lake water is pristine." },
    { word: "probe", meaning: "menyelidiki", example: "Police probed the incident." },
    { word: "prod", meaning: "mendorong pelan", example: "She prodded him to answer." },
    { word: "profound sorrow", meaning: "kesedihan mendalam", example: "She felt profound sorrow." },
    { word: "prolong", meaning: "memperpanjang", example: "They tried to prolong the meeting." },
    { word: "prompt", meaning: "mendorong/segera", example: "The news prompted a quick response." },
    { word: "propel", meaning: "mendorong maju", example: "The engine propels the boat." },
    { word: "provoke", meaning: "memancing/memprovokasi", example: "He provoked an argument." },
    { word: "prowl", meaning: "mengendap-endap", example: "The tiger prowled through the jungle." },
    { word: "prudent", meaning: "bijaksana/hati-hati", example: "It's prudent to save money." },
    { word: "quaint", meaning: "unik dan klasik", example: "The village has a quaint charm." },
    { word: "quarrel", meaning: "bertengkar", example: "They had a quarrel over money." },
    { word: "quench", meaning: "menghilangkan dahaga", example: "Water quenches thirst." },
    { word: "radiate", meaning: "memancarkan", example: "She radiates confidence." },
    { word: "rampage", meaning: "mengamuk", example: "The bull went on a rampage." },
    { word: "rampant", meaning: "merajalela", example: "Corruption is rampant there." },
    { word: "ransack", meaning: "menggeledah/mengacak", example: "The room was ransacked." },
    { word: "rant", meaning: "mengoceh marah", example: "He ranted about the delay." },
    { word: "ravage", meaning: "merusak parah", example: "The fire ravaged the forest." },
    { word: "reap", meaning: "menuai hasil", example: "You reap what you sow." },
    { word: "rebuke", meaning: "menegur keras", example: "She rebuked him for lying." },
    { word: "reckless", meaning: "sembrono", example: "He drove recklessly." },
    { word: "recur", meaning: "terjadi lagi", example: "The problem recurs every year." },
    { word: "redeem", meaning: "menebus/memulihkan", example: "He tried to redeem himself." },
    { word: "refute", meaning: "membantah", example: "She refuted the claim." },
    { word: "reign", meaning: "memerintah", example: "The king reigned for decades." },
    { word: "reinforce", meaning: "memperkuat", example: "They reinforced the bridge." },
    { word: "relentless", meaning: "tanpa henti", example: "The rain was relentless." },
    { word: "relish", meaning: "menikmati sekali", example: "She relished the victory." },
    { word: "remedy", meaning: "obat/solusi", example: "There's no easy remedy for this." },
    { word: "reminisce", meaning: "mengenang masa lalu", example: "They reminisced about school days." },
    { word: "renounce", meaning: "melepaskan hak/klaim", example: "He renounced his citizenship." },
    { word: "repel", meaning: "menolak/mengusir", example: "The spray repels mosquitoes." },
    { word: "repress", meaning: "menekan perasaan", example: "She repressed her anger." },
    { word: "reprimand", meaning: "menegur resmi", example: "He was reprimanded by his boss." },
    { word: "resent", meaning: "membenci karena kesal", example: "She resents being ignored." },
    { word: "resilient", meaning: "tahan banting", example: "Children are often resilient." },
    { word: "resign", meaning: "mengundurkan diri", example: "He resigned from his position." },
    { word: "restless", meaning: "gelisah", example: "She felt restless all night." },
    { word: "retaliate", meaning: "membalas", example: "They retaliated against the attack." },
    { word: "retreat", meaning: "mundur", example: "The soldiers retreated." },
    { word: "revoke", meaning: "mencabut (izin)", example: "His license was revoked." },
    { word: "ridicule", meaning: "mengejek", example: "He was ridiculed for his idea." },
    { word: "rift", meaning: "perpecahan", example: "There was a rift in the family." },
    { word: "rigid", meaning: "kaku", example: "The rules are very rigid." },
    { word: "riot", meaning: "kerusuhan", example: "A riot broke out downtown." },
    { word: "ripple effect", meaning: "efek berantai", example: "The decision had a ripple effect." },
    { word: "roam", meaning: "berkelana", example: "They roamed the countryside." },
    { word: "robust economy", meaning: "ekonomi yang kuat", example: "The country has a robust economy." },
    { word: "rogue", meaning: "penjahat/nakal", example: "A rogue wave hit the boat." },
    { word: "rot", meaning: "membusuk", example: "The fruit began to rot." },
    { word: "rowdy", meaning: "berisik dan liar", example: "The crowd was rowdy." },
    { word: "rubble", meaning: "puing-puing", example: "The building collapsed into rubble." },
    { word: "ruthless", meaning: "kejam tanpa ampun", example: "He is a ruthless businessman." },
    { word: "sabotage", meaning: "sabotase", example: "They suspected sabotage." },
    { word: "sanctuary", meaning: "tempat perlindungan", example: "The church offered sanctuary." },
    { word: "savor", meaning: "menikmati rasa", example: "She savored every bite." },
    { word: "scandalous", meaning: "memalukan/skandal", example: "It was a scandalous affair." },
    { word: "scapegoat", meaning: "kambing hitam", example: "He was made a scapegoat." },
    { word: "scorn", meaning: "penghinaan", example: "She looked at him with scorn." },
    { word: "scrutinize", meaning: "meneliti dengan cermat", example: "The report was scrutinized closely." },
    { word: "seclude", meaning: "mengasingkan diri", example: "She secluded herself for a week." },
    { word: "sedative", meaning: "obat penenang", example: "The doctor gave her a sedative." },
    { word: "seep", meaning: "meresap", example: "Water seeped through the crack." },
    { word: "seize", meaning: "merampas/menyita", example: "Police seized the drugs." },
    { word: "sentiment", meaning: "perasaan/sentimen", example: "Public sentiment shifted quickly." },
    { word: "sever", meaning: "memutuskan hubungan", example: "They severed diplomatic ties." },
    { word: "shatter", meaning: "hancur berkeping", example: "The glass shattered instantly." },
    { word: "shrewd", meaning: "cerdik/pintar bernegosiasi", example: "She is a shrewd negotiator." },
    { word: "shroud", meaning: "menyelubungi", example: "Mist shrouded the hills." },
    { word: "shun", meaning: "menjauhi", example: "He was shunned by his peers." },
    { word: "sinister", meaning: "jahat/menyeramkan", example: "There was a sinister feeling in the room." },
    { word: "skeptic", meaning: "orang yang ragu", example: "He remained a skeptic." },
    { word: "skirmish", meaning: "bentrokan kecil", example: "There was a border skirmish." },
    { word: "slander", meaning: "fitnah lisan", example: "He sued for slander." },
    { word: "sluggish", meaning: "lamban", example: "The economy is sluggish." },
    { word: "smother", meaning: "membekap/menutupi rapat", example: "She smothered the fire with a blanket." },
    { word: "snap decision", meaning: "keputusan mendadak", example: "He made a snap decision." },
    { word: "soar", meaning: "melambung tinggi", example: "Prices soared last month." },
    { word: "solace", meaning: "penghiburan", example: "Music gave her solace." },
    { word: "somber", meaning: "muram/serius", example: "The mood was somber." },
    { word: "soothe", meaning: "menenangkan", example: "The lullaby soothed the baby." },
    { word: "sparse", meaning: "jarang/sedikit", example: "The population here is sparse." },
    { word: "spawn", meaning: "menimbulkan/bertelur", example: "The rumor spawned panic." },
    { word: "spontaneously", meaning: "secara spontan", example: "They decided spontaneously to travel." },
    { word: "sprawl", meaning: "menyebar luas", example: "The city continues to sprawl." },
    { word: "spur", meaning: "mendorong/memacu", example: "Low prices spur demand." },
    { word: "squander", meaning: "menghambur-hamburkan", example: "He squandered his savings." },
    { word: "stagnant", meaning: "tidak berkembang/diam", example: "The water in the pond is stagnant." },
    { word: "staple food", meaning: "makanan pokok", example: "Rice is a staple food here." },
    { word: "startle", meaning: "mengejutkan", example: "The noise startled her." },
    { word: "steadfast", meaning: "teguh/tetap", example: "He remained steadfast in his beliefs." },
    { word: "stern", meaning: "tegas/keras", example: "The teacher gave a stern warning." },
    { word: "stifle", meaning: "menahan/membungkam", example: "She stifled a yawn." },
    { word: "stigma", meaning: "stigma/cap buruk", example: "There is a stigma around mental illness." },
    { word: "stipulate", meaning: "menetapkan syarat", example: "The contract stipulates payment terms." },
    { word: "stray", meaning: "tersesat/liar", example: "A stray dog wandered in." },
    { word: "strenuous", meaning: "melelahkan", example: "It was a strenuous workout." },
    { word: "strife", meaning: "konflik/perselisihan", example: "The country faced political strife." },
    { word: "stringent", meaning: "ketat", example: "The rules are very stringent." },
    { word: "subdue", meaning: "menaklukkan/meredakan", example: "Police subdued the suspect." },
    { word: "submerge", meaning: "menenggelamkan", example: "The submarine submerged quickly." },
    { word: "subside", meaning: "mereda", example: "The pain finally subsided." },
    { word: "subtle", meaning: "halus/tidak kentara", example: "There was a subtle change in tone." },
    { word: "succumb", meaning: "menyerah/tunduk", example: "He succumbed to the pressure." },
    { word: "suffocate", meaning: "tercekik/sesak napas", example: "The smoke almost suffocated them." },
    { word: "sullen", meaning: "murung/cemberut", example: "He gave a sullen look." },
    { word: "summon", meaning: "memanggil resmi", example: "He was summoned to court." },
    { word: "superfluous", meaning: "berlebihan/tidak perlu", example: "The extra details were superfluous." },
    { word: "surge", meaning: "lonjakan mendadak", example: "There was a surge in demand." },
    { word: "surpass", meaning: "melampaui", example: "Sales surpassed expectations." },
    { word: "swarm", meaning: "kawanan/berkerumun", example: "A swarm of bees flew by." },
    { word: "sway public", meaning: "memengaruhi opini publik", example: "The ad tried to sway public opinion." },
    { word: "sympathize", meaning: "bersimpati", example: "I sympathize with your situation." },
    { word: "taint", meaning: "mencemari", example: "The scandal tainted his reputation." },
    { word: "tally", meaning: "menghitung total", example: "Tally the votes carefully." },
    { word: "tangible", meaning: "nyata/dapat diraba", example: "We need tangible evidence." },
    { word: "tarnish", meaning: "mencoreng nama baik", example: "The scandal tarnished her image." },
    { word: "taunt", meaning: "mengejek dengan sengaja", example: "The kids taunted him." },
    { word: "tedious", meaning: "membosankan dan panjang", example: "The task was tedious." },
    { word: "tenacious", meaning: "gigih/keras kepala", example: "She is a tenacious fighter." },
    { word: "tentative", meaning: "sementara/belum pasti", example: "We made a tentative plan." },
    { word: "terse", meaning: "singkat dan tegas", example: "His reply was terse." },
    { word: "thrive", meaning: "berkembang pesat", example: "The business thrived last year." },
    { word: "thwart", meaning: "menggagalkan", example: "Police thwarted the robbery." },
    { word: "timid", meaning: "penakut/pemalu", example: "The timid boy hid behind his mother." },
    { word: "torment", meaning: "menyiksa batin", example: "Guilt tormented him for years." },
    { word: "toxic waste", meaning: "limbah beracun", example: "They dumped toxic waste illegally." },
    { word: "trample", meaning: "menginjak-injak", example: "The crowd trampled the flowers." },
    { word: "tranquil", meaning: "tenang damai", example: "The lake was tranquil." },
    { word: "transcend", meaning: "melampaui batas", example: "Art transcends language barriers." },
    { word: "transient", meaning: "sementara/singkat", example: "The joy was transient." },
    { word: "trespass", meaning: "melanggar batas properti", example: "No trespassing allowed." },
    { word: "trivial", meaning: "sepele", example: "It's a trivial matter." },
    { word: "turmoil", meaning: "kekacauan", example: "The country is in turmoil." },
    { word: "tyranny", meaning: "tirani/kesewenangan", example: "They fought against tyranny." },
    { word: "ubiquitous", meaning: "ada di mana-mana", example: "Smartphones are ubiquitous today." },
    { word: "undermine", meaning: "melemahkan diam-diam", example: "The rumor undermined his authority." },
    { word: "unravel", meaning: "terurai/terbongkar", example: "The plot began to unravel." },
    { word: "unruly", meaning: "sulit dikendalikan", example: "The unruly crowd pushed forward." },
    { word: "unveil", meaning: "mengungkap/membuka", example: "They unveiled the new product." },
    { word: "uphold", meaning: "menjunjung tinggi", example: "The court upheld the decision." },
    { word: "uprising", meaning: "pemberontakan", example: "The uprising was crushed quickly." },
    { word: "uproar", meaning: "kehebohan", example: "The news caused an uproar." },
    { word: "usher", meaning: "mengantar/membawa masuk", example: "She ushered the guests inside." },
    { word: "utmost", meaning: "sebesar-besarnya", example: "This is of utmost importance." },
    { word: "vacate", meaning: "mengosongkan", example: "Please vacate the room by noon." },
    { word: "vagrant", meaning: "gelandangan", example: "A vagrant slept on the bench." },
    { word: "valiant", meaning: "gagah berani", example: "He made a valiant effort." },
    { word: "vandalize", meaning: "merusak dengan sengaja", example: "They vandalized the park." },
    { word: "vanquish", meaning: "menaklukkan", example: "The hero vanquished the villain." },
    { word: "vent", meaning: "melampiaskan", example: "She vented her frustration." },
    { word: "verge", meaning: "ambang batas", example: "The company was on the verge of collapse." },
    { word: "verify identity", meaning: "memverifikasi identitas", example: "Please verify your identity." },
    { word: "vex", meaning: "menjengkelkan", example: "The delay vexed everyone." },
    { word: "vicinity", meaning: "sekitar/dekat", example: "There's a store in the vicinity." },
    { word: "vigilant", meaning: "waspada", example: "Stay vigilant at all times." },
    { word: "vile", meaning: "sangat jahat/menjijikkan", example: "It was a vile act." },
    { word: "vindicate", meaning: "membenarkan/membersihkan nama", example: "The evidence vindicated him." },
    { word: "violation", meaning: "pelanggaran", example: "This is a serious violation." },
    { word: "virtuous", meaning: "berbudi luhur", example: "She lived a virtuous life." },
    { word: "vivacious", meaning: "penuh semangat hidup", example: "She has a vivacious personality." },
    { word: "vow of silence", meaning: "sumpah bungkam", example: "The monk took a vow of silence." },
    { word: "wallow", meaning: "berkubang/larut dalam kesedihan", example: "He wallowed in self-pity." },
    { word: "wane", meaning: "meredup/berkurang", example: "The moon began to wane." },
    { word: "ward off", meaning: "menangkal", example: "Garlic is said to ward off evil." },
    { word: "wary", meaning: "waspada/curiga", example: "She was wary of strangers." },
    { word: "weary", meaning: "lelah", example: "He felt weary after the trip." },
    { word: "whim", meaning: "keinginan sesaat", example: "She bought it on a whim." },
    { word: "wield", meaning: "memegang kekuasaan/senjata", example: "He wields great influence." },
    { word: "wince", meaning: "meringis kesakitan", example: "She winced at the pain." },
    { word: "wither", meaning: "layu", example: "The flowers withered in the heat." },
    { word: "woe", meaning: "kesengsaraan", example: "He shared tales of woe." },
    { word: "wrath", meaning: "amarah besar", example: "He feared his father's wrath." },
    { word: "wreak", meaning: "menimbulkan (kerusakan)", example: "The storm wreaked havoc on the coast." },
    { word: "wrenching", meaning: "sangat menyedihkan", example: "It was a heart-wrenching story." },
    { word: "yield to pressure", meaning: "menyerah pada tekanan", example: "He refused to yield to pressure." },
    { word: "zealous", meaning: "sangat bersemangat", example: "She is a zealous advocate for change." },


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