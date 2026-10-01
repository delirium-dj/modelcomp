# Claude Haiku 4.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Haiku 4.5 (`claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest, most cost-efficient Claude 4-series model. Matches Claude Sonnet 4 on coding, computer use, and agentic workflows at roughly a third of the cost and 2x+ speed; built for sub-agents, parallel execution, and high-volume production work.
- **Provider / access:** Anthropic Claude API (`claude-haiku-4-5`, Messages API) plus Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; OpenCode Zen `opencode/claude-haiku-4.5`. Messages API (Anthropic-native); OpenAI-compatible routing via third parties.
- **Release / knowledge:** Released 2025-10-15 (Anthropic newsroom + platform docs). Reliable knowledge cutoff Feb 2025; training data cutoff Jul 2025 (per platform.claude.com model table).
- **IDs:** `claude-haiku-4-5` (Anthropic API); `opencode/claude-haiku-4.5` (Zen catalogue / meta.json)
- **Context window:** 200,000 total tokens with 64,000 max output — verified via platform.claude.com docs model table (Haiku 4.5 row: Context 200K, Max output 64K)
- **Modalities:** Text and images in; text out; extended thinking (reasoning, no adaptive effort levels); tool calls yes; structured/JSON output supported
- **Pricing (as of 2026-10-01):** Paid: $1.00 per 1M input / $5.00 per 1M output; 5m cache write $1.25 / 1h cache write $2.00 / cache read $0.10 per 1M; Batch API 50% off input and output (per platform.claude.com pricing table). No $0 Zen free tier — scored on paid pricing.
- **Architecture:** Proprietary (undisclosed parameters; ASL-2 safety classification)

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **50.7%** (ai-stats.phaseo.app model page, Top benchmark results for anthropic/claude-haiku-4-5; vendor method: official OSWorld-Verified framework, 100 max steps, averaged across 4 runs, 128K total thinking budget, 2K per-step)
- Terminal-Bench 2.1: **41.75%** with thinking (Anthropic "Introducing Claude Haiku 4.5" newsroom: Terminus 2 default agent framework, XML parser, 5 runs with 32K thinking budget, n-attempts=1; 40.21% without thinking over 6 runs)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **73%** (aireleasetracker.com model page, tracked benchmark scores table, vendor-published at release; benchgen.com also lists GPQA-tracked vendor score)
- AIME 2025: **80.7%** (ai-stats.phaseo.app Top benchmark results #93; vendor method: average over 10 runs, pass@1 over 16 trials, default sampling, 128K thinking budget)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **17** (artificialanalysis.ai model page Claude 4.5 Haiku Reasoning, Intelligence Index v4.3.2 composite over 10 evals incl. Terminal-Bench 4.0, SciCode, HLE, CritPt, AA-Omniscience, AA-LCR; below peer median 25)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **73.3%** on SWE-bench Verified (Anthropic "Introducing Claude Haiku 4.5" + claude.com/haiku pages; method: simple scaffold with bash + file-edit string replacements, averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling, full 500-problem dataset)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 200K context and 64K max output are documented ceilings only (platform.claude.com docs)

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 50.7% exceeding Sonnet 4 plus Sonnet-4-level agent-task parity per Anthropic; capped by Terminal-Bench 41.75% (below 45-60% mid band) and missing Tau/GDPval/Claw coverage.
- **Reasoning: 65/100.** GPQA Diamond 73% and AIME 2025 80.7% show solid mid-tier reasoning; capped by AA Intelligence Index 17 (below peer median 25) and missing HLE/LCR/CritPt.
- **Context window: 70/100.** 200K total / 64K max output per platform docs maps to the 200K = 70 tier; no measured long-context retrieval at-limit.
- **Multimodal: 65/100.** Text + image in to text out per platform docs fits the +image-in 60-70 band; no video/PDF/audio in or non-text out found.
- **Coding: 78/100.** SWE-bench Verified 73.3% matching Sonnet 4 (one of the world's best coding scores at this price); capped by Terminal-Bench 41.75% and missing LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 85/100.** Paid $1.00/$5.00 per 1M (plus $0.10 cache-read / 50% batch) sits between the $1.25/$4.25 ~88 tier and the $3/$15 ~60 tier; no $0 free tier.
- **Overall Score: 69/100.** Mean of the five quality dims (68+65+70+65+78)/5 = 69.2; best fit as low-cost coding sub-agent / parallel executor, escalate to Sonnet/Opus for frontier reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Anthropic newsroom 2025-10-15, platform.claude.com Haiku 4.5 docs table, claude.com/haiku page, benchgen.com, llm-stats.com, aireleasetracker.com, ai-stats.phaseo.app, artificialanalysis.ai model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
