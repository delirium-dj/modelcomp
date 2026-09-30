# Kimi K2.6 — findings by Kimi K3

- Source: Moonshot AI/Kimi K2.6 (`kimi-k2.6`, HF `moonshotai/Kimi-K2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights flagship (third K2-class model), built for long-horizon agentic coding with a native Agent Swarm primitive (up to 300 sub-agents / 4,000 coordinated steps) and native INT4 quantization; at launch the highest-scoring open-weights model on the Artificial Analysis Intelligence Index.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (chat completions); Moonshot direct API `https://api.moonshot.ai/v1` (OpenAI-compatible, model ID `kimi-k2.6`); OpenRouter, Cloudflare Workers AI, NVIDIA NIM, DeepInfra, GMI Cloud; self-host via HF (INT4 ~594 GB). On Zen's current list, paid — no Free ID.
- **Release / knowledge:** Released 2026-04-20 (nine months after K2, five after K2.5/K2-Thinking). Knowledge cutoff not stated in coverage reviewed.
- **IDs:** `opencode/kimi-k2.6` (Zen), `moonshotai/kimi-k2.6` style (`kimi-k2.6` on Moonshot API), `moonshotai/Kimi-K2.6` (HF). No Zen Free ID exists.
- **Context window:** 262,144 tokens total (262K); MLA attention keeps KV tractable. Max output up to 98,304 tokens for hard reasoning (per vendor guidance via Codersera).
- **Modalities:** Text + image (base64 PNG/JPG) + video (MP4, official API only — vLLM/SGLang do not serve video) in; text out. Thinking mode default-on (`thinking: enabled|disabled`, `keep: all` for multi-turn reasoning preservation). OpenAI-schema tool calls; native Agent Swarms / Claw Groups primitives.
- **Pricing (as of 2026-09-29):** $0.95/M input, $4.00/M output, $0.16/M cache reads (83% input-side discount, applied automatically) on Moonshot direct and OpenCode Zen; OpenRouter slightly cheaper ($0.74/$3.50). Paid only.
- **Architecture:** 1T-total / 32B-active sparse MoE; MLA; 384 routed experts + 1 shared, 8 selected per token; 61 layers; SwiGLU; 400M-param MoonViT vision encoder; native INT4 via quantization-aware training; vocab 160K. Modified MIT license (scale clause: "Kimi K2" UI attribution above ~100M MAU or $20M/month revenue).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **66.7%** (vendor/launch coverage; GPT-5.5 ~82.7%, Gemini 3.1 Pro 68.5%, Opus 4.6 65.4%)
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

- SWE-bench Verified: **80.2%** (K2.5: 76.8%; DeepSeek V4 Pro: 80.6%; Opus 4.7: 87.6% leads)
- SWE-bench Pro: **58.6%** — ties GPT-5.5 (57.7%); ahead of Gemini 3.1 Pro (54.2%)
- SWE-bench Multilingual: **76.7%**
- LiveCodeBench v6: **89.6%** (DeepSeek V4 Pro leads at 93.5%)
- Code Arena WebDev: **1529 Elo** — #6 of 67 (2026-04-26), ahead of every other open-weights model
- Vendor reference run: 12+ hour autonomous coding session, 4,000+ tool calls (ported a Qwen 3.5-0.8B inference engine to Zig; throughput 15 → 193 tok/s)

Long context:

- 262K window with documented long-session stability (multi-hour agent runs); no MRCR / RULER retrieval percentage published in coverage reviewed.

### Normalized scores (1–100)

- **Tool use: 85/100.** 96.6% tool-invocation success, launch-leading BrowseComp (86.3% with swarms) and DeepSearchQA (92.5 F1), plus native 300-agent orchestration — the best open-weights agentic tooling story of its cycle. Capped: Terminal-Bench 2.0 66.7% trails GPT-5.5's ~82.7%, and MCP-Atlas (~74%) sits behind Opus 4.7.
- **Reasoning: 88/100.** GPQA 90.5%, HLE-with-tools 54.0 (beat every closed model compared at launch), AIME 96.4%, and AA index 54 — just below the 60+ frontier band. Capped: hallucination rate (39%) still ~8 points behind Opus 4.7, and Opus 4.7 retains the graduate-science edge (94.2% GPQA).
- **Context window: 75/100.** 262K total in the 200–500K band, with MLA making it serveable and documented multi-hour session coherence. Capped: well short of the 1M tier competitors (DeepSeek V4, Kimi K3) reached in 2026.
- **Multimodal: 80/100.** Image + video input with a doubled 400M MoonViT encoder (MMMU-Pro 79.4%, competitive with Opus 4.7 on dense documents) — video band. Capped: text-only output, no audio, and video is official-API-only (not self-hostable yet).
- **Coding: 88/100.** SWE-bench Verified 80.2%, Pro 58.6% tied with GPT-5.5, LiveCodeBench 89.6%, WebDev Elo 1529 (#6/67), and the only demonstrated 12-hour autonomous coding run in its class. Capped: Opus 4.7 still leads SWE-bench Verified by ~7 points; V4 Pro leads LiveCodeBench.
- **Cost efficiency: 90/100.** $0.95/$4.00 with automatic 83% cached-input discount (~$1.71 blended at 3:1) — 5–6x cheaper than Opus 4.7 on equivalent agent workloads, plus free Modified-MIT self-hosting. Capped: DeepSeek V4 Pro undercut it ~4.6x on output at standing prices, and verbosity is high (170M output tokens on the AA index).
- **Overall Score: 83.2/100.** Mean of the five non-cost dims (85+88+75+80+88)/5 = 83.2. Best fit: unsupervised long-horizon coding agents and parallelizable research/refactor workloads on open weights, at 5–6x below closed-frontier prices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Codersera complete guide with vendor + Artificial Analysis + Code Arena numbers, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
