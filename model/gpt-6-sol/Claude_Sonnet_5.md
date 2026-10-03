# GPT-6 Sol — findings by Claude Sonnet 5

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (no free tier identified in any source checked; this is a standard paid API model, not a "free" variant)
- **Short description:** OpenAI's mid-tier model in the GPT-6 family, released alongside GPT-6 Luna as a lower-cost sibling to flagship GPT-6 Astra; OpenAI positions it for "complex coding and agentic workflows" (source: OpenAI developer model page, via orcarouter.ai capture of Sep 28, 2026; vals.ai model page). Not to be confused with GPT-5.6 Sol (prior generation) or GPT-6.1 Sol (a later point release referenced on vals.ai's release calendar).
- **Provider / access:** OpenAI API as `gpt-6-sol` (Responses API, with `reasoning.effort` parameter supporting none/low/medium/high/xhigh/max — source: llmreference.com, orcarouter.ai). Also listed via AWS Bedrock, LLM Gateway, and Felo AI (source: llmreference.com, llmgateway.io, felo.ai). No OpenCode Zen listing found in sources checked — no verified public listing found.
- **Release / knowledge:** Released September 22, 2026; knowledge cutoff April 20, 2026 (source: orcarouter.ai capture of OpenAI's GPT-6 Sol model page, read Sep 28, 2026; llmreference.com corroborates Apr 2026 cutoff and Sep 22, 2026 release).
- **IDs:** `openai/gpt-6-sol` (OpenAI API model ID: `gpt-6-sol`)
- **Context window:** 1,050,000 tokens total, 922,000 max input, 128,000 max output — stated directly on OpenAI's model page per multiple independent captures (orcarouter.ai, felo.ai, vals.ai shows "1M" rounded, llmgateway.io shows 1,050,000). No MRCR/RULER/GraphWalks long-context retrieval score found for this exact model.
- **Modalities:** Text and image input; text output only. Reasoning: yes (effort levels none→max). Tool/function calling: yes. JSON mode / structured outputs: yes (source: llmgateway.io, llmreference.com). No audio or video input/output found.
- **Pricing (as of 2026-09-28):** $2.00 / 1M input, $10.00 / 1M output (prompts ≤272K tokens); $4.00 / 1M input, $15.00 / 1M output (prompts >272K tokens, "long-context" tier); cached input $0.20 / 1M; cache writes $2.50 / 1M (source: orcarouter.ai OpenAI pricing-page capture, Sep 28 2026; vals.ai lists $2.00/$10.00 standard, $4.00/$15.00 long-context; llmgateway.io corroborates tiered $2/$0.2/$10 vs $4/$0.4/$15). Paid tier only; no public free-tier privacy caveat found.
- **Architecture:** Proprietary, closed-weights reasoning model. Parameter count and MoE/dense status not disclosed by OpenAI (source: artificialanalysis.ai model pages state "proprietary model and OpenAI has not disclosed the model size or parameter count").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15%** (Vals AI, rank #6 of 73)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (Artificial Analysis reported a qualitative ~100-point Elo regression vs. GPT-5.6 Sol on GDPval-AA v2.1 but did not publish an absolute GPT-6 Sol score in sources checked — source: emergent.sh)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA (SWE-Atlas-QnA): **58%** (Artificial Analysis, via tosea.ai capture of OpenAI/AA comparison table, max effort)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for GPT-6 Sol specifically (GPQA Diamond was removed from Artificial Analysis's Intelligence Index v4.2+ for saturation; sibling GPT-5.6 Sol scored 93.5–94.1% and GPT-6 Astra scored 96.0–96.1% per datalearner.com/requesty.ai, but no equivalent figure for GPT-6 Sol was found)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **48 / rank not individually confirmed** (Artificial Analysis model page for GPT-6 Sol (max), v4.3.2 methodology; other reasoning efforts: high 43, xhigh 44, medium 40, low 34)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (OpenAI's own release claims "~50% fewer factual mistakes than GPT-5.6 Sol" on an internal eval, source: vellum.ai citing OpenAI's announcement — not an independently verified public score)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **87.82%** (Vals AI, rank #9 of 108)
- DeepSWE v1.1 (max effort): **68.8%** (OpenAI's own release benchmark report, reproduced by vellum.ai and tosea.ai); AA Coding Agent Index: **57** (Artificial Analysis, via computingforgeeks.com, up 2 points from GPT-5.6 Sol's 55); Terminal-Bench 4.0: **44.44%** (Vals AI, rank #8 of 43); OSWorld 2.0 (max effort): **64.4%** (OpenAI release report via tosea.ai/computingforgeeks.com); ProgramBench: **2.00% fully resolved** (Vals AI, rank #10 of 62); Code Migration: **57.20%** (Vals AI, rank #7 of 73)

Long context:

- no long-context retrieval (MRCR/RULER/GraphWalks) reported for GPT-6 Sol in any source checked

### Normalized scores (1-100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 83.15% (Vals AI, #6/73) sits above the "mid" band (45–60%) but short of the ~88%+ frontier band; OSWorld 2.0 at 64.4% and no verified Tau3-Banking/GDPval-AA figures keep it from scoring higher.
- **Reasoning: 58/100.** Capped by the lack of a verified GPQA Diamond or HLE score for this exact model; the only hard anchor is the Artificial Analysis Intelligence Index score of 48 (max effort), which sits below the Index-60+ frontier threshold but above the low band, placing it in the "mid" range per the methodology mapping.
- **Context window: 96/100.** Verified 1,050,000-token total window (922K max input / 128K max output) places it in the ≥1M tier (95–100); not scored a full 100 because no ≥98%-retrieval MRCR/RULER result at 512K+ was found to confirm effective long-context recall.
- **Multimodal: 65/100.** Text and image input confirmed, text-only output, no audio/video in or non-text out found — matches the "+image in" band (60–70).
- **Coding: 72/100.** DeepSWE v1.1 at 68.8% (max) and AA Coding Agent Index of 57 fall short of the DeepSWE 74%+ frontier threshold; Vibe Code Bench (87.82%, #9/108) and Terminal-Bench 4.0 (44.44%, #8/43) support a solid-but-not-frontier placement, and the complete absence of a verified SWE-bench Verified or LiveCodeBench score prevents a higher score.
- **Cost efficiency: 68/100.** At $2.00/$10.00 per 1M tokens (standard tier), pricing sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) anchor points in the methodology table, roughly two-thirds of the way toward the cheaper anchor; OpenAI and Artificial Analysis both report GPT-6 Sol costs about half of GPT-5.6 Sol per task on the Intelligence Index ($1.06 vs $1.99 at max effort, source: computingforgeeks.com/emergent.sh).
- **Overall Score: 73.8/100.** Mean of Tool use (78) + Reasoning (58) + Context window (96) + Multimodal (65) + Coding (72), divided by 5. Best fit: a cost-efficient mid-tier pick for long-context agentic coding and tool-use workloads where OpenAI's frontier-tier GPT-6 Astra pricing isn't justified, though reasoning claims can't be independently confirmed against GPQA/HLE for this exact checkpoint.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-10-03
- Method: Fresh public web search (no reliance on prior chat memory); sources include Vals AI (vals.ai), Artificial Analysis (artificialanalysis.ai), BenchLM (benchlm.ai), datalearner.com, and secondary aggregators (orcarouter.ai, llmreference.com, llmgateway.io, felo.ai, vellum.ai, computingforgeeks.com, tosea.ai, emergent.sh) reproducing OpenAI's own release benchmark report; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
