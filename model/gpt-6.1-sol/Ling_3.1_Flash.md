# GPT 6.1 Sol — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6.1-sol`; API `gpt-6.1-sol`, ChatGPT Work, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's DevDay model (2026-09-29, one week after GPT-6 Sol) — the value tier of the GPT-6 line: AA Intelligence Index 52 (Max), DeepSWE v1.1 75.2% tying GPT-6 Astra at ~1/5 the task cost, OSWorld 2.0 71.4%, at $2/$10 per 1M (cached input halved to $0.10/M); trails Astra by 11.1 points on Terminal-Bench Science 0.1 (57.0% vs 68.1%).
- **Provider / access:** OpenAI API, ChatGPT Work and Codex (paid/organizational plans; not in free ChatGPT Chat); reasoning effort low/medium/high/xhigh/max; Fast mode 2× Standard; Batch/Flex 50% lower; regional processing +10%; Ultrafast mode coming soon (unpriced).
- **Release / knowledge:** 2026-09-29 (DevDay); knowledge cutoff not stated in the materials reviewed.
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
- **Reasoning: 78/100.** The AA Intelligence Index of 52 (which folds in HLE, CritPt and AA-Omniscience) and GDP.pdf 32.0% are the only anchors; GPQA Diamond and standalone HLE are unpublished, and the 11.1-point Terminal-Bench Science gap to Astra marks the scientific-reasoning ceiling.
- **Context window: 95/100.** 1M-token window (AA-listed); no ≥98%-at-512K+ retrieval figure, so 100 is not justified; the >272K whole-request repricing (2×/1.5×) is a usage caveat.
- **Multimodal: 65/100.** text in with text out — placed in the +image-in band (60–70) because its OSWorld 2.0 computer-use evaluation requires screenshot input (vision not explicitly confirmed in the materials reviewed); no MMMU figure captured.
- **Coding: 82/100.** DeepSWE v1.1 75.2% (high) clears the 74% frontier bar and ties GPT-6 Astra at ~1/5 the task cost, with Terminal-Bench Science 0.1 57.0% supporting; SWE-bench Verified/Pro, Terminal-Bench 2.1 and the AA Coding Index are unpublished.
- **Cost efficiency: 74/100.** $2/$10 per 1M interpolates to ~74 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; cached reads at $0.10/M (a 95% discount), half-rate Batch/Flex, $1.50 per AA Index task and ~$9.60 per solved TB-Science task are offsets; the >272K whole-request repricing ($4/$15) is a premium.
- **Overall Score: 80/100.** (80+78+95+65+82)/5 = 80.0 → 80 — the value tier of the GPT-6 line: Astra-tying DeepSWE (75.2%) and near-Astra computer use at one-fifth the token price, with the 11.1-point Terminal-Bench Science gap, all-vendor launch evals and the >272K repricing as the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI API docs, Artificial Analysis release page, The Daily Brief / beri.net, RohitAI, Layer3 Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Sol.md`, using the same headings.
