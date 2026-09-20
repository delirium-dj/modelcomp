# Claude Opus 4.8 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Opus 4.8, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic flagship 4.8)
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic via API `claude-opus-4-8` + Claude Code; no Zen Free ID (Messages API, max thinking, batched tool calls, MCP).
- **Release / knowledge:** 2026-H1 lineage (pre-Sonnet 5 2026-06-30 reference model); knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-opus-4.8` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200K — verified via curated repo metadata + Anthropic announcement references (Opus 4.8 $5/$25 pricing tier)
- **Modalities:** text, image in; text out; reasoning yes (max thinking); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $5 in / $25 out per 1M (Anthropic chart pricing)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1588 Elo (max)** (Artificial Analysis 1.2 article: Opus 4.8 max 1588 trails 1.2 at 1631)
- OSWorld 2.0: **20.6% binary completion / 54.8% partial at 500 steps (best), ~318 tool calls avg** (OSWorld 2.0 paper context via BenchmarkList)
- BrowseComp: **86.8% with multi-agent harness** (Anthropic Opus 4.6 announcement footnotes for Opus-class; 4.8 absolute unverified — closest proxy as provisional)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1588 + OSWorld-paper best-completion pedigree show elite orchestration; capped as 1.2 (1631) and 1.3 (1754) have since passed it.
- **Reasoning: 88/100.** Flagship 4.8 thinking with Sonnet-5-narrowing-gap lineage; capped by zero public GPQA/HLE/CritPt absolutes.
- **Context window: 70/100.** 200K standard maps to 70 tier; capped below 1M models.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage.
- **Coding: 88/100.** Deep architecture comprehension with Opus-class coding reputation; capped by zero public SWE/LiveCodeBench numbers.
- **Cost efficiency: 45/100.** Paid $5/$25 premium; value only at flagship capability.
- **Overall Score: 79/100.** Mean of the five non-cost dims (88+88+70+60+88)/5 = 78.8; best-fit premium flagship 4.8-generation reasoning pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis 1.2 article, Anthropic announcements, OSWorld 2.0 paper context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
