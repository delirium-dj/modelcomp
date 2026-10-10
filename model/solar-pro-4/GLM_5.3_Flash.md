# Solar Pro 4 — findings by GLM 5.3 Flash

- Source: Upstage AI (`upstage/solar-pro4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's proprietary agent-first flagship reasoning model built for multi-step agent work, terminal tasks, and long-document review.
- **Provider / access:** Upstage Console API, OpenRouter (`upstage/solar-pro4`).
- **Release / knowledge:** 2026-08-10 release; 2026-02 knowledge cutoff
- **IDs:** `upstage/solar-pro4`
- **Context window:** 524,288 tokens (524K total; 524K input / 131K max output; benchlm lists 512K — minor catalog discrepancy, noted)
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-09):** $0.30 in / $1.20 out per 1M tokens ($0.06 cache-hit)
- **Architecture:** Proprietary reasoning architecture

### Raw benchmarks found

> Upstage Solar Pro 4 launch post + AA rows via benchlm.ai (updated 2026-10-10). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (launch post — corroborated)
- MCP Atlas: **61.4%** (launch post — fills the previously-missing MCP row)
- BrowseComp: **49.2%** (launch post — fills)
- APEX-Agents: **18.7%** (launch post — fills; weak)
- GDPval-AA: **Elo 1277** (vendor) / **30.5%** AA-normalized (AA — fills)
- Tau3-Banking: **23.0%** (weak); Design Arena agent Elo: **1115**

Reasoning / knowledge:

- GPQA Diamond: **89.0–89.1%** (launch post + AA — corroborated; just under the 90% frontier reference)
- HLE: **29.2%** (AA — corroborated; under the 40% bar)
- CritPt: **5.4%** (AA — corroborated; weak)
- Artificial Analysis Intelligence Index: **28.1** (AA current reading — updates the earlier "42", which was a pre-recalibration snapshot)
- AA-LCR: **71.0%** (launch post via benchlm.ai — updates the earlier 74.0 reading)
- MMLU-Pro: **86.3%** (corroborated); AIME 2026: **95.3%** (corroborated); KMMLU-Pro: **79.2%** (launch post — new Korean row)
- AA-Omniscience: Index -0.8, accuracy **18.9%**, hallucination rate **24.4%** (benchlm.ai — good honesty)

Coding:

- SWE-bench Verified: **70.6%** (OpenHands scaffold — corroborated)
- LiveCodeBench: **87.8%** (launch post — fills the previously-missing LCB row)
- SciCode / AA-SciCode: **44.6%** (AA — corroborated; below the 55%+ frontier mark)

Long context:

- 512K–524K context window supported; AA-LCR 71.0% long-context reasoning score measured.

Multimodal / vision:

- Design Arena Website: **1183** (OpenRouter); text-only input and output

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 57.0% and GDPval-AA Elo 1277 are solid mid-band, but the filled MCP Atlas 61.4%, weak APEX 18.7% and Tau3 23.0% cap it below the old 74.
- **Reasoning: 82/100.** GPQA Diamond 89.0–89.1% sits at the frontier-reference threshold and AIME26 95.3% is strong; HLE 29.2%, CritPt 5.4%, the recalibrated AA Index 28.1 and AA-LCR 71.0% cap it down from the old 85.
- **Context window: 92/100.** 512K–524K token context window (500K–1M tier = 85–94) with measured AA-LCR 71.0%; no ≥98% retrieval at 512K+.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 83/100.** SWE-bench Verified 70.6%, the filled LiveCodeBench 87.8% and AIME26 95.3% are strong; SciCode 44.6% below the 55%+ mark caps it.
- **Cost efficiency: 90/100.** High cost efficiency ($0.30 in / $1.20 out per 1M tokens, $0.06 cache).
- **Overall Score: 68/100.** Mean of the five quality dimensions (70 + 82 + 92 + 15 + 83) / 5 = 68.4 → 68. Upstage's agent-first flagship — strong value with honest hallucination rates, mid-tier on absolute agentic and coding benchmarks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: Independent public web research (benchlm.ai tables updated 2026-10-10 citing the Upstage launch post and AA boards — official plus independent sources); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing MCP Atlas 61.4%, BrowseComp 49.2%, APEX 18.7%, LCB 87.8%, AA Index 42→28.1, AA-LCR 74.0→71.0%, KMMLU-Pro 79.2% — Tool 74→70, Reasoning 85→82, Coding 82→83, Overall 70→68.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_5.md`, using the same headings.
