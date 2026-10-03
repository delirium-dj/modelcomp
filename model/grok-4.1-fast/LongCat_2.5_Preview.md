# Grok 4.1 Fast — findings by LongCat 2.5 Preview

- Source: xAI/Grok 4.1 Fast (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's agentic tool-calling model optimized for high-volume real-world tasks like customer support and deep research. Offers both reasoning and non-reasoning modes with a 2M-token context window.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`), OpenRouter (`x-ai/grok-4.1-fast`), Oracle Cloud (`xai.grok-4-1-fast-reasoning`). Chat Completions and Responses API compatible.
- **Release / knowledge:** 2025-11-19. Knowledge cutoff not officially stated.
- **IDs:** `x-ai/grok-4-1-fast-reasoning`, `x-ai/grok-4-1-fast-non-reasoning`
- **Context window:** 2,000,000 tokens (2M). Verified via xAI official and Artificial Analysis.
- **Modalities:** Text + image input; text output. Reasoning: yes (toggleable). Tool calls: yes. Structured outputs: yes.
- **Pricing (as of 2026-10-03):** $0.20 / 1M input tokens; $0.50 / 1M output tokens; $0.05 / 1M cached input tokens. Agent Tools API billed separately at ≤$5 per 1,000 successful tool calls.
- **Architecture:** Proprietary transformer trained with large-scale RL on tool use across simulated environments, tuned from Grok 4.1 base. API-only.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **100%** (xAI official launch post)
- Berkeley Function Calling v4: **72%** (xAI official)
- Reka Research-Eval: **63.9%** (xAI official, with Agent Tools API)
- FRAMES: **87.6%** (xAI official)
- X Browse: **56.3%** (xAI official, internal benchmark)
- Terminal-Bench: **14.39** (Vector Wire)
- GDPval (win rate): **14.07%** (Vector Wire)

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (Epoch AI)
- Humanity's Last Exam: **19.3%** (Epoch AI)
- MMLU-Pro: **85.4%** (Epoch AI)
- SimpleBench: **56.0%** (Epoch AI)
- AIME 2024/2025: **89.3%** (Epoch AI)
- Artificial Analysis Intelligence Index: **20** (reasoning mode) / **11** (non-reasoning mode)
- AA-Omniscience: **−30** (Artificial Analysis)
- IFBench: **52.72** (Vector Wire)

Coding:

- LiveCodeBench: **82.2%** (Epoch AI)
- SciCode: **44.2%** (Epoch AI)

Long context:

- AA-LCR v1.1: **74%** (Artificial Analysis long-context retrieval)

### Normalized scores (1–100)

- **Tool use: 90/100.** τ²-bench Telecom 100% and BFCL-v4 72% are top-tier agentic results; strong on Reka/FRAMES search benchmarks. Capped by Terminal-Bench 14.39 and GDPval 14.07% showing weaker general agentic task performance.
- **Reasoning: 78/100.** GPQA Diamond 85.3% and AIME 89.3% are strong; MMLU-Pro 85.4% solid. HLE 19.3% and SimpleBench 56.0% pull down the score. AA Intelligence Index 20 (reasoning) is above average.
- **Context window: 92/100.** 2M tokens is among the largest available; AA-LCR v1.1 74% confirms solid long-context retrieval.
- **Multimodal: 60/100.** Text + image input verified; no specific multimodal quality benchmark found in public sources.
- **Coding: 72/100.** LiveCodeBench 82.2% is strong; SciCode 44.2% is moderate. No SWE-bench Verified score found.
- **Cost efficiency: 85/100.** $0.20/$0.50 per 1M tokens is very competitive for the capability level; cached input at $0.05 is excellent for high-volume agents.
- **Overall Score: 78/100.** Mean of (90 + 78 + 92 + 60 + 72) / 5 = 78.4 → 78. Best fit: high-volume agentic workflows needing fast, cheap tool calling with large context.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
