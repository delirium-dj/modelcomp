# GLM-5.3-Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/glm-5-3-flash (Z.AI launch post z.ai/blog/glm-5.3-flash), Artificial Analysis (`artificialanalysis.ai/models/glm-5-3-flash`), llm-stats.com, docs.z.ai, OpenRouter, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's first natively multimodal GLM-5 series model (released 26 Aug 2026, MIT license) for efficient coding and long-horizon agent tasks; 320B total / 18B active MoE with hybrid sparse + linear attention (mHC), 1M-token context, text+image in → text out, reasoning effort low/high/max (default max).
- **Provider / access:** Z.AI API (`glm-5.3-flash`), OpenRouter (`z-ai/glm-5.3-flash`), FP8 checkpoint on Hugging Face (`zai-org/GLM-5.3-Flash`), 26 API providers per Artificial Analysis. Siblings: GLM-5.3 (flagship), GLM-5.2, GLM-5.1, GLM-5, GLM-5-Turbo, GLM-5V-Turbo.
- **Release / knowledge:** Released 2026-08-26; pre-training on 30-trillion-token multimodal corpus (opper.ai); knowledge cutoff not stated.
- **IDs:** `glm-5.3-flash` (Z.AI API / OpenRouter), `zai-org/GLM-5.3-Flash` (HF weights). No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis, contextwindows.dev, z.ai docs); ~1500 A4 pages.
- **Modalities:** Text and image in; text out; reasoning yes (low/high/max, default max); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Z.AI $0.15/M input, $0.50/M output (cache discount 80%, cost per task $0.28 per Artificial Analysis); llm-stats lists $1.20/$4.00 — conflicting provider pricing.
- **Architecture:** Open-weights MoE, 320B total / 18B active, hybrid sparse and linear attention with mHC, reduces attention compute and KV cache 3.01×/4.44× vs GLM-5.3; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI launch post; Vals AI 62.9%; AA 84.3%)
- Toolathlon-Verified: **78.4%** (Z.AI launch post)
- AutomationBench: **48.8%** (Z.AI launch post); AA AutomationBench **60.4%**
- Agents' Last Exam: **26.3%** (Z.AI launch post)
- HLE w/ tools: **55.3%** (Z.AI launch post)
- GDPval-AA: **1773 Elo** (Z.AI launch post)
- AA Briefcase Elo: **1454** (Artificial Analysis)
- AA ITBench: **51.2%**; AA EnterpriseOps-Gym **33.2%**; AA-AnalystAgent **25.0%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **32.8%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (#5 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA Diamond: **86.4%** (Vals AI); AA-GPQA Diamond **91.2%** (Artificial Analysis)
- MMLU-Pro: **86.1%** (Vals AI)
- HLE: **39.9%** (AA-HLE)
- AA-LCR (long-context reasoning): **80.0%** (Artificial Analysis)
- MLCR-AA: **51.1%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- AA-Omniscience Index **7.5%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **55.789%**; Tier 4: **17.073%** (Epoch AI)

Coding:

- DeepSWE: **63.4%** (Z.AI launch post)
- NL2Repo: **56.3%** (Z.AI launch post)
- LiveCodeBench (Vals): **80.5%** (Vals AI)
- SWE-bench (Vals): **92.0%** (Vals AI)
- FrontierSWE v2: **18.1%** (Proximal)
- AA-SciCode: **51.6%** (Artificial Analysis)
- Bug Hunt Bench: **17.7 fixes** (public data)

Multimodal & grounded:

- CharXiv: **89.4%** (Z.AI launch post)
- Chartography (tools): **78.0%** (Z.AI launch post)
- BabyVision: **53.4%** (Z.AI launch post)
- MMVU: **80.5%** (Z.AI launch post)
- OfficeQA Pro: **62.4%** (Z.AI launch post)
- Design Arena Website: **1274** (OpenRouter)

Long context:

- AA-LCR: **80.0%**; MLCR-AA: **51.1%**; declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Strong Toolathlon-Verified (78.4), Terminal-Bench 2.1 (84.3), GDPval-AA (1773 Elo); capped by weak Agents' Last Exam (26.3), AutomationBench raw (48.8), AA Terminal-Bench 4.0 (32.8). Top open-weights agentic profile.
- **Reasoning: 74/100.** AA Intelligence Index 42 (#5 open-weights), GPQA 86.4–91.2%, AA-LCR 80.0%, MLCR-AA 51.1%; capped by CritPt (15.4), HLE (39.9), AA-Omniscience Index (7.5). Strong open-weights reasoning but weak on hardest open-ended problems.
- **Context window: 88/100.** Verified 1M tokens (all sources); capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 80/100.** Text + image in, text out; CharXiv 89.4%, MMVU 80.5%, Chartography tools 78.0%, BabyVision 53.4%; capped by text-only output.
- **Coding: 77/100.** SWE-bench Vals 92.0%, LiveCodeBench Vals 80.5%, DeepSWE 63.4%; capped by FrontierSWE v2 (18.1), Bug Hunt Bench (17.7 fixes). Strong verified SWE/competitive coding.
- **Cost efficiency: 95/100.** MIT open weights (self-host ~$0) plus cheapest hosted pricing ($0.15/$0.50, 80% cache discount, $0.28/task); not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (78 + 74 + 88 + 80 + 77) / 5 = 79.4 → 79. Best-fit recommendation: leading open-weights agentic coding model with excellent value; verify on Agents' Last Exam-class general agent tasks before production.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Z.AI launch post + Artificial Analysis + llm-stats + OpenRouter + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
