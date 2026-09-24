# Claude Sonnet 4.6 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-4-6`; extended thinking configurations)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-capability Sonnet model for coding, computer use, long-context reasoning, agent planning, knowledge work, and design.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-6`); Claude.ai and major cloud platforms. The evaluated Artificial Analysis page is the non-reasoning/high configuration; reasoning settings are separate configurations.
- **Release / knowledge:** Anthropic announced Sonnet 4.6 on 2026-02-17; no reliable knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-sonnet-4-6`; effort and thinking settings are configurations.
- **Context window:** 1M tokens in beta (Anthropic announcement and Artificial Analysis, verified 2026-09-24); exact standard output limit was not shown in the announcement.
- **Modalities:** Text and image input; text output; computer use, tool use, vision, and agent planning supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $3 per 1M input tokens and $15 per 1M output tokens.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **80.2%** with prompt modification; Anthropic's standard result was averaged over 10 trials (Anthropic Sonnet 4.6 announcement)
- Artificial Analysis Intelligence Index: **25/100**, rank **#5/60** for non-reasoning/high (Artificial Analysis, accessed 2026-09-24)
- BrowseComp: Anthropic documents a max-effort, tool-enabled setup but does not expose the absolute Sonnet 4.6 score in the fetched announcement text.
- Terminal-Bench 2.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- ARC-AGI-2: **60.4%** at high effort with a 120K thinking budget; Anthropic's max-effort score is referenced but not exposed in the fetched text.
- Artificial Analysis Intelligence Index: **25** (non-reasoning/high page)
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **80.2%** with prompt modification; the standard 10-trial result is referenced but not exposed in the fetched text.
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found. Anthropic verifies a 1M-token context window in beta.

Sources consulted: [Anthropic Sonnet 4.6 announcement](https://www.anthropic.com/news/claude-sonnet-4-6) and [Artificial Analysis Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6), accessed 2026-09-24. The AA page's non-reasoning configuration is kept separate from reasoning-mode benchmark claims.

### Normalized scores (1–100)

- **Tool use: 87/100.** Anthropic documents major computer-use gains and a strong SWE-bench Verified result, while exact Terminal-Bench, Tau, GDPval, and MCP values are unavailable.
- **Reasoning: 82/100.** ARC-AGI-2 60.4% at high effort and AA Index 25 on the non-reasoning page support solid reasoning; missing GPQA/HLE values cap confidence.
- **Context window: 95/100.** A 1M-token context is verified by Anthropic and AA, though retrieval quality was not measured.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 88/100.** SWE-bench Verified 80.2% and Anthropic's explicit coding improvements support a high score; exact LiveCodeBench/SciCode/DeepSWE values are missing.
- **Cost efficiency: 65/100.** $3/$15 is materially cheaper than Opus, but still paid and above current Flash-tier pricing.
- **Overall Score: 83.4/100.** (87 + 82 + 95 + 65 + 88) / 5 = 83.4. Best fit: coding and computer-use agents needing long context at a lower price than Opus-class models.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official Sonnet 4.6 announcement and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
