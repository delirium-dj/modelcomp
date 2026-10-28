# Qwen 3.7 — findings by Step 5 Preview

- Source: Alibaba / Qwen 3.7 (generation entry — flagship `qwen3.7-max`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (series entry; canonical flagship SKU: Qwen3.7-Max)
- **Short description:** **Identity resolution (per `RULES.md` family-shorthand rule):** the bare name "Qwen 3.7" is Alibaba's *generation/series* designation, not a standalone SKU. Verified 2026-10-28: Alibaba Cloud Model Studio lists only suffixed 3.7 IDs (`qwen3.7-max`, `qwen3.7-plus`, `qwen3.7-flash`); no `Qwen/Qwen3.7` Hugging Face weights exist (InsiderLLM/LocalClaw repo probes return HTTP 401; the announced open mid-tier never shipped — the 3.7 generation was open-skipped in favor of Qwen3.8-27B). Every API ID, spec sheet and price for "Qwen 3.7" resolves to a tracked member folder, and the flagship that carries the 3.7 launch identity is **Qwen3.7-Max**: the official May 2026 blog "Qwen3.7: The Agent Frontier" (qwen.ai/blog?id=qwen3.7) is the Max launch, and Alibaba's own docs call Max "the largest and most capable in the Qwen3.7 series." Scores below therefore measure the flagship `qwen3.7-max`, with Plus/Flash noted as separate tracked folders (`qwen-3.7-plus`, `qwen-3.7-flash`) — never blended into these numbers.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen Cloud (DashScope-compatible, OpenAI-style API) + third-party gateways (OpenRouter `qwen/qwen3.7-max`, DeepInfra, Vercel AI Gateway, ~35-37 providers per models.dev). Chat Completions; tool calling + structured output supported.
- **Release / knowledge:** 2026-05-19/20 (AA and AI Flash Report say May 19; the Alibaba snapshot ID is `qwen3.7-max-2026-05-20`, models.dev lists 2026-05-21 — minor date conflict, all within the same launch window). Knowledge cutoff not published.
- **IDs:** `alibaba/qwen3.7-max` (Alibaba Cloud, list pricing); `qwen/qwen3.7-max` (OpenRouter and several gateways, ~$1.5-1.9/$4.4-5.6).
- **Context window:** 1,000,000 tokens total (Alibaba docs; AA; Vals AI measures 984K usable). Max output conflicts across sources: 65,536 (models.dev most providers), 131,072 in thinking mode (Alibaba docs), 66K (Vals), 33K (swfte) — output cap not consistently published.
- **Modalities:** Text in, text out — **text-only, no image/video input** (confirmed on AA's comparison pages: "Image Input Support: No"). Reasoning model (hybrid thinking/non-thinking modes per series docs); tool calls yes; structured output yes; JSON mode yes.
- **Pricing (as of 2026-10-28):** $2.50 input / $7.50 output per 1M (Alibaba list; AA blended rate $1.60/1M at 7:2:1 cache ratio; ~80% cache discount). Gateway routes undercut list ($1.475/$4.425 standardcompute, $1.88/$5.63 some Qwen routes).
- **Architecture:** Proprietary, parameter count undisclosed. Closed weights (no 3.7 open release ever shipped).

### Raw benchmarks found

> Primary sources: official Qwen3.7 launch blog (via BenchLM citations), Alibaba Cloud Model Studio docs, Artificial Analysis, Vals AI, BenchLM, DataCamp. Conflicting harness results listed side by side.

Agent / tool use:

- TAU2-bench: **94.7%** (AI Flash Report, verified 2026-09-29)
- BFCL v4 (function calling): **75.0%** (BenchLM)
- MCP Atlas: **76.4%** (AI Release Tracker, retrieved 2026-08-31)
- Terminal-Bench 2.0: **69.7%** (official Qwen3.7 blog via BenchLM; vs Qwen3.6-Plus 61.6); Kilo Code harness run: 54.6% completion at $20.65/attempt — same benchmark, different harness/agent, both reported
- Terminal-Bench 2.1 (Vals harness): **61.0%** (Vals AI leaderboard via BenchLM)
- QwenClawBench (real-user-distribution Claw agent bench, open-source): **64.3%** (BenchLM)
- Claw-Eval: **65.2%** (BenchLM)
- YC-Bench (startup simulation): **$2.08M revenue**, 2x Qwen3.6-Plus (DataCamp, citing official blog)
- GDPval-AA: **31.4%** (Artificial Analysis) / GDPval-AA Elo **886** attributed to the Plus sibling — mid-tier composite, no frontier result
- Tau3-Banking: no verified public score found
- GDPval-AA Elo for Max specifically: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56.6 (v4.3 era)** — DataCamp, AI Weekly, swfte all cite 56.6; "highest for a Chinese model at release" (AI Weekly). Current AA page marks Qwen3.7-Max deprecated vs Qwen3.8 Max and no longer updates non-default workloads (historical values retained).
- GPQA Diamond: **92.4%** (BenchLM, sourced from the official blog; AI Release Tracker concurs) — **conflict:** Vals AI harness measures **90.2%**, AI Flash Report **92.3%**
- MMLU-Pro: **89.6%** (official blog via BenchLM; Vals 89.3%)
- MMLU-Redux: **95%**; SuperGPQA: **73.6%**; MMMLU: **90.3%** (official blog via BenchLM)
- HLE (with tools): **41.4%** (BenchLM) — **conflict:** AI Flash Report lists **38.1%** (tools configuration unclear)
- PolyMATH: **86.5%** (DataCamp citing official blog — ahead of Opus-4.6 Max 80.2, Kimi K2.6 Thinking 82.7)
- Verbosity caveat: AA observed ~**97M output tokens** per index run vs a ~24M median (DataCamp) — heavily verbose; Vals AI measured 13m30s average task latency in thinking mode
- CritPt / AA-Omniscience / LCR: no verified public score found for Max specifically

Coding:

- SWE-bench Verified: **80.4%** (BenchLM / AI Release Tracker) — **major conflict:** Vals AI's own harness measures **68.8%** (66.7% on the Vals-Index subset). Both cited; the 11.6-point gap is harness/scaffold difference, per the caveats pattern already documented in `model-comparison.md`.
- SWE-bench Pro: **60.6%** (BenchLM; ahead of Opus 4.6 Max 56.6 per atomicbot.ai)
- LiveCodeBench v6: **91.6%** (BenchLM) — **conflict:** Vals harness **87.1%**, AI Flash Report "LiveCodeBench Reasoning" **69.0%**
- SWE-Multilingual: **78.3%** (BenchLM)
- SciCode: **53.5%** (BenchLM, official blog) — **conflict:** AA-SciCode **49.5%** (AA), AI Flash Report **48.8%**
- NL2Repo: **47.2%** (BenchLM)
- BenchLM aggregate: overall **62.36/100, #48/992**; agentic public-lane **40.6 (#69/132)** (partial coverage, 43-59 of 706 benchmarks)
- Vibe Code Bench: no verified public score found
- DeepSWE: no verified public score found for Max (the Plus sibling is weaker)

Long context:

- 1M-token window verified across Alibaba docs/AA/Vals; MRCR / RULER / GraphWalks retrieval-at-length: no verified public score found for `qwen3.7-max`.

### Normalized scores (1–100)

- **Tool use: 78/100.** Exceptional classic function-calling (TAU2 94.7, BFCL 75.0, MCP Atlas 76.4) but only mid-tier agentic composites (Claw-Eval 65.2, QwenClawBench 64.3, GDPval-AA 31.4) and no Tau3/TB2.1 frontier numbers; capped below the 90-100 frontier band on GDPval-AA and the 54.6% Kilo-harness Terminal-Bench run.
- **Reasoning: 88/100.** GPQA-D 92.4%, HLE 41.4% (tools) and PolyMATH 86.5 sit in the frontier band (GPQA 90+/HLE 40+ → 90-100), while the AA Intelligence Index 56.6 lands just under the 60+ frontier threshold — hence 88, not 90+. Verbose decode (97M tokens) and 13m30s Vals latency cap real-world usability.
- **Context window: 95/100.** 1,000,000-token total window (Alibaba docs; AA; Vals 984K) = ≥1M tier; 95 rather than 100 because no independent 98%+ retrieval-at-512K evidence was found.
- **Multimodal: 15/100.** Text-only input/output — AA comparison pages confirm no image input for `qwen3.7-max` (vision arrived only in the separate Plus sibling); 15 per the text-only band.
- **Coding: 87/100.** SWE-bench Verified 80.4 and LiveCodeBench v6 91.6 are frontier-grade; SWE-bench Pro 60.6 and SciCode 53.5 sit below the 90-100 band references and the Vals-harness SWE number (68.8) confirms scaffold sensitivity — capped at 87.
- **Cost efficiency: 78/100.** $2.50/$7.50 list (blended $1.60/1M with cache) interpolates to ~78 between the $1.25/$4.25≈88 and $3/$15≈60 anchors; gateway routes at ~$1.5/$4.5 improve it further, but no free tier exists.
- **Overall Score: 73/100.** Mean of Tool 78 + Reasoning 88 + Context 95 + Multimodal 15 + Coding 87 = 363/5 = 72.6 → 73. Best fit: text-only agentic coding and long-horizon office/productivity work at mid-premium pricing; pick the `qwen-3.7-plus` entry when vision is needed and `qwen-3.7-flash` for cheap 1M-context jobs — this entry is the flagship, not the whole family.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-28
- Method: public internet research (Qwen official launch blog via BenchLM citations, Alibaba Cloud Model Studio docs, Artificial Analysis, Vals AI, BenchLM, DataCamp, AI Flash Report, AI Release Tracker, models.dev, InsiderLLM/LocalClaw weight-existence audits); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
