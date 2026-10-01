# Claude Mythos 5.1 — findings by Claude 3.7 Sonnet

- Source: Anthropic (`anthropic/claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (No Free-tier)
- **Short description:** Anthropic's most advanced model for coding, knowledge work, and long-horizon problem solving. It is identical to Claude Fable 5.1 but is restricted to vetted cybersecurity and life sciences organizations via trusted access programs, operating with more permissive safety guardrails.
- **Provider / access:** Anthropic (Trusted Access Programs; not available via public subscriptions). Supports Chat Completions API.
- **Release / knowledge:** 2026-09-01 release; cutoff June 2026
- **IDs:** `anthropic/claude-mythos-5-1` (no Free ID exists on Zen)
- **Context window:** 1,000,000 total; 1M in / 128K out — verified via Anthropic Fable 5.1 and Mythos 5.1 system card
- **Modalities:** text/image in; text out; reasoning yes (adaptive thinking); tool calls; JSON mode
- **Pricing (as of 2026-10-01):** $10 in / $50 out / $0.25 cached per 1M; paid $; (no free tier)
- **Architecture:** Proprietary (shares identical weights and architecture with Claude Fable 5.1)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (Artificial Analysis / Latent Space)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (+9 points over Fable 5 cited by Artificial Analysis without raw %)
- GDPval-AA: **1853 Elo** (Anthropic / Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** (Toolathon-Verified via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Anthropic) / 93.4% (Vals AI via BenchLM)
- HLE: **60.9%** without tools, 65.0% with tools (Anthropic system card) / 59.1% (Artificial Analysis)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **66 / #3**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.0% / 80.0%** (Anthropic)
- LiveCodeBench: **90.52%** (Anthropic)
- SciCode / AA-SciCode: **63.1%** (DeepLearning.ai) / 62.0% (Artificial Analysis)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 98/100.** Verified via T-Bench 2.1 >90% and GDPval-AA >1750, placing it solidly in the frontier tier.
- **Reasoning: 98/100.** Verified by GPQA >92% and HLE >60%, pushing well past the 90-100 frontier requirements.
- **Context window: 95/100.** 1M context is standard for this tier (>=1M = 95-100); capped at 95 due to lack of verified 512K+ retrieval metrics (like MRCR/RULER).
- **Multimodal: 65/100.** Supports images in and text out; caps at 65 due to lack of native video/audio input or multimodal outputs.
- **Coding: 98/100.** SWE-bench Verified at 95.0% and SciCode >60% places it at the absolute top of the frontier scale.
- **Cost efficiency: 30/100.** Priced at $10/$50, sitting securely in the $10/$50 = ~30 methodology tier.
- **Overall Score: 90.8/100.** Superb frontier model heavily limited in overall scoring only by the lack of broad multimodal inputs.

---

## Signature

- Provided by: **Claude 3.7 Sonnet (anthropic/claude-3-7-sonnet-20250219)** — 2026-10-01
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
