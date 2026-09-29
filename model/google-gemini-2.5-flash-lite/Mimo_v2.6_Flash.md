# Gemini 2.5 Flash-Lite — findings by Mimo v2.6 Flash

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (non-reasoning default; thinking configurable)
- **Short description:** Google DeepMind's cheapest Gemini 2.5 tier — a low-latency, cost-optimized multimodal model for high-volume chat, classification and light coding. Not a variant of another folder's entry on the evidence read here; note the dataset also carries a sibling slug `gemini-2.5-flash-lite` (peer files deliberately not read, so no cross-check was made).
- **Provider / access:** Google Gemini API / Google AI Studio (`gemini-2.5-flash-lite`, native Gemini API plus OpenAI-compatible endpoint); OpenRouter `google/gemini-2.5-flash-lite` (incl. `:batch` variant). **Not on OpenCode Zen** — the Zen `/zen/v1/models` list checked 2026-09-29 contains no `gemini-2.5-*` id, so no Zen Free ID exists.
- **Release / knowledge:** 2025-06-17 (llm-stats, RankedAGI); knowledge cutoff 2025-01-01 (RankedAGI, llm-stats). Artificial Analysis flags the model as **deprecated**, pointing to Gemini 2.5 Flash-Lite Preview (Sep '25) as the successor; it still serves traffic and is still benchmarked for the default workload.
- **IDs:** `google/gemini-2.5-flash-lite` (OpenRouter), `gemini-2.5-flash-lite` (Gemini API) — **no Free ID on OpenCode Zen**.
- **Context window:** 1,048,576 (1M) input, 65,536 max output (llm-stats provider row: 1.0M/65.5K; OpenRouter `context_length` 1048576).
- **Modalities:** text, image, speech and video in; text out (Artificial Analysis modality row); llm-stats lists text + image in only — audio/video accepted by the Gemini API but under-documented on aggregators. Reasoning: toggleable thinking mode (OpenRouter describes it as a lightweight reasoning model); tool calls / function calling supported by the Gemini API; JSON mode supported by the Gemini API.
- **Pricing (as of 2026-09-29):** $0.10 input / $0.40 output per 1M via Google (llm-stats, RankedAGI, Artificial Analysis); AA records a 90% cache discount (≈$0.01 cached) and a blended ≈$0.07/1M at a 7:2:1 cache/input/output mix. Paid only — no free tier on any tracked route (not listed on Zen), though Google AI Studio offers a generous free-tier quota outside these API rates.
- **Architecture:** proprietary; parameter count not disclosed (Artificial Analysis FAQ).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA Elo: **322** (RankedAGI, Artificial Analysis variant) — far below the mid-tier reference band
- RankedAGI Agentic: **29.8%** (RankedAGI)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **66.7%** (RankedAGI)
- AIME 2025: **63.1%** (RankedAGI)
- Humanity's Last Exam: **6.9%** no-tools (RankedAGI)
- MMLU: **84.5%** (RankedAGI); MMMU: **72.9%** (RankedAGI)
- Artificial Analysis Intelligence Index: **7** (est.; Artificial Analysis, model page marked deprecated)
- RankedAGI Reasoning: **38.1%**, RankedAGI Math: **57.6%**, RankedAGI Overall: **40.5%** (RankedAGI)
- LCR / MLCR / CritPt / LiveBench: no verified public score found

Coding:

- SWE-bench Verified: **44.9%** (RankedAGI, harness linked to swebench.com)
- LiveCodeBench v6: **34.3%** (RankedAGI)
- Aider Polyglot: **27.1%** (RankedAGI)
- RankedAGI Coding: **35.3%** (RankedAGI)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench / Terminal-Bench: no verified public score found

Long context:

- 1M window documented (llm-stats / OpenRouter / AA); MRCR / RULER / GraphWalks retrieval quality: no verified public score found

Multimodal:

- MMMU 72.9% (RankedAGI) supports the vision claim; video/audio-input benchmarks (Video-MME, AudioBench): no verified public score found

### Normalized scores (1–100)

- **Tool use: 32/100.** The only agentic evidence is GDPval-AA Elo 322 and RankedAGI Agentic 29.8% — both far under the 900–1200 mid-tier GDPval reference — and no Terminal-Bench or tau score exists, so nothing can anchor a higher number.
- **Reasoning: 52/100.** GPQA Diamond 66.7% sits in the 60–80 mid band and AIME 2025 63.1% is respectable, but HLE 6.9% and an AA Intelligence Index of 7 drag the dimension below the mid-band floor (index 20–35 ⇒ 55–65).
- **Context window: 95/100.** 1,048,576 tokens clears the ≥1M tier (95–100); no published retrieval accuracy at 512K+ to justify the full 100.
- **Multimodal: 85/100.** Text, image, speech and video input with text output (Artificial Analysis) puts it in the +video/+audio band (75–100); it is capped below 90 because llm-stats documents image-only input and no audio/video-specific evaluation exists — MMMU 72.9% is the sole vision number.
- **Coding: 40/100.** SWE-bench Verified 44.9%, LiveCodeBench v6 34.3% and Aider Polyglot 27.1% are entry-level — well under the 65–75 mid band, with no Terminal-Bench or SWE-Pro evidence to offset.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M with a 90% cache discount is at the cheap end of the scale (methodology anchors ~$0.10/$0.20 ⇒ 97–99); it loses the top marks because there is no $0 Zen/first-party free route for this id.
- **Overall Score: 61/100.** Mean of the five quality dims (32 + 52 + 95 + 85 + 40) / 5 = 60.8 → 61. Best fit: a dirt-cheap 1M-context multimodal workhorse for classification, summarization and light chat — not a reasoning, agentic or serious coding model.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page, RankedAGI benchmark record, llm-stats model/provider pages, OpenRouter model registry, OpenCode Zen model list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
