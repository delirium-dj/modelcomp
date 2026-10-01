# Claude Haiku 4.5 — findings by DeepSeek 4 Flash

- Source: Anthropic (`opencode/claude-haiku-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fast model (Oct 2025) delivering near-frontier coding quality at roughly one-third the cost and 2x the speed of Claude Sonnet 4. Designed for real-time agents, chat, customer service, and sub-agent orchestration.
- **Provider / access:** OpenCode Zen `opencode/claude-haiku-4.5`; Anthropic API (`claude-haiku-4-5`), Amazon Bedrock, Google Vertex AI, Claude apps, Claude Code.
- **Release / knowledge:** 2025-10-15. Knowledge cutoff not stated for this release.
- **IDs:** `opencode/claude-haiku-4.5` (paid tier; no free Zen ID)
- **Context window:** 200K tokens, 64K max output.
- **Modalities:** text and image input; text output. Reasoning: yes (extended thinking, 128K thinking budget used in evals).
- **Pricing (as of 2025-10-15):** $1 per 1M input / $5 per 1M output.
- **Architecture:** proprietary; parameter count undisclosed. ASL-2 safety classification.

### Raw benchmarks found

> Anthropic "Introducing Claude Haiku 4.5" release (Oct 15, 2025) and system card; SWE-bench Verified and Terminal-Bench methodology are explicit in the release footnotes.

Agent / tool use:

- Terminal-Bench: **41.75%** (32K thinking budget) / **40.21%** (no thinking), Terminus 2 average of 11 runs
- Tau2-bench (airline/telecom): strong performance reported with extended thinking (exact per-domain values not in text)
- OSWorld (computer use): reported by Anthropic as surpassing Claude Sonnet 4 on computer use (exact value not in text)
- GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMMLU: reported across 14 non-English languages (exact value not in text)
- AIME: pass@1 averaged over 10 runs × 16 trials (exact value not in text)
- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: no verified public score found for this exact model

Coding:

- SWE-bench Verified: **73.3%** (average over 50 trials, 128K thinking budget, simple two-tool scaffold)
- LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- 200K context; no published MRCR/RULER retrieval figure found.

Vision:

- Text + image input, text output; no published MMMU-type score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 41.75% (with thinking) and OSWorld gains over Sonnet 4 show strong agentic/computer-use ability for a small model; Tau2 domains and MCP-Atlas values are unpublished.
- **Reasoning: 78/100.** Anthropic claims near-Sonnet-4 intelligence with 128K thinking; no published GPQA/HLE numbers to anchor precisely.
- **Context window: 76/100.** 200K context with 64K output is standard for the generation.
- **Multimodal: 72/100.** Text + image input, text output only; no published vision benchmark.
- **Coding: 78/100.** SWE-bench Verified 73.3% is near-frontier coding performance for a Haiku-class model and the headline claim.
- **Cost efficiency: 82/100.** $1/$5 per 1M is a strong price/performance point for a near-frontier small model.
- **Overall Score: 76.4/100.** Half-up mean of the five quality dims (78+78+76+72+78)/5 = 76.4. Best-fit recommendation: high-volume, low-latency agents and sub-agent fan-out where speed and cost dominate.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Anthropic "Introducing Claude Haiku 4.5" release and system card, plus the Anthropic model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`, using the same headings.
