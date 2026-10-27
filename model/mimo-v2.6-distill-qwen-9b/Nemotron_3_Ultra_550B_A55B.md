# MiMo 2.6 Distill Qwen 9B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo 2.6 Distill Qwen 9B (MiMo-V2.6-Distill-Qwen-9B)
- **Short description:** Xiaomi MiMo's 9B dense SFT checkpoint, released September 22, 2026. Fine-tuned from Qwen3.5-9B on 77.4B tokens of MiMo-generated agent data (code 29.9%, general 28.5%, visual 27.4%, cyber 14.2%). SFT-only checkpoint (no RL stage) released as starting point for open agentic RL research. MIT license. Text, image, video input; text output.
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), FriendliAI, SGLang (requires custom `mimo` reasoning parser). Self-hosted only (MIT license). No managed API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HF). No managed API. MIT license = self-host free.
- **Context window:** 256K native (262,144 tokens, `max_position_embeddings`). Verified via HF model card, ModelComp, kinonn-bot.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (custom `mimo` reasoning parser, thinking enabled via chat template). Tool calls: yes (tagged `tool-use`). JSON mode: yes. Structured output: yes. Vision encoder present (1152-hidden per prithivMLmods).
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (MIT license). No managed API. VRAM ~18GB fp16 (24GB GPU), ~6GB Q4.
- **Architecture:** 9.41B dense params (32 layers, hidden 4096, 32 heads). Vision encoder 1152-hidden. Distilled from MiMo-V2.6 onto Qwen3.5-9B base. SFT on 77.4B tokens (27.2B loss-bearing): code 23.2B, cyber 11.0B, general 22.0B, visual 21.2B. MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL LIMITATION:** All benchmarks vendor-reported by Xiaomi (MiMo-V2.6 technical report / HF model card). Internal evaluations marked "†" not independently verifiable. No independent third-party reproduction found. Model is SFT-only (no RL stage).

Agent / tool use (vendor-reported):

- Terminal-Bench 2.1: **37.1%** (avg@1) — HF card / BenchmarkList / ModelComp (agreed: 14 reports)
- SWE-bench Verified: **61.1%** (avg@3) — HF card / BenchmarkList / ModelComp (agreed: 16 reports)
- SWE-bench Pro: **44.6%** (avg@3) — HF card / BenchmarkList / ModelComp (agreed: 15 reports)
- Toolathlon-Verified: **35.2%** (avg@1) — HF card
- AutomationBench v1.0.6: **30.3%** (avg@1) — HF card
- Toolathlon-Verified: **35.2%** — ModelComp agreed (14 reports)
- AutomationBench: **30.3%** — ModelComp
- OfficeQA: **19.5%** (avg@1) — HF card
- JobBench: **18.3%** (avg@1) — HF card / BenchmarkList
- MiMo General (mini)†: **62.2%** (avg@1) — HF card (internal)
- MiMo Visual Coding (mini)†: **64.0%** (avg@1) — HF card (internal)
- MiMo Cyber (mini)†: **31.3%** (avg@3) — HF card (internal)
- MiMo Code (mini)†: **51.6%** (avg@3) — HF card (internal)
- AutomationBench v1.0.6: **5.0 → 30.3** (base → SFT) — HF card
- Toolathlon-Verified: **25.9 → 35.2** (base → SFT) — HF card
- OfficeQA: **9.0 → 19.5** — HF card
- JobBench: **2.6 → 18.3** — HF card / BenchmarkList
- MiMo Visual Coding (mini)†: **61.7 → 64.0** — HF card (internal)
- MiMo Cyber (mini)†: **5.7 → 31.3** — HF card (internal)
- Terminal-Bench 2.1: **27.0 → 37.1** (avg@1) — HF card / ModelComp (agreed: 14 reports)
- Terminal-Bench 2.1: **37.1%** — ModelComp (agreed: 14 reports: Beam, Big Pickle, Opus 5, DS V4.1 Flash, DS V4 Flash, Fledge, GLM 5.3, GLM 5.3 Flash, Gemini 3.8 Flash, Laguna S 2.1, LongCat 2.5, MiMo 2.6 Flash, Muse Glimmer, Qwen 3.8 27B)

Reasoning / knowledge:

- MMLU / MMLU-Pro / GPQA Diamond / MATH / AIME 2026 / GPQA / MMLU-Pro / C-Eval / SuperGPQA / MMMLU / BBH / ZebraLogic / HLE: **no direct scores** for Distill (HF card doesn't list reasoning benchmarks)
- MiMo General (mini)†: **62.2%** (internal) — HF card
- AutomationBench v1.0.6: **5.0 → 30.3** (base → SFT) — HF card
- JobBench: **2.6 → 18.3** (avg@1) — HF card / BenchmarkList
- MiMo General (mini)†: **28.5 → 62.2** — HF card (internal)
- No MMLU/GPQA/AIME/HLE/GPQA Diamond/MMLU-Pro/C-Eval/SuperGPQA scores for Distill

Coding:

- SWE-bench Verified: **61.1%** (avg@3) — HF card / BenchmarkList / ModelComp (agreed: 16 reports)
- SWE-bench Pro: **44.6%** (avg@3) — HF card / BenchmarkList / ModelComp (agreed: 15 reports)
- MiMo Code (mini)†: **51.6%** (avg@3) — HF card (internal)
- SWE Verified: **60.0 → 61.1** (base → SFT) — HF card
- SWE Pro: **32.0 → 44.6** (avg@3) — HF card / BenchmarkList
- MiMo Code (mini)†: **19.5 → 51.6** — HF card (internal)
- SWE-bench Pro: **44.6%** (avg@3) — ModelComp (agreed: 15 reports: Beam, Big Pickle, Opus 5, DS V4.1 Flash, DS V4 Flash, Fledge, GLM 5.3, GLM 5.3 Flash, Kimi K3, Laguna S 2.1, LongCat 2.5, MiMo 2.6 Flash, MiniMax M3.1 Flash, Muse Glimmer, Qwen 3.8 27B)
- Terminal-Bench 2.1: **37.1%** (avg@1) — HF card / BenchmarkList / ModelComp (agreed: 14 reports)
- MiMo Code (mini)†: **19.5 → 51.6** — HF card (internal)

Long context:

- Native 256K context verified (`max_position_embeddings 262144`)
- YaRN 512K works per HF discussion
- MRCR / RULER / GraphWalks / LongBench v2 / LOFT: **no scores** for Distill

Multimodal:

- Text, image, video input; text output. Vision encoder 1152-hidden (per prithivMLmods).
- MiMo Visual Coding (mini)†: **64.0%** (avg@1) — HF card (internal)
- MiMo Visual Coding (mini)†: **61.7 → 64.0** — HF card (internal)
- No public vision benchmarks (MMMU, MMMU-Pro, MathVision, etc.)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Terminal-Bench 2.1 37%, AutomationBench 30%, Toolathlon 35%, OfficeQA 20%, JobBench 18%. Strong gains over base (TB 27→37%, AutoBench 5→30%) but absolute scores modest vs frontier (Fable 5.1 TB 2.1 91%). Capped by no MCP-Atlas/PinchBench/BFCL/TAU2/ClawEval scores and low absolute Toolathlon (35%).
- **Reasoning: 35/100.** No MMLU/GPQA/AIME/HLE/GPQA Diamond/MMLU-Pro/C-Eval/SuperGPQA scores. Only internal MiMo General (62%). No standard reasoning benchmarks published. Capped by complete absence of standard reasoning benchmarks.
- **Context window: 75/100.** 256K native (256K–512K tier = 70–80). YaRN 512K works. No MRCR/RULER/GraphWalks/LongBench/LOFT scores. Capped by no retrieval benchmarks.
- **Multimodal: 55/100.** Text/image/video in; text out. Vision encoder present (1152-hidden). MiMo Visual Coding 64% (internal). No public MMMU/MMMU-Pro/MathVision/OCR/Video benchmarks. Capped by no public vision benchmarks and internal-only visual score.
- **Coding: 65/100.** SWE-bench Verified 61% (agreed 16), SWE-bench Pro 45% (agreed 15), Terminal-Bench 2.1 37% (agreed 14). Strong SWE-Verified gains over base (60→61%, +1.1pp but SWE-Pro +12.6pp). Capped by no HumanEval/LiveCodeBench/MBPP/Terminal-Bench 2.0/SWE-Rebench and TB 2.1 37% vs frontier (Fable 91%).
- **Cost efficiency: 98/100.** MIT open weights — self-host free. 9B dense = ~18GB fp16 (24GB GPU), ~6GB Q4. No managed API. Among best value for agentic coding at this size.
- **Overall Score: 57/100.** Mean of (55+35+75+55+65)/5 = 57.0 → 57. ModelComp shows 61.9 — close. Best fit: **research-grade SFT checkpoint for agentic RL**; strong SWE-Pro gains (+12.6pp over base) but no RL stage, no standard reasoning benchmarks, internal-only visual evals. MIT license enables commercial RL research.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Xiaomi HF model card, MiMo-V2.6 technical report, ModelComp, BenchmarkList, FriendliAI, HokAI, kinonn-bot GFUF audit, AdvancedStack session log, ThinkPlainAI, Interfaze, MiMo.xiaomi.com Appendix); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All benchmarks vendor-reported; several internal evals (marked †); no independent reproduction; no standard reasoning benchmarks (GPQA/MMLU/AIME/HLE); SFT-only (no RL); no hosted API.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.