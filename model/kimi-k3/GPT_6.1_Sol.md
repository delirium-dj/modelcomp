# Kimi K3 — findings by GPT 6.1 Sol

- Source: Moonshot AI / `kimi-k3`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Open-weight multimodal MoE for long-horizon coding and knowledge agents. Native weights and hosted API limits are distinguished from quantized community deployments.
- **Provider / access:** Moonshot base `https://api.moonshot.ai/v1`, Chat Completions; model card also documents Anthropic-compatible access and self-hosting [S1,S2].
- **Release / knowledge:** July 16, 2026 according to both independent evaluators [S4,S5]; precise knowledge cutoff not verified.
- **IDs:** `kimi-k3`, weights `moonshotai/Kimi-K3`; no Zen Free ID verified. API access requires at least a $1 top-up, separate from per-token billing [S2].
- **Context window:** 1,048,576. Official current `max_completion_tokens` defaults to 131,072 and may be set up to 1,048,576; this is a configuration ceiling, not a promise of a full million output tokens alongside a full input window [S1,S2].
- **Modalities:** Text/image/video input, text output. API quickstart explicitly demonstrates video even though the model-summary row and AA profile only say text/image. Always-on thinking; low/high/max effort, default max. Structured output, required/custom/dynamic tool calls and preserved full assistant history supported [S1,S2].
- **Pricing (as of 2026-10-16):** Official $3 input / $0.30 cached read / $15 output per million tokens; cache writes $3 (5m) or $6 (1h), flat across context lengths [S3]. Open weights do not make managed inference free.
- **Architecture:** 2.8T total/104B active, 93 layers, 69 KDA plus 24 gated MLA layers, 16 of 896 routed experts plus 2 shared; MoonViT-V2 vision encoder. Native MXFP4/MXFP8 quantization-aware training [S1]. Custom Kimi K3 License, not MIT/Apache: commercial permissions include conditional large-service obligations [S7].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.3% Kimi Code**, vendor; independent Vals **80.90%** across three trials, July snapshot [S1,S5].
- Terminal-Bench 4.0 **17.17% ±0.51**, current Vals max [S5]. Different suite from 2.1.
- Toolathlon-Verified **76.5%**, MCPMark-Verified **94.5%**, MCP-Atlas **84.2%**, vendor table; MCP-Atlas uses 500 public tasks, 100 turns and Gemini 3.1 Pro judge [S1].
- BrowseComp **91.2%** with compaction at 300K, versus **90.4%** without context management; AutomationBench **30.8%** on 600 public tasks [S1].
- GDPval-AA v2 **1686 Elo**, AA-Briefcase **1548 Elo**, Tau3-Banking **33.4%**, cited by model card from AA July 23 snapshot, not newly rerun by Moonshot [S1].
- Finance Agent v2 **53.11% ±0.37**, Harvey Legal Agent **12.92% ±2.68**, Vals current [S5]. Vendor Harvey Lab-AA **94.6%** is criterion-pass rate, not all-pass success [S1].
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond **93.5%** vendor [S1], **92.93% ±1.31** Vals [S5].
- HLE-Full **43.5% without tools / 56.0% with tools**, vendor max [S1].
- CritPt **23.4%**, AA-LCR **74.7%**, SciCode **58.7%**: model-card citations to AA's July 23 measurements [S1].
- AA Intelligence Index **44**, current v4.3.2; page's **#4/120 is the open-weight comparison class**, not fourth across all proprietary and open models. AA measures **$2.00/task**, **43.9 output tokens/s** [S4]. Historical index **57** and hallucination **51%** appear in Puter's July review as attributed AA snapshot [S6], not current independently rechecked subscores.
- Vals Index **50.30% ±0.99, #30/48** current, versus launch **57.81%**; different snapshots retained [S5].
- MLCR current exact result: no verified public score found.

Coding:

- DeepSWE **67.5% Kimi Code**, model card separately notes **67.3% mini-SWE-agent**; SWE-Marathon **42.0%**, H20-calibrated pre-v1.1 branch, not official final-suite equivalence [S1].
- FrontierSWE **81.2 dominance score**, not a percent of fully solved tasks; ProgramBench **77.8** vendor harness metric, not equated with Vals fully resolved **2.00% ±0.99** [S1,S5].
- Vals LiveCodeBench **87.19% ±0.97**, Vibe Code Bench v1.1 **84.97% ±2.75**, Code Migration **16.10% ±4.10**, SWE-bench Multimodal **35.83% ±2.19** [S5].
- SWE-bench current **93.40% ±1.11**; Vals launch specifically identifies **95.10% on the Verified Index subset**, not an interchangeable full-suite score [S5].
- SWE-Pro: no verified exact result found.

Long context and multimodal:

- No verified exact-model MRCR/RULER full-window retrieval score found. AA-LCR 74.7% is reasoning, not a capacity guarantee [S1].
- MMMU-Pro **81.6% without Python / 83.4% with Python**, vendor [S1], versus **88.15% ±0.78** Vals [S5]. Retain protocol differences rather than averaging.
- Video-MME with subtitles **90.0%**, OmniDocBench **91.1%**, vendor [S1].
- Puter's original single-call visual-difference test caught **5/5 planted CSS changes**, no invented differences, one imprecise layout description; useful small spot check, not a general benchmark [S6].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Kimi K3" official Moonshot model card`; `"Kimi K3" independent Artificial Analysis benchmarks`; `"Kimi K3" review pricing context limitations`. Read full official HF card and API quickstart/pricing, raw license, AA current profile, Vals, and Puter's original visual-review test. A guessed AA article returned 404 and is not evidence.

The official current card and API resolve outdated launch-review claims: weights are now released, effort is configurable despite always-on thinking, and pricing includes cache writes [S1–S3,S6]. Puter's “Sonnet pricing” comparison is July-dated, not a current price identity. Strong vendor older-suite coding results coexist with weak modern Vals terminal/migration tasks; harnesses and task families are not interchangeable. FrontierSWE dominance, ProgramBench reward versus fully resolved, and Harvey criterion-pass versus all-pass are especially easy to mislabel [S1,S5]. Some card figures are re-citations from AA/Vals rather than independent vendor reruns, so triangulation does not multiply their measurement count. The current license was read directly, avoiding the inaccurate shorthand that all open weights are unrestricted open source [S7].

### Normalized scores (1–100)

- **Tool use: 88/100.** Rich verified tool support and strong older terminal/MCP evidence; modern terminal and uneven professional-agent scores cap confidence [S1,S2,S5].
- **Reasoning: 90/100.** GPQA around 93%, HLE 43.5/56 and scientific evidence support strong reasoning; long-context reasoning and present index prevent ceiling credit [S1,S4,S5].
- **Context window: 95/100.** Official million-token capacity, without verified ≥98% retrieval beyond 512K [S1,S2].
- **Multimodal: 87/100.** Verified image/video and document understanding, with independent visual evidence; no native audio or media output [S1,S2,S5,S6].
- **Coding: 90/100.** Strong DeepSWE, scientific coding and LiveCodeBench evidence; weak migration/modern terminal and metric mismatches limit a frontier-universal claim [S1,S5].
- **Cost efficiency: 64/100.** $3/$15 is moderate paid pricing with cheap cache reads, but always-on thinking, cache writes and slow decode matter [S2–S4].
- **Overall Score: 90/100.** (88 + 90 + 95 + 87 + 90) / 5 = 90; suitable for open-weight multimodal coding agents with harness-specific validation. Cost excluded.

### Sources

- [S1] https://huggingface.co/moonshotai/Kimi-K3 — official architecture, full benchmark table and extensive harness footnotes.
- [S2] https://platform.kimi.ai/docs/guide/kimi-k3-quickstart — official current API, video, effort and output limits.
- [S3] https://platform.kimi.ai/docs/pricing/chat — official flat pricing and separate cache writes.
- [S4] https://artificialanalysis.ai/models/kimi-k3 — current independent index, comparison-class ranking and economics.
- [S5] https://www.vals.ai/models/kimi_kimi-k3 — independent current/historical measurements and configurations.
- [S6] https://developer.puter.com/blog/kimi-k3-review/ — original single-page visual spot check and historical launch review.
- [S7] https://huggingface.co/moonshotai/Kimi-K3/raw/main/LICENSE — actual custom license text.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research using three distinct searches, primary model/API/license evidence, multiple independent operators and an original review test. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
