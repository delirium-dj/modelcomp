# Qwen3 Max — findings by GLM 5.3 Flash

- Source: Alibaba / Qwen (`qwen3-max`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship (September 2025 release, updated vs the January 2025 version): coding agents, complex reasoning, tool use and RAG with a thinking mode and 100+ language support. After the April 2026 closed-weights shift to Qwen3.6-Max-Preview, it remains the most capable openly licensed Qwen model — now four Qwen generations behind (3.8 Max leads at 70.66 BenchLM).
- **Provider / access:** Alibaba DashScope API `qwen3-max` (OpenAI-compatible); OpenRouter `qwen/qwen3-max`; TokenMix gateway; OpenCode Zen `opencode/qwen3-max` (standard pricing). Chat Completions style; thinking mode; native function calling optimized for tool calling and RAG.
- **Release / knowledge:** Released September 2025 ("an updated release built on the Qwen3 series" per OpenRouter); knowledge cutoff not published.
- **IDs:** `opencode/qwen3-max` (Zen, no Free ID); `qwen/qwen3-max` (OpenRouter); `qwen3-max` (Alibaba DashScope).
- **Context window:** 262,144 tokens total, 65,536 max output (OpenRouter/meta-verified) — **BenchLM's 2026-10-10 page lists 1M, an unresolved conflict**; the verified 262K stays primary.
- **Modalities:** Text in → text out; reasoning yes (thinking mode); tool calls yes (native, purpose-optimized); JSON mode yes (OpenAI-compatible).
- **Pricing (as of 2026-10-11):** $0.78 in / $3.90 out per 1M (OpenRouter/TokenMix, confirmed); Alibaba DashScope meta lists $1.20/$6.00 tiered above 32K/128K; cached input ~$0.20 (est); Batch API ~50% (est). Paid only.
- **Architecture:** Open weights under Apache 2.0 / Qwen License variant (per TokenMix confirmed list); parameter count not published; only Qwen3.6-Max-Preview is closed-weights; self-hostable (8× H100 80GB minimum for fp16 per TokenMix).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **74.3%** (AA, independent — fills the Tau2 gap; decent); Gert Labs: **43.74%**
- Terminal-Bench / GDPval-AA / Toolathon / MCP-Atlas: no verified public score found
- Tau2-Bench "surpassing major competitors" and "strongest open-weight function calling" remain qualitative (TokenMix/dev.to, prior pass)

Reasoning / knowledge:

- AA-GPQA Diamond: **76.4%** (AA, independent) — **conflicts with the ~86% TokenMix estimate the prior pass scored on**; the independent board is materially lower
- AA-HLE: **11.9%** (AA — fills the HLE gap; floor-class); Artificial Analysis Intelligence Index: **15.6** (AA current board) — **down from the 21.3 requesty reading the prior pass cited**; recomposition accounts for the difference
- AA-LCR v1.1: **50.0%** (AA — fills the long-context gap; weak); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **24.4% accuracy / 89.9% non-hallucination row / −43.5 index** (AA — repo-worst tier)
- MMLU: **~88%** (TokenMix estimate, prior pass); AA-IFBench: **44.1%** (AA)

Coding:

- Vibe Code Bench v1.1: **3.51%** (Vals, independent — fills the gap; floor-class)
- SWE-bench Verified: **~70–75% (est)** (TokenMix, explicitly estimated — still provisional); HumanEval: **~90%** (TokenMix)
- LiveCodeBench / SciCode / SWE-Pro / Terminal-Bench: no verified public score found

Long context:

- No long-context retrieval reported (262K window verified; BenchLM's 1M listing conflicts; MRCR/RULER values not found)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 74.3% (AA) fills the Tau2 gap and supports the "strongest open-weight function calling" positioning; Gert Labs 43.74% is weak; other tool benchmarks remain absent — the band holds.
- **Reasoning: 63/100.** (Was 72 on the prior pass.) The independent AA board corrects materially: Index 15.6 (vs 21.3), GPQA 76.4% (vs the ~86% estimate), HLE 11.9% and CritPt 0.0% — two bands down on measured evidence.
- **Context window: 78/100.** Verified 262,144 tokens (200K–500K tier; BenchLM's 1M listing is a lone conflict); no retrieval percentages published, max output 65K noted as caveat.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input documented.
- **Coding: 58/100.** (Was 70 on the prior pass.) Vibe Code Bench 3.51% (Vals, independent) is floor-class measured evidence against the estimate-only SWE-V ~70–75% and HumanEval ~90% — two bands down.
- **Cost efficiency: 82/100.** $0.78/$3.90 per MTok (OpenRouter) — above the ~$0.60/$2.20 ≈ 92 reference is not reached; Alibaba's $1.20/$6.00 tiered DashScope rate scores ~80; blended 80/20 cost of ~$1.40/MTok undercuts GPT-5.4 by ~72%.
- **Overall Score: 56.4/100.** (Was 60.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (68 + 63 + 78 + 15 + 58) / 5 = 282/5 = 56.4 — lowered on the 2026-10-11 second pass as AA/Vals boards replace the estimate-heavy prior evidence. Best fit: self-hostable, cost-effective multilingual flagship for RAG/tool-calling — not for frontier reasoning, verified coding, or multimodal work; the Qwen 3.8 family supersedes it.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Qwen3 Max page with AA/Vals/Epoch citations, the prior 2026-10-08 pass on TokenMix/OpenRouter/requesty/dev.to; 2026-10-16 re-check: BenchLM 12-row refresh corroborates every row, no new data — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
