# Kimi K2.6 — findings by Kimi K3

- Source: Moonshot AI/Kimi K2.6 (`kimi-k2.6`, HF `moonshotai/Kimi-K2.6`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights flagship (third K2-class model), built for long-horizon agentic coding with a native Agent Swarm primitive (up to 300 sub-agents / 4,000 coordinated steps) and native INT4 quantization; at launch the highest-scoring open-weights model on the Artificial Analysis Intelligence Index.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (live, ~#39 weekly though usage declined ~79% over 2 months); Moonshot direct API (`kimi-k2.6`); OpenRouter, Cloudflare Workers AI, NVIDIA NIM, DeepInfra, GMI Cloud; self-host via HF (INT4 ~594 GB). Paid — no Free ID.
- **Release / knowledge:** Released 2026-04-21 (OpenCode Data catalog; my first pass had 2026-04-20 from llm-stats — one-day discrepancy, catalog governs). Catalog lists knowledge cutoff 2025-01 (implausibly early for an April-2026 model — catalog noise, unverified).
- **IDs:** `opencode/kimi-k2.6` (Zen), `kimi-k2.6` (Moonshot API), `moonshotai/Kimi-K2.6` (HF). No Zen Free ID exists.
- **Context window:** 262,144 tokens in / up to 262K catalog max output (OpenCode Data; my first pass noted a 98,304 vendor-recommended hard-reasoning output cap — both retained). MLA attention keeps KV tractable.
- **Modalities:** Text + image + video in (OpenCode Data confirms; video official-API only per first pass); text out. Thinking mode default-on; tool calls; Agent Swarms / Claw Groups primitives.
- **Pricing (as of 2026-10-11):** $0.74/M input, $3.72/M output (OpenCode Data catalog — cheaper listing than Moonshot direct's $0.95/$4.00 with $0.16 cached reads; both noted). Paid only.
- **Architecture:** 1T-total / 32B-active sparse MoE; MLA; 384 routed experts + 1 shared, 8 selected per token; 61 layers; SwiGLU; 400M-param MoonViT vision encoder; native INT4 via quantization-aware training; vocab 160K. Modified MIT license (scale clause). Open weights confirmed (OpenCode Data HF link).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **66.7%** (vendor/launch coverage) — AA coding-agents pass@1: **64.3%** (independent, new this pass; GPT-5.5 ~82.7%, Gemini 3.1 Pro 68.5%, Opus 4.6 65.4% on respective harnesses)
- BrowseComp: **83.2%** plain, **86.3%** with Agent Swarms (K2.5: 78.4%)
- DeepSearchQA: **92.5 F1** (GPT-5.4: 78.6)
- Tool-invocation success rate: **96.6%** (Moonshot tool benchmark — highest of any open-weights model at launch)
- MCP-Atlas: ~74% (vs Opus 4.7 ~77%; approximate, cited in comparison coverage)
- GDPval-AA: **1484 Elo** (DeepSeek V4 Pro: 1554)
- Claw-Eval / ClawProBench / Tau3: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **54** — highest open-weights score at launch, #4 overall behind closed flagships (57); median open-weights: 30
- GPQA Diamond: **90.5%** (Opus 4.7: 94.2%)
- HLE (Full, with tools): **54.0** — led every compared model at launch (GPT-5.4: 52.1, Opus 4.6: 53.0)
- AIME 2026: **96.4%**; HMMT 2026: **92.7%**
- AA-Omniscience hallucination rate: **39%** (K2.5: 65%; Opus 4.7 ~31%)
- MMMU-Pro: **79.4%**; MathVision-with-python: **93.2%**
- LCR / MLCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (official HF card `moonshotai/Kimi-K2.6` via OpenCode Data; matches first-pass; K2.5: 76.8%; Opus 4.7: 87.6% leads)
- SWE-bench Pro: **58.6%** vendor claim (ties GPT-5.5) — CONFLICT: Artificial Analysis' coding-agents scaffold measures **27.3% pass@1** (new this pass; scaffold sensitivity, both retained)
- SWE-bench Multilingual: **76.7%**
- SWE-Atlas Codebase QnA (AA): **59.8** pass@1 — new this pass (artificialanalysis.ai/agents/coding-agents)
- AA Coding Agent Index: **50.5** average pass@1 (artificialanalysis.ai — new this pass)
- LiveCodeBench v6: **89.6%** (DeepSeek V4 Pro leads at 93.5%)
- Code Arena WebDev: **1529 Elo** — #6 of 67 (2026-04-26), ahead of every other open-weights model
- Vendor reference run: 12+ hour autonomous coding session, 4,000+ tool calls (ported a Qwen 3.5-0.8B inference engine to Zig; throughput 15 → 193 tok/s)

Long context:

- 262K window with documented long-session stability; catalog max output 262K; no MRCR / RULER retrieval percentage published.

### Normalized scores (1–100)

- **Tool use: 85/100.** Unchanged: 96.6% tool-invocation success, launch-leading BrowseComp (86.3% swarms) and DeepSearchQA 92.5 F1, plus native 300-agent orchestration. Capped: TB measurements trail GPT-5.5.
- **Reasoning: 88/100.** Unchanged: GPQA 90.5%, HLE-with-tools 54.0 (beat every closed model at launch), AIME 96.4%, AA Index 54. Capped: hallucination 39% still ~8 points behind Opus 4.7.
- **Context window: 75/100.** Unchanged: 262K total in the 200–500K band; catalog confirms full-window output; well short of the 1M tier.
- **Multimodal: 80/100.** Unchanged: image + video input (OpenCode-confirmed) with 400M MoonViT (MMMU-Pro 79.4%); text-only output, no audio, video official-API-only.
- **Coding: 88/100.** Unchanged: SWE-bench Verified 80.2% (official HF-confirmed), LiveCodeBench 89.6%, WebDev Elo 1529 (#6/67), 12-hr autonomous run. Capped: SWE-bench Pro scaffold spread (58.6% vendor vs 27.3% AA pass@1); Opus 4.7 still leads SWE-V.
- **Cost efficiency: 90/100.** Unchanged, verified: $0.74/$3.72 (catalog, OpenRouter tariff) with free self-hosting; ~5–6x cheaper than Opus 4.7 on equivalent agent workloads. Capped by verbosity (170M output tokens on the AA index).
- **Overall Score: 83.2/100.** Mean of the five non-cost dims (85+88+75+80+88)/5 = 83.2 (unchanged). Best fit: unsupervised long-horizon coding agents and parallelizable research/refactor workloads on open weights, at 5–6x below closed-frontier prices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (OpenCode Data `moonshotai/kimi-k2-6` — official HF-card SWE-V row, AA coding-agents rows, catalog pricing/usage verification; Codersera complete guide with vendor + AA + Code Arena numbers from first pass; LLM-stats vs catalog release-date conflict noted). Second pass over my 2026-09-29 file; scores are normalized 1–100 interpretations, not official vendor scores. Reporting on a Moonshot-family model — all numbers cited from public sources, not internal knowledge.
- Future sources: add a new file next to this one using the same headings.
