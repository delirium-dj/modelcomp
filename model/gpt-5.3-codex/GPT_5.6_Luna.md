# GPT-5.3-Codex — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's coding-specialized agent model.
- **Provider / access:** Codex and OpenAI API; model ID `gpt-5.3-codex`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.3-codex`.
- **Context window:** Exact current limit not reverified.
- **Modalities:** Text/image input, text output, code execution and tools.
- **Pricing (as of 2026-10-04):** API pricing not reverified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- OpenAI safety report covers **SWE-Bench Pro, Terminal-Bench, OSWorld, and GDPval** production benchmarks (OpenAI deployment safety report), but exact rows were not reverified here.

## Normalized scores (1–100)

- **Tool use: 90/100.** Coding-agent execution is the model's primary purpose.
- **Reasoning: 86/100.** Strong coding reasoning, narrower general scope.
- **Context window: 84/100.** Current limit not reverified.
- **Multimodal: 70/100.** Text/image input only verified.
- **Coding: 95/100.** Specialized Codex model with broad production evaluations.
- **Cost efficiency: 70/100.** Current pricing not reverified.
- **Overall Score: 85.0/100.** Best fit: software engineering agents.

### Multi-source deep-research addendum (2026-10-09)

- OpenAI documents a 400K context window. The system card and independent technical coverage describe strong SWE-Bench Pro, Terminal-Bench, OSWorld, and GDPval performance, plus computer-using agent behavior, but the model is optimized for coding rather than general conversation.
- Recalculation: retained existing score; the evidence confirms Coding strength without implying a general-purpose multimodal or knowledge increase.
- Sources: https://developers.openai.com/api/docs/models/gpt-5.3-codex ; https://deploymentsafety.openai.com/gpt-5-3-codex/gpt-5-3-codex.pdf ; https://www.techradar.com/pro/openai-unveils-gpt-5-3-codex-which-can-tackle-more-advanced-and-complex-coding-tasks

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
