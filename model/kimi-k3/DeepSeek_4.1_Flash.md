# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also served as `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship; API ID `kimi-k3`). Not an alias of Kimi K2.7 Code — it is the next generation in the same family.
- **Short description:** Moonshot AI's 2.8-trillion-parameter MoE flagship (released 2026-07-16), billed as the world's first open 3T-class model, built for long-horizon agentic coding, knowledge work and 1M-token reasoning with native vision.
- **Provider / access:** Moonshot API `https://api.moonshot.ai/v1/...` (model `kimi-k3`), first-party apps (Kimi.ai, Kimi Work, Kimi Code) and OpenRouter (`moonshotai/kimi-k3`); Chat Completions-compatible. No OpenCode Zen ID found.
- **Release / knowledge:** Released 2026-07-16; max thinking effort by default at launch (low/high effort promised later); full weights promised by 2026-07-27. Knowledge cutoff: no verified public value found.
- **IDs:** `moonshotai/kimi-k3` (OpenRouter), `kimi-k3` (Moonshot API). No Zen Free ID exists, so cost is scored on paid pricing.
- **Context window:** 1,048,576 (1M) tokens in; max output 131,072 default, up to 1,048,576 (Benchgen vendor card) — HokAI lists 128,000 output. Window confirmed by Moonshot's blog plus third-party evaluator (IntuitionLabs/Artificial Analysis, 2026-09-05).
- **Modalities:** text + image in; text (plus tool calls/code) out; native vision, thinking always on, tool calls. No audio or video input; PDF corpora are consumed as rendered images.
- **Pricing (as of 2026-09-20):** paid — $3.00 in / $15.00 out per 1M tokens, $0.30 cache-hit input, no surcharge for the full 1M window; ≈$6.00/1M blended at 3:1; Artificial Analysis measured ≈$0.94 per task. No free tier found.
- **Architecture:** 2.8T total-parameter sparse MoE (896 experts, 16 activated per token; active-parameter count reported as ~280B by HokAI vs 104B in the technical-report digest — unresolved), Stable LatentMoE + Kimi Delta Attention (KDA) + Attention Residuals (AttnRes), MXFP4 weights / MXFP8 activations. Open-weight license described as Apache 2.0 (Benchgen) vs Modified-MIT-style (HokAI) — conflicting; weights were pending at launch.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (vendor-reported; half a point behind GPT-5.6 Sol and ahead of every other model in Moonshot's suite — HokAI / Benchgen)
- BrowseComp: **91.2%** with context compaction triggered at 300K tokens, **90.4%** with the full uncompacted 1M window (Moonshot Kimi K3 tech blog)
- Aider Polyglot / Program Bench: **77.8%** each (vendor-reported — HokAI)
- SWE Marathon: **42.0%** (vendor-reported — HokAI)
- MCP Atlas: run on the 500-task public subset, 100-turn limit, Gemini 3.1 Pro judge — no numeric score published, so no verified public score found
- AutomationBench: 600-task public subset — numeric value not published in the sources found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA / AA-Briefcase / APEX-Agents: Moonshot cites Artificial Analysis but publishes no figure in the pages found → no verified public number found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (highest published open-weight result found; ahead of Claude Opus 4.8 at 91.0% — HokAI / Benchgen / vendor)
- HLE: **43.5%** (vendor-reported — HokAI)
- AA-LCR: **74.7** (Artificial Analysis long-context reasoning; leads every comparison model selected by Moonshot — IntuitionLabs, 2026-09-05)
- Artificial Analysis Intelligence Index: **57**, measured cost **$0.94/task** (cheaper than GPT-5.6 Sol at $1.04 and ≈half of Opus 4.8 at $1.80 — HokAI citing AA)
- BenchLM composite: **74.4 / 100, #7 of 230** tracked models; strongest category "Multimodal & Grounded" #1 (data as of 2026-09-18)
- LMArena: **#8** (vendor-reported)
- CritPt / MLCR / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **67.5%** (vendor-reported; ranks 23rd of 28 peers publishing the same figure — HokAI, checked 2026-07-19)
- DeepSWE: **67.5%** (KimiCode harness) / **67.3%** (mini-SWE-agent harness) — HokAI
- Autonomous engineering artefacts reported qualitatively: K3 built a complete Triton-like GPU compiler ("MiniTriton") with its own IR, optimization passes and PTX codegen, and reached near-parity with Claude Fable 5 and GPT-5.6 Sol on kernel optimization (vendor / Benchgen) — no harness score attached
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / Coding Index: no verified public score found

Long context:

- No standardized needle-in-a-haystack, RULER or LongBench score has been published by Moonshot or any independent evaluator found — exact-fact retrieval at depth inside the 1M window is unverified (IntuitionLabs, 2026-09-05).
- Retrieval-adjacent evidence: BrowseComp 90.4 at the full uncompacted 1M window vs 91.2 with compaction at 300K; AA-LCR 74.7.
- Architecture mitigations: KDA + AttnRes are explicitly designed to hold recall across the full window instead of degrading past ~100K; ≥90% cache-hit rates are typical in coding workloads.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 88.3% plus BrowseComp 91.2% and 77.8% Aider/Program Bench put it in the frontier tool band; capped by an 88.3% TB rather than 90%+, by no published Tau3 or GDPval-AA figure, and by MCP-Atlas being reported only as a 500-task subset run without a number.
- **Reasoning: 93/100.** GPQA Diamond 93.5% (best open-weight result found), HLE 43.5%, AA-LCR 74.7, AA Intelligence Index 57 and BenchLM #7 of 230; held just below the 95+ frontier tier by the 57 Index and by unverified exact-fact retrieval (no MRCR/RULER).
- **Context window: 96/100.** 1,048,576-token input with 131K+ output sits squarely in the ≥1M band, but the ≥98% retrieval-at-512K+ condition for 100 is unmet — IntuitionLabs found no standardized retrieval evaluation at all.
- **Multimodal: 70/100.** Native image input with text-only output (MMMU-Pro 81.6%, MathVision 97.8%, CharXiv 91.3% with Python tools, BenchLM multimodal category #1) is the top of the image-only band; capped by no audio/video input, no PDF text ingestion and no non-text output.
- **Coding: 86/100.** DeepSWE 67.5%, SWE-bench Verified 67.5%, Program Bench/Aider 77.8%, SWE Marathon 42.0%, plus strong qualitative long-horizon engineering reports; the SWE-bench Verified 67.5% is well short of the 74%+/85%+ frontier references that drive 90+, and LiveCodeBench/SciCode/Vibe are unpublished.
- **Cost efficiency: 63/100.** Premium paid pricing ($3/$15 per 1M, $0.30 cached, no free tier) maps to the ~60 anchor; nudged up for a sub-$1 AA-measured cost per task and free automatic prefix caching, but no Zen Free ID exists.
- **Overall Score: 87/100.** (91 + 93 + 96 + 70 + 86) / 5 = 87.2 → **87**. Best fit: teams that need near-frontier reasoning plus a genuine 1M window and will pay premium rates; the image-only modality and middling SWE-bench Verified argue for pairing it with a coding specialist.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — Moonshot AI Kimi K3 tech blog, Benchgen model card (last updated 2026-07-28), HokAI review (checked 2026-07-19), BenchLM model record (data 2026-09-18) and IntuitionLabs long-context evaluation (2026-09-05); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
