# GPT-6.1 Sol — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's DevDay 2026 refresh of GPT-6 Sol (2026-09-29) — near-Astra agentic coding/computer-use/professional work at one-fifth of Astra's token price; beats Astra's best DeepSWE score (75.2% vs 74.1%) at ~1/7 the cost per task.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`, Responses API for tool calling), ChatGPT Work, Codex (Plus/Pro/Business/Enterprise/Edu; not yet in ChatGPT Chat at launch). Ultrafast tier announced, unpriced at launch.
- **Release / knowledge:** 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6.1-sol` (OpenAI API). No Zen Free ID found.
- **Context window:** 1,050,000 tokens (922K max input); 128K max output. Prompts >272K input bill at 2x input/cache and 1.5x output ($4/$15).
- **Modalities:** text + image in; text out (no audio/video, no fine-tuning); reasoning yes (efforts low/medium default/high/xhigh/max — no none/minimal); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $2 / $10 per 1M in/out; cached input $0.10 (5% — halved from GPT-6 Sol); cache write $2.50; Fast 2x; Batch/Flex 50%; regional +10%.
- **Architecture:** proprietary; no parameter count published. ~67 output tok/s (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline, partial): **71.42% Max** ($1.27/task; +7 pts over GPT-6 Sol, within 2.1 of Astra's 73.5 at ~1/7 cost)
- AutomationBench: **36.10% Max / 31.7% Medium** (+2.2 pts over Opus 5.5 at medium for ~1/3 cost)
- GDP.pdf: **32.0% High** (beats Opus 5.5 with fallbacks at under half cost; Astra best 32.2)
- Factuality (flagged-error conversations): **7.7%** error rate at low effort (from GPT-6 Sol's 11.4%, ~32% fewer)
- Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **52** (max; Astra 53, Opus 5.5 58) at **$0.72/task** weighted (vs Astra $3.26)
- Terminal-Bench Science 0.1: **57.02% Max** ($5.47/task; more than doubles GPT-6 Sol's 27.6; Astra leads at 68.1)
- HealthBench Professional (length-adj): **64.2** (within 0.5 pts of Astra's 64.7); HealthBench Hard **36.2**; Consensus **96.0**
- MentalHealthBench: **57.9** overall (Astra 58.7)
- GPQA / HLE / CritPt: no verified public score found in sources checked

Coding:

- DeepSWE v1.1: **75.22% High** ($0.65/task — beats Astra's best 74.1% at $4.43; full ladder: Low 64.4 / Medium 73.0 / Xhigh 71.9 / Max 71.9)
- Cyber (system card addendum): ExploitBench **99.7%** (Astra 100); ExploitGym **35.1%**; SEC-Bench Pro **78.8%**; internal-port ACE **21.5%**
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1.05M window (OpenAI docs); MRCR / RULER / GraphWalks: no verified public score found

Safety (addendum): Production Benchmarks above GPT-6 Sol in 5 of 8 categories; warning-circumvention rate **23.5%** (from 64.4); computer-use stress test **4.3%** (from 17.4); treated as Critical cyber / High bio-chem capability under the Preparedness Framework.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld 71.4% (2.1 behind Astra at 1/7 cost), AutomationBench +2.2 over Opus 5.5 at medium, and GDP.pdf 32.0% beating Opus 5.5 — excellent; capped by missing Tau3/MCP-Atlas rows and vendor-run launch charts.
- **Reasoning: 87/100.** AA Index 52 (1 behind Astra) with TB-Science 57.0% and HealthBench Pro 64.2 (≈Astra); capped by Opus 5.5's 58 Index and Astra's 68.1 TB-Science lead, plus no public GPQA/HLE rows.
- **Context window: 95/100.** 1.05M window (95–100 tier); no public retrieval-at-length number, and the 272K full-request reprice is a caveat.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band); no audio/video support at all on this card.
- **Coding: 92/100.** DeepSWE 75.22% at High beats Astra's best at a seventh of the cost — the best cost-adjusted coding evidence of the GPT-6 family; capped by missing SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 80/100.** $2/$10 with the only 5% cache-read rate in the lineup, AA-measured $0.72 per Index task (vs Astra $3.26, Sonnet 5.5 $7.60); between the methodology's ~88 and ~60 anchors, lifted by the cache economics.
- **Overall Score: 85.6/100.** Mean of (89, 87, 95, 65, 92) = 85.6 — the default OpenAI route for volume agentic coding; keep Astra for peak-score science and OSWorld-critical work.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI model docs + system card addendum, apidog, rohitai, WinBuzzer, llm-stats, HokAI, AlphaCorp, Artificial Analysis via WinBuzzer/HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
