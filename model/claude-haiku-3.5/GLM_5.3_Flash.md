# Claude Haiku 3.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-5-haiku`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (listed as Claude Haiku 3.5 on Zen)
- **Short description:** Anthropic's fastest and most compact 3.5-generation model (launched 2024-11-04), built for latency-sensitive chat, high-volume data processing, and lightweight coding sub-agents. It matched Claude 3 Opus on many benchmarks at launch but has since been largely superseded by Claude Haiku 4.5 (2025-10). Not a tier variant of Haiku 4.5 — a distinct prior-generation model.
- **Provider / access:** Anthropic API `claude-3-5-haiku` (Chat Completions / Messages API); Amazon Bedrock; Google Cloud Vertex AI; OpenCode Zen as a provider-specific entry (models.dev: `claude-3-5-haiku`, 200K/8,192, $0.80/$4.00).
- **Release / knowledge:** Released 2024-11-04; pricing revised December 2024; knowledge cutoff July 2024.
- **IDs:** `claude-3-5-haiku` (Anthropic API; state explicitly: no Zen Free ID exists — paid-only on Zen).
- **Context window:** 200K total; 8,192 max output (Anthropic docs overview table, models.dev row).
- **Modalities:** text in/out at launch, image input support added post-launch; no video/PDF input verified; reasoning (extended thinking) no; tool calls yes (computer, text editor, and bash tools from the 3.5 generation); structured outputs / JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.80 in / $4.00 out per 1M (December 2024 revision); prompt caching up to 90% reduction; Message Batches API 50% reduction.
- **Architecture:** proprietary (Anthropic has not published parameter counts for the 3.5 Haiku generation).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Tool support: computer tool (screenshot → mouse/keyboard actions), text editor tool, bash tool (Anthropic 3.5-generation tooling, per SentiSight summary of the model card addendum) — no agentic benchmark numbers verified

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **19** (SentiSight summary, AA index — average for its price range)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **40.6%** (Anthropic model card addendum, cited by SentiSight; ahead of the original Claude 3.5 Sonnet and GPT-4o at launch)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value found for the 200K window)

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling is supported (computer/text editor/bash tools) but no verified agentic benchmark numbers exist (TB2.1/Tau3/GDPval all unfound), so this is a provisional mid score with the missing agentic data as the cap.
- **Reasoning: 55/100.** AA Intelligence Index of 19 sits at the bottom edge of the 20–35 mid band and no GPQA/HLE/LCR verification exists; the model was explicitly positioned for speed over open-ended reasoning (superseded by Haiku 4.5 for instruction-following and reasoning quality).
- **Context window: 70/100.** 200K total lands exactly at the 200K tier mark; the 8,192-token max output is a noted caveat (below the 64K norm) but not a separate score.
- **Multimodal: 65/100.** Image input support was added after the text-only launch; text-only output and no verified video/PDF input keep it in the +image-in 60–70 band.
- **Coding: 65/100.** SWE-bench Verified 40.6% is the only verified coding number — respectable for a 2024 small model but mid by current standards; no LiveCodeBench/SciCode verification caps it in the mid band.
- **Cost efficiency: 85/100.** $0.80/$4.00 per 1M on paid pricing (no Zen Free ID exists), cheaper than frontier tiers ($5/$25 Opus 4.6) but well above the ~$0.10–$0.30 flash class; caching and batch discounts soften the gap.
- **Overall Score: 61/100.** Mean of the five non-cost dims (50 + 55 + 70 + 65 + 65) / 5 = 61; best fit: a legacy latency-critical fallback for high-volume structured work — for new projects, Haiku 4.5 or a current flash-class model is the better pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (SentiSight model summary citing Anthropic's model card addendum, models.dev, Anthropic docs overview, AA index citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
