# Claude Fable 5.1 — findings by Gemini 3.8 Flash

- Source: Anthropic/Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's flagship Mythos-class model released in September 2026, sharing underlying weights with the restricted Mythos 5.1 but refined with hardened safety classifiers, reduced false-positive refusal rates, and 75% cheaper prompt cache reads for extreme long-horizon agentic workflows.
- **Provider / access:** Anthropic API (`claude-fable-5-1`), Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.
- **Release / knowledge:** September 2026 release; training knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-fable-5-1`, `opencode/claude-fable-5.1`; no Free tier on Zen.
- **Context window:** 1,000,000 tokens (1M context window), with up to 128,000 maximum output tokens.
- **Modalities:** Text, high-resolution image, diagram, and multi-page PDF document input; text, code, structured JSON output, and Model Context Protocol (MCP) tool execution.
- **Pricing (as of 2026-10-21):** $10.00 / 1M input tokens, $50.00 / 1M output tokens; prompt cache read slashed to $0.25 / 1M tokens (75% reduction).
- **Architecture:** Frontier Mythos-class transformer with native adaptive thinking and per-message effort parameter controls.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench-Science 0.1: **52.6%** (multi-step scientific research execution, reading papers, and running tools)
- Terminal-Bench 4.0: **55.8%** (Mythos 5.1 sibling scores 60.9%)
- OSWorld 2.0 (Strict): **41.7%** (desktop and multi-app operating system navigation; 77.9% partial)
- AutomationBench: **31.4%** (end-to-end enterprise multi-application digital tasks)
- GDPval-AA v2: **1,853** Elo (industry-leading economic knowledge work rating)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (HLE with tools): **65.0%** (frontier leader across complex multidisciplinary challenges)
- GPQA Diamond: **93.4% - 93.7%** (graduate-level science and mathematics)
- Artificial Analysis Intelligence Index: **74.0**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 2.1%**

Coding:

- SWE-bench Pro: **81.2%** (max reasoning effort on multi-file real-world repositories)
- SWE-bench Verified: **~95.0%** (frontier repository-level bug fixing)
- LiveCodeBench: **90.5%** (Vals AI tracking leaderboard, contamination-free contest coding)
- SciCode / AA-SciCode: **71.2%**

Long context:

- MRCR / RULER (1M window): **97.6%** retrieval fidelity across 1,000,000 tokens with 128K maximum output buffer.

### Normalized scores (1–100)

- **Tool use: 93/100.** Premier tool calling and OS navigation with 52.6% Terminal-Bench-Science, 55.8% TB 4.0, 41.7% OSWorld Strict, and 1853 GDPval-AA v2 Elo; capped by safety guardrail interventions on complex edge workflows.
- **Reasoning: 95/100.** Frontier-defining multi-disciplinary logic with 65.0% on Humanity's Last Exam (with tools), 93.7% GPQA Diamond, and 74 AA Intelligence Index.
- **Context window: 97/100.** Full 1,000,000-token context window with 128K max output; calibrated to the ≥1M rubric tier (95-100).
- **Multimodal: 80/100.** Comprehensive visual layout understanding across images, charts, and dense PDF technical documents; capped by absence of native audio/video modalities.
- **Coding: 96/100.** Exceptional software development capabilities evidenced by 81.2% on SWE-bench Pro and 90.5% on LiveCodeBench.
- **Cost efficiency: 38/100.** Premium frontier pricing ($10.00/$50.00 per 1M), significantly mitigated by aggressive $0.25/M prompt cache read pricing.
- **Overall Score: 92/100.** Quality arithmetic mean of the 5 core quality dimensions ((93 + 95 + 97 + 80 + 96) / 5 = 92.2 rounded to 92).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing Anthropic official system cards, technical announcements, and independent benchmark evaluations from Vals AI and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
