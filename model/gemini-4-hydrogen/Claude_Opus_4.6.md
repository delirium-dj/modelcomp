# Gemini 4 Hydrogen — findings by Claude Opus 4.6

- Source: Google DeepMind (`google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google DeepMind's high-efficiency workhorse model from the Gemini 4 family, built for rapid execution of everyday coding, interactive web development, and multi-step agentic workflows. Roughly 2.5x faster throughput than prior Flash generations. Released November 12, 2026.
- **Provider / access:** Google Gemini API, Google AI Studio, Android Studio, Google Antigravity (`google/gemini-4-hydrogen`). Cloud-only, no open weights.
- **Release / knowledge:** 2026-11-12 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-4-hydrogen` (no Free ID)
- **Context window:** 1,048,576 tokens (1M) input / 1,048,576 tokens max output via continuation — per meta.json.
- **Modalities:** Text + image + audio + video + PDF in; text out. Four configurable thinking levels: Low, Medium, High (default), xhigh.
- **Pricing (as of 2026-11-13):** $1.50/1M input, $7.50/1M output, $0.075/1M cached input.
- **Architecture:** Proprietary Google DeepMind Gemini 4 architecture. Parameter counts undisclosed. Optimized for high-throughput execution alongside deeper frontier models (Carbon/Argon) in multi-model agentic loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **57.0%** (cheating-adjusted; massive improvement over Gemini 3.8 Flash's 18.2%, DeepMind)
- SWE-sweep (agentic coding, Antigravity-CLI harness, highest reasoning effort): **13.5%** (DeepMind)
- AutomationBench-AA: **76.1%** (DeepMind)
- OSWorld-2.1 (offline subset): **77.6%** (DeepMind — computer use)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Agents' Last Exam v1.1: **71.6%** (DeepMind / modelfit.io)
- HLE-Diamond (Reasoning): **58.8%** (DeepMind)
- Artificial Analysis Intelligence Index: **51** (High thinking) / **54** (xhigh thinking) — outperforms Gemini 4 Argon (~50) at default
- GPQA Diamond: ~90% range (within Gemini 4 ecosystem, effort-dependent; specific Hydrogen standalone number not broken out)
- Chartography: **66.6%** (multimodal understanding, DeepMind)
- CritPt: no verified public score found

Coding:

- LiveCodeBench: **~78.5%** (high/xhigh settings, benchleader.com)
- Terminal-Bench 4.1: **57.0%** (also listed under tool use)
- SWE-sweep: **13.5%** (also listed under tool use)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M input / 1M output continuation confirmed. No specific MRCR/RULER/GraphWalks retrieval numbers found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 57.0% (3x improvement over predecessor), AutomationBench 76.1%, OSWorld 77.6% — exceptional breadth across agentic, automation, and computer-use tasks. The SWE-sweep 13.5% is relatively low, suggesting complex multi-file engineering isn't its strongest suit. Four thinking levels give fine-grained control. Capped by SWE-sweep and absent Toolathon scores.
- **Reasoning: 82/100.** Agents' Last Exam 71.6%, HLE-Diamond 58.8%, Intelligence Index 51-54. Strong reasoning for a high-efficiency model — outperforms Gemini 4 Argon on the Intelligence Index at default settings. Capped by HLE-Diamond trailing the top frontier models.
- **Context window: 95/100.** 1M input with 1M output via continuation — the largest output capability in the roster. Nearly unmatched for generation-heavy tasks. No retrieval benchmarks cap the score slightly.
- **Multimodal: 75/100.** Text + image + audio + video + PDF input; text-only output. Chartography 66.6% confirms solid multimodal understanding. Comprehensive input coverage. No image/audio/video generation output.
- **Coding: 78/100.** LiveCodeBench ~78.5% is solid, Terminal-Bench 57.0% shows strong terminal-based coding. The 2.5x speed advantage makes it excellent for rapid coding iteration. Capped by SWE-sweep 13.5% on complex agentic SWE tasks.
- **Cost efficiency: 72/100.** $1.50/$7.50 per 1M — mid-range pricing. More expensive than flash models but cheaper than frontier flagships. Good value given the 1M/1M context capability.
- **Overall Score: 83/100.** Mean of (85 + 82 + 95 + 75 + 78) / 5 = 83.0. A powerful high-efficiency workhorse with exceptional context capacity (1M/1M), strong agentic tool use, and 2.5x speed gains. Ideal for rapid coding iteration and multi-step workflows. Trades some deep reasoning depth for throughput.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-13
- Method: Public internet research (Google DeepMind, blog.google, modelfit.io, benchlm.ai, llmleaderboard.com, neuraltrust.ai, mashable.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 4](https://deepmind.google/technologies/gemini/)
  - [Google Blog — Gemini 4 Hydrogen announcement](https://blog.google)
  - [modelfit.io — Gemini 4 Hydrogen benchmarks](https://modelfit.io)
  - [benchlm.ai — Gemini 4 Hydrogen](https://benchlm.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
