# ignite-sci-project

This is the guide for setting up the Ignite logistics project. Welcome contributors!

## Setting Up Repository 

On the github website go to my page, and locate the ignite-sci-project. Upon loading the project, in the top right screen, press the "fork" button.

The first step upon forking is to clone the repository from the command line. 

git clone https://github.com/name/ignite-sci-project.git ignite-sci-project-name

The next step is to load your git directory via command line still.

cd ignite-sci-project-name

Upon loading the directory, use this command to hook up your repository to my repository for changes, and updates.

git remote add upstream https://github.com/ignite-sci-project/ignite-sci-project

### Checking out a Branch (Old-Fashioned Terminal )

Checking out a branch is important and scary. To avoid this I'll write the guide to start any idea you want as a pull request.
In your project directory, checkout the given branch you would like to work on. I typically name mine something along the lines of "last_name-task-branchnumberfortask"

git checkout -b given-branch-name                

You then add the file you worked on to be committed to your branch with the following.

git add file-name.extension 

Then commit. 

git commit -m "Commit description" 

Then push it to your branch! 

git push origin --set-upstream branch-name

## Branch, Push, and Pull Request

Upon pushing your first commit to that branch, go on the github website. Then upon loading the github website, go to your forked repo and it'll show you an icon to open a pull request. Open the pull request, name it what feature you would like, and add a good description for those who'd like to work on it with you. Each commit will act as an update to this pull request as well keeping a record of what we need to do and what's been done.

## Setting Up Source Tree

Download source tree, skip the bit bucket stuff, add your github account via ssh, generate ssh key pair on source tree with button, copy to clipboard, go to your github account settings, select ssh tab, add the key pair to your account, name the key source tree or whatever you need to remember!