# Claude Opus 5 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for deep reasoning and long autonomous coding/research runs, released July 24, 2026. Near-Fable-5 intelligence at half the price. Features an effort dial (low/medium/high/xhigh/max) and strong self-verification behavior. Most aligned Claude model at launch (2.30 misalignment score).
- **Provider / access:** Claude API (`claude-opus-5`); Amazon Bedrock; Google Cloud Vertex AI; Microsoft Foundry. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-07-24 release; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-opus-5` (Claude API). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output.
- **Modalities:** Text, image, PDF in; text out. Reasoning yes (adaptive thinking with effort levels: low, medium, high, xhigh, max). Tool calls supported. Computer use supported.
- **Pricing (as of 2026-10-10):** $5 in / $25 out / $0.50 cached (10% multiplier) per 1M tokens. Batch: $2.50/$12.50. Same price as predecessor Opus 4.8.
- **Architecture:** Proprietary; parameter count not disclosed. Effort-based adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1: **43.3%** (Anthropic; more than double Opus 4.8's 18.7%; leads Fable 5's 33.7%)
- AutomationBench (Zapier): **~1.5x next-best model** pass rate; 100% on churn-prevention task (Anthropic/Zapier)
- OSWorld 2.0 (computer use): outperforms every model at any given cost; surpasses Fable 5's best at ~1/3 the cost (Anthropic)
- GDPval-AA v2: state-of-the-art at launch (Anthropic; exact Elo not published in text form)
- DeepSearchQA: strong score reported (Anthropic chart)

Reasoning / knowledge:

- ARC-AGI 3: **30.2%** (Anthropic/ARC Prize Foundation; ~4x GPT-5.6 Sol's 7.8%; ~20x Opus 4.8's 1.5% — standout result)
- GPQA Diamond: **93.4%** (Fei3/AGIRanker)
- HLE (Humanity's Last Exam): **56.3%** (Fei3)
- HLE (with tools): **63.6%** (Fei3)
- JobBench: **65.7%** (Fei3)

Coding:

- SWE-bench Pro: **79.2%** (Anthropic system card)
- SWE-bench Verified: **97.0%** (Vals AI leaderboard, September 2026, Mini-SWE-agent harness) / **76.0%** (Prompt20/model card — different harness)
- CursorBench 3.2: within 0.5% of Fable 5 at max effort, at half the cost (Anthropic/Cursor)
- FrontierCode 1.1: approaches Fable-level performance at half the cost (Cognition/Devin)
- AA Coding Agent Index: strong score (Anthropic chart)
- Terminal-Bench 2.1: no specific score found for Opus 5

Long context:

- No specific MRCR or long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier-Bench v0.1 at 43.3% more than doubles Opus 4.8 and leads Fable 5. AutomationBench ~1.5x next-best. OSWorld 2.0 leads all models at any cost point. GDPval-AA state-of-the-art. The breadth and depth of agentic/tool-use performance is exceptional. Capped only by the absence of Terminal-Bench 2.1/4.0 scores.
- **Reasoning: 93/100.** ARC-AGI 3 at 30.2% is a standout result — 4x the next-best model on a benchmark designed to resist memorization. GPQA Diamond 93.4% is outstanding. HLE 56.3% (63.6% with tools) is strong. The ARC-AGI 3 result alone is one of the strongest reasoning demonstrations reported. Capped only by the absence of some benchmark numbers in text form.
- **Context window: 88/100.** 1M-token context with 128K max output. Standard frontier-class window. No long-context premium. No specific MRCR retrieval scores published. Solid but not best-in-class (vs. Gemini 3.1 Pro's 2M).
- **Multimodal: 65/100.** Text, image, PDF in; text out. No audio or video input. Strong visual output generation (3D, wind tunnel, cell artifacts). OSWorld computer use. Capped by limited input modalities (no audio/video) compared to Gemini models.
- **Coding: 93/100.** SWE-bench Pro 79.2%, SWE-bench Verified 97% (Vals AI), Frontier-Bench 43.3%, CursorBench within 0.5% of Fable 5. FrontierCode approaches Fable-level. The coding performance across multiple benchmarks is exceptional, with particular strength in debugging and root-cause analysis. Capped by the variance in SWE-bench Verified scores across harnesses.
- **Cost efficiency: 52/100.** $5/$25 per 1M tokens is expensive — among the priciest models. Same price as Opus 4.8. Half of Fable 5's $10/$50, but still premium. The effort dial helps optimize cost per task, and Anthropic argues performance-per-dollar matters more than price-per-token. However, at ~$5.98 per Intelligence Index task (Artificial Analysis for Opus-class), it is not suitable for high-volume cost-sensitive workloads.
- **Overall Score: 86/100.** Mean of five quality dims: (92 + 93 + 88 + 65 + 93) / 5 = 86.2, rounded to 86. A frontier-class model with standout reasoning (ARC-AGI 3), exceptional coding (Frontier-Bench, SWE-bench), and strong agentic capability. Best fit for deep autonomous coding, research, and complex multi-step tasks where quality matters more than cost. The premium price and limited input modalities are the main trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcements, Vellum, Morph, Fei3, AGIRanker, Vals AI, Prompt20, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
