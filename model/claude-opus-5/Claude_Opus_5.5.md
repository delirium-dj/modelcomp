# Claude Opus 5 — findings by Claude Opus 5.5 (anthropic/claude-opus-5.5)

- Source: Anthropic/Claude Opus 5 (`claude-opus-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid only; no free tier found)
- **Short description:** Anthropic's first Opus-tier model in the fifth generation. Anthropic describes it as "a step-change improvement over Claude Opus 4.8, with the largest gains in deep reasoning, agentic and long-horizon tasks, and test-time compute scaling." Its main uses are agentic coding and enterprise knowledge work. Alias flag: this is not Claude Opus 5.5 (`claude-opus-5-5`), which is a separate, later model. There is also a Fast-mode variant, which has "identical capabilities with higher output speed at 2x pricing relative to regular Opus 5."
- **Provider / access:** Claude API (`claude-opus-5`), AWS Bedrock (`anthropic.claude-opus-5`), Claude Platform on AWS, and Google Cloud (`claude-opus-5`). OpenRouter lists it as `anthropic/claude-opus-5`. Native API is Anthropic Messages (not Chat Completions or Responses). OpenAI-compatible Chat Completions is available through routers such as Requesty and OpenRouter. OpenCode Zen: I found no verified listing.
- **Release / knowledge:** 2026-07-24 (OpenRouter lists "Released Jul 24, 2026"). Knowledge cutoff: no verified public source found.
- **IDs:** `anthropic/claude-opus-5`. I found no verified Free ID on OpenCode Zen.
- **Context window:** 1M tokens total (the default and the maximum, with no smaller variant) and 128k max output tokens, with thinking on by default. Verified in Anthropic's official docs ("What's new in Claude Opus 5").
- **Modalities:** Text and image input, text output. AWS describes improvements in "agentic coding, knowledge work, visual understanding, and long-running tasks". Reasoning: yes, thinking is on by default. Requesty's Bedrock page lists Vision, Reasoning, Tool calling, Caching, Web search, JSON schema, Computer use. It also lists "Image generation," which is not corroborated and not counted. PDF input: I found no verified Opus 5–specific source.
- **Pricing (as of 2026-09-30):** Paid. $5 per 1M input tokens and $25 per 1M output tokens, unchanged from Opus 4.8. Cache write is $6.25/1M and cache read is $0.50/1M. Free tier: none, so there is no free-tier privacy caveat. Bedrock offers zero data retention (ZDR) by default.
- **Architecture:** Proprietary, closed weights. Parameter count and MoE status: no verified public source found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (adaptive reasoning, max effort; run by Artificial Analysis with the Terminus 2 harness; secondary source morphllm.com, which says it is 0.4 points behind GPT-5.6 Sol)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (Elo not published). Anthropic's qualitative claim: "new state-of-the-art" on Frontier-Bench and GDPval-AA.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. Other results, all without numbers: Zapier AutomationBench pass rate is "roughly 1.5x the next-best model for the same cost per task", and on OSWorld 2.0 it is "surpassing Fable 5's best result at just over a third of the cost".
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **50.8 / rank not found** (Requesty model page quoting "Intelligence Index 50.8"; secondary source, not confirmed on AA directly). BenchLM: no verified public score found. Other: ARC-AGI 3 30.2%, versus 7.8% for the next best (per Vellum).
- Omniscience Accuracy / Hallucination Rate: no verified public score found / no verified public score found
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found ("Opus 5 has no published SWE-bench number")
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **Frontier-Bench v0.1 43.3%** (vs Fable 5 at 33.7%; Vellum, citing Anthropic). **FrontierCode v1.1: 53.4% main / 63.6% extended** at medium effort (SitePoint). **CursorBench:** within half a percent of Fable 5 at max effort, no absolute number found. **CodeRabbit code review:** 39.3% actionable-comment precision vs 35.2% for the baseline, but 55.2% vs 61.1% of known issues caught. DeepSWE: no verified public score found.
  Long context:
- No long-context retrieval reported (no MRCR, RULER or GraphWalks score found)

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 2.1 at 89.1% (AA, Terminus 2) is above the ~88% frontier threshold. Anthropic claims state-of-the-art on GDPval-AA and leadership on OSWorld 2.0 and AutomationBench, but without published numbers. Capped by the missing Tau3 score and GDPval Elo.
- **Reasoning: 80/100.** AA Intelligence Index is 50.8 (secondary source), below the 60+ frontier band. ARC-AGI 3 is strong at 30.2%. Capped by no verified GPQA, HLE or CritPt scores and an Index below 60.
- **Context window: 95/100.** Anthropic docs verify 1M total with 128k output, which puts it in the ≥1M tier. It does not get 100 because no MRCR or RULER retrieval score at 512K+ was found.
- **Multimodal: 65/100.** Image input ("visual understanding," Vision) and text output. PDF, video and audio input were not verified for this exact model, so the score stays in the image-input band.
- **Coding: 90/100.** Terminal-Bench 2.1 at 89.1% (≥85% frontier), plus state-of-the-art on Frontier-Bench v0.1 (43.3%) and FrontierCode v1.1 at 63.6% extended. Capped by no SWE-bench Verified, LiveCodeBench, SciCode or DeepSWE score.
- **Cost efficiency: 51/100.** Paid at $5/$25 per 1M, interpolated between $3/$15 (~60) and $10/$50 (~30). Cached input at $0.50/1M helps agent workloads.
- **Overall Score: 84.4/100.** Calculation: (92+80+95+65+90)/5 = 84.4. Best fit: frontier-grade long-horizon agentic coding and terminal/computer-use work with a 1M context window, for teams that can pay Opus-tier prices.

---

## Signature

- Provided by: **Claude Opus 5.5 (anthropic/claude-Opus-5.5)** — 2026-09-30
- Method: Fresh public web research, using a limited number of searches before the tool hit its usage limit. Sources were Anthropic's docs and news, the AWS blog, OpenRouter, Requesty, Sim AI, Vellum, SitePoint, morphllm, CodeRabbit and computingforgeeks. I could not open Artificial Analysis, BenchLM, models.dev or OpenCode Zen directly, so AA-derived numbers come from secondary sources. Conflict-of-interest note: an Anthropic model is rating an Anthropic model. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
