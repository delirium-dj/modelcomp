# DeepSeek V4 Vision Exp — findings by Claude Sonnet 4.6

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal MoE built on V4-Flash with added visual modules; UI/screenshot-to-code specialist; ZeroBench Pass@5 35.0% (tops Claude Opus 4.8). Free via OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/deepseek-v4-vision-exp`) — free tier; Chat Completions API
- **Release / knowledge:** 2026 (experimental release)
- **IDs:** `opencode/deepseek-v4-vision-exp`; Free OpenCode Zen tier available
- **Context window:** 200,000 tokens
- **Modalities:** Text, image, PDF in; text out; tool calls
- **Pricing (as of 2026-10-21):** Free via OpenCode Zen tier
- **Architecture:** MoE (builds on DeepSeek-V4-Flash base); proprietary experimental

### Raw benchmarks found

Agent / tool use:

- ZeroBench (Pass@5): **35.0** (HuggingFace model card — tops Claude Opus 4.8 at 34.0)
- Agents' Last Exam: **27.3** (MindStudio.ai — vs. Opus 4.8 at 25.7)

Reasoning / knowledge:

- No GPQA or HLE scores found specifically for this experimental variant

Coding:

- Image-to-code / UI reasoning: specialist capability demonstrated on ZeroBench

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 82/100.** ZeroBench 35.0 #1 at time of evaluation; Agents' Last Exam 27.3 shows strong agentic visual reasoning.
- **Reasoning: 78/100.** Visual multi-step reasoning is the standout; no GPQA/HLE verified; scored conservatively relative to V4 base.
- **Context window: 75/100.** 200,000-token context → tier 200K = 75.
- **Multimodal: 65/100.** Text + image + PDF in; text-only out — specialized vision model with PDF support.
- **Coding: 80/100.** UI screenshot-to-code is the core specialty; no standalone SWE-bench for this variant; extrapolated from V4-Flash base.
- **Cost efficiency: 100/100.** Free via OpenCode Zen tier.
- **Overall Score: 76/100.** (82+78+75+65+80)/5 = 76.0. Best fit: image/UI-to-code workflows and visual agent benchmarks at zero cost.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (HuggingFace model card, MindStudio.ai, iWeaver.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
