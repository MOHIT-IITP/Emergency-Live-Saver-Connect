navigator.geolocation.getCurrentPosition(function(position) {
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;

    // List of hospitals with their details
    var hospitals = [
        {
            name: "indira gandhi institute of cardiology",
            latitude : 25.6096137328383, 
            longitude: 85.08306495057263,
            address:"patna university campus, patna, bihar 800004",
            website:"http://www.igicpatna.edu.in/",
            treatment :["cardiology"],
            image: "../hospImg/0.png",
            phone : "0612–2379107",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.855668290954!2d85.0873588757237!3d25.609711877447673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1719040348471!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            name: "ford hospital",
            address: "new bypass, nh-30, khemnichak, new jaganpura, ps, ramkrishan nagar, patna, bihar 800027", 
            latitude : 25.584503820752317, 
            longitude: 85.16307556174921,
            website:"https://www.fordhospital.org",
            treatment :["advance critical care","cardiac surgery","ent."," internal medicine."," gen. & laproscopy."," nutrition and dietetics."," obs and gynaecology."," plastic and reconstructive."," urology."],
            image: "../hospImg/1.jpg",
            phone : "+91 93863 92846",
            map : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28783.87281961528!2d85.11248981364444!3d25.605444507907546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58a0b631989d%3A0x17acc585f61d0b68!2sFord%20Hospital%20and%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718958084170!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="-referrer-when-downgrade"></iframe>'
        },
        {
            name: "kurji holy family hospital",
            latitude : 25.63593014306969,   
            longitude: 85.11166426671498,
            address: "p.o, danapur - bankipur rd, sadaquat ashram, kurji, patna, bihar 800010",
            website:"https://www.kurjihospital.in/",
            treatment :["obstetrics and gynaecology","pediatrics","medicine,surgery","orthopaedics","ent","cardiology","dermatology (skin)","neurology","ophthalmology (eye)","urology,plastic surgery","alternative medicine","acupressure","community health centre"],
            image: "../hospImg/2.jpg",
            phone :" 06122264117",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0668533548605!2d85.1090893758942!3d25.6359066137907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d14e932db5%3A0x6bbc4de8af821248!2sKurji%20Holy%20Family%20Hospital!5e0!3m2!1sen!2sin!4v1718958517639!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            name: "jagdish memorial hospital",
            latitude : 25.6216137328383, 
            longitude: 85.16306495057263,
            address:" ds - 2, lohiya nagar, behind geological survey of india, kankarbagh, patna, bihar 800020",
            website:"http://jagdishhospital.com/",
            treatment :["general medicine","cardiology","nephrology","gastroentrology","paediatrics","neuro surgery","plastic surgery","orthopaedic","laproscopic surgery","maxillofacial surgery","oncology","opthlamolgy","ent","neurology","dermatology","radiology","general surgery","urology,pathology","gynaecology & obs","intenvist"],
            image: "../hospImg/3.jpg",
            phone :  "06122361414",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1778787969224!2d85.15464307589325!3d25.599004815307964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5889ddf11b2b%3A0x2a0aa385d1d57e2!2sJagdish%20Memorial%20Hospital%20-%20Top%20Hospital%20in%20Patna!5e0!3m2!1sen!2sin!4v1718958557285!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "dr. bimal hospital & research center",
            latitude : 25.62009793855376,  
            longitude: 85.04347128556195,
            address:" raj ballabh singh dwar, narayan path adarsh colony, bailey rd, saguna more, patna, bihar 801503",
            website:"http://drbimalhospital.in/",
            treatment :["neurology","physiotherapy","anaesthesiology","urology","general medicine","ent","paediatrics","oncology","cardiology","nephrology","gastroenterology","gynaecologist & obstetrician","laparoscopic & general","radiology"],
            image: "../hospImg/4.jpg",
            phone :  "07070931814",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.54295326628!2d85.04089597589379!3d25.62009941444084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56674e9f9d57%3A0xdb8423da8fc229ed!2sDr.%20Bimal%20Hospital%20and%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718958590287!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "satyam hospital",
            latitude : 25.60583238449262,  
            longitude: 85.0889234414594,
            address:" brahmasthan rd, sheikhpura, patna, bihar 800014",
            website:"http://satyamhospital.net/",
            treatment :["cardiology","orthopedics","gynecology","ent","neurology","neuro surgery","general surgery","gastroenterology","medicine","pulmonology","nephrology","oncology"],
            image: "../hospImg/5.jpg",
            phone :  "09334439782",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9724255046845!2d85.08635497589341!3d25.605832515027366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7eefe07c811d%3A0xe1c8d874fc29aef9!2sSatyam%20Hospital!5e0!3m2!1sen!2sin!4v1718958620089!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "patna medical college & hospital (pmch)",
            latitude : 25.620536732249885,  
            longitude:85.16123888500567,
            address: "j5c6+6f5, patna junction, fraser road area, patna, bihar 800001",
            website:"https://patnamedicalcollege.edu.in/",
            treatment :["gen. medicine","pediatrics","tb & respiratory medicine","psychiatry","dermatology","gen. surgery","orthopedics","ophthalmology","ent","ob & gyn"],
            image: "../hospImg/6.jpg",
            phone : "06122300343",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5305446280872!2d85.1586646758938!3d25.620511514424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d0449e4c87%3A0xcb91e110f94bc87!2sPatna%20Medical%20College%20%26%20Hospital%20(PMCH)%2C%20Patna!5e0!3m2!1sen!2sin!4v1718958649568!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "nalanda medical college hospital",
            latitude : 25.60089355666145,  
            longitude: 85.19864157939935,
            address: "agam kuan, sadikpur, patna, bihar 800007",
            website:"http://nmchpatna.org/",
            treatment :["opd services in medicine","surgery","eye","ent","obstetric & gynaecology","paediatrics", "orthopedics","psychiatry","dental opd","opd services in certain super-specialty departments","radiology department"],
            image: "../hospImg/7.jpg",
            phone :  "06122918523",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.096708028114!2d85.19568117589331!3d25.6017025151971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f4f392bb16f%3A0x621751b6cbcbcbda!2sNalanda%20Medical%20College%20Hospital!5e0!3m2!1sen!2sin!4v1718958682535!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "heart hospital",
            latitude : 25.599987723061787,  
            longitude: 85.15992593799307,
            address:" b, 29, kankarbagh rd, near chanakya hospital, mahatma gandhi nagar, patrakar nagar, patna, bihar 800020",
            website:"http://hearthospitalpatna.com/",
            treatment :["cardiology","critical care","physiotherapy","laboratory medicine","cardiac surgery"],
            image: "../hospImg/8.jpg",
            phone :" 07061222641",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1484708480825!2d85.1573527758933!3d25.599982215267687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58918d6f4a1b%3A0xe872533ee3f10280!2sHeart%20Hospital!5e0!3m2!1sen!2sin!4v1718958709129!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "apollo trauma centre",
            latitude : 25.6216137328383, 
            longitude: 85.16306495057263,
            address: "p c colony road rbi flats colony, bankman colony next to mutant's gym, opposite momos nation cafe, patna, bihar 800020",
            website:"https://www.apollohospitals.com/",
            treatment :[""],
            image: "../hospImg/9.jpg",
            phone :  "06123251003",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1403047964527!2d85.15357027589329!3d25.600253615256673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7ee5a955accb%3A0x8a9c38e6318ebb1f!2sApollo%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1718958750511!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            name: "rajeshwar hospital ",
            latitude : 25.601412226402893,   
            longitude: 85.16862167465446,
            address: "kankarbagh main rd, near bahadurpur flyover, new colony, mahatma gandhi nagar, kankarbagh, patna, bihar 800020",
            website:"http://www.rajeshwarhospital.com/",
            treatment :["cardiology"," cardiothoracic vascular surgery (ctvs) ","gastroenterology","nephrology","neurology,neuro surgery","oncology","plastic surgery & burn unit","spine surgery","urology","anesthesia","dental & maxillofacial surgery","dermatology","ent","general medicine","general and laparoscopic surgery","nutrition and dietetics"],
            image: "../hospImg/10.jpg",
            phone : " 08877700023",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.105726058999!2d85.16605187589329!3d25.601402815209376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5895fff71e7b%3A0x198927ed0f12198c!2sRajeshwar%20Hospital%20%7C%204A%20Heart%20Hospital%20%2C%20Patna%20%2CBihar!5e0!3m2!1sen!2sin!4v1718958789294!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "pulse emergency hospital pvt ltd ",
            latitude : 25.584439148698724,  
            longitude: 85.15484171749765,
            address: "new bye pass road, opposite patna central school road, east indira nagar, kankarbagh, patna, bihar 800020",
            website:"http://www.pulseemergencyhospital.com/",
            treatment :["cardiology","nephrology","urology","obstetric & gynaecology","oncology","neuro surgery","laparoscopic surgery","gastro surgery","plastic surgery","ent","general surgery","pathology","radiology","respiratory medicine","general medicine","endocrinology"],
            image: "../hospImg/11.jpg",
            phone : " 09386049762",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.616084757558!2d85.15226947589291!3d25.584436515906358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58821f751757%3A0x4bff502b6d30ec05!2sPulse%20Emergency%20Hospital%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718958821482!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "samriddhi nursing home ",
            latitude : 25.612651807897056,    
            longitude: 85.14664601409254,
            address:" gali number 3, ali nagar colony, salimpur ahra, kadamkuan, patna, bihar 800003",
            website:"",
            treatment :[""],
            image: "../hospImg/12.jpg",
            phone :  "06122321496",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7670475493805!2d85.14407197589357!3d25.612656014746907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f640000001%3A0x1e4c8c56619a3916!2sSamriddhi%20Nursing%20Home%20(Dr%20Neeraj%20Sinha)%20-%20Best%20Laparoscopic%20Surgeon%20In%20Kadamkuan%20Patna!5e0!3m2!1sen!2sin!4v1718958855654!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "medizone hospitals pvt ltd",
            latitude : 25.60036040558017,  
            longitude:  85.1469514254184,
            address: "43, migh rd, behind shalimar sweets, kankarbagh colony more, kankarbagh, mithapur, patna, bihar 800020",
            website:"",
            treatment :[""],
            image: "../hospImg/13.jpg",
            phone : " 07677190002",
            map : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1370130785326!2d85.14437877589327!3d25.600363015252103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587d86a62423%3A0x3fb1b547db07ccef!2sMedizone%20Hospitals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718958883261!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "arvind hospital pvt. ltd",
            latitude : 25.60583238449262,  
            longitude: 85.0889234414594,
            address: "j597+fcr, ashok rajpath rd, near khudabaksh library, makhania kuan, lalbagh, patna, bihar 800004",
            website:"",
            treatment :[""],
            image: "../hospImg/14.jpg",
            phone : "",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.583923635813!2d85.16093927589375!3d25.618738714496935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d6420b558b%3A0xbdf6a723f1715a5c!2sArvind%20Hospital%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718958916569!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "jeevak heart hospital",
            latitude : 25.601399129846495,   
            longitude: 85.15866988483384,
            address: "6, doctors colony, kankarbagh, vijay nagar, patna, bihar 800020",
            website:"http://www.jeevakhospital.com/",
            treatment :["ecg","chest x-ray","routine lab investigations","echo colour doppler with","trans esophageal echocardiography","treadmill test (tmt)","holter monitoring stress echo (dobutamine stress test)","coronary artery angiography (cag)"],
            image: "../hospImg/15.jpg",
            phone : " 06122345895",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1059818242047!2d85.1560967758933!3d25.601394315209742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589205e4c31d%3A0xdd2e096de4f10a91!2sJeevak%20Heart%20Hospital!5e0!3m2!1sen!2sin!4v1718958946436!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "apollo clinic",
            latitude : 25.600338536799157,  
            longitude:  85.15618136645483,
            address: "main rd, rbi flats colony, lohia nagar, patna, bihar 800020",
            website:"http://www.apolloclinic.com/",
            treatment :[""],
            image: "../hospImg/16.jpg",
            phone :  "18605007788",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1378560259545!2d85.15138939678954!3d25.600334999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588e796d3a39%3A0x5736a2f0c77707f3!2sApollo%20Clinic%20-%20Best%20Clinic%20for%20General%20Medicine%2C%20Gynaecologist%2C%20Paediatrics%2C%20ENT%2C%20Orthopaedics%2C%20Cardiologist%2C%20Physiotherapy%2C%20Dermatology%2C%20Treatments%20in%20Patna!5e0!3m2!1sen!2sin!4v1718958986190!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "a b eye institute",
            latitude : 25.60583238449262,  
            longitude: 85.0889234414594,
            address:" baldev sahay rd, new area, ghrounda, patna, bihar 800003",
            website:"https://abeye.org/",
            treatment :["lasik (to remove glasses)","cataract surgery (phaco without injection)","laser biometry(a-scan)","corneral topography & specular","post cataract yag laser","ophthalmic (b- scan) ultrasound","optical biometry","glaucoma surgery","field analysis","oculoplasty surgery","retinal surgeries","intravitreal injections","retinal lasers","ffaoctoct-a","rop screening","pediatric ophthalmology services","eto flash sterlization"],
            image: "../hospImg/17.jpg",
            phone : " 09431622222",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1378560259545!2d85.15138939678954!3d25.600334999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f4ec8e298f%3A0xa8e82df3a837ffa5!2sA%20B%20Eye%20Institute!5e0!3m2!1sen!2sin!4v1718959023436!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "shri ram hospital & research centre pvt. ltd.",
            latitude : 25.60009473821537,   
            longitude: 85.15436390417928,
            address: "nc-1c, p c colony rd, housing board colony, kankarbagh, lohia nagar, patna, bihar 800020",
            website:"",
            treatment :[""],
            image: "../hospImg/18.jpg",
            phone :  "09334983888",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.898623534961!2d85.14910967589347!3d25.6082847149266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588ea2640521%3A0x2ffa4f83e82949b4!2sShri%20Ram%20Hospital%20%26%20Research%20Centre%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718959046040!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "abhinandan hospital",
            latitude : 25.557836041163533,   
            longitude: 84.8678098450052,
            address: "kumar complex, bihta rd, bihta, bihar 801103",
            website:"",
            treatment :[""],
            image: "../hospImg/19.jpg",
            phone :  "07762086438",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2307286336945!2d85.15528477589318!3d25.59724821538003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed591125a4aa75%3A0x8a6c936c368dd9b6!2sAbhinandan%20hospital!5e0!3m2!1sen!2sin!4v1718959070419!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "ruban memorial hospital",
            latitude : 25.62772556694249,    
            longitude: 85.11187308020068,
            address: "19, boring patliputra rd, near new patliputra colony, golambar, patna, bihar 800013",
            website:"https://rubanpatliputrahospital.com/",
            treatment :[""],
            image: "../hospImg/20.jpg",
            phone :  "06122271021",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28778.508343735495!2d85.0737661743164!3d25.627717300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582b586ec055%3A0x4bdbe8813044fc2d!2sRuban%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1718959105137!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "dr. s k sinha memorial hospital",
            latitude : 25.60914372668347,    
            longitude: 85.15911874857133,
            address:" 151b, arya kumar rd, rajendra nagar, patna, bihar 800016",
            website:"",
            treatment :[""],
            image: "../hospImg/21.jpg",
            phone :  "09470719112",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.87264892258!2d85.15654527589354!3d25.609147714891186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58ed812036e1%3A0x491318f99aeb820c!2sDR.%20S%20K%20SINHA%20MEMORIAL%20HOSPITAL!5e0!3m2!1sen!2sin!4v1718959134858!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "jagdish memorial hospital",
            latitude : 25.599009682624448,   
            longitude: 85.15721662827593,
            address: "ds - 2, lohiya nagar, behind geological survey of india, kankarbagh, patna, bihar 800020" ,
            website:"http://jagdishhospital.com/",
            treatment :["internal medicine","cardiology","nephrology","pediatrics","gastroenterology","gynaecology & obs","general surgery and plastic surgery","laparoscopic surgery","neurosurgery","orthopedic","dietetics and nutrition","e.n.t,ophthalmology","pathology","maxillofacial","500 ma digital x- ray"],
            image: "../hospImg/22.jpg",
            phone :  "06122361414",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1778787969224!2d85.15464307589325!3d25.599004815307957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5889ddf11b2b%3A0x2a0aa385d1d57e2!2sJagdish%20Memorial%20Hospital%20-%20Top%20Hospital%20in%20Patna!5e0!3m2!1sen!2sin!4v1718959160971!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "magadh cancer centre",
            latitude : 25.59979611536263,     
            longitude: 85.16168426486176,
            address: "medibless hospital, near patna, mahatma gandhi nagar, patrakar nagar, patna, bihar 800020",
            website:"https://www.magadhcancercentre.com/",
            treatment :["medical oncology","surgical oncology","oncopathology","palliative care facility","icu care unit","bone marrow aspiration","chemotherapy","consultant & treatment","immunotherapy","cancer(breast cancer,blood cancer,lung cancer,skin cancer,brain tumor,cancer of muscle & bone,cancer of childhood age,head-neck with thyroid cancer"],
            image: "../hospImg/23.jpg",
            phone :  "09955699377",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1543892292884!2d85.15911157589322!3d25.59978551527586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59a5a03db31d%3A0xcbe8f00b5ac9c47a!2sMagadh%20Cancer%20Centre%20Kankarbagh!5e0!3m2!1sen!2sin!4v1718959200044!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "ram ratan hospital",
            latitude : 25.609068776476743,    
            longitude: 85.17378374551451,
            address:" rampur ln, musallahpur hat, bazar samiti, bahadurpur, patna, bihar 800006",
            website:"",
            treatment :[""],
            image: "../hospImg/24.jpg",
            phone : " 06122686256",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.875008642976!2d85.1712082758935!3d25.60906931489437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58c734b23047%3A0x6eddc4a63eb52d46!2sRam%20Ratan%20Hospital!5e0!3m2!1sen!2sin!4v1718959229274!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "arvind hospital pvt. ltd.",
            latitude : 25.618737175232663,    
            longitude: 85.16351245348932,
            address: "ashok rajpath rd, near khudabaksh library, makhania kuan, lalbagh, patna, bihar 800004",
            website:"",
            treatment :[""],
            image: "../hospImg/25.jpg",
            phone :"" ,
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.583923635813!2d85.16093927589374!3d25.618738714496935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d6420b558b%3A0xbdf6a723f1715a5c!2sArvind%20Hospital%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718959251684!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "jay prabha medanta super specialty hospital, patna",
            latitude : 25.599444240221064,     
            longitude: 85.15294963377968,
            address: "housing board colony, kankarbagh, patrakar nagar, patna, bihar 800020",
            website:"https://www.medanta.org/",
            treatment :["cardiac care","neurosciences","cancer care","gastrosciences","renal care","orthopaedics","internal medicine","dermatology","blood bank","paediatric care","plastic","aesthetic and reconstructive surgery","dentistry","emergency","ent (ear,nose,throat)","lab & pathology","radiology & imaging","diabetes care","respiratory & sleep medicine","critical care","gynae-oncology,bone marrow transplant","peripheral vascular and endovascular sciences"],
            image: "../hospImg/26.jpg",
            phone : " 06123505050",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1647094367067!2d85.15037637589325!3d25.599442515289976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590fdf81b18d%3A0xa1a3f41898479285!2sJay%20Prabha%20Medanta%20Super%20Specialty%20Hospital%2C%20Patna!5e0!3m2!1sen!2sin!4v1718959279030!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "mediversal multi super specialty hospital.",
            latitude : 25.597771206610002,     
            longitude: 85.15746169370291,
            address: "doctors colony, kankarbagh, bankman colony, patna, bihar 800020",
            website:"https://www.mediversal.in/",
            treatment :["anesthesiology & pain management","cardiac-science,critical care medicine","dermatology","emergency & trauma care","ent","endocrinology","gastroenterology & hepatology","general surgery","internal medicine","microbiology","nephrology and renal transplant","neuro surgery","gynaecology","oncology","ophthalmology","oral & maxillofacial surgery","orthopaedics","paediatrics","pathology & blood bank","plastic surgery","psychiatry","radio diagnosis & clinical imaging","respiratory medicine","urology"],
            image: "../hospImg/27.jpg",
            phone : "06123500011",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.216025731082!2d85.15489247589326!3d25.597736915359988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588fcd2d73ad%3A0xd231450d99a7ca25!2sMediversal%20Multi%20Super%20Specialty%20Hospital!5e0!3m2!1sen!2sin!4v1718959305009!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "aastha lok hospital",
            latitude : 25.5993073326496,     
            longitude: 85.16260341328966,
            address: "n/4, near, kendriya vidyalaya rd, professor colony, jogipur, kankarbagh, bankman colony, patna, bihar 800020",
            website:"http://www.aasthalokhocritical care medicinespital.com/",
            treatment :["neuro surgery","cardiology","orthopedics","general surgery","gynaecology","gastroenterology","skin & v.d,psychiatry","urology","paediatrics","laproscopic surgery","plastic surgery","ophthalmology","oncology","radiology","cardiothoracic","nephrology","general medicine","dental & maxillo facial surgery","ent","physiotherapy","pathology"],
            image: "../hospImg/28.jpg",
            phone : "07763802404",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.216025731082!2d85.15489247589326!3d25.597736915359988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed588fcd2d73ad%3A0xd231450d99a7ca25!2sMediversal%20Multi%20Super%20Specialty%20Hospital!5e0!3m2!1sen!2sin!4v1718959305009!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "oxyzone hospital.",
            latitude : 25.60221849403739,     
            longitude: 85.15746551744564,
            address: "dr. r.n. singh road, below rajendra nagar over bridge, kankarbagh, patna, bihar 800020",
            website:"http://www.oxyzonehospital.com/",
            treatment :["aesthetic & reconstructive surgery","anesthesiology","cardiac sciences","dental care","dermatology","ear, nose & throat","endocrinology & diabetes","eye care","gastroenterology","general surgery","internal medicine","in-vitro fertilisation(ivf)","laparoscopic surgery","obstetrics & gynaecology","orthopaedic & joint replacement","pediatrics","physiotherapy & rehab","pulmonology","sleep study","spine surgery","urology","weight loss surgery"],
            image: "../hospImg/29.jpg",
            phone : "09102992909",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0814671215076!2d85.1548910758933!3d25.602209015176324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e9cd2efed7%3A0x9b493ae849ba5ece!2sOxyzone%20Hospital%20%3A%20Best%20Hospital%20in%20Kankarbagh%20Patna!5e0!3m2!1sen!2sin!4v1718959346513!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "big apollo spectra hospitals",
            latitude : 25.587815874889756,      
            longitude: 85.19592954502781,
            address: "sheetla mandir road, near sump house, agam kuan, patna, bihar 800007",
            website:"https://www.bigapollospectra.com/",
            treatment :["endocrinology & metabolic surgery","pulmonology","orthopedics","nephrology","urology","general & laparoscopic surgery","gastroenterology","critical care","radiology & imaging","cardiology","neurology","gynaecology","general medicine","oncology","ent","neurosurgery","rheumatology","emergency & trauma centre","physiotherapy and rehabilitation"],
            image: "../hospImg/30.jpg",
            phone : "06123540100",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5145814172556!2d85.19335487589296!3d25.58781171576769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58975f07c0a3%3A0x10fc27d63db60243!2sBig%20Apollo%20Spectra%20Hospitals!5e0!3m2!1sen!2sin!4v1718959368593!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "pushpanjali multispeciality hospital",
            latitude : 25.59251903316036,      
            longitude: 85.17971659311307,
            address: "90 feet road, near bhagwat milan mandir, bhagwat nagar, kumhrar, patna, bihar 800026",
            website:"http://www.pushpanjalihospital.co.in/",
            treatment :["general surgery","internal medicine","cardiology","nephrology","orthopedic & joint replacement","paediatric care","anaesthesiology","dermatology","endocrinology & diabetes","pulmonology","gastroenteritis","obstetrics & gynaecology","ear"," nose & throat","eye care","laparoscopic surgery","spine surgery","hrm","psychiatr"],
            image: "../hospImg/31.jpg",
            phone : "09523097831",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.373213183725!2d85.17714507589311!3d25.592511815574696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59ff35f94919%3A0xc0a7f23f039e26cc!2sPushpanjali%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1718959393714!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "asia hospital",
            latitude : 25.59931115025376,      
            longitude: 85.19357433589933,
            address: "agam kuan, kankarbagh main rd, near dhanuki mor, patna, bihar 800026",
            website:"http://asiahospitalpatna.in/",
            treatment :["advanced heart centre","advanced surgery","bone & joints","mother & child","neurosurgery","gastroenterology","renal disease & urology","critical care","respiratory medicine","internal medicine","emergency & trauma centre","advanced imaging","anesthesia","ent,dental"],
            image: "../hospImg/32.jpg",
            phone :" 07677889922",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.168554658858!2d85.19100007589326!3d25.599314715295243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5ff834dc3819%3A0x35062910a7798210!2sAsia%20hospital!5e0!3m2!1sen!2sin!4v1718959422335!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "central hospital patna",
            latitude : 25.59986547590638,      
            longitude: 85.19105196292533,
            address:" dhanki more, kankarbagh main rd, kumhrar, patna, bihar 800026",
            website:"",
            treatment :[""],
            image: "../hospImg/33.jpg",
            phone : "09693333336",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1521927836625!2d85.18847937589328!3d25.599858515272818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5fbb8e9ecf5b%3A0x6932fc75841b15b6!2sCentral%20Hospital%20Patna!5e0!3m2!1sen!2sin!4v1718959448067!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "sanjeevani hospital",
            latitude : 25.595077992693465,     
            longitude: 85.16451312001223,
            address: "yogipur, kankarbagh, bankman colony, patna, bihar 800020",
            website:"https://yoursanjeevani.org/",
            treatment :["intensive care unit(icu)","orthopedic surgery","neurological surgery","cancer surgery","dental surgery","viu pcnl","urethroplasty","bladder neck incision(bni)","trup","ureteroscopic lithotripsy(ursl)"],
            image: "../hospImg/34.jpg",
            phone : "08757809000",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.296595146029!2d85.16194957589317!3d25.595058815470114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5899df90e6f5%3A0x73fe922f68fe287d!2sSanjeevani%20Hospital!5e0!3m2!1sen!2sin!4v1718959471300!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "jyoti punj hospital",
            latitude : 25.614322642596495, 
            longitude: 85.11623604096057,
            address: "boring rd, sri krishna puri, patna, bihar 800001",
            website:"http://jyotipunjhospital.com/",
            treatment :["maternity","women care","fertlity clinic"],
            image: "../hospImg/35.jpg",
            phone : "07544033999",
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.716829263595!2d85.11366187589361!3d25.614324214678213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5825284a9aa9%3A0x95b7db4491dfb0d2!2sJyoti%20Punj%20Hospital!5e0!3m2!1sen!2sin!4v1718959498395!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "udayan hospital",
            latitude : 25.621017644507305,      
            longitude: 85.12295036301828,
            address: "west boring canal rd, near rajapur pul, north anandpuri, anandpuri, patna, bihar 800001",
            website:"http://udayanhospital.com/",
            treatment :["neurosciences","gastroenterology & hepatology","general surgery","gynaecology & obstetrics","paediatric","orthopeadic"],
            image: "../hospImg/36.jpg",
            phone : "06122557551",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.515470938576!2d85.1203804758938!3d25.62101211440345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7e7cab9adad7%3A0x94f232c38d278d6f!2sUdayan%20Hospital!5e0!3m2!1sen!2sin!4v1718959525428!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  '
        },
        {
            name: "asian city hospital",
            latitude : 25.635648386062062,       
            longitude: 85.10400264894258,
            address:"behind p & m mall, patliputra industrial area, patliputra colony, patna, bihar 800013",
            website:"http://www.asianpatna.com/",
            treatment :["emergency & trauma centre","dental","ent","internal medicine","critical care","gastroenterology","advanced imaging","mother & child","neurosurgery","renal disease & urology","bone & joints","advanced surgery","heart centre"],
            image: "../hospImg/37.jpg",
            phone :"09696396896",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0746955947957!2d85.10142937589417!3d25.635646313801466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed578f44deaf4d%3A0x5d08fef82eb3a95c!2sAsian%20City%20Hospital!5e0!3m2!1sen!2sin!4v1718959551272!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "sahyog hospital",
            latitude : 25.62913271724517,       
            longitude: 85.10825685181418,
            address: "40, patliputra colony, patna, bihar 800013",
            website:"http://www.sahyoghospital.com/",
            treatment :["general & laparoscopic surgery","general medicine","paediatrics","neurology & neurosurgery","cardiology","physiotherapy","pathology & laboratory","medicine","emergency","medicine","department","orthopaedics","pain","clinic","e.n.t.","gastroenterology","nephrology","endocrinology","opthalmology","dermatology","accident & trauma","radiology","dentistry","obstetrics & gynaecology","critical care medicine","pulmonology & chest medicine","urology"],
            image: "../hospImg/38.jpg",
            phone : "06122262642",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.270974451447!2d85.105680275894!3d25.629130614069442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d531e4194b%3A0x9f807c41c8cf952d!2sSahyog%20Hospital!5e0!3m2!1sen!2sin!4v1718959575393!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        },
        {
            name: "paras hmri hospital",
            latitude : 25.605647496416598,        
            longitude: 85.08258518874229,
            address: "nh 30, bailey rd, mla colony, raja bazar, indrapuri, patna, bihar 800014",
            website:"https://www.parashospitals.com/",
            treatment :["cardiology","ctvs","clinical psychology","dental services","dermatology","dietetics & nutrition","ent","emergency medicine","endocrinology","gastroenterology","general and laproscopic surgery","gynaecology","internal medicine","nephrology","neurology","neurosurgery","nuclear medicine","obstetrics and gynaecology","oncology","ophthalmology","orthopaedics","orthopaedics - sports injury","paediatrics","plastic surgery","psychiatry","respiratory medicine","spine surgery","urology"],
            image: "../hospImg/39.jpg",
            phone : "08035358704",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.97789071754!2d85.0800120758934!3d25.60565091503481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5843b8e5cac7%3A0x2870e50b5d18fd58!2sParas%20HMRI%20Hospital!5e0!3m2!1sen!2sin!4v1718959601397!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
        }
        

        


    ];

    function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the Earth in kilometers
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c; // Distance in kilometers
        return distance;
    }

    var nearbyHospitals = hospitals.filter(function(hospital) {
        var distance = calculateDistance(userLat, userLon, hospital.latitude, hospital.longitude);
        return distance <= 5; // Check if hospital is within 10km radius
    });

var hospitalList = document.getElementById("hospitalList");
nearbyHospitals.forEach(function(hospital, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        <div id="hospital-self" class="hospital hospital-${index}">
            <h2 class="hospital-name">${hospital.name}</h2>
            <img src="${hospital.image}" alt="${hospital.name}" class="hospital-image">
            <p class="hospital-address"><strong>Address:</strong> ${hospital.address}</p>
            <a class="hospital-phone" href="tel:${hospital.phone}">Phone:${hospital.phone}</a>
            <a class = "hospital-website" href="${hospital.email}"><strong>Go on Hospital Site</strong> </a>
            <p class="hospital-treatment"><strong>Treatment Available:</strong> ${hospital.treatment.join(", ")}</p>
            <button class="show-map-btn" data-hospital-index="${index}">Show Map</button>
            <div class="hospital-map" style="display: none;">${hospital.map}</div>
        </div>
    `;
    hospitalList.appendChild(listItem);
});

// Add event listeners to show/hide map buttons
var showMapButtons = document.querySelectorAll('.show-map-btn');
showMapButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var hospitalIndex = this.getAttribute('data-hospital-index');
        var hospitalMap = document.querySelector('.hospital-' + hospitalIndex + ' .hospital-map'); hospitalMap.style.display = (hospitalMap.style.display === 'none') ? 'block' : 'none';
    });
});

  
 
}, function(error) {
    // Handle any errors that occur
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }