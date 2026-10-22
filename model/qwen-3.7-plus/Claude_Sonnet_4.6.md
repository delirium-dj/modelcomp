# Qwen 3.7 Plus — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`opencode/qwen-3.7-plus`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's multimodal cost-effective tier of the Qwen 3.7 family, built on the Max backbone with native image understanding and GUI-agent capability at ~6× lower cost than Max.
- **Provider / access:** OpenCode (`opencode/qwen-3.7-plus`) — Chat Completions API
- **Release / knowledge:** 2026 release
- **IDs:** `opencode/qwen-3.7-plus` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / 131,072 tokens output (Zen: 128K text-only)
- **Modalities:** Text, image in; text out; tool calls; GUI-agent capability
- **Pricing (as of 2026-10-21):** $0.40/$1.60 per 1M (≤256K input); $1.20/$4.80 per 1M (256K–1M); $0.32/$1.28 via OpenRouter/OpenCode Go
- **Architecture:** Proprietary (Alibaba Qwen 3.7 backbone)

### Raw benchmarks found

Agent / tool use:

- GUI agent / desktop automation: Native GUI-agent capability (Alibaba official; meta.json)

Reasoning / knowledge:

- GPQA Diamond: **~90.0%** (meta.json short field; Qwen 3.7 Plus tracks ~2–3 pts below Max at 92.4%)

Coding:

- LiveCodeBench: **~89.6%** (meta.json short field)
- SWE-bench Verified: **~66.7%** on rigorous subset (Vals.ai)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 84/100.** Native GUI-agent capability is a standout differentiator; desktop/app operation alongside terminal and API tools.
- **Reasoning: 87/100.** GPQA Diamond ~90% is strong; tracks slightly below Max sibling at 92.4%.
- **Context window: 92/100.** 1,000,000-token native context → tier 1M = 92.
- **Multimodal: 63/100.** Text + image in; text-only out — image-capable with GUI support, no audio or video.
- **Coding: 85/100.** LiveCodeBench ~89.6% is excellent; SWE-bench subset ~66.7% shows solid engineering capability.
- **Cost efficiency: 95/100.** $0.32/$1.28 per 1M via OpenRouter — ~6× cheaper than Max for near-comparable performance.
- **Overall Score: 82/100.** (84+87+92+63+85)/5 = 82.2 → 82. Best fit: multimodal GUI-agent workflows at budget pricing.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Alibaba official, Vals.ai, OverChat.ai, OFox.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
