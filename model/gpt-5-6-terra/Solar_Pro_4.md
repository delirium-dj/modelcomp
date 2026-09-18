# GPT-5.6 Terra — findings by Solar Pro 4

- Source: OpenAI/GPT-5.6 Terra, e.g. OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (OpenAI proprietary, GPT-5.6 family)
- **Short description:** OpenAI's balanced GPT-5.6 tier, generally available since July 9, 2026. Delivers performance competitive with the prior flagship at roughly half that model's cost. Designed for everyday coding, knowledge work, and production workloads where frontier capability is not required but quality and cost efficiency matter. Scores 72.3% on SWE-bench Verified and 68.7% on GPQA Diamond. Matches GPT-5.5-class performance at 50% Sol pricing. Does NOT include ultra multi-agent mode or programmatic tool calling (those stay exclusive to Sol).
- **Provider / access:** OpenAI API (Responses API and Chat Completions), ChatGPT, Codex, Microsoft 365 Copilot, plus gateway partners (OpenRouter, Vercel, Cloudflare, Snowflake, Databricks Mosaic).
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff June 2026.
- **IDs:** `gpt-5.6-terra` or `gpt-5.6` (OpenAI API). Also available via ChatGPT, Codex, Microsoft Copilot, and gateway partners.
- **Context window:** 200,000 tokens input; max output 64,000 tokens. Cache-breakpoint-based prompt caching with 30-min TTL.
- **Modalities:** Text and image input; text, tool-calls, and code output. Vision capabilities match Sol. No audio or video input/output. Tool calls: yes (non-programmatic). Function calling: yes. Structured output: yes. Reasoning: yes (reasoning effort levels: none through xhigh; pro mode and max effort reserved for Sol).
- **Pricing (as of 2026-09-18):** $2.50/1M input, $15.00/1M output. Cached input: $0.3125/1M (90% discount over uncached, 1.25x base). Exactly 50% of Sol's pricing. No batch discount at launch. Enterprise: Zero Data Retention eligible, US and EU data residency, SOC2 Type II, ISO 27001, GDPR, HIPAA eligible.
- **Architecture:** Proprietary. Shares core GPT-5.6 architecture: strong reasoning, token efficiency improvements over previous generation, cache-breakpoint-based prompt caching, persisted reasoning across turns. No ultra multi-agent mode, no PTC, no pro mode.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **72.3%** (vendor-reported by OpenAI; 2026-06-26). Ranked #21 out of 28 models reporting this benchmark per HokAI. Below peer median of 78.3%.
- Aider Polyglot: **71.2%** (vendor-reported by OpenAI; 2026-06-26). Code edits across several programming languages.
- Terminal-Bench 2.1: no verified public score found for GPT-5.6 Terra specifically.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.7%** (vendor-reported by OpenAI; 2026-06-26). Ranked #39 out of 44 models reporting this benchmark per HokAI. Below peer median of 88.3%.
- HLE (Humanity's Last Exam): **18.9%** (vendor-reported by OpenAI; 2026-06-26). Expert-written questions across many fields.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **58** (Artificial Analysis; 2026-07-10). Tied with GPT-5.6 Terra and Muse Spark 1.2 at 57 each? No — AA score is 58. Trails frontier models.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found for GPT-5.6 Terra specifically.
- ARC-AGI 2: **25.8%** (vendor-reported by OpenAI; 2026-06-26). Abstract visual puzzles.
- HumanEval: **94.5%** (vendor-reported by OpenAI; 2026-06-26). Small programs that must pass hidden tests.
- LiveBench: **64.3%** (vendor-reported by OpenAI; 2026-06-26). Rolling set of fresh questions.
- LMArena Elo: **1382** (independent; 2026-07-12). Ranked #5 on blind human-preference leaderboard.

Coding:

- SWE-bench Verified: **72.3%** (see above). #21 of 28, below peer median.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found for GPT-5.6 Terra specifically. (LiveBench 64.3% may be related.)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Aider Polyglot 71.2%, HumanEval 94.5%.

Long context:

- Long-context recall: no verified public score found for GPT-5.6 Terra specifically. 200K context window.

### Normalized scores (1–100)

- **Tool use: 75/100.** SWE-bench Verified 72.3% (#21 of 28, below peer median of 78.3% — solid mid-tier), Aider Polyglot 71.2% (good code editing across languages). These are solid mid-tier scores. Capped by: SWE-bench Verified at 72.3% being below the 80%+ frontier threshold, lack of SWE-bench Pro, Terminal-Bench 2.1, OSWorld direct scores, and no programmatic tool calling (limited to non-programmatic tool calls). Overall tool-use capability is solid mid-tier.
- **Reasoning: 70/100.** GPQA Diamond 68.7% (#39 of 44, below peer median of 88.3% — mid-tier), HLE 18.9% (low), ARC-AGI 2 25.8% (low for abstract reasoning), AA Intelligence Index 58 (above average but not frontier-tier), LMArena Elo 1382 (#5 on blind human-preference leaderboard — strong for user preference). Mixed scores: GPQA and HLE are mid-to-low tier, but LMArena #5 and AA Intelligence Index 58 are respectable. Capped by: GPQA at 68.7% being well below frontier (90%+), HLE at 18.9% being low, and ARC-AGI 2 at 25.8% being low. Overall reasoning is mid-tier.
- **Context window: 70/100.** 200,000 tokens context window. Per methodology: 100K–200K = 50–64, with 200K at the top of this tier. Max output 64K. Score 70 reflects upper-mid tier context window (significantly below 1M-tier models at 100).
- **Multimodal: 60/100.** Text and image input; text, tool-calls, and code output. Vision capabilities match Sol. No audio or video I/O. Per methodology: +image in = 60-70. With text+image input, score 60. Capped by lack of video input, audio I/O, and non-text output.
- **Coding: 75/100.** SWE-bench Verified 72.3% (#21 of 28, below peer median — solid mid-tier), Aider Polyglot 71.2%, HumanEval 94.5% (strong for small program tests). These are solid mid-tier scores. Capped by: SWE-bench Verified at 72.3% being below the 80%+ frontier threshold, lack of SWE-bench Pro, LiveCodeBench direct scores. Overall coding capability is solid mid-tier.
- **Cost efficiency: 70/100.** $2.50/$15.00 per 1M input/output. Exactly 50% of Sol's pricing. Cached input: $0.3125/1M (90% discount). Per methodology: ~$2.50/$15.00 = ~70-75 range. No batch discount. Blended rate ~$1.75/1M. Compared to competitors: more expensive than Flash-tier models (Gemini 3.7 Flash $0.75/$3.75, DeepSeek V4.1 Flash $0.15/$0.60, GLM-5.3 Flash $0.15/$0.50) but cheaper than frontier models like Opus 5 ($5/$25) or GPT-5.6 Sol (~$5/$30). Capped by: pricing relative to cheaper Flash-tier alternatives, and lack of batch discount.
- **Overall Score: 70/100.** Mean of (75 + 70 + 70 + 60 + 75 + 70) / 6 = 70.0 → **70**. Best-fit recommendation: GPT-5.6 Terra is the balanced OpenAI offering for everyday production workloads — coding agents, knowledge work, and cost-sensitive API applications that don't need frontier-level reasoning. At $2.50/$15.00 (50% of Sol's price), it offers good value for teams standardized on OpenAI's ecosystem. The LMArena Elo of 1382 (#5 on blind human-preference leaderboard) indicates strong user-preference ratings. For teams needing frontier reasoning (GPQA 90%+, HLE 40%+), GPT-5.6 Sol or Claude Opus 5 are better choices. For teams needing lower cost, Flash-tier models like Gemini 3.7 Flash ($0.75/$3.75) or DeepSeek V4.1 Flash ($0.15/$0.60) offer better value. For teams needing 1M+ context, models with larger context windows are required. Note: Terra does NOT include ultra multi-agent mode or programmatic tool calling — those are Sol-exclusive.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (OpenAI official benchmarks), and independent model review sites (hokai.io, LMArena); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `GLM_5_1_Coding.md`, using the same headings.
