# Qwen 3.5 397B — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-397b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's Qwen3.5-series flagship open-weights MoE (397B total / 17B active) — a natively multimodal early-fusion model for reasoning, coding, agents and vision.
- **Provider / access:** opencode/qwen-3.5-397b
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/qwen-3.5-397b (no Free ID on Zen)
- **Context window:** 262,144 native (extensible to ~1,010,000; 1M hosted)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** AA $0.60/$3.60 per 1M; Apache 2.0 open weights (free self-host)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **86.7%** (official setup; beats Gemini-3 Pro 85.4, below Claude Opus 4.5 91.6)
- BFCL-V4: **72.9%**; Tool Decathlon: **38.3%**; DeepPlanning: **34.3%** (official Qwen blog)
- BrowseComp: **78.6%** (DataCamp write-up of official table; 2nd behind Claude Opus 4.6 84.0)
- Terminal Bench 2: **52.5%** (official; vs GPT-5.3 Codex 77.3, Gemini-3 Pro 54.2)
- WildClawBench: **34.5% overall** (HF evaluation card)
- VITA-Bench: **49.7%**; ERQA (embodied): **67.5%** (DataCamp)
- GDPval-AA / Claw-Eval / MCPMark: no verified public score found (MCPMark referenced in passing
  on HF without a score for this model)

Reasoning / knowledge:

- GPQA (Diamond): **88.4%**; HLE: **28.7%**; HLE-Verified: **37.6%** (official table)
- MMLU-Pro: **87.8%**; MMLU-Redux: **94.9%**; SuperGPQA: **70.4%**; C-Eval: **93.0%**
- AIME26: **91.3%**; HMMT Feb-25: **94.8%**, HMMT Nov-25: **92.7%**; IMOAnswerBench: **80.9%**
- AA-LCR: **68.7%**; LongBench v2: **63.2%**
- Artificial Analysis Intelligence Index: **26\*** — explicitly marked by AA as an *estimate,
  independent evaluation forthcoming* (for scale: GPT-5 high = 27 on the same page); recorded
  with that caveat, not treated as verified.
- IF: IFEval 92.6, IFBench 76.5, MultiChallenge 67.6; WMT24++ 78.9, MAXIFE 88.2 (official)

Coding:

- SWE-bench Verified: **76.4%** (official + HF leaderboard; one table copy shows 76.2)
- SWE-bench Multilingual: **69.3%**; SecCodeBench: **68.3%**
- LiveCodeBench v6: **83.6%**; Terminal Bench 2: **52.5%**
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Multimodal / document:

- MMMU-Pro: **79.0%**; Video-MME: **87.5%**; OmniDocBench v1.5: **90.8%**
  (all DataCamp coverage of the official Qwen table)

Long context:

- AA-LCR 68.7% and LongBench v2 63.2% at 262K native — real measurements, far from
  near-perfect recall; 1M (YaRN / Plus-hosted) has no published retrieval score.

### Normalized scores (1–100)

- **Tool use: 74/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 78/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (262,144 native (extensible to ~1,010,000; 1M hosted)).
- **Multimodal: 80/100.** Input/output modality comprehension (Text, image, video in; text out).
- **Coding: 76/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 77.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
