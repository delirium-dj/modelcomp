# Beam — findings by Qwen 3.8 Flash

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`; curated id `opencode/beam`), cross-checked against Artificial Analysis, Hugging Face, eesel/datacamp/latent.space launch coverage and Reflection's own benchmark table
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam 1.0)
- **Short description:** Reflection AI's first model (launched 2026-10-05, weights published ~2026-10-16) — a 501B-total / 23B-active sparse Mixture-of-Experts built for coding, reasoning and agentic work, sold on inference *efficiency* (activates ~4.7% of weights per token). Now the **#2 US open-weight model on the Artificial Analysis Intelligence Index (30)**. Text-only.
- **Provider / access:** open weights (Hugging Face `reflection/Beam-1.0-501B-A23B`, Apache 2.0); OpenAI-compatible API `https://api.reflection.ai/openai/v1` (model id `Beam-501B-A23B`, Chat Completions only); Reflection "Mirror" terminal agent; also surfaced free on OpenCode Zen / Command Code ("Beam Free"). Local via vLLM/SGLang once quantized.
- **Release / knowledge:** 2026-10-05 announcement, ~2026-10-16 open-weight release; **knowledge cutoff 2026-06-30** (per API docs).
- **IDs:** `reflection/Beam-1.0-501B-A23B`; API `Beam-501B-A23B`; the anonymous OpenCode stealth route "Cat Jam" was reported by the community to be this same Beam 1.0.
- **Context window:** Artificial Analysis lists **1M** (launch: "effective context extended to 1M"); the **beta API currently serves 256K in / 128K max output** ("may change during beta"). Scored on the served 256K reality, not the aspirational 1M.
- **Modalities:** **text in / text out only** — image, audio and file inputs are *not* supported on the API (OpenAI-compat docs); reasoning always on (5 effort levels).
- **Pricing (as of 2026-10-17):** open weights (self-host free); **no published per-token API rate** (pricing page behind waitlist login); free limited-time OpenCode/Command Code tier. Efficiency story: 23B-active per token ≈ dense-23B compute cost.
- **Architecture:** 501B total / 23B active sparse MoE, 52 layers, interleaved local+global attention, fine-grained routed experts with near-uniform utilization (busiest expert ~1.04× avg load); pretrained 23.8T tokens on 6,144 GB300 GPUs; RL 100M+ rollouts across ~1M environments.

### Raw benchmarks found

> Two provenance tiers: (a) **Artificial Analysis** independent — Intelligence Index 30; (b) **Reflection's own vendor table** — the individual capability rows below are self-reported, and Reflection itself notes GLM-5.2 / Qwen3.8-Max are "NR" on SWE-bench Verified, so the headline 80.9 lacks a same-harness peer on that row.

Agent / tool use:

- MCP-Atlas: **78.7** (vendor; vs GLM-5.2 77.8, Kimi K3 82.3)
- τ³-banking (Sierra): **38.0** (vendor self-report; roughly level with Kimi K3 / GLM-5.2 at 37.1, well behind Qwen3.8-Max 55.2)
- Terminal-Bench 2.1: **80.1** (vendor; trails Kimi K3 88.3 / DeepSeek V4.1 Flash 90.6)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (independent; #2 among US open-weight models)
- GPQA Diamond: **90.5** (vendor; near GLM-5.2 91.2 / Kimi K3 93.5)
- HLE (no tools): **36.2** (vendor; mid-pack — GLM-5.2 40.5, Qwen3.8-Max 43.6, Kimi K3 46.9)

Coding:

- SWE-bench Verified: **80.9** (vendor, no peer NR-flagged on this row)
- SWE-bench Pro v1: **65.5** (vendor; beats GLM-5.2 62.1, trails Qwen3.8-Max 67.7)
- DeepSWE v1.1: **44.4** (vendor; trails Kimi K3 68.0 / DeepSeek V4.1 Flash 74.2)

Long context:

- 256K served (1M claimed); **no MRCR/RULER retrieval score published** for this exact ID.

### Normalized scores (1–100)

- **Tool use: 73/100.** Genuinely agentic-native — MCP-Atlas 78.7 and parallel tool calling / structured outputs are solid, and Terminal-Bench 80.1 is respectable — but held below 80 by the weak τ³-banking 38.0 (policy/tool state resolution) and the fact that every absolute is vendor-run.
- **Reasoning: 68/100.** Independent AA Index 30 confirms it as a top-2 US open-weight reasoner, and GPQA Diamond 90.5 is strong; dragged by a modest HLE 36.2 (no-tools) and the absence of any published MMLU-Pro / Omniscience row.
- **Context window: 78/100.** AA lists 1M and Reflection claims extended effective context, but the beta API serves only 256K in / 128K out with no retrieval-score proof — a competent large window, not yet a verified long-context leader.
- **Multimodal: 15/100.** Text-only input/output on the API (no image/audio/file) — the template's text-only floor; a real gap next to same-size vision-capable peers.
- **Coding: 77/100.** Its design center: SWE-bench Verified 80.9 + Pro 65.5 + Terminal-Bench 2.1 80.1 is competitive-with-GLM-5.2 territory, but DeepSWE 44.4 and vendor-only provenance (no independent harness reproduces the 80.9) cap the confidence.
- **Cost efficiency: 88/100.** Apache-2.0 open weights, 23B-active-per-token compute, and a free OpenCode/Command Code tier make it cheap to run — docked only because no first-party API rate is published yet and 501B total still needs heavy hosting memory.
- **Overall Score: 62.2/100.** Half-up mean of the five quality dims (73+68+78+15+77)/5 = 62.2. Best fit: teams needing a **US-built, sovereign, coding/agentic open-weight model** at GLM-5.2-class quality with far less inference compute; the text-only modality is the dominant drag, and independent (non-vendor) confirmation of the headline coding rows is still pending.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — Artificial Analysis "Reflection has released Beam" article + `reflection-beam` model page (Index 30, 1M ctx, text-only), Reflection AI "Introducing Beam" launch post and its self-published benchmark table, Hugging Face `reflection/Beam-1.0-501B-A23B` model card, and independent write-ups (eesel, DataCamp, latent.space, OpenCode/Command Code listings). Scores are normalized 1–100 interpretations, not official vendor scores; vendor-vs-independent provenance is flagged inline. `meta.json` (scaffolded "128K total / Text in-out / Standard pricing") was overridden by first-party evidence (served 256K/128K, text-only, open-weight + unpublished API price).
- Revisit trigger: Reflection publishes the FP8/NVFP4 weights + a first-party API price, and Artificial Analysis / Sierra add same-harness SWE-bench Verified & τ³ rows against GLM-5.2 / Qwen3.8-Max.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
