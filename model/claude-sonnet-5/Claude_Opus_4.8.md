# Claude Sonnet 5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's agentic-era Sonnet-class model with adaptive thinking and 1M context at lower cost than Opus. Top use case: everyday agentic coding and knowledge work.
- **Provider / access:** Anthropic Claude Platform `claude-sonnet-5` (Messages API); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** Claude 5 generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, file in; text out; reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $3 in / $15 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **80.4%** (Vals 74.5%); BrowseComp **84.7%**; OSWorld-Verified **81.2%**
- GDPval-AA **1603 Elo**; HLE w/ tools **57.4%**; AA Agentic Index **44.3%**; TB3.0 14.6%

Reasoning / knowledge:

- HLE **57.4%** (tools) / **43.2%** (no tools); GPQA-D **91.1%**; MMLU-Pro **87.5%** (Vals)
- AA-LCR **82.0%**; AA Intelligence Index **38.2**; CritPt **16.9%**

Coding:

- SWE-bench Verified **85.2%**; SWE-bench Pro **63.2%**; SWE Multilingual **78.3%**; LiveCodeBench **82.4%** (Vals)
- AA Coding Index **71.5%**; VulcanBench CII v1 **89.2%**; CursorBench 3.2 **61.5%** (4.0 34.1%)

Multimodal:

- CharXiv **88.3%**; AA-MMMU-Pro **77.3%**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 80.4%, BrowseComp 84.7%, OSWorld-Verified 81.2%, GDPval 1603; TB3.0 14.6% and ApprenticeBench 16% cap the top.
- **Reasoning: 85/100.** HLE 57.4% (tools), GPQA-D 91.1%, AA-LCR 82%; AA Index 38.2 and CritPt 16.9% cap it.
- **Context window: 95/100.** 1M total / 128K out with AA-LCR 82%.
- **Multimodal: 67/100.** Image+file in (CharXiv 88.3%), text-only out — image-input tier.
- **Coding: 86/100.** SWE-bench Verified 85.2%, SWE-bench Pro 63.2%, VulcanBench CII 89.2%, Coding Index 71.5%.
- **Cost efficiency: 62/100.** $3 in / $15 out per 1M, no free tier.
- **Overall Score: 83.6/100.** Half-up mean of the five quality dims (85/85/95/67/86). A capable lower-cost-than-Opus agentic workhorse; image-only multimodal caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude Sonnet 5 system card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
