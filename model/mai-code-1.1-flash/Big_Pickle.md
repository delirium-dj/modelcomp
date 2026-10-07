# Microsoft MAI-Code-1.1-Flash — findings by Big Pickle

- Source: Microsoft/MAI-Code-1.1-Flash (`github-copilot/mai-code-1.1-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's fast vision-capable coding model for GitHub Copilot (VS Code / Copilot CLI agent workflows) — successor to MAI-Code-1-Flash (June 2026) at a quarter of the cost.
- **Provider / access:** GitHub Copilot (Chat Completions-style endpoint via Copilot subscriptions); no third-party API host tracked. The predecessor MAI-Code-1-Flash was exposed as `github-copilot/mai-code-1-flash` on aggregation hosts — 1.1 has no separate provider ID tracked on Zen/OpenRouter as of 2026-10-07.
- **Release / knowledge:** 2026-08-11 (microsoft.ai launch post). Knowledge cutoff not disclosed.
- **IDs:** GitHub Copilot model catalog entry `MAI-Code-1.1-Flash`. No Free ID (flagged `noFreeId` in `meta.json`).
- **Context window:** 256,000 total; 128,000 max output (meta.json verified against GitHub Copilot billing docs / llm-stats provider row).
- **Modalities:** text, image, PDF in; text out; reasoning (image-chain reasoning called out in launch post); tool calls.
- **Pricing (as of 2026-10-07):** $0.20 in / $1.20 out per 1M; cached input $0.02 (GitHub Copilot provider row, llm-stats). Paid only.
- **Architecture:** proprietary; 138.0B parameters (llm-stats license card, unconfirmed by Microsoft). Built on the MAI-Thinking-1 lineage per launch coverage.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (llm-stats, sourced from Microsoft scorecard)
- LLM Stats Agents index: **11.3** (#108, 1 eval) — mid-tier standing
- Launch claim: **+22% improvement on Terminal-Bench 2.1 in GitHub Copilot CLI** vs MAI-Code-1-Flash (2026-08-11 Microsoft blog; relative delta, absolute 1.0 score not published)
- Tau3-Banking / Tau2-Bench / GDPval / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- LLM Stats Reasoning index: **27.6–27.8** (#131–140, 2 evals) — mid band
- GPQA Diamond / HLE / MLCR / CritPt / AA Intelligence Index: no verified public score found
- BenchLM overall: no independent score published (null as of 2026-10-07)

Coding:

- SWE-bench Verified: **72.6%** (llm-stats, Microsoft scorecard source)
- LLM Stats Coding index: **19.1** (#107, 2 evals)
- Predecessor (MAI-Code-1-Flash, same family): SWE-Bench Pro **51.2%** vs Claude Haiku 4.5's 35.2% (Microsoft launch) — provisional proxy only, 1.1's own SWE-Pro not published
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks numbers for this model)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 62.9% sits just above the mid band (45–60% → 50–70) and the LLM Stats Agents index 11.3 (#108) is mid-pack; capped by zero Tau3/GDPval/Claw-Eval evidence.
- **Reasoning: 58/100.** Only the LLM Stats Reasoning index 27.6–27.8 (#131–140) is available, which maps to the mid 55–65 band; capped by no verified GPQA/HLE/CritPt scores at all — Microsoft publishes only coding/agent metrics.
- **Context window: 74/100.** 256K total sits in the 200K–500K tier (65–84), comfortably above the 200K = 70 reference; capped from higher by 128K max output being fine but zero measured long-context retrieval.
- **Multimodal: 76/100.** Image and PDF input beyond plain text lands it in the 75–90 band; text-only output and no published vision benchmark (MMMU/Video-MME) keep it at the bottom of that band.
- **Coding: 80/100.** SWE-bench Verified 72.6% is near-frontier for a cheap flash-tier model and TB2.1 62.9% is solid; capped below the 85+ tier by no LiveCodeBench/SciCode/Vibe/DeepSWE numbers and the LLM Stats Coding index only #107.
- **Cost efficiency: 95/100.** $0.20/$1.20 with $0.02 cached input is well above the ~$0.10/$0.20 reference and a quarter of its predecessor; no free tier (−).
- **Overall Score: 71.2/100.** (68+58+74+76+80)/5 = 71.2 — best-fit: budget Copilot agent for repo work where TB2.1/SWE-V class coding at flash pricing matters more than frontier reasoning.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (microsoft.ai launch post + GitHub repo, llm-stats model/provider pages, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
