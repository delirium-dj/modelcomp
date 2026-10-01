# Claude Fable 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during the
> 2026-09-18 research scan (discovered via the Anthropic Fable 5.1 launch and BenchLM's
> September 2026 leaderboard).

## Model card

- **Name:** Claude Fable 5.1 (no "Free" tier; Claude.ai subscribers can reach it within plan limits)
- **Short description:** Anthropic's second Mythos-class model, released 2026-09-01, sitting **above the Opus models** in the lineup for the most demanding reasoning and long-horizon agentic work. Fable 5.1 and Claude Mythos 5.1 share the same underlying weights with different safeguard configurations — Mythos 5.1 is restricted to vetted cyberdefence and life-sciences organisations through Anthropic's Project Glasswing program, while Fable 5.1 is generally available and newly permitted to identify (but not exploit) software vulnerabilities.
- **Provider / access:** Anthropic — Claude API (`claude-fable-5-1`), Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS, Claude.ai and Claude Code. Closed, proprietary, API-only. Retirement not sooner than 2027-09-01.
- **Release / knowledge:** Released 2026-09-01; **knowledge/training cutoff June 2026** (official docs; the previous draft's "~October 2025" estimate was wrong and is corrected here).
- **IDs:** `anthropic/claude-fable-5-1`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens with a 128,000-token max output — unchanged from Fable 5.
- **Modalities:** text, image and PDF input; text + tool-call output; adaptive thinking always on with default effort **high**, plus a beta per-message effort control (change effort mid-conversation without invalidating the cache). Official latency rating: **slower**.
- **Pricing (as of 2026-10-01):** $10 / 1M in and $50 / 1M out — unchanged from Fable 5 — with cache reads cut 75% to **$0.25 / 1M**, cache writes at $12.50 (5-min TTL) / $20 (1-hour), and the Batch API 50% off. Anthropic estimates ~25% lower cost for typical workloads and up to ~45% lower for cache-heavy agentic runs. No free API tier; Anthropic recommends cheaper Opus models for most workloads.
- **Architecture:** undisclosed (Fable/Mythos line); parameter count and architecture type not published. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (vendor; up from Fable 5's 80.52%)
- Terminal-Bench 4.0: **55.8%** (vendor self-report — **not yet on the independent leaderboard**, where Claude Opus 5 leads at 51.8% and Fable 5 sits second at 44.5%, per sdd.sh's 2026-09-01 analysis)
- SWE-bench Pro: **81.2%** (Anthropic system card, average of five trials at max effort; Fable 5 80.0%, Opus 5 79.2%, GPT-5.6 Sol 64.6%). **No longer Anthropic's top result** — Claude Opus 5.5 (2026-09-22) reports 89.9%
- GDPval-AA v2: **1853 Elo** (vendor; Opus 5 1824, GPT-5.6 Sol 1711)
- AutomationBench: **31.4%** (vendor; up from Fable 5's 17.1%; Opus 5 26.9%)
- CursorBench 3.2.0: **73.4%** (vendor; Grok 4.6 69.9%)
- OSWorld 2.0 (computer use): **77.9% partial / 41.7% strict** (vendor, production safeguards enabled; Opus 5 75.4%/39.6%)
- Harvey's Legal Agent Benchmark: **6.67%** — the model's weakest published result
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **60.9% without tools / 65.0% with tools** (vendor; Fable 5 57.8%/63.8%; Opus 5 56.6%/63.6%)
- MMLU-Pro: **92.38%** — first among evaluated frontier models (vendor)
- MMMU-Pro: **90.64%**; Vals Index (coding/legal/tax/medical composite): **68.83%** (Vals AI; previously cited as 67.87%, rank 1 of 51)
- LiveCodeBench: **90.52%**; Terminal-Bench-Science 0.1: **52.6%** (more than double Fable 5's 24.7%; Anthropic reports a 3.5–4.5-point standard error); ProofBench v1.1: **100**; Legal Research Bench: **55.29%**
- GPQA Diamond: **no numeric value published** at launch
- Artificial Analysis Intelligence Index: **66** (OneInfer third-party composite) — **conflicting**, HokAI lists **53** (checked 2026-09-27); treat as unresolved
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **81.2%** (above); SWE-bench Multilingual: **89.1%** (300 problems, 9 languages); SWE-bench Multimodal: **54.7%** (behind Opus 5's 59.4%); DeepSWE v1.1: **67.4%** (113 long-horizon tasks)
- Terminal-Bench 4.0 55.8%, CursorBench 3.2.0 73.4%, LiveCodeBench 90.52% (above)
- SWE-bench Verified / SciCode / Vibe Code Bench: **no verified public score found** — SWE-bench Verified was never reported for this model; treat any circulating figure as extrapolated from another model or fabricated
- Output speed: **68 tok/s** median (HokAI/AA); AA blended price **$20 / 1M** (rank 69 of 74)

Long context:

- no MRCR/RULER/GraphWalks figure published for Fable 5.1; the 1M window is inherited from Fable 5 with no model-specific recall evidence in the sources checked.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 85.0%, GDPval-AA v2 1853 Elo, CursorBench 73.4% and strong (safeguard-suppressed) OSWorld results keep it at the top of the agent field; Harvey's Legal Agent Benchmark at 6.67% is a genuine outlier weakness, and TB4.0 55.8% is still vendor-only.
- **Reasoning: 96/100.** MMLU-Pro 92.38% (first place), MMMU-Pro 90.64%, HLE 60.9%/65.0% and LiveCodeBench 90.52% make this a top-tier reasoning profile; capped by the unresolved AA-index conflict (66 vs 53) and the missing GPQA Diamond number.
- **Context window: 95/100.** 1M tokens with 128K output and a 75%-cheaper cache read; no recall-at-depth benchmark keeps it off the maximum.
- **Multimodal: 80/100.** Text, image and PDF input with MMMU-Pro 90.64% and OSWorld computer use; text-only output, no audio or video, and SWE-bench Multimodal (54.7%) trails Opus 5.
- **Coding: 92/100.** SWE-bench Pro 81.2%, SWE-bench Multilingual 89.1% and CursorBench 73.4% are elite, but Opus 5.5 (89.9% SWE-bench Pro) has overtaken it inside Anthropic's own lineup and DeepSWE v1.1 lands at 67.4% — trimmed from the previous 97 accordingly.
- **Cost efficiency: 32/100.** $10/$50 per 1M is among the most expensive rates tracked here (blended $20 / 1M, rank 69 of 74); the 75% cache-read cut is the only meaningful relief, and Anthropic itself recommends Opus models for most workloads.
- **Overall Score: 92/100.** Mean of the five quality dims (95+96+95+80+92)/5 = 91.6 → 92. Best fit: maximum-reliability long-horizon coding and research agents where price is secondary and Opus 5 has been shown to fall short.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (Anthropic Claude Platform docs overview, OneInfer launch-table capture, HokAI fact page, sdd.sh Terminal-Bench 4.0 analysis); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
