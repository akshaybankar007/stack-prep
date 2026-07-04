// gitContent.js
export const gitContent = {
  "1": {
    title: "Git vs GitHub (Differences)",
    sections: [
      {
        heading: "Overview",
        text: "Git is a distributed version control system that tracks changes in source code. GitHub is a cloud-based hosting service for Git repositories with collaboration features."
      },
      {
        heading: "Key Differences",
        text: "Git is a tool; GitHub is a platform. Git operates locally; GitHub adds a remote server for sharing. GitHub provides UI, issue tracking, PRs, and CI/CD."
      },
      {
        heading: "Use Cases",
        text: "Git is used for version control locally; GitHub is used for team collaboration, code hosting, and project management."
      }
    ]
  },
  "2": {
    title: "Basic Commands",
    sections: [
      {
        heading: "Overview",
        text: "Essential Git commands for daily version control operations."
      },
      {
        heading: "Clone, Add, Commit",
        text: "`git clone <url>` copies a remote repository. `git add <file>` stages changes. `git commit -m 'message'` saves staged changes to local history."
      },
      {
        heading: "Push, Pull, Status, Log",
        text: "`git push` uploads commits to remote. `git pull` fetches and merges remote changes. `git status` shows current state. `git log` displays commit history."
      }
    ]
  },
  "3": {
    title: "Branching",
    sections: [
      {
        heading: "Overview",
        text: "Branches allow parallel development and isolation of features."
      },
      {
        heading: "Creating and Switching",
        text: "`git branch <name>` creates a branch. `git switch <branch>` or `git checkout <branch>` moves to it."
      },
      {
        heading: "Merging and Deleting",
        text: "`git merge <branch>` integrates changes from another branch. `git branch -d <branch>` deletes a branch after merging."
      }
    ]
  },
  "4": {
    title: "Merging vs Rebasing",
    sections: [
      {
        heading: "Overview",
        text: "Both integrate changes from one branch to another, but with different results."
      },
      {
        heading: "Merging",
        text: "Creates a new merge commit, preserving history as is. Non-destructive, shows branch splits."
      },
      {
        heading: "Rebasing",
        text: "Moves the entire branch to the tip of the target branch, rewriting commit history. Creates a linear history but can be dangerous for shared branches."
      },
      {
        heading: "When to Use",
        text: "Merge for public history; rebase for local cleanup before merging to main."
      }
    ]
  },
  "5": {
    title: "Resolving Merge Conflicts",
    sections: [
      {
        heading: "Overview",
        text: "Conflicts occur when the same lines are changed in different branches."
      },
      {
        heading: "Resolution Process",
        text: "Git marks conflicts in files with `<<<<<<<`, `=======`, `>>>>>>>`. Manually edit, then `git add` and `git commit` to resolve."
      },
      {
        heading: "Tools",
        text: "Use `git mergetool` or VS Code's built-in merge editor. Also, `git diff` to view differences."
      }
    ]
  },
  "6": {
    title: "Git Workflows",
    sections: [
      {
        heading: "Overview",
        text: "Workflows define branching and release strategies for teams."
      },
      {
        heading: "Git Flow",
        text: "Uses `develop`, `feature`, `release`, `hotfix` branches. Structured but complex. Suitable for projects with scheduled releases."
      },
      {
        heading: "GitHub Flow",
        text: "Simpler: `main` branch always deployable. Feature branches are merged via PRs. Works for continuous delivery."
      }
    ]
  },
  "7": {
    title: "Stashing",
    sections: [
      {
        heading: "Overview",
        text: "Stashing saves uncommitted changes temporarily without committing."
      },
      {
        heading: "Commands",
        text: "`git stash` saves changes. `git stash pop` applies and removes the stash. `git stash apply` applies but keeps it."
      },
      {
        heading: "Use Case",
        text: "Useful when you need to switch branches but aren't ready to commit."
      }
    ]
  },
  "8": {
    title: "Undoing Changes",
    sections: [
      {
        heading: "Overview",
        text: "Different commands to revert or reset changes."
      },
      {
        heading: "git reset",
        text: "Moves the current branch pointer. `--soft` keeps changes staged; `--mixed` unstages; `--hard` discards changes (dangerous)."
      },
      {
        heading: "git revert",
        text: "Creates a new commit that undoes a previous commit. Safe for shared history."
      },
      {
        heading: "git restore",
        text: "Restores working tree files. Can unstage changes or discard local modifications."
      }
    ]
  },
  "9": {
    title: "Remote Repositories",
    sections: [
      {
        heading: "Overview",
        text: "Remote repositories are copies of the project hosted elsewhere."
      },
      {
        heading: "origin and upstream",
        text: "`origin` is the default remote (your fork). `upstream` is the original repository (often used for open source)."
      },
      {
        heading: "fetch and pull",
        text: "`git fetch` downloads remote changes without merging. `git pull` fetches and merges (equivalent to fetch + merge)."
      }
    ]
  },
  "10": {
    title: "Pull Requests and Code Reviews",
    sections: [
      {
        heading: "Overview",
        text: "Pull Requests (PRs) allow proposing changes and requesting review before merging."
      },
      {
        heading: "PR Workflow",
        text: "Push a branch, open a PR on GitHub. Reviewers comment, request changes. Once approved, merge into main."
      },
      {
        heading: "Best Practices",
        text: "Keep PRs small, write descriptive titles, use templates, and ensure CI passes."
      }
    ]
  }
};