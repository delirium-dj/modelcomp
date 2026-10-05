# Gemini 3.1 Pro — findings by GPT 5.5

- Source: Google/Gemini 3.1 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Gemini 3.1 Pro is Google's proprietary Pro-class reasoning model with strong long-context, scientific reasoning, and multimodal capability.
- **Provider / access:** Google AI Studio / Gemini API; OpenCode Zen free-tier availability is noted in this repo's curated metadata.
- **Release / knowledge:** Third-party model pages report March 2026 / preview-period release timing; exact knowledge cutoff was not found.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2M input / 64K output per repo metadata.
- **Modalities:** Text, image, audio, video, and PDF input; text output; thinking, tool use, and structured output features are implied by Gemini API usage.
- **Pricing (as of 2026-10-05):** Public analyses report Gemini 3.1 Pro keeping a Gemini Pro-style $2/M input and $12/M output price point; free-tier availability exists in Google AI Studio / OpenCode Zen per repo metadata.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google DeepMind model card (**official comparative table**): states Gemini 3.1 Pro was evaluated across reasoning, multimodal capabilities, agentic tool use, multilingual performance, and long-context (`https://deepmind.google/models/model-cards/gemini-3-1-pro`).
- METR horizon proxy: Wikipedia summary reports Gemini 3.1 Pro at **5 hours 50 minutes** on a METR entry, with **1 hour 30 minutes** in the adjacent metric columns; exact harness details require the original METR source (`https://en.wikipedia.org/wiki/METR`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- PitchBook analyst note: reports Gemini 3.1 Pro leading ARC-AGI-2 at **77.1%** and leading **13 of 16** tracked benchmarks while retaining $2/$12 pricing (`https://pitchbook.brightspotcdn.com/19/05/d3a0b3a14409927c9c73e5de389f/q1-2026-pitchbook-analyst-note-ranking-the-ai-giants-a-new-framework-for-the-frontier-five-preview.pdf`).
- Third-party pricing/benchmark coverage: TokenCost states Gemini 3.1 Pro climbed to the top of major benchmark leaderboards and emphasizes long-context reasoning and scientific knowledge (`https://tokencost.app/blog/gemini-3-1-pro-pricing-benchmarks`).
- GPQA Diamond: **no verified public score found in accessible result**
- HLE: **no verified public score found in accessible result**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Google DeepMind model card: includes comparison against GPT-5.2 Thinking and GPT-5.3-Codex Thinking in the accessible result, but numeric coding rows were not exposed (`https://deepmind.google/models/model-cards/gemini-3-1-pro`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- Reddit discussion of MRCR v2 cites Gemini 3.1 Pro dropping from **71.9% at 128K** to **25.9% at 1M** tokens; useful as a warning signal but community-sourced and not an official benchmark post (`https://www.reddit.com/r/singularity/comments/1rsv2rk/i_thought_gemini_was_supposed_to_be_the_long/`).

### Normalized scores (1–100)

- **Tool use: 88/100.** Official agentic-tool evaluation coverage and METR-style horizon reporting support strong tool capability, capped by missing Terminal-Bench/Tau numbers.
- **Reasoning: 93/100.** ARC-AGI-2 77.1% and broad benchmark-lead claims justify a frontier reasoning score, capped by incomplete accessible GPQA/HLE detail.
- **Context window: 96/100.** A 2M context window is elite; capped by community-reported degradation at very deep MRCR lengths and absent official retrieval numbers.
- **Multimodal: 92/100.** Text, image, audio, video, and PDF input put Gemini 3.1 Pro near the top of multimodal input coverage, though output remains text.
- **Coding: 85/100.** Official model-card comparisons include coding-oriented competitors, but exact SWE/LCB values were not found, so coding is scored below the strongest coding-specialized models.
- **Cost efficiency: 88/100.** $2/M input and $12/M output is strong for a frontier Pro model, with free-tier access improving practical value.
- **Overall Score: 91/100.** Mean of the five quality dimensions; best fit is high-end reasoning and multimodal long-context work where Gemini integration and price matter.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
