# ERNIE 5.5 Flash Preview — findings by GPT 6.1 Sol

- Source: Baidu / ERNIE-5.5-Flash-Preview, not the pretrained Base checkpoint
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Subject resolution: The operator confirmed that this report in the existing `ernie-5.5-flash` folder should cover the **Preview API**. Metadata is not rewritten and no duplicate Preview folder is created.

## Model card

- **Name:** ERNIE 5.5 Flash Preview. The vendor's `-Preview` suffix is retained in model/endpoint citations; this is not a verified final GA release.[1]
- **Short description:** Baidu's first post-trained model built on ERNIE 5.5 Flash Base, for coding, knowledge work, and text-driven agent tasks. Base is a separate pretrained checkpoint; its few-shot knowledge/coding results are not Preview measurements.[1][2]
- **Provider / access:** Native Baidu Qianfan API and OpenRouter's exact free route. OpenRouter lists compatible Chat Completions/Responses access and Baidu as the serving provider; no authenticated inference or end-to-end availability test was performed.[1][3][4]
- **Release / knowledge:** Official Preview announcement **2026-11-11**; OpenRouter's listing/canonical date is November 10, a separate catalog milestone. Exact knowledge cutoff not verified.[1][3]
- **IDs:** OpenRouter **`baidu/ernie-5.5-flash-preview:free`**. The native product linked by the vendor is ERNIE 5.5 Flash Preview; the existing metadata's unsuffixed label is not used as proof of a different callable GA model. No exact Zen Free ID verified.[1][3][4]
- **Context window:** Vendor **1M total**; inspected gateway **1,024,000 context / 921,600 maximum completion tokens**. The latter is a provider-specific catalog allowance, not a verified native output maximum. Base config limits and the metadata's output estimate are not silently transferred.[1][3][4]
- **Modalities:** **Text in; text out.** The vendor explicitly says it cannot see the screen. Images, videos, music, and 3D artifacts in demonstrations were created/read with external tools, not a native media decoder. Reasoning, functions, and structured outputs are listed for the gateway route.[1][3][4]
- **Pricing (as of 2026-11-11):** Evaluated access tier: **$0 input/output** on the inspected OpenRouter free Baidu endpoint. Account/rate limits and preview availability apply; this is not perpetual unlimited access. Native Qianfan token tariffs and a model-specific ZDR/no-training guarantee were not independently verified; the folder's approximate CNY/USD pricing is not adopted.[3][4]
- **Architecture:** **280B total / 14B active** MoE, explicitly stated for Preview. Baidu says weights will be released under **Apache 2.0 soon**; that is a future commitment, not a currently verified Preview weight release. The existing Base weights carry their own license and pretraining-stage identity.[1][2]

### Raw benchmarks found

**Primary evidence:** Baidu's exact Preview launch appendix image, directly read. All models use their highest available reasoning setting; benchmark-specific scaffolds, judges, and task subsets vary. These are vendor-reported results, not independent reproduction. Competitor citations and this model's own results are not multiple independent sources.[1][5]

Agent / tool use:

- Terminal-Bench **4.0: 46.5%**, Claude Code **2.1.246** for this model; not TB2.1.[5]
- AutomationBench **61.9%**, public **v1.0.6** subset with official harness/defaults; APEX-Agents **1.1: 64.2%**, official harness with text placeholders replacing multimodal input for text-only models.[5]
- Agents' Last Exam **CLI subset: 29.0%**, five-hour task limit; SkillsBench **1.1 text-only subset: 73.5%**. Neither is an unrestricted full multimodal-suite result.[5]
- Toolathlon-Verified **75.0%**, **200 maximum steps / 7,200 seconds per task**, with anti-hacking restrictions; MCP-Atlas **84.6%**, the **500-task public April release**, official harness/defaults.[5]
- BrowseComp **87.4%**, with the appendix's multi-turn/task-time budget; DRACO **84.9%**; SpreadsheetBench v2 **36.4%**; OfficeQA Pro v2 **67.9%**, each under its stated tool/judge restrictions.[5]
- Tau3-Banking / Tau2-Bench, GDPval-AA Elo, Claw-Eval / ClawProBench, and SWE Atlas Codebase QnA: **no verified exact Preview public score found**.

Reasoning / knowledge:

- **HLE without tools: 46.4%, text-only subset**, explicitly marked by the appendix dagger. The judge is Gemini 3.1 Flash-Lite. This is not full multimodal HLE or tool-assisted HLE.[5]
- AA-Omniscience-Public **25.2**, on a **600-example public set**, publisher evaluation with Gemini 3.1 Flash-Lite judge. The displayed score is not separately verified accuracy or hallucination rate.[5]
- AA-LCR **v1.1: 79.0%**, publisher-run with DeepSeek-V4-Flash judge; this is not an independent AA rerun or near-perfect 1M retrieval.[5]
- GPQA Diamond, MLCR, CritPt, independent Intelligence Index, and separate Omniscience accuracy / hallucination rate: **no verified exact Preview score found**. Pretrained Base's tables are expressly not used.[2]

Coding:

- DeepSWE **v1.1: 71.2%**, **mini-swe-agent 2.4.6** with anti-hacking policies and an **8-CPU / 16-GB** task sandbox.[5]
- ProgramBench **Almost Solved: 29.5%**, Claude Code 2.1.246; not whole-program full success.[5]
- NL2Repo-Bench **64.8%**, Claude Code **2.1.226**, with rule/LLM checks against suspicious tool use.[5]
- Terminal-Bench-Science **0.1: 21.0%**; CookieBench **88.2%**, its **1,000-query React setting**, not all software engineering; BlenderWorld **text-only subset: 79.0%**, with external image-understanding tooling rather than native vision.[5]
- SWE-bench Verified / Pro, LiveCodeBench, SciCode, Vibe Code Bench, and independent Coding Index: **no verified exact Preview public score found**.

Long context:

- AA-LCR v1.1 **79.0%** is real long-document reasoning evidence, but no exact MRCR / RULER / GraphWalks retention result at a stated full-1M length was verified. Native capacity alone does not support a perfect context score.[1][5]

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP-Atlas 84.6%, Toolathlon-Verified 75%, and several workflow results support strong text agents, capped by TB4.0 46.5%, ALE-CLI 29%, subset restrictions, and vendor-only evaluation.[5]
- **Reasoning: 90/100.** HLE text-only/no-tools 46.4% and LCR 79% support strong reasoning, but missing full-HLE/GPQA replication and limited public knowledge evidence cap confidence.[5]
- **Context window: 95/100.** Verified 1M capacity meets the top tier; no measured high-retention full-window result supports 100.[1][3][5]
- **Multimodal: 15/100.** Native input/output are text-only. External vision, graphics, video, and music tools do not expand the model's own modalities.[1][3]
- **Coding: 89/100.** DeepSWE 71.2%, NL2Repo 64.8%, and exact terminal/programming results support strong agentic coding, capped by incomplete whole-program performance, mixed scaffolds, and no independent rerun.[5]
- **Cost efficiency: 100/100.** The inspected exact free gateway tier has $0 input/output; its eligibility, quotas, and future availability are separate from token price and native paid tariffs.[3][4]
- **Overall Score: 75/100.** Half-up mean of (84 + 90 + 95 + 15 + 89) / 5 = 74.6; cost is excluded. Strong economical text-only coding/knowledge agents, but native multimodal work needs a different model or external tools.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-11
- Method: Independent fresh exact-name search, official Base-versus-Preview distinction, operator-confirmed subject resolution, direct primary benchmark-image/footnote inspection, and live exact gateway endpoint verification. No peer findings read or Base scores transferred; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [1 — Official Preview release, text-only status, parameters, and future weight commitment](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [2 — Separate pretrained Base checkpoint and its distinct evaluation/license](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base/raw/main/README.md)
  - [3 — OpenRouter live public exact-model catalog](https://openrouter.ai/api/v1/models)
  - [4 — Exact free Baidu gateway endpoint, limits, tariff, and supported controls](https://openrouter.ai/api/v1/models/baidu/ernie-5.5-flash-preview:free/endpoints)
  - [5 — Primary full Preview benchmark table and evaluation footnotes](https://ernie.baidu.com/research-assets/ernie-5-5-flash-preview/benchmark-table-final.png)
  - [Secondary transcription, not independent replication](https://benchlm.ai/models/ernie-5-5-flash-preview)
- Future sources: add independently signed exact-Preview evidence next to this report without conflating it with Base or a future final release.
