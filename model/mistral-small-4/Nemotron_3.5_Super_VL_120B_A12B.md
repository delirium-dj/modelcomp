# Mistral Small 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Mistral AI (`mistral-small-4`), Mistral-Small-4-119B-2603
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's March 2026 (v26.03) open-weight generalist model — a hybrid that unifies Instruct, Reasoning (previously called Magistral), and Devstral (coding) into a single efficient model with configurable reasoning effort, native function calling/JSON output, and text+image (vision) input. Use case: general chat assistants, coding, agentic/SWE automation, and document/image understanding.
- **Provider / access:** Mistral AI API; open weights on Hugging Face (`mistralai/Mistral-Small-4-119B-2603`, Apache 2.0). Vendor docs list it under generalist models; no separate Free ID confirmed on Zen.
- **Release / knowledge:** Released March 2026 (version v26.03 / 2603); knowledge cutoff not stated.
- **IDs:** `mistralai/Mistral-Small-4-119B-2603` (Hugging Face, Apache 2.0); Mistral API route per docs listing.
- **Context window:** 256k total tokens (Artificial Analysis and the HF model card both state 256k). NOTE: this repo's meta.json still lists 128K total — that figure conflicts with both live sources and is treated as stale.
- **Modalities:** Text + image input; text output; reasoning yes (configurable reasoning_effort); tool calls yes (native function calling + JSON mode); multilingual (dozens of languages).
- **Pricing (as of 2026-11-06):** $0.15 per 1M input / $0.60 per 1M output (Artificial Analysis), 90% cache discount, ~$0.04 per Intelligence Index task — cheapest in its comparison set (#1/3 cost); open weights = free self-host. No confirmed Zen Free ID.
- **Architecture:** MoE, 128 experts, 4 active; 119B total parameters, 6.5B active per token; Apache 2.0 license.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **4** (lower end among comparables; median 5; ranked #3/3 in its group, 29 of 726 models tracked) <(Artificial Analysis, independent)>
- AA LCR (Long Context Reasoning): **0.72** with 1.6K characters output (efficient vs Qwen models needing 3.5-4x more output for comparable performance) <(Mistral HF model card, official)>
- LiveCodeBench: **outperforms GPT-OSS 120B** (qualitative; produces ~20% less output) <(Mistral HF model card, official)>
- Terminal-Bench / SWE-bench / GPQA / HLE: no verified public score found (closest proxy is the AA Intelligence Index above)
- Speed: 1.7 min per Intelligence Index task (median 4.6 min — notably quick), time-to-first-answer-token 13.04s, output speed 142 tok/s <(Artificial Analysis)>
- Concision: 23.9M output tokens on the Intelligence Index vs median 55.2M (highly concise) <(Artificial Analysis)>

### Normalized scores (1–100)

- **Tool use: 72/100.** Native function calling + JSON output, agentic capabilities; vendor card claims "best-in-class agentic". Capped by: no public tool-use benchmark number found (vendor claim only).
- **Reasoning: 55/100.** Reasoning mode (configurable reasoning_effort), hybrid model; AA Intelligence Index 4 (lower end, below median 5); AA LCR 0.72; beats GPT-OSS 120B qualitatively on LiveCodeBench. Capped by: AA places overall intelligence at the lower end of comparables.
- **Context window: 82/100.** 256k confirmed by Artificial Analysis and the HF model card. Capped by: not the largest (1M-class windows exist); conflicts with this repo's stale meta.json 128K figure.
- **Multimodal: 68/100.** Text + image input, text output; vision for document/image understanding. Capped by: image-only input (no audio/video); text-only output.
- **Coding: 68/100.** Devstral coding heritage unified into the model; designed for coding/SWE automation; LiveCodeBench outperforms GPT-OSS 120B (qualitative). Capped by: no public coding benchmark number (SWE-bench/LiveCodeBench score) found.
- **Cost efficiency: 90/100.** $0.15 in / $0.60 out per 1M, 90% cache discount, $0.04 per task (#1/3 cost in AA comparison); Apache 2.0 free self-host. Capped by: paid API is not $0; $0.60 output is moderately priced.
- **Overall Score: 69/100.** Mean of the five non-cost quality dims ((72+55+82+68+68)/5 = 69). Best-fit: cheap, fast, open-weight hybrid for coding/agentic/document tasks, but modest raw intelligence.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-06
- Method: Public internet research across official vendor docs/cards and independent benchmark/review sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Models Overview (official)](https://docs.mistral.ai/models/)
  - [Hugging Face — mistralai/Mistral-Small-4-119B-2603 model card (official)](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [Artificial Analysis — Mistral Small 4 (independent benchmark/review)](https://artificialanalysis.ai/models/mistral-small-4)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
