import { coursesReducer, CoursesState, COURSES_NEXT_PAGE, COURSES_PREV_PAGE } from "./courses.reducer";
import { courseReducer } from "./course.reducer";

describe('CoursesReducer', () => {
    const state: CoursesState = new CoursesState();

    it('should add page', () => {
        const newState = coursesReducer(state, { type: COURSES_NEXT_PAGE, payload: null });
        expect(newState.start).toBe(10);
    });

    it('should not go beyond zero page', () => {
        const newState = coursesReducer(state, { type: COURSES_PREV_PAGE, payload: null });
        expect(newState.start).toBe(0);
    });

    it('should not go to prev page', () => {
        const myState = new CoursesState();
        myState.start = 20;
        const newState = coursesReducer(myState, { type: COURSES_PREV_PAGE, payload: null });
        expect(newState.start).toBe(10);
    });

    it('should detect first page', () => {
        const newState = coursesReducer(state, firstpage);
        expect(newState.hasMore).toBeTruthy();
    });
    it('should detect last page', () => {
        const newState = coursesReducer(state, lastpage);
        expect(newState.hasMore).toBeFalsy();
    });
    it('should not show empty page', () => {
        let myState = new CoursesState();
        myState = coursesReducer(myState, { type: COURSES_NEXT_PAGE, payload: null });
        myState = coursesReducer(myState, firstpage);
        myState = coursesReducer(myState, { type: COURSES_NEXT_PAGE, payload: null });
        myState = coursesReducer(myState, emptypage);
        expect(myState.hasMore).toBeFalsy();
        expect(myState.start).toBe(10);
        expect(myState.data.length).toBe(10);
    });

    const firstpage = {
        type: 'COURSES_LOAD_SUCCESS',
        payload: [
          {
            id: 8693,
            name: 'duis mollit reprehenderit ad',
            createDate: '2017-09-28T04:39:24+00:00',
            durationMinutes: 157,
            description: 'Est minim ea aute sunt laborum minim eu excepteur. Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud.',
            topRated: false,
            authors: [
              {
                id: 1370,
                firstName: 'Polly',
                lastName: 'Sosa'
              }
            ]
          },
          {
            id: 4980,
            name: 'magna excepteur aute deserunt',
            createDate: '2016-05-31T02:02:36+00:00',
            durationMinutes: 207,
            description: 'Sunt culpa officia minim commodo eiusmod irure sunt nostrud. Mollit aliquip id occaecat officia proident anim dolor officia qui voluptate consectetur laborum. Duis incididunt culpa aliqua mollit do fugiat ea dolor mollit irure Lorem tempor.',
            topRated: false,
            authors: [
              {
                id: 8413,
                firstName: 'Greta',
                lastName: 'Richardson'
              },
              {
                id: 7458,
                firstName: 'Deana',
                lastName: 'Bruce'
              },
              {
                id: 5508,
                firstName: 'Patsy',
                lastName: 'Bright'
              }
            ]
          },
          {
            id: 4282,
            name: 'sit voluptate eiusmod ea',
            createDate: '2017-03-25T12:57:37+00:00',
            durationMinutes: 197,
            description: 'Commodo id sunt sunt adipisicing et aliquip voluptate laborum consectetur. Occaecat nisi sint exercitation ullamco adipisicing irure est in consectetur aute voluptate. Ea pariatur dolor anim ea reprehenderit ut non occaecat magna adipisicing exercitation nisi consequat.',
            topRated: true,
            authors: [
              {
                id: 3618,
                firstName: 'Laura',
                lastName: 'Kirby'
              },
              {
                id: 9064,
                firstName: 'Quinn',
                lastName: 'Cain'
              }
            ]
          },
          {
            id: 1936,
            name: 'reprehenderit est veniam elit',
            createDate: '2016-03-18T06:36:07+00:00',
            durationMinutes: 232,
            description: 'Consectetur veniam non nulla in laboris minim ipsum. Dolor aliqua irure sint do irure magna tempor culpa quis. Deserunt amet occaecat velit sit.',
            topRated: true,
            authors: [
              {
                id: 9926,
                firstName: 'Burt',
                lastName: 'Holland'
              },
              {
                id: 6440,
                firstName: 'Andrews',
                lastName: 'Byers'
              },
              {
                id: 8509,
                firstName: 'Shawn',
                lastName: 'Craig'
              }
            ]
          },
          {
            id: 2006,
            name: 'reprehenderit eiusmod nostrud amet',
            createDate: '2017-01-18T19:10:51+00:00',
            durationMinutes: 42,
            description: 'Est consequat deserunt officia fugiat culpa in aliquip consectetur. Est nostrud occaecat cillum elit officia officia ea magna et minim officia commodo sunt. Deserunt duis minim magna nostrud enim enim commodo sit elit nostrud cillum aliquip est qui.',
            topRated: true,
            authors: [
              {
                id: 21,
                firstName: 'Maddox',
                lastName: 'Diaz'
              },
              {
                id: 800,
                firstName: 'Glenda',
                lastName: 'Juarez'
              },
              {
                id: 1772,
                firstName: 'Hilda',
                lastName: 'Gaines'
              },
              {
                id: 3003,
                firstName: 'Abbott',
                lastName: 'Mckay'
              }
            ]
          },
          {
            id: 1672,
            name: 'officia exercitation tempor officia',
            createDate: '2017-06-06T00:07:32+00:00',
            durationMinutes: 52,
            description: 'Laborum reprehenderit tempor do cillum ipsum consequat deserunt. In enim amet laboris occaecat sit cillum. Voluptate tempor consequat incididunt non pariatur eiusmod sint duis est.',
            topRated: false,
            authors: [
              {
                id: 1167,
                firstName: 'Garrison',
                lastName: 'Chambers'
              },
              {
                id: 9215,
                firstName: 'Ofelia',
                lastName: 'Rodgers'
              },
              {
                id: 978,
                firstName: 'Avila',
                lastName: 'Bolton'
              }
            ]
          },
          {
            id: 3946,
            name: 'nisi ex incididunt aliquip',
            createDate: '2016-11-03T04:24:34+00:00',
            durationMinutes: 31,
            description: 'Commodo excepteur velit in consectetur sit esse Lorem occaecat labore laboris et. Deserunt fugiat ea aliquip labore culpa fugiat labore incididunt. Duis ex mollit quis aliquip eiusmod.',
            topRated: false,
            authors: [
              {
                id: 612,
                firstName: 'Pam',
                lastName: 'Vazquez'
              },
              {
                id: 6050,
                firstName: 'Norman',
                lastName: 'Love'
              },
              {
                id: 2252,
                firstName: 'Reba',
                lastName: 'Perez'
              }
            ]
          },
          {
            id: 8464,
            name: 'minim amet proident est',
            createDate: '2017-07-07T10:38:59+00:00',
            durationMinutes: 269,
            description: 'Fugiat velit aliquip quis veniam culpa consequat fugiat voluptate magna exercitation eiusmod sit qui. Dolor nostrud enim commodo non eu ut nostrud aliquip aute anim ex veniam eiusmod esse. Eu nulla non dolore et voluptate labore ipsum est sit nisi qui.',
            topRated: true,
            authors: [
              {
                id: 5524,
                firstName: 'Cobb',
                lastName: 'Hudson'
              },
              {
                id: 5341,
                firstName: 'Nettie',
                lastName: 'Sanford'
              },
              {
                id: 7333,
                firstName: 'Michele',
                lastName: 'Cunningham'
              }
            ]
          },
          {
            id: 5834,
            name: 'nulla eu ex aute',
            createDate: '2016-04-30T18:46:36+00:00',
            durationMinutes: 310,
            description: 'Aute anim dolore duis quis ut reprehenderit dolore nostrud duis est cupidatat consequat. Ea ipsum duis esse est ullamco nulla sunt culpa. Proident Lorem ipsum Lorem incididunt deserunt dolore.',
            topRated: false,
            authors: [
              {
                id: 8318,
                firstName: 'Rowland',
                lastName: 'Vasquez'
              }
            ]
          },
          {
            id: 9664,
            name: 'proident do non aute',
            createDate: '2017-02-18T22:01:43+00:00',
            durationMinutes: 274,
            description: 'Ut aliqua exercitation in sit non adipisicing amet. Occaecat et fugiat minim officia ut in non et nulla. Nisi incididunt culpa ad magna do laboris.',
            topRated: true,
            authors: [
              {
                id: 4441,
                firstName: 'Willa',
                lastName: 'Cortez'
              },
              {
                id: 9562,
                firstName: 'Dejesus',
                lastName: 'Snow'
              },
              {
                id: 4998,
                firstName: 'Doyle',
                lastName: 'Webster'
              },
              {
                id: 2138,
                firstName: 'Torres',
                lastName: 'Farley'
              }
            ]
          }
        ]
      };
      const emptypage = {
        type: 'COURSES_LOAD_SUCCESS',
        payload: []
      };
      const lastpage = {
        type: 'COURSES_LOAD_SUCCESS',
        payload: [
          {
            id: 7454,
            name: 'ipsum cupidatat elit qui',
            createDate: '2016-05-29T11:05:03+00:00',
            durationMinutes: 283,
            description: 'Nostrud cupidatat aliquip pariatur incididunt irure proident cillum officia ex elit veniam est et officia. Consectetur ad adipisicing exercitation cillum excepteur voluptate dolor enim quis irure non. Est tempor sit et mollit adipisicing nisi enim labore proident veniam labore Lorem nulla labore.',
            topRated: false,
            authors: [
              {
                id: 3343,
                firstName: 'Margie',
                lastName: 'Cote'
              }
            ]
          },
          {
            id: 8476,
            name: 'ea est ex veniam',
            createDate: '2017-09-08T19:51:30+00:00',
            durationMinutes: 346,
            description: 'Nostrud incididunt veniam consectetur cillum. Pariatur culpa dolor esse elit aliqua duis. Adipisicing exercitation nostrud ullamco occaecat ut et.',
            topRated: true,
            authors: [
              {
                id: 441,
                firstName: 'Vance',
                lastName: 'Reynolds'
              }
            ]
          },
          {
            id: 6240,
            name: 'sint voluptate Lorem laboris',
            createDate: '2017-08-15T15:27:05+00:00',
            durationMinutes: 267,
            description: 'Tempor aute enim qui irure. Culpa elit ut nulla qui dolore eiusmod eiusmod incididunt commodo ipsum. Anim quis exercitation sint officia laborum officia.',
            topRated: false,
            authors: [
              {
                id: 9101,
                firstName: 'Singleton',
                lastName: 'Ellison'
              },
              {
                id: 638,
                firstName: 'Weeks',
                lastName: 'Santos'
              }
            ]
          },
          {
            id: 3001,
            name: 'aliquip enim eiusmod reprehenderit',
            createDate: '2017-11-01T00:46:22+00:00',
            durationMinutes: 155,
            description: 'Velit irure ut do dolore aliquip fugiat qui labore irure do officia ullamco. Excepteur quis tempor eu sint dolor occaecat. Nulla aliquip labore ad ut occaecat id.',
            topRated: false,
            authors: [
              {
                id: 7987,
                firstName: 'Anthony',
                lastName: 'Mcguire'
              },
              {
                id: 80,
                firstName: 'Knight',
                lastName: 'York'
              },
              {
                id: 5892,
                firstName: 'Hope',
                lastName: 'Boyer'
              },
              {
                id: 7134,
                firstName: 'Kim',
                lastName: 'Brewer'
              }
            ]
          },
          {
            id: 7349,
            name: 'ullamco irure et magna',
            createDate: '2016-05-23T19:39:12+00:00',
            durationMinutes: 280,
            description: 'Amet nostrud fugiat consequat mollit adipisicing pariatur incididunt. Eiusmod magna sit ea sunt officia anim consequat incididunt non minim non. Aute tempor proident veniam duis ex consequat dolor Lorem aliquip nulla veniam consectetur.',
            topRated: false,
            authors: [
              {
                id: 3121,
                firstName: 'Twila',
                lastName: 'Jennings'
              },
              {
                id: 6880,
                firstName: 'Irma',
                lastName: 'Martinez'
              },
              {
                id: 6039,
                firstName: 'Mcgowan',
                lastName: 'Nelson'
              },
              {
                id: 8235,
                firstName: 'Parks',
                lastName: 'Mack'
              }
            ]
          },
          {
            id: 8324,
            name: 'sint ipsum laboris id',
            createDate: '2016-12-03T04:50:39+00:00',
            durationMinutes: 390,
            description: 'Fugiat anim eu duis nulla. Consectetur tempor sint nisi ex laborum. Et voluptate nulla est nostrud velit ipsum minim nostrud proident aliquip exercitation commodo quis.',
            topRated: true,
            authors: [
              {
                id: 1861,
                firstName: 'Michael',
                lastName: 'Stout'
              },
              {
                id: 9950,
                firstName: 'Roy',
                lastName: 'George'
              },
              {
                id: 3907,
                firstName: 'Macdonald',
                lastName: 'Ward'
              },
              {
                id: 4388,
                firstName: 'Oneil',
                lastName: 'Carlson'
              }
            ]
          },
          {
            id: 5848,
            name: 'sint velit ullamco do',
            createDate: '2017-10-07T09:23:08+00:00',
            durationMinutes: 46,
            description: 'Deserunt nulla nisi tempor ea tempor officia qui occaecat consectetur aliqua esse occaecat. Cillum anim veniam pariatur sint. Lorem Lorem aute anim culpa duis commodo officia labore laborum eiusmod qui irure amet pariatur.',
            topRated: true,
            authors: [
              {
                id: 2700,
                firstName: 'Wynn',
                lastName: 'Knowles'
              },
              {
                id: 1048,
                firstName: 'Casey',
                lastName: 'Terry'
              },
              {
                id: 5187,
                firstName: 'Etta',
                lastName: 'Key'
              },
              {
                id: 1939,
                firstName: 'Hilary',
                lastName: 'Mcdowell'
              }
            ]
          },
          {
            id: 348,
            name: 'nulla deserunt ut ipsum',
            createDate: '2017-04-14T08:15:30+00:00',
            durationMinutes: 262,
            description: 'Irure aliqua culpa ea Lorem ea laboris enim exercitation excepteur ex nulla minim ut. Est cupidatat quis officia occaecat enim reprehenderit mollit nisi. Elit proident consectetur laboris sit anim minim occaecat pariatur aute culpa duis deserunt culpa eiusmod.',
            topRated: false,
            authors: [
              {
                id: 5653,
                firstName: 'Leblanc',
                lastName: 'Bradley'
              }
            ]
          },
          {
            id: 133,
            name: 'sint sunt do elit',
            createDate: '2017-09-19T18:41:40+00:00',
            durationMinutes: 45,
            description: 'Consequat do labore nisi ut amet pariatur fugiat ullamco minim velit irure. Excepteur labore incididunt sint ea nulla culpa aliqua non. Deserunt commodo cupidatat ex nostrud officia quis eu consequat voluptate.',
            topRated: false,
            authors: [
              {
                id: 2148,
                firstName: 'Joyce',
                lastName: 'Sparks'
              },
              {
                id: 728,
                firstName: 'Rosetta',
                lastName: 'Barton'
              },
              {
                id: 3733,
                firstName: 'Patti',
                lastName: 'Sampson'
              }
            ]
          }
        ]
      };
});
