# Gemini 2.5 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: Artificial Analysis, BenchLM, Vals AI, OpenRouter, Google DeepMind).
> **Newly found rows:** Artificial Analysis now **flags Gemini 2.5 Pro as deprecated** — only the default 10k-token workload is still re-benchmarked; Intelligence Index **16 (#174/217, median 27)**, output speed **119 tok/s (#47/188)**, TTFT **20.88s**, cache discount **90%** and **$0.33 per Intelligence Index task**. BenchLM's 2026-10-15 snapshot reads overall **49.13–49.15/100 (#102 of 950–951)** and adds **Gert Labs 42.01%**, **AA Agentic Index 3.5%**, **GDPval-AA 616 Elo**, **AA-MMMU-Pro 74.9%**, **Design Arena Website 1169**, **AA-Omniscience Index -16.3%**, **AIME 2024 92%**, **FrontierMath v2 Tiers 1-3 24.561% / Tier 4 0.000%** and **AA-IFBench 48.7%**. Vals AI adds **Terminal-Bench 2.0 30.34% (#44/67)**, **SWE-bench 54.40% (#82/88)**, **Vibe Code Bench v1.1 0.40% (#108/112)**, **MedCode 50.59% (#17/107)**, MedScribe 73.55%, MortgageTax 68.92% and SAGE 41.92%, with a Vals accuracy of 45.73%.
> **Factual corrections:** maximum output is **65,536 tokens (66k)** (Vals AI), lifting the earlier "not stated on the pages checked" line; OpenRouter confirms a **1.0M** context, **$1.25 / $10.00** pricing, release **Jun 17, 2025** and a **Jan 2025** knowledge cutoff.
> **Conflicts:** (1) **Release date** — OpenRouter/prior pass **2025-06-17** vs Vals AI **2025-07-17** vs the Artificial Analysis FAQ **June 5, 2025**. (2) **SWE-bench Verified 57.6% (evals.report) vs 63.8% (Google launch blog / BenchLM)**. (3) **FrontierMath v2 Tiers 1-3 14.138% vs 24.561%** and **Tier 4 4.167% vs 0.000%** — large Epoch-vintage spread. (4) **GDPval 919 Elo (official) vs GDPval-AA 616 Elo (BenchLM/AA) vs GDPval-AA 0.0% normalized**. (5) BenchLM overall **49.4 (#95) → 49.13 (#102)**.
> Sources: https://artificialanalysis.ai/models/gemini-2-5-pro · https://benchlm.ai/models/gemini-2-5-pro · https://www.vals.ai/models/google_gemini-2.5-pro · https://openrouter.ai/google/gemini-2.5-pro · https://deepmind.google/models/gemini/pro/

> **Re-verified 2026-10-06** against BenchLM's 2026-10-08 snapshot (https://benchlm.ai/models/gemini-2-5-pro).
> BenchLM overall **49.4/100** (#95), context **1M**, pricing **$1.25 input / $10 output**.
> New/updated measurements that fill gaps in the rows above:
> - Agentic (BenchLM 24.6, #97/122): Gert Labs 42.01%
> - Coding (BenchLM 23.3, #110/146): SWE-bench Verified 63.8%; Vibe Code Bench 0.40%; SWE-bench (Vals) 54.4%
> - Knowledge (BenchLM 44, #87/174): HLE 18.8%; GPQA 83%
> - Math (BenchLM 35.1): FrontierMath v2 (Tiers 1-3) 14.138%; FrontierMath v2 (Tier 4) 4.167%

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's previous-generation "thinking" flagship for advanced reasoning, coding, maths and science, and for a long stretch the LMArena leader. Previewed 2025-03-25 and GA 2025-06-17 — roughly 18 months old at the time of writing, which shows up most in the agentic/tool scores. Artificial Analysis now lists it as **deprecated** (only the 10k-token workload is still re-benchmarked). Separate IDs for 2.5 Flash and 2.5 Flash-Lite; not an alias of any Gemini 3.x model.
- **Provider / access:** Google (`gemini-2.5-pro` via Gemini API, AI Studio, Vertex AI); OpenCode Zen route `opencode/gemini-2.5-pro`; also hosted on OpenRouter (2 API providers per AA). Function calling, structured output, thinking mode. **Deprecation warning:** OpenRouter lists it as "going away October 20, 2026".
- **Release / knowledge:** 2025-03-25 (preview) / 2025-06-17 (GA, OpenRouter); knowledge cutoff January 2025. Release date sources conflict (Vals AI lists 2025-07-17; the Artificial Analysis FAQ says June 5, 2025).
- **IDs:** `google/gemini-2.5-pro` (Google); `opencode/gemini-2.5-pro` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 input tokens (OpenRouter/AA); **max output 65,536 tokens (66k)** (Vals AI).
- **Modalities:** text, image, audio, video and PDF in → text out; thinking/reasoning yes; tool use; structured output.
- **Pricing (as of 2026-10-16):** $1.25 in / $10.00 out per 1M tokens (OpenRouter; ~$1.34 blended per AA); 90% cache discount; ~$0.33 per AA Intelligence Index task.
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**; Terminal-Bench 2.0 **30.34%** (#44/67, Vals AI); Terminal-Bench Hard **26.5%** (Artificial Analysis via OpenRouter)
- Tau3-Banking: **no verified public score found**; τ²-Bench Telecom **54.1%** (AA)
- GDPval **919 Elo** (official, evals.report); GDPval-AA **616 Elo** (BenchLM/AA); GDPval-AA **0.0%** (AA via OpenRouter — competitive form, evidently never wins)
- Gert Labs **42.01%** and AA Agentic Index **3.5%** (BenchLM)
- MCP Atlas **8.8%** pass rate and MCP-Universe **22.08%** overall success rate (evals.report) — both far below current frontier tool-calling
- OSWorld: **no verified public score found**; WebArena **54.8%**; GAIA **33.3%** (unverified)
- Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.3%** official (evals.report) / **84.4%** (AA via OpenRouter / BenchLM) / **83%** (Google DeepMind via BenchLM)
- HLE: **21.64%** official (evals.report) / **22.5%** (AA) / **18.8%** (Google)
- LCR / MLCR: **AA-LCR 69.0%** (AA); OpenAI-MRCR v2 **58.0%**; LongBench v2 **63.3%** (verified, evals.report)
- CritPt: **2.6%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index **34.6** (unverified, evals.report) and **16.1** on OpenRouter's index vintage — two different index versions, both listed; AA's deprecated-page read is **16 (#174/217)**; Epoch Capabilities Index **146.7**; AA-Omniscience Index **-16.3%** (BenchLM)
- Omniscience / hallucination: AA-Omniscience accuracy **39.1%** with **9.1%** non-hallucination rate (**90.9%** hallucination rate); Vectara Hallucination Rate **7.0%**
- AIME 2024 **92%**; AIME (OTIS mock) **84.2%**; IMO-Bench **68.2%**; PutnamBench **3** problems solved; FrontierMath **14.14%** (Tier 4 **4.2%**) vs BenchLM/Epoch **Tiers 1-3 24.561% / Tier 4 0.000%**; MMLU-Pro **86.2%**; Global-MMLU **90.3%**; MultiChallenge **53.62%**; IFBench **52.3%** / **48.7%** (AA); EnigmaEval **5.57%**
- Multimodal-heavy reasoning: MMMU **81.7%**, MMMU-Pro **68.0%** (AA-MMMU-Pro **74.9%**), Video-MME **84.8%**, Video-MMMU **83.6%**, OCRBench v2 **59.3**, ScreenSpot-Pro **11.4%**, ZeroBench **3.0%**

Coding:

- SWE-bench Verified: **63.8%** (Google launch blog / BenchLM) vs **57.6%** (official, evals.report) — conflict; SWE-bench (Vals) **54.40%** (#82/88)
- Aider Polyglot **83.1%**; BigCodeBench **36.5%** (calibrated pass@1); SciCode **42.8%** / **46.3%** (AA); WeirdML **54.0%**
- LiveCodeBench **80.1%** pass@1 (unverified); LiveCodeBench Pro **1769** Codeforces Elo
- Vibe Code Bench **0.40%** (#108/112, Vals v1.1); GSO **3.92%** Opt@1 — long-horizon agentic coding is the standout weakness
- WebDev Arena **1204** Elo; LMArena **1457**; Arena-Hard v2.0 **79.0%** win rate; Design Arena **1208** / Website **1169**

Long context:

- OpenAI-MRCR v2 **58.0%** and LongBench v2 **63.3%** show usable, not saturation-level, retrieval inside a 1M window.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 54.1% and GDPval 919 Elo are mid band, but MCP Atlas 8.8% and MCP-Universe 22.08% are far below current frontier tool-calling, GDPval-AA 0.0% never won a head-to-head, Vals Terminal-Bench 2.0 30.34% sits below the 45–60% mid reference, and Terminal-Bench 2.1/OSWorld had no verified score — the tool-stack generation gap is the story.
- **Reasoning: 68/100.** GPQA Diamond 84.4–85.3% is at the top of the mid band (60–80% → 55–65, nudged up), with HLE 21.64% and LongBench v2 63.3%; capped by AA Index 16–34.6, AA-Omniscience Index -16.3%, CritPt 2.6%, EnigmaEval 5.57% and FrontierMath 14.14–24.561%.
- **Context window: 94/100.** 1M input is the ≥1M tier but sits at the very bottom of it because retrieval at 512K+ is demonstrated, not saturated (MRCR v2 58.0%); 65,536 max output now verified.
- **Multimodal: 90/100.** Text, image, audio, video and PDF in → text out qualifies for the "+audio in = 90–100" band (MMMU 81.7%, AA-MMMU-Pro 74.9%, Video-MME 84.8%, Video-MMMU 83.6%); held at the floor by text-only output and weak ScreenSpot-Pro 11.4%.
- **Coding: 70/100.** Classic coding is mid-band — SWE-bench Verified 57.6–63.8%, LiveCodeBench 80.1%, Aider Polyglot 83.1% — with Vibe Code Bench 0.40% and GSO 3.92% confirming the methodology's "LiveCode ~80% but Vibe <10%" mid-band pattern; SciCode 42.8% is under the 55% frontier reference.
- **Cost efficiency: 68/100.** $1.25 in / $10.00 out per 1M is cheap on input and expensive on output — well below the ~$1.25/$4.25 ≈ 88 anchor and above the $3/$15 ≈ 60 anchor; output-heavy agents pay the most (AA ~$0.33 per Index task, 90% cache discount partially offsets).
- **Overall Score: 77/100.** (62 + 68 + 94 + 90 + 70) / 5 = 76.8 → **77**. Best fit: broad-input long-context reading and multimodal summarisation on a mature, well-tooled API — but plan a migration path, because the endpoint is scheduled to go away 2026-10-20, AA lists it as deprecated, and its agentic-coding generation has been eclipsed.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against Artificial Analysis (deprecated-page snapshot with Intelligence Index 16, speed/latency/cache), BenchLM's 2026-10-15 snapshot, Vals AI (release date, max output, Vibe/SWE/MedCode/Terminal-Bench rows), OpenRouter (pricing, context, deprecation notice) and Google DeepMind (Gemini page) — correcting the max-output and deprecation facts and recording the release-date, SWE-bench and FrontierMath conflicts over the 2026-10-06 pass; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
