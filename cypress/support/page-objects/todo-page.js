import selectors from './selectors.js';

class TodoPage {

    visitURL(url) {
        cy.visit(url);
        return this;
    }

    addNewTask(option) {
        cy.get(selectors.newTodoInput).click().clear().type(option).type('{enter}')
        return this
    }

    checkTask() {
        cy.get(selectors.toggleCheckbox).eq(0).check()
        return this
    }

    deleteTask() {
        cy.get(selectors.destroyButton)
            .invoke('show')
            .click();
        return this
    }

    deleteAllTasks() {
        cy.get(selectors.body).find('section').then(($section) => {
            if ($section.length > 1) {
                cy.get(selectors.todoListLi).each(($el) => {
                        this.deleteTask();             
                })
            }
            else {
                cy.log('Task is not exist')
            }
        })

        return this
    }

    clickActiveFilter() {
        cy.contains(selectors.a, selectors.active).click();
        return this
    }
    
    clickCompletedFilter() {
        cy.contains(selectors.a, selectors.completed).click();
        return this
    }
    
    clickAllFilter() {
        cy.contains(selectors.a, selectors.all).click();
        return this
    }
    
    verifyTaskCount(count) {
        cy.get(selectors.todoListLi).should('have.length', count);
        return this
    }

    checkFilter(taskCompleted, taskActive) {
        this.clickActiveFilter();
        this.verifyTaskCount(1);
        this.verifyPageText('have', [taskActive]);
    
        this.clickCompletedFilter();
        this.verifyTaskCount(1);
        this.verifyPageText('have', [taskCompleted]);
    
        this.clickAllFilter();
        this.verifyTaskCount(2);
        this.verifyPageText('have', [taskActive, taskCompleted]);
    
        return this;
    }
    
    
    
    
    


    // checkFilter(taskCompleted, taskActive) {
    //     cy.contains(selectors.a, 'Active').click();
    //     cy.get(selectors.todoListLi).should('have.length', 1);
    //     this.verifyPageText('have', [taskActive])
    //     cy.contains(selectors.a, 'Completed').click();
    //     cy.get(selectors.todoListLi).should('have.length', 1);
    //     this.verifyPageText('have', [taskCompleted])
    //     cy.contains(selectors.a, 'All').click();
    //     cy.get(selectors.todoListLi).should('have.length', 2);
    //     this.verifyPageText('have', [taskActive, taskCompleted])
    //     return this
    // }

    verifyPageIsOpened(url) {
        cy.wait(1500).url().should('include', url);
        return this;
    }

    verifyTask(option) {
        cy.get(selectors.todoListLi)
            .should('have.text', option);
        return this
    }

    verifyIsTaskCheck(option) {
        cy.contains(selectors.Li, option).then(($el) => {
            cy.wrap($el).should('have.class', selectors.classCompleted)
        })

        return this
    }

    verifyPageText(action, textArray) {
        for (const text of textArray) {
            switch (action) {
                case 'have':
                    this.verifyElementContainsText(selectors.body, text);
                    break;
                case 'notHave':
                    this.verifyElementNotContainsText(selectors.body, text);
                    break;
            }
        }
        return this;
    }

    verifyElementContainsText(element, text) {
        cy.get(element).should('contain', text);
        return this
    }

    verifyElementNotContainsText(element, text) {
        cy.get(element).should('not.contain', text);
        return this
    }

}
export default new TodoPage();
