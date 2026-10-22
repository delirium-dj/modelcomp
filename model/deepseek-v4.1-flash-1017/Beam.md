# DeepSeek V4.1 Flash 1017 — findings by Beam

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash-1017`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's October 17, 2026 minor update to V4.1 Flash — finishes tasks faster with shorter outputs, improved DeepSWE/Terminal-Bench/HLE/ProgramBench over the September release. Low-cost, long-context, tool-calling model.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4.1-flash-1017`); OpenRouter (`deepseek/deepseek-v4.1-flash-1017`). Chat Completions.
- **Release / knowledge:** 2026-10-17 (DeepSeek). Knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017` (paid; no Free ID on Zen).
- **Context window:** 1,000,000 tokens total; 393,000 max output (Puter).
- **Modalities:** Text and image input; text output. Tool calls yes; reasoning effort parameter (1–100).
- **Pricing (as of 2026-10-22):** $0.12 / 1M input and $0.48 / 1M output (Puter) — conflicting with OpenRouter's $0.30 / $1.20 listing. Both cited; official DeepSeek pricing not separately confirmed in sources reviewed.
- **Architecture:** 552B-parameter Mixture-of-Experts (V4.1 Flash family: 8B active while reading, 16B while generating); causal encoder-decoder design. Exact 1017 delta not published.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **45.1** (Puter / AA, measured)
- Terminal-Bench 4.0: **42.3%** (DeepSeek, vendor-reported, 1017 update)
- ProgramBench: **29.1%** (DeepSeek, vendor-reported, 1017 update)
- Terminal-Bench 2.1: **90.6%** (DeepSeek, reported for V4.1 Flash base — not the 1017 update)
- CyberGym: **88.1%** (DeepSeek, reported for V4.1 Flash base)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **43.3%** (AA, measured)
- HLE (without tools): **42.6%** (DeepSeek, vendor-reported, 1017 update)
- SciCode: **55.9%** (AA, measured)
- AA-LCR (long-context reasoning): **82.7%** (AA, measured)
- GPQA Diamond: no verified public score found in sources reviewed
- MMLU-Pro: no verified public score found in sources reviewed
- Artificial Analysis Intelligence Index: **45.1** (AA, measured)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **77.0%** (DeepSeek, vendor-reported, 1017 update; vs 74.2% prior)
- SWE-bench Verified: no verified public score found for the 1017 ID (V4 Pro max-effort: 80.6%)
- LiveCodeBench: no verified public score found
- SciCode: **55.9%** (AA, measured)
- Vibe Code Bench: no verified public score found
- DeepSWE: **77.0%** (vendor-reported)

Long context:

- 1,000,000 token context window; AA-LCR 82.7% (measured).

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 4.0 42.3% and DeepSWE 77.0% show solid mid-tier agentic performance; capped by no Tau-bench / GDPval / Claw-Eval coverage.
- **Reasoning: 72/100.** Decent reasoning (HLE 43.3%, SciCode 55.9%, LCR 82.7%). Capped by no published GPQA Diamond / MMLU-Pro and mid HLE.
- **Context window: 90/100.** 1M window with 82.7% LCR — top tier by size, scored below 100 because retrieval is not ≥98%.
- **Multimodal: 65/100.** Text + image in, text out. Capped by no video/audio input.
- **Coding: 74/100.** Strong coding (DeepSWE 77.0%, SciCode 55.9%, TB 4.0 42.3%). Capped by no SWE-bench Verified / LiveCodeBench exacts.
- **Cost efficiency: 95/100.** Extremely low pricing ($0.12–$0.30 / $0.48–$1.20 per 1M) for 1M context and 393K output. Paid but near-free tier.
- **Overall Score: 72/100.** Mean of five non-cost dims (60 + 72 + 90 + 65 + 74) / 5 = 72.2 → 72. Best fit for cost-sensitive long-context coding and tool-calling pipelines.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-22
- Method: public internet research (Puter model card, Artificial Analysis via Puter, DeepSeek vendor release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.