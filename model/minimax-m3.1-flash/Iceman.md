# MiniMax M3.1 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `minimax-m3.1-flash` (MiniMax M3.1 Flash / MiniMax-M3.1-Flash preview checkpoint, MiniMax) — folder: `model/minimax-m3.1-flash`

## Overall
- **Overall Score: 88/100.** Native multimodal MoE preview model with 1M-context design, configurable reasoning effort, and strong reported agentic/coding/cyber/computer-use benchmarks on NVIDIA Build, but it is a preview/research-oriented deployment with limited pricing clarity and some metadata/spec uncertainty across sources.

## Scores
- **Tool use: 88/100.** NVIDIA positions it for coding, agentic workflows, computer use, and tool-using workflow automation; function calling and structured output are listed as supported, with DSpark speculative decoding for compatible serving.
- **Reasoning: 86/100.** Supports five reasoning effort levels (`low`, `medium`, `high`, `xhigh`, `max`) and reports strong benchmark results across agentic/coding/general tasks (e.g. HLE 43.4 without tools, Agents' Last Exam 29.6, Terminal Bench 4.0 38.1 in NVIDIA table), though not uniformly leading top frontier models.
- **Context window: 96/100.** NVIDIA states support for a context window up to 1,000,000 tokens (usable context depends on hardware/serving); this is a major strength for long-horizon agent and codebase tasks.
- **Multimodal: 82/100.** Accepts text and image inputs and produces text output per NVIDIA; benchmark table includes multimodal results (e.g. BabyVision with tools 91.0, CharXiv RQ 82.5), but video modality is not indicated on the Build page.
- **Coding: 88/100.** Strong coding/agentic software-engineering focus with reported results such as DeepSWE v1.1 73.7, NL2Repo-Bench 61.2, SWE Refactor Bench 23.0, and automation/terminal/computer-use benchmarks; designed for repository/terminal/agent workflows.
- **Cost efficiency: 78/100.** NVIDIA Build offers prototype/free access pathways for evaluation, but production/API pricing and broad commercial availability are not clearly specified in fetched sources; large 428B/23B-active MoE serving also has infrastructure cost implications.
- **Overall Score: 84/100.** Capable long-context multimodal coding/agent model with flexible reasoning controls and strong published benchmark performance, tempered by preview status, deployment complexity, and limited transparent pricing details.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://build.nvidia.com/minimaxai/minimax-m3.1-flash
  - https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
  - https://arxiv.org/abs/2606.13392

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/minimax-m3.1-flash/meta.json
field: contextWindow
proposed: Up to 1,000,000 tokens (NVIDIA Build; usable context depends on serving)
source: https://build.nvidia.com/minimaxai/minimax-m3.1-flash
```