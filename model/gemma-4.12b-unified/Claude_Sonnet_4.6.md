# Gemma 4 12B Unified — findings by Claude Sonnet 4.6

- Source: Google DeepMind (`google/gemma-4-12B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's 11.95B encoder-free multimodal open model (Apache-2.0, 256K); GPQA 78.8%, LiveCodeBench v6 72%, runs in 16GB VRAM. Text, image, and audio in.
- **Provider / access:** HuggingFace / SiliconFlow / self-host (`google/gemma-4-12B`) — open weights (Apache-2.0)
- **Release / knowledge:** 2026
- **IDs:** `google/gemma-4-12B` (Apache-2.0; no OpenCode Zen or OpenRouter route)
- **Context window:** 256,000 tokens (262,144; hosts serve 32K–256K)
- **Modalities:** Text, image, audio in; text out; tool calls
- **Pricing (as of 2026-10-21):** ~$0.10/$0.30 per 1M (median hosted); self-host $0 (Apache-2.0); cheapest $0.05/$0.25
- **Architecture:** Dense — 11.95B parameters; encoder-free multimodal; Apache-2.0

### Raw benchmarks found

Agent / tool use:

- No standalone agent benchmark found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (meta.json / Google official)

Coding:

- LiveCodeBench v6: **72%** (meta.json)

Long context:

- No long-context retrieval benchmark; serves up to 256K depending on host

### Normalized scores (1–100)

- **Tool use: 65/100.** Encoder-free architecture enables flexible agent tool use; no standalone tool benchmark; 12B ceiling.
- **Reasoning: 76/100.** GPQA Diamond 78.8% is excellent for an 11.95B model; encoder-free design improves reasoning.
- **Context window: 78/100.** 256K context → tier 256K = 78.
- **Multimodal: 72/100.** Text + image + audio in; text-only out — three-modality input encoder-free architecture.
- **Coding: 68/100.** LiveCodeBench 72% is solid for a 12B model; not a heavy coding specialist.
- **Cost efficiency: 100/100.** Apache-2.0 self-host free; hosted from $0.05/$0.25 per 1M.
- **Overall Score: 72/100.** (65+76+78+72+68)/5 = 71.8 → 72. Best fit: local multimodal agents (text+image+audio) on a 16GB GPU at zero API cost.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Google official, HuggingFace, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
