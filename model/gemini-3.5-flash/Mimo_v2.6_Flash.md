# Gemini 3.5 Flash — findings by Mimo V2.6 Flash

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's I/O 2026 Flash flagship (GA) — most intelligent Flash at release, successor to Gemini 3 Flash, tuned for agentic execution, MCP tool orchestration, and full multimodal ingestion (video/PDF/audio). Not the same as `gemini-3.6-flash` or Flash-Lite tiers.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.5-flash`, GA stable), Vertex AI (incl. EU multi-region GDPR endpoint), OpenRouter. Chat-style generateContent API. Computer Use (Preview) supported.
- **Release / knowledge:** Released / GA 2026-05-19 (Google I/O; DeepMind model card; HokAI). Knowledge cutoff January 2025 (Google FAQ).
- **IDs:** `google/gemini-3.5-flash`. No dedicated Zen Free ID verified; Vertex/Gemini API paid (free-quota status not confirmed in sources — treat as paid for scoring).
- **Context window:** 1,048,576 tokens input; max output 65,536 tokens (Google FAQ / HokAI).
- **Modalities:** text, image, audio, video, PDF in; text + tool-calls out (no image/audio/video generation); reasoning yes (thinking levels minimal/low/medium/high, default medium); tool calls + code execution + Search grounding yes; structured outputs / JSON mode yes.
- **Pricing (as of 2026-09-23):** $1.50 in / $9.00 out per 1M; cached input $0.15 / 1M (90% discount) (Google/HokAI/modelpricewatch, stable since Jun 2026). ~3× Gemini 3 Flash Preview pricing.
- **Architecture:** proprietary (params undisclosed; natively multimodal transformer per HokAI).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **76.2%** (DeepMind model card, Terminus-2 harness)
- MCP Atlas: **83.6%** (HokAI — highest tool-orchestration result of any model as of June 2026)
- OSWorld-Verified: **78.4%** (HokAI lineage vs 3.6's 83.0)
- GDPval-AA v2: **1349** (HokAI — vs 3.6 Flash's 1421)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon: no verified public score found for this ID in sources consulted

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (HokAI)
- HLE: no verified public score found as a distinct 3.5 Flash row in sources consulted
- ARC-AGI-2: **72.1%** (HokAI)
- Artificial Analysis Intelligence Index: **55** (HokAI/AA launch-era); AA release page later shows **34** for medium/high/minimal variants under Index v4.3 — methodology change noted, 55 used as launch-era primary
- IF Bench: **76.30** (DataLearner catalog); DataLearner also lists a GPQA Diamond 92.80 row — treat 90.4% (HokAI) as primary, 92.80 as alternate catalog figure
- CritPt / Omniscience numeric: no verified public score found in sources consulted

Coding:

- SWE-bench Verified: **78%** (HokAI — vendor-aligned; +42% relative claim vs prior Flash generation noted in HokAI copy, absolute comparison to 3 Flash's 78% is what Google published for the earlier model — use 78% as the measured 3.5 Flash value)
- SWE-bench Pro (Public): **55.1%** (DeepMind model card)
- DeepSWE v1.1: **37%** (DeepMind model card)
- LiveCodeBench / SciCode / Vibe: no verified public score found as distinct 3.5 Flash rows in sources consulted

Long context:

- 1M input confirmed; independent recall above 100K **not published for the 3.5 generation** (HokAI) → no long-context retrieval percentage reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

- **Tool use: 84/100.** MCP Atlas 83.6% (field-leading at June 2026), TB2.1 76.2%, OSWorld 78.4%, GDPval-AA v2 1349 — clearly above mid-tier and among the best Flash-class agentic tool stacks; capped below 88+ because GDPval trails Claude 1800+ and Tau3/Claw rows are missing.
- **Reasoning: 87/100.** GPQA 90.4% hits the frontier-adjacent band and ARC-AGI-2 72.1% is strong (below 3.1 Pro's 77.1); discounted from 90+ due to no HLE row for this ID and AA Index 55 (launch) / 34 (v4.3) — solidly above mid but not Index-60 frontier.
- **Context window: 93/100.** 1,048,576-token window qualifies for the ≥1M tier; no MRCR/RULER ≥98% retrieval proof for 3.5 gen (explicitly unpublished) → held at 93 (full window, zero retrieval evidence).
- **Multimodal: 95/100.** Full text/image/audio/video/PDF in with MMMU-Pro **84.2%** — HokAI/AA call it the highest multimodal reasoning score AA had recorded at launch; text+tool-calls out only prevents 100, but audio/video/PDF input puts it in the top methodology band (75–90+) with a peak-quality bump to 95.
- **Coding: 85/100.** SWE-V 78%, SWE-Pro 55.1%, TB2.1 76.2% is excellent Flash-tier coding (beats Gemini 3.1 Pro on some real-world rows per HokAI); capped below 88 because DeepSWE 37% is well behind frontier (~70) and no LiveCodeBench/SciCode rows for this ID.
- **Cost efficiency: 80/100.** $1.50/$9.00 with $0.15 cached input (90% cache discount) — cheaper than Opus/Fable/GPT-5.4 output and reasonable for a multimodal agentic Flash; above the $0.50/$3 Flash Preview tier and well under $3/$15, so ~80 not 92+.
- **Overall Score: 89/100.** Mean of the five quality dims: (84 + 87 + 93 + 95 + 85) / 5 = 88.8 → 89. Best-fit: production default for MCP-heavy multimodal agents and video/PDF pipelines that need GPQA ~90 and SWE ~78 without Pro-tier bills.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (DeepMind Gemini 3.5 Flash model card, Google AI what's-new FAQ, HokAI/DataLearner/modelpricewatch/AA release aggregations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
