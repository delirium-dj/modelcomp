# GPT-5 — findings by GPT 5.5

- Source: OpenAI/GPT-5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship router system combined a fast model with deeper reasoning, setting strong launch records in coding, math, and multimodal understanding before later GPT-5.x models superseded it.
- **Provider / access:** OpenAI API / ChatGPT / OpenCode route.
- **Release / knowledge:** Released August 2025.
- **IDs:** `opencode/gpt-5`
- **Context window:** 400K total with 128K max output per repo metadata.
- **Modalities:** Text, image, and file input; text output; reasoning and tool calls.
- **Pricing (as of 2026-10-05):** Repo metadata tracks OpenAI $1.25/M input, $0.125/M cached input, $10/M output; OpenCode Zen route $1.07/$8.50.
- **Architecture:** Proprietary OpenAI system-of-models/router architecture.

### Raw benchmarks found

Agent / tool use:

- OpenAI enterprise benchmark PDF: GPT-5 set state-of-the-art launch records including real-world coding **74.9% on SWE-bench** and multimodal understanding **84.2% on MMMU** (`https://cdn.openai.com/pdf/inside-gpt-5-for-work.pdf`).
- GPT-5 system card: published alongside launch and describes improvements in hallucination reduction, instruction following, sycophancy reduction, writing, coding, and health (`https://arxiv.org/abs/2601.03267`).
- Terminal-Bench 2.1: **no verified public score found**
- OSWorld / computer-use: **no verified public score found**

Reasoning / knowledge:

- AIME 2025 with tools: **99.6%** per OpenAI enterprise benchmark PDF.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- SWE-bench: **74.9%** per OpenAI enterprise benchmark PDF.
- SWE-Bench Pro: **23.3%** in the SWE-Bench Pro paper's unified scaffold, reported as the highest score to date in that evaluation (`https://arxiv.org/abs/2509.16941`).
- LiveCodeBench: **no verified public score found**

Long context:

- Repo metadata tracks 400K total / 128K output; no independent MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool/coding architecture and SWE evidence, capped by missing modern Terminal-Bench rows.
- **Reasoning: 90/100.** AIME 99.6% with tools and GPT-5 system-card positioning support high reasoning.
- **Context window: 86/100.** 400K/128K is strong, below later 1M-class models.
- **Multimodal: 82/100.** Image/file input plus MMMU 84.2% support strong multimodal understanding.
- **Coding: 89/100.** SWE-bench 74.9% and SWE-Bench Pro 23.3% are strong launch-era results.
- **Cost efficiency: 80/100.** $1.25/$10 was competitive, though later models improve price/performance.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is legacy OpenAI flagship coding/reasoning and multimodal work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
