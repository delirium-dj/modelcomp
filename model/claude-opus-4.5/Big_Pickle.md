# Claude Opus 4.5 — findings by Big Pickle

- Source: Anthropic/`claude-opus-4-5`
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus-tier flagship, and the model that first pushed SWE-bench Verified past 80% while cutting Opus pricing 67% to $5/$25. It is the reference model for MCP-Atlas (best score on the benchmark at launch) and is now used as the rubric-judge model for Scale's SWE Atlas suite, so it is a de-facto evaluation standard even though it has since been superseded by Opus 4.6 through 4.8, Opus 5, 5.5 and Fable 5.1.
- **Provider / access:** Anthropic first-party Claude API (`https://api.anthropic.com/v1/messages`, Messages API — not Chat Completions, not the Responses API); also on Amazon Bedrock (`anthropic.claude-opus-4-5-20251101-v1:0`) and Google Vertex AI (`claude-opus-4-5@20251101`). Repo ID form: `anthropic/claude-opus-4.5`.
- **Release / knowledge:** released 2025-11-24 (snapshot `claude-opus-4-5-20251101`); Anthropic lists the **reliable knowledge cutoff as May 2025** and the **training-data cutoff as Aug 2025** (Artificial Analysis lists Aug 1 2025).
- **IDs:** `claude-opus-4-5` (Anthropic API), `anthropic/claude-opus-4-5-20251101` (dated snapshot). **No Free ID exists on OpenCode Zen** — paid tier only.
- **Context window:** 200K tokens total, **64K max output**. Verified from the Anthropic platform model table (`platform.claude.com/docs/en/models/opus-4-5/overview`). The 1M window is *not* available on this model — Anthropic introduced 1M context with Opus 4.6, so everything above 200K is a hard rejection.
- **Modalities:** text + image in (PDF via document blocks), text out; extended thinking with an `effort` parameter and a `high` default effort; tool use / function calling, extended thinking blocks, JSON mode, prompt caching, batch API.
- **Pricing (as of 2026-09-26):** $5.00 / $25.00 per 1M input/output tokens; cache read $0.50, 5-minute cache write $6.25, 1-hour cache write $10.00; batch API −50%. Blended 7:2:1 cache/input/output rate ≈ $3.85 per 1M (Artificial Analysis). Paid tier — no free-tier data-usage or training-data caveat applies, but there is also no $0 entry point.
- **Architecture:** proprietary — Anthropic publishes no parameter count and no open weights (Artificial Analysis "Weights: Not available").

### Raw benchmarks found

> Vendor numbers come from the Anthropic Claude Opus 4.5 system card and launch post unless another source is named. Independent harness numbers are listed alongside because they frequently disagree by several points.

Agent / tool use:

- SWE-bench Verified: **80.9%** (Anthropic system card, extended thinking **off**, 200K context; first model over 80%). Independent re-runs land lower: 76.4% and 76.8% (BenchmarkList, mini-SWE-agent-style harnesses).
- SWE-bench Pro (Scale, 1,865 problems): **52.0%** (no thinking) / 51.6% (64k thinking).
- SWE-bench Multilingual: **76.2%** (Anthropic) / 70.7% (BenchmarkList).
- SWE-bench Full: **52.6%** (BenchmarkList, **rank 1 of 9**).
- Terminal-Bench 2.0: **59.3%** ± 1.34% (Anthropic, Terminus-2 harness, Harbor scaffold, 1,335 trials, **128k thinking budget**); 57.76% ± 1.05% at a 64k thinking budget over 2,225 trials. Independent readings: 58.4% (BenchmarkList, rank 18 of 68), 59.8% (tbench via RankedAGI), 63.1% on the shorter "Terminal Bench" variant (rank 3 of 8).
- **Terminal-Bench 2.1: no verified public score found** for Opus 4.5 — the 2.1 leaderboard (Benchmark Atlas) jumps from Gemini 3 Pro Preview down and Opus 4.5 is absent; BenchLM lists it as "Coming soon".
- Terminal-Bench Hard: **47.0%** (Artificial Analysis subset, **96th percentile, rank 13 of 326**) — the highest of any model at launch.
- τ²-Bench Retail: **88.9%**; τ²-Bench Telecom: **98.2%** (Anthropic). Independent: τ2-Bench 85.3% (rank 3 of 17), Tau2 Airline 84.0% (rank 1 of 21), Tau2-Bench Telecom 89.5%.
- τ³-Bench: **70.2%** (BenchLM).
- **TAU3-Bench: 69.3%** (BenchmarkList, rank 7 of 13) — the strongest τ³-bench number I found for this generation.
- MCP Atlas: **62.3%** pass rate (Scale's own MCP-Atlas paper, 1,000 tasks / 36 servers / 220 tools — explicitly "the best-performing model"); 78.5% coverage. A later snapshot reads 69.8% (BenchmarkList, rank 27 of 44).
- OSWorld: **66.3%** (Anthropic) / OSWorld-Verified 76.3% (BenchmarkList, rank 16 of 61).
- GDPval-AA: **Elo 1453** (BenchmarkList, 91st percentile, **rank 31 of 340**). A separate raw "GDPVal" task score of 47.3 vs GPT-5.1's 15.6 is reported by Vector Wire on a different scale.
- Berkeley Function-Calling Leaderboard (BFCL): **77.5%**, **rank 1 of 85** (BenchmarkList).
- **Toolathon: 43.5%** (BenchLM).
- MCPMark: **42.3%** (BenchmarkList, rank 11 of 41). MCP-Tasks 71.8%, WideResearch 76.4%.
- Other agentic: The Agent Company **46.5%** (rank 2 of 8), Claw Bench 92 (**64th percentile**), Claw-Eval **59.6%** (BenchLM), ClawProBench/QwenClawBench — no verified public score found, BrowseComp 72.9% (RankedAGI) / 37% (Vector Wire), Vending-Bench 2 net worth **$4,967.06** (53rd percentile, rank 26 of 54; +23% over Sonnet 4.5), CyberGym 50.6%, Gert Labs 64.23%, JobBench 32.3%, ALFWorld **100th percentile (rank 1 of 8)**, PinchBench 87.2%, WebArena/DABstep/DAP/FinanceAgent/SpreadsheetBench — covered in the system card without a single headline figure I could verify.
- **SWE Atlas Codebase QnA / Test Writing / Refactoring: no verified public score found** — Opus 4.5 is the *judge* model for that suite (`anthropic/claude-opus-4-5-20251101` grades every rubric), not a ranked entry.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (86.95%, averaged over 5 trials, 64k thinking budget, 200K context, default high effort — Anthropic system card).
- HLE: **30.8%** (no tools) / **43.4%** (with tools) (RankedAGI); Artificial Analysis reports **30%** for the reasoning variant.
- **Artificial Analysis Intelligence Index: 29** (reasoning variant, estimated, v4.3 — **rank 25 of 647** at launch); 24 (non-reasoning, estimated). By v4.1.1 framing the same page shows 42; index version drift makes cross-generation comparison unsafe.
- LCR / MLCR: **AA-LCR v1.1 77%** (reasoning) / 71% (non-reasoning) (Artificial Analysis).
- CritPt: **5%** (reasoning variant, Artificial Analysis v4.3).
- ARC-AGI-2 (Verified): **37.6%** (Anthropic) — 59th percentile, rank 41 of 99; more than double GPT-5.1's 17.6%.
- **Omniscience Index / Hallucination Rate: AA-Omniscience 14 (reasoning) / −4 (non-reasoning); accuracy 43%; hallucination rate 58%** (Artificial Analysis, 2025-11-25). **2nd place** on the Omniscience Index at launch, behind Gemini 3 Pro (13); 4th-lowest hallucination rate of the field. The 58% guess-rate is the honest counterweight to the 43% accuracy.
- AIME 2025, MultiChallenge 59.0% (52nd pct), InferenceBench 3.37x, ResearchGym 24.0, PostTrainBench 17.1, ARC-AGI-1 80.0% — AIME 2025 is in the system card but I could not verify a standalone figure.

Coding:

- SWE-bench Verified / Pro / Multilingual / Full: **80.9% / 52.0% / 76.2% / 52.6%** (see above; 52.6% on Full is rank 1 of 9).
- LiveCodeBench: **83.7%** (BenchmarkList, rank 37 of 123) / 84.8% (Vector Wire, v6) / 87% (some third-party harnesses) / 76.8% (layerlens, rank 3 of 43). Harness spread is wide; ~84% is the fair read.
- SciCode / AA-SciCode: **49.5%** (Vector Wire) / 48% (Artificial Analysis v4.3) — BenchmarkList puts 49.5% at **92nd percentile, rank 38 of 458**.
- Vibe Code Bench: **20.63%** (Vibe Code Bench v1.1, OpenHands harness, BenchmarkList 2026-07-28, 43rd percentile, rank 41 of 71). A *different* benchmark with a similar name, VibeCodingBench, puts Opus 4.5 at **89.15 avg / 100% pass rate, rank 1 of 15**. Treat the v1.1 number as the real signal and the 89.15 as a different metric.
- DeepSWE: **no verified public score found** for Opus 4.5 (the public DeepSWE table starts at Opus 4.8).
- Other coding: IDE-Bench **83.8%** (rank 3 of 15), CCBench 58.3% (rank 2 of 6), PerfCodeBench 65.1% (rank 5 of 23), APEX-SWE 50.7% (rank 4 of 14), OpenHands Index 60.6% (rank 6 of 26), CORE-Bench Hard 77.8% (rank 1 of 18), SWE-bench Verified (Bash Only) 64.8% (rank 1 of 12), ALE-Bench 1025.38, Aider Polyglot +10.6% over Sonnet 4.5, LiveBench Coding 79.7% / Agentic Coding 39.7%, RankedAGI Coding 71.7%.
- BullshitBench v2: **90%** (launch-day tracker).

Long context:

- **MRCR v2 8-needle: 27.1% at 128K tokens** — and it *cannot be run at 1M at all*, because the 200K window ends first (chaseai, 2026-03-14, comparing against Opus 4.6's 78.3% at 1M and Sonnet 4.5's 18.5%). This is the single most important context data point for this model: 8-needle multi-retrieval is close to unusable inside its nominal window.
- LongWebBench 6.43 (BenchmarkList, 67th percentile, rank 5 of 13) — score units unspecified, so provisional.
- Anthropic publishes no RULER, HELMET, NoLiMa or GraphWalks number for Opus 4.5; Opus 4.6 was the first Opus model with a dedicated long-context section, and the 200K-window models in Anthropic's own docs are explicitly grouped with Sonnet 4.5/Haiku 4.5 at 200K.
- RULER's general finding (frontier models hold ~32K well, then decline 15–30 points by 128K) is the closest proxy — mark **provisional**, not a measured Opus 4.5 value.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Cost efficiency is scored independently and is **excluded** from Overall.

- **Tool use: 91/100.** It owns the two hardest tool-use leaderboards of its moment: **MCP Atlas 62.3%** (Scale's own paper names it the best model on the benchmark), **BFCL 77.5% at rank 1 of 85**, plus **τ³-Bench 69.3%**, **Terminal-Bench Hard 47.0% (96th pct)** and **OSWorld 66.3%**. What caps it below the 90–100 frontier band: the methodology's frontier markers are TB2.1 ~88% and τ³ ~50%+, and Opus 4.5 has **no TB2.1 or TB4.0 score at all** — its terminal number is a 2.0 result, and 47.0% on the Hard subset plus **Toolathlon 43.5%** show the ceiling is real. GDPval-AA Elo 1453 is 91st-percentile, not top-decile.
- **Reasoning: 88/100.** **GPQA Diamond 87.0%** just under the 90% frontier bar, **HLE 43.4% with tools** clearing it but only **30% without**, **ARC-AGI-2 37.6%** (best of its generation by ~20 points), **AA-LCR 77%**, and the best-in-class honesty profile (**Omniscience 14, 2nd overall, accuracy 43%**). Capped by **CritPt 5%** — near-floor on the one reasoning eval that resists memorization — and by a 58% hallucination rate that makes its knowledge claims need verification. AA Intelligence Index 29 (est.) reflects a model strong but no longer index-leading.
- **Context window: 67/100.** The tiered mapping anchors 200K at 70; I score it just below because the *measured* behavior inside that window is poor: **MRCR v2 8-needle 27.1% at 128K** is a real measured ceiling, not a proxy, and 64K max output plus no 1M option (1M started at Opus 4.6) means there is no headroom. This is a "read a large repo" model, not a "hold a huge corpus" model. Methodology note: 64K max output is a caveat, not a separate score.
- **Multimodal: 68/100.** Text **+ image** in, plus PDF document blocks, text out — the methodology's "+image in = 60–70" band. **MMMU 80.7%** and **MMMLU 90.8%** confirm genuinely strong image understanding, and LAB-Bench FigQA is a vision-specific eval the model clears. Capped at 70-band top because there is **no audio in, no video in, and text-only output** — nothing that would push it toward the 90–100 multimodal tier.
- **Coding: 87/100.** The strongest real-world coding signal of its release: **SWE-bench Verified 80.9%** (the first model over 80%; 76.4–76.8% under stricter independent harnesses), **SWE-bench Full 52.6% at rank 1 of 9**, **SWE-bench Pro 52.0%**, **SWE-bench Multilingual 76.2%**, **LiveCodeBench ~84%**, **SciCode 49.5% (92nd pct)**, **VibeCodingBench 89.15 at rank 1 of 15**, IDE-Bench 83.8%. What holds it out of the 90–100 band: the methodology's frontier markers are SciCode 55%+ and TB2.1 85%+, and Opus 4.5 posts **SciCode 49.5%** and **TB2.0 59.3%**; **Vibe Code Bench v1.1 20.63%** (rank 41 of 71) shows it is not a vibe-coding specialist, and no DeepSWE number exists to corroborate the SWE-bench lead.
- **Cost efficiency: 50/100.** Paid tier at **$5/$25** with $0.50 cache reads and a 50% batch discount; blended ≈ **$3.85 per 1M** (7:2:1). Interpolating the methodology's own anchors — $3/$15 ≈ 60, $10/$50 ≈ 30 — puts $5/$25 at roughly 50. It was the **cheapest Opus ever (a 67% cut from Opus 4.1's $15/$75, which would score ~25)**, but Artificial Analysis still flags it as "particularly expensive" among peers at that price, and there is no $0 tier to fall back on.
- **Overall Score: 80.2/100.** Mean of the five non-cost dims — (91 + 88 + 67 + 68 + 87) / 5 = 80.2. **Best-fit recommendation:** Opus 4.5 is still the reference pick for hard multi-tool agentic work where MCP orchestration and long-horizon planning matter (it leads MCP Atlas, BFCL and the τ-bench family) and for repository-scale bug fixing on a real budget — but it is a Nov-2025 snapshot in a fast-moving line, and at $5/$25 with a 200K ceiling and 27.1% 8-needle retrieval, anything needing >200K context, cheap inference, or July-2026-era terminal performance should go to Opus 4.6+ (1M context) or a cheaper tier.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-26
- Method: public internet research (Anthropic system card + launch post, Artificial Analysis model pages and 2025-11-25 analysis article, Scale's MCP-Atlas paper, BenchmarkList / BenchLM / RankedAGI / Vector Wire leaderboards, Benchmark Atlas Terminal-Bench 2.1 board, chaseai long-context write-up, Anthropic platform model + pricing docs). Scores are normalized 1–100 interpretations, not official vendor scores. Where harnesses disagree I list both numbers rather than picking a flattering one.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
