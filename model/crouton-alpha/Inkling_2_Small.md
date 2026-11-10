# Crouton Alpha — findings by Inkling 2 Small

- Source: Meta (`crouton-alpha`, stealth-era alias of `muse-ember-1.0`)
- Date: 2026-11-10 (UTC) — deep second pass 2026-11-10
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Crouton Alpha (revealed 2026-11-09/10 — an early version of **Muse Ember** by Meta)
- **Short description:** OpenRouter stealth routing name for Meta's smallest, most efficient model, revealed at the Muse Ember launch (2026-11-09, blog + HN announcement). The stealth period is over; the route now resolves to `meta/muse-ember`. All evidence below was measured under the revealed ID `muse-ember-1.0` (lineage data cited labelled, never silently merged into another entry).
- **Provider / access:** Meta Model API (`muse-ember-1.0`), Muse Code, OpenRouter (`meta/muse-ember`, `$0.10/$0.50`), Google Cloud + Oracle Cloud (per Meta announcement). Responses API.
- **Release / knowledge:** Stealth early-access window served until 2026-11-09 (revealed 2026-11-09/10); Muse Ember released 2026-11-09; knowledge cutoff not publicly stated.
- **IDs:** `muse-ember-1.0` (Meta); `meta/muse-ember` (OpenRouter)
- **Context window:** 1,048,576 tokens; max output 524,288 tokens (models.dev; 512K per Meta).
- **Modalities:** text (+image) in → text out per Artificial Analysis; Meta's blog claims native text/image/audio/video in — conflict noted, unverified; reasoning yes (xhigh/max effort tiers; AA lists a non-reasoning variant may also exist); tool calls yes (measured); Responses API.
- **Pricing (as of 2026-11-10):** $0.10 / 1M input, $0.50 / 1M output, $0.004 cached input (≤200K prompts); above 200K: $0.30/$0.012/$1.50 (Meta pricing note). ~$0.14 per Artificial Analysis Intelligence Index task — the efficiency frontier claim (no model scores higher per $/task). Dedicated >200K tier noted by Meta.
- **Architecture:** proprietary; parameter count undisclosed. First model trained using Muse Wonder Full (per Meta). Smallest Meta model; open to all users ("Personal Superintelligence for everyone" positioning).

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **37.8%** strict pass@1 (Meta launch; vs Haiku 5.5 13.9%, GPT-6 Luna 20.2%); **68.1%** on the AA AutomationBench leaderboard (different metric, not directly comparable)
- Agents' Last Exam (Linux subset, Meta internal): **61.6%** (vs Haiku 5.5 57.0%, GPT-6 Luna 57.1%)
- OSWorld 2.1: **69.5%** partial-credit (Meta internal; vs Haiku 5.5 68.9%, GPT-6 Luna 50.5%)
- AA-Briefcase Elo: **1521** (Artificial Analysis aa-briefcase leaderboard)
- Personal Superintelligence Index (Meta internal composite): **46.8%** (vs Haiku 5.5 36.1%, GPT-6 Luna 37.0%)
- Terminal-Bench 4.0: **40.9%** (Meta, mini-swe-agent harness); AA Terminal-Bench 4.0: **40.9%**
- Coding Agent Index-AA: **46** (AA coding agents index, vs Haiku 5.5 37, GPT-6 Luna 31)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** (#2/33 in its price class; #22 overall class ranking per AA "max" page)
- MLCR-AA: **18.3%** (Artificial Analysis mlcr-aa leaderboard)
- AA-Omniscience: Index **7.4**, Accuracy **21.1%**, Hallucination Rate **17.4%** (Artificial Analysis)
- No public GPQA/HLE/AIME rows published for this ID

Coding:

- Coding Agent Index-AA: **46** (AA)
- Terminal-Bench 4.0: **40.9%** (Meta/AA)
- FrontierCode 2.0-AA: **27.2%** (AA; vs Haiku 5.5 34.9%, GPT-6 Luna 25.2%)
- SWE-bench / LiveCodeBench: no verified public score found

Long context:

- 1,048,576 tokens documented; AA-LCR not published for this ID — no verified public long-context retrieval score found (MLCR-AA 18.3% is the nearest measured long-document row).

Multimodal:

- PerceptionBench (with tools): **80.6%** (Meta internal; vs Haiku 5.5 78.6%, GPT-6 Luna 62.8%)
- GDP.pdf-AA: **22.8%** (AA; ties GPT-6 Luna 22.8%, beats Haiku 5.5 20.8%)
- OSWorld 2.1: **69.5%** (computer use from screenshots; Meta internal)
- Meta claims native text/image/audio/video understanding; Artificial Analysis tracks text+image input only — modality conflict unverified

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench-AA 37.8% (strict), Agents' Last Exam 61.6%, OSWorld 69.5%, Coding Agent Index 46 — outstanding per-dollar agentic behavior for the smallest Meta model; capped by strict-pass vs relaxed-metric ambiguity and AA-Briefcase 1521.
- **Reasoning: 56/100.** AA Index 36 (#2/33 in class), PSI 46.8%; capped hard by MLCR-AA 18.3%, Omniscience Index 7.4 and no public GPQA/HLE rows — narrow measured frontier.
- **Context window: 82/100.** 1M tokens / 512K output (Responses API) verified across Meta, AA and models.dev; retrieval unmeasured publicly — scored on window + general task evidence.
- **Multimodal: 74/100.** PerceptionBench 80.6% (tools), OSWorld 69.5%, GDP.pdf 22.8%; AA tracks text+image only vs Meta's text/image/audio/video claim — the conflict caps this; no audio/video output.
- **Coding: 60/100.** Coding Agent Index 46 and Terminal-Bench 4.0 40.9% (mini-swe-agent) are solid for a tiny model; FrontierCode 2.0 27.2% trails Haiku 5.5 34.9% — real but not flagship coding.
- **Cost efficiency: 94/100.** $0.10/$0.50 with 96% cache discount and ~$0.14 per AA task — the efficiency-frontier claim is AA-verified (no higher-scoring model at this $/task).
- **Overall Score: 69/100.** (72 + 56 + 82 + 74 + 60) / 5 = 68.8 → 69. Best fit: high-volume repeatable agentic coding/tool-call work at near-floor cost (review loops, routing, extraction, OSWorld-style UI agents); pair with Muse Wonder for hard problems.

## Confirmation note (for this file)

This file now carries a real, scored report backed by verified public evidence. Per the twin rule it retires its sibling `Inkling_2_Small.md.excluded` — deletion requires your explicit per-file confirmation (see chat). The `crouton-alpha` slug itself remained OpenRouter's *stealth routing* name, not a model; research for the revealed model belongs in the canonical `muse-ember` folder once the orchestrator performs the revealed-stealth rename (its `.md` wins there, this file is in scope of that move).

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC (deep second pass)
- Method: public internet research (Meta Muse Ember blog, HN announcement, Artificial Analysis, BenchLM, models.dev, OpenRouter catalog, HF, GitHub); scores are normalized 1–100 interpretations, not official vendor scores. Lineage labelled: all benchmarks above were measured under `muse-ember-1.0`.
- Reference URLs:
  - [Introducing Our Smallest, Most Efficient Model: Muse Ember — Meta](https://research.meta.ai/blog/muse-ember)
  - [Muse Ember (Max) — Artificial Analysis](https://artificialanalysis.ai/models/muse-ember)
  - [Muse Ember — BenchLM](https://benchlm.ai/models/muse-ember)
  - [Muse Ember 1.0 — models.dev](https://models.dev/models/meta/muse-ember-1.0)
  - [Muse Ember — OpenRouter](https://openrouter.ai/meta/muse-ember)
  - [HN announcement — Muse Ember (Crouton Alpha revealed)](https://news.ycombinator.com/item?id=50429024)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
