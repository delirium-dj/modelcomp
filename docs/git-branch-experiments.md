# Git Branch Experiments — Senior-to-Junior Guide

> Running example: **UI redesign experiment** on branch
> `experiment/ui-redesign-experiment`, playground route **`/v2`**.
> Same infrastructure, completely new UI. Merge it if you love it,
> delete it if you don't — `master` never gets hurt.

## 1. The mental model (read this once)

- `master` = production truth. Always deployable, always clean.
- A **branch** = a cheap, disposable copy of the whole project.
  Commits on the branch do not touch `master` until you explicitly merge.
- Golden rule: **one branch = one idea.** `experiment/ui-redesign-experiment`
  holds only the redesign. Bugfixes go elsewhere.

## 2. Before you branch: park your work

Branches carry uncommitted changes with them, so start clean.
You were on `master` with modified + untracked files — we parked them first:

```powershell
git status
git stash push -m "wip before ui-redesign" --include-untracked
git pull origin master
```

`stash` = put current mess in a drawer. `stash list` shows the drawer.
`stash pop` brings it back when you need it. Nothing is lost.

## 3. Create and switch to the experiment branch

```powershell
git checkout -b experiment/ui-redesign-experiment master
git push -u origin experiment/ui-redesign-experiment
```

- `checkout -b <name>` = create branch + switch to it in one step.
- `-u origin` = backup to GitHub so a dead laptop doesn't kill the experiment.
- Verify: `git branch --show-current` must print the new name.

Naming: `experiment/` prefix signals "disposable".
Slugs only: lowercase, hyphens, no spaces.

## 4. Develop on the branch (the `/v2` pattern)

Scope contract for this redesign:

- **Do NOT touch (infrastructure):** `src/data/*`, `scripts/*`,
  `model/**`, `model-queue.md`, `src/routes/model/[slug]/` loading.
- **Free to reinvent (UI):** `src/components/*`, styles, and the new
  `src/routes/v2/index.tsx` playground.

Why `/v2` and not overwrite `/`? Because `/` stays live while you
experiment. `src/routes/layout.tsx` renders `/v2` as a standalone
canvas (no Header/Footer), exactly like the existing
`design-6sol` / `design-glm53f` studies. Compare `/` vs `/v2`
side by side, then swap only on accept.

Checkpoint often — small commits are easy to review and easy to abandon:

```powershell
git add src/routes/v2/index.tsx src/routes/layout.tsx
git commit -m "Experiment: v2 hero v1"
git push
```

Preview (you run these, agents don't per repo policy):

```powershell
pnpm sync && pnpm build.types:direct && pnpm build:direct
```

## 5A. Outcome: accept (merge it in)

```powershell
git checkout master
git pull origin master
git merge experiment/ui-redesign-experiment
git push origin master
git branch -d experiment/ui-redesign-experiment
git push origin --delete experiment/ui-redesign-experiment
```

What happens: all branch commits replay onto `master`.
`-d` (lowercase) only deletes if fully merged — a safety catch.
If `/v2` wins, a follow-up commit moves its composition to `/`.

Partial keep (redesign fails but one component shines):

```powershell
git checkout master
git checkout experiment/ui-redesign-experiment -- src/components/HexRadar.tsx
git commit -m "Keep redesigned HexRadar, drop rest of experiment"
git branch -D experiment/ui-redesign-experiment
```

## 5B. Outcome: abandon (erase completely)

```powershell
git checkout master
git branch -D experiment/ui-redesign-experiment
git push origin --delete experiment/ui-redesign-experiment
```

- `-D` (uppercase) = force delete, no merge needed.
- `master` is byte-identical to before. No cleanup, no revert commits.
- Local reflog still holds the commits for ~30 days if you panic —
  nothing a user will ever see.

Never run on `master` without asking a senior first:
`git reset --hard`, `git clean -fd`, `git checkout HEAD -- .`
(these discard work with no undo; they are also banned for agents
by `RULES.md` without explicit approval).

## 6. Cheat-sheet

| Question | Command |
|---|---|
| Where am I? | `git branch --show-current` |
| What's dirty? | `git status --short` |
| All branches? | `git branch -a` |
| What did I do? | `git log --oneline --graph -10` |
| Park work | `git stash push -m "msg" --include-untracked` |
| Bring it back | `git stash pop` |
| New experiment | `git checkout -b experiment/<name> master` |
| Abort branch | `git checkout master` + `git branch -D experiment/<name>` |

## 7. What we did in this repo (receipt)

1. `git stash push` parked ~54 modified + 13 untracked files from `master`.
2. `git checkout -b experiment/ui-redesign-experiment` — you are here now.
3. Added this file + `src/routes/v2/index.tsx` (data from `MODELS`,
   zero changes to scoring/sync).
4. `layout.tsx` excludes `/v2` from Header/Footer so the canvas is blank.
5. Merge with §5A or erase with §5B when the jury decides.
