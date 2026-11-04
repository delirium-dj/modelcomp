# Muse Spark Open — findings by GLM 5.3 Flash

- Source: Meta Superintelligence Labs / Muse Spark Open (`meta-models/Muse-Spark-Open-816B-A42B`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weights release of its Muse Spark line (based on Muse Spark 1.2, shipped August, plus extra safety post-training) — billed as the most capable US open-weight model to date. Built for coding agents and long-horizon agentic work; natively multimodal. Distinct from the hosted, proprietary Muse Spark 1.x SKUs.
- **Provider / access:** Open weights (Hugging Face `meta-models/Muse-Spark-Open-816B-A42B` and `-NVFP4`, also Amazon SageMaker AI, Google Cloud Model Garden, Microsoft Foundry). Hosted API via Baseten, Fireworks AI, Groq (limited preview, 131K context), Modal, Nebius, OpenRouter, Together AI. Not sold on Meta's own Model API. OpenAI-compatible APIs; supports SGLang, vLLM, TensorRT-LLM, HF Transformers, MLX, llama.cpp, Unsloth; runs on two Apple M5 Ultra Mac Studios via MLX (first model of this class on a desktop).
- **Release / knowledge:** Weights released 2026-10-15; knowledge cutoff not stated in the sources found.
- **IDs:** `meta/muse-spark-open` (OpenRouter), `accounts/fireworks/models/muse-spark-open` (Fireworks), `meta-models/Muse-Spark-Open-816B-A42B` (Modal/Together). No Free ID exists on OpenCode Zen (open weights, but every hosted route is paid).
- **Context window:** 1,048,576 tokens (1M) — official config `max_position_embeddings` = 1,048,576; image/video/audio tokens share the same window; OpenRouter route output cap 943,718 tokens; Dbggr lists max output 1,048,576. KV cache ≈ 250 KB/token BF16 (~266 GB at full 1M). Verified from the HF config/blog; Groq's preview caps at 131K.
- **Modalities:** input text + image + video + audio (native, with a 1.8B-param Perception Encoder vision tower); output text. Reasoning yes (adaptive; recommended effort high/xhigh); tool calls yes (JSON/structured output not explicitly documented in sources found).
- **Pricing (as of 2026-11-04):** $1.25 / $4.25 per 1M in/out at every hosted provider (Baseten, Fireworks, Modal, Nebius, Together; OpenRouter shows the same); cached input $0.15 (Nebius n/a); Fireworks batch −50%. Zero data retention on Fireworks by default. License: Muse Model License — free for most developers; MaaS providers >$20M gross revenue (12-month) need a separate Meta agreement; "Built with Muse Spark Open" attribution required; military/critical-infrastructure uses prohibited.
- **Architecture:** Mixture-of-Experts Transformer: 816B total / 42B active per token, 62 layers, 256 experts with top-8 routing, GQA (128 Q / 16 KV heads, head dim 64), gated attention with QK-norm, vocab 202,048, plus 1.8B Perception Encoder (50 layers, sparse attention factor 4). Weights BF16 (≈2TB RAM/VRAM to self-host) and NVFP4 (≈700GB). Open weights under the Muse Model License (not Apache 2.0).

### Raw benchmarks found

> Meta model-card rows are vendor-reported (xhigh effort, temp 1.0) against open-weight peers; Artificial Analysis, Vals AI and ModelCap provide the independent rows. Conflicts flagged inline.

Agent / tool use:

- MCP-Atlas: **89.2%** (Meta card — best score in its eight-model open-peer table; vs Qwen3.8-2.4T 84.5, GLM 5.3 84.2, Kimi K3 82.3)
- JobBench: **61.8** (Meta card — table lead; GLM 5.3 61.4, Kimi K3 54.3, Inkling 31.1, Nemotron 3 Ultra 27.2)
- OSWorld-Verified: **80.4%** (Meta card; Kimi K3 84.8)
- Toolathlon-Verified: **72.8%** (Meta card; Kimi K3 76.5, GLM 5.3 73.0)
- GDPval-AA v2: **1401 Elo** (Meta card; below Mistral Large 4 1424, Kimi K3 1537, Qwen3.8 1613, GLM 5.3 1653)
- Harvey Legal Agent Benchmark v1.1 (Vals AI, held-out): **25.00%** — #2 of 33 configurations (Gemini 4 Argon 27.08% leads; Wonder 23.75%); cost $13.63/test, 22.26M tokens, 3h59m at xhigh. Note: Fireworks' day-0 post claimed #1 on this board — superseded by Argon on the current 2026-10-30 snapshot (conflict flagged)
- Vals Finance Agent v2: **61.34%** — #3 of 80 (Vals AI)
- Terminal-Bench 4.0: **6.57%** (Vals AI, #41 of 50) / **~8.1%** (Artificial Analysis) — vs ~33.3% for Meta's hosted Muse Spark 1.3 and 52–60% for closed frontier models; Meta's card reports only TB2.1 (conflict in difficulty level, flagged below)
- Terminal-Bench 2.1 (Terminus 2 agent): **76.4%** (Meta card; Kimi K3 85.0, GLM 5.3 83.9, Beam 80.1)
- Tau3-Banking: no verified public score found; Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39** at launch on the v4.3 scale (xhigh; 11th of 121 comparable open-weight models, "well above average among comparable models, median 19"; ~143 tok/s, $0.84 per index task, 110M tokens to run the index). On the rebuilt harder v5.0 scale, ModelCap's 2026-11-03 snapshot records **24.9** (#59 of 91) — a scale rebase, not a contradiction (v5.0 launched with Gemini 4 Carbon)
- Vals Index: **46.61%** — #39 of 50 (Vals AI; cost ~$4.08/test, >1h latency at xhigh via Together AI)
- HLE-Diamond (no tools): **26.1%** (Meta card — best of the open set; Kimi K3 22.2, Qwen3.8 17.3, GLM 5.3 16.4)
- HLE (with tools): **61.0%** (Meta card; GLM 5.3 62.5)
- AA Omniscience: **25** (Meta card — best of the set; Kimi K3 20, GLM 5.3 14)
- GPQA Diamond: **89.0%** (Meta card; Kimi K3 / Qwen3.8 93.5, GLM 5.3 91.7)
- SciCode: **58.5%** (Meta card)
- CritPt / LCR / MRCR: no verified public score found

Coding:

- Vibe Code Bench v1.1 (Vals): **76.19% ±3.32** (vs Gemini 3.5 Flash 48.68% — Vals comparison page)
- DeepSWE 1.1 (preferred harness): **60** (Meta card; Kimi K3 68, GLM 5.3 67, Qwen3.8 57)
- SWE-Atlas-QnA (preferred harness): **58** (Meta card; Kimi K3 66, GLM 5.3 59)
- Terminal-Bench 2.1: **76.4%** (Meta card, as above); Terminal-Bench 4.0: **6.57% / ~8.1%** (Vals/AA independent — the model's clearest coding weakness)
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found

Multimodal (all Meta card, w/ tools):

- ZeroBench: **50.0** (table lead; Kimi K3 41.0)
- BabyVision: **80.2** (Kimi K3 85.7)
- SimpleVQA: **73.6** (table lead; Kimi K3 71.9)
- WorldVQA: **49.4** (Kimi K3 51.0)
- IntPhys2: **68.3** (table lead; Kimi K3 60.3)
- VideoMMEv2: **61.5** (Kimi K3 65.4)

Safety (Meta card, lower is better): StrongREJECT v2 adaptive **0.5** (vs 62.9–86.4 for peers) and FORTRESS ARS 5.8 / ORS 17.4 — strongest safety profile in its comparison table.

### Normalized scores (1–100)

- **Tool use: 82/100.** Table-leading MCP-Atlas 89.2 and JobBench 61.8, OSWorld-Verified 80.4, Harvey LAB #2 (25.0%) and Finance Agent v2 #3/80 make it a first-rank open agentic model — capped by GDPval-AA v2 1401 (well under the ~1750 frontier bar), Toolathlon trailing Kimi K3, and the TB4.0 independent collapse (6.6–8.1%).
- **Reasoning: 75/100.** GPQA Diamond 89.0 just under the 90% frontier reference and HLE w/tools 61.0 far past the 40% bar, with best-of-open-set HLE-no-tools (26.1) and AA-Omniscience (25) — but AA Index 39 (v4.3; ~25 on the v5.0 rebase) sits between the mid band and the 60+ frontier band, and every reasoning row is Meta-reported.
- **Context window: 95/100.** Official 1M-token window (config-verified 1,048,576) with multimodal tokens in the same window — top tier; no published MRCR/RULER-style retrieval score blocks a higher mark, and Groq's 131K preview + 943,718 route output cap are minor caveats.
- **Multimodal: 92/100.** Native text+image+video+audio input with a dedicated Perception Encoder, leading 3 of 6 multimodal rows in its peer table (ZeroBench 50.0, SimpleVQA 73.6, IntPhys2 68.3) — text-only output and second place to Kimi K3 on BabyVision/WorldVQA/VideoMMEv2 keep it out of the high 90s.
- **Coding: 76/100.** SciCode 58.5 clears the 55% frontier reference and Vibe Code Bench 76.2% is solid, but DeepSWE 60 and TB2.1 76.4 sit below the frontier refs (74%/85%) and the independent TB4.0 results (~6.6–8.1%, #41/50 on Vals) versus 33.3% for Meta's own hosted 1.3 make sustained terminal coding its weakest area — "an agent and vision model first, a coder second."
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M is the methodology's exact ~88 reference point, with cached input at $0.15 and 50% batch pricing on Fireworks; open weights add self-host value. Capped by AA's note that it is "particularly expensive" vs similar-size open models (DeepSeek V4.1 Flash matches its index score at ~$0.27-equivalent pricing) and Harvey-LAB runs costing $13.63/test in tokens.
- **Overall Score: 84/100.** (82 + 75 + 95 + 92 + 76) / 5 = 84.0 → 84. Best-fit recommendation: the strongest US open-weight choice for multimodal agents and regulated-domain tool work (legal/finance leads) with full self-host rights — pair it with a stronger terminal coder for sustained software engineering.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-04
- Method: public internet research (official Meta research blog + Hugging Face model card/blog, plus independent evaluations from Artificial Analysis, Vals AI (HLAB v1.1, Legal Research Bench, Vals Index, model comparison), ModelCap, VentureBeat, SiliconANGLE, The New Stack, Fireworks, Dbggr, eesel, capitalandcompute, o-mega, AIMachineVS; conflicting figures compared and same-harness sources preferred, AA v4.3→v5.0 scale change reconciled); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Muse Spark Open — Meta AI Research (official announcement)](https://research.meta.ai/blog/muse-spark-open)
  - [Muse Spark Open model card — Hugging Face (architecture, benchmarks, license)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Muse Spark Open: open-weight frontier multimodal MoE — Hugging Face blog](https://huggingface.co/blog/meta-muse-spark-open)
  - [VentureBeat — Meta unveils Muse Spark Open, the new top U.S. open weights model](https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops)
  - [SiliconANGLE — Meta releases 816B-parameter Muse Spark Open](https://siliconangle.com/2026/10/15/meta-releases-816b-parameter-muse-spark-open-for-coding-and-agent-work/)
  - [The New Stack — Meta ships Muse Spark Open (license terms)](https://thenewstack.io/meta-muse-spark-open/)
  - [Fireworks AI — Muse Spark Open day-0 launch post (legal/finance claims)](https://fireworks.ai/blog/meta-muse-spark-open)
  - [Vals AI — Harvey Legal Agent Benchmark (HLAB) v1.1 leaderboard](https://www.vals.ai/benchmarks/hlab)
  - [Vals AI — Legal Research Bench leaderboard](https://www.vals.ai/benchmarks/legal_research)
  - [Vals AI — Gemini 3.5 Flash vs Muse Spark Open comparison](https://www.vals.ai/comparisons/google_gemini-3.5-flash-vs-meta_muse-spark-open)
  - [o-mega — Muse Spark Open: benchmarks, license, how to run (independent round-up)](https://o-mega.ai/articles/muse-spark-open-benchmarks-license-how-to-run-it-2026)
  - [ModelCap — Muse Spark Open (v5.0-scale snapshot, providers)](https://modelcap.ai/model/meta-muse-spark-open)
  - [Dbggr — Muse Spark Open API price, context window and benchmarks](https://dbggr.dev/models/muse-spark-open/)
  - [eesel — Muse Spark Open review: benchmarks, pricing](https://www.eesel.ai/blog/meta-muse-spark-open-review)
  - [capitalandcompute — Muse Spark Open pricing, benchmarks, hardware](https://capitalandcompute.net/blog/muse-spark-open-pricing-benchmarks/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
