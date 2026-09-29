# Hy3 Preview — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`Hy3-preview`; open-weight preview)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's preview MoE for reasoning, coding, and agent tasks, **superseded by the full Hy3 release**. This report covers the exact preview checkpoint, not the later Hy3.
- **Provider / access:** Tencent Hunyuan open-source release on Hugging Face (`tencent/Hy3-preview` and the `tencent/Hy3-preview-Base` base checkpoint), ModelScope and GitCode; local OpenAI-compatible serving via vLLM or SGLang using the `--served-model-name hy3-preview` route with the `hy_v3` tool-call and reasoning parsers. **No inference provider currently hosts it** (the Hugging Face model page shows zero available inference providers and an open request for support). No OpenCode Zen free ID.
- **Release / knowledge:** **2026-04-23** — the official model card's News entry and the Hugging Face repository creation date both give 2026-04-23, and Tencent's press release is dated 2026-04-24. No reliable knowledge cutoff was found.
- **Supersession (confirmed 2026-09-29):** the full **Hy3** checkpoint shipped after this one, and its official repository states it was built *"Following the Hy3 Preview launch in late April"* with feedback from 50+ products and scaled-up post-training. **Do not transfer Hy3 numbers to the preview** — see the explicit separation note in the benchmarks section below. The preview remains downloadable and self-hostable; no deprecation or retirement notice exists for it.
- **IDs:** `Hy3-preview`; `hy3-preview` (vLLM/SGLang served name); `tencent/Hy3-preview`; `tencent/Hy3-preview-Base`. No first-party API route is exposed in the current public model catalog.
- **Context window:** **256K** — now confirmed on the official model card specification table (*"Context Length 256K"*) rather than only BenchLM/repository metadata, as previously recorded. Maximum output was not independently verified. This is the one place where the full Hy3 is unchanged from the preview (also 256K); the 1M figure belongs to Hy4 preview, not to Hy3.
- **Modalities:** Text input/output; reasoning (`reasoning_effort`: `no_think` default, `low`, `high`) and tool calls supported via the `hy_v3` parsers. The preview model card exposes **no verified image/video/audio input**; only the base checkpoint's public benchmark tables are published, and none of them is a multimodal benchmark.
- **Pricing (as of 2026-09-29):** Self-hosting cost is workload-dependent; **no comparable first-party API token price was found for the preview** and no Zen route is listed. Tencent recommends serving it on 8 GPUs with H20-3e-class memory.
- **Architecture (NEW — now verified, was previously unverified):** Open-weight MoE, **295B total / 21B active parameters**, plus a **3.8B MTP layer**; **80 layers** (excluding MTP), 1 MTP layer; 64 attention heads (GQA, 8 KV heads, head dim 128); hidden size 4096; intermediate size 13312; **192 experts with top-8 activated**; vocabulary 120832; BF16. Hugging Face reports a 299B safetensors size. **The 295B/21B specification belongs to the preview's own card** — the earlier pass was right to withhold it, and it is now cited from the preview rather than from the successor.
- **License (NEW — corrected):** the Hy3 preview model card states it is released under the **Tencent Hunyuan Community License Agreement**, *not* Apache-2.0. The later full Hy3 is Apache-2.0. The preview's commercial-use terms therefore differ from the family's default, which matters for self-hosting decisions.

### Raw benchmarks found

> **Checkpoint separation (important).** The official Hy3-preview model card publishes exactly four instruct-level evaluation results: **GPQA Diamond 87.2**, **SWE-bench Verified 74.4**, **HLE 30.0 (text-only)**, **Terminal-Bench 2.0 54.4**. The larger figures sometimes quoted alongside this model — **GPQA 90.4, SWE-bench Verified 78.0, SWE-bench Pro 57.9, HLE 53.2** — belong to the **full Hy3** checkpoint on `tencent/Hy3` and are **not** preview numbers; they are listed below under a separate heading and are excluded from the preview's scoring. The preview's only other published tables are **base-model** (non-instruct) rows, also kept separate.

Preview (instruct) — Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (official Hy3-preview model card; also in the model's Hugging Face eval metadata)
- The preview card states qualitatively that it scores well on **ClawEval** and **WildClawBench**, and on the search-agent benchmarks **BrowseComp** and **WideSearch** — **no numeric values are published for any of these: no verified public score found**
- Gert Labs Composite Game Benchmark: **36.91%** (BenchLM, exact Gert Labs row)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Preview (instruct) — Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official Hy3-preview model card; also in the Hugging Face eval metadata, dated 2026-04-14)
- **HLE: 30.0% — NEW on 2026-09-29** (official Hy3-preview model card, annotated *"Text-only"*; also in the Hugging Face eval metadata, dated 2026-04-14). This is a weak result and is now on record.
- MMLU-Pro, MLCR/LCR, CritPt, and hallucination metrics: **no verified public exact value found**
- The preview card additionally claims strong results on **FrontierScience-Olympiad, IMOAnswerBench**, the Tsinghua Qiuzhen College Math PhD qualifying exam (Spring '26) and the China High School Biology Olympiad (CHSBO 2025) — **no verified public score found** for any of them
- Artificial Analysis Intelligence Index: **no verified public score found** (no AA page exists for this checkpoint)

Preview (instruct) — Coding:

- SWE-bench Verified: **74.4%** (official Hy3-preview model card; also in the Hugging Face eval metadata, dated 2026-04-14)
- SWE-bench Pro, LiveCodeBench, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Preview base checkpoint (`tencent/Hy3-preview-Base`, **not** the instruct model) — Reasoning / code:

- MMLU 5-shot **87.42**; MMLU-Pro 5-shot **65.76**; MMLU-Redux 5-shot **86.86**; SuperGPQA 5-shot **51.60**; SimpleQA 5-shot **26.47**; ARC-Challenge 0-shot **95.99**; DROP 5-shot **85.50**; PIQA 4-shot **84.39**; MMMLU 5-shot **80.15**; GSM8K 4-shot **95.37**; MATH 4-shot **76.28**; C-Eval 5-shot **89.80**; CMMLU 5-shot **89.61**; Chinese-simpleQA 5-shot **69.73**; INCLUDE 5-shot **78.64**
- MBPP-plus 3-shot **78.71**; CRUXEval-I 3-shot **71.19**; CRUXEval-O 3-shot **68.38**; **LiveCodeBench-v6 1-shot 34.86**
- These base-model few-shot rows are reported for completeness and are **not** used to score the instruct checkpoint, which is the model the site tracks.

Full Hy3 (successor, **not** this preview) — for separation only:

- GPQA Diamond **90.4**; SWE-bench Verified **78.0**; SWE-bench Pro **57.9**; HLE **53.2**; SWE-bench Multilingual and Deep-SWE also carry values (official `tencent/Hy3` model card). These belong to the later checkpoint and are excluded from every score below.

Long context:

- **256K** confirmed on the official preview specification table. No independent retrieval-at-length (MRCR/RULER) score is published for the preview. The full Hy3's card reports marked MRCR improvements, but that is a Hy3 result, not a preview one.

Sources consulted: [official Tencent Hunyuan Hy3-preview Hugging Face model card](https://huggingface.co/tencent/Hy3-preview) including its evaluation-results metadata and specification table, the [Hy3-preview GitHub README](https://github.com/Tencent-Hunyuan/Hy3-preview/blob/main/README.md), the [official Tencent Hy3 repository](https://github.com/Tencent-Hunyuan/Hy3) and [Hy3 model card](https://huggingface.co/tencent/Hy3) for the successor-separation check, the [Tencent press release of 2026-04-24](https://www.tencent.com/en-us/articles/2202320.html), and [BenchLM Hy3 Preview](https://benchlm.ai/models/hy3-preview), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 65/100** *(unchanged)*. Terminal-Bench 2.0 at 54.4% and Composite Game at 36.91% remain the only surfaced agent measures. Held flat rather than raised despite the card's qualitative claims about ClawEval, WildClawBench, BrowseComp and WideSearch, because **none of those carries a published number**; missing Tau3/GDPval/Toolathlon/MCP values and the de facto absence of any hosted route keep the score where it is.
- **Reasoning: 73/100** *(was 75)*. GPQA Diamond 87.2% is a strong result and is now confirmed directly on the official card rather than via an aggregator. **Lowered 2 points** because **HLE = 30.0% (text-only)** is now on record from the same card: a model at 87.2 on GPQA but 30 on Humanity's Last Exam is strong on curated science QA and weak on hard, broad, contamination-resistant knowledge — and MMLU-Pro, MLCR and CritPt remain absent for the instruct checkpoint.
- **Context window: 72/100** *(unchanged)*. The 256K figure is now sourced from the official preview specification table, which lands in the same 200K–500K tier. Retrieval quality at length is still unmeasured for this checkpoint.
- **Multimodal: 15/100** *(unchanged)*. The preview model card exposes no image, video or audio input and publishes no multimodal benchmark; text-only is the conservative and correct classification. The multimodal capability in this family arrives with Hy4/M3, not with Hy3.
- **Coding: 70/100** *(unchanged)*. SWE-bench Verified 74.4% is confirmed on the official card and is the single most useful code number for this checkpoint. Still capped by the absence of SWE-bench Pro, LiveCodeBench, DeepSWE and SciCode for the *instruct* model, and by the base model's comparatively modest LiveCodeBench-v6 1-shot of 34.86.
- **Cost efficiency: 72/100** *(was 75)*. Open weights still avoid a vendor token price, but **the preview is licensed under the Tencent Hunyuan Community License Agreement rather than Apache-2.0**, and there is **no first-party API rate and no Zen route** to anchor the estimate against. Self-hosting a 295B MoE is also a real cost. Lowered 3 points on the licensing and route-access facts.
- **Overall Score: 59.0/100** *(was 59.4)*. (65 + 73 + 72 + 15 + 70) / 5 = 295 / 5 = **59.0**. Best fit: historical comparison of open-weight reasoning/coding checkpoints, and self-hosted reproduction of the April 2026 preview state. For any new deployment prefer the full Hy3 or Hy4 preview — this checkpoint is superseded, unlicensed for unrestricted commercial use, and no longer hosted by any inference provider.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research. Primary evidence on 2026-09-29 was the official `tencent/Hy3-preview` Hugging Face model card, including its four published instruct-level evaluation results and its specification table, cross-checked against the Hy3-preview GitHub README, the full Hy3 model card (to keep successor numbers separate), the Tencent press release and BenchLM. No Artificial Analysis page exists for this checkpoint, so no AA Intelligence Index value is claimed. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-24 pass: **HLE 30.0% (text-only) added from the official preview card**; architecture now verified on the preview's own specification table (295B/21B + 3.8B MTP, 80 layers, 192 experts top-8, 256K) instead of being withheld; **license corrected to Tencent Hunyuan Community License Agreement (not Apache-2.0)**; base-checkpoint few-shot tables and the full Hy3's GPQA 90.4 / SWE-bench Verified 78.0 / SWE-bench Pro 57.9 / HLE 53.2 recorded but explicitly **excluded from preview scoring**; release date pinned to 2026-04-23; no-hosting-provider status noted. Reasoning 75 → 73, Cost efficiency 75 → 72, Overall 59.4 → 59.0.
- Future sources: add a new file next to this one, e.g. `Hy3_Full.md`, using the same headings.
