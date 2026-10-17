# Xing 4.0 29B-A4B — findings by Qwen 3.8 Flash

- Source: China Telecom (`opencode/xing_4.0_29b_a4b`; TeleChat-lineage `Xing4.0-29B-A4B`), cross-checked against the Hugging Face model card, OrcaRouter's independent teardown, MindStudio release/benchmark write-ups and AIModeling coverage
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom's open-weight, agent-oriented sparse MoE (next generation of its TeleChat lineage) — 29B total / 4B active, **text-only**, engineered for multi-step planning, tool calling and terminal/coding agents on Ascend NPUs. Weights published 2026-09-16; quantized builds 2026-10-13; callable hosted endpoint only in mid-October 2026.
- **Provider / access:** open weights (Hugging Face, Apache 2.0 incl. patent grant); local via SGLang / vLLM / KTransformers (4-bit claimed ~15 GB VRAM); surfaced as `opencode/xing_4.0_29b_a4b` with a free promotional tier in mid-October. **Not in OrcaRouter's catalogue.**
- **Release / knowledge:** initial repo commit 2026-09-16; knowledge cutoff not disclosed by the vendor.
- **IDs:** `xing_4.0_29b_a4b` (curated folder slug uses underscores; the published checkpoint is `Xing4.0-29B-A4B`).
- **Context window:** **256K native**, model card claims extensible to **512K** (untested by third parties). Curated `meta.json` "128K total" is a scaffolded placeholder and is overridden here.
- **Modalities:** **text in / text out only** (no image/audio/video) — a deliberate narrowing versus the multimodal peers it is benchmarked against.
- **Pricing (as of 2026-10-17):** open weights (self-host free); **no published per-token hosted rate** (mid-October free promo tier only); vendor route is the other option.
- **Architecture:** 29B total / 4B active MoE, 64 routed experts (4 active + 1 shared), MLA (multi-head latent attention) with compressed KV state, 40 layers, hidden 3,584, vocab 131,072; trained on Huawei Ascend NPUs.

### Raw benchmarks found

> **Provenance warning (dominant caveat):** *every* number below is **China Telecom's own vendor run** on its model card. There is **no independent evaluation** — no Artificial Analysis placement, no third-party harness reproduction — and the model is ~4 weeks old with ~53K downloads. Even the "Gemma 4" comparison column on the card is China Telecom's *re-run* of a competitor, not Google's published figure. All scores are therefore treated at a discount, exactly as the source-independent teardown (OrcaRouter) recommends.

Agent / tool use:

- Claw-Eval: **76.55** (vendor; official harness on both sides per card)
- τ³-Bench: **64.63** (vendor)
- Terminal-Bench 2.1: **57.50** (vendor; vs its own Gemma re-run 30.0)

Reasoning / knowledge:

- AIME 2026: **90.00** (vendor)
- AA-LCR (long-context reasoning): **61.00** (vendor; trails its own Gemma column 66.0)
- IFBench (instruction following): **69.67** (vendor; trails Gemma re-run 72.67)
- GPQA Diamond / HLE / MMLU-Pro: **no score published** on the card (absence noted, not read as a loss)

Coding:

- SWE-bench Verified: **75.00** (vendor-run; Google publishes no figure for this benchmark)
- SWE-bench Multilingual: **66.00** (vendor)

Long context:

- 256K native / 512K claimed; **no MRCR/RULER retrieval score published**, and no third-party long-context testing exists yet.

### Normalized scores (1–100)

- **Tool use: 62/100.** Clearly agentic-designed — Claw-Eval 76.55 and τ³-Bench 64.63 point to real tool/planning capability for a 4B-active model — but every figure is vendor-self-run, with no independent harness (no MCP-Atlas, OSWorld or Sierra leaderboard entry) to confirm it.
- **Reasoning: 58/100.** AIME 2026 90 is impressive and AA-LCR 61 is respectable, yet the card omits GPQA/HLE/MMLU entirely and IFBench 69.67 shows a relative weakness in instruction following; with no independent evaluation, pure-reasoning confidence stays mid-band.
- **Context window: 72/100.** 256K native is a strong working window (with a card-claimed 512K), but the extension and any long-context retrieval quality are unverified — no third party has stress-tested it yet.
- **Multimodal: 15/100.** Text-only input/output by design (no vision/audio) — the template's text-only floor, and a real gap versus same-class multimodal MoEs like Gemma 4 26B-A4B.
- **Coding: 64/100.** The headline pitch — SWE-bench Verified 75.0, Multilingual 66.0, Terminal-Bench 57.5 are the "strongest agentic rows in its weight class on paper" — but this is precisely the class of score most sensitive to harness choice and it is 100% vendor-reported, so the provisional ceiling is held well below the raw numbers.
- **Cost efficiency: 82/100.** Apache-2.0 open weights, a ~15 GB 4-bit footprint, and 4B-active compute make self-hosting cheap; docked because there is no transparent published hosted rate and heavy agentic use assumes you own the GPUs.
- **Overall Score: 54.2/100.** Half-up mean of the five quality dims (62+58+72+15+64)/5 = 54.2. Best fit: a **self-hosted, code/terminal-agent workload on owned hardware** where a 29B-memory / 4B-compute MoE is attractive — *conditional on running your own evaluation first*, since none of these numbers has survived independent scrutiny and the text-only modality caps versatility.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — China Telecom's Hugging Face `Xing4.0-29B-A4B` model card, OrcaRouter's independent "Xing 4.0 vs Gemma 4 26B-A4B" teardown (which supplies the vendor-vs-Google provenance critique), MindStudio release + benchmark write-ups, and AIModeling's open-sourcing report. Scores are normalized 1–100 interpretations at a deliberate discount for vendor-only provenance, not official independent scores. `meta.json` (scaffolded "128K total / Text in-out") was overridden by first-party + third-party evidence (256K native / 512K claimed, text-only, Apache-2.0 open weights, no published hosted rate).
- Caveat carried into every dimension: no Artificial Analysis row, no third-party harness reproduction, ~4 weeks since release — the headline coding/agentic numbers are unverified vendor claims.
- Revisit trigger: Artificial Analysis / an independent leaderboard (SWE-bench, Terminal-Bench, Sierra τ) adds a same-harness `xing_4-0-29b-a4b` row, or the vendor publishes GPQA/HLE/MMLU-Pro absolutes and a transparent hosted price.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
