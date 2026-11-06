# Gemma 4 12B Unified — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-12B-it`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified — **"Unified" is Google's own term for this model, and it refers to its encoder-free architecture, not to a separate SKU.** The repo folder `gemma-4-12b-unified` names a size tier inside the Gemma 4 family, not a distinct product line. **A negative finding governs this report: BenchLM carries no `gemma-4-12b-unified` page in any spelling** (hyphen, dotted and `gemma-4-12b` variants all 404 — BenchLM's Gemma 4 roster stops at the sizes it ranks), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** Google's any-to-any open-weights 12B — **text, image, audio and video in; text out** — Apache-2.0, 262K context, and the **only Gemma 4 size (alongside E2B/E4B) that accepts audio input**. Its measured record is strong on knowledge and competitive coding for the size (GPQA Diamond 78.8, MMLU-Pro 77.2, AIME 2026 77.5, LiveCodeBench v6 72.0, Codeforces Elo 1659) and has two glaring holes: **HLE-without-tools 5.2**, the weakest reasoning figure in the family, and **MRCR v2 at 128K of only 43.4** on a 262K window.
- **Provider / access:** Self-hostable, **Apache-2.0** weights at `huggingface.co/google/gemma-4-12B-it` (HF library tag `gemma4_unified`; base model `google/gemma-4-12B`). models.dev lists 22 providers at **$0.05/$0.25 per 1M**. **Not listed on OpenRouter** — its Google roster carries only `gemma-4-31b-it` and `gemma-4-26b-a4b-it`.
- **Release / knowledge:** released **2026-06-09** (models.dev; Artificial Analysis agrees). **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-12B-it` (Hugging Face, canonical); `google/gemma-4-12b-it` (models.dev); base model `google/gemma-4-12B`.
- **Context window:** **262,144 tokens** total with **32,768 max output** (models.dev). No YaRN extension figure is published for this size.
- **Modalities:** **any-to-any input — text, image, audio and video in; text out.** The HF card states that only E2B, E4B and 12B are the sizes that accept audio, which is what makes this the audio-capable member of the family. Multimodal with no stated audio *output*.
- **Pricing (as of 2026-11-06):** **$0.05 in / $0.25 out** per 1M (models.dev). Open Apache-2.0 weights make self-hosting the alternative, so cost is scored on the metered route since that is the only published figure.
- **Architecture:** open weights, **Apache-2.0**. **11.95B total parameters** (HF card table; the sidebar rounds to "12B"). 48 layers, 1024 sliding window, 262K vocabulary, and — the defining feature — an **encoder-free architecture**, which is what "Unified" names.

### Raw benchmarks found

All figures are vendor-reported from the HF model card and carried from the prior verified research pass (2026-10-24) with re-attribution; no independent tracker catalog page exists for cross-check.

- **GPQA Diamond: 78.8** (HF card) — 11.2 under the 90% frontier reference
- **MMLU-Pro: 77.2**; MMMLU: 83.4 (HF card)
- **AIME 2026: 77.5** (HF card) — solid but well under the 90%+ tier the family's larger sizes reach
- **HLE without tools: 5.2** (HF card) — **extremely weak, the lowest reasoning figure in this file and one of the lowest HLE-without-tools figures in this research series**
- **BigBench-Extra Hard (BBEH): 53.0** (HF card)
- **Tau2-Bench: 69.0** (HF card) — **the only agentic/tool-use number published for this model**
- **MRCR v2 at 128k: 43.4** (HF card) — long-context retrieval with a tool-style harness, recorded under long context below as well
- **LiveCodeBench v6: 72.0**; **Codeforces Elo: 1659** (HF card)
- **MMMU-Pro: 69.1**; **MATH-Vision: 79.7**; MedXPertQA-MM: 48.7 (HF card)
- **Tau3-Banking: no verified public score found.**
- **No verified public score found** for SWE-bench Verified/Pro, Terminal-Bench, Toolathlon, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index or AA-Omniscience.

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the mid band. **Tau2-Bench 69.0 is the only agentic figure** and it is a mid-band result for 2026. **No Terminal-Bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index figure exists**, so all three of the methodology's agentic frontier references are unmeasured and no composite exists.
- **Reasoning: 62/100.** Mid-band, and internally split. **GPQA Diamond 78.8, MMLU-Pro 77.2, MMMLU 83.4 and AIME 2026 77.5** are respectable mid-tier figures, and Codeforces-adjacent numeracy supports them; against that, **HLE without tools 5.2 is a near-floor open-domain-knowledge result** and BBEH 53.0 is mid. Capped by the **total absence of CritPt, AA-LCR, ARC-AGI, the AA Intelligence Index and AA-Omniscience**, so reliability and composite depth are unknown.
- **Context window: 85/100.** **262,144 tokens with 32,768 max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling. Held at the ceiling rather than the ≥1M tier because **MRCR v2 at 128K is only 43.4** — weak retrieval for the window size — and **no RULER or AA-LCR figure exists**, so the window's usable depth is unverified.
- **Multimodal: 82/100.** **Text, image, audio and video in; text out** — the methodology's 90–100 band on input breadth, docked to 82 because the measured quality is mid-tier rather than frontier (**MMMU-Pro 69.1, MATH-Vision 79.7**) and there is no non-text output. The audio-input capability is the family-distinctive property and is the reason this score is well above the E4B's modality-blindness.
- **Coding: 60/100.** Below the mid band's top. **LiveCodeBench v6 72.0 and Codeforces Elo 1659** are solid competitive-programming figures for a 12B; held below the upper band because **no SWE-bench Verified/Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench or Terminal-Bench figure exists**, so the 85%, 74% and 70% references cannot be checked.
- **Cost efficiency: 92/100.** **$0.05/$0.25 per 1M** maps to the methodology's ~$0.05–$0.25 → 90–92 tier, with **Apache-2.0 weights available for true $0 self-hosting** — the rule that lifts it to the top of the band rather than the middle.
- **Overall Score: 68/100.** (52 + 62 + 85 + 82 + 60) / 5 = 68.2 → **68**. Recommendation: **the audio-capable mid-size member of the Gemma 4 family** — any-to-any input including audio, Apache-2.0 weights, a 262K window and $0.05/$0.25 pricing, with genuinely respectable knowledge and competitive-coding figures for 12B. Two cautions: **HLE without tools 5.2 is near-floor**, so it is not a deep open-domain reasoner; and **MRCR v2 at 128K is only 43.4**, so the 262K window is nominal rather than usable depth. Prefer **Gemma 4 26B A4B** for measured quality or **Gemma 4 E4B** for the edge footprint, both refreshed in this session.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `gemma-4-12b-unified` page in any spelling** (hyphen, dotted and `gemma-4-12b` variants all return 404 — BenchLM's Gemma 4 roster stops at the sizes it ranks), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-24), with every figure re-attributed to the HF model card and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The model's naming is disambiguated in the report's first line: "Unified" is Google's own architecture term (encoder-free), not a separate SKU**, and the repo folder names a size tier rather than a product line — recorded because it is the single most likely misreading of this slug. The **audio-input capability is attributed as the family-distinctive property** (only E2B/E4B/12B accept audio per the card) and is what lifts the multimodal score to 82 against the 90–100 breadth band's docked position. The **HLE-without-tools 5.2** is named as the lowest reasoning figure in the file rather than smoothed, and the **MRCR v2 at 128K 43.4** as the reason the context score sits at the band ceiling. **An 11.95B-vs-12B rounding discrepancy is recorded rather than resolved** (card table 11.95B, sidebar rounds to "12B"), the card's figure being used. Missing benchmarks (Tau3-Banking, SWE-bench Verified/Pro, Terminal-Bench, Toolathlon, MCP-Atlas, OSWorld, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, ARC-AGI, AA Intelligence Index, AA-Omniscience) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-12B-it model card (encoder-free "Unified" architecture, any-to-any input, all benchmark rows)](https://huggingface.co/google/gemma-4-12B-it)
  - [models.dev — `google/gemma-4-12b-it` provider record (22 providers at $0.05/$0.25, 262K/32,768)](https://models.dev/models/google-gemma-4-12b-it)
  - [Repo curated meta — `model/gemma-4-12b-unified/meta.json`](/model/gemma-4-12b-unified/meta.json)
  - See also: [`model/gemma-4-26b-a4b/`](gemma-4-26b-a4b.md) — the larger sibling refreshed in this same batch; [`model/gemma-4-e4b/`](gemma-4-e4b.md) — the edge sibling
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
