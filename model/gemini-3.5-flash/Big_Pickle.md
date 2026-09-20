# Gemini 3.5 Flash — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 agentic-era Flash flagship — "frontier intelligence at Flash latency," beating its own Gemini 3.1 Pro on coding and agentic benchmarks at roughly 4x speed and well under half the price. Optimized for sub-agent deployment, multi-step workflows and long-horizon tasks.
- **Provider / access:** Gemini API (`gemini-3.5-flash`), Google AI Studio, Vertex AI (`vertex/gemini-3.5-flash`); proprietary.
- **Release / knowledge:** GA 2026-05-19; lineup updates (3.5 Flash Lite, Cyber) July 2026.
- **IDs:** `gemini-3.5-flash` (Google; proprietary).
- **Context window:** 1,000,000 tokens; max output 65,536–66,000 tokens.
- **Modalities:** text, image, video, file inputs; text output; reasoning (always-on or switchable), tool calling, web search, caching, JSON-mode and computer-use capability flags.
- **Pricing (as of 2026-09-20):** $1.50 in / $9.00 out per 1M (Vertex/Requesty/Google list); cached input $0.15 per 1M (cache write $1.58 per 1M).
- **Architecture:** Proprietary Gemini-family model (undisclosed); ~4x speed vs comparable frontier models per Google's framing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google evals; vs 3.1 Pro's 70.3%).
- MCP Atlas: **83.6%** (Google; +5.4 vs 3.1 Pro).
- OSWorld-Verified: **78.4%** (+2.2); Toolathlon: **56.5%** (+7.1) (Google).
- Finance Agent v2: **57.9%** — largest single launch-suite delta (+14.9 vs 3.1 Pro); Vals ranks #7/57. Macquarie Bank pilots it on 100+ page financial docs; Ramp uses it for OCR of messy invoices.
- GDPval-AA (Elo): **1,656** (Google; +342 vs 3.1 Pro).
- HAL / Cyber / APEX: **no verified public score found** (Cyber capability is a separate 3.5-tuned variant).

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (Artificial Analysis via requesty) / **92.7%** (#14/131 Vals GPQA board via BenchLeader).
- HLE: **40.2%** (Google; trails 3.1 Pro's 44.4%); ARC-AGI-2: **72.1%** (trails 3.1 Pro's 77.1%).
- MMLU Pro #10/138 (Vals); Intelligence Index 52.0 (AA).

Coding:

- SWE-bench Pro (Public): **55.1%** (Google; +0.9 vs 3.1 Pro).
- Coding Index: **70.1%** (AA composite incl. LiveCodeBench, SciCode, Terminal-Bench).
- LiveCodeBench #12/143 (Vals); SWE-bench #28/88 (Vals).

Long context:

- 1M window; MRCR v2 @128K lags 3.1 Pro by 7.6 pts (Google) — documented speed/knowledge tradeoff.
- MRCR / RULER ranked rows: Vals lists none for this release.

Multimodal:

- MMMU-Pro: +3.1 vs 3.1 Pro (Google); CharXiv Reasoning: **84.2%** (+0.9); Vals MMMU Pro #8/93.
- Native text/image/video/file intake confirmed (Vals input modality flags).

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 83.6%, top-ranked Finance Agent v2, OSWorld 78.4% and GDPval 1,656 make it the agentic Flash; not yet at 3.8/3.7-class terminal scores.
- **Reasoning: 87/100.** GPQA 92.2–92.7% is strong; HLE 40.2% and ARC-AGI-2 72.1% sit below Pro/Claude tier.
- **Context window: 82/100.** 1M window confirmed; MRCR @128K regression vs 3.1 Pro is the documented weakness.
- **Multimodal: 85/100.** MMMU-Pro gain over 3.1 Pro plus 84.2 CharXiv Reasoning; solid omni-input (text/image/video).
- **Coding: 84/100.** SWE-bench Pro 55.1% and Coding Index 70.1% are solid Flash-class coding; behind the Anthropic and GPT-5.6 frontier.
- **Cost efficiency: 82/100.** $1.50/$9.00 with $0.15 cache reads and ~4x speed — strong value per token at the Flash tier.
- **Overall Score: 85/100.** Mean of the five quality dims (86+87+82+85+84)/5 = 84.8 → 85. The agentic-era Flash that set the bar for speed-vs-frontier capability — until 3.6/3.7/3.8 iterations.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (llm-stats launch write-up citing Google's evals methodology, requesty/Vertex pricing and AA scores, Vals model page, BenchLeader GPQA board); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.