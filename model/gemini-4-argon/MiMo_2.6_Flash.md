# Gemini 4 Argon — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 88). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, overall 82.1, rank #5/1016) and the Artificial
> Analysis model page + leaderboards. Changes: Reasoning 86→89 (FrontierMath
> v2 and ARC-AGI-2 rows now public); Context window 90→95 (1M input now
> corroborated by AA, BenchLM and Google's eval-methodology page);
> Overall 88→90. Held: Tool use 84, Multimodal 88, Coding 93, Cost 72.

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's first Gemini 4-generation frontier model (announced 2026-09-30) for long-horizon software engineering, enterprise knowledge work (legal/finance), and cybersecurity defense — headline feature is an industry-leading 1M-token **output** limit (up from 64K). Not a variant/alias; the new Gemini 4 flagship line (sibling: Gemini 4 Carbon).
- **Provider / access:** **Gemini API paid tier** (`gemini-4-argon` — confirmed on Google's Gemini API pricing page via the BenchLM price registry 2026-11-06; explicitly *not* on the Free tier), plus the staged rollout (Fairwind Program for trusted cyber defenders, US government evaluators, Google AI Ultra). AA lists 3 API providers. Chat Completions-style Google Genai/REST API.
- **Release / knowledge:** announced / released 2026-09-30 (AA + Google); knowledge cutoff not published; Google publishes an eval-methodology page rather than a traditional model card.
- **IDs:** `gemini-4-argon` (Gemini API, paid tier) — **an ID now exists** (previous pass: none published).
- **Context window:** **1,000,000 tokens input** — now corroborated by three sources (AA model page "Context window 1M", BenchLM family page, and Google's Gemini 4 Argon eval-methodology page); previously unverified. Max output 1,000,000 tokens per Google (up from 64K); Vals's harness capped max output at 262,144.
- **Modalities:** text, image, video, file input (Vals model page; Google's LVBench 91.7% run evidences video-in); text out (AA confirms text+image in / text out); reasoning yes (effort levels not officially documented; evals ran "high"/max thinking); tool calls yes (Antigravity harness, computer use).
- **Pricing (as of 2026-11-08):** **$2 in / $10 out per 1M through 2026-11-30**, then **$4 / $20 from 2026-12-01**; implicit cached input $0.10 → $0.20 (explicit caching unsupported); Batch/Flex $1/$5 → $2/$10; Priority $3.60/$18 → $7.20/$36. Source: Google Gemini API pricing page (effective 2026-09-30), via BenchLM registry 2026-11-06. Paid — no free tier. AA already bills the $4/$20 list rate ($9.95 per Intelligence Index task).
- **Architecture:** proprietary (parameters undisclosed; no public model card).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (Google eval-methodology chart, Zapier — rank #1) / **77.5%** (Artificial Analysis' own AutomationBench harness, 7 pts ahead of Sonnet 5.5) — harness divergence, both listed.
- Terminal-Bench 4.0: **57.40%** (Google) / ~57.0–57.58% (AA, vals.ai rank 5/44) — behind Claude Opus 5.5's 66.4%.
- GDPval-AA v2.1: **1611** Elo (Artificial Analysis, independent; Opus 5.5 1846, GPT-6 Astra 1542). GDPval-AA normalized: 56.2%.
- AA-Briefcase: **65%** rubric pass rate — highest AA has recorded (analysis/presentation marks lower).
- Agents' Last Exam: **39.5%** (Google eval methodology — new this pass; Opus 5.5 38.2%).
- AA-AnalystAgent: **48.8%**; MazeBench (ASCII, no tools): 12% (AA/BenchLM 2026-11-07).
- OSWorld 2.0 (offline subset): **69.2%** (Google, best-of-three runs; GPT-6 Astra 72.6%).
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas / OSWorld full: no verified public score found.

Reasoning / knowledge:

- HLE: **57.1%** (Artificial Analysis independent; Opus 5.5 61.4%, Astra 55%).
- Artificial Analysis Intelligence Index: **50** on the current v5.0.1 scale, rank **#15 / 69** (previous snapshot: 52.6–53 on the older v4.3 scale — scale changed, not a capability drop).
- FrontierMath v2: **85.965%** (Tiers 1–3) and **78.049%** (Tier 4) — Epoch AI FrontierMath v2 leaderboard (**new this pass**).
- ARC-AGI-1: **98.50%** / ARC-AGI-2: **91.3%** / ARC-AGI-3: **46.3%** (provider adapter 97.30%) — ARC Prize published semi-private results (**new this pass**).
- AA-LCR: **79.7%**; CritPt: **27.1%** (AA, current snapshots).
- AA-Omniscience v1.1: index **46.1**, accuracy **48.3%**, hallucination rate **4.3%** (an earlier AA snapshot read ~15% — v1.1 harness; still class-leading low).
- GPQA Diamond: no verified public score found.
- Domain: Vals Index **68.9%** (#1 of 44), Vals Finance Agent v2 **65.4%** (#1/75), Harvey Legal Agent **19.6%**, LABBench 2 **88.8%**, RiemannBench 76.0%, PostTrainBench **45.3%**, Gray Swan IPI **0.7%** (15 attempts).

Coding:

- DeepSWE v1.1: **77.9%** (Google, mini-swe agent, highest thinking — new SOTA; vs Astra 74.1%, Opus 5.5 74.2%).
- Vibe Code Bench: **91.90%**; FrontierSWE v2: **55.0%** (trails Astra 65.5%).
- AA-SciCode: **61.8%** (Artificial Analysis, independent).
- ScarfBench: **75.2%** (Kaggle/IBM Research leaderboard — new this pass; Opus 5.5 70.5%).
- FrontierCode 2.0: **26.3%** (Cognition's harder v2 harness — new this pass; Opus 5.5 45.5%).
- Terminal-Bench-Science 0.1: **57.6%** (Google, 6× verifier timeout — trails Astra 68.1%).
- CWE-bench v1: **68.0%** (tie for first, pass@4 75%).
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found.

Long context:

- GraphWalks BFS (F1): **99.7%** up to 128K; **84.2%** in the 256K–1M band (vs Astra 71.8%, Opus 5.5 66.8%) — Google ran all models itself (Google eval-methodology page, via BenchLM 2026-11-07).
- MRCR / RULER: no verified public score found.

Multimodal:

- LVBench (long video understanding): **91.7%** (Google — SOTA at launch, re-confirmed on the eval-methodology page).
- Chartography (no tools): **71.6%**; ExtractBench Pro: **30%**; Design Arena Website: **1316** Elo (OpenRouter).
- Audio input / non-text output: no verified public score found (AA confirms text+image in, text out).

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 51.3 (Google #1) / 77.5 (AA harness), OSWorld 69.2%, TB4.0 57.4% and the new Agents' Last Exam 39.5% are solid but behind leaders, and GDPval-AA 1611 sits above the mid band yet below the 1750 frontier ref — held at 84 because Tau3-Banking and Claw-Eval are still unpublished and no TB2.1 row exists.
- **Reasoning: 89/100.** Two frontier-grade public reasoning rows appeared this pass — FrontierMath v2 85.965% (T1–3) / 78.049% (T4) on Epoch AI's leaderboard and ARC-AGI-2 91.3% on ARC Prize — alongside HLE 57.1% (clears the 40% ref) and a 4.3% hallucination rate; raised 86→89, capped below 90 because AA Index 50 (#15/69) is well short of the 60+ frontier ref and GPQA Diamond remains unpublished.
- **Context window: 95/100.** The 1M input spec is now verified by AA, BenchLM and Google's eval-methodology page (previous pass: unverified, scored in the 500K–1M band) → the ≥1M tier (95–100) applies, and GraphWalks 84.2% at 256K–1M (99.7% at 128K) proves real long-range retrieval; not 100 because 84.2% is far below the ≥98%-at-512K+ bar (MRCR/RULER still unpublished).
- **Multimodal: 88/100.** Text/image/video/file in with text out and SOTA long-video understanding (LVBench 91.7%) keeps it at the top of the "+video/PDF in = 75–90" band; held at 88 because no audio input is claimed (that alone reaches 90–100), output is text-only, and the new ExtractBench Pro 30% shows weak document extraction.
- **Coding: 93/100.** DeepSWE 77.9% remains a new SOTA (74%+ ref cleared), Vibe 91.9%, AA-SciCode 61.8% (55%+ ref), CWE-bench tie-first and a strong new ScarfBench 75.2% row; held at 93 by FrontierSWE v2 55.0%, the new FrontierCode 2.0 26.3% (behind Opus 5.5's 45.5%), TB-Science trailing Astra, and still no SWE-bench Verified/Pro/LiveCodeBench rows.
- **Cost efficiency: 72/100.** Pricing is now dated rather than open-ended — $2/$10 through 2026-11-30, then $4/$20 from 2026-12-01 (Google pricing page) — which puts expected cost between the ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 anchors; 72 holds as the intro/list blend, with the same verbosity (~113M output tokens per Index run) and paid-only/no-free-tier caveats as before.
- **Overall Score: 90/100.** (84+89+95+88+93)/5 = 449/5 = 89.8 → 90 — best-fit frontier pick for legal/finance/long-video/very-long-context agentic work; strongest value flagship while the $2/$10 intro rate lasts (until 2026-11-30), then $4/$20 list.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + leaderboards, Google Gemini API pricing page, Epoch AI FrontierMath v2, ARC Prize published results, Google DeepMind eval-methodology page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/gemini-4-argon)
  - [Gemini 4 Argon (Artificial Analysis)](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 4 Argon evaluation methodology (Google DeepMind)](https://deepmind.google/models/evals-methodology/gemini-4-argon)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [ARC Prize published results — Gemini 4 Argon](https://arcprize.org/results/google-gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
