# Agnes 3.0 Flash — findings by Ernie 5.5 Flash

- Source: Agnes AI/Agnes 3.0 Flash (`agnes-3.0-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash (open-weights Preview checkpoint; the production/API Agnes 3.0 Flash is a different 1M-context checkpoint)
- **Short description:** Singapore's Agnes AI's September 2026 open-weights multimodal model — a 33B hybrid-attention decoder (54 gated-delta-rule recurrent layers + 18 global-attention layers, 3:1) built for flagship-class reasoning on a single H100/H200.
- **Provider / access:** Open weights `Agnes-AI/Agnes-3.0-Flash` on Hugging Face / ModelScope (Apache 2.0); served via vLLM/SGLang/transformers with `trust_remote_code=True`; free API routes (LLMTR, Agnes AI) exist for the production checkpoint.
- **Release / knowledge:** 2026-09-14 (preview); knowledge cutoff not published.
- **IDs:** `agnes-3.0-flash`, `Agnes-AI/Agnes-3.0-Flash` (HF).
- **Context window:** 262,144 tokens (Preview checkpoint; the production/API checkpoint is 1M).
- **Modalities:** text / image / video in, text out; reasoning with high/medium/low effort levels (thinking-off switch); tool calling (`<tool_call>` format, OpenAI-compatible); streaming.
- **Pricing (as of 2026-11-13):** $0 per token — open Apache 2.0 weights; free-tier API routes exist for the production checkpoint (no metered rate published).
- **Architecture:** hybrid-attention decoder, 33B params, 72 layers (54 gated delta-rule + 18 global GQA 24q/4kv), hidden 5120, SwiGLU + parallel 2048 branch, 3-axis mrope, 248K vocab, 27-layer vision tower (patch 16, 2×2 merge); ~66 GB bf16 weights; 1×H200/H100.

### Raw benchmarks found

> Agnes's own Preview-checkpoint table (Hugging Face model card). Cross-column figures are reference values from different harnesses/snapshots, per the vendor's own caveat.

Agent / tool use:

- Terminal-Bench / Tau2 / GDPval / Claw-Eval / Toolathon: no verified public score found
- Tool calling supported via `<tool_call>` template; no agentic benchmark row published for the Preview

Reasoning / knowledge:

- GPQA Diamond: **85.05** (vs 92.3 Qwen3.8-Flash-Next, 92.9 MiniMax M3, 90.8 DeepSeek-V4-Flash)
- IFBench: **74.20** (vs 81.3 Qwen3.8-Flash-Next, 82.9 MiniMax M3)
- AA-Omniscience Accuracy: **23.00** (vs 40.4 DeepSeek-V4-Flash, 51.4 Gemini 3.5 Flash)
- HLE / CritPt / MMLU-Pro: no verified public score found

Coding:

- SciCode: **38.08** (vs 50.3 DeepSeek-V4-Flash, 46.6 Qwen3.8-27B)
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR: **68.33** (vs 82.0 Qwen3.8-27B, 79.7 Qwen3.8-Flash-Next/DeepSeek-V4-Flash); 262,144-token window with the recurrent-layer design keeping KV cache bounded (only 18 of 72 layers cache).

### Normalized scores (1–100)

- **Tool use: 55/100.** No agentic benchmark row exists for the Preview; only tool-calling support is documented. The score reflects the absence of evidence, not a measured failure.
- **Reasoning: 72/100.** GPQA 85.05 is solidly mid-tier for 2026 (frontier is 90+), IFBench 74.2 trails the leaders, and AA-Omniscience 23.0 is weak. The hybrid-attention efficiency is the architectural story, not raw reasoning.
- **Context window: 88/100.** 262,144 with an efficient recurrent design and AA-LCR 68.33 at long context — tier 200K–500K high band; the production checkpoint's 1M window is not this checkpoint.
- **Multimodal: 80/100.** Text/image/video in with a 27-layer vision tower; no per-task vision rows published (MMMU/MathVista absent), so the score rests on the documented capability.
- **Coding: 50/100.** SciCode 38.08 is the only coding row and it trails every peer in the table; no SWE/LCB evidence. Capped by the single weak row.
- **Cost efficiency: 100/100.** $0 — Apache 2.0 weights runnable on one H100/H200.
- **Overall Score: 69/100.** Best fit for self-hosted long-context multimodal reasoning on a single GPU where open weights and a small footprint matter; the thin benchmark coverage and weak SciCode row keep it mid-band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Agnes-AI/Agnes-3.0-Flash Hugging Face model card and its vendor benchmark table, LLM Releases catalog record); scores are normalized 1–100 interpretations, not official vendor scores. All figures are Preview-checkpoint vendor claims, not independently verified.
- Reference URLs:
  - [Agnes-AI/Agnes-3.0-Flash — Hugging Face model card (benchmark table)](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
  - [Agnes 3.0 Flash — LLM Releases catalog record](https://www.llm-releases.com/models/agnes-3-0-flash)
  - [Agnes-AI/Agnes-3.0-Flash — GitHub landing page](https://github.com/AgnesAI-Labs/Agnes-3.0-Flash)
  - [Agnes-3.0-Flash — ModelScope](https://www.modelscope.cn/models/Agnes-AI/Agnes-3.0-Flash)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.