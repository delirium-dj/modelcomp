- Source: Thinking Machines Lab/Inkling 2 Small
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small
- **Short description:** Thinking Machines Lab's 2026-11-05/06 second-generation model, a 594B/17B-active successor to Inkling-Small, built for long autonomous agentic runs, agentic coding, vision, knowledge work and reasoning. A distinct model; `Inkling` (975B/41B) and `inkling-small` (276B/12B) are separate tracked folders. Per the project identity roster, `fledge-alpha` is a revealed stealth alias of this model (folder renamed to `inkling-2-small`) and is never scaffolded again.
- **Provider / access:** Tinker platform / Tinker Playground while weights are pending; Apache 2.0 full weights planned after external safety and red-team testing (explicitly not yet released at launch).
- **Release / knowledge:** 2026-11-05 (Baike) / 2026-11-06 (press) — both reported; knowledge cutoff: no verified public score found.
- **IDs:** `inkling-2-small` family ID as cited; stealth alias `fledge-alpha` (revealed, never a folder). No free Zen ID verified.
- **Context window:** **1,000,000 tokens** after context extension in late pretraining; unified-RL runs used **256K context with context compression**.
- **Modalities:** text and image in, text out; variable thinking effort; visual-creation demos (city simulator, Linux PC simulator, origami scenes, floor-plan 3D walkthrough), interactive app development, system simulation, 3D scene construction. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. Apache 2.0 weights will allow free self-hosting once released.
- **Architecture:** MoE, **594B total / 17B active** (predecessor Inkling-Small: 276B/12B). Four-stage pretraining: **8.4T tokens** (68h NVFP4 on GB300 NVL72), then **3.8T** high-quality tokens, then **~354B** reasoning/agent trajectories with context extended to 1M; **9 days** of unified RL on **2,048 GPUs**, **1,075 steps**, **>17 million trajectories**. Post-training used reasoning traces sampled from Moonshot's Kimi K3. DeepSeek-V3.2 sparse-attention forward/backward operators sped up **6.02x**.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **46%** (up from Inkling-Small's **5%**)
- AA-Briefcase Elo: **1527** (from **912**); rule pass rate **50%** (from **20%**)
- Agentic coding: FrontierCode 2.0 **25.4%** (from **5%**)
- HLE-Diamond: **29%** (from **12%**)
- AA-3D Elo: **1021** (Muse Spark 1.3 max 1033, Gemini 3.8 Flash 966); Code2Video-AA Elo **1020** (Gemini 3.8 Flash 899)
- Autonomous fine-tuning demo: wrote its own eval, prepared data, compared training schemes and fixed errors, completing a Qwen3.5-4B fine-tune in **4h17m**, cutting prediction error **~15%** on unseen data
- Reliability: hallucination rate **61% → 27%**, answer rate **77% → 53%**, accuracy **32% → 34%**; **~150,000 output tokens per task** (4x the predecessor's 37K, vs Sonnet 5.5 medium 31K and Gemini 3.8 Flash high 99K) — a documented cost caveat
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0.1: **31** (from Inkling-Small's **13**, +18), tied with Gemini 3.8 Flash (high), ~#4 on the AA open-weight board; AA said it would become "the highest-scoring open-weight model outside China"
- Open-weight board context: Kimi K3.1 Pro 46, DeepSeek V4.1 Flash 33, GLM-5.3 32, MiMo-V2.6-Pro 30, Mistral Large 4 26, Muse Spark Open 25 — comparison rows under other IDs, labelled
- GPQA Diamond / LCR / CritPt / Omniscience: no verified public score found

Coding:

- FrontierCode 2.0 **25.4%**, AutomationBench-AA **46%**, Code2Video-AA **1020 Elo** as above
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M context with context compression for long tasks (256K in RL); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** AutomationBench-AA 46% (9x its predecessor), AA-Briefcase 1527 Elo with a 50% rule pass rate, and a 4h17m autonomous fine-tuning run; capped by ~150K output tokens per task and no τ-bench/OSWorld figure.
- **Reasoning: 84/100.** AA index 31 (tied with Gemini 3.8 Flash high) and HLE-Diamond 29%; capped by 31 being mid-pack and no GPQA/ARC figure.
- **Context window: 92/100.** A 1M-token context with explicit context compression for long autonomous tasks; capped by no long-context retrieval benchmark.
- **Multimodal: 89/100.** Image input with AA-3D 1021 and Code2Video-AA 1020 Elo (beating Gemini 3.8 Flash) plus 3D/interactive creation demos; capped by text-only output, no verified audio/video input, and no standard image benchmark.
- **Coding: 85/100.** FrontierCode 2.0 25.4% (from 5%), 46% AutomationBench and strong code-to-video results; capped by no SWE-bench / Terminal-Bench figure.
- **Cost efficiency: 85/100.** 17B active params, planned Apache 2.0 weights and a 6.02x operator speedup; capped by ~150K output tokens/task (4x the predecessor) and weights not yet released. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 89, 84, 92, 89, 85 = 87.8 → 88. Best fit: open-weight autonomous agentic coding, 3D/visual creation and long-horizon research workflows once the Apache 2.0 weights land; validate per-task token cost first.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Inkling 2 Small article (full four-stage pretraining and RL details, 594B/17B, 1M context, complete before/after benchmark table, reliability and token-cost figures, weight-release status), plus the Baidu Baike Inkling article (already fetched) for the predecessor-generation identity. Comparison rows measured under other model IDs (Muse Spark 1.3, Gemini 3.8 Flash, Kimi K3.1 Pro, DeepSeek V4.1 Flash, GLM-5.3, MiMo-V2.6-Pro, Mistral Large 4, Muse Spark Open) are labelled by harness/ID and never merged. Identity handling follows the project's generated roster: `fledge-alpha` is a revealed stealth alias of this model and is never re-scaffolded; `Inkling` and `inkling-small` are separate folders. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Inkling 2 Small — 百度百科 (architecture, full benchmark table, reliability, weights status)](https://baike.baidu.com/item/Inkling%202%20Small/69626551)
  - [Inkling — 百度百科 (predecessor generation identity, already fetched)](https://baike.baidu.com/item/Inkling/68740331)
