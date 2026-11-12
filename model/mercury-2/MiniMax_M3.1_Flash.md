# Mercury 2 — findings by MiniMax M3.1 Flash

- Source: Inception (mercury-2)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' February/March 2026 diffusion reasoning LLM (dLLM) — the first reasoning model built on masked-diffusion parallel decoding, marketed as "the fastest reasoning LLM" at roughly 1,000 tokens per second. Distinct from the later Mercury 2.5 and Mercury 3 generations, and a **retired** model: Inception stopped selling it to new users on 2026-10-19 and existing non-enterprise access ends 2026-11-15.
- **Provider / access:** Inception API, OpenAI-compatible Chat Completions at `https://api.inceptionlabs.ai/v1/chat/completions` with model id `mercury-2`; also via OpenRouter (`inception/mercury-2`) and Baseten. No OpenCode Zen route exists — the OpenCode Console catalog lists no Mercury model.
- **Release / knowledge:** 2026-02-24 (Inception launch post); Artificial Analysis records 2026-02-20, OpenRouter and Benchize record 2026-03-04. Knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-2` (OpenRouter; Benchize canonical slug `inception/mercury-2-20260304`), `mercury-2` (Inception API). No free Zen ID exists.
- **Context window:** 128,000 tokens total, 50,000 max output — verified on the Inception models-and-pricing doc, the OpenRouter model page and the Artificial Analysis model record.
- **Modalities:** text in / text out only. Reasoning: yes, `reasoning_effort` instant / low / medium / high (default `medium` for Mercury 2). Tool calling: yes ("native tool use"), including schema-aligned JSON output. No image, audio or video input — Artificial Analysis lists text-only, OpenRouter lists text only, and the Inception model table lists supported format `Text`.
- **Pricing (as of 2026-11-12):** $0.25 per 1M input tokens and $0.75 per 1M output tokens, cached input $0.025 (a 90% cache discount per Artificial Analysis). Paid only; Inception's free allowance (100 million free tokens per new key, 1,000 requests per minute) now applies to the Mercury 3 generation rather than to Mercury 2, which is closed to new sign-ups.
- **Architecture:** proprietary diffusion LLM (masked diffusion, parallel refinement over a small number of denoising steps); parameter count not disclosed. Vendor states it is more than 40 times smaller in total parameters than Mercury 3.

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| τ²-bench (Tau2-Bench) | 70.8% | **Independent** (Artificial Analysis) | AA model record field `tau2` |
| Tau-Banking | 9.5% | **Independent** (Artificial Analysis) | AA model record field `tauBanking` |
| Terminal-Bench 2.1 | 27.3% | **Independent** (Artificial Analysis) | AA model record field `terminalBench21` |
| Terminal-Bench Hard | 26.5% | **Independent** (Artificial Analysis) | AA model record field `terminalbenchHard` |
| Terminal-Bench 4.0 | 0.0% | **Independent** (Artificial Analysis) | AA model record field `terminalBench40` |
| AutomationBench-AA (partial score) | 1.7% | **Independent** (Artificial Analysis) | AA model record field `automationBenchPartialScore` |
| GDPval | 501.73 Elo (95% CI 478.56–524.90) | **Independent** (Artificial Analysis) | AA model record field `gdpval` |
| PinchBench v2 leaderboard | 39.55% average score over 20 runs | **Independent** (PinchBench) | Also the fastest complete run on the board: 11.0 s; average run cost $0.65 |
| PinchBench (March 2026 vendor write-up) | 78% success rate | Reported by Inception | Inception blog, PinchBench v1-era chart, vs GPT-5 Mini 75%, Gemini 2.5 Flash 71%, DeepSeek Chat 72%, GPT-4o 71% |
| nc-bench tooling category | 98.33% | **Independent** (nc-bench) | nc-bench model table |
| Claw-Eval / ClawProBench | no verified public score found | — | Not published |
| Toolathon / MCP-Atlas / SWE Atlas Codebase QnA | no verified public score found | — | Not published |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| GPQA Diamond | 77.0% | **Independent** (Artificial Analysis) | AA model record field `gpqa`; #124 of 236 on LMSpeed's view |
| HLE | 17.1% | **Independent** (Artificial Analysis) | AA model record field `hle`; #124 of 251 on LMSpeed's view |
| AA-LCR v1.1 (long-context reasoning) | 43.7% | **Independent** (Artificial Analysis) | AA model record field `lcr` |
| IFBench | 69.8% | **Independent** (Artificial Analysis) | AA model record field `ifbench` |
| CritPt (agentic hard) | 0.85% | **Independent** (Artificial Analysis) | AA model record field `critpt` |
| AA-Briefcase v1.1 overall | 265.79 Elo (rubric pass rate 5.72%) | **Independent** (Artificial Analysis) | AA model record `briefcaseBreakdown`; suite cost $12.37 per task |
| nc-bench reasoning category | 76.23% | **Independent** (nc-bench) | nc-bench model table |
| nc-bench overall | 81.99% | **Independent** (nc-bench) | Creative writing 68.31%, language 87.32%, utility 92.86%, text editing 85.26%, rule following 54.41%, hallucination 93.22% |
| Artificial Analysis Intelligence Index | not computed for this model | — | AA has no current Intelligence Index for Mercury 2; only the component fields above exist |
| Omniscience Accuracy / Hallucination Rate | no verified public score found | — | Not published for Mercury 2 |

Coding:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| SciCode | 37.7% | **Independent** (Artificial Analysis) | AA model record field `scicode`; #98 of 118 on LMSpeed's view |
| Terminal-Bench 2.1 | 27.3% | **Independent** (Artificial Analysis) | Shared agentic/coding harness row |
| Design Arena — code | 1022 Elo | **Independent** (Design Arena via Benchize) | Website 1036, SVG 998, ASCII 988, 3D design 983, UI components 998, data viz 1009, game dev 985 |
| SVGBench arena | 1478 rating (78 judged, 6 draws, rank 108) | **Independent** (SVGBench via Benchize) | Human-preference arena |
| SWE-bench Verified / SWE-Pro | no verified public score found | — | No primary source for a repository-scale SWE figure could be located for Mercury 2 |
| LiveCodeBench | no verified public score found | — | Not published |
| Vibe Code Bench | no verified public score found | — | Not published |

Long context:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| AA-LCR v1.1 | 43.7% | **Independent** (Artificial Analysis) | AA's long-context reasoning benchmark at the model's 128K ceiling |
| Context window | 128,000 tokens, 50,000 max output | Vendor + independent | Inception docs; OpenRouter; AA |
| Independent retrieval beyond 128K | not applicable | — | The window itself is the cap; no longer-window run exists |

Throughput and latency:

| Metric | Value | Who ran it | Note / source |
|---|---|---|---|
| Output speed | 318 tok/s (AA-measured at Inception's endpoint) | **Independent** (Artificial Analysis) | AA marks the speed source as first-party Inception hosting |
| Vendor speed claim | 1,009 tok/s on NVIDIA Blackwell GPUs | Reported by Inception | Launch post |
| Time to first token / first answer token | 4.50 s (multi-turn: 1.60 s) | **Independent** (Artificial Analysis) | AA headline + multi-turn fields |
| Time to first token by prompt size | 1K: 5.18 s, 10K: 6.67 s, 100K: 7.45 s | **Independent** (Artificial Analysis) | AA workload table |
| End-to-end time | 11.35 s | **Independent** (Artificial Analysis) | AA headline field |
| LMSpeed speed test | 490 char/s, 0.89 s first token | **Independent** (LMSpeed) | 25 recorded observations |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **PinchBench success rate.** Inception's March 2026 write-up reports a 78% PinchBench success rate; the live PinchBench v2 leaderboard entry for `inception/mercury-2` shows a 39.55% average score across 20 runs. These are not the same benchmark version or task set (the blog predates PinchBench v2), so they cannot be averaged. Resolution: the current leaderboard number is used as the independent agentic signal and the 78% figure is retained and labelled as a vendor-reported, earlier-version result.
- **"Competitive with leading speed-optimized models".** The vendor launch claim sits beside independent Artificial Analysis numbers that are clearly below the speed-optimized peer group on the same harness family: Terminal-Bench 2.1 at 27.3%, Terminal-Bench 4.0 at 0%, AutomationBench partial score 1.7%, GDPval 501.7 Elo and Tau-Banking 9.5%. Resolution: the independent rows govern the Tool-use and Coding scores; the vendor framing is noted but not scored.
- **Speed.** Inception claims 1,009 tok/s on Blackwell, while Artificial Analysis measures 318 tok/s at Inception's own endpoint (LMSpeed independently sees 490 char/s). The gap is consistent with a vendor peak figure on high-end datacenter GPUs versus end-to-end throughput including reasoning tokens on shared hardware. Resolution: throughput is reported as a range with both sources named and is never used to inflate a quality dimension.
- **Tau-family split.** τ²-bench 70.8% and Tau-Banking 9.5% come from the same independent lab and disagree sharply, so the tool-use score is anchored on the weaker, banking-domain number plus the Terminal-Bench rows rather than the headline τ² figure.

### Notes on identity

- Mercury 2 is a **general-purpose diffusion reasoning LLM**: an OpenAI-compatible chat model with tool calling, structured JSON output and selectable reasoning effort. It is a distinct February/March 2026 generation — not an alias of Mercury 2.5 or Mercury 3 — and is now a **deprecated, retiring** model (Artificial Analysis flags it deprecated and benchmarks it every 18 hours instead of every 6; Inception closes non-enterprise access on 2026-11-15).
- It is **not** Mercury Edit 2, the narrow fill-in-the-middle / next-edit prediction model that serves only the FIM and edit-completions endpoints, has no chat surface, no tool calling and no reasoning effort control.
- It is **not** Mercury Decide, the typed decision model that serves only the decisions endpoint and returns calibrated probabilities for yes/no, choice, score and extraction questions instead of free-form text.
- Identity split used in this report: vendor-reported claims are attributed to Inception; every figure from Artificial Analysis, nc-bench, PinchBench, Design Arena, SVGBench, LMSpeed and OpenRouter is labelled with its actual runner, and OpenRouter/Benchize release dates are reported alongside Inception's own because they disagree.

### Normalized scores (1–100)

- **Tool use: 48/100.** Independent evidence is mixed-to-weak: Tau-Banking 9.5%, Terminal-Bench 2.1 27.3%, Terminal-Bench 4.0 0%, AutomationBench 1.7% and PinchBench v2 39.55% put it below the mid band, while τ²-bench 70.8%, nc-bench tooling 98.33% and documented native tool calling keep it above the floor; capped by the near-total absence of long-horizon agentic reliability.
- **Reasoning: 60/100.** GPQA 77.0% (independent) sits at the top of the mid band, with nc-bench reasoning 76.23% and IFBench 69.8% in the same range, but HLE 17.1%, CritPt 0.85%, AA-LCR 43.7% and a 5.72% AA-Briefcase rubric pass rate show the ceiling is low, and no Artificial Analysis Intelligence Index exists to lift it.
- **Context window: 58/100.** A verified 128,000-token window with 50,000 max output lands in the 100K–200K band (50–64); AA-LCR 43.7% at that ceiling is a middling retrieval result, and the model is already past its 100K prompts on the ladder, so it cannot reach the 200K–500K tier.
- **Multimodal: 15/100.** Text-only by every source checked — Inception's model table, OpenRouter and Artificial Analysis all list text in / text out only, so the score is the text-only floor.
- **Coding: 48/100.** SciCode 37.7% (independent) is under the 40% mark, Terminal-Bench 2.1 27.3% shows weak repository work, and the only positive signals are human-preference arenas (Design Arena code 1022 Elo, SVGBench 1478) plus nc-bench text editing 85.26%; no SWE-bench Verified, LiveCodeBench or Vibe Code Bench figure exists to lift it.
- **Cost efficiency: 94/100.** $0.25 in / $0.75 out per 1M with a 90% cache discount at $0.025 is a low-cost tier, but not the sub-$0.10 band; the free-token allowance now attaches to the Mercury 3 generation, so Mercury 2 is scored as paid only.
- **Overall Score: 45.8/100.** Mean of the five quality dimensions (48 + 60 + 58 + 15 + 48) / 5 = 45.8; best fit is a retiring latency-optimised chat model for voice and search sub-agents, where speed and price still matter more than long-horizon reliability.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research (Inception launch and product blogs, Inception API docs, Artificial Analysis model pages and embedded model records, OpenRouter model page, nc-bench model table, PinchBench leaderboard, Design Arena and SVGBench leaderboards via Benchize, LMSpeed, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mercury 2 — Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Mercury 2 on PinchBench — Inception](https://www.inceptionlabs.ai/blog/mercury-2-on-pinchbench)
  - [Mercury 2 — Artificial Analysis model analysis](https://artificialanalysis.ai/models/mercury-2)
  - [Mercury 2 — OpenRouter model page](https://openrouter.ai/inception/mercury-2)
  - [Models & Pricing — Inception API docs](https://docs.inceptionlabs.ai/get-started/models)
  - [nc-bench model leaderboard](https://www.nc-bench.com/models)
