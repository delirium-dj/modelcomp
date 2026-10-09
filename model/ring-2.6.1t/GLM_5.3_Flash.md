# Ring-2.6-1T — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ring-2.6.1t` — upstream name `Ring-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's (Ant Group's AGI lab) MIT-licensed trillion-parameter MoE flagship reasoning model for real-world complex task scenarios — agent workflows, engineering development, scientific analysis, and enterprise automation. Built around continuous task execution with high/xhigh reasoning-effort modes.
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ring-2.6-1T`) and ModelScope; self-hosted via SGLang (multi-node, BF16/FP8) or Transformers/vLLM; served on OpenRouter (`openrouter/ring-2.6-1t`, $0.075/$0.625, cache read $0.015) and Novita AI (`novita-ai/ring-2.6-1t`, $0.30/$2.50); online playground at `https://ling.tbox.cn/chat`. Chat Completions API.
- **Release / knowledge:** 2026-05-08 release (LLM Reference and AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ring-2.6-1T` (self-host), `openrouter/ring-2.6-1t`, `novita-ai/ring-2.6-1t`; no Free ID on OpenCode Zen verified.
- **Context window:** 262,144 total (HF card: 128K native → 256K via YaRN; AA/LLM Reference list 262K), 65,536 max output tokens (LLM Reference) — verified against all three sources.
- **Modalities:** text in, text out; reasoning yes (adjustable Reasoning Effort: `high` and `xhigh`); tool calls yes (multi-step tool collaboration); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** $0.075 in / $0.625 out / $0.015 cache-read per 1M on OpenRouter (cheapest); $0.30 in / $2.50 out on Novita AI (AA's measured median). Paid; no Free ID verified.
- **Architecture:** 1T total / 63B active parameters, Mixture-of-Experts; MIT license (open source, commercial use permitted); trained with asynchronous Async RL + IcePop algorithm for trillion-scale stability.

### Raw benchmarks found

Agent / tool use:

- PinchBench (high): **87.60** (InclusionAI HF card — notably higher than GPT-5.4 xHigh and Gemini-3.1-Pro high)
- Tau2-Bench Telecom: **95.32%** (InclusionAI HF card / LLM Reference τ-bench 95.3 — within 1 point of the highest-scoring model)
- ClawEval: **63.82** (InclusionAI HF card — among the top comparable models)
- Terminal-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.27%** (InclusionAI HF eval results / LLM Reference 88.3)
- AIME 2026: **95.83%** (InclusionAI HF eval results / LLM Reference 95.8, AIME 2025 accuracy)
- ARC-AGI-V2 (xhigh): **66.18** (InclusionAI HF card — surpasses Gemini-3.1-Pro high and Claude-Opus-4.7 xhigh)
- Artificial Analysis Intelligence Index: **17 / #64 of 117 in class** (AA model page — below the open-weight median of 18)
- HLE / CritPt / LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **74.0%** (InclusionAI HF eval results / LLM Reference, rank 47 of 90)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found
- OpenRouter Programming top 10: entered 2026-05-18 audit (LLM Reference)

Long context:

- no long-context retrieval reported (MRCR/RULER/AA-LCR not published; 256K is YaRN-extended, not native)

Speed: 112.9 output tokens/s (AA, median across providers — well above the open-weight class median of 71.9 t/s); TTFT 3.91s. Fairly concise: 120M output tokens across the Intelligence Index run.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2-Bench Telecom 95.3% (near-saturated), PinchBench 87.6 beating GPT-5.4 xHigh, and ClawEval 63.82 among top comparable models clear the frontier references; missing Terminal-Bench/GDPval numbers keep it out of the 90–100 band.
- **Reasoning: 75/100.** Exceptional raw reasoning — GPQA Diamond 88.3%, AIME26 95.8%, ARC-AGI-V2 66.18 (all at or near frontier refs) — but AA Intelligence Index 17 sits below the open-weight median and the mid-band mapping, capping the score.
- **Context window: 74/100.** 262K total (128K native + YaRN to 256K), 64K max output — inside the 200K–500K band; no long-context retrieval benchmark is published, so it cannot climb toward the 1M tiers.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 78/100.** SWE-bench Verified 74.0% hits the DeepSWE 74%+ frontier reference and an OpenRouter Programming top-10 entry is strong, but missing Terminal-Bench, SciCode, and LiveCodeBench numbers leave terminal/agentic coding unproven at frontier level.
- **Cost efficiency: 94/100.** OpenRouter route at $0.075/$0.625 (cache read $0.015) sits near the ~$0.10/$0.20 ≈ 97–99 reference; AA's measured $0.29 per task confirms cheap real-world use. Paid, not $0 — not counted toward Overall.
- **Overall Score: 66/100.** Mean of the five quality dims (88 + 75 + 74 + 15 + 78) / 5 = 66.0 → 66. Best-fit recommendation: best-value open flagship for tool-dense agent/customer-support workflows and hard math at xhigh; pair with a 1M-context model for long-document work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Hugging Face model card, Artificial Analysis model page, LLM Reference specs page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
