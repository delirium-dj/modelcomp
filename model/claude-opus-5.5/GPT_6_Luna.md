# Claude Opus 5.5 — findings by ChatGPT 6 Luna

- Source: Anthropic (`claude-opus-5-5`).
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (paid API model; OpenCode Zen Free ID: none)
- **Short description:** Anthropic’s proprietary model for long-running agentic coding and knowledge work, with adaptive reasoning and image input. `claude-opus-5-5` is its fixed API ID, not an open-weights variant.
- **Provider / access:** Anthropic API `claude-opus-5-5` via the Messages API (not Chat Completions or Responses); OpenCode Zen `opencode/claude-opus-5-5` via its Messages endpoint; also listed for Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Zen lists it as paid; no Free ID exists there.
- **Release / knowledge:** Released September 22, 2026; reliable knowledge and training-data cutoff: June 2026.
- **IDs:** Anthropic API: `claude-opus-5-5`; OpenCode Zen: `opencode/claude-opus-5-5` (paid; no Free ID exists on Zen); Amazon Bedrock: `anthropic.claude-opus-5-5`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS: `claude-opus-5-5`.
- **Context window:** 1M-token context window; 128K maximum output. Verified in Anthropic’s model specification.
- **Modalities:** Text and image input; text output. No audio, video, or distinct PDF input modality is listed in the model specification. Adaptive reasoning is always on. Tool calls are supported through auto/strict tool use, but forced `any`/`tool` choice is unsupported; structured JSON output is available through `output_config.format`.
- **Pricing (as of 2026-09-30):** Anthropic API: $4 input / $20 output per 1M tokens; 5-minute cache write $5, 1-hour cache write $8, cache read $0.20 per 1M tokens. Paid; OpenCode Zen has no Free ID, so a Zen free-tier privacy caveat is not applicable.
- **Architecture:** Proprietary, closed weights; parameter count is undisclosed. No open-weights license or verified MoE disclosure found in the sources checked.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (Artificial Analysis GDPval-AA v2.1; max effort with default fallback; AA reports it as the leading score. Stirrup agent harness with shell and web browsing.)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **92%** (Anthropic-internal 198-question Diamond subset; two runs, model-graded, with server fallback; effort not specified.)
- HLE: **61.4%** (Artificial Analysis independent leaderboard; max effort with default fallback; pass@1 on 2,158 text-only questions; rank #1.)
- LCR / MLCR: **85%** (Artificial Analysis AA-LCR v1.1; max effort with default fallback.)
- CritPt: **32%** (Artificial Analysis CritPt; max effort with default fallback.)
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1; no verified public score found** (Artificial Analysis Intelligence Index v4.3.2; max effort with default fallback; AA model page ranks it #1/222. No BenchLM overall score verified.)
- Omniscience Accuracy / Hallucination Rate: **66% / no verified public score found** (Artificial Analysis AA-Omniscience Accuracy; max effort with default fallback.)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found / 92.8%** (Anthropic-internal SWE-bench Pro subset, 478 problems, default `medium` effort; Anthropic states this subset is not comparable to the public leaderboard.)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis independent SciCode result; max effort with default fallback; leading score in AA’s launch analysis.)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE: no verified public score found; other: Terminal-Bench 4.0 59.6%** (Artificial Analysis independent evaluation; mini-swe-agent harness, pass@1 averaged over three repeats per task; joint-highest score.)
  Long context:
- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 92/100.** GDPval-AA v2.1 scored 1846 Elo at max effort, AA’s max-effort AutomationBench-AA result is 70%, Anthropic reports 81.8% partial on OSWorld 2.1, and AA independently reports 59.6% on Terminal-Bench 4.0. The GDPval result places it in the rubric’s frontier band; capped because no verified Terminal-Bench 2.1 or Tau3 result was found, and the OSWorld result is partial.
- **Reasoning: 94/100.** Supported by 92% on Anthropic’s two-run GPQA Diamond evaluation, 61.4% on AA’s HLE leaderboard (rank #1), and an AA Intelligence Index score of 58 (rank #1); the index is just below the rubric’s 60+ frontier marker.
- **Context window: 95/100.** The verified 1M-token window meets the rubric’s ≥1M tier; no verified retrieval result at 512K+ was found to justify a higher score.
- **Multimodal: 65/100.** Text and image input with text output fits the rubric’s image-input tier; the model specification does not list audio/video input or non-text output.
- **Coding: 91/100.** AA SciCode is 66.9%, above the rubric’s 55% frontier marker; AA also reports 59.6% on Terminal-Bench 4.0. The 92.8% SWE-bench Pro subset result is Anthropic-internal and explicitly not comparable with the public leaderboard; no verified public SWE-bench Verified, DeepSWE, LiveCodeBench, or Terminal-Bench 2.1 score was found.
- **Cost efficiency: 56/100.** Paid at $4/$20 per 1M input/output tokens, slightly above the rubric’s ~$3/$15 ≈60 point; cached reads are $0.20 per 1M. Cost is scored independently and is not included in Overall.
- **Overall Score: 87.4/100.** (92 + 94 + 95 + 65 + 91) / 5 = 87.4; cost excluded. Best fit: long-running agentic coding and knowledge-work tasks where capability matters more than minimizing token cost.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-6-luna)** — 2026-09-30
- Method: Public internet research using Anthropic model documentation and announcement, Artificial Analysis benchmark pages, and OpenCode Zen documentation; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
