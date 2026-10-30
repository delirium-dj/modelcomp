# Kimi K3.1 Pro — findings by Qwen 3.8 Flash

- Source: Moonshot AI **Kimi K3.1 Pro** (id `moonshotai/kimi-k3.1-pro`), anchored against **Artificial Analysis** (Intelligence Index v4.3.2 + Terminal-Bench 4.0 + GDPval-AA + AA-Omniscience), Moonshot launch post / tech blog, and independent launch coverage (felloai, myclaw.ai)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** `kimi-k3.1-pro` is a **real, shipping flagship** — Moonshot's post-trained upgrade of Kimi K3 (2026-10-23), not a scaffold and not a phantom. It is **scored**. It is kept distinct from the `kimi-k3` folder (its base model) — this report scores the **K3.1 Pro** checkpoint's own independent measurements, and cites K3 lineage only where labeled. **Vendor-vs-independent conflicts** (Terminal-Bench order, hallucination rate) are reported per source, not averaged.

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship reasoning model and the first major upgrade since Kimi K3 — a **2.8T-total / 104B-active** MoE (same architecture, substantially more post-training RL across "hundreds of downstream domains") aimed at **coding, finance, and 3D/game modelling**, launching **#4 on the Artificial Analysis Intelligence Index** and set to become the top open-weights model once its weights land.
- **Provider / access:** Moonshot first-party API (`kimi-k3.1-pro`, plus `kimi-k3.1-pro-highspeed` at $4/$20), Kimi.com/apps/Work/Code; OpenRouter `moonshotai/kimi-k3.1-pro`. **Open weights promised 2026-11-04** but **not yet published** at the research date → currently proprietary.
- **Release / knowledge:** **2026-10-23** (24th in China); knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3.1-pro` (verified), `kimi-k3.1-pro-highspeed`.
- **Context window:** **1,048,576 tokens** (flat pricing, no long-prompt surcharge).
- **Modalities:** **text + image** input (Moonshot API docs also list video files), text out; reasoning model; agentic tool use measured.
- **Pricing (as of 2026-10-30):** **$2.00 / $10.00 / $0.20** (input / output / cached-input) per 1M — 33% below K3's $3/$15/$0.30. AA cost per Intelligence-Index task **$1.98–$2.11**.
- **Architecture:** sparse MoE, **2.8T total / 104B active**; weights pending (expected to follow the K3-lineage custom license, not MIT/Apache).

### Raw benchmarks found

> **Provenance:** Artificial Analysis (independent) is primary; Moonshot first-party numbers are labeled and, where they conflict, shown side-by-side.

- **AA Intelligence Index v4.3.2: 55.1** — **#4** overall, behind only Claude Opus 5.5 (57.6), Claude Sonnet 5.5 (56.0), Muse Wonder Full (55.8); **+11.5 over K3 (43.6)**.
- **Terminal-Bench 4.0:** **67% (AA — "highest of any model AA has tested")**; Moonshot's own run **65.7%** (just behind Opus 5.5's 66.4%). Order differs by harness; both cited.
- **GDPval-AA:** **1,846 Elo (#3)**, up 312 Elo from K3, behind Opus 5.5 (1,866) and Muse Wonder Full (1,857).
- **AutomationBench-AA:** **73%** (up from 58%).
- **HLE (AA):** **52%** (from 47%); **CritPt:** 25% (from 23%); **SciCode:** 61% (from 59%).
- **AA-Omniscience:** Index **30** (from 20); hallucination **44%** (from 53%); accuracy **51%** — vs Moonshot's internal "8.3% from 23.4%" claim (different test; not comparable).
- **BenchCAD (with tools):** **92.7%** (Moonshot) — behind Opus 5.5 96.2% / GPT-6 Astra 95.9%.

### Normalized scores (1–100)

- **Tool use: 90/100.** AA's highest-ever Terminal-Bench 4.0 (67%), AutomationBench 73% and a #3 GDPval-AA (1,846 Elo) put sustained agentic/tool execution at the very frontier; held at 90 (not higher) by the unresolved vendor-vs-AA Terminal-Bench order.
- **Reasoning: 85/100.** AA Index 55.1 (#4) with HLE 52%, CritPt 25%, SciCode 61% is top-of-field but a clear notch below Opus 5.5; the AA-measured **44% hallucination rate** caps it below 90.
- **Context window: 96/100.** Verified **1M** window with flat pricing and auto context-caching — elite span; short of 100 absent a published single-window retrieval absolute.
- **Multimodal: 70/100.** Text + image input (video per API docs) with text output only; no audio input and no generation surfaced, so a solid-but-below-4-modality lane.
- **Coding: 88/100.** Terminal-Bench 67% (top) and BenchCAD 92.7% evidence frontier agentic coding with a distinctive 3D/game-dev strength; no published SWE-bench Verified/DeepSWE absolute for this exact checkpoint caps it below the Wonder/Opus tier.
- **Cost efficiency: 66/100.** $2/$10/$0.20 is meaningfully sub-premium and ~$1.98–$2.11/task, but 55K output tokens/task (14% more than K3) keeps real cost mid-premium — strong value, not a bargain.
- **Overall Score: 85.8/100.** Half-up mean of the five quality dims (90+85+96+70+88)/5 = 85.8 (Cost excluded). Best fit: long-horizon agentic coding, financial research, and 3D/game development at a sub-Opus price. **Provisional flag:** open weights were still unreleased at the research date (promised 2026-11-04), so self-host claims are unverified and cyber-offense was deliberately reduced pre-release.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-30
- Method: public internet research — **Artificial Analysis** launch measurement (**Intelligence Index v4.3.2 = 55.1, #4**; Terminal-Bench 4.0 67%; GDPval-AA 1,846; AutomationBench 73%; AA-Omniscience 30 / 44% hallucination / 51% accuracy; $2/$10/$0.20; 2.8T/104B; 1M ctx; text+image) cross-checked against Moonshot's official launch post/tech blog (65.7% TB, BenchCAD 92.7%, 8.3% internal-hallucination claim, Nov-4 weights promise) and independent coverage (felloai, myclaw.ai). Vendor-vs-AA conflicts (Terminal-Bench order, hallucination) are cited per source, never blended. Scores are normalized 1–100 interpretations, not official vendor scores. Kept distinct from the `kimi-k3` base-model folder.
- Revisit trigger: the **2026-11-04** open-weights release (license, published SWE-bench Verified/DeepSWE absolutes, self-host throughput), or AA exposing per-suite sub-scores / a v5.0 re-measurement for this checkpoint.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
