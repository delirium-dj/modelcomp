# Kimi K2.7 Code — findings by GLM 5.3 Flash

- Source: Moonshot AI (`moonshotai/Kimi-K2.7-Code`, Modified MIT open weights)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused agentic model built on Kimi K2.6 — a 1T-parameter (32B-active) MoE with substantial improvements on real-world long-horizon coding tasks, ~30% less thinking-token usage than K2.6, and forced preserve-thinking for multi-turn agent scenarios. Works best with Kimi Code CLI. BenchLM ranks it #87 of 889 (52.39). The 2026-10-05 enrichment pass added the Vals AI / Artificial Analysis benchmark suite.
- **Provider / access:** Moonshot platform API (`https://platform.moonshot.ai`, OpenAI/Anthropic-compatible Chat Completions); kimi.com/code (Kimi Code CLI playground); open weights `moonshotai/Kimi-K2.7-Code` on Hugging Face/ModelScope; hosted via DeepInfra, Fireworks, Novita, Together. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff not disclosed.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (Hugging Face); `kimi-k2.7-code` (hosted catalogs). No Free ID on Zen.
- **Context window:** 256K tokens (262,144; verified via the Hugging Face model card and llm-stats provider table; BenchLM concurs); 262K in/out on DeepInfra/Moonshot (131K on Fireworks/Together).
- **Modalities:** text, image and video input (video is experimental and only supported on the official API); text output; reasoning yes — thinking mode forced (temperature 1.0, top-p 0.95 recommended) with preserve_thinking forced (cannot be disabled); tool calls with interleaved thinking and multi-step tool call; JSON mode.
- **Pricing (as of 2026-10-11):** $0.68 / $3.40 per 1M in/out via DeepInfra (cached input $0.136); Moonshot/Fireworks/Novita/Together $0.95 / $4.00 (cached $0.19). Open weights under Modified MIT (commercial use restricted); paid API.
- **Architecture:** Mixture-of-Experts 1T total / 32B active, 61 layers (1 dense), attention hidden 7168, MoE hidden 2048/expert, 64 attention heads, 384 experts (8 selected + 1 shared), MLA attention, SwiGLU, MoonViT vision encoder (400M), 160K vocabulary, native INT4 quantization; Modified MIT License.

### Raw benchmarks found

Agent / tool use:

- MCPMark-Verified: **81.1%** (model card via benchlm.ai — corroborated; beats Opus 4.8's 76.4)
- MCP-Atlas: **76.0%** (corroborated); Kimi Claw 24/7 Bench: **46.9%** (corroborated)
- τ²-bench: **90.1%** (AA — corroborated); GDPval-AA: **1114** (AA; normalized **27.0%** — consistent with the prior 26.3% Vals read)
- Terminal-Bench 2.1 (Vals): **67.0%** (corroborated)
- AA Agentic Index: **22.5%** (AA — new; weak)
- WildClawBench: **46.9%**; Long-Horizon Terminal-Bench: **3 tasks solved** (prior pass, HF-card-linked leaderboards)
- Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA — corroborated); HLE: **35.0%** (AA — corroborated, under the 40% bar)
- Artificial Analysis Intelligence Index: **25.8%** (AA — corroborated)
- AA-LCR v1.1: **79.3%** (AA — fills the long-context gap, solid)
- CritPt: **10.0%** (AA — fills the gap, weak); AA-IFBench: **63.1%** (AA — new)
- AA-Omniscience: **39.6% accuracy / 82.4% non-hallucination row / −10.2 index** (AA — weak)
- MLS-Bench Lite: **35.1%** (corroborated)

Coding:

- SWE-bench (Vals): **78.2%** (corroborated); LiveCodeBench (Vals): **82.1%** (corroborated); AA-SciCode: **47.8%** (corroborated)
- AA Coding Index: **60.8%** (AA — new; mid)
- CursorBench 3.2: **49.7%** (Cursor — new; weak); OpenHarmony Bench: **52.1%** (new)
- Kimi Code Bench v2: **62.0%**; ProgramBench: **53.6%** (corroborated)
- SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 79.3% is the first measured long-context number (solid); 256K window claimed; no MRCR/RULER value found

Multimodal:

- Design Arena Website: **1270** (OpenRouter); image+video input confirmed (video experimental, official API only)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration plus new fills (AA-LCR 79.3, AA Coding Index 60.8, AA Agentic 22.5, CritPt 10.0) that all land inside the existing bands.

- **Tool use: 85/100.** MCPMark-Verified 81.1 (beats Opus 4.8's 76.4), MCP-Atlas 76.0, TB2.1 67.0 and tau2-bench 90.1 — strong agentic-tool evidence; the weak GDPval 27.0% normalized, AA Agentic 22.5% and trailing GPT-5.5/Opus 4.8 on MCP-Atlas keep it under 90.
- **Reasoning: 79/100.** GPQA Diamond 89.6 is near-frontier, HLE 35.0 sits under the 40% bar, AA Index 25.8 is low-mid, and the new AA-LCR 79.3% adds a solid long-context row — a strong-but-uneven profile just below the 80s.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); AA-LCR 79.3% is the first measured retrieval-adjacent evidence; no measured retrieval at 512K+.
- **Multimodal: 82/100.** Image + video input (video experimental, official API only) with the MoonViT encoder; text-only output — the +video-in band is 75–90.
- **Coding: 83/100.** The Vals AI suite (SWE-bench 78.2%, LiveCodeBench 82.1%, AA-SciCode 47.8%) plus AA Coding Index 60.8% confirm genuinely strong coding; CursorBench 3.2 49.7% and the head-to-head losses to GPT-5.5/Opus 4.8 keep it below the top packages.
- **Cost efficiency: 92/100.** $0.68/$3.40 per 1M (DeepInfra) sits at the ~$0.60/$2.20 = ~92 methodology reference; Moonshot's own $0.95/$4.00 is ~88; open weights as an extra lever.
- **Overall Score: 81.0/100.** Five-dim mean per `RULES.md` (Cost excluded): (85 + 79 + 76 + 82 + 83) / 5 = 405/5 = 81.0 — unchanged. Best-fit: a cost-efficient open-weight agent worker for MCP-based tool stacks and multi-day coworking tasks — the Vals/AA suite confirms genuinely strong coding and near-frontier GPQA behind the old thin-evidence discount.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Moonshot K2.7-Code model card, Artificial Analysis independent boards (LCR/CritPt/Coding Index/Omniscience) via benchlm.ai, Vals AI leaderboards, plus the prior 2026-09-24/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.md`, using the same headings.
