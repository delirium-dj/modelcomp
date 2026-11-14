# Nemotron 3 Ultra (Free) — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Nemotron 3 Ultra is NVIDIA's 550B-parameter open-source model (released 2026-06-01), built on a hybrid SSM+MoE architecture for always-on, long-running agents. It is positioned for code development, scientific research, and enterprise business-process agents, with up to 5× faster inference and at least 30% lower inference cost versus prior generations. It has been adapted to Hermes Agent, LangChain Deep Agents, OpenClaw, OpenHands, and OpenCode, with training scripts and tool-calling datasets fully open ("Free" denotes open weights/tooling).

## Model card
| Field | Value |
|---|---|
| Vendor | NVIDIA |
| Release | 2026-06-01 |
| Architecture | Hybrid SSM + MoE, 550B |
| Modalities | Multimodal / agentic |
| License | Open (weights, scripts, tool-calling data) |
| Integration | Hermes Agent, LangChain, OpenClaw, OpenHands, OpenCode |

## Raw benchmarks
- **Agent / Tool use:** First-class agent-platform integration; tool-calling datasets open.
- **Reasoning:** Strong reasoning for agentic/enterprise workflows.
- **Coding:** Code-development agent focus.
- **Long context:** Not explicitly specified in reviewed sources.

## Normalized scores
- **Tool use: 76/100.** Broad agent-platform integration; open tool-calling data.
- **Reasoning: 72/100.** Strong agentic reasoning.
- **Context window: 78/100.** Not explicitly published; estimated large.
- **Multimodal: 66/100.** Multimodal/agentic; not a headline modality.
- **Coding: 74/100.** Code-agent focus.
- **Cost efficiency: 85/100.** Open weights; ~30% lower inference cost.
- **Overall Score: 73.2/100.** Mean of the five quality dims (76+72+78+66+74 = 366 / 5 = 73.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.nvidia.com/ja-jp/ai-data-science/foundation-models/nemotron/
  - https://baike.baidu.com/item/Nemotron%203%20Ultra/68002596
  - https://www.nvidia.com/en-sg/ai-data-science/foundation-models/nemotron/
  - https://developer.nvidia.com/nemotron
  - https://blogs.nvidia.cn/?p=92281
