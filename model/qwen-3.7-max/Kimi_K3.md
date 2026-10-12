# Qwen3.7 Max — findings by Kimi K3

- Source: Alibaba / Qwen3.7 Max (`qwen-3.7` flagship)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** Alibaba's pre-3.8 flagship of the Qwen3 line — the model Qwen3.8 Max replaced in August 2026. Strong math (HMMT 97.1%), long-context retrieval (MRCRv2 90.4%), and LiveCodeBench 91.6%.
- **Provider / access:** Alibaba Model Studio / DashScope (`qwen3.7-max`), OpenRouter; OpenCode Zen route `opencode/qwen3.7-max` live with declining usage (~#45, 47.7% retention).
- **Release / knowledge:** Released 2026-05-21 (OpenCode Data, newly verified — first pass had "date not verified"); cutoff not published.
- **IDs:** `qwen/qwen3.7-max`, `alibaba/qwen3.7-max` (no Free-tier ID verified on Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** **CONFLICT**: my first pass recorded text/image input (Design Arena row visible); the current OpenCode Data catalog lists **text-only** input (reasoning + tool calls). Noted; catalog governs the hosted route, so low Multimodal stands.
- **Pricing (as of 2026-10-11):** $2.50/M input, $7.50/M output, $0.50 cached input, $3.13 cache write (OpenCode Data catalog — verified now; matches the emergent.sh Qwen pricing table).
- **Architecture:** proprietary (Alibaba/Qwen); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (official qwen.ai/blog?id=qwen3.7 via OpenCode Data; matches benchlm.ai; TB 2.1 Vals: 61.0%)
- τ²-bench (Tau2-Bench): **94.7%** (benchlm.ai)
- GDPval-AA: **1190 Elo** (30.7% normalized) (benchlm.ai)
- Claw-Eval: **65.2%**; QwenClawBench: **64.3%**; QwenWebBench: **1568**; ResearchClawBench: **18.7%** (benchlm.ai)
- BFCL v4: **75.0%**; MCP Atlas: **76.4%** (official blog; matches benchlm.ai); HLE w/ tools: **53.5%**; VITA-Bench: **47.9%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (official blog; GPQA-D 92.4; AA 92.3%; Vals 90.2%)
- HLE: **41.4%** (official blog; matches benchlm.ai); AA-HLE 40.5%; HLE w/ tools 53.5%
- MRCRv2: **90.4%**; AA-LCR: **79.0%**; CritPt: **13.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.5**; BenchLM overall **63.18/100, #34 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **31.1% / 25.6%** — very low hallucination (benchlm.ai)
- HMMT Feb 2026: **97.1%**; IMOAnswerBench: **90.0%**; MMLU-Pro: **89.6%**; MMLU-Redux: **95.0%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.4%** (official qwen.ai blog via OpenCode Data; matches benchlm.ai); SWE-bench Pro: **60.6%** (official; matches); SWE Multilingual: **78.3%** (official; matches); SWE-bench (Vals): **68.8%** (benchlm.ai)
- LiveCodeBench: **91.6%** (Vals 87.1%) (benchlm.ai)
- SciCode: **53.5%** (official blog; matches); AA-SciCode: **49.5%**; NL2Repo: **47.2%** (official; matches); AA Coding Index: **66.0** (benchlm.ai)

Long context:

- MRCRv2: **90.4%** (multi-round retrieval, up to 1M window) (benchlm.ai); 66K output catalog-verified.

Multimodal:

- Design Arena Website: **1283 Elo** (benchlm.ai); hosted catalog route lists text-only input — vision evidence thin on this exact ID either way.

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged: τ²-bench 94.7%, BFCL v4 75.0%, MCP Atlas 76.4% (official-confirmed), Claw-Eval 65.2%; capped by GDPval-AA 1190 and Agentic Index ~24%.
- **Reasoning: 82/100.** Unchanged: HMMT 97.1%, GPQA 92.4% (official-confirmed), MRCRv2 90.4%, low hallucination (25.6%); capped by HLE ~41%, CritPt 13.4%, AA Index 29.5.
- **Context window: 88/100.** Unchanged: 1M window with MRCRv2 90.4% measured; 66K output now verified.
- **Multimodal: 66/100.** Unchanged: no public vision rows at this ID; current catalog lists text-only hosted input, consistent with the low band.
- **Coding: 81/100.** Unchanged: LiveCodeBench 91.6%, SWE-bench Verified 80.4% (official-confirmed); capped by SWE-bench Pro 60.6% and shallow repo-level scores.
- **Cost efficiency: 78/100.** Verified: $2.50/$7.50 per 1M — a third of US flagship pricing; superseded by cheaper-stronger 3.8 Max.
- **Overall Score: 80/100.** Mean of the five quality dims (82+82+88+66+81)/5 = 79.8 → 80 (unchanged). Best fit: Alibaba-stack math/agent workloads at low cost; 3.8 Max dominates it on capability per dollar.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official qwen.ai/blog?id=qwen3.7 table transcribed by OpenCode Data `alibaba/qwen3-7-max` incl. release/pricing/Zen-usage; benchlm.ai scorecard + emergent.sh pricing from first pass). Second pass over my 2026-09-24 file: verified release (2026-05-21), 66K output and pricing; flagged the image-vs-text-only modality conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
