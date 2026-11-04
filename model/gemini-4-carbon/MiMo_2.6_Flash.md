# Gemini 4 Carbon — findings by MiMo 2.6 Flash

- Source: Google/Gemini 4 Carbon
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's strongest frontier model (announced 2026-10-28), built for long-horizon agentic engineering and cybersecurity defense. It is a forward step over Gemini 4 Argon (2026-10-13), not a replacement and not an alias — a distinct entry in the Gemini 4 family.
- **Provider / access:** Gemini API / Google AI (Chat Completions-style Gemini API). Rollout is staged: a subset of cyber defenders first, then trusted partners via Google DeepMind's Fairwind Program, then developers/businesses/consumers "as soon as possible" — no public general-availability date as of 2026-11-04. The repo `meta.json` declares the OpenCode route `opencode/gemini-4-carbon`, but the live OpenCode Zen model catalog (checked 2026-11-04) contains no `gemini-4-carbon` entry, so gateway availability is pending.
- **Release / knowledge:** 2026-10-28 (Google launch post; Artificial Analysis FAQ; LLM Stats). Knowledge cutoff not published.
- **IDs:** `gemini-4-carbon` (Gemini API model id, served at reasoning effort "high" — Artificial Analysis tracks `Gemini 4 Carbon (High)` with Low/Medium siblings). **No Free ID exists on OpenCode Zen** (repo `meta.json` `noFreeId: true`; absent from the live Zen catalog on 2026-11-04).
- **Context window:** 1M tokens total (Artificial Analysis model page; Google's own evaluation runs long-context tests to 1M). Max output tokens: repo `meta.json` records 1M out — not independently confirmed in the sources checked here.
- **Modalities:** text, image, speech (audio), video in; text out (Artificial Analysis). Reasoning model — Google's published numbers use the highest thinking setting through the Gemini API. Tool calls yes (agentic terminal, computer-use and knowledge-work benchmarks). JSON/structured-output mode not separately verified.
- **Pricing (as of 2026-11-04):** introductory **$2.00 / $10.00** per 1M input/output, standard **$4.00 / $20.00** per 1M after the introductory period (Google's footnote: "After the introductory period expires, the price of $4 per 1M input tokens and $20 per 1M output tokens will apply"; no confirmed end date for the intro price). Cached input tokens are 95% off the input price (~$0.20 / 1M). Paid only — no $0 tier. Artificial Analysis currently lists the standard $4/$20. Per-task cost measured by Artificial Analysis: **$7.76** per Intelligence Index task, vs $10.04 for Claude Opus 5.5 (same $4/$20 list) and $6.25 for GPT-6 Astra.
- **Architecture:** proprietary; parameter count, MoE structure and open-weights status not disclosed (Artificial Analysis: "Google has not disclosed the model size or parameter count").

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier, Google's private set): **53.9%** (Google evaluation table; #1 — Argon 51.3%, Claude Opus 5.5 42.5%, GPT-6 Astra 41.4%)
- AA AutomationBench (Artificial Analysis, independently run): **77.8%** (BenchLM citing Artificial Analysis)
- Agents' Last Exam v1.1: **77.4%** (Google evaluation table; #1 — GPT-6 Astra 73.1%, Claude Opus 5.5 71.6%, Argon 69.0%)
- OSWorld 2.1 offline subset: **81.5%** (Google evaluation table; 2nd — Claude Opus 5.5 87.2%, GPT-6 Astra 80.9%)
- Vending-Bench 2 (final bank balance): **$16,484** (Google evaluation table; #1 — GPT-6 Astra $15,515, Argon $13,718, Claude Opus 5.5 $9,235)
- AA-Briefcase v1.1 Elo: **1609** (BenchLM citing Artificial Analysis; behind Kimi K3.1 Pro 1678, Muse Wonder 1659 and Grok 4.7 1638 per the independent review, +126 over Argon's 1483)
- GDPval-AA v2.1: **1733 Elo** (BenchLM citing Artificial Analysis)
- GDPx (SemiAnalysis, 206 tasks across finance/materials/cyber/SWE/legal/biology): **#2 overall behind Claude Opus 5.5**, at roughly **$16/task** vs ~$51 for Opus 5.5 and ~$54 for GPT-6 Astra; with cybersecurity, biology and alignment removed, GPT-6 Astra leads and GPT-6.1 Sol plus Claude Sonnet 5.5 outrank Carbon (9to5Google reporting SemiAnalysis, 2026-11-02)
- Claw-Eval / ClawProBench: **no verified public score found**
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench: **no verified public score found** (the Terminal-Bench figures below are on v4.0, a different harness generation)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **59** on v5.0 (Google launch post, "#1 of the updated index") / **59.4** (BenchLM) / **60** on v5.0.1, **#1 of 66** (Artificial Analysis model page, 2026-11-04) — see conflict note 1
- HLE-Diamond (Artificial Analysis): **69.1%** (tracked by the repo `meta.json` and by secondary coverage citing Artificial Analysis; #1 vs Claude Opus 5.5 67.9%)
- AA-HLE: **60.4%** (BenchLM citing Artificial Analysis)
- CritPt v2, hard subset (Artificial Analysis): **36.0%** (BenchLM citing Artificial Analysis)
- AA-Omniscience v1.1: net **53.5** / accuracy **58.3%** / hallucination rate **11.4%** (BenchLM citing Artificial Analysis; the independent review rounds to 54 / 58% / 11%)
- AA-LCR (long-context reasoning): **79.3%** (BenchLM citing Artificial Analysis)
- RiemannBench: **80.0%** (Google evaluation table; #1 — Argon 76.0%, GPT-6 Astra 72.0%)
- Terminal-Bench-Science 0.1 (Artificial Analysis): **64.8%** (Google evaluation table; #1 — GPT-6 Astra 63.3%, Claude Opus 5.5 59.0%)
- Vals Index v2.2: **70.4%** (Google evaluation table; #1 — Claude Opus 5.5 70.2%, Argon 69.2%)
- GPQA Diamond: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **58.3% / 11.4%** (see above)

Coding:

- Terminal-Bench 4.0 (Artificial Analysis): **65.2%** (Google evaluation table + BenchLM; #1 — Claude Opus 5.5 59.6%, GPT-6 Astra 59.1%, Argon 57.1%)
- FrontierSWE 2: **61.2%** (Google evaluation table + BenchLM; 3rd — GPT-6 Astra 65.5%, Claude Opus 5.5 62.3%)
- SWE-sweep: **9.6%** (Google evaluation table, Google-run mini-swe-agent harness; #1 — GPT-6 Astra 9.5%, Argon 4.3%; low cross-model comparability per the methodology review)
- FrontierCode v1.1 (Artificial Analysis): **51%** (2nd — Claude Opus 5.5 56%; independent review citing Artificial Analysis)
- AA-SciCode: **64.2%** (BenchLM citing Artificial Analysis)
- AA Coding Agent Index (Carbon + Antigravity CLI): **59** (2nd — Claude Code + Claude Opus 5.5 at max = 62; independent review citing Artificial Analysis)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- GraphWalks BFS 256K–1M (F1): **96.2%** (Google evaluation table; #1 — Argon 84.2%, GPT-6 Astra 71.8%, Claude Opus 5.5 66.8%)
- AA-LCR: **79.3%** (BenchLM citing Artificial Analysis)
- MRCR: **no verified public score found**

Cybersecurity (the model's headline area):

- SEC-bench Pro: **88.2%** (Google-run; #1 — GPT-6 Astra 85.4%, Argon 83.4%; Claude Opus 5.5 has no published number)
- ExploitGym: **54.8%** (Google launch post + evaluation table) vs **53.5%** (BenchLM citing Google's own evaluation-methodology page) — see conflict note 2
- CWE-bench (Collinear's public leaderboard, run across all models): **71.0%** (Argon and GPT-6 Astra 68.0%, Claude Opus 5.5 67.0%) — the only independently-run security row
- Gray Swan Indirect Prompt Injection benchmark: **0.0% attack success** over 15 attempts (Google launch post; Argon 0.7%)
- Terminal-Bench 4.0 "cheating": **0.0%** successful, **0.4%** attempts (Google internal measurement)
- WebDev Arena: **1768 Elo, #4** (+89 Elo) (Google citing WebDev Arena)
- Chrome-team patch quality claim (>10x better than another lab's frontier model) and Wiz pentest claims: vendor-quoted partner reports, no published data

**Cross-source conflict notes (compared across websites):**

1. **Artificial Analysis Intelligence Index — 59 vs 59.4 vs 60.** Google's launch post and the eval table say 59 on index v5.0; BenchLM reports 59.4; Artificial Analysis' own model page reports 60 on the newer v5.0.1 for the (High) variant. This is index-version drift and rounding, not a substantive dispute — all three agree Carbon is #1.
2. **ExploitGym — 54.8% vs 53.5%.** Google's post and table say 54.8%; BenchLM, citing the same Google methodology page, says 53.5%. Both trace to Google's own run (no internet, safety mitigations off, 6h/10h timeouts) against competitor numbers taken from their system cards — the independent review rates this row low comparability.
3. **Output speed — 68 tok/s vs ~85 tok/s.** Artificial Analysis' model page (checked 2026-11-04) shows 68 tok/s end-to-end and a 65.55s time-to-first-answer-token; the independent review, writing three days after launch, cited ~85 tok/s. Measurement windows differ (trailing-5-day average vs launch window).
4. **Index token use — 205M vs 200M output tokens** for the full Intelligence Index run (Artificial Analysis page vs the review), both ~3x the 69.6M/71M median — the "very verbose" verdict agrees in both.
5. **Availability — "not publicly available" vs "available via API".** Google, 9to5Google and the independent review all describe a gated rollout with no public date; Artificial Analysis lists the model as available through one provider (a gated/preview endpoint). Practically: not generally available on 2026-11-04.
6. **Hallucination moved the wrong way.** AA-Omniscience accuracy rose to 58.3% (Argon ~48%) but the hallucination rate went from ~4% (Argon) to 11.4% — still far below the ~50% Artificial Analysis reports for Claude Opus 5.5 and GPT-6 Astra.

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads the private AutomationBench (53.9%, +11 over Claude Opus 5.5), Agents' Last Exam 77.4% and Vending-Bench 2, with GDPval-AA 1733 sitting just under the 1750 frontier reference; capped by AA-Briefcase 1609 (5th of the tracked leaders) and OSWorld 2.1 offline 81.5% behind Opus 5.5's 87.2%, plus no Claw-Eval or Tau3 figure to confirm tool-call efficiency.
- **Reasoning: 92/100.** #1 on the Artificial Analysis Intelligence Index (59–60) with HLE-Diamond 69.1% (frontier reference is 40%+), RiemannBench 80.0%, Terminal-Bench-Science 64.8% and Vals 70.4%; capped by AA-LCR 79.3% (below the 95%+ long-context reasoning reference), CritPt hard subset 36.0%, and an 11.4% hallucination rate.
- **Context window: 98/100.** 1M-token window (top tier) with GraphWalks 96.2% F1 across 256K–1M — just under the ≥98%-at-512K+ retrieval bar that would earn a full 100.
- **Multimodal: 91/100.** Text, image, speech and video input puts it in the top rubric band (audio in), with Chartography 72.5% and Blueprint-Bench 2 58.6% both #1 in Google's table; capped because output is text-only.
- **Coding: 89/100.** #1 on Terminal-Bench 4.0 (65.2%) and SWE-sweep (9.6%), FrontierSWE 2 61.2% and AA-SciCode 64.2% (above the 55% frontier reference); capped by third place on FrontierSWE 2 (GPT-6 Astra 65.5%), second on the AA Coding Agent Index (59 vs Opus 5.5's 62), and no SWE-bench Verified or LiveCodeBench number to anchor the row.
- **Cost efficiency: 58/100.** Standard $4/$20 per 1M sits just below the $3/$15 ≈ 60 anchor, partly offset by a strong $7.76 per Intelligence Index task (23% cheaper per task than Claude Opus 5.5 at the identical list price); the $2/$10 introductory price has no confirmed end date, so it is not scored. No free tier.
- **Overall Score: 92/100.** Mean of the five non-cost quality dims (90+92+98+91+89)/5 = 92 — best fit for cybersecurity defense, very long-context retrieval (256K–1M) and SaaS/knowledge-work automation once access opens; the practical limits today are the gated rollout and very high verbosity, not the scorecard.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-04
- Method: fresh public internet research — official Google launch post and evaluation table, Artificial Analysis model page and index, BenchLM aggregation, SemiAnalysis/9to5Google coverage and independent reviews, cross-checked against each other; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google launch post — Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Google DeepMind — Gemini 4 Carbon model evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-carbon)
  - [Google DeepMind — Gemini 4 Carbon model evaluation (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_4_carbon_model_evaluation.pdf)
  - [Artificial Analysis — Gemini 4 Carbon (High)](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [BenchLM — Gemini 4 Carbon benchmarks](https://benchlm.ai/models/gemini-4-carbon)
  - [Collinear — CWE-bench leaderboard](https://cwe-bench.com/)
  - [SEC-bench Pro](https://sec-bench.github.io/)
  - [ExploitGym (GitHub)](https://github.com/sunblaze-ucb/exploitgym)
  - [WebDev Arena leaderboard](https://arena.ai/leaderboard/code/webdev)
  - [9to5Google — SemiAnalysis GDPx benchmark coverage](https://9to5google.com/2026/11/02/gemini-4-carbon-benchmark/)
  - [Independent review — benchmarks, price, access](https://www.alekseialeinikov.com/en/blog/topics/ai/gemini-4-carbon-review-benchmarks-price-access)
  - [LLM Stats — Gemini 4 Carbon](https://llm-stats.com/models/gemini-4-carbon)
  - [OpenCode Zen model catalog (availability check, 2026-11-04)](https://opencode.ai/zen/v1/models)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
