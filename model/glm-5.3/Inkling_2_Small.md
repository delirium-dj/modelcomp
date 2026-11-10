# GLM-5.3 — findings by Fledge Alpha

- Source: Z.ai (`glm-5.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's Aug 14, 2026 flagship; same GLM-5.2 base, gains from scaled post-training; first Z.ai release with emergent cyber capabilities and always-on thinking.
- **Provider / access:** Z.ai API (`glm-5.3`), GLM Coding Plan ($18/mo+), OpenAI/Anthropic-compatible endpoints; weights on Hugging Face as `zai-org/GLM-5.3` under a custom GLM-5.3 License (MLaaS revenue >$10B triggers a Z.ai review).
- **Release / knowledge:** 2026-08-14.
- **IDs:** `zai-org/GLM-5.3`
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** Text input/output (no image/audio/video on the 5.3 ID — Gemini 3.1-analogous multimodal GLM lives on `glm-5.3-flash`).
- **Pricing (as of 2026-10-02):** $1.40/M in, $0.26/M cached, $4.40/M out — identical to GLM-5.2's card.
- **Architecture:** Same GLM-5.2 base (per Z.ai, every gain is post-training); thinking now always-on with low/high/max (max default) — disable flag removed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2** (vendor) / **83.9** (AA independent); Terminal-Bench 3.0: **28.3** (vendor); Terminal-Bench 4.0: not published
- AutomationBench (v1.0.6): **48.2%** (vendor; +22 over GLM-5.2's 26.2)
- Agents' Last Exam: **28.5%** (vendor, 105-task CLI split)
- GDPval-AA v2 Elo: **1769** (Z.ai, 2026-09-04) — highest published for a Z.ai row

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA) / vendor 88.1 in launch table
- HLE no tools: **42.3%** (AA); HLE with tools: **62.5%** (vendor)
- MMLU-Pro: **86.8%** (vendor); AIME 2026: 99.2 for GLM-5.2; GLM-5.3 not separately published

Coding:

- Terminal-Bench 2.1: 83.9 AA / 88.2 vendor
- DeepSWE v1.1: **69.0%** (Datacurve independent) / 66.9 vendor — +25 over GLM-5.2's 44
- SWE-bench Verified: **95.4%** (vals.ai, rank 6/86, saturated)
- SWE-Marathon v1.1: 42.5 (Claude Code harness), FrontierSWE: 78.1 (Proximal)
- CyberGym: **84.5%**; ExploitBench: 54.4; ExploitGym 2h/6h: 105/130

Long context: 1M window; no independent full-window MRCR row; vendor reports 1M-context evaluation via FrontierSWE Proximal at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 83.9 (AA) and AutomationBench 48.2% (vendor) are strong; Terminal-Bench 3.0 28.3 vendor row still trails the closed frontier.
- **Reasoning: 82/100.** GPQA 91.7 AA, HLE-w/tools 62.5 (vendor), GDPval-AA v2 Elo 1769 (Z.ai) — solid frontier tier for an open-weight row.
- **Context window: 94/100.** Flat 1M window, no tiered price reset on standard requests, and 128K max output.
- **Multimodal: 15/100.** Text-only — same restriction as GLM-5 (the multimodal GLM-5.3 lives on `glm-5.3-flash`).
- **Coding: 86/100.** DeepSWE 69 AA-adjacent independent, SWE-bench Verified 95.4 (vals.ai saturated), FrontierSWE 78.1 — the open-weight frontier coding row.
- **Cost efficiency: 84/100.** $1.40/$4.40 with 90% cache discount; weights land on HF under the custom GLM-5.3 License.
- **Overall Score: 71.8/100.** Half-up mean of the five non-cost dims: (82+82+94+15+86)/5 = 359/5 = 71.8 → 72. Reconciliation below.

> Reconciled: half-up mean of the five non-cost quality dims = **72**.

- **Overall Score: 72/100.**

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Z.ai GLM-5.3 post, The Model Gap, tensorfeed, TheRouter, datallmlab, LLM API Gateway, AICloud changelog); scores are normalized 1–100 interpretations. Independent vs vendor runs labeled inline.
- Future sources: add a new file next to this one using the same headings.
