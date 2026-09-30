# Kimi K2.7 Code — findings by Kimi K3

- Source: Moonshot AI / Kimi K2.7 Code (`kimi-k2.7-code`; HF `moonshotai/Kimi-K2.7-Code`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's coding-specialized K2.7 variant — a 1T-parameter MoE (32B active, 384 experts) released June 12, 2026 under a Modified MIT license, with forced always-on thinking (preserve_thinking, ~30% fewer thinking tokens than K2.6) and strong MCP tool use (MCP Atlas 76.0%, MCP Mark Verified 81.1%) in a 256K window (codersera.com from official model card).
- **Provider / access:** Moonshot/Kimi API (`api.moonshot.ai/v1`, also Anthropic-compatible endpoint); open weights `moonshotai/Kimi-K2.7-Code` (HF, 2026-06-12); OpenRouter (`moonshotai/kimi-k2.7-code`, 11 providers); native INT4, serve via vLLM/SGLang/KTransformers (codersera.com).
- **Release / knowledge:** 2026-06-12 (HF + codersera.com); knowledge cutoff not verified.
- **IDs:** `kimi-k2.7-code` (Moonshot API and OpenCode Zen, $0.95/$4); `moonshotai/kimi-k2.7-code` (OpenRouter).
- **Context window:** 256K (262,144 tokens; OpenRouter lists max output 262,144) (llm-stats.com, openrouter.ai).
- **Modalities:** text/image/video in (MoonViT 400M vision encoder per official model card; Design Arena row on benchlm.ai); text out; reasoning forced-on (`preserve_thinking` cannot be disabled); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** official Moonshot API $0.95/M input ($0.19/M cache hit), $4.00/M output (codersera.com); OpenRouter from $0.6562/$3.30 (openrouter.ai); llm-stats.com lists $0.68/$0.136/$3.40 hosted.
- **Architecture:** 1T total params (~1.1T on disk), MoE with 384 experts (8 routed + 1 shared active per token), 32B active, 61 layers, MLA attention, 160K vocab; Modified MIT open weights (codersera.com from HF model card).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **90.1%** (benchlm.ai)
- MCP Atlas: **76.0%**; MCP Mark Verified: **81.1%** (vendor-reported via benchlm.ai; codersera confirms both as model-card numbers, up from K2.6's 69.4/72.8)
- Kimi Claw 24/7: **46.9%** (benchlm.ai; up from K2.6's 42.9)
- Economic agentic: GDPval-AA **1114 Elo** (26.3% normalized); AA Agentic Index: **22.5%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **67.0%** (benchlm.ai)
- TB 2.1 primary / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **89.6%** (benchlm.ai)
- HLE (AA-HLE): **35.0%** (benchlm.ai)
- AA-LCR: **79.3%**; CritPt: **10.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **25.8**; BenchLM overall **50.26/100** (benchlm.ai, listed 2026-09-29; previously 50.44, #72 of 507)
- AA-Omniscience Accuracy / Hallucination Rate: **39.6% / 82.4%** (benchlm.ai)
- AA-IFBench: **63.1%** (benchlm.ai)

Coding:

- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **78.2%** (benchlm.ai)
- Kimi Code Bench v2: **62.0%** (vendor model-card metric; up from K2.6's 50.9, +11.1 pts per codersera.com)
- ProgramBench: **53.6%**; CursorBench 3.2: **49.7%**; MLS-Bench Lite: **35.1%**; OpenHarmony Bench: **52.1%** (benchlm.ai)
- AA-SciCode: **47.8%**; AA Coding Index: **60.8** (benchlm.ai)

Long context:

- AA-LCR 79.3% within 256K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1277 Elo** (benchlm.ai); image+video input via MoonViT encoder per official model card (codersera.com).

### Normalized scores (1–100)

- **Tool use: 76/100.** τ² 90.1%, MCP Atlas 76.0%, MCP Mark 81.1%; capped by GDPval 1114 and Agentic Index 22.5%.
- **Reasoning: 72/100.** GPQA 89.6%, LCR 79.3%; capped by HLE 35%, CritPt 10%, hallucination 82.4%.
- **Context window: 72/100.** 256K window (70s band) with LCR 79.3%; below the 1M tier.
- **Multimodal: 62/100.** Image+video input (MoonViT) but no audio — below the omni band; thin verified rows (Design Arena only); text-only output.
- **Coding: 74/100.** LiveCodeBench 82.1%, SWE-bench 78.2%, Kimi Code Bench v2 62.0% solid for a code specialist; capped by Coding Index 60.8.
- **Cost efficiency: 90/100.** Official $0.95/$4.00 per 1M ($0.19 cache hit) in the ~$0.95/$4 band, plus ~30% fewer billed thinking tokens than K2.6 and OpenRouter listings from $0.66/$3.30; open weights free to self-host.
- **Overall Score: 71.2/100.** Mean of the five quality dims (76+72+72+62+74)/5 = 71.2. Best fit: open-weight coding assistants with MCP tool stacks; superseded by Kimi K3 for frontier reasoning and 1M-context work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (codersera.com complete guide from official HF model card, benchlm.ai scorecard, llm-stats.com, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: pricing now verified ($0.95/$4.00, $0.19 cache hit; OpenRouter $0.6562/$3.30; Zen ID `kimi-k2.7-code`); architecture declassed to 1T/32B active, 384 experts, MLA, 61 layers; MoonViT 400M adds video input (modalities updated); release pinned to 2026-06-12; vendor K2.6→K2.7 deltas and ~30% thinking-token cut noted; BenchLM 50.44→50.26; Cost 85→90 per band.
- Future sources: add a new file next to this one using the same headings.
