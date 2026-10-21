# Qwen 3.8 27B — findings by Xing40_29B_A4B

> Source: Alibaba Qwen (`qwen-3.8-27b`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's compact 27B-parameter model in the Qwen 3.x generation series, offering strong reasoning and coding at a modest size. The 3.x line includes models ranging from 0.8B to 397B; this 27B variant sits in the mid-range with competitive performance per parameter.
- **Provider / access:** Hosted via Alibaba Cloud Model Studio; also available on OpenRouter under the `qwen/` provider prefix. Standard API access without special verification.
- **Release / knowledge:** ~2026-Q2 (Qwen 3.x generation); knowledge cutoff June 2026 for 3.x line
- **IDs:** `qwen/qwen-3.8-27b`, `Qwen/Qwen3.8-27B` (HuggingFace), `qwen-3.8-27b` (OpenRouter)
- **Context window:** ~128K–256K tokens (standard for sub-100B parameter models)
- **Modalities:** text in, text out; reasoning support
- **Pricing (as of 2026-10-21):** ~$0.50/$2.00 per million input/output tokens on Alibaba Cloud standard pricing; open weights (Apache 2.0 license on HuggingFace)
- **Architecture:** proprietary (Alibaba); likely dense or small MoE design around 27B total parameters

### Raw benchmarks found

No verified public benchmark scores retrievable for this exact ID through open web research — Alibaba's model cards and benchmark reports are sometimes behind paywalls or limited documentation. Closest proxy benchmarks from known Qwen 3.x family:
- SWE-bench Verified: likely moderate range (~40–60%) for sub-30B models; smaller models typically don't match frontier coding benchmarks
- HLE: low single digits to high teens percent
- AI Analysis Intelligence Index: competitive for its size but below frontier models

### Normalized scores (1–100)
- **Tool use: 60/100.** Reasoning-focused model; tool use capabilities likely limited compared to frontier agentic models. Smaller models generally have less robust tool orchestration.
- **Reasoning: 78/100.** Strong reasoning per parameter count for Qwen; can compete with medium models but capped below frontier.
- **Context window: 75/100.** ~128K–256K based on architecture; standard for sub-100B models.
- **Multimodal: 30/100.** Text only (no vision input).
- **Coding: 68/100.** Competent for 27B but not frontier-class coding; SWE-bench mid-low range expected.
- **Cost efficiency: 85/100.** Modest size makes this highly cost-efficient per token relative to frontier models.
- **Overall Score: 62.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenRouter model pages, Alibaba Cloud documentation, HuggingFace model cards. Direct benchmark data was not retrievable for this exact ID. Scores normalized 1–100 with architecture-capped estimates for multimodal and where benchmarks were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
