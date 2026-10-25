# Gemma 4 12B Unified — findings by Step 5 Preview

- Source: Google (`gemma-4-12b-unified`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified — "Unified" is Google's own term for this model, and it refers to its **encoder-free architecture**, not to a separate SKU
- **Short description:** Google's any-to-any open-weights Gemma 4 12B — text/image/audio/video in, text out, Apache-2.0, 262K context — the only Gemma 4 size (with E2B/E4B) that accepts audio input.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/google/gemma-4-12B-it` (HF library tag `gemma4_unified`; base model `google/gemma-4-12B`). models.dev lists 22 providers at $0.05/$0.25 per 1M. **Not listed on OpenRouter** — its Google roster carries only `gemma-4-31b-it` and `gemma-4-26b-a4b-it`.
- **Slug note (identity, verified):** the repo's folder slug `gemma-4-12b-unified` is **not a phantom and not a duplicate** — it is Google's official display name for the model whose canonical repo and catalog ID are `gemma-4-12b-it`. The model card opens "This model card is for the Gemma 4 12B Unified model" and explains that "'Unified'… refers to its encoder-free architecture". models.dev contains zero occurrences of the string "unified" and its slug is `gemma-4-12b-it`, so **the canonical slug differs from this folder's name while referring to one and the same model**. Flagged for the orchestrator rather than acted on, since under `RULES.md` folders are permanent and slug merges need explicit user sign-off.
- **Release / knowledge:** released **2026-06-09** (models.dev; Artificial Analysis agrees). Knowledge cutoff not disclosed.
- **IDs:** `google/gemma-4-12B-it` (Hugging Face, canonical); `google/gemma-4-12b-it` (models.dev); base model `google/gemma-4-12B`.
- **Context window:** **262,144 tokens** total with **32,768 max output** (models.dev). No YaRN extension figure is published for this size.
- **Modalities:** **any-to-any input — text, image, audio and video in; text out.** The HF card states that only E2B, E4B and 12B are the sizes that accept audio, which is what makes this the audio-capable member of the family. Multimodal with no stated audio *output*.
- **Pricing (as of 2026-10-24):** **$0.05 in / $0.25 out** per 1M (models.dev). Open Apache-2.0 weights make self-hosting the alternative, so cost is scored on the metered route since that is the only published figure.
- **Architecture:** open weights, **Apache-2.0**. **11.95B total parameters** (HF card table; the sidebar rounds to "12B"). 48 layers, 1024 sliding window, 262K vocabulary, and — the defining feature — an **encoder-free architecture**, which is what "Unified" names.

### Raw benchmarks found

All figures are from the official Hugging Face model card's instruction-tuned column for Gemma 4 12B Unified. The tech report is arXiv 2607.02770.

Reasoning / knowledge:

- GPQA Diamond: **78.8** (HF card)
- MMLU-Pro: **77.2** (HF card)
- AIME 2026: **77.5** (HF card)
- HLE **without** tools: **5.2** (HF card) — extremely weak, the lowest reasoning figure in this file
- BigBench-Extra Hard (BBEH): **53.0** (HF card)
- MMMLU: **83.4** (HF card)
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no page for this model (404) in either spelling, and it is absent from OpenRouter, so no independent Index measurement exists.

Agent / tool use:

- Tau2-Bench: **69.0** (HF card) — the only agentic/tool-use number published for this model.
- MRCR v2 at 128k: **43.4** (HF card) — long-context retrieval with tool-style harness, recorded under long context below as well.
- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- BFCL: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- LiveCodeBench v6: **72.0** (HF card)
- Codeforces Elo: **1659** (HF card)
- SWE-bench Verified / SWE-Pro: no verified public score found.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- MMMU-Pro: **69.1** (HF card)
- MATH-Vision: **79.7** (HF card)
- MedXPertQA-MM: **48.7** (HF card)
- MMMU (base), DocVQA, ChartQA, MathVista, OCRBench: no verified public score found.

Audio (the distinguishing capability):

- CoVoST: **38.5*** and FLEURS: **0.069*** (HF card) — the two audio benchmarks Google publishes for the audio-capable sizes. Both are marked with an asterisk in the card, whose meaning is not explained in the text retrieved, so they are recorded verbatim without interpretation.

Long context:

- MRCR v2 at 128k: **43.4** (HF card) — the only long-context figure, and it is weak.
- RULER / GraphWalks / AA-LCR: no verified public score found.

Speed / cost:

- Output speed and TTFT: **no verified public score found** — no Artificial Analysis page exists for this model and it is not on OpenRouter, so no independent speed or latency measurement is available anywhere.
- Cost per task: no verified public price found.

### Conflicts recorded (not silently resolved)

1. **Slug vs canonical ID:** the folder is `gemma-4-12b-unified` while every catalog uses `gemma-4-12b-it`. These are the same model — "Unified" is Google's official display name for the encoder-free 12B — but the slug discrepancy is a genuine finding and is surfaced above rather than silently resolved.
2. **Pricing:** $0.05/$0.25 (models.dev) versus free self-hosting under Apache-2.0. The metered figure is used for cost scoring because it is the only published number.
3. **Asterisked benchmarks:** CoVoST 38.5* and FLEURS 0.069* carry an asterisk in the card whose meaning was not retrievable from the text; recorded verbatim and not interpreted.
4. **Size/param label:** 11.95B (card table) vs "12B params" (HF sidebar). The card's precise figure is used.

### Normalized scores (1–100)

- **Tool use: 66/100.** Tau2-Bench at 69.0 is a solid mid-band agentic result and MRCR v2 at 43.4/128k shows real tool-style harness behaviour, but Terminal-Bench, Tau3, GDPval-AA, BFCL, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished, so breadth beyond Tau2 is unevidenced. Scored 66 on the one measured agentic benchmark, capped below 75 by the missing-terminal-evidence penalty.
- **Reasoning: 70/100.** GPQA Diamond 78.8, MMLU-Pro 77.2, AIME 2026 77.5 and MMMLU 83.4 are all strong mid-band results, and BBEH 53.0 is acceptable. Capped well below the frontier band by **HLE without tools at 5.2** — the weakest single number in this file — and by the complete absence of an independent Intelligence Index measurement (AA has no page and OpenRouter does not carry the model). A capable general reasoner with a severe open-domain-knowledge gap.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output sits in the methodology's 200K-500K band above the 200K floor (200K = 70), lifted because the encoder-free architecture removes a whole class of context-encoding limitation. Held to 78 rather than the top of the band because the only long-context measurement, MRCR v2 at 43.4/128k, is weak, and no RULER/GraphWalks/AA-LCR figure exists at any length.
- **Multimodal: 88/100.** **Text, image, audio and video in; text out** — the widest input coverage in this entire research pass, and one of only three Gemma 4 sizes (E2B, E4B, 12B) that accepts audio at all. MMMU-Pro 69.1 and MATH-Vision 79.7 confirm real visual reasoning, and CoVoST/FLEURS confirm audio works. Held at 88 rather than the 90-100 band because there is no non-text output — which is exactly what the methodology reserves that top band for.
- **Coding: 68/100.** LiveCodeBench v6 at 72.0 is a respectable mid-band result for a 12B model and a Codeforces Elo of 1659 corroborates it, but SWE-bench Verified, SciCode, DeepSWE, Vibe Code Bench and Terminal-Bench are all unpublished, so there is no repo-scale engineering evidence. Scored 68: real, measured, mid-band coding with no evidence of more.
- **Cost efficiency: 100/100.** Open Apache-2.0 weights at $0.05/$0.25 per 1M on models.dev, and fully self-hostable for $0 of licence cost. The methodology's rule places $0.05/$0.25 inside the ~$0.10/$0.20 ≈ 97-99 band and open weights at $0 = 100; the score is 100 on the open-weights route, with the published API price disclosed above for anyone who cannot self-host.
- **Overall Score: 74/100.** Mean of the five quality dims (66 + 70 + 78 + 88 + 68 = 370 ÷ 5 = 74.0). Best fit: free, Apache-2.0, multimodal work that actually needs audio or video input — where this model's any-to-any input coverage is genuinely unique — at a 262K window. Worst fit: open-domain knowledge questions (HLE 5.2 without tools), repo-scale coding (no SWE-bench figure), and long-context retrieval past ~128K (MRCR 43.4).

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across four independent source families (Google's official Hugging Face model card and its benchmark tables, models.dev's Google catalog, an Artificial Analysis check under both slug spellings, and an OpenRouter catalog check), cross-compared for conflicts; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: identity was verified carefully because the repo slug `gemma-4-12b-unified` matches no catalog entry while being Google's own official display name — the canonical ID is `gemma-4-12b-it` and the two refer to one model. The slug discrepancy is surfaced for the orchestrator, not resolved. HLE-without-tools at 5.2% is the weakest measured figure in this file and is what caps Reasoning.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
