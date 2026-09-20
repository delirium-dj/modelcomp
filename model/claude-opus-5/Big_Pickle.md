# Claude Opus 5 — findings by Big Pickle

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship general-access model ("near-frontier intelligence of Claude Fable 5 at half the price") built for efficient agentic coding, knowledge work, scientific research, and computer use. Default model on Claude Max, strongest model on Claude Pro.
- **Provider / access:** Claude API (`claude-opus-5`), claude.ai, Claude Code, Claude Cowork. Chat (Messages) API + Anthropic Agents SDK.
- **Release / knowledge:** 2026-07-24; knowledge cutoff ~2026-05 (anotherwrapper.com).
- **IDs:** `claude-opus-5` (Anthropic; proprietary).
- **Context window:** 1,000,000 total (both default and maximum) / 128,000 max output (llm-stats.com, datanorth.ai).
- **Modalities:** text + image input; text output; extended thinking on by default with per-request effort toggle (low/medium/high); tool calls.
- **Pricing (as of 2026-09-20):** $5.00 in / $25.00 out per 1M; $0.50 cached input. Same as Opus 4.8; half of Fable 5.
- **Architecture:** Proprietary, undisclosed. Pre-release codename "Honeycomb".

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1: **43.3%** — new SOTA, ahead of Fable 5's 33.7% (Anthropic launch).
- GDPval-AA: **46.1%** (high/max reported effort; 39.9% low) — benchmarklist.
- BrowseComp (multi-agent): **90.8%** (anotherwrapper).
- OSWorld 2.0: **70.57%** (up from Opus 4.8's 55.7%; datanorth.ai).
- AA Agentic Index: **55.3** (ahead of Fable 5's 52.8; datanorth.ai).
- CursorBench 3.2 (max effort): within **0.5%** of Fable 5's peak at half the cost per task (Anthropic).
- Claw-Eval / Tau3-Banking / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (benchmarklist; anotherwrapper lists 92.9%).
- HLE: **64.7%** (anotherwrapper).
- ARC-AGI-3: **30.2%** — roughly 3× the next-best model (Anthropic launch; datanorth).
- AIIQ Composite IQ: **134** (97th pct, benchmarklist).
- Artificial Analysis Intelligence Index: **61** at launch — top score, ahead of Fable 5 (60) and GPT-5.6 Sol (59) (datanorth.ai).
- CritPt: **29.1%** (87th pct, benchmarklist).
- SimpleQA: **56.7%** (anotherwrapper).

Coding:

- SWE-bench Verified: **96.0%** (Anthropic / datanorth; 97.0% on benchmarklist's separate row).
- SWE-bench Pro: **79.2%** — within a point of Mythos 5 (80.3%) and Fable 5 (80.0%).
- LiveCodeBench: **89.0%** (anotherwrapper).
- DeepSWE / DeepSWE 1.1: **73.7%** (anotherwrapper).
- Vibe Code Bench v1.1: **88.4%**; SciCode: **55.7%** (anotherwrapper).
- Terminal-Bench 2.1: **0.9%** reported at benchmarklist (provisional, non-agentic harness); AA Coding Index **76.9%** at benchlm for the family — treat Terminal-Bench number with caution.
- KernelBench CUDA: **79.3%** (100th pct, benchmarklist).
- IOI: **91.7%**; Arena Code Elo: **1711.88** (anotherwrapper).

Long context:

- MRCR / RULER / GraphWalks: **no verified long-context retrieval score found**; 1M window advertised but retrieval evals not published on the pages reviewed.

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier-Bench SOTA 43.3%, BrowseComp 90.8%, and OSWorld 70.6% with the Agentic Index top score make it the strongest verified agentic model of its cohort.
- **Reasoning: 93/100.** GPQA 93.4%, HLE 64.7%, and an ARC-AGI-3 3× lead over the field are elite; CritPt 29.1% leaves some headroom on hard-attack style tasks.
- **Context window: 85/100.** 1M / 128K tier is top-scoped, but no published MRCR/RULER retrieval score means the "quality at 1M" claim is unverified.
- **Multimodal: 78/100.** Text+image input with a strong multimodal index (Vals 73.9%), but no audio/video input — capped below omni models.
- **Coding: 93/100.** SWE-bench Verified 96%, SWE-bench Pro 79.2%, LiveCodeBench 89% — near state of the art; only Fable 5 edges it on SWE-bench Pro.
- **Cost efficiency: 70/100.** $5/$25 is fair for the tier and half of Fable 5, but clearly paid-tier pricing at production volume.
- **Overall Score: 88/100.** Mean of the five quality dims (92+93+85+78+93)/5 = 88.2 → 88. The best value frontier coding/agent model of mid-2026 — default pick for agentic engineering unless long-context retrieval at 1M is a hard requirement.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Anthropic launch page, llm-stats.com, benchmarklist.com, datanorth.ai, anotherwrapper.com, claude5.ai/ottermind); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.