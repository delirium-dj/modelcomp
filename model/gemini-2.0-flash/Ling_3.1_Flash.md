# Gemini 2.0 Flash — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 2.0 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** A December-2024/February-2025 workhorse, now **shut down** on the Gemini API (changelog lists `gemini-2.0-flash`, `gemini-2.0-flash-001`, `gemini-2.0-flash-lite`, `gemini-2.0-flash-lite-001` among shut-down models; AA: "Google has launched a newer release, Gemini 2.5 Flash. We suggest considering it instead."). No GPQA/HLE/AIME/MMLU-Pro-class scores were captured — scores below rest on AA's Index, Google's SWE-bench research run, and spec-based modality/context scoring.

## Model card

- **Name:** Gemini 2.0 Flash (IDs: `gemini-2.0-flash`, `gemini-2.0-flash-001`; a separate Gemini 2.0 Flash Thinking Experimental reasoning variant also existed)
- **Short description:** Google DeepMind's highly efficient workhorse — "more powerful than 1.5 Pro while still delivering the speed and efficiency of Flash," ~2× faster than 1.5 Pro, with native tool use, a 1M-token context window, and multimodal input at a simplified single price per input type.
- **Provider / access:** Google — Gemini API (Google AI Studio) and Vertex AI; experimental 2024-12-11, GA 2025-02-05 with higher rate limits and simplified pricing; also shipped in the Gemini app. **Now shut down** (see note above).
- **Release / knowledge:** 2024-12-11 (experimental) / 2025-02-05 (GA). Knowledge cutoff June 2024 (AA) / August 31, 2024 (OpenRouter).
- **IDs:** `gemini-2.0-flash-001` (GA text-output version); repo folder `gemini-2.0-flash`.
- **Context window:** 1,000,000 tokens; max output ~8,200 (llm-stats).
- **Modalities:** Text, image, speech (audio), and video in; text out on the GA `gemini-2.0-flash-001` (image and audio output plus the Multimodal Live API were planned/rolling out; AA lists text + image output). Non-reasoning by default (AA: "Reasoning: No… a reasoning variant may also exist"). Native tool use, function calling (incl. parallel function calling), code execution, structured outputs.
- **Pricing (as of 2026-10):** $0.10 input / $0.40 output per 1M (Google AI Studio; single price per input type — removed the Gemini 1.5 Flash short/long-context distinction, making mixed-context workloads cheaper than 1.5 Flash despite the performance uplift); OpenRouter listed $0.75/$3.75 (reseller tier). Cached-input price not captured.
- **Architecture:** Not published in captured sources (Google did not disclose parameter counts for 2.0 Flash).

### Raw benchmarks found

- **Artificial Analysis Intelligence Index: 9** (Feb 2025 snapshot; "above average in intelligence and well priced when comparing to other non-reasoning models of similar price").
- **SWE-bench Verified: 51.8%** with code-execution tools (Google research, 2024-12-11) — an agentic sampling setup ("sample hundreds of potential solutions, selecting the best based on existing unit tests and Gemini's own judgment"), not a standard single-run harness; Google noted it was "in the process of turning this research into new developer products."
- Google's launch claims (no absolute numbers captured): stronger than 1.5 Pro and 1.5 Flash across reasoning, multimodal, math, and factuality benchmarks; improved multimodal, text, code, video, spatial understanding and reasoning; improved spatial understanding (more accurate bounding boxes for small objects in cluttered images); better understanding and reasoning of world knowledge than any prior release (that phrasing belongs to 2.0 Pro; 2.0 Flash's claims are the relative ones above).
- No GPQA Diamond, HLE, AIME, MMLU-Pro, LiveCodeBench, Terminal-Bench, MCP-Atlas, or τ-bench scores found for this model.

## Scores

- **Tool use: 59/100.** Native tool use, function calling (incl. parallel), code execution, and the 51.8% SWE-bench Verified research run (code-exec-augmented, non-standard harness); no Tau-bench/MCP-Atlas measurement found. Solid for its era, mid-pack by 2026-10.
- **Reasoning: 48/100.** Non-reasoning model; AA Intelligence Index 9 (Feb 2025 snapshot); no GPQA/HLE/AIME/MMLU-Pro scores captured. A fast workhorse, not a reasoning contender.
- **Context window: 92/100.** 1M tokens with simplified single-price context (a genuine cost improvement over 1.5 Flash at long context); no MRCR-class retrieval benchmark published.
- **Multimodal: 78/100.** Text, image, audio (speech), and video input; text output (image output per AA; Live API rolling out at GA). No MMMU-class score captured; scored on documented input breadth.
- **Coding: 56/100.** SWE-bench Verified 51.8% (code-execution-augmented research run — strong for Dec 2024, mid-pack by 2026-10); no LiveCodeBench/Terminal-Bench scores captured; launch claims of improved code performance are relative, unquantified.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M (blended ≈$0.175/M at 3:1) — deep-discount tier, and cheaper than 1.5 Flash on mixed-context workloads despite the uplift.
- **Overall Score: 66.6/100.** Mean of Tool use 59, Reasoning 48, Context window 92, Multimodal 78, Coding 56 = 66.6 (Cost efficiency excluded per methodology).

> **Gap vs folder average (73.3): −6.7.** Peers appear to have weighted the model's historical strength and multimodal breadth; this score reflects the captured evidence base (AA Index 9, one non-standard SWE-bench research run) and the model's non-reasoning nature, plus its shut-down status.

## Notes

- Verification trail: Google Developers Blog (2024-12-11 experimental launch incl. the 51.8% SWE-bench research result; 2025-02-05 GA + Flash-Lite; 2025-02-25 "start building" pricing post), Google AI Studio/Gemini API changelog (shutdown list), Artificial Analysis model page (Index 9, cutoff, modalities, deprecation note), OpenRouter listing ($0.75/$3.75, cutoff 2024-08-31), llm-stats ($0.10/$0.40, 8.2K max output, TTFT p95 0.40s).
- Known conflicts: knowledge cutoff June 2024 (AA) vs August 31, 2024 (OpenRouter); output modalities text-only (Google GA docs) vs text+image (AA) — the image/audio-output and Live API features were announced as "coming soon"/rolling out at GA.
- Open questions: exact parameter count (undisclosed); whether any third party ran standard harnesses (LiveCodeBench, Terminal-Bench) on 2.0 Flash before shutdown.
- Future sources: archived Gemini API docs, Wayback captures of the AA page, any retrospective evals.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Gemini 2.0 Flash Overall=66.6 (Tool=59 Reasoning=48 Context=92 Multimodal=78 Coding=56 Cost=97; shut down on Gemini API; AA Index 9)`
