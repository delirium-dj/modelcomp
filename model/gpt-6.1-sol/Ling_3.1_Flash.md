# GPT 6.1 Sol — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6.1-sol`; API `gpt-6.1-sol`, ChatGPT Work, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's DevDay model (2026-09-29, one week after GPT-6 Sol) — the value tier of the GPT-6 line: AA Intelligence Index 52 (Max), DeepSWE v1.1 75.2% tying GPT-6 Astra at ~1/5 the task cost, OSWorld 2.0 71.4%, at $2/$10 per 1M (cached input halved to $0.10/M); trails Astra by 11.1 points on Terminal-Bench Science 0.1 (57.0% vs 68.1%).
- **Provider / access:** OpenAI API, ChatGPT Work and Codex (paid/organizational plans; not in free ChatGPT Chat); reasoning effort low/medium/high/xhigh/max; Fast mode 2× Standard; Batch/Flex 50% lower; regional processing +10%; Ultrafast mode coming soon (unpriced).
- **Release / knowledge:** 2026-09-29 (DevDay); knowledge cutoff **April 30, 2026** (OpenAI API docs) — previously "not stated".
- **IDs:** `openai/gpt-6.1-sol` / `gpt-6.1-sol`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — AA lists a 1M context window, and its OSWorld 2.0 computer-use evaluation implies vision input.
- **Context window:** 1,000,000 tokens (AA); prompts above 272K input reprice the WHOLE request to 2× input/cache and 1.5× output ($4/$0.20/$5/$15).
- **Modalities:** text in; text out — vision input implied by the OSWorld 2.0 computer-use evaluation (not explicitly confirmed in the materials reviewed).
- **Pricing (as of 2026-10-02):** $2.00/$10.00 per 1M input/output (≤272K); cached input $0.10/M (5% of input — halved from GPT-6 Sol's $0.20); cache writes $2.50/M (1.25×); >272K: $4/$0.20/$5/$15; Fast 2×; Batch/Flex half.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI preliminary launch evals, tabulated by Handy AI / beri.net; all vendor-run, no independent verification at launch):

- Terminal-Bench Science 0.1 (max): **57.0%** — a 70-task benchmark of real computational workflows across five scientific domains (Stanford / Laude Institute / domain experts); GPT-6 Astra 68.1%, Claude Opus 5.5 63.3% (public leaderboard); $5.47 per task at max → ~$9.60 per solved task (vs Astra ~$34.95, Opus 5.5 ~$36.67); more than double GPT-6 Sol (max) at under half the cost
- OSWorld 2.0 (max): **71.4%** — within 2.1 points of Astra (73.5%) at ~1/7 the task cost; +7 points over GPT-6 Sol (max)
- AutomationBench 1.0.6 (max): **36.1%** (Astra 41.4%, Opus 5.5 42.5%; OpenAI's "+2.2 vs Opus 5.5" claim was at medium effort)
- GDP.pdf (high): **32.0%** (Astra 32.2%, Opus 5.5 28.8% — above Opus 5.5 including fallbacks, at under half the task cost)
- AA Intelligence Index v4.3.2: **52** (Max) / 51 (Xhigh) / 50 (High) / 48 (Medium) / 42 (Low); $1.50 per Index task; 63 tok/s output (Max); 3.15s TTFT (Low)
- Factual-error rate on difficult flagged chats: **7.7%** at low (down from 11.4% on GPT-6 Sol — a 32% relative reduction; within 1.9 points of Astra across tested settings)
- Terminal-Bench 2.1 / BrowseComp / MCP Atlas / τ-Bench / Toolathlon: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index 52 (Max) — the Index v4.3.2 incorporates 10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1
- GPQA Diamond / HLE (standalone) / AA-Omniscience: no verified public score found in the materials reviewed

Coding:

- DeepSWE v1.1 (high): **75.2%** — ties GPT-6 Astra (74.1%), +6.4 points over the best GPT-6 Sol setting, at ~1/5 Astra's task cost
- Terminal-Bench Science 0.1 (max): **57.0%** — scientific terminal/coding workflows (see above)
- SciCode and Terminal-Bench 4.0 are AA Index components (no standalone figures captured)
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench 2.1 / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M-token window (AA); no MRCR/RULER/AA-LCR standalone figure captured
- OSWorld 2.0 computer-use evaluation implies vision input (unconfirmed); no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 80/100.** The AA Intelligence Index of 52 (Max) is a near-frontier composite, with OSWorld 2.0 71.4% (within 2.1 points of Astra), Terminal-Bench Science 0.1 57.0% and AutomationBench 36.1% supporting; all figures are OpenAI-preliminary launch runs with no independent verification at launch, and TB2.1/BrowseComp/MCP Atlas/τ-Bench are unpublished.
- **Reasoning: 81/100.** GPQA Diamond 95.4% (Epoch AI run, #3 of 102), HLE 52.9% (AA, max — no tools), ARC-AGI-2 94.2% (Max, #2 of 85) and LiveBench Reasoning 92.6% (max, #2 of 62) clear the frontier bands, with the AA Intelligence Index of 51.8–52 (max) and MultiChallenge Chat 82.0% (#1 of 30) supporting; CritPt 31.7% and the 11.1-point Terminal-Bench Science gap to Astra cap the score.
- **Context window: 95/100.** 1M-token window (AA-listed); no ≥98%-at-512K+ retrieval figure, so 100 is not justified; the >272K whole-request repricing (2×/1.5×) is a usage caveat.
- **Multimodal: 65/100.** text in with text out — placed in the +image-in band (60–70) because its OSWorld 2.0 computer-use evaluation requires screenshot input (vision not explicitly confirmed in the materials reviewed); no MMMU figure captured.
- **Coding: 82/100.** DeepSWE v1.1 75.2% (high) clears the 74% frontier bar and ties GPT-6 Astra at ~1/5 the task cost, with Terminal-Bench Science 0.1 57.0% supporting; SWE-bench Verified/Pro, Terminal-Bench 2.1 and the AA Coding Index are unpublished.
- **Cost efficiency: 74/100.** $2/$10 per 1M interpolates to ~74 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; cached reads at $0.10/M (a 95% discount), half-rate Batch/Flex, $1.50 per AA Index task and ~$9.60 per solved TB-Science task are offsets; the >272K whole-request repricing ($4/$15) is a premium.
- **Overall Score: 81/100.** (80+81+95+65+82)/5 = 80.6 → 81 — the value tier of the GPT-6 line: Astra-tying DeepSWE (75.2%), near-Astra computer use at one-fifth the token price and now frontier GPQA/HLE/ARC-AGI-2 reads, with the 11.1-point Terminal-Bench Science gap, mid LiveBench Agentic Coding (54.5–56.8%) and the >272K repricing as the caveats.

---

## Update 2026-10-08 (6-day re-research)

Full AA effort ladder, Epoch, Vals, fru.dev and BenchLeader rows found — several launch gaps filled:

- Reasoning fills: GPQA Diamond **95.4%** (Epoch AI run, max, #3 of 102; provider-routed variants 93.3–94.8%), HLE **52.9%** (AA, max, no tools; ladder: Low 47.4% → Max 52.9%), ARC-AGI-2 **94.2%** (Max, #2 of 85), LiveBench Reasoning **92.6%** (max, #2 of 62; 91.6% at xhigh, #6), MultiChallenge Chat **82.0%** (#1 of 30), Chess Puzzles 61% (Epoch), EBR-bench 54.3% (Epoch), Epoch ECI **166.1** (#3 of 100)
- AA Intelligence Index v4.3.2 ladder: Low 42.1, Medium 47.8, High 50.2, Xhigh 51.0, Max **51.8** ($4.00/task, 55 tok/s) — with the full component ladder: HLE 47.4→52.9%, AA-LCR 84.0/83.3/82.3/79.7/83.0%, GDPval-AA 39.9→53.8%, CritPt 24.9→31.7% (#4 of 28 at max), SciCode 53.2→55.8%, Terminal-Bench 4.0 30.8→56.1% (#9 of 41 at max), AA-Omniscience accuracy 58.9→62.1% / non-hallucination 48.4→45.7%
- Terminal-Bench 4.0: AA 56.1% (max, #9) / Vals 55.0–55.1% (#6 of 40) / official board 58.2% (#17) — three independent reads
- Agentic/coding: APEX-Agents 60.0% (max, #12, Mercor), LMArena Agent 11.2 (#5), LiveBench Agentic Coding 56.8% (xhigh, #24) / 54.5% (max, #31), WebDev Arena 1757 (#4 of 100), Vision Arena 1291 (#8), Text Arena 1483 (#18), LMArena Hard Prompts 1509 (#18), OpenRouter usage 1.4T tokens (#19)
- Vals Index: **61.15% ± 1.01** (#8 of 45), best result #2 of 38 on Terminal-Bench Science (52.86% ± 6.01 — vs the vendor's 57.0%), $3.237/test, 43m10s latency; context 1M, max output 128K, text/image/file input (no video)
- Still unpublished: SWE-bench Verified/Pro, DeepSWE, Terminal-Bench 2.1, AA Coding Index, SciCode standalone (AA component only), Toolathlon-Verified
- **Reasoning revised 78→81** (GPQA 95.4%, HLE 52.9%, ARC-AGI-2 94.2%, LiveBench Reasoning 92.6% — four frontier reads); Overall 80→81 ((80+81+95+65+82)/5 = 80.6)

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 80 / Reasoning 81 / Context 95 / Multimodal 65 / Coding 82 / Cost 74 / Overall 81.** New data and confirmations this pass:

- **Modalities now explicit (OpenAI API docs):** text and image in, text out; **audio and video explicitly unsupported** — the +image-in band (60–70) placement is confirmed first-party, not just implied by the OSWorld 2.0 eval. 1,050,000-token context / 922,000 max input / 128,000 max output.
- **AA economics (current reads):** Index 52 (Max) with **67M tokens per run — "fairly concise"** vs the 82M median (unusual for a reasoning model at this level); **$0.72 per Index task** (Max); $1.50 blended; effort ladder Low 42 → Medium 48 → High 50 → Xhigh 51 → Max 52, with Max the fastest at 57 t/s and Low the cheapest at $0.13/task (prices vary up to 5.5× across the ladder).
- **VulcanBench SWE-v4 economics (115 Codex-CLI runs, ChatGPT Pro subscription, 23 per effort level, judged by Muse Spark 1.3 and Grok 4.6 under the frozen Frontier v4 protocol):** cost/task **$0.31 (Low) → $0.46 (Max)**, $0.39 average; tokens/task 1.24M (Low) → 1.62M (Medium, the most) → 0.91M (High, the fewest — why High costs less than Medium); runtime 6.9–15.4 min; every run finished inside the 3-hour task bound (longest: Medium paddockcore, 80 min); full sweep $44.33 over 22.0 hours.
- **AWS Bedrock card:** GA 2026-09-29, lifecycle Active, EOL not announced; `bedrock-mantle` (us-east-1 only, both Responses and Chat Completions under `/openai/v1`) and `bedrock-runtime` (US geographic cross-Region inference profile `us.openai.gpt-6.1-sol`; no in-Region or global inference); **output-token burndown is 10:1** (each output token consumes 10 quota tokens); **explicit prompt caching is NOT supported on Bedrock** despite cache pricing dimensions being listed.
- **Pricing detail confirmed:** cached input $0.10/M = 5% of the uncached rate (95% discount — "50% less than GPT-6 Sol's cached input pricing"); cache writes $2.50/M (1.25×); >272K prompts reprice the full request at 2× input/cache and 1.5× output; Fast 2×, Batch/Flex 50% lower, Ultrafast 6× Standard (up to 8× faster token generation in Codex, coming soon), regional +10%.
- **Score impact:** none — the new reads (AA $0.72/task and concise 67M tokens, VulcanBench economics, Bedrock quirks, Apr-30-2026 cutoff) all land inside the existing bands or are operational notes; the 10-08 Reasoning revision (GPQA 95.4%, HLE 52.9%, ARC-AGI-2 94.2%) remains the score basis.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (OpenAI GPT-6.1 Sol launch post and API docs, Artificial Analysis, AWS Bedrock model card, VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Sol.md`, using the same headings.
