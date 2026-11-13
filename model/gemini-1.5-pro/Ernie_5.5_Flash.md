# Gemini 1.5 Pro — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 1.5 Pro (`gemini-1.5-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google DeepMind's first sparse-MoE multimodal Gemini (initial release 2024-02-15; substantially updated GA in May 2024, which is the checkpoint benchmarked in the Gemini 1.5 technical report). Six Gemini generations old, but the model that made million-token context mainstream.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-1.5-pro`), Vertex AI (`gemini-1.5-pro-002`), plus third-party gateways. Legacy/deprecated in current Google catalog listings; still the dataset's oldest tracked Gemini Pro.
- **Release / knowledge:** 2024-02-15 (Feb preview); May 2024 GA (tech-report checkpoint). Knowledge cutoff not published.
- **IDs:** `gemini-1.5-pro`, `gemini-1.5-pro-002` (GA), `gemini-1.5-pro-latest`, `google/gemini-1.5-pro`.
- **Context window:** 128K standard; up to 1,048,576 in production; 2M for Gemini 1.5 Flash/Pro per the tech report (up to 10M in research). Hosted route currently exposes 2.1M in / 8.2K out.
- **Modalities:** text, image, audio and video in; text out; reasoning (thinking-capable Gemini 1.5 line); tool calls incl. parallel function calling; structured output.
- **Pricing (as of 2026-11-13):** $2.50 in / $10.00 out per 1M (Google legacy rate via LLM Stats listing).
- **Architecture:** sparse mixture-of-experts Transformer (proprietary; total/active params undisclosed).

### Raw benchmarks found

> All figures are Google DeepMind's own evaluation table (Table 11 / 18 / 19 of the Gemini 1.5 technical report, "Gemini 1.5 Pro" = May-2024 GA checkpoint; 0-shot unless noted).

Agent / tool use:

- Terminal-Bench / Tau2 / GDPval / Claw-Eval: no verified public score found (predate these harnesses)
- Berkeley Function Calling Leaderboard (weighted average): **88.4%** — simple 92.8 / multiple 90.5 / parallel 88.5 / parallel-multiple 83.5 / relevance 83.3
- Instruction following (1,326 long prompts): **90.2%** per-instruction, **58.6%** full-response

Reasoning / knowledge:

- GPQA (graduate-level science, 0-shot): **46.2%** (Feb preview 41.5%)
- MMLU: **85.9%** (5-shot; **91.7%** maj@32)
- MATH: **67.7%** (4-shot Minerva; 77.9% maj@64); GSM8K **90.8%**; AMC 2022-23 **46.4%**
- BigBench-Hard: **89.2%**; DROP F1 **74.9%**; Hellaswag **93.3%**
- PhysicsFinals (internal): **63.9%**; HiddenMath (internal): **20.1%**
- MGSM: **87.5%** (8-shot); WMT23 BLEURT **75.3**
- HLE / CritPt / AA Intelligence Index: no verified public score found (index did not cover 1.5)

Coding:

- HumanEval (chat preamble, pass@1): **84.1%** (pretrained model — the chat/instruct number; note vendor caveat that HumanEval contamination inflated 1.0-series scores)
- Natural2Code (internal held-out): **82.6%**
- SWE-bench / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- Needle-in-a-haystack (text): **100% recall up to 530K**, **99.7% at 1M**, **99.2% at 10M**; 100-needle variant ~70% at 128K, >60% at 1M
- Video haystack (10.5 h, 1 fps, 9.9M tokens): **100%** retrieval; audio haystack (107 h): **100%**
- MRCR / RULER / GraphWalks: no verified public score found (not run at the time)

### Normalized scores (1–100)

- **Tool use: 74/100.** BFCL weighted 88.4% with parallel calls at 88.5% was frontier for its era; no agentic harness (TB2.1, tau2, GDPval) exists for this model. Capped by the generation gap in agentic tool use.
- **Reasoning: 72/100.** GPQA 46.2% and MMLU 85.9% were competitive in mid-2024 but far below 2026 frontier (GPQA 90+); MGSM 87.5% and BBH 89.2% still respectable. Capped by the GPQA delta.
- **Context window: 95/100.** 1M+ production window with 99.7% retrieval at 1M and 99.2% at 10M — tier ≥1M with excellent measured retrieval; not 100 because the hosted route's max output is only 8.2K and no modern retrieval index (MRCR/GraphWalks) applies.
- **Multimodal: 88/100.** Native text/image/audio/video in with DocVQA 93.1, InfographicVQA 81.0, MMMU 62.2, ChartQA 87.2, AI2D 94.4, EgoSchema 72.2 — genuinely multimodal, but MMMU 62.2 trails 2026 VL models.
- **Coding: 62/100.** HumanEval 84.1% (pretrained model) and Natural2Code 82.6% are dated-era numbers; no modern coding benchmark row exists. The generation gap is the cap.
- **Cost efficiency: 70/100.** $2.50/$10 per 1M is mid-priced for a legacy model; cheap vs. frontier, expensive vs. current Flash tier.
- **Overall Score: 78.2/100.** Best fit for very-long-document/video/audio understanding and historical comparisons; its 1M-window retrieval numbers still hold up, but the reasoning and coding rows are a generation behind.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Gemini 1.5 technical report arXiv:2403.05530 full HTML — Tables 11/12/13/18/19, Google blog launch post, Gemini API model docs, LLM Stats pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context (arXiv:2403.05530, HTML full text)](https://ar5iv.labs.arxiv.org/html/2403.05530)
  - [Our next-generation model: Gemini 1.5 — Google blog, Feb 15 2024](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)
  - [Gemini API models — Google AI for Developers](https://ai.google.dev/gemini-api/docs/models/gemini)
  - [Gemini 1.5 Pro: Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/gemini-1.5-pro)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.