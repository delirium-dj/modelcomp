# Gemini 3 Pro — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with 1M+ context, full media input and a Deep Think mode; an earlier-generation flagship now superseded by 3.1 Pro and Flash successors.
- **Provider / access:** Google DeepMind / Gemini API and Vertex AI; a Deep Think variant exists. Paid tier only (no Free Zen ID).
- **Release / knowledge:** Gemini 3 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1M input / 65K output in curated listings; BenchLM records up to 2M for the family.
- **Modalities:** text/image/audio/video/PDF in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** paid Pro-tier pricing; exact first-party rate not re-verified for this ID.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing/agent suite: **87.1%** (BenchLM "bench results" row)
- Gert Labs: **63.23%**; JobBench **11.4%**
- Claw-Eval / ClawProBench, Terminal-Bench, GDPval: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (AA)
- HLE: **39.7%** (AA)
- AA-LCR: **76.0%**; CritPt **9.1%**
- Artificial Analysis Intelligence Index: **28.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **55.8% / 91.5%**
- ARC-AGI-2 **31.1%**; FrontierMath v2 Tier 4 **18.75%**
- AA MMLU-Pro **89.8%**; AA Global-MMLU-Lite **92.2%**; AA-IFBench **70.4%**

Coding:

- AA LiveCodeBench: **91.7%**
- Vibe Code Bench: **14.30%**; deep coding suite (SWE/DeepSWE/SciCode): no verified public score found for this ID

Long context:

- AA-LCR 76.0%; no public MRCR/RULER full-window number found

Multimodal:

- MMMU-Pro **81%** (AA 80.2%); VideoMMMU **87.6%**; MathVision **86.6%**; CharXiv **81.4%**; V* **88.0%**; ScreenSpot Pro **72.7%**

### Normalized scores (1–100)

- **Tool use: 70/100.** Browsing 87.1% is strong, but JobBench 11.4% and the absence of modern Terminal-Bench/GDPval numbers keep it mid.
- **Reasoning: 62/100.** GPQA 90.8% is solid, but HLE 39.7%, AA Index 28.0%, CritPt 9.1% and ARC-AGI-2 31.1% place it clearly behind successors.
- **Context window: 94/100.** 1M+ input (up to 2M per family data) with AA-LCR 76%.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with VideoMMMU 87.6% and MathVision 86.6%; text-only output.
- **Coding: 78/100.** LiveCodeBench 91.7% is elite, but Vibe Code 14.3% and missing SWE/DeepSWE numbers cap the score.
- **Cost efficiency: 58/100.** Paid Pro-tier pricing (exact rate not re-verified); no free ID.
- **Overall Score: 79/100.** Mean of (70 + 62 + 94 + 92 + 78) / 5 = 79.2 → 79. Best-fit: multimodal/long-context analysis where its vision breadth outweighs weaker modern reasoning.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Google, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
