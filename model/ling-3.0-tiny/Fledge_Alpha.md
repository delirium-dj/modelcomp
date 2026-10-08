# Ling 3.0 Tiny — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-tiny`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** The small member of Ant's Ling 3.0 family — a 7.9B total / 1.3B active hybrid-linear MoE built for local and edge deployment (validated on DGX Spark, M4 Pro MacBook, Mac mini) with switchable thinking/instant modes.
- **Provider / access:** Hugging Face weights (MIT; BF16 15.8GB / FP8 8.42GB / INT4 5.82GB), OpenRouter `inclusionai/ling-3.0-tiny:free`, Novita (free), AI/ML API. Chat Completions with `enable_thinking`. llama.cpp support still an open PR at this writing.
- **Release / knowledge:** 2026-08-06 (Artificial Analysis; HF card Aug 10–11).
- **IDs:** `inclusionai/ling-3.0-tiny` (also `opencode/ling-3.0-tiny`)
- **Context window:** 131,072 tokens (ondevicellm/HF); hosted routes list 256K–262K; max output 32K.
- **Modalities:** text in; text out; hybrid reasoning (thinking default, switchable); function calling; prompt caching.
- **Pricing (as of 2026-10-08):** $0.00 / $0.00 on OpenRouter, Novita, Puter; MIT open weights free.
- **Architecture:** 7.9B total / 1.3B active; 24 layers (18 KDA + 6 Gated MLA, 3:1), 128 routed experts (top-8 + 1 shared), vocab 157,184.

### Raw benchmarks found

Agent / tool use:

- AA Agentic Index: **16** (HF model card)
- Function calling supported (Novita); no Tau/Terminal-Bench rows

Reasoning / knowledge:

- AA Intelligence Index v4.1.1: **25** (HF model card; AA's rc2 page lists 23, #6/56 in class) — well above comparable-model median (8)
- MMLU-Pro (5-shot, base): **51.83** (HF base card; Qwen3.5-9B-base 57.76)
- OlympiadBench (3-shot, base): **25.90**; OmniMath: **29.70** (HF base card)
- Verbosity: 210M output tokens on the AA suite — very verbose (AA)

Coding (base checkpoint, HF base card):

- HumanEval-Plus (0-shot): **79.27** (vs Qwen3.5-9B-base 52.44)
- BigCodeBench (0-shot): **42.89**; MultiPL-E (1-shot): **64.38**; FullStackBench: **39.48**
- LiveCodeBench 2408–2505 (1-shot): **24.23**

Long context:

- 131K window (ondevicellm); LongBench/LEval rows exist only for the Ling-2.5-mini-base comparison, not tiny.

Speed:

- >160 tok/s output (AA); 86–90 tok/s FP8 on M4 Pro, 100–105 tok/s on DGX Spark; ~18s end-to-end for a 500-token response (vendor)

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling + agentic design with AA Agentic Index 16 — modest but real for 1.3B active.
- **Reasoning: 45/100.** AA Intelligence 25 leads its tiny class by a wide margin; absolute level is far below frontier.
- **Context window: 45/100.** 128K native window (hosted routes stretch to 256K); no retrieval scores.
- **Multimodal: 15/100.** Text-only.
- **Coding: 52/100.** HumanEval-Plus 79.3 and BigCodeBench 42.9 beat larger Qwen3.5 bases; LCB 24.2 caps it.
- **Cost efficiency: 95/100.** Free hosted routes plus MIT weights running on a MacBook at ~90 tok/s.
- **Overall Score: 40/100.** Mean of (45, 45, 45, 15, 52) = 40.4 → 40. Best fit: on-device/edge agents and local assistants where privacy and zero cost beat raw capability.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Hugging Face model cards incl. tiny-base eval table, Artificial Analysis, ondevicellm.app, Novita, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
