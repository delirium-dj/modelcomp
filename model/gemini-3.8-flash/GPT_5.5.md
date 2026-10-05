# Gemini 3.8 Flash — findings by GPT 5.5

- Source: Google/Gemini 3.8 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's Gemini 3.8 Flash is a fast, lower-cost Gemini family model with thinking, tool use, broad multimodal input, and a 1M-token context window.
- **Provider / access:** Google AI Studio / Gemini API; OpenCode Zen availability is noted in this repo's metadata.
- **Release / knowledge:** Google DeepMind model card was published about one month before 2026-10-05.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 input tokens and about 65,536 output tokens, reported by third-party pricing trackers against Google's API reference.
- **Modalities:** Text, image, audio, and PDF input; text output; thinking and tool use supported.
- **Pricing (as of 2026-10-05):** Public pricing trackers report about $0.75/M input and $3.75/M output, with cached input around $0.075/M; free-tier access is available in Google AI Studio / OpenCode Zen per repo metadata.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google DeepMind model card (**official comparative table**): evaluated Gemini 3.8 Flash on coding, knowledge work, multimodal, long-context, computer use, scientific reasoning, and related benchmarks (`https://deepmind.google/models/model-cards/gemini-3-8-flash/`).
- Terminal-Bench 2.1: **89.4%** reported in a public benchmark review/video summary of the Google-provided benchmark set (`https://www.youtube.com/watch?v=fpscJg_Cbkk`).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Google DeepMind model card: official model card states the model was evaluated across reasoning, knowledge work, scientific reasoning, and multimodal tasks, but the accessible search result did not expose all numeric rows (`https://deepmind.google/models/model-cards/gemini-3-8-flash/`).
- Artificial Analysis / third-party aggregate proxy: ModelScale reports an observed overall score of **73.95** for Gemini 3.8 Flash with 1M context and $0.75/$3.75 pricing (`https://modelscale.dev/models/gemini-3-8-flash?model=gemini-3-8-flash`).
- GPQA Diamond: **no verified public score found in accessible result**
- HLE: **no verified public score found in accessible result**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **73.7%** reported in a public benchmark review/video summary of the Google benchmark set (`https://www.youtube.com/watch?v=fpscJg_Cbkk`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Gemini API/model-card references and third-party trackers agree on a 1,048,576-token input window; no independent MRCR/RULER retrieval score was found in the accessible results.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 at 89.4% plus official computer/tool evaluation coverage supports a high tool score, capped by missing Tau/GDPval-style public numbers.
- **Reasoning: 88/100.** Official model-card coverage and aggregate leaderboard reports put it near frontier Flash-class performance, capped below flagship Pro/Opus models by limited disclosed hard reasoning numbers.
- **Context window: 90/100.** A 1,048,576-token window and 65,536 output cap are excellent; capped by absent independent retrieval-at-depth scores.
- **Multimodal: 86/100.** Text, image, audio, and PDF input make it broadly multimodal, though output is text-only in the tracked configuration.
- **Coding: 88/100.** DeepSWE 73.7% is strong for a Flash model and coding is a highlighted evaluation area; capped by missing SWE-bench Verified and LiveCodeBench exact scores.
- **Cost efficiency: 91/100.** $0.75/M input and $3.75/M output plus free-tier availability are excellent for this capability tier.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is cost-sensitive multimodal and coding-agent workloads that still need a large context window.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
