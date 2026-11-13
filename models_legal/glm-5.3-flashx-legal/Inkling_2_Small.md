# GLM-5.3-FlashX-Legal — findings by Inkling 2 Small

- Source: Z.AI / Zhipu (`glm-5.3-flashx-legal`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (GLM-Legal)
- **Short description:** Z.AI's legal-domain variant of GLM-5.3-FlashX, the fast serving tier of GLM-5.3-Flash. Adds legal-domain mid-training and reinforcement learning post-training across tens of thousands of real-world legal-workflow environments; aimed at legal research, contract review, and legal document drafting. A specialized SKU, not a general-purpose model.
- **Provider / access:** Z.AI API (chat completions, model code `glm-5.3-flashx-legal`; OpenAI-compatible). Aggregator access tracked as `zai/glm-5.3-flashx-legal` on AgentSky. Base GLM-5.3-Flash family is also open-weights (Hugging Face `zai-org/GLM-5.3-Flash`, Apache-family open licensing per Z.AI); the Legal SKU itself is hosted-only/proprietary (llm-stats: proprietary, hosted access only).
- **Release / knowledge:** Released 2026-10-12 (llm-stats release date, corroborated by Z.AI's October 2026 launch post). Knowledge cutoff not officially disclosed.
- **IDs:** `zai/glm-5.3-flashx-legal` (Z.AI model code `glm-5.3-flashx-legal`); base family open weights at `huggingface.co/zai-org/GLM-5.3-Flash`
- **Context window:** 1M tokens (Z.AI developer docs; llm-stats providers table lists 1.0M input / 131.1K output; docs.z.ai lists max output 128K for the GLM-5.3-Flash family) — spec-sheet limit, not independently measured. Base GLM-5.3-Flash: 320B total / 18B active, hybrid sparse + linear attention.
- **Modalities:** Text, image, video, and file input (native multimodal in the GLM-5.3-Flash family); text out; reasoning yes (thinking mode, cannot be disabled); tool calls yes; structured output yes; JSON mode yes.
- **Pricing (as of 2026-11):** Z.AI (via llm-stats): $0.370 / 1M input, $0.0750 / 1M cached input, $1.25 / 1M output. AgentSky: $0.429385 / $1.450625 per 1M in/out. Base GLM-5.3-Flash: $0.045 per Artificial Analysis Intelligence Index task (discounted). FlashX serving tier: ~200 tokens/s.
- **Architecture:** 320B total / ~18B active sparse MoE with hybrid sparse+linear attention, Manifold-Constrained Hyper-Connections (mHC), 30T-token multimodal pre-training corpus; FP8/serving internals not public for the Legal SKU. Open weights for the base Flash; Legal SKU proprietary.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1 (base GLM-5.3-Flash): **63.4** (vs GLM-5.2: 46.2) (source: Z.AI developer docs, GLM-5.3-Flash launch)
- AutomationBench-AA (base GLM-5.3-Flash): **48.8** (vs GLM-5.2: 26.2) (source: Z.AI developer docs)
- Harvey LAB all-criteria pass rate (Legal, legal agent benchmark): **19.2%** — +12.5 percentage points over the base model; reported as state-of-the-art among open-source models in this evaluation (source: docs.z.ai GLM-5.3-FlashX-Legal section)
- Z.ai Code Bench v1.0 (Claude Code 2.1.207, base GLM-5.3-Flash, max effort): **29.0** (vs Claude Opus 4.8: 29.5) (source: Z.AI developer docs)
- Tau3-Banking / Tau2-Bench: no verified public score found for the Legal SKU
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for the Legal SKU

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1 (base GLM-5.3-Flash): **57** at $0.045/task discounted — "a level of intelligence previously only available at roughly 10× the cost" (source: Z.AI developer docs)
- GPQA Diamond / HLE / CritPt / Omniscience: no verified public score found for the Legal SKU

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for the Legal SKU
- DeepSWE v1.1: see Agent/tool use (63.4, base GLM-5.3-Flash)

Long context:

- 1M-token context per official spec; document cross-checking is a headline Legal use case — no long-context retrieval benchmark published for the Legal SKU.

Note: every number above is measured on the base GLM-5.3-Flash or the Legal SKU as labelled. The Legal SKU's only directly published score is the Harvey LAB 19.2% all-criteria pass rate; no Legal-specific coding/reasoning index exists publicly yet.

### Normalized scores (1–100)

- **Tool use: 66/100.** Function calling + agentic legal-workflow RL across tens of thousands of environments and Harvey LAB 19.2% legal-agent pass are real but single-point evidence; base-model AutomationBench 48.8 caps confidence. No direct tool-use index published for the Legal SKU.
- **Reasoning: 70/100.** Base GLM-5.3-Flash scores AAII v4.1.1 = 57 (~frontier-adjacent at ~10× lower cost); Legal adds domain mid-training/RL. No Legal-specific reasoning benchmark published; capped by reliance on base-model evidence.
- **Context window: 90/100.** Official 1M-token context with 128K max output (spec sheet; not independently measured); Hybrid sparse+linear attention engineered for 1M-token serving. Below a verified-measured 1M score.
- **Multimodal: 60/100.** Native text/image/video/file input, text out (GLM-5.3-Flash family); no public MMMU-type score for the Legal SKU. Above the text-only floor (15), far from multimodal leaders.
- **Coding: 78/100.** Base DeepSWE v1.1 63.4 (vs GLM-5.2 46.2); Z.ai Code Bench v1.0 max-effort 29.0 ≈ Claude Opus 4.8 (29.5). Legal SKU itself unmeasured on coding; score leans on base-code capability.
- **Cost efficiency: 88/100.** $0.370/$1.25 per 1M ($0.075 cached) with ~200 tok/s FlashX serving — frontier-adjacent capability at Flash cost; base model at $0.045/AA-task.
- **Overall Score: 73/100.** Mean of the five quality dims (66+70+90+60+78)/5 = 72.8 → 73. Best fit: legal-domain agent work (contract review, due diligence, legal drafting with document tooling) where its RL actually targets the task; not a general-purpose default vs the base GLM-5.3-Flash.

---

## Signature

- Provided by: **Inkling 2 Small (openrouter/thinkingmachines/inkling-2-small:free)** — 2026-11-13
- Method: public internet research (official Z.AI developer docs, llm-stats provider/pricing tables, Z.AI launch material relayed in developer docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3-Flash / FlashX / FlashX-Legal — Z.AI Developer Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [GLM-5.3-FlashX-Legal — Benchmarks, Pricing & Context Window (llm-stats)](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [GLM-5.3-Flash launch blog (Z.AI)](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small.md`, using the same headings.
