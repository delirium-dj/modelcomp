# Muse Wonder — findings by Step 5 Preview

- Source: Meta/Muse Wonder
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Artificial Analysis labels the max-reasoning-effort configuration "Muse Wonder (Max)"; it is the same model — Muse Wonder Full is the separate, larger sibling)
- **Short description:** Meta Superintelligence Labs' first frontier-class model, released 2026-10-12 together with Muse Wonder Full; built for personal and professional agentic tasks (Active Memory, Active Focus), with the stronger Full variant reserved for Muse Code subscribers.
- **Provider / access:** Meta Model API (`dev.meta.ai`) and Muse Code; on OpenCode Zen as `opencode/muse-wonder-1.0` via the Responses API (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** 2026-10-12; knowledge cutoff not published.
- **IDs:** `opencode/muse-wonder-1.0` (Zen, Responses API); Meta first-party API model ID not published in the sources reviewed.
- **Context window:** 1,000,000 tokens total (Artificial Analysis model page and multiple launch reports agree; max output tokens not published).
- **Modalities:** in — text, image, audio/speech, video, documents/PDF; out — text. Reasoning model (extended thinking); tool use + computer/browser use demonstrated; JSON mode not documented in sources reviewed.
- **Pricing (as of 2026-10-31):** $4.00 per 1M input / $0.20 per 1M cached input (95% cache discount) / $20.00 per 1M output on Meta's API — identical on OpenCode Zen. Artificial Analysis measures $4.52 per Intelligence Index task (v4.3 harness) / $6.95 (v5 page), 2.8x its predecessor Muse Spark 1.3.
- **Architecture:** proprietary; parameter count not disclosed. Trained at Meta's gigawatt-scale Prometheus data center.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **52%** (max reasoning effort) (Artificial Analysis launch article; up from Muse Spark 1.3 max at 33%)
- AutomationBench-AA: **68%** (max) (Artificial Analysis launch article; Muse Spark 1.3 max: 58%)
- AA Coding Agents Index (run inside Muse Code): **63** (max) (Artificial Analysis launch article; Full: 68, Claude Code + Sonnet 5.5 max: 68)
- GDPval-AA v2.1: no verified public score found for standard Wonder (Muse Wonder Full: 1857 Elo, #2)
- AA-Briefcase v1.1: no verified public score found for standard Wonder (Full: 1729 Elo, #3)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Meta self-reported suite (Harvey Legal Agent Benchmark, Vals Finance Agent V2, MemoryBench, FocusBench, SWE-Marathon, DeepSWE): named in Meta's blog/model card, but numeric results are published only inside image tables — no verified text values extracted

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** (v4.3, max effort) vs **43** (v5.0, rank 28 of 719 overall; #23 of 58 in the >$1/1M price class) — the two figures come from different index versions, not a contradiction (v5 launched 2026-10-27 and re-weighted the suite)
- AA-Omniscience v1.1: **25** (max); hallucination rate **27%** — third-lowest among models scoring 45+ on the Index (behind only Gemini 4 Argon 15% and Muse Wonder Full 23%)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- CritPt v2: no verified public score found for standard Wonder (Full: 33%, #1)
- Output speed 143.1 tokens/s, TTFT 30.09s (high end vs 3.71s median); ~54k output tokens per Index task (v4.3) (Artificial Analysis)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found for standard Wonder (Full: 63%, #3)
- AA Coding Agents Index: **63** (max) — see Agent/tool use above
- FrontierCode 2.0 / Terminal-Bench-Science: included in the v5 index composite but per-benchmark values not published for this model

Long context:

- 1M-token window confirmed by multiple sources; no MRCR/RULER/GraphWalks retrieval curve published — long-context retrieval quality unverified

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 4.0 52% + AutomationBench-AA 68% + Coding Agents Index 63 show strong agentic execution, clearly above the mid band; capped below the frontier band because Muse Wonder Full posts 57%/71%/68, and no GDPval-AA, AA-Briefcase, or Tau3 numbers are public for the standard model.
- **Reasoning: 78/100.** Intelligence Index 52 (v4.3) / 43 (v5.0) sits between mid and frontier; knowledge is the weak leg (Omniscience 25, well below Opus 5.5's 46) even though hallucination is low (27%); GPQA/HLE/CritPt values unpublished.
- **Context window: 95/100.** 1M tokens lands in the top tier (≥1M = 95–100); no published retrieval rate at 512K+ that would justify 100.
- **Multimodal: 88/100.** Text + image + audio + video/document input, text output — per methodology that input coverage with text-only output sits in the 85–95 band.
- **Coding: 82/100.** Coding Agents Index 63 and TB4.0 52% are solidly above mid-tier; capped because SWE-bench/LiveCodeBench/SciCode are unpublished for the standard model and the Full sibling leads at 68.
- **Cost efficiency: 58/100.** $4/$20 per 1M with $4.52 per Index task — premium tier (~$3/$15 ≈ 60 in the methodology) and 2.8x Muse Spark 1.3's cost per task.
- **Overall Score: 85/100.** Mean of (84 + 78 + 95 + 88 + 82)/5 = 85.4 → 85. Best fit: premium-priced frontier agentic model — choose it for long-horizon agent/browser work when Muse Code-style persistence matters; Muse Wonder Full (Muse Code only) or cheaper frontier routes (GPT-6.1 Sol, Gemini 4 Argon) beat it on cost.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-31
- Method: public internet research across five independent sources (Meta's own research blog, Artificial Analysis model page + launch article, Unite.AI, Kompozy, OpenCode Zen docs); conflicting figures reconciled by index version (AA v4.3 vs v5.0); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta research blog — Muse Wonder: A Frontier Model For Personal & Professional AI Agents](https://research.meta.ai/blog/muse-wonder)
  - [Artificial Analysis — Muse Wonder model page (Intelligence Index v5, pricing, speed, specs)](https://artificialanalysis.ai/models/muse-wonder)
  - [Artificial Analysis — Muse Wonder and Muse Wonder Full launch article (v4.3 benchmark details)](https://artificialanalysis.ai/articles/muse-wonder)
  - [Unite.AI — Meta Unveils Muse Wonder Series, Its Most Capable AI Models Yet](https://www.unite.ai/meta-unveils-muse-wonder-series-its-most-capable-ai-models-yet/)
  - [Kompozy — Meta Launches Muse Wonder and Muse Wonder Full](https://kompozy.io/news/meta-muse-wonder-frontier-model-launch)
  - [OpenCode Zen docs — model list and pricing](https://opencode.ai/docs/zen)
