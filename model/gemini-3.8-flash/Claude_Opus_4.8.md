# Gemini 3.8 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's latest fast-tier Gemini, tuned for performance-per-cost with full multimodal input and 1M context. Top use case: high-volume agentic/coding and multimodal work on a free or low-cost tier.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.8-flash`), also OpenCode Zen. Chat Completions / Gemini API.
- **Release / knowledge:** 2026 (3.8 generation); knowledge cutoff not published.
- **IDs:** `google/gemini-3.8-flash` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on Google AI Studio and OpenCode Zen with standard rate limits; paid Flash-tier pricing (low per-token) beyond the free quota.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Google model card**): **89.4%** (Vals AI 81.3%; AA 87.6%)
- Terminal-Bench 4.0: **19.1%** (hard new harness — weak)
- GDPval-AA: **1545 Elo** (AA-normalized 45.6%); AA Briefcase **1202 Elo**
- OSWorld 2.0: **59.0%**; AA AutomationBench **59.9%**; AA ITBench **52.5%**
- Finance Agent v2 **61.4%**; AA Tau3-Banking **44.9%**; AA Agentic Index **41.1%**; ApprenticeBench **24%**

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA; Vals 94.4%); HLE: **47.8%** (AA; 54.9% Verified)
- AA Intelligence Index: **40.9**; MMLU-Pro **90.2%** (Vals)
- ARC-AGI-1 **98.5%** / ARC-AGI-2 **89.2%** / ARC-AGI-3 **10.4%** (ARC Prize verified)
- AA-LCR **81.3%**; CritPt **18.3%**; MLCR-AA **21.7%**; AA-Omniscience Hallucination Rate **55.2%**

Coding:

- LiveCodeBench **89.5%** (Vals); SWE-bench **80.0%** (Vals); DeepSWE **73.8%**
- Terminal-Bench 2.1 **89.4%**; AA Coding Index **76.3%**; AA-SciCode **56.6%**; CursorBench 3.2 **69.2%** (4.0 39.6%); FrontierSWE v2 **19.6%**

Multimodal / long context:

- CharXiv **86.2%**; LVBench **87.1%** (video); AA-MMMU-Pro **85.6%**; Design Arena Website **1308 Elo**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong TB2.1 89.4% and OSWorld 59%, Finance Agent 61.4%; but GDPval 1545 / Briefcase 1202 are mid-tier and TB4.0 collapses to 19.1% — Flash-class agentics, not frontier.
- **Reasoning: 87/100.** GPQA 95.3%, ARC-AGI-2 89.2%, MMLU-Pro 90.2%, HLE 47.8%; capped by AA Index 40.9, CritPt 18.3%, MLCR 21.7%.
- **Context window: 95/100.** 1M total with AA-LCR 81.3% long-context reasoning.
- **Multimodal: 90/100.** Text/image/audio/PDF in with video understanding (LVBench 87.1%), CharXiv 86.2%, MMMU-Pro 85.6%; text-only out.
- **Coding: 88/100.** LiveCodeBench 89.5%, SWE-bench 80%, DeepSWE 73.8%, Coding Index 76.3%; FrontierSWE v2 19.6% and CursorBench 4.0 39.6% are the ceilings.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen (rate-limited) plus low Flash paid pricing.
- **Overall Score: 88.4/100.** Half-up mean of the five quality dims (82/87/95/90/88). Best high-volume multimodal + coding daily driver on a free/cheap tier; escalate hard long-horizon terminal work to a frontier model.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google DeepMind model card, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
