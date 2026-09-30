# Claude Opus 5.5 — findings by Claude 5.5 Opus

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5. This is a paid model only. I found no Free-tier version.
- **Short description:** Anthropic's flagship Opus model, released September 22, 2026. It is the first model in the Claude 5.5 family and replaces Claude Opus 5. Anthropic built it for long-running agentic coding, knowledge work and computer use. Anthropic says it "performs at the level of Claude Fable 5.1" on most work. Third-party hosts use different variant names: Artificial Analysis lists effort variants (low, medium, high, xhigh, max, each "with fallback"), and Cursor offers a "high thinking" variant.
- **Provider / access:**
  - Anthropic Claude API (Messages API): `claude-opus-5-5`
  - Amazon Bedrock and Claude Platform on AWS
  - Google Cloud (GA): `claude-opus-5-5`
  - OpenRouter (Chat Completions-compatible): `anthropic/claude-opus-5.5`
  - GitHub Copilot: Pro+, Max, Business and Enterprise plans
  - Cursor: `claude-opus-5-5`
  - OpenCode Zen: no ID verified. I hit the search tool limit before I could check the OpenCode Zen docs or models.dev.
- **Release / knowledge:** Released 2026-09-22 (Anthropic announcement, OpenRouter, Artificial Analysis). The Anthropic docs overview has a knowledge-cutoff column, but the cutoff value was not in the text I retrieved.
- **IDs:** `anthropic/claude-opus-5-5` (Anthropic API / Google Cloud), `anthropic/claude-opus-5.5` (OpenRouter). I found no Free ID on OpenCode Zen, and no Zen ID of any kind was verified.
- **Context window:** 1M tokens total, with 128K max output. Batch API allows up to 300K output with the `output-300k-2026-03-24` beta header. Sources: the Anthropic platform docs, Google Cloud (1,000,000 input / 128,000 output) and OpenRouter. Cursor shows a 300k default context and 1M max, with no extra charge for long context.
- **Modalities:**
  - Input: text, image and PDF (Google Cloud model card; Artificial Analysis confirms text + image input).
  - Output: text only. Text outputs are watermarked (GitHub changelog).
  - Reasoning: yes. Adaptive thinking is always on and cannot be disabled; the effort parameter controls depth.
  - Tool calls: yes, but forced tool use returns an error. It also has a computer-use tool, and the older `computer_20251124` tool is not accepted.
  - Audio and video input: no verified support.
  - JSON mode: not verified.
- **Pricing (as of 2026-09-30):** Paid.
  - $4.00 per 1M input tokens and $20.00 per 1M output tokens
  - Cache read $0.20/M; cache write $5.00/M (5-min) and $8.00/M (1h)
  - Sources: Anthropic docs, OpenRouter, Artificial Analysis
  - This is a 20% per-token cut from Opus 5 ($5/$25). There is no Free tier, so no free-tier privacy caveat applies.
- **Architecture:** Proprietary. Parameter count and architecture are undisclosed, per Artificial Analysis. No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found.
  - Related results on Terminal-Bench 4.0, a newer version: **66.4%**, Anthropic-reported at xhigh effort, ±2.6 standard error, 66 tasks (via orcarouter.ai and kingy.ai).
  - Independent Terminal-Bench 4.0 result: **59.6%** (Artificial Analysis, max effort). AA says this ties the leader, GPT-6 Astra (xhigh).
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: about **1846 Elo** on GDPval-AA v2.1. I did not find this number directly. I worked it out from kingy.ai, which puts Sonnet 5.5 at 1844 Elo, "two Elo points behind Opus 5.5". Artificial Analysis confirms Opus 5.5 leads GDPval-AA v2.1.
  - Related: AA-Briefcase v1.1 **1,822 Elo**, #1 on Artificial Analysis.
  - Related: AutomationBench **42.5%** (Anthropic table via computingforgeeks). Artificial Analysis also says it leads AutomationBench-AA.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. OSWorld 2.1 also has no verified public score for Opus 5.5.
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: **61.4%** (Artificial Analysis, max effort). This is #1; the previous best was 59.1% (Claude Fable 5.1).
- LCR / MLCR: no verified public score found. Artificial Analysis says Opus 5.5 trails the leaders on AA-LCR but gives no number in the text I retrieved.
- CritPt: no verified public score found. Artificial Analysis says it trails the leaders on CritPt, with no number given.
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1 of 206** (AA v4.3.2, max effort) and **86.9 / #2 of 210** (BenchLM).
  - AA index by effort: xhigh 56, high 54, medium 51, low 42.
- Omniscience Accuracy / Hallucination Rate: no verified public score found. Artificial Analysis says it leads AA-Omniscience but gives no values.
  Coding:
- SWE-bench Verified / SWE-Pro: SWE-bench Verified has no verified public score found. SWE-Pro is **89.9%**, from Anthropic's system card via BenchLM; it is #1 of 76 on BenchLM and #1 of 60 on llm-stats.
  - BenchLM warns that about 30% of the SWE-bench Pro public split may be broken.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis). This is #1; the previous best was 63.1% (Fable 5.1).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **74.2%** on DeepSWE v1.1 (Anthropic system card via BenchLM and orcarouter). BenchLM's best row is Muse Spark 1.3 at 75.4%. Other Anthropic-reported results:
  - SWE-bench Multilingual 93.9%
  - SWE-bench Multimodal 61.4%
  - ProgramBench 91.2%
  - FrontierCode 1.1 Main 54.4%
  - FrontierSWE v2 62.3% (via computingforgeeks)
  - BenchLM Coding category: #2 of 143
    Long context:
- No long-context retrieval results (MRCR, RULER or GraphWalks) were reported in the sources I retrieved.

### Normalized scores (1-100)

- **Tool use: 92/100.**
  - Evidence: GDPval-AA v2.1 of about 1846 Elo (derived) is above the 1750 frontier line, and it leads AutomationBench-AA and AA-Briefcase (1,822).
  - Terminal-Bench 4.0 is 59.6% (AA) or 66.4% (vendor). AA says that ties the field leader, but I can't map it directly to the TB2.1 bands.
  - Caps: no Terminal-Bench 2.1, Tau3 or OSWorld score.
- **Reasoning: 93/100.**
  - Evidence: HLE 61.4% is well above the 40% frontier line, and the AA Index of 58 is #1 of 206.
  - Caps: the index is just below the 60+ band, there is no GPQA score, and it trails on CritPt and AA-LCR.
- **Context window: 96/100.**
  - The verified 1M-token window falls in the ≥1M tier (95-100).
  - It is not scored 100 because no MRCR/RULER result at 512K+ was found.
  - Cursor defaults to 300k.
- **Multimodal: 82/100.**
  - Inputs are text, image and PDF (Google Cloud); that gives the 75-90 band. Output is text only.
  - Strong vision and document claims, plus SWE-bench Multimodal 61.4% (#1 on BenchLM), place it mid-to-upper in the band.
  - No audio or video input, and no non-text output.
- **Coding: 96/100.**
  - Evidence: DeepSWE 74.2% meets the 74% frontier line and SciCode 66.9% beats the 55% line. It is also #1 on SWE-bench Pro (89.9%) and posts 93.9% on SWE-bench Multilingual.
  - Caps: no SWE-bench Verified, LiveCodeBench or TB2.1 score. Most of the coding numbers are vendor-reported and haven't been checked by third parties.
- **Cost efficiency: 55/100.**
  - At $4/$20 per 1M tokens, it sits between the $3/$15 (~60) and $10/$50 (~30) anchors.
  - The cheap $0.20 cache reads and AA's Pareto-frontier cost per task help.
  - Max effort is very verbose: about 119k output tokens per AA index task.
- **Overall Score: 91.8/100.**
  - Calculation: (92 + 93 + 96 + 82 + 96) / 5 = 91.8.
  - Best fit: long-running agentic coding and knowledge-work agents where top capability matters more than per-token price. Use medium or high effort for cost-sensitive loops.

---

## Signature

- Provided by: **Claude 5.5 Opus (anthropic/claude-opus-5-5)** — 2026-09-30
- Method:
  - Fresh public web search on 2026-09-30. Sources: Anthropic announcement and platform docs, Artificial Analysis model pages and article, BenchLM, llm-stats, OpenRouter, Google Cloud, AWS, GitHub changelog, Cursor docs, and secondary coverage (kingy.ai, computingforgeeks, orcarouter, officechai).
  - I reached the search-tool limit before checking OpenCode Zen, models.dev, SWE-bench.com and LiveCodeBench directly.
  - Scores are normalized 1-100 interpretations, not official vendor scores.
  - Disclosure: this agent is made by the same vendor as the model it evaluates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
