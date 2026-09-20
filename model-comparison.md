# AI Model Comparison

Purpose: structured, comparable findings about AI models researched on the internet.
Each model uses the same fields and the same 1–100 scales so new models can be added and compared directly.

- Last updated: 2026-09-17 (UTC) — v3 splits per-model details into `model/<slug>/Muse_Spark_1.3.md`
- Layout: per-model details live in `model/` (one folder per model, one file per source; see `model/README.md`). This file keeps the comparison table, methodology, caveats, sources and changelog.
- Maintainer note: scores in this file are **normalized interpretations (1–100)**, not official vendor scores. Raw benchmark numbers are listed separately with sources.
- How to add a model: create `model/<slug>/<Source_Name>.md` from the per-model template below, add a summary-table row, and sync `src/data/models.ts`.

## Comparison summary (1–100, higher is better)

| Model | Tool use | Reasoning | Context window | Multimodal | Coding | Cost efficiency | Overall Score |
|---|---|---|---|---|---|---|---|
| Big Pickle (`opencode/big-pickle`) | 55 | 60 | 70 | 15 | 70 | 100 | 62 |
| Muse Spark 1.3 Contributor (`opencode/muse-spark-1.3-contributor-free`) | 95 | 92 | 100 | 85 | 95 | 100 | 95 |
| Ling 3.0 Flash Fin Free (`opencode/ling-3.0-flash-fin-free`) | 68 | 70 | 72 | 15 | 72 | 100 | 66 |
| MiMo V2.5 Free (`opencode/mimo-v2.5-free`) — also listed as Xiaomi MiMo-V2.5 Free, same ID | 78 | 72 | 70 | 95 | 78 | 100 | 82 |
| Muse Spark 1.2 Free (`opencode/muse-spark-1.2-contributor-free`) | 90 | 88 | 100 | 90 | 88 | 100 | 93 |
| Nemotron 3 Ultra Free (`opencode/nemotron-3-ultra-free`) | 78 | 75 | 97 | 20 | 80 | 100 | 75 |
| Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`) | 50 | 62 | 72 | 15 | 58 | 100 | 60 |
| GLM 5.1 Coding (`glm-5.1` — requested as Free, no Free ID found on Zen) | 85 | 80 | 70 | 15 | 88 | 75 | 69 |
| MiniMax M2.7 (`minimax-m2.7` — requested as Free, no Free ID found on Zen) | 80 | 75 | 70 | 15 | 82 | 90 | 69 |
| Xiaomi MiMo-V2.5-Pro (`mimo-v2.5-pro` — requested as Free, no Free ID found on Zen) | 82 | 78 | 100 | 15 | 82 | 85 | 74 |

### Requested-name resolution

- `Ling 3.0Flash Fin Free` → `Ling 3.0 Flash Fin Free` (`opencode/ling-3.0-flash-fin-free`).
- `MiMo V2.5 Free` and `Xiaomi MiMo-V2.5 Free` → same Zen ID `opencode/mimo-v2.5-free` (models.dev `mimo-v2.5-free.toml`, 200K/32K cap). Listed once.
- `Muse Spark 1.2 Free` → `opencode/muse-spark-1.2-contributor-free` (listed in Zen docs dev history as Free/Free/Free; current Zen page spotlights 1.3 Free — treat 1.2 Free as prior free tier, same weights as `muse-spark-1.2`).
- `GLM 5.1 Coding Free` → no `glm-5.1-*-free` ID on Zen as of 2026-09-17. Closest is paid `opencode/glm-5.1` ($1.40/$4.40). Scored on paid pricing; cost would be 100 if a $0 promo appears.
- `MiniMax M2.7 Free` → no `minimax-m2.7-free` ID on Zen as of 2026-09-17. Closest is paid `opencode/minimax-m2.7` ($0.30/$1.20). Cost scored 90 on paid pricing.
- `Xiaomi MiMo-V2,5-Pro Free` (comma typo) → `MiMo-V2.5-Pro` (`mimo-v2.5-pro`, Xiaomi native, MIT, 1M). No Zen Free ID found. Cost scored 85 on Xiaomi platform pricing ($0.435 miss / $0.87 out, or $1.00/$3.00 routes).

`Overall Score` = rounded mean of the 5 quality dimensions: `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and never counts toward Overall (v4 methodology, 2026-09-18; tables below showing `/ 6` math are frozen v1–v3 history).

- Big Pickle: (55 + 60 + 70 + 15 + 70 + 100) / 6 = 61.7 → **62**
- Muse Spark 1.3 Contributor: (95 + 92 + 100 + 85 + 95 + 100) / 6 = 94.5 → **95**
- Ling 3.0 Flash Fin Free: (68 + 70 + 72 + 15 + 72 + 100) / 6 = 66.2 → **66**
- MiMo V2.5 Free: (78 + 72 + 70 + 95 + 78 + 100) / 6 = 82.2 → **82**
- Muse Spark 1.2 Free: (90 + 88 + 100 + 90 + 88 + 100) / 6 = 92.7 → **93**
- Nemotron 3 Ultra Free: (78 + 75 + 97 + 20 + 80 + 100) / 6 = 75.0 → **75**
- Nemotron 3.5 Lightning Free: (50 + 62 + 72 + 15 + 58 + 100) / 6 = 59.5 → **60**
- GLM 5.1 Coding (paid pricing): (85 + 80 + 70 + 15 + 88 + 75) / 6 = 68.8 → **69**
- MiniMax M2.7 (paid pricing): (80 + 75 + 70 + 15 + 82 + 90) / 6 = 68.7 → **69**
- Xiaomi MiMo-V2.5-Pro (paid pricing): (82 + 78 + 100 + 15 + 82 + 85) / 6 = 73.7 → **74**

> Cost efficiency here scores the **evaluated Free tier** on OpenCode Zen (`$0` input/output during the limited free period = 100). Paid fallback pricing is noted per model for long-term comparison.

---

## Big Pickle

Full details moved to [`model/big-pickle/Muse_Spark_1.3.md`](model/big-pickle/Muse_Spark_1.3.md).

- **Scores:** Tool 55 / Reasoning 60 / Context 70 / Multimodal 15 / Coding 70 / Cost 100 → **Overall 62**
- **One-liner:** zero-cost daily driver; escalate after 2 failures or for 1M-context jobs.

---

## Muse Spark 1.3 Contributor

Full details moved to [`model/muse-spark-1-3-free/Muse_Spark_1.3.md`](model/muse-spark-1-3-free/Muse_Spark_1.3.md).

- **Scores:** Tool 95 / Reasoning 92 / Context 100 / Multimodal 85 / Coding 95 / Cost 100 → **Overall 95**
- **One-liner:** default for long-horizon coding/agentic work when free tier available.

## Ling 3.0 Flash Fin Free

Full details moved to [`model/ling-3-0-flash-fin-free/Muse_Spark_1.3.md`](model/ling-3-0-flash-fin-free/Muse_Spark_1.3.md).

- **Scores:** Tool 68 / Reasoning 70 / Context 72 / Multimodal 15 / Coding 72 / Cost 100 → **Overall 66**
- **One-liner:** niche pick for finance + efficient execution.

---

## MiMo V2.5 Free

Full details moved to [`model/mimo-v2-5-free/Muse_Spark_1.3.md`](model/mimo-v2-5-free/Muse_Spark_1.3.md) (also covers the `Xiaomi MiMo-V2.5 Free` alias).

- **Scores:** Tool 78 / Reasoning 72 / Context 70 / Multimodal 95 / Coding 78 / Cost 100 → **Overall 82**
- **One-liner:** best free omni + balanced agent/coding.

---

## Muse Spark 1.2 Free

Full details moved to [`model/muse-spark-1-2-free/Muse_Spark_1.3.md`](model/muse-spark-1-2-free/Muse_Spark_1.3.md).

- **Scores:** Tool 90 / Reasoning 88 / Context 100 / Multimodal 90 / Coding 88 / Cost 100 → **Overall 93**
- **One-liner:** near-frontier free fallback when 1.3 Free unavailable.

---

## Nemotron 3 Ultra Free

Full details moved to [`model/nemotron-3-ultra-free/Muse_Spark_1.3.md`](model/nemotron-3-ultra-free/Muse_Spark_1.3.md).

- **Scores:** Tool 78 / Reasoning 75 / Context 97 / Multimodal 20 / Coding 80 / Cost 100 → **Overall 75**
- **One-liner:** best open orchestration/fast long-agent pick with strong honesty (low hallu).

---

## Nemotron 3.5 Lightning Free

Full details moved to [`model/nemotron-3-5-lightning-free/Muse_Spark_1.3.md`](model/nemotron-3-5-lightning-free/Muse_Spark_1.3.md).

- **Scores:** Tool 50 / Reasoning 62 / Context 72 / Multimodal 15 / Coding 58 / Cost 100 → **Overall 60**
- **One-liner:** routed executor + local single-GPU, not primary planner/coder.

---

## GLM 5.1 Coding

Full details moved to [`model/glm-5-1-coding/Muse_Spark_1.3.md`](model/glm-5-1-coding/Muse_Spark_1.3.md) (requested as Free; no Free ID on Zen, scored on paid pricing).

- **Scores:** Tool 85 / Reasoning 80 / Context 70 / Multimodal 15 / Coding 88 / Cost 75 → **Overall 69**
- **One-liner:** top paid open coding/long-horizon pick.

---

## MiniMax M2.7

Full details moved to [`model/minimax-m2-7/Muse_Spark_1.3.md`](model/minimax-m2-7/Muse_Spark_1.3.md) (requested as Free; no Free ID on Zen, scored on paid pricing).

- **Scores:** Tool 80 / Reasoning 75 / Context 70 / Multimodal 15 / Coding 82 / Cost 90 → **Overall 69**
- **One-liner:** best-value paid text coding/agent.

---

## Xiaomi MiMo-V2.5-Pro

Full details moved to [`model/xiaomi-mimo-v2-5-pro/Muse_Spark_1.3.md`](model/xiaomi-mimo-v2-5-pro/Muse_Spark_1.3.md) (requested as Free with comma typo; no Free ID on Zen, scored on paid pricing).

- **Scores:** Tool 82 / Reasoning 78 / Context 100 / Multimodal 15 / Coding 82 / Cost 85 → **Overall 74**
- **One-liner:** top open long-horizon Pro; pair with V2.5 Free when vision/audio needed.

---

## Scoring methodology (v1, 2026-09-17)

All dimensions 1–100, higher = better. Score raw benchmarks first, then normalize.

- **Tool use:** Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, OSWorld/AutomationBench, tool-call efficiency. Frontier ref: TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+ → 90–100. Mid: TB2.1 ~45–60%, Tau3 ~10–25%, GDPval ~900–1200 → 50–70. Missing Claw-Eval = note N/A, slight penalty (no hallucinated score).
- **Reasoning:** GPQA Diamond, HLE, MRCR/LCR, CritPt, Intelligence Index. Frontier ref: GPQA 90%+, HLE 40%+, MRCR 95%+ to 1M, Index 60+ → 90–100. Mid: GPQA 60–80%, HLE <10%, LCR <40%, Index 20–35 → 55–65.
- **Context window:** tiered. ≥1M = 95–100 (100 if ≥98% retrieval at 512K+). 500K–1M = 85–94. 200K–500K = 65–84 (200K = 70). 100K–200K = 50–64. <100K scales down to 10–49. Max output <64K noted as caveat, not separate score.
- **Multimodal:** text-only = 10–20. +image in = 60–70. +video/PDF in = 75–90. +audio in or any non-text out = 90–100. This file: Big Pickle 15, Muse 85.
- **Coding:** SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode, SWE-Atlas, Terminal-Bench. Frontier ref: DeepSWE 74%+, TB2.1 85%+, SciCode 55%+, Coding Index 70%+ → 90–100. Mid: LiveCode 80% but Vibe <10% and SciCode <40% → 65–75.
- **Cost efficiency:** inverse pricing on evaluated tier. $0 = 100. ~$0.10/$0.20 = 97–99. ~$0.60/$2.20 = ~92. ~$1.25/$4.25 = ~88 (adjusted + for $0.55/task Pareto lead). $3/$15 = ~60. $10/$50 = ~30. Free tiers flagged as time-limited + training-data caveat.
- **Overall Score:** arithmetic mean of the 5 quality dimensions (Cost excluded since v4, 2026-09-18), rounded to integer. Equal weight v1 — revisit if team wants coding/tool-use weighted higher for agent use-case.

## Caveats

- `Big Pickle` is stealth — vendor has not disclosed weights. Scores combine direct `big-pickle` evals (SWE-Atlas 50.8%, Zen specs) with `glm-4.6` proxy benchmarks. Re-verify on `https://opencode.ai/zen/v1/models` — stealth models can be swapped without notice.
- `Muse Spark 1.3 Contributor` shares weights with standard 1.3; difference is pricing + training-data consent. Do not use Free tier for confidential code.
- No verified public **Claw-Eval** scores were found for either original model ID as of 2026-09-17. Do not compare Claw-Eval until both have same-harness numbers.
- Benchmark sources disagree on some GLM-4.6 numbers (e.g., Tau2 70.5% vs 76.9%, GPQA 63.2% vs 0.81) due to harness/version differences — both listed where found.
- v2 notes: `MiMo V2.5 Free` Zen cap is 200K/32K (native 1M — use native endpoint for 1M work). `Ling Fin Free` has vendor “strong” claims without public numbers — scored provisionally. `Nemotron Lightning` 262K native (1M extended per some trackers — scored 262K). `GLM 5.1`, `MiniMax M2.7`, `MiMo-V2.5-Pro` have **no Zen Free ID** — cost scored on verified paid pricing; overall would rise ~1–4 pts at $0. `MiMo V2.5` vs `Pro`: V2.5 = omni (95 multimodal), Pro = text-only long-horizon (15 multimodal, 100 context). Tau3 numbers vary by harness (AA vs RankedAGI vs vendor) — harness listed per score.

## Sources

- OpenCode Zen docs (endpoints, pricing, free-tier + privacy notes, model IDs) — https://opencode.ai/docs/zen — verified 2026-09-17
- models.dev `big-pickle.toml` (200K context, 32K out, tool_call, text-only) — https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/big-pickle.toml
- Pi models `big-pickle` (200K / 32K / $0) — https://pi.dev/models/opencode/big-pickle
- Community skill `big-pickle.md` (GLM-4.6 consensus, Sonnet-class, 200K/32K, exit plan) — https://github.com/AftabIbrahimKazi/inkwake/blob/master/skills/models/opencode/big-pickle.md
- Grokipedia `Big Pickle model` (OpenCode Zen coding agent, GLM-4.6 consensus) — https://grokipedia.com/page/Big_Pickle_model
- Big Pickle SWE-Atlas direct eval 50.8% (63/124) — https://github.com/PhillipChaffee/big-pickle-swe-atlas
- GLM-4.6 agent/coding table (Together AI) — https://www.together.ai/models/glm-4-6
- BenchmarkList `z-ai-glm-4.6` (TB 2.1 49.4%, Tau3 10.5%, GDPval 934, SciCode 38.4%, LiveCode 81.0%, Vibe 3.1%) — https://benchmarklist.com/models/z-ai-glm-4.6
- BenchLM `glm-4-6` (overall 53.94 #107/411, τ² 76.9%, Vibe 3.09%, LCR 28.3%, HLE 5.5%, GPQA 63.2%) — https://benchlm.ai/models/glm-4-6
- ApX `GLM-4.6` (357B MoE, 200K, SWE-bench 0.68, GPQA 0.81, MMLU Pro 0.82) — https://apxml.com/models/glm-46
- ModelScope GLM-4.6 summary (128K→200K, coding/reasoning/agent gains) — https://www.modelscope.cn/models/ZhipuAI/GLM-4.6/summary
- Meta Research `Introducing Muse Spark 1.3` (2026-09-02, agentic/coding focus, 20% fewer calls, 25% fewer tokens) — http://research.meta.ai/blog/introducing-muse-spark-1-3
- kie.ai `What Is Muse Spark 1.3?` (1M context, $0.10/$0.20 Contributor vs $1.25/$4.25 Standard, IDs) — https://kie.ai/blog/what-is-muse-spark-1-3
- Artificial Analysis `Muse Spark 1.3: Meta reaches the frontier` (Index 61/62, Tau3 47%/52%, TB 85%/86%, GDPval 1709/1754, $0.55/task) — https://artificialanalysis.ai/articles/muse-spark-1-3
- Artificial Analysis model page `Muse Spark 1.3 (xhigh)` (1M, text/image/video in, $1.25/$4.25, 165 tok/s) — https://artificialanalysis.ai/models/muse-spark-1-3-xhigh
- BenchLM `muse-spark-1-3` (TB 88.8%, GDPval 1754, Tau3 50.5%, DeepSWE 75.4%, SWE-Atlas 59.4%, SciCode 58.8%, MRCR 98.5%/98.1%, LCR 83%, GPQA 93.5%, HLE 48.7%) — https://benchlm.ai/models/muse-spark-1-3
- Vercel AI Gateway changelog (1M, PDF input, Contributor = same weights, pricing table) — https://vercel.com/changelog/muse-spark-1-3-now-available-on-ai-gateway.md
- DataCamp / ExplainX / News.az summaries (MRCR table, DeepSWE 75.4 > Opus 74.0, TB 88.8 tie) — https://www.datacamp.com/pl/blog/muse-spark-1-3 and https://www.explainx.ai/blog/meta-muse-spark-1-3-launch-benchmarks-pricing-september-2026
- Terminal-Bench leaderboards (TB 4.0 / 2.0 context) — http://www.tbench.ai/ and https://benchlm.ai/benchmarks/terminalbench21
- OpenCode Zen current Free list (Big Pickle, MiMo-V2.5 Free, Ling Fin Free, Nemotron Ultra/Lightning Free, Muse 1.3 Contributor Free; paid glm-5.1, minimax-m2.7) — https://opencode.ai/docs/zen + https://dev.opencode.ai/docs/zen — verified 2026-09-17
- Ling 3.0-flash HF (124B/5.1B, 256K→1M, 10k envs, temp 0.6) — https://huggingface.co/inclusionAI/Ling-3.0-flash and Fin variant — https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin
- Pi Ling Fin Free (262,144/32,768, text-only, $0) — https://pi.dev/models/opencode/ling-3-0-flash-fin-free — Vercel Fin Free (256K/32K, finance MoE) — https://vercel.com/ai-gateway/models/ling-3.0-flash-fin-free + changelog 2026-08-27
- BenchLM Ling 3.0 Flash (53.9 #110/228) — https://benchlm.ai/models/ling-3-0-flash — Independent Ling eval 7.0/10, 845 records — https://github.com/frangelbarrera/Ling-3-flash-evaluation
- models.dev mimo-v2.5-free.toml (200K/32K, text/image/audio/video, open_weights) — https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/mimo-v2.5-free.toml — Pi MiMo V2.5 Free (200K/32K) — https://pi.dev/models/opencode/mimo-v2-5-free
- Xiaomi MiMo-V2.5 (310B/15B, 1M, omni) — http://mimo.xiaomi.com/mimo-v2-5 and Pro (1.02T/42B, 1M) — http://mimo.xiaomi.com/mimo-v2-5-pro — HF V2.5 — https://huggingface.co/XiaomiMiMo/MiMo-V2.5
- BenchmarkList mimo-v2.5 (TB2.1 63.7%, Hard 41.7%, Tau2 90.6%, GDPval 1148, SWE 71%, Vibe 42.2%, Index 38) — https://benchmarklist.com/models/xiaomi-mimo-v2.5 — RankedAGI mimo-v2-5 (SWE-Pro 56.1%, TB2.0 65.8%, Tau3 69.5%) — https://rankedagi.com/models/mimo-v2-5
- AA MiMo-V2.5 vs Pro (Index 38 vs 43, 1M both, Pro no image) — https://artificialanalysis.ai/models/comparisons/mimo-v2-5-0424-vs-mimo-v2-5-pro — Sophon Pro (Tau2 94.2%, GPQA 86.6%, HLE 35.7%, 1.1M) — https://sophon.at/models/mimo-v2-5-pro
- BenchLM muse-spark-1-2 (TB 82.9%, GDPval 1631, DeepSWE 59.3%, GPQA 90.4%, HLE 45.5%, 71.88 #11) — https://benchlm.ai/models/muse-spark-1-2 — AA 1.2 article (GDPval +260, TB +2, Tau3 +2) — https://artificialanalysis.ai/articles/muse-spark-1-2 — Benchgen 1.2 (MCP Atlas 90.3%) — https://benchgen.com/models/meta/muse-spark-1-2
- NVIDIA Nemotron 3 Ultra blog (550B/55B, 5× throughput, GDPVal 1448, TB2.0 54%, RULER 95%) — https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents — build.nvidia card (TB2.1 56.4, SWE 71.9, Tau V3 Airline 81.5 Retail 86.4, GPQA 87, LCR 65.4) — https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b — AA Ultra 38 / article Elo 1378 — https://artificialanalysis.ai/articles/nvidia-nemotron-3-ultra-released
- NVIDIA Nemotron 3.5 Lightning blog (30B/3B, execution layer) — https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents — NIM docs 262,144 ctx, text-only — https://docs.nvidia.com/nim/large-language-models/2.0.10/get-started/advanced/get-started-nemotron-3.5-lightning.html — build.nvidia card (SWE 51.56, TB 24.58, Tau3 9.28, GDPval 832, GPQA 75.44) — https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b
- Z.ai GLM-5.1 blog (SWE-Pro 58.4, TB2.0 63.5/69.0, Tau3 70.6, HLE 31/52.3 tools, GPQA 86.2) — https://z.ai/blog/glm-5.1 — HF zai-org/GLM-5.1 — https://huggingface.co/zai-org/GLM-5.1 — AA GLM-5.1 (Index 32, 200K, $1.20/$4.40) — https://artificialanalysis.ai/models/glm-5-1
- MiniMax M2.7 official (SWE-Pro 56.22%, TB2 57%, GDPval 1495, Toolathon 46.3%, MM Claw 62.7%) — https://www.minimax.io/models/text/m27 — HF MiniMaxAI/MiniMax-M2.7 — https://huggingface.co/MiniMaxAI/MiniMax-M2.7 — Groq docs (229B/10B, 196K, SWE-Pro 56.2% TB2 57% VIBE 55.6%) — https://console.groq.com/docs/model/minimaxai/minimax-m2.7 — LLMRef M2.7 (205K, $0.279/$1.20, text-only) — https://www.llmreference.com/model/minimax-m2.7

## Per-model template (copy for new models)

```markdown
## <Model Name>

- **Name:**
- **Short description:**
- **Provider / access:**
- **Release / knowledge:**
- **IDs:**
- **Context window:**
- **Modalities:**
- **Pricing:**

### Raw benchmarks found
- Terminal-Bench:
- Tau3 / Tau2:
- Claw-Eval:
- GDPval / OSWorld / Automation:
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index):
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas):
- Cost per task / speed (if available):

### Normalized scores (1–100)
- **Tool use: /100.**
- **Reasoning: /100.**
- **Context window: /100.**
- **Multimodal: /100.**
- **Coding: /100.**
- **Cost efficiency: /100.**
- **Overall Score: /100.**
```

## Changelog

- 2026-09-17: created file, added Big Pickle and Muse Spark 1.3 Contributor with v1 methodology.
- 2026-09-17: v2 — added Ling 3.0 Flash Fin Free, MiMo V2.5 Free (= Xiaomi MiMo-V2.5 Free duplicate), Muse Spark 1.2 Free, Nemotron 3 Ultra Free, Nemotron 3.5 Lightning Free, GLM 5.1 Coding (no Free ID, paid pricing), MiniMax M2.7 (no Free ID, paid pricing), Xiaomi MiMo-V2.5-Pro (no Free ID, paid pricing). Updated summary, calculations, caveats, sources.
- 2026-09-17: v3 — split per-model details into `model/<slug>/Muse_Spark_1.3.md` (one folder per model, one file per source; see `model/README.md`). This file keeps the table, methodology, caveats, sources and changelog.
- 2026-09-18: v4 — Cost efficiency excluded from Overall Score everywhere (source files and averages); Overall = mean of the five quality dimensions. Comparison table and per-model sections above remain frozen v1–v3 history; live scores come from `model/<slug>/average.md`.
