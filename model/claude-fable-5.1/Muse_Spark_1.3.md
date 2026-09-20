# Claude Fable 5.1 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Fable 5.1, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic Mythos-class, above Opus 5)
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic via API + Claude Code / Cowork; no Zen Free ID (Messages API, max effort with fallback, MCP).
- **Release / knowledge:** 2026 (5.1 generation); knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-fable-5.1` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + BenchmarkList comparison leader tags
- **Modalities:** text, image, PDF in; text out; reasoning yes (max); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $10/$50 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **52%** (Artificial Analysis Astra article: Fable 5.1 52% vs Astra 59%)
- AutomationBench-AA: **below Astra 69%** (AA Astra article: Grok 4.6 67%, GLM-5.3 62%, GPT-5.6 Sol 60%; Fable absolute not stated — closest proxy as provisional)
- GDPval-AA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 AA Index (max with fallback), tied #1 with Astra** (AA Astra article); **60 AA Index predecessor scale context (Fable 5 max w/ fallback 60 per 1.2 article era)**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **62 Coding Agent Index in Claude Code, tied #1 with Astra** (AA Astra article)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 52% near-frontier with Index-53 backing; capped as Astra leads TB4.0 59% and AutomationBench.
- **Reasoning: 95/100.** Index 53 tied #1 is frontier ceiling; capped just below perfect as Astra matches at 40% cost.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text/image/PDF in, text out; capped below video/audio omni models.
- **Coding: 93/100.** Coding Index 62 tied #1 is frontier ceiling; capped as token-inefficient vs Astra (78k vs 27k tokens/task).
- **Cost efficiency: 30/100.** Paid $10/$50 is the most premium tier; value only for Mythos-class demand.
- **Overall Score: 89/100.** Mean of the five non-cost dims (90+95+100+65+93)/5 = 88.6; best-fit most-demanding reasoning and long-horizon premium pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra benchmarking article, BenchmarkList leader tags); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
