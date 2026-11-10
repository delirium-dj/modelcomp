# MAI-Code-1-Flash — findings by Fledge Alpha

- Source: Microsoft AI (`MAI-Code-1-Flash`, GitHub Copilot / Microsoft Foundry)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's first lightweight agentic coding model, trained from scratch on clean enterprise data and built directly inside GitHub Copilot's production harness. Superseded by MAI-Code-1.1-Flash (Aug 2026) at a quarter of the price.
- **Provider / access:** GitHub Copilot (`mai-code-1-flash-picker`), Microsoft Foundry (`MAI-Code-1-Flash`), GitHub Models (`github_copilot/mai-code-1-flash`). Chat Completions.
- **Release / knowledge:** 2026-06-02 (Build 2026); knowledge cutoff 2025-12 (ModelBench).
- **IDs:** `microsoft/mai-code-1-flash` (no Free ID on Zen found)
- **Context window:** 256K tokens / 128K max output (GitHub Copilot picker, ModelBench); GitHub Models route lists 128K / 64K (CloudPrice).
- **Modalities:** text in; text out; adaptive thinking; function calling (incl. parallel); structured outputs. No vision.
- **Pricing (as of 2026-10-08):** $0.75 input / $4.50 output per 1M; cache read $0.075 (LLMReference, CloudPrice).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **54.8%** (Microsoft via X; vs Claude Haiku 4.5 41.6%)
- Tau2 Telecom: **71.7%** (llm-stats)
- IFBench: **75.0%** (llm-stats; +28.9 over Haiku 4.5 on precise instruction following per Microsoft)
- LLM Stats Agents index: ~11.0 (#115)

Reasoning / knowledge:

- AIME 2026: **92.5%** (llm-stats)
- GPQA: **84.6%** (llm-stats)
- LLM Stats Score: **29.1–29.3** (#122–136, 11 evals)

Coding:

- SWE-bench Verified: **71.6%** (Microsoft; vs Haiku 4.5 66.6%, with up to 60% fewer tokens)
- SWE-bench Pro: **51.2%** (Microsoft; vs Haiku 4.5 35.2%, +16 pts)
- SWE-bench Multilingual: stronger than Haiku 4.5, exact score not published (Microsoft)

Long context:

- 256K window (Copilot picker); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2 54.8% and Tau2 Telecom 71.7% inside its native Copilot harness; weak independent Agents index caps it.
- **Reasoning: 72/100.** AIME 92.5% and GPQA 84.6% are strong for a coding-flavored flash model.
- **Context window: 62/100.** 256K on the Copilot route (128K on GitHub Models); mid-tier.
- **Multimodal: 15/100.** Text-only (1.1 added vision; 1.0 has none).
- **Coding: 76/100.** SWE-bench Verified 71.6% / Pro 51.2% with 60% token savings vs Haiku 4.5; below the 1.1 successor and elite coding models.
- **Cost efficiency: 66/100.** $0.75/$4.50 was good at launch; the 1.1 successor undercuts it 4x.
- **Overall Score: 59/100.** Mean of (70, 72, 62, 15, 76) = 59.0 → 59. Best fit: legacy Copilot integrations; new work should use MAI-Code-1.1-Flash.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Microsoft AI blog + X, llm-stats, LLMReference, CloudPrice, ModelBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
