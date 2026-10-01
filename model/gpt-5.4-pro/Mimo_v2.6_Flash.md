# GPT-5.4 Pro — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.4-pro`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance GPT-5.4 variant, released in ChatGPT and the API alongside GPT-5.4 (2026-03-05), for the most complex tasks requiring the highest reasoning capacity — ApX reports SOTA-level results on ARC-AGI-2, BrowseComp, GPQA Diamond and FrontierMath Tier 4. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1`) + ChatGPT; also on OpenRouter/Inworld-class routers where listed. Batch/Flex at half rate, Priority at 2× (GPT-5.4 family pricing rules).
- **Release / knowledge:** released 2026-03-05 (ApX release-date row); knowledge cutoff not published for this snapshot.
- **IDs:** `gpt-5.4-pro`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** **1.05M tokens** per OpenAI `gpt-5.4-pro` model documentation (BenchLM spec rows; multiple head-to-heads confirm "larger documented context window at 1.05M"). ApX's structured field shows 272K — that matches the family's long-context surcharge boundary (2× input past 272K on GPT-5.4) and is treated as the max-input/tiering figure, not the window.
- **Modalities:** text + image in; text out (ApX modality "Multimodal"; BenchLM documented inputs "text, image"); reasoning yes. No audio/video input found.
- **Pricing (as of 2026-10-01):** **$30 / 1M input, $180 / 1M output** (OpenAI pricing table via the GPT-5.4 post; ApX and BenchLM agree); no published cached-input rate (BenchLM). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed; reasoning model.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI's own GPT-5.4 comparison table prints "—" for Pro on SWE-Bench Pro, Terminal-Bench 2.0, OSWorld-Verified, MCP Atlas, Toolathlon and τ²-Bench Telecom — Pro's published evidence is reasoning/multimodal/web-research only.

Agent / tool use:

- BrowseComp (agentic web research): **89.3%** (OpenAI GPT-5.4 post; BenchLM) — beats GPT-5.4 82.7% and GPT-5.5 84.4%
- Terminal-Bench (any version) / τ²-Bench / Tau3 / GDPval / OSWorld / Toolathlon / MCP Atlas / Claw-Eval: **no verified public score found** (OpenAI table prints "—")
- BenchLM agentic lane: **58.5**, estimated, rank #32/151 — single rankable row (BrowseComp)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (ApX model summary)
- HLE: **58.7%** with tools, **42.7%** w/o tools (BenchLM)
- ARC-AGI-2: **83.3%** (ApX; BenchLM agrees) — vs GPT-5.5 85%, GPT-5.4 74.0%
- FrontierMath Tier 4: **38.0%** (ApX) / **37.5%** (BenchLM); FrontierMath legacy 50% (BenchLM vs GPT-5.5 Pro row); IPho 2025 (Theory) 93.5%
- FrontierScience: 36.7% (BenchLM)
- BenchLM knowledge lane: 61.2, estimated, #36/181; reasoning lane 70.1 (ARC-AGI-2 + one more row); composite **61.4–61.7**, estimated, public rank #55–62

Coding:

- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode / Terminal-Bench / Vibe Code Bench: **no verified public score found** — OpenAI's table shows "—" for every coding row (Pro is not the coding lane; GPT-5.3-Codex/GPT-5.4 are)
- BenchLM coding lane: **"Not measured"** (0 rankable rows)

Long context:

- 1.05M window (OpenAI docs via BenchLM); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- MMMU-Pro: **94%** (BenchLM multimodal lane 94.0) — beats GPT-5.5 81.2%
- Image input supported; no CharXiv/ScreenSpot row found

### Normalized scores (1–100)

- **Tool use: 55/100.** No Terminal-Bench, τ², GDPval, OSWorld, Toolathlon or MCP Atlas number exists for Pro (OpenAI prints "—" on all of them). BrowseComp 89.3% is elite agentic web-research evidence but is not one of the methodology's tool-use anchors, so the score is an evidence floor plus adjacent credit — BenchLM's own agentic lane (58.5, one row) agrees.
- **Reasoning: 95/100.** GPQA Diamond 94.4%, HLE 58.7% w/tools and 42.7% w/o tools all clear the frontier anchors (GPQA 90+, HLE 40+), ARC-AGI-2 83.3% is SOTA-class, FrontierMath T4 37.5–38% and IPho Theory 93.5% reinforce it — top-of-band, capped only by the absence of an AA Intelligence Index row.
- **Context window: 95/100.** 1.05M tokens is the ≥1M tier (95–100); the 100 requires ≥98% retrieval measured at 512K+, which does not exist for this model.
- **Multimodal: 70/100.** Text + image in caps at the top of the image-in band (60–70) per methodology — the 94% MMMU-Pro is exceptional but does not add input coverage (no PDF/video/audio input verified, no non-text output).
- **Coding: 65/100.** Zero verified coding rows for this checkpoint (BenchLM: coding "Not measured"); scored as an evidence gap with GPT-5.4-family lineage credit (GPT-5.4 itself: SWE-Bench Pro 57.7%, LiveCodeBench Pro 87.5%) rather than any measured Pro result — no hallucinated score.
- **Cost efficiency: 15/100.** $30/$180 per 1M is past the $10/$50 ≈ 30 anchor — 6× that on input, 3.6× on output, and the joint-highest output price seen in this queue; no cached-input rate published.
- **Overall Score: 76/100.** (55 + 95 + 95 + 70 + 65) / 5 = 76.0 → 76 — best-fit as an elite science/abstract-reasoning and vision-analyst Pro lane with 1.05M context, not a coding or agentic-tool model; capped by zero measured tool-use/coding rows and $180 output pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4" post pricing/eval tables, ApX GPT-5.4 Pro model page, BenchLM head-to-head ledgers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
