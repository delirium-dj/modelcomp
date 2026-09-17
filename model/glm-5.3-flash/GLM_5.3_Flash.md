# GLM 5.3 Flash — findings by GLM 5.3 Flash

- Source: Z.AI / Zhipu AI (`glm-5.3-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (marketed "GLM 5.3 Flash"; no Free-tier suffix on Zen)
- **Short description:** Z.ai's cost-efficient, first natively multimodal GLM-5 model — a 320B-total/18B-active open-weights MoE (MIT) aimed at coding agents, long-horizon tool work, and document/chart/video understanding. Revealed 2026-08-26 as the resolved identity of the anonymous stealth model "Ox Alpha"; treat the separate `ox_alpha` entry as the same weights behind the stealth/preview slots, not a distinct model.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions, `https://opencode.ai/zen/v1/chat/completions`); Z.ai API platform (`https://docs.z.ai/guides/llm/glm-5.3-flash`); OpenRouter `z-ai/glm-5.3-flash`; ~18 API providers per Artificial Analysis. Self-host day-one via SGLang, vLLM, TokenSpeed, KTransformers, Transformers, Unsloth (datacenter-class — 320B MoE).
- **Release / knowledge:** 2026-08-26 public release (Hugging Face repo created 2026-08-25; ran anonymously as "Ox Alpha" ~6 days; Z.ai confirmed the GLM lineage to Bloomberg at 09:00 UTC on 2026-08-26 and the OpenRouter entry landed 13:59 UTC the same day). Knowledge cutoff not stated in sources consulted. GLM-5 technical report: arXiv 2602.15763.
- **IDs:** `opencode/glm-5.3-flash` (Zen, paid), `zhipuai/glm-5.3-flash` (models.dev canonical), `z-ai/glm-5.3-flash` (OpenRouter), `zai-org/GLM-5.3-Flash` (HF). **No `glm-5.3-flash-free` ID exists on Zen** — verified against the live catalog `https://opencode.ai/zen/v1/models` on 2026-09-17; the legacy stealth slot "Ox Alpha Free (Unlimited)" `x-preview-f-free` ($0, 1M ctx) is believed to serve these weights but is not a named GLM-5.3-Flash ID.
- **Context window:** 1,048,576 tokens total; 131,072 max output — verified via the models.dev OpenCode Zen entry and LLMReference (2026-09-17); Artificial Analysis also lists 1M. Stealth-window community needle tests held retrieval to ~934K tokens (CellCog), and Z.ai's own NL2Repo evaluations run under the full 1M context (HF footnotes), so the native window is credibly usable.
- **Modalities:** text + image + video (+ document/file) input, text output (HF `pipeline_tag: image-text-to-text`; Z.ai describes it as the first natively multimodal GLM-5; AA lists text+image; no verified audio input; no image/audio/video generation). Reasoning: yes — hybrid thinking with `reasoning_effort` low/high/max (default `max`; benchmarks reproduced at `max`). Tool calls: yes; structured output and prompt caching: yes (Zen/models.dev capability flags).
- **Pricing (as of 2026-09-17):** paid only — $0.15 in / $0.50 out / $0.03 cached per 1M tokens (Z.ai list; Zen/models.dev route $0.15/$0.50; AA blended ≈$0.10/M at 7:2:1 cache/input/output). The 50% launch promo ($0.075/$0.25) ended 24:00 on 2026-09-09 SGT; cached-input storage still marked limited-time free; included in the GLM Coding Plan with 3× quota. Cost scored on paid pricing (no $0 Zen ID), like GLM 5.1 and MiniMax M2.7.
- **Architecture:** open weights, MIT license (HF `zai-org/GLM-5.3-Flash`, ungated). 320B total / 18B active MoE; 288 routed experts + 1 shared expert, top-8 routing, 45 layers; hybrid sparse + linear attention (Gated DeltaNet-style "KDA" linear layers + sparse full-attention layers) cutting attention compute ~3.01× and KV cache ~4.44× vs GLM-5.3 (Z.ai claim); Manifold-Constrained Hyper-Connections (mHC) on top of routing; freshly trained on a 30T-token multimodal corpus.

### Raw benchmarks found

> Z.ai chart values are vendor-reported (harnesses noted); independent/composite scores carry their own source. Missing suites are marked explicitly, never invented. Serving speed context: 113.7 tok/s output, TTFT 2.34 s on Z.ai's route per AA's 2026-09-17 snapshot (an earlier late-August AA snapshot measured ~50 tok/s per EdenAI) — and high verbosity: 180M output tokens across Index evals vs a 140M median (AA).

Agent / tool use:

- Terminal-Bench 2.1 (agentic development, max effort + tools): **84.3%** (Z.ai chart via Benchgen/LLMReference/EdenAI; LLMLearner rank 19/110; vs Opus 4.8 85.0, GPT-5.6 Terra 87.4, Gemini 3.7 Flash 85.8, GLM-5.2 81.0)
- Terminal-Bench 4.0 (thinking + tools): **32.8** (LLMLearner, rank 8; AA Index v4.3 component suite)
- Toolathlon Verified (tool orchestration, max + tools): **78.4** (Z.ai chart — leads its comparison set; LLMLearner rank #1/11; vs Opus 4.8 76.2, DeepSeek V4 Vision-Exp 75.9, GPT-5.6 Terra 74.9, GLM-5.2 59.9)
- AutomationBench v1.0.6 (max + tools): **48.8%** (Z.ai chart, +22.6 pts over GLM-5.2's 26.2; caveat: v1.0.6 includes a null-handling fix that raises scores vs pre-fix versions — Benchgen excludes it pending version reconciliation; Gemini 3.7 Flash 52.3)
- Agents' Last Exam (CLI, max + tools): **26.3%** (Z.ai chart; trails Opus 4.8 27.3, GPT-5.6 Terra 27.0, Gemini 3.7 Flash 28.0; LLMLearner rank 12/17)
- GDPval-AA v2 (max + tools): **1773 Elo** (Z.ai chart via EdenAI/Benchgen — above GLM-5.3 flagship's 1769 and Muse Spark 1.3's ~1754; note: LLMLearner lists 1655 Elo, rank 7/51, under its legacy-default harness — harness discrepancy, both cited)
- Tau3-Banking (thinking + tools): **47.2%** (LLMLearner, rank 9)
- Tau2-Bench / OSWorld: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (Toolathlon Verified above is the closest measured proxy)

Reasoning / knowledge:

- GPQA Diamond (thinking, no tools): **91.2%** (LLMLearner, rank 35/254)
- HLE (max effort, with tools; full set, ≤300K managed context, GPT-5.6-luna (medium) judge per HF footnote): **55.3%** (Z.ai via LLMReference/Benchgen/EdenAI; LLMLearner rank 17/218; vs Opus 4.8 57.9, DeepSeek V4 Vision-Exp 55.1, GLM-5.2 54.7)
- LCR / MLCR: no verified public score found (AA-LCR v1.1 is an AA Index v4.3 component; the individual value was not published on the pages consulted)
- CritPt (thinking, no tools): **15.4%** (LLMLearner, rank 27/118)
- FrontierMath v2 / FrontierMath Tier 4 v2: **55.8% / 17.1%** (LLMLearner, ranks 26/43 and 28/41)
- SimpleBench (commonsense, no tools): **55.1%** (LLMLearner, rank 43/90)
- Artificial Analysis Intelligence Index: **57** (EdenAI citing AA, 2026-08-27 — the scale comparable with this repo's other entries: GLM-5.3 flagship 60, Claude Opus 5 63, GPT-5.6 Sol 61, Muse Spark 1.3 ~61). AA's live page (2026-09-17) shows **42** under the rescaled v4.3 index — open-weight class rank **#3/113**, class median 18. The two scales are not interchangeable; the 57 is used for cross-model anchoring here.
- BenchLM overall: **66/100, rank #33/232** (as of 2026-09-17; strongest eligible category Multimodal & Grounded, #10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA-Omniscience is an Index component; individual value not published on the pages consulted)

Coding:

- DeepSWE v1.1 (max + tools): **63.4%** (Z.ai chart, +17.2 pts over GLM-5.2's 46.2 and above Opus 4.8's 58.0; LLMLearner rank 18/37; independent datapoint: a stealth-window community run resolved 58.4% on 113 tasks under a leaner harness)
- NL2Repo (repository engineering at 1M context, temp 1.0, 64K gen per HF footnote): **56.3%** (Z.ai chart; LLMLearner rank 10/16; vs Opus 4.8 69.7, GLM-5.2 48.9)
- Z.ai Code Bench v1.0: **29.0%** (Z.ai chart; Opus 4.8 29.5 — near parity)
- SciCode (thinking, no tools): **51.6%** (LLMLearner, rank 29/83)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found (Z.ai Code Bench above is the closest vendor-suite proxy)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found
- Context Arena (memory & persistence, high thinking): **79.5** (LLMLearner, rank 22/49)
- Corroborating the 1M window: stealth-window needle tests held to ~934K tokens (CellCog) and Z.ai's NL2Repo evaluated under full 1M context (HF footnote) — real long-context retrieval, not just a spec-sheet number.

### Normalized scores (1–100)

> Derived from the raw numbers above per the methodology in `../../model-comparison.md`. Overall Score = mean of the six.

- **Tool use: 92/100.** Terminal-Bench 2.1 84.3% (≈ Opus 4.8's 85.0), Toolathlon-Verified 78.4 leads its set (#1/11), GDPval-AA v2 1773 Elo tops flagship-adjacent company, τ³-Banking 47.2 sits just under Muse-class ~50. Capped by Agents' Last Exam 26.3 trailing frontier closed models and the absence of verified Tau2/OSWorld/Claw scores.
- **Reasoning: 85/100.** HLE with tools 55.3% (17/218) and GPQA Diamond 91.2% are elite for an open model; AA Index 57 on the comparable scale sits just below the GLM-5.3 flagship (60) and Muse Spark 1.3 (~61); BenchLM 66 (#33/232). Capped by CritPt 15.4%, last-place-tier FrontierMath Tier 4 (17.1%), and no published omniscience/hallucination evidence.
- **Context window: 100/100.** Native 1,048,576-token window (1M tier → 100) with 131,072 max output; the hybrid sparse+linear attention design exists specifically to make 1M serving cheap; ~934K needle retention and 1M-context NL2Repo runs confirm usable depth, not headline-only.
- **Multimodal: 85/100.** First natively multimodal GLM-5: text+image+video+document in, text out — strong on documents/charts/video (OfficeQA Pro 62.4 leads its set, CharXiv 89.4, Chartography 78.0, MMVU 80.5, MVbench 77.8; BenchLM's strongest category). Capped by last-place BabyVision 53.4 in its comparison set, no verified audio input, and text-only output; below omni-tier (95), far above text-only (15).
- **Coding: 90/100.** DeepSWE v1.1 63.4% beats Opus 4.8 (58.0), TB 2.1 84.3% is frontier-adjacent, SciCode 51.6%, Z.ai Code Bench 29.0 ≈ Opus 29.5, and NL2Repo 56.3 at full 1M context. Capped below the Muse-class 95 (DeepSWE 63.4 vs 75.4, TB 84.3 vs 88.8) and by missing SWE-bench Verified / SWE-Pro / LiveCodeBench verification.
- **Cost efficiency: 95/100.** No Zen Free ID → scored on verified paid pricing: $0.15/$0.50 ($0.03 cached) is the cheapest paid route in this comparison (vs MiniMax M2.7 $0.30/$1.20 → 90 and GLM 5.1 $1.40/$4.40 → 75); AA blended ≈$0.10/M. Not 100 because it is not $0 — it would only reach 100 if the legacy "Ox Alpha Free (Unlimited)" stealth slot (`x-preview-f-free`) is confirmed as a persistent GLM-5.3-Flash free route.
- **Overall Score: 91/100.** Mean: (92 + 85 + 100 + 85 + 90 + 95) / 6 = 547/6 = 91.2 → **91**. Best fit: the default open-weights workhorse for long-horizon coding/agentic runs and document-heavy multimodal pipelines at budget pricing; escalate to the GLM-5.3 flagship or Muse Spark 1.3 for frontier peaks, and to a $0 Free-tier slot for zero-cost jobs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-17
- Method: fresh public internet research from zero (Z.ai blog/model card, OpenCode Zen live catalog + models.dev, Artificial Analysis, BenchLM, LLMReference, LLMLearner, Benchgen, CellCog, EdenAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
