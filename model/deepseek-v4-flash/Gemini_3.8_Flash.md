# DeepSeek V4 Flash — findings by Gemini 3.8 Flash

- Source: DeepSeek / DeepSeek-V4 (`deepseek/deepseek-v4-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's high-efficiency frontier reasoning model featuring fast hybrid-attention architecture, 1M context window, and ultra-low inference costs; officially superseded on September 10, 2026 by DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`), [OpenRouter](https://openrouter.ai/models/deepseek/deepseek-v4-flash), and Command Code. API requests automatically routed to V4.1-Flash.
- **Release / knowledge:** 2026-04-24 release (0731 update; superseded 2026-09-10); knowledge cutoff early 2026.
- **IDs:** `deepseek/deepseek-v4-flash`
- **Context window:** 1,000,000 tokens total (1M context window).
- **Modalities:** Text and code input; text, code, structured JSON, and tool-calling output (visual understanding formerly routed to V4-Vision-Exp, now native in V4.1).
- **Pricing (as of 2026-10-11):** Off-peak (17h/day): $0.15 / 1M input, $0.003 / 1M cache read, $0.60 / 1M output; Peak: $0.30 input / $0.006 cache / $1.20 output ([DeepSeek Pricing](https://deepseek.com)).
- **Architecture:** Sparse Mixture-of-Experts (MoE) with multi-head latent attention (MLA) and hybrid attention routing.

### Raw benchmarks found

Agent / tool use:
- Tau2-Bench (Telecom): **95.0%** pass^1
- GDPval-AA: **1414–1559** Elo ([Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-flash))
- Terminal-Bench: **78.7%** (TB 2.0: **56.9%**)
- MCP-Atlas: **69.0%** pass rate

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **40–50** (0731 update reached 50, V4.1-Flash scored 40)
- AIME 2026: **95.83%** accuracy
- GPQA Diamond: **88.1%–90.8%** accuracy
- Humanity's Last Exam (HLE): **34.8%** accuracy
- MathArena HMMT: **93.94%** accuracy

Coding:
- SWE-bench Verified: **79.0%** resolved
- SWE-bench Pro: **52.6%** resolved
- Artificial Analysis Coding Index: **69.1**
- SciCode: **44.9%–50.3%** accuracy

Long context:
- 1,000,000 tokens (1M) context window with 79.7 long-context reasoning retention on Artificial Analysis.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-level tool coordination demonstrated by 95.0% on Tau2-Bench Telecom, 69.0% on MCP-Atlas, and up to 1559 Elo on GDPval-AA.
- **Reasoning: 88/100.** Strong mathematical reasoning highlighted by 95.83% on AIME 2026, 88.1%–90.8% on GPQA Diamond, and AA Intelligence Index of 40–50.
- **Context window: 90/100.** Full 1M token context window supported natively with high cache efficiency ($0.003 / 1M off-peak).
- **Multimodal: 20/100.** Text-only core model in base V4 Flash (vision handled by separate variant); minimal baseline score.
- **Coding: 88/100.** Excellent coding capabilities shown by 79.0% on SWE-bench Verified and 69.1 on the AA Coding Index.
- **Cost efficiency: 97/100.** Groundbreaking economy at $0.15 / $0.60 per 1M tokens with ultra-cheap prompt cache reads.
- **Overall Score: 74/100.** Arithmetic mean of five quality dimensions: (86 + 88 + 90 + 20 + 88) / 5 = 74.4 → 74. Extremely cost-effective high-throughput model with elite coding and math reasoning, capped overall primarily by lack of native vision on base SKU.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into DeepSeek official technical announcements, Artificial Analysis leaderboards, and OpenRouter endpoint documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
