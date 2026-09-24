# Gemini 3.1 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1-generation Flash model (the Flash sibling of Gemini 3.1 Pro), balancing speed, capability and cost with full multimodal input. Top use case: fast multimodal assistant work.
- **Provider / access:** Google AI Studio/Gemini API; **no OpenCode Zen ID** in the current Zen list (Zen carries Gemini 3.1 Pro and 3.5+ Flash models).
- **Release / knowledge:** 3.1 generation, early 2026 (exact date not published on tracked aggregators); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash` (no Zen ID; no Free ID verified)
- **Context window:** 1M tokens total (curated platform metadata; BenchmarkList profile).
- **Modalities:** text/image/audio/PDF in; text out; reasoning yes (Flash line); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** per-token list price **not published** on tracked aggregators; a free tier exists on Google AI Studio — cost scored provisionally.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

> Coverage caveat: Gemini 3.1 Flash has no BenchLM/AA leaderboard page this session; the only verified public rows are on BenchmarkList (largely academic/niche benchmarks). Core harness scores (Terminal-Bench, GPQA, HLE, GDPval, LiveCodeBench) were **not found** for this exact ID. Scores below are provisional.

Agent / tool use:

- ToolBench-X (tool-environment unreliability): **0.42 overall** (BenchmarkList — 50th percentile of 13 models; parallel 0.53, sequential 0.34)
- Terminal-Bench / Tau2/Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- HOLMES (higher-order logical reasoning): **54.31** (BenchmarkList — rank 4 of 12, 73rd percentile; law 84.0%)
- LEAF (event-augmented forecasting): **38.5%** (BenchmarkList — 40th percentile)
- GPQA / HLE / LCR / CritPt / AA Index: **no verified public score found** for this ID

Coding:

- SWE-Pro: **93.1%** patch ✓ (Oracle) / 50.0% test ✓ (BenchmarkList — rank 3 of 6)
- PerfCodeBench (system-level optimization): **45.9%** CGRE (BenchmarkList — 36th percentile, rank 15 of 23)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (platform metadata); no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- HarmVideoBench (harmful video understanding): **81.3%** macro (BenchmarkList — rank 3 of 22, 90th percentile)
- SpatialUAV (UAV spatial reasoning): **45.9%** (rank 4 of 19, 83rd percentile); CheXpercept (chest X-ray) Stage 1 **87.1%**; CC-OCR V2 **61.4%** (50th percentile)
- TaxBench **15.9%** mean pass^5 (BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 62/100.** Only ToolBench-X (0.42, mid-field) is verified; every core agent harness (Terminal-Bench, Tau, GDPval) is unpublished for this ID — scored mid with low confidence.
- **Reasoning: 72/100.** HOLMES 54.31 (73rd percentile) is a good higher-order-logic signal, but GPQA/HLE are unpublished — provisional.
- **Context window: 95/100.** 1M total context (top tier band); no retrieval verification for 100.
- **Multimodal: 92/100.** Full text/image/audio/PDF input with verified elite video understanding (HarmVideoBench 81.3%, 90th percentile) and solid vision (CheXpercept 87.1%, SpatialUAV 45.9%).
- **Coding: 72/100.** SWE-Pro 93.1% (oracle patch) is top-3-of-6, but PerfCodeBench 45.9% is mid and every mainstream coding harness is unpublished — provisional.
- **Cost efficiency: 85/100.** Pricing unpublished; a Google AI Studio free tier exists (provisional — Flash-tier pricing historically cheap).
- **Overall Score: 78.6/100.** (62 + 72 + 95 + 92 + 72) / 5 = 78.6. Best-fit: fast multimodal input processing; core-agent evidence too thin to rank it against the 3.5+ Flash line — treat scores as provisional.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchmarkList, platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
