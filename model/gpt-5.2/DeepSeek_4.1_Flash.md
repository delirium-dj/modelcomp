# GPT 5.2 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.2 (`openai/gpt-5.2`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> The prior file had almost no agentic/coding rows; the official OpenAI launch page supplies a full table. Newly confirmed: **τ²-bench Telecom 98.7%** / Retail 82.0%, BrowseComp 65.8%, MCP-Atlas 60.6%, Toolathlon 46.3%, **GDPval 70.9%**, OSWorld-Verified 47.3%, **SWE-bench Verified 80.0%**, SWE-bench Pro 55.6%, SWE-Lancer IC Diamond 74.6%, **GPQA Diamond 92.4%**, HLE 34.5% (45.5% with tools), AIME 2025 100%, **ARC-AGI-1 86.2% / ARC-AGI-2 52.9%**, MRCRv2 8-needle 98.2%→77.0% at 128–256K, **AA-LCR 82.7%**, MMMU-Pro 79.5%, Video-MMMU 85.9%, ScreenSpot-Pro 86.3%; independent **Vibe Code Bench v1.1 53.50%**; AA Intelligence Index **30**; BenchLM overall 60.33 (#50/889).
> **Conflicts surfaced:** (1) **Release** — Dec 11, 2025 (OpenAI) vs Dec 10 (OpenRouter). (2) **FrontierMath Tier 4** — 14.6% (OpenAI, w/ Python) vs 18.8% (Epoch v2). (3) **HLE (no tools)** — 34.5% (OpenAI) vs 37.7% (AA). (4) **GPQA** — 92.4% (OpenAI) vs 90.3% (AA). (5) BenchLM's multimodal rows come from a *Qwen* comparison table, not a GPT-5.2 test — provenance weak.
> **Adjusted dimensions:** Tool 70→78 (GDPval 70.9%, OSWorld 47.3%, τ²-Telecom 98.7% newly surfaced), Reasoning 84→85, Coding 74→80 (SWE-bench Verified 80.0% / SWE Pro 55.6% vs prior "no verified score"); Overall 75 → **78**.
> Sources: https://developers.openai.com/api/docs/models/gpt-5.2 · https://openai.com/index/introducing-gpt-5-2/ · https://benchlm.ai/models/gpt-5-2 · https://artificialanalysis.ai/models/gpt-5-2

## Model card

- **Name:** GPT 5.2 (ChatGPT-facing "GPT-5.2 Thinking"; series also has Instant and Pro)
- **Short description:** The frontier-grade general model of the GPT-5 series — an adaptive-reasoning successor to GPT-5.1 with stronger agentic, computer-use and long-context performance, targeted at broad task coverage across math, coding, science and tool-calling workloads.
- **Provider / access:** OpenAI API (Responses + Chat Completions), plus OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2025-12-11 (snapshot `gpt-5.2-2025-12-11`); knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2` (OpenAI/OpenRouter); variants `gpt-5.2-chat-latest` (Instant), `gpt-5.2-pro`; Zen `opencode/gpt-5.2`. No Zen Free ID.
- **Context window:** 400,000 tokens input; max output 128,000 tokens.
- **Modalities:** text and image in; text out. Reasoning yes (`reasoning.effort` none/low/medium/high/xhigh), tool use, structured outputs.
- **Pricing (as of 2026-10-11):** **$1.75 / $14 per 1M** in/out, cached input $0.175; OpenAI Flex tier lower.
- **Architecture:** proprietary decoder-only; adaptive-reasoning frontier model. Not released.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom **98.7%** / Retail 82.0% (OpenAI); AA aggregate τ² 84.8%
- BrowseComp **65.8%**; MCP-Atlas 60.6%; Toolathlon 46.3%; **GDPval (wins/ties) 70.9%**; OSWorld-Verified 47.3%
- IFBench 75.4% (xhigh) / 65.2% (medium); Gert Labs 46.54%; JobBench 34.3%
- AA-Omniscience Accuracy 38.3% / Non-Hallucination 38.4% (medium)

Reasoning / knowledge:

- GPQA Diamond **92.4%** (OpenAI) / 90.3% (AA); HLE 34.5% no tools / **45.5%** with tools; AIME 2025 **100%**
- ARC-AGI-1 **86.2%**; ARC-AGI-2 **52.9%**; FrontierMath T1–3 40.3% / Tier 4 14.6% (OpenAI) — Epoch v2 reads 40.7% / 18.8%
- AA-LCR **82.7%** (between effort tiers); CritPt 7.9% (medium); MMLU (MMMLU) 89.6%
- Artificial Analysis Intelligence Index **30** (estimated); BenchLM overall 60.33 (#50/889)

Coding:

- SWE-bench Verified **80.0%** (OpenAI + AI Release Tracker); SWE-bench Pro (public) 55.6%; SWE-Lancer IC Diamond 74.6%
- Vibe Code Bench v1.1 **53.50%** (Vals); Design Arena Website 1201 Elo
- Terminal-Bench Hard 43.2% (medium) (prior); SciCode / LiveCodeBench: **no verified public score found**

Long context:

- MRCRv2 8-needle 98.2% (4–8K) → 92.0% (32–64K) → 77.0% (128–256K); BrowseComp Long-Context 92.0% @128K / 89.8% @256K; GraphWalks BFS 94.0% (<128K); AA-LCR 82.7%.

Multimodal / vision:

- MMMU-Pro 79.5% (no tools) / 80.4% (w/ Python); CharXiv 82.1% (no tools); Video-MMMU 85.9%; ScreenSpot-Pro 86.3%.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Telecom 98.7%, GDPval 70.9%, BrowseComp 65.8% and MCP-Atlas 60.6% are solidly agentic (raised from 70, which predated GDPval/OSWorld); capped by the mid OSWorld 47.3% and Toolathlon 46.3%.
- **Reasoning: 85/100.** GPQA 92.4%, AIME 100%, HLE 45.5% with tools and AA-LCR 82.7% are near-frontier; ARC-AGI-2 52.9%, CritPt 7.9% and AA index 30 cap it above the top band.
- **Context window: 80/100.** 400K tokens lands in the 200K–500K band, with strong MRCR at ≤256K and AA-LCR 82.7%; below the ≥1M tier.
- **Multimodal: 68/100.** Text and image input, text output (`+image in = 60–70`); strong MMMU-Pro/CharXiv/Video-MMMU rows do not change the input-modality band; no audio.
- **Coding: 80/100.** SWE-bench Verified 80.0% and SWE-bench Pro 55.6% (newly surfaced) raise it from 74; undermined by an end-to-end Vibe Code Bench of only 53.5%, so it is not treated as a frontier app-builder.
- **Cost efficiency: 70/100.** $1.75 / $14 per 1M sits between the $1.25/$4.25 (~88) and $3/$15 (~60) reference points.
- **Overall Score: 78/100.** (78 + 85 + 80 + 68 + 80) / 5 = 78.2 → **78**. Best fit: balanced day-to-day frontier reasoning and agentic work at mid-frontier pricing, with strong SWE-bench but weaker end-to-end app building.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (OpenAI GPT-5.2 docs + launch page full evaluation tables, BenchLM model page, Artificial Analysis, Vals AI, AI Release Tracker). The official launch table replaced the prior OpenRouter-only rows; the FrontierMath/HLE/GPQA spreads and the weak-provenance multimodal rows are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
