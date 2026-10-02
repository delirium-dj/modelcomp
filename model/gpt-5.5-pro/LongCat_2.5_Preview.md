# GPT-5.5 Pro — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's extended-reasoning variant of GPT-5.5, using parallel test-time compute for harder problems. Designed for complex agentic coding, knowledge work, and multi-step reasoning tasks.
- **Provider / access:** OpenAI API — Responses API only (`openai/gpt-5.5-pro`). Not available via Chat Completions. Batch API supported.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff 2025-12-01.
- **IDs:** `openai/gpt-5.5-pro` (default snapshot: `gpt-5.5-pro-2026-04-23`)
- **Context window:** 1,050,000 tokens total; 128,000 max output tokens.
- **Modalities:** text, image input; text output; reasoning yes; tool calls yes; structured outputs yes.
- **Pricing (as of 2026-10-02):** $30/1M input, $180/1M output. No cached input discount. Regional processing endpoints charged 10% uplift.
- **Architecture:** Proprietary. Same underlying model as GPT-5.5 with parallel test-time compute for extended reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI blog, SOTA at release)
- OSWorld-Verified: **78.7%** (OpenAI blog)
- Tau2-bench Telecom: **98.0%** (OpenAI blog, without prompt tuning)
- BrowseComp: **90.1%** (benchlm.ai)
- GDPval: **84.9%** (OpenAI blog)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Vals AI, GPT-5.5 base — Pro is same model with more compute)
- HLE: **57.2%** (benchlm.ai, GPT-5.5 Pro)
- HLE w/o tools: **43.1%** (benchlm.ai, GPT-5.5 Pro)
- ARC-AGI-1: **95.0%** (OpenAI blog)
- ARC-AGI-2: **84.2%** (benchlm.ai, GPT-5.5 Pro)
- MMLU-Pro: **88.1%** (Vals AI, GPT-5.5 base)

Coding:

- SWE-bench Pro: **58.6%** (OpenAI blog, GPT-5.5 base)
- LiveCodeBench: **85.3%** (Vals AI, GPT-5.5 base)
- SWE-bench (Vals): **82.6%** (Vals AI, GPT-5.5 base)
- Terminal-Bench 2.1 (Vals): **76.4%** (Vals AI, GPT-5.5 base)
- Vibe Code Bench: **69.85%** (Vals AI, GPT-5.5 base)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5.5 Pro specifically.

Multimodal:

- MMMU-Pro: **81.2%** (benchlm.ai, GPT-5.5 base)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic tool use across OSWorld (78.7%), Tau2-bench (98.0%), and Terminal-Bench 2.0 (82.7%). Pro variant uses parallel test-time compute for harder tool-use chains. Capped by lack of Pro-specific tool-use benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 93.2%, HLE 57.2%, ARC-AGI-2 84.2%. Extended-reasoning Pro variant should match or exceed base GPT-5.5 on hardest reasoning tasks.
- **Context window: 95/100.** 1.05M token context window with 128K max output. Among the largest available. No long-context retrieval benchmark publicly reported.
- **Multimodal: 75/100.** Text and image input, text output. MMMU-Pro 81.2% (base model). No video or audio input. No native image generation in API (tool available but not core capability).
- **Coding: 82/100.** SWE-bench Pro 58.6%, LiveCodeBench 85.3%, Terminal-Bench 2.0 82.7%. Strong agentic coding but SWE-bench Pro below frontier leaders (Mythos 5 80.3%, Fable 5 80.0%).
- **Cost efficiency: 15/100.** $30/1M input and $180/1M output — among the most expensive models. No cached input discount. 10% regional uplift additional.
- **Overall Score: 86/100.** Mean of five quality dims (88+88+95+75+82)/5 = 85.6 → 86. Best fit: demanding agentic coding and reasoning tasks where budget is not the primary constraint.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
