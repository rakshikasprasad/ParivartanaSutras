// Sutra data (your provided content) - This remains the same
const sutras = [
    { number: 1, name: "ABHAYAM", short: "FEARLESSNESS", long: "Of all the Divine qualities, fearlessness holds the highest place. The one thing that creates fear is non-awareness of the Divine presence within. There exists within everyone, a Divine fearlessness and God's presence always. Be fearless and everything else will come to you. By constant Abhyasa and Vairagya we can cultivate fearlessness. Learn prayers and spiritual practices which can destroy fear." },
    { number: 2, name: "SATVASAMSHUDDHI", short: "PURITY OF BEING", long: "The best way of drawing Divine Grace into one's life is a heart-felt prayer filled with deep feelings and aspirations. After a heartfelt prayer, whatever you think, so you become. Satvasamshuddhi means becoming completely established in purity. Purify your Actions, Words and Thoughts by surrendering them unconditionally to the Divine Feet. The moment you experience Purity, the Divine Light starts shining in you." },
    { number: 3, name: "JNANAYOGA VYAVASTHITHI", short: "STEADFASTNESS IN KNOWLEDGE AND YOGA", long: "Equanimity is Yoga. Skill in action is Yoga. We have to cultivate equanimity and skill. Yoga here means, among other things, reverence for life in all forms. Knowledge has to be attained through satsang, with persons and books. Each day we should develop new knowledge. Learning to be content with whatever knowledge we receive and having deep aspiration for higher knowledge should always be there. We should attain all the three types of knowledge, namely, Tamasic knowledge, Rajasic knowledge and Satvic knowledge. Integral knowledge of these three varieties leads to all wealth, including the wealth of liberation." },
    { number: 4, name: "DANAM", short: "GIVING", long: "We should live a life of Giving. When we give liberally, we will get everything in life. We can give our time, money, knowledge, our love and compassion. Whatever we give should be given unconditionally, joyfully and confidentially, without any expectation, as a matter of duty to others, depending on the place, time and circumstances." },
    { number: 5, name: "DAMA", short: "SELF-RESTRAINT", long: "The three qualities identified by Brahman are Dama, Dana and Daya. The Brahman recommended Dama even to the Gods and Goddesses. Absence of self-restraint leads to inflation of Ego and consequent unhappiness. Practice of Awareness every moment in our daily conduct of life will develop Dama. We should discharge our duties with sense control and freedom from pride and attachment." },
    { number: 6, name: "YAGNA", short: "SACRIFICE", long: "Literally Yagna means oblations to the Sacred fire. Lord Krishna has declared that sincere japa is the best form of Yagna. Doing your duty excellently well according to your profession is also a very good form of sacrifice. Prayers and offerings to Gods and Goddesses also constitute Yagna, provided there is no desire for the fruit." },
    { number: 7, name: "SVÂDHYÂYA", short: "STUDY OF SCRIPTURES AND HOLY BOOKS (STUDY OF THE SELF)", long: "Svadhyaya means knowing yourself through introspection and also study of sacred books. The Mahavakya says, 'Prajnanam Brahma'. In other words we should understand the oneness of the Self and the Brahman. This is real Self-realisation or God-realisation. The great teacher Socrates advised, \"Know Thyself\"." },
    { number: 8, name: "TAPAS", short: "AUSTERITY", long: "Tapas means austerity. Austerity means practice of hardships such as hunger, thirst, cold, heat, rain, etc. Tolerance of such hardships destroys our karma. Spiritual practices are also a form of austerity. Instead of yearning for favourable circumstances, make the best possible use of existing circumstances." },
    { number: 9, name: "ARJAVAM", short: "STRAIGHT FORWARDNESS", long: "Let us always be straight-forward and simple in our dealings without attaching importance to what people will say. We should also harmonize our thoughts, words and deeds. There should not be deceit in our conduct. This will lead to total salvation." },
    { number: 10, name: "AHIMSÂ", short: "NON-INJURY", long: "This means that one should not cause any pain to self or others, at present or in future through one's thoughts, words and actions. One should not also enjoy worldly pleasures with any selfish motive. In other words, enjoy worldly pleasures in a detached manner and offering them to the Supreme. Be devoted to God and then enjoy the pleasures of life. If one practices Ahimsa strictly, no force in the universe can cause any harm to him." },
    { number: 11, name: "SATYAM", short: "TRUTHFULNESS", long: "Practice integrity in thought, words and deeds. This includes honesty, faithfulness and punctuality. The aim here is to realize the Supreme Truth namely God." },
    { number: 12, name: "AKRODHA", short: "ABSENCE OF ANGER", long: "This is a very great quality. We should not be angry even with those who do us wrong. We should consider them as instrumental in purifying us. Anger is a clear sign of mental weakness and it will ruin a person sooner or later. Chanting of appropriate prayers and practice of meditation will result in mental strength and freedom from anger. Even in spite of the greatest provocation, we should remain in total equanimity. This alone will lead us to great heights in worldly life and spiritual life." },
    { number: 13, name: "TYAGAH", short: "RENUNCIATION", long: "Real renunciation does not mean non-possession, but detachment in possession. There should be internal and external renunciation of possession from the heart. Renunciation leads to immediate peace of mind and long term spiritual progress. The highest renunciation comes from the heart that says, \"I want Nothing\"" },
    { number: 14, name: "SHNTIH", short: "SERENITY, EQUANIMITY", long: "Shanti means Peace, resulting from absence of attachment and aversion. Even in unfavourable circumstances we should maintain peace, and then there will be progress. When peace is disturbed by attachment or aversion, we should immediately become aware of it and burn that attachment or aversion in the fire of awareness. Peace also means total reconciliation with what Is." },
    { number: 15, name: "APAISHUNAM", short: "STOP FINDING FAULT WITH OTHERS", long: "Stop finding fault with others, (which in Sanskrit is called 'Paishunam'). Malice, back-biting, gossip should be totally eliminated. One should see Divinity everywhere and behold Divinity in others. Here again awareness of the tendency to find fault, will reverse the trend." },
    { number: 16, name: "DAYA BHUTESHU", short: "COMPASSION FOR ALL BEINGS", long: "Compassion is something more than pity or mercy. The greatest act of compassion was the sacrifice of his spine by Sage Dadhichi, for general welfare. Devendra constructed the Vajrayudha from Sage Dhadhichi's spine. Karna and Shibi are also great examples of compassion. Pride in compassion is an impurity. There should not be any selfish motive in the practice of compassion." },
    { number: 17, name: "ALOLUPTVAM", short: "NON-COVETOUSNESS", long: "Attraction towards objects, when one sees others enjoying them is 'Loluptvam'. It can be translated as covetousness. Absence of covetousness is 'Aloluptvam'. Don't be guided by what others have or others possess. We should not be excited about them. Only by guarding ourselves with awareness can we be free from 'Loluptvam'." },
    { number: 18, name: "MARDAVAM", short: "GENTLENESS", long: "A striver is always mild and gentle, even towards the evil doers. Be mild in feelings and speech. The mildness and gentleness should spring from the heart effortlessly and spontaneously." },
    { number: 19, name: "HRIH", short: "MODESTY, INVITING SWEETNESS", long: "It is very difficult to translate 'HRIH'. Any violation of the scriptures is the opposite of 'HRIH'. Total freedom from the feeling of doer-ship will enable us to cultivate 'HRIH'. A child - like innocence should be cultivated." },
    { number: 20, name: "ACHAPALAM", short: "ABSENCE OF FICKLENESS, NON-RESTLESSNESS", long: "Perform all actions with steadiness and patience, with promptness. Fickleness is to be avoided. All duties should be performed without attachment to the outcome. Work should be done properly and promptly without any anxiety." },
    { number: 21, name: "TEJAH", short: "VIGOUR, RADIANCE OF CHARACTER", long: "By the practice of Yogic discipline a seeker will be endowed with vigour. Even sinners will renounce their sins in his presence. The evil doers will hesitate to do evil and start engaging in virtuous deeds. A shining radiance will also be with the practitioner once the mind becomes pure." },
    { number: 22, name: "KSHAMA", short: "FORGIVENESS, PATIENCE", long: "The virtue of Kshama forgives the offences of others without any inclination to retaliate. This forgiveness gives great power to the practitioners. If a person does not expect any rewards for his actions from others, nor does he wish to do wrong to the wrong-doers, the virtue of forgiveness arises in him. Patience strengthens one's character." },
    { number: 23, name: "DHRITH", short: "FORTITUDE, COURAGE", long: "Courage makes one remain balanced in favourable circumstances. Such a person never gets disheartened in calamities. He is also not excited with joy in prosperity. He strives to attain God with unwavering steadiness. The Upanishadic quotation is: Arise, Awake, and stop not until the desired goal is reached." },
    { number: 24, name: "SHAUCHAM", short: "PURITY, CLEANLINESS", long: "Cultivate purity of the body, purity of speech and purity of mind. It should be both external and internal purity. When the body and mind are totally purified, Egoism, Maya and Karmic imprints get destroyed. The Divine grace descends spontaneously into a pure heart." },
    { number: 25, name: "ADROHAH", short: "ABSENCE OF HATRED", long: "Let there be no hatred or malice against any being. One should regard everyone else and everything else as manifestations of Divinity. Then there will be no malice or hatred for everyone." },
    { number: 26, name: "NA ATIMÂNITA", short: "ABSENCE OF PRIDE", long: "Mânita means pride, Atimânita means great pride and Na atimânita means total freedom from pride. We should abandon the pride of wealth, pride of knowledge, pride is to be avoided. It is the ego which creates pride. Humility should be manifested in all circumstances, at all times and in all places. When one connects oneself to the Self, pride disappears automatically." },
    { number: 27, name: "ADAMBITVAM", short: "ABSENCE OF PRETENCE AND SELF-CONCEIT", long: "Assuming virtue for the sake of prestige, exhibiting oneself as a devotee or as a charitable person is the highest hypocrisy. We should not bother about what others think of us; with humility we should pursue the goal of God-realisation." },
    { number: 28, name: "KSHÂNTI", short: "GLAD ACCEPTANCE OF EVERYTHING AS IT IS", long: "Kshânti can also mean forbearance. We should forgive every one. Never think of taking revenge on anyone. One has to develop a strong trust that one remains unaffected by evil and any wrong done to oneself." },
    { number: 29, name: "ACHARYOPASANAM", short: "SERVICE TO THE MASTER", long: "A teacher who not only imparts knowledge but also teaches the way to realise the higher self, is called an Acharya. Acharya can also be interpreted as a teacher with a liberated soul. Serving an Acharya with body and mind, in order to make him happy, is service done to him. Spiritual discipline is to be practised under the guidance of an Acharya. Though the Acharya does not expect anything from the seeker, it is the duty of the seeker to revere him and serve him in whatever way possible, from the bottom of his heart. Then the virtues of the teacher including God-realisation will develop in the seeker." },
    { number: 30, name: "STHAIRYAM", short: "STEADFASTNESS IN THINKING AND ACTING", long: "Sthairyam can also mean firmness in the aim of God-realisation, in the face of difficulties, obstacles and adversities. Sometimes even prosperity becomes an obstacle but the striver has to remain firm in his faith, in the saints, scriptures and the teacher." },
    { number: 31, name: "ATMAVINIGRAHAH", short: "MASTERY OVER THE MIND", long: "Here the word Atma means the Mind. When the mind is attached to any thought it becomes a Sankalpa. Fluctuating thoughts can be destroyed by practice of dispassion. Control of the senses and the ego is inherent in the control of the mind. One has to rise above attachment and aversion, likes and dislikes." },
    { number: 32, name: "ANAHAMKARAH", short: "ABSENCE OF SELF-IMPORTANCE", long: "The feeling of 'I' or egoism has no existence of its own. But it arises from identification with the body, the mind, the good, and the evil. The striver has to streamline the feeling of egoism. Any affinity with worldly objects or feeling of superiority because of wealth or knowledge can give birth to pride or Ahamkara. In the scriptures there is a phrase, 'Sat-chit-ananda' (existence-consciousness-bliss). When this is realized, then only are we free from egoism." },
    { number: 33, name: "JANMA-MRUTYU-JARÂ-VYADHI-DUKHA-DOSHANUDARSHANAM", short: "REFLECTION ON THE LIMITATIONS OF BIRTH, DEATH, OLD AGE, ILLNESS, SADNESS AND PAIN", long: "No one can escape death. Death is inevitable for one who is born. Similarly old age, disease, sadness are parts of life. By proper observation and awareness, one can get discrimination and will be free from the influence of 'dukha' and 'dosha'." },
    { number: 34, name: "ASAKTIHI", short: "ABSENCE OF SENSE OF OWNERSHIP OR DOER-SHIP", long: "Attachment to worldly objects, persons and circumstances is 'SAKTIHI'. Absence of this attachment is 'ASAKTIHI'. Conduct of the senses with their objects causes pleasure and subsequently pain. This awareness of the striver will result in Non-attachment." },
    { number: 35, name: "ANABHISHVANGAH PUTRA-DÂRA-GRUHÂDISHU", short: "ABSENCE OF ATTACHMENT TO SON, WIFE, HOUSE, ETC", long: "We can render service to kith and kin, like children and wife without any expectation. It is also not necessary to identify oneself with spouse and children, while at the same time doing service to them in an excellent manner. Service to kith and kin, without attachment leads to immortality." },
    { number: 36, name: "NITYAM SAMACITTATVAM ISTA-ANISTA-UPAPATTISHU", short: "EQUANIMITY TOWARDS DESIRABLE AND UNDESIRABLE RESULTS", long: "Absence of excitement during favourable events and absence of grief in unfavourable circumstances is called equanimity. A striver has to render service to the beings in the world without any expectation or selfish motive. Both the desirable and undesirable circumstances are means to realise the higher self. Incidentally equanimity is the result." },
    { number: 37, name: "MAYI ANANYA YOGENA BHAKTIH-AVYABHICHÂRINI", short: "UNSWERVING DEVOTION TO THE DIVINE", long: "Exclusive devotion is the path to Self-realisation. In thorough devotion Ego gets streamlined. Total surrender to the Supreme Divinity or God/Goddess is the means and also the end. The Sattva, Rajas and Tamo gunas have to be transcended. The only aim should be God-realisation and not attainment of anything else." },
    { number: 38, name: "VIVIKTA DESHA SEVITVAM", short: "PREFERENCE FOR A PLACE OF SOLITUDE", long: "A lonely and sacred place, free from the madding crowd's ignoble strife, is suitable for prayer, meditation and similar spiritual practices. The seeker beholds nothing else but his own Higher Self. Total identification or Sâyujyam with the Supreme is the aim of real loneliness." },
    { number: 39, name: "ARATIH JANA SAMSADI", short: "ABSENCE OF CRAVING FOR SOCIAL INTERACTION AND COMPANIONSHIP", long: "The inclination for worldly acclaim has to be curbed by discarding the company of persons attached only to worldly matters. But there is no harm to seek the company of Saints and exalted Teachers. Satsang is helpful for spiritual practices." },
    { number: 40, name: "ADHYÂTMA-JNÂNA-NITYATAVAM", short: "UNDERSTANDING THE ULTIMATE VALIDITY OR SELF-KNOWLEDGE", long: "Study of sacred texts, listening to divine discourses and self enquiry will lead to the light of the Supreme Self. The Supreme Spirit is Eternal and Imperishable." },
    { number: 41, name: "TATVA-JNÂNÂRTHA-DARSHANAM", short: "COMMITMENT TO SELF-KNOWLEDGE", long: "Tatva jnana here means knowledge of God, which is the only true knowledge. God pervades everywhere, every time, every person, every thing and every event or circumstance. To have such a constant perception is the greatest spiritual practice." },
    { number: 42, name: "UTSAHA SAMPANNATA", short: "ENTHUSIASM", long: "Be enthusiastic and alert always. Enthusiasm can lead to prosperity. Even prayer, meditation and other spiritual practices are to be done in an attitude of joyful enthusiasm. Living enthusiastically is ideal living." },
    { number: 43, name: "KRIYA VIDHIJNAM", short: "DISCIPLINE IN ACTION", long: "We have to develop a plan of action and method of living. Doing everything systematically will save time and money. Self-discipline leads to success and prosperity." },
    { number: 44, name: "KRUTAJNATHA", short: "GRATEFULNESS", long: "Everyday, at every conceivable opportunity express Gratitude from your heart. To take an example, when we drink a cup of tea, we have to express Gratitude to the workers in the tea plantations, people working in the tea factory, the tea tasters, the packers, transporters and the merchants. We also have to express Gratitude for the people who are responsible for the water in the tea. Similarly, gratitude has to be expressed for those responsible for the milk and sugar, by tracing them to their origins. Occasionally let us go back to our childhood and express Gratitude to the Mother, Father and the Teachers. This attitude of Gratitude is to be sustained." },
    { number: 45, name: "PAURUSHAM", short: "INTENSE SELF-EFFORT", long: "When we do anything we have to presume that everything depends on our work. The correct attitude to our duties and responsibilities can change even our destiny. While making intense sincere effort, the results should not be thought of. Only the action is ours and the results are to be left to the divine. The Upanishadic instruction is 'DAIVAM NIHRUTYA KURU PAURUSHAM ATMASHAKTYA', 'Set apart divinity and do your work intensely and sincerely'." },
    { number: 46, name: "BRAHMACARYA", short: "DISCIPLINE", long: "The real meaning of Brahmacarya is, 'Charya' (to move), towards Brahman. Discipline in all matters relating to the senses is Brahmacarya. It is wrong to interpret Brahmacarya as remaining a bachelor or a spinster. It can be interpreted as the highest discipline in all activities." },
    { number: 47, name: "APARIGRHAH", short: "NON-ACCEPTANCE OF GIFTS", long: "If any gift is accepted a portion of the donor's karma automatically gets transferred to the receiver. The ideal is not to accept any gifts, except from the Divine Mother. When acceptance of a gift becomes unavoidable, one can accept it on behalf of the Divine Mother. As far as possible, avoidance of Gifts is ideal. But if any gift is offered out of sincere love and respect, it can be accepted on behalf of the Divine." },
    { number: 48, name: "SANTOSHA", short: "ALWAYS IN BLISS", long: "This word occurs as the second Niyama in Patanjali's Yoga Sutras. Maintaining a happy state, irrespective of the context in which one finds oneself, is the greatest spiritual practice. Practice of Santosha attracts all auspiciousness from the cosmos." },
    { number: 49, name: "ISWARA-PRANIDHÂNA", short: "DOING EVERYTHING AS AN OFFERING TO THE SUPREME", long: "The highest form of worship is offering everything including oneself to the Divine. Thinking, Speaking, and Doing have to be divinized. The summary of the Bliss is \"Mat karma krut\". Lord Krishna says, 'Do everything for Me.'" },
    { number: 50, name: "ANASUYA", short: "NON-JEALOUSY", long: "Jealousy is the 'Green-eyed monster' which destroys one's personality. Jealousy takes away all the happiness out of life. Many do not know that jealousy causes all intestinal troubles, including indigestion and constipation." },
    { number: 51, name: "ANAYASAH", short: "EFFORTLESSNESS", long: "When we do our work with love, it becomes effortless. That music is the greatest when the musician sings effortlessly. When we struggle to do something, everything becomes difficult. Let us be light and relaxed in our efforts and make them effortless. In this way we can do more work and also work efficiently. In a way science and technology are helping us in becoming more and more effortless." },
    { number: 52, name: "MANGALAM", short: "AUSPICIOUSNESS", long: "Thinking auspiciously leads to auspicious speech and auspicious action. By virtue of this practice we can absorb all auspiciousness in our life from the cosmos. Always thinking positively also helps in this process. It is necessary to avoid entertainment of unfavourable factors 'Pratikûlasya Varjanam'." },
    { number: 53, name: "ANIRVEDAM", short: "FREEDOM FROM FEAR AND ANXIETY", long: "This is the word used by Hanuman in the 'Sundara Kandam' of the Valmiki Ramayana. 'Nirveda' means fear and anxiety. 'Anirveda' means freedom from fear and anxiety. If we are free from fear and anxiety it will lead us to prosperity and all our efforts will be crowned with success." },
    { number: 54, name: "NIRVAIRA-SARVABHÛTESHU", short: "NO MALICE OR HATRED AGAINST ANY BEING", long: "Everything in the universe is the creation of the Divine. Avoiding hatred against all beings will invite all good things in life. Unconditional love is to be considered life's objective. Any hatred or malice will stand in the way of our success." },
    { number: 55, name: "VÂKPATUTVAM", short: "POWER OF EXPRESSION", long: "A discipline in the use of words will create great power in oneself. At the height of this discipline, if one says, \"Let it rain\", it starts raining. Even the universal forces will listen to a person practicing this discipline. The words we use during daily life must be carefully selected. The choicest words, the correct intonation and the appropriate body language are all included in the power of speech. Speaking with awareness of the words constitutes the practice. Before we speak, let us ask ourselves three questions: 1. Is it true? 2. Is it going to be helpful to me or to others? 3. Is it necessary to speak? If the answer is yes, we can speak with the most appropriate words, neither more nor less." },
    { number: 56, "name": "MAITRI", short: "FRIENDLINESS", long: "A friendly attitude to everyone, everything, every event and every circumstance will make relationships noble and cordial. The attitude of friendship is to be extended to even animals, insects, plants and trees and all of Nature's creation. This practice will create great joy and peace in our lives. Even God can be viewed as a friend (SAKHA)." },
    { number: 57, name: "MADHURA-KOMALA VAGVILÂSATVAM", short: "ALWAYS SPEAKING BEAUTIFULLY AND SOFTLY", long: "If we use sweet and soft words in our daily speech, all our relationships will be healthy and joyful. Emotional and angry words, untruthful statements have to be strictly avoided. We have to ensure that every word comes from the depth of our hearts. Sincerity to the core and sweetness and softness are to be cultivated." },
    { number: 58, name: "SADÂ MANDAHÂSAM", short: "ALWAYS IN SMILE", long: "Whatever may or may not happen in our lives, irrespective and independent of the context in which we are operating, it is necessary to be in a spontaneous, joyful smile. We have to make life a series of smiles at all events taking place. Develop a sense of humour in every conceivable context. Even in sleep, one has to be in smile." },
    { number: 59, name: "MAUNAM", short: "SILENCE", long: "Speech is silver and Silence is golden. The practice of silence as a discipline bestows tremendous energy on the practitioner. Silence means not only abstention from speaking but also absence of thoughts. Practicing deep silence even for 5 minutes a day, at the same time every day will result in destroying the karmic imprints playing havoc in our lives." },
    { number: 60, name: "ANALASYAM", short: "ABSENCE OF IDLENESS OR LETHARGY", long: "The greatest enemy of man is Idleness or laziness or Lethargy. The opposite of laziness is enthusiasm. A happy interest in life and willingness to take responsibility for one's own life, will bring about the destruction of laziness. The proverb is, \"An idle mind is the devil's workshop.\" Addiction to lazy attitude in life is the greatest danger. Therefore we have to become aware and throw away laziness from our lives. Practice of Surya Namaskara, Kapalabathi, Sarvangasana, Matsyasana, Ardha Matsyendrasana and similar yogasanas coupled with Savitri Pranayama will drive away idleness." },
    { number: 61, name: "ADiRGHA-SUTRAM", short: "PROMPTNESS", long: "Learn to live fully in the present, unencumbered by the past and not worried about the future. Our main business is to do well what clearly lies at hand and not bother about what lies at a distance in time. Japan as a nation is an example for this practice, no wonder Japan is number one economically. Surrender to the Divine feet will enable us to live totally in the present. Also we have to understand that procrastination is the thief of time and therefore to be avoided." },
    { number: 62, name: "ATMA-SHAKTHIH", short: "SELF-EMPOWERMENT", long: "Atma shakti is the greatest power in the world. The Self within one is nothing but God. The inspiration for thinking, speaking and acting has to come from the Higher Self and then success is sure. All our efforts and endeavours have to be performed with Atma Shakti. Meditation and Yoga will put us in touch with Atma Shakti. The correct chanting of the Gayatri Mantra will also keep us in touch with Atma Shakti. Practise Yoga Gayatri and enjoy Self-empowerment." },
    { number: 63, name: "TITIKSHATVAM", short: "TOTAL ACCEPTANCE OF EVERYTHING AS IT IS, PAIN OR PLEASURE", long: "The pains and pleasures of life are all transient. There is a famous poem with refrain, \"even this will pass away.\" Our duty therefore is to develop the highest tolerance for everything in life. Observe life without judgment and then life will change into a glorious celebration." },
    { number: 64, name: "AHARA-VIHARAVIDHI", short: "DISCIPLINE IN FOOD, SLEEP AND RECREATION", long: "Work, sleep, leisure, food and sex have to be brought under healthy discipline. Addictions to long hours of recreation have to be strictly avoided. Everyday we have to draw a plan of action and method of living for the day keeping in mind the truth that time is precious. Wastage of time is wastage of life itself. Money lost can be regained, Time lost is gone forever." }
];

let currentTimerInterval; // To keep track of the active timer

// --- Common Functions (used across pages) ---

function startTimer(duration, displayElement, onTimerEnd) {
    if (currentTimerInterval) { // Clear any existing timer before starting a new one
        clearInterval(currentTimerInterval);
    }
    let timer = duration;
    displayElement.textContent = timer;
    currentTimerInterval = setInterval(() => {
        timer--;
        displayElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(currentTimerInterval);
            currentTimerInterval = null; // Reset the interval ID
            if (onTimerEnd) {
                onTimerEnd();
            }
        }
    }, 1000);
    return currentTimerInterval; // Return interval ID to potentially clear it later
}

function clearTimer() {
    if (currentTimerInterval) {
        clearInterval(currentTimerInterval);
        currentTimerInterval = null;
    }
}

// --- Hamburger Menu Logic (GLOBAL) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Animate the burger icon
        });

        // Close menu when a link is clicked (for mobile usability)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});


// --- Logic for index.html ---
if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
    const sutraSelect = document.getElementById('sutra-select');
    const goToSutraButton = document.getElementById('go-to-sutra');
    const seeAllSutrasButton = document.getElementById('see-all-sutras');

    // Populate dropdown
    sutras.forEach(sutra => {
        const option = document.createElement('option');
        option.value = sutra.number;
        option.textContent = `${sutra.number}. ${sutra.short}`;
        sutraSelect.appendChild(option);
    });

    goToSutraButton.addEventListener('click', () => {
        const selectedSutraNumber = sutraSelect.value;
        if (selectedSutraNumber) {
            // Store the current sutra number in sessionStorage before navigating
            sessionStorage.setItem('currentSutraNumber', selectedSutraNumber);
            window.location.href = `sutra_detail.html?sutra=${selectedSutraNumber}`;
        } else {
            alert('Please select a Sutra from the dropdown.');
        }
    });

    seeAllSutrasButton.addEventListener('click', () => {
        // Clear any stored sutra number when going to all sutras
        sessionStorage.removeItem('currentSutraNumber');
        window.location.href = 'all_sutras.html';
    });
}

// --- Logic for sutra_detail.html ---
if (window.location.pathname.endsWith('sutra_detail.html')) {
    const sutraNameElem = document.getElementById('sutra-name');
    const sutraShortDescElem = document.getElementById('sutra-short-description');
    const sutraLongDescElem = document.getElementById('sutra-long-description');
    const timerDisplay = document.getElementById('timer');
    const previousSutraButton = document.getElementById('previous-sutra');
    const nextSutraButton = document.getElementById('next-sutra');
    const backToHomeButton = document.getElementById('back-to-home-detail');

    let currentSutraNumber; // This will hold the number of the currently displayed sutra

    function updateSutraDisplay(sutra) {
        clearTimer(); // Stop any running timer
        if (sutra) {
            sutraNameElem.textContent = `Sutra ${sutra.number}: ${sutra.name}`;
            sutraShortDescElem.textContent = sutra.short;
            sutraLongDescElem.textContent = sutra.long; // Directly show long description
            timerDisplay.parentElement.style.display = 'inline-block'; // Ensure timer is visible

            startTimer(60, timerDisplay); // Start a new 1-minute timer

            // Enable/disable navigation buttons
            previousSutraButton.disabled = sutra.number <= sutras[0].number;
            nextSutraButton.disabled = sutra.number >= sutras[sutras.length - 1].number;

            // Update URL in browser history without reloading the page
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('sutra', sutra.number);
            window.history.replaceState({ sutraNumber: sutra.number }, '', newUrl.toString());

            // Store current sutra in session storage for continuity
            sessionStorage.setItem('currentSutraNumber', sutra.number);

        } else {
            sutraNameElem.textContent = "Sutra not found.";
            sutraShortDescElem.textContent = "Please go back and select a valid Sutra.";
            sutraLongDescElem.textContent = "";
            timerDisplay.parentElement.style.display = 'none';
            previousSutraButton.style.display = 'none'; // Hide buttons if no sutra
            nextSutraButton.style.display = 'none';
        }
    }

    // Get sutra from URL or session storage on page load
    const urlParams = new URLSearchParams(window.location.search);
    const initialSutraNumber = parseInt(urlParams.get('sutra')) || parseInt(sessionStorage.getItem('currentSutraNumber'));

    if (initialSutraNumber) {
        const initialSutra = sutras.find(s => s.number === initialSutraNumber);
        if (initialSutra) {
            currentSutraNumber = initialSutra.number;
            updateSutraDisplay(initialSutra);
        } else {
            // Fallback to first sutra if URL/session number is invalid
            currentSutraNumber = sutras[0].number;
            updateSutraDisplay(sutras[0]);
        }
    } else {
        // If no sutra specified, default to the first one
        currentSutraNumber = sutras[0].number;
        updateSutraDisplay(sutras[0]);
    }


    previousSutraButton.addEventListener('click', () => {
        const currentIndex = sutras.findIndex(s => s.number === currentSutraNumber);
        if (currentIndex > 0) {
            currentSutraNumber = sutras[currentIndex - 1].number;
            updateSutraDisplay(sutras[currentIndex - 1]);
        }
    });

    nextSutraButton.addEventListener('click', () => {
        const currentIndex = sutras.findIndex(s => s.number === currentSutraNumber);
        if (currentIndex < sutras.length - 1) {
            currentSutraNumber = sutras[currentIndex + 1].number;
            updateSutraDisplay(sutras[currentIndex + 1]);
        }
    });

    backToHomeButton.addEventListener('click', () => {
        clearTimer(); // Stop timer when navigating away
        sessionStorage.removeItem('currentSutraNumber'); // Clear stored sutra on going home
        window.location.href = 'index.html';
    });
}

// --- Logic for all_sutras.html ---
if (window.location.pathname.endsWith('all_sutras.html')) {
    const currentSutraNameElem = document.getElementById('current-sutra-name');
    const currentSutraShortDescElem = document.getElementById('current-sutra-short-description');
    const currentSutraLongDescElem = document.getElementById('current-sutra-long-description');
    const timerDisplayAll = document.getElementById('timer-all');
    const previousSutraButtonAll = document.getElementById('previous-sutra-all');
    const nextSutraButtonAll = document.getElementById('next-sutra-all');
    const backToHomeButtonAll = document.getElementById('back-to-home-all');

    let currentSutraIndex = 0; // This will track the index of the sutra being displayed

    function displaySutraSequentially(index) {
        clearTimer(); // Clear any existing timer from previous sutra

        if (index >= 0 && index < sutras.length) {
            const sutra = sutras[index];
            currentSutraNameElem.textContent = `Sutra ${sutra.number}: ${sutra.name}`;
            currentSutraShortDescElem.textContent = sutra.short;
            currentSutraLongDescElem.textContent = sutra.long; // Directly show long description
            currentSutraLongDescElem.style.display = 'block'; // Ensure it's visible

            timerDisplayAll.parentElement.style.display = 'inline-block'; // Ensure timer is visible
            startTimer(60, timerDisplayAll); // Start a new 1-minute timer for this sutra

            // Enable/disable navigation buttons for "All Sutras" page
            previousSutraButtonAll.disabled = index === 0;
            nextSutraButtonAll.disabled = index === sutras.length - 1;

        } else {
            // This else block handles going beyond the last sutra, or before the first
            // We can decide what happens here. For now, let's keep the last/first sutra displayed
            // and disable the respective button.
            // If you want to show a "no more sutras" message:
            currentSutraNameElem.textContent = "All Sutras displayed!";
            currentSutraShortDescElem.textContent = "You have viewed all the sutras.";
            currentSutraLongDescElem.textContent = "";
            currentSutraLongDescElem.style.display = 'none'; // Hide long description area
            timerDisplayAll.parentElement.style.display = 'none'; // Hide timer
            clearTimer(); // Ensure timer is stopped
            previousSutraButtonAll.disabled = currentSutraIndex === 0; // Keep buttons disabled if at ends
            nextSutraButtonAll.disabled = currentSutraIndex === sutras.length - 1;
        }
    }

    // Initial display when page loads
    displaySutraSequentially(currentSutraIndex);

    // Event listeners for Previous/Next buttons on 'all_sutras.html'
    previousSutraButtonAll.addEventListener('click', () => {
        if (currentSutraIndex > 0) {
            currentSutraIndex--;
            displaySutraSequentially(currentSutraIndex);
        }
    });

    nextSutraButtonAll.addEventListener('click', () => {
        if (currentSutraIndex < sutras.length - 1) {
            currentSutraIndex++;
            displaySutraSequentially(currentSutraIndex);
        } else {
             // Optional: if you want a specific message when reaching the end via next button
             currentSutraNameElem.textContent = "You've reached the end of the Sutras!";
             currentSutraShortDescElem.textContent = "Press 'Previous Sutra' to go back, or 'Back to Home'.";
             currentSutraLongDescElem.textContent = "";
             currentSutraLongDescElem.style.display = 'none';
             timerDisplayAll.parentElement.style.display = 'none';
             clearTimer();
             nextSutraButtonAll.disabled = true; // Ensure next is disabled
        }
    });


    backToHomeButtonAll.addEventListener('click', () => {
        clearTimer(); // Stop timer when navigating away
        window.location.href = 'index.html';
    });
}