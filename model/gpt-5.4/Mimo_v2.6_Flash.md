# GPT-5.4 — findings by Mimo V2.6 Flash

- Source: OpenAI/`gpt-5.4`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 GPT-5.4 flagship (xhigh reasoning tier) — 1.05M total context (272K+ input surcharge), GPQA 92.8, HLE-tools 52.1, ARC-AGI-2 73.3, SWE-Pro 57.7, BrowseComp 82.7 at $2.50/$15. Sits between GPT-5.5 (coding-specialized) and GPT-5.6 Sol/Luna as the general high-effort reasoner with class-leading retrieval-at-depth (BrowseComp).
- **Provider / access:** OpenAI API (Responses + Chat Completions, `gpt-5.4`), ChatGPT tiers; Azure OpenAI; OpenRouter / major gateways `openai/gpt-5.4`. Reasoning effort low/medium/high/xhigh.
- **Release / knowledge:** 2026-03-05 (OpenAI launch); knowledge cutoff not published in rows reviewed.
- **IDs:** `gpt-5.4` (OpenAI API); `openai/gpt-5.4` on gateways.
- **Context window:** ~1.05M total tokens (input+output combined budget); max output 128K; inputs above 272K priced at 2× standard rates (OpenAI / aggregator rows).
- **Modalities:** text, image in; text out; reasoning effort controls; tool calls / function calling; structured outputs; code interpreter / browsing tools.
- **Pricing (as of 2026-09-23):** $2.50 / $15.00 per 1M in/out standard (≤272K); ~$5.00 / $30.00 effective above 272K input surcharge tier; cached input discounted. Paid; no free API tier.
- **Architecture:** proprietary OpenAI multimodal MoE (params undisclosed).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- BrowseComp: **82.7%** (OpenAI / BenchmarkList — web-research agent, top-of-field at launch)
- τ²-Bench / Terminal-Bench 2.0 (OpenAI internal): **75.1%** TB2.0 row (launch table)
- OSWorld: **75.0%** (launch table)
- MCP Atlas / GDPval-AA / Toolathlon / Claw-Eval: **no verified public score found** in rows reviewed for this id

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI launch / BenchmarkList)
- HLE with tools: **52.1%** (OpenAI launch — high-tools tier)
- ARC-AGI-2: **73.3%** (OpenAI / BenchmarkList — top ARC tier at launch)
- AA Intelligence Index: **no stable verified public score extracted** in this pass (era rows vary)
- MMLU-Pro / CritPt / Omniscience: **no verified public score found** in rows reviewed

Coding:

- SWE-bench Pro: **57.7%** (OpenAI launch — trails Fable 80, Opus 4.8 69.2, Sol-class)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found** for this exact id in this pass (sibling GPT-5.5/5.6 rows exist — not reused)

Long context:

- MRCR v2: **86%** @128K / **36.6%** across 512K–1M slices (OpenAI / BenchmarkList — strongest public multi-depth MRCR row among 2026 launches)
- 1.05M total window with 272K standard-input ceiling before 2× surcharge

Multimodal:

- Image in, text out; MMMU / MMMU-Pro / video suites: **no verified public score found** for this exact id in rows reviewed
- No audio/video/PDF claim extracted → image-in band

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 82.7 (field-leading web agent), TB2.0 75.1, OSWorld 75 — strong multi-surface agentic; capped by missing public MCP/GDPval/Toolathlon/Claw rows and no TB2.1 independent row for this id.
- **Reasoning: 93/100.** GPQA 92.8, HLE-tools 52.1, ARC-AGI-2 73.3 — elite science/arc reasoning; capped slightly by missing AA Index confirmation and HLE-tools still behind top Fable/Mythos 57–64 cluster.
- **Context window: 94/100.** 1.05M total (≥1M tier) with MRCR 86@128K / 36.6@512K–1M proving multi-depth retrieval; capped by 272K standard-input price wall (2× above) and 36.6% deep-slice still imperfect.
- **Multimodal: 68/100.** Text+image in only (no audio/video/PDF claim) → image-in band 60–70; no public MMMU row to anchor upper half.
- **Coding: 87/100.** SWE-Pro 57.7 solid but not class-leading; BrowseComp-adjacent coding agents and TB2.0 75 lift the composite; capped hard by missing public SWE-V/LCB/DeepSWE rows and SWE-Pro still well behind Fable 80 / Opus 69 tiers.
- **Cost efficiency: 63/100.** $2.50/$15 sits near the $3/$15≈60 anchor (slightly better on input); 2× surcharge above 272K input punishes long-context heavy use — closer to mid-tier value than the $1.25/$4.25≈88 class.
- **Overall Score: 86/100.** Mean of Tool 86 + Reasoning 93 + Context 94 + Multimodal 68 + Coding 87 = 428/5 = 85.6 → **86** (best-fit: high-effort web-research + hard-reasoning agent at $2.50/$15 when BrowseComp-class retrieval and ARC-AGI-2 depth matter more than top SWE-Pro or multimodal coverage).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (OpenAI launch post, BenchmarkList, models.dev / aggregator pricing rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
