# Gemini 3.5 Flash — findings by GPT-5.6 Terra

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-10-01 (UTC; refreshed from the 2026-09-18 report)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-capability Flash model for sustained agentic, coding, and multimodal work, balancing speed with frontier-oriented tool use.
- **Provider / access:** Google Gemini API and Vertex AI as `gemini-3.5-flash`; supports Google Search/Maps grounding, File Search, Code Execution, URL Context, function calling, and computer use.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff January 2025 (Google Gemini API documentation).
- **IDs:** `google/gemini-3.5-flash` (no OpenCode Zen Free ID verified).
- **Context window:** 1M input tokens and 65K output tokens (Google Gemini API documentation).
- **Modalities:** Text, image, audio, video, and documents input; text output (Google model card/API documentation).
- **Pricing (as of 2026-09-18):** $1.50 input / $0.15 cached input / $9.00 output per 1M tokens (Google Gemini API pricing).
- **Architecture:** Proprietary; parameter count not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Terminus-2 harness); MCP Atlas: **83.6%**; Toolathlon: **56.5%** (Google DeepMind model card).
- OSWorld-Verified: **78.4%** (Google DeepMind model card).
- Finance Agent v2: **57.9%** (Google-published comparison table reproduced in academic course material).
- τ³-Banking / τ²-Bench, GDPval-AA, Claw-Eval / ClawProBench, and SWE Atlas Codebase QnA: Google’s public model-card table does not publish result rows for these suites.

Reasoning / knowledge:

- GPQA Diamond: **92.8%**; MMMU-Pro: **84.3%**; IFBench: **76.3%** (public benchmark aggregation).
- Humanity’s Last Exam: **40.2%**; ARC-AGI-2: **72.1%** (Google DeepMind model card).
- HLE, LCR / MLCR, CritPt, Artificial Analysis Intelligence Index / BenchLM overall, and Omniscience Accuracy / Hallucination Rate: no result rows were located in Google’s public model-card table.

Coding:

- SWE-bench Pro (public): **55.1%** single attempt; Terminal-Bench 2.1: **76.2%**; MCP Atlas: **83.6%** (Google DeepMind model card).
- LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, and DeepSWE: no result rows were located in Google’s public model-card table.

Long context:

- MRCR v2 (8-needle): **77.3% at 128K average** and **26.6% at 1M pointwise** (Google DeepMind model card).

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 83.6%, Terminal-Bench 2.1 76.2%, OSWorld-Verified 78.4%, Toolathlon 56.5%, Finance Agent v2 57.9%, and the documented tool stack support a strong score.
- **Reasoning: 86/100.** Strong GPQA/MMMU/IFBench evidence is balanced by the now-verified 40.2% HLE result; ARC-AGI-2 is 72.1%.
- **Context window: 90/100.** The documented 1M input / 65K output tier is excellent, but the new MRCR v2 evidence drops from 77.3% at 128K to 26.6% at 1M.
- **Multimodal: 93/100.** Text, image, audio, video, and document input provide broad native coverage; output remains text-only.
- **Coding: 85/100.** SWE-bench Pro 55.1%, Terminal-Bench 2.1 76.2%, and MCP Atlas 83.6% support agentic coding; absent public LiveCodeBench, SciCode, and DeepSWE rows cap it.
- **Cost efficiency: 78/100.** $1.50/$9 per 1M tokens is a paid Flash-tier rate with economical cache reads, but substantially exceeds low-cost Flash tiers.
- **Overall Score: 88/100.** Mean of the five quality dimensions: (86 + 86 + 90 + 93 + 85) / 5 = 88; best for multimodal, tool-using work where its premium Flash pricing is justified.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-01
- Method: refreshed public-web research using [Google DeepMind’s model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [Gemini API model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash), and [current pricing](https://ai.google.dev/gemini-api/docs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
