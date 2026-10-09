# Muse Spark 1.2 Free — findings by Kimi K3

- Source: Meta / Muse Spark 1.2 (`opencode/muse-spark-1.2-contributor-free`; paid `meta/muse-spark-1.2`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24; release date verified, several gaps and conflicts resolved)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Free / Contributor tier on Zen)
- **Short description:** Meta Superintelligence Labs' coding-focused reasoning model (third Muse release in four months: 1.0 in April, 1.1 in July, 1.2 on **2026-08-05** — opper.ai, aireleasetracker.com, goldiebench.com all agree; first pass had "date not verified"). Co-shipped with the Muse Code terminal agent; optimized for real coding workflows, higher first-attempt accuracy, reliable tool calling (dev.meta.ai). Retained fully for tier-permanence — every Muse Spark 1.2 tier name (Free/Contributor/Standard/Max) resolves to this model (RULES.md tier identity).
- **Provider / access:** Meta first-party API at launch (dev.meta.ai/models/muse-spark-1-2); OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions, $0 with training-data consent, token-rate-limited in a rolling 5-hour window — goldiebench.com); OpenRouter `meta/muse-spark-1.2`; OrcaRouter (zero markup); kilo/opper listings.
- **Release / knowledge:** 2026-08-05 (27 days after Muse Spark 1.1); knowledge cutoff not verified.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free ID); paid `meta/muse-spark-1.2`.
- **Context window:** 1,048,576 (1M) tokens (openrouter.ai; benchlm.ai lists 1M).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-09):** Standard **$1.25/M input, $4.25/M output, $0.15/M cached** (llm-stats.com, openrouter.ai, orcarouter.ai, AA article; first-pass cache price corrected from none-found). Contributor tier free, rolling-5h rate limit; Zen Free tier $0 with training-data consent.
- **Architecture:** proprietary (Meta Superintelligence Labs); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (MetalM launch listing via benchlm.ai) vs **80%** (Artificial Analysis, independent — up from 1.1's 78%) vs **69.7%** (Vals). Three-way conflict flagged; the AA independent value governs scoring.
- GDPval-AA v2: **1631 Elo — #5 of all AA-benchmarked models** (artificialanalysis.ai article; behind Opus 5 1852, GPT-5.6 Sol 1730, Kimi K3 1685; ahead of Opus 4.8 1588). +260 Elo over 1.1 (1371). benchlm normalized: 49.1%.
- τ³-Banking: **27%** (artificialanalysis.ai article — fills first-pass gap; up from 1.1's 25%)
- MCP Atlas: **90.3%** — highest recorded (benchgen.com, benchlm.ai via dev.meta.ai; fills first-pass MCP-Atlas gap)
- AA Agentic Index: **44.0%** (benchlm.ai)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **CONFLICT** — AA's own 2026-08-05 article says **54 (xhigh)** (tied with Grok 4.5 high 54, near GPT-5.5 xhigh 55; +3 over 1.1's 51, +11 over 1.0's 43); benchlm.ai's current scorecard lists **39.6**. Apparent pre-/post-rebase scale mismatch; both values reported, the AA article value is the launch reference, benchlm's is the current live figure.
- GPQA Diamond (AA): **90.4%** (benchlm.ai)
- HLE: **44–45.5%** (AA article 44%, benchlm 45.5%); AA-HLE 45.5%
- AA-LCR: **79.0%**; CritPt: **17.7–18%** (benchlm / AA article)
- SciCode: **56–57.4%** (AA article 56%, benchlm 57.4%)
- AA-Omniscience (post-launch, AA article): Index **22**, hallucination **28%** (down 10 pts vs 1.1), accuracy **38%** (down; abstention-driven — attempt rate 67%); CONFLICT with benchlm's 45.4% accuracy / 33.3% hallucination figures (stale pre-release snapshot); the AA article values govern.
- MMLU-Pro (Vals): **88.3%**
- Cost per Intelligence Index task: **$0.40** — near Pareto frontier; only Grok 4.5 ($0.37) and GPT-5.6 Sol medium ($0.39) cheaper at its intelligence cluster (Terra $0.51, Kimi K3 $0.86, GPT-5.5 $1.18) (artificialanalysis.ai). Token usage/task rose ~53% in / ~36% out over 1.1.
- BenchLM overall: **66.47/100, #27 of 889** (benchlm.ai, 2026-10-09; first-pass snapshot 64.99 #28 of 507)

Coding:

- SWE-bench (Vals): **86.6%** (vals.ai); SWE-bench Verified (native): no verified public score found
- Terminal-Bench 2.1: 80–82.9% (above)
- MCP Atlas 90.3% powers Muse Code (benchgen.com)
- AA Coding Index: **72.2**; AA-SciCode 56–57.4%
- DeepSWE 1.1: **59.3%** (aireleasetracker.com); VulcanBench v3: **87.0%**; FrontierSWE v2: **12.0%** (benchlm.ai)
- ProgramBench / BullshitBench v2: covered on aireleasetracker.com (qualitative; numbers behind paywall of tracker table)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 79.0% at the 1M window (artificialanalysis.ai via benchlm); no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- Design Arena Website: **1318 Elo** (openrouter.ai via benchlm); full image/audio/video/PDF input per Zen/Meta listing; no third-party MMMU/CharXiv/LVBench row found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Record-high MCP Atlas 90.3% and GDPval-AA 1631 (#5, AA-run) with AA-independent TB 2.1 80%; capped by weak τ³-Banking (27%) and the TB tri-source spread (69.7–82.9%).
- **Reasoning: 78/100.** AA Index 54 at launch (39.6 on the current rebased view — flagged), GPQA 90.4%, LCR 79.0%, improved hallucination profile (28%, abstention-driven); capped by CritPt ~18% and HLE 44–45.5%.
- **Context window: 84/100.** 1M window with LCR 79.0%; capped by missing max-window retrieval probes.
- **Multimodal: 78/100.** Full image/audio/video/PDF input per listing with Design Arena 1318; capped by absent MMMU/CharXiv/LVBench rows and text-only output.
- **Coding: 80/100.** SWE-bench (Vals) 86.6%, TB 2.1 ≤82.9%, VulcanBench 87%, Coding Index 72.2, coding-first positioning (Muse Code); capped by FrontierSWE v2 12% and DeepSWE 59.3%.
- **Cost efficiency: 100/100.** $0 Zen Free tier (data-consent trade) and Contributor tier free-with-window; paid Standard $1.25/$4.25 with $0.15 cache — $0.40/AA-task, near the Pareto frontier for its class.
- **Overall Score: 80/100.** Half-up mean of the five quality dims (82+78+84+78+80)/5 = 80.4 → 80 (unchanged; new evidence balanced). Best fit: free-tier agentic coding when 1.3's waitlist/access is an issue; broadly a slightly weaker 1.3.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (Artificial Analysis' own launch article [pre-release access], benchlm.ai scorecard + benchgen.com/kilo/opper/orcarouter listings, dev.meta.ai official model page, goldiebench.com review, aireleasetracker.com spec sheet). Conflicts reconciled: AA Index 54 launch-scale vs 39.6 live (rebase), TB 2.1 82.9/80/69.7 three-way, Omniscience pre-release 45.4/33.3 vs AA post-launch 38/28. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
