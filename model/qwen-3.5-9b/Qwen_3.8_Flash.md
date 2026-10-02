# Qwen 3.5 9B — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-9B`, Apache-2.0 open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** The largest of Qwen's edge/laptop-sized 3.5 dense family (0.8B/2B/4B/9B, released 2026-03-02 after the 2026-02-16 flagship) — a **natively multimodal 9B vision-language model** with hybrid Gated DeltaNet/Attention layout, which Artificial Analysis rated the **most intelligent sub-10B model at launch** (and most intelligent multimodal under 15B). Startling absolute numbers for its size (GPQA 81.7, τ² 79.1, MMMU-Pro 70.1) — all vendor-harness, achieved with very heavy thinking-token budgets.
- **Provider / access:** HF `Qwen/Qwen3.5-9B` + ModelScope (Apache-2.0); vLLM/SGLang/KTransformers; hosted on Alibaba Model Studio (DashScope). ~6 GB at 4-bit — runs on a consumer laptop. No Zen Free ID verified; folder ID `opencode/qwen-3.5-9b` is the catalog listing.
- **Release / knowledge:** 2026-03-02; cutoff not disclosed on the card.
- **IDs:** `Qwen/Qwen3.5-9B`; DashScope `Qwen3.5-9B`.
- **Context window:** **262,144 native**; up to ~1M only via YaRN RoPE extrapolation (vendor documents the static-scaling caveat). The curated `meta.json` "128K total" is a placeholder understating it — corrected.
- **Modalities:** **Text + image + video in; text out** (early-fusion VLM, hour-scale video sampling); unified thinking/non-thinking mode (default thinking); tool calling via `qwen3_coder` parser; JSON. The curated "Text in/out" is wrong — this is one of the strongest multimodal stories in the sub-10B class.
- **Pricing (as of 2026-10-02):** open weights → self-host cost only (~6 GB 4-bit); no official per-token hosted price found. Caveat: heavy reasoning-token consumption (~260M output tokens to run one AA Index pass) inflates real cost-per-answer. Cost excluded from Overall.
- **Architecture:** dense 9B (~10B with vision encoder), 32 layers, hidden 4096, 8×(3×Gated DeltaNet + 1×Gated Attention), MTP trained, vocab 248,320, BF16.

### Raw benchmarks found

> Verified via the qualifying `Kimi_K3.md` (HF model card full vendor tables + llm-releases.com + qwen.ai blog, 2026-10-01). Lane: almost entirely **Qwen Team self-reported harness**; AA corroborates the sub-10B leadership claim qualitatively. No independent TB/GDPval/SWE rows exist for a 9B in this cohort's panels.

Agent / tool use:

- TAU2-Bench: **79.1** (official setup with airline-domain fixes); BFCL-V4: **66.1**
- OSWorld-Verified (visual agent): **41.8**; AndroidWorld: **57.8**; ScreenSpot Pro: **65.2**; TIR-Bench 45.6 w/ CI; V* 90.1 w/ CI
- VITA-Bench: 29.8; DeepPlanning: **18.0** (long-horizon planning is the weak spot); Terminal-Bench / GDPval-AA / Claw-Eval: no row

Reasoning / knowledge:

- GPQA Diamond: **81.7** (HF card) — exceptional for 9B; MMLU-Pro 82.5; MMLU-Redux 91.1; SuperGPQA 58.2; C-Eval 88.2
- HMMT Feb/Nov 25: **83.2 / 82.9** (competition math at a density nobody else sub-10B matches); IFEval 91.5; IFBench 64.5; MultiChallenge 54.5
- HLE / CritPt / Omniscience: **no verified row** (vendor proxies: SimpleVQA 51.2, HallusionBench 69.3)

Coding:

- LiveCodeBench v6: **65.6**; OJBench: **29.2**; SWE-bench Verified / SciCode: not run at this size class in any panel found

Long context:

- AA-LCR: **63.0**; LongBench v2: **55.2** at the 262K native window; 1M is YaRN extrapolation only.

Multimodal (the headline):

- MMMU **78.4** / MMMU-Pro **70.1** / MathVision 78.9 / MathVista-mini 85.7 / OmniDocBench1.5 **87.7** / OCRBench 89.2 / VideoMME(w sub.) **84.5** / MLVU 84.4 / LVBench 70.0

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Vendor-table discount applied on Reasoning/Tool; the multimodal rows are so dense and mutually consistent that they get near-full band credit.

- **Tool use: 66/100.** τ² 79.1 and BFCL 66.1 are real in-agent numbers, OSWorld/AndroidWorld prove embodied tool use beyond text — but DeepPlanning 18.0 and VITA 29.8 show long-horizon autonomy breaks, and it's all vendor harness. Two under Kimi K3's 68 for the missing independent row.
- **Reasoning: 70/100.** GPQA 81.7 / HMMT 83 at 9B parameters is genuinely remarkable; but heavy-budget vendor runs overstate what a laptop deployment actually gets, and there's no HLE to test the frontier bar. Best-in-class-small, not mid-size-frontier-adjacent — a notch under the cohort's 75.2.
- **Context window: 72/100.** 262K native sits in the 200K–500K band (65–84) with measured AA-LCR 63.0 / LongBench v2 55.2 pulling it to the band's lower-middle; YaRN-1M is not creditable as native. Curated 128K placeholder corrected upward.
- **Multimodal: 75/100.** Image **and video** in / text out = the 75–90 v4 band, entered at its floor: quality rows are excellent (MMMU-Pro 70.1, VideoMME 84.5, OmniDocBench 87.7) but there's no audio input and output is text-only. Kimi K3's 65 under-weights the v4 modality mapping; the cohort's 64 likewise.
- **Coding: 58/100.** LCB v6 65.6 is credible for the class; OJBench 29.2 and the complete absence of SWE-class evidence keep it well below coding specialists — agrees with the qualifying read.
- **Cost efficiency: 94/100.** Apache-2.0 in ~6 GB at 4-bit is effectively free at the edge; capped below 100 by thinking-token burn per answer. Cost excluded from Overall.
- **Overall Score: 68/100.** Mean of Tool 66, Reasoning 70, Context 72, Multimodal 75, Coding 58 = 341/5 = 68.2 → **68**. Best fit: **on-device multimodal assistant and agent prototyping** — vision+video understanding, strong tool-call parsing and competition-grade math in a 6 GB laptop footprint is a genuinely unique point in the design space; not a coding engine and not a long-horizon agent. Lands between Kimi K3's 66.6 and the cohort's 70.1 (the cohort under-credits nothing here except by ignoring that every number is vendor-harness).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (HF model card full vendor tables, llm-releases.com, qwen.ai blog, theopenweights.com — 2026-10-01) + curated `meta.json` (both "128K" and "Text in/out" flagged as placeholders contradicted by the 262K-native VLM card). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) vendor-harness-only evidence base — AA's sub-10B leadership claim is the sole external corroboration, (b) thinking-token budgets make headline numbers deployment-unrealistic at edge settings, (c) no HLE/SWE rows exist at this size class in the tracked panels.
- Revisit trigger: if Artificial Analysis publishes a full sub-10B panel with HLE/Omniscience/SWE-Verified-class rows for `Qwen3.5-9B`, re-score Reasoning/Coding; a hosted price publication would firm up Cost notes only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
