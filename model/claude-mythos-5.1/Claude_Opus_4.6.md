# Claude Mythos 5.1 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted-access variant of Claude Fable 5.1)
- **Short description:** Anthropic's frontier reasoning model released September 2026, sharing identical weights with Claude Fable 5.1 but with more permissive guardrails. Restricted to vetted cybersecurity and life sciences organizations via trusted access programs. Excels at agentic coding, scientific reasoning, and long-horizon workflows.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Azure — restricted to Cyber Verification Program and Life Sciences Verification Program participants. Chat Completions API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5.1` (no Free ID on Zen; restricted access)
- **Context window:** 1,000,000 tokens input / 128,000 tokens max output — verified via Anthropic docs and Amazon Bedrock.
- **Modalities:** Text in; text out; adaptive thinking (always on); tool calls; JSON mode. Primarily text-only — no image/audio/video input confirmed for this variant.
- **Pricing (as of 2026-09-21):** $10.00 / $50.00 per 1M tokens (input / output); cache reads $0.25/1M (75% reduction from prior gen). No free tier.
- **Architecture:** Proprietary; parameter counts not disclosed. Same weights as Fable 5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (source: Artificial Analysis)
- Terminal-Bench-Science 0.1: **52.6%** (source: Anthropic / vellum.ai)
- Terminal-Bench 4.0 (Mythos variant): **60.9%** (source: Anthropic blog)
- GDPval-AA v2: **1853 Elo** (source: Artificial Analysis)
- Tau3-Banking: no verified public score found
- Tau2-Bench (Browser-agent): **82% task completion** (source: Anthropic blog)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.4–93.7%** (source: BenchLM, OpenRouter)
- HLE: **59.1–65.0%** (source: BenchLM, Artificial Analysis; ranges reflect different harness/effort configs)
- Artificial Analysis Intelligence Index: **66** (v4.3; highest at release) (source: Artificial Analysis)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **~95.0%** (source: industry reports)
- SWE-bench Pro: **81.2%** (source: Anthropic / industry reviews)
- SWE-bench Multilingual: **89.1%** (source: industry reviews)
- LiveCodeBench: **90.5%** (source: BenchLM)
- DeepSWE v1.1: **67.4%** (source: BenchLM, codingfleet)
- SciCode: **62.0%** (source: Artificial Analysis)
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window confirmed. No published MRCR / RULER / GraphWalks retrieval accuracy scores found for this specific model.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 91.4% is near-frontier (frontier ~88%+); GDPval 1853 Elo is excellent (frontier ~1750+); browser-agent 82% is strong. Capped only by missing Tau3/Claw-Eval data.
- **Reasoning: 93/100.** GPQA Diamond 93.5% is near-best; HLE 59–65% is frontier-class; Intelligence Index 66 is top-ranked. Capped by HLE variability and missing LCR data.
- **Context window: 97/100.** 1M token input with 128K output is top-tier. No published retrieval accuracy scores to confirm ≥98% at 512K+, slight deduction from 100.
- **Multimodal: 15/100.** Primarily text-only input/output. No confirmed image, audio, or video input for this variant.
- **Coding: 93/100.** SWE-bench Verified ~95% and Pro 81.2% are near-frontier; LiveCodeBench 90.5% is excellent; SciCode 62% is strong. DeepSWE 67.4% trails some competitors but still solid. Capped by DeepSWE gap to top performers.
- **Cost efficiency: 30/100.** $10.00/$50.00 per 1M tokens is premium pricing (~$10/$50 range = ~30 per methodology). Cache read discount helps in practice but doesn't change list pricing tier.
- **Overall Score: 79/100.** Mean of five quality dims: (95 + 93 + 97 + 15 + 93) / 5 = 78.6 → 79. Best-fit: frontier agentic coding and scientific research for organizations with restricted access clearance; text-only multimodal and premium pricing limit broader adoption.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-21
- Method: public internet research (Anthropic blog, Artificial Analysis, BenchLM, OpenRouter, Amazon Bedrock docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
