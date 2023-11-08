import faker from 'faker';

class TodoTestData {
    url = 'https://todomvc.com/examples/react/#/';
    taskNameFirst =  'cy' + faker.random.alpha(4);
    taskNameSecond =  'cy' + faker.random.alpha(4);
    taskNameThird =  'cy' + faker.random.alpha(4);
}
export default new TodoTestData();