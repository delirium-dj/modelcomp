# GPT-5.6 Luna — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest and most affordable GPT-5.6 tier (nano-class), for cost-sensitive high-volume workloads. Top use case is extraction, classification, and routed high-throughput automation with tool use.
- **Provider / access:** OpenAI API + ChatGPT Work + Codex (`gpt-5.6-luna`); Responses API; effort levels none/low/medium (default)/high/xhigh/max.
- **Release / knowledge:** 2026-06-26 preview, 2026-07-09 GA; price cut 2026-07-30; knowledge cutoff 2026-02-16 (per API docs).
- **IDs:** `openai/gpt-5.6-luna` (state explicitly if no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens (1.1M reported by tracker), 128K max output — verified via API docs and LLM Stats (July-Sept 2026).
- **Modalities:** text/image in; text out; reasoning yes (none through max); tool calls yes (multi-step workflows, browsing, code execution); JSON mode yes (structured outputs).
- **Pricing (as of 2026-09-19):** $0.20 / $1.20 per 1M input/output tokens, cached input $0.02, cache writes 1.25x input; paid tier only ($). Was $1/$6 at launch, cut 80% on 2026-07-30.
- **Architecture:** proprietary (vendor discloses token-efficiency training with Sol-assisted kernels, no params/license published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI launch table 2026-07-09 vendor run; vs Sol 88.8%, GPT-5.5 85.6%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1591.8 Elo** (OpenAI launch table 2026-07-09; vs GPT-5.5 1493.7, Fable 5 1759.6)
- Agents' Last Exam (long professional workflows): **50.3%** (OpenAI launch table; vs Fable 5 40.5%, GPT-5.5 46.9%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: **53.4%** (OpenAI launch table; vs GPT-5.5 55.6%); BrowseComp: **83.3%** (OpenAI launch table; vs 5.5 84.4%); OSWorld 2.0: **45.6%** (OpenAI launch table; vs 5.5 47.5%)
- Management Consulting Tasks (internal): **35.4%** (OpenAI launch table); AutomationBench: **14.9%** (OpenAI launch table)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI launch table 2026-07-09; vs 5.5 93.6%)
- HLE: **no verified public score found** (closest proxy: Agents' Last Exam 50.3% above)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.2 v4.1 (vendor AA run) / 51 max (AA pre-release) / 38 v4.3 max** (OpenAI + AA July-Sept 2026; vs 5.5 54.8)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- FrontierMath Tier 1-3 v2: **78.6%** / Tier 4 v2: **58.5%** (OpenAI launch table); Big Finance Bench: **36%** (OpenAI launch table; vs 5.5 49%)

Coding:

- SWE-bench Pro: **62.7%** (OpenAI launch table 2026-07-09; vs 5.5 59.4%, Sol 64.6%)
- SWE-bench Verified: **no verified public score found** (use Pro 62.7% as primary)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 67.2%** (OpenAI launch table); **AA Coding Agent Index 74.6** (OpenAI/AA; vs 5.5 76.4, Opus 4.8 72.5)

Long context:

- OpenAI MRCR v2 8-needle 256K-512K **41.3%**, 512K-1M **41.3%** (OpenAI launch table; vs 5.5 81.5%/74.0% — marked weakness); GraphWalks BFS 1M F1 **51.2%** (OpenAI launch table; vs 5.5 45.4%); no verified RULER score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.1 84.7% plus BrowseComp 83.3% and Agents' Last Exam 50.3% (beats Fable) show capable volume agents; capped by Toolathlon 53.4% and OSWorld 45.6% below 5.5.
- **Reasoning: 79/100.** GPQA 92.3% plus FrontierMath 78.6%/58.5% and Agents' Exam 50.3% show solid reasoning at nano price; capped by Big Finance 36% well below 5.5 49%.
- **Context window: 72/100.** 1M window keeps the tier, but MRCR 41.3% at 256K+ is a marked drop from 5.5 81.5%/74%; capped by weak measured long recall despite GraphWalks 51.2% at 1M.
- **Multimodal: 76/100.** Text+image in with tool-driven BrowseComp/BenchCAD-class workflows implies adequate vision-text; capped by text-only output and no verified MMMU/CharXiv figure for Luna.
- **Coding: 80/100.** SWE-Pro 62.7% beats 5.5 plus DeepSWE 67.2% and Coding Index 74.6 beats Opus 4.8 show real code ability; capped by TB 84.7% below Sol 88.8% and no Verified/LiveCodeBench figure.
- **Cost efficiency: 95/100.** $0.20/$1.20 at $0.21/index-task (~6 cents per task vs frontier, 99% cheaper than Fable on Agents' Exam) is elite paid value; capped below $0 free (100 only).
- **Overall Score: 77/100.** Mean of the five non-cost dims (78+79+72+76+80)/5 = 77.0; best-fit high-volume routed automation where throughput and cost per success dominate.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-19
- Method: public internet research (OpenAI GPT-5.6 launch + price update July 2026, API docs, Artificial Analysis July 2026, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
