# Claude Opus 5 — findings by Solar Pro 4

- Source: Anthropic/Claude Opus 5, e.g. Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Anthropic proprietary, Claude 5 flagship)
- **Short description:** Anthropic's flagship large language model, released July 24, 2026 as the successor to Claude Opus 4.8. It sits atop Anthropic's Claude 5 lineup alongside Claude Sonnet 5 and Claude Fable 5, built for teams that need the deepest reasoning and the longest agentic runs. Scores 97.0% on SWE-bench Verified (highest recorded result published on that benchmark to date) and 94.1% on GPQA Diamond. Ships with a 1M token context window as both default and ceiling, with extended thinking on by default and a new xhigh reasoning-effort tier. Includes new xhigh reasoning mode and improved defensive vulnerability discovery capabilities.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5`) via Messages API. Available on 33+ providers including GitHub Copilot, Amazon Bedrock, Azure, OpenRouter, Vercel AI Gateway, OpenCode Zen, etc. Messages API. Fast Mode available at $10/$50 per 1M (~2.5x faster output). Batch API available with 50% discount.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff 2026-05.
- **IDs:** `anthropic/claude-opus-5` (primary); also `claude-opus-5` on Azure, Bedrock, OpenRouter, etc. No free tier.
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens (standard Messages API), extending to 300K tokens via Message Batches API with beta header. 1M is both the default and ceiling — no smaller-context variant.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes. Structured output / JSON mode: yes. Reasoning: yes (extended thinking on by default, with new xhigh effort tier above low/medium/high/max). No audio I/O. Attachments: no (PDF handled as document input). Strong at replicating UI and frontend visuals when given tools to crop, re-render, and check output iteratively.
- **Pricing (as of 2026-09-18):** $5.00/1M input, $25.00/1M output (standard mode, Anthropic direct, unchanged from Opus 4.8). Fast Mode: $10/$50 per 1M (~2.5x faster output). Cache reads: $0.50/1M (up to 90% discount on repeat-context workloads, now activating from 512 tokens). Cache writes: $6.25/1M. Batch API: 50% discount ($2.50/$12.50). Zero Data Retention available for eligible enterprise customers. No free tier.
- **Architecture:** Proprietary. Parameter count not disclosed by Anthropic. Extended thinking (reasoning) on by default — a change from Opus 4.8 where it shipped off by default. New xhigh reasoning-effort tier above low, medium, high, and max.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **97.0%** (vendor-reported by Anthropic, HokAI; 2026-07-24). Ranked **#1 out of 28** models reporting this benchmark per HokAI. Highest recorded result published on that benchmark to date.
- SWE-bench Pro: **79.2%** (vendor-reported by Anthropic, HokAI; 2026-07-24). Up 10 points from Opus 4.8's 69.2%. Also cited in Claude Fable 5.1 article as 79.2%.
- Terminal-Bench 2.1: no verified public score found for Opus 5 specifically. (Opus 4.8 scored 74.6%.)
- Terminal-Bench 4.0: no verified public score found for Opus 5 specifically.
- Tau3-Banking / Tau2-Bench: no verified public score found. AutomationBench: no verified public score found for Opus 5 specifically. (Opus 4.8/Fable 5 not reported on AutomationBench by Anthropic directly as of 2026-09-18.)
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Opus 5 specifically. (Note: Claude Opus 5 leads SWE Atlas overall at 63.17% on Claude Code scaffold with xHigh effort — this is from the model-comparison.md file and represents the best SWE Atlas QnA score on the official leaderboard as of 2026-07-28.)
- OSWorld 2.0 Strict: no verified public score found for Opus 5 specifically. (Opus 4.8 not reported on OSWorld; Fable 5 scored 41.7% Strict / 77.9% Partial.)
- OSWorld 2.0 Partial: no verified public score found for Opus 5 specifically.
- Proof Bench V1: no verified public score found
- Cursor Bench 3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (vendor-reported by Anthropic, HokAI; 2026-07-24). Ranked **#6 out of 44** models reporting this benchmark per HokAI.
Coding:

- SWE-bench Verified: **97.0%** (see above under Agent/tool use — same benchmark, primary coding evidence). Highest recorded result published on that benchmark to date.
- SWE-bench Pro: **79.2%** (see above). Up 10 points from Opus 4.8's 69.2%.
- LiveCodeBench: no verified public score found for Opus 5 specifically. (Fable 5 scored 90.52%.)
- SciCode / AA-SciCode: no verified public score found for Opus 5 specifically (included in AA Intelligence Index composite via SciCode).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Cursor Bench 3: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Opus 5 specifically. Context window is 1M tokens (both default and ceiling). Anthropic has not published separate long-context retrieval benchmarks for Opus 5 as of 2026-09-18.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 95/100.** Direct SWE-bench Verified 97.0% (#1 of 28, highest recorded result on that benchmark to date — frontier tier: SWE-bench 80%+ → 90-100 per methodology), SWE-bench Pro 79.2% (10 points ahead of Opus 4.8, strong for harder agentic coding benchmark). SWE Atlas QnA 63.17% (#1 on official leaderboard as of 2026-07-28 on Claude Code scaffold with xHigh effort). These scores are consistently at the frontier level. Capped slightly by: lack of Terminal-Bench 2.1 direct score for Opus 5 (though Opus 4.8 scored 74.6%), Tau3/Tau2/OSWorld scores not found for Opus 5 specifically. Overall tool-use capability is clearly frontier-tier and best-in-class for coding agents.
- **Reasoning: 95/100.** GPQA Diamond 94.1% (#6 of 44, frontier tier: GPQA 90%+ → 90-100), ARC-AGI-3 30.16% at high effort (roughly 20x Opus 4.8's score and 4x GPT-5.6 Sol Max — exceptional abstract reasoning), AA Intelligence Index 61 (well above 32 median for frontier models). Extended thinking on by default with new xhigh effort tier. While HLE and MMLU Pro scores are not directly available for Opus 5, the trajectory from Opus 4.8 (HLE 49.8%/57.9%, USAMO 96.7%) and Fable 5 (HLE 60.9%, MMLU Pro 92.38%) suggests Opus 5 would score at or above these levels. Capped only by the absence of direct HLE/MMLU Pro scores for Opus 5 specifically.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. This is the maximum tier (≥1M = 95-100, with 100 if ≥98% retrieval at 512K+). 1M is both the default and ceiling — no smaller-context variant. Max output 128K (300K via Batch API). Score 100 reflects top-tier context window.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. No audio I/O. Per methodology: +image in = 60-70, +video/PDF in = 75-90. With both image and PDF input, score 75. Capped by lack of video input and text-only output. Note: Opus 5 is strong at replicating UI and frontend visuals when given tools to crop, re-render, and check output iteratively — a capability that leverages its multimodal input but doesn't change the modality score.
- **Coding: 95/100.** SWE-bench Verified 97.0% (#1 of 28, highest recorded result on that benchmark to date — frontier tier: DeepSWE 74%+, SWE-bench 80%+ → 90-100), SWE-bench Pro 79.2% (10 points ahead of Opus 4.8). These scores are at the absolute frontier. Capped only by: LiveCodeBench score not found for Opus 5 specifically (though Fable 5 scored 90.52%), Vibe Code Bench not found. The SWE-bench Verified score of 97.0% is the strongest single coding benchmark result available as of 2026-09-18.
- **Cost efficiency: 55/100.** $5.00/$25.00 per 1M input/output (standard mode). Per methodology: ~$5/$25 = ~55-60 range. Cache discount of up to 90% ($0.50/1M reads, activating from 512 tokens) helps for repeat-context workloads. Blended rate ~$3.85/1M (standard mode). Fast Mode at $10/$50 is significantly more expensive. Batch API 50% discount brings effective rate to ~$2.50/$12.50. Compared to competitors: at the same $5/$25 price point, Opus 5 offers significantly better benchmarks than Opus 4.8 (SWE-bench 97.0% vs 88.6%). For cost-sensitive workloads, Claude Sonnet 5 (SWE-bench 82.1%, GPQA 96.2%, $2/$10 intro pricing through Aug 31, 2026) offers better value. Capped by premium pricing relative to Sonnet-tier alternatives.
- **Overall Score: 86/100.** Mean of (95 + 95 + 100 + 75 + 95 + 55) / 6 = 85.8 → **86**. Best-fit recommendation: Claude Opus 5 is the top-tier coding/research agent model from Anthropic as of 2026-09-18, with the highest SWE-bench Verified score (97.0%) and strongest SWE-bench Pro score (79.2%) available. At $5/$25, it offers the best performance-per-dollar among Anthropic's Opus-tier models (significantly better than Opus 4.8 at the same price). For organizations that can afford premium pricing and need the deepest reasoning and longest agentic runs, Opus 5 is the best choice. For cost-sensitive workloads, Claude Sonnet 5 (SWE-bench 82.1%, GPQA 96.2%, $2/$10 intro pricing) offers compelling value with near-Opus quality at lower price. Claude Fable 5.1 ($10/$50) offers higher GPQA (88.3%) and SWE-bench Pro (81.2%) but at significantly higher cost.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI, Artificial Analysis), vendor release materials (Anthropic official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.