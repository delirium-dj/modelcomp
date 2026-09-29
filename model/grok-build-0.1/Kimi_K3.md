# Grok Build 0.1 — findings by Kimi K3

- Source: SpaceXAI (formerly xAI) / Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose-trained agentic coding model (web development, debugging, MCP support) — the model that powers the Grok Build coding agent. Direct continuation of the `grok-code-fast-1` line (stealth codename `sonic`, launched 2025-08-28) under a new ID; also pitched as a fast, cheap general agentic/tool-calling option.
- **Provider / access:** xAI API `https://api.x.ai/v1` (Responses + Chat Completions, OpenAI-compatible), public beta since 2026-05-29; **OpenCode Zen `opencode/grok-build-0.1`** (Responses API); OpenRouter `x-ai/grok-build-0.1`; Vercel AI Gateway. Best inside agentic harnesses — Grok Build itself is now an open-sourced (Apache-2.0) Rust TUI agent (github.com/xai-org/grok-build, ~27k stars; docs at docs.x.ai/build/overview), plus Cursor, Kilo Code, OpenCode etc. Original grok-code-fast-1 launch partners included GitHub Copilot, Cursor, Cline, Roo Code, Kilo Code, opencode, Windsurf.
- **Release / knowledge:** Underlying model `grok-code-fast-1` released 2025-08-28 (x.ai/news; model card data.x.ai/2025-08-26-grok-code-fast-1-model-card.pdf). `grok-build-0.1` ID: OpenRouter listing 2026-05-20; API public beta announcement 2026-05-29. Current docs.x.ai model page confirms identity: aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`. Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (current; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` per official docs), `opencode/grok-build-0.1` on Zen (paid — no Free ID).
- **Context window:** 256,000 tokens (official docs.x.ai model page). Long-context surcharge applies at ≥200K prompt tokens.
- **Modalities:** text + image in; text out (official); function calling, structured outputs, reasoning: yes. Batch API: not supported. Rate limits 37 rps / 10M tpm; us-east-1/us-west-2. Speed: ~190 tokens/s vendor-measured at launch, with >90% prompt-cache hit rates reported.
- **Pricing (as of 2026-09-29):** $1.00 in / $0.20 cached / $2.00 out per 1M below 200K prompt tokens; doubles to $2.00/$0.40/$4.00 at ≥200K (whole-request rate) — official docs.x.ai. Zen rate card matches ($1/$2, $0.20 cached). Historical: original grok-code-fast-1 launch price was $0.20 in / $1.50 out / $0.02 cached (Aug 2025) — repriced with the rebrand, no free tier now.
- **Architecture:** proprietary; new from-scratch architecture trained on a programming-rich corpus; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vendor: trained specifically for agentic coding + MCP support ("mastered grep, terminal, file editing" — launch post); ObviousBench reliability: **99.3% answer pass³** at high effort (rank 27/254, 90th pct — reliability proxy, not a tool-use score)
- DuelLab GameBench 2: **39.5** (23/48, 53rd pct; model-code failure rate 0.0%)
- Terminal-Bench 2.1 / Tau2 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- LiveBench average: **69.6%** (35/43 cohort) — math_comp 95.1%, spatial 98.0%, olympiad 86.6%, tablereformat 100%, python 80.0%
- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index (v4.3): **no verified public score found**

Coding:

- SWE-bench Verified (full subset): **70.8%** — vendor's internal harness (grok-code-fast-1 launch post, 2025-08-28; same model identity per official alias list); no independent replication found
- Vibe Code Bench v1.1: **13.3%** (vals.ai, rank 52/71, 27th pct)
- KernelBench Hard: **0.0%** (0/6 problems — floor rank 14/14)
- LiveBench coding slices: code_completion 67.4%, code_generation 63.4%, python 80.0%, javascript 40.0%, typescript 40.0%
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 256K window (official); **no MRCR/RULER retrieval score published**.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** Purpose-built for tool-calling/agentic coding with function calling + structured output + MCP verified, and 99.3% answer-pass³ reliability on ObviousBench; capped by zero audited agentic benchmark (no TB2.1/Tau3/GDPval).
- **Reasoning: 68/100.** LiveBench 69.6% with excellent math/spatial slices shows real reasoning skill, but the overall rank is bottom-quintile of the current frontier cohort and no GPQA/HLE exists for cross-checking.
- **Context window: 72/100.** 256K → 200K–500K band (65–84), slightly above the 200K anchor (70); no retrieval-at-length evidence.
- **Multimodal: 63/100.** Text + image input, text-only output (official docs) → image-in band 60–75; no video/PDF/audio.
- **Coding: 60/100.** Vendor's internal-harness SWE-bench Verified 70.8% is credible for this exact model identity and matches strong LiveBench python/code slices (80% / 67.4%), but independent evidence stays weak-to-floor (Vibe 13.3%, KernelBench Hard 0.0%) — mid band, scored on mixed evidence, not branding.
- **Cost efficiency: 93/100.** $1/$2 with $0.20 cached reads and ~190 tok/s — sits exactly on the $1/$2 ≈ 93 band; long-context prompts double to $2/$4 (whole-request), still mid-cheap.
- **Overall Score: 65/100.** (62+68+72+63+60)/5 = 65.0 → 65. Best fit: fast, cheap agentic coding executor inside tuned harnesses (Grok Build/OpenCode) for everyday web-dev and debugging loops; escalate hard kernel/algorithms work and verify output on unfamiliar stacks.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (official docs.x.ai grok-build-0.1 model page, x.ai/news grok-code-fast-1 launch post, github.com/xai-org/grok-build; BenchmarkList aggregation of vals.ai Vibe Code Bench, KernelBench Hard, DuelLab GameBench 2, ObviousBench, LiveBench; OpenCode Zen docs). Scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed current pricing ($1/$2, ≥200K surcharge), aliases (grok-code-fast-1/-0825 ≙ sonic), and 256K window against live docs; added vendor SWE-bench Verified 70.8% and launch history (2025-08-28, original $0.20/$1.50 pricing); coding score 55 → 60, cost 92 → 93 per band anchors.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
