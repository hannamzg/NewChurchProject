// Orthodox Church Data - Comprehensive Information
// كنيسة القديس جاورجيوس للروم الأرثوذكس - بيانات شاملة

// Saint George Information
export const saintGeorgeInfo = {
  name: 'القديس جاورجيوس',
  nameEn: 'Saint George',
  title: 'القديس جاورجيوس الشهيد',
  titleEn: 'Saint George the Martyr',
  feastDay: '23 أبريل / 6 مايو',
  feastDayEn: 'April 23 / May 6',
  patronOf: 'إنجلترا، جورجيا، فلسطين، الجنود، الفرسان',
  patronOfEn: 'England, Georgia, Palestine, Soldiers, Knights',
  description: 'القديس جاورجيوس هو أحد أشهر الشهداء في الكنيسة الأرثوذكسية. ولد في كبادوكيا في القرن الثالث الميلادي، وكان ضابطاً في الجيش الروماني. اشتهر بشجاعته وإيمانه القوي، ورفض عبادة الأوثان رغم التعذيب والتهديد بالموت. يُعتبر شفيعاً للجنود والفرسان، وله مكانة خاصة في فلسطين والشرق الأوسط.',
  descriptionEn: 'Saint George is one of the most famous martyrs in the Orthodox Church. Born in Cappadocia in the 3rd century AD, he was an officer in the Roman army. Known for his courage and strong faith, he refused to worship idols despite torture and death threats. He is considered the patron saint of soldiers and knights, with a special place in Palestine and the Middle East.',
  miracles: [
    'معجزة قتل التنين',
    'شفاء المرضى',
    'حماية الجنود في المعارك',
    'مساعدة المحتاجين'
  ],
  miraclesEn: [
    'Dragon slaying miracle',
    'Healing the sick',
    'Protecting soldiers in battle',
    'Helping the needy'
  ],
  icon: '⚔️',
  colors: ['أحمر', 'أبيض', 'أزرق'],
  colorsEn: ['Red', 'White', 'Blue']
};

// Orthodox Christian Feasts and Holidays
export const orthodoxFeasts = {
  majorFeasts: [
    {
      id: 1,
      name: 'عيد الميلاد المجيد',
      nameEn: 'Christmas',
      date: '25 ديسمبر / 7 يناير',
      dateEn: 'December 25 / January 7',
      description: 'احتفال بميلاد السيد المسيح في بيت لحم',
      descriptionEn: 'Celebration of the birth of Jesus Christ in Bethlehem',
      importance: 'أعظم الأعياد',
      importanceEn: 'Greatest Feast',
      traditions: ['القداس الإلهي', 'تبادل الهدايا', 'وجبة عيد الميلاد', 'زيارة الأقارب'],
      traditionsEn: ['Divine Liturgy', 'Gift exchange', 'Christmas meal', 'Visiting relatives']
    },
    {
      id: 2,
      name: 'عيد القيامة المجيد',
      nameEn: 'Easter',
      date: 'متغير حسب التقويم الشرقي',
      dateEn: 'Variable according to Eastern calendar',
      description: 'احتفال بقيامة السيد المسيح من الموت',
      descriptionEn: 'Celebration of the resurrection of Jesus Christ from death',
      importance: 'أعظم الأعياد',
      importanceEn: 'Greatest Feast',
      traditions: ['القداس الإلهي', 'البيض الملون', 'وجبة عيد القيامة', 'الترحيب بالمسيح'],
      traditionsEn: ['Divine Liturgy', 'Colored eggs', 'Easter meal', 'Christ is Risen greeting']
    },
    {
      id: 3,
      name: 'عيد الظهور الإلهي',
      nameEn: 'Epiphany',
      date: '6 يناير / 19 يناير',
      dateEn: 'January 6 / January 19',
      description: 'احتفال بمعمودية السيد المسيح في نهر الأردن',
      descriptionEn: 'Celebration of the baptism of Jesus Christ in the Jordan River',
      importance: 'عيد رئيسي',
      importanceEn: 'Major Feast',
      traditions: ['تكريس المياه', 'البركة على المياه', 'الغطس في المياه المقدسة'],
      traditionsEn: ['Water blessing', 'Blessing of waters', 'Diving into holy water']
    },
    {
      id: 4,
      name: 'عيد الصعود',
      nameEn: 'Ascension',
      date: '40 يوماً بعد القيامة',
      dateEn: '40 days after Easter',
      description: 'احتفال بصعود السيد المسيح إلى السماء',
      descriptionEn: 'Celebration of the ascension of Jesus Christ to heaven',
      importance: 'عيد رئيسي',
      importanceEn: 'Major Feast',
      traditions: ['القداس الإلهي', 'الصلاة الخاصة'],
      traditionsEn: ['Divine Liturgy', 'Special prayers']
    },
    {
      id: 5,
      name: 'عيد العنصرة',
      nameEn: 'Pentecost',
      date: '50 يوماً بعد القيامة',
      dateEn: '50 days after Easter',
      description: 'احتفال بنزول الروح القدس على الرسل',
      descriptionEn: 'Celebration of the descent of the Holy Spirit on the apostles',
      importance: 'عيد رئيسي',
      importanceEn: 'Major Feast',
      traditions: ['القداس الإلهي', 'تزيين الكنيسة بالخضرة'],
      traditionsEn: ['Divine Liturgy', 'Decorating church with greenery']
    }
  ],
  
  minorFeasts: [
    {
      id: 1,
      name: 'عيد رفع الصليب الكريم',
      nameEn: 'Exaltation of the Cross',
      date: '14 سبتمبر',
      dateEn: 'September 14',
      description: 'احتفال برفع الصليب المقدس'
    },
    {
      id: 2,
      name: 'عيد دخول السيد المسيح إلى الهيكل',
      nameEn: 'Presentation of Christ',
      date: '2 فبراير',
      dateEn: 'February 2',
      description: 'احتفال بدخول المسيح الطفل إلى الهيكل'
    },
    {
      id: 3,
      name: 'عيد البشارة',
      nameEn: 'Annunciation',
      date: '25 مارس',
      dateEn: 'March 25',
      description: 'احتفال ببشارة الملاك للعذراء مريم'
    },
    {
      id: 4,
      name: 'عيد رفع السيد المسيح إلى السماء',
      nameEn: 'Transfiguration',
      date: '6 أغسطس',
      dateEn: 'August 6',
      description: 'احتفال بتجلي السيد المسيح على الجبل'
    }
  ],

  fastingPeriods: [
    {
      id: 1,
      name: 'الصوم الكبير',
      nameEn: 'Great Lent',
      duration: '40 يوماً',
      durationEn: '40 days',
      description: 'فترة صوم قبل عيد القيامة',
      descriptionEn: 'Fasting period before Easter',
      rules: ['عدم تناول اللحوم', 'عدم تناول الألبان', 'الصوم حتى الظهر']
    },
    {
      id: 2,
      name: 'صوم الميلاد',
      nameEn: 'Nativity Fast',
      duration: '40 يوماً',
      durationEn: '40 days',
      description: 'فترة صوم قبل عيد الميلاد',
      descriptionEn: 'Fasting period before Christmas',
      rules: ['عدم تناول اللحوم', 'عدم تناول الألبان', 'الصوم حتى الظهر']
    },
    {
      id: 3,
      name: 'صوم الرسل',
      nameEn: 'Apostles Fast',
      duration: 'متغير',
      durationEn: 'Variable',
      description: 'فترة صوم بعد عيد العنصرة',
      descriptionEn: 'Fasting period after Pentecost'
    }
  ]
};

// Information about Jesus Christ
export const jesusChristInfo = {
  basicInfo: {
    name: 'يسوع المسيح',
    nameEn: 'Jesus Christ',
    titles: ['المسيح', 'ابن الله', 'المخلص', 'الملك', 'الراعي الصالح'],
    titlesEn: ['Christ', 'Son of God', 'Savior', 'King', 'Good Shepherd'],
    birth: 'بيت لحم، فلسطين',
    birthEn: 'Bethlehem, Palestine',
    ministry: '30 سنة',
    ministryEn: '30 years old',
    crucifixion: 'الجلجلة، القدس',
    crucifixionEn: 'Golgotha, Jerusalem',
    resurrection: 'اليوم الثالث',
    resurrectionEn: 'Third day'
  },

  teachings: [
    {
      id: 1,
      title: 'الوصايا العشر',
      titleEn: 'Ten Commandments',
      description: 'القوانين الأساسية التي أعطاها الله لموسى',
      descriptionEn: 'Basic laws given by God to Moses'
    },
    {
      id: 2,
      title: 'الموعظة على الجبل',
      titleEn: 'Sermon on the Mount',
      description: 'تعاليم المسيح الأساسية عن المحبة والغفران',
      descriptionEn: 'Basic teachings of Christ about love and forgiveness'
    },
    {
      id: 3,
      title: 'مثل الخروف الضال',
      titleEn: 'Parable of the Lost Sheep',
      description: 'مثل عن محبة الله للخطاة',
      descriptionEn: 'Parable about God\'s love for sinners'
    },
    {
      id: 4,
      title: 'مثل السامري الصالح',
      titleEn: 'Parable of the Good Samaritan',
      description: 'مثل عن محبة القريب',
      descriptionEn: 'Parable about loving your neighbor'
    }
  ],

  miracles: [
    {
      id: 1,
      name: 'إقامة لعازر من الموت',
      nameEn: 'Raising Lazarus from the dead',
      description: 'معجزة إقامة لعازر بعد أربعة أيام من موته',
      descriptionEn: 'Miracle of raising Lazarus after four days of death'
    },
    {
      id: 2,
      name: 'إشباع الخمسة آلاف',
      nameEn: 'Feeding the five thousand',
      description: 'معجزة إشباع خمسة آلاف شخص بخمسة أرغفة وسمكتين',
      descriptionEn: 'Miracle of feeding five thousand people with five loaves and two fish'
    },
    {
      id: 3,
      name: 'شفاء الأعمى',
      nameEn: 'Healing the blind',
      description: 'شفاء الأعمى منذ الولادة',
      descriptionEn: 'Healing the man born blind'
    },
    {
      id: 4,
      name: 'المشي على الماء',
      nameEn: 'Walking on water',
      description: 'معجزة المشي على مياه بحيرة طبريا',
      descriptionEn: 'Miracle of walking on the waters of Lake Tiberias'
    }
  ],

  parables: [
    {
      id: 1,
      name: 'مثل الزارع',
      nameEn: 'Parable of the Sower',
      description: 'مثل عن كلمة الله وكيفية استقبالها',
      descriptionEn: 'Parable about God\'s word and how to receive it'
    },
    {
      id: 2,
      name: 'مثل الابن الضال',
      nameEn: 'Parable of the Prodigal Son',
      description: 'مثل عن محبة الآب للابن الضال',
      descriptionEn: 'Parable about the Father\'s love for the prodigal son'
    },
    {
      id: 3,
      name: 'مثل الكنز المخفي',
      nameEn: 'Parable of the Hidden Treasure',
      description: 'مثل عن قيمة ملكوت السماوات',
      descriptionEn: 'Parable about the value of the kingdom of heaven'
    }
  ]
};

// Information about the Virgin Mary
export const virginMaryInfo = {
  basicInfo: {
    name: 'العذراء مريم',
    nameEn: 'Virgin Mary',
    titles: ['والدة الإله', 'العذراء', 'الطاهرة', 'المباركة', 'الشفيع'],
    titlesEn: ['Theotokos', 'Virgin', 'Pure', 'Blessed', 'Intercessor'],
    parents: 'يواقيم وحنة',
    parentsEn: 'Joachim and Anna',
    spouse: 'يوسف النجار',
    spouseEn: 'Joseph the Carpenter',
    son: 'يسوع المسيح',
    sonEn: 'Jesus Christ'
  },

  majorFeasts: [
    {
      id: 1,
      name: 'عيد البشارة',
      nameEn: 'Annunciation',
      date: '25 مارس',
      dateEn: 'March 25',
      description: 'احتفال ببشارة الملاك جبرائيل للعذراء مريم',
      descriptionEn: 'Celebration of the angel Gabriel\'s annunciation to the Virgin Mary'
    },
    {
      id: 2,
      name: 'عيد الميلاد',
      nameEn: 'Nativity of the Virgin',
      date: '8 سبتمبر',
      dateEn: 'September 8',
      description: 'احتفال بميلاد العذراء مريم',
      descriptionEn: 'Celebration of the birth of the Virgin Mary'
    },
    {
      id: 3,
      name: 'عيد رقاد العذراء',
      nameEn: 'Dormition of the Virgin',
      date: '15 أغسطس',
      dateEn: 'August 15',
      description: 'احتفال برقاد العذراء مريم',
      descriptionEn: 'Celebration of the dormition of the Virgin Mary'
    },
    {
      id: 4,
      name: 'عيد دخول العذراء إلى الهيكل',
      nameEn: 'Presentation of the Virgin',
      date: '21 نوفمبر',
      dateEn: 'November 21',
      description: 'احتفال بدخول العذراء مريم إلى الهيكل',
      descriptionEn: 'Celebration of the Virgin Mary\'s entry into the temple'
    }
  ],

  prayers: [
    {
      id: 1,
      name: 'صلاة العذراء',
      nameEn: 'Hail Mary',
      text: 'السلام عليك يا مريم، يا ممتلئة نعمة، الرب معك، مباركة أنت في النساء، ومبارك ثمرة بطنك يسوع',
      textEn: 'Hail Mary, full of grace, the Lord is with you, blessed are you among women, and blessed is the fruit of your womb, Jesus'
    },
    {
      id: 2,
      name: 'صلاة الشفاعة',
      nameEn: 'Intercession Prayer',
      text: 'يا والدة الإله، اشفعي فينا',
      textEn: 'O Theotokos, intercede for us'
    }
  ],

  apparitions: [
    {
      id: 1,
      name: 'ظهور العذراء في فاطيما',
      nameEn: 'Our Lady of Fatima',
      location: 'فاطيما، البرتغال',
      locationEn: 'Fatima, Portugal',
      year: '1917',
      description: 'ظهور العذراء مريم لثلاثة أطفال في فاطيما',
      descriptionEn: 'Apparition of the Virgin Mary to three children in Fatima'
    },
    {
      id: 2,
      name: 'ظهور العذراء في لورد',
      nameEn: 'Our Lady of Lourdes',
      location: 'لورد، فرنسا',
      locationEn: 'Lourdes, France',
      year: '1858',
      description: 'ظهور العذراء مريم لبرناديت سوبيرو',
      descriptionEn: 'Apparition of the Virgin Mary to Bernadette Soubirous'
    }
  ],

  icons: [
    {
      id: 1,
      name: 'أيقونة العذراء والطفل',
      nameEn: 'Virgin and Child Icon',
      description: 'أيقونة العذراء مريم تحمل الطفل يسوع',
      descriptionEn: 'Icon of the Virgin Mary holding the child Jesus'
    },
    {
      id: 2,
      name: 'أيقونة العذراء الحزينة',
      nameEn: 'Our Lady of Sorrows',
      description: 'أيقونة العذراء مريم في حزنها على ابنها',
      descriptionEn: 'Icon of the Virgin Mary in sorrow for her son'
    }
  ]
};

// Orthodox Church Structure
export const orthodoxChurchStructure = {
  hierarchy: [
    {
      id: 1,
      title: 'البطريرك',
      titleEn: 'Patriarch',
      description: 'رئيس الكنيسة الأرثوذكسية',
      descriptionEn: 'Head of the Orthodox Church',
      responsibilities: ['القيادة الروحية', 'إدارة الكنيسة', 'العلاقات الخارجية'],
      responsibilitiesEn: ['Spiritual leadership', 'Church administration', 'External relations']
    },
    {
      id: 2,
      title: 'المطران',
      titleEn: 'Metropolitan',
      description: 'رئيس الأبرشية',
      descriptionEn: 'Head of the diocese',
      responsibilities: ['إدارة الأبرشية', 'الرعاية الروحية', 'إدارة الكهنة'],
      responsibilitiesEn: ['Diocese administration', 'Spiritual care', 'Priest management']
    },
    {
      id: 3,
      title: 'الأسقف',
      titleEn: 'Bishop',
      description: 'رئيس الأبرشية المحلية',
      descriptionEn: 'Head of local diocese',
      responsibilities: ['الرعاية الروحية', 'إدارة الكنيسة', 'الخدمة الكنسية'],
      responsibilitiesEn: ['Spiritual care', 'Church administration', 'Ecclesiastical service']
    },
    {
      id: 4,
      title: 'الكاهن',
      titleEn: 'Priest',
      description: 'خادم الكنيسة المحلية',
      descriptionEn: 'Local church servant',
      responsibilities: ['القداس الإلهي', 'الأسرار المقدسة', 'الرعاية الروحية'],
      responsibilitiesEn: ['Divine Liturgy', 'Holy Sacraments', 'Spiritual care']
    },
    {
      id: 5,
      title: 'الشماس',
      titleEn: 'Deacon',
      description: 'مساعد الكاهن في الخدمة',
      descriptionEn: 'Priest\'s assistant in service',
      responsibilities: ['مساعدة الكاهن', 'قراءة الإنجيل', 'خدمة المذبح'],
      responsibilitiesEn: ['Assisting the priest', 'Reading the Gospel', 'Altar service']
    }
  ],

  sacraments: [
    {
      id: 1,
      name: 'المعمودية',
      nameEn: 'Baptism',
      description: 'سر الدخول إلى الكنيسة',
      descriptionEn: 'Sacrament of entry into the Church',
      age: 'أي عمر',
      ageEn: 'Any age',
      requirements: ['الماء المقدس', 'الكاهن', 'العرابين'],
      requirementsEn: ['Holy water', 'Priest', 'Godparents']
    },
    {
      id: 2,
      name: 'الميرون',
      nameEn: 'Chrismation',
      description: 'سر الميرون المقدس',
      descriptionEn: 'Sacrament of Holy Chrism',
      age: 'بعد المعمودية مباشرة',
      ageEn: 'Immediately after baptism',
      requirements: ['الميرون المقدس', 'الكاهن'],
      requirementsEn: ['Holy Chrism', 'Priest']
    },
    {
      id: 3,
      name: 'القربان المقدس',
      nameEn: 'Holy Communion',
      description: 'سر القربان المقدس',
      descriptionEn: 'Sacrament of Holy Communion',
      age: 'بعد المعمودية والميرون',
      ageEn: 'After baptism and chrismation',
      requirements: ['الخبز والخمر', 'الكاهن', 'الاستعداد الروحي'],
      requirementsEn: ['Bread and wine', 'Priest', 'Spiritual preparation']
    },
    {
      id: 4,
      name: 'الاعتراف',
      nameEn: 'Confession',
      description: 'سر الاعتراف والغفران',
      descriptionEn: 'Sacrament of confession and forgiveness',
      age: 'أي عمر',
      ageEn: 'Any age',
      requirements: ['الكاهن', 'الندم الصادق', 'الاعتراف بالخطايا'],
      requirementsEn: ['Priest', 'Sincere repentance', 'Confession of sins']
    },
    {
      id: 5,
      name: 'الزواج',
      nameEn: 'Marriage',
      description: 'سر الزواج المقدس',
      descriptionEn: 'Sacrament of Holy Marriage',
      age: '18 سنة فما فوق',
      ageEn: '18 years and above',
      requirements: ['العروسين', 'الكاهن', 'الشهود', 'الوثائق المطلوبة'],
      requirementsEn: ['Bride and groom', 'Priest', 'Witnesses', 'Required documents']
    },
    {
      id: 6,
      name: 'الكهنوت',
      nameEn: 'Ordination',
      description: 'سر الكهنوت المقدس',
      descriptionEn: 'Sacrament of Holy Ordination',
      age: '30 سنة فما فوق',
      ageEn: '30 years and above',
      requirements: ['الرجل المتزوج أو العازب', 'الدراسة اللاهوتية', 'الأسقف'],
      requirementsEn: ['Married or single man', 'Theological education', 'Bishop']
    },
    {
      id: 7,
      name: 'مسحة المرضى',
      nameEn: 'Anointing of the Sick',
      description: 'سر مسحة المرضى',
      descriptionEn: 'Sacrament of anointing the sick',
      age: 'أي عمر',
      ageEn: 'Any age',
      requirements: ['الكاهن', 'الزيت المقدس', 'المريض'],
      requirementsEn: ['Priest', 'Holy oil', 'Sick person']
    }
  ]
};

// Orthodox Prayers and Hymns
export const orthodoxPrayers = {
  dailyPrayers: [
    {
      id: 1,
      name: 'صلاة الصباح',
      nameEn: 'Morning Prayer',
      text: 'أيها الرب يسوع المسيح، ابن الله، ارحمني أنا الخاطئ',
      textEn: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner'
    },
    {
      id: 2,
      name: 'صلاة المساء',
      nameEn: 'Evening Prayer',
      text: 'أيها الرب يسوع المسيح، ابن الله، ارحمني أنا الخاطئ',
      textEn: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner'
    },
    {
      id: 3,
      name: 'صلاة الأبانا',
      nameEn: 'Our Father',
      text: 'أبانا الذي في السماوات، ليتقدس اسمك، ليأت ملكوتك، لتكن مشيئتك كما في السماء كذلك على الأرض',
      textEn: 'Our Father who art in heaven, hallowed be thy name, thy kingdom come, thy will be done on earth as it is in heaven'
    }
  ],

  hymns: [
    {
      id: 1,
      name: 'ترنيمة المجد لله',
      nameEn: 'Glory to God',
      text: 'المجد لله في الأعالي، وعلى الأرض السلام، وبالناس المسرة',
      textEn: 'Glory to God in the highest, and on earth peace, goodwill toward men'
    },
    {
      id: 2,
      name: 'ترنيمة القيامة',
      nameEn: 'Resurrection Hymn',
      text: 'المسيح قام من بين الأموات، ووطئ الموت بالموت، ووهب الحياة للذين في القبور',
      textEn: 'Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life'
    }
  ]
};

// Orthodox Saints
export const orthodoxSaints = [
  {
    id: 1,
    name: 'القديس نيقولاوس',
    nameEn: 'Saint Nicholas',
    feastDay: '6 ديسمبر',
    feastDayEn: 'December 6',
    description: 'أسقف ميرا، شفيع الأطفال والبحارة',
    descriptionEn: 'Bishop of Myra, patron saint of children and sailors'
  },
  {
    id: 2,
    name: 'القديس باسيليوس',
    nameEn: 'Saint Basil',
    feastDay: '1 يناير',
    feastDayEn: 'January 1',
    description: 'أسقف قيصرية، أحد آباء الكنيسة',
    descriptionEn: 'Bishop of Caesarea, one of the Church Fathers'
  },
  {
    id: 3,
    name: 'القديس يوحنا الذهبي الفم',
    nameEn: 'Saint John Chrysostom',
    feastDay: '13 نوفمبر',
    feastDayEn: 'November 13',
    description: 'بطريرك القسطنطينية، معلم الكنيسة',
    descriptionEn: 'Patriarch of Constantinople, teacher of the Church'
  }
];

// Orthodox Church Calendar
export const orthodoxCalendar = {
  seasons: [
    {
      id: 1,
      name: 'زمن الميلاد',
      nameEn: 'Nativity Season',
      duration: '40 يوماً',
      durationEn: '40 days',
      description: 'فترة الاستعداد لعيد الميلاد',
      descriptionEn: 'Preparation period for Christmas'
    },
    {
      id: 2,
      name: 'زمن القيامة',
      nameEn: 'Easter Season',
      duration: '50 يوماً',
      durationEn: '50 days',
      description: 'فترة الاحتفال بقيامة المسيح',
      descriptionEn: 'Celebration period of Christ\'s resurrection'
    }
  ],

  colors: [
    {
      id: 1,
      color: 'أبيض',
      colorEn: 'White',
      usage: 'أعياد المسيح والقديسين',
      usageEn: 'Feasts of Christ and saints'
    },
    {
      id: 2,
      color: 'أحمر',
      colorEn: 'Red',
      usage: 'أعياد الشهداء والروح القدس',
      usageEn: 'Feasts of martyrs and Holy Spirit'
    },
    {
      id: 3,
      color: 'أزرق',
      colorEn: 'Blue',
      usage: 'أعياد العذراء مريم',
      usageEn: 'Feasts of the Virgin Mary'
    },
    {
      id: 4,
      color: 'أخضر',
      colorEn: 'Green',
      usage: 'الأحد العادي',
      usageEn: 'Ordinary Sunday'
    },
    {
      id: 5,
      color: 'بنفسجي',
      colorEn: 'Purple',
      usage: 'فترات الصوم',
      usageEn: 'Fasting periods'
    }
  ]
};
