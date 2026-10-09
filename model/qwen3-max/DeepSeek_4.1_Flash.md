# Qwen3-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3-Max (`qwen3-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's flagship proprietary text model (released 2025-09-23) — a >1T-parameter MoE with a production "thinking mode" and agentic/coding positioning. Legacy by 2026, superseded by Qwen3.8-Max and the Qwen3-Max-Thinking variant.
- **Provider / access:** Alibaba first-party API, DeepInfra, Novita, OpenRouter; OpenAI-compatible. OpenCode Zen tracks `opencode/qwen3-max`. Proprietary (no weights).
- **Release / knowledge:** 2025-09-23; knowledge cutoff not published.
- **IDs:** `qwen3-max`; `opencode/qwen3-max`.
- **Context window:** 262,144 tokens; max output 65,536 (66K).
- **Modalities:** text in; text out. Non-reasoning instruct by default (a separate Qwen3-Max-Thinking variant adds reasoning/tool mode). No image/audio/video/file input.
- **Pricing (as of 2026-10-09):** **$1.20 in / $6.00 out** with $0.24 cached (Alibaba/DeepInfra); Novita $0.50/$5.00; blended ~$0.78/$3.90.
- **Architecture:** proprietary sparse MoE, >1T parameters (MarkTechPost; aggregators ~1.0T); pretrained ~36T tokens; four-stage post-training.

### Raw benchmarks found

> The official Qwen3-Max blog is not retrievable; independent coverage (Vals AI, BenchmarkList, Artificial Analysis) is stronger here than vendor self-reports.

Coding / agent:

- SWE-bench Verified: **69.6** (self-reported Qwen3-Max-Instruct, via MarkTechPost)
- LiveCodeBench: **78.22** (Vals)
- Tau2-Bench: 74.8 self / **74.3** Tau2 Telecom (independent); Vending-Bench 2 71.57 (independent)
- Terminal-Bench 2.0: **24.72** (Vals); Terminal-Bench Hard 20.5 (AA)

Reasoning / knowledge:

- GPQA Diamond: **79.55** (Vals) / 84.8 (BenchmarkList Vals subset) / 76.4 (Epoch)
- MMLU-Pro: **84.36** (Vals) / 84.1–85.0 (BenchmarkList); MMLU-style MGSM 92.1
- AIME 2025: 80.7 (BenchmarkList) / 81.0 (Vals); HLE 11.9 (BenchmarkList)
- SciCode 38.3 (AA verified); AA Intelligence Index 16 (AA) — conflict: 24.01 (BenchmarkList)
- LegalBench 81.86; MedQA 87.4; TaxEval v2 73.51; WritingBench 80.3 (Vals/BenchmarkList)

Long context:

- 262K window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2 74.3, Vending-Bench 2 71.57 and LegalBench 81.86 are decent; Terminal-Bench 24.7% and no OSWorld cap it.
- **Reasoning: 76/100.** GPQA 76–85%, MMLU-Pro 84.4% and AIME ~81% are solid; HLE 11.9% and a low AA Index 16 hold it back.
- **Context window: 72/100.** 262K-token window (200K–500K band); no long-context retrieval benchmark.
- **Multimodal: 15/100.** Text-only (no image/audio/video input).
- **Coding: 72/100.** SWE-bench 69.6%, LiveCodeBench 78.2% are mid; SciCode 38.3% and Terminal-Bench 24.7% cap it.
- **Cost efficiency: 83/100.** $1.20/$6.00 per 1M with $0.24 cached is premium and proprietary; no open weights.
- **Overall Score: 62/100.** (74 + 76 + 72 + 15 + 72) / 5 = 61.8 → 62. Best fit: legacy text flagship for MMLU-style knowledge and lightweight agents; prefer Qwen3.8-Max for coding/agents.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across Vals AI, BenchmarkList, Artificial Analysis, LLM Stats and MarkTechPost. Independent coverage is preferred over the thin vendor table; the BenchmarkList "open weights" mislabel and the AA-Index conflict are noted rather than copied. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
