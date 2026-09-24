# Grok 4.5 — findings by Space Bunny Alpha

- Source: SpaceXAI (`grok-4.5`; high reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (high)
- **Short description:** SpaceXAI's prior-generation frontier reasoning and agent model, now superseded by later Grok releases.
- **Provider / access:** SpaceXAI API (`grok-4.5`); current SpaceXAI documentation lists newer Grok models and the broader Responses/tool ecosystem.
- **Release / knowledge:** Artificial Analysis lists July 8, 2026; no exact training-data cutoff was shown in the reviewed sources.
- **IDs:** `grok-4.5`; high is a reasoning configuration.
- **Context window:** 500K tokens (Artificial Analysis and BenchLM, accessed 2026-09-24). Exact output limit was not shown.
- **Modalities:** Text and image input; text output; reasoning and tool use supported. Audio/video are not shown for Grok 4.5.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $2.00 per 1M input and $6.00 per 1M output tokens, with an 85% cache discount. BenchLM reports cached input at $0.30.
- **Architecture:** Proprietary; SpaceXAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (BenchLM, provider-exact xAI Grok 4.5 launch post)
- Terminal-Bench 2.1 (Vals AI): **67.8%** (BenchLM, Vals AI leaderboard; different harness)
- SWE-bench (Vals AI): **86.6%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **87.4%** (BenchLM, Vals AI leaderboard)
- SWE Multilingual: **78%** (BenchLM, secondary exact xAI launch-post source)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39/100**, rank **#52/210** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond (Vals AI): **92.9%** (BenchLM, Vals AI leaderboard)
- ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%** (BenchLM, ARC Prize official leaderboard data)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- Terminal-Bench 2.1: **83.3%** provider-exact; **67.8%** Vals harness
- SWE-bench (Vals AI): **86.6%**
- LiveCodeBench (Vals AI): **87.4%**
- DeepSWE: **no verified public exact value found** in the reviewed sources
- SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for Grok 4.5 was found. The verified context-window capacity is 500K tokens.

Sources consulted: [Artificial Analysis Grok 4.5](https://artificialanalysis.ai/models/grok-4-5), [SpaceXAI model documentation](https://docs.x.ai/docs/models/grok-4-5), and [BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5), accessed 2026-09-24. The current xAI page primarily documents Grok 4.7; older Grok 4.5 benchmark values are therefore attributed to BenchLM/provider-exact sources.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 83.3%, SWE-bench Vals 86.6%, LiveCodeBench Vals 87.4%, and tool-oriented positioning provide strong evidence; the 67.8% Vals Terminal-Bench row shows harness sensitivity.
- **Reasoning: 84/100.** AA Index 39 and GPQA Diamond 92.9% are strong, but ARC-AGI-3 0.3% and missing HLE/LCR values materially limit confidence.
- **Context window: 90/100.** A 500K context is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 89/100.** SWE-bench Vals 86.6%, LiveCodeBench Vals 87.4%, and Terminal-Bench 83.3% support strong coding; exact SWE-bench Verified and DeepSWE values are missing.
- **Cost efficiency: 86/100.** $2/$6 pricing and low cached input are attractive for a frontier model, but it is paid and slower than many peers.
- **Overall Score: 83.6/100.** (90 + 84 + 90 + 65 + 89) / 5 = 83.6. Best fit: cost-sensitive coding and tool agents with image input, provided the exact provider harness is pinned.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis, SpaceXAI documentation, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
