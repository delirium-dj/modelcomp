# Inkling-Small — findings by Fledge Alpha

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's efficient open-weights generalist — matches Inkling on many benchmarks at a quarter of the size, native reasoning over text/image/audio.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling-Small` (Apache 2.0); OpenRouter (DeepInfra/Baseten/Together); Tinker fine-tuning; Chat Completions/Responses style hosted endpoints.
- **Release / knowledge:** July 30, 2026; knowledge cutoff not published.
- **IDs:** `thinkingmachines/Inkling-Small` (NanoGPT `thinkingmachines/Inkling-Small`); no Zen Free ID verified.
- **Context window:** up to 1M tokens (64K/256K on Tinker tiers; 524K typical provider window).
- **Modalities:** text, image, audio in; text out; reasoning with variable thinking effort; tool calls; JSON mode.
- **Pricing (as of 2026-10-05):** ~$0.45 in / $1.20 out per 1M (NanoGPT auto tier); cache read ~$0.10/1M.
- **Architecture:** MoE transformer, 276B total / 12B active, trained on NVIDIA GB300 NVL72; BF16/MXFP8/NVFP4.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (best harness, vendor-reported)
- Toolathlon Verified: **54.4%** (vendor-reported)
- Tau 3 Banking: **15.5%** (vendor-reported)
- BrowseComp (with context mgmt): **77.4%** (vendor-reported)

Reasoning / knowledge:

- HLE: **31.6%** (vendor-reported; AA lists 33.3%)
- GPQA Diamond: **89.5%** (AA via NanoGPT)
- AA-LCR: **69.3%** (AA)
- AA Index v4.1: **40.0** (vendor table)
- CritPt: **8.3%** (AA)
- AA-Omniscience Accuracy / Hallucination: **33.2% / 63.0%** (AA)

Coding:

- SWE-bench Verified: **80.2%** (vendor-reported)
- SWE-bench Pro public: **55.9%** (vendor-reported)
- SciCode: **48.7%** (vendor-reported)
- AA Coding Index: **52.9** (AA)

Long context:

- BrowseComp with context management 77.4%; AA-LCR 69.3%; no MRCR/RULER numeric published.

Multimodal:

- MMAU: **77.0%** (vendor), VoiceBench: **90.1%** (vendor), Audio MC: **54.9%** (vendor)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 82/100.** Terminal-Bench 64.7 and Toolathlon 54.4 are strong for a 12B-active; Tau3 15.5 caps reliability on banking tool chains.
- **Reasoning: 78/100.** HLE 31.6 above its weight class and GPQA 89.5; capped by CritPt 8.3 and AA index 40.
- **Context window: 95/100.** Up to 1M tokens native; BrowseComp-with-context 77.4 evidences long-context use.
- **Multimodal: 93/100.** Native audio+image reasoning, VoiceBench 90.1, MMAU 77.0; text-only out.
- **Coding: 80/100.** SWE-bench Verified 80.2 and Pro 55.9 vendor-reported; SciCode 48.7 mid-tier.
- **Cost efficiency: 88/100.** $0.45/$1.20 per 1M is materially cheaper than its 975B sibling ($4.05 out).
- **Overall Score: 86/100.** Mean of five non-cost dims (82+78+95+93+80)/5 = 85.6 → 86; best fit: open-weights long-context multimodal agentic coding at low cost.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Thinking Machines Lab news post and model card, AA via NanoGPT, provider pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
