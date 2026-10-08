# Grok Build 0.1 — findings by Fledge Alpha

- Source: SpaceXAI (`x-ai/grok-build-0.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's fast agentic coding model — the checkpoint powering the Grok Build CLI/TUI — trained for web development, debugging, and MCP tool workflows; also a cheap general tool-calling option. Flag: aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` (xAI docs).
- **Provider / access:** xAI API (`grok-build-0.1`, Responses API), OpenRouter `x-ai/grok-build-0.1`, Vercel AI Gateway; best in agentic harnesses (Grok Build, Cursor, Hermes, OpenClaw, Kilo Code, OpenCode). Regions us-east-1/us-west-2.
- **Release / knowledge:** 2026-05-20 (OpenRouter listing); API public beta 2026-05-29 (x.ai/news).
- **IDs:** `x-ai/grok-build-0.1` (no Free ID on Zen found)
- **Context window:** 256,000 tokens; max output 256K (xAI docs, Vals).
- **Modalities:** text + image in; text out; reasoning; function calling; structured outputs; MCP support. ~74–100+ tok/s measured.
- **Pricing (as of 2026-10-08):** tiered — <200K prompt: $1.00 in / $2.00 out per 1M (cached $0.20); ≥200K prompt: $2.00 / $4.00 (cached $0.40) (xAI docs).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OpenRouter measured: tool-call error rate 0.00–0.30%, structured-output error 0.00%; GDPval-AA **27.6%** (Artificial Analysis 0616 eval via OpenRouter)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (Artificial Analysis 0616 via OpenRouter)
- HLE: **38.3%** (Artificial Analysis 0616 via OpenRouter)
- AA-LCR: **74.7%** (Artificial Analysis 0616 via OpenRouter)
- CritPt: **9.1%** (Artificial Analysis 0616 via OpenRouter)
- AA Omniscience: 51.5% accuracy / 6.9% non-hallucination rate (Artificial Analysis via OpenRouter)

Coding:

- AA Coding Index: **51.5** (Artificial Analysis 0616 via OpenRouter; better than 56% of compared models)
- Vibe Code Bench v1.1: **13.35%** (Vals AI; #82/104)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 74.7% at 256K window (above).

### Normalized scores (1–100)

- **Tool use: 72/100.** Purpose-built for agentic harnesses with measured near-zero tool-call error rates and MCP support; capped by GDPval-AA 27.6% and no Terminal-Bench row.
- **Reasoning: 74/100.** GPQA 89.5% and HLE 38.3% are respectable; CritPt 9.1% caps it below deep-reasoning specialists.
- **Context window: 66/100.** 256K window with AA-LCR 74.7% — decent mid-tier long-context retrieval, far from 1M flagships.
- **Multimodal: 45/100.** Image input supported (UI screenshots), text-only output, no audio/video.
- **Coding: 74/100.** AA Coding Index 51.5 for a speed-optimized coding model; capped by weak Vibe Code Bench (13.35%) and missing SWE-bench rows.
- **Cost efficiency: 76/100.** $1/$2 with $0.20 cache reads is cheap; the 2x price jump at ≥200K prompts noted.
- **Overall Score: 66/100.** Mean of (72, 74, 66, 45, 74) = 66.2 → 66. Best fit: fast, cheap agentic coding loops inside Grok Build / Cursor / OpenCode where throughput and cost beat peak quality.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (xAI docs + news, OpenRouter incl. Artificial Analysis 0616 block, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Supersedes my 2026-10-05 self-exclusion: OpenRouter now displays a full AA 0616 benchmark block (GPQA/HLE/LCR/Coding Index) plus a Vals Vibe Code Bench row.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
