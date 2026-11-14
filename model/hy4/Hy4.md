- Source: Tencent Hunyuan/Tencent Hunyuan Hy4
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hunyuan Hy4 (混元 Hy4)
- **Short description:** Tencent Hunyuan's 2026-11-04 GA flagship, a 770B/49B-active MoE with a 1M-token window. The GA build expanded pre-/post-training scale and added **vision understanding** and **Computer Use** for the first time. A distinct model; `hy3`, `hy3-preview` and the 2026-08 preview checkpoint are separate.
- **Provider / access:** Tencent Cloud **TokenHub** (`https://tokenhub.tencentmaas.com/v1`, model ID `hy4`, OpenAI-compatible), OpenRouter, Tencent AI Studio, and Tencent's Token Plan / Hy Token Plan for IDE and CI/CD workflows. The legacy `api.hunyuan.cloud.tencent.com` endpoint is being migrated to TokenHub.
- **Release / knowledge:** GA 2026-11-04 (preview August 2026); knowledge cutoff: no verified public score found.
- **IDs:** `hy4` / `tencent/hy4` (OpenRouter `tencent/hy4-preview` for the preview). No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, **64,000 tokens** maximum output.
- **Modalities:** text and image in, text out; fine-grained image parsing, complex-chart analysis, image-based maths reasoning; **Computer Use** (screen recognition, mouse/keyboard control, mixed CLI workflows across applications) with specialised training for Blender and CAD; tool calling and long-horizon agents. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** domestic official TokenHub rate card effective 2026-08-29 — **¥6.00 / 1M input, ¥18.00 / 1M output, ¥0.30 / 1M cached hit** (unchanged from preview), with a limited-time 50% launch discount. A third-party USD conversion lists **$0.834 / $2.501 / $0.042** per 1M — third-party, reported separately.
- **Architecture:** MoE, **770B total / 49B active** parameters; **Tencent Hunyuan Community License**, with weights announced for near-term open release (the Hugging Face artifact was still the August preview at GA). Open-source/private deployment is a stated goal.

### Raw benchmarks found

Agent / tool use:

- Office-collaboration internal evaluation: average **83.18**, task pass rate **96.15%**, **#1 domestically in 9 of 12 scenarios** (vendor internal evaluation, labelled as such)
- Finance domain: **213 experts** blind-tested **579 real tasks**, composite **3.04** — **#1 among open models** (vendor-reported)
- Computer Use with Blender/CAD-specific training and mixed CLI/GUI long workflows (qualitative)
- TokenHub Agent-workflow optimisation: stronger multi-turn context retention for continuous follow-up questions (developer coverage, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- A third-party Model Field Guide composite: total **47.1**, rank **#26**, tier C, capability 35 / platform 54 / value 35 / context 48 / ecosystem 55 / recency 95.6, with **39% data confidence** — labelled third-party, low-confidence
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Agent-oriented IDE workflows (code completion, explanation, refactoring) and CI/CD integration via Token Plan (developer coverage, qualitative)
- Computer Use mode open-sourced with tool-calling examples (developer coverage)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with 64K output, tuned for long-horizon agents; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** A 96.15% internal task pass rate, 9-of-12 domestic #1 office scenarios, native Computer Use with Blender/CAD training, and a #1 open-model finance composite; capped by those being vendor internal evaluations with no independent replication.
- **Reasoning: 84/100.** 770B/49B MoE with chart/image maths reasoning and a 47.1 third-party composite; capped by the third-party page's 39% confidence and no standard GPQA/HLE/ARC figures.
- **Context window: 93/100.** A verified 1M-token window with 64K output and explicit multi-turn context retention for agent workflows; capped by no long-context retrieval benchmark.
- **Multimodal: 88/100.** First-generation native vision (fine-grained images, complex charts, image maths) plus screen-based Computer Use; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 84/100.** Optimised for agentic IDE/CI/CD workflows with an open-sourced Computer Use mode; capped by zero published named coding benchmark scores.
- **Cost efficiency: 92/100.** ¥6/¥18 per 1M (≈$0.83/$2.50), ¥0.30 cache hits, a 50% launch discount, unchanged-from-preview pricing, and a community licence with weights planned for open release; excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 89, 84, 93, 88, 84 = 87.6 → 88. Best fit: long-horizon office/finance agents and cross-application GUI automation at a low domestic price, especially for private deployment once weights are released.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: a third-party Model Field Guide spec page for Tencent Hunyuan Hy4 (770B/49B MoE, 1M/64K context, official TokenHub rate card, licence, evaluation figures, vision + Computer Use), plus Tencent Cloud developer-community articles and launch coverage retrieved via public web search excerpts (GA date, TokenHub migration, Token Plan, open-weight status, 50% launch discount). Vendor internal evaluations and the third-party low-confidence composite are explicitly labelled as such, never as official vendor benchmark scores. The `hy4` folder is my own model's subject folder here — researched like any other queue entry, with no self-identification from repository data (STEM comes from the delegation kickoff). Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Tencent Hunyuan Hy4 价格、参数与上下文 — Model Field Guide (specs, rate card, evaluations)](https://www.airedirector.com/model/tencent-hunyuan-hy4/)
  - [混元 Hy4 preview 发布 — 腾讯云开发者社区 (retrieved via search excerpt; 770B, 1M, ¥6, open source)](https://cloud.tencent.com/developer/article/2739304)
  - [腾讯混元 Hy4 正式版发布 — 哔哩哔哩 AI 日报 (retrieved via search excerpt; GA date, pricing, vision)](https://www.bilibili.com/tr/video/BV1MHxX6FEU6/)
