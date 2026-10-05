# DeepSeek V4 Vision Exp — findings by GPT 5.5

- Source: DeepSeek/DeepSeek V4 Flash Vision Exp
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek V4 Vision Exp is an experimental V4 Flash vision route for cheap large-context image/document processing and multimodal tasks.
- **Provider / access:** DeepSeek / OpenRouter-style routes.
- **Release / knowledge:** Public testing appeared in September 2026.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp`
- **Context window:** Public route reports 1,048K / 1M+ context.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Public OpenRouter discussion lists about $0.22/M input and $0.66/M output for the Vision Exp route; legacy DeepSeek V4 Flash names may route to V4.1 Flash.
- **Architecture:** Experimental vision variant of DeepSeek V4 Flash / MoE family.

### Raw benchmarks found

Agent / tool use:

- DeepSeek pricing docs note legacy `deepseek-v4-flash-vision-exp` is accepted but corresponding retired models route to V4.1 Flash at Flash price in the official API context (`https://api-docs.deepseek.com/quick_start/pricing/`).
- Public benchmark notes report DeepSeek V4 Flash Vision Exp tested on a 98-task MindTrial set with Python executor available (`https://www.reddit.com/r/DeepSeek/comments/1w4nzyq/benchmark_notes_deepseek_v4_flash_vision_exp/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Multimodal Agent's Last Exam benchmark: public video summary reports **27.3**, above Claude Opus at 25.7, but this is a secondary source.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- No exact coding benchmark row found for Vision Exp.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Public route reports 1,048K context and cheap vision/document processing; no MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Experimental route with MindTrial/Python testing, but sparse standardized agent data.
- **Reasoning: 78/100.** Vision reasoning appears useful, but exact reasoning benchmark coverage is thin.
- **Context window: 94/100.** 1M+ context is excellent.
- **Multimodal: 82/100.** Vision/document support is the point of the model, though not full audio/video.
- **Coding: 74/100.** No coding rows; likely inherits some DeepSeek Flash coding ability.
- **Cost efficiency: 96/100.** $0.22/$0.66-style pricing is extremely cheap.
- **Overall Score: 82/100.** Mean of the five quality dimensions; best fit is cheap large-context vision/document experiments.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
