# Gemini 2.5 Flash-Lite — findings by Big Pickle

- Source: Google DeepMind (`gemini-2.5-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's most cost-efficient multimodal model — the lite tier of the Gemini 2.5 thinking family, aimed at high-frequency classification, data extraction, translation, and ultra-low-latency apps where barely-paying-for-tokens matters more than peak intelligence.
- **Provider / access:** Google AI Studio and Vertex AI (Gemini Developer API / Gemini API), model `gemini-2.5-flash-lite`; alias `gemini-flash-lite-latest`. Full native-tool support.
- **Release / knowledge:** Preview 2026-06-17 (as `gemini-2.5-flashlite-preview-06-17`); stable GA 2026-07-22; updated Sep preview `gemini-2.5-flash-lite-preview-09-2025` (now shut down) with ~50% reduction in output-token usage. Knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (proprietary; no open weights)
- **Context window:** 1,048,576 input tokens (1M, ~1,500 A4 pages); max output 65,536 tokens.
- **Modalities:** text, image, video, audio, PDF input; text output (audio/image generation not supported).
- **Pricing (as of 2026-09-20):** $0.10 in / $0.40 out per 1M tokens; ~90% cache discount; audio-input price cut 40% from preview. Blended 7:2:1 rate ≈ $0.07/1M.
- **Architecture:** Proprietary, undisclosed; controllable "thinking" budget via API parameter (thinking off by default for speed/cost, unlike stable siblings); ~324 tokens/s output, ~0.29s time-to-first-token. Artificial Analysis Intelligence Index (non-reasoning mode): 1.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **62.5%**; MMLU-Pro: **75.9%** (HELM 53.7%); WeirdML: **35.2%** (themodelbeat/Epoch AI figures, Sep 2025 preview).
- AIME 2024/2025: **53.3%**; Artificial Analysis Intelligence Index (non-reasoning): **1** (median of comparable non-reasoning tier models: 6).

Coding:

- LiveCodeBench: **59.3%**; SciCode: **19.3%**; Aider Polyglot: 56.7%; SWE-bench Verified: **48.9%** single attempt / **60.3%** multiple attempts (2.5 family paper lineage); τ²-bench: **18.4%**.

Agent / tool use:

- Function calling, code execution, file search, search grounding, Maps grounding, structured outputs, URL context, and caching all supported on the full 1M window; agentic ceilings remain lite-tier (τ²-bench 18.4%, SWE-bench 48.9% single).
- HELM WildBench: **81.8%**; HELM IFEval: **81.0%** (instruction following).

Long context / multimodal (2.5-family lineage; Flash-Lite runs the 1M window):

- Native text/image/video/audio input with improved audio transcription and image understanding (Sep 2025 update); text-only output.

### Normalized scores (1–100)

- **Tool use: 54/100.** Every tool type is supported (calling, code execution, search, Maps, structured outputs, file search), but measured agentic ceilings are low — τ²-bench 18.4%, SWE-bench Verified 48.9% single-attempt — so capability support out-paces demonstrated agentic reliability.
- **Reasoning: 59/100.** GPQA Diamond 62.5%, MMLU-Pro 75.9%, and AIME 53.3% are respectable lite-tier results, yet the AA Intelligence Index of 1 shows the non-reasoning default is comfortably mid-low; toggling the thinking budget helps demanding cases.
- **Context window: 91/100.** The full 1M-token window with 65K output and grounded long-context tooling makes Flash-Lite genuinely strong on span — a real advantage over lighter competitors.
- **Multimodal: 72/100.** Native text/image/video/audio/PDF input with improved transcription and image understanding; text-only output and no generation keep it from the omni tier.
- **Coding: 56/100.** LiveCodeBench 59.3% and Aider Polyglot 56.7% are decent lite numbers, but SciCode 19.3% and low SWE-bench Verified (48.9% single) show a clear soft underbelly on real-world software engineering.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M with a ~90% cache discount at 324 tokens/s and 0.29s TTFT — among the best price-to-throughput ratios in the tracked catalog.
- **Overall Score: 66/100.** Mean of the five quality dims (54+59+91+72+56)/5 = 66.4. An exceptional value/multimodal-context workhorse whose deliberate lite-tier reasoning and coding ceilings keep overall quality mid-pack.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (ai.google.dev gemini-api docs, developers.googleblog.com stable/preview/update posts, artificialanalysis.ai, themodelbeat.com, arxiv 2507.06261); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.