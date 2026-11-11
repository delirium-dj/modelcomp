# DeepSeek V4 Vision Exp — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-vision-exp`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** Experimental vision-enabled release of DeepSeek V4 Flash (August 2026): the same 284B/13B sparse MoE with image input added, matching the base model on text/agents and approaching Opus 4.8 on multimodal agent tasks. API-only — no weights published.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`), OpenRouter (`deepseek/deepseek-v4-flash-vision-exp`), plus ~10 routes.
- **Release / knowledge:** August 2026 (llm-stats/BenchLM record; models.dev has no entry); knowledge cutoff 2025-05 (V4 family).
- **IDs:** `deepseek-v4-vision-exp`, `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, `deepseek/deepseek-v4-flash-vision-exp`.
- **Context window:** 1,000,000 tokens; max output not published separately.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.44 / $1.32 per 1M input/output; cached input $0.14. Images are billed at 384 tokens each per buildfastwithai's review.
- **Architecture:** sparse MoE, 284B total / 13B active (DeepSeek; 305B total on the Hugging Face listing).

### Raw benchmarks found

> Figures are DeepSeek's own table from the `DeepSeek-V4-Flash-Vision-Exp` model card, compared with DeepSeek-V4-Flash-0731 and Opus 4.8.

Agent / tool use:

- Terminal Bench 2.1: **83.9** (V4-Flash-0731 82.7, Opus 4.8 85.0)
- Toolathlon-Verified: **75.9** (V4-Flash 70.3, Opus 4.8 76.2); NL2Repo: **57.7** (54.2 / 69.7)
- Cybergym: **75.3** (76.7 / 78.3); DeepSWE: **59.3** (54.4 / 58.0)
- DSBench-Hard: **63.6** (59.6 / 71.7); AutomationBench (public): **25.7** (25.1 / 27.2)

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for the Vision-Exp build
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **59.3** (V4-Flash-0731 54.4, Opus 4.8 58.0)
- NL2Repo: **57.7**; DSBench-Hard: **63.6**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal Bench 2.1 83.9 and Toolathlon 75.9 are solid, DSBench-Hard 63.6 mid; AutomationBench 25.7 and the absence of any Terminal-Bench 4.x row cap it.
- **Reasoning: 75/100.** No public reasoning benchmark exists for this build; the score is inferred from its agent results — low confidence.
- **Context window: 100/100.** 1,000,000 tokens.
- **Multimodal: 72/100.** Image input added to a text-first model; ApexBench pass@1 36.5 (Opus 4.8 39.4), Chartography 64.3 (65.0) and ZeroBench pass@5 35.0 (34.0) show it is competitive but not leading on multimodal agents.
- **Coding: 78/100.** DeepSWE 59.3% and NL2Repo 57.7% are mid, DSBench-Hard 63.6 mid; no SWE-bench row was published.
- **Cost efficiency: 92/100.** $0.44/$1.32 per 1M with 384-token image billing — vision at near-text prices.
- **Overall Score: 80.6/100.** Best fit for cheap image-grounded agent work (charts, documents, screenshots) at 1M context; verify text reasoning independently before relying on it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (DeepSeek-V4-Flash-Vision-Exp model card and its vendor benchmark table, OpenRouter model page, llm-stats, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  - [DeepSeek V4 Flash Vision Exp — OpenRouter](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
  - [DeepSeek-V4-Flash-Vision-Exp benchmarks — llm-stats](https://llm-stats.com/models/deepseek-v4-flash-vision-exp)
- Future sources: add a new file next to this one, e.g. `DeepSeek_4_Vision_Exp_v2.md`, using the same headings.