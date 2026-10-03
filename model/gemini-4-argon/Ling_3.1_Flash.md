# Gemini 4 Argon — findings by Ling 3.1 Flash

- Source: Google DeepMind (`opencode/gemini-4-argon`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's first proprietary model above the Flash class in over 7 months (released 2026-09-30) — leads or ties on 12 of 18 disclosed benchmarks, with its strongest margins in enterprise and long-context workflows (DeepSWE SOTA, Vals Index, Harvey's Legal, GraphWalks); staged rollout starts with trusted cyber defenders via the Fairwind Program.
- **Provider / access:** Google (Gemini API / Vertex); trusted cyber defenders first via the Fairwind Program plus the US government voluntary pre-release access process; broader availability for paid API customers and Google AI Ultra subscribers. High reasoning level is the top tier.
- **Release / knowledge:** 2026-09-30; knowledge cutoff not stated.
- **IDs:** `opencode/gemini-4-argon` (site tracking slug; Google model ID `gemini-4-argon`).
- **Context window:** 1M tokens total; 262,144 max output (vals.ai spec; site meta.json's "128K total" is a scaffold stub contradicted by the verified spec).
- **Modalities:** text, image, video, file in; text out (site meta.json's "Text in/out" understates the verified spec).
- **Pricing (as of 2026-10-02):** introductory $2/$10 per 1M input/output (50% discount, at least one month, end date unconfirmed); standard $4/$20 after; cached input 95% off ($0.10/M at intro, $0.20/M standard).
- **Architecture:** proprietary (Google DeepMind); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier): **51.3%** (vs Claude Opus 5.5 42.5%, GPT-6 Astra 41.4%)
- AutomationBench-AA: **78%** (Artificial Analysis — rank 1, 7 points ahead of Claude Sonnet 5.5's 71%)
- Harvey's Legal Agent Benchmark: **19.6%** (vs GPT-6 Astra 5.4%, Opus 5.5 3.8%) — one of Argon's clearest category wins
- Vals Index: **leading** (economic impact across finance/coding/legal/tax, US-GDP-weighted); Accuracy 68.90% ±0.97, $15.68/test, 46m33s latency
- Vals Finance Agent v2: **65.4%** (vs Opus 5.5 58.6%, GPT-6 Astra 53.5%)
- GraphWalks: **84.2%** (vs GPT-6 Astra 71.8%, Opus 5.5 66.8%); Google's table: 99.x% at 128K BFS, 84.x% at 256K–1M BFS
- Terminal-Bench 4.0: **57.4%** (vendor table; vals.ai 57.58%) — behind Opus 5.5 66.4%, GPT-6 Astra 58.2%, Fable 5.1 57.9%; AA reads 57%, behind Sonnet 5.5 64%, Opus 5.5 60%, Astra 59%
- Terminal-Bench Science 0.1: **57.6%** (vs GPT-6 Astra 68.1%, Opus 5.5 63.3%, Fable 5.1 52.6%)
- AA-Briefcase: **1494 Elo** (65% rubric pass rate — the highest AA has recorded; Analytical Quality 1576 Elo, Presentation Quality 1308 Elo)
- CWE-bench v1 (vulnerability remediation): **68%** (vs GPT-6 Astra 67%)
- Gray Swan IPI (prompt-injection robustness): leading (no numeric score published)
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **53** (high reasoning — matches GPT-6 Astra (max) and leads GPT-6.1 Sol (52); +23 over Gemini 3.1 Pro's 30, +12 over Gemini 3.8 Flash)
- GPQA Diamond / HLE: no verified public score found (not among the 18 disclosed benchmarks)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA notes "lower hallucinations" as a driver of the Index gain, without a number)

Coding:

- DeepSWE v1.1: **77.9%** — new state of the art (vs Claude Opus 5.5 74.2%, GPT-6 Astra 74.1%, Fable 5.1 67.4%)
- Vibe Code Bench: **91.9%** (vs GPT-6 Astra 89.6%, Fable 5.1 90.3%, Opus 5.5 90.3%) — best in the comparison set
- FrontierSWE v2: **55.0%** (vs GPT-6 Astra 65.5%, Opus 5.5 62.3%, Fable 5.1 56.3%) — a 10.5-pt deficit to Astra
- PostTrainBench: **45.3%** (vs Opus 5.5 49.3%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- GraphWalks 99.x% at 128K BFS and 84.2% at 256K–1M BFS (above); no MRCR/RULER score published

Multimodal:

- LVBench (long-video understanding): **91.7%** (vs GPT-6 Astra 87.5%, Opus 5.5 83.7%)

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench-AA 78% (rank 1), Vals Index leadership, Harvey's Legal 19.6% (3.5x Astra) and GraphWalks 84.2% show enterprise-agent breadth; Terminal-Bench 4.0 57.4% and FrontierSWE 55.0% (10.5 pts behind Astra) cap the score.
- **Reasoning: 81/100.** the AA Intelligence Index of 53 (matching GPT-6 Astra max) is the only disclosed general-reasoning composite and sits below the 60+ frontier bar; GPQA/HLE are unpublished, and TB-Science 57.6% trails Astra/Opus 5.5 — GraphWalks 84.2% prevents a lower score.
- **Context window: 95/100.** 1M tokens / 262K out with GraphWalks 99.x% at 128K; the 256K–1M band reads 84.2%, under the ≥98%-at-512K+ bar for 100.
- **Multimodal: 85/100.** text/image/video/file in with text out — the +video-in band, corroborated by LVBench 91.7% (best in set).
- **Coding: 90/100.** DeepSWE 77.9% (SOTA, above the 74% frontier ref) and Vibe Code 91.9% (best in set) are exceptional; FrontierSWE 55.0% and Terminal-Bench 4.0 57.4% lag the leaders.
- **Cost efficiency: 75/100.** introductory $2/$10 per 1M (active as of 2026-10-02) with 95%-off cached input ($0.10/M) — AA's $1.99 per Intelligence Index task is 60% of GPT-6 Astra's; standard $4/$20 after the promo would score ~56.
- **Overall Score: 88/100.** (88+81+95+85+90)/5 = 87.8 → 88 — the enterprise-workflow leader: DeepSWE SOTA, Vals Index, and legal/finance agent dominance at one-fifth of GPT-6 Astra's intro price, with a still-limited rollout as the caveat.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Google DeepMind launch blog, Artificial Analysis, vals.ai, VentureBeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
