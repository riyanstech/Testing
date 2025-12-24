// ==========================================
// DATA COLLECTIONS
// ==========================================

const hangeulData = [
    { hangeul: "ㄱ", rom: "g/k", type: "Konsonan Dasar", awal: "G", akhir: "K" },
    { hangeul: "ㄴ", rom: "n", type: "Konsonan Dasar", awal: "N", akhir: "N" },
    { hangeul: "ㄷ", rom: "d/t", type: "Konsonan Dasar", awal: "D", akhir: "T" },
    { hangeul: "ㄹ", rom: "r/l", type: "Konsonan Dasar", awal: "R/L", akhir: "L" },
    { hangeul: "ㅁ", rom: "m", type: "Konsonan Dasar", awal: "M", akhir: "M" },
    { hangeul: "ㅂ", rom: "b/p", type: "Konsonan Dasar", awal: "B", akhir: "P" },
    { hangeul: "ㅅ", rom: "s", type: "Konsonan Dasar", awal: "S", akhir: "T" },
    { hangeul: "ㅇ", rom: "-/ng", type: "Konsonan Dasar", awal: "-", akhir: "NG" },
    { hangeul: "ㅈ", rom: "j", type: "Konsonan Dasar", awal: "J", akhir: "T" },
    { hangeul: "ㅊ", rom: "ch", type: "Konsonan Dasar", awal: "CH", akhir: "T" },
    { hangeul: "ㅋ", rom: "kh", type: "Konsonan Dasar", awal: "KH", akhir: "K" },
    { hangeul: "ㅌ", rom: "th", type: "Konsonan Dasar", awal: "TH", akhir: "T" },
    { hangeul: "ㅍ", rom: "ph", type: "Konsonan Dasar", awal: "PH", akhir: "P" },
    { hangeul: "ㅎ", rom: "h", type: "Konsonan Dasar", awal: "H", akhir: "T" },
    { hangeul: "ㄲ", rom: "kk", type: "Konsonan Rangkap", awal: "KK", akhir: "K" },
    { hangeul: "ㄸ", rom: "tt", type: "Konsonan Rangkap", awal: "TT", akhir: "-" },
    { hangeul: "ㅃ", rom: "pp", type: "Konsonan Rangkap", awal: "PP", akhir: "-" },
    { hangeul: "ㅆ", rom: "ss", type: "Konsonan Rangkap", awal: "SS", akhir: "T" },
    { hangeul: "ㅉ", rom: "cc", type: "Konsonan Rangkap", awal: "CC", akhir: "-" },
    { hangeul: "ㅏ", rom: "a", type: "Vokal Dasar" },
    { hangeul: "ㅑ", rom: "ya", type: "Vokal Dasar" },
    { hangeul: "ㅓ", rom: "eo", type: "Vokal Dasar" },
    { hangeul: "ㅕ", rom: "yeo", type: "Vokal Dasar" },
    { hangeul: "ㅗ", rom: "o", type: "Vokal Dasar" },
    { hangeul: "ㅛ", rom: "yo", type: "Vokal Dasar" },
    { hangeul: "ㅜ", rom: "u", type: "Vokal Dasar" },
    { hangeul: "ㅠ", rom: "yu", type: "Vokal Dasar" },
    { hangeul: "ㅡ", rom: "eu", type: "Vokal Dasar" },
    { hangeul: "ㅣ", rom: "i", type: "Vokal Dasar" },
    { hangeul: "ㅐ", rom: "ae", type: "Vokal Rangkap" },
    { hangeul: "ㅒ", rom: "yae", type: "Vokal Rangkap" },
    { hangeul: "ㅔ", rom: "e", type: "Vokal Rangkap" },
    { hangeul: "ㅖ", rom: "ye", type: "Vokal Rangkap" },
    { hangeul: "ㅘ", rom: "wa", type: "Vokal Rangkap" },
    { hangeul: "ㅙ", rom: "wae", type: "Vokal Rangkap" },
    { hangeul: "ㅚ", rom: "oe", type: "Vokal Rangkap" },
    { hangeul: "ㅝ", rom: "wo", type: "Vokal Rangkap" },
    { hangeul: "ㅞ", rom: "we", type: "Vokal Rangkap" },
    { hangeul: "ㅟ", rom: "wi", type: "Vokal Rangkap" },
    { hangeul: "ㅢ", rom: "ui", type: "Vokal Rangkap" }
];

const vocabTextbookData = [
    { id: 1, bab: "BAB 1", hangeul: "한국", rom: "hanguk", arti: "Korea Selatan" },

];

const grammarData = [
    { struktur: "~입니다 / ~입니까?", arti: "Adalah / Apakah (Formal)", fungsi: ["Digunakan untuk menyatakan atau bertanya secara formal.", "입니다 digunakan untuk menyatakan.", "입니까? digunakan untuk bertanya."], contoh: [{ kalimat: "저는 학생입니다.", arti: "Saya adalah pelajar." }, { kalimat: "어느 나라 사람입니까?", arti: "Anda orang negara mana?" }] },
    { struktur: "~은/는", arti: "Partikel Penanda Topik", fungsi: ["Partikel ini digunakan untuk menunjukkan subjek atau topik pembicaraan dalam sebuah kalimat.", "은 digunakan jika kata sebelumnya berakhiran konsonan.", "는 digunakan jika kata sebelumnya berakhiran vokal."], contoh: [{ kalimat: "투안은 목수입니다.", arti: "Tuan adalah tukang kayu." }, { kalimat: "리리는 중국 사람입니다", arti: "Riri adalah orang cina" }] }
];

// --- DATA BUDAYA (NEW) ---
const CULTURE_DATA = {
    babs: [
        {
            id: 1,
            title: "한국의 인사 예절 (Etika Salam di Korea)",
            pages: [
                {
                    id: 1,
                    korean: "한국에서는 상대에 따라 인사하는 방식이 다릅니다.",
                    arti_full: "Di Korea, cara memberi salam berbeda-beda tergantung pada lawan bicara.",
                    arti_per_kata: [
                        { bagian: "한국에서는", fungsi: "한국 (Korea), 에서 (di), 는 (penanda topik)", arti: "Di Korea" },
                        { bagian: "상대에 따라", fungsi: "상대 (lawan bicara) , 에 따라 (tergantung pada)", arti: "Tergantung pada lawan bicara" },
                        { bagian: "인사하는 방식이", fungsi: "인사하다 (memberi salam) , 는 방식 (cara/metode) , 이 (subjek)", arti: "Cara memberi salam" },
                        { bagian: "다릅니다", fungsi: "다르다 (berbeda) , ㅂ니다 (akhiran formal)", arti: "Berbeda" }
                    ]
                },
                {
                    id: 2,
                    korean: "자신보다 나이가 많거나 지위가 높은 사람에게는 안녕하세요? 또는 안녕하십니까? 라고 말하며 고개를 숙이거나 허리를 굽혀 인사합니다.",
                    arti_full: "Kepada orang yang lebih tua atau memiliki jabatan lebih tinggi, ucapkan 'Annyeonghaseyo?' atau 'Annyeonghasimnikka?' sambil menundukkan kepala atau membungkukkan badan saat memberi salam.",
                    arti_per_kata: [
                        { bagian: "자신보다", fungsi: "자신 (diri sendiri) , KB+보다 (daripada)", arti: "Daripada diri sendiri" },
                        { bagian: "나이가 많거나", fungsi: "나이 (umur) , 가 (subjek) , 많다 (banysk) , KK/KK+거나 (atau)", arti: "Atau lebih banyak umurnya" },
                        { bagian: "지위가 높은 사람에게는", fungsi: "지위 (jabatan) , 가 (subjek) , 높다 (tinggi) , 은 (yang) , 사람 (orang) , KB,에게 (kepada) , 는 (penanda topik)", arti: "Kepada orang yang tinggi jabatannya" },
                        { bagian: "“안녕하세요?” 또는 “안녕하십니까?”라고 말하며", fungsi: "또는 (atau) , (으)라고 말하다 (mengatakan) , KK/KS+(으)며 ", arti: "Sambil mengatakan 'Annyeonghaseyo?' atau 'Annyeonghasimnikka?'" },
                        { bagian: "고개를 숙이거나", fungsi: "고개 (kepala) , 를 (objek) , 숙이다 (menundukkan) , 거나 (atau)", arti: "Atau menundukkan kepala" },
                        { bagian: "허리를 굽혀", fungsi: "허리 (pinggang/badan) , 를 (objek) , 굽히다 (membungkukkan) ", arti: "Dengan membungkukkan pinggang" },
                        { bagian: "인사합니다", fungsi: "인사하다 (memberi salam) , ㅂ니다 (akhiran formal)", arti: "Memberi salam" }
                    ]
                },
                {
                    id: 3,
                    korean: "고개를 숙이거나 허리를 굽히는 것은 상대방에 대한 존경을 나타내는 제스처입니다.",
                    arti_full: "Menundukkan kepala atau membungkukkan badan adalah gestur yang menunjukkan rasa hormat kepada lawan bicara.",
                    arti_per_kata: [
                        { bagian: "고개를 숙이거나", fungsi: "고개 (kepala) , 를 (objek) , 숙이다 (menundukkan) , 거나 (atau)", arti: "Atau menundukkan kepala" },
                        { bagian: "허리를 굽히는 것은", fungsi: "허리 (badan/pinggang) , 를 (objek) , 굽히다 (membungkukkan) , KK+는 것 (merubah KK menjadi KB) , 은 (penanda topik)", arti: "Membungkukkan pinggang" },
                        { bagian: "상대방에 대한", fungsi: "상대방 (lawan bicara) , -에 대한 (kepada/terhadap)", arti: "Terhadap lawan bicara" },
                        { bagian: "존경을", fungsi: "존경 (rasa hormat) , 을 (objek)", arti: "Rasa hormat" },
                        { bagian: "나타내는", fungsi: "나타내다 (menunjukkan) , 는 (yang)", arti: "Yang menunjukkan" },
                        { bagian: "제스처입니다", fungsi: "제스처 (gestur) , 입니다 (adalah)", arti: "Adalah gestur" }
                    ]
                }

            ]
        },
        {
            id: 2,
            title: "한국에서 알뜰하게 생필품을 구입하는 팁 (Tips Membeli Kebutuhan Sehari-hari secara Hemat di Korea)",
            pages: [
                {
                    id: 1,
                    korean: "내용이 곧 업데이트될 예정입니다.",
                    arti_full: "Konten akan segera diperbarui.",
                    arti_per_kata: [
                        { bagian: "내용이", fungsi: "내용 (isi) + 이 (subjek)", arti: "Isi/Konten" }

                    ]
                }
            ]
        },
        {
            id: 3,
            title: "한국의 도시 (Kota di Korea)",
            pages: [
                {
                    id: 1,
                    korean: "내용이 곧 업데이트될 예정입니다.",
                    arti_full: "Konten akan segera diperbarui.",
                    arti_per_kata: [
                        { bagian: "내용이", fungsi: "내용 (isi) + 이 (subjek)", arti: "Isi/Konten" }

                    ]
                }
            ]
        },
        {
            id: 4,
            title: "동작과 사울 (Aksi dan Benda)",
            pages: [
                {
                    id: 1,
                    korean: "내용이 곧 업데이트될 예정입니다.",
                    arti_full: "Konten akan segera diperbarui.",
                    arti_per_kata: [
                        { bagian: "내용이", fungsi: "내용 (isi) + 이 (subjek)", arti: "Isi/Konten" }

                    ]
                }
            ]
        },
        {
            id: 5,
            title: "한국의 좌식 문화 Budaya Korea Duduk di Lantai)",
            pages: [
                {
                    id: 1,
                    korean: "내용이 곧 업데이트될 예정입니다.",
                    arti_full: "Konten akan segera diperbarui.",
                    arti_per_kata: [
                        { bagian: "내용이", fungsi: "내용 (isi) + 이 (subjek)", arti: "Isi/Konten" }

                    ]
                }
            ]
        }


    ]
};

const downloadsData = [
    { category: 'textbook', title: 'TEXTBOOK 2024', desc: 'Textbook Versi Baru Terjemahan Indonesia Lengkap', size: 'Google Drive', link: 'https://drive.google.com/drive/folders/1AJEIXUcCHfUpRbuMKqpLnSVTqmx50jPe?usp=drive_link', icon: 'book', color: 'blue' },
    { category: 'textbook', title: 'TEXTBOOK 2024 (KOSONG)', desc: 'Textbook Versi Baru Kosongan Lengkap', size: 'Google Drive', link: 'https://drive.google.com/drive/folders/11eMsZsIT4qdU6WHsWsEM13254a3pkC5Z?usp=drive_link', icon: 'book', color: 'blue' },
    { category: 'textbook', title: 'TEXTBOOK 2015', desc: 'Textbook Versi Lama Terjemahan Indonesia Lengkap', size: 'Google Drive', link: 'https://drive.google.com/drive/folders/1AIq0IDbSBeOv_yr_qkpgLOs6hFU4FC7t?usp=drive_link', icon: 'book-open', color: 'blue' },
    { category: 'textbook', title: 'TEXTBOOK 2015 (PERKATA)', desc: 'Textbook Versi Lama Terjemahan Indonesia Perkata', size: 'Google Drive', link: 'https://drive.google.com/drive/folders/1gQJAxuIa50o7QZpL4pozYCiHwBqWYWnF?usp=drive_link', icon: 'book-open', color: 'blue' },
    { category: 'grammar', title: 'TATA BAHASA TB 2024', desc: 'Rangkuman Tata Bahasa Textbook Baru 2024', size: 'Google Drive', link: 'https://drive.google.com/file/d/1c5LV9GqPE3-Mgny5Wp7AqKI77VsETjzc/view?usp=drive_link', icon: 'scroll', color: 'purple' },
    { category: 'vocab', title: 'KOSAKATA TB 2024 (ARTI)', desc: 'Kumpulan Kosakata Textbook 2024 Lengkap 60 Bab Dengan Arti', size: 'Google Drive', link: 'https://drive.google.com/file/d/14_w9xsF-3gEUCYbTcsYgiCjaEPEyPTA2/view?usp=drive_link', icon: 'languages', color: 'green' },
    { category: 'vocab', title: 'KOSAKATA TB 2024 (NO ARTI)', desc: 'Kumpulan Kosakata Textbook 2024 Lengkap 60 Bab Tanpa Arti', size: 'Google Drive', link: 'https://drive.google.com/file/d/14tJ9Q4A2NXsYlYIsK0XGmcvUbihwzZHu/view?usp=drive_link', icon: 'languages', color: 'green' },
    { category: 'exam', title: 'SOAL GIDOHAE 2025', desc: 'Paket Soal Gidohae 2025 Set 1-25 Lengkap Dengan Kunci Jawaban', size: 'Google Drive', link: 'https://drive.google.com/drive/folders/18v70xiBXyJj7IReTUDuoZ35o6YNoe3C9?usp=drive_link', icon: 'file-question', color: 'orange' }
];

// ==========================================
// SKILL TEST DATA
// ==========================================

// Data untuk alat kerja (sesuaikan path gambar dengan lokasi gambar Anda)
const TOOL_DATA = [
    {
        id: 1,
        name: "망치",
        meaning: "Palu",
        koreanFunction: "못을 박는 도구",
        functionMeaning: "Alat untuk memaku",
        image: "assets/images/tools/hammer.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 2,
        name: "드라이버",
        meaning: "Obeng",
        koreanFunction: "나사를 돌리는 도구",
        functionMeaning: "Alat untuk memutar sekrup",
        image: "assets/images/tools/screwdriver.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 3,
        name: "톱",
        meaning: "Gergaji",
        koreanFunction: "나무를 자르는 도구",
        functionMeaning: "Alat untuk memotong kayu",
        image: "assets/images/tools/saw.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 4,
        name: "렌치",
        meaning: "Kunci Inggris",
        koreanFunction: "너트를 돌리는 도구",
        functionMeaning: "Alat untuk memutar mur",
        image: "assets/images/tools/wrench.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 5,
        name: "연장선",
        meaning: "Kabel ekstensi",
        koreanFunction: "전기를 공급하는 도구",
        functionMeaning: "Alat untuk menyediakan listrik",
        image: "assets/images/tools/extension.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 6,
        name: "안전모",
        meaning: "Helm keselamatan",
        koreanFunction: "머리를 보호하는 도구",
        functionMeaning: "Alat untuk melindungi kepala",
        image: "assets/images/tools/helmet.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 7,
        name: "보호안경",
        meaning: "Kacamata pelindung",
        koreanFunction: "눈을 보호하는 도구",
        functionMeaning: "Alat untuk melindungi mata",
        image: "assets/images/tools/goggles.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 8,
        name: "계량기",
        meaning: "Alat pengukur",
        koreanFunction: "길이를 재는 도구",
        functionMeaning: "Alat untuk mengukur panjang",
        image: "assets/images/tools/measuring.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 9,
        name: "니퍼",
        meaning: "Tang potong",
        koreanFunction: "전선을 자르는 도구",
        functionMeaning: "Alat untuk memotong kabel",
        image: "assets/images/tools/nipper.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    },
    {
        id: 10,
        name: "사다리",
        meaning: "Tangga",
        koreanFunction: "높은 곳에 올라가는 도구",
        functionMeaning: "Alat untuk naik ke tempat tinggi",
        image: "assets/images/tools/ladder.jpg", // Ganti dengan path gambar Anda
        audioQuestion: "이건 뭐에요?"
    }
];

// Data untuk wawancara
const INTERVIEW_DATA = [
    {
        id: 1,
        korean: "자기소개를 해 보세요.",
        translation: "Coba perkenalkan diri Anda.",
        audioQuestion: "자기소개를 해 보세요.",
        sampleAnswer: "안녕하세요. 저는 [이름]입니다. [나이]살이고, [국적] 사람입니다. 한국어를 배우고 있습니다.",
        answerMeaning: "Halo, saya [nama]. Umur saya [usia], dan saya orang [kebangsaan]. Saya sedang belajar bahasa Korea."
    },
    {
        id: 2,
        korean: "가족이 몇 명이에요?",
        translation: "Berapa jumlah anggota keluarga Anda?",
        audioQuestion: "가족이 몇 명이에요?",
        sampleAnswer: "저는 4명 가족입니다. 아버지, 어머니, 저, 그리고 동생이 있습니다.",
        answerMeaning: "Saya keluarga 4 orang. Ada ayah, ibu, saya, dan adik."
    },
    {
        id: 3,
        korean: "취미가 뭐예요?",
        translation: "Apa hobi Anda?",
        audioQuestion: "취미가 뭐예요?",
        sampleAnswer: "제 취미는 음악 듣기와 영화 보기입니다. 주말에 친구들과 같이 영화관에 가요.",
        answerMeaning: "Hobi saya mendengarkan musik dan menonton film. Di akhir pekan saya pergi ke bioskop bersama teman."
    },
    {
        id: 4,
        korean: "어떤 일을 하고 싶어요?",
        translation: "Pekerjaan apa yang ingin Anda lakukan?",
        audioQuestion: "어떤 일을 하고 싶어요?",
        sampleAnswer: "저는 기술자로 일하고 싶습니다. 기계 수리가 특기입니다.",
        answerMeaning: "Saya ingin bekerja sebagai teknisi. Saya ahli dalam memperbaiki mesin."
    },
    {
        id: 5,
        korean: "한국에서 어떤 경험이 있었어요?",
        translation: "Pengalaman apa yang Anda miliki di Korea?",
        audioQuestion: "한국에서 어떤 경험이 있었어요?",
        sampleAnswer: "한국에서 2년 동안 공장에서 일했습니다. 한국 문화를 많이 배웠습니다.",
        answerMeaning: "Saya bekerja di pabrik di Korea selama 2 tahun. Saya belajar banyak tentang budaya Korea."
    },
    {
        id: 6,
        korean: "장점이 뭐예요?",
        translation: "Apa kelebihan Anda?",
        audioQuestion: "장점이 뭐예요?",
        sampleAnswer: "제 장점은 성실하고 책임감이 강한 것입니다. 항상 시간을 잘 지켜요.",
        answerMeaning: "Kelebihan saya adalah rajin dan bertanggung jawab. Selalu tepat waktu."
    },
    {
        id: 7,
        korean: "단점이 뭐예요?",
        translation: "Apa kekurangan Anda?",
        audioQuestion: "단점이 뭐예요?",
        sampleAnswer: "때로는 너무 완벽주의자라서 시간이 더 걸릴 때가 있습니다.",
        answerMeaning: "Kadang-kadang saya terlalu perfeksionis sehingga membutuhkan waktu lebih lama."
    },
    {
        id: 8,
        korean: "왜 한국에서 일하고 싶어요?",
        translation: "Mengapa Anda ingin bekerja di Korea?",
        audioQuestion: "왜 한국에서 일하고 싶어요?",
        sampleAnswer: "한국의 산업 기술을 배우고 싶고, 한국 회사의 체계적인 시스템을 경험하고 싶습니다.",
        answerMeaning: "Saya ingin belajar teknologi industri Korea dan mengalami sistem perusahaan Korea yang terstruktur."
    },
    {
        id: 9,
        korean: "급여는 얼마 정도 기대하세요?",
        translation: "Berapa gaji yang Anda harapkan?",
        audioQuestion: "급여는 얼마 정도 기대하세요?",
        sampleAnswer: "한국 법정 최저임금에 맞는 급여를 기대합니다. 열심히 일해서 더 배우고 싶습니다.",
        answerMeaning: "Saya mengharapkan gaji sesuai upah minimum Korea. Saya ingin bekerja keras dan belajar lebih banyak."
    },
    {
        id: 10,
        korean: "질문 있으세요?",
        translation: "Apakah Anda memiliki pertanyaan?",
        audioQuestion: "질문 있으세요?",
        sampleAnswer: "네, 회사의 복지 제도와 교육 기회에 대해 더 알고 싶습니다.",
        answerMeaning: "Ya, saya ingin tahu lebih banyak tentang sistem kesejahteraan perusahaan dan pelatihan."
    }
];