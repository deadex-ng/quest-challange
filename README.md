# bashing-it

## Quest Details 
#### title: Tar Trek
#### level: Beginner
#### skills: bash, shell, scripting
#### dependencies: docker_localsetup


## Overview 
Help investigate a security incident at our company. As a member of IT team, use tar command in script to extract, compress and backup system logs for analysis. Learn important archiving skills and assist in resolving the incident. Become a valuable asset to the team with Tar Trek: The Archive Adventure.


## Outline
Describe each step in the quest. 
- Step 1 [step id]: Recive a link of a log file and count the names who accessed the system on the given date
- Step 2 [step id]: Tell the actual names
- Step 3 [step id]: Write a script that receives the log file as an argument and creates an archive
- ...


## Textbook solution
For each step, describle all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks. 
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.  
### Instructions for completing the quest: 
#### Step 1 [counter]: 
- Learning Objective: Learn at least one bash command that can search for a specific string in a file
- Narrative: A team manager sends the player a snack message about an investigation on a breach in the system and asks how many users accessed the system on a particular date. At the same time, Lucca sends a snack message commenting as they talk.
- Instruction: Download the file from a link (sent by product) and search for users who accessed the system at a particular date.Then send the number of users to the team mananger(as a snack message)
- How do users pass to the next step: The player sends the correct number to the team manager
- Hints: Search for strings in file with Linux commands

 
#### Step 2 [get_names]:
- Learning Objective: Reading through logs
- Narrative: The team manager asks for their names
- Instruction: Read through the logs and check when a user's session started and ended.
- How do users pass to the next step: The player sends the correct names to the team manager
- Hints:
    - Check the logs for the users who accessed the system on June 16

#### Step 3 [bash_script]:
- Learning Objective: Writing bash scripts
- Narrative: The team manager asks the player to open a PR with the script for future use.
- Instruction: Create a script that takes in a file as a argument and outputs a zipped archive of the file in the root directory.
- Hints:
    - In order to allow someone else to use your script you would want to make it exectutable. You can find instructions here [link](https://www.andrewcbancroft.com/blog/musings/make-bash-script-executable/)
    - To get arguments in your bash script you can use the following [link](https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script)
    - To create archives using tar. You can find instructions here [link](https://linuxize.com/post/how-to-create-and-extract-archives-using-the-tar-command-in-linux/) 

# Play Quest
You can the quest [here](https://www.trywilco.com/quests/tar-trek)
