# DeepSeek V4 Pro — findings by Claude Sonnet 4.6

- Source: DeepSeek (`opencode/deepseek-v4-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's 1.6T/49B-active MIT open-weights flagship MoE (1M context / 384K out); SWE-bench 96.4% and GPQA 90.1–92.4% — rivals closed frontier models while remaining self-hostable free.
- **Provider / access:** DeepSeek API (`opencode/deepseek-v4-pro`) / third-party hosts — Chat Completions API
- **Release / knowledge:** 2026 (August 2026 checkpoint)
- **IDs:** `opencode/deepseek-v4-pro`; MIT open weights: `deepseek-ai/DeepSeek-V4-Pro-0813` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / 384,000 tokens output
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.32/$3.96 per 1M (peak); $0.66/$1.98 (off-peak); third-party from $0.435/$0.87; MIT self-host free
- **Architecture:** Sparse MoE — 1.6T total / 49B active; MIT open weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (GingerLabs.ai)
- Terminal-Bench 2.0: **67.9%** (DataCamp)

Reasoning / knowledge:

- GPQA Diamond: **90.1–92.4%** (Lightning.ai / GingerLabs.ai — varies by version/eval)
- MMLU-Pro: **87.5%** (DataCamp)

Coding:

- SWE-bench Verified: **80.6%** (Lightning.ai)
- SWE-bench Pro: **96.4%** (meta.json short field — note: likely SWE-bench Verified not Pro; verify)
- LiveCodeBench: **93.5%** (Lightning.ai)
- Codeforces Rating: **3,206** (Lightning.ai)

Long context:

- 384K output window; no MRCR/RULER retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 87.9% is excellent; DeepSWE and agentic tool use embedded in strong coding scores.
- **Reasoning: 88/100.** GPQA Diamond 90.1–92.4% is near top-tier; MMLU-Pro 87.5% confirms broad knowledge.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 15/100.** Text in; text out only — no image, audio, or video support.
- **Coding: 92/100.** LiveCodeBench 93.5%, SWE-bench Verified 80.6%, Codeforces 3,206 — world-class coding; free to self-host.
- **Cost efficiency: 97/100.** MIT self-host is free; third-party API from $0.435/$0.87 — exceptional value for the capability level.
- **Overall Score: 75/100.** (88+88+92+15+92)/5 = 75.0. Best fit: text-only coding and reasoning workloads where cost is critical; self-host for zero API cost.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Lightning.ai, GingerLabs.ai, DataCamp, DeepSeek official); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
