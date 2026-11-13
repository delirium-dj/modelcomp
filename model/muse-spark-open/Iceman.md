# Muse Spark Open — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `muse-spark-open` (Muse Spark Open 816B-A42B, Meta Superintelligence Labs) — folder: `model/muse-spark-open`

## Overall
- **Overall Score: 90.8/100.** Large open-weight multimodal MoE foundation model (816B total / 42B active) with 1M context, strong agentic/coding/tool-use and multimodal benchmark results, and permissive open-weights deployment options, though open-weight serving can trail closed frontier flagships on some top leaderboards.

## Scores
- **Tool use: 90/100.** Meta model card reports strong agentic/tool-use performance (e.g. MCP-Atlas 89.2, JobBench 61.8, GDPVal-AA v2 1401, OSWorld Verified 80.4, Toolathlon Verified 72.8) and positions the model for end-to-end agentic task completion and tool invocation across long workflows.
- **Reasoning: 88/100.** Supports configurable reasoning effort (low/medium/high/xhigh) and shows strong knowledge/reasoning results (e.g. HLE with tools 61.0, GPQA Diamond 89.0, SciCode 58.5, AA Omniscience 25), suitable for complex multi-step tasks.
- **Context window: 95/100.** 1,048,576-token context window with up to 131,072 max output (per repo metadata/model positioning), enabling long-horizon repository and multimodal workflows.
- **Multimodal: 92/100.** Natively multimodal with text/image/video/audio inputs and text output; benchmark table includes strong multimodal/tool-augmented results (e.g. ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6, WorldVQA 49.4, IntPhys2 68.3, VideoMMEv2 61.5).
- **Coding: 89/100.** Built for coding and agentic work with reported coding/agentic engineering results (e.g. DeepSWE 1.1 60 preferred harness, SWE-Atlas-QnA 58, Terminal-Bench 2.1 76.4), competitive among open-weight models though not always top overall.
- **Cost efficiency: 90/100.** Available as free open-weight checkpoint (BF16/NVFP4) for self-hosting at license/infrastructure cost; hosted access may be available via providers/Zen, making it attractive for autonomy-focused deployments despite high hardware requirements.
- **Overall Score: 88/100.** Excellent open-weight choice for long-context multimodal agentic coding and tool use, with tradeoffs in serving complexity and some gaps versus the very best closed frontier models.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B
  - https://dev.meta.ai/resources/blog/build-with-muse-spark-open
  - https://research.meta.ai/static/muse-spark-open-evaluation-methodology

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/muse-spark-open/meta.json
field: modalities
proposed: Text, image, video, audio in; text out (per HF model card)
source: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B
```