# Gemma 4 26B A4B — findings by Step 5 Preview

- Source: Google (`gemma-4-26b-a4b`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights 25.2B/3.8B-active multimodal MoE — a thinking model with configurable thinking modes, image and video (via frames) input, and strong benchmark numbers (GPQA 82.3, AIME 88.3) for an Apache-2.0 model at this size.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/google/gemma-4-26B-A4B-it`; also live on OpenRouter as `google/gemma-4-26b-a4b-it`. models.dev records it at $0.00/$0.00 across providers.
- **Release / knowledge:** released **2026-04-02** (models.dev and Artificial Analysis agree). Knowledge cutoff not disclosed.
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face); `google/gemma-4-26b-a4b-it` (OpenRouter); `google/gemma-4-26b-a4b-it` (models.dev).
- **Context window:** **262,144 tokens** (models.dev) with **32,768 max output**. Artificial Analysis's page body says 256k while its FAQ says 260k — a minor internal conflict, recorded below.
- **Modalities:** **text and image in; text out.** Video is supported **via frames**, not natively. **Audio is not available on this size** — the HF card states audio is a capability of only E2B, E4B and 12B, which is why the sibling `gemma-4-12b-unified` scores far higher on Multimodal. Thinking model: the card describes the family as "highly capable reasoners, with configurable thinking modes", controls thinking with a `<|think|>` token, and both models.dev and Artificial Analysis flag Reasoning = Yes.
- **Pricing (as of 2026-10-24):** **$0.10 in / $0.34 out** per 1M (Artificial Analysis's median across 7 API providers, 50% cache discount). models.dev lists $0.00/$0.00, its standard convention for open-weights models, so the metered figure is used for cost scoring and the open-weights route is noted.
- **Architecture:** open weights, **Apache-2.0**. MoE with **25.2B total / 3.8B active**, 30 layers, 8 of 128 experts plus 1 shared per token, 262K vocabulary, 1024 sliding window, and a vision encoder of ~550M parameters. HF's metadata label rounds this to "26B params". Tech report: arXiv 2607.02770.

### Raw benchmarks found

All figures are from the official Hugging Face model card's 26B-A4B column unless another source is named.

Reasoning / knowledge:

- GPQA Diamond: **82.3** (HF card; confirmed at 82.3 by the HF eval-results widget)
- MMLU-Pro: **82.6** (HF card; confirmed at 82.6 by the HF eval-results widget)
- AIME 2026 without tools: **88.3** (HF card)
- HLE without tools: **8.7**; HLE with search: **17.2** (HF card) — the weakest reasoning rows here, and the same open-domain-knowledge gap seen across the Gemma 4 family.
- MMMLU: **86.3**; BigBench-Extra Hard: **64.8** (HF card)
- Artificial Analysis Intelligence Index: **17 (estimated), ranked #15 of 141** (Artificial Analysis, reasoning variant) — an independent measurement that sits far below what the card's own GPQA/AIME figures would suggest.
- AIME, MATH-500, HLE with tools beyond the two figures above: MATH-500 and HLE-with-tools are no verified public score found.

Agent / tool use:

- Tau2-Bench: **68.2** (HF card) — the only agentic/tool-use number published for this model.
- MRCR-128k: **44.1** (HF card) — long-context retrieval with a tool-style harness; recorded under long context too.
- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- BFCL: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- LiveCodeBench v6: **77.1** (HF card)
- Codeforces Elo: **1718** (HF card) — the strongest single coding signal here.
- SWE-bench Verified / SWE-Pro: no verified public score found.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- MMMU-Pro: **73.8** (HF card)
- MATH-Vision: **82.4** (HF card)
- OmniDocBench 1.5: **0.149** edit distance (HF card — lower is better, so this is a strong document result)
- MedXPertQA-MM: **58.1** (HF card)
- MMMU (base), DocVQA, ChartQA, MathVista, OCRBench: no verified public score found — Artificial Analysis lists the eval names but publishes no per-benchmark scores for this model.

Long context:

- MRCR-128k: **44.1** (HF card) — the only long-context figure, and it is weak.
- RULER / GraphWalks / AA-LCR: no verified public score found.

Speed / cost:

- Output speed **81.5 tokens/second**, ranked #33 of 64 in class (Artificial Analysis)
- Time to first token **0.95 s** (Artificial Analysis, median across providers)
- Cost per Intelligence Index task: **N/A** — not published for this model.

### Conflicts recorded (not silently resolved)

1. **Context window:** 256k (Artificial Analysis page body) vs 260k (Artificial Analysis FAQ) vs **262,144** (models.dev). models.dev's precise figure is used.
2. **Parameter count:** 25.2B total / 3.8B active (HF card and Artificial Analysis) vs "26B params" (HF metadata label). The card's precise figures are used; the label is read as rounding to the 26B tier name.
3. **Pricing:** $0.10/$0.34 per 1M (Artificial Analysis's 7-provider median) vs $0.00/$0.00 (models.dev's open-weights convention). The metered figure is used for cost scoring, with the Apache-2.0 self-host route disclosed.
4. **Index vs card divergence:** the card's own GPQA 82.3 / AIME 88.3 / MMLU-Pro 82.6 are far stronger than Artificial Analysis's independent Index of 17 (#15/141). This is the widest vendor-vs-independent gap in this file and is the main reason Reasoning is not scored higher — the composite that includes HLE, long-context and knowledge-heavy evals lands much lower than the math/knowledge subset the card highlights.
5. **Audio:** confirmed absent on this size. Anyone needing Gemma 4 audio input must use `gemma-4-12b-unified` (or E2B/E4B), which is scored 88 on Multimodal versus this model's 76.

### Normalized scores (1–100)

- **Tool use: 66/100.** Tau2-Bench at 68.2 is a solid mid-band agentic result and MRCR-128k at 44.1 shows real tool-style harness behaviour, but Terminal-Bench, Tau3, GDPval-AA, BFCL, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished, so there is no evidence of breadth beyond Tau2. Scored 66 on the one measured agentic benchmark, capped below 75 by the missing-terminal-evidence penalty.
- **Reasoning: 76/100.** GPQA Diamond 82.3, MMLU-Pro 82.6, AIME 2026 88.3, MMMLU 86.3 and BBEH 64.8 are all strong, and Codeforces Elo 1718 corroborates genuine problem-solving ability. Capped at 76 rather than the frontier band by **HLE without tools at 8.7** (and only 17.2% even with search), and by Artificial Analysis's independent Intelligence Index of **17**, which ranks this at #15/141 — a composite far below the card's math-and-knowledge highlights. The gap between those two views is the single most important caveat on this file.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output sits in the methodology's 200K-500K band above the 200K floor (200K = 70), lifted by the MoE's 1024 sliding window plus 8-of-128 expert routing. Held to 78 because the only long-context measurement, MRCR-128k at 44.1, is weak, and no RULER/GraphWalks/AA-LCR figure exists at any length.
- **Multimodal: 76/100.** Text and image in, video via frames, text out — no audio on this size (audio is exclusive to E2B/E4B/12B in the family). MMMU-Pro 73.8 and MATH-Vision 82.4 are genuinely strong vision results, and OmniDocBench at 0.149 edit distance is an excellent document-extraction figure. Scored 76, just inside the methodology's +video/PDF band (75-90), held below 80 by the absence of audio and native video and by no non-text output.
- **Coding: 76/100.** LiveCodeBench v6 at 77.1 is a strong mid-band result for a 25B-A4B MoE and Codeforces Elo 1718 is the strongest single signal in this file, but SWE-bench Verified, SWE-Pro, SciCode, DeepSWE, Vibe Code Bench and Terminal-Bench are all unpublished, so no repo-scale engineering evidence exists. Scored 76 on competitive-programming strength, explicitly not extrapolated to software engineering.
- **Cost efficiency: 100/100.** Apache-2.0 open weights with models.dev listing $0.00/$0.00 across providers and a metered route at $0.10/$0.34 per 1M. The open-weights route makes this a full-marks cost score under the methodology's "$0 = 100" rule, with the published API price disclosed for anyone who cannot self-host.
- **Overall Score: 74/100.** Mean of the five quality dims (66 + 76 + 78 + 76 + 76 = 372 ÷ 5 = 74.4, half-up → 74). Best fit: free, Apache-2.0, self-hosted competitive-programming and math-heavy work with image document understanding at a 262K window. Worst fit: open-domain knowledge questions (HLE 8.7% without tools), long-context retrieval past ~128K (MRCR 44.1), any audio input (not supported at this size — use the 12B Unified), and repo-scale coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Google's official Hugging Face model card and its benchmark column, Artificial Analysis's model page with its independent Intelligence Index and speed/latency measurements, and models.dev's Google catalog), with OpenRouter checked for availability; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: the widest vendor-vs-independent divergence in this file is GPQA 82.3 / AIME 88.3 on the card against Artificial Analysis's Index of 17 at #15/141 — that gap, plus HLE at 8.7% without tools, is what caps Reasoning at 76. Audio input is confirmed absent at this size, which is the main thing separating it from the 12B Unified sibling.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
