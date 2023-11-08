import testData from "../fixtures/test-data";
import todoPage from "../support/page-objects/todo-page";

describe('Test task for TODO MVC', function () {

    beforeEach(() => {
        cy.visit('/');
        todoPage.verifyPageIsOpened(testData.url)
            .deleteAllTasks()
    })

    it('Add new task. Verify new task', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .verifyTask(testData.taskNameFirst)
    })

    it('Add new task. Mark task as completed', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .checkTask()
            .verifyIsTaskCheck(testData.taskNameFirst)
    })

    it('Add new task. Delete task.', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .deleteTask()
            .verifyPageText('notHave', [testData.taskNameFirst])
    })

    it('Filter tasks by status', () => {
        todoPage
            .addNewTask(testData.taskNameFirst)
            .checkTask()
            .addNewTask(testData.taskNameSecond)
            .checkFilter(testData.taskNameFirst, testData.taskNameSecond)
    })

})
