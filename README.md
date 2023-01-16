# bashing-it

## Quest Details 
#### title: Bashing It
#### level: Beginner
#### skills: bash, shell, scripting
#### dependencies: docker_localsetup


## Overview 
Sometimes, the Product department comes to you with a monumental challenge only you can solve. Too often, though, what they need is something small — and inexplicably, they ask for it once every few days. You can do it manually every, of course, but that romance novel that’s your way out of the industry won’t write itself. Thankfully, there’s bash scripting.


## Outline
Describe each step in the quest. 
- Step 1 [step id]: Recive a link from product and download the correct format of the file, then read from file and count number of people with the suspected email address
- Step 2 [step id]: Tell the product their actual names
- Step 3 [step id]: Print the result to a file and send the actual file to the product team
- Step 4 [step id]: Convert to a script that recieves a file as an argument
- ...


## Textbook solution
For each step, describle all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks. 
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.  
### Instructions for completing the quest: 
#### Step 1 [step id]: 
- Learning Objective: Recognise a correct file format that can be manipulated through bash. Read from a file and learn at least one bash command that can search it for a specific string or symbol
- Narrative: The product team sends the player a Snack message about a mole in the system and asks how many email addresses (in a given file) are related. At the same time the engineer sends a Snack message telling the player this happens every week and it's a huge file and suggests creating a bash script for this task. 
- Instructions: Download the file from a link (sent by product) and make sure the file format is usable in a bash script. Read from the file and search for the correct addresses and then send the number to the product team (as a Snack message)
- How do users pass to the next step: The player sends the ansewr to the product team
- Hints: 

 
#### Step 2 [step id]:
- Learning Objective: Manipulating strings and cutting out parts of a file
- Narrative: The product team asks for their actual names (first name + last name as two words)
- Instructions: Find the right columns, seperate the strings (if needed) and cut the redundant information out of the file. Then send the product team the names as a Snack message.
- How do users pass to the next step: The player sends the answer to the product team
- Hints:


#### Step 3 [step id]:
- Learning Objective: Printing the output into a file
- Narrative: The product team asks for a separate file they can use, not some Snack message
- Instructions: Print the result to a file and send the actual file to the product team
- How do users pass to the next step: The player sends the product team a file with the names (could be a txt or any other readable file)

#### Step 4 [step id]:
- Learning Objective: Exporting the script from the terminal to a reusable script
- Narrative: The engineer asks the player to open a PR with the script so that others in R&D could use it when needed
- Instructions: Convert to a script that recieves a file as an argument and outputs a file into a folder on the user's (another programmer) machine, then open a PR for this step

