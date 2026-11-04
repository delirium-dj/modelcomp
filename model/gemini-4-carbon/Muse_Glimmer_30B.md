# Gemini 4 Carbon — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemini-4-carbon
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier multimodal model announced October 2026, positioned as strongest Gemini 4 generation with state-of-the-art cybersecurity defense, long-horizon agentic work and 1M-token context.
- **Provider / access:** Google DeepMind; API not yet publicly available as of 2026-11-04. Pricing announced, rollout via Fairwind Program to cyber defenders first.
- **Release / knowledge:** Announced 2026-10-28; knowledge cutoff not published.
- **IDs:** `gemini-4-carbon` (no public API ID yet)
- **Context window:** 1,048,576 tokens native context, ~1M tokens. Verified via RankLLMs and LLMLearner specs.
- **Modalities:** Text, image, audio, video input; text output. Reasoning yes, tool use yes.
- **Pricing (as of 2026-11-04):** Announced introductory $2 / 1M input, $10 / 1M output, rising to $4 / $20 standard; cached input 95% off. Not live on Google API pricing page.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Sources: Google blog announcement, RankLLMs, LLMLearner, MindStudio review, VentureBeat, BenchLM.

Agent / tool use:

- AutomationBench Zapier: **53.9%** (LLMLearner table)
- Agents' Last Exam v1.1: **77.4%** (RankLLMs)
- Terminal-Bench 4.0: **63.1%** (LLMLearner; Google reports 65.2% in separate comparison)
- Terminal-Bench-Science 0.1: **64.8%** (LLMLearner)
- OSWorld-2.1 computer use: **81.5%** (Lindy.ai)
- GraphWalks 1M BFS: **96.2%** (Lindy.ai)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59** (#1/37) (Google blog, RankLLMs)
- Vals Index v2.2: **70.4%** (RankLLMs)
- SEC-bench Pro (vulnerability finding): **88.2%** (Google blog)
- ExploitGym: **54.8%** (Google blog)
- CWE-bench (patching): **71.0%** (Google blog)
- GPQA Diamond: no verified public score found for Carbon specifically

Coding:

- SWE-sweep: **9.6%** (MindStudio; vs Argon 4.3%)
- FrontierSWE 2: **61.2%** (BenchLM; vs GPT-6 Astra 65.5%)
- Vibe Code Bench v1.1: **89.1%** (LLMLearner)
- Terminal-Bench 4.0 coding agent view: **65.2%** (Google comparison)

Long context:

- GraphWalks 1M BFS: **96.2%** (Lindy.ai)
- No explicit MRCR / RULER published.

### Normalized scores (1–100)

- **Tool use: 78/100.** AutomationBench 53.9%, Agents’ Last Exam 77.4%, Terminal-Bench 4.0 ~63-65% show strong agentic tool use; computer use 81.5% supports score.
- **Reasoning: 88/100.** AA Intelligence Index 59 is #1 v5.0; Vals Index 70.4%; cybersecurity benchmarks 88.2% / 71.0% indicate high reasoning depth.
- **Context window: 96/100.** 1,048,576 token native context with GraphWalks 96.2%.
- **Multimodal: 85/100.** Text+image+audio+video input, text output.
- **Coding: 75/100.** FrontierSWE 2 61.2%, Vibe Code Bench 89.1%, SWE-sweep 9.6% limits ceiling vs frontier coders.
- **Cost efficiency: 65/100.** Announced $2/$10 introductory is premium frontier pricing; not yet live.
- **Overall Score: 84.4/100.** Mean of Tool 78 + Reasoning 88 + Context 96 + Multimodal 85 + Coding 75 = 84.4. Best-fit for long-context multimodal agentic and cybersecurity workflows where access is granted.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-04
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon – Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon)
  - [Gemini 4 Carbon (Google) Benchmarks, Pricing & Specs | RankLLMs](https://rankllms.com/models/gemini-4-carbon)
  - [Gemini 4 Carbon: Benchmarks, Pricing & Specs | LLMLearner](https://llmlearner.com/models/gemini-4-carbon)
  - [Gemini 4 Carbon vs Claude Opus 5.5: Benchmarks, Cost, and Access | Lindy](https://www.lindy.ai/blog/gemini-4-carbon-vs-claude-opus-5-5)
  - [Gemini 4 Carbon Benchmarks, Pricing & Context Window | LLM Stats](https://llm-stats.com/models/gemini-4-carbon)

---
