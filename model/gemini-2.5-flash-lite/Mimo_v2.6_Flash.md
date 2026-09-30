# Gemini 2.5 Flash-Lite — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-2.5-flash-lite`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest 2.5-family multimodal model (preview 2025-06-17, GA 2026-02-19) — $0.10/$0.40, 1M context, ~359 tok/s — built for high-volume classification/extraction/routing; **end-of-life: Vertex retirement 2026-10-20** (replacement: Gemini 3.1 Flash-Lite or Gemma 4).
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-flash-lite`; Vertex AI / Gemini Enterprise Agent Platform; **Free tier** on AI Studio and OpenCode Zen with standard rate limits (meta).
- **Release / knowledge:** preview 2025-06-17; GA 2026-02-19; knowledge cutoff **January 2025**. **Retirement: 2026-10-20** (Gemini Enterprise model-versions table); AI Studio deprecation path aligned with 2.5 family (~June/Oct 2026 coverage in third-party docs — Vertex 2026-10-20 is the hard date cited).
- **IDs:** `google/gemini-2.5-flash-lite`.
- **Context window:** **1,048,576** input; **65,536** max output.
- **Modalities:** text/image/video/audio/PDF in; text out; toggleable thinking budgets; Search grounding + code execution; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** **$0.10 in / $0.40 out per 1M** (Tokenando/Awesome Agents/AA); cache/batch discounts apply; free AI Studio / Zen free tier (evaluated tier includes free access).
- **Architecture:** proprietary sparse MoE (undisclosed); Lite tier of Gemini 2.5 hybrid-reasoning stack.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Awesome Agents (official card, non-thinking default) primary; AA/Tokenando cross-checks.

Agent / tool use:

- SWE-bench Verified: **31.6%** (Awesome Agents / official card non-thinking)
- Terminal-Bench 2.1 / GDPval-AA / Toolathlon / MCP-Atlas: no verified public score found for 2.5 Flash-Lite (Lite tier not on many 2026 agentic boards; AA Index includes TB v4.0 in composite only)
- OSWorld / AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **64.6%** non-thinking (Awesome Agents); Tokenando cites **70%** (inherited-from-Flash variant note) — both cited, card non-thinking preferred
- AIME 2025: **49.8%** non-thinking (Awesome Agents)
- Global MMLU Lite: **81.1%**; MMLU: **84%** (Tokenando)
- FACTS Grounding: **84.1%** (#3 overall at time of writeup) (Awesome Agents)
- Artificial Analysis Intelligence Index: **9** reasoning / **7** non-reasoning (AA release page — very low vs 2026 frontier)
- Humanity's Last Exam: no verified public score found

Coding:

- LiveCodeBench: **33.7%** (Awesome Agents)
- SWE-bench Verified: **31.6%** (Awesome Agents) / Tokenando cites **48%** (Flash-inherited figure — note conflict)
- HumanEval: **87%** (Tokenando) / **90.5%** on sibling 3.1 Flash-Lite card (different model)
- DeepSWE / SWE-Pro / Vibe: no verified public score found

Long context:

- 1M window; **MRCR v2 at 128K: 16.6%** (Awesome Agents — very weak mid-window retrieval despite 1M sticker)

Multimodal:

- Native text/image/video/audio/PDF in; **MMMU: 72.9%** (Awesome Agents)
- CharXiv / Video-MMMU modern boards: no verified public score found

### Normalized scores (1–100)

- **Tool use: 50/100.** SWE-Verified 31.6 shows functional but weak agentic coding; no TB2.1/GDPval/Toolathlon rows — Lite tier is for classification/routing, not long tool loops.
- **Reasoning: 60/100.** GPQA 64.6 and AIME 49.8 non-thinking are mid for 2026; FACTS 84.1 grounding is a bright spot; AA Intelligence Index **9** confirms very low current-board reasoning vs frontier.
- **Context window: 80/100.** Full 1M/64K sticker is excellent at this price, but **MRCR 16.6% @ 128K** means practical reliable range is well under 128K — window is for bulk stuffing, not deep retrieval.
- **Multimodal: 90/100.** Full text/image/video/audio/PDF in with MMMU 72.9 — complete multimodal input coverage for a Lite tier (audio present → upper band).
- **Coding: 55/100.** LiveCodeBench 33.7 and SWE-Verified 31.6 are budget-tier coding — fine for snippets, not production SWE agents.
- **Cost efficiency: 97/100.** $0.10/$0.40 + free AI Studio/Zen tier + 359 tok/s is elite economics; not 100 only because **retirement 2026-10-20** (weeks away) makes new integrations a migration liability.
- **Overall Score: 67/100.** Mean of five quality dims (50+60+80+90+55)/5 = 67.0. Best-fit: existing ultra-cheap multimodal pipelines with days of remaining runway — **new builds must target Gemini 3.1 Flash-Lite** (Google's designated replacement, similar $0.25/$1.50 tier).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Gemini Enterprise model-versions retirement table, Awesome Agents official-card deep-dive, Artificial Analysis release page, Tokenando pricing/benchmarks, AI Toolbox 3.1 comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
