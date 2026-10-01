# Gemini 3.5 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** The entry of the modern 3.x Flash line — a 1M-context multimodal model (text/image/audio/PDF in) with a comparatively high Intelligence Index and solid τ²-bench tool use, but weak long-context retrieval at full length (MRCR 1M 26.6%) and a high hallucination rate.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.5-flash`); free tier on AI Studio / OpenCode Zen with standard rate limits, plus a paid tier. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Google DeepMind Gemini 3.5 Flash launch); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 (1M) total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls. No video in, no non-text output.
- **Pricing (as of 2026-10-02):** Free tier (AI Studio / OpenCode Zen); exact paid-tier rates not published in curated meta.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (49 of 618 rows; 63.93/100, #41 of 645), citing the Google DeepMind Gemini 3.5 Flash launch, Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenRouter and Gert Labs (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- τ²-bench **95.3%**; MCP Atlas **83.6%**; OSWorld-Verified 78.4%; Toolathlon 56.5%
- Terminal-Bench 2.1 **76.2%** (Vals 74.2%) — under the 88 frontier ref
- GDPval-AA **1345** (normalized 42.2%); Finance Agent v2 57.9%; APEX-Agents-AA 47.1%
- AA EnterpriseOps-Gym 50.1%; AA Agentic Index **27.3%**; ResearchClawBench 18.0%

Reasoning / knowledge:

- Intelligence Index **50.2** (well above the 3.6/3.7 Flash siblings); GPQA-Diamond 92.2/92.7%; HLE 40.2% (AA 42.7%)
- ARC-AGI-2 **72.1%**; MMLU-Pro (Vals) 89.5%; IFBench 76.3%; CritPt 13.1%
- FrontierMath v2 Tiers 1-3 38.97% / Tier 4 14.58% (Epoch AI)
- Omniscience Index 21.2 / Accuracy 51.9% / Hallucination **60.7%** — elevated guessing rate

Coding:

- LiveCodeBench (Vals) **87.6%**; SWE-bench (Vals) 78.8%; AA Coding Index 70.1%
- SWE-bench Pro 55.1%; AA-SciCode 53.9% (under the 55 ref); Vibe Code 48.68%; CursorBench 3.2 48.8%

Multimodal / long context:

- CharXiv **84.2%**; AA-MMMU-Pro 84.3%; Blueprint-Bench 2 33.6% (weak); Design Arena Website 1273
- **MRCR 1M only 26.6%** and MRCRv2 77.3% — retrieval collapses at full 1M length (AA-LCR 69.3).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 77/100.** τ²-bench 95.3% and MCP Atlas 83.6% are strong tool-orchestration signals, but Terminal-Bench 2.1 76.2% sits under the 88 ref, GDPval-AA 1345 (normalized 42.2%) misses the 1750 bar and AA Agentic Index 27.3% / ResearchClawBench 18.0% keep it mid-tier.
- **Reasoning: 80/100.** A high Intelligence Index 50.2 with GPQA-Diamond 92.7%, ARC-AGI-2 72.1%, MMLU-Pro 89.5% and HLE clearing the 40% bar are genuinely strong; the 60.7% Omniscience hallucination rate and mid CritPt 13.1% pull it back.
- **Context window: 88/100.** The nominal 1M window meets the ≥1M tier, but demonstrated retrieval collapses at length (MRCR 1M 26.6%, MRCRv2 77.3%, AA-LCR 69.3) — well under the ≥98%-at-512K+ standard, so below the 95 floor.
- **Multimodal: 88/100.** Text+image+audio+PDF in / text out with strong grounded visual work (CharXiv 84.2, MMMU-Pro 84.3) — audio input lifts it into the 90-band, but Blueprint-Bench 2 33.6% and no video/non-text output hold it at the floor.
- **Coding: 74/100.** LiveCodeBench 87.6% and SWE-bench 78.8% (Vals) are good, but SWE-bench Pro 55.1%, SciCode 53.9% (under ref), Coding Index 70.1%, Vibe Code 48.68% and CursorBench 48.8% drag it below the 3.6-tier coding.
- **Cost efficiency: 92/100.** Free tier on AI Studio / OpenCode Zen plus Flash-class paid pricing anchors it near the top; exact paid rates not published. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 77, Reasoning 80, Context 88, Multimodal 88, Coding 74 = 81.4 → 81. Best fit: broad multimodal QA and strong on-length reasoning at a free/low price where you control the context to well under 1M (retrieval fails at full length); for long-document agents or heavy coding, the 3.7/3.8 Flash siblings are safer.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google DeepMind Gemini 3.5 Flash launch, plus Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenRouter and Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
