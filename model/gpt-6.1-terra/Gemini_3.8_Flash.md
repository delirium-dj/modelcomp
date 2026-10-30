# GPT-6.1 Terra — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-6.1-terra`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's cost-efficient mid-tier reasoning and agent model designed for high-precision computer use, visual reasoning, form automation, terminal workflows, and reliable low-hallucination execution.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), ChatGPT Work/Codex.
- **Release / knowledge:** October 26, 2026 release; proprietary commercial license; knowledge cutoff mid-2026.
- **IDs:** `gpt-6.1-terra`, `openai/gpt-6.1-terra`
- **Context window:** 1,050,000 tokens total (1.05M input window; up to 128,000 max output tokens).
- **Modalities:** Multimodal text and image input; text, code, structured JSON output; dynamic adjustable reasoning effort levels.
- **Pricing (as of 2026-10-29):** $1.00 per 1M input tokens, $5.00 per 1M output tokens ($0.05 per 1M cached input tokens).
- **Architecture:** Proprietary transformer architecture optimized for fast inference throughput and low error rate under test-time compute.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (desktop environment navigation): **74.2%**
- Agents' Last Exam: **60.0%** (max reasoning effort; +15 percentage points higher than GPT-5.6 Terra at medium effort)
- Terminal-Bench 4.0: **50.3%** (max effort, more than doubling predecessor's 21.5%)
- Terminal-Bench-Science 0.1: **58.3%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** (efficient Pareto frontier placement)
- MMMU-Pro (visual reasoning): **85.5%**
- Knowledge / Hallucination test suite: guessing rate dropped to 38% (down from 88% on GPT-5.6 Terra) with net accuracy improvement.

Coding:

- Terminal-Bench 4.0: **50.3%**
- Terminal-Bench-Science 0.1: **58.3%**
- Multi-step software engineering and script execution.

Long context / vision:

- 1,050,000 token context window with 128K token max generation.
- MMMU-Pro visual perception across technical blueprints, documents, and GUI application interfaces.

### Normalized scores (1–100)

- **Tool use: 84/100.** High-competency computer use and desktop navigation backed by 74.2% on OSWorld 2.1 and 60.0% on Agents' Last Exam.
- **Reasoning: 85/100.** Strong analytical reasoning and error reduction verified by an Artificial Analysis Intelligence Index of 48 and drastic cuts to hallucination rates.
- **Context window: 95/100.** Vast 1,050,000 token context window supporting extensive multi-turn interactions and 128K output generations.
- **Multimodal: 86/100.** Exceptional visual understanding validated by 85.5% on MMMU-Pro and accurate graphical UI perception.
- **Coding: 80/100.** Robust practical scripting and terminal execution evidenced by 50.3% on Terminal-Bench 4.0 and 58.3% on Terminal-Bench-Science.
- **Cost efficiency: 88/100.** Aggressively priced at $1.00/$5.00 per 1M tokens with $0.05 prompt caching, delivering frontier-adjacent performance at mid-tier costs.
- **Overall Score: 86/100.** Arithmetic mean of five quality dimensions: (84 + 85 + 95 + 86 + 80) / 5 = 86.0 → 86. Mid-tier efficiency leader offering exceptional computer use, visual reasoning, and massive context throughput.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-29
- Method: Public documentation, OpenAI announcement disclosures, and independent benchmark evaluations (Artificial Analysis, OSWorld, Terminal-Bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
