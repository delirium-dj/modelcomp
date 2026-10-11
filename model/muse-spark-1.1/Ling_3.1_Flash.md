# Muse Spark 1.1 — findings by Ling 3.1 Flash

- Source: Meta (`opencode/muse-spark-1.1`; API `muse-spark-1.1` via the Meta Model API public preview; Meta AI app / meta.ai in "Thinking" mode)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July-2026 multimodal reasoning model for agentic work — Terminal-Bench 2.1 80.0%, Cybench 92.9% pass@1 (near saturation), HLE 45% (w/tools), SciCode 58% (#3 across all AA-benchmarked models), SWE-bench Pro 61.5%, DeepSWE 1.1 53.3% — across a 1M multimodal context (text/image/video/audio/PDF in) at $1.25/$4.25 per 1M; the second-cheapest model at its intelligence tier (~$0.26 per AA Intelligence Index task).
- **Provider / access:** Meta Model API (public preview; OpenAI-compatible Chat Completions + Responses formats; reasoning_effort minimal→xhigh; tool calling, structured output, search grounding with citations, parallel tool calling), Meta AI app and meta.ai ("Thinking" mode). Standard tier (prompts/completions not used for training) and discounted Contributor tier.
- **Release / knowledge:** 2026-07-09; knowledge cutoff not captured.
- **IDs:** `opencode/muse-spark-1.1` / `muse-spark-1.1`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1,048,576-token window and takes text, image, video, audio and PDF input.
- **Context window:** 1,048,576 tokens, actively managed (remembers actions, retrieves earlier work, compacts while keeping critical steps).
- **Modalities:** text, image, video, audio, PDF in; text out.
- **Pricing (as of 2026-10-02):** $1.25/$4.25 per 1M input/output (Standard tier, per AA's cost analysis); Contributor tier heavily discounted (prompts/completions may be used to train future Meta models); ~$0.26 per AA Intelligence Index task.
- **Architecture:** proprietary; parameter count not captured in the materials reviewed.

### Raw benchmarks found

Independent (Artificial Analysis, xhigh; 2026-07-10 article — AA supported Meta with pre-release evaluation):

- AA Intelligence Index: **51** (Muse Spark 1.0: 43, +8 in three months; ties GLM-5.2 max, GPT-5.4 xhigh and GPT-5.6 Luna max; Grok 4.5 high: 54; leaders: Fable 5 60, GPT-5.6 Sol max 59, Opus 4.8 max 56)
- Coding Index: **71** (1.0: 59, +12)
- SciCode: **58%** (1.0: 52%) — **#3 across all models AA has benchmarked**, behind only Fable 5 (60%) and Gemini 3.1 Pro Preview (59%)
- Humanity's Last Exam: **45%** (1.0: 40%) — within a point of Opus 4.8 max (46%), ahead of GPT-5.5 (44%) and Grok 4.5 high (40%)
- AA-Omniscience: **18** (1.0: 4) — the gain came from abstention: hallucination rate fell 35pp to 38% while accuracy held roughly flat
- GDPval-AA v2: **1376 Elo** (1.0: 1144, +232) — "improves substantially but continues to lag the frontier"
- Token efficiency: 94M output tokens per Intelligence Index (fewer than GPT-5.4 xhigh 109M, GPT-5.6 Luna max 125M, GLM-5.2 max 141M) → ~$0.26 per AA task at $1.25/$4.25 (GLM-5.2: $0.37; GPT-5.4: $0.89; only GPT-5.6 Luna's $0.21 is cheaper among models at or above its intelligence)

Vendor (Meta evaluation report + Meta Model API page, 2026-07-09):

- Terminal-Bench 2.1: **80.0%** (Muse Spark 1.0: 67.3%)
- SWE-bench Pro: **61.5%**; DeepSWE 1.1: **53.3%**
- Cybench (professional CTF, unguided): **92.9% pass@1 / 97.0% pass@10** (1.0: 65.4%/79.0%) — near saturation; medium 57.6%→94.2%, hard 27.5%→76.1%; hardest challenges needed a median ~240K–360K output tokens per solve
- Curated CTF set (198 public+private challenges): **89.9% pass@1 / 95.7% pass@5** (1.0: 72.0%/84.1%)
- CyberGym: **59.0% pass@1** (1.0: 43.5%)
- ExploitGym: **0.8% pass@1** — 5/869 tasks at 2h, 7/869 at 4h (vs GPT-5.6 Sol's 216 at 2h per its system card; ExploitGym team's own runs: Mythos Preview 157, GPT-5.5 129, GPT-5.4 61, Opus 4.6 16)
- CyScenarioBench: **0.5% pass@1**; Social Engineering: **5.1%**; SHADE-Arena: **6.8%**
- SeqQA (agentic): **98.2%**; ABC Bench (Fragment Design): **97.0%**; BioDesign Tools (avg): **55.2%**
- AIRS-Bench: **77.0%**; GDM Situational Awareness: **55.1%**
- MCP Atlas, JobBench Professional, Toolathlon-Verified, OSWorld-Verified: listed on Meta's benchmark page but the 1.1 values were not captured from the materials reviewed

Safety (Meta Advanced AI Scaling Framework): pre-mitigation, the "high risk" threshold cannot be ruled out in Chemical & Biological and Cybersecurity; multi-layered mitigations reduce residual risk to "moderate or lower" in all domains; Loss of Control within "moderate or lower".

### Normalized scores (1–100)

- **Tool use: 77/100.** Terminal-Bench 2.1 80.0% (76.2% on the verified best-harness read), MCP Atlas 88.1%, OSWorld-Verified 80.8%, Toolathlon-Verified 75.6% and Cybench 92.9% pass@1 (near saturation) lead, with SWE-bench Pro 61.5%, CyberGym 59.0%, SeqQA 98.2% and JobBench 54.7% supporting; DeepSWE 1.1 53.3%, ProgramBench 47.0%, Harvey's Legal Agent 20%, ExploitGym 0.8% (5/869 tasks), CyScenarioBench 0.5% and SHADE-Arena 6.8% cap the score.
- **Reasoning: 76/100.** HLE 45% (w/tools) sits within a point of Opus 4.8 (max)'s 46% and ahead of GPT-5.5 and Grok 4.5, with SciCode 58% (#3 across all AA-benchmarked models) and AIRS-Bench 77.0% supporting; the AA Intelligence Index of 51 (xhigh), AA-Omniscience 18 (abstention-driven; hallucination rate 38%) and GDM Situational Awareness 55.1% cap the score, and no GPQA Diamond figure was captured.
- **Context window: 95/100.** 1,048,576-token window with active context management (retrieval, compaction); no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 92/100.** Native text/image/video/audio/PDF input with text output — the audio-in band (90–100); Meta documents "ultra-descriptive image and video captioning" and "visual-to-code artifact generation"; no MMMU/Video-MMMU figure captured.
- **Coding: 78/100.** SWE-bench Verified 82.0% (#11 of 72), LiveCodeBench 85.9% (#21 of 123), Terminal-Bench 2.1 80.0%, the AA Coding Index of 71 and SciCode 58.8% (#13 of 296, 96th pct — at the time behind only Fable 5 and Gemini 3.1 Pro Preview) lead, with SWE-bench Pro 61.5%, Vibe Code Bench v1.1 72.2% and Cybench 92.9% supporting; DeepSWE 1.1 53.3% (rank 39 of 52), ProgramBench 47.0% and ReactBench 23.1% cap the score.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M (Standard tier) is the methodology's ~88 anchor exactly; the Contributor tier is heavily discounted, and ~$0.26 per Intelligence Index task is the second-cheapest among models at or above its intelligence (only GPT-5.6 Luna's $0.21 is lower).
- **Overall Score: 84/100.** (77+76+95+92+78)/5 = 83.6 → 84 — a strong, cheap, token-efficient July-2026 agentic multimodal model (SWE-bench Verified 82.0%, LiveCodeBench 85.9%, TB2.1 80%, HLE 45%, SciCode #3, Cybench 92.9%, 1M audio/video/PDF context at $1.25/$4.25) whose DeepSWE (53.3%), ExploitGym (0.8%) and GDPval-AA v2 (1376) lag the frontier.

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Tool use 74→77, Coding 75→78, Overall 82→84** — the vendor-reported agentic rows that were "not captured" at launch are now in, plus two strong coding fills. Reasoning 76 / Context 95 / Multimodal 92 / Cost 88 unchanged:

- **Previously-uncaptured vendor rows (Meta evaluation report, 2026-07-09):** MCP Atlas **88.1%**, OSWorld-Verified **80.8%**, Toolathlon-Verified **75.6%**, JobBench **54.7%**, Finance Agent v2 **57.2%**, Harvey's Legal Agent Benchmark **20%**, TaxEval v2 **79.72%**, MedScribe **88.89%**, CharXiv Reasoning **88.4%**, BabyVision **76.3%**, Arena Elo Text 1490 / Code 1540, HLE **62.1% with tools** (vs AA's no-tools 45% — different protocol, both kept). Meta claims best-in-class among its comparison set on MCP Atlas, JobBench, Toolathlon-Verified, Harvey's Legal, TaxEval v2 and MedScribe.
- **SWE-bench Verified: 82.0%** (rank 11 of 72, 86th pct, ±1.72, x-high, $0.35/test; field leader Opus 5 at 97.0%) — a new fill that clears the 70% reference bar.
- **LiveCodeBench: 85.9%** (rank 21 of 123, 84th pct) and **Vibe Code Bench v1.1: 72.2%** (rank 12 of 75, 85th pct) — new fills; SWE Atlas 42.2% (rank 3 of 14), ProgramBench 47.0% (rank 24 of 37), Code Migration 31.1% (rank 14 of 33), ReactBench 23.1% (rank 19 of 24), SciCode 58.8% (rank 13 of 296, 96th pct).
- **Terminal-Bench 2.1 (Best Reported Harness): 76.2% ± 1.2%** (verified, 2026-08-28, rank 15 of 27; pass@2 82.9% → pass@5 91.0%; reward-hack rate 0.0%; field leader GPT-5.6 Sol 89.5%) — 3.8 pts under Meta's self-reported 80.0% (bash-tool-only agent, 5 attempts, xhigh, 6 CPU/8 GB).
- DataCurve protocol details: DeepSWE 1.1 53.0% ± 3 (bash-only mini-swe-agent fork, 5 attempts, no internet, xhigh); SWE-bench Pro 61.5% ± 3.1 (731 public tasks, mini-swe-agent, xhigh).
- Quirk: Meta's own model page lists DeepSWE 1.1 at **67.0 for Muse Spark 1.0 vs 53.3 for 1.1** — an apparent regression (or harness difference) worth flagging; the 1.1 figure used everywhere else is 53.3%.
- Tool use re-anchors on TB 2.1 76.2–80.0%, MCP Atlas 88.1%, OSWorld 80.8%, Toolathlon 75.6% and SeqQA 98.2%, capped by DeepSWE 53.3%, ProgramBench 47.0%, Harvey Legal 20% and the cyber rows (ExploitGym 0.8%, CyScenarioBench 0.5%). Coding re-anchors on SWE-bench Verified 82.0%, LiveCodeBench 85.9%, the AA Coding Index of 71, SciCode 58.8% and Vibe Code 72.2%, capped by DeepSWE 53.3% (rank 39 of 52) and ReactBench 23.1%.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: none.** Tool use 77 / Reasoning 76 / Context 95 / Multimodal 92 / Coding 78 / Cost 88 / Overall 84 all unchanged — the new reads are version-ladder documentation and third-party Terminal-Bench 2.1 reads that bracket the existing anchors:

- **AA Intelligence Index version ladder:** 43 (Muse Spark 1.0, launch-era) → **51** (1.1 xhigh, AA's pre-release evaluation, 2026-07-10 — AA "supported Meta with pre-release evaluation") → **34** (xhigh, current v4.3.2; #36 of 143 per Tokens or Towers; 170M output tokens on the Index run — "very verbose" vs the 82M median). The drop from 51 to 34 is the index rebase (v4.3.2 added AA-Briefcase, AutomationBench, TB 4.0 and GDP.pdf, and dropped GPQA, τ³-Banking and TB 2.1), not a model change. Full v4.3.2 component set (xhigh): AA-Briefcase v1.1 **848–851**, GDPval-AA v2.1 **1210–1215**, AutomationBench-AA **39%**, Terminal-Bench 4.0 **6%** (new row — the file had none), SciCode **59%**, HLE **46%**, GDP.pdf **14%**, CritPt **15%**, AA-Omniscience **28** (up from 18 on the launch-era version), AA-LCR v1.1 **78%**. Peer context: Claude Fable 5 (Max) 50, Claude Opus 4.8 (Max) 42, Hy3-preview 23* (est.), Grok Build 0.1 27* (est.).
- **Terminal-Bench 2.1 now has four reads:** 80.0% (Meta self-report, mini-swe-agent, xhigh) / **77.9%** (AA independent, xhigh, observed 2026-09-15) / **76.2% ±1.2%** (Terminal-Bench's own verified board, #8 of 27, $198.05 total cost, 445 scored trials, 687s avg duration, 0.0% reward-hack rate, **$0.58 per solved task** — second-cheapest in the verified top 10) / **69.29% ±0.99** (Vals AI independent rerun, #30 of 75). sdd.sh flags that a Hacker News commenter alleged Meta's self-report exceeded the benchmark's defined resource limits (Meta hasn't addressed it) and notes this is the fourth vendor self-report in the cycle to fail independent reproduction; kingy.ai: "the upper bound of the verified figure is 77.4%. Meta's published number sits 2.6 points above that." The file keeps the verified 76.2% as the Tool-use anchor.
- **Vals Index: 54.75% ±1.15** — **#14 overall**, narrowly behind GPT 5.5 (57.41%); at $1.25/test it is the fourth-lowest-cost model in the top 20, and it averaged 827.8s on the index, roughly 2–4× faster than the top three models.
- **New rows:** WebArena-Verified **69%**, DeepSearchQA **84.9%** (beats Gemini 3.1 Pro's 69.7%), OSWorld 2.0 **14.2%** (the newer OSWorld version — a weak row alongside OSWorld-Verified 80.8%), SWE Atlas sub-scores (Test Writing 41.5%, Codebase QnA 42.2%), WebDev Arena **1539.84** (rank 23 of 105), AA Agentic Index **27.5%**, GDPval-AA **35.7%** (AA's percentage read; the Meta report's Elo read is 1375), TB 2.1 verified pass@k curve (pass@2 82.9% → pass@5 91.0%).
- **Cost corroboration:** $1.38 per AA Index task (vs Opus 4.8's $4.08), $1,737 to run the full Intelligence Index (vs Opus 4.8's $6,874), and $0.58 per solved Terminal-Bench task — the second-cheapest per-solve in the verified top 10 (only Grok 4.5's $0.38 is lower).
- **Successor note:** Muse Spark 1.2 (August 2026) — Meta claims TB 2.1 82.9% and DeepSWE 1.1 59.3% (2nd behind Opus 5 in its own table); AA's independent read is ~80% and Vals' common-harness leaderboard ranks it 14th; the highest independently verified TB 2.1 score remains Claude Fable 5 in Claude Code at 83.8%. The verification-gap pattern continues across the family — treat Meta's self-reports as marketing claims until rerun.
- Score impact: none. The four TB 2.1 reads bracket the file's 76.2% verified anchor; the v4.3.2 components (HLE 46%, SciCode 59%, AA-Omniscience 28, AA-LCR 78%) are consistent with the carried figures; TB 4.0 6% and AutomationBench 39% reinforce the existing agentic caps rather than moving a band.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Meta Muse Spark 1.1 evaluation report + launch posts, Meta Model API docs, Artificial Analysis, Vals AI, Terminal-Bench verified board, sdd.sh, kingy.ai, BenchLM, AI Release Tracker, AI Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_1.md`, using the same headings.
