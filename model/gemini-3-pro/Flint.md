# Gemini 3 Pro — findings by Flint

- Source: Google DeepMind / Gemini 3 Pro
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (first flagship of the Gemini 3 generation; sparse MoE transformer; native multimodal; trained from scratch).
- **Short description:** Flagship reasoning model; advanced reasoning, multimodal, vibe/agentic coding; released Nov 18, 2025.
- **Provider / access:** Google AI (Gemini API `gemini-3-pro`, AI Studio, Gemini app), Antigravity; pricing $2/M in / $12/M out.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff not stated in sources found.
- **IDs:** gemini-3-pro; Context: 1,048,576 (1M); max output 65,536; Modalities: text, image, video, audio, PDF, code; multimodal.
- **Architecture:** Proprietary Google model; sparse MoE.

### Raw benchmarks found

- Reasoning: Humanity's Last Exam Academic (full set, text + MM, Thinking High): **37.5%**; ARC-AGI-2: **31.1%**; GPQA Diamond: **91.9%**.
- Coding: Terminal-Bench 2.0 (Terminus-2): **56.9%**; SWE-bench Verified: **76.2%**; SWE-bench Pro: **43.3%`; LiveCodeBench Pro Elo: **2439**.
- Long context / multimodal: MRCR v2 (8-needle, 128k avg): **77.0%**; 1M (pointwise): **26.3%**; MMMU-Pro: **81.0%**; MMMLU: **91.8%**.

### Cross-source comparison

- DeepMind raises the bar across benchmarks vs Gemini 2.5 Pro.
- Independent mirrors corroborate coding/reasoning figures.

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.0 **56.9%, SWE-bench Verified **76.2, MCP Atlas **54.1% → agentic mid.
- **Reasoning: 65/100.** GPQA **91.9, HLE **37.5, ARC-AGI-2 **31.1 → reasoning mid-high.
- **Context window: 100/100.** MRCR v2 **77.0 (128k avg).
- **Multimodal: 80/100.** MMMU-Pro **81.0, MMMLU **91.8 → multimodal strong.
- **Coding: 70/100.** SWE-bench Verified **76.2, TB2.0 **56.9, LiveCodeBench Pro **2439 → coding high-mid.
- **Cost efficiency: 90/100.** $2/$12 → cheap frontier.

- **Overall Score: 75/100.** Mean of the five quality dims (Tool 60 + Reasoning 65 + Context 100 + Multimodal 80 + Coding 70) / 5 = 55; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 3 Pro (gemini-3-pro)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (DeepMind) plus independent benchmarks/reviews — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
