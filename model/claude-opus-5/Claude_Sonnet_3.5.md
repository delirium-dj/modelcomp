Now I have comprehensive data. Let me compile the findings file.

# Claude Opus 5 — findings by Claude 3.5 Sonnet (anthropic/claude-3.5-sonnet)

- Source: Anthropic / `claude-opus-5`
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid only; no free tier)
- **Short description:** Anthropic's latest Opus-class large language model, an upgrade to Claude Opus 4.8 with gains in agentic coding, computer use, long-horizon knowledge work, and mathematical/scientific reasoning. It comes close to the frontier intelligence of Claude Fable 5 at half the price.
- **Provider / access:** Available via Claude API (model ID: `claude-opus-5`), Claude.ai, Claude Code, Amazon Bedrock, Google Vertex AI, and Microsoft Foundry. Chat Completions / Messages API. Also routable via OpenRouter (`anthropic/claude-opus-5`).
- **Release / knowledge:** July 24, 2026; knowledge cutoff not explicitly stated (predecessor Opus 5.5 lists June 2026).
- **IDs:** `anthropic/claude-opus-5` (no Free ID exists on OpenCode Zen or equivalent)
- **Context window:** 1M tokens (default and maximum); max output 128K tokens. The Message Batches API reaches 300k with the output-300k-2026-03-24 beta header. Verified by Artificial Analysis.
- **Modalities:** Input: text and image. Output: text. Reasoning: yes (adaptive thinking on by default). Five effort levels: low, medium, high, xhigh, max. Tool calls: yes (parallel, strict JSON schema). JSON mode: yes.
- **Pricing (as of 2026-09-30):** $5/million input tokens and $25/million output tokens, matching Opus 4.8 pricing. Cache Read at $0.50/M tokens, Cache Write at $6.25/M tokens. Fast Mode: $10 input / $50 output per million tokens, ~2.5× default speed. Paid only; no free tier.
- **Architecture:** Proprietary. Parameter count not publicly disclosed. Not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (morphllm.com; second behind GPT-5.6 Sol at 89.5%, the only standardized third-party score)
- Terminal-Bench 3.0: **42.7%** (BenchmarkList; rank 1 of 17)
- Terminal-Bench 4.0: **52.3%** (Anthropic vendor-reported; Opus 5.5 comparison table)
- AutomationBench (Zapier): **26.9%** (Anthropic vendor-reported via DataCamp comparison table)
- GDPval-AA v2: **1,861 Elo** (AICC, sourced from Anthropic launch benchmarks; rank 1 in table shown); Opus 5 at **1,708 Elo** separately cited by Artificial Analysis write-up on Opus 5.5
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (high effort); **93.2%** (max effort) (Artificial Analysis via OpenRouter; high effort 93.7%, max effort listed by OminiGate at 93.2%)
- HLE: **54.9%** (Artificial Analysis / OminiGate comparison); **52.8%** at high effort, **54.4%** at xhigh effort (OpenRouter/AA)
- AA-LCR: **79.0%** (Artificial Analysis via OpenRouter, high effort)
- Long Context Recall: **75.7%** (Artificial Analysis via OminiGate)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **48.1** (high effort) / **49.7** (xhigh) / **51** (max) / **52** (low) (Artificial Analysis via OpenRouter & AA direct pages) — alternate aggregation reported as **63.1** by OminiGate
- BenchLM overall: **79.8 / #5 of 194** (BenchLM)
- ARC-AGI 3: **30.2%** (Vellum; ~4× previous best)
- IMO 2026: **42/42** (reported by MindStudio; perfect score without agent harness)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **96.0%** (MarkTechPost, sourced from Anthropic launch; rank 1 in BenchmarkList); note Morphllm reports "Opus 5 has no published SWE-bench number" on the llm-stats tracker — the 96.0% is vendor-reported
- SWE-bench Pro: **79.2%** (Anthropic vendor-reported via AICC; trailing Fable 5 at 80.3%)
- LiveCodeBench: **89.0%** (BenchLM; Vals AI run; rank 2 of 123)
- SciCode: **56.4%** (Requesty/Bedrock benchmark chart)
- DeepSWE v1.1: **68.8%** (BenchLM; sourced from Anthropic system card)
- Frontier-Bench v0.1: **43.3%** (Vellum; more than double Opus 4.8's 18.7%)
- FrontierCode 1.1 (main/extended): **53.4% / 63.6%** (SitePoint; medium effort, most compute-efficient configuration)
- CursorBench 3.2: **70.0%** (BenchLM; 3.4 behind Fable 5.1's best)
- AA Coding Index: **76.5** (high effort) / **78** (OpenRouter AA, OminiGate)
- Vibe Code Bench: no verified public score found

Long context:

- Long Context Recall (AA): 75.7%; AA-LCR: 79.0% (high effort). No MRCR, RULER, or GraphWalks retrieval-at-depth scores publicly reported for Opus 5.

### Normalized scores (1-100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 89.1% (rank 2) is solidly frontier (methodology: TB2.1 88%+ = 90-100 zone), but AutomationBench at only 26.9% is well behind leaders (~41%). No Tau3-Banking score. GDPval-AA at 1,708–1,861 Elo is strong. Average of strong TB2.1 and weaker AutomationBench caps this at 84.

- **Reasoning: 88/100.** GPQA Diamond at 93.2–93.7% is near-frontier (methodology: 90%+ = 90-100 zone). HLE at 54.9% is well above the 40%+ frontier threshold. AA Intelligence Index at ~48–51 across effort levels is high but not top-1. ARC-AGI 3 at 30.2% is a significant lead. Capped slightly below 90 because Index score trails the very top models (Fable 5.1, Opus 5.5, GPT-6 Astra).

- **Context window: 95/100.** 1.0M token context window verified by Artificial Analysis. Methodology: ≥1M = 95-100. Long Context Recall at 75.7% is solid but no verified MRCR/RULER at 512K+ reported, so not eligible for 100. Scored at 95.

- **Multimodal: 65/100.** Supports text and image input; text output only. No audio, video, or PDF-native input reported. Methodology: +image in = 60-70. Scored 65.

- **Coding: 90/100.** SWE-bench Verified at 96.0% and SWE-bench Pro at 79.2% (vendor-reported). DeepSWE at 68.8% is strong but below 74%+ frontier. TB2.1 at 89.1% is near-frontier. LiveCodeBench at 89.0% is excellent. SciCode at 56.4% exceeds 55%+ frontier threshold. The combination of near-saturated SWE-bench, strong TB2.1, and solid SciCode places this at 90; DeepSWE at 68.8% (not 74%+) prevents a higher score.

- **Cost efficiency: 42/100.** Priced at $5/$25 per 1M tokens (input/output). This is above the $3/$15 ≈ 60 tier. At roughly $5/$25, interpolating between $3/$15 (~60) and $10/$50 (~30), cost efficiency lands at approximately 42.

- **Overall Score: 84.4/100.** Mean of (84 + 88 + 95 + 65 + 90) / 5 = 422 / 5 = 84.4. A top-tier frontier model excelling in coding, reasoning, and long context, held back primarily by text+image-only multimodality and a premium price point. Best fit for enterprise agentic coding, long-horizon research, and knowledge work where Fable-5-class intelligence is needed at a more accessible price.

---

## Signature

- Provided by: **Claude 3.5 Sonnet (anthropic/claude-3.5-sonnet)** — 2026-09-30
- Method: public internet research across Anthropic blog, Artificial Analysis, BenchmarkList, BenchLM, OpenRouter, Requesty, Vellum, MorphLLM, OminiGate, DataCamp, MarkTechPost, AICC, SitePoint, MindStudio, Kingy AI, Emergent.sh, and OrcaRouter; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
