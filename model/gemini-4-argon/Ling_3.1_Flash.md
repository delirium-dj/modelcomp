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
- **Reasoning: 85/100.** HLE **57.1%** (AskClash's cross-board, vs GPT-6 Astra's 57.2%) reaches the frontier leader band and is the strongest single signal, with the AA Intelligence Index of 53 (matching GPT-6 Astra and Fable 5.1), AA-Omniscience 50.0% accuracy / 15.0% hallucination (Astra: 63% / 51%), LABBench2 88.8% and RiemannBench 76.0% supporting; TB-Science 57.6% (6× verifier timeout) trails Astra/Opus 5.5 and GPQA Diamond remains unpublished.
- **Context window: 95/100.** 1M tokens / 262K out with GraphWalks 99.x% at 128K; the 256K–1M band reads 84.2%, under the ≥98%-at-512K+ bar for 100.
- **Multimodal: 85/100.** text/image/video/file in with text out — the +video-in band, corroborated by LVBench 91.7% (best in set).
- **Coding: 90/100.** DeepSWE 77.9% (SOTA, above the 74% frontier ref) and Vibe Code 91.9% (best in set) are exceptional; FrontierSWE 55.0% and Terminal-Bench 4.0 57.4% lag the leaders.
- **Cost efficiency: 75/100.** introductory $2/$10 per 1M (active as of 2026-10-02) with 95%-off cached input ($0.10/M) — AA's $1.99 per Intelligence Index task is 60% of GPT-6 Astra's; standard $4/$20 after the promo would score ~56.
- **Overall Score: 89/100.** (88+85+95+85+90)/5 = 88.6 → 89 — the enterprise-workflow leader: DeepSWE SOTA, Vals Index, HLE 57.1% and legal/finance agent dominance at one-fifth of GPT-6 Astra's intro price, with a still-limited rollout as the caveat.

---

## Update 2026-10-08 (6-day re-research)

Full 19-row launch table (apidog/emergent audits), AskClash's cross-board and AA's independent reads found:

- New rows: Agents' Last Exam **39.5%** (Argon self-computed; vs Astra 34.2%, Opus 5.5 38.2%, Fable 5.1 n/r — best of set); OSWorld-2.0 (offline) **69.2%** (self-computed; Astra 72.6% per OpenAI's blog); Chartography **71.6%** (Surge; Astra 71.0%, Opus 5.5 66.3%, Fable 5.1 46.2%); LABBench2 **88.8%** (self-computed; Astra 85.4%, Opus 5.5 73.1%, Fable 5.1 68.6%); RiemannBench **76.0%** (Surge; Astra 72.0%, Opus 5.5 69.6%, Fable 5.1 65.6%); LVBench **91.7%** (self-computed; Astra 87.5%, Opus 5.5 83.7%, Fable 5.1 79.7%)
- HLE: **57.1%** (AskClash cross-board; GPT-6 Astra 57.2%) — fills the HLE gap at frontier level; GDPval-AA 1627.0 (vs Astra 1629.3)
- AA independent reads: Intelligence Index **53** (tied with GPT-6 Astra and Fable 5.1; below Sonnet 5.5's 56 and Opus 5.5's 58); AutomationBench-AA **77.5%** (top of AA's independent run — the 78% in the card table is the rounded figure); AA-Omniscience **50.0% accuracy / 15.0% hallucination rate** (vs Astra's 63% / 51% — an unusually asymmetric profile: fewer hallucinations, lower accuracy)
- Source-quality map (apidog's audit of all 19 rows): 9 rows come from public leaderboards for every model (Vals AI, Zapier, Proximal, Surge, CWE-bench) — Argon leads 7 and ties 1; Google ran 5 rows for all four models (PostTrainBench, LABBench2, LVBench, GraphWalks, and one more) — Argon leads 4; Argon trails on 5 rows: FrontierSWE v2 (55.0% vs Astra 65.5%), TB 4.0 (57.4% vs Opus 5.5 66.4%), PostTrainBench (45.3% vs Opus 5.5 49.3%), TB-Science 0.1 (57.6% vs Astra 68.1%) and OSWorld-2.0 (69.2% vs Astra 72.6%)
- AskClash composite: Overall 67.4, rank #9 (vs GPT-6 Astra 72.5, #6) — Argon's lead is row-specific, not universal
- **Reasoning revised 81→85** (HLE 57.1% fills the gap at frontier level, with AA-Omniscience 50%/15% and LABBench2 88.8% supporting); **Overall revised 88→89** ((88+85+95+85+90)/5 = 88.6)

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 88 / Reasoning 85 / Context 95 / Multimodal 85 / Coding 90 / Cost 75 / Overall 89.** New fills and conflict checks this pass:

- **AA Intelligence Index v4.3.2: 53 (High)** (AA's own page, #8 of 227; 110M output tokens per task — somewhat verbose; **$1.99/task at intro pricing — 60% of GPT-6 Astra's $3.26 and a third of Opus 5.5's $5.98**; $3.98/task once standard $4/$20 pricing applies). AA's launch article: "Google returns as one of the top three labs on intelligence" — Argon equals GPT-6 Astra (max, 53), +1 over GPT-6.1 Sol (52), +23 over Gemini 3.1 Pro (30), +12 over Gemini 3.8 Flash; gains driven by lower hallucinations and stronger agentic capabilities.
- **AA's independent AutomationBench-AA read: 77.5% — the top score in AA's own run** (the launch table's 78% is the rounded figure; 7 points ahead of the next model). Confirms the Tool-88 rationale's strongest row.
- **AA-Omniscience profile quantified: 50.0% accuracy / 15.0% hallucination rate** (vs GPT-6 Astra's 63% / 51%) — an unusually asymmetric profile: Argon hallucinates a third as often as Astra but answers fewer questions correctly. Kept as a stated caveat in Reasoning 85.
- **Token profile (AA):** 62K output tokens per Intelligence Index task — between Astra's 27K and Opus 5.5's 119K — so the $1.99/task advantage comes mainly from intro token prices, not lower consumption (AA's standard-price estimate: $3.98/task).
- **Google launch blog re-read (2026-09-30):** frontier model rolling out first to trusted cyber defenders via the **Fairwind Program**; can autonomously find, validate and patch critical vulnerabilities; released **without cyber guardrails** for trusted defenders and Google internal teams; **1M-token max output** (industry-leading, 15.6× the previous 64K) for long-running agentic trajectories; intro $2/$10 with cached input 95% off ($0.10/M), standard $4/$20 after the introductory period (end date unconfirmed); broader availability to paid API customers and Google AI Ultra subscribers.
- **CWE-bench v1: 68%** — ties GPT-6 Astra for first in vulnerability remediation (per Google's table and coverage).
- **Source-quality map stands** (apidog's audit of all 19 rows): 9 public-leaderboard rows (Argon leads 7, ties 1), 5 Google-run rows (Argon leads 4); Argon trails on FrontierSWE v2 (55.0% vs Astra's 65.5%), TB 4.0 (57.4% vs Opus 5.5's 66.4%), PostTrainBench (45.3% vs 49.3%), TB-Science 0.1 (57.6% vs 68.1%) and OSWorld-2.0 (69.2% vs 72.6%) — the row-specific-leadership pattern behind the unchanged scores.
- **Score impact:** none — every new read lands inside the bands the existing scores assume; the only material new fact is cost-side (intro $1.99/task confirmed by AA), already reflected in Cost 75.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Google DeepMind launch blog and cyber page, Artificial Analysis launch article and model pages, vals.ai, apidog, ai-primer, seatofish); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
