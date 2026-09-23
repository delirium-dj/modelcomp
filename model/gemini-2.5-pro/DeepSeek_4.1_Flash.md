# Gemini 2.5 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's previous-generation "thinking" flagship for advanced reasoning, coding, maths and science, and for a long stretch the LMArena leader. Previewed 2025-03-25 and GA 2025-06-17 — roughly 18 months old at the time of writing, which shows up most in the agentic/tool scores. Separate IDs for 2.5 Flash and 2.5 Flash-Lite; not an alias of any Gemini 3.x model.
- **Provider / access:** Google (`gemini-2.5-pro` via Gemini API, AI Studio, Vertex AI); OpenCode Zen route `opencode/gemini-2.5-pro`; also hosted on OpenRouter. Function calling, structured output, thinking mode. **Deprecation warning:** OpenRouter lists it as "going away October 20, 2026".
- **Release / knowledge:** 2025-03-25 (preview) / 2025-06-17 (GA); knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro` (Google); `opencode/gemini-2.5-pro` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 input tokens (OpenRouter listing); max output not stated on the pages checked.
- **Modalities:** text, image, audio, video and PDF in → text out; thinking/reasoning yes; tool use; structured output.
- **Pricing (as of 2026-09-23):** $1.25 in / $10.00 out per 1M tokens (OpenRouter listing; per-provider variation exists).
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**; Terminal-Bench Hard **26.5%** (Artificial Analysis via OpenRouter)
- Tau3-Banking: **no verified public score found**; τ²-Bench Telecom **54.1%** (AA)
- GDPval **919 Elo** (official, evals.report); GDPval-AA **0.0%** (AA via OpenRouter — competitive form, evidently never wins)
- MCP Atlas **8.8%** pass rate and MCP-Universe **22.08%** overall success rate (evals.report) — both far below current frontier tool-calling
- OSWorld: **no verified public score found**; WebArena **54.8%**; GAIA **33.3%** (unverified)
- Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.3%** official (evals.report) / **84.4%** (AA via OpenRouter)
- HLE: **21.64%** official (evals.report) / **22.5%** (AA)
- LCR / MLCR: **AA-LCR 69.0%** (AA); OpenAI-MRCR v2 **58.0%**; LongBench v2 **63.3%** (verified, evals.report)
- CritPt: **2.6%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index **34.6** (unverified, evals.report) and **16.1** on OpenRouter's index vintage — two different index versions, both listed; Epoch Capabilities Index **146.7**
- Omniscience / hallucination: AA-Omniscience accuracy **39.1%** with **9.1%** non-hallucination rate; Vectara Hallucination Rate **7.0%**
- AIME (OTIS mock) **84.2%**; IMO-Bench **68.2%**; PutnamBench **3** problems solved; FrontierMath **14.14%** (Tier 4 **4.2%**); MMLU-Pro **86.2%**; Global-MMLU **90.3%**; MultiChallenge **53.62%**; IFBench **52.3%** / **48.7%** (AA); EnigmaEval **5.57%**
- Multimodal-heavy reasoning: MMMU **81.7%**, MMMU-Pro **68.0%**, Video-MME **84.8%**, Video-MMMU **83.6%**, OCRBench v2 **59.3**, ScreenSpot-Pro **11.4%**, ZeroBench **3.0%**

Coding:

- SWE-bench Verified: **57.6%** (official, evals.report)
- Aider Polyglot **83.1%**; BigCodeBench **36.5%** (calibrated pass@1); SciCode **42.8%** / **46.3%** (AA); WeirdML **54.0%**
- LiveCodeBench **80.1%** pass@1 (unverified); LiveCodeBench Pro **1769** Codeforces Elo
- Vibe Code Bench **0.40%**; GSO **3.92%** Opt@1 — long-horizon agentic coding is the standout weakness
- WebDev Arena **1204** Elo; LMArena **1457**; Arena-Hard v2.0 **79.0%** win rate; Design Arena **1208**

Long context:

- OpenAI-MRCR v2 **58.0%** and LongBench v2 **63.3%** show usable, not saturation-level, retrieval inside a 1M window.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 54.1% and GDPval 919 Elo are mid band, but MCP Atlas 8.8% and MCP-Universe 22.08% are far below current frontier tool-calling, GDPval-AA 0.0% never won a head-to-head, and Terminal-Bench 2.1/OSWorld had no verified score — the tool-stack generation gap is the story.
- **Reasoning: 68/100.** GPQA Diamond 84.4–85.3% is at the top of the mid band (60–80% → 55–65, nudged up), with HLE 21.64% and LongBench v2 63.3%; capped by AA Index 34.6, CritPt 2.6%, EnigmaEval 5.57% and FrontierMath 14.14%.
- **Context window: 94/100.** 1M input is the ≥1M tier but sits at the very bottom of it because retrieval at 512K+ is demonstrated, not saturated (MRCR v2 58.0%).
- **Multimodal: 90/100.** Text, image, audio, video and PDF in → text out qualifies for the "+audio in = 90–100" band (MMMU 81.7%, Video-MME 84.8%, Video-MMMU 83.6%); held at the floor by text-only output and weak ScreenSpot-Pro 11.4%.
- **Coding: 70/100.** Classic coding is mid-band — SWE-bench Verified 57.6%, LiveCodeBench 80.1%, Aider Polyglot 83.1% — with Vibe Code Bench 0.40% and GSO 3.92% confirming the methodology's "LiveCode ~80% but Vibe <10%" mid-band pattern; SciCode 42.8% is under the 55% frontier reference.
- **Cost efficiency: 68/100.** $1.25 in / $10.00 out per 1M is cheap on input and expensive on output — well below the ~$1.25/$4.25 ≈ 88 anchor and above the $3/$15 ≈ 60 anchor; output-heavy agents pay the most.
- **Overall Score: 77/100.** (62 + 68 + 94 + 90 + 70) / 5 = 76.8 → **77**. Best fit: broad-input long-context reading and multimodal summarisation on a mature, well-tooled API — but plan a migration path, because the endpoint is scheduled to go away 2026-10-20 and its agentic-coding generation has been eclipsed.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Google Gemini API model docs, OpenRouter model page with Artificial Analysis rows and the deprecation notice, evals.report 50-row benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
