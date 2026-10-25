# Qwen3.5 2B — findings by Step 5 Preview

- Source: Alibaba (`qwen3.5-2b`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 2B
- **Short description:** Alibaba's smallest-but-one open-weights multimodal model in the Qwen3.5 line — Apache-2.0, a 262K native window, Gated DeltaNet hybrid attention, and non-thinking by default; aimed at on-device prototyping and task-specific fine-tuning.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/Qwen/Qwen3.5-2B`. models.dev records 2 providers at $0.00/$0.00. **Not listed on OpenRouter**, so no metered API route exists — like its siblings qwen3.5-0.8b and qwen3.5-4b, both of which are also absent while qwen3.5-9b is present.
- **Release / knowledge:** released **2026-03-02** (models.dev, Alibaba, Artificial Analysis). Knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3.5-2b` (models.dev); `Qwen/Qwen3.5-2B` (Hugging Face).
- **Context window:** **262,144 tokens** natively (models.dev and the HF card agree). Max output **81,920** (models.dev; the card's thinking-mode examples use 81,920, with 32,768 as the non-thinking recommendation).
- **Modalities:** **text, image and video in; text out** (HF pipeline tag `image-text-to-text`; Artificial Analysis confirms text/image/video input). **Non-thinking mode is the default**, with thinking available via `enable_thinking`. Reasoning model; tool calling documented and measured (BFCL-V4 and τ²-Bench both reported).
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M (models.dev) — open Apache-2.0 weights, self-hosted, with no served paid route (OpenRouter does not list it).
- **Architecture:** open weights, **Apache-2.0**. 24 layers, hidden size 2048, tied embeddings of 248,320, hybrid **Gated DeltaNet + sparse attention**. **Parameter count conflicts:** the HF card says 2B, the HF sidebar says 2B, and Artificial Analysis says **2.3B (2.27B in its FAQ)**. Artificial Analysis's figure is the most precise and is used; the sidebar is read as including the vision encoder.

### Raw benchmarks found

The card presents a **four-column comparison table** (Qwen3-4B-2507 / Qwen3-1.7B / **Qwen3.5-2B** / Qwen3.5-0.8B). All figures below are the Qwen3.5-2B column.

Reasoning / knowledge — **thinking mode:**

- MMLU-Pro: **66.5**; MMLU-Redux: **79.6**; C-Eval: **73.2**; SuperGPQA: **37.5**; GPQA: **51.6**; MMMLU: **63.1**; MMLU-ProX: **52.3**; NOVA-63: **46.4**; INCLUDE: **55.4**; Global PIQA: **69.3**; PolyMATH: **26.1**; WMT24++: **45.8**; MAXIFE: **60.6**
- HMMT Feb 2025: **22.9**; HMMT Nov 2025: **19.6** (the weakest reasoning rows on the card)
- AA-LCR: **25.6**; LongBench v2: **38.7**
- **Reasoning / knowledge — non-thinking mode:** MMLU-Pro 55.3, MMLU-Redux 69.2, C-Eval 65.2, SuperGPQA 30.4, IFEval 61.2, MMMLU 56.9. The thinking-mode gains are large and consistent (+11.2 MMLU-Pro, +17.4 IFEval), which matters because **non-thinking is the default**.
- Artificial Analysis Intelligence Index: **7 (estimated), ranked #12 of 49** (Artificial Analysis; the median comparable model scores 5). No per-evaluation numbers are rendered — AA's charts are image-only — and **no publicly available API exists** for this model, which is why speed and cost-per-task are N/A.
- External Hugging Face leaderboards embedded on the model page: GPQA Diamond **44.95**, MMLU-Pro **55.3** — an independent re-measurement that lands *below* the card's thinking-mode figures and close to its non-thinking figures, consistent with the default mode being non-thinking.
- AIME: **no verified public score found** (HMMT is reported, AIME is not).
- HLE, SciCode, CritPt: no verified public score found.

Agent / tool use:

- BFCL-V4: **43.6** (thinking); τ²-Bench: **48.8** (thinking) — both mid-to-low.
- IFEval: **78.6** (thinking); IFBench: **41.3**; MultiChallenge: **33.7** (thinking) — instruction-following, adjacent evidence.
- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- **LiveCodeBench: no verified public score found.** **OJBench: no verified public score found.** The card has no coding section at all for this column.
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- MMMU: **64.2**; MMMU-Pro: **50.3** (thinking) / 47.7 (non-thinking); MathVista-mini: **76.7** / 73.9; DynaMath: **73.6** / 69.6
- VideoMME w/ subtitles: **75.6** (thinking only); w/o subtitles: **69.0**; VideoMMMU: **62.1**; MLVU: **76.2**; MVBench: **64.9**; LVBench: **57.1**; MMVU: **48.6**
- OCRBench: **84.5** / 85.4; CC-OCR: **72.9** / 75.8
- MMMU-Pro, MathVision (only a footnote about MathVision scoring, no row), DocVQA, ChartQA: no verified public score found.

Long context:

- AA-LCR **25.6** and LongBench v2 **38.7** (thinking) — the only long-context figures, and both weak. No MRCR/RULER figure at a stated length exists.
- Window is 262,144 natively; no YaRN extension figure is published for this size (unlike the 4B, which documents 1,010,000 via YaRN).

Speed / cost:

- Output speed and TTFT: **not found** — Artificial Analysis reports both N/A because no public API route exists. There is no published decode speed for this model anywhere.

### Conflicts recorded (not silently resolved)

1. **Parameter count:** 2B (HF card and sidebar) vs **2.3B / 2.27B** (Artificial Analysis). Artificial Analysis's figure is used as the most precise; the HF sidebar is read as including the vision encoder, the consistent pattern across the Qwen3.5 family.
2. **Thinking vs non-thinking performance gap:** the card's thinking-mode numbers are substantially higher than its non-thinking numbers (+11.2 MMLU-Pro, +17.4 IFEval), yet **non-thinking is the documented default**. The external HF leaderboard readings (GPQA 44.95, MMLU-Pro 55.3) sit near the *non-thinking* column, which independently corroborates that real-world usage lands on the lower set. The non-thinking figures are therefore used as the baseline for scoring and the thinking figures are recorded as the model's ceiling.
3. **Structured output:** models.dev's rendered token pattern is ambiguous (`Yes Yes - Yes`); reasoning and tool call are unambiguous `Yes`. Tool calling is demonstrated by reported BFCL-V4 and τ²-Bench scores, but strict structured output is not asserted.
4. **Availability:** absent from OpenRouter while its sibling qwen3.5-9b is present — so a metered route does not exist and only self-hosting is possible. The models.dev `$0.00/$0.00` is a self-host default, not a served free price.

### Normalized scores (1–100)

- **Tool use: 48/100.** BFCL-V4 at 43.6 and τ²-Bench at 48.8 (thinking) are genuinely low-mid for a 2B model, and IFEval at 78.6 shows reasonable instruction adherence. Terminal-Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished. Scored on the working default (non-thinking: BFCL-V4 and τ²-Bench unreported, IFEval 61.2), which is why this sits well below the 4B's 66 — the capability exists but the default mode does not engage it.
- **Reasoning: 46/100.** MMLU-Pro 66.5 and MMLU-Redux 79.6 (thinking) are respectable for 2B, but the default non-thinking figures are MMLU-Pro 55.3 / MMLU-Redux 69.2, the external HF leaderboard independently reads MMLU-Pro 55.3, and SuperGPQA is only 37.5 while HMMT is 22.9/19.6 — the weakest reasoning rows on the card. AA's Index of 7 (#12/49) is low-field. Scored 46 on the default mode, which is what a user actually gets.
- **Context window: 68/100.** 262,144-token native window sits in the methodology's 200K-500K band above the 200K floor (200K = 70), lifted a little because the max output of 81,920 is generous. Capped at 68 because the two published long-context results are weak — AA-LCR 25.6 and LongBench v2 38.7 — and no MRCR/RULER figure at a stated length exists, so the window is documented while effective long-context use is measured as poor.
- **Multimodal: 74/100.** Text, image and video in with text out — the methodology's +video band is 75-90, and the measured figures justify the lower half of it: MathVista-mini 76.7, VideoMME 75.6, MLVU 76.2 and OCRBench 84.5 are real capability, while MMMU 64.2, MMMU-Pro 50.3 and MMVU 48.6 show the limits. Scored 74 rather than 80 (the 4B's score) because every vision row is lower than the 4B's, and there is no audio input or non-text output.
- **Coding: 38/100.** No verified public score found for LiveCodeBench, OJBench, SWE-bench, SciCode, DeepSWE, Vibe Code Bench or Terminal-Bench — the HF card carries **no coding section at all** for this model. With zero coding evidence, no defensible score above the bottom band is available; 38 is chosen just above that floor and is explicitly provisional, on the same logic as GLM-4.6V-Flash's coding score.
- **Cost efficiency: 100/100.** Apache-2.0 open weights at $0.00/$0.00, self-hostable, with no served paid route at all (OpenRouter does not list it). The methodology's "$0 = 100" rule applies directly; the real constraint is GPU time for self-hosting and the unpublished decode speed, both of which are capability issues already penalised in other dimensions.
- **Overall Score: 55/100.** Mean of the five quality dims (48 + 46 + 68 + 74 + 38 = 274 ÷ 5 = 54.8, half-up → 55). Best fit: free, Apache-2.0, on-device multimodal prototyping and fine-tuning where a 262K window and zero licence cost matter and non-thinking speed is acceptable. Worst fit: reasoning-heavy or coding work without explicitly enabling thinking mode (which costs a large measured amount of capability), and anything needing measured long-context retrieval past ~128K (AA-LCR 25.6).

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Alibaba's official Hugging Face model card and its four-column comparison tables, models.dev's Alibaba catalog, and Artificial Analysis's model page with its independent Intelligence Index measurement), plus the external Hugging Face leaderboard widgets embedded on the model page that re-measured GPQA and MMLU-Pro; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — parameter count (2B vs 2.3B), and the large thinking-vs-non-thinking performance gap against a non-thinking default, corroborated by the external leaderboard readings landing near the non-thinking column. The two most decision-relevant coding benchmarks, LiveCodeBench and OJBench, are unpublished for this model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
