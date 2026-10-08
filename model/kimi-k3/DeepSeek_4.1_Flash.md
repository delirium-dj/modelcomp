# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also served as `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-10-06 (UTC)
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

- Terminal-Bench 2.1: **88.3%** (vendor-reported; half a point behind GPT-5.6 Sol — HokAI / Benchgen); Terminal-Bench 2.1 via Vals **80.9%**; AA Terminal-Bench 4.0 **12.6%**
- BrowseComp: **91.2%** with context compaction triggered at 300K tokens, **90.4%** with the full uncompacted 1M window (Moonshot Kimi K3 tech blog)
- MCP Atlas: **84.2%** (Moonshot Kimi K3 launch blog) — the earlier "500-task subset, no number" caveat is resolved by a published figure; Toolathlon-Verified **73.2%**
- GDPval-AA: **51.8% / 1537 Elo** (Artificial Analysis, via BenchLM); AA Briefcase **1501**; AA Harvey LAB **94.6%**; AA Tau3 Banking **46.0%**; AA EnterpriseOps-Gym **45.3%**; AA AutomationBench **58.3%**
- DeepSearchQA: **95.0%**; AutomationBench **30.8%**; JobBench **52.9%**; APEX-Agents **37.6%**; APEX-Agents-AA **41.3%**; SpreadsheetBench 2 **34.8%**; DECK-Bench **73.5%**; AA ITBench **47.7%**; AA AnalystAgent **38.8%**; ApprenticeBench **18%**
- Aider Polyglot / Program Bench: **77.8%** each (vendor-reported — HokAI)
- SWE Marathon: **42.0%** (vendor-reported — HokAI)
- Tau2-Bench / Claw-Eval / ClawProBench / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (highest published open-weight result found; ahead of Claude Opus 4.8 at 91.0% — HokAI / Benchgen / vendor); AA-GPQA Diamond **93.5%**, Vals **92.9%**
- HLE: **56%** with tools / **43.5%** without (Moonshot Kimi K3 launch blog; AA-HLE **46.9%**)
- AA-LCR: **88.7%** (Artificial Analysis long-context reasoning, via BenchLM) — this corrects the earlier IntuitionLabs 74.7 reading; CritPt **23.4%**; MLCR-AA **38.3%**
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (ARC Prize verified)
- Artificial Analysis Intelligence Index: **43.6%** (Artificial Analysis, via BenchLM) — conflicts with the earlier HokAI-cited 57; both are listed, while the measured cost **$0.94/task** stands
- BenchLM composite: **74.4 / 100, #7 of 230** tracked models; strongest category "Multimodal & Grounded" #1 (data as of 2026-09-18)
- LMArena: **#8** (vendor-reported); MMLU-Pro (Vals) **88.0%**
- AA-Omniscience Index **19.7%** / Accuracy **47.6%** / Hallucination Rate **53.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **67.5%** (vendor-reported; ranks 23rd of 28 peers — HokAI, checked 2026-07-19); SWE-bench (Vals) **93.4%**
- DeepSWE: **67.5%** (KimiCode harness) / **67.3%** (mini-SWE-agent harness) — HokAI
- LiveCodeBench (Vals): **87.2%**; AA-SciCode: **59.5%** (frontier 55%+); AA Coding Index: **76.2%** (frontier 70%+)
- FrontierSWE: **81.2%**; ProgramBench: **77.8%**; Kimi Code Bench v2: **72.9%**; VulcanBench v3 **73.7%**; OpenHarmony Bench **57.3%**; CursorBench 3.2 **60.8%**; FrontierSWE v2 **25.9%**; PostTrainBench v1.1 **32.0%**
- Autonomous engineering artefacts reported qualitatively: K3 built a complete Triton-like GPU compiler ("MiniTriton") with its own IR, optimization passes and PTX codegen, and reached near-parity with Claude Fable 5 and GPT-5.6 Sol on kernel optimization (vendor / Benchgen) — no harness score attached
- Vibe Code Bench / SWE-Atlas: no verified public score found

Multimodal:

- MMMU-Pro: **81.6%** (with Python 83.4%; AA-MMMU-Pro 80.5%); CharXiv: **91.3%** (without tools 84.8%); MathVision: **94.3%** (with Python 97.8%)
- OfficeQA Pro: **63.3%**; OmniDocBench **91.1%**; ZeroBench **23.0%** (with Python 41.0%); PerceptionBench **58.5%**; Design Arena **1343**. Image in, text out; no audio/video and no PDF text ingestion.

Long context:

- No standardized needle-in-a-haystack, RULER or LongBench score has been published by Moonshot or any independent evaluator found — exact-fact retrieval at depth inside the 1M window is unverified (IntuitionLabs, 2026-09-05).
- Retrieval-adjacent evidence: BrowseComp 90.4 at the full uncompacted 1M window vs 91.2 with compaction at 300K; AA-LCR 88.7.
- Architecture mitigations: KDA + AttnRes are explicitly designed to hold recall across the full window instead of degrading past ~100K; ≥90% cache-hit rates are typical in coding workloads.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 88.3%, BrowseComp 91.2%, MCP Atlas 84.2% and 77.8% Aider/Program Bench put it in the frontier tool band; capped by an 88.3% TB rather than 90%+, by AA Tau3-Banking 46.0% and GDPval-AA 1537 still under the 50%+/1750+ frontier references, and by Terminal-Bench 2.1 via Vals at 80.9%.
- **Reasoning: 93/100.** GPQA Diamond 93.5% (best open-weight result found), HLE 56% with tools (43.5% without), AA-LCR 88.7 and BenchLM #7 of 230; held just below the 95+ frontier tier by the AA Intelligence Index at 43.6 and by unverified exact-fact retrieval (no MRCR/RULER).
- **Context window: 96/100.** 1,048,576-token input with 131K+ output sits squarely in the ≥1M band, but the ≥98% retrieval-at-512K+ condition for 100 is unmet — IntuitionLabs found no standardized retrieval evaluation at all.
- **Multimodal: 70/100.** Native image input with text-only output (MMMU-Pro 81.6%, MathVision 97.8%, CharXiv 91.3% with Python tools, BenchLM multimodal category #1) is the top of the image-only band; capped by no audio/video input, no PDF text ingestion and no non-text output.
- **Coding: 87/100.** SWE-bench (Vals) 93.4%, DeepSWE 67.5%, SWE-bench Verified 67.5%, Program Bench/Aider 77.8%, SWE Marathon 42.0%, AA-SciCode 59.5% (frontier 55%+) and AA Coding Index 76.2% (frontier 70%+), plus strong qualitative long-horizon engineering reports; the SWE-bench Verified 67.5% remains short of the 74%+ DeepSWE frontier reference that drives 90+.
- **Cost efficiency: 63/100.** Premium paid pricing ($3/$15 per 1M, $0.30 cached, no free tier) maps to the ~60 anchor; nudged up for a sub-$1 AA-measured cost per task and free automatic prefix caching, but no Zen Free ID exists.
- **Overall Score: 87/100.** (91 + 93 + 96 + 70 + 87) / 5 = 87.4 → **87**. Best fit: teams that need near-frontier reasoning plus a genuine 1M window and will pay premium rates; the image-only modality and middling SWE-bench Verified argue for pairing it with a coding specialist.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: fresh public internet research re-verified 2026-10-06 — Moonshot AI Kimi K3 tech blog, BenchLM model record (data 2026-10-07) citing Moonshot, Artificial Analysis, Vals, Cursor and ARC Prize leaderboards, plus the earlier Benchgen/HokAI/IntuitionLabs sources; previously unpublished MCP Atlas, GDPval-AA, Tau3, LCR, SciCode and LiveCodeBench rows were filled. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
