# North Mini Code — findings by Space Bunny

- Source: Cohere / Cohere Labs (`cohere/north-mini-code`; weights `CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's first developer-focused model and the debut of its North family — a 30B-total / 3B-active sparse MoE built specifically for agentic software engineering and terminal tasks, trained across multiple scaffolds (OpenCode, SWE-Agent, mini-SWE-Agent) rather than optimized for one. Open weights under Apache 2.0, sized so it runs with low latency on local hardware as well as through hosted APIs.
- **Provider / access:** Open weights on Hugging Face (`CohereLabs/North-Mini-Code-1.0`, plus an FP8 quantized variant); hosted on the Cohere API, in OpenCode, and via a Cohere Hugging Face Space. Also routed as `cohere/north-mini-code:free` on OpenRouter (OpenAI-compatible Chat Completions, $0) and as `cohere/north-mini-code` on anyrouter.
- **Release / knowledge:** Announced and released **2026-06-09** (Hugging Face blog by the Cohere Code Agents Team); OpenRouter listing created 2026-06-17; anyrouter records 2026-06-18. Knowledge cutoff not published.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (HF), `cohere/north-mini-code` (Cohere API / anyrouter), `cohere/north-mini-code:free` (OpenRouter). A Zen Free ID is **not** present on OpenCode Zen's live catalog, so cost is scored on the verified OpenRouter free route below.
- **Context window:** **256,000 tokens total with 64,000 max output**, stated identically on the model card, the anyrouter record and OpenRouter (all three agree). Cohere's recommended vLLM launch uses `--max-model-len 320000`; the OpenCode config example sets context 256000 / output 64000.
- **Modalities:** text in; text out; **interleaved reasoning** (thinking blocks must be passed back into subsequent agentic steps for best results); tool calling via the `cohere_command4` parser with `--enable-auto-tool-choice`; structured output via JSON schema; sampling recommended at temperature 1.0 / top_p 0.95.
- **Pricing (as of 2026-10-03):** **$0 in / $0 out** on the OpenRouter `:free` route at time of check; Cohere's own API rate card was not verified in this pass. AnyRouter lists Cohere and OpenRouter as BYOK routes charged by the provider, with AnyRouter itself at $0. The free route carries the usual aggregator caveats (rate limits, no SLA, unknown provider-side data handling).
- **Architecture:** Decoder-only sparse Mixture-of-Experts. 128 experts with 8 activated per token, SwiGLU FFN blocks, sigmoid-gated router, one dense layer before the sparse stack. Attention interleaves sliding-window RoPE attention with global NoPE attention at a 3:1 ratio. 30B total / **3B active** parameters. Post-training: two-stage cascaded SFT (70% code tokens, 43% agentic tool-use data, 27% single-turn competitive/scientific programming) followed by asynchronous multi-environment RLVR.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Verified: **80.2% pass@10** (SFT checkpoint, Swe-Agent v1.1.0 harness) and **61.0% pass@1** with the mini-SWE-Agent harness (Cohere, HF blog 2026-06-09; harness named per figure)
- SWE-Bench Verified, RLVR effect: **+3.0% absolute pass@1** over the SFT initialization
- Terminal-Bench v2: **55.1% pass@10** (SFT checkpoint, ReAct single-terminal-tool harness on Harbor Tmux); RLVR added **+7.9% absolute pass@1** over SFT
- SWE-Bench Pro / Terminal-Bench Hard / GDPval-AA / Toolathon / MCP-Atlas / Claw-Eval: **no verified public score found**
- Artificial Analysis Agentic Index: **1.1** (OpenRouter benchmark feed, Artificial Analysis source) — a near-floor result that stands in sharp contrast to the vendor's own agentic numbers
- Internal human preference eval: **66.1%** aggregate win rate for the RLVR checkpoint over the SFT-only checkpoint across 85 samples (Cohere internal, not a public benchmark)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (an anyrouter listing shows a bare "0.8" figure with no harness or percent sign — not usable as a score)
- HLE: no verified public score found (same caveat as GPQA above)
- Artificial Analysis Intelligence Index: **9.9** (OpenRouter benchmark feed) — Cohere itself reports only the Coding Index, not an overall Intelligence Index
- LiveCodeBench v6 and SciCode were run by Cohere, but only inside the benchmark chart image; **no extractable public score** found for either

Coding:

- Artificial Analysis Coding Index: **36.5** (current OpenRouter/AA feed); Cohere reported **33.4** at launch. Both are recorded — the index moved between June and October 2026.
- Cohere's claim, measured against same-size and larger open models: Coding Index 33.4 beat Qwen3.5 (35B-A3B), Gemma 4 (26B-A4B), Devstral Small 2 (24B dense), Nemotron 3 Super (120B-A12B), Mistral Small 4 (119B-A6B) and Devstral 2 (123B) (HF blog, 2026-06-09)
- SciCode / LiveCodeBench v6: run per Cohere's stated methodology but published only inside a chart image — **no verified public number found**
- SWE-bench Verified: 80.2% pass@10 / 61.0% pass@1 (see above) — the strongest verified coding evidence for this model

Long context:

- No MRCR / RULER / GraphWalks retrieval result at any window length found. Cohere's RLVR training itself used a **128K global context window** across all rollouts, which is a training configuration fact, not a retrieval-quality measurement.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.

- **Tool use: 62/100.** The one hard number is Terminal-Bench v2 **55.1% pass@10** (47.2% after subtracting the RLVR delta's pre-RLVR baseline is not stated, so the published figure is used as-is), which lands squarely in the methodology's mid band (TB2.1 45–60% → 50–70). Held there and not higher because SWE-Bench Pro, Tau3, GDPval-AA and Claw-Eval are all absent, and because the independent Artificial Analysis Agentic Index of **1.1** is a near-floor reading that contradicts the vendor's harness-specific numbers — a real and unresolved disagreement, not something to average away.
- **Reasoning: 30/100.** No GPQA, HLE, LCR, CritPt or independent Intelligence Index number exists in any extractable form; the only overall-capability signal is an AA Intelligence Index of **9.9**, which is the bottom of the measured field. Scored as a low-evidence placeholder anchored to that index rather than to the coding-focused launch narrative — this model was never marketed as a reasoner.
- **Context window: 80/100.** Verified 256,000 total / 64,000 max output (model card, OpenRouter and anyrouter agree) maps to the 200K–500K = 65–84 band with 200K = 70 as the anchor; the 256K figure and a 64K output limit justify the upper half. Not higher: no MRCR/RULER/GraphWalks retrieval result exists at any window length, and the only long-context datum is the 128K window used during RLVR training.
- **Multimodal: 15/100.** Text in / text out on every source — the model card, OpenRouter (`text->text`) and anyrouter all agree. No image, video, PDF or audio path, no non-text output. This is the methodology's plain text-only value.
- **Coding: 75/100.** SWE-Bench Verified **80.2% pass@10** and **61.0% pass@1**, plus Terminal-Bench v2 55.1%, put this model at or above the methodology's mid band (LiveCodeBench 80% with weak Vibe/SciCode → 65–75). Not in the 90–100 frontier band: that needs DeepSWE 74%+ / TB2.1 85%+ / SciCode 55%+, and SciCode and LiveCodeBench v6 scores exist only inside an un-extractable chart image. The AA Coding Index of 36.5 is comparatively modest.
- **Cost efficiency: 92/100.** $0 in / $0 out verified on OpenRouter's `:free` route. Held 8 points under a flat $0 = 100 because it is a third-party free tier with rate limits, no SLA and unverified data handling, and because no first-party Cohere API price was verified in this pass.
- **Overall Score: 52.4/100.** Mean of (62 + 30 + 80 + 15 + 75) / 5 = 52.4. Best fit as a cheap, fast local or free-tier coding agent for repo-level edits and terminal chores where a 3B-active model keeps latency low — not a general-purpose assistant, and the near-floor independent Agentic Index argues against putting it in charge of unattended agentic loops.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (Cohere's official Hugging Face model card and release blog for architecture, harness methodology and the SWE-bench/Terminal-Bench figures; OpenRouter model API for context, pricing and the Artificial Analysis benchmark feed; anyrouter's model record for cross-checking context and capabilities); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `North_Mini_Code.md`, using the same headings.