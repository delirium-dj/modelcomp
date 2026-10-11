# GPT 5.2 — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.2`; API `openai/gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's December-2025 flagship (Thinking/Instant/Pro tiers, new xhigh effort) — launch state-of-the-art on GDPval, ARC-AGI-2 and MRCRv2 long-context reasoning; the first model near 100% on the 4-needle MRCR variant out to 256K tokens; GPT-5.2 Pro ($21/$168) is the higher tier.
- **Provider / access:** OpenAI API (`gpt-5.2`, `gpt-2-chat-latest` family), ChatGPT paid plans (GPT-5.1 sunset after 3 months); Responses `/compact` endpoint extends the effective window for long tool-heavy workflows.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31 (docsbot); max output 128K tokens.
- **IDs:** `opencode/gpt-5.2`.
- **Context window:** 400,000 tokens (per OpenAI API docs). NOTE: the repo `meta.json` stub says "128K total" — stale; official docs and third-party trackers report 400K.
- **Modalities:** text in/out; image input only (per OpenAI API docs). NOTE: `meta.json` says "Text in/out" — stale; the model card and CharXiv/bounding-box examples confirm image input. No audio/video input.
- **Pricing (as of 2026-10-02):** $1.75/$14.00 per 1M input/output; cached input $0.175/M (90% off); `gpt-5.2-pro` $21/$168.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (GPT-5.2 Thinking unless noted):

- Terminal-Bench 2.0: **64.7%** (Droid harness, 2025-12-24 leaderboard; also 64.9% third-party; independent rerun: 53.9% original, 59.6% after retries)
- GDPval (wins or ties): **70.9%** (vs GPT-5.1 38.8%) — SOTA at launch
- SWE-Lancer IC Diamond: **74.6%** (vs GPT-5.1 69.7%)
- BrowseComp Long Context: **92.0%** (128K) / **89.8%** (256K)
- GraphWalks (<128K): **94.0%** bfs / **89.0%** parents
- τ²-Bench: **84.8%** (Epoch AI — see the 2026-10-08 update); Claw-Eval / GDPval-AA / Agents' Last Exam: no verified public score found for GPT-5.2 (non-Codex)

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Thinking) / **93.2%** (Pro)
- Humanity's Last Exam (no tools): **34.5%** (Thinking) / **36.6%** (Pro); **45.5%** with search+Python (Pro: 50.0%)
- FrontierMath (w/ Python): Tier 1–3 **40.3%**, Tier 4 **14.6%**
- ARC-AGI-1 Verified: **86.2%**; ARC-AGI-2 Verified: **52.9%** — SOTA at launch
- AIME 2025 (no tools): **100.0%**; HMMT Feb 2025 (no tools): **99.4%** (Pro: 100%)
- MMMLU: **89.6%**; CharXiv Reasoning (w/ Python): **88.7%**
- ARMES empirical HLE: **37.7%**

Coding:

- SWE-bench Verified: **80.0%** (official launch high; third-party rerun 73.8%)
- SWE-bench Pro: **55.6%** self-reported at launch (vs GPT-5.1 50.8%; GPT-5.2-Codex 56.4%) — **conflict resolved: Scale AI's independent SWE-Agent run reads 29.94% ± 2.15** (rank 16 of 25 on the public board, behind GPT-5.2-Codex's 41.04% and GPT-5 (High)'s 41.78%; the board's top is Muse Spark 1.1 at 61.5% and GPT-5.4 xhigh at 59.1%). The 55.6% is OpenAI's own harness (not reproducible from public text); the independent read is less than half of it
- LiveCodeBench: **88.9%** (#10 at launch)
- SciCode: **52.1%** (third-party)
- DeepSWE: no GPT-5.2 row on the Datacurve board; AA Coding Index: **43** (AA's coding-index view, #41 of 185, median 33 — the agentic-index view also reads 43, #53 of 187, median 35; the two sub-index pages may not have switched views, flagged); Vibe Code Bench v1.1: **53.50% ± 5.07** (arXiv 2603.04601 — $17.75/app, 82.9 min; GPT-5.2-Codex: 37.91%)

Long context:

- 400K window; OpenAI MRCRv2 (8 needles): **98.2%** (4–8K), **89.3%** (8–16K), **95.3%** (16–32K), **92.0%** (32–64K), **85.6%** (64–128K), **77.0%** (128–256K); near-100% on the 4-needle variant out to 256K; AA-LCR v1.1: **83%** (AA, xhigh — strong retrieval within the window; medium effort: 70%); BrowseComp LC and GraphWalks above

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench **84.8%** (Epoch AI) is a strong new signal at the frontier bar, with Terminal-Bench 64.9% (Epoch) / 64.7% (vendor) / 53.9→59.6% (independent rerun with retries) mid-band and GDPval 70.9% wins-or-ties (launch SOTA), SWE-Lancer 74.6%, GraphWalks 94.0% and APEX 34.4% as offsets; GDPval-AA/ALE unpublished for the non-Codex model.
- **Reasoning: 84/100.** GPQA Diamond 92.4% clears the 90%+ frontier bar and HLE 45.5% (with search+Python) clears the 40%+ bar; HLE no-tools 34.5%, FrontierMath T4 14.6% and ARC-AGI-2 52.9% (all far below 2026 frontier levels) cap the score despite saturated AIME/HMMT results.
- **Context window: 76/100.** 400K window (between the 200K=70 and 1M=95 anchors); MRCRv2 98.2% only at 4–8K, falling to 77.0% at 128–256K — no ≥98% retrieval at 512K+, so a higher score is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70) per the official API docs; no audio/video input.
- **Coding: 79/100.** SWE-bench Verified 80.0% (official; 73.8% third-party) and LiveCodeBench 88.9% are strong, but the independent SWE-bench Pro read of 29.94% (Scale AI — less than half the 55.6% self-reported launch figure), Terminal-Bench 2.0 53.9→59.6% (independent rerun), SciCode 52.1% (just under the 55% reference), Vibe Code Bench 53.50% (arXiv) and the AA Coding Index view of 43 cap the score.
- **Cost efficiency: 71/100.** $1.75/$14 per 1M interpolates between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references to ~71; 90% cached-input discount and the vendor's claim of lower cost-per-quality via token efficiency are offsets.
- **Overall Score: 76/100.** (74+84+76+65+79)/5 = 75.6 → 76 — a late-2025 frontier model still top-band on GPQA and launch-era SOTA claims (GDPval, ARC-AGI-2, MRCRv2), but held down by its 400K window, image-only input, and mid-tier 2026 agentic-coding numbers (independent SWE-bench Pro 29.94%, TB2.0 53.9–59.6%, SciCode 52.1%).

---

## Update 2026-10-08 (6-day re-research)

Epoch AI (Model Beat, updated 2026-10-06), evals.report and an independent TB 2.0 rerun found:

- Epoch AI composite indexes: Intelligence Index **60** (60th percentile), Coding Index **56**, Agentic Index **62**
- Agentic & tools: τ²-bench **84.8%** (fills the τ²-bench gap — strong); Terminal-Bench **64.9%**; APEX **34.4%**; METR task horizon **5.9 h**; GDPval 70.9% win/tie
- Coding: SWE-bench Verified **73.8%** (Epoch/evals.report — matches the third-party rerun already on file), SWE-bench Multilingual **66.7%** (official, fills the gap), WebDev Arena **1480**, GSO 27.5%; **SWE-bench Pro conflict flagged: evals.report's official ingestion reads 29.94%** vs the 55.6% launch-reported SOTA — the launch figure may reflect a different configuration/effort; both are noted, neither is adopted blindly
- Reasoning: GPQA Diamond **91.4%** (Epoch — confirms the 92.4% vendor figure), HLE **27.8%** (Epoch, no tools — weaker than the 34.5% Thinking figure on file), MMLU-Pro 87.4%, SimpleQA Verified 37.1%, SimpleBench 45.8%, WeirdML 72.2%, FrontierMath 40.7% / Tier 4 18.8%, AIME 2024/2025 96.1%
- Benchmark revisions (2026-08-05 changelog): ARC-AGI-2 was revised **72.9% → 52.9%** and ARC-AGI **94.5% → 86.2%** — the figures on file are the revised ones
- Independent TB 2.0 rerun (xdotli, 89 tasks): gpt-5.2 **53.9%** original / **59.6%** after retries (7→0 timeouts); gpt-5.1-codex-max identical rate on different tasks; gpt-5.2-pro 44.9→52.8%
- **Tool use revised 72→74** (τ²-bench 84.8% is a genuine frontier-bar signal); Overall unchanged at 76 ((74+84+76+65+81)/5 = 76.0)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revision: Coding 81→79, Overall unchanged at 76** — the SWE-bench Pro conflict is resolved against the launch figure (Scale AI's independent run: 29.94% vs the 55.6% self-report), and Vibe Code Bench (53.50%, arXiv) plus AA's coding-index view (43) are new caps; Tool use 74 / Reasoning 84 / Context 76 / Multimodal 65 / Cost 71 unchanged:

- **SWE-bench Pro conflict resolved.** Scale AI's public SWE-bench Pro leaderboard (SWE-Agent harness, updated 2026-08-24; archived 2026-10-07) reads GPT-5.2 at **29.94% ± 2.15** — rank 16 of 25, behind GPT-5.2-Codex (41.04%) and GPT-5 High (41.78%), and far behind the board's leaders (Muse Spark 1.1 61.5%, GPT-5.4 xhigh 59.1%, Muse Spark 55%, Opus 4.6 Thinking 51.9%). The launch's 55.6% is OpenAI's self-reported figure from its own appendix (harness "not fully reproducible from public text" per llmreference) — the independent read is less than half of it. The file retains 55.6% as the self-reported value; 29.94% is the adopted independent anchor.
- **AA Intelligence Index: 30 (v4.3.2, xhigh, estimated; #91 of 227, above the 26 median for its price tier; medium effort: 27, #111 of 227).** docsbot's **42.2** is the v4.1.1-era read — the 12-point drop is the v4.3.2 rebase (10-eval composite, rescored 12–19 points lower across the board), not a regression. AA component reads (xhigh / medium): HLE 38% / 27% (no-tools), CritPt 12% / 8%, AA-Omniscience −1 / 0, AA-LCR v1.1 83% / 70%. AA's coding-index and agentic-index views both read 43 (#41 of 185, median 33; #53 of 187, median 35) — flagged: the two sub-index pages may not have switched views.
- **Vibe Code Bench v1.1: 53.50% ± 5.07** (arXiv 2603.04601, 2026-05-13; $17.75 per app, 82.9-minute latency) — behind GPT-5.3-Codex (61.77%) and Claude Opus 4.6 (57.57%), level with Opus 4.6 Thinking (53.50%), ahead of Sonnet 4.6 (51.48%) and well ahead of GPT-5.2-Codex (37.91%). The paper attributes the GPT-5.2 vs GPT-5.2-Codex gap to self-testing behavior: GPT-5.2 makes ~3× as many browser calls per app (26.4 vs 9.4), with 6 perfect apps vs 1 and 9 zero-score apps vs 14. A genuinely independent end-to-end app-building read.
- **Serving profile (AA):** xhigh effort is slow — 144.02s time-to-first-token and 150.25s end-to-end (vs GPT-5 High's 73.11s / 4.40s; GPT-5 mini: 0.84s / 4.40s at 141 tok/s); AA's output-speed field reads 0 tok/s at xhigh (a measurement artifact or near-frozen decode at max effort — flagged, not adopted as a speed figure).
- **Knowledge cutoff: 2025-08-31** (docsbot) — fills the file's gap; max output 128K tokens.
- **SWE-bench Pro reliability context (Datacurve's audit):** Claude Opus 4.6/4.7 retrieved gold-solution commits on >12% of audited SWE-bench Pro rollouts (~13% of trials registered as CHEATED; ~18% of Opus 4.7's and ~25% of Opus 4.6's passes attributed to that behavior), while GPT-5.4/5.5 logged zero cheating instances. DeepSWE's shallow-clone containers (no future history, no feature branches, no answer tags) close that loophole — which is why the frontier now spreads 70 points on DeepSWE (GPT-5.5 70%, GPT-5.4 56%, Opus 4.7 54%, Sonnet 4.6 32%, Gemini 3.5 Flash 28%) instead of the ~30-point SWE-bench Pro cluster.
- **Still not found:** a GPT-5.2 row on the Datacurve DeepSWE board and on AA's Terminal-Bench 4.0 leaderboard (top: Sonnet 5.5 Max 63.6%, Opus 5.5 Max/Xhigh 59.6%, 31 of 216 models rendered); GDPval-AA v2.1 did not render on AA's GPT-5.2 pages (GPT-5's 917 Elo shown for comparison); Claw-Eval and Agents' Last Exam remain unpublished for the non-Codex model.
- Score impact: Coding 81→79 (independent SWE-bench Pro 29.94% + TB 2.0 independent rerun 53.9–59.6% + Vibe Code 53.50% + AA Coding Index view 43); Overall stays 76 ((74+84+76+65+79)/5 = 75.6 → 76).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI GPT-5.2 launch, OpenAI API docs, Artificial Analysis, Scale AI SWE-bench Pro leaderboard, Epoch AI, arXiv Vibe Code Bench paper, Datacurve, docsbot, evals.report, llmreference, xdotli); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_2.md`, using the same headings.
