# GPT-5.4 nano — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.4-nano`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's smallest GPT-5.4 reasoning model — 400K context, image input, very cheap/fast, with surprisingly strong coding and reasoning for its tier. Top use case: cheap high-volume reasoning/coding with vision.
- **Provider / access:** OpenAI API (`gpt-5.4-nano-2026-03-17`); OpenCode Zen `opencode/gpt-5.4-nano`.
- **Release / knowledge:** 2026-03; knowledge cutoff per OpenAI.
- **IDs:** `opencode/gpt-5.4-nano` (no public free tier).
- **Context window:** 400K total (BenchLM; curated stub says 128K — **understated; verify**).
- **Modalities:** text + image in; text out (stub says text-only — **flag**).
- **Pricing (as of 2026-10-03):** nano-tier (very low); among OpenAI's cheapest.
- **Architecture:** proprietary (GPT-5.4 nano).

### Raw benchmarks found

Agent / tool use:

- τ²-bench **92.5%**; MCP Atlas 56.1%; Terminal-Bench 2.0 46.3%; Terminal-Bench 2.1 (Vals) 41.6%; OSWorld-Verified 39%; Toolathlon 35.5%; AA Agentic Index 17.7%; APEX-Agents-AA 24.9%

Reasoning / knowledge:

- GPQA **82.8%**; AA-GPQA Diamond **81.7%**; AA-LCR **76.7%**; HLE 37.7% (24.3% no-tools); AA Intelligence Index 20.7; ARC-AGI-1 51.5%; ARC-AGI-2 5.7%

Coding:

- LiveCodeBench (Vals) **84.0%**; SWE-bench (Vals) **69.8%**; AA Coding Index **56.1%**; AA-SciCode 47.2%; Vibe Code 26.1%

Multimodal:

- MMMU-Pro **66.1%** (69.5% w/ Python); AA-MMMU-Pro 65.4%; image in

### Normalized scores (1–100)

- **Tool use: 60/100.** Vendor τ²-bench 92.5% is high, but independent AA Agentic Index 17.7%, APEX 24.9%, OSWorld 39% show nano-tier sustained agentics.
- **Reasoning: 68/100.** GPQA-D 81.7%, AA-LCR 76.7%, HLE 37.7% are strong for a nano; AA Index 20.7 and ARC-AGI-2 5.7% cap it.
- **Context window: 80/100.** 400K total.
- **Multimodal: 70/100.** MMMU-Pro 66.1%, image in; no audio.
- **Coding: 70/100.** LiveCodeBench 84%, SWE-bench 69.8%, Coding Index 56.1% — excellent for the tier.
- **Cost efficiency: 95/100.** Nano-tier pricing — among OpenAI's cheapest.
- **Overall Score: 69.6/100.** Half-up mean of the five quality dims (60/68/80/70/70). A remarkably capable cheap reasoning+coding model with vision; real-world agentics are the weak spot. `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch, Artificial Analysis, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
