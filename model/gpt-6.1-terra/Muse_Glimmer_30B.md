# GPT-6.1 Terra — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-6.1-terra
- Date: 2026-11-01
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI’s cost-efficient multimodal agent for visual reasoning, computer use and natural writing; 1.05M context, fast inference.
- **Provider / access:** OpenAI API gpt-6.1-terra; reasoning effort none/low/medium/high/xhigh/max.
- **Release / knowledge:** 2026-10-26; knowledge cutoff 2026-06-01.
- **IDs:** openai/gpt-6.1-terra
- **Context window:** 1,050,000 total / 128,000 output.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes via Responses API.
- **Pricing (as of 2026-10-26):** $1/$5 per 1M input/output tokens; cache write $1.25/M; paid tier only.
- **Architecture:** proprietary.

### Raw benchmarks found

- Source: OpenAI Introducing GPT-6.1 Terra, 2026-10-26
- Source: Artificial Analysis GPT-6.1 Terra pushes cost efficiency frontier, 2026-10-27
- Source: OpenRouter GPT-6.1 Terra benchmarks

Agent / tool use:

- Agents’ Last Exam: matches GPT-6 Astra at medium effort, +15 pts vs GPT-5.6 Terra (OpenAI)
- OSWorld 2.1: surpasses GPT-5.6 Terra best at medium effort
- Terminal-Bench 4.0: 50.3% max effort (OpenAI); 55.6% max Artificial Analysis
- Terminal-Bench-Science 0.1: ~within 5 pts of Opus 5.5 at max, cheaper

Reasoning / knowledge:

- Artificial Analysis Intelligence Index Max: 51.0
- HLE Max: 46.2%
- AA-LCR: 82.7%
- GDPval-AA: 48.8%
- CritPt: 28.0%
- SciCode: 55.1%
- MMMU-Pro: 84.7% measured
- GPQA Diamond: ~96.1% estimated

Coding:

- Terminal-Bench 4.0: 50.3% max OpenAI; 55.6% AA
- Vibe Code Bench v1.1: 84.0% Vals
- SWE-bench Verified: ~87.9% estimated
- Coding Agent Index: 48

Long context / multimodal:

- MMMU-Pro 84.7%
- Context 1.05M

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 4.0 50-56%, Agents’ Last Exam parity with Astra at medium, OSWorld 2.1 strong; cost-efficient agent.
- **Reasoning: 70/100.** Intelligence Index 51, HLE 46.2%, AA-LCR 82.7%, GPQA ~96%; capped by CritPt 28%.
- **Context window: 97/100.** 1.05M total, 128K output; top-tier context.
- **Multimodal: 75/100.** Text+image in, text out; MMMU-Pro 84.7% strong visual reasoning.
- **Coding: 68/100.** Terminal-Bench 4.0 50-56%, Vibe Code 84%, SWE-bench ~88%; solid mid-tier coding.
- **Cost efficiency: 88/100.** $1/$5 per 1M, ~9x lower cost per task vs Opus 5.5 at max; Pareto-optimal at low/medium effort.
- **Overall Score: 76/100.** Mean of Tool 68 + Reasoning 70 + Context 97 + Multimodal 75 + Coding 68 = 75.6 → 76; efficient multimodal agent with strong cost/performance.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://openai.com/index/introducing-gpt-6-1-terra/
  - https://artificialanalysis.ai/articles/gpt-6-1-terra-pushes-the-cost-efficiency-frontier
  - https://openrouter.ai/openai/gpt-6.1-terra
- Future sources: add a new file next to this one using the same headings.
