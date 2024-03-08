# React + Vite

To Do List (React + Vite)

This is a small learning project for me to become familiar with JavaScript/React/HTML/CSS.

Base Project to complete:

Simple To-Do List that can add and remove To-Do cards and re-renders on change. Able to set color priority of cards (eg. red (urgent),
yellow (moderate), green (basic)). When task is completed, sidebar is updated with a list, showing completed tasks.



Plans if the base project is done, but want to improve later in the future:
- Have a Drop-down Menu that gives the capability of selecting color priority and renders only color priorty selected cards.
- To gain familiarity of using Node.js, Next.js and MongoDB, might implement a database that can save users and users information with
    login. (AMBITIOUS! as current knowledge is not sufficient enough to implement)


*07/03* Notes

- Created repository for the project after some workings

*08/03*


- For displaying cards in the body, I had overthought how to render To-Do cards in the display body component, (Previous Method: Have a list containing a list of 3 lists, which those lists contains the actual card because I thought of only the using a body with {display:block} containing a component with {display: flex} with 3 cards components inside, which is a nightmare to add cards and remove cards) so realised the {display:grid} is a much better method for updating (adding and removing) and rerendering the Card Display Component as I can have a list containing lists of To-Do Cards information (TITLE, CARDINFORMATION), which makes the useState variable much easier to update.

- Dumb Mistake when designing To-Do Project, for a normal To-Do List created in javascript/html when task is done, check box is ticked and link staight through list element. For my project, I started with a removal button where the Card Title is typed in input box and when remove button is clicked, it removes card from element. This was a useless function, when I can copy the original check box ticked model and when it is clicked it is removed. So I will remove the RemoveCard Function.

- The RemoveCard Function will be removed as well as Remove Button from Navigation Bar, will replace the Remove Button on Navigation with a Show Completed Tasks Button. This button will render the Card Display with all completed Cards. Another button will also be part of the Navigation Bar, which is show trash cards

Finished For the Day - Tasks to do: 

-Need a Function to send State from NavBarCard to CardAdder Component (Home/CompletedCards/TrashCards send to cardadder as well as maindisplay to decide on which cards to render, add send to cardadder to display it)

- Add list of completed cards and trash cards to main display to keep track

- fix the card adder text place holder

- useState body title

----ADD priorty after these are coded