# Qwen 3.5 Flash Lite — findings by Muse Glimmer 30B

- Source: Alibaba/qwen-3.5-flash-lite
- Date: 2026-11-01
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's MoE Qwen 3.5 Flash-Lite API tier (~35B total/3B active, 1M ctx) for high-volume multimodal work at ultra-low pricing.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-flash`; available via OpenRouter, Vercel AI Gateway, Puter. Chat Completions API.
- **Release / knowledge:** 2026-02-23; knowledge cutoff Apr 2025 per provider docs.
- **IDs:** alibaba/qwen3.5-flash, opencode/qwen-3.5-flash-lite
- **Context window:** 1,000,000 total; 65,536 max output — verified on Alibaba Model Studio.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-29):** International $0.10 / 1M input, $0.40 / 1M output; China tiered $0.029–0.172 / $0.287–1.72. Commercial tier.
- **Architecture:** Hybrid linear attention + sparse MoE, ~35B total / ~3B active; open-weights base Qwen3.5-35B-A3B, proprietary hosted tier.

### Raw benchmarks found

- Source: Vals AI Qwen 3.5 Flash model page, evaluated Mar 2026
- Source: Alibaba Cloud Model Studio qwen3.5-flash specs, 2026-10-11
- Source: Puter Developer Qwen 3.5 Flash model card

Agent / tool use:

- Terminal-Bench 2.0: 24.72% ±4.60 (Vals AI)
- SWE-bench Verified: 54.9% noted in Vals update; Vals SWE-bench 64.40% ±2.14
- LiveCodeBench: 83.28% ±1.04 (Vals AI)

Reasoning / knowledge:

- GPQA Diamond: 82.83% ±1.90 (Vals AI)
- MMLU Pro: 84.06% ±0.36 (Vals AI)
- MMMU Pro: 81.91% ±0.93 (Vals AI)
- SAGE: 84.91% ±1.82 (Vals AI)
- LegalBench: 84.28% ±0.41, rank 36/151 (Vals AI)

Coding:

- LiveCodeBench: 83.28% ±1.04 (Vals AI)
- SWE-bench: 64.40% ±2.14 (Vals AI)

Long context / multimodal:

- Context window 1M verified; MMMU Pro 81.91% visual reasoning.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 24.72% limits agentic tool proficiency; SWE-bench 64% shows moderate coding agent ability. Cost-efficient tier caps agentic rigor.
- **Reasoning: 78/100.** GPQA Diamond 82.83%, MMLU Pro 84.06%, SAGE 84.91%; strong general reasoning for a Flash tier, capped by lower agentic reasoning scores.
- **Context window: 93/100.** 1M total / 65K output verified; top-tier context for a low-cost tier.
- **Multimodal: 68/100.** Image/video in supported; MMMU Pro 81.91% demonstrates solid visual reasoning; audio output absent.
- **Coding: 78/100.** LiveCodeBench 83.28% strong; SWE-bench 64.40% moderate; Flash tier optimized for throughput over deep coding.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M input/output among cheapest 1M-context multimodal models.
- **Overall Score: 75/100.** Mean of Tool 60 + Reasoning 78 + Context 93 + Multimodal 68 + Coding 78 = 75.4; high-volume multimodal workhorse with strong context and price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://www.vals.ai/models/alibaba_qwen3.5-flash
  - https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash
  - https://developer.puter.com/ai/qwen/qwen3.5-flash/
- Future sources: add a new file next to this one using the same headings.
