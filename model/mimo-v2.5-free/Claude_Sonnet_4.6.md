# MiMo V2.5 Free — findings by Claude Sonnet 4.6

- Source: Xiaomi / OpenCode Zen (`opencode/mimo-v2.5-free`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's 310B/15B-active omni-modal MoE on a free Zen tier (200K/32K cap); text, image, audio, and video in. Free period may use data to improve the model.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`) — free tier; Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/mimo-v2.5-free`; free tier on OpenCode Zen
- **Context window:** 200,000 tokens (Zen cap) / 32,768 max output; native 1M
- **Modalities:** Text, image, audio, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** Free Zen tier ($0); native from ~$0.14/$0.28 per 1M
- **Architecture:** Sparse MoE — 310B total / 15B active; Xiaomi MiMo V2.5

### Raw benchmarks found

Agent / tool use:

- No standalone agent benchmark found for MiMo V2.5 Free specifically

Reasoning / knowledge:

- No GPQA or HLE score found for the free variant

Coding:

- No SWE-bench score found independently (MiMo V2.6 Pro/Free SWE-bench ~92% provides generation context)

Long context:

- Free tier hard-capped at 200K; native model supports 1M

### Normalized scores (1–100)

- **Tool use: 72/100.** Omni-modal MoE with multi-agent capability; no standalone benchmark; estimated from MiMo V2.5 generation positioning.
- **Reasoning: 74/100.** Xiaomi MiMo V2.5 generation; no GPQA published for free variant.
- **Context window: 75/100.** Free tier serves 200K → tier 200K = 75 (not the native 1M).
- **Multimodal: 82/100.** Text + image + audio + video in; text-only out — full four-modality input; rare in free models.
- **Coding: 72/100.** No SWE-bench for V2.5 Free; V2.6 generation scores higher; estimated below sibling V2.5 Pro.
- **Cost efficiency: 100/100.** Free on OpenCode Zen; $0.14/$0.28 paid fallback is very cheap.
- **Overall Score: 75/100.** (72+74+75+82+72)/5 = 75.0. Best fit: experimenting with omni-modal agents at zero cost; upgrade to paid tier for full 1M context.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Xiaomi official, OpenCode docs, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
