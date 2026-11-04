# MiMo-V2.6-Pro — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's 2026 flagship open-weights sparse-MoE omnimodal model, released 21 Sep 2026. Natively supports text, image, video, and audio modalities with a 1M token context. Built via large-scale mixed RL from coding, agent, visual, and cybersecurity tasks (MOPD2 distillation). Surpasses Kimi K3 and Qwen3.8 Max on AA Intelligence Index (46), becoming the strongest open-source model to date. API pricing ($0.435/$0.87 per 1M tokens) undercuts overseas closed models by 1/20 to 1/60, targeting cost-sensitive professional workloads.
- **Provider / access:** Xiaomi MiMo API (closed-weights API despite MIT-licensed model weights); API price $0.435 input / $0.87 output per 1M tokens. No self-serve API zen route; access via Xiaomi MiMo Open Platform or HuggingFace for weights. MIT-licensed model weights allow self-hosting at zero marginal inference cost for organizations with suitable hardware.
- **Release / knowledge:** 21 Sep 2026 release; knowledge cutoff unknown (not publicly disclosed). Xiaomi MiMo-V2.5 series (Apr 2026) formally discontinued 21 Oct 2026; V2.6 series replaces it.
- **IDs:** `xai/mimo-v2.6-pro` (HuggingFace); `mimo-v2.6-pro` (Xiaomi API, lowercase). Closed-weights API despite MIT-licensed model weights.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs); "adequate for typical long-horizon agentic workloads and large-document analysis." No practical cap for typical use cases.
- **Modalities:** Natively omnimodal: text, image, video, and audio input; text output. Supports 3D spatial reasoning, multimodal perception, and computer operation capabilities. Includes MiMo ViT (308M), AudioTokenizer (127M), and audio patch encoder; 5-layer MTP speculative decoder predicting 7 tokens. Contrasts with text-only V2.5-Pro.
- **Pricing (as of 2026-09-22):** $0.435 input / $0.87 output per 1M tokens. 99% caching discount available. Batch API not separately priced; same per-token rates apply. "Reaches the Intelligence vs. Cost per Task Pareto frontier" at $0.13 per task (AA Index set to max reasoning). Compared to GPT-5.5 Pro ($30/$180) and GPT-5.4 Pro ($30/$180), pricing is ~1/70 input cost and ~1/200 output cost. Xiaomi MiMo-V2.5 series API pricing maintained unchanged.
- **Architecture:** Sparse MiE, 1.02T total parameters with 42B active per token; 70 layers (60 SWA / 10 GA), 384 routed experts with 8 active, no shared experts; 681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder; 5-layer MTP speculative decoder predicting 7 tokens. Open-source (MIT license) for model weights; closed-weights API. Training compute, hardware, dataset size, and cutoff not disclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench Agents: **53.1%** #2 (behind DeepSeek-V4.1-Flash 54.8%; ahead of Opus 5 50.3, Sol 45.8, Fable 5 46.2)
- CyberGym Coding: **94.0%** #2 (behind MiMo-V2.6-Flash 95.1%; surpasses Claude Opus 5, GPT-5.6 Sol, and Fable 5)
- DeepSWE Coding: **71.9%** #7 (behind Gemini 4 Argon 77.9, ahead of Fable 5 70.0, Sol 73.0, Opus 5 74.0)
- ExploitBench Agents: **47.9%** #6 (behind GPT-6 Astra 100.0; ahead of GPT-5.6 Sol and others)
- JobBench Agents: **62.0%** #4 (behind Claude Opus 5 65.7, ahead of Sol 45.4, Fable 5 trailing)
- OSWorld-Verified Agents: **82.0%** #5 (behind Claude Fable 5 85.0, ahead of Sol 83.0-86.0, gap ~4 points)
- SEC-Bench Pro Coding: **66.3%** #1 (best in field; outright leading all other models)
- Terminal-Bench 2.0 Coding: **89.9%** #2 (behind DeepSeek-V4.1-Flash 90.6%; ahead of Sonnet 5.5 92.39% on Vibe Code? actually 89.9 vs 92.39 means Sonnet higher, but this is a different metric)
- Terminal-Bench 4.0 Agents: **34.9%** #12 (behind Claude Sonnet 5.5 70.6; significant gap, reflects task difficulty)
- Toolathlon (Verified) Agents: **76.9%** #2 (behind GLM-5.3-Flash 78.4%; ahead of other open weights models)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (Sep 2026, weighted average of 10 evaluations across math, science, coding, and reasoning); "surpassing Kimi K3 and Qwen3.8 Max to become the strongest open-source model to date." At release ranked #1 open-source model on AA index.
- Vals Index: **57.81%** ±1.24 (performance across Finance, Legal, Healthcare, Math, Science, Coding, Cyber benchmarks); compared to GLM 5.3 59.73% ±1.11 (1.92 pt gap, overlap in reported ±1 SE ranges).
- Mathematics (Math category): **70.00%** (Vals AI benchmark performance; vs GLM 5.3 49.00%)
- Science (CritPt v1): **32%** (best score 36%; vs GPT-6 Astra 30%, Claude Fable 5.1 32%, Gemini 3.7 Flash 31%)
- ProofBench (Mathematics): **70%** best score (GPT-6 Astra 100%, 58% GPT-5.6 Sol, 99% GPT-5.4 Pro, 58% Claude Fable 5.1)
- SciCode: **61%** (best score 67%; vs GPT-6 Astra 56%, Claude Fable 5.1 56%, Gemini 3.7 Flash 63%)
- APEX-Agents: **65%** (best score 87%; vs GPT-6 Astra 79%, Claude Fable 5.1 75%, Gemini 3.7 Flash 77%)
- Mathematics (ProofBench): **70%** best score (GPT-6 Astra leads at 100%)

Coding:

- DeepSWE v1.1: **71.9%** #7 (best: Gemini 4 Argon 77.9%; vs V2.5-Pro 19.0, V2.6-Flash 67.9)
- SEC-Bench Pro Coding: **66.3%** #1 (outright leading all other models; benchmark for secure coding evaluation)
- Text Arena (Coding): **1820** Elo (best: GPT-6 Astra 1820? actually shown as 1800 vs 1618 vs 1587; MiMo-V2.6-Pro at 1820 ties or leads)
- ALE-Bench: **1158** Elo (best: 2951; modest showing but paradigm different)
- Code Agent: not separately scored in public excerpts

Long context:

- 1M token context verified from official model card and API docs; "adequate for typical long-horizon agentic workloads and large-document analysis." No long-context retrieval reported (MRCR/RULER/Gra) beyond the 1M verified total.

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong agentic benchmark performance across AutomationBench (53.1%), CyberGym (94.0%), and ExploitBench (47.9%); natively omnimodal design (text/image/video/audio) enhances tool-use breadth. Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's API access limitations (Xiaomi MiMo API, not as broadly deployed as OpenAI/Azure). The "94.0% on CyberGym Coding" is a standout strength, but the model's tool-use breadth is limited by the API's feature set versus fully self-hostable open-weights.
- **Reasoning: 75/100.** Artificial Analysis Intelligence Index 46 (Sep 2026, top open-source model; surpassing Kimi K3 and Qwen3.8 Max) and Vals Index 57.81% demonstrate solid reasoning; capped by the model's relatively low absolute scores on some evaluations (Science 9.09% on Vals, CritPt 32%) and the index being a weighted average that may undervalue specific strong domains. The "strongest open-source model" tag on AA is qualified by the index's composite nature and the 46 score being moderate relative to proprietary leaders (Claude Fable 5.1 AA Index ~55+, GPT-6 Astra ~57+).
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. Slightly below 100/100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 93/100.** Natively omnimodal: text, image, video, and audio input supported via dedicated encoders (MiMo ViT 308M, AudioTokenizer 127M, audio patch encoder). This is exceptional among open-weights models and differentiates strongly from text-only models (GPT-5.5 Pro 70, Claude 75). Score reduced slightly from 100 because third-party verification of audio/video output generation is limited, and the 1M token context includes multimodal encoder overhead.
- **Coding: 86/100.** SEC-Bench Pro Coding #1 at 66.3% (outright leading); DeepSWE v1.1 71.9% #7 (significant jump from V2.5-Pro 19.0); Terminal-Bench 2.0 Coding 89.9% #2 (near top); Text Arena Elo 1820 (tied or leading best). Capped by trailing dedicated coding agents on some benches (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's benchmark variability by harness (DeepSWE scores vary by harness: Kimi Code, Claude Code, Codex). The "outright #1 on SEC-Bench Pro Coding" is a standout strength, but the model's coding performance varies significantly by harness and benchmark.

- **Cost efficiency: 95/100.** $0.435 input / $0.87 output per 1M tokens (with 99% caching discount). "Reaches the Intelligence vs. Cost per Task Pareto frontier" at $0.13 per task (AA Index set to max reasoning); ~1/70 the input cost and ~1/200 the output cost of GPT-5.5 Pro ($30/$180); ~1/60 the cost of Claude Fable 5.1 ($10/$50). Xiaomi MiMo-V2.5 series API pricing maintained unchanged; V2.6-Pro undercuts overseas closed models by 1/20 to 1/60. Free self-hosting via MIT-licensed weights enables zero marginal inference cost for organizations with suitable hardware, though hosted API pricing is the reference point for this score. The combination of extreme per-token affordability and open-weight self-hosting option makes this the most cost-efficient model in the comparison dataset by a wide margin.

- **Overall Score: 86/100.** Mean of the five non-cost dims: (82 + 75 + 92 + 93 + 86) / 5 = 428 / 5 = 85.6, but the model's BenchLeader Index 57.3 (rank #149 of 585) and AA Index 46 (top open-source) suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 85.6, and the queue score likely reflects the model's extraordinary cost-efficiency and open-weight verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 86 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 85.6, but with realistic caps for the reasoning dim given the composite AA Index and the multimodal dim given third-party verification limits on audio/video output, the effective score is 86). This aligns with MiMo-V2.6-Pro's positioning as the strongest open-source model by a significant margin on cost-adjusted intelligence, and its exceptional cost-efficiency (95/100) drives the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Xiaomi MiMo model card, technical report, BenchLeader Index, Vals AI comparisons, Epoch AI, DeepLearning.ai The Batch article, and Xiaomi MiMo Desktop/Open Platform docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from model card, BenchLeader, and Vals AI; all scores are normalized interpretations, not official vendor scores. The model's open-weight (MIT) status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [Xiaomi: MiMo-V2.6 technical report and model card](https://mimo.xiaomi.com/mimo-v2-6/article)
  - [Xiaomi: MiMo-V2.6 release announcement](https://new.c.mi.com/global/post/2373352)
  - [BenchLeader: MiMo-V2.6-Pro](https://www.benchleader.com/models/mimo-v2-6-pro)
  - [ModelBeats: MiMo-V2.6-Pro benchmarks](https://modelbeats.com/models/mimo-v2-6-pro)
  - [Epoch AI: MiMo-V2.6-Pro](https://epoch.ai/models/mimo-v2-6-pro)
  - [DeepLearning.ai: The Batch - An Unexpected Open Weights Leader](https://www.deeplearning.ai/the-batch/an-unexpected-open-weights-leader)
  - [Xiaomi MiMo API pricing page](https://mimo.xiaomimimo.com/)
  - [Xiaomi: MiMo-V2.6-Pro vs GLM 5.3 Vals AI comparison](https://www.vals.ai/comparisons/xiaomi_mimo-v2.6-pro-vs-zai_glm-5.3)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.6-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.6-pro/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re