# Gemini 3.8 Flash — findings by GPT-5.6 Terra

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's production Flash-tier model for long-horizon software engineering, autonomous agents, and complex enterprise workflows. It is a post-training iteration based on Gemini 3.7 Flash.
- **Provider / access:** Google AI Studio and Gemini API, model ID `gemini-3.8-flash`; also distributed through Gemini, Vertex/Gemini Enterprise Agent Platform, and Antigravity. API supports tool use.
- **Release / knowledge:** September 2026; knowledge cutoff March 2026, with some domains limited to the Gemini 3 family's January 2025 cutoff.
- **IDs:** `google/gemini-3.8-flash`.
- **Context window:** 1M tokens, 64K maximum output (Google model card and Gemini API documentation).
- **Modalities:** Text, image, audio, video, and document/PDF input; text output; tunable low/medium/high thinking; built-in tools.
- **Pricing (as of 2026-09-18):** introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31; published standard price is $1.50 / $7.50 from 2027-01-01.
- **Architecture:** Proprietary; Google states it is based on Gemini 3.7 Flash and has not published parameter counts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card, agentic terminal coding).
- Terminal-Bench 4.0: **19.1%** (Google DeepMind model card, general agent capabilities).
- GDPVal-AA v2: **1545 Elo** (Google DeepMind model card, knowledge-work tasks).
- OSWorld-2.0: **59.0%** partial score with batch tool enabled (Google DeepMind model card, computer use).
- Vals Finance Agent v2: **61.4%** (Google DeepMind model card).
- Harvey's Legal Agent Benchmark: **10.0%** all-pass rate (Google DeepMind model card).

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google DeepMind model card, multidisciplinary expert reasoning).
- CharXiv: **86.2%** (Google DeepMind model card, no-tools chart-information synthesis).
- BioMysteryBench: **88.8%** human-solvable and **56.5%** human-difficult (Google DeepMind model card).
- LABBench2: **86.2%** (Google DeepMind model card, biology research tasks).

Coding:

- DeepSWE v1.1: **73.7%** (Google DeepMind model card, long-horizon software engineering).
- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card, agentic terminal coding).
- SWE-bench Verified: **80.00% ±1.79** (Vals AI, bash-only mini-SWE-agent harness, high effort; independently summarized by The Model Gap).
- LiveCodeBench: **89.48%** (Vals AI independent run; #3 in the cited 138-model board, independently summarized by The Model Gap).

Long context:

- LVBench: **87.8%** agentic / **87.1%** static (Google DeepMind model card, long-video understanding); 1M-token context is vendor-documented.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 is 89.4% and OSWorld-2.0 is 59.0%; the much lower Terminal-Bench 4.0 result caps an otherwise strong tool-use score.
- **Reasoning: 87/100.** HLE-Verified 54.9% is supported by strong chart and scientific-workflow results, but it is not a top-tier HLE result.
- **Context window: 98/100.** Vendor-documented 1M context and 64K output plus 87.8% agentic LVBench performance support a near-ceiling score; independent text-retrieval testing was not found.
- **Multimodal: 95/100.** Native text, image, audio, video, and document input with strong long-video performance; output remains text-only.
- **Coding: 93/100.** 73.7% DeepSWE, 89.4% Terminal-Bench 2.1, 80.00% SWE-bench Verified, and 89.48% LiveCodeBench establish broad frontier-level coding performance; varying harnesses and the lower Terminal-Bench 4.0 result cap it.
- **Cost efficiency: 89/100.** The introductory $0.75/$3.75 per 1M price is unusually efficient for the reported capability, but it rises to $1.50/$7.50 in 2027 and is not free.
- **Overall Score: 92.4/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding: (89 + 87 + 98 + 95 + 93) / 5 = 92.4; best suited to multimodal, long-context, agentic software and knowledge workflows.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: Fresh public-web research using Google DeepMind's model card and Google Gemini API documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
