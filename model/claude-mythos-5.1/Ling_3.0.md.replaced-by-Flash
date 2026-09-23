# Claude Mythos 5.1 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Anthropic/claude-mythos-5.1)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's frontier model sharing the underlying architecture with Fable 5.1; optimized for cybersecurity and agentic reasoning, restricted to Project Glasswing partners.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Vertex AI, Microsoft Foundry (Project Glasswing partners only)
- **Release / knowledge:** 2026-09-01 (GA as Fable 5.1/Mythos 5.1; Preview April 2026)
- **IDs:** anthropic/claude-mythos-5.1
- **Context window:** 1,000,000 tokens (128K max output)
- **Modalities:** Text input; text, image, video input; text output
- **Pricing (as of 2026-09-23):** $10/$50 per million input/output tokens (post-intro); $25/$125 (Preview/Glasswing)
- **Architecture:** ~1T params, transformer decoder, 1M context, 128K output cap

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **60.9%** (Anthropic official)
- SWE-bench Pro: **80.3%** (BenchLM.ai, August 2026)
- ToolAthlon: **77.8%** (AnotherWrapper, sourced from model card)
- DeepSWE 1.1: **67.4%** (AnotherWrapper)

Reasoning / knowledge:
- GPQA Diamond: **94.6%** (Anthropic official / BenchLM)
- HLE (with tools): **65%** (AnotherWrapper)
- HLE (no tools): **60.9%** (AnotherWrapper)
- USAMO 2026: **97.6%** (NxCode / LLM Stats)
- ARC-AGI 2: **90%** (AnotherWrapper)
- ARC-AGI-1 Verified: **97.5%** (AnotherWrapper)
- BrowseComp: **86.9%** (LLM Stats)
- CyberGym: **83.1%** (LLM Stats)
- MMMLU: **92.7%** (LLM Stats)

Coding:
- SWE-bench Verified: **93.9%** (Anthropic System Card)
- SWE-bench Multilingual: **87.3%** (NxCode)
- SWE-bench Multimodal: **59.0%** (NxCode)
- SWE-bench Pro: **80.3%** (BenchLM.ai)

Long context:
- GraphWalks BFS 256K–1M: **80.0%** (LLM Stats)
- Terminal-Bench 4.0: **60.9%** (Anthropic official)

### Normalized scores (1-100)
- **Tool use: 91/100.** Terminal-Bench 4.0 (60.9%), SWE-bench Pro (80.3%), DeepSWE (67.4%), ToolAthlon (77.8%) — strong agentic performance across multiple harnesses, though TB4 lower than TB2 due to harder tasks.
- **Reasoning: 94/100.** GPQA Diamond (94.6%), HLE with tools (65%), USAMO (97.6%), ARC-AGI 2 (90%) — near-top-tier reasoning across math, science, and knowledge.
- **Context window: 98/100.** 1M token context window with 128K output cap; supports long-horizon agentic work.
- **Multimodal: 70/100.** Supports image and video input but text-only output; no audio output. Vision capabilities confirmed (Figure extraction, web app rebuild from screenshots).
- **Coding: 90/100.** SWE-bench Verified (93.9%), SWE-bench Pro (80.3%), SWE-bench Multilingual (87.3%) — highest coding benchmark scores on record.
- **Cost efficiency: 15/100.** $10/$50 per million tokens; not free; Project Glasswing restricted access with $25/$125 Preview pricing.
- **Overall Score: 89/100.** Mean of five quality dimensions: (91+94+98+70+90)/5 = 88.6 → rounded to 89. Adjusted to 88 for conservative scoring given restricted availability and TB4 gap.

---

## Signature
- Provided by: **Ling 3.0 (Anthropic/claude-mythos-5.1)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/claude-mythos-5.1/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
