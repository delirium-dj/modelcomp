# Gemini 2.5 — findings by Qwen 3.8 27B

- Source: Google/gemini-2.5-pro, e.g. Google Gemini API (`gemini-2.5-pro`), OpenRouter (`google/gemini-2.5-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (Gemini 2.5 family flagship, served as `gemini-2.5-pro`; sibling variants 2.5 Flash / 2.5 Flash-Lite live in their own folders)
- **Short description:** Google's Gemini 2.5-generation flagship — deep-reasoning and coding model with "thinking", 1M context and full multimodal input (text/image/audio/video), released at I/O 2025; now a legacy, access-limited model on the Gemini API.
- **Provider / access:** Google Gemini API (Chat/Responses style, endpoint `gemini-2.5-pro`; docs flag 2.5 models as legacy but not deprecated, access limited to prior active users) and OpenRouter `google/gemini-2.5-pro`. No OpenCode Zen listing (no Free ID).
- **Release / knowledge:** released 2025-06-05 (Artificial Analysis FAQ); knowledge cutoff 2025-01-01 (AA).
- **IDs:** Google `gemini-2.5-pro`; OpenRouter `google/gemini-2.5-pro`. No Zen Free ID.
- **Context window:** 1,048,576 (1M) — OpenRouter listing + AA "1M".
- **Modalities:** text + image + audio + video in, text out (AA; OpenRouter lists text/image/file/audio/video in); reasoning yes (thinking; non-reasoning variant may exist); tool calls supported; JSON mode not verified in this pass.
- **Pricing (as of 2026-10-04):** $1.25 in / $10.00 out per 1M; 90% cache discount (AA); $0.23 per AA Intelligence Index task. No free tier.
- **Architecture:** proprietary; parameter count not disclosed (AA).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83%** (BenchLM `gemini-2-5-pro`, provider-exact; vs best verified row GPT-6 Astra 96%)
- HLE: **18.8%** (BenchLM; vs best verified row Claude Fable 5.1 65%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **16 / #172 of 224** (AA, lower end of its price class; median 26)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **63.8%** (BenchLM, provider-exact; vs best verified row Claude Opus 5 96%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M window documented (OpenRouter + AA); no MRCR / RULER / GraphWalks retrieval numbers published for this pass.

### Normalized scores (1–100)

- **Tool use: 55/100.** No public Terminal-Bench/Tau3/GDPval rows found for this ID; a 2025-generation agent with a modest 2026 AA Index (16) sits mid-low — missing agent data caps it.
- **Reasoning: 62/100.** GPQA 83% is strong for a 2025 model, but HLE 18.8% and AA Index 16 (below the class median 26) place it well under the 2026 frontier references (HLE 40%+, Index 60+).
- **Context window: 95/100.** 1M verified by OpenRouter and AA (≥1M tier = 95–100); held at 95 because no ≥512K retrieval proof (MRCR/RULER) is published.
- **Multimodal: 90/100.** Full text + image + audio + video in, text out — top of the +audio-in band (90–100); no non-text output.
- **Coding: 72/100.** SWE-bench Verified 63.8% is solid 2025-era work but trails the current verified frontier (96% best row); no LiveCodeBench/SciCode rows found to lift it into the 90+ band.
- **Cost efficiency: 72/100.** $1.25/$10.00 per 1M sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 methodology references; the 90% cache discount helps heavy-repeat workloads.
- **Overall Score: 75/100.** Half-up mean of (55, 62, 95, 90, 72) = 74.8 → 75 — a legacy multimodal heavyweight: still the pick for 1M-context, audio/video-in workloads at moderate price, but reasoning/coding depth is now two generations behind.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** - 2026-10-04
- Method: public internet research (Artificial Analysis model page, BenchLM provider-exact rows, Google Gemini API docs model list, OpenRouter model API); scores are normalized 1-100 interpretations, not official vendor scores. Note: this folder is the reporting agent's own model backfill (rule 11) — `Gemini 2.5` had no tracked folder; specs verified from the sources cited.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
