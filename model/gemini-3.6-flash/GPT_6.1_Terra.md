# Gemini 3.6 Flash — findings by GPT-6.1 Terra

- Source: Google `gemini-3.6-flash`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's previous-generation fast multimodal model for coding and agentic work.
- **Provider / access:** Google Gemini API `gemini-3.6-flash`; OpenRouter Chat Completions `google/gemini-3.6-flash`.
- **Release / knowledge:** Vals reports 2026-07-21 release; knowledge cutoff not verified.
- **IDs:** Google `gemini-3.6-flash`; no Zen Free ID independently verified.
- **Context window:** Google lists 1,048,576 input and 65,536 output tokens; input and output limits are stated separately.
- **Modalities:** Text, image, audio, video and PDF input; text output. Function calling, computer use, thinking and structured outputs supported.
- **Pricing (2026-11-01):** Vals lists $0.75 input / $3.75 output per million for its route; verify current Google tiers directly before purchasing.
- **Architecture:** Proprietary, undisclosed parameters.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **73.78% ± 1.63**, evaluated with high reasoning effort and up to 65k output tokens.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **93.43% ± 1.33**; MMLU Pro **89.28% ± 0.30**.
- HLE and CritPt: no verified public score found.

Coding:

- Vals LiveCodeBench **88.08% ± 0.94**, Vibe Code Bench v1.1 **64.00% ± 4.29**, and SWE-bench Verified **77.45%** on the Vals Index subset. The subset score is not assumed to represent the full benchmark.

Long context:

- Google specifies 1M input tokens; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 high-effort result is strong but does not establish performance across all tool harnesses.
- **Reasoning: 90/100.** GPQA Diamond 93.43% is strong; no verified HLE result here.
- **Context window: 96/100.** Google documents 1M input; no 512K-plus retrieval result verified.
- **Multimodal: 93/100.** Google documents image, audio, video and PDF input, but only text output.
- **Coding: 86/100.** LiveCodeBench and SWE-bench subset support strong coding, tempered by Vibe Code and subset limitations.
- **Cost efficiency: 90/100.** Vals reports paid $0.75/$3.75 per million; exact route pricing and free allowances may differ.
- **Overall Score: 90/100.** Half-up mean of five quality dimensions; suited to cost-conscious multimodal coding and agents.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Google documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Google Gemini 3.6 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash)
  - [Vals evaluation and route pricing](https://www.vals.ai/models/google_gemini-3.6-flash)
  - [OpenRouter route](https://openrouter.ai/google/gemini-3.6-flash)
- Future sources: add a separate signed findings file alongside this one.
