# Muse Spark 1.2 Free — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.2 Free (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Meta "Contributor Free" tier of Muse Spark 1.2)
- **Short description:** Meta's August 2026 reasoning model for complex agentic tasks, distributed through OpenCode Zen as a contributor tier. It is the direct predecessor of Muse Spark 1.3 and sits within a few points of it on most evaluations — the main difference is a weaker coding/reasoning profile and the contributor data terms.
- **Provider / access:** OpenCode Zen contributor-free ID (OpenAI-compatible endpoint); the paid model is $1.25/$4.25 per 1M on Meta's own API. Zen's privacy page states the contributor tier trades "heavily discounted token pricing in exchange for permission to use your prompts and completions to train future Meta models" — that is the explicit price of the free tier.
- **Release / knowledge:** Released 2026-08-05. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen); paid id `meta/muse-spark-1.2`.
- **Context window:** 1,000,000 tokens (trackers list 1,048,576 with a 131,072-token output ceiling for the sibling 1.3 release; 1.2's output cap is not separately documented).
- **Modalities:** text, image, video, file and audio input with text output; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** **Free** on the Zen contributor tier; paid list price is $1.25 / 1M in and $4.25 / 1M out. Third-party cost analysis (nerdbot, 2026-08-12) framed 1.2 as costing about 13× DeepSeek-V4-Flash per completed task for a five-point edge — a useful reminder that "free" here is paid for in training data, not dollars.
- **Architecture:** proprietary (API access only); no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Terminal-Bench 2.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Positioning evidence: Meta markets 1.2 for complex agentic tasks and Artificial Analysis lists it at an Intelligence Index of **57** (cited in a Gemini 3.7 Flash comparison), but no agentic-harness score was published.

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Epoch AI via Model Beat)
- HLE: **45.5%** (Epoch AI via Model Beat)
- SimpleBench: **74.5%** — common-sense trick questions (Epoch AI via Model Beat)
- SimpleQA Verified: **60.3%**; WeirdML: **60.3%** (Epoch AI via Model Beat)
- Artificial Analysis Intelligence Index: **57** (95th percentile framing is not applied to 1.2; the tracker's Epoch-derived percentile is 80th overall)
- CritPt / LCR / MLCR: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (SimpleQA Verified 60.3% is the closest proxy)

Coding:

- SciCode: **57.4%** (Epoch AI via Model Beat)
- WebDev Arena: **1534 Elo** (Epoch AI via Model Beat)
- Coding index: **84th percentile** of tracked models (Epoch AI via Model Beat)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published for the 1M window; recall at depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 85/100.** Positioned and structured for agentic work with tool calling and a 1M window, and an AA Intelligence Index of 57; capped hard by the complete absence of any Terminal-Bench, Tau3, GDPval or Claw result.
- **Reasoning: 90/100.** GPQA Diamond 90.4%, HLE 45.5%, SimpleBench 74.5% and WeirdML 60.3% form a consistently strong reasoning profile; missing CritPt/LCR numbers keep it just short of the 1.3 tier.
- **Context window: 95/100.** 1,000,000 tokens with multimodal ingestion and a large output allowance; no recall-at-depth evidence.
- **Multimodal: 88/100.** Text, image, video, file and audio input with text output; no media generation and no published vision benchmark of its own.
- **Coding: 88/100.** SciCode 57.4%, WebDev Arena 1534 Elo and an 84th-percentile coding index are strong; the lack of SWE-bench/DeepSWE results caps it below the 1.3 tier.
- **Cost efficiency: 100/100.** $0 through the Zen contributor tier; the real cost is that prompts and completions train future Meta models.
- **Overall Score: 91/100.** (85 + 90 + 95 + 88 + 88 + 100) / 6 = 91.0 → **91**. Best fit: free agentic/reasoning workloads that can tolerate contributor data terms and need a 1M multimodal window.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI figures via Model Beat, Artificial Analysis index citations, OpenCode Zen privacy page, third-party cost analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.