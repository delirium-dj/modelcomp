# Claude Fable 5.1 — findings by Grok 4 (xAI/grok-4)

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (generally available Mythos-class; Mythos 5.1 is the same weights with lighter safeguards, invite-only)
- **Short description:** Anthropic’s frontier Mythos-class model for long-horizon agentic coding, multistep research, knowledge work, and complex software projects. Successor to Claude Fable 5; same underlying model as restricted Claude Mythos 5.1.
- **Provider / access:** Anthropic Claude API `claude-fable-5-1`; Amazon Bedrock `anthropic.claude-fable-5-1`; Google Cloud Vertex AI / Microsoft Foundry `claude-fable-5-1`. Messages API (Chat Completions-style). Available on paid Claude plans (Pro/Max/Team/Enterprise) and API; not free-tier.
- **Release / knowledge:** 2026-09-01 release; knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1` (no Free ID on OpenCode Zen / equivalent free hosts)
- **Context window:** 1M tokens total (default and maximum); max output 128K tokens — verified from Anthropic platform docs and Bedrock model card.
- **Modalities:** text + image in → text out; adaptive thinking (always on, effort-configurable: low/medium/high/xhigh/max, default high); tool calls / agentic use; JSON mode supported; computer-use / OSWorld capable; no native audio/video in or non-text out.
- **Pricing (as of 2026-09-30):** $10 / $50 per 1M input/output tokens; cache reads $0.25 / MTok (75% cut vs Fable 5); 5m cache write $12.50, 1h $20; Batch API 50% off. Paid only; free-tier privacy N/A (no free tier). US-only inference available at 1.1×.
- **Architecture:** Proprietary (no public params/MoE/open-weights details).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (Artificial Analysis, max effort; Vals AI independent 85.02% / #2)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (AA notes +9 pts gain over Fable 5 on τ³-Banking, absolute value unpublished)
- GDPval-AA: **1853** Elo (v2, Anthropic/AA); **1735** (v2.1, AA)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 4.0: **55.8%** (Anthropic launch, production safeguards); Mythos 5.1 60.9%
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic)
- AutomationBench: **31.4%** (Anthropic)
- OSWorld 2.0: **41.7%** strict / **77.9%** partial (Anthropic)
  Reasoning / knowledge:
- GPQA Diamond: **93.43%** (Vals AI); **93.7%** (Artificial Analysis)
- HLE: **59.1%** (AA, max effort); **60.9%** no tools / **65.0%** with tools (Anthropic)
- LCR / MLCR: **85.3%** AA-LCR (Artificial Analysis)
- CritPt: **29.7–30%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **66** (launch max-effort, #1); **53** on re-based v4.3 (tied #1 with GPT-6 Astra)
- Omniscience Accuracy / Hallucination Rate: **67.2%** accuracy / **27.4%** non-hallucination (AA-Omniscience)
  Coding:
- SWE-bench Verified / SWE-Pro: **81.2%** SWE-bench Pro (Anthropic system card / secondary reports); Verified **no verified public score found** from Anthropic (some independent BenchLM reports ~83.9, treat as secondary)
- LiveCodeBench: **90.52%** (Vals AI, #1)
- SciCode / AA-SciCode: **62.0–63.1%** (Artificial Analysis / secondary)
- Vibe Code Bench: **90.26%** (Vals AI)
- DeepSWE / Coding Index / other: DeepSWE v1.1 **67.4%** (secondary system-card reports); AA Coding Index **81.6**
  Long context:
- no long-context retrieval reported (MRCR/RULER/GraphWalks); 1M context supported at standard pricing

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 2.1 91.4% (AA frontier), GDPval-AA 1853 Elo frontier-tier, strong OSWorld/AutomationBench; capped by Tau3 absolute unpublished and some harness variance (Vals TB2.1 85%).
- **Reasoning: 95/100.** GPQA Diamond ~93.5%, HLE 59–65% (frontier), AA Index 53–66 #1/tied-1st, strong LCR/CritPt/Omniscience; near-ceiling academic/knowledge performance.
- **Context window: 95/100.** Verified 1M total (docs); tier ≥1M maps 95–100; no public ≥98% retrieval at 512K+ so not 100.
- **Multimodal: 65/100.** Text + image in → text out (docs); no audio/video in or non-text out.
- **Coding: 93/100.** LiveCodeBench 90.5% #1, TB2.1 85–91%, SciCode ~63%, Vibe ~90%, SWE-Pro 81.2% (vendor); frontier agentic coding; slight cap from missing official SWE-Verified and Pro not absolute #1 vs later models.
- **Cost efficiency: 30/100.** $10/$50 per 1M (high tier); cache $0.25 helps agentic but base price maps near $10/$50 = ~30.
- **Overall Score: 88/100.** Mean of five non-cost dims (92+95+95+65+93)/5 = 88.0. Best-fit for long-horizon agentic coding, research, and knowledge work where Opus 5 falls short; overkill/expensive for routine tasks.

---

## Signature

- Provided by: **Grok 4 (xAI/grok-4)** — 2026-09-30
- Method: Fresh public internet research (Anthropic official announcement + platform docs, Artificial Analysis, Vals AI, Bedrock model card, secondary reports cross-checked); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
