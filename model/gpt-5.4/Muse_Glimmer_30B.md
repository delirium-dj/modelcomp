# Gpt 5.4 — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-5.4
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 5.4
- **Short description:** OpenAI GPT-5.4 model.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4`. API access.
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/gpt-5.4`
- **Context window:** 1,050,000 tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-25):** Standard pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **75.1%** (BenchLM)
- OSWorld-Verified: **75%** (BenchLM)
- Claw-Eval: **60.3%** (BenchLM)

Reasoning / knowledge:
- GPQA: **92.8%** (BenchLM)
- GPQA-D: **92.8%** (BenchLM)
- HLE: **52.1%** (BenchLM)
- AA-LCR: **82.0%** (BenchLM)

Coding:
- LiveCodeBench Pro: **87.5%** (BenchLM)
- SWE-bench Pro: **57.7%** (BenchLM)
- AA Coding Index: **71.0%** (BenchLM)

Long context:
- Context window 1.05M.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 75.1% strong.
- **Reasoning: 90/100.** GPQA 92.8% frontier.
- **Context window: 97/100.** 1.05M window.
- **Multimodal: 15/100.** Text only.
- **Coding: 78/100.** LiveCodeBench Pro 87.5%.
- **Cost efficiency: 75/100.** Standard pricing.
- **Overall Score: 72/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
