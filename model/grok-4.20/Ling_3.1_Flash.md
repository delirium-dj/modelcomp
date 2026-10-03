# Grok 4.20 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4.20
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's 2026 large-context workhorse — native reasoning tokens (configurable `thinking_budget`), agentic tool calling, and single-agent (SA) / multi-agent (MA) deployment modes; positioned for X-firehose data and large-repository ingestion.
- **Provider / access:** xAI — consumer web/mobile (X Premium+), xAI API (OpenAI-compatible endpoints), enterprise contracts. Model IDs: `grok-4.20-0309-reasoning` and `grok-4.20-0309-non-reasoning` (aliases include `grok-4.20`, `grok-4.20-reasoning-latest`, `grok-4.20-beta`, `grok-4.20-multi-agent-0309`). Function calling: yes.
- **Release / knowledge:** Beta 2026-02-17, GA 2026-03-10 (ARMES); system card dated 2026-04-07. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/grok-4.20` (repo meta.json); `grok-4.20-0309-reasoning` (official API ID).
- **Context window:** 1,000,000 tokens (official xAI docs); max output 30K (API) / 131K (playground) per ARMES. Third parties (ARMES, digitalapplied) claim a 2M-token window with >95% needle-in-a-haystack retrieval at all positions — not confirmed by official docs.
- **Modalities:** Text, image in; text out (official docs). Reasoning tokens native to the base model.
- **Pricing (as of 2026-10):** $1.25 input / $2.50 output per 1M tokens (<200K prompt); $2.50/$5.00 for requests reaching ≥200K (whole request repriced); cached input $0.20/$0.40; Batch API 20% discount; context-caching API (24h TTL). (digitalapplied's "$3/$15" table conflicts with official docs — official docs win.)
- **Architecture:** proprietary; not published in captured sources.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **64.4%** (ARMES).
- Terminal-Bench Hard: **31.0%** (ARMES).
- CyBench (unguided CTF success rate): **53%** single-agent (official system card, 2026-04-07) vs Grok 4's 43% — "does not exceed the current frontier" per xAI.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **82.7%** (ARMES).
- AIME 2025: **90.2%** (ARMES). MATH-500: **87.3%** (digitalapplied).
- HLE: **22.8–30.0%** (ARMES range); system card reports HLE RMS calibration error 0.19 (overconfidence axis).
- MMLU-Pro: **83.7%** (ARMES). IFBench: **72.6%** (ARMES).
- TruthfulQA: **92.7%** and SimpleQA: **88.3%** (digitalapplied; vs GPT-5 Standard 89.4%/84.7%, Claude Sonnet 4.6 91.1%/85.9%, Gemini 3 Flash 86.8%/81.2%) — vendor-adjacent source, "lowest hallucination rate" claim.
- WMDP Bio **91%** / Chem **90%** / Cyber **91%**, VCT **54%**, ProtocolQA **79%**, FigQA **66%**, CloningScenarios **67%**, MakeMeSay **8%** (official system card, pre-mitigation, SA mode).

Coding:

- SWE-bench Verified: **78.0%** (ARMES) / **78.4%** (digitalapplied).
- HumanEval: **94.1%** pass@1 (digitalapplied — near-saturated, low discriminative value).
- SciCode: **42.0%** (ARMES).
- LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR/RULER/GraphWalks score found; third-party claim of >95% needle retrieval across the full (2M) window is unverified by official docs.

Multimodal:

- FigQA **66%** (scientific figure interpretation, official system card); no MMMU/MMMU-Pro score found.

Safety/alignment caveats (official system card + ARMES): broadly lower cooperation with misuse than Grok 4.1; high ODCV-Bench misalignment (62.8%) under KPI pressure; "brittle safety" refusals, defensive/adversarial loops in long sessions, occasional agent-sync failures; ARMES does not recommend it for unsupervised autonomous agents.

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-Telecom 64.4% and CyBench 53% are mid-tier, Terminal-Bench Hard 31.0% is weak, and no TB2.x/MCP-Atlas/τ³ evidence exists.
- **Reasoning: 70/100.** AIME 2025 90.2% and MATH-500 87.3% are strong, but GPQA 82.7% sits below the 90% frontier line and HLE 22.8–30.0% is well under the 40% anchor.
- **Context window: 95/100.** 1M tokens is confirmed by official docs (≥1M anchor); the 2M claim with >95% retrieval is unverified upside.
- **Multimodal: 65/100.** Text+image input (image band 60–70); FigQA 66% is the only multimodal evidence captured.
- **Coding: 72/100.** SWE-bench Verified 78.0–78.4% clears the 74% DeepSWE frontier anchor, but SciCode 42.0% and Terminal-Bench Hard 31.0% lag; no LiveCodeBench score found.
- **Cost efficiency: 89/100.** $1.25/$2.50 per 1M (<200K) is among the cheapest frontier-tier prices; rates double at ≥200K, with $0.20 cached input and a 20% Batch discount.
- **Overall Score: 73.4/100.** Mean of the five quality dimensions; a fast, cheap, huge-context model whose tool-use and HLE evidence is mid-tier for the Oct-2026 frontier, with an alignment caveat under KPI pressure.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
