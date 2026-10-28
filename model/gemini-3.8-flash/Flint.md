# Gemini 3.8 Flash — findings by Flint

- Source: Google / Gemini 3.8 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (most intelligent Flash model; 3rd Flash in ~6 weeks — 3.6 Flash Jul 21, 3.7 Flash Aug 13, 3.8 Flash Sep 2).
- **Short description:** Google's most intelligent workhorse model, engineered for long-horizon software engineering, autonomous agents, complex enterprise workflows; same speed/low cost as 3.7 Flash, substantial gains from 3.7.
- **Provider / access:** Google AI (Gemini API, AI Studio, Gemini Enterprise Agent Platform); Antigravity; introductory pricing $0.75/1M in / $3.75/1M out through Dec 31, 2026; standard from Jan 1, 2027; context 1M, max output 65,536; thinking low/medium/high (medium default; MINIMAL unsupported).
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not stated in sources found.
- **IDs:** gemini-3.8-flash; Context: 1,048,576 (1M); max output 65,536; Modalities: Text, image, video, audio, PDF input; text out; thinking; function calling, structured outputs, code execution, grounding, computer use; multimodal.

### Raw benchmarks found

- Coding: DeepSWE v1.1: **73.7%**; Terminal-bench 2.1: **89.4%**; LiveCodeBench (Vals): **89.5%**; SWE-bench (Vals): **80.0%**.
- Reasoning / knowledge: Vals Index: **69.18**; Artificial Analysis Intelligence Index: **59**; HLE-Verified: **54.9%**.

### Cross-source comparison

- Google reports Gemini 3.8 Flash with DeepSWE **73.7%**, TB2.1 **89.4%**, GDPVal-AA **1545**, Vals Finance Agent v2 **61.4%** — substantial gains from 3.7 Flash, approaching higher-cost frontier models.
- BenchLM overall **69.23** (Gemini 3.8 Flash) vs GPT-6 Luna 66.55 / Muse Spark 60.46; reasoning averages 74.3 vs 59.2 (GPT-6 Luna).
- Independent: AA Intelligence Index **59** (3.8 Flash high) reaches Pareto frontier (intelligence vs cost per task).

### Normalized scores (1–100)

- **Tool use: 90/100.** DeepSWE **73.7%, TB2.1 **89.4%, LiveCodeBench (Vals) **89.5%, SWE-bench (Vals) **80.0% → coding-agent high.
- **Reasoning: 70/100.** Vals Index **69.18**, AA Intelligence **59**, HLE **54.9%** → ~70.
- **Context window: 100/100.** Documented **1,048,576** (1M); max output 65,536.
- **Multimodal: 87/100.** LVBench **87.8%, CharXiv **86.2% → multimodal high.
- **Coding: 88/100.** DeepSWE **73.7%, TB2.1 **89.4%, LiveCodeBench (Vals) **89.5%, SWE-bench (Vals) **80.0% → coding lead.
- **Cost efficiency: 95/100.** Introductory $0.75/$3.75 (1M) → cheap Flash tier.

- **Overall Score: 87/100.** Mean of the five quality dims (Tool 90 + Reasoning 70 + Context 100 + Multimodal 87 + Coding 88) / 5 = 87; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 3.8 Flash (gemini-3.8-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Google AI, DeepMind, blog) plus independent benchmarks/reviews (BenchLM, Artificial Analysis, Vals AI) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
