# Claude Opus 5.5 — findings by Claude Sonnet 4.5

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (paid flagship; no Free tier — subscription access via Claude Pro/Max/Team/Enterprise)
- **Short description:** Anthropic's flagship model and the first release in the new Claude 5.5 lineup, focused on programming, agent scenarios, analytics, and security. It performs at the level of Claude Fable 5.1 for most tasks and costs 40% less to run than Opus 5. Top use case: long-running agentic coding and knowledge work. Not a variant/alias; successor to Opus 5.
- **Provider / access:** Available across Anthropic's platforms, Amazon Web Services, Google Cloud, and Microsoft Azure under the model identifier claude-opus-5-5; OpenRouter `anthropic/claude-opus-5.5` (Anthropic Messages API; API type anthropic-messages via OpenRouter).
- **Release / knowledge:** Released September 22, 2026; model documentation lists claude-opus-5-5 with a 1M-token context, 128K max output and a June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API: `claude-opus-5-5`; OpenRouter: `anthropic/claude-opus-5.5`; Bedrock: anthropic.claude-opus-5-5). No Free ID found on OpenCode Zen — no verified listing.
- **Context window:** 1M tokens total; max output 128K tokens — verified via official Claude Platform docs and OpenRouter (1,000,000 token context window, up to 128,000 completion tokens). Batch API (beta) allows 300K max output.
- **Modalities:** Text, images, and files such as PDFs as input; text output. Reasoning: yes — adaptive thinking, always on (cannot be disabled), with effort levels low/medium/high/xhigh/max, default medium. Tool calls: yes (forced tool use retired in migration; effort is the main control). JSON mode: not explicitly verified.
- **Pricing (as of 2026-09-30):** $4.00/M input, $20.00/M output, cache read $0.20/M, cache write $5.00/M, cache write (1h) $8.00/M. Batch: $2.00/M in, $10.00/M out, cache read $0.10/M. Fast mode runs up to 2.5x standard speed at $8/M in, $40/M out. Paid only; no free tier.
- **Architecture:** Proprietary; parameters not disclosed by the provider.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for this model ID (superseded); Terminal-Bench 4.0: **66.4%** (Anthropic-reported, vs 55.8% Fable 5.1 and 52.3% Opus 5), run at xhigh effort with production safeguards enabled; independent: **59.6%** (Artificial Analysis, level with leader GPT-6 Astra xhigh, +11 pts over Opus 5)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1846** Elo (GDPval-AA v2.1, vs Fable 5.1 at 1735, Opus 5 at 1708, GPT-6 Astra at 1542); AA-Briefcase **1822** Elo (Artificial Analysis private eval, leads)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found; adjacent: OSWorld 2.0 **81.8%** partial-task completion; AutomationBench **40.0%** (vs 41.4% GPT-6 Astra)
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found — Anthropic did not report SWE-bench Verified, GPQA Diamond, MMMLU, tau-bench or ARC-AGI results for Opus 5.5 in the announcement or the system card
- HLE: **67.7%** with tools (Anthropic table, vs 65.6% Fable 5.1, 57.2% GPT-6 Astra); independent: **61.4%** (Artificial Analysis, previous best 59.1% by Fable 5.1)
- LCR / MLCR: no verified public numeric score found — AA notes it remains slightly behind on CritPt, AA-LCR, and GDP.pdf
- CritPt: no verified public numeric score found (trails per AA, no number published)
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** of the 206 models in AA's comparison set (max effort), against 53 for Fable 5.1 and 53 for GPT-6 Astra; highest score AA has measured by several points; BenchLM Capability **81/100**
- Omniscience Accuracy / Hallucination Rate: no verified numeric values found — AA-Omniscience is among the six of ten Intelligence Index evaluations where it leads
  Coding:
- SWE-bench Verified / SWE-Pro: Verified: no verified public score found (deprecated by Anthropic); SWE-bench Pro: **89.9%** (Anthropic benchmark table)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis, previous best 63.1% Fable 5.1)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE: no verified public score found; FrontierCode v1.1 Main **54.4%** and CursorBench 4.0 **57.8%** (Anthropic-reported); 87.7% pass on 544 HumanEval+MBPP Java tasks (Sonar harness)
  Long context:
- No long-context retrieval reported for this exact model ID (no MRCR/RULER/GraphWalks scores found); window itself verified at 1M by official docs; AA-LCR tracked but Opus 5.5 slightly trails leaders with no public number

### Normalized scores (1-100)

- **Tool use: 93/100.** GDPval-AA 1846 Elo clears the ~1750 frontier bar; TB 4.0 66.4% (vendor) / 59.6% (AA, tied for lead); OSWorld 2.0 81.8%. Capped below max by GPT-6 Astra still edging it on business-workflow automation and agentic science and missing Tau3 score.
- **Reasoning: 94/100.** HLE 61.4% (AA) far above the 40% frontier bar; AA Index 58 = #1 all-time. Capped by AA Index just under 60 and missing GPQA/CritPt/LCR numbers.
- **Context window: 95/100.** Verified 1M total (official docs + OpenRouter) → ≥1M tier (95-100); held at 95 because no ≥98% retrieval at 512K+ (MRCR/RULER) is publicly verified for this ID.
- **Multimodal: 75/100.** Text + image + file/PDF input, text-only output; no audio or video input, no non-text output → bottom of the 75-90 PDF-in tier.
- **Coding: 94/100.** SciCode 66.9% clears the 55% frontier bar; SWE-bench Pro 89.9% (vendor); TB 4.0 leader. Capped by vendor-reported nature of SWE-Pro and absence of LiveCodeBench/DeepSWE.
- **Cost efficiency: 56/100.** Paid at $4/$20 per 1M — slightly above the $3/$15 (~60) anchor; batch at $2/$10 and $0.20 cache reads soften real-world cost but headline tier scores ~56.
- **Overall Score: 90.2/100.** Mean of (93+94+95+75+94)/5 = 90.2 — best fit: long-horizon agentic coding, code migration/audit, and enterprise knowledge work where frontier capability justifies premium pricing.

---

## Signature

- Provided by: **Claude Sonnet 4.5 (anthropic/claude-sonnet-4-5)** — 2026-09-30
- Method: fresh public internet research (Anthropic official docs/announcement, Artificial Analysis, OpenRouter, BenchLM, press coverage); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
