# Inkling Small — findings by Muse Spark 1.3

- Source: Thinking Machines Lab/Inkling Small (`thinkingmachines/inkling-small`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient open-weights MoE reasoning model (about a quarter the size of Inkling) for agentic coding and long-context reasoning at lower cost and latency.
- **Provider / access:** OpenCode Zen `opencode/inkling-small` (scaffolded ID; API type not verified). Native: `thinkingmachines/inkling-small` (Thinking Machines Lab; DeepInfra also serves it).
- **Release / knowledge:** 2026-07-30 release (Thinking Machines Lab launch post; ARC Prize listing); knowledge cutoff not verified.
- **IDs:** `opencode/inkling-small` (Zen); `thinkingmachines/inkling-small` (native). No Free-tier Zen ID verified.
- **Context window:** 1M tokens total (OpenCode Data: 1M context / 1M max output; CommandCode: 1M tokens). DeepInfra serves 524.3K/524.3K per llm-stats.com — provider-served window varies; scored on the native 1M.
- **Modalities:** Text, image, audio in; text out; reasoning yes; tool calling yes (OpenCode Data model facts).
- **Pricing (as of 2026-10-04):** Thinking Machines Lab from $0.300/M input, $0.060/M cached, $1.20/M output (llm-stats.com); cmd provider $0.50/M in, $1.20/M out, $0.10/M cache read (commandcode.ai). No verified Zen pricing for `opencode/inkling-small` — scored as paid, no $0 tier.
- **Architecture:** 276B total / ~12B active sparse MoE, 42-layer decoder-only transformer routing each token to 6 of 256 experts plus 2 shared experts; Apache-2.0 open weights (Thinking Machines Lab model card via howtospark.com; Eigent summary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (launch post, best harness): **64.7%** (Thinking Machines Lab July 2026 launch post at effort 0.99, via Eigent summary and BenchLM mapping)
- Terminal-Bench 2.1 (Vals, independent): **55.1%** (commandcode.ai / BenchLM Vals lane)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **54.4%**, MCP Atlas **79.6%** (BenchLM compare lanes); BrowseComp **77.4%** (BenchLM); ixio MCP Atlas **79.2** (ixio model profile, 2026-09-03)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (launch post, via Eigent summary and BenchLM GPQA lane); Vals lane GPQA Diamond **83.6%**, MMLU-Pro (Vals) **85.6%** (BenchLM)
- HLE: **31.6%** text-only, **47.8%** with tools (launch post rows mapped by BenchLM)
- LCR / MLCR: **no verified public score found**
- CritPt: **8.3%** (launch post, via Eigent summary and BenchLM); AIME 2026 **95.5%**, ARC-AGI-2 **40.1%** (xhigh effort), ARC-AGI-1 **84.0%** (ARC Prize verified listing); SimpleQA Verified **20.6%** (launch post, factuality weak spot)
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM independent public score **55.66** across 25 benchmarks (BenchLM compare page); Artificial Analysis Intelligence Index: **no verified public score found** (commandcode.ai snapshots vary by index version and are not used as primary)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** Verified (launch post, via Eigent summary and BenchLM); SWE-bench Pro **55.9%**, SWE-bench (Vals) **82.2%** (BenchLM)
- LiveCodeBench: **85.9%** (Vals lane, BenchLM)
- SciCode / AA-SciCode: **48.7%** (BenchLM SciCode lane; commandcode.ai agrees)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: Coding Index **52.9** (commandcode.ai); IFBench **82.2%**, MMMU-Pro **74%**, CharXiv **81.3%** (BenchLM lanes)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found; closest proxy (provisional): commandcode.ai long-context reasoning **69.3–75.7** across catalog snapshots — not a standardized retrieval metric, used only as a provisional signal.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 64.7% vendor / 55.1% independent plus MCP Atlas 79.6% and Toolathlon-Verified 54.4% sit above the mid band; capped by missing Tau3/GDPval/Claw-Eval verified scores and the vendor-harness caveat on the 64.7%.
- **Reasoning: 85/100.** GPQA Diamond 89.5%, HLE 47.8% with tools, ARC-AGI-2 40.1% and AIME 2026 95.5% are strong across math, graduate QA and abstract reasoning; capped by SimpleQA Verified 20.6% factuality drop and missing LCR/CritPt-depth verification beyond the launch post.
- **Context window: 97/100.** Native 1M total sits in the top tier; capped slightly by provider-served variance (524K via DeepInfra) and no verified retrieval-at-length percentage at 512K+.
- **Multimodal: 90/100.** Text, image and audio in with reasoning over all three covers the audio-in tier; capped because there is no video input and no non-text output.
- **Coding: 85/100.** SWE-bench Verified 80.2% plus LiveCodeBench (Vals) 85.9% are strong, with IFBench 82.2% in support; capped by SciCode 48.7% and Coding Index 52.9 showing the small model is not a code specialist across every lane.
- **Cost efficiency: 90/100.** Paid-only at roughly $0.30–$0.50/M in and $1.20/M out with cheap cache reads; far above $0 free tiers but inexpensive per agent-loop dollar versus $1+/M peers.
- **Overall Score: 87/100.** Mean of the five quality dims (78 + 85 + 97 + 90 + 85) / 5 = 87.0 → 87; best fit as an efficient open-weights agent/coding pick where 1M context and audio input matter more than memorized factuality.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-10-04
- Method: public internet research (Thinking Machines Lab launch post via secondary summaries, ARC Prize verified listing, BenchLM/BenchmarkList lanes, commandcode.ai catalog, llm-stats.com, ixio, OpenCode Data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
