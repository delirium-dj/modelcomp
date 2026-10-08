# GPT 6 Sol — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6-sol`; API `gpt-6-sol`, ChatGPT Work, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's September-2026 cost-efficiency tier of the GPT-6 line (launched 2026-09-22 with GPT-6 Luna; trained with GPT-6 Astra's methods) — AutomationBench 33.2% (xhigh) beating Claude Opus 5 at max at 9% of its task cost, Agents' Last Exam 56.4% (max), DeepSWE 68.8% (max, within 1.1 points of Fable 5), at $2/$10 per 1M with 90%-off cached reads; superseded within a week by GPT-6.1 Sol.
- **Provider / access:** OpenAI API, ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu; not in Chat); reasoning effort low/medium/high/xhigh/max; Batch/Flex at 50%, Fast at 2×, regional processing +10% (EU data residency available). AA flags it deprecated in favor of GPT-6.1 Sol.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol` / `gpt-6-sol`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a ~872K–1.05M window, and its OSWorld 2.0 evaluation implies vision input.
- **Context window:** 1,050,000 tokens (OpenAI API docs; apidog reports 872,000); 128,000 max output; prompts above 272K input reprice the WHOLE request to 2× input/cache and 1.5× output ($4/$0.20/$5/$15).
- **Modalities:** text in; text out — vision input implied by the OSWorld 2.0 offline computer-use evaluation (not explicitly confirmed in the materials reviewed).
- **Pricing (as of 2026-10-02):** $2.00/$10.00 per 1M input/output (≤272K); cached input $0.20/M (a 90% discount); cache writes $2.50/M (1.25×); blended (7:2:1) $1.54/M (AA); AA cost per task $0.33 (non-reasoning). 50% below GPT-5.6 Sol's promotional pricing ($4/$20); 60%/67% below its list rates ($5/$30).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI launch, 2026-09-22; comparisons are vs Claude Opus 5 — Opus 5.5 shipped the same day, so the Opus 5 baseline was superseded within hours):

- AutomationBench 1.0.6 (xhigh): **33.2%** at $0.27/task — vs GPT-6 Astra (low) 30.3% at 3.9× the cost, Claude Fable 5.1 w/ Opus 5 fallback (max) 31.4% at >8.9×, Claude Opus 5 (max) 26.9% at 11.1× — outperforms Opus 5 at max at 9% of its cost per task; exceeds Fable 5.1; bests low-effort Astra
- Agents' Last Exam V1 (max): **56.4%** — above Claude Opus 5's highest score, at 60% lower cost per task
- OSWorld 2.0 offline (xhigh): **60.5%** — similar to Claude Opus 5 at medium (60.3%), at ~80% lower cost per task
- FrontierCode: improves substantially over GPT-5.6 Sol and matches Claude Fable 5.1 (xhigh) at much lower cost (figure not published)
- Terminal-Bench 2.1 / TB-Science / BrowseComp / MCP Atlas / τ-Bench: no verified public score found
- Factuality: ~half the mistakes of GPT-5.6 Sol on OpenAI's internal flagged-conversations eval, approaching Astra-level reliability; alignment evals show lower misleading-claim rates than GPT-5.6 counterparts

Reasoning / knowledge:

- FrontierCode parity with Claude Fable 5.1 (xhigh) — see above
- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1 (max): **68.8%** — within 1.1 percentage points of Claude Fable 5's highest score (69.9% at xhigh), at ~80% lower cost per task
- FrontierCode: matches Claude Fable 5.1 (xhigh) — see above
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench 2.1 / SciCode / AA Coding Index: no verified public score found

Long context / multimodal:

- ~872K–1.05M window; no MRCR/RULER/AA-LCR score published
- OSWorld 2.0 offline evaluation implies vision input; no MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 33.2% (xhigh) beats Claude Opus 5 at max (26.9%) at 9% of its task cost, Agents' Last Exam 56.4% (max) tops Opus 5's best, and OSWorld 2.0 60.5% (xhigh) matches Opus 5 at medium; no Terminal-Bench 2.1/Science, BrowseComp or MCP Atlas figures were captured, and the model was superseded by GPT-6.1 Sol within a week.
- **Reasoning: 78/100.** HLE 47.9% (AA, max — no tools, within the 2-point noise band of GPT-5.6 Sol's 49.49%), FrontierCode parity with Claude Fable 5.1 (xhigh), a ~2× factuality improvement over GPT-5.6 Sol and an AA Intelligence Index read of ~47–48 (v4.3.2) support a solid score; no standalone GPQA Diamond figure was captured.
- **Context window: 95/100.** ~872K–1.05M-token window with no ≥98%-at-512K+ retrieval figure, so 100 is not justified; the >272K whole-request repricing (2×/1.5×) is a usage caveat.
- **Multimodal: 65/100.** text in with text out — placed in the +image-in band (60–70) because its OSWorld 2.0 computer-use evaluation requires screenshot input (vision not explicitly confirmed in the materials reviewed); no MMMU figure captured.
- **Coding: 79/100.** DeepSWE v1.1 68.8% (vendor max) / 69.0% (AA's independent Codex-agent run — within a point) sits just under the 74% frontier bar (within 1.1 points of Fable 5's 69.9%), FrontierCode matches Claude Fable 5.1 (xhigh) at much lower cost, and VulcanBench Frontier v4 reads 86.82 combined at Max (judged, 19/23 tasks passed); Terminal-Bench 2.1 83.15% (vals.ai) and the AA Coding Agent Index of 56.7 are mid, and SWE-bench Verified/SciCode remain unpublished.
- **Cost efficiency: 78/100.** $2/$10 per 1M (blended $1.54/M at 7:2:1; AA $0.33 per task) interpolates to ~76–78 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; 90%-off cached reads ($0.20/M) and half-rate Batch/Flex are offsets; the >272K whole-request repricing ($4/$15) is a premium.
- **Overall Score: 79/100.** (80+78+95+65+79)/5 = 79.4 → 79 — the cost-efficiency tier of the GPT-6 line: best-in-class AutomationBench (33.2% at $0.27/task) and ALE (56.4% vendor score / 32.2% Snorkel pass rate) at a fraction of Opus 5's task cost, DeepSWE 68.8–69.0% within 1.1 points of Fable 5, ~872K–1.05M context at $2/$10 with 90%-off caching; DeepSWE just under the 74% bar, the vendor/independent metric gaps and its week-long shelf life are the caveats.

---

## Update 2026-10-08 (6-day re-research)

Seven independent scores now exist (The Model Gap, 2026-10-08), plus a 115-run VulcanBench sweep:

- Independent rows: HLE (no tools) **47.9%** (AA, max — tie with GPT-5.6 Sol's 49.49% inside the ±2 band), DeepSWE v1.1 **69.0%** (AA's own Codex-agent run, max — within a point of the vendor's 68.8%), LiveBench **79.3** (vs 81.0, tie), Terminal-Bench 2.1 **83.15%** (vals.ai Terminus 2, max, ±1.30 — vs 85.77 for GPT-5.6 Sol on that board, tie), Agents' Last Exam **32.2%** overall pass rate (Snorkel, Codex, XHigh — the board's best effort for this model; partial-credit score 56.5, est. $318/task; per-effort: XHigh 32.2, Max 31.6, High 31.6, Medium 28.9, Low 27.6), ARC-AGI-2 (Max) **89.6%** (ARC Prize, 2026-10-03 — tie with GPT-5.6 Sol's 92.5% inside the ±9.2 band), Terminal-Bench 4.0 **44.44%** (vals.ai mini-swe-agent, max, 3 full passes; AA same-conditions 43.94; the official grant-funded board reads 49.39% ± 3.23)
- Metric clarification: OpenAI's self-reported ALE 56.4% sits close to Snorkel's partial-credit score (56.5), not the 32.2% pass rate this site tracks — the two ALE numbers measure different things
- VulcanBench Frontier v4 (independent, Codex CLI 0.155.0, 23 tasks × 5 effort levels, judged by Muse Spark 1.3 and Grok 4.6): combined score **67.62 / 80.60 / 82.83 / 85.94 / 86.82** (Low→Max), tasks passed 4/13/15/18/19 of 23, code quality 62.53→70.78, human readability 53.8→63.4, maintainability 65.5→73.6, intent recovery 70.2→76.9, 13.0–24.5 min/task, API-equivalent $1.02–$2.52/task, 3.26M–8.32M tokens/task — slightly behind GPT-5.6 Sol at every level (gaps 0.36–2.93 points, within one standard error at xhigh/max), with higher code quality from High up but 1.8–3.9× the raw tokens per task
- AA Coding Agent Index: **56.7** (verified, rank 7/17); AA Intelligence Index ~47–48 (v4.3.2; aggregators read 47.5–48)
- Unreliable rows flagged: Model Pareto's SWE-bench Verified ~89.3% and SWE-bench Pro ~71.8% are **estimates** ("No published score"), not board results; RankLLMs' SWE-bench Verified 84.8%/TB 85.5% and SwarmAgent's SWE-bench 75.1%/LiveCodeBench 65.8% are aggregator fabrications contradicting the launch record (SwarmAgent also misprices the model at $2.50/$12.50)
- Other: deception rate 1.3% (OpenAI, down from 10.4% on GPT-5.6 Sol); ~104 tok/s (OrcaRouter, citing AA)
- **Scores revised**: Reasoning 76→78 (HLE 47.9% no-tools now captured), Coding 78→79 (independent DeepSWE 69.0% + VulcanBench 86.82 at Max); Overall unchanged at 79 ((80+78+95+65+79)/5 = 79.4)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch, OpenAI API docs + pricing, apidog, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
