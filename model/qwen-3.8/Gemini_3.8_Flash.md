# Qwen 3.8 — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen-3.8`, `qwen3.8-27b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (27B)
- **Short description:** Alibaba Cloud's flagship open-weights vision-language foundation model, engineered with hybrid attention and dynamic reasoning controls for state-of-the-art agentic tool use and code synthesis.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.8`, `qwen3.8-27b-instruct`); Qubrid AI (`Qwen/Qwen3.8-27B`); Hugging Face open weights.
- **Release / knowledge:** 2026-08-14 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen-3.8`, `qwen/qwen3.8-27b` (no Free ID on Zen)
- **Context window:** 262,144 tokens native (extensible via YaRN up to 1,000,000 tokens).
- **Modalities:** text, image, document, video in; text and code out; structured JSON outputs; native tool calling; thinking tokens / reasoning control.
- **Pricing (as of 2026-09-24):** $0.58 / 1M input, $3.45 / 1M output (Qubrid AI); standard flagship API $2.00 / 1M in, $6.00 / 1M out ($0.25 cached in); weights free under Apache 2.0.
- **Architecture:** 27B parameter dense multimodal architecture with hybrid attention (48 linear layers, 16 full-attention layers) and native vision tower.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (Computer use): **84.3%** (Qwen official model card)
- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen official model card)
- WebArena-Verified (Browser use): **64.8%** (Qwen official model card)
- AndroidWorld (Mobile use): **81.9%** (Qwen official model card)
- CoWorkBench: **70.7%** (Qwen official model card)
- NL2Repo-Bench: **42.3%** (Qwen official model card)
- Agents' Last Exam: **20.4%** pass@1 (Qwen official model card)
- JobBench: **33.4%** (Qwen official model card)
- Artificial Analysis Agentic Index: placed within 1 point of Claude Opus 4.8
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52 Index** at xhigh reasoning effort, **44** at medium (AA / Qubrid AI)
- GPQA Diamond: **89.2%** (Qwen official model card)
- Humanity's Last Exam (HLE): **30.8%** (Qwen official model card)
- IFBench: **79.5%** (Qwen official model card)
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **90.3%** (Qwen official model card)
- SWE-bench Pro: **61.7%** (Qwen official model card, Claude Code harness)
- QwenSWEBench: **79.0%** (Qwen official model card)
- DeepSWE 1.1: **42.2%** (Qwen official model card)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- 262,144 token native context window verified with robust retrieval, extensible up to 1M tokens.

### Normalized scores (1–100)

- **Tool use: 89/100.** Industry-leading 84.3% OSWorld-Verified computer use, 73.0% Terminal-Bench 2.1, and 64.8% WebArena represent unprecedented agentic execution in open models.
- **Reasoning: 88/100.** Strong 52 AA Intelligence Index, 89.2% GPQA Diamond, and 79.5% IFBench, slightly trailing top closed proprietary flagships on 30.8% HLE.
- **Context window: 84/100.** Generous 262K native context (84/100 tier) with documented extension to 1M tokens.
- **Multimodal: 89/100.** Integrated vision-language tower with 91.1% OmniDocBench 1.5, 90.2% CharXiv RQ, and native hour-scale video understanding.
- **Coding: 90/100.** Superb 90.3% LiveCodeBench v6, 61.7% SWE-bench Pro, and 79.0% QwenSWEBench place it among the top coding models globally.
- **Cost efficiency: 91/100.** Highly affordable hosted API pricing ($0.58/1M in, $3.45/1M out) combined with Apache 2.0 open-weights licensing for free self-hosting.
- **Overall Score: 88/100.** Mean of quality dimensions: Math.round((89 + 88 + 84 + 89 + 90) / 5) = 88.0. Top-tier open foundation model delivering near-frontier agentic autonomy and software engineering capability.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across Qubrid AI and Yotta Labs verified analysis of Alibaba's model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
