# GPT-5.3 Codex Spark — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.3-codex-spark`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-high-speed research preview coding model running on wafer-scale Cerebras WSE-3 hardware at over 1,000 tokens/second, engineered for instantaneous interactive refactoring, autocomplete, and real-time agent loops.
- **Provider / access:** OpenAI API (design-partner preview), ChatGPT Pro, GitHub Copilot Spark.
- **Release / knowledge:** 2026-02-28 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.3-codex-spark`. Design partner preview; no public per-token billing.
- **Context window:** 128,000 tokens total (128K context window); max output 16,384 tokens.
- **Modalities:** Text in; text and code out (text-only preview); structured JSON and tool calling.
- **Pricing (as of 2026-02):** Included with ChatGPT Pro subscription / enterprise design partner agreements; no standard per-token list price.
- **Architecture:** Compact distilled Codex transformer deployed on Cerebras WSE-3 wafer-scale inference hardware.

### Raw benchmarks found

Agent / tool use:

- Generation speed: **1,000+** tokens/sec (Cerebras wafer-scale engine benchmark, 2026)
- Terminal-Bench 2.1: **65.0%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **86.5%**
- GDPval-AA: **1,215** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **44.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.5%** (Artificial Analysis, 2026)
- HLE: **18.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **36.5**
- Omniscience Accuracy / Hallucination Rate: **48% / 80%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%** (SWE-bench Verified) / **42.0%** (SWE-bench Pro)
- LiveCodeBench: **79.5%** pass@1
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **67.0%**

Long context:

- 128K token context window evaluated on single-repo file navigation and low-latency edits.

### Normalized scores (1–100)

- **Tool use: 74/100.** Exceptional tool execution velocity with 86.5% on Tau2-Bench and 65.0% on Terminal-Bench 2.1, designed for rapid interactive IDE loops.
- **Reasoning: 75/100.** Solid code-level logic and reasoning with 76.5% on GPQA Diamond and 36.5 on the AA Intelligence Index.
- **Context window: 75/100.** 128K context window provides sufficient depth for typical module-level editing tasks.
- **Multimodal: 15/100.** Text-only preview architecture without native image or video processing, receiving the standard baseline score.
- **Coding: 86/100.** High-caliber programming accuracy demonstrated by 73.5% on SWE-bench Verified and 79.5% on LiveCodeBench at 1,000+ tok/s.
- **Cost efficiency: 75/100.** Accessible via ChatGPT Pro subscription tier for design partners.
- **Overall Score: 65/100.** Groundbreaking ultra-fast coding preview delivering frontier programming accuracy at blistering speeds, with overall score lowered by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical announcements, Cerebras partnership briefings, and programming benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
