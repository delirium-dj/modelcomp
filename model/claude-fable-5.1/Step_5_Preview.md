# Claude Fable 5.1 — findings by Step 5 Preview

- Source: Anthropic `claude-fable-5-1`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (`claude-fable-5-1`; API model ID `claude-fable-5-1`)
- **Short description:** Anthropic's second Mythos-class model (above the Opus tier), tuned for the most demanding long-horizon agentic coding and research runs. Shares underlying weights with the looser-safeguard Claude Mythos 5.1 (Project Glasswing, vetted orgs only). Successor to Claude Fable 5.
- **Provider / access:** Anthropic Claude API (Messages API), AWS Bedrock, Google Vertex AI, Microsoft Foundry. Adaptive thinking on by default; remove forced tool-use params (returns an error otherwise). No free API tier (Claude Pro/Max/Team/Enterprise on claude.ai).
- **Release / knowledge:** Released 2026-09-01. Knowledge cutoff 2026-06.
- **IDs:** `claude-fable-5-1` (Bedrock `anthropic.claude-fable-5-1`). No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output. Full 1M window at one flat rate.
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio/video input; no image/audio output. Reasoning yes; tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $10.00/M in · $50.00/M out (highest Claude tier, tied with Fable 5). Cached reads $0.25/M (75% cheaper than Fable 5). Batch 50% off. No free tier.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic system card + Vals AI independent) and themodelgap.com (8/10 independent runs + noise-band analysis). Independent runs preferred; the Opus-refusal-fallback caveat is flagged where it affects numbers.

Agent / tool use:

- Terminal-Bench 4.0 (max): leads the field — **+19.2 over GLM-5.3, +33.3 over Muse Spark 1.3, +40.9 over Kimi K3, +43.9 over DeepSeek V4 Pro** (themodelgap, independent noise-band)
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis) / **85.02%** (vals.ai) / **79.03%** (vals.ai after removing Opus-refusal-fallback-assisted answers) — three conflicting numbers for the identical model
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic system card; up from Fable 5's 24.7%)
- Vals Index 2.1 (composite coding/legal/tax/medical): **68.83%** (Vals AI, independent)
- OSWorld 2.0: vendor-claimed only (one of the 2 non-independent rows)
- Caveat: when Fable 5.1's safety classifiers refuse, Claude Opus 5 / 4.8 answers instead, and that substituted answer can count toward published benchmark scores (vals.ai discloses using the fallback).

Reasoning / knowledge:

- Humanity's Last Exam (no tools): trails Claude Opus 5.5 by **−2.3**, but **+4.1 over Sonnet 5.5, +4.4 over GPT-6 Astra, +12.6 over Step 5 Preview, +21.1 over Qwen3.8-Flash-Next** (themodelgap, independent)
- LiveBench Composite: leads — **+4.2 over Kimi K3, +6.0 over DeepSeek V4 Pro, +11.4 over GPT-6 Luna** (independent)
- MMLU-Pro: **92.38%** (Vals AI, independent)
- GPQA Diamond: covered on 23-model leaderboard (themodelgap) but exact value not surfaced live — treated as provisional
- AIME 2025: no verified public score found for Fable 5.1

Coding:

- SWE-bench Pro: **81.2%** (Anthropic system card, 5-trial avg at max; vs Fable 5 80%, Opus 5 79.2%, GPT-5.6 Sol 64.6%) — vendor self-report; ~30% of the public split is estimated broken (OpenAI audit)
- SWE-bench Multilingual: **89.1%** (300 problems, 9 languages; system card)
- SWE-bench Multimodal: **54.7%** (system card; below Opus 5's 59.4%)
- SWE-bench Verified: **no verified public score found** (Anthropic publishes Pro, not Verified, for 5.1)
- DeepSWE v1.1 (113 contamination-free long-horizon tasks): **67.4%** (system card)
- LiveCodeBench: **90.52%** (Vals AI, independent)
- MMMU-Pro: **90.64%** (Vals AI, independent)

Multimodal:

- Text + image + PDF in; text out. No audio/video input, no non-text output.
- SWE-bench Multimodal 54.7% (system card) — multimodal coding is a relative weak spot (below Opus 5's 59.4%).

Long context:

- 1M context at one flat rate; themodelgap lists it among 37 models with 10M-class windows. No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 leads the field by wide margins (+19 to +44 over peers, independent) and Vals Index 68.83% is solid. Capped by the Terminal-Bench 2.1 discrepancy (91.4/85.02/79.03 — the vals.ai number drops to 79.03 once Opus-refusal-fallback answers are removed) and vendor-only OSWorld — the agentic headline is real but the harness variance and fallback mechanism keep it just below the very top.
- **Reasoning: 90/100.** LiveBench leads the field (independent) and MMLU-Pro 92.38% is strong; HLE trails only Claude Opus 5.5 (−2.3) while beating every other peer by +4 to +21. Capped by trailing Opus 5.5 on HLE, no verified GPQA/AIME row, and the vendor-heavy SWE-bench Pro reporting.
- **Context window: 92/100.** 1M input / 128K output at one flat rate, themodelgap lists it in the 10M-class window group — solid ≥1M tier. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 78/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and a weak SWE-bench Multimodal 54.7% (below Opus 5's 59.4%).
- **Coding: 88/100.** SWE-bench Pro 81.2%, SWE-bench Multilingual 89.1%, LiveCodeBench 90.52%, DeepSWE 67.4% (contamination-free) are all strong. Capped by the vendor-self-report nature of the headline SWE numbers (~30% of the public split is estimated broken), no SWE-bench Verified row, and SWE-bench Multimodal 54.7% lagging.
- **Cost efficiency: 30/100.** Paid-only at $10/$50 per 1M — the highest Claude tier (tied with Fable 5); cached reads $0.25/M and Batch 50% off soften it slightly, but there is no free tier and typical workloads cost ~25% less only vs the equally-priced Fable 5.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+90+92+78+88)/5 = 87.2. Best fit as the reserve Mythos-class pick for the longest research/agent runs where the cheaper Opus 5.5 falls short — most teams should start on Opus 5.5 (higher SWE-bench Pro, lower price) and only move up to Fable 5.1 when their own tests show a gain.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (80 primary-source results, updated 2026-10-07 — APEX-Agents 68.6%, AutomationBench 21.3%, BrowseComp 85.2%, MMMU-Pro 90.6%, MILU 93.0%) and the Artificial Analysis live LLM leaderboard (Intelligence Index 53, max) — no score change warranted. Prior pass (2026-10-08) used Anthropic's Fable 5.1 system card (via hokai.io), Vals AI independent runs, and themodelgap.com.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
