# Claude Opus 5.5 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's new flagship and first model of the Claude 5.5 family, released 2026-09-22; performs at the level of Claude Fable 5.1 on most work at 40% lower cost than Opus 5. Top use case: long-horizon agentic coding and knowledge work.
- **Provider / access:** Anthropic Claude Platform API `claude-opus-5-5` (Messages API), also on Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Azure Foundry; Artificial Analysis lists 6 API providers.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not disclosed publicly.
- **IDs:** `claude-opus-5-5` (no OpenCode Zen Free ID found — proprietary Anthropic flagship).
- **Context window:** 1M tokens total (Artificial Analysis model page; verified against Anthropic announcement which cites a 980k-token task budget for WANDR runs). Max output split not stated publicly.
- **Modalities:** text and image in / text out; reasoning yes (adaptive thinking, cannot be disabled per Anthropic docs); tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $4 in / $20 out per 1M; cache reads $0.20, cache writes $5 per 1M (20%/60% below Opus 5); fast mode $8/$40 with up to 2.5x speed. Zero data retention available.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding/terminal**): **66.4%** (Anthropic announcement, xhigh effort, ±2.6 pts; BenchLM lists same 66.4% — highest of all compared models incl. GPT-6 Astra 57.9%)
- FrontierCode v1.1 Main: **54.4%** at max effort / **54.6%** at default medium (Anthropic announcement; leads GPT-6 Astra's 53.3%)
- CursorBench 4.0: **57.8%** max effort (Anthropic announcement; GPT-5.6 Sol 41.7%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1846 Elo** (Anthropic announcement; AA-run, 44 occupations; Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542)
- AutomationBench (Zapier): **40.0%** (Anthropic announcement, Zapier-run without fallbacks; tops Zapier leaderboard over GPT-6 Astra 41.4% being the only higher figure — Astra 41.4% vs Opus 5.5 40.0%, so Opus 5.5 second)
- Toolathlon-Verified: **77.8%** (BenchLM, avg 26.9 turns; Pass@3 82.4%)
- OSWorld 2.0: **81.8% partial-credit** (Anthropic announcement) / **48.7%** (BenchLM listing)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic announcement, ±3.5–5 pts; GPT-6 Astra 64.6% higher)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not on Anthropic card or BenchLM for this model)
- HLE: **67.7% with tools** (Anthropic announcement; 64.4% without tools per BenchLM)
- LCR / MLCR: AA-LCR **84.7%** (BenchLM); MLCR no verified public score found
- CritPt: **31.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **58, #1/211** (AA model page; BenchLM lists 57.6%)
- Omniscience: Accuracy **66.2%**, hallucination-rate field **58.6%** (BenchLM; AA's own metric is "Non-Hallucination Rate", so the 58.6 figure likely denotes non-hallucination — flagged, not double-counted)
- ARC-AGI-1 **97.5%**, ARC-AGI-2 **91.7%**, GMMLU **94.3%**, MILU **93.1%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified no verified public score found; SWE-bench Pro **89.9%** (BenchLM)
- SWE Multilingual **93.9%**, SWE Multimodal **61.4%**, FrontierSWE v2 **62.3%**, ProgramBench **91.2%** (BenchLM)
- DeepSWE: **74.2%** (BenchLM)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M context window verified (AA); AA-LCR 84.7% is the only public long-context reasoning number; no MRCR/RULER/GraphWalks value published at 1M — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval-AA 1846 Elo clears the 1750+ frontier reference, TB 4.0 66.4% and Toolathlon 77.8% lead all peers, AutomationBench 40% tops Zapier's board; capped below 98 by OSWorld full-credit ambiguity (81.8% partial vs 48.7% strict) and no Tau3/Claw-Eval numbers.
- **Reasoning: 96/100.** HLE-with-tools 67.7% is the highest publicly reported figure, AA-LCR 84.7%, ARC-AGI-2 91.7%, GMMLU 94.3%, and AA Intelligence Index 58 at #1/211; capped by CritPt 31.7% and no GPQA Diamond number.
- **Context window: 97/100.** 1M total (≥1M tier = 95–100); no public MRCR/RULER retrieval-at-1M data to justify 100.
- **Multimodal: 70/100.** Text+image in, text out only (no verified video/audio/PDF input, no non-text output) → image tier cap; strong image understanding (AA-MMMU-Pro 87.7%, Chartography 89.0% with tools, biomedical image analysis 71.4%) puts it at the top of that tier.
- **Coding: 96/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, DeepSWE 74.2% (frontier ref 74%+), AA-SciCode 66.9%, FrontierCode 54.4% and CursorBench 57.8% lead all compared models; capped only by missing SWE-bench Verified/LiveCodeBench entries.
- **Cost efficiency: 62/100.** $4/$20 per 1M sits between the ~$3/$15 (~60) and ~$10/$50 (~30) methodology anchors; the very cheap $0.20 cache reads, 40%-lower real workload cost than Opus 5, and best-in-class token efficiency lift it slightly above the 60 anchor.
- **Overall Score: 91/100.** Half-up mean of the five quality dims (96+96+97+70+96)/5 = 91.0 — the leading agentic coding/knowledge model; choose it for long-horizon autonomous work where $4/$20 pricing is acceptable.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Anthropic announcement and system card references, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
