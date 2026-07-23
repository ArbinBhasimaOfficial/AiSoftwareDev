links
upkraft day 2
https://upkraft-course.suparth.com.np/courses/git-github#/

ssh setup
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


pwd - print win directory



git init

git add . / git add -A

git commit -m "Initial Commit For First Commit."

git push -u origin main


version create garnu vaneko nai commit ho

convententional commit message.
git log hash

PS C:\ArbinBhasimaAISoftware\AISoftwareDeveloperCourse\AISoftwareDeveloper> git remote -v
origin  https://github.com/ArbinBhasimaOfficial/AiSoftwareDev.git (fetch)
origin  https://github.com/ArbinBhasimaOfficial/AiSoftwareDev.git (push)
PS C:\ArbinBhasimaAISoftware\AISoftwareDeveloperCourse\AISoftwareDeveloper>


git add . this only changes on inside directory

git add -A this changes all the directory even if you are inside the initialied git and inside it.

fork.

        A Git fork is a separate copy of an existing repository, usually on a hosting service like GitHub, that you can modify independently without changing the original project. It’s commonly used to experiment, customize code, or contribute changes back through a pull request.

    How it differs from clone

        A fork creates its own repository under your account and stays independent from the original, while a clone is just a local copy of a repository on your machine. In practice, people often fork a repo first, then clone their fork locally to work on it.

    Typical use cases

        Contributing to open source without direct write access to the main repo.

        Testing risky changes safely in your own copy.

        Maintaining your own version of a project while keeping the original as an upstream reference.

    Simple example

        If you fork a GitHub project, you get your own version of that repo. You can commit changes there, and if you want your changes merged into the original project, you open a pull request from your fork.

        There is no native git fork command in standard Git; fork usually refers to a platform feature like GitHub’s fork button or a workflow built around copying and syncing repositories.


merging

    Git merging is the process of combining changes from one branch into another branch. In Git, its how you bring separate lines of development back together.

    Step-by-Step: How to Merge Branches

    Here is the standard workflow to merge a branch called feature-chat-ui into main:
    1. Save Your Current Work

    Make sure all your changes on your feature branch are committed or stashed.
    Bash

      git add .
      git commit -m "Finish chat UI component"

    2. Switch to the Target Branch

    You must be standing inside the branch that will receive the code (e.g., main).
    Bash

      git checkout main
      or
      git switch main

    3. Pull the Latest Remote Changes

    Ensure your local main branch is completely up to date with the remote server before merging.
    Bash

      git pull origin main

    4. Merge the Feature Branch

    Run the git merge command followed by the name of the branch you want to bring in.
    Bash

      git merge feature-chat-ui

    5. Push the Merged Code

    Upload the newly combined branch back to GitHub or GitLab.
    Bash

      git push origin main

    What About Merge Conflicts?

    If you and another developer edited the exact same line in the same file, Git won't know which version to keep and will pause the merge to flag a Merge Conflict.

        Open the conflicted file in your editor (VS Code will highlight the conflicting lines in green/blue).

        Choose which code to keep (Current Change, Incoming Change, or Both).

        Save the file, stage it, and complete the merge commit:
        Bash

        git add .
        git commit -m "Resolved merge conflict in style.css"
        git push origin main


rebasing
    While git merge combines two branches by creating a special "merge commit" that ties them together, Git rebasing takes all the new commits from your current branch and "re-applies" them on top of another branch.

    Think of it like cutting your branch off where it started and pasting it onto the very tip of the main branch.
    Merge vs. Rebase: What's the Difference?

    Imagine you created a feature branch from main. While you worked, someone else pushed new code to main.

        git merge (Preserves History): Combines both branches by creating a new Merge Commit. Your history looks like a web with branches splitting off and joining back together.

        git rebase (Rewrites History): Takes your feature commits, temporarily sets them aside, moves your starting point to the latest commit on main, and replays your commits one by one. Your history becomes a clean, single straight line.

    Step-by-Step: How to Perform a Rebase

    Here is how you update your feature branch with the latest changes from main using rebase:
    1. Make Sure Your Feature Branch Is Clean

    Commit or stash any uncommitted changes on your branch.
    Bash

      git add .
      git commit -m "Finish styling option cards"

    2. Update Your Local Main Branch

    Switch to main and pull down the latest code from GitHub/GitLab.
    Bash

      git checkout main
      git pull origin main

    3. Rebase Your Feature Branch

    Switch back to your feature branch and tell Git to rebase it onto main:
    Bash

      git checkout feature-chat-ui
      git rebase main

        What happens here: Git moves your feature branch's base to the head of main and re-applies your commits one by one.

    What Happens if There Are Conflicts?

    If Git encounters a conflict during a rebase, it will pause the process on the specific commit that caused the issue.

        Open the conflicted files and resolve the code conflicts.

        Stage the resolved files:
        Bash

        git add .

        Tell Git to keep going (do not run git commit!):
        Bash

        git rebase --continue

    (If you ever get stuck or panic during a rebase, you can safely abort and go back to where you started with git rebase --abort).
    The Golden Rule of Rebasing

        Never rebase a public/shared branch!

    Because rebasing rewrites commit history (it gives your commits brand-new hash IDs), you should only rebase:

        Your own local branches that haven't been pushed yet, OR

        Feature branches that only you are working on.

    If other developers are actively pulling and working on the same branch, rebasing will cause massive sync errors for them.


branch
  Basic Branch Commands Action Git Command

  View branches
    git branch

  Create a new branch
    git branch <branch-name>

  Switch to a branch
    git checkout <branch-name> (or git switch <branch-name>)

  Create & switch in 1 step
    git checkout -b <branch-name>

  Merge into current branch
    git merge <branch-name>

  Delete a branch
    git branch -d <branch-name>


// main branch is default branch
