# Claude Fable 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via the Anthropic Fable 5.1 launch and BenchLM's
> September 2026 leaderboard).

## Model card

- **Name:** Claude Fable 5.1 (no "Free" tier; Claude.ai subscribers can reach it within plan limits)
- **Short description:** Anthropic's second Mythos-class model, released 2026-09-01 (announced 2026-09-03), sitting **above Claude Opus 5** in the lineup for the most demanding reasoning and long-horizon agentic work. Fable 5.1 and Claude Mythos 5.1 share the same underlying weights with different safeguard configurations — Mythos 5.1 is restricted to vetted cyberdefence and life-sciences organisations through Anthropic's trusted-access programs, while Fable 5.1 is generally available and newly permitted to identify (but not exploit) software vulnerabilities.
- **Provider / access:** Anthropic — Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Azure/Foundry, Claude.ai and Claude Code. Closed, proprietary, API-only.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff estimated October 2025. Predecessor Fable 5 had been suspended under a June 2026 US export-control directive; 5.1 ships generally available.
- **IDs:** `claude-fable-5-1`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens with a 128,000-token max output — unchanged from Fable 5. (One tracker leaves context "undisclosed" for the Fable line while another confirms 1M on the vendor page; both agree on 128K output.)
- **Modalities:** text + image (and PDF, per the vendor page) input; text + tool-call output; adaptive thinking always on with effort defaulting to high, plus a new per-message effort control in beta.
- **Pricing (as of 2026-09-18):** $10 / 1M in and $50 / 1M out — unchanged from Fable 5 — with cache reads cut 75% to **$0.25 / 1M**, which Anthropic says yields ~25% lower cost for typical workloads and up to ~45% lower for cache-heavy agentic runs. Batch API remains 50% off. No free API tier; Anthropic recommends cheaper Opus 5 for most workloads.
- **Architecture:** undisclosed (Fable/Mythos line); parameter count and architecture type not published. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (vendor; up from Fable 5's 80.52%)
- Terminal-Bench 4.0: **55.8%** (vendor; Fable 5 42.0%, Opus 5 52.3%, GPT-5.6 Sol 37.3%; the higher-safeguard Mythos 5.1 posts 60.9%, the strongest across all evaluated models)
- SWE-bench Pro: **81.2%** — top of BenchLM's September 2026 leaderboard (Fable 5 80.0%, Opus 5 79.2%, GPT-5.6 Sol 64.6%, Gemini 3.5 Flash 55.1%)
- GDPval-AA v2: **1853 Elo** (vendor; Opus 5 1824, GPT-5.6 Sol 1711)
- AutomationBench: **31.4%** (vendor; up from Fable 5's 17.1%; Opus 5 26.9%, GPT-5.6 Sol 19.6%)
- CursorBench: **73.4%** (vendor; Grok 4.6 69.9%)
- OSWorld 2.0 (computer use): **77.9% partial / 41.7% strict** (vendor, production safeguards enabled; Opus 5 75.4%/39.6%)
- Harvey's Legal Agent Benchmark: **6.67%** — the model's weakest published result
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **60.9% without tools / 65.0% with tools** (vendor; Fable 5 57.8%/63.8%; Opus 5 56.6%/63.6%)
- MMLU-Pro: **92.38%** — first among evaluated frontier models (vendor)
- MMMU-Pro: **90.64%**; Vals Index (coding/legal/tax/medical composite): **67.87%, rank 1 of 51** (Opus 5 67.21%)
- LiveCodeBench: **90.52%**; Terminal-Bench-Science 0.1: **52.6%** (more than double Fable 5's 24.7%); ProofBench v1.1: **100**; Legal Research Bench: **55.29%**
- GPQA Diamond: **no numeric value published** at launch
- Artificial Analysis Intelligence Index: **66** (a comparison text cites 65.7 for Fable 5.1 vs Astra/Sol at 61)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **81.2%** (above) — a leaderboard-topping result
- Terminal-Bench 4.0 55.8%, Terminal-Bench 2.1 85.0%, CursorBench 73.4% (above)
- SWE-bench Verified / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Output speed: **66 tok/s** median (rank 25 of 36); AA blended price $7.17–$20 / 1M depending on cache mix

Long context:

- no MRCR/RULER/GraphWalks figure published for Fable 5.1; the 1M window is inherited from Fable 5 with no model-specific recall evidence in the sources checked.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 85.0%, Terminal-Bench 4.0 55.8%, GDPval-AA v2 1853 Elo, CursorBench 73.4% and strong (safeguard-suppressed) OSWorld results put it at the top of the agent field; Harvey's Legal Agent Benchmark at 6.67% is a genuine outlier weakness.
- **Reasoning: 97/100.** HLE 60.9%/65.0%, MMLU-Pro 92.38% (first place), MMMU-Pro 90.64%, LiveCodeBench 90.52% and an AA Index of 66 make this the highest reasoning profile in the scan; the missing GPQA Diamond number is the only gap.
- **Context window: 95/100.** 1M tokens with 128K output and a 75%-cheaper cache read; no recall-at-depth benchmark keeps it off the maximum.
- **Multimodal: 80/100.** Text, image and PDF input with MMMU-Pro 90.64% and OSWorld computer use; text-only output, no audio or video input.
- **Coding: 97/100.** 81.2% SWE-bench Pro is the top published result of September 2026, reinforced by 55.8% Terminal-Bench 4.0 and 73.4% CursorBench.
- **Cost efficiency: 32/100.** $10/$50 per 1M is among the most expensive rates tracked anywhere here and the AA blended price of $7.17–$20 / 1M reflects it; the 75% cache-read cut is the only meaningful relief, and Anthropic itself recommends Opus 5 for most workloads.
- **Overall Score: 83/100.** (95 + 97 + 95 + 80 + 97 + 32) / 6 = 82.7 → **83**. Best fit: maximum-reliability long-horizon coding and research agents where price is secondary and Opus 5 has been shown to fall short.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic launch material via Benchgen model card, HokAI fact page, BenchLM September 2026 leaderboard, Artificial Analysis figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.