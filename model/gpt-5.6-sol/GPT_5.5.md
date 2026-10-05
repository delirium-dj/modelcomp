# GPT-5.6 Sol — findings by GPT 5.5

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's strongest GPT-5.6 tier, positioned for advanced reasoning, coding, agentic work, and long-context tasks.
- **Provider / access:** OpenAI API and ChatGPT Work/Codex-style OpenAI products.
- **Release / knowledge:** GPT-5.6 family was covered as a July 2026 launch with Sol, Terra, and Luna tiers.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** OpenAI docs list a 1,050,000-token context window; repo metadata tracks 1M / 128K output.
- **Modalities:** Text and image in; text out per repo metadata.
- **Pricing (as of 2026-10-05):** OpenAI docs report $4/M input and $20/M output after a price reduction; repo metadata may lag at $1.25/$10 for a specific route/tier.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI Developers docs: list GPT-5.6 Sol with 1,050,000 context and current $4/$20 pricing (`https://developers.openai.com/api/docs/models/gpt-5.6-sol`).
- Public GPT-5.6 analysis: reports Sol as the strongest tier and discusses max reasoning / multi-agent modes (`https://www.reddit.com/r/OpenAI/comments/1uva3uu/gpt56_sol_terra_luna_full_benchmark_analysis_and/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- Axios coverage: describes OpenAI releasing GPT-5.6 Sol/Terra/Luna and ChatGPT Work for longer multistep tasks (`https://www.axios.com/2026/07/12/openai-chatgpt-work-luna-terra-sol`).
- MineBench community report: GPT-5.6 Sol benchmark run was much more expensive than GPT-5.5 Pro, indicating heavy reasoning-token use in that harness (`https://www.reddit.com/r/singularity/comments/1uwhvws/differences_between_gpt55_pro_and_gpt56_sol_on/`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public GPT-5.6 analysis reports SWE-Bench Pro **64.6%** for Sol, though it notes benchmark-contestation caveats.
- Senior SWE-bench community report: claims GPT-5.6 Sol reached a Pareto frontier with Opus 4.8-like performance at lower cost (`https://www.reddit.com/r/ChatGPT/comments/1us0rqq/gpt56_sol_opus_48_perf_40_of_the_cost/`).
- SWE-bench Verified / SWE-Pro: **64.6% SWE-Bench Pro community-reported**
- LiveCodeBench: **no verified public score found**

Long context:

- OpenAI docs list 1,050,000 context; no independent MRCR/RULER row was found for exact Sol.

### Normalized scores (1–100)

- **Tool use: 90/100.** GPT-5.6 Sol is the top GPT-5.6 agent tier with multi-agent positioning, capped by missing public Terminal-Bench/Tau rows.
- **Reasoning: 91/100.** Strongest GPT-5.6 tier and high reasoning-token behavior support frontier reasoning, below newer GPT-6 Astra.
- **Context window: 94/100.** 1,050,000-token context is frontier-scale.
- **Multimodal: 80/100.** Text/image input is useful but less broad than full audio/video multimodal models.
- **Coding: 88/100.** SWE-Bench Pro 64.6% and Senior SWE-bench discussion support strong coding, with caveats.
- **Cost efficiency: 78/100.** Price cuts help, but Sol remains expensive and can consume many tokens per task.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is OpenAI-native high-reasoning coding and agent workloads.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
