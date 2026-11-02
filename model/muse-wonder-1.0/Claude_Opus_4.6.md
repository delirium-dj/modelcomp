# Muse Wonder 1.0 — findings by Claude Opus 4.6

- Source: Meta Superintelligence Labs (`muse-wonder-1.0`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's flagship frontier closed-weight reasoning model, the API-accessible variant of the Muse Wonder family. Built for complex agentic workflows, long-horizon coding, and professional reasoning tasks. First major closed-weight model from Meta competing at the frontier tier.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`), OpenRouter (`meta/muse-wonder`), OpenCode Zen. Chat Completions and Responses API formats supported.
- **Release / knowledge:** October 12, 2026; knowledge cutoff not publicly disclosed
- **IDs:** `meta/muse-wonder-1.0`, OpenRouter `meta/muse-wonder`
- **Context window:** 1,048,576 tokens (1M) total; max output not publicly specified — verified via Meta Model API docs and OpenRouter
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes (adjustable effort: minimal/low/medium/high/xhigh/max); tool calls yes; JSON mode yes; search grounding yes; computer use yes
- **Pricing (as of 2026-11):** $4.00 / $20.00 per 1M input/output tokens; cached input $0.20 per 1M; paid model, no free tier
- **Architecture:** Proprietary closed-weight model; architecture details not disclosed (departure from Meta's traditional open-source Llama line)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found for the API variant
- SWE-Marathon: no verified standalone score found for the API variant (Full variant scored 57.5%)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.5–94.9%** depending on reasoning effort tier (source: puter.com / orcarouter.ai tracker evaluations; max effort ~94.9%, standard ~83.5%)
- HLE: **50.1–53.6%** (standard effort ~50.1%; max effort/tool-assisted up to ~61%) (source: askclash.ai / madebyagents.com)
- Artificial Analysis Intelligence Index: **52** (source: devx.com / artificialanalysis.ai)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no separate score found for API variant (Full variant: 79.0%)
- DeepSWE 1.1: **78.8%** (source: reconscribe.com / devx.com independent evaluations)
- LiveCodeBench: no verified standalone score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window verified; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic capabilities with search grounding, computer use, and tool calling support. No standalone Terminal-Bench or SWE-Marathon scores verified for the API variant specifically, but DeepSWE 78.8% demonstrates excellent long-horizon tool execution. Capped by lack of dedicated tool-use benchmarks.
- **Reasoning: 91/100.** GPQA Diamond up to 94.9% at max effort is top-tier. HLE 50.1–53.6% competitive with frontier peers. AA Intelligence Index 52 places it solidly in the upper echelon. Adjustable reasoning effort provides flexibility for cost-quality tradeoffs.
- **Context window: 88/100.** 1M native context window matches the best frontier offerings. No independent long-context retrieval benchmarks (MRCR/RULER) found, which caps below models with verified retrieval at full length.
- **Multimodal: 72/100.** Broad multimodal input support (text, image, video, audio, PDF) with text output. Computer use capability adds to coverage. No specific vision or audio benchmark scores found for this model.
- **Coding: 89/100.** DeepSWE 78.8% is near state-of-the-art for repository-level coding tasks. Competitive coding proficiency via code generation and self-repair capabilities. Slightly below the Full variant (79.0% on SWE-bench).
- **Cost efficiency: 42/100.** $4/$20 per 1M tokens is premium pricing, comparable to Claude Opus 4.6. Cached input at $0.20 provides savings for repetitive tasks. No free tier.
- **Overall Score: 85/100.** Mean of (85 + 91 + 88 + 72 + 89) / 5 = 85.0. A powerful frontier model for complex reasoning and coding workflows, with Meta's first closed-weight entry competing effectively against established incumbents.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Model API Documentation](https://meta.ai)
  - [OpenRouter Muse Wonder Listing](https://openrouter.ai)
  - [Artificial Analysis Intelligence Index](https://artificialanalysis.ai)
  - [DevX Muse Wonder Performance Analysis](https://devx.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
