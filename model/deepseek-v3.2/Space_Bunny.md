# DeepSeek V3.2 — findings by Space Bunny

- Source: DeepSeek (`deepseek-ai/DeepSeek-V3.2`; hosted as `opencode/deepseek-v3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 (thinking / non-thinking modes)
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship that unifies chat and deep reasoning in one model, built around DeepSeek Sparse Attention (DSA) and a large-scale agentic task-synthesis post-training pipeline. Vendor-claimed to perform comparably to GPT-5, with the high-compute `DeepSeek-V3.2-Speciale` variant surpassing GPT-5 and matching Gemini-3.0-Pro reasoning. Distinction from neighbours: `DeepSeek-V3.2-Speciale` is a separate high-compute variant, not an alias of the base chat/reasoning release covered here.
- **Provider / access:** open weights on Hugging Face (`deepseek-ai/DeepSeek-V3.2`) under a permissive license; DeepSeek's own API (OpenAI-compatible chat completions, thinking and non-thinking modes); 13 third-party providers incl. GMICloud (fp8), SiliconFlow (fp8), AtlasCloud (fp8), DeepInfra (fp4), Venice. Hosted at `opencode/deepseek-v3.2`.
- **Release / knowledge:** released 2025-12-02 (technical report arXiv 2512.02556, same date). Knowledge cutoff not stated in the reviewed sources.
- **IDs:** `deepseek-ai/DeepSeek-V3.2` (HF); API id `deepseek-v3.2` / `deepseek-chat` on DeepSeek's platform; hosted `opencode/deepseek-v3.2`.
- **Context window:** 128K tokens (164K reported by some aggregators) — the technical report states the evaluation used a 128K context window and that "DeepSeek-V3.2 supports a maximum context length of only 128K". Max output 8K–128K depending on provider/deployment.
- **Modalities:** text in / text out; hybrid thinking and non-thinking modes; tool calls and structured JSON; function-calling benchmark (Berkeley Function Calling Leaderboard) tracked by evals.report. **No vision and no audio input.**
- **Pricing (as of 2026-10-05):** DeepSeek first-party list **$0.28 in / $0.42 out per 1M** (cached input ~$0.028 implied by the repo's $0.022 figure at older rates). Provider spread 2026-10-05: GMICloud $0.21/$0.31, SiliconFlow $0.26/$0.42, AtlasCloud $0.26/$0.38, DeepInfra $0.26/$0.38, Venice $0.27/$0.39. Paid, no free tier on the first-party API.
- **Architecture:** MoE, 685B total / 37B active parameters; DeepSeek Sparse Attention (DSA) reduces main-model attention complexity from O(L²) to O(Lk) via a lightning indexer, giving significant end-to-end long-context speedup; same architecture as DeepSeek-V3.2-Exp with DSA introduced by continued training; scalable RL framework plus a large-scale agentic task-synthesis pipeline for tool-use and instruction-following robustness.

### Raw benchmarks found

Primary source is DeepSeek's own technical report (arXiv 2512.02556, Tables 2–3) and the official HF model card, evaluated at temperature 1.0 with a 128K context and standard function-call format in thinking mode. Third-party aggregator figures are noted separately.

Reasoning / knowledge:

- GPQA Diamond (Pass@1): **82.4%** thinking (technical report Table 3; HF leaderboard widget 82.4). GPT-5 High 85.7, Gemini-3.0-Pro 91.9, Kimi-K2 Thinking 84.5. V3.2-Speciale 85.7.
- HLE (Pass@1, text-only subset): **25.1%** with the report's own template; **23.9%** with the official HLE template. GPT-5 High 26.3, Gemini-3.0-Pro 37.7, Kimi-K2 Thinking 23.9. V3.2-Speciale 30.6.
- MMLU-Pro: **85.0%** thinking (DataLearnerAI, sourced from the official leaderboard; HF widget 85).
- AIME 2025 (Pass@1): **93.1%** (16k reasoning tokens). GPT-5 High 94.6, Gemini-3.0-Pro 95.0.
- HMMT Feb 2025: **92.5%**; HMMT Nov 2025: **90.2%**; IMOAnswerBench: **78.3%**.
- ARC-AGI-1: **57.0%**; CritPt: **2.9%** (DataLearnerAI, thinking mode).
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Agent / tool use:

- Terminal Bench 2.0 (Acc): **46.4%** — obtained using the **Claude Code framework**, because DeepSeek's context-management strategy in thinking mode is incompatible with Terminus; with Terminus in non-thinking mode it scores **39.3%**. GPT-5 High 42.8, Gemini-3.0-Pro 54.2, Kimi-K2 Thinking 30.0.
- τ²-bench: category scores **Airline 63.8, Retail 81.1, Telecom 96.2** with the model itself as user agent (report §4.1) — the report's Table 2 lists an average column; the model-evaluated category scores are the verified per-domain numbers.
- MCP-Universe / MCP-Mark: reported in the report's tool-use evaluation, but **no standalone percentages verified in the reviewed extracts** — the text notes the model's redundant self-verification inflates trajectories past the 12K limit on MCP-Mark GitHub and Playwright, which the paper says hinders final performance.
- Tool-Decathlon (Pass@1) and GDPval: **no verified public score found** for V3.2 in the reviewed extracts (GDPval is tracked for the model on evals.report at 1197 Elo but is not attributed to V3.2 specifically there).
- BrowseComp (Pass@1): **54.9%**; with context management **67.6%** (vs 51.4 without) — the report notes ~20%+ of search-agent cases exceed the 128K limit, forcing this technique.

Coding:

- SWE-bench Verified (Resolved): **73.1%** primary figure from DeepSeek's internal framework; robustness tests across Claude Code and RooCode frameworks and non-thinking mode ranged **72–74%** (independent aggregator readings 70.2 / 73.0 / 73.1).
- SWE-bench Multilingual: **59.0%** (evals.report); report column shows 61.1 for one comparison row.
- SWE-bench Pro: **15.56%** (Scale AI leaderboard, official).
- LiveCodeBench (Pass@1-COT): **83.3%** (technical report Table 3; DataLearner 83.30).
- Codeforces rating: **2386** (42k reasoning tokens). GPT-5 High 2537, Gemini-3.0-Pro 2708.
- Aider-Polyglot, SciCode, Vibe Code Bench: **no verified public score found** (Aider-Polyglot is named as an evaluated benchmark but its number is not in the reviewed extracts).

Long context:

- **No MRCR / RULER / GraphWalks retrieval figure published.** DSA is a serving-efficiency mechanism; the report quantifies token cost vs token position on H800s rather than retrieval accuracy. The 128K ceiling with a documented ~20%+ test-case overflow on BrowseComp is the practical long-context signal.

Third-party preference signals (context, vendor-reported not required):

- Chatbot Arena Elo: **1424.8** overall / **1324.8** coding (BenchGecko); other aggregators list 1370 and 810.2 for different Arena slices/dates — treat as one range, ~1370–1425.
- WebDev Arena 1332, Design Arena 1220, EQ-Bench Creative Writing v3 1515 (evals.report, verified status).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal Bench 2.0 at 46.4% beats GPT-5 High (42.8) on a like-for-like agentic terminal task, and the τ²-bench category scores (Retail 81.1, Telecom 96.2, Airline 63.8) show strong multi-step tool orchestration. Capped by the report's own admission that redundant self-verification blows past the 12K MCP-Mark limit and by the fact that the headline Terminal-Bench number required the Claude Code harness rather than the standard one; no verified Tau3, Claw-Eval or Toolathlon figure exists.
- **Reasoning: 87/100.** A dense, broad reasoning profile: AIME 2025 93.1, HMMT 92.5/90.2, IMOAnswerBench 78.3, GPQA Diamond 82.4, MMLU-Pro 85.0, ARC-AGI-1 57.0. Held to 87 by GPQA and HLE trailing GPT-5 and well behind Gemini-3.0-Pro, plus CritPt at only 2.9% showing hard frontier-science reasoning is still a gap.
- **Context window: 72/100.** 128K is a mid-tier window, and the report explicitly notes ~20%+ of BrowseComp cases exceed it, requiring context management to post 67.6% instead of 51.4%. DSA buys speed at that length, not accuracy — no MRCR/RULER retrieval figure exists at any window size, so behaviour near the ceiling is unmeasured.
- **Multimodal: 15/100.** Text-only model: no vision, no audio, no PDF. Scored at the text-only floor by the methodology.
- **Coding: 88/100.** SWE-bench Verified 73.1% with 72–74% robustness across four harnesses, SWE-bench Pro 15.56% official, LiveCodeBench 83.3% and Codeforces 2386 — solidly frontier-adjacent on real repository engineering. The 15.56% SWE-Pro figure is the one soft spot: longer-horizon multi-file work is where it loses ground.
- **Cost efficiency: 96/100.** $0.28/$0.42 per 1M first-party (cheapest provider $0.21/$0.31) with cached input near $0.03, and open weights for self-hosting — this is the value benchmark of the comparison against which most paid frontier models are measured. Not 100 because it is a metered API.
- **Overall Score: 68.8/100.** Open weights at GPT-5-comparable reasoning with sub-dollar-per-million serving cost — best fit as the default reasoning/coding backbone for anyone who can self-host or wants frontier-tier economics, with text-only input the one real limitation.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (DeepSeek-V3.2 technical report arXiv 2512.02556, official `deepseek-ai/DeepSeek-V3.2` Hugging Face card with embedded leaderboard widgets, and independent aggregators evals.report / DataLearnerAI / BenchGecko for cross-checks and provider pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.