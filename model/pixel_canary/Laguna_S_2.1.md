# Pixel Canary — findings by Laguna S 2.1

- Source: Vercel AI Gateway model catalog (`https://vercel.com/ai-gateway/models/pixel-canary`), Vercel Next.js Agent Evals (`https://nextjs.org/evals`, `https://github.com/vercel/next-evals-oss`), Stealth Models profiling (`https://stealthmodels.com/pixel-canary`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model launched September 25, 2026 on Vercel AI Gateway. No developer identity published; community fingerprinting (Stealth Models) shows its reasoning habits closest to Qwen3.8 Flash at 63.8/100 similarity, with MiniMax M3 (59.4) and GLM 5.3 variants (59.2–59.3) also in contention. Built for web/mobile app development with Next.js. Priced $0/$0 during the free preview; scheduled for deprecation on 1 October 2026 at 06:00 UTC.
  > Note: the repo `meta.json` lists 128K context and text-only modality; Vercel's AI Gateway catalog shows 262K context and text+image input. This file documents the full model per verified external sources.
- **Provider / access:**
  - Vercel AI Gateway — model id `stealth/pixel-canary` (OpenAI-compatible Chat Completions endpoint at `https://ai-gateway.vercel.sh/v1/chat/completions`)
  - Cline Desktop — free account during preview (removed from Cline roster on 1 Oct 2026)
  - AI SDK Playground, Command Code
  - OpenCode Zen: `opencode/pixel_canary`
- **Release / knowledge:** September 25, 2026 (Vercel AI Gateway listing); knowledge cutoff not disclosed
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway), `opencode/pixel_canary` (OpenCode Zen)
- **Context window:** 262,144 tokens total / 131,072 tokens max output (Vercel model catalog)
- **Modalities:** Text and image input, text output (Vercel catalog); tool calls yes (enabled in Vercel's OpenCode eval config); reasoning yes (four levels: none/low/medium/xhigh); implicit caching yes
- **Pricing (as of 2026-10-01):** $0.00 input / $0.00 output per 1M tokens during stealth preview (Vercel catalog); post-preview pricing not published; deprecation scheduled 1 Oct 2026 06:00 UTC
- **Architecture:** Proprietary/stealth — params, MoE/dense structure, and license undeclared

### Raw benchmarks found

> Sources: Vercel Next.js Agent Evals (`nextjs.org/evals` snapshot 2026-09-25, raw JSON `agent-results.json` from `github.com/vercel/next-evals-oss`), Vercel AI Gateway model catalog, Stealth Models profiling. Methodology note: pass@4 — an eval passes if any of four attempts succeeds.

Agent / tool use:

- Vercel Next.js Agent Evals (OpenCode harness, no AGENTS.md): **28/31 = 90%** — (nextjs.org/evals, 2026-09-25 snapshot; pass@4 with 40-min timeout/attempt)
- Vercel Next.js Agent Evals (with AGENTS.md docs hint): **30/31 = 97%** — (nextjs.org/evals; ties GPT-6 Astra high, Claude Opus 5.5 high, Grok 4.7 at 90%/97%)
- Average evaluation duration: **1015.8s** (16.9 min) per task across both conditions — (nextjs.org/evals)
- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench Hard / v4.0: **no verified public score found**
- τ²-Bench / τ²-Bench Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld-Verified: **no verified public score found**
- IFEval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (model absent from AA leaderboards as of 2026-10-01)
- BenchLM overall: **no verified public score found** (model absent from BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Next.js Agent Evals: see above — the only verified coding number (90%/97%)
- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Multimodal:

- Text + image in; text out per Vercel catalog — no independent multimodal benchmark found
- MMMU-Pro: **no verified public score found**
- Design Arena / ImageBench: **no verified public score found**

Long context:

- 262K window verified by catalog; no MRCR / RULER / GraphWalks retrieval score reported

Independent observations:

- Stealth Models (2026-09-29): reasoning-habit similarity to Qwen3.8 Flash (63.8/100) is the closest single match of 27 models tested; no claim about actual identity or parameter count
- Eyestech (2026-09-26): 0/2 Cline completions in an independent test (small sample, different harness from Vercel's evals) — anecdotal, not a benchmark

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 68/100.** The only verified agentic number is strong: 90%/97% on Vercel's Next.js Agent Evals (pass@4), tying GPT-6 Astra and Claude Opus 5.5 — genuine multi-step agentic performance with tool calls. However, all standard tool-use benchmarks (TB2.1, TB Hard, TB v4.0, τ²-bench, GDPval-AA, Claw-Eval, MCP-Atlas, OSWorld) are "no verified public score found," and the benchmark is vendor-run over a narrow domain (Next.js web development). Capped by single-benchmark evidence and absence of standard agentic suites.

- **Reasoning: 40/100.** Every reasoning anchor — GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, MLCR, Omniscience — is "no verified public score found." The only indirect evidence is the multi-step agentic coding performance (90%/97% on Next.js evals), which implies *some* planning/reasoning ability but is not a direct measurement. Scored in the bottom-third provisional band.

- **Context window: 72/100.** 262,144 tokens total with 131,072 max output, verified by Vercel's catalog — falls in the 200K–500K tier (58–84 band), interpolated to ~72. No retrieval benchmark (MRCR/RULER/GraphWalks) reported to validate the effective context length.

- **Multimodal: 30/100.** Text + image input, text output per Vercel catalog — modest multimodal support in the methodology's "image input only" band (25–40). No verified image benchmarks (MMMU-Pro, Design Arena, ImageBench, AA-MMMU-Pro) found. Capped hard by zero verified multimodal scores.

- **Coding: 85/100.** The 90%/97% on Vercel Next.js Agent Evals is genuinely strong — tying GPT-6 Astra and exceeding Grok 4.7 (94%). The model is explicitly built for coding. However, this is a single narrow benchmark (Next.js web development, vendor-run, pass@4 with early exit), and SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench are all "no verified public score found." The 1015-second average duration per task is also slow relative to frontier models. Scored high on the one signal, capped by single-benchmark breadth.

- **Cost efficiency: 100/100.** $0.00/$0.00 per 1M during the stealth preview = $0 = 100 per methodology; flagged as time-limited with undisclosed post-preview pricing and no zero-data-retention option.

- **Overall Score: 59/100.** Mean of five quality dims: (68 + 40 + 72 + 30 + 85) / 5 = 295 / 5 = 59.0 → 59. Pixel Canary is a free-tier stealth preview with a strong single benchmark (Next.js Agent Evals 90%/97%) and no other verified scores. Worth trying for Next.js/front-end coding tasks while the preview lasts, but provenance, evaluation breadth, and identity remain uncertain.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Vercel Next.js Agent Evals leaderboard and raw results JSON, Vercel AI Gateway model catalog, and Stealth Models profiling; scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://nextjs.org/evals`, `https://github.com/vercel/next-evals-oss` (raw `agent-results.json`), `https://vercel.com/ai-gateway/models/pixel-canary`, `https://stealthmodels.com/pixel-canary`
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Pixel_Canary.md`, using the same headings.

---
