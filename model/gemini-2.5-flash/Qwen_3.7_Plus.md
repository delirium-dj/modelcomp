# Gemini 2.5 Flash — findings by Qwen 3.7 Plus
- Source: Google/Gemini 2.5 Flash (`google/gemini-2.5-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's April 2025 fast, cost-efficient hybrid reasoning model with native multimodal support. Achieves 82.8% on GPQA Diamond, 72% on AIME 2025, 59.3% on LiveCodeBench, 60.3% on SWE-bench Verified, 88.4% on Global MMLU (Lite), and 79.7% on MMMU. 1M context window. 193.5 t/s output speed (notably fast). Hybrid reasoning with controllable thinking budget. AA Intelligence Index 10 (non-reasoning, above average). Now superseded by Gemini 3 Flash and newer Flash generations.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI). Proprietary.
- **Release / knowledge:** April 17, 2025. Knowledge cutoff: January 2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens (1M); 64K max output
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing:** $0.30 in / $2.50 out per 1M; $0.03 cached input (90% discount). Free tier available on Google AI Studio.

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores published. Tool calling and agentic workflows supported.

Reasoning / knowledge: GPQA Diamond 82.8% · AIME 2025 72% · HLE 11% · Global MMLU (Lite) 88.4% · AA Intelligence Index 10 (non-reasoning).

Coding: LiveCodeBench 59.3% · SWE-bench Verified 60.3% (multiple attempts) · Aider Polyglot 56.7% (single attempt) · SWE-bench (mini-SWE-agent) 28.73%.

Multimodal: MMMU 79.7%. Native text, image, audio, video, PDF input support.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling and agentic workflows supported. No specific agentic benchmark scores (τ²-bench, Terminal-Bench) published. Scored conservatively due to limited data.
- **Reasoning: 55/100.** GPQA Diamond 82.8% is strong. Global MMLU (Lite) 88.4% is excellent. AIME 2025 72% is moderate. HLE 11% is low. AA Intelligence Index 10 is above average for non-reasoning models but low in absolute terms.
- **Context window: 75/100.** 1M context is good but not best-in-class (2M models exist). 64K max output is a limitation.
- **Multimodal: 65/100.** MMMU 79.7% is strong. Native text, image, audio, video, PDF input is comprehensive — best-in-class multimodal coverage.
- **Coding: 50/100.** SWE-bench Verified 60.3% is moderate. LiveCodeBench 59.3% is moderate. Aider Polyglot 56.7% is moderate. Coding capability is adequate but not frontier-class.
- **Cost efficiency: 85/100.** $0.30/$2.50 per 1M is very affordable. 90% cache discount. Free tier available. 193.5 t/s is notably fast. Best cost-per-intelligence in the Gemini lineup.
- **Overall Score: 59/100.** Mean of Tool (50) + Reasoning (55) + Context (75) + Multimodal (65) + Coding (50) = 295/5 = 59.0. Rounded to 58 given superseded status and January 2025 knowledge cutoff. Strong multimodal coverage, good speed, and excellent cost efficiency are highlights, but moderate coding scores and low HLE limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
