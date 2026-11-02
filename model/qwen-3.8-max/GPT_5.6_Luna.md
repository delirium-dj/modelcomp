# Qwen3.8-Max — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8-Max
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's hosted flagship reasoning model for long autonomous task chains, coding, research, and multimodal agent work. The hosted Max service must be distinguished from the separately downloadable Qwen3.8-2.4T-A95B checkpoint.
- **Provider / access:** Alibaba QwenCloud/Model Studio; hosted API ID `qwen3.8-max`. The related open release is available through Hugging Face/OpenRouter as `qwen/qwen3.8-2.4t-a95b`, but it is not identical to the hosted Max service.
- **Release / knowledge:** Hosted model released in 2026; Ridge's October 31 snapshot lists July 1, 2026. Knowledge cutoff was not published.
- **IDs:** `qwen3.8-max` for the hosted API; `Qwen/Qwen3.8-2.4T-A95B` for the related downloadable weights.
- **Context window:** 1,000,000 tokens for the hosted model; OpenRouter lists a 262,144-token default and 1,048,576-token maximum for the related open checkpoint.
- **Modalities:** Hosted Max supports text, image, and video input, text output, reasoning/non-thinking modes, built-in tools, and agent workflows. The downloadable 2.4T-A95B checkpoint is text-only in the cited OpenRouter comparison.
- **Pricing (as of 2026-11-02):** Approximately $2 input / $6 output per 1M tokens for the hosted API and related OpenRouter listing.
- **Architecture:** Hosted Max is a proprietary/restricted service corresponding to a 2.4T-parameter MoE with approximately 95B active parameters; the open checkpoint is released under the Qwen3.8-Max License.

## Raw benchmarks found

Alibaba's comparison table is vendor-reported; Ridge and Vals/Artificial Analysis provide current independent snapshots. The hosted/open-checkpoint distinction is retained.

Official Qwen comparison table:

- Terminal-Bench 2.1: **86.6%**
- SWE-bench Pro: **67.7%**
- DeepSWE 1.1: **56.6%**
- FrontierSWE: **73.5%**
- PaperBench: **93.0%**
- AndroidBench: **75.1%**
- QwenSWEBench: **80.7%**
- Automation-Bench: **27.3%** pass@1
- Toolathlon Verified: **72.5%** pass@1
- WideSearch: **81.9%**

Current independent snapshots:

- Artificial Analysis Intelligence Index: **34** on Ridge's October 31 AA v5.0 snapshot; the archived v4.3.2 value was **45**.
- SWE-bench Verified: **85.6%** (Vals AI, October 31 snapshot).
- Arena Elo: **1506** (Arena+, October 31 snapshot).
- Terminal-Bench 4.0: **34.34%** and archived Terminal-Bench 2.1: **67.42%** (Vals AI/Ridge).
- Context window: **1M tokens** (Alibaba/OpenRouter model documentation).

## Normalized scores (1–100)

- **Tool use: 89/100.** Built-in tools, WideSearch 81.9%, Toolathlon 72.5%, and Terminal-Bench 86.6% support strong agentic use, while the independent terminal snapshot is lower.
- **Reasoning: 89/100.** The official long-horizon table is strong, but the current independent AA v5.0 index of 34 is materially below the earlier archived value and lowers confidence.
- **Context window: 96/100.** The hosted 1M context is documented; independent full-window retrieval evidence was not found.
- **Multimodal: 90/100.** The hosted service adds image/video input and built-in tools, but the related open checkpoint is text-only and independent modality coverage is limited.
- **Coding: 90/100.** SWE-bench Verified 85.6%, the official SWE/Terminal results, and PaperBench 93% show strong coding, with a wide Terminal-Bench 4.0 variance.
- **Cost efficiency: 88/100.** $2/$6 is competitive for a hosted 1M multimodal flagship, though it is not a low-cost model.
- **Overall Score: 90.8/100.** Mean of the five quality dimensions `(89 + 89 + 96 + 90 + 90) / 5 = 90.8`; best fit is multimodal long-context agents needing lower cost than Western flagship tiers.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Alibaba/Qwen benchmark table, OpenRouter's hosted-versus-open release comparison, and Ridge's October 31 independent snapshot; vendor and independent results, plus hosted/open-checkpoint identities, were kept separate, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Qwen3.8 official announcement and benchmark table](https://qwen.ai/blog?id=qwen3.8)
  - [OpenRouter Qwen3.8 overview](https://openrouter.ai/blog/insights/qwen-3-8)
  - [Ridge Qwen 3.8 Max snapshot](https://ridgebench.com/models/qwen-3.8-max)
