# GLM-5.2 — findings by Mercury 3

- Source: Z.ai / Zhipu AI (GLM-5.2)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's flagship open-weight model (released 2026-06-16), built on the GLM-5 MoE backbone — ~744B total / 40B active — with a verified 1M-token context designed to stably sustain long, messy coding-agent trajectories. At launch it was the strongest open-source model on standard coding benchmarks.
- **Provider / access:** Z.ai API (`glm-5.2`), GLM Coding Plan, OpenRouter (24+ providers), Together AI, etc.; open weights on Hugging Face (`zai-org/GLM-5.2`).
- **Release / knowledge:** Released 2026-06-16 (70 days after GLM-5.1); knowledge cutoff not published.
- **IDs:** `zai/glm-5.2`.
- **Context window:** 1M tokens (verified).
- **Modalities:** text in / text out (text-only; no vision path).
- **Pricing (as of 2026-07+):** $1.40 in / $4.40 out per 1M (Z.ai; some providers from $0.75/$2.40 per llm-stats); open weights free.
- **Architecture:** MoE, 744B total / 40B active; reasoning efforts high/xhigh (xhigh→max).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.ai) — strongest open-source at launch; within a few points of Claude Opus 4.8 (85.0); ahead of Gemini 3.1 Pro
- Suited for long-horizon agent workflows and complex multi-step automation

Reasoning / knowledge:

- BenchLM: strongest eligible category Mathematics (#3); composite 60.2/100 (#53/216)
- AA release page tracked (no index figure captured in fetched sources)

Coding:

- SWE-bench Pro: **62.1%** (Z.ai; vs GLM-5.1 58.4%)
- Terminal-Bench 2.1 81.0% (see above)

Long context:

- 1M verified; long-context coding-agent trajectories (vendor)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 81.0% — best-in-class open source at launch; strong agentic-terminal coverage.
- **Reasoning: 82/100.** Top-open-source math category; no measured index captured.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 15/100.** Text-only in/out — no vision/audio/video path.
- **Coding: 88/100.** SWE-bench Pro 62.1% and TB 2.1 81.0% — elite for open weights at launch.
- **Cost efficiency: 70/100.** $1.40/$4.40 with open weights — solid value; some providers cheaper.
- **Overall Score: 73/100.** Mean of the five non-cost dims (86+82+92+15+88)/5 = 72.6 → 73. Best-fit: the strongest text-only open-source coder of mid-2026; multimodal workloads rule it out (see GLM-5.3-Flash or Qwen lines for vision).

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai blog: GLM-5.2 — Built for Long-Horizon Tasks](https://z.ai/blog/glm-5.2)
  - [Z.ai docs: GLM-5.2 overview](https://docs.z.ai/guides/llm/glm-5.2)
  - [Hugging Face: zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
  - [Artificial Analysis: GLM-5.2 release page](https://artificialanalysis.ai/models/releases/glm-5-2)
  - [Together AI: GLM-5.2 page](https://www.together.ai/models/glm-52)
  - [OpenRouter: z-ai/glm-5.2](https://openrouter.ai/z-ai/glm-5.2)
  - [BenchLM: GLM-5.2](https://benchlm.ai/models/glm-5-2)
- Future sources: add a new file next to this one using the same headings.
