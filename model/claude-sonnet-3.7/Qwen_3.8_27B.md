# Claude Sonnet 3.7 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-3-7-sonnet, e.g. OpenCode Zen `opencode/claude-sonnet-3.7`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's Feb 2025 hybrid-reasoning flagship (first hybrid reasoning model on the market): standard mode or user-budgeted extended thinking in one model, with agentic-coding focus (shipped alongside Claude Code). Now a deprecated legacy release.
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock, Google Vertex AI; available on all Claude plans at launch (incl. Free). Deprecated on current provider surfaces (Artificial Analysis marks it deprecated, Feb 2025 release).
- **Release / knowledge:** released 2025-02-24; knowledge cutoff Oct 1, 2024 per Artificial Analysis (Anthropic launch docs listed Jan 2025).
- **IDs:** `claude-3-7-sonnet` (alias) / pinned `claude-3-7-sonnet-20250219`. No Free ID on Zen — scored on paid pricing.
- **Context window:** 200K total; 64K standard max output; extended thinking shares a 128K output cap (thinking budget + answer) — verified via Artificial Analysis model page + Anthropic announcement.
- **Modalities:** text + image in, text out; reasoning yes (extended thinking with controllable budget); tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $3.00 / $15.00 per 1M input/output tokens (unchanged from launch; includes thinking tokens); 90% cache discount; ~$2.31/M blended (7:2:1).
- **Architecture:** proprietary, parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- TAU-bench (Airline/Telecom agents): state-of-the-art at launch with a planning-tool prompt addendum and 100 max steps (Anthropic announcement); exact value only in launch chart — no verified public score found in text
- OSWorld (computer use, pass@1): improved over Claude 3.5 Sonnet, gains growing with step count (Anthropic extended-thinking post); value in chart only — no verified public score found in text
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.8%** with parallel test-time compute (256 samples, learned scoring model, 64K thinking budget; physics subscore 96.5%) — research protocol not available in the deployed model (Anthropic extended-thinking post, Feb 24, 2025); vanilla single-pass value only in launch chart — no verified public score found in text
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AIME 2024: accuracy scales logarithmically with thinking-token budget (Anthropic post, chart only) — no verified public score found in text
- Artificial Analysis Intelligence Index / BenchLM overall: **15** (estimated, non-reasoning variant, AA v4.3.2; "independent evaluation forthcoming", #32/61 in class)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **63.7%** vanilla pass@1 (minimal scaffold: bash + string-replacement file editing + planning tool; 489/500 solvable subset) and **70.3%** "high compute" (parallel sampling, visible-test rejection, scoring-model selection; n=489) (Anthropic announcement appendix)
- SWE-bench Pro / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found in text (launch chart only)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported in the sources checked; 200K window per Artificial Analysis.

### Normalized scores (1–100)

- **Tool use: 70/100.** At release it was frontier-class agentic (SOTA TAU-bench, OSWorld gains, the "action scaling" behind Claude Code), but no 2026-era TB2.1/Tau3/GDPval numbers are verifiable in text and AA deprecates the model — a top-mid score for a legacy agent.
- **Reasoning: 62/100.** Hybrid reasoning was genuinely novel in Feb 2025 (84.8% GPQA only with a non-production 256-sample test-time compute protocol); the current AA index (15, estimated, non-reasoning) sits below the mid band, and the Oct 2024/Jan 2025 knowledge cutoff lags every 2026-era peer.
- **Context window: 70/100.** 200K total maps to the 200K tier (200K = 70); 64K standard output noted as caveat; no 512K+ retrieval evidence.
- **Multimodal: 62/100.** Text + image in, text out (vision verified via AA + launch docs); no video/audio input.
- **Coding: 75/100.** SWE-bench Verified 63.7% vanilla / 70.3% high-compute on a deliberately minimal scaffold was SOTA at launch and still mid-to-strong today; missing LiveCodeBench/SciCode/Vibe and a generation of model updates since cap it below the 80s.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches the methodology's ~60 anchor exactly; the 90% cache discount is the main offset.
- **Overall Score: 67.8/100.** Mean of the five non-cost dims (70+62+70+62+75)/5 = 67.8 — best-fit legacy pick only where the extended-thinking workflow and cheap cached-agent loops matter; for new work a current Sonnet-class model is a better cost/quality trade.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Anthropic launch announcement + extended-thinking research post + Artificial Analysis model page, fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
