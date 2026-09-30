# Grok Build 0.1 — findings by Kimi K3

- Source: SpaceXAI (formerly xAI) / Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose-trained agentic coding model (web development, debugging, MCP support) — the model that powers the Grok Build product; also pitched as a fast, cheap general agentic/tool-calling option. Continuation of the `grok-code-fast-1` line under a new ID.
- **Provider / access:** xAI API `https://api.x.ai/v1` (Responses + Chat Completions, OpenAI-compatible), public beta since 2026-05-29; **OpenCode Zen `opencode/grok-build-0.1`** (Responses API); OpenRouter `x-ai/grok-build-0.1`; Vercel AI Gateway. Best inside agentic harnesses (Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code, OpenCode per the launch post).
- **Release / knowledge:** OpenRouter listing 2026-05-20; API public beta announcement 2026-05-29 (x.ai/news/grok-build-0-1). Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (current; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` per official docs), `opencode/grok-build-0.1` on Zen (paid — no Free ID).
- **Context window:** 256,000 tokens (official docs.x.ai model page).
- **Modalities:** text + image in; text out (official); function calling, structured outputs, reasoning: yes. Speed: 100+ tokens/s (launch post).
- **Pricing (as of 2026-09-25):** $1.00 in / $0.20 cached / $2.00 out per 1M below 200K prompt tokens; doubles to $2.00/$0.40/$4.00 at ≥200K (whole-request rate). Zen rate card matches ($1/$2, $0.20 cached).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vendor: trained specifically for agentic coding + MCP support (launch post); ObviousBench reliability: **99.3% answer pass³** at high effort (rank 27/254, 90th pct — reliability proxy, not a tool-use score)
- DuelLab GameBench 2: **39.5** (23/48, 53rd pct; model-code failure rate 0.0%)
- Terminal-Bench 2.1 / Tau2 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- LiveBench average: **69.6%** (35/43 cohort) — math_comp 95.1%, spatial 98.0%, olympiad 86.6%, tablereformat 100%, python 80.0%
- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index: **no verified public score found**

Coding:

- Vibe Code Bench v1.1: **13.3%** (vals.ai, rank 52/71, 27th pct)
- KernelBench Hard: **0.0%** (0/6 problems — floor rank 14/14)
- LiveBench coding slices: code_completion 67.4%, code_generation 63.4%, python 80.0%, javascript 40.0%, typescript 40.0%
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 256K window (official); **no MRCR/RULER retrieval score published**.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** Purpose-built for tool-calling/agentic coding with function calling + structured output + MCP verified, and 99.3% answer-pass³ reliability on ObviousBench; capped by zero audited agentic benchmark (no TB2.1/Tau3/GDPval).
- **Reasoning: 68/100.** LiveBench 69.6% with excellent math/spatial slices shows real reasoning skill, but the overall rank is bottom-quintile of the current frontier cohort and no GPQA/HLE exists for cross-checking.
- **Context window: 72/100.** 256K → 200K–500K band (65–84), slightly above the 200K anchor (70); no retrieval-at-length evidence.
- **Multimodal: 63/100.** Text + image input, text-only output (official docs) → 60–70 band; no video/PDF/audio.
- **Coding: 55/100.** Despite the coding-specialist branding, verified numbers are weak: Vibe 13.3% and KernelBench Hard 0% are floor/low-mid, LiveBench code slices are mixed (python 80% / TS+JS 40%). Methodology's low-Vibe mid band caps this — scored on evidence, not branding.
- **Cost efficiency: 92/100.** $1/$2 with $0.20 cached reads and 100+ tok/s — between the $0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) references, closer to the cheaper end.
- **Overall Score: 64/100.** Half-up mean of (62 + 68 + 72 + 63 + 55)/5 = 64.0. Best fit: fast, cheap agentic coding executor inside tuned harnesses (Grok Build/OpenCode) for everyday web-dev and debugging loops; escalate hard kernel/algorithms work and verify output on unfamiliar stacks.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (official x.ai launch post and docs.x.ai model page; BenchmarkList aggregation of vals.ai Vibe Code Bench, KernelBench Hard, DuelLab GameBench 2, ObviousBench, LiveBench; OpenCode Zen docs). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
