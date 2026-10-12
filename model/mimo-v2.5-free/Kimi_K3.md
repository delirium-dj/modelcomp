# MiMo V2.5 (Free) — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5 (`opencode/mimo-v2.5-free`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE (text/image/video/audio in) with agentic coding strength; the Free tier on OpenCode Zen caps context at 200K of the native 1M window.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions; the `xiaomi/mimo-v2.5` OpenCode Data page shows the model as an open-weights HF release with heavy 2026-Q3 usage, waning after MiMo V2.6's launch); open weights `XiaomiMiMo/MiMo-V2.5` (HF, link confirmed live); hosted APIs.
- **Release / knowledge:** Released 2026-04-22 (OpenCode Data, newly verified — first pass had "exact date not verified"); knowledge cutoff listed 2024-12 (catalog — plausibly base-model cutoff; noted as unusual).
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free ID); HF `XiaomiMiMo/MiMo-V2.5`.
- **Context window:** native 1M / max output 131K (OpenCode Data — previously unverified output); **200K cap on the Zen Free tier**; 32K max output on the Zen listing.
- **Modalities:** text/image/audio/video in (OpenCode Data confirms omnimodal); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** Free Zen tier ($0, capped); hosted catalog $0.16/M input, $0.32/M output, $0.004 cached (resolves my earlier ~$0.14/$0.28 note — catalog figure governs).
- **Architecture:** open-weights MoE (HF-confirmed); params: see MiMo V2.5 family cards.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **62.3%**; MM-ClawBench: **23.8%** (official HF card via OpenCode Data; both match benchlm.ai); ResearchClawBench: **16.9%** (benchlm.ai)
- Terminal-Bench 2.0: **65.8%** (official HF card; matches benchlm.ai); TB 2.1 (Vals): **60.7%** (benchlm.ai)
- Gert Labs: **46.9%** (benchlm.ai)
- GDPval-AA / Tau2/Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.6%** (benchlm.ai)
- MMLU-Pro (Vals): **82.9%** (benchlm.ai)
- HLE / LCR / CritPt / AA indices / Omniscience: no verified public score found

Coding:

- SWE-bench (Vals): **71.0%**; SWE-bench Pro: **56.1%** (official HF card; matches benchlm.ai)
- MiMo Coding Bench: **71.8** (official HF card — new this pass)
- LiveCodeBench (Vals): **81.5%** (benchlm.ai)
- SciCode / Coding Index: no verified public score found

Long context:

- Native 1M window / 131K output (catalog-verified); no MRCR/RULER/LCR retrieval score found (Zen Free tier caps at 200K anyway).

Multimodal:

- Video-MME (w/ subtitle): **87.7%** (official HF card; matches); CharXiv: **81.0%** (official; matches); MMMU-Pro: **77.9%** (official; matches); HR-Bench: **88.5%**, OmniDocBench: **87.2%**, DailyOmni: **83.5%**, VideoHolmes: **64%** (official HF card — new this pass); Design Arena Website: **1276 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** Unchanged: Claw-Eval 62.3%, TB 2.0 65.8%; capped by MM-ClawBench 23.8% and missing GDPval/Tau rows.
- **Reasoning: 68/100.** Unchanged: GPQA (Vals) 81.6%, MMLU-Pro 82.9%; capped by zero hard-reasoning coverage (no HLE/CritPt/ARC rows).
- **Context window: 70/100.** Unchanged: native 1M but Free tier capped at 200K and no retrieval measurements; scored for the Zen-usable configuration.
- **Multimodal: 86/100.** Unchanged: true omni breadth (official card now covers Video-MME 87.7% / HR-Bench 88.5% / OmniDocBench 87.2% / DailyOmni 83.5%); text-only output caps slightly.
- **Coding: 74/100.** Unchanged: LiveCodeBench 81.5%, SWE-bench (Vals) 71.0%; capped by SWE-bench Pro 56.1%.
- **Cost efficiency: 98/100.** Verified: $0 on Zen Free tier; hosted $0.16/$0.32 — remains near-free either way.
- **Overall Score: 73/100.** Mean of the five quality dims (68+68+70+86+74)/5 = 73.2 → 73 (unchanged). Best fit: free omni-modal (video/audio) analysis and everyday coding on Zen.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official Xiaomi HF model card `XiaomiMiMo/MiMo-V2.5` benchmark table transcribed by OpenCode Data `xiaomi/mimo-v2-5` incl. release/cutoff/pricing/usage; benchlm.ai scorecard + Zen listing from first pass). Second pass over my 2026-09-24 file: verified release (2026-04-22), 131K output, pricing, and open weights; added official multimodal/coding rows (MiMo Coding Bench, HR-Bench, OmniDocBench, DailyOmni, VideoHolmes). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
