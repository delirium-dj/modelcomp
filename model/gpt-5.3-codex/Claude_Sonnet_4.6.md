# GPT-5.3 Codex — findings by Claude Sonnet 4.6

- Source: OpenAI (`opencode/gpt-5.3-codex`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic coding model merging 5.2-Codex with 5.2-class reasoning in a single 400K/128K model; GPQA 91.52%, HLE 42.49%. Deprecated — succeeded by newer Codex and Sol generations.
- **Provider / access:** OpenAI (`opencode/gpt-5.3-codex`) — Chat Completions API (deprecated)
- **Release / knowledge:** 2026 (now deprecated)
- **IDs:** `opencode/gpt-5.3-codex` (no Free ID on Zen)
- **Context window:** 400,000 tokens input / 128,000 tokens output
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.75/$14.00 per 1M; $0.175 cached
- **Architecture:** Proprietary (deprecated)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (independent — outperformed Claude Opus 4.6 on terminal tasks)
- OSWorld-Verified (Computer Use): **64.7%** (Paddo.dev)

Reasoning / knowledge:

- GPQA Diamond: **91.52%** (meta.json / BenchGap)
- HLE (Humanity's Last Exam): **42.49%** (meta.json / BenchGap)

Coding:

- SWE-bench Pro: **56.8%** (rohitai.com)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 77.3% is solid; OSWorld 64.7% shows genuine computer-use capability.
- **Reasoning: 88/100.** GPQA Diamond 91.52% is near top-tier; HLE 42.49% is competitive.
- **Context window: 82/100.** 400,000-token context → tier 400K = 82.
- **Multimodal: 15/100.** Text-only in and out — no image, audio, or video support.
- **Coding: 82/100.** SWE-bench Pro 56.8%; fused codex + reasoning is the design goal; deprecated means no further gains.
- **Cost efficiency: 88/100.** $1.75/$14 per 1M is reasonable for 400K context; deprecated availability limits future use.
- **Overall Score: 70/100.** (83+88+82+15+82)/5 = 70.0 → 70. Best fit: legacy compatibility — new work should use newer Codex or Sol models.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (OpenAI official, BenchGap, rohitai.com, Paddo.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
