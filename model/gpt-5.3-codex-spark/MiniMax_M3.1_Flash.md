# GPT-5.3 Codex Spark — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.3-Codex-Spark), `gpt-5.3-codex-spark`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's February 2026 research preview — the first "ultra-fast" model family member, a **distinct smaller checkpoint** (not a serving profile) served on Cerebras Wafer Scale Engine 3 for **1000+ tokens/second** and a 128K text-only window, aimed at real-time editing inside Codex. It was **retired on 2026-09-14**.
- **Provider / access:** research preview for **ChatGPT Pro** users in the Codex app, CLI and VS Code extension, with API access for a small set of design partners only; no general API listing (the API model page 404s). OpenCode Zen still lists `gpt-5.3-codex-spark` at **$1.75/M in, $14.00/M out, $0.175 cached read**. Not on OpenRouter.
- **Release / knowledge:** **2026-02-12** (launch post and Codex changelog entry); models.dev records 2026-02-05 (the GPT-5.3-Codex date) — conflict noted. Knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex-spark` (OpenAI).
- **Context window:** **128,000** tokens (launch post and Codex changelog: "text-only with a 128k context window"), max output 32,000 (models.dev). BenchLM lists 256K — OpenAI's 128K is authoritative.
- **Modalities:** text in / text out only (multimodal was planned for later).
- **Pricing (as of 2026-10-20):** **no public per-token price** (ChatGPT Pro preview, design-partner API); OpenCode Zen lists $1.75/$14.00 per 1M as a third-party route.
- **Architecture:** proprietary; a smaller model than GPT-5.3-Codex, served on Cerebras hardware.

### Raw benchmarks found

> OpenAI's launch post carries the numbers as embedded chart data; the text table gives the Terminal-Bench comparison. No Artificial Analysis page and only one BenchLM row exist.

Coding:

- SWE-Bench Pro (passrate @ duration): **46.60%** @1.03 min (low) · **49.41%** @1.68 min (medium) · **50.48%** @2.05 min (high) · **51.49%** @2.29 min (xhigh) — for comparison GPT-5.3-Codex 51.10→56.77% at 3.13→16.29 min, GPT-5.1-Codex-mini 46.17→49.04%
- Terminal-Bench 2.0: **58.4%** (OpenAI launch chart) — the folder's "77.3%" is **GPT-5.3-Codex's** score, not Spark's
- LiveCodeBench / SWE-bench Verified / DeepSWE / SciCode: no verified public score found

Agent / tool use:

- MazeBench: **0%** (ASCII mode, run 2026-07-19 — the only BenchLM row, and unranked overall)
- Terminal-Bench 2.0 58.4% is the only agentic number; no τ², GDPval, OSWorld, AutomationBench or MCP-Atlas figure

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME / MMLU-Pro / FrontierMath: **no verified public score found** — Artificial Analysis has no page for this model and OpenAI published no reasoning table for it

Speed:

- **>1000 tokens/second** (launch post; repeated in the Codex changelog), with the post's meta description claiming "15x faster generation"; harness-level wins (round-trip overhead −80%, per-token overhead −30%, TTFT −50%) apply fleet-wide, not to Spark alone

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.0 58.4% and a MazeBench 0% are the only agentic rows, with no τ², GDPval or OSWorld measurement at all.
- **Reasoning: 45/100.** No GPQA, HLE, AIME or MMLU figure was ever published for Spark, so the dimension is scored as unmeasured with a penalty.
- **Context window: 62/100.** 128,000 tokens is the 100K–200K tier, with no published retrieval test.
- **Multimodal: 15/100.** Text-only at launch, with multimodal explicitly deferred.
- **Coding: 60/100.** SWE-Bench Pro 51.5% at xhigh and Terminal-Bench 2.0 58.4% are mid-band for a coding model, with no SWE-bench Verified or LiveCodeBench figure.
- **Cost efficiency: 72/100.** Provisional: no first-party per-token rate existed (ChatGPT Pro preview, design-partner API), so the score follows OpenCode Zen's $1.75/$14.00 third-party listing — a high output price for a 2026 coding tier.
- **Overall Score: 46/100.** Mean of the five quality dims = (48 + 45 + 62 + 15 + 60) / 5 = 46.0 → **46**. Best fit: real-time editing loops where latency dominates and quality can be delegated elsewhere — a retired preview.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI launch post and Codex changelog, Artificial Analysis absence check, BenchLM, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol.md`, using the same headings.
