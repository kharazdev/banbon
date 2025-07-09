// questions.js

const allQuestions = [
    // -------------- EASY (المرحلة السهلة) --------------
    { question: "ما هو لون الموز عندما يكون ناضجاً؟", options: ["أحمر", "أصفر", "أزرق", "أخضر"], answer: "أصفر", difficulty: "easy" },
    { question: "أي حيوان يقول 'مواء'؟", options: ["الكلب", "القطة", "البقرة", "الحصان"], answer: "القطة", difficulty: "easy" },
    { question: "كم عدد أصابع اليد الواحدة؟", options: ["ثلاثة", "عشرة", "خمسة", "سبعة"], answer: "خمسة", difficulty: "easy" },
    { question: "ما هو شكل الشمس في السماء؟", options: ["مربع", "مثلث", "دائرة", "نجمة"], answer: "دائرة", difficulty: "easy" },
    { question: "ماذا نشرب عندما نشعر بالعطش؟", options: ["الطعام", "الهواء", "الماء", "الرمل"], answer: "الماء", difficulty: "easy" },
    { question: "ما هو لون العشب؟", options: ["أزرق", "أبيض", "وردي", "أخضر"], answer: "أخضر", difficulty: "easy" },
    { question: "أي من هذه يعتبر من الفواكه؟", options: ["الجزر", "الخيار", "التفاح", "البطاطس"], answer: "التفاح", difficulty: "easy" },
    { question: "ماذا نستخدم لننام عليه في الليل؟", options: ["كرسي", "طاولة", "سرير", "صندوق"], answer: "سرير", difficulty: "easy" },
    { question: "ما هو صوت الكلب؟", options: ["صهيل", "زئير", "نباح", "خوار"], answer: "نباح", difficulty: "easy" },
    { question: "ما لون الدم؟", options: ["أزرق", "أصفر", "أخضر", "أحمر"], answer: "أحمر", difficulty: "easy" },
    { question: "ماذا نرتدي في أقدامنا لنحميها؟", options: ["قبعة", "قفاز", "حذاء", "وشاح"], answer: "حذاء", difficulty: "easy" },
    { question: "كم عجلة للسيارة؟", options: ["اثنان", "ثلاث", "أربع", "خمس"], answer: "أربع", difficulty: "easy" },
    { question: "ما هو لون الثلج؟", options: ["أسود", "أبيض", "بني", "رمادي"], answer: "أبيض", difficulty: "easy" },
    { question: "ماذا نستخدم لنرى به؟", options: ["أذننا", "أنفنا", "عيننا", "فمنا"], answer: "عيننا", difficulty: "easy" },
    { question: "أي حيوان يعطينا البيض؟", options: ["الخروف", "الدجاجة", "القطة", "الكلب"], answer: "الدجاجة", difficulty: "easy" },

    // -------------- MEDIUM (المرحلة المتوسطة) --------------
    { question: "كم عدد أيام الأسبوع؟", options: ["خمسة", "ستة", "سبعة", "ثمانية"], answer: "سبعة", difficulty: "medium" },
    { question: "أين تعيش الأسماك؟", options: ["في الغابة", "في الصحراء", "في البحر", "في السماء"], answer: "في البحر", difficulty: "medium" },
    { question: "ما هو الفصل الذي يكون فيه الجو بارداً جداً؟", options: ["الصيف", "الشتاء", "الربيع", "الخريف"], answer: "الشتاء", difficulty: "medium" },
    { question: "من هو الشخص الذي يعالجنا عندما نمرض؟", options: ["المهندس", "المعلم", "الشرطي", "الطبيب"], answer: "الطبيب", difficulty: "medium" },
    { question: "ما هي عاصمة جمهورية مصر العربية؟", options: ["الاسكندرية", "الأقصر", "القاهرة", "أسوان"], answer: "القاهرة", difficulty: "medium" },
    { question: "ما هو الشيء الذي يساعد الطيور على الطيران؟", options: ["أرجلها", "منقارها", "أجنحتها", "ذيلها"], answer: "أجنحتها", difficulty: "medium" },
    { question: "ماذا نستخدم للكتابة على الورق؟", options: ["ملعقة", "شوكة", "قلم", "مفتاح"], answer: "قلم", difficulty: "medium" },
    { question: "ما هي الحاسة التي نستخدمها لنشم رائحة الزهور؟", options: ["السمع", "البصر", "اللمس", "الشم"], answer: "الشم", difficulty: "medium" },
    { question: "ما هو الفصل الذي تتفتح فيه الأزهار؟", options: ["الصيف", "الشتاء", "الربيع", "الخريف"], answer: "الربيع", difficulty: "medium" },
    { question: "ما هي عاصمة المملكة العربية السعودية؟", options: ["جدة", "الدمام", "الرياض", "مكة"], answer: "الرياض", difficulty: "medium" },
    { question: "ماذا تفعل النحلة؟", options: ["تصنع الحرير", "تصنع العسل", "تنسج الخيوط", "تبني البيوت"], answer: "تصنع العسل", difficulty: "medium" },
    { question: "ماذا تحتاج النبتة لتنمو؟", options: ["عصير وحلويات", "ماء وشمس", "ظلام وبرد", "صخر ورمل"], answer: "ماء وشمس", difficulty: "medium" },
    { question: "أي كوكب يسمى 'الكوكب الأحمر'؟", options: ["الأرض", "المريخ", "زحل", "عطارد"], answer: "المريخ", difficulty: "medium" },
    { question: "كم عدد أركان الإسلام؟", options: ["ثلاثة", "أربعة", "خمسة", "ستة"], answer: "خمسة", difficulty: "medium" },
    { question: "ما هو شكل إشارة التوقف؟", options: ["دائرة", "مربع", "مثلث", "ثماني الأضلاع"], answer: "ثماني الأضلاع", difficulty: "medium" },
    { question: "من هو الشخص الذي يطفئ الحرائق؟", options: ["الخباز", "النجار", "رجل الإطفاء", "الطيار"], answer: "رجل الإطفاء", difficulty: "medium" },

    // -------------- HARD (المرحلة الصعبة) --------------
    { question: "من أين تشرق الشمس كل صباح؟", options: ["من الشمال", "من الجنوب", "من الشرق", "من الغرب"], answer: "من الشرق", difficulty: "hard" },
    { question: "ما هو الكوكب الذي نعيش عليه؟", options: ["المريخ", "الزهرة", "عطارد", "الأرض"], answer: "الأرض", difficulty: "hard" },
    { question: "كم عدد الصلوات المفروضة على المسلم في اليوم؟", options: ["ثلاث", "أربع", "خمس", "ست"], answer: "خمس", difficulty: "hard" },
    { question: "ما هو الحيوان الذي يُلقب بـ 'ملك الغابة'؟", options: ["النمر", "الفيل", "الأسد", "الدب"], answer: "الأسد", difficulty: "hard" },
    { question: "ما هو الشيء الذي يتجمد بالبرودة ويتحول إلى ثلج؟", options: ["الهواء", "النار", "الماء", "الزيت"], answer: "الماء", difficulty: "hard" },
    { question: "في أي شهر يصوم المسلمون؟", options: ["شوال", "رجب", "رمضان", "محرم"], answer: "رمضان", difficulty: "hard" },
    { question: "ما هي أكبر قارة في العالم؟", options: ["أفريقيا", "أوروبا", "آسيا", "أمريكا الشمالية"], answer: "آسيا", difficulty: "hard" },
    { question: "ما هو الحيوان الذي لديه أطول رقبة؟", options: ["الفيل", "الزرافة", "التمساح", "الحصان"], answer: "الزرافة", difficulty: "hard" },
    { question: "ما هو الشيء الذي يدور حول الأرض؟", options: ["الشمس", "القمر", "نجمة", "كوكب المريخ"], answer: "القمر", difficulty: "hard" },
    { question: "كم عدد ألوان قوس قزح؟", options: ["خمسة", "ستة", "سبعة", "ثمانية"], answer: "سبعة", difficulty: "hard" },
    { question: "من هو أول نبي؟", options: ["سيدنا محمد", "سيدنا عيسى", "سيدنا موسى", "سيدنا آدم"], answer: "سيدنا آدم", difficulty: "hard" },
    { question: "ما هو أكبر حيوان يعيش في المحيط؟", options: ["القرش", "الدولفين", "الحوت الأزرق", "الأخطبوط"], answer: "الحوت الأزرق", difficulty: "hard" },
    { question: "ما هي الحاسة التي تسمح لنا بتذوق الطعام؟", options: ["الشم", "اللمس", "السمع", "التذوق"], answer: "التذوق", difficulty: "hard" },
    { question: "أين تقع الكعبة المشرفة؟", options: ["في المدينة المنورة", "في القدس", "في مكة المكرمة", "في القاهرة"], answer: "في مكة المكرمة", difficulty: "hard" },

    // -------------- VERY HARD (المرحلة الصعبة جداً) --------------
    { question: "ما هو أسرع حيوان بري في العالم؟", options: ["الأسد", "الغزال", "الفهد", "الحصان"], answer: "الفهد", difficulty: "veryHard" },
    { question: "ما هو أكبر كوكب في مجموعتنا الشمسية؟", options: ["الأرض", "المشترى", "زحل", "المريخ"], answer: "المشترى", difficulty: "veryHard" },
    { question: "من هو النبي الذي بنى سفينة عظيمة لينجو من الطوفان؟", options: ["سيدنا موسى", "سيدنا عيسى", "سيدنا نوح", "سيدنا إبراهيم"], answer: "سيدنا نوح", difficulty: "veryHard" },
    { question: "ما هو أطول نهر في العالم؟", options: ["نهر الأمازون", "نهر النيل", "نهر الفرات", "نهر دجلة"], answer: "نهر النيل", difficulty: "veryHard" },
    { question: "ما هو أكبر محيط على وجه الأرض؟", options: ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"], answer: "المحيط الهادئ", difficulty: "veryHard" },
    { question: "كم عدد قلوب الأخطبوط؟", options: ["واحد", "اثنان", "ثلاثة", "أربعة"], answer: "ثلاثة", difficulty: "veryHard" },
    { question: "من هو النبي الذي كلم الله مباشرة؟", options: ["سيدنا يوسف", "سيدنا داود", "سيدنا موسى", "سيدنا سليمان"], answer: "سيدنا موسى", difficulty: "veryHard" },
    { question: "ماذا تسمى مجموعة النجوم التي تشكل صورة في السماء؟", options: ["كوكبة", "مجرة", "مذنب", "نيزك"], answer: "كوكبة", difficulty: "veryHard" }
];