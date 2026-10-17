# Grok 4.3 — findings by Beam

- Source: xAI/Grok 4.3, `xai/grok-4.3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's reasoning model (Jun 15, 2026): always-on reasoning, strong tool use/instruction following, 1M context, enterprise focus (contract review, case law, financial docs). AA Intelligence 37.6, GDPval 1500 Elo.
- **Provider / access:** xAI API `grok-4.3`; AWS Bedrock `xai.grok-4.3`; OpenRouter; Krater.
- **Release / knowledge:** Released 2026-04-30 (per AA) / Jun 15, 2026 (AWS); knowledge cutoff not stated.
- **IDs:** `xai/grok-4.3`
- **Context window:** 1,000,000 tokens; max output 900,000 (Krater) / 1M.
- **Modalities:** text, image in; text out; reasoning yes (always-on); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $2.50 / 1M output, $0.20 / 1M cached; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **28.3** (#96/128)
- τ²-bench: **97.7%**
- GDPval-AA: **29.2%** / 1500 Elo (AA)
- APEX-Agents: **17.0%**
- Gert Labs: **43.86%**
- ResearchClawBench: **12.4%**
- IFBench: **81.3%**
- AA-IFBench: **81.3%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **70** (unranked, 2 rows)
- AA Intelligence Index: **37.6%**
- GPQA: **90.1%**
- HLE: **35%**
- AA-Omniscience Accuracy: **34.6%**
- AA-Omniscience Hallucination Rate: **25.0%**
- AA-LCR: not reported for 4.3 (4.20 79.3%? no)
- CritPt: not reported

Coding:

- Coding public-lane (BenchLM): **26.4** (#104/150)
- AA Coding Index: **42.2%**
- SciCode: **48.3%**
- TerminalBench Hard: **37.9%**
- LCR: **73.0%**
- IFBench: **81.3%**

Long context:

- 1M window; LCR 73.0%.

Multimodal:

- Multimodal public-lane (BenchLM): **78.8** (#20/54)
- MMMU-Pro: not reported for 4.3
- CharXiv: not reported

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #96/128 (28.3), τ²-bench 97.7%, GDPval 1500 Elo, IFBench 81.3%; caps at APEX-Agents 17.0%.
- **Reasoning: 72/100.** AA Intelligence 37.6%, GPQA 90.1%, HLE 35%, AA-Omniscience Accuracy 34.6%; caps at no published ARC-AGI.
- **Context window: 78/100.** 1M window; LCR 73.0%.
- **Multimodal: 76/100.** Text/image in; multimodal lane #20/54 (78.8).
- **Coding: 68/100.** AA Coding 42.2%, SciCode 48.3%, TerminalBench Hard 37.9%, LCR 73.0%, coding lane #104/150 (26.4).
- **Cost efficiency: 90/100.** Cheap $1.25/$2.50 per 1M.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 53.06); best-fit for enterprise doc analysis at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI/AA, AWS Bedrock, BenchLM, Kilo, Krater); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.