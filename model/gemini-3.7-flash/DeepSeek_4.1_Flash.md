# Gemini 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google's August 2026 Flash-tier refinement of Gemini 3.6 Flash, released three weeks later and achieved through algorithmic improvements rather than a new pretraining run. It pairs a 1,048,576-token window with a 16.7-point jump in long-horizon coding accuracy, aimed at budget-conscious coding agents and document-heavy workflows.
- **Provider / access:** Google — Gemini API, Google AI Studio, Gemini Enterprise Agent Platform, Gemini Spark consumer app. Proprietary, closed; no self-hosting, no base-weight fine-tuning, no air-gapped deployment.
- **Release / knowledge:** Released 2026-08-13.
- **IDs:** `gemini-3.7-flash` (Gemini API / Vertex AI). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens. Verified from Google's page as compiled by HokAI (checked 2026-08-14).
- **Modalities:** text, image, audio and video input; text + tool-call output; function calling and structured output; reasoning yes (configurable thinking levels).
- **Pricing (as of 2026-09-18):** $0.75 / 1M in and $3.75 / 1M out, an introductory rate half of what the predecessor launched at, with cached input at ~$0.075 / 1M (90% off). Both rates double starting January 2027. Blended 3:1 price $1.35 / 1M.
- **Architecture:** proprietary; Google has not disclosed parameter count or confirmed a mixture-of-experts design. Described by Google as a refinement of Gemini 3.6 Flash's reasoning foundation; a neighbour release, Gemini 3.8 Flash, is further-trained on top of this model.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Google's enterprise-workflow eval): **30.4%** — ahead of Claude Sonnet 5 (10.7%) and GPT-5.6 Terra (23.6%) in the same table
- GDP.pdf (document comprehension): **34.0%** (up from 22.0% for 3.6 Flash)
- Agent's Last Exam (multimodal desktop tasks): **26.3%** pass rate — behind Claude Sonnet 5's 33.3%, so computer-use-heavy loops still favour a rival
- GDPval-AA Elo: **1525** (vendor)
- Terminal-Bench 2.1: **no verified public score found** for the 3.7 checkpoint
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for the 3.7 checkpoint (Google's published suite focuses on coding, document and web-app evals)
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **56** — trailing GPT-5.6 Terra and Muse Spark 1.2 (57 each), ahead of Claude Sonnet 5 (55) and the predecessor (52)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1 (long-horizon engineering): **65.3%** — up 16.7 points from Gemini 3.6 Flash's 49.0%
- FrontierCode 1.1 (production code quality): **43.6%** — up from 34.4%
- WebDev Arena: **1588 Elo** — above Claude Sonnet 5 (1541) and GPT-5.6 Terra (1523) in the same comparison
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Output speed: **340 tok/s** median, ranked 4th of 36 tracked models (Artificial Analysis)

Long context:

- GDM-MRCR v2 (Google's recall benchmark): **97.0% accuracy at 128K token depth** — strong evidence that the 1M window is usable at realistic depths; no full-window figure was published, so the far end remains untested. CharXiv reasoning dipped 0.7 points to 84.5% without tools.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 30.4% leads its comparison set and document comprehension nearly doubled, but a 26.3% Agent's Last Exam pass rate and missing Terminal-Bench/Tau3/Claw numbers stop it short of the 90s.
- **Reasoning: 82/100.** An AA Intelligence Index of 56 with clear gains over its predecessor; no GPQA/HLE/CritPt value was published for this checkpoint, so the score is held at mid-frontier rather than higher.
- **Context window: 95/100.** 1,048,576 tokens with a measured 97.0% GDM-MRCR v2 score at 128K and 90%-off caching; the unmeasured full-window depth is the only gap.
- **Multimodal: 84/100.** Text, image, audio and video input with strong document/web-app work; a slight tool-free visual-reasoning regression (CharXiv 84.5%) and text-only output cap it.
- **Coding: 86/100.** DeepSWE 65.3%, FrontierCode 43.6% and a 1588 WebDev Arena Elo are a large generational jump; the absence of SWE-bench Verified/Pro numbers keeps it out of the top tier.
- **Cost efficiency: 88/100.** $0.75/$3.75 introductory with 90%-off caching is strong value, but the rate doubles in January 2027 and the tier is now superseded by Gemini 3.8 Flash.
- **Overall Score: 86/100.** (82 + 82 + 95 + 84 + 86 + 88) / 6 = 86.2 → **86**. Best fit: budget coding agents and document-heavy enterprise workflows; avoid it for terminal/computer-use-heavy loops that need the strongest long-horizon agent.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page and Artificial Analysis figures as compiled by HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.