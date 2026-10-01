# Claude Haiku 4.5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-haiku-4-5, e.g. OpenCode Zen `opencode/claude-haiku-4.5`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest and most cost-efficient Claude (Oct 2025), pitched as near-frontier at low cost — matches Claude Sonnet 4 on coding, computer use, and agent tasks while running more than 2× faster at ~one-third the cost.
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock, Google Vertex AI, Microsoft Foundry, Claude.ai, Claude Code. Chat Completions-style Messages API, not OpenAI Responses.
- **Release / knowledge:** 2025-10-15; reliable knowledge cutoff Feb 2025, training data cutoff Jul 2025 (Anthropic model docs).
- **IDs:** `claude-haiku-4-5` (alias) / pinned snapshot `claude-haiku-4-5-20251001`; Bedrock `anthropic.claude-haiku-4-5`, Vertex `claude-haiku-4-5@20251001`. No Free ID on Zen — scored on paid pricing.
- **Context window:** 200K total, 64K max output (synchronous Messages API) — verified via platform.claude.com model overview table.
- **Modalities:** text + image in, text out; vision, multilingual, tool calls, extended thinking (manual budget mode); no audio/video in reported.
- **Pricing (as of 2026-10-01):** $1.00 / $5.00 per 1M input/output tokens; batch API 50% off; prompt cache reads ~10% of base input price (up to 90% savings with caching).
- **Architecture:** proprietary (weights not disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench (Terminus 2, n-attempts=1): **40.21%** without thinking (6 runs) / **41.75%** with 32K thinking budget (5 runs) (Anthropic announcement, Oct 15 2025)
- Tau3-Banking / Tau2-bench: reported with 128K thinking budget, averaged over 10 runs (Anthropic methodology); value only in announcement chart — no verified public score found in text
- OSWorld (official OSWorld-Verified, 100 max steps, 128K total / 2K per-step thinking, 4 runs): vendor states it surpasses Claude Sonnet 4 on computer use; exact value only in chart — no verified public score found in text
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Agentic coding (Augment customer quote, via Anthropic page): achieves 90% of Claude Sonnet 4.5's performance on Augment's agentic coding evaluation

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (announcement chart only)
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AIME: reported as average over 10 independent runs, each pass@1 over 16 trials, 128K thinking budget (Anthropic methodology); value only in chart — no verified public score found in text
- MMMLU: averaged over 10 runs, 14 non-English languages, 128K thinking budget (Anthropic methodology); value only in chart — no verified public score found in text
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA page for this model ID)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic simple scaffold: bash + string-replacement file edits; averaged over 50 trials, no test-time compute, 128K thinking budget, full 500-problem set)
- SWE-bench Pro / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported in the sources checked; 200K window, 64K max output per Anthropic docs.

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor positions it as matching Claude Sonnet 4 on agent tasks with strong τ²-bench/OSWorld protocols (128K thinking, multi-run averages), but Terminal-Bench sits at 40.2–41.8% (Terminus 2, n-attempts=1), just under the 45–60% mid band, and no Tau3/GDPval/Claw-Eval numbers are verifiable in text.
- **Reasoning: 65/100.** AIME and MMMLU reported under strong protocols but values live only in announcement charts; verified GPQA/HLE/MRCR not found, and the reliable knowledge cutoff (Feb 2025) lags every 2026-era peer — caps the score at the top of the mid band.
- **Context window: 70/100.** 200K total / 64K output maps to the 200K tier per methodology (200K = 70); no 512K+ retrieval evidence to lift it.
- **Multimodal: 65/100.** Text + image in, text out (vision verified in model docs); no video/audio/PDF input reported, so it sits mid-band for image-in.
- **Coding: 84/100.** SWE-bench Verified 73.3% on a deliberately simple scaffold (near the 74% frontier DeepSWE reference) plus vendor-comparable coding to Sonnet 4 and "90% of Sonnet 4.5" agentic coding per Augment; Terminal-Bench ~41% and missing LiveCodeBench/SciCode/Vibe keep it below the 90s.
- **Cost efficiency: 90/100.** $1/$5 per 1M paid (no Zen Free ID), between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) anchors, with 50% batch and ~90% cache-read savings available.
- **Overall Score: 71.8/100.** Mean of the five non-cost dims (75+65+70+65+84)/5 = 71.8 — best-fit for latency-sensitive high-volume agents and sub-agent fleets where Sonnet 4-class coding/agent quality is needed at a quarter of frontier cost.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Anthropic announcement + model page + platform docs, 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
