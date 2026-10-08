# GPT 6 Astra — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Astra
- **Short description:** OpenAI's September 2026 flagship above the GPT-5.6 family — frontier reasoning and long-horizon agentic work, first OpenAI model to cross its own "Critical" cybersecurity threshold (capabilities staged for trusted defenders).
- **Provider / access:** OpenAI API (`gpt-6-astra`, released 2026-09-04), Azure, AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise (Astra Pro for Pro/Business/Enterprise). Reasoning effort low/medium/high/xhigh/max — always-on (`none` removed); gateway default is low, set effort explicitly.
- **Release / knowledge:** announced 2026-09-03; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra`. No Free ID — paid only (`noFreeId`).
- **Context window:** 1,050,000 tokens total; 128,000 max output (reasoning tokens consume the output budget). Codex shows ~258K usable.
- **Modalities:** text and image in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-02):** $10/$50 per 1M input/output Standard; cache reads $1, cache writes $12.50 (1.25x uncached input); requests above 272K input reprice the ENTIRE request at $20/$75; Batch/Flex 50%; Fast mode 2x rates for up to 2x speed.
- **Architecture:** proprietary MoE (OpenAI); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (tbench.ai canonical board, Codex agent harness, high effort, rank 1/18, ±1.8); 88.4% (Artificial Analysis own run, max); 87.27 (vals.ai Terminus 2 archive)
- Terminal-Bench 4.0: **57.9%** (vendor launch table; LLM Stats reads 57.7) — new high vs GPT-5.6 Sol 37.3%, Fable 5.1 55.8%, Opus 5 52.6%
- Terminal-Bench Science 0.1: **64.6%** (vendor; vs Fable 5.1 52.6%, GPT-5.6 Sol 22.4%)
- OSWorld 2.0: **72.6%** (vendor, offline partial; 47% faster per task than Sol per ARMES)
- Agents' Last Exam: **34.2%** overall pass rate (Snorkel, Codex, Max effort — the board's best for this model; score 59.3, est. $1,100/task)
- AA-AnalystAgent: **51.25** (Artificial Analysis, max, 2026-09-29, ±11.2)
- FrontierCode 1.1: Extended **64.5%**, Main **53.3%** (vendor)
- Internal Database Migration Tasks: **63.9%** (OpenAI internal — not externally inspectable)
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.06%** (Artificial Analysis, max; 96.26% xhigh — saturated benchmark, treat as ceiling)
- Humanity's Last Exam (no tools): **54.7%** (Artificial Analysis, max, 2026-09-04 — a real 5.2-pt lead over GPT-5.6 Sol's 49.49% at matched tier); with tools: **57.2%** (vendor; trails Opus 5's 63.6%)
- ARC-AGI-2 (Max tier): **95.0%** (arcprize.org official board)
- ARC-AGI-3 Semi-Private: **62.7%** (Standard harness) vs **99.9%** (Provider Adapter harness) — extreme harness sensitivity, $26,098 vs $18,817 eval cost
- FrontierMath Tier 4 v2: **97.6%** (vendor-reported)
- BrowseComp: **91.5%** (vendor-reported)
- AA Intelligence Index v4.2: **55** (max effort; GPT-5.6 Sol 51)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **74% ±3%** (deepswe.datacurve.ai, xhigh, $6.52/task — tied for the board's top spot with Gemini 3.8 Flash (high) and Claude Opus 5 (max); vendor claims 74.1%)
- AA Coding Agent Index v1.4: **67.0** (vs GPT-5.6 Sol 65.1)
- LiveCodeBench / SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1.05M-token window; no MRCR / RULER / GraphWalks retrieval score published

Multimodal:

- Text and image input; no dedicated multimodal benchmark score published for this release

Cyber (vendor-reported, limited release):

- SRE-Bench: **88.0%** single-attempt; ExploitBench: **100%** (0.0% boundary evasion on ExploitGym per ARMES)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 rank 1/18 at 87.4–88.4% across three independent harnesses clears the frontier bar, with TB-Science 64.6% a new high and OSWorld 72.6% strong; Agents' Last Exam 34.2% and the internal-only DB Migration row cap it.
- **Reasoning: 93/100.** HLE 54.7% no-tools (AA, matched-tier lead over Sol), ARC-AGI-2 95.0% (Max) and FrontierMath T4 97.6% (vendor) are best-in-set; the AA Intelligence Index of 55 (under the 60+ frontier bar) and the ARC-AGI-3 harness sensitivity (62.7% vs 99.9%) cap the score.
- **Context window: 95/100.** 1.05M-token window; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band; no audio/video input.
- **Coding: 92/100.** DeepSWE 74% ties the Datacurve board's top spot, TB 2.1 87.4%+ clears the 85%+ frontier bar, and AA Coding Agent Index 67.0 leads Sol; LiveCodeBench and SWE-bench Verified are unpublished for Astra.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches the $10/$50 (~30) reference exactly; $1 cache reads help long agent loops, but the >272K full-request repricing to $20/$75 is a real trap.
- **Overall Score: 87/100.** (92+93+95+65+92)/5 = 87.4 → 87 — the agentic-coding flagship: rank-1 Terminal-Bench 2.1 and tied-top DeepSWE, with the 2.5x price premium over GPT-5.6 Sol as the trade-off.

---

## Update 2026-10-08 (6-day re-research)

BenchmarkList, The AI Rankings, ARC Prize and The Model Gap rows found:

- Rank-1 rows (BenchmarkList): Agents' Last Exam score 59.3% (rank 1/41 — the partial-credit score; Snorkel's pass rate is 34.2%), ARC-AGI-3 Provider-Adapter 99.9% (rank 1/13), RuneBench 7.3 (rank 1/61), Terminal-Bench Science 68.1% (rank 1/17), Vending-Bench 2 15514.7 (rank 1/60), BenchCAD 95.9% (rank 1/28), Convex Coding Evals 84.7% (rank 1/30), ProgramBench 85.4% (rank 1/37), SWE Atlas Refactoring 59.0% (rank 1/21)
- Near-top rows: ARC-AGI-1 98.5% (rank 2/97), ARC-AGI-2 95.0% (rank 2/99), BrowseComp 94.2% ± 3.2% (rank 2/60 — a strong new tool-use row), ScreenSpot-Pro 92.7% (rank 2/59 — GUI grounding), PostTrainBench 44.3% (rank 3/31), Vibe Code Bench v1.1 ~89% (near the top of 75), FrontierSWE v2 65.5% (rank 10/20), SWE-Math 51.1% (rank 6/30), SWE-Marathon 68/160 trials, AA-Briefcase 1569 (rank 12/145), τ³-Banking 41.4% (rank 15/176), GDPval-AA 1542 (rank 32/352), AutomationBench-AA 68.5% (rank 5/26), DRACO 76.8% (rank 18/24), SciCode 56.5%, AA Coding Agent Index 67 (rank 8/10)
- ARC Prize effort ladder (arcprize.org, 2026-09-02): Max 97.5/95.0/62.71/98.55 (ARC-AGI-1 / -2 / -3 Standard / -3 Provider Adapter); XHigh 98.5/93.3/59.34/98.44; High 98.5/92.1/54.82/**99.95**; Medium 97.5/92.1/38.59/98.44; Low 96.5/85.4/17.45/98.03; None 86.0/59.6/35.18/96.72 — the file's "99.9% Provider Adapter" is the High tier; at Max it is 98.55%
- Version drift flagged: AA Intelligence Index reads **53** (max, v4.3, The AI Rankings — level with Fable 5.1 and Gemini 4 Argon; Opus 5.5 58, Sonnet 5.5 56, Opus 5 51, Sol 47) vs 55 on the v4.2 read on file; AA Coding Agent Index reads **62** (current — level with Fable 5.1, above Opus 5's 60) vs 67.0 on the v1.4 read on file
- Terminal-Bench 4.0: **59.1%** on AA's independent run (vs 57.7% vendor; Fable 5.1: 52.0%); throughput measured at 54 tok/s; ~60% more per task than Sol
- Confirmed absent: no SWE-bench figure of any kind (Pro or Verified) — the second frontier launch in a week to skip it, after Fable 5.1; LiveCodeBench, SWE-bench Verified, Toolathlon-Verified, LiveBench and HMMT Feb 2026 still had no Astra row as of the 2026-10-08 check
- No score change: BrowseComp 94.2% and ScreenSpot-Pro 92.7% sit within the Tool 92 rationale; the index drift (55→53, 67→62) is flagged but the HLE 54.7% / ARC-AGI-2 95% anchors hold Reasoning 93 and Coding 92

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI launch page, tbench.ai, Artificial Analysis, ARC Prize, Datacurve DeepSWE board, Snorkel, The Model Gap, Agent.Space); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
