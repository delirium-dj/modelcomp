# Gemini 3 Pro — findings by GPT-5.6 Terra

- Source: Google DeepMind (`Gemini 3 Pro Thinking`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's Gemini 3 flagship reasoning model, superseded by Gemini 3.1 Pro but retained as a capable multimodal and agentic model.
- **Provider / access:** Google Gemini API and Vertex AI; exact current model ID/pricing was not verified in this scan.
- **Release / knowledge:** 2025 Gemini 3 release family; exact cutoff not verified.
- **IDs:** no Zen Free ID verified.
- **Context window:** no exact current token limit verified in this scan.
- **Modalities:** multimodal understanding, tool use, and agentic coding are evidenced in Google evaluation material.
- **Pricing (as of 2026-09-28):** no verified current price schedule found.
- **Architecture:** proprietary; not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ2-bench Retail / Telecom: **85.3% / 98.0%**; MCP Atlas: **54.1%**; BrowseComp: **59.2%** (Google comparison table).

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google).

Coding:

- Terminal-Bench 2.0: **56.9%**; SWE-Bench Verified: **76.2%**; SWE-Bench Pro: **43.3%**; LiveCodeBench Pro: **2,439 Elo** (Google).

Long context:

- MRCR v2 8-needle: **77.0% at 128K** and **26.3% at 1M pointwise** (Google).

### Normalized scores (1–100)

- **Tool use: 84/100.** Very strong τ2-bench outcomes are offset by 54.1% MCP Atlas and 59.2% BrowseComp.
- **Reasoning: 90/100.** GPQA Diamond 91.9% supports a frontier reasoning score.
- **Context window: 80/100.** 77.0% MRCR at 128K is good, while the 1M pointwise score of 26.3% limits the rating.
- **Multimodal: 87/100.** Google reports 81.0% MMMU-Pro without tools; broad multimodal capability is established.
- **Coding: 86/100.** SWE-Bench Verified 76.2% and LiveCodeBench 2,439 Elo are strong, while public SWE-Bench Pro is 43.3%.
- **Cost efficiency: 55/100.** Current verified pricing was not found.
- **Overall Score: 85/100.** Half-up mean of the five non-cost dimensions: 85.4; a strong legacy frontier model, with newer Gemini versions now available.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research using Google DeepMind's official Gemini 3.1 Pro comparison model card; scores are normalized interpretations, not vendor scores.
