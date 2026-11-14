# Doubao Seed 2.1 Pro 260915 — findings by MiniMax M3.1 Flash

- Source: ByteDance/Volcengine Ark (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro 260915
- **Short description:** ByteDance's closed-weights Seed2.1 Pro checkpoint for agentic productivity, enterprise code delivery, and multimodal work. The dated Ark ID is fixed, while ByteDance's public benchmark tables evaluate the Seed2.1 Pro family rather than independently identifying the `260915` checkpoint.
- **Provider / access:** ByteDance Volcengine Ark; the OpenAI-compatible Chat API and Ark Responses API accept model ID `doubao-seed-2-1-pro-260915`.
- **Release / knowledge:** The Seed2.1 family was released 2026-06-23; Ark now lists the `260915` checkpoint. Knowledge cutoff not publicly specified.
- **IDs:** `doubao-seed-2-1-pro-260915` on Volcengine Ark. No verified public free-tier ID was found.
- **Context window:** 1,024K context and maximum input; 256K maximum output and maximum reasoning-chain length, verified in Ark's current model documentation.
- **Modalities:** Text, image, video, and document input; text output; reasoning enabled by default; function/tool calls, knowledge-base search, web search, GUI-task processing, MCP, image processing, structured output, and context caching supported. Audio input is not supported for this model.
- **Pricing (as of 2026-11-14):** Paid regular online inference: RMB 6.00/M input tokens, RMB 30.00/M output tokens, RMB 1.20/M cache-hit input tokens, and RMB 0.017/M-token/hour cache storage. Low-priority online and batch inference are RMB 3/M input and RMB 15/M output.
- **Architecture:** Proprietary closed weights; parameter count and training details are not public.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **19.5% full pass rate / 41.4 average overall score** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- GDPVal: **87.9** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- Workspace Bench: **53.0** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- Agent Startup Bench: **68.8** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- MCP-Atlas: **83.8** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- Toolathlon: **50.6** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- SeedClawBench: **66.6** (ByteDance Seed2.1 model card; internal Seed benchmark for OpenClaw-style assistance; family evaluation)
- Terminal-Bench 2.1: **71.0%** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)

Reasoning / knowledge:

- HLE-Verified: **42.9%** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- SuperGPQA: **70.8** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- SciCode: **59.8** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- FrontierScience-Olympiad: **76.0** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- GPQA Diamond: **89%** (Epoch AI's independent June 2026 Seed2.1 Pro family evaluation, not an exact `260915` rerun)
- OTIS Mock AIME 2024–2025: **96%** (Epoch AI's independent June 2026 Seed2.1 Pro family evaluation, not an exact `260915` rerun)
- SimpleQA Verified: **45%** (Epoch AI's independent June 2026 Seed2.1 Pro family evaluation, not an exact `260915` rerun)
- Chess Puzzles: **21%** (Epoch AI's independent June 2026 Seed2.1 Pro family evaluation, not an exact `260915` rerun)

Coding:

- SWE-bench Pro: **57.5%** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- ProgramBench: **50.3** final score (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- NL2Repo-Bench: **47.0** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- SWE-Atlas: **35.2** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- DeepSWE: **32.7** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)

Long context and multimodal:

- MMLongBench-128K: **78.3** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- MathVision: **92.6%** (**94.5%** with tools) (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- MMMU-Pro: **81.6%** (**82.7%** with tools) (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- CharXiv-RQ: **85.4** (**86.4** with tools) (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- ERQA: **72.0** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- TVBench: **80.5** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- TOMATO: **79.5** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)
- VideoMME: **89.2** (ByteDance Seed2.1 model card; Seed2.1 Pro family evaluation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong family-level agent results, including 87.9 on GDPVal, 83.8 on MCP-Atlas, 66.6 on SeedClawBench, and 71.0% on Terminal-Bench 2.1, are capped by the lack of a published exact-`260915` rerun.
- **Reasoning: 90/100.** SuperGPQA 70.8, HLE-Verified 42.9, and FrontierScience-Olympiad 76.0 support a high score; Epoch AI's 89% GPQA, 96% OTIS Mock AIME, and 45% SimpleQA Verified indicate strong reasoning with a material factual-knowledge limitation.
- **Context window: 96/100.** Ark verifies a 1,024K maximum input and 256K output/reasoning limit, while MMLongBench-128K reports 78.3 for the family; the small gap between spec and measured long-context performance prevents a perfect score.
- **Multimodal: 92/100.** Image, video, and document inputs are supported, with family results of 89.2 on VideoMME, 80.5 on TVBench, 81.6% on MMMU-Pro, and 85.4 on CharXiv-RQ; lack of audio support is the main cap.
- **Coding: 74/100.** SWE-bench Pro 57.5%, Terminal-Bench 2.1 71.0%, ProgramBench 50.3, and NL2Repo-Bench 47.0 show solid but not frontier-leading end-to-end coding for the family.
- **Cost efficiency: 70/100.** Regular Ark pricing is RMB 6/M input and RMB 30/M output, with RMB 1.20/M cache hits; low-priority and batch inference halve input/output rates.
- **Overall Score: 88.0/100.** An excellent agentic, long-context, and multimodal model for productivity workflows, with solid rather than top-tier coding evidence and an explicit family-versus-checkpoint caveat.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimaxai/minimax-m3.1-flash)** — 2026-11-14
- Method: Fresh public-web research using direct `webfetch` of ByteDance Seed's official Seed2.1 model page, release blog, model card, and current Volcengine Ark model and pricing documentation, plus Epoch AI's independent benchmark page after web search was unavailable (HTTP 402). Vendor benchmark figures are labelled as Seed2.1 Pro family evaluations rather than exact `260915` checkpoint reruns; Epoch AI's June family snapshot is labelled separately. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ByteDance Seed — Seed2.1 model page and evaluation tables](https://seed.bytedance.com/en/seed2_1)
  - [ByteDance Seed — Seed2.1 Officially Released: Advancing AI Productivity](https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)
  - [ByteDance Seed — Seed2.1 Model Card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2.1/Seed2_1_Model_Card.pdf)
  - [Volcengine Ark — text-generation model list and capabilities](https://docs.volcengine.com/docs/zh/ark/model-list.md)
  - [Volcengine Ark — model pricing](https://docs.volcengine.com/docs/zh/ark/model-pricing.md)
  - [Epoch AI — Doubao Seed 2.1 Pro](https://epoch.ai/models/doubao-seed-2-1-pro)
