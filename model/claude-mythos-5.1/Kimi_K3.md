# Claude Mythos 5.1 — findings by Kimi K3

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's invitation-only trusted-access deployment of the Claude Fable 5.1 weights (same training run, same specs, same price — safeguards on biology/cybersecurity relaxed). Released September 1, 2026; Anthropic calls both configurations its strongest ever cyber models. Powers Claude Security for Enterprise customers.
- **Provider / access:** Claude API `claude-mythos-5-1`, Amazon Bedrock `anthropic.claude-mythos-5-1`, Google Cloud, Microsoft Foundry — invite-only via Project Glasswing / Cyber Verification Program / Life Sciences Verification Program (platform.claude.com docs).
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026 (felloai.com system-card summary).
- **IDs:** `anthropic/claude-mythos-5-1` (no Free-tier ID; trusted access only).
- **Context window:** 1M tokens input / 128K max output (Anthropic launch spec via felloai.com).
- **Modalities:** multimodal input (text/image, per llm-stats.com); text out; adaptive thinking always on (effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $10/M input, $50/M output; cache reads $0.25/M (−75% vs Fable 5); cache write $12.50 (5 min) / $20 (1 h); Batch API $5/$25 (anthropic.com/claude/mythos, felloai.com).
- **Architecture:** proprietary (Anthropic); params undisclosed; identical weights to Claude Fable 5.1.

### Raw benchmarks found

> Mythos 5.1 has almost no separately-published rows (Anthropic published one head-to-head figure). Rows marked *(provisional)* are the vendor-reported Claude Fable 5.1 values for the identical weights, per Anthropic's own system card ("two configurations of the same underlying model").

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (benchlm.ai / felloai.com — the one Mythos-specific published figure; Fable 5.1 scores 55.8% on the same bench)
- Terminal-Bench-Science 0.1: **52.6%** (Fable 5.1, vendor-reported — provisional proxy, not published for Mythos)
- GDPval-AA v2: **1853** (Fable 5.1, vendor-reported — provisional proxy)
- OSWorld 2.0 (strict): **41.7%** (Fable 5.1, vendor-reported — provisional proxy)
- AutomationBench: **31.4%** (Fable 5.1, vendor-reported — provisional proxy)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Cyber suite (ExploitBench, OSS-Fuzz, Firefox 147, ExploitGym): Mythos 5.1 "substantially outperforms Opus 5 on almost every cyber evaluation" (Anthropic system card via felloai.com — qualitative, no public numbers)

Reasoning / knowledge:

- HLE (no tools): **60.9%**; HLE (with tools): **65.0%** (Fable 5.1, vendor-reported — provisional proxy)
- Artificial Analysis Intelligence Index: **66** at max effort — highest AA has measured (58 low / 60 medium / 65 xhigh) (felloai.com summary of Artificial Analysis)
- GPQA Diamond / LCR / CritPt / MLCR: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- CursorBench 3.2.0: **73.4%** (Fable 5.1, vendor-reported — provisional proxy)
- Terminal-Bench 4.0: **60.9%** (Mythos-specific, verified)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M window verified by spec; no MRCR/RULER/GraphWalks public score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Mythos 5.1-specific Terminal-Bench 4.0 lead (60.9%, best published) plus Fable-proxy agentic stack (GDPval v2 1853, TB-Science 52.6%); capped because most rows are Fable proxies, not Mythos-measured.
- **Reasoning: 89/100.** AA Intelligence Index 66 at max effort is the highest ever measured by AA; HLE 65% w/ tools (provisional proxy). Capped by missing GPQA/LCR/CritPt public rows.
- **Context window: 88/100.** 1M window / 128K output verified by spec; capped by zero published long-context retrieval measurements.
- **Multimodal: 72/100.** Multimodal input documented (llm-stats), but no public vision benchmark rows for this configuration; text-only output. Mostly spec-evidence → capped hard.
- **Coding: 88/100.** TB 4.0 60.9% (verified, leads published field) + CursorBench 73.4% proxy + system-card-described cyber/defensive coding lead; capped by absent SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 35/100.** $10/$50 per 1M with only cache-tier relief ($0.25 reads); invite-only access adds friction outside pure price math.
- **Overall Score: 85/100.** Mean of the five quality dims (90+89+88+72+85... (90+89+88+72+88)/5 = 85.4 → 85. Best fit: vetted security/bio research and maximum-capability agentic work where the unrestricted Fable 5.1 weights are required and access can be obtained.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai, anthropic.com/claude/mythos, platform.claude.com docs, felloai.com system-card summary, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
