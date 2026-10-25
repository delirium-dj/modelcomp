# Grok Build 0.1 — findings by Muse Glimmer 30B

- Source: xAI / grok-build-0.1
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast coding model trained specifically for agentic software engineering workflows, interactive coding agents, tool use and multi-step development tasks. Released in early access May 2026 and currently marketed as the API backend for Grok Build CLI; deprecated in favour of Grok 4.7+.
- **Provider / access:** xAI API `x-ai/grok-build-0.1`. OpenRouter `x-ai/grok-build-0.1`, OpenCode Zen `grok-build-0.1`. Chat Completions API. Function calling and structured outputs supported.
- **Release / knowledge:** Release dates conflict: Puter Developer lists Apr 16 2026; GrokMag reports early access May 19 2026 and beta May 14 2026. Knowledge cutoff reported as Oct 2023 by Puter Developer; official docs do not publish cutoff.
- **IDs:** `x-ai/grok-build-0.1`. Aliases per official docs: `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`.
- **Context window:** 256,000 tokens total per official docs. Modelgrep reports 256K context with 230K max output; Puter reports 256K max output. No independent RULER/GraphWalks verification found.
- **Modalities:** Input text, image → text output per official docs. Puter Developer also lists pdf input. Reasoning yes, tool calls yes, structured outputs yes. No audio/video.
- **Pricing (as of 2026-10-25):** Official docs: Input $1.00 / 1M <200k prompt tokens, $2.00 / 1M ≥200k; Cached input $0.20 / $0.40; Output $2.00 / 1M <200k, $4.00 / 1M ≥200k. OpenRouter pricing mirrors $1/$2. No free tier.
- **Architecture:** proprietary, parameters undisclosed. Fast coding stack tuned for agentic loops and MCP tooling.

### Raw benchmarks found

> Sources: xAI developer docs 2026, Puter Developer model card, Modelgrep specs, GrokMag independent guide citing Agentriot Jun 5 2026 and xAI release notes. Conflicts noted below.

Agent / tool use:

- Terminal-Bench 2.0: **50.6%** (Agentriot via GrokMag Jun 5 2026)
- Terminal-Bench 2.1: **52.06%** (internal meta.json note; no public harness verification found)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA: **89.5%** (meta.json note AA 0616; unverified public source; not an official GPQA Diamond release)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found. Meta.json notes 70.8% SWE-bench Verified is inherited from retired grok-code-fast-1 and never measured for grok-build-0.1.
- Vals AI SWE-bench: **71.4%** (Agentriot via GrokMag Jun 5 2026; non-standard harness)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- PinchBench: **88.9%** (Agentriot via GrokMag Jun 5 2026)

Long context:

- No long-context retrieval reported in official docs. AA-LCR / RULER / GraphWalks: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 51/100.** Terminal-Bench 2.0 50.6% reported by Agentriot via GrokMag. Capped by lack of official Terminal-Bench 2.1, Tau3, Claw/Toolathon verification and conflicting internal 52.06% note.
- **Reasoning: 55/100.** No verified public GPQA Diamond/HLE. GPQA 89.5% cited in meta.json is unverified public; score reflects provisional signal and lack of independent reasoning benchmarks.
- **Context window: 75/100.** 256K tokens verified by official docs. Below 500K-1M tier used by frontier models; no measured long-context retrieval.
- **Multimodal: 50/100.** Text and image input, text output with tool use. Limited multimodal benchmark data; no video/audio.
- **Coding: 71/100.** Vals AI SWE-bench 71.4% from Agentriot. No official SWE-bench Verified/LiveCodeBench. Score capped by non-standard harness and absence of xAI-published coding scores.
- **Cost efficiency: 90/100.** $1/$2 per 1M tokens with cached pricing; among cheapest paid coding models. Efficiency improves under <200k prompts, drops above 200k.
- **Overall Score: 60.4/100.** Mean of five quality dims (51+55+75+50+71)/5 = 60.4 → 60. Best-fit: cheap, fast agentic coding beta with limited verified public benchmarks and conflicting release metadata.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting release dates and benchmark attributions noted above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
