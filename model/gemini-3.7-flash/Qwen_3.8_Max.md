# Gemini 3.7 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's fast, low-cost Flash-tier workhorse for coding and agentic workflows — the most capable Flash release at its launch, an algorithmic refinement of 3.6 Flash (reasoning-core changes, not a new base model) with its biggest gains in coding, agents and document comprehension. Superseded by 3.8 Flash three weeks later.
- **Provider / access:** Gemini API (`gemini-3.7-flash`), Google AI Studio, Vertex AI, Gemini CLI. OpenRouter `google/gemini-3.7-flash`.
- **Release / knowledge:** Released 2026-08-13 (three weeks after 3.6 Flash); knowledge cutoff not published.
- **IDs:** `google/gemini-3.7-flash`.
- **Context window:** 1,048,576 (1M) tokens input; 65,536 (64K) tokens output (Google model documentation).
- **Modalities:** text + image + video + audio + PDF in → text out; reasoning yes (Low/medium/high thinking levels); tool calls yes (function calling, code execution, computer use preview, Search/Maps grounding, structured outputs); no image/audio generation.
- **Pricing (as of 2026-10-20):** $0.75 / 1M input, $3.75 / 1M output introductory through 2026-12-31, then $1.50 / $7.50 from 2027-01-01; caching supported.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-bench 2.1: **85.8%** (Google model card; leads Claude Sonnet 5 80.4%, 3.6 Flash 78.0%; behind GPT-5.6 Terra 87.4%)
- AutomationBench: **30.4%** (leads tier — Sonnet 5 10.7%, GPT-5.6 Terra 23.6%; nearly double 3.6 Flash's 17.0%)
- GDP.pdf (expert PDF comprehension): **34.0%** (leads tier; Sonnet 5 28.0%, Terra 24.7%)

Reasoning / knowledge:

- HLE-Verified: **53.6%** (leads tier — Sonnet 5 31.0%, GPT-5.6 Terra 51.1%; up from 3.6 Flash 51.2%)
- Artificial Analysis Intelligence Index: **56** at high thinking (independent; ahead of 3.6 Flash's 52)
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE v1.1 (long-horizon SWE): **65.3%** (leads Sonnet 5 53.8%, 3.6 Flash 48.6%; behind GPT-5.6 Terra 69.6%)
- FrontierCode 1.1 (Main): **43.6%** (leads tier — Sonnet 5 42.7%, Terra 41.3%; up from 3.6 Flash 34.4%)
- Code Arena (Elo, web development): **1588** (leads tier — Sonnet 5 1541, Terra 1523)
- Terminal-bench 2.1: **85.8%** (see tool use)

Multimodal:

- LVBench (long video understanding): **85.4%** (leads tier — Sonnet 5 68.5%, Terra 78.9%)
- CharXiv Reasoning (no tools, chart synthesis): **84.5%** (a hair behind 3.6 Flash 85.2% and Terra 85.9%)

Long context:

- GDM-MRCR v2 (128k, 8-needle): **97.0%** (leads tier — Terra 93.5%, 3.6 Flash 91.8%, Sonnet 5 81.5%).

> Provenance: all percentages except the AA Intelligence Index are Google-run on Google's harness (model card, Aug 2026), not independently audited; the AA Index (56) is the neutral cross-check.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-bench 2.1 85.8% and AutomationBench 30.4% lead its price tier with full agentic tooling (function calling, code execution, computer-use preview); capped because it trails GPT-5.6 Terra on the hardest agentic coding and hits a ceiling on long fully-autonomous tasks.
- **Reasoning: 88/100.** HLE-Verified 53.6% (tier-leading) and AA Intelligence Index 56; held below the Pro/frontier class (Gemini 3.1 Pro's GPQA 94.3% / ARC-AGI-2 77.1%) and by absent GPQA.
- **Context window: 96/100.** 1M-token input with best-in-tier GDM-MRCR v2 97.0% at 128k; discounted for the 64K output cap.
- **Multimodal: 91/100.** LVBench 85.4% (long video, tier-leading), CharXiv 84.5% and native text/image/video/audio/PDF input — genuinely broad multimodality; capped by no image/audio generation and CharXiv slightly behind Terra.
- **Coding: 89/100.** DeepSWE 65.3%, FrontierCode 43.6% and Code Arena 1588 all lead the tier; capped by DeepSWE trailing GPT-5.6 Terra's 69.6% on the hardest long-horizon work.
- **Cost efficiency: 93/100.** $0.75/$3.75 introductory pricing (frontier-adjacent capability per dollar, 2–3x cheaper than the rivals it beats); not 100 because it is a paid tier and the intro price doubles on 2027-01-01.
- **Overall Score: 91/100.** Mean of Tool 89 + Reasoning 88 + Context 96 + Multimodal 91 + Coding 89 = 90.6 → 91. Best fit: high-volume, cost-sensitive coding/agent/document workloads and multimodal (video/PDF) parsing at scale; the hardest fully-autonomous agentic coding still favors pricier frontier models.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Emergent's Gemini 3.7 Flash guide compiling Google's model-card benchmark table and specs; Artificial Analysis Intelligence Index via the same source); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
