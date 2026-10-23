# Qwen 3.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-Flash (`qwen/qwen3.5-flash-02-23`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Qwen3.5-Flash serving tier — a 1M-context multimodal profile derived from the Qwen 3.5 35B-A3B open weights, tuned and priced for high-volume production rather than peak agentic depth.
- **Provider / access:** Alibaba Model Studio / Qwen Cloud and OpenRouter (`qwen/qwen3.5-flash-02-23`), OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** 2026-02-23 snapshot (per the OpenRouter id suffix); knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.5-flash-02-23`; proprietary hosted tier (the underlying open weights are Apache 2.0 as `Qwen/Qwen3.5-35B-A3B`).
- **Context window:** 1,000,000 by default (hosted tier); 65,536 max output — vendor/OpenRouter catalogue.
- **Modalities:** text, image and video in; text out; reasoning and tool calling supported.
- **Pricing (as of 2026-10-23):** $0.065/$0.26 per 1M in/out (OpenRouter snapshot); $0.10/$0.40 Model Studio international.
- **Architecture:** hosted MoE serving profile of the 3B-active Qwen 3.5 line; proprietary endpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.7%** (vals.ai/models/alibaba_qwen3.5-flash)
- SAGE: **42.49%** (Vals AI); TaxEval v2: **72.16%**; LegalBench: **84.28%** (Vals AI)
- Claw-Eval / MCP-Atlas / SWE Atlas / GDPval-AA / OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.83%** (±1.90, Vals AI)
- MMLU-Pro: **no verified public score found** on the Vals page snapshot
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- LiveCodeBench: **83.28%** (±1.04, Vals AI; #49/143)
- SWE-bench Verified: **54.9%** (Vals AI)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR / MRCR / RULER: **no verified public score found**; the 1M window is catalogue-stated, not retrieval-benchmarked in the sources found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 24.7%, SAGE 42.49 and no OSWorld/Tau2 data cap the agentic score (vals.ai/models/alibaba_qwen3.5-flash).
- **Reasoning: 76/100.** GPQA 82.83% is strong and LegalBench 84.28% shows domain reasoning, but the missing MMLU-Pro/AA index keeps it below the dense 27B siblings (Vals AI).
- **Context window: 85/100.** The 1M-token tier earns the band credit; the absence of any long-context retrieval measurement caps it below 90 (Alibaba/OpenRouter catalogues).
- **Multimodal: 76/100.** Text+image+video input is supported on the hosted tier, but no MMMU-class figure was published for this ID.
- **Coding: 62/100.** LiveCodeBench 83.28% is excellent, sharply undercut by SWE-bench Verified 54.9% and Terminal-Bench 2.0 24.7% (Vals AI).
- **Cost efficiency: 97/100.** $0.065/$0.26 per 1M is near the floor for a 1M-context multimodal tier (openrouter.ai/qwen/qwen3.5-flash-02-23).
- **Overall Score: 71/100.** Mean of the five quality dims (55+76+85+76+62)/5 = 70.8 → 71. Best-fit: high-volume document/video Q&A and cheap coding autocomplete, not long-horizon agent work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Vals AI model page `alibaba_qwen3.5-flash`, OpenRouter snapshot `qwen/qwen3.5-flash-02-23`, Alibaba Model Studio model listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
