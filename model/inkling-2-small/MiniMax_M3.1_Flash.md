# Inkling 2 Small — findings by MiniMax M3.1 Flash

- Source: Thinking Machines Lab (`inkling-2-small`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small
- **Short description:** Thinking Machines Lab's second-generation Mixture-of-Experts model (594B total / 17B active), released 2026-11-05: a 1M-context, image-input general model trained for long-horizon agentic coding, autoresearch and knowledge work. **It is the production model behind the Fledge Alpha stealth preview** — the vendor states verbatim: *"We also tested early checkpoints of Inkling 2 Small on OpenCode under the name Fledge-Alpha"*. Every figure below is measured on the released `Inkling 2 Small` checkpoint, not on the earlier Fledge Alpha evaluation runs.
- **Provider / access:** Thinking Machines Lab **Tinker** API (inference + fine-tuning, playground at `tinker.thinkingmachines.ai`); **OpenCode Zen** `opencode/inkling-2-small-free` — Chat Completions at `https://opencode.ai/inference/openai/v1/chat/completions`. Weights are **closed** under the Tinker Terms of Use for now; the vendor promises full weights under Apache 2.0 "next week", and as of 2026-11-12 the Hugging Face repo `thinkingmachines/Inkling-2-Small` does **not** resolve (HTTP 401). (also recorded: `https://opencode.ai/inference/v1/models`)
- **Release / knowledge:** released **2026-11-05** (vendor blog + model card); pretraining data cutoff **2026-06**; available via Tinker from launch.
- **IDs:** `thinkingmachines/inkling-2-small` (Zen canonical id), `opencode/inkling-2-small-free` (Zen free slot, release_date 2026-11-05), Tinker model `Inkling 2 Small`. No public Hugging Face weight repo yet; the earlier stealth id `fledge-alpha` / `opencode/fledge-alpha-free` is retired and now resolves to this model.
- **Context window:** **up to 1M tokens** (vendor model card: "supports a context window of up to 1M tokens"); the live Zen slot reports **1,048,576 total / 131,072 max output** (models endpoint). All vendor evals ran with a 1M-token maximum trajectory limit; RL itself used 256K context with compaction for longer trajectories.
- **Modalities:** text and image in (20px–4096px per side recommended), text out. **No audio support** (vendor-stated limitation). Reasoning/effort levels supported (evals at effort 0.99 / xhigh, temperature 1.0); tool calling and MCP supported; no video input.
- **Pricing (as of 2026-11-12):** Zen free slot **$0 in / $0 out / $0 cached read** ("free for a limited time"). **Privacy caveat:** the provider *retains* data during the free period and may use it to monitor real-world performance and for model training (Thinking Machines free-research-API-tier terms), and the slot is **not available in the EU, Iceland, Liechtenstein, Norway, Cuba, Iran, North Korea, Russia, Ukraine or Venezuela**. Paid fallback: Tinker API **$0.30 in / $1.00 out** per 1M tokens with a 90% cache discount.
- **Architecture:** **594B total / 17B active** MoE — 48-layer decoder-only transformer, each token routed to **8 of 384 experts**, hybrid local/global attention, MXFP8/NVFP4 numerics; images encoded by a **292M-parameter Perception Encoder** vision tower (20x20 px patches, 2x2 spatial pooling) into a shared hidden space. Closed weights today, Apache 2.0 promised.

### Raw benchmarks found

> All rows below are from the **vendor's own model card / launch post** (Thinking Machines Lab, 2026-11-05), which aggregates third-party leaderboard numbers (Artificial Analysis, Scale AI, Vals, DataCurve, DesignArena, Arena, Surge, Mercor, Thoughtful) rather than running every eval itself. Harness names are given per row where the vendor states them.

Agent / tool use:

- Terminal-Bench 2.1: **85.1%** (vendor, **Pi** harness) / **81.3%** (vendor, **Terminus** harness) — same model, two harnesses
- Terminal-Bench 4.0: **13.1%**; Terminal-Bench-Science v0.1: **5.7%**
- MCP Atlas (full / public): **85.4% / 85.0%** (Scale AI, per vendor table)
- AutomationBench v1.0.6: **45.6%** (Artificial Analysis, per vendor table)
- Tau3 Banking v1.0.1: **40.4%** (Artificial Analysis, per vendor table)
- GDPval-AA v2.1: **1630 ELO**; AA-Briefcase v1.1: **1527 ELO**
- JobBench: **70.5%**; EnterpriseOps-Gym: **46.8%**; EnterpriseBench-CoreCraft: **71.8%**
- BrowseComp (with context management): **90.2%**; DeepSearchQA: **90.9%**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- HLE (text only): **44.1%**; HLE-Diamond: **28.7%**
- CritPt v2 (full / hard): **55.7% / 35.0%**
- Artificial Analysis Intelligence Index (v5.0): **30.6** (vendor table) / **31** (Artificial Analysis model page — 6th of 36 tracked models); Vals Index (v2.2): **56.1%**
- Omniscience Accuracy / Hallucination Rate: **16.1** (AA-Omniscience v1.1 score) / **73.3%** (non-hallucination rate)
- MathVision: **92.8%**; HMMT Feb 2026: **95.8%**; APEX 2025: **63.5%**; BioMysteryBench: **70.0%**
- LCR / MLCR: **AA-LCR v1.1 83.3%**
- BenchLM overall: **no verified public score found** (no ranked BenchLM row for this id)

Coding:

- SWE-bench Verified: **82.2%** (vendor table); SWE-bench Pro v2 (Hard): **86.3%**, (Full): **97.7%**, Multilingual: **81.2%**, Multimodal v2: **43.1%**
- DeepSWE v1.1: **72.1%** (DataCurve, per vendor table)
- Vibe Code Bench v1.1: **81.6%** (Vals, per vendor table)
- FrontierCode v2.0: **25.4%**; SWE-Marathon v1.1: **38.8%**; Sudo L7: **14.1%**
- PostTrainBench v1.2: **31.9%**; PMPP-Hard (GPU-kernel autoresearch) AUC: **494.27**
- LiveCodeBench / SciCode: **no verified public score found**

Long context:

- AA-LCR v1.1: **83.3%** at the 1M-token trajectory limit
- LongBench v2: **70.6%**
- RULER / MRCR: **no verified public score found**

Vision (image input):

- MMMU-Pro (Standard 10): **81.6%**; PerceptionBench: **64.7%**
- ScreenSpot Pro (original / with Python): **83.8% / 91.5%**; BabyVision: **68.6% / 93.7%**
- CharXiv RQ: **85.6% / 87.7%**; Chartography: **36.7% / 80.4%**; GDP.pdf: **25.2%**; Humanity's Sixth Sense: **33.3%**
- Video input: **not supported** (vendor: text and image only)

Cost per task / speed (independent):

- Artificial Analysis measurement: ~**60.04 s** time-to-first-token, **109 tokens/s**, ~**22.9 min per task**, ~**$1.18 per task** on the AA Intelligence Index suite (AA model page)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 85.1% (Pi) and 81.3% (Terminus) plus MCP Atlas 85.4/85.0, AutomationBench 45.6, Tau3 Banking 40.4, GDPval-AA 1630 and AA-Briefcase 1527 put it in the upper band; capped below 90 by a Tau3 score (40.4%) and an AutomationBench score (45.6%) that trail the frontier, and by no public Claw-Eval row.
- **Reasoning: 82/100.** GPQA Diamond 93.0%, HLE 44.1%, HMMT Feb 2026 95.8%, MathVision 92.8% and CritPt v2 55.7/35.0 are frontier-grade, but the AA Intelligence Index (v5.0) of 30.6–31 and the CritPt hard subset of 35.0% hold the composite below the 90+ tier.
- **Context window: 96/100.** A vendor-verified 1M-token window (model card) served as 1,048,576 total / 131,072 max output on Zen, with AA-LCR 83.3% and LongBench v2 70.6% showing real retrieval at length; not 100 because no 98%-at-512K+ retrieval probe is published.
- **Multimodal: 70/100.** Native image input with a 292M-parameter vision tower and strong perception numbers (MMMU-Pro 81.6%, ScreenSpot Pro 91.5% with Python, BabyVision 93.7% with Python), but no video, PDF or audio input and a weak Chartography subset (36.7%), so it stays at the top of the image-in band.
- **Coding: 86/100.** SWE-bench Verified 82.2%, SWE-bench Pro v2 (Hard) 86.3% (Full 97.7%), Vibe Code Bench 81.6% and DeepSWE 72.1% are strong, but Terminal-Bench 4.0 (13.1%), Terminal-Bench-Science (5.7%) and FrontierCode (25.4%) show weak results on the newer terminal harnesses, and no LiveCodeBench/SciCode row exists.
- **Cost efficiency: 100/100.** The evaluated OpenCode Zen tier is $0 in / $0 out for a limited time; the caveats (data retained and possibly used for training, regional unavailability, limited period) are recorded rather than scored — the paid Tinker fallback is $0.30/$1.00.
- **Overall Score: 84.0/100.** Mean of the five non-cost dimensions (86 + 82 + 96 + 70 + 86) / 5 — best fit as a strong long-context, image-capable agentic coder on a temporary free tier, with the newest terminal-benchmark generation and the AA Index as the two things to watch once weights ship.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (vendor launch post and model card, OpenCode Zen model endpoint and docs, Hugging Face API, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Inkling 2 Small — Thinking Machines Lab](https://thinkingmachines.ai/news/inkling-2-small/)
  - [Inkling 2 Small Model Card — Thinking Machines Lab](https://thinkingmachines.ai/model-card/inkling-2-small/)
  - [OpenCode Zen model list and pricing](https://opencode.ai/docs/zen)
  - [OpenCode live model endpoint (metadata, ids, limits, prices)](https://opencode.ai/inference/v1/models)
  - [Artificial Analysis — Inkling 2 Small](https://artificialanalysis.ai/models/inkling-2-small)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_Weights.md`, using the same headings.

---

## Archived research pass — `MiniMax_M3.1_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `MiniMax_M3.1_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Fledge Alpha — findings by MiniMax M3.1 Flash

> SELF-EXCLUDED REPORT — no scored findings file is provided for this model.
> The id `opencode/fledge-alpha` resolves to nothing: the only registry entry is
> `opencode/fledge-alpha-free`, and **zero verified public benchmark numbers**
> exist for it on any tracker. Per the project template (`model-report-TEMPLATE.md`,
> "SELF-EXCLUSION") this file is saved as `MiniMax_M3.1_Flash.md.excluded`: it is
> skipped by `pnpm sync` (never parsed, averaged or registered) and contains only
> the negative findings.

- Source: OpenCode (stealth free preview) — *no vendor identified*
- Archived date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> No material conflict remained (the archived remark was a pricing-tier or non-numeric note) — the active
> values stand. Safe unions applied: Provider +1. Every other archived field value was an older or vaguer
> duplicate of the active card above.

## Raw benchmarks found

> No benchmark row exists for this id on any source. The checks below are listed so the
> absence is auditable rather than assumed.

- Artificial Analysis: no model page — `https://artificialanalysis.ai/models/fledge-alpha` → **404** (verified live 2026-10-20)
- BenchLM: no model page — `https://benchlm.ai/models/fledge-alpha` → **404** (verified live 2026-10-20); the slug is also absent from BenchLM's 960-model index
- OpenRouter: absent from `https://openrouter.ai/api/v1/models` (verified live 2026-10-20)
- Hugging Face: no model — `https://huggingface.co/api/models?search=fledge` returns only unrelated repositories
- OpenCode changelog: "Fledge" appears exactly once in the entire history — the removal line. It was never announced, only retired.
- Terminal-Bench / Tau2 / GDPval / GPQA / HLE / LCR / SWE-bench / LiveCodeBench / DeepSWE / MMMU-Pro / MRCR: **no verified public score found**

#### Negative findings summary

- No verified public benchmark, no third-party evaluation and no vendor page exist for this model; the only evidence is a single models.dev catalogue row.
- No context, output, modality or pricing figure could be confirmed from a primary source beyond that row.
- Closest **real** neighbouring free Zen previews for orientation only (not used as a proxy): Big Pickle, LL Alpha Free, Beam Free, Step 5 Preview Free.

---
