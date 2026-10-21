# Qwen 3.8 Flash Next — findings by Muse Glimmer 30B

- Source: Muse Glimmer 30B (meta/muse-glimmer-30b)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's Qwen3.8-Flash-Next open-weights checkpoint (125B params, 6B active, 262K) previewing Qwen4 for efficient coding; Terminal-Bench 2.1 86.1%, LiveCodeBench 91.9%. Experimental preview architecture with Gated DeltaNet + Qwen Sparse Attention, Gated Residual and N-gram Embedding.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash-next`; Vercel AI Gateway `qwen3.8-flash-next`; Hugging Face weights `Qwen/Qwen3.8-Flash-Next`. Chat Completions. No Free Zen ID.
- **Release / knowledge:** August 2026 (tech report / Hugging Face model card); no verified public knowledge cutoff found.
- **IDs:** `opencode/qwen-3.8-flash-next`; `Qwen/Qwen3.8-Flash-Next` (Hugging Face). No Free ID on Zen.
- **Context window:** 262,144 native, extensible to 1,000,000 tokens with YaRN per model card. Verified on Hugging Face model card.
- **Modalities:** Text, image, video in; text out; tool use. Reasoning on/off via thinking mode.
- **Pricing (as of 2026-10-20):** Vercel AI Gateway $0.12/$0.40 per 1M input/output; self-host via Qwen Community license. Paid only — `noFreeId: true`.
- **Architecture:** 125B total params, 6B activated MoE + 51B n-gram embedding + 4B MTP; 48 layers; open weights under Qwen Community license.

### Raw benchmarks found

> All numbers from Hugging Face model card `Qwen/Qwen3.8-Flash-Next` Benchmark Results section unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (meta.json short description; model card highlights efficient coding)
- Toolathon Verified Pass@1: **73.5** (Hugging Face)
- Agents' Last Exam Pass@1: **24.3**, Score **51.2** (Hugging Face)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Hugging Face evaluation results; model card 91.7)
- HLE: **35.9%** (Hugging Face model card Language table)
- IFBench: **81.3** (Hugging Face)
- Agents' Last Exam Score: **51.2** (Hugging Face)

Coding:

- LiveCodeBench v6: **91.9%** (Hugging Face)
- DeepSWE 1.1: **58.7%** (Hugging Face)
- SWE-bench Pro: **62.5%** (Hugging Face)
- SWE-bench Multilingual: **81.0%** (Hugging Face)
- NL2Repo-Bench: **48.1** (Hugging Face)
- CoWorkBench: **73.9** (Hugging Face)

Vision / multimodal:

- ClawEval-MM Pass@3: **64.4**, Average **60.4** (Hugging Face Vision Language table)
- AndroidWorld: **84.5** (Hugging Face)
- RecreationBench: **49.9** (Hugging Face)

Long context:

- No long-context retrieval report found beyond native 262K / YaRN extensibility claim.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 86.1% is near frontier 88%+ reference; Toolathlon 73.5 supports strong agentic tool use. Capped by lack of independent Tau3/BenchLM tool-call efficiency numbers.
- **Reasoning: 86/100.** GPQA Diamond 91.7% is frontier, HLE 35.9% is moderate, IFBench 81.3 supports instruction following. HLE below 40% caps below 90.
- **Context window: 75/100.** 262K native places it in 200K–500K tier 65–84; extensibility to 1M with YaRN lifts within tier. No measured retrieval % at 512K+.
- **Multimodal: 80/100.** Image and video in, text out with vision-language benchmarks competitive vs Claude-Opus-4.6. No audio in/out.
- **Coding: 85/100.** LiveCodeBench 91.9% is frontier; SWE-bench Pro 62.5% and DeepSWE 58.7% are strong-mid. Caps by SWE-Pro below 70%.
- **Cost efficiency: 95/100.** $0.12/$0.40 per 1M on Vercel; open-weights self-host option. Near $0.10/$0.20 97–99 band.
- **Overall Score: 83/100.** Mean of Tool 87 + Reasoning 86 + Context 75 + Multimodal 80 + Coding 85 = 82.6 → 83. Best-fit: efficient open coding preview for agentic and multimodal workloads at paid low pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research (Hugging Face model card, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
