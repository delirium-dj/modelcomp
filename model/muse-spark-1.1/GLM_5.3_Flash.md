# Muse Spark 1.1 — findings by GLM 5.3 Flash

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model built for agentic tasks — the second ground-up post-Llama model; leads the field on tool use/MCP integration, with free consumer access in the Meta AI app. Closed-weight and proprietary (a reversal of Meta's Llama-era open-weights strategy).
- **Provider / access:** Meta Model API (`muse-spark-1.1`, public preview US-only, wire-compatible with OpenAI and Anthropic SDKs — Chat Completions and Responses-style); consumers free in the Meta AI app (Thinking mode); $20 free credits for new accounts; enterprises via early partner program. No Free ID on OpenCode Zen. No EU access at launch.
- **Release / knowledge:** Released 2026-07-09 (same day as GPT-5.6); knowledge cutoff not verified.
- **IDs:** `muse-spark-1.1` (Meta Model API). No Free ID on Zen.
- **Context window:** 1,000,000 tokens total (1,048,576 in API docs, verified via OpenRouter/lmmarketcap and Meta API docs) with active context management that compacts long sessions automatically.
- **Modalities:** text, image, video, audio and PDF input; text-only output; reasoning yes (Thinking mode); tool calls with zero-shot MCP generalization and parallel subagent orchestration; computer use as a first-class capability; structured output/JSON mode; built-in web search; Files API; prompt caching.
- **Pricing (as of 2026-09-24):** $1.25 / $4.25 per 1M in/out (undercuts comparable frontier models on output price); consumer free in the Meta AI app — free tier uses may carry data-usage caveats typical of Meta's consumer products.
- **Architecture:** Proprietary, closed-weight — parameter count not disclosed; succeeds the Llama line as Meta's production API offering.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1** (Meta evaluation report; vs Opus 4.8's 82.2 and GPT-5.5's 75.3 — leads the field)
- OSWorld 2.0: **14.2** (Meta evaluation report / hands-on review; hard computer use unsolved, trails Opus 4.8)
- HealthBench Professional: **59.3** (carried from 1.0; still leads Opus 4.8)
- Meta internal atomic capability suite: **67.0%** pass@1 / **82.5%** pass@20 (up from 48.1%/65.0% for 1.0)
- Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (Artificial Analysis, cited by aiapiindex.com)
- HLE: **46.2%** (Artificial Analysis, cited by aiapiindex.com)
- Artificial Analysis Intelligence Index: **53.2 / #23 of 68** (aiapiindex.com citing AA, launch-era scale)
- LMArena Elo: **1479** (LMArena dataset, cited by aiapiindex.com)
- MRCR: **54.1** at 1M window (Meta evaluation report; trails GPT-5.5's 74.0)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE: **53.3** (vendor comparison chart, cited by buildfastwithai review; vs GPT-5.5's 67.0)
- Atomic coding suite: **67.0%** pass@1 (Meta internal; gains concentrated on hardest problems)
- Coding composite: **61.5%** (whichllmmodel.com)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR **54.1** at the 1M window (as above); retrieval solid to ~400K tokens in hands-on testing, vaguer beyond; active context compaction can silently drop early constraints (buildfastwithai hands-on)

### Normalized scores (1–100)

- **Tool use: 92/100.** MCP Atlas 88.1 leads the entire field (Opus 4.8 82.2, GPT-5.5 75.3), with zero-shot MCP generalization and parallel subagents clearing the frontier reference; the very low 14.2 OSWorld 2.0 (hard computer use) and missing Terminal-Bench/Tau3 keep it under 95.
- **Reasoning: 87/100.** GPQA Diamond 89.8% is at the frontier reference and HLE 46.2% clears the 40% bar — both above the typical Flash-tier gaps; AA Index 53.2 (#23/68) is mid-frontier, capping it below 90.
- **Context window: 90/100.** 1M total tokens maps to the ≥1M tier (95–100) but the measured MRCR recall of 54.1 is far below frontier-grade retrieval, docking it 5 points.
- **Multimodal: 95/100.** Text, image, video, audio and PDF input through one API — production-ready audio input and Files API push it to the top of the 90–100 band; text-only output is the only gap.
- **Coding: 80/100.** DeepSWE 53.3 and a 67% internal pass@1 are mid-frontier; competitive frontend coding from screenshots but no SWE-bench Verified/LiveCodeBench numbers found, which caps the score.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M (AA blended $2.00) sits exactly at the ~$1.25/$4.25 = ~88 methodology reference; $20 free credits help evaluation but the API is a paid preview.
- **Overall Score: 89/100.** Mean of the five quality dims (92 + 87 + 90 + 95 + 80) / 5 = 88.8 → 89. Best-fit: tool-heavy agent stacks, MCP-based workflows and multimodal (especially audio) ingestion where cost per output token and tool reliability matter most.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Meta evaluation report and launch coverage via buildfastwithai, aiapiindex.com, OpenRouter, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark.md`, using the same headings.
