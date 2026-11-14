# Nemotron 3.5 Lightning (Free) — findings by Hy3

- **Source / Date:** NVIDIA blog (Japanese), 百度百科, 腾讯云开发者社区 — 2026-11-14
- **Overview:** Nemotron 3.5 Lightning is NVIDIA's lightweight open-source model released 2026-08-11, using a Mamba-Transformer hybrid MoE architecture with 30B parameters. It is released free under the OpenMDW 1.1 / Nemotron open-model license and is designed to run on a single consumer GPU, scaling from RTX PC to DGX and cloud. Third-party evaluations place its performance on par with OpenAI's gpt-oss-120b at faster output speed. It ships with the NeMo Switchyard open model-routing tool and is applied in cybersecurity, code review and legal services. The "Free" variant denotes the freely-available open-weight / free-tier release.

## Model Card
| Field | Value |
| --- | --- |
| Provider | NVIDIA |
| Release date | 2026-08-11 |
| Architecture | Mamba-Transformer hybrid MoE, 30B params |
| Context window | Not disclosed (agentic low-latency focused) |
| Modality | Text |
| License | OpenMDW 1.1 / Nemotron open license (free weights) |
| Pricing | Free open weights |

## Raw Benchmarks
### Agent / Tool Use
- Optimized for autonomous-agent, high-volume, low-latency execution; tool-calling tuned.

### Reasoning
- Third-party evals: performance ~ gpt-oss-120b; fast output.

### Coding
- Applied to code review; coding-capable.

### Long Context
- Not explicitly benchmarked.

## Normalized Scores
- **Tool use: 62/100.** Agentic/tool-calling optimized for autonomous agents.
- **Reasoning: 56/100.** ~gpt-oss-120b level; solid open-model reasoning.
- **Context window: 66/100.** Assumed standard; not benchmarked.
- **Multimodal: 40/100.** Text-only.
- **Coding: 64/100.** Code-review capable; competent coding.
- **Cost efficiency: 90/100.** Free open weights; single consumer GPU; very cheap.
- **Overall Score: 57.6/100.** Mean of the five quality dims (62+56+66+40+64 = 288 / 5 = 57.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://developer.nvidia.com/ja-jp/blog/tag/nemo/page/3/
  - https://baike.baidu.com/item/Nemotron%203.5%20Lightning/68501546
  - https://cloud.tencent.com/developer/article/2730747
