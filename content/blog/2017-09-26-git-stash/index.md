---
title: "How to use git stash (and when not to use it)"
date: "2017-09-26"
---

![guy wearing shades working on laptop in a dark room](images/neonbrand-356967.jpg) Photo by [NeONBRAND](https://unsplash.com/photos/_Kmtj6UIlGo)

Use case: You want to switch to a different branch on the same project (say from `feature-branch` to `staging`), but you have uncommitted changes and git insists you commit before switching branches.

```shell
# from feature branch
git checkout staging

# error: Your local changes to the following files would be overwritten by checkout:
#   ansible-django/roles/web/tasks/setup.yml
# Please, commit your changes or stash them before you can switch branches.
# Aborting
```

Using `git stash` is really straightforward for most cases. It involves `git stash` to "stash away" all your uncommitted changes in your current branch, and `git stash pop` to restore those changes when you're back in the branch where you want to apply those changes.

To stash your uncommitted changes:

```shell
# stash uncommitted changes before switching to work on another branch
git stash
git checkout staging
```

When you're done working on the other branch, restore your uncommitted changes:

```shell
# restore previously stashed changes
git checkout feature-branch
git stash pop
```

Another neat fact about `git stash` is that it is apparently maintained across the all branches in your git repository. What that means is if you do `git stash` in feature-xyz branch, you can run `git stash pop` in master branch, for example. This can be useful if you've accidentally written code on a wrong branch.

### Git stash is not always the best solution

There are times when it's not wise to use `git stash` to keep your uncommitted changes before switching branches. I found that when I'm **unsure how long I'm going to be working on another branch**, it's better to _not_ use `git stash`.

The reason is simple: you might forget that you'd done work there. This happened to me a few times, and when I finally remembered that I'd done work and stashed it previously, it's already too late. I'd have gone ahead and re-did the work.

So in situations where you're unsure how much time you will be spending working on a different branch in the same repository, it's probably best to do what I've come to call (to myself) a "reluctant commit".

A **reluctant commit** (I use the shorthand "RC" in commit messages to indicate this) is my made-up alternative of `git stash`. (In fact I used it way before discovering `git stash`.) The steps are:

- Commit the changes on the branch you're about to leave behind
- Indicate in the commit message that it is a reluctant commit
- Checkout to another branch to work on it
- When back on the branch you left behind, continue working, and when done, squash commits

The benefit of this RC approach is that you don't have to rely on your own memory to remember that you had already begun work on the branch - it's already committed. Run `git log` to check what you'd already done, and carry on from there.

```shell
# do a reluctant commit before switching to another branch
git add .
git commit -m "RC: in middle of adding product API"
git checkout feature-branch-2
```

When done working on this branch, I'd usually clean up the commits by squashing them using `git rebase -i HEAD~<num_of_commits>` (see [squash git commits](https://www.nickang.com/squash-git-commits/) guide), so the reluctant commit is squashed into the final, single commit.

That's it about reluctant commits.

Please note that I'm merely covering the main use case of `git stash` in this post, and deliberately left out the intricate and powerful peripheral options. For example, `git stash pop` is actually restoring the changes and deleting the stash in the same command, which can be separated - like how `git pull` is the combination of `git fetch` and `git merge`.

Read more directly from the makers via the [docs](https://git-scm.com/docs/git-stash).

Other git-related short tutorials:

- [How to squash git commits](https://www.nickang.com/squash-git-commits/)
- [How to completely replace git branch code with another branch’s code](https://www.nickang.com/replace-git-branch-code/)
