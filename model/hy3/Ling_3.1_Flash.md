# Tencent Hy3 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Tencent Hy3
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** Hy3's published benchmark set is vendor-reported (Tencent HF card). The one extraordinary number — Terminal-Bench 2.1 at 90.4 — was run under a **non-standard third-party harness** (`harborframework/terminal-bench-2.1`), so it is not comparable to official Terminus-harness runs and was not used to lift the Coding score. Independent third-party evidence is thin: AA Intelligence Index 25 is the only AA measurement captured.

## Model card

- **Name:** Hy3 (Tencent Hunyuan "Hy" line; succeeds Hy3 Preview, late April 2026)
- **Short description:** Tencent's July 2026 open-weights MoE — 295B total / 21B active with hybrid fast/slow thinking, built for agentic productivity (coding, office work, financial modeling, frontend design, game development); claims intelligence rivaling flagship open-source models 2–5× its parameter scale.
- **Provider / access:** Tencent Cloud TokenHub (API live); OpenRouter (6 providers: Tencent Cloud, DeepInfra, NovitaAI, GMICloud, Phala, AtlasCloud); Vercel AI Gateway (`tencent/hy3`); open-sourced Apache 2.0 on HF (`tencent/Hy3`), ModelScope, GitCode, CNB, GitHub (BF16 + FP8 weights); rolling out to Hermes, Kilo, Cline, OpenClaw, OpenCode, Cherry Studio; vLLM + SGLang.
- **Release / knowledge:** 2026-07-06 (preview 2026-04-24). Knowledge cutoff not captured.
- **IDs:** `tencent/hy3` (OpenRouter/Vercel); repo folder `hy3`.
- **Context window:** 256K tokens (262,144 per Vercel/llm-stats); max output 262,144 (Vercel).
- **Modalities:** Text in, text out (Vercel: "text-only Mixture-of-Experts language model"; no vision encoder in the published architecture table). Reasoning: configurable effort — no-think default, plus low and high chain-of-thought modes.
- **Pricing (as of 2026-10):** OpenRouter $0.0825 input / $0.33 output per 1M (cheapest; cache read $0.0206); Tencent Cloud TokenHub 1 RMB / 4 RMB / 0.25 RMB cached per 1M (≈$0.14/$0.55); DeepInfra $0.13/$0.53; NovitaAI/GMICloud $0.14/$0.58; Phala $0.15/$0.64; AtlasCloud $0.20/$0.80; AA median $0.14/$0.55 (75% cache discount; blended 7:2:1 ≈ $0.11/M). Hy3 preview TokenHub plan: ~$4.10/mo personal.
- **Architecture:** MoE — 295B total / 21B active; 192 experts, top-8 routing; 3.8B MTP layer parameters (1 MTP layer); 64 attention heads (GQA, 8 KV heads, head dim 128); hidden 4096; intermediate 13312; BF16 (FP8 weights also released).
- **Performance:** 86.5 tok/s median across providers (AA; above the 71.1 t/s median for similar open-weights); DeepInfra 80 tps, GMICloud/Phala 107 tps; TTFT p95 0.72s (DeepInfra). AA notes the model is "somewhat verbose" (170M tokens generated on the Intelligence Index vs 140M median).

### Raw benchmarks found

**Vendor-reported (Tencent HF card, 2026-07-06):**
- Terminal-Bench 2.1 **90.4** — under the `harborframework/terminal-bench-2.1` harness (non-standard; not the official Terminus protocol; not comparable to official runs).
- SWE-bench Multilingual **71.7** (*, official test settings per HF card).
- APEX-Agents **75.8** (mercor/apex-agents).
- DeepSWE **57.9** (datacurve/deep-swe) — the card's jumbled layout leaves 57.9 attributable to either DeepSWE or SWE-bench Pro (ScaleAI); both candidates reported, neither resolved.
- SkillsBench (benchflow) and SWE-bench Verified are listed on the card with values not captured in the source snippet; SWE-bench Verified accuracy variance across scaffoldings (CodeBuddy, Cline, KiloCode) is within 4 points (vendor claim).

**Independent:**
- Artificial Analysis Intelligence Index **25** ("well above average among comparable models", median 18).
- Blind evaluation, 270 experts on their own work tasks: Hy3 **2.67/4** vs GLM-5.1 **2.51/4**; largest margins in frontend development, data & storage, and CI/CD.
- Design Arena (OpenRouter): 3D Elo 1191, Code Categories 1183, Data Visualization 1134, Game Development 1149, UI Component 1170, Website 1189 ("Hy3 Low Models Arena").

**Vendor internal evaluations (unverified):** hallucination rate 12.5% → 5.4%; commonsense error 25.4% → 12.7%; multi-turn issue rate 17.4% → 7.9%; improved MRCR (long-dialogue, unquantified); WorkBuddy task success 72% → 90% with 34% faster completion; 47.4% fewer tokens than GLM-5.2 on document processing, 49% fewer on presentation creation; agentic workflows up to 495 steps; preview cut TTFT 54% and end-to-end response 47% with >99.99% success; 40% inference-efficiency improvement; daily token consumption up 20× since preview; CodeBuddy/WorkBuddy adoption up 6×.

## Scores

- **Tool use: 61/100.** APEX-Agents 75.8 (vendor) and the SWE-bench Verified cross-scaffold stability claim (variance ≤4 points; absolute value not captured); no Tau-bench/MCP-Atlas measurement found. Mid-band.
- **Reasoning: 58/100.** AA Intelligence Index 25 is the only independent reasoning signal; no GPQA/HLE/AIME captured; the 270-expert blind eval places Hy3 slightly above GLM-5.1 on real-world tasks. Mid-band.
- **Context window: 72/100.** 256K with documented MRCR improvements (unquantified); no long-context retrieval benchmark published.
- **Multimodal: 15/100.** Text-only model — no vision encoder in the published architecture; Vercel and llm-stats list text-only modalities.
- **Coding: 70/100.** SWE-bench Multilingual 71.7 (standard benchmark, good); DeepSWE 57.9 (if that attribution holds — strong; ambiguous with SWE-bench Pro); Terminal-Bench 2.1 90.4 is a non-standard-harness result and was discounted; blind eval shows real frontend/CI/CD strength. Upper-mid.
- **Cost efficiency: 96/100.** $0.0825/$0.33 per 1M (OpenRouter cheapest) with 75% cache discount; Tencent list 1 RMB/4 RMB; Apache 2.0 open weights — deep-discount tier.
- **Overall Score: 55.2/100.** Mean of Tool use 61, Reasoning 58, Context window 72, Multimodal 15, Coding 70 = 55.2 (Cost efficiency excluded per methodology).

> **Gap vs folder average (72.5): −17.3.** The largest gap in this project so far. Peers appear to have weighted the vendor's benchmark card (TB 2.1 90.4, SWE-bench Multilingual 71.7, DeepSWE 57.9) and the "rivals 2–5× scale" claim; this score weights the independent evidence (AA Index 25; blind eval ≈ GLM-5.1) and discounts the non-standard-harness TB result. The vendor-reported standard benchmarks are all included above — the disagreement is about how much they lift the score.

## Notes

- Verification trail: Tencent HF card `tencent/Hy3` (architecture table, evaluation results), Tencent research page (blind eval, internal metrics), Tencent Cloud techpedia (2026-07-06 release, specs, adoption), Tencent launch article (2026-04-24 preview, TokenHub pricing), OpenRouter listing (providers, pricing, Design Arena), Vercel AI Gateway (text-only, 262K, $0.105/$0.435), llm-stats (DeepInfra pricing), AA model page (Index 25, $0.14/$0.55 median, 86.5 t/s, verbosity).
- Known conflicts: DeepSWE 57.9 vs SWE-bench Pro 57.9 attribution (jumbled HF card layout); SWE-bench Verified and SkillsBench values not captured; TB 2.1 harness non-standard.
- Open questions: official Terminus-harness Terminal-Bench 2.1 run; AA full measurement set (GPQA/HLE/CritPt) for Hy3; SWE-bench Verified absolute value.
- Future sources: AA model page updates, third-party harness runs, Tencent's Hy4 release.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Tencent Hy3 Overall=55.2 (Tool=61 Reasoning=58 Context=72 Multimodal=15 Coding=70 Cost=96; vendor benchmarks only; TB 2.1 90.4 non-standard harness; AA Index 25)`
