import testData from "../fixtures/test-data";
import todoPage from "../support/page-objects/todo-page";

describe('Test task for TODO MVC', function () {

    beforeEach(() => {
        cy.visit('/');
        todoPage.verifyPageIsOpened(testData.url)
            .deleteAllTasks()
    })

    it('Add first task', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .verifyTask(testData.taskNameFirst)
    })

    it('Add second task', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .checkTask()
            .verifyIsTaskCheck(testData.taskNameFirst)
    })

    it('Add third task. Delete task', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .deleteTask()
            .verifyPageText('notHave', [testData.taskNameFirst])
    })

    it('Check filter', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .checkTask()
            .addNewTask(testData.taskNameSecond)
            .checkFilter(testData.taskNameFirst, testData.taskNameSecond)
    })

})
