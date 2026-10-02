# Mercury 2.5 — findings by Big Pickle

- Source: Inception Labs (`opencode/mercury-2.5`, upstream `inception/mercury-2.5`, sometimes routed as `inception/mercury-2.5-preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5 — Inception's most capable **diffusion LLM (dLLM)**, and per the vendor the largest diffusion language model ever trained.
- **Short description:** Instead of generating tokens one at a time, Mercury refines **multiple tokens in parallel**, which is where the speed comes from: **1,107 tokens/sec** on widely-available NVIDIA GPUs (Artificial Analysis measures a median 770 t/s on Inception's own endpoint). It is a reasoning model with tunable effort, native parallel tool calls and schema-aligned JSON. Inception positions it deliberately *not* at the frontier — as comparable to cost-optimized models like GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite and Claude Haiku 4.5 — and targets search agents, RAG pipelines, voice agents and coding subagents where latency compounds across dozens of calls per user interaction.
- **Provider / access:** Inception API (`POST https://api.inceptionlabs.ai/v1/chat/completions`, OpenAI-compatible), Baseten, OpenRouter (`inception/mercury-2.5`), Venice, Kilo, Vercel AI Gateway, nano-gpt. Enterprise: dedicated capacity, autoscaling, compliance controls, configurable data retention. Also Mercury Voice (128K, $0.40/$1.50 at 50% off) and Mercury Router preview — separate models, no figures transferred.
- **Release / knowledge:** released 2026-09-08; knowledge cutoff not published. Inception says the next, larger model is already training.
- **IDs:** `opencode/mercury-2.5` (Zen, standard pricing); upstream `mercury-2.5`, `inception/mercury-2.5`.
- **Context window:** **260K tokens** (Inception model page; Artificial Analysis lists 256K), up from Mercury 2's 128K; max output 65,536 tokens.
- **Modalities:** text in / text out. Inception describes a unified diffusion paradigm for audio, image and video as future work — no image, audio or video input is documented for Mercury 2.5.
- **Pricing (as of 2026-10-02):** list **$0.20 in / $0.75 out per 1M**, cached input $0.02. **Launch discount 80% off** → **$0.04 / $0.15**, cached $0.004, on OpenRouter/Inception/Vercel/nano-gpt. Venice lists $0.05 / $0.1875.
- **Architecture:** proprietary diffusion LM; Inception discloses **no parameter count** (AI BENCHY's ~100B figure is explicitly a low-confidence family extrapolation, not vendor-reported).

### Raw benchmarks found

Artificial Analysis (independent, Intelligence Index v4.3.2):

- **Intelligence Index: 12** (Mercury 2 measured 14 on the same version)
- AA-LCR v1.1 **71.7%** · SciCode **38.5%** · HLE **11.8%** · AA-Omniscience accuracy **22.7%**, non-hallucination **19.7%** · GDPval-AA **0.0%** · CritPt **0.0%**
- Cost per task **$0.06**; context 256K; median **770.4 t/s**; end-to-end response ~3.6s

Vals AI (via BenchLeader, reasoning effort `high`):

- Terminal-Bench 2.1 **34.1%** (#59) · Terminal-Bench 4.0 **0.0%** (#27) · Terminal-Bench Science **0.0%** (#22)
- Finance Agent v2 **18.6%** · Tax Agent Bench **12.8%** · Legal Research Bench **4.3%** · Harvey's Legal Agent **0.0%** · Public Benefits Bench **45.3%** · SkillsBench **18.1%** · Excel Modeling **8.8%**
- LegalBench **83.1%** · MedCode **31.3%** · MedScribe **55.1%**
- BenchLeader category scores: Knowledge **57**, Agents & tools **25**, Coding **18**; blended **$0.068/M**

AI BENCHY (tested 2026-09-08, `inception/mercury-2.5::high`):

- Overall **7.1**, rank **#138**; reliability **9.7**; **62.1%** pass rate (12/22 fully passed); **$0.031** total cost; 4.32s average response (23.63s max)
- Per category: Anti-AI Tricks **10.0** · Puzzle Solving **8.7 (#2)** · Instructions following **6.5 (#15, weakest)** · Coding **6.4 (1/3)**

Production deployments cited by Inception:

- **Augment Code** — moved context compaction, model routing and MCP tool search to Mercury: latency **−82% (~150s → 27s)**, cost **−90%** at maintained quality; tool-search summaries under 1s
- **OpenCall** (voice agents) — median model response latency near **170ms**; P99 from several minutes to **1s**; P50 0.4s → **under 0.2s**, including reasoning

General-purpose LLM benchmarks:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- GPQA Diamond / MMLU-Pro / AIME / LiveCodeBench: **no verified public score found**
- No published vision or long-context retrieval benchmark beyond AA-LCR.

Vendor claim, not independently reproducible: "40% increase in intelligence from Mercury 2" and "comparable to GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, Claude Haiku 4.5." Artificial Analysis's own index puts it at 12 — **below** Mercury 2's 14 on the same index version — which directly contradicts the first claim and is well short of the second.

### Normalized scores (1–100)

- **Tool use: 42/100.** Native parallel tool calls, `tools`/`tool_choice`, schema-aligned JSON and real production routing work are genuine strengths, and Augment Code's MCP tool search is exactly the workload this architecture suits. But the measured agentic numbers are poor: **Terminal-Bench 2.1 34.1%**, **Terminal-Bench 4.0 0.0%**, Finance Agent v2 18.6%, Legal Research Bench 4.3%, Harvey's Legal 0.0%, and Terminal-Bench Science 0.0% — several zeroes suggest harness incompatibility with parallel-tool schemas as much as weak planning. Instructions following is AI BENCHY's weakest category at #15.
- **Reasoning: 40/100.** Knowledge is the one solid axis (BenchLeader 57, LegalBench 83.1%, AA-LCR 71.7%), and SciCode 38.5% is respectable for the price tier. Everything harder collapses: **HLE 11.8%**, CritPt 0.0%, GDPval-AA 0.0%, Omniscience accuracy 22.7% with only 19.7% non-hallucination. The decisive fact is that AA scores Mercury 2.5 **below Mercury 2** on the current index, so the "40% intelligence gain" is a marketing number against a measurement that moved the other way.
- **Context window: 66/100.** 260K (up from 128K) is a real spec, and AA-LCR **71.7%** is one of the few genuine long-context retrieval measurements anywhere in this comparison. Capped well below the million-token class because 260K is small by 2026 standards and because the retrieval result, while welcome, has not been broken into bands the way MRCR is elsewhere.
- **Multimodal: 12/100.** Text in, text out. Inception's diffusion framework is explicitly pitched as a unified paradigm for audio, image and video, but that is stated ambition, not a shipped input path — no image, audio or video input and no vision evaluation exist for Mercury 2.5.
- **Coding: 26/100.** The weakest quality dimension. SciCode 38.5% and AI BENCHY Coding 6.4 (1 of 3) are the whole story; there is no SWE-bench number, Vals puts the Coding category at 18, and the flagship coding claim rests on a web-app demo rather than a benchmark. Fine as a fast subagent for compaction, routing and summarization inside a coding agent — not as the model writing the code.
- **Cost efficiency: 94/100.** Best in this comparison by a distance. **$0.04 / $0.15** per 1M at the launch discount (list $0.20 / $0.75), cached input $0.004, **$0.06 per Artificial Analysis task**, $0.031 to run all of AI BENCHY, ~$0.068/M blended on BenchLeader. In production it has already cut one customer's compaction cost 90% and another's P99 voice latency from minutes to one second. The only marks lost: the 80% discount is temporary by definition, and 770–1,107 t/s throughput is a real ceiling on very long generations.
- **Overall Score: 37.2/100.** Half-up mean of the five quality dims. Read it as the price of admission rather than a verdict on capability: this is a **latency-and-cost component** — compaction, routing, summarization, triage, voice response — where 1,000+ tokens/sec and $0.04/M change what is architecturally possible. Point it at hard reasoning, agentic terminal work or coding and the independent numbers will not support it, and the vendor's own frontier-comparability claim is contradicted by Artificial Analysis.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Inception Labs "Introducing Mercury 2.5" launch post and model page, Artificial Analysis Mercury 2.5 model + provider pages, Vals AI results via BenchLeader, AI BENCHY, Baseten model library, OpenRouter, Vercel AI Gateway, modelbenchmark.io, themodelbeat.com). Where Inception's marketing claim conflicts with an independent measurement, both are recorded and the measurement is used for scoring.
- Future sources: add a new file next to this one, e.g. `Mercury_3.md` or `Mercury_Voice.md`, using the same headings.

---