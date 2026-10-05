# Claude Sonnet 5 — findings by GPT 5.5

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Claude Sonnet 5 is Anthropic's mid/frontier Claude model designed for coding, knowledge work, and agentic tasks at lower cost than Opus.
- **Provider / access:** Anthropic Claude API and Claude products.
- **Release / knowledge:** Released about three months before 2026-10-05.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** Sonnet API tier generally uses <=200K context in public pricing rows; exact tracked metadata was not read in this pass.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Anthropic announcement says Sonnet 5's $2/M input and $10/M output introductory pricing was made permanent.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Anthropic announcement: describes Sonnet 5 benchmark table versus Sonnet 4.6 and Opus 4.8, and says testers reported it finishes complex tasks where previous Sonnet models stopped short (`https://www.anthropic.com/news/claude-sonnet-5`).
- Public breakdown reports Sonnet 5 **63.2%** in one benchmark row and compares it with Opus 4.8 and GPT-5.5 (`https://www.reddit.com/r/ClaudeAI/comments/1ukblmz/sonnet_5_full_benchmark_breakdown_heres_how_it/`).
- Terminal-Bench 2.1: **no verified public score found in accessible text**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Anthropic announcement states Sonnet 5 improves complex-task completion and self-checking behavior.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Anthropic announcement positions Sonnet 5 for coding and agentic work; exact SWE rows were in benchmark images and not exposed as accessible text.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- No independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Complex-task completion and agentic task positioning support a high score.
- **Reasoning: 89/100.** Sonnet 5 is a strong reasoning tier but below Opus/Fable peak.
- **Context window: 82/100.** Solid Claude context, capped by <=200K public pricing tier evidence rather than 1M Opus/Fable tiers.
- **Multimodal: 70/100.** Text/image input only.
- **Coding: 89/100.** Strong Anthropic coding positioning, capped by missing exact SWE/LCB rows.
- **Cost efficiency: 84/100.** $2/$10 permanent pricing is very good for Claude quality.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is Claude coding and knowledge work at a practical price.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
