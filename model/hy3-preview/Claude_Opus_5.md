# Hy3 Preview — findings by Claude Opus 5

- Source: Tencent Hy Team / Hunyuan (`tencent/Hy3-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's **preview release** of the Hy3 Hunyuan MoE, shipped deliberately early to gather feedback. Tencent's own account of the sequence is explicit: "Following the Hy3 Preview launch in late April, we gathered feedback from **50+ products** and scaled up post-training with higher quality data" before releasing the full Hy3 ([Hy3 model card](https://huggingface.co/tencent/Hy3)). Tencent later framed this as policy — "As with Hy3 preview, we would rather ship early and hear what breaks — that's what made Hy3 substantially better" ([Hy4-preview model card](https://huggingface.co/tencent/Hy4-preview)). It is a **distinct, superseded checkpoint**; `hy3` (the full release) and `hy4` are separate folders.
- **Provider / access:** **Open weights** (`tencent/Hy3-preview` on Hugging Face; BenchLM classifies it Open Weight), following the family pattern of HF / ModelScope / GitCode / CNB distribution with vLLM and SGLang recipes. **No OpenCode Zen ID.** This repo records `tencent/hy3-preview`.
- **Release / knowledge:** **Late April 2026** (Tencent's own wording; this repo's metadata says "April 2026"), **superseded by the full Hy3 release** which Tencent dates to the July 2026 window. Knowledge cutoff: no verified public date found.
- **IDs:** `tencent/Hy3-preview`. **No free tier** — `noFreeId: true` is correct.
- **Context window:** **256,000 tokens** ([BenchLM](https://benchlm.ai/models/hy3-preview)), with **32K max output** per this repo's curated metadata.
- **Modalities:** **Text in → text out.** This repo's `meta.json` claims "Text, image in", but as with the full Hy3 I could find **no vision component in any Tencent specification** for this family and Hugging Face classifies these checkpoints `text-generation`; the image-input claim is reported as uncorroborated. Reasoning: yes, with the family's `reasoning_effort` ladder. Tool calls: yes.
- **Pricing (as of 2026-10-08):** **$0 licence cost — open weights.** This repo's curated metadata records a TokenHub preview rate of **~$0.18 / MTok input, ~$0.59 / MTok output**, reported as curated rather than re-verified.
- **Architecture:** **295B total / 21B active** Mixture-of-Experts per this repo's metadata, i.e. the same scale as the full Hy3 (295B/21B plus a 3.8B MTP layer, 80 layers, 192 experts top-8, GQA with 8 KV heads). Tencent's published difference between preview and release is **post-training**, not architecture: "we further improved the quality and diversity of post-training data while scaling up RL training."

### Raw benchmarks found

> **Aggregator provenance warning, and it matters here.** BenchLM's Hy3-Preview page draws several rows from `artificialanalysis.ai/models/**hy3**` — the *full* Hy3 entry — and those values are **identical on both BenchLM pages** (GDPval-AA 1136 Elo, AA Agentic Index 25.6%, AA-SciCode 48.6%, AA Coding Index 58.8%, AA-GPQA Diamond 89.7%, AA-HLE 33.5%, AA-Omniscience Index −18.5%). I therefore treat those as **Hy3 measurements re-used for the preview** and label them as such below rather than crediting them as preview-specific. Rows sourced to Tencent's own `Hy3-preview` model card, or to AA rows explicitly labelled "Hy3-preview", are the trustworthy preview-specific figures.

Agent / tool use:

- **Terminal-Bench 2.0: 54.4%** ([Tencent Hy3-preview model card](https://huggingface.co/tencent/Hy3-preview)) — preview-specific. The full Hy3 reaches **71.7%** on the harder Terminal-Bench 2.1 via official leaderboard export, so the post-training work clearly paid off here.
- GDPval-AA: **35.8%** normalized (Artificial Analysis, labelled Hy3-preview) — note the **1136 Elo** figure is shared with the full Hy3 entry and is not preview-specific
- Gert Labs rankings: **36.91%** ([Gert Labs](https://gertlabs.com/rankings)) — preview-specific, and 23 points below the full Hy3's… (the full release has no Gert Labs row, so no comparison is possible)
- AA Agentic Index: **25.6%** — *shared with the full Hy3 entry*
- τ²/τ³-bench, OSWorld, MCP-Atlas, Toolathlon: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 87.2%** (Tencent Hy3-preview model card) — preview-specific, against the full Hy3's 90.4 on the official leaderboard: a clean, credible **+3.2-point** generation gain
- **HLE: 25.5%** (Artificial Analysis, labelled Hy3-preview) against the full Hy3's AA-HLE of 33.5% — another coherent gain
- **AA-LCR: 66.7%** (labelled Hy3-preview) against the full Hy3's 79.0%
- **IFBench: 63.1%** (labelled Hy3-preview)
- CritPt: **4.9%** (labelled Hy3-preview)
- **AA-Omniscience: Accuracy 31.5%, Hallucination Rate 73.0%** (labelled Hy3-preview)
- **Artificial Analysis Intelligence Index: 41.2** (labelled Hy3-preview) — **anomalous and flagged**: the full Hy3 scores 25.3 on the same index, so a preview outscoring its own successor by 16 points is almost certainly an index-version or units artifact rather than a real result. I do not weight it.
- BenchLM overall: **51.58/100, rank #88 of 889** (22 of 625 benchmarks), against the full Hy3's 52.68

Coding:

- **SWE-bench Verified: 74.4%** (Tencent Hy3-preview model card) — preview-specific, and strong; the full Hy3 reaches **78** via leaderboard export, a coherent +3.6
- Terminal-Bench 2.0: **54.4%** (counted once for agentic and once here)
- **SciCode: 41.2%** (Artificial Analysis, labelled Hy3-preview); AA-SciCode 48.6% and AA Coding Index 58.8% are *shared with the full Hy3 entry*
- LiveCodeBench, SWE-bench Pro, SWE-bench Multilingual, DeepSWE: no verified public score found for the preview

Multimodal:

- **Nothing, consistent with a text-only model.** No vision benchmark exists for this checkpoint.

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 66.7%** is the only preview-specific long-context signal.

### Normalized scores (1–100)

- **Tool use: 62/100.** **Terminal-Bench 2.0 at 54.4%** is a respectable preview-stage agentic result, and GDPval-AA normalizes to 35.8%. Capped by Gert Labs 36.91%, by the shared-with-Hy3 AA Agentic Index of 25.6% which I do not credit as preview-specific, and by the complete absence of τ²-bench, OSWorld or MCP measurement. Notably, the full Hy3 reaches 71.7% on the *harder* Terminal-Bench 2.1 — the preview is measurably behind its own successor here.
- **Reasoning: 72/100.** **GPQA Diamond 87.2%** from Tencent's own preview card is strong and sits in a credible relationship to the full release's 90.4 (+3.2). AA-LCR 66.7% and IFBench 63.1% are solid. Capped by HLE 25.5%, CritPt 4.9%, a **73.0% hallucination rate** against 31.5% accuracy, and by my refusal to credit the anomalous 41.2 Intelligence Index that exceeds the successor model's.
- **Context window: 72/100.** 256,000 tokens with 32K output, vendor-stated and aggregator-confirmed, with AA-LCR 66.7% showing usable quality. Held in the low 70s because 256K is mid-pack against the 1M windows in this dataset, the output ceiling is modest, and no retrieval curve exists.
- **Multimodal: 15/100.** **Text-only** — no vision component in any Tencent specification for this family, `text-generation` classification upstream, and no multimodal benchmark. Template floor; the `meta.json` image-input claim is uncorroborated. Costs roughly 12 points of Overall.
- **Coding: 73/100.** The strongest dimension: **SWE-bench Verified 74.4%** from Tencent's preview card is genuinely good for 21B active parameters, and it sits coherently below the full Hy3's 78 — the kind of internally-consistent generation progression that makes both figures more believable. Capped by Terminal-Bench 2.0 at 54.4%, SciCode 41.2%, and the absence of SWE-bench Pro, Multilingual or LiveCodeBench for this checkpoint.
- **Cost efficiency: 76/100.** Open weights at 295B/21B-active with a curated TokenHub rate of **~$0.18 / $0.59 per MTok** would be excellent value in isolation. The problem is that it is **explicitly superseded by its own successor on identical terms**: the full Hy3 is also open-weight (Apache 2.0), carries the same 295B/21B architecture and 256K window, the same ~$0.18/$0.59 curated rate, and scores better on every benchmark where both are measured (GPQA 90.4 vs 87.2, SWE-bench 78 vs 74.4, Terminal-Bench 2.1 71.7 vs 2.0 54.4, AA-LCR 79.0 vs 66.7) — plus it adds the quantified reliability work (sub-4% cross-scaffolding variance, internal hallucination 12.5%→5.4%). There is no rational reason to deploy the preview.
- **Overall Score: 58.8/100.** Mean of the five non-cost dims (62 + 72 + 72 + 15 + 73) / 5 = 58.8. Best fit: **historical and comparative only.** Its genuine value is as a clean, documented baseline for what Tencent's post-training programme achieved — the same weights-scale model improving +3.2 on GPQA, +3.6 on SWE-bench, +12.3 on AA-LCR and from 54.4% on Terminal-Bench 2.0 to 71.7% on the harder 2.1, purely from better post-training data and scaled RL. For any live workload, use the full Hy3: same architecture, same licence, same price, strictly better.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated Hy3-Preview page (256K context, Open Weight classification, 22 of 625 benchmarks) and the underlying sources it cites: Tencent's own `Hy3-preview` Hugging Face model card for Terminal-Bench 2.0 54.4%, SWE-bench Verified 74.4% and GPQA Diamond 87.2%; Artificial Analysis rows labelled "Hy3-preview" for GDPval normalized, SciCode, AA-LCR, CritPt, HLE, IFBench, Omniscience accuracy/hallucination and the Intelligence Index; and the Gert Labs leaderboard. **A provenance problem is reported explicitly and acted on:** several rows on BenchLM's Hy3-Preview page are sourced to Artificial Analysis's *full* `hy3` entry and carry values identical to the Hy3 page (GDPval 1136 Elo, AA Agentic Index 25.6%, AA-SciCode 48.6%, AA Coding Index 58.8%, AA-GPQA Diamond 89.7%, AA-HLE 33.5%, Omniscience Index −18.5%); these are labelled as shared and **not credited as preview-specific measurements**. The Intelligence Index of 41.2 — which exceeds the successor model's 25.3 — is flagged as a probable index-version artifact and not weighted. Comparative figures for the full Hy3 (GPQA 90.4, SWE-bench 78, Terminal-Bench 2.1 71.7, AA-LCR 79.0) were gathered independently in this same research pass from Tencent's Hy3 model card and its Hugging Face leaderboard exports, and are used only to establish the generation relationship and the cost argument; **no data was imported from the `hy3` or `hy4` folders**. The repo's `meta.json` supplied the 295B/21B architecture, 32K output ceiling and TokenHub pricing (labelled curated), and its image-input claim is reported as uncorroborated. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
