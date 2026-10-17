# Gemini 3.8 Flash — findings by Beam

- Source: Google/Gemini 3.8 Flash, `google/gemini-3.8-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-class reasoning model (Sep 2026) with significant gains over 3.7 Flash in agentic, coding, and multimodal tasks; optimized for high efficiency at low cost. Cyber variant (Gemini 3.8 Flash Cyber) exists for vulnerability discovery.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.8-flash` (Chat/Responses); OpenRouter `google/gemini-3.8-flash`; OpenCode Zen. Batch tier available.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens; max output 65,536 (verified via OpenRouter/Kilo).
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.75 / 1M input, $3.75 / 1M output, $0.075 / 1M cached; paid. 50% off promo observed.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Meta/BenchLM head-to-head); **81.3%** (Vals)
- Agentic public-lane (BenchLM): **65.9** (#16/128)
- OSWorld 2.0: **59.0%**
- AutomationBench: no verified score found (coming soon)
- MCP-Atlas / Toolathlon: no verified score found
- GDPval-AA: no verified score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **94.4%**
- MMLU-Pro (Vals): **90.2%**
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: 10.4%
- HLE: no verified public score found
- CritPt / MRCR: no verified public score found (MRCRv2 coming soon)
- Artificial Analysis Intelligence Index: no verified figure found

Coding:

- DeepSWE: **73.8%**
- CursorBench 3.2: **69.2%**; CursorBench 4.0: 39.6%
- Coding public-lane (BenchLM): **61** (#17/150)
- FrontierSWE v2: 19.6%
- Bug Hunt Bench: 18.0 fixes
- SWE-bench Verified/Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 1M window; CharXiv w/o tools 86.2%, LVBench 87.1%; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 ~89%, agentic lane #16/128 (65.9), OSWorld 59%; caps at unverified MCP-Atlas/Toolathlon.
- **Reasoning: 85/100.** GPQA 94.4%, ARC-AGI-1 98.5%, ARC-AGI-2 89.2%; caps at ARC-AGI-3 10.4% and no HLE.
- **Context window: 85/100.** 1M window with strong multimodal long-context (LVBench 87.1%); caps at no published MRCR.
- **Multimodal: 90/100.** Text/image/video/audio/PDF in, text out; CharXiv 86.2%, LVBench 87.1%.
- **Coding: 80/100.** DeepSWE 73.8%, CursorBench 69.2%, coding lane #17/150 (61); caps at unverified SWE-bench.
- **Cost efficiency: 90/100.** Low pricing $0.75/$3.75 per 1M; excellent value.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 69.23); best-fit for high-volume agentic + multimodal at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchLM, Kilo, LM Market Cap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.