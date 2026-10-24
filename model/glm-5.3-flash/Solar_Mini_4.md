# GLM-5.3-Flash — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Z.ai (`glm-5.3-flash`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (Zhipu AI / Z.ai)
- **Short description:** Zhipu's 320B/18B MoE Flash model with 1M context, native multimodal (text+image), and low pricing — launched Aug 26, 2026; open weights (MIT) with 26 API providers.
- **Provider / access:** Z.ai API (open.bigmodel.cn) and 26 third-party providers; pay-as-you-go + free quota. Responses API.
- **Release / knowledge:** released Aug 26, 2026; knowledge cutoff not stated in my sources.
- **IDs:** `glm-5.3-flash` (Z.ai API); weights on Hugging Face (`zai-org/GLM-5.3-Flash`, MIT).
- **Context window:** 1,048,576 (1M) total (AA + Z.ai); max output not explicitly verified — see notes.
- **Modalities:** text + image in → text out; reasoning yes; CoT; streaming.
- **Pricing (as of 2026-10-24):** $0.15/M input (cache hit $0.03/M), $0.50/M output (Z.ai current); launch promo halved until Sep 9, 2026; BenchmarkList lists $0.075/$0.25 (promo route) — see conflicts.
- **Architecture:** MoE, 320B total / 18B active; 45 layers (34 linear-attention + 11 sparse-attention); 288 routed experts + 1 shared, 8 active per token; MIT license; weights on HF.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness.

**Agent / tool use**
- AutomationBench: 48.8% estimated ±10.5 pp, low (Benchgap)
- AutomationBench-AA: 60.4% estimated ±3.1 pp, medium (Benchgap)
- AA-AnalystAgent: 37.5% measured
- AA EnterpriseOps-Gym: 42.9% estimated ±6.8 pp, low
- ApprenticeBench: 32.6% estimated ±4.0 pp, low

**Terminal-Bench 2.1:** 84.3% (BenchmarkList, rank 24 of 196, 88th percentile); AA estimate 86.3% ±4.3 pp, high

**Tau3-Banking / Tau2-Bench:** Tau3 Banking 47.2% estimated ±4.0 pp, high (rank 8/183); Tau2-Bench Retail 78.2% (rank 1/8); Tau2-Bench Telecom 98.5% (rank 7/337)

**GDPval-AA:** 1773 (BenchmarkList, 99th percentile, rank 6 of 358)

**Claw-Eval / ClawProBench:** no verified public score found

**MCP-Atlas / SWE Atlas / Toolathlon:** no verified public score found for GLM-5.3-Flash in my sources

**Reasoning / knowledge**
- HLE: 39.9% (AA, rank 45 of 488, 91st percentile); HLE text-only 36.5% (rank 14 of 79) — conflict noted
- GPQA Diamond: 91.2% (BenchmarkList, rank 29 of 478, 94th percentile) vs GLM-5.3 full model 96.3% (G-6 Astra 96.3%)
- CritPt: 15.4% (weak frontier physics)
- AA-Omniscience: 8.38 index points, 23rd percentile
- Artificial Analysis Intelligence Index: 41.8 measured (#46/433, 90th percentile); AA model page rounds to 42
- AIIQ Composite IQ: 119 (67th percentile)

**Coding**
- SWE-bench Verified: 79.1% (BenchmarkList, rank 20 of 57, 66th percentile)
- LiveCodeBench: 80.6% (rank 20 of 55, 65th percentile)
- Terminal-Bench 2.1: 84.3% measured (above)
- SciCode: 51.6% (rank 49 of 307, 84th percentile)
- DeepSWE 1.1: 63.4% (rank 31 of 61, 50th percentile)
- SWE-bench Pro: 59.7% (rank 27 of 61, 57th percentile)
- SWE-bench Multilingual: 78.3% (rank 13 of 55, 78th percentile)

**Long context**
- Context Arena (GDM-MRCRv2): 59.1% (AUC 1M 36.2%) (Benchgap); flagship GLM-5.3 scores 63.4% estimated — behind the non-flash flagship
- MRCRv2: 86.0% estimated ±11.3 pp, low
- LongBench v2: not found in my sources

### Normalized scores (1–100)
- **Tool use: 78/100.** Terminal-Bench 2.1 84.3% measured, GDPval-AA 1773 (99th pct), AutomationBench-AA 60.4% estimated; caps: AutomationBench 48.8% est, AA-AnalystAgent 37.5% measured (weakest agentic row).
- **Reasoning: 68/100.** AA Intelligence Index 41.8, GPQA Diamond 91.2%, HLE 39.9%; caps: CritPt 15.4% weak, HLE text-only vs with-tools spread, "leading open-weights" claim vs full GLM-5.3 on shared evals.
- **Context window: 100/100.** 1,048,576 (1M) total (Z.ai + AA); max output not verified.
- **Multimodal: 30/100.** Text + image in, text out; video is weak (Video-MME v2 14.8%, 0th percentile).
- **Coding: 78/100.** Terminal-Bench 2.1 84.3% measured, SWE-bench Verified 79.1% (66th pct), SWE-Pro 59.7%, LiveCodeBench 80.6%.
- **Cost efficiency: 95/100.** $0.15/$0.50 per M (cheapest class; BenchmarkList promo route $0.075); note Z.ai launch promo ended Sep 9, 2026.
- **Overall Score: 71/100.** (78+68+100+30+78)/5 = 70.8 → 71.
**Conflicts noted:** (1) pricing $0.15 vs $0.075 input/M (current vs launch promo); (2) HLE text-only 36.5% vs with-tools 39.9%; (3) Context Arena vs full GLM-5.3 (Flash trails flagship); (4) AA Intelligence Index 42 (rounded) vs 41.8 (exact).
## Signature
- Provided by: **Solar Mini 4 (solar-mini-4)** — 2026-10-24
- Method: public internet research (official Z.ai page, Artificial Analysis, Benchgap, BenchmarkList, Kingy.ai, The New Stack); scores are normalized 1–100 interpretations, not official vendor scores.
## Submission checklist (complete, then remove this section before finishing)
1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.3-flash/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.3-flash/`.
4. No benchmark invented; conflicts listed above.