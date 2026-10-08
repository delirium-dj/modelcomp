# Claude Sonnet 5.5 — findings by Step 5 Preview

- Source: Anthropic `claude-sonnet-5-5`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (`claude-sonnet-5-5`; Sonnet-class, 2nd model in the Claude 5.5 family)
- **Short description:** Anthropic's faster, lower-cost partner to Opus 5.5 — strongest at well-scoped everyday coding, bug fixing, and polished documents/slides/spreadsheets. Anthropic's own system card states it "is not at the capability frontier"; Opus 5.5 remains the pick for complex, open-ended judgment. Upgrades Sonnet 5 (same $2/$10).
- **Provider / access:** Anthropic Claude API (Messages API), AWS Bedrock, Google Vertex AI, Microsoft Foundry. Adaptive thinking across 5 effort levels. No free API tier.
- **Release / knowledge:** Released 2026-09-28 (six days after Opus 5.5). Knowledge cutoff June 2026.
- **IDs:** `claude-sonnet-5-5`. No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output. Full 1M window billed at one flat rate (no threshold repricing).
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio/video input; no non-text output. Reasoning yes; tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $2.00/M in · $10.00/M out (half of Opus 5.5). Cache reads $0.20/M; writes $2.50 (5-min) / $4 (1-hr). Batch 50% off. No free tier.
- **Architecture:** Proprietary; weights and parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic system card + Artificial Analysis) and themodelgap.com (5/9 independent runs + noise-band analysis). Independent runs preferred; the Sonnet-5-fallback caveat is flagged where it affects numbers.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** at max (Anthropic; vs Sonnet 5 10.3%, Opus 5.5 66.4%, Fable 5.1 55.8%, Mythos 5.1 60.9%, Opus 5 52.3%) — a standout, though the Opus run was xhigh and Sonnet's had safeguards on
- Terminal-Bench 4.0 (independent, themodelgap): **64.14%** (Sonnet 5: 9.6%) — leads GLM-5.3 +25.3, Muse Spark 1.3 +39.4, Kimi K3 +47.0, GPT-6 Luna +50.5
- AutomationBench: **44.7%** (Anthropic; ahead of Opus 5.5's 42.5%)
- HealthBench Professional: **69.2%** (ahead of Opus 5.5's 65.6%)
- Terminal-Bench 2.1 (vals.ai, high): **83.15%** (tie with Opus 5.5's 87.64 within noise)
- AnalystAgent (spreadsheet/document): leads Qwen3.8-Max +12.5, Kimi K3 +18.8, MiniMax M3 +47.5 (independent)
- Caveat: Anthropic's system card reports 1.2% of its own TB4.0 requests were answered by a Sonnet-5 fallback; vals.ai ran a 2.27% fallback rate and publishes a lower fallback-corrected figure.

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **55.0%** (Artificial Analysis, independent; +13.7 over Sonnet 5's 41.3 — a real gap past the 2-pt band; trails Opus 5.5 61.4 by −6.4 and Fable 5.1 by −4.1)
- Artificial Analysis Intelligence Index: **56**
- LiveBench Composite: **77.8** (xHigh; +1.7 over Sonnet 5, a tie inside the 2.7 band; trails Opus 5.5 83.2 by −5.4)
- GPQA Diamond: not surfaced live for Sonnet 5.5 — treated as provisional

Coding:

- SWE-bench Pro: **81.3%** at max (Anthropic, 5-trial avg; Sonnet 5 63.2%, Opus 5.5 89.9%)
- SWE-bench Multilingual: **90.3%** (Sonnet 5 78.3%, Opus 5.5 93.9%)
- FrontierCode 1.1: **46.2%** at max (52.1% at xhigh; behind Opus 5.5 54.4% and GPT-6 Sol 49.3%) — a relative lag; the max-effort drop is attributed to an out-of-scope subagent code-review skill
- Terminal-Bench-Science 0.1: **59.9%** (ahead of Opus 5.5 58.7%, Fable 5 24.7%)
- LiveBench Coding: **88.9** (up from Sonnet 5's 80.7); but LiveBench Agentic Coding **39.3** (DOWN from Sonnet 5's 59.4)
- SWE-bench Verified: no verified public score found for 5.5

Multimodal:

- Text + image + PDF in; text out. No audio/video input, no non-text output.
- SWE-bench Multimodal / MMMU-Pro exact rows: not surfaced live for 5.5 — treated as provisional

Long context:

- 1M input / 128K output; full 1M window at one flat rate. No explicit MRCR ≥98%-at-512K figure published.
- **Tool use: 86/100.** Terminal-Bench 4.0 (70.6% vendor / 64.14% independent) leads most peers by wide margins, AutomationBench 44.7% beats Opus 5.5, and AnalystAgent leads broadly. Capped by the Sonnet-5-fallback caveat (1.2–2.27% of agentic answers), the vendor-vs-independent TB4.0 gap, and Anthropic's own "not at the capability frontier" framing.
- **Reasoning: 88/100.** HLE 55.0% (independent, +13.7 over Sonnet 5) and AA Intelligence Index 56 are solid mid-frontier. Capped by trailing Opus 5.5 on HLE (−6.4) and LiveBench (−5.4) and Fable 5.1 on HLE (−4.1), plus no verified GPQA row — Anthropic explicitly positions it below Opus 5.5 on hard reasoning.
- **Context window: 90/100.** 1M input / 128K output with the full window billed at one flat rate (no threshold repricing) — solid ≥1M tier. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 78/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and no live MMMU-Pro/SWE-bench-Multimodal row for 5.5.
- **Coding: 86/100.** SWE-bench Pro 81.3%, SWE-bench Multilingual 90.3%, and TB4.0 70.6% are strong. Capped by FrontierCode 46.2% (behind Opus 5.5 and GPT-6 Sol), LiveBench Agentic Coding dropping to 39.3 (down from Sonnet 5's 59.4), and no SWE-bench Verified row — real-world/agentic coding lags its headline SWE-bench Pro.
- **Cost efficiency: 78/100.** Paid-only at $2/$10 per 1M (half of Opus 5.5; full 1M window at one flat rate), with up to 30% per-task savings from fewer tokens per task (Anthropic's claim). Between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end. No free tier.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+88+90+78+86)/5 = 85.6. Best fit for high-volume, well-scoped coding/support/document workflows where speed and cost per task matter at medium effort; use Opus 5.5 or Fable 5.1 for complex, open-ended, long architectural work.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Anthropic's Sonnet 5.5 system card + Artificial Analysis (via hokai.io) and themodelgap.com's independent noise-band analysis (5/9 independent runs).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)
