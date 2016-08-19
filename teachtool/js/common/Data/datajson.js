/*以下为模板所需要的假数据结构，供参照。请务必将得到的json数据转为下面新的json结构，模板才能显示。*/
/*若模板结构发生变化，请及时更改下面的假数据json，方便他人开发参照。*/
var datajson = {};

datajson.data1 = {
    title: 'I. Read aloud',
    section: [
        {
            type: 'phrases',//短语
            title: 'Section A',
            desc: 'Read the following phrases.',
            list: [
                    { text: 'a job fair', sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov' },
                    { text: 'apply for job', sound: 'D:\\audio1\\I am going to be a driver..wov' },
                    { text: 'hello world', sound: 'D:\\audio1\\Animals.wov' },
                    { text: 'where are you come from', sound: '' },
                    { text: 'how do you do', sound: '' },
                    { text: 'what\'s your name?', sound: '' }
            ]
        },
        {
            type: 'sentences',//句子
            title: 'Section B',
            desc: 'Read the following sentences.',
            list: [
                    { text: 'What do you think you’ll do five years from now?', sound: '' },
                    { text: 'Plan your career in five-year blocks, so that you can set realistic goals.', sound: '' },
                    { text: 'Being a surgeon is very rewarding, in spite of the long hours you have to work.', sound: '' },
                    { text: 'More students are taking media studies, even though there are few jobs in this field.', sound: '' },
                    { text: 'I might be working as an interpreter or a translator—or maybe I’ll be working in the travel industry.', sound: '' }
            ]
        },
        {
            type: 'passage',//短文
            title: 'Section C',
            desc: 'Read the following passage.',
            content:
            {
                text: 'The key to answer interview questions about your ideal job is that your response should be in line with the characteristics of the job you are interviewing with. For example, if you’re applying for a job as an office assistant you wouldn’t say your ideal job is in medicine.<br/>Before any interview you should take time to do serious introspection. Think about your strengths and weaknesses, what you have liked and disliked about your current jobs, and what your career ambitions are. Most people’s career goals change over the course of their lives but it is very important to have goals. Have a sense of who you are and what you want to do. Then apply for a job that is a step in that direction.',
                sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov'
            }
        }
    ]
};

datajson.data2 = {
    title: 'II. Quick response',
    section: [
        {
            type: 'questions',//题目
            title: 'Section A',
            desc: 'Listen to the questions and try to answer. These questions might be coherent and logic, so it’s better for you to answer them one by one.',
            list: [
                    { text: 'What is your ideal job when you graduate?', sound: '' },
                    { text: 'Why do you think it’s an ideal job for you?', sound: '' },
                    { text: 'What do you know about the job?', sound: '' },
                    { text: 'What have you done or what you are going to do for your ideal job?', sound: '' },
                    { text: 'What do your friends or teachers think of the job?', sound: '' }
            ]
        },
        {
            type: 'ask',//提问
            title: 'Section B',
            desc: 'Try to ask some questions according to the situation on the screen.',
            content: 'Students’ union is going to look for some volunteers to rearrange the books and magazines in the library. Try to ask at least five questions to know about these students and decide whether they are suitable for the job or not.'
        }
    ]
};

datajson.data3 = {
    title: 'III. Listen, write and retell',
    section: [
        {
            type: 'blank',
            title: 'Section A',
            desc: '',
            content: 'some people get paid—and well—for doing the things that make them really happy. Now listen to Ryan and Donna talking about their jobs and complete the following table according to what you hear.',
            pic: 'images/img.png',
            sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
            original: '我是Section B原文…………',
            answer: '我是Section B答案…………',
            blanks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        {
            type: 'table',
            title: 'Section B',
            desc: '',
            content: 'Believe it or not, some people get paid—and well—for doing the things that make them really happy. Now listen to Ryan and Donna talking about their jobs and complete the following table according to what you hear.',
            data: [
                    ['Name', 'Donna', 'Ryan'],
                    ['What does he / she do?', '[___]', '[___]'],
                    ['How did he / she learn the skills needed for the job?', 'asdfas', '[___]'],
                    ['Why does he / she love his/ her job?', '[___]', '[___]'],
                    ['Conclusion', '[___]']
            ],
            colspan: [
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '2']
            ],
            sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
            original: '我是原文…………',
            answer: '我是答案…………'
        },
        {
            type: 'ask',
            title: 'Section C',
            desc: '',
            content: 'Tell your classmates about Ryan’s or Donna’ job according to what you hear with the help of the table above. Please begin your talk with the sentence: Today I will tell you about Ryan / Donna who …'
        }
    ]
};

datajson.data4 = {
    title: 'IV. Picture Talk',
    desc: 'Choose two from the four pictures to talk about what the man or woman in the picture does. You may follow the recommended steps.',
    section: [
        {
            type: 'table',
            title: 'Step 1:',
            desc: 'Talk about the pictures with your classmates and try to complete the following table.',
            data: [
                ['Name', 'Donna', 'Ryan'],
                ['What does he / she do?', 'asdfas', '[___]'],
                ['How did he / she learn the skills needed for the job?', '[___]', '[___]'],
                ['Why does he / she love his/ her job?', '[___]', '[___]'],
                ['Conclusion', '[___]']
            ],
            colspan: [
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '1', '1'],
                    ['1', '2']
            ],
            pic: 'images/img.png',
            answer: '我是答案…………'
        },
        {
            type: 'questions',
            title: 'Step 2:',
            desc: 'Discuss the following questions based on the picture with your deskmate.',
            pic: 'images/img.png',
            list: [
                'Who is the man in the pictures?',
                'Where is the story taking place?',
                'What is the man going to do?',
                'What happens to the man at last?'
            ]
        },
        {
            type: 'talk',
            title: 'Step 3:',
            desc: 'With the help of the table and the pictures, choose one job to talk about in at least 5 sentences. Begin your talk with “Hello,everybody. Let me tell you something about working as …'
        }
    ]
};

datajson.data5 = {
    title: 'V. Group discussion',
    desc: 'Suppose you are in a talk show, whose topic is “My ideal job”. One of you is the host of the show and the other four are the guests invited to talk in the show. Give your presentation in about 2 minutes.',
    tips: 'Tips：<br />If you are the host, you need to: introduce the topic and ask the guests questions about their ideal job and sometimes about the details that the guests don’t make clear.<br />If you are the guest, you need to: tell others what your ideal job is, what the job is about, what skills are necessary in the job and why you think it is your ideal job, answer the questions from the host and the other guests, and ask the other guests questions if you have any.<br /><br />It’s better to have your own opinion about the topiBut if you do find it difficult, you may turn to what you have got from the sections above.',
    remark: ''
};

datajson.data6 = {
    title: 'VI. Listening',
    section: [
        {
            type: 'short_conversations',
            title: 'Section A',
            desc: 'In Section A, you will hear ten short conversations between two speakers. At the end of each conversation, a question will be asked about what was saiThe conversations and the questions will be spoken only once. After you hear a conversation and the question about it, read the four possible answers on your paper, and decide which one is the best answer to the question you have heard.',
            list: [
                    {
                        options: ['She would like to go to the movie.', 'She was too tired to go to the movie.', 'She thought it wonderful to go to the movie after dinner.', 'Though she was tired, she still would like to go to the movie.'],
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        original: '原文啊啊……'
                    },
                    {
                        options: ['10:05', '10:15', '10:00', '9:55'],
                        sound: 'D:\\audio1\\I am going to be a driver..wov',
                        original: ''
                    },
                    {
                        options: ['At a restaurant.', 'In a shop.', 'In a shop.', 'In an office.'],
                        sound: 'D:\\audio1\\Animals.wov',
                        original: ''
                    },
                    {
                        options: ['To see a new film.', ' To take a test.', 'To go over her lessons.', 'To do her homework.'],
                        sound: '',
                        original: ''
                    },
                    {
                        options: ['Caller and telephone operator.', 'Caller and secretary.', 'Customer and shop assistant.', 'Friends.'],
                        sound: '',
                        original: ''
                    },
                    {
                        options: ['Quite easy.', 'Quite difficult.', 'All over.', 'Quite certain.'],
                        sound: '',
                        original: ''
                    }
            ]
        },
        {
            type: 'short_passages',
            title: 'Section B',
            desc: 'In Section B, you will hear two short passages, and you will be asked three questions on each of the passages. The passages will be read twice, but the questions will be spoken only once. When you hear a question, read the four possible answers on your paper and decide which one would be the best answer to the question you have heard.',
            group: [
                    {
                        title: 'Questions 11 through 13 are based on the following passage.',
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        original: '原文啊啊……!!!!!!!!!!!!',
                        list: [
                            {
                                options: ['Boys grow up by playing it.', 'Every American has watched baseball games.', 'Americans talk about it very often.', 'Baseball has been in all aspects of American life.'],
                                sound: 'D:\\audio1\\I am going to be a driver..wov'
                            },
                            {
                                options: ['They dressed in American uniforms and spoke English well.', 'They lived in America for a very long time.', 'They learned to play baseball.', 'They knew everything about baseball.'],
                                sound: ''
                            },
                            {
                                options: ['By stopping them and asking them to play baseball.', 'By asking them questions about baseball and star players.', 'By checking their spoken English.', 'By seeing whether they were strange or not.'],
                                sound: ''
                            }
                        ]
                    },
                    {
                        title: 'Questions 14 through 16are based on the following passage.',
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        original: '原文啊啊……!!!!!!!!!!!!',
                        list: [
                            {
                                options: ['Boys grow up by playing it.', 'Every American has watched baseball games.', 'Americans talk about it very often.', 'Baseball has been in all aspects of American life.'],
                                sound: 'D:\\audio1\\I am going to be a driver..wov'
                            },
                            {
                                options: ['They dressed in American uniforms and spoke English well.', 'They lived in America for a very long time.', 'They learned to play baseball.', 'They knew everything about baseball.'],
                                sound: ''
                            },
                            {
                                options: ['By stopping them and asking them to play baseball.', 'By asking them questions about baseball and star players.', 'By checking their spoken English.', 'By seeing whether they were strange or not.'],
                                sound: ''
                            }
                        ]
                    }
            ]
        },
        {
            type: 'longer_conversations',
            title: 'Section C',
            desc: 'In Section C, you will hear two longer conversations. The conversations will be read twice. After you hear each conversation, you are required to fill in the numbered blanks with the information you have hearWrite your answers on your answer sheet.',
            group: [
                    {
                        title: 'Blanks 17 through 20 are based on the following conversation.',
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        sortText: '',
                        original: '原文!!!!!!!!!!!!',
                        answer: '答案哈哈哈',
                        list: [
                            ['Hospital RegistrationDonna'],
                            ['Name', 'Michelle Roberts'],
                            ['Home address', '81 South [___] Drive'],
                            ['Poster', '[___]'],
                            ['Nationality', '[___]'],
                            ['Arrival date', 'May12th'],
                            ['Departere date', '[___]']
                        ],
                        colspan: [
                            ['2'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1']
                        ]
                    },
                    {
                        title: 'Blanks 21 through 24 are based on the following conversation.',
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        sortText: '',
                        original: '原文啊啊……!!!!!!!!!!!!',
                        answer: '答案呵呵',
                        list: [
                            ['What is their plan for this evening?', 'They will [___] and play mahjong.'],
                            ['Home address', 'They were [___] and reading.'],
                            ['Poster', 'They are [___]'],
                            ['Nationality', '[___]'],
                            ['Arrival date', 'It\'s probably a(n) [___]']
                        ],
                        colspan: [
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1'],
                            ['1', '1']
                        ]
                    },
                    {
                        title: 'Some people have joined a book discussion group at a community library. What rules does the librarian explain to the group? Number them in the order you hear them. One is not used..',
                        sound: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414134950\\resources\\JS_2014032505264_11111\\Resource\\ReportReading\\sg9t00_ufb100117_02.wov',
                        sortText: 'All members must speak in the group discussion.<br>People must give presentations summarizing their opinions.<br>There are special rules about eating and drinking during meetings.<br>People must read the entire book before the meeting.<br>E. As long as you own the book, read with a pencil or pen in your hand.',
                        original: '原文啊啊……!!!!!!!!!!!!',
                        answer: '答案呵呵',
                        list: [
                            ['[___]']
                        ],
                        colspan: [
                            ['1']
                        ]
                    }
            ]
        }
    ]
};

datajson.data7 = {
    title: 'VII. Watch and talk',
    desc: 'Watch the video clip and answer the following questions.',
    video: 'D:\\Program Files (x86)\\iFly Info Tek\\UTSchool5.0_ShenYang\\PaperConstrue\\pages\\Resources\\20140414145323\\resources\\GD_2014032505264_11111\\Resource\\ReportReading\\sh3t00_prb278_00.flv',
    questions: ['How many skills are mentioned to help you get a better job?', 'Which one impresses you most? Why?'],
    answer: '我是答案…………'
};


var testData = {
    "PaperId": "",
    "ProductId": "",
    "ResRelativeUrl": "",
    "TotalScore": "30",
    "ListenTotalScore": "20",
    "IsSuccess": true,
    "ErrorInfo": "",
    "ListExamPart": [
      {
          "SectionName": "PhrasesReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（全部题型）",
          "Title": "Section A:Read aloud the following phrases.",
          "SectionType": "oral",
          "Flag": "0_I",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"10\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_00.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"a job fair\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_01.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"apply for a job\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_02.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"get hired as an interpreter\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_03.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"strengths and weaknesses\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_04.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"leave your current position\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_04.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_05.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"get a start-up loan at the bank\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_05.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_06.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"appreciate good work as well as knowledge\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_06.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_07.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"have previous experience in this type of work\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_07.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_08.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"a teamwork-oriented environment in a company\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_08.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109005_09.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"prefer working in an interesting and professional job\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109005_09.wov\"}]}]}}"
          ]
      },
      {
          "SectionName": "SentenceReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（全部题型）",
          "Title": "Section B:Read aloud the following sentences.",
          "SectionType": "oral",
          "Flag": "0_I",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"10\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109005_00.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do you think you'll do five years from now?\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109005_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109005_01.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"Plan your career in five-year blocks, so that you can set realistic goals.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109005_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109005_02.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"Being a surgeon is very rewarding, in spite of the long hours you have to work.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109005_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109005_03.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"More students are taking media studies, even though there are few jobs in this field.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109005_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109005_04.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"I might be working as an interpreter or a translatoror maybe I'll be working in the travel industry.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109005_04.wov\"}]}]}}"
          ]
      },
      {
          "SectionName": "TextReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（全部题型）",
          "Title": "Section C:Read aloud the following passage.",
          "SectionType": "oral",
          "Flag": "0_I",
          "QuestionsList": [
            "{\"readtime\":\"60\",\"answertime\":\"120\",\"preparetime\":\"0\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_pra109005_00.ppr\",\"type\":\"read_chapter\"},\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"&nbsp; &nbsp; &nbsp; &nbsp;The key to answer interview questions about your ideal job is that your response should be in line with the characteristics of the job you are interviewing with. For example, if you're applying for a job as an office assistant you wouldn't say your ideal job is in medicine.<br \\/>&nbsp; &nbsp; &nbsp; &nbsp;Before any interview you should take time to do serious introspection. Think about your strengths and weaknesses, what you have liked and disliked about your current jobs, and what your career ambitions are. Most people's career goals change over the course of their lives but it is very important to have goals. Have a sense of who you are and what you want to do. Then apply for a job that is a step in that direction.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pra109005_00.wov\"}]}}}"
          ]
      },
      {
          "SectionName": "QuickResponse",
          "OutLineStr": "",
          "Introduction": "II. Quick response（全部题型）",
          "Title": "Section A:Listen to the questions and try to answer. These questions might be coherent and logic, so it’s better for you to answer them one by one.",
          "SectionType": "oral",
          "Flag": "0_II",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"0\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109005_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What is your ideal job when you graduate from university?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109005_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109005_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"Why do you think it's an ideal job for you?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109005_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109005_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do you know about the job?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109005_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109005_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What have you done or what are you going to do for your ideal job?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109005_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109005_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do your friends or teachers think of the job?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109005_04.wov\"}]}]}}"
          ]
      },
      {
          "SectionName": "TopicPresentation",
          "OutLineStr": "",
          "Introduction": "II. Quick response（全部题型）",
          "Title": "Section B:Try to ask some questions according to the situation on the screen.",
          "SectionType": "oral",
          "Flag": "0_II",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"150\",\"preparetime\":\"90\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_prs109005_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Students' union is going to look for some volunteers to rearrange the books and magazines in the library. A lot of students have sent their applications to the union, so an interview is arranged to decide who will be chosen. Suppose you are one of the interviewers, try to ask at least five questions to know about these students and decide whether they are suitable for the job or not.\"},{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"questionText\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{\"data\":[{\"name\":\"answer\",\"data\":\"\"},{\"name\":\"keyPoint\",\"data\":\"\"}]}}},\"data\":{\"name\":\"promptText\"}}"
          ]
      },
      {
          "SectionName": "MindMapping",
          "OutLineStr": "",
          "Introduction": "III. Listen, write and retell（全部题型）",
          "Title": "",
          "SectionType": "write",
          "Flag": "0_III",
          "QuestionsList": [
            "{\"readtime\":\"60\",\"answertime\":\"360\",\"preparetime\":\"3\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_lmm109005_00.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"&nbsp; &nbsp; &nbsp; &nbsp;One paragraph doesn't tell the story of a book. Similarly, one test doesn't tell the tale of a school. Good schools often have a lot in common.<br \\/>First and foremost, a school won't be good unless the students want to be there. Effective schools have a warm climate. Students feel welcome and know that the stuff cares about them. Although there is pressure to perform, it comes in a way that promotes learning, with an expectation that students will excel and the support is provided to make it happen.<br \\/>Dedicated teachers are another factor that leads to a good school. The best teachers work to improve their ability to teach. They read and explore the techniques used by others in a never-ending effort to better themselves and their skill. Effective teaching demands that the teacher be knowledgeable in the subject area. The teachers must have a detailed understanding of what is being taught.<br \\/>Finally, good schools are the student-oriented ones. Students' abilities and needs are different. To effectively teach all students, the school staff must understand this. The teaching and interactions with students must reflect the needs of each, with the understanding of each as an individual.\"},{\"blanknum\":\"16\",\"type\":\"pic\",\"name\":\"questionContent\",\"data\":\"ItemRes.png\"},{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"Students want to be there##warm##pressure to perform##Dedicated teachers##improve their ability to teach##knowledgeable##Student-oriented##students abilities and needs are different##the teaching and interactions with students\"}]},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Section A Listen to the speaker talking about what makes a good school and complete the mind map that follows.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_lmm109005_01.wov\"}]}"
          ]
      },
      {
          "SectionName": "ListenAndWrite",
          "OutLineStr": "",
          "Introduction": "III. Listen, write and retell（全部题型）",
          "Title": "",
          "SectionType": "write",
          "Flag": "0_III",
          "QuestionsList": [
            "{\"readtime\":\"60\",\"answertime\":\"360\",\"preparetime\":\"3\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"table\":{\"row\":[{\"data\":[{\"colspan\":\"1\",\"data\":\"Name\"},{\"colspan\":\"1\",\"data\":\"Ryan\"},{\"colspan\":\"1\",\"data\":\"Donna\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"What does he \\/ she do?\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"How did he \\/ she learn the skills needed for the job?\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"Why does he \\/ she love his\\/ her job?\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"Conclusion\"},{\"colspan\":\"2\",\"data\":\"\\/textarea\\/\"}]}]},\"data\":{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"Making videos##Teaching skydiving##By teaching himself.##By having 1,000 jumps and about two years of training##Because he loves getting to know people and making videos for them.##Because she loves seeing students on their first jump.##Both of them are doing the things that make them really happy.\"}},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"<br \\/>Section A Believe it or not, some people get paidand wellfor doing the things that make them really happy. Now listen to Ryan and Donna talking about their jobs and complete the following table according to what you hear.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_llaw109005_01.wov\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_llaw109005_00.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"Ryan<br \\/>When I was 14, my uncle gave me his old video camera and I started making videos. I didn't do so well at school, but I loved getting to know people and making videos about them. I taught myself to edit the videos on this simple computer program that my dad had. One day a friend of my mom's asked me to make a video of her family. She wanted to send it to her mother who lived in China. It was totally fun, and she paid me $150. Soon her friends asked me to make videos for them, and suddenly I had a business. That was 10 years ago. After a while, I realized I had to learn more about video. So now I am studying video part-time and running my business. Its great!<br \\/>Donna<br \\/>Teaching skydiving is so exciting. I get to be outside, and I love seeing students on their first jump. They are all nervous and excited. When they get to the ground, they can't wait to call everyone they know and tell them they just jumped out of an airplane. Later, when they learn to turn and fly forward, they realize that they're not just flying stones! They realize that they're like birdsthey can fly!<br \\/>It wasn't easy to get this job. I had to have about 1,000 jumps and about two years of training. And the salary was only $15,000 for the first year. But I don't do it for the money. In fact, I don't need to get paid at all. I love that much.\"}]}"
          ]
      },
      {
          "SectionName": "ListenAndRetelling",
          "OutLineStr": "",
          "Introduction": "III. Listen, write and retell（全部题型）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "0_III",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"120\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rlar109005_01.ppr\",\"type\":\"topic\"},\"data\":[{\"diable\":\"true\",\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"\"},{\"diable\":\"true\",\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"\"},{\"duration\":\"0\",\"diable\":\"true\",\"type\":\"audio\",\"name\":\"textAudio\",\"data\":\"\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"theme\":[{\"data\":[{\"name\":\"themeText\",\"data\":\"Ryan\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109005_01.ppr\"}]},{\"data\":[{\"name\":\"themeText\",\"data\":\"Donna\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109005_02.ppr\"}]}],\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"<br \\/>Section B Tell your classmates about Ryan's or Donna's job according to what you hear with the help of the table above. Please begin your talk with the sentence: Today I will tell you about Ryan \\/ Donna who \"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rlar109005_00.wov\"}]}"
          ]
      },
      {
          "SectionName": "PictureAndWrite",
          "OutLineStr": "",
          "Introduction": "IV. Picture Talk（全部题型）",
          "Title": "",
          "SectionType": "write",
          "Flag": "0_IV",
          "QuestionsList": [
            "{\"readtime\":\"120\",\"answertime\":\"300\",\"preparetime\":\"30\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"table\":{\"row\":[{\"data\":[{\"colspan\":\"1\",\"data\":\"What's his\\/her job?\"},{\"colspan\":\"1\",\"data\":\"Where does he\\/she work?\"},{\"colspan\":\"1\",\"data\":\"What is the responsibility of the job?\"},{\"colspan\":\"1\",\"data\":\"What are the qualifications and skills needed for the job?\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"a news director\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"a doctor\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"an architect\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"a politician\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"},{\"colspan\":\"1\",\"data\":\"\\/textarea\\/\"}]}]},\"data\":{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"TV station \\/ broadcast station##Direct the live news report##Being familiar with audio and video equipment, a good idea of what is covered in the news report##Public \\/ private hospital##Examine patients, make a diagnosis and give them suggestions##A good knowledge of the symptoms of diseases, being able to interpret the examination report, a professional license##Architecture company##Plan, design and oversee the construction of buildings##Being capable of drawing, creativity and thoughtfulness, a professional license,##The government##Make suggestions or even decisions in the government, influence policy-making##Being good at public speaking, being diplomatic, being willing to listen to others\"}},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Choose two from the four pictures to talk about what the man or woman in the picture does. You may follow the recommended steps.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_lpaw109005_00.wov\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Step 1&nbsp;Talk about the pictures with your classmates and try to complete the following table.\"},{\"type\":\"txt\",\"name\":\"stepAudio\",\"data\":\"sg9t00_lpaw109005_01.wov\"},{\"type\":\"pic\",\"name\":\"topicContent\",\"data\":\"ItemRes.jpg\"}]}"
          ]
      },
      {
          "SectionName": "PictureSituationResponse",
          "OutLineStr": "",
          "Introduction": "IV. Picture Talk（全部题型）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "0_IV",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"180\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"answer\":\"sg9t00_rpsr109005_00_00.ppr\",\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"Give a name to each one in the picture.\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109005_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"answer\":\"sg9t00_rpsr109005_00_01.ppr\",\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"Imagine what each of your family members is like according to how they look.\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109005_01.wov\"}]}]},\"data\":[{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Suppose the following picture is one that shows your family tree. Tell your classmates about your family based on the picture.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rpsr109005.wov\"},{\"type\":\"pic\",\"name\":\"topicContent\",\"data\":\"ItemRes.jpg\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Step 1 Discuss the following cues with your deskmate based on the picture.\"},{\"type\":\"txt\",\"name\":\"stepAudio\",\"data\":\"sg9t00_rpsr109005_s.wov\"}]}"
          ]
      },
      {
          "SectionName": "PictureAndTalking",
          "OutLineStr": "",
          "Introduction": "IV. Picture Talk（全部题型）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "0_IV",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"180\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rpat109005_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Step 2&nbsp;With the help of the table and the pictures, choose one job to talk about in at least 5 sentences. Begin your talk with \\\"Hello, everybody. Let me tell you something about working as \"},{\"type\":\"txt\",\"name\":\"topicAudio\",\"data\":\"sg9t00_rpat109005_00.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"},{\"diabled\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"data\":[{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"\"},{\"disable\":\"true\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\"}]}"
          ]
      },
      {
          "SectionName": "GroupDiscussion",
          "OutLineStr": "",
          "Introduction": "V.Group discussion（全部题型）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "0_V",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"120\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rgd109005_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Tips:<br \\/>If you are the host, you need to: introduce the topic and ask the guests questions about their ideal job and sometimes about the details that the guests don't make clear.<br \\/>If you are the guest, you need to: tell others what your ideal job is, what the job is about, what skills are necessary in the job and why you think it is your ideal job, answer the questions from the host and the other guests, and ask the other guests questions if you have any.\"},{\"type\":\"txt\",\"name\":\"questionText\"},{\"diabled\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\",\"data\":\"sg9t00_rgd109005_00_2.wov\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Suppose you are in a talk show, whose topic is \\\"My ideal job\\\". One of you is the host of the show and the other four are the guests invited to talk in the show. Give your presentation in about 2 minutes.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rgd109005_00.wov\"}]}"
          ]
      },
      {
          "SectionName": "PictureChoice",
          "OutLineStr": "",
          "Introduction": "VI. Listening and choice（全部题型）",
          "Title": "",
          "SectionType": "listen",
          "Flag": "0_VI",
          "QuestionsList": [
            "{\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"group\":{\"question\":[{\"choice\":[{\"choice\":\"He doesn't work hard enough.\",\"type\":\"txt\"},{\"choice\":\"His physics is the best in the class.\",\"type\":\"txt\"},{\"choice\":\"He is working hard at physics.\",\"type\":\"txt\"},{\"choice\":\"He worked hard but his physics is still poor.\",\"type\":\"txt\"}],\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"dialogAudio\",\"data\":\"sg9t00_cqa1090051_00.wov\"},{\"br\":[{},{},{},{},{}],\"type\":\"txt\",\"name\":\"passageText\",\"#text\":[\"W: What about your physics, Tom?\",\"M: Oh, the teacher says that my physics is better than none.\",\"W: Tom, if you work harder, then you will be able to catch up. Don't you think so?\",\"M: Yes, I guess so. But I just\",\"What can you learn about Tom?\"]},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"2\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},{\"choice\":[{\"choice\":\"It's true.\t\",\"type\":\"txt\"},{\"choice\":\"It's the fact.\t\",\"type\":\"txt\"},{\"choice\":\"It's reasonable.\",\"type\":\"txt\"},{\"choice\":\"It's just an excuse.\",\"type\":\"txt\"}],\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"dialogAudio\",\"data\":\"sg9t00_cqa1090051_01.wov\"},{\"br\":[{},{},{},{}],\"type\":\"txt\",\"name\":\"passageText\",\"#text\":[\"W: How was your exam?\",\"M: I failed again. I think if I had done fewer sports, then I would have got more time to prepare for it.\",\"W: Just because of that? I suppose if you had spent less time on computer games, then\",\"What does the woman think of what the man says?\"]},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"2\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},{\"choice\":[{\"choice\":\"to help with the cooking\t\",\"type\":\"txt\"},{\"choice\":\"to have dinner with the family\",\"type\":\"txt\"},{\"choice\":\"to help the son with his English lesson\",\"type\":\"txt\"},{\"choice\":\"to do the cooking for the family\",\"type\":\"txt\"}],\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"dialogAudio\",\"data\":\"sg9t00_cqa1090051_02.wov\"},{\"br\":[{},{},{}],\"type\":\"txt\",\"name\":\"passageText\",\"#text\":[\"M: Mom, my English tutor is coming tonight.\",\"W: I know. Would you like to help me do the cooking? Then you can begin your lesson early after the dinner.\",\"What is the English tutor coming for?\"]},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"2\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},{\"choice\":[{\"choice\":\"around 1:00\t\",\"type\":\"txt\"},{\"choice\":\"around 2:00\t\",\"type\":\"txt\"},{\"choice\":\"around 3:00\t\",\"type\":\"txt\"},{\"choice\":\"around 5:00\",\"type\":\"txt\"}],\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"dialogAudio\",\"data\":\"sg9t00_cqa1090051_03.wov\"},{\"br\":[{},{},{}],\"type\":\"txt\",\"name\":\"passageText\",\"#text\":[\"W: Eric, are you going straight home after school today?\",\"M: No. I have a class until one o'clock, and after that I'm going to spend a couple of hours at the library before going home.\",\"When is Eric going home this afternoon?\"]},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"2\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},{\"choice\":[{\"choice\":\"to leave her a message with her roommate\",\"type\":\"txt\"},{\"choice\":\"to ask for help with his homework\",\"type\":\"txt\"},{\"choice\":\"to talk with her roommate\",\"type\":\"txt\"},{\"choice\":\"to ask her for some information\",\"type\":\"txt\"}],\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"2\",\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"dialogAudio\",\"data\":\"sg9t00_cqa1090051_04.wov\"},{\"br\":[{},{},{}],\"type\":\"txt\",\"name\":\"passageText\",\"#text\":[\"M: I don't remember my homework. If I have a problem, can I call you tonight?\",\"W: If you call me before nine, just leave me a message with my roommate.\",\"Why will then man call the woman?\"]},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"2\",\"type\":\"audio\",\"name\":\"questionAudio\"}]}],\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Section A &nbsp;In section A, you will hear five short conversations between two speakers. After you hear a conversation, read the question and the four possible answers, and decide which one is the best answer to the question.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_cqa1090051_p_00.wov\"}]}"
          ]
      },
      {
          "SectionName": "ShortPassages",
          "OutLineStr": "",
          "Introduction": "VI. Listening and choice（全部题型）",
          "Title": "",
          "SectionType": "listen",
          "Flag": "0_VI",
          "QuestionsList": [
            "{\"group\":{\"question\":[{\"choice\":[{\"choice\":\"10:05.\",\"type\":\"txt\"},{\"choice\":\"10:15.\",\"type\":\"txt\"},{\"choice\":\"10:00.\",\"type\":\"txt\"},{\"choice\":\"9:55.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_00.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"At a restaurant.\",\"type\":\"txt\"},{\"choice\":\"In a shop.\",\"type\":\"txt\"},{\"choice\":\"In a hotel. \t\",\"type\":\"txt\"},{\"choice\":\"In an office.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_01.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"To see a new film.\",\"type\":\"txt\"},{\"choice\":\"To take a test.\",\"type\":\"txt\"},{\"choice\":\"To go over her lessons. \t\",\"type\":\"txt\"},{\"choice\":\"To do her homework.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_02.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"Caller and telephone operator.\t\",\"type\":\"txt\"},{\"choice\":\"Caller and secretary.\",\"type\":\"txt\"},{\"choice\":\"Customer and shop assistant. \t\",\"type\":\"txt\"},{\"choice\":\"Friends.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_03.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"Quite easy.\t\",\"type\":\"txt\"},{\"choice\":\"Quite difficult.\",\"type\":\"txt\"},{\"choice\":\"All over.\",\"type\":\"txt\"},{\"choice\":\"Quite certain.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_04.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]}],\"readtime\":\"10\",\"answertime\":\"20\",\"preparetime\":\"0\",\"submittime\":\"0\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"In Section A you will hear ten short conversations between two speakers. At the end of each conversation, a question will be asked about what was said. The conversations and the questions will be spoken only once. After you hear a conversation and the question about it, read the four possible answers on your paper, and decide which one is the best answer to the question you have heard.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_cda1090051_p_00.wov\"},{\"disable\":\"false\",\"interval\":\"2\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_cda1090051.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"So many people go to school for an education. They learn languages, history, geography, physics, chemistry and mathematics. Others go to school to learn a new skill so that they can make a living. School education is very important and useful. Yet no one can learn everything from school. A teacher, no matter how much he knows, cant teach his students everything that they want to know. His job is to show his students how to learn. He teaches them how to read and how to think. Much more has to be learned outside school by the students themselves.<br \\/>Great scientists, such as Newton, Galileo and Einstein, didn't get everything from school but they were all successful. They made many discoveries and inventions. The reason for their success is that they knew how to study. In other words, they knew how to use their brains. They read books that were not taught at school and they worked hard all their lives.\"},{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"passageContent\"}]}",
            "{\"group\":{\"question\":[{\"choice\":[{\"choice\":\"A. Boys grow up by playing it.\",\"type\":\"txt\"},{\"choice\":\"B. Every American has watched baseball games.\",\"type\":\"txt\"},{\"choice\":\"C. Americans talk about it very often.\",\"type\":\"txt\"},{\"choice\":\"D. Baseball has been in all aspects of American life.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_00.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"A. They dressed in American uniforms and spoke English well.\",\"type\":\"txt\"},{\"choice\":\"B. They lived in America for a very long time.\",\"type\":\"txt\"},{\"choice\":\"C. They learned to play baseball.\",\"type\":\"txt\"},{\"choice\":\"D. They knew everything about baseball.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_01.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"A. By stopping them and asking them to play baseball.\",\"type\":\"txt\"},{\"choice\":\"B. By asking them questions about baseball and star players.\",\"type\":\"txt\"},{\"choice\":\"C. By checking their spoken English.\",\"type\":\"txt\"},{\"choice\":\"D. By seeing whether they were strange or not.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090051_02.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]}],\"readtime\":\"10\",\"answertime\":\"20\",\"preparetime\":\"0\",\"submittime\":\"0\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\"},{\"disable\":\"false\",\"interval\":\"2\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_cda1090051.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"<br \\/>I am Michelle. I have three best classmates, Susan, Sharon and Daniel. All of us live in the same neighborhood. Daniel is really tall. He is six feet six. So he is on the school basketball team. He plays basketball really well. He has brown hair and blue eyes. He looks handsome. Sharon is shorter than Daniel. However, she is taller than Susan and me. She is five feet four and she has black hair. She always likes wearing a mini-skirt. She is fashionable. Susan is very thin. She thinks thin girls are prettier. But I dont think so. She likes shopping very much, so she often asks us to go shopping with her. As for me, I am average height. My favourite color is green, so I always wear green clothes, which make me look lively. My friends and I often play together and we get along pretty well.\"},{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"passageContent\"}]}"
          ]
      },
      {
          "SectionName": "ConversationAndWrite",
          "OutLineStr": "",
          "Introduction": "VI. Listening and choice（全部题型）",
          "Title": "",
          "SectionType": "write",
          "Flag": "0_VI",
          "QuestionsList": [
            "{\"readtime\":\"10\",\"answertime\":\"60\",\"preparetime\":\"30\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"table\":{\"row\":{\"data\":[{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"}]}},\"data\":{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"a.3##b. not used##c. 4##d. 2##e.1\"}},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Section A Some people have joined a book discussion group at a community library. What rules does the librarian explain to the group? Number them in the order you hear them. One is not used.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_lcaw109005_p_00.wov\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Please sort according to the content of the passage\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_lcaw109005_00.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"\tL= Librarian &nbsp; P= Participant<br \\/>\t1.<br \\/>\tL: Im very glad that you've all decided to devote your Saturday mornings to our community book club meetings! Im your local librarian, Amelia Manfred-Jensen, and Ill be leading our group. Yes? First questions?<br \\/>\tP1: In order to maximize our effectiveness as readers, do you have any suggestions for us?<br \\/>\tL: So glad you asked. anytime you read, remember to always have a pencil or pen in your hand to mark a passage, sentence, or paragraph that you want to look at again, but please be sure that the book belongs to you. If its been borrowed from the library for from a friend kind enough to lend it, you mustn't put a mark anywhere in it.<br \\/>\tP1: so, we could carry a notebook in that case, right? Any particular writing instrument you have in mind?<br \\/>\tL: I've always been fond of Number 2 pencils, green, but dear, you should get whatever color youre comfortable with.<br \\/>\t<br \\/><br \\/>\t2<br \\/>\tP2: Excuse me, I just wanted to say that I'm very busy, with work and a family and my volunteer work at the nursing home.<br \\/>\tL: Oh, dear, I truly sympathize with you, I do.<br \\/>\tP2: Even if it might not be possible to read the entire book before the meeting, can  should I attend anyway?<br \\/>\tL: Hmm, really not much point, is there? I won't tolerate insufficient preparation. Be informed that those who are ill-prepared will receive a warning the first time, and no warning at all the second time it happens. In other words, you'll be asked not to attend further meetings.<br \\/>\t3.<br \\/>\tP3: I must say, your rules sound a bit too strict. I dont think theres anything wrong with someone attending who hasnt read every word of the<br \\/>\tL: You are certainly entitled to your opinion, young man.<br \\/>\tP3: Why cant a person come just to hear what others have to say about the book?<br \\/>\tL: Active participant is mandatory; those who sit silently will not tolerate. Dont forgot that all members are expected to give their opinions of the book as well as share their findings from book reviews. I feel its vital that we create a lively discussion by listening politely to and commenting frankly on the opinions of others.<br \\/>\t<br \\/><br \\/>\t4.<br \\/>\tP4: I, for one, think your rules are quite reasonable, and I am delighted that we have such an excellent meeting space.<br \\/>\tL: Were fortunate to have the use of this special room, as long as we agree to behave properly. Be advised that there are a few basic rules: no eating is allowed and soft drinks may be consumed only in the refreshment area.<br \\/>\tP4: Although I was hoping that, to help wake us up early in the morning<br \\/>\tL: Yes, since this is a Saturday morning meeting, and I want you all bright and alert, I will allow you to bring coffee into the meeting room, provided you promise to be extra-careful not to spill any, or else we'll lose this special privilege.\"},{\"type\":\"txt\",\"name\":\"sortContent\",\"data\":\"a. All members must speak in the group discussion.<br \\/>b. People must give presentations summarizing their opinions.<br \\/>c. There are special rules about eating and drinking during meetings.<br \\/>d. People must read the entire book before the meeting.<br \\/>e. As long as you own the book, read with a pencil or pen in your hand.\"}]}",
            "{\"readtime\":\"10\",\"answertime\":\"60\",\"preparetime\":\"30\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"table\":{\"row\":{\"data\":[{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"\\/input\\/\"}]}},\"data\":{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"a.3##b. not used##c. 4##d. 2##e.1\"}},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Please sort according to the content of the passage\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_lcaw109005_01.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"\tSection B Some people have joined a book discussion group at a community library. What rules does the librarian explain to the group? Number them in the order you hear them. One is not used.\"},{\"type\":\"txt\",\"name\":\"sortContent\",\"data\":\"L= Librarian &nbsp; P= Participant<br \\/>1.<br \\/>L: Im very glad that you've all decided to devote your Saturday mornings to our community book club meetings! Im your local librarian, Amelia Manfred-Jensen, and Ill be leading our group. Yes? First questions?<br \\/>P1: In order to maximize our effectiveness as readers, do you have any suggestions for us?<br \\/>L: So glad you asked. anytime you read, remember to always have a pencil or pen in your hand to mark a passage, sentence, or paragraph that you want to look at again, but please be sure that the book belongs to you. If its been borrowed from the library for from a friend kind enough to lend it, you mustn't put a mark anywhere in it.<br \\/>P1: so, we could carry a notebook in that case, right? Any particular writing instrument you have in mind?<br \\/>L: I've always been fond of Number 2 pencils, green, but dear, you should get whatever color youre comfortable with.<br \\/>2<br \\/>P2: Excuse me, I just wanted to say that I'm very busy, with work and a family and my volunteer work at the nursing home.<br \\/>L: Oh, dear, I truly sympathize with you, I do.<br \\/>P2: Even if it might not be possible to read the entire book before the meeting, can  should I attend anyway?<br \\/>L: Hmm, really not much point, is there? I won't tolerate insufficient preparation. Be informed that those who are ill-prepared will receive a warning the first time, and no warning at all the second time it happens. In other words, you'll be asked not to attend further meetings.<br \\/>3.<br \\/>P3: I must say, your rules sound a bit too strict. I dont think theres anything wrong with someone attending who hasnt read every word of the<br \\/>L: You are certainly entitled to your opinion, young man.<br \\/>P3: Why cant a person come just to hear what others have to say about the book?<br \\/>L: Active participant is mandatory; those who sit silently will not tolerate. Dont forgot that all members are expected to give their opinions of the book as well as share their findings from book reviews. I feel its vital that we create a lively discussion by listening politely to and commenting frankly on the opinions of others.<br \\/>4.<br \\/>P4: I, for one, think your rules are quite reasonable, and I am delighted that we have such an excellent meeting space.<br \\/>L: Were fortunate to have the use of this special room, as long as we agree to behave properly. Be advised that there are a few basic rules: no eating is allowed and soft drinks may be consumed only in the refreshment area.<br \\/>P4: Although I was hoping that, to help wake us up early in the morning<br \\/>L: Yes, since this is a Saturday morning meeting, and I want you all bright and alert, I will allow you to bring coffee into the meeting room, provided you promise to be extra-careful not to spill any, or else we'll lose this special privilege.\"}]}"
          ]
      }
    ]
};

var testData2 = {
    "PaperId": "",
    "ProductId": "",
    "ResRelativeUrl": "",
    "TotalScore": "30",
    "ListenTotalScore": "20",
    "IsSuccess": true,
    "ErrorInfo": "",
    "ListExamPart": [
      {
          "SectionName": "PhrasesReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（Family Relatives and Friends）",
          "Title": "Section A:Read aloud the following phrases.",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_I",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPRA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"10\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_00.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"favour family bonds over private wealth\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_01.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"fasten the family ties\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_02.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"the prominent factor that affects family happiness\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_03.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"reasons for inter-generational tensions\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_04.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"see a decline in family size\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_04.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_05.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"bridge\\/narrow the generation gap\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_05.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_06.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"accept us for who we are\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_06.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_07.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"lift me up in my time of need\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_07.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_08.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"value each and every one of your family\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_08.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_wrd109006_09.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"sympathise with the success of a family member\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_wrd109006_09.wov\"}]}]}}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPRA"
            }
          ]
      },
      {
          "SectionName": "SentenceReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（Family Relatives and Friends）",
          "Title": "Section B:Read aloud the following sentences.",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_I",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RSRA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"10\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109006_00.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"In poverty and other misfortunes of life, home is always a sure refuge.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109006_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109006_01.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What has been overlooked is that long-term separation from family members harms both the children and the elderly.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109006_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109006_02.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"Future urbanization programs should include protection mechanisms to ensure that the families of migrant workers are able to spend time together.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109006_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109006_03.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"The number of people in a Chinese family is getting smaller, with single-person households on the rise, according to an official report on family development.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109006_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"30\",\"preparetime\":\"10\",\"answer\":{\"answer\":\"sg9t00_sra109006_04.ppr\",\"type\":\"read_sentence\"},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"Family bonds are vital for wellbeing, but they take time to develop and cant be artificially created.\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_sra109006_04.wov\"}]}]}}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RSRA"
            }
          ]
      },
      {
          "SectionName": "TextReading",
          "OutLineStr": "",
          "Introduction": "I.Read aloud（Family Relatives and Friends）",
          "Title": "Section C:Read aloud the following passage.",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_I",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RTRA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"60\",\"answertime\":\"120\",\"preparetime\":\"0\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_pra109006_00.ppr\",\"type\":\"read_chapter\"},\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are family<br \\/>Everyone can see we're together<br \\/>As we walk on by<br \\/>And we flock just like birds of a feather<br \\/>I won't tell no lie<br \\/>All of the people around us they say<br \\/>\\\"Can they be that close?\\\"<br \\/>Just let me state for the record<br \\/>We're giving love in a family dose<br \\/><br \\/>Living life is fun and we've just begun<br \\/>To get our share of this world's delights<br \\/>High hope we have for the future<br \\/>And our goal's in sight<br \\/>No we dont get depressed<br \\/>Here's what we call our golden rule<br \\/>Have faith in you and the things you do<br \\/>You won't go wrong, oh no<br \\/>This is our family jewel\"},{\"disable\":\"true\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pra109006_00.wov\"}]}}}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RTRA"
            }
          ]
      },
      {
          "SectionName": "QuickResponse",
          "OutLineStr": "",
          "Introduction": "II. Quick response（Family Relatives and Friends）",
          "Title": "Section A:Listen to the questions and try to answer. These questions might be coherent and logic, so it’s better for you to answer them one by one.",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_II",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RQRA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"0\",\"preparetime\":\"0\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109006_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"How many people are there in your family?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109006_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109006_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do your parents do?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109006_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109006_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do you often talk about with your family?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109006_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109006_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"What do you often do with your family?\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109006_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"15\",\"preparetime\":\"0\",\"answer\":{\"answer\":\"sg9t00_pqp109006_00.ppr\",\"type\":\"read_chapter\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"content\",\"data\":\"How do you like your family\"},{\"disable\":\"false\",\"interval\":\"0\",\"repeat\":\"1\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"modelAudio\",\"data\":\"sg9t00_pqp109006_04.wov\"}]}]}}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RQRA"
            }
          ]
      },
      {
          "SectionName": "TopicPresentation",
          "OutLineStr": "",
          "Introduction": "II. Quick response（Family Relatives and Friends）",
          "Title": "Section B:Try to ask some questions according to the situation on the screen.",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_II",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RTSA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"150\",\"preparetime\":\"90\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_prs109006_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Your friend, Tom, has won in the speech contest and his speech focuses on family. You ask him at least 5 questions about his speech and his viewpoint in the speech.\"},{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"questionText\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{\"data\":[{\"name\":\"answer\",\"data\":\"\"},{\"name\":\"keyPoint\",\"data\":\"\"}]}}},\"data\":{\"name\":\"promptText\"}}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RTSA"
            }
          ]
      },
      {
          "SectionName": "MindMapping",
          "OutLineStr": "",
          "Introduction": "III. Listen, write and retell（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "write",
          "Flag": "Family Relatives and Friends_III",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LMMA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"60\",\"answertime\":\"360\",\"preparetime\":\"3\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_lmm109006_00.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"M: Good morning, everyone. Our guest this morning is the American writer Norah Levy. Her new book \\\"are\\\", is all about how our position in the family affects our personality. Welcome Norah.<br \\/>W: Thank you.<br \\/>M: Now is this really true, Norah? That our position in the family affects our personality?<br \\/>W: Sure. OK, other factors can influence your personality too, but your position in the family is definitely one of the strongest.<br \\/>M: So tell us a bit about the oldest children in a familythe first born.<br \\/>W: Well, the oldest children get most attention from their parents and the result is that they're usually quite self-confident. They make good leaders. The famous Prime Minister, Winston Churchill, was a first born child. They're often ambitious and they're more likely to go to university than their brothers or sisters. They often get the top jobs too. Oldest children are also responsible people, because they often have to look after their younger brothers or sisters. The downside of this is that sometimes this means that when they're older they worry a lot about things. They can also be quite bossy, and even aggressive, especially when they don't get what they want.<br \\/>M: What about the middle child?<br \\/>W: Well, middle children are usually independent and competitive.<br \\/>M: Competitive?<br \\/>W: Yes, because they have to fight with their brothers and sisters for their parents' attention. And they're usually sociable probably because they have had other children to play with. However, on the negative side middle children are often jealous of their brothers and sisters and they can be moody.<br \\/>M: And youngest children?<br \\/>W: If you're the youngest in a family, you'll probably be very charming, very affectionate, and probably quite a relaxed person. This is because parents are usually more relaxed when they have their last child. On the other hand, youngest children are often quite lazy. This is because they always have their oldest brothers and sisters to help them. And they can be manipulativethey often use their charm to get what they want.<br \\/>M: OK, that's all very interesting. Now, I'm an only child. People often have the idea that only children like me are spoilt. Is that true?<br \\/>W: Well, of course it's true! Only children are the only onesthey don't have to share with anyoneso they're often spoilt by their parents and their grandparents. As a result they can be quite selfish. They think of themselves more than of other people.<br \\/>M: OK. Well, that sounds like a good description of me! Is there any good news?<br \\/>W: Yes, there is. On the positive side, only children are usually very organized and responsible, and they can be very imaginative too.<br \\/>M: Well, thank you, Norah, and good luck with the book.\"},{\"blanknum\":\"16\",\"type\":\"pic\",\"name\":\"questionContent\",\"data\":\"ItemRes.jpg\"},{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"1. self-confident##2. independent##3. charming##4. spoilt##5. ambitious##6. competitive##7. affectionate##8. selfish##9. responsible##10. sociable##11. relaxed##12. organized##13. worried##14. jealous##15. lazy##16. responsible##17. bossy##18. moody##19. manipulative##20. imaginative##21. aggressive##22. One's position in the home affects his\\/her personality.\"}]},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Section A Listen to a psychologist talking about the influence one's position in the family has on his\\/her personality. Complete the chart by writing four more adjectives of personality in each column.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_lmm109006_01.wov\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LMMA"
            }
          ]
      },
      {
          "SectionName": "ListenAndRetelling",
          "OutLineStr": "",
          "Introduction": "III. Listen, write and retell（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_III",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RLARA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"120\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rlar109006_01.ppr\",\"type\":\"topic\"},\"data\":[{\"diable\":\"true\",\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"\"},{\"diable\":\"true\",\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"\"},{\"duration\":\"0\",\"diable\":\"true\",\"type\":\"audio\",\"name\":\"textAudio\",\"data\":\"\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"theme\":[{\"data\":[{\"name\":\"themeText\",\"data\":\"Oldest children\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109006_01.ppr\"}]},{\"data\":[{\"name\":\"themeText\",\"data\":\"Middle children\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109006_02.ppr\"}]},{\"data\":[{\"name\":\"themeText\",\"data\":\"Youngest children\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109006_03.ppr\"}]},{\"data\":[{\"name\":\"themeText\",\"data\":\"Only children\"},{\"name\":\"themePPR\",\"data\":\"sg9t00_rlar109006_04.ppr\"}]}],\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"SectionB Based on what you hear, tell your classmates what personality different children in the home have.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rlar109006_00.wov\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RLARA"
            }
          ]
      },
      {
          "SectionName": "PictureSituationResponse",
          "OutLineStr": "",
          "Introduction": "IV. Picture Talk（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_IV",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPSRA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"180\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":[{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"Who are the people in the picture?\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109006_00.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"What is each of them doing?\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109006_01.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"How is each of them feeling?\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109006_02.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"Why are they doing so?\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109006_03.wov\"}]},{\"readtime\":\"0\",\"answertime\":\"60\",\"preparetime\":\"60\",\"answer\":{\"type\":\"simple_expression\"},\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"data\":[{\"type\":\"txt\",\"name\":\"questionText\",\"data\":\"What do you think of what's happening in the picture?\"},{\"disable\":\"false\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_rpsr109006_04.wov\"}]}]},\"data\":[{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Read the following picture carefully and tell your classmates what happens to the boy.<br \\/>Step 1 Discuss the following questions based on the picture with your deskmate. <br \\/>\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rpsr109006.wov\"},{\"type\":\"pic\",\"name\":\"topicContent\",\"data\":\"ItemRes.jpg\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Step 1&nbsp;Discuss the following questions based on the picture with your deskmate.\"},{\"type\":\"txt\",\"name\":\"stepAudio\",\"data\":\"sg9t00_rpsr109006_s.wov\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPSRA"
            }
          ]
      },
      {
          "SectionName": "PictureAndTalking",
          "OutLineStr": "",
          "Introduction": "IV. Picture Talk（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_IV",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPATA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"180\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rpat109006_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Step 2&nbsp;Tell your classmates in at least 5 sentences what is happening according to the picture and what you think of it.\"},{\"type\":\"txt\",\"name\":\"topicAudio\",\"data\":\"sg9t00_rpat109006_00.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"},{\"diabled\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"data\":[{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"\"},{\"disable\":\"true\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RPATA"
            }
          ]
      },
      {
          "SectionName": "GroupDiscussion",
          "OutLineStr": "",
          "Introduction": "V.Group discussion（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "oral",
          "Flag": "Family Relatives and Friends_V",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RGDA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"0\",\"answertime\":\"120\",\"preparetime\":\"60\",\"submittime\":\"0\",\"group\":{\"question\":{\"answer\":{\"answer\":\"sg9t00_rgd109006_00.ppr\",\"type\":\"topic\"},\"data\":[{\"type\":\"txt\",\"name\":\"topicContent\",\"data\":\"Tips: <br \\/>If you are the host, you need to:<br \\/>1) introduce the topic;<br \\/>2) ask the guests about what they think a harmonious family should look like;<br \\/>3) help the guests to make clear their points.<br \\/>If you are the guest, you need to:<br \\/>1) tell others what kind of family is a harmonious family in your mind;<br \\/>2) answer the questions raised by the host and the other guests;<br \\/>3) ask the other guests questions if you have any.<br \\/><br \\/>It's better to have your own opinion about the topic. But if you do find it difficult, you may turn to what you have got from the sections above.\"},{\"type\":\"txt\",\"name\":\"questionText\"},{\"diabled\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"textAudio\",\"data\":\"sg9t00_rgd109006_00_2.wov\"},{\"disable\":\"true\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\"}]},\"extend\":{\"answerinfo\":{}}},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"Suppose you are in a talk show, whose topic is \\\"A harmonious family\\\" One of you is the host of the show and the other four are the guests invited to talk in the show. Give your presentation in about 2 minutes.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_rgd109006_00.wov\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_RGDA"
            }
          ]
      },
      {
          "SectionName": "ShortPassages",
          "OutLineStr": "",
          "Introduction": "VI. Listening and choice（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "listen",
          "Flag": "Family Relatives and Friends_VI",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LSPAC",
          "QuestionsList": [
            {
                "QuestionList": "{\"group\":{\"question\":[{\"choice\":[{\"choice\":\"After dinner.\t\t\",\"type\":\"txt\"},{\"choice\":\"Before dinner.\",\"type\":\"txt\"},{\"choice\":\"In the evening.\",\"type\":\"txt\"},{\"choice\":\"In the midnight.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090061_00.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"A worker.\",\"type\":\"txt\"},{\"choice\":\"A teacher.\t\",\"type\":\"txt\"},{\"choice\":\"A manager.\",\"type\":\"txt\"},{\"choice\":\"An architect.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090061_01.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"She checks emails.\t\",\"type\":\"txt\"},{\"choice\":\"She gets information.\t\t\",\"type\":\"txt\"},{\"choice\":\"Both A and B.\",\"type\":\"txt\"},{\"choice\":\"Not mentioned.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090061_02.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"Play computer games.\",\"type\":\"txt\"},{\"choice\":\"Listen to music.\",\"type\":\"txt\"},{\"choice\":\"Go online.\",\"type\":\"txt\"},{\"choice\":\"Lie on the grass.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090061_03.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]},{\"choice\":[{\"choice\":\"An Sundays.\",\"type\":\"txt\"},{\"choice\":\"An weekdays.\",\"type\":\"txt\"},{\"choice\":\"At weekends.\",\"type\":\"txt\"},{\"choice\":\"On Wednesdays.\",\"type\":\"txt\"}],\"readtime\":\"0\",\"answertime\":\"10\",\"preparetime\":\"0\",\"submittime\":\"0\",\"data\":[{\"duration\":\"0\",\"type\":\"audio\",\"name\":\"questionAudio\",\"data\":\"sg9t00_cda1090061_04.wov\"},{\"type\":\"txt\",\"name\":\"questionText\"}]}],\"readtime\":\"10\",\"answertime\":\"20\",\"preparetime\":\"0\",\"submittime\":\"0\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"In section A, you will hear one short passage. After you hear the passage and the question, read the possible answers, and choose the best one to the question.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_cda1090061_p_01.wov\"},{\"disable\":\"false\",\"interval\":\"2\",\"duration\":\"0\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_cda1090061.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"There is a computer in my home. My parents often use it. My father uses it before dinner. He usually reads some news and does the shopping online. My mother uses it after dinner. She is a company manager and she always checks her emails and gets information about her work on the Internet. I am a high school student, so I dont have much time to go online. And I am not allowed to play computer games. I only use it at weekends to listen to music.\"},{\"disable\":\"true\",\"type\":\"txt\",\"name\":\"passageContent\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LSPAC"
            }
          ]
      },
      {
          "SectionName": "ConversationAndWrite",
          "OutLineStr": "",
          "Introduction": "VI. Listening and choice（Family Relatives and Friends）",
          "Title": "",
          "SectionType": "write",
          "Flag": "Family Relatives and Friends_VI",
          "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LCAWA",
          "QuestionsList": [
            {
                "QuestionList": "{\"readtime\":\"10\",\"answertime\":\"60\",\"preparetime\":\"30\",\"submittime\":\"0\",\"group\":{\"question\":{\"readtime\":\"10\",\"answertime\":\"10\",\"preparetime\":\"3\",\"extend\":{\"answerinfo\":{}},\"submittime\":\"0\",\"table\":{\"row\":[{\"data\":[{\"colspan\":\"1\",\"data\":\"Name\"},{\"colspan\":\"1\",\"data\":\"Telescope\"},{\"colspan\":\"1\",\"data\":\"Television\"},{\"colspan\":\"1\",\"data\":\"Map\"},{\"colspan\":\"1\",\"data\":\"Clock\"},{\"colspan\":\"1\",\"data\":\"Flower\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"Lily\"},{\"colspan\":\"1\",\"data\":\"(1)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(2)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(3)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(4)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(5)\\/input\\/\"}]},{\"data\":[{\"colspan\":\"1\",\"data\":\"Adam\"},{\"colspan\":\"1\",\"data\":\"(6)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(7)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(8)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(9)\\/input\\/\"},{\"colspan\":\"1\",\"data\":\"(10)\\/input\\/\"}]}]},\"data\":{\"type\":\"txt\",\"name\":\"answerText\",\"data\":\"1. Y##2. N##3. Y##4. N##5. N##6. N##7. Y##8. Y##9. Y##10. N\"}},\"type\":\"question\"},\"data\":[{\"type\":\"txt\",\"name\":\"promptText\",\"data\":\"In section B, you will hear a long conversation. After you hear the conversation, you are required to write \\\"Y\\\" on the things that Lily and Adam have in their bedrooms, and write \\\"N\\\" on the things Lily and Adam don't have in their bedrooms.\"},{\"disable\":\"false\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"promptAudio\",\"data\":\"sg9t00_lcaw109006_p_00.wov\"},{\"type\":\"txt\",\"name\":\"stepText\",\"data\":\"Blanks are based on the following conversation. Complete the form.\"},{\"interval\":\"1\",\"repeat\":\"1\",\"duration\":\"28\",\"type\":\"audio\",\"name\":\"passageAudio\",\"data\":\"sg9t00_lcaw109006_00.wov\"},{\"type\":\"txt\",\"name\":\"passageText\",\"data\":\"Lily: Oh, look! There is a big telescope there. I've got one in my room, too. I use it to watch the moon and stars at night.<br \\/>Adam: Really? But in my room, I don't have many things. There is a television in my room. My father often says, \\\"Adam, don't put too many things in your bedroom. The bedroom is a place for you to rest.<br \\/>Lily: So, what else are there in your room, Adam?<br \\/>Adam: I've got a map and a clock. That's it.<br \\/>Lily: I've got a map, too. It's a map of the world. But I haven't got a clock. I think I need one. I will buy one today. Oh, look at that clock on the wall. It's cool, isn't it?<br \\/>Adam: Yeah, that's nice.<br \\/>Lily: I'll take it. Look, how beautiful the flowers are! Have you got any in your room?<br \\/>Adam: No, what about you?<br \\/>Lily: I haven't got any, either. But we can buy some later.\"},{\"type\":\"txt\",\"name\":\"sortContent\",\"data\":\"\"}]}",
                "RelativeUrl": "E:\\project\\EPD_USTP\\Branches\\DigitalCourse_Shanghai\\TeachTool\\pages\\Resources\\123456\\Family Relatives and Friends_LCAWA"
            }
          ]
      }
    ]
};
