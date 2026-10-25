# Qwen3.5 0.8B — findings by Step 5 Preview

- Source: Alibaba (`qwen3.5-0.8b`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 0.8B
- **Short description:** Alibaba's smallest open-weights multimodal model — Apache-2.0, 262K native window, built for on-device chat, reasoning and tool use, and explicitly positioned by Alibaba for prototyping and task-specific fine-tuning rather than general use.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/Qwen/Qwen3.5-0.8B` (base model: `Qwen3.5-0.8B-Base`). models.dev records **1 provider** — QVAC/Alibaba, serving a reduced 32,768-token context with 8,192 max output. **Not listed on OpenRouter**, so no general metered API route exists.
- **Release / knowledge:** released **2026-03-02** (models.dev, Artificial Analysis). Knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3.5-0.8b` (models.dev); `Qwen/Qwen3.5-0.8B` (Hugging Face).
- **Context window:** **262,144 tokens** natively (HF card and models.dev agree). Max output **81,920** (card example) with **32,768 recommended**. Note the only served provider caps context at 32,768 / output at 8,192 — a 8x reduction on the model's native window.
- **Modalities:** **image and video in, text out** — the HF pipeline tag is `image-text-to-text` and Artificial Analysis confirms text/image/video input. **Non-thinking mode is the default**; the card warns this size is "more prone to entering thinking loops" when thinking is enabled. Reasoning flag Yes on models.dev and AA; tool calling is documented and functional (`--tool-call-parser qwen3_coder` for vLLM/SGLang, plus Qwen-Agent and Qwen Code sections).
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M (models.dev) — Apache-2.0 open weights. As with its siblings, this is a self-host default rather than a served price, since no general metered route exists.
- **Architecture:** open weights, **Apache-2.0**. Causal LM with a vision encoder, 24 layers, hidden size 1024, FFN 3584, tied embeddings of 248,320, hybrid **Gated DeltaNet + Gated Attention**, MTP-trained. **Parameter count conflicts:** the HF card says 0.8B, the HF sidebar says **0.9B**, and Artificial Analysis says **0.873B**. Artificial Analysis's figure is used as the most precise.

### Raw benchmarks found

The card presents a **four-column comparison table** (Qwen3-4B-2507 / Qwen3-1.7B / **Qwen3.5-0.8B** — with the 2B as the fourth). All figures below are the Qwen3.5-0.8B column.

Reasoning / knowledge — **thinking mode:**

- MMLU-Pro: **42.3**; MMLU-Redux: **59.5**; C-Eval: **50.5**; SuperGPQA: **21.3**; **GPQA Diamond: 11.9** (also confirmed in the HF eval-results widget via Idavidrein/gpqa); MMMLU: **44.3**; MMLU-ProX: **34.6**; NOVA-63: **42.4**; INCLUDE: **40.6**; Global PIQA: **59.4**; PolyMATH: **8.2**; WMT24++: **27.2**; MAXIFE: **39.2**
- **AA-LCR: 4.7** — by far the weakest number in this file, and effectively zero long-context reasoning.
- LongBench v2: **26.1**
- HMMT Feb 25 and HMMT Nov 25: **both reported as "--"** — Alibaba's own card declines to publish them for this size.
- **Reasoning / knowledge — non-thinking mode:** MMLU-Pro 29.7, MMLU-Redux 48.5, C-Eval 46.4, SuperGPQA 16.9, IFEval 52.1, MMMLU 34.1. The thinking-mode gains are large (+12.6 MMLU-Pro) but the absolute levels are low, and **non-thinking is the default**.
- Artificial Analysis Intelligence Index: **6 (estimated), ranked #17 of 49** (Artificial Analysis). No public API exists, so speed and cost-per-task are both N/A. Openness ranked #11 of 335.
- AIME, HLE, SciCode, CritPt: no verified public score found.

Agent / tool use:

- BFCL-V4: **25.3** (thinking); **τ²-Bench: 11.6** (thinking) — very low.
- IFEval: **44.0** (thinking); IFBench: **21.0**; MultiChallenge: **18.9** (thinking).
- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- **LiveCodeBench: no verified public score found. OJBench: no verified public score found.** The card has no coding section for this model.
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- MMMU: **49** (thinking) / 47.4 (non-thinking); MMMU-Pro: **31.2** / 31.4; MathVista: **62.2** / 58.6; DynaMath: **49.9** / 46.5; **ZEROBench: 0.0 / 0.0**; RealWorldQA: 63.4 / 61.6; MMStar: 58.3 / 55.9; MMBenchEN-DEV-v1.1: 69.9 / 68.0; SimpleVQA: 31.3 / 30.4; HallusionBench: 53.1 / 46.7; MMLongBench-Doc: 33.6 / 28.1; AI2D: 69.9 / 68.7; CC-OCR: 63.2 / 66.7; OCRBench: 74.5 / 79.1; RefCOCO: 79.3 / 77.8; CountBench: 77.0 / 68.6; ODInW13: 31.6 / 33.2; ERQA: 34.5 / 23.8; EmbSpatialBench: 68.6 / 54.6; RefSpatialBench: 23.5 / 21.7; SUNRGBD: 26.1 / 23.3; Nuscene: 5.7 / 7.0
- Video: VideoMME 63.8 / 57.7 (w/ and w/o subtitles); VideoMMMU 44.3; MLVU 65.6; MVBench 55.8; LVBench 45.1; MMVU 34.3; ScreenSpot Pro 46.5
- Medical/other: SLAKE 62.6 / 59.5; PMC-VQA 40.4 / 45.5; MedXpertQA-MM 17.1 / 25.3
- HF eval widget: ParseBench mean 28.4 / Text 82 / Formatting 43.1.

Long context:

- **AA-LCR: 4.7** and LongBench v2: **26.1** — the only long-context figures, and the weakest in this queue. No MRCR/RULER figure at a stated length exists.
- The single served provider caps context at 32,768, an 8x reduction on the native 262,144 window, so in practice available usage is far below the documented window.

Speed / cost:

- Output speed and TTFT: **not found** — no public API route exists (Artificial Analysis reports both N/A).

### Conflicts recorded (not silently resolved)

1. **Parameter count:** 0.8B (HF card) vs **0.9B** (HF sidebar) vs **0.873B** (Artificial Analysis). Artificial Analysis's figure is used.
2. **Structured output is unverified.** models.dev's flattened token pattern (`Yes Yes - Yes`) is ambiguous, and cross-checking the 122B-A10B provider rows shows the fourth token is *Temperature*, with **Structured rendering "-"** at both model and provider level. So the earlier working assumption of "structured output Yes" is **not confirmed** for this family, and structured output is explicitly not claimed here. Tool calling, by contrast, is documented with concrete serving flags.
3. **Reasoning flag conflicts:** models.dev's canonical record says Reasoning Yes and Artificial Analysis labels it "Qwen3.5 0.8B (Reasoning)", but the single served provider (QVAC/Alibaba) carries **Reasoning: No**. Combined with the card's statement that this size is "more prone to entering thinking loops", reasoning capability should be treated as fragile rather than reliable at this size.
4. **Window vs. delivery gap:** 262,144 native (model) vs 32,768 (the only provider that serves it) — an 8x reduction that no catalog headline surfaces.
5. **ZEROBench at 0.0/0.0** is a striking published zero and is recorded as Alibaba's own measurement, not treated as a data error.

### Normalized scores (1–100)

- **Tool use: 28/100.** BFCL-V4 at 25.3 and τ²-Bench at 11.6 (thinking) are very low, and IFEval at 44.0 with MultiChallenge at 18.9 corroborate. Terminal-Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished. Tool calling is genuinely functional (documented serving flags), which is what keeps this above the bottom band, but every measured agentic number is in the lowest quartile. Scored 28.
- **Reasoning: 28/100.** MMLU-Pro 42.3 and GPQA Diamond 11.9 (thinking) are low, SuperGPQA 21.3 and PolyMATH 8.2 lower still, HMMT is unpublished by Alibaba's own choice ("--"), and AA's Index of 6 (#17/49) is the bottom of its field. Non-thinking defaults are MMLU-Pro 29.7. The one served provider flags Reasoning **No**, and the card itself warns about thinking loops at this size. Scored 28 with the default mode as the baseline.
- **Context window: 55/100.** 262,144 native sits in the 200K-500K band, but this is the clearest case in the queue of a documented window that is unusable in practice: AA-LCR is **4.7** and LongBench v2 is **26.1**, both effectively zero, and the only provider that serves the model caps context at 32,768 — an 8x reduction. The score sits at the low end of the 100K-200K band rather than the 200K-500K band, because measured long-context behaviour is worse than a 100K model with real retrieval.
- **Multimodal: 62/100.** Image and video in with text out — the methodology's +video band is 75-90, but the measured figures do not support that band: MathVista 62.2, CC-OCR 63.2, OCRBench 74.5 and RefCOCO 79.3 are real, while MMMU 49, MMMU-Pro 31.2, MMVU 34.3, SimpleVQA 31.3 and **ZEROBench 0.0** are poor. Scored 62 — better than a text-only 15 because vision genuinely works at a basic level, far below the 2B's 74 and the 4B's 80, with every row lower than both.
- **Coding: 28/100.** No verified public score found for LiveCodeBench, OJBench, SWE-bench, SciCode, DeepSWE, Vibe Code Bench or Terminal-Bench — the card carries no coding section for this model. With zero coding evidence at the smallest size in the family, no defensible score above the bottom band is available; 28 is provisional, on the same logic applied to the 2B (38) and GLM-4.6V-Flash (40), scaled down for size.
- **Cost efficiency: 100/100.** Apache-2.0 open weights at $0.00/$0.00, self-hostable on a single small GPU — Alibaba's own stated intent is "prototyping, task-specific fine-tuning", which this cost profile serves perfectly. The methodology's "$0 = 100" rule applies directly.
- **Overall Score: 40/100.** Mean of the five quality dims (28 + 28 + 55 + 62 + 28 = 201 ÷ 5 = 40.2, half-up → 40). Best fit: free, Apache-2.0, on-device or single-small-GPU fine-tuning and image classification/prototyping where a $0 price and a permissive licence are the entire point. Worst fit: any general-purpose use — reasoning, coding, agentic tasks, and long-context retrieval are all measured at near-zero levels, and the one served route cuts the window 8x.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Alibaba's official Hugging Face model card and its four-column comparison tables, models.dev's Alibaba catalog with its single provider record, and Artificial Analysis's model page with its independent Intelligence Index measurement), plus the HF eval-results and ParseBench widgets; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — parameter count (0.8B vs 0.9B vs 0.873B), an unverified structured-output claim (the models.dev token that looked like "Yes" is Temperature, with Structured rendering "-"), and a reasoning-flag conflict between the canonical record (Yes) and the only serving provider (No). ZEROBench at 0.0/0.0 is Alibaba's own published figure and is recorded as measured, not as an error.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
