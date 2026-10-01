# Gemini 3.1 Flash Lite — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.1 Flash Lite
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency model for high-frequency lightweight tasks; full media input and 1M context but weak reasoning/agentic ability.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-3.1-flash-lite`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 3.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and curated metadata.
- **Modalities:** text/image/audio/PDF in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.25 in / $1.50 out per 1M; $0 on the promotional free tier.
- **Architecture:** proprietary Flash-Lite tier.

### Raw benchmarks found

Agent / tool use:

- Gert Labs **38.46%**; Vals Terminal-Bench 2.1 **34.1%**
- Claw-Eval / GDPval / OSWorld / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond (Vals) **81.1%**
- JevBench 1.4 **14.26**; JevBench 1.5 **19.58**
- AA Index / HLE / AA-LCR: no verified public score found for this ID
- MMLU-Pro (Vals) **86.2%**

Coding:

- LiveCodeBench (Vals) **80.1%**; SWE-bench (Vals) **62.8%**; Vibe Code Bench **0.00%**

Long context:

- no long-context retrieval number found

Multimodal:

- CharXiv **73.2%**; text/image/audio/PDF input per curated metadata

### Normalized scores (1–100)

- **Tool use: 40/100.** Gert Labs 38.5% and Vals TB 2.1 34.1% are weak; no GDPval/OSWorld numbers found.
- **Reasoning: 50/100.** GPQA 81.1% is decent; JevBench scores are low and HLE/AA Index are unverified.
- **Context window: 88/100.** 1M window; no retrieval benchmark found.
- **Multimodal: 82/100.** text/image/audio/PDF in with CharXiv 73.2%; text-only output.
- **Coding: 62/100.** LiveCode 80.1% is good; SWE (Vals) 62.8% and Vibe Code 0% are weak.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid $0.25/$1.50.
- **Overall Score: 64/100.** Mean of (40 + 50 + 88 + 82 + 62) / 5 = 64.4 → 64. Best-fit: high-frequency lightweight multimodal calls with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
