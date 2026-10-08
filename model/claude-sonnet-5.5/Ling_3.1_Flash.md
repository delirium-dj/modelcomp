# Claude Sonnet 5.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (released 2026-09-28) succeeding Claude Sonnet 5 — thinking always on with five effort levels, 1M context, tuned for feature work, bug fixes, and polished documents; beats Opus 5.5 on Terminal-Bench 4.0, AutomationBench, HealthBench Professional, and Terminal-Bench-Science at half the per-token price.
- **Provider / access:** Anthropic Claude API, Claude Platform, AWS, Google Cloud, Azure; no free API tier. Adaptive thinking (always on, cannot be disabled); forced tool calls now return HTTP 400.
- **Release / knowledge:** 2026-09-28; knowledge cutoff not stated in the system card materials reviewed.
- **IDs:** `anthropic/claude-sonnet-5.5`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1M tokens total.
- **Modalities:** text and image in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-08):** $2/$10 per 1M input/output (Sonnet 5's rate made permanent); **cache reads $0.10/M** (halved from $0.20/M on 2026-10-07 — ~20% cheaper on most agentic work; 5% of input), cache writes $2.50/M (5-min) / $4/M (1-hr); Batch API 50% off ($1/$5).
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (max effort, Claude Code `--bare`, 5 trials, safeguards on; $12.54/task) — ahead of Opus 5.5's 66.4% (xhigh), Mythos 5.1's 60.9%, Fable 5.1's 55.8%, Opus 5's 52.3%; effort ladder: low 20.0%, medium 28.8%, high 43.0%, xhigh 61.5%. Artificial Analysis' own TB 4.0 run: 64% (ahead of Opus 5.5 and GPT-6 Astra's 60%)
- GDPval-AA v2.1: **1844** (run by Artificial Analysis; vs Opus 5.5 1846, Sonnet 5 1449, GPT-6 Sol 1487)
- AA-Briefcase v1.1: **1811** Elo (vs Opus 5.5 1822, Sonnet 5 1359)
- AutomationBench (Zapier): **44.7%** — edges Opus 5.5's 42.5%, more than 4x Sonnet 5's 10.7%
- Toolathlon-Verified: **77.8%** Pass@1 (ties Opus 5.5)
- OSWorld 2.1: **80.1%** partial credit (43.5% strict pass; vs Opus 5.5 81.8% partial, Sonnet 5 57.0%)
- Terminal-Bench-Science 0.1: **59.9%** (vs Opus 5.5 58.7%, Fable 5 24.7%)
- FrontierCode 1.1 (Main): **52.1%** xhigh / **46.2%** max (max lower — subagent code-review skill produced out-of-scope edits that FrontierCode penalizes; vs Opus 5.5 54.4%, GPT-6 Sol 49.3%)
- CursorBench 4.0: **55.5%** max (39.2% medium, 47.8% high, 53.1% xhigh; vs Opus 5.5 57.8%)
- HealthBench Professional: **69.2%** (beats Opus 5.5's 65.6%)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **64.5%**; no tools: **56.9%** (vs Opus 5.5 67.7%/64.4%, Sonnet 5 54.9%/43.1%)
- AA Intelligence Index v4.3.2: **56** (max effort, #3 of 216 — behind only Opus 5.5 at max and xhigh; xhigh 51.85, high 46.74, medium 40.74, low 35.84); ~193K output tokens per index task (the most AA has ever measured, ~60% more than Opus 5.5, ~7x GPT-6 Astra); 142 tok/s
- ArXivMath: **86.8%** no tools / **95.2%** with tools
- Chartography (no tools): **61.6%** (vs Sonnet 5 15.6%, Opus 5.5 64.4%)
- AA-Omniscience: Accuracy **54%** (vs Opus 5.5 66%), Hallucination Rate **47%** (lower than Opus 5.5's 59%)
- GPQA Diamond: no verified public score found (not in the 5.5 system card)

Coding:

- SWE-bench Pro: **81.3%** (max effort, 5-trial mean; vs Sonnet 5 63.2%, Opus 5.5 89.9%)
- SWE-bench Multilingual: **90.3%** (vs Sonnet 5 78.3%, Opus 5.5 93.9%)
- SWE-bench Multimodal: **54.3%** (vs Sonnet 5 28.1%, Opus 5.5 61.4%)
- DeepSWE v1.1: **71.0%**
- FrontierSWE v2: **61.9%** (Proximal's run; vs Opus 5.5 62.3%, GPT-6 Astra 65.5%)
- ProgramBench (long context): **79.7%** (vs Sonnet 5 77.3%, Opus 5.5 91.2%)
- OfficeQA / OfficeQA Pro: **76.9%** / **65.6%**
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; ProgramBench 79.7% (above); no MRCR / RULER / GraphWalks score published

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 70.6% leads the comparison set (ahead of Opus 5.5's 66.4%), GDPval-AA 1844 clears the 1750+ frontier reference, and AutomationBench 44.7% beats Opus 5.5; FrontierCode 52.1% (xhigh) and the verbose ~193K tokens/index-task cap the score.
- **Reasoning: 90/100.** HLE 64.5% with tools (56.9% no tools) and ArXivMath 95.2% (tools) are frontier-band results; the AA Intelligence Index of 56 (just under the 60+ bar) and the unpublished GPQA Diamond keep it out of the 92+ band.
- **Context window: 95/100.** 1M-token window with ProgramBench 79.7%; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band (Chartography 61.6% and SWE-bench Multimodal 54.3% corroborate visual capability; first Sonnet to beat Pokémon Red from screenshots).
- **Coding: 91/100.** SWE-bench Pro 81.3%, Multilingual 90.3%, Terminal-Bench 4.0 leadership and Toolathlon 77.8% are top-of-set; DeepSWE 71.0% (under the 74% frontier ref) and FrontierCode 52.1% cap it.
- **Cost efficiency: 75/100.** $2/$10 per 1M (half of Opus 5.5) with $0.20 cache reads — between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; Anthropic claims up to 30% lower cost per task than Sonnet 5 via fewer tokens, and AA's ~$2.66 max-effort index task is far below Opus 5.5's $5.98-equivalent tier.
- **Overall Score: 87/100.** (92+90+95+65+91)/5 = 86.6 → 87 — the everyday-work sweet spot: Opus-beating Terminal-Bench 4.0 and AutomationBench at half the price, with verbosity (~193K tokens/task) as the main cost drag at max effort.

---

## Update 2026-10-08 (6-day re-research)

- **Pricing change (2026-10-07): cache reads halved $0.20 → $0.10/M** (Anthropic announcement; ~20% cheaper on most agentic work). Cache writes unchanged ($2.50 5-min / $4 1-hr). Anthropic also announced monthly Claude Platform API credits for Max/Team ($100 Max 5x / $200 Max 20x / up to $500 pooled Team)
- **AA-SciCode: 61.0%** (Artificial Analysis SciCode leaderboard) — fills the SciCode gap (~6 points below Opus 5.5 per AA)
- Artificial Analysis' own runs (graysoft capture): **AA-LCR 82.7%** (fills the long-context gap), HLE 55.0%, Terminal-Bench 4.0 **63.6%** (AA's own run vs 70.6% system card), AA Intelligence Index 56.00
- BenchLeader's own runs: **GPQA Diamond 95.6%** (third-party run — fills the GPQA gap; AA's own GPQA row still unpublished), FrontierMath Tiers 1–3 88.8% / Tier 4 80.5%, OTIS Mock AIME 100.0%, SimpleQA Verified 46.5%, APEX-Agents 75.5%, ProofBench 100.0%, LiveBench 75.7% (Reasoning 91.6 / Coding 91.4 / Agentic Coding 56.3 / Math 96.1 / Data Analysis 59.5 / Language 78.0 / Instruction Following 56.8), AA-Omniscience 32.3; BenchLeader Index 67.6, composite 72.6; 129 tok/s
- Vals AI TB 2.1 mirror: **83.1%** (Sep 27 snapshot — separately tagged Vals run, not a tbench.ai public-board submission)
- AA (2026-09-28): Sonnet 5.5 is #2 on the AA index; AA-Omniscience accuracy 54% vs Opus 5.5's 66% with a lower hallucination rate (47% vs 59%)
- Still unpublished: LiveCodeBench, Vibe Code Bench, official GPQA (AA), MRCR/RULER/GraphWalks

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Anthropic Sonnet 5.5 launch page and system card, Artificial Analysis, Zapier, Cognition, Cursor, apidog, ComputingForGeeks, HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
