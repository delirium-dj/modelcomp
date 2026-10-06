# GPT-5.6 Luna — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier; 1M context, image input. Top use case: cheap high-throughput agentic/reasoning and coding.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); OpenCode Zen `openai/gpt-5.6-luna`. No Zen Free ID.
- **Release / knowledge:** GPT-5.6 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-luna` (no Free ID).
- **Context window:** 1,050,000 / 128K out (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.20 in / $1.20 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **84.7%** (Vals 79%); BrowseComp **83.3%**; OSWorld 2.0 **45.6%**; CyberGym **77.9%**; Toolathlon **53.4%**
- GDPval-AA **1582 Elo**; AA Agentic Index **42.7%**; ApprenticeBench 7%

Reasoning / knowledge:

- GPQA Diamond **92.3%**; AA Intelligence Index **51.2**; FrontierMath legacy **78.6%** (v2 T4 58.5%); ARC-AGI-2 **59.5%**; AA-LCR **83.7%**; CritPt **20.6%**; AA-Omniscience Hallucination Rate 92.6%

Coding:

- SWE-bench **93.0%** (Vals); Terminal-Bench 2.1 **84.7%**; SWE-bench Pro **62.7%**; DeepSWE **67.2%**; VulcanBench v3 **85.5%**; AA Coding Index **71.5%**

Multimodal:

- MMMU-Pro **78.4%**; AA-MMMU-Pro **78.6%**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 84.7%, BrowseComp 83.3%, GDPval 1582, CyberGym 77.9%; OSWorld 45.6% and ApprenticeBench 7% cap it.
- **Reasoning: 86/100.** GPQA-D 92.3%, AA Index 51.2, FrontierMath 78.6%, AA-LCR 83.7%; high hallucination rate (92.6%) is a drag.
- **Context window: 95/100.** 1M total / 128K out with AA-LCR 83.7%.
- **Multimodal: 66/100.** Image-in (MMMU-Pro 78.4%), text-only out — image-input tier.
- **Coding: 86/100.** SWE-bench 93%, TB2.1 84.7%, SWE-bench Pro 62.7%, VulcanBench 85.5%.
- **Cost efficiency: 85/100.** $0.20 in / $1.20 out per 1M — very cheap for a GPT-5.6 tier.
- **Overall Score: 83.6/100.** Half-up mean of the five quality dims (85/86/95/66/86). An excellent-value high-volume GPT-5.6 tier; image-only multimodal and high hallucination are the limits.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.6 launch + system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
