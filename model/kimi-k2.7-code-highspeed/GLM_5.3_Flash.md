# Kimi K2.7 Code HighSpeed — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's low-latency serving mode for Kimi K2.7 Code, the agentic coding fine-tune of the Kimi K2.6 base (1T-parameter open-weight MoE). Sibling of `kimi-k2.7-code`, not an alias — same weights, faster serving.
- **Provider / access:** Moonshot native Kimi API (HighSpeed mode beta-gated via the Kimi Code Beta channel), plus OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Aihubmix and other gateways — OpenAI-compatible Chat Completions-style API. Not in the current OpenCode Zen endpoint list — no Zen Free ID.
- **Release / knowledge:** Kimi K2.7 Code released 2026-06-12; the HighSpeed serving mode followed 2026-06-15 (Kimi Code Beta channel). Knowledge cutoff: no verified public data found.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`, `kimi-k2.7-code-highspeed` (OpenRouter), `aihubmix/kimi-k2.7-code-highspeed` (no Zen ID currently listed)
- **Context window:** 262,144 tokens total (HokAI + OpenRouter listings; BenchLM concurs 256K for the shared weights); max output 49,152 (HokAI) vs 32,768 (CloudPrice) — sources conflict on max output, total window corroborated at 262K.
- **Modalities:** text, image, video in (native MoonViT encoder); text, tool-calls, code out; extended thinking always on (interleaved thinking across tool calls); function calling yes; structured outputs yes.
- **Pricing (as of 2026-10-11):** Paid — Moonshot native API $0.95 / 1M input, $4.00 / 1M output, cached input $0.19 (HokAI); provider routes quote $1.90 / $8.00 with cached $0.32–$0.38 (Aihubmix, Vercel AI Gateway, Serenities); OpenRouter quoted $0.74/$3.50 by HokAI but $1.90/$8.00 by Serenities — conflicting; Cost efficiency scored on the two-source-corroborated $1.90/$8.00 rate.
- **Architecture:** Open weights under a Modified MIT License: MoE transformer, 1T total / 32B active parameters, 61 layers, 384 experts (8 routed + 1 shared per token), MLA attention, SwiGLU, 160K vocabulary, 400M-parameter MoonViT vision encoder; FP8 weights plus native INT4 (vLLM/SGLang/KTransformers serving).

### Raw benchmarks found

> Same weights as `kimi-k2.7-code` — the fresh BenchLM page for that model (updated 2026-10-10, fetched this pass) transfers to HighSpeed by the same-weights serving-mode statement. All rows below were missing from the 2026-10-02 report.

Agent / tool use:

- τ²-bench: **90.1%** (AA, independent — fills the Tau2 gap)
- MCP Mark Verified: **81.1%** (vendor-reported — corroborated on the BenchLM page; beats Claude Opus 4.8's 76.4 on that test); MCP-Atlas: **76.0%** (new)
- GDPval-AA: **1114** (AA, independent — fills the gap; normalized **27.0%** — weak)
- AA Agentic Index: **22.5%** (AA — new; weak)
- Terminal-Bench 2.1 (Vals): **67.0%** (Vals, independent — fills the gap)
- Kimi Claw 24/7: **46.9%** (vendor, corroborated); Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA, independent — fills the gap; near-frontier)
- HLE: **35.0%** (AA — fills the gap; under the 40% bar)
- Artificial Analysis Intelligence Index: **25.8%** (AA — fills the index gap; low-mid)
- AA-LCR v1.1: **79.3%** (AA — fills the long-context gap, solid); CritPt: **10.0%** (AA — fills the gap, weak)
- AA-Omniscience: **39.6% accuracy / 82.4% non-hallucination row / −10.2 index** (AA — weak)
- MLS-Bench Lite: **35.1%** (vendor — corroborated)

Coding:

- SWE-bench (Vals): **78.2%** (Vals, independent — fills the SWE gap, strong)
- LiveCodeBench (Vals): **82.1%** (Vals — fills the gap)
- AA-SciCode: **47.8%** (AA — fills the gap); AA Coding Index: **60.8%** (AA — new, mid)
- Kimi Code Bench v2: **62.0%**; ProgramBench: **53.6%** (vendor — corroborated)
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- AA-LCR 79.3% is the first measured long-context number (solid); 262K window documented; no MRCR/RULER published

Multimodal:

- Design Arena Website: **1270** (OpenRouter); native MoonViT image/video input confirmed

### Normalized scores (1–100)

- **Tool use: 85/100.** (Was 82 on the prior pass.) τ²-bench 90.1% (AA) and MCPMark 81.1% (corroborated) strengthen the agentic story alongside MCP-Atlas 76.0% and TB2.1 67.0%; GDPval 27.0% normalized and AA Agentic 22.5% keep it under 90.
- **Reasoning: 76/100.** (Was 63 on the prior pass.) The evidence vacuum is filled: GPQA 89.6% is near-frontier, AA-HLE 35.0% clears the mid bar, AA-LCR 79.3% is solid and AA Index 25.8 documents the composite — the prior score was capped entirely by absent third-party evidence.
- **Context window: 76/100.** (Was 72 on the prior pass.) Verified 262K window (200K–500K tier); AA-LCR 79.3% is the first measured retrieval-adjacent evidence — a point up for the measurement.
- **Multimodal: 78/100.** Native MoonViT vision encoder takes image and video input alongside text; text-only output keeps it below audio-out models — unchanged.
- **Coding: 80/100.** (Was 67 on the prior pass.) Vals SWE-bench 78.2% and LiveCodeBench 82.1% fill the independent-coding vacuum, with AA-SciCode 47.8% and AA Coding Index 60.8% corroborating the in-house Kimi Code Bench 62.0 — still no SWE-bench Verified row caps it.
- **Cost efficiency: 79/100.** Paid: $1.90/$8.00 per 1M (blended 3:1 ≈ $3.43/M) on the corroborated provider rate; HokAI quotes a lower native rate of $0.95/$4.00 with $0.19 cached input; the ~30% reasoning-token cut lowers real-world agentic cost further.
- **Overall Score: 79.0/100.** (Was 72.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (85 + 76 + 76 + 78 + 80) / 5 = 395/5 = 79.0 — raised materially on the 2026-10-11 second pass as the shared-weights BenchLM/AA/Vals suite converts every prior thin-evidence discount into measured scores. Best fit: MCP-heavy agentic coding stacks wanting open weights, native INT4 self-hosting, and high tool-call reliability at low latency.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai kimi-k2-7-code page updated 2026-10-10 citing the Moonshot model card, Artificial Analysis boards via benchlm.ai, Vals AI leaderboards, plus the prior 2026-10-02 HokAI/Serenities pass); scores are normalized 1–100 interpretations, not official vendor scores. K2.7-Code numbers transfer to HighSpeed via the same-weights serving-mode statement.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
