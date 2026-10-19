# Gemini 4 Argon — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's flagship Gemini 4 reasoning model — a large-scale sparse mixture-of-experts transformer, announced 2026-09-30 and generally available through the API on 2026-10-13. "Gemini 4 Argon (gemini-4-argon) is our flagship reasoning model, built for complex software engineering, deep mathematical and scientific problem solving". It is a distinct model, not a Gemini 3.8 Flash variant: it anchors the Gemini 4 generation and leads the catalog on several independent long-context and vulnerability-remediation benchmarks.
- **Provider / access:** Gemini API `gemini-4-argon` (v1beta, stable), Google AI Studio, Gemini app, AI Mode, Antigravity, Gemini for business; OpenRouter `google/gemini-4-argon` (+ `:batch`, canonical slug `google/gemini-4-argon-20261013`); OpenCode Zen `opencode/gemini-4-argon` (`https://opencode.ai/inference/google/v1beta/models/gemini-4-argon`). Launched **not** on the Gemini free tier.
- **Release / knowledge:** announced **2026-09-30** (Google blog, Koray Kavukcuoglu); developer/API GA **2026-10-13**; model card "Published 13 October 2026". Knowledge cutoff **March 2026** ("The knowledge cutoff for Gemini 4 is March 2026, but in some domains the model's knowledge may be less up to date").
- **IDs:** `gemini-4-argon` (Gemini API), `google/gemini-4-argon` and `google/gemini-4-argon:batch` (OpenRouter), `opencode/gemini-4-argon` (OpenCode Zen). Thinking levels: low / medium / high (default medium), set by parameter, not by separate model ids.
- **Context window:** **1,048,576** tokens as a unified input+output limit; **max output 65,536** (default synchronous) "up to 1,048,576 (with long decode)". OpenRouter lists `max_completion_tokens` 943,718 for its top provider — a third figure that does not match the official 65,536 sync default.
- **Modalities:** input text, image, video, audio and PDF; output text. Tools: function calling, code execution, computer use (preview), file search, grounding with Google Maps, search grounding, URL context, structured outputs. Caching is **implicit only** ("Explicit caching is not supported"). Live API, image generation and audio generation are not supported.
- **Pricing (as of 2026-10-19, per 1M tokens):** introductory **$2.00 in / $10.00 out**, context caching **$0.10** (95% off input), Batch input $1.00 / output $2.00; **from 2026-12-01 the price doubles to $4.00 in / $20.00 out** (cache $0.20). "Argon will launch at an introductory price of $2 per million input tokens and $10 per million output tokens" and "After the introductory period expires, the price of $4 per 1M input tokens and $20 per 1M output tokens will apply." OpenCode Zen lists "Gemini 4 Argon (50% off)" at $4.00 / $2.00 input and $20.00 / $10.00 output, cache read $0.20 / $0.10 — "The 50% discount applies through November 30, 2026."
- **Architecture:** "Gemini 4 Argon is a large scale sparse mixture-of-experts (MoE) … transformer-based model" — no parameter count disclosed. Google DeepMind's model page notes that "With zero external libraries and 100% pure Python, Argon wrote its own 3D ray-tracing engine with a custom video tool and audio …", i.e. native code execution inside the agent loop.

### Raw benchmarks found

> Google DeepMind's own table (model card + DeepMind page) is marked "vendor"; Artificial Analysis, ARC Prize, Epoch AI, Collinear, MazeBench and the Bug Hunt data are independent; BenchLM rows carry their own evidence labels.

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (vendor) / **57.07%** (AA) — two harnesses, 0.3 points apart
- Terminal-Bench 2.1: **no verified public score found** for Argon
- Tau3-Banking / Tau2-Bench: **not measured** (AA `tauBanking: null`, `tau2: null`)
- GDPval-AA: **1623.99** Elo (AA) / 56.2% normalized (AA, per BenchLM)
- AutomationBench: **51.3%** (vendor) / **77.51%** (AA AutomationBench-AA partial score) — large harness gap
- Agents' Last Exam: **39.5%** (vendor) — 19.8 behind GPT-6 Astra's 59.3%
- OSWorld 2.0: **69.2%** (vendor) — 3.4 behind GPT-6 Astra 72.6%
- CWE-bench v1: **68.0%** (independent, Collinear) — "Argon ties for #1 on CWE-Bench (68%) for vulnerability remediation"
- Finance Agent v2: **65.4%** (vendor) — best-verified in the catalog
- Harvey Legal Agent: **19.6%** (vendor); ITBench-AA (SRE): **not published** (AA `itBenchSre: null`); GDP.pdf all-pass **21.8%** (AA); AA-Briefcase Elo **1486**; AA-Analyst **48.75%** (AA)
- Gray Swan IPI (15 attempts, attack success): **0.7%** — best-verified in the catalog, the strongest prompt-injection resistance of the models here
- Claw-Eval / ClawProBench: **no verified public score found**; Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **57.09%** (AA) / 57.1% (AA, per BenchLM)
- LCR / MLCR: AA-LCR v1.1 **79.67%** (AA); MLCR-AA: **not published** for Argon
- CritPt: **27.14%** (AA)
- Artificial Analysis Intelligence Index: **53** (AA, high effort, rank **#8 / 217**) / 52.6 (OpenRouter API `benchmarks.artificial_analysis.intelligence_index` and BenchLM row — rounding difference)
- GPQA Diamond: **no verified public score found** for Argon (AA `gpqa: null`)
- ARC-AGI-1 **98.50%** (best-verified, ARC Prize), ARC-AGI-2 **91.3%** (3.8 behind GPT-6 Astra), ARC-AGI-3 **46.3%** on the standard harness / **97.30%** via the provider adapter
- STEMBench120 **2.44** (0.4 behind GPT-6 Astra 2.81); FrontierMath v2 Tiers 1–3 **85.965%** (7.7 behind GPT-6 Astra 93.684%), Tier 4 **78.049%** (22 behind GPT-6.1 Sol)
- Vals Index **68.9%** (vendor); LABBench 2 **88.8%** (vendor, best-verified); Omniscience index **42.35**, accuracy **49.9%**, hallucination rate **15.07%** (AA) — the lowest hallucination rate among the models in this batch

Coding:

- DeepSWE v1.1: **77.9%** (vendor) — 1.1 behind the catalog leader (Muse Wonder Full 79.0%)
- FrontierSWE v2: **55.0%** (Proximal, BenchLM) — 10.5 behind GPT-6 Astra 65.5%
- Vibe Code Bench v1.1: **91.90%** (vendor) — best-verified in the catalog
- Terminal-Bench 4.0: 57.4% (see above); Terminal-Bench-Science 0.1: **57.6%** (vendor, 6× verifier timeout) — best-verified in the catalog; AA measures 52.86%
- SciCode: **61.81%** (AA); FrontierCode 1.1 **43.45%** (AA)
- PostTrainBench v1.1 **45.3%** (4 behind Claude Opus 5.5 49.3%); Bug Hunt Bench **40.7 fixes** (10.6 behind Claude Sonnet 5.5 51.3); AA Coding Index 77.5% (via BenchLM)
- SWE-bench Verified / SWE-Pro, LiveCodeBench: **no verified public score found** for Argon
- RiemannBench **76.0%** (vendor)

Long context:

- GraphWalks BFS 128K: **99.7%** (vendor) — best-verified in the catalog
- GraphWalks BFS 256K–1M: **84.2%** (vendor) — best-verified in the catalog, 17.4 points ahead of Claude Opus 5.5's 66.8% on the same benchmark
- AA-LCR v1.1 **79.67%** (short band); MRCR / RULER: **no verified public score found** for Argon
- Unified 1,048,576-token window; 65,536-token synchronous output cap (up to 1,048,576 with long decode)

Performance profile (AA, High): Intelligence Index 53 (#8/217), output speed **N/A (not measured)**, cost per Intelligence Index task **$1.99** (#83/114), 110M output tokens (#78/116), blended 7:2:1 price $1.47/M, cache-hit discount 95%, context 1M.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 84/100.** Terminal-Bench 4.0 57.4% (vendor) / 57.07% (AA) is a strong score on the benchmark that now defines agentic terminal work, OSWorld 2.0 69.2%, GDPval-AA 1624 Elo, CWE-bench v1 68.0% (best-verified), Finance Agent v2 65.4% (best-verified), Agents' Last Exam 39.5%, IPI 0.7% (best-verified prompt-injection resistance), AutomationBench 51.3% (vendor) / 77.5% (AA). Capped below the 90s because the rubric's frontier anchors are unmet — no Terminal-Bench 2.1 at all, **no τ3/τ2-bench measurement**, GDPval 1624 below the ~1750 anchor — and because long-horizon agent scores lag the leaders (Agents' Last Exam 39.5% vs 59.3% for GPT-6 Astra).
- **Reasoning: 89/100.** HLE 57.09%, AA-LCR 79.67%, CritPt 27.14%, FrontierMath v2 85.965% (T1–3) / 78.049% (T4) on Epoch AI's independent board, ARC-AGI-2 91.3% and ARC-AGI-1 98.50% (ARC Prize), STEMBench120 2.44, Vals Index 68.9%, plus an unusually low hallucination rate (15.07%). Held below 90 because the Artificial Analysis Intelligence Index is **53** (rubric anchor 60+), GPQA Diamond is unmeasured for Argon, and ARC-AGI-3 on the standard harness is 46.3% (the 97.3% provider-adapter number is a different harness).
- **Context window: 97/100.** 1,048,576-token unified window — the rubric's top tier (≥1M = 95–100) — and the strongest long-context evidence in the batch: GraphWalks BFS **99.7% at 128K** and **84.2% at 256K–1M**, both best-verified in the catalog. Not 100 because the rubric's extra condition is "≥98% retrieval at 512K+", and the 256K–1M figure is 84.2%, with no MRCR or RULER publication; the 65,536-token synchronous output cap (up to 1,048,576 only with long decode) is a further caveat.
- **Multimodal: 92/100.** Official input coverage is text, image, video, audio **and** PDF with text output — the rubric's "+audio in = 90–100" band — with strong independent vision evidence (LVBench **91.7%**, best-verified; Chartography **71.6%**, best-verified on the no-tools run; LABBench 2 88.8%). Not higher because Artificial Analysis lists Argon as "supports text and image input" only, no MMMU-Pro has been published for Argon, and Google notes some domains may trail the March 2026 cutoff.
- **Coding: 91/100.** DeepSWE 77.9% (rubric anchor 74%+; 1.1 behind the catalog leader), SciCode 61.81% (anchor 55%+), Vibe Code Bench 91.90% (best-verified), Terminal-Bench-Science 0.1 57.6% (best-verified), CWE-bench v1 68.0% (best-verified), Terminal-Bench 4.0 57.4%, AA Coding Index 77.5%. Capped by no published SWE-bench Verified / SWE-Pro, no LiveCodeBench, FrontierSWE v2 55.0% (10.5 behind GPT-6 Astra) and FrontierCode 43.45%.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gemini-4-argon` — currently bills **$2.00 in / $10.00 out** per 1M with cache read $0.10 ("The 50% discount applies through November 30, 2026"), matching Google's own introductory rate; both Google and Zen announce the rate doubling to **$4.00 / $20.00** from 2026-12-01. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) bracket the current $2/$10 at roughly 78, and the announced doubling pulls the forward-looking value down further.
- **Overall Score: 90.6/100.** (84 + 89 + 97 + 92 + 91) / 5 = 90.6 — best-fit: the best long-context and best-in-class tool in this batch (GraphWalks 84.2% at 256K–1M, CWE-bench and Vibe Code Bench leaders) and a frontier coding score, priced to double on 2026-12-01; choose it over Gemini 3.8 Flash for 1M-token software-engineering jobs, and note that its τ-bench and SWE-bench coverage is missing.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 57.40 (Google) vs 57.07 (AA).** Two harnesses, 0.33 points apart; both listed, no material difference.
2. **AutomationBench — 51.3 (Google) vs 77.51 (AA).** A 26-point gap between vendor and tracker harnesses; both listed, neither merged.
3. **Terminal-Bench-Science 0.1 — 57.6% (Google, "6× verifier timeout") vs 52.86% (AA).** Different verifier conditions; both listed.
4. **AA Intelligence Index 53 vs 52.6** (AA page vs OpenRouter API field and BenchLM row) — rounding, not a conflict.
5. **Max output — 65,536 synchronous (official) vs 943,718 (OpenRouter top provider) vs "Not sourced yet" (BenchLM).** The official figure is used; the discrepancy is flagged.
6. **Knowledge cutoff — March 2026 (model card) vs `null` (OpenRouter) vs "Not sourced yet" (BenchLM).** The official cutoff is used.
7. **Input modalities — "Text, Image, Video, Audio, and PDF" (official) vs "text+image+file+audio+video->text" (OpenRouter) vs "supports text and image input" (AA).** AA under-reports; the official list governs the multimodal score.
8. **Post-intro pricing — official $4/$20 from Dec 1 2026 vs OpenRouter listing only $2/$10 vs Zen listing both with the 50% discount window.** The cost score uses today's effective Zen price and states the announced doubling.
9. **Dates — announced Sep 30 2026 vs API GA Oct 13 2026 vs AA "Released September 2026" vs OpenRouter `created` Oct 13 2026.** Both dates are recorded.
10. **BenchLM's "best verified" comparator for Terminal-Bench 4.0 is Claude Sonnet 5.5 at 70.60%**, while Google's own comparison table tops out at Claude Opus 5.5's 66.4% — a catalog-snapshot difference, noted so the gap figures are not read as Google's claims.
11. **No independent Terminal-Bench row, SWE-bench, LiveCodeBench or Vals row for Argon** was found on tbench.ai, swebench.com or LiveCodeBench — the independent record for this model is thin outside Google's own table, which is why Coding is anchored on DeepSWE/Vibe/TB-Science rather than on SWE-bench-style numbers.

### Notes on identity

- `gemini-4-argon` is the Gemini 4 flagship; it is not a tier of `gemini-3.8-flash` and not an alias of any Gemini 3.8 SKU. OpenRouter exposes only `google/gemini-4-argon` and its `:batch` variant for this model.
- Effort is a parameter (low / medium / high), not a separate model id; no published score in this report is tied to a specific effort level because Google does not label them.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model card, Gemini API model/pricing docs, Google DeepMind model page and launch blog posts; independent trackers Artificial Analysis (model page), ARC Prize, Epoch AI FrontierMath, Collinear CWE-bench, MazeBench, Bug Hunt Bench and the BenchLM evidence ledger; OpenRouter and OpenCode Zen model/pricing catalogs. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
